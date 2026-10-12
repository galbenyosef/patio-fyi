// assets__sim-DKJ0nrRU 01 — the
// Lines 1-356 of readable/assets__sim-DKJ0nrRU.pretty.js (statement-aligned).
// SALIENT player simulation. ISOMORPHIC: no three, no DOM, no Node, no wall clock, no Math.random.
// stepPlayer(entity, input, world, dt) is pure w.r.t. its arguments (mutates only `entity`) and deterministic.
//
// Collision model: the soldier is a vertical capsule (radius RADIUS, height by stance, `pos` = feet).
// It collides with world.map.getHeight/getNormal (terrain) and with every collider in world.map.colliders that
// has an `aabb`. Colliders may carry optional extras that this sim understands:
//   solid: false            never a wall (triggers, pits, decoration)
//   floorHeight(x, z) -> y  walkable surface inside the aabb footprint (ramps, stairs). Treated as ground when
//                           within STEP_UP of the feet, as a wall otherwise.
//   floorNormal(x,z,out)    optional exact surface normal (else finite differences of floorHeight)
//   floorThickness: t       with floorHeight: the solid is only the slab [surface - t, surface]; the space below it
//                           is open (walk under a stair flight), its underside a sloped ceiling. Else solid to aabb y0.
//   overrideGround: true    with floorHeight: replaces terrain height inside the footprint (pits / pools)
// Water: `world.map.waterLevel` (surface y) plus an optional `world.map.waterBounds = [minX,minZ,maxX,maxZ]`.
//   noPlayer: true          ignored by the player sim entirely
// Private per-entity state lives in entity.ext.pl (flat numbers, cloneable) — see initPlayer().
//
// PRESENTATION STATE AND REMOTE ENTITIES (ARCHITECTURE §7.0 decision 1): hitboxes(), capsuleHeight() and
// eyeHeight() are exact only where `entity.ext.pl` exists (the local predicted soldier and every soldier on the
// server). On a client, a *remote* soldier carries only the replicated fields, so those queries fall back to
// presentationFromState(): capsule height from `entity.stance` and lean from the replicated STATE.LEAN_L/LEAN_R
// bits. That reconstruction is exact except during the 0.22–0.6 s stance blend and the 0.11 s lean ramp. See
// docs/CORE_REQUESTS.md "player — replicate stance blend + lean" for the two bytes that would close the gap.

import { STATE, BTN, STANCE } from "../core/world.js";
import { carryLift } from "../demo/lifts-sim.js";
import { hangarRide } from "../demo/hangar-sim.js";
import { basculeRide } from "../demo/bascule-sim.js";
import { mesaRide } from "../demo/mesa-sim.js";
import { zipGrab, zipAttach, zipStep } from "./zipline.js";
import {
  ladderGrab,
  ladderAttach,
  ladderStep,
  ladderLook,
  LADDER_OFF,
} from "./ladder.js";

export const RADIUS = 0.4;
export const HEIGHTS = Object.freeze([1.8, 1.3, 0.55]); // by stance: stand, crouch, prone
export const EYE_DROP = 0.15; // eye = capsule height - EYE_DROP
export const PRONE_EYE_FWD = 0.5; // prone: the eye sits this far in front of the capsule axis (head forward)
export const SPEEDS = Object.freeze({
  walk: 4.2,
  sprint: 6.6,
  ads: 2.6,
  crouch: 2.2,
  prone: 1.0,
  swim: 2.4,
});
export const GROUND_ACCEL = 40;
export const FRICTION = 9;
export const STOP_SPEED = 1.6;
export const AIR_CONTROL = 0.25;
export const JUMP_SPEED = 4.8;
export const GRAVITY = 20;
export const STEP_UP = 0.5;
export const SLOPE_LIMIT_DEG = 50;
export const COYOTE_TICKS = 3; // a jump is still granted this many ticks after the feet leave the ground
export const JUMP_BUFFER_TICKS = 3; // a jump pressed this many ticks before touchdown still fires on landing
export const STANCE_TIME = Object.freeze([
  [0, 0.22, 0.6],
  [0.22, 0, 0.45],
  [0.6, 0.45, 0],
]); // seconds [from][to]
export const LEAN_OFFSET = 0.45; // camera lateral offset at full lean
export const LEAN_BODY_OFFSET = 0.3; // head/torso hitbox AND rendered body lateral offset at full lean
export const LEAN_ROLL = 0.2;
export const LEAN_RATE = 9;
export const GROUND_SNAP = 0.55;
export const TERMINAL = 40;
// Eye catch-up after a step: a max-rate follower, not an exponential. The rate floor keeps small steps snappy and
// the gain term lets it keep up with a sprint up 0.2 m risers (4.4 m/s of climb) without the lag ever running away.
export const EYE_CATCHUP_RATE = 2.6; // m/s
export const EYE_CATCHUP_GAIN = 5.5; // extra m/s per metre of accumulated lag
export const MAX_DEPEN = 0.8; // m: hard cap on one tick of horizontal depenetration (never teleport)
// Solid boxes are collided as round-cornered boxes: the closest point is taken on a box inset by this much and the
// contact radius grows by the same amount. Flat faces behave identically; corners get a CORNER_ROUND-radius fillet,
// so brushing a crate corner deflects instead of catching a pure face normal and stopping dead.
export const CORNER_ROUND = 0.08;
export const SWIM_DEPTH = 1.05; // water depth (surface - feet) at which walking becomes swimming
export const SWIM_EXIT_DEPTH = 0.95;
export const SWIM_SURFACE = 1.45; // feet sit this far below the surface when floating
export const WADE_DEPTH = 0.3;
export const LAND_DIP_MIN = 3; // m/s of fall speed before a landing registers a dip
// Fall damage and the parachute (owner 2026-09-27). A landing's drop is the height fallen since the apex, capped by
// the height its impact speed implies (v^2 / 2g), so a slide, lift or teleport never counts as a fall. The authority
// turns the drop into damage (src/player/fall-damage.js); the parachute is plain predicted movement.
export const CHUTE_MIN_HEIGHT = 9; // m above the ground below before Space opens a parachute
export const CHUTE_SINK = 4.2; // m/s steady descent under canopy (lands with no damage)
export const CHUTE_GLIDE = 7; // m/s horizontal steering speed under canopy
export const CHUTE_BRAKE = 3.2; // 1/s: how fast the canopy bleeds fall speed toward CHUTE_SINK
export const CHUTE_STEER = 1.4; // 1/s: how fast horizontal speed follows the steering input
export const BACKPEDAL = 0.8;
export const WALL_SLIDE_KEEP = 0.85; // fraction of lost speed restored along the wall tangent when sliding
export const SLOPE_DRAG = 0.3; // uphill slowdown: speed /= 1 + SLOPE_DRAG * rise-per-metre along the wish dir
// Mantling: a jump pressed while moving into a solid box whose top is above STEP_UP but within MANTLE_MAX of the
// feet climbs onto it instead of bouncing off; a live jump (STATE.JUMPING) that carries the capsule into such a
// ledge grabs it too, so "jump forward onto the ledge" works without a second press. The climb is a scripted
// rise-then-forward path over MANTLE_TIME with collision suspended; the landing spot must have full headroom.
export const MANTLE_MAX = 1.55; // m above the feet the ledge top may be (chest height for a 1.8 m soldier)
export const MANTLE_REACH = 0.55; // m beyond the capsule edge in which a ledge face is detected
export const MANTLE_TIME = 0.4; // s for the whole climb
// Terrain ledges (banks, rock shelves, crater lips) climb the same way. The reach is arm's length ("melee" distance)
// and the lip may be a little higher than a box, since a bank gives hand- and footholds a sheer wall does not.
export const TERRAIN_MANTLE_MAX = 1.9; // m above the feet the terrain lip may be
export const TERRAIN_MANTLE_REACH = [0.55, 0.95, 1.4]; // m beyond the capsule edge probed for a standable lip
export const MANTLE_EXIT_SPEED = 1.6; // m/s carried forward over the lip when the climb ends
// Pull-up (owner 2026-10-04: "roof hopping ability is non existent"). In the air, during a jump, the hands catch a
// ledge up to CLIMB_REACH above the feet (fingertips of a 1.8 m soldier with the arms up), so a standing jump climbs
// a ~2.9 m wall and a running jump across an alley catches the next roof's parapet when it stands a storey-ish higher.
// The extra height costs time: CLIMB_TIME_PER_M per metre of rise beyond MANTLE_MAX.
export const CLIMB_REACH = 2.35;
export const CLIMB_TIME_PER_M = 0.3;
// Bots (e.ext.bot) only climb onto a box at least this wide both ways (owner 2026-10-07, scope shot: "a lot of bots on
// walls"). A stuck bot's jump against a storefront caught the 0.25 m awning and sill strips 3 m up, then went sill to
// sill up the facade. Players keep the thin-rail and parapet climbs.
export const BOT_MANTLE_MIN = 1.0;
// Climbing over (owner 2026-10-02: "add the climb function over fences"). A jump into a thin upright obstacle - a
// fence, a railing, a low wall - whose top is too high to step but within VAULT_MAX of the feet, with somewhere to
// stand on the far side at about the same level, climbs over it instead of onto it: up to the top, across, down the
// far side. Taller obstacles take longer. Thick walls (> VAULT_THICK) and short posts or trunks (< VAULT_MIN_LEN wide)
// are not climbed over; a far side that drops away (a balcony rail) falls back to the plain mantle.
export const VAULT_MAX = 2.5; // m above the feet the top may be (a 2.4 m panel fence with a pull-up)
export const VAULT_THICK = 0.7; // m: thicker than this is a wall to climb onto, not over
export const VAULT_MIN_LEN = 0.9; // m: narrower than this (posts, trunks, bollards) is walked round
export const VAULT_REACH = 0.6; // m beyond the capsule edge in which the near face is detected
export const VAULT_DROP = 1.2; // m the far side may be below the feet
export const VAULT_TIME = 0.45; // s for a climb over a waist-high obstacle ...
export const VAULT_TIME_PER_M = 0.3; // ... plus this per metre of height

export const CONSTANTS = Object.freeze({
  TERRAIN_MANTLE_MAX,
  RADIUS,
  HEIGHTS,
  EYE_DROP,
  SPEEDS,
  GROUND_ACCEL,
  FRICTION,
  STOP_SPEED,
  AIR_CONTROL,
  JUMP_SPEED,
  GRAVITY,
  STEP_UP,
  PRONE_EYE_FWD,
  SLOPE_LIMIT_DEG,
  COYOTE_TICKS,
  JUMP_BUFFER_TICKS,
  STANCE_TIME,
  LEAN_OFFSET,
  LEAN_BODY_OFFSET,
  LEAN_ROLL,
  LEAN_RATE,
  GROUND_SNAP,
  TERMINAL,
  EYE_CATCHUP_RATE,
  EYE_CATCHUP_GAIN,
  MAX_DEPEN,
  CORNER_ROUND,
  SWIM_DEPTH,
  SWIM_EXIT_DEPTH,
  SWIM_SURFACE,
  WADE_DEPTH,
  LAND_DIP_MIN,
  BACKPEDAL,
  WALL_SLIDE_KEEP,
  SLOPE_DRAG,
  MANTLE_MAX,
  MANTLE_REACH,
  MANTLE_TIME,
  MANTLE_EXIT_SPEED,
  CLIMB_REACH,
  CLIMB_TIME_PER_M,
  VAULT_MAX,
  VAULT_THICK,
  VAULT_MIN_LEN,
  VAULT_REACH,
  VAULT_DROP,
  VAULT_TIME,
  VAULT_TIME_PER_M,
  CHUTE_MIN_HEIGHT,
  CHUTE_SINK,
  CHUTE_GLIDE,
  CHUTE_BRAKE,
  CHUTE_STEER,
});

const SLOPE_COS = Math.cos((SLOPE_LIMIT_DEG * Math.PI) / 180);
const MAX_PITCH = 1.55;

// ---------------------------------------------------------------------------------------------------------------
// per-entity private state

export function initPlayer(e) {
  const st = e.stance | 0;
  const h = HEIGHTS[st] ?? HEIGHTS[0];
  e.ext.pl = {
    h, // current capsule height (animated between stances)
    stanceFrom: st, // stance the current height transition started from
    coyote: 0,
    jumpBuf: 0,
    prevBtn: 0,
    lean: 0, // -1..1 smoothed lean
    stepOff: 0, // camera smoothing offset for step-ups/downs (added to eye height), decays to 0
    land: -1, // ticks since last landing (-1 never)
    landSpeed: 0, // fall speed at last landing (m/s)
    grounded: 0,
    swim: 0,
    slide: 0,
    wade: 0,
    gnx: 0,
    gny: 1,
    gnz: 0, // ground normal
    groundY: e.pos?.[1] ?? 0,
    mantleT: 0,
    mantleN: 0, // ticks left / total ticks of the current climb (0 = not mantling)
    mantleSX: 0,
    mantleSY: 0,
    mantleSZ: 0,
    mantleTX: 0,
    mantleTY: 0,
    mantleTZ: 0, // climb start / landing point
    vault: 0,
    vaultMX: 0,
    vaultMY: 0,
    vaultMZ: 0, // 1 while climbing over (the mantle runs via the top point M)
    chute: 0, // 1 while the parachute is open
    fallTop: e.pos?.[1] ?? 0, // highest point of the current fall (feet y)
    landDrop: 0, // metres fallen at the last landing (see CHUTE_* notes)
    landN: 0, // landings so far; the authority applies fall damage once per increment
    zip: 0,
    zipS: 0,
    zipDir: 0,
    zipV: 0,
    zipT: 0,
    zipOX: 0,
    zipOY: 0,
    zipOZ: 0, // zipline ride (see zipline.js)
    lad: 0,
    ladS: 0,
    ladT: 0,
    ladOX: 0,
    ladOY: 0,
    ladOZ: 0, // ladder climb (see ladder.js)
  };
  return e.ext.pl;
}

export function clonePlayerExt(pl) {
  return { ...pl };
}

// ---------------------------------------------------------------------------------------------------------------
// small helpers

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const moveToward = (v, t, d) =>
  v < t ? Math.min(v + d, t) : Math.max(v - d, t);

function rectDist2(x, z, b) {
  const cx = clamp(x, b[0], b[3]),
    cz = clamp(z, b[2], b[5]);
  const dx = x - cx,
    dz = z - cz;
  return dx * dx + dz * dz;
}
function inRect(x, z, b, m = 0) {
  return x >= b[0] - m && x <= b[3] + m && z >= b[2] - m && z <= b[5] + m;
}

const _cands = [];
/** broadphase: colliders whose aabb touches the capsule's neighbourhood */
function gather(world, x, y, z, r, h) {
  _cands.length = 0;
  const cols = world.map.colliders;
  if (!cols) return _cands;
  const x0 = x - r - 0.6,
    x1 = x + r + 0.6,
    y0 = y - 0.8,
    y1 = y + h + 0.8,
    z0 = z - r - 0.6,
    z1 = z + r + 0.6;
  const touches = (c) => {
    const b = c.movementAabb ?? c.aabb;
    if (!b || c.noPlayer) return false;
    if (c.solid === false && !c.floorHeight) return false;
    return !(
      b[3] < x0 ||
      b[0] > x1 ||
      b[5] < z0 ||
      b[2] > z1 ||
      b[4] < y0 ||
      b[1] > y1
    );
  };
  // The index applies the exact test before its stable ordering, so only the few touching colliders are sorted.
  if (cols.queryMovement) {
    for (const c of cols.queryMovement(x0, y0, z0, x1, y1, z1, touches))
      _cands.push(c);
    return _cands;
  }
  if (cols.query) {
    for (const c of cols.query(x0, z0, x1, z1, touches)) _cands.push(c);
    return _cands;
  }
  for (const c of cols.values()) if (touches(c)) _cands.push(c);
  return _cands;
}

/** underside of a walkable surface at height `top`: the slab bottom for thickness ramps, else the aabb floor */
function underside(c, top) {
  return c.floorThickness > 0
    ? Math.max((c.movementAabb ?? c.aabb)[1], top - c.floorThickness)
    : (c.movementAabb ?? c.aabb)[1];
}

/** is the vertical span [y+0.05, y+h] free of solid boxes around (x,z)? */
function headroomClear(cands, x, y, z, h, r) {
  const rr = r * 0.95 * (r * 0.95);
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false) continue;
    const b = c.movementAabb ?? c.aabb;
    if (b[1] >= y + h - 1e-3 || b[4] <= y + 0.05) continue;
    if (c.floorHeight) {
      // walkable surface: blocks only if its surface is above the feet inside the footprint
      if (!inRect(x, z, b, r * 0.95)) continue;
      const fh = c.floorHeight(clamp(x, b[0], b[3]), clamp(z, b[2], b[5]));
      if (fh <= y + 0.05) continue;
      if (underside(c, fh) >= y + h - 1e-3) continue; // the flight passes overhead
      return false;
    }
    if (rectDist2(x, z, b) < rr) return false;
  }
  return true;
}

/** Read-only placement check using the movement collider filters and headroom
 * rules. Unlike stance changes, a fresh spawn requires the full capsule radius
 * clear; it must not depend on the next movement tick pushing it out of a wall.
 * Terrain/water and other soldiers are the caller's separate placement policies.
 */
export function playerPlacementClear(world, pos, stance = STANCE.STAND) {
  if (!pos || pos.length !== 3 || !pos.every(Number.isFinite)) return false;
  const h = HEIGHTS[stance] ?? HEIGHTS[0];
  return headroomClear(
    gather(world, ...pos, RADIUS, h),
    ...pos,
    h,
    RADIUS / 0.95,
  );
}

/** Read-only walking corridor, using the same rounded walls, steps, headroom
 * and supported floors as movement. Substeps are smaller than capsule diameter;
 * removed slabs and thin surviving fracture bands cannot fall between probes. */
