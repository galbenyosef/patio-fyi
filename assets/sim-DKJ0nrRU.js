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

import { STATE, BTN, STANCE } from '../core/world.js';
import {carryLift} from '../demo/lifts-sim.js';
import {hangarRide} from '../demo/hangar-sim.js';
import {basculeRide} from '../demo/bascule-sim.js';
import {mesaRide} from '../demo/mesa-sim.js';
import {zipGrab,zipAttach,zipStep} from './zipline.js';
import {ladderGrab,ladderAttach,ladderStep,ladderLook,LADDER_OFF} from './ladder.js';

export const RADIUS = 0.4;
export const HEIGHTS = Object.freeze([1.8, 1.3, 0.55]);   // by stance: stand, crouch, prone
export const EYE_DROP = 0.15;                              // eye = capsule height - EYE_DROP
export const PRONE_EYE_FWD = 0.5;     // prone: the eye sits this far in front of the capsule axis (head forward)
export const SPEEDS = Object.freeze({ walk: 4.2, sprint: 6.6, ads: 2.6, crouch: 2.2, prone: 1.0, swim: 2.4 });
export const GROUND_ACCEL = 40;
export const FRICTION = 9;
export const STOP_SPEED = 1.6;
export const AIR_CONTROL = 0.25;
export const JUMP_SPEED = 4.8;
export const GRAVITY = 20;
export const STEP_UP = 0.5;
export const SLOPE_LIMIT_DEG = 50;
export const COYOTE_TICKS = 3;         // a jump is still granted this many ticks after the feet leave the ground
export const JUMP_BUFFER_TICKS = 3;    // a jump pressed this many ticks before touchdown still fires on landing
export const STANCE_TIME = Object.freeze([[0, 0.22, 0.6], [0.22, 0, 0.45], [0.6, 0.45, 0]]); // seconds [from][to]
export const LEAN_OFFSET = 0.45;      // camera lateral offset at full lean
export const LEAN_BODY_OFFSET = 0.3;  // head/torso hitbox AND rendered body lateral offset at full lean
export const LEAN_ROLL = 0.2;
export const LEAN_RATE = 9;
export const GROUND_SNAP = 0.55;
export const TERMINAL = 40;
// Eye catch-up after a step: a max-rate follower, not an exponential. The rate floor keeps small steps snappy and
// the gain term lets it keep up with a sprint up 0.2 m risers (4.4 m/s of climb) without the lag ever running away.
export const EYE_CATCHUP_RATE = 2.6;   // m/s
export const EYE_CATCHUP_GAIN = 5.5;   // extra m/s per metre of accumulated lag
export const MAX_DEPEN = 0.8;          // m: hard cap on one tick of horizontal depenetration (never teleport)
// Solid boxes are collided as round-cornered boxes: the closest point is taken on a box inset by this much and the
// contact radius grows by the same amount. Flat faces behave identically; corners get a CORNER_ROUND-radius fillet,
// so brushing a crate corner deflects instead of catching a pure face normal and stopping dead.
export const CORNER_ROUND = 0.08;
export const SWIM_DEPTH = 1.05;        // water depth (surface - feet) at which walking becomes swimming
export const SWIM_EXIT_DEPTH = 0.95;
export const SWIM_SURFACE = 1.45;      // feet sit this far below the surface when floating
export const WADE_DEPTH = 0.3;
export const LAND_DIP_MIN = 3;         // m/s of fall speed before a landing registers a dip
// Fall damage and the parachute (owner 2026-09-27). A landing's drop is the height fallen since the apex, capped by
// the height its impact speed implies (v^2 / 2g), so a slide, lift or teleport never counts as a fall. The authority
// turns the drop into damage (src/player/fall-damage.js); the parachute is plain predicted movement.
export const CHUTE_MIN_HEIGHT = 9;     // m above the ground below before Space opens a parachute
export const CHUTE_SINK = 4.2;         // m/s steady descent under canopy (lands with no damage)
export const CHUTE_GLIDE = 7;          // m/s horizontal steering speed under canopy
export const CHUTE_BRAKE = 3.2;        // 1/s: how fast the canopy bleeds fall speed toward CHUTE_SINK
export const CHUTE_STEER = 1.4;        // 1/s: how fast horizontal speed follows the steering input
export const BACKPEDAL = 0.8;
export const WALL_SLIDE_KEEP = 0.85;   // fraction of lost speed restored along the wall tangent when sliding
export const SLOPE_DRAG = 0.3;         // uphill slowdown: speed /= 1 + SLOPE_DRAG * rise-per-metre along the wish dir
// Mantling: a jump pressed while moving into a solid box whose top is above STEP_UP but within MANTLE_MAX of the
// feet climbs onto it instead of bouncing off; a live jump (STATE.JUMPING) that carries the capsule into such a
// ledge grabs it too, so "jump forward onto the ledge" works without a second press. The climb is a scripted
// rise-then-forward path over MANTLE_TIME with collision suspended; the landing spot must have full headroom.
export const MANTLE_MAX = 1.55;        // m above the feet the ledge top may be (chest height for a 1.8 m soldier)
export const MANTLE_REACH = 0.55;      // m beyond the capsule edge in which a ledge face is detected
export const MANTLE_TIME = 0.4;        // s for the whole climb
// Terrain ledges (banks, rock shelves, crater lips) climb the same way. The reach is arm's length ("melee" distance)
// and the lip may be a little higher than a box, since a bank gives hand- and footholds a sheer wall does not.
export const TERRAIN_MANTLE_MAX = 1.9; // m above the feet the terrain lip may be
export const TERRAIN_MANTLE_REACH = [0.55, 0.95, 1.4]; // m beyond the capsule edge probed for a standable lip
export const MANTLE_EXIT_SPEED = 1.6;  // m/s carried forward over the lip when the climb ends
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
export const VAULT_MAX = 2.5;          // m above the feet the top may be (a 2.4 m panel fence with a pull-up)
export const VAULT_THICK = 0.7;        // m: thicker than this is a wall to climb onto, not over
export const VAULT_MIN_LEN = 0.9;      // m: narrower than this (posts, trunks, bollards) is walked round
export const VAULT_REACH = 0.6;        // m beyond the capsule edge in which the near face is detected
export const VAULT_DROP = 1.2;         // m the far side may be below the feet
export const VAULT_TIME = 0.45;        // s for a climb over a waist-high obstacle ...
export const VAULT_TIME_PER_M = 0.3;   // ... plus this per metre of height

export const CONSTANTS = Object.freeze({
  TERRAIN_MANTLE_MAX, RADIUS, HEIGHTS, EYE_DROP, SPEEDS, GROUND_ACCEL, FRICTION, STOP_SPEED, AIR_CONTROL, JUMP_SPEED, GRAVITY, STEP_UP,
  PRONE_EYE_FWD, SLOPE_LIMIT_DEG, COYOTE_TICKS, JUMP_BUFFER_TICKS, STANCE_TIME, LEAN_OFFSET, LEAN_BODY_OFFSET, LEAN_ROLL, LEAN_RATE, GROUND_SNAP, TERMINAL,
  EYE_CATCHUP_RATE, EYE_CATCHUP_GAIN, MAX_DEPEN, CORNER_ROUND, SWIM_DEPTH, SWIM_EXIT_DEPTH, SWIM_SURFACE, WADE_DEPTH, LAND_DIP_MIN, BACKPEDAL, WALL_SLIDE_KEEP, SLOPE_DRAG,
  MANTLE_MAX, MANTLE_REACH, MANTLE_TIME, MANTLE_EXIT_SPEED, CLIMB_REACH, CLIMB_TIME_PER_M,
  VAULT_MAX, VAULT_THICK, VAULT_MIN_LEN, VAULT_REACH, VAULT_DROP, VAULT_TIME, VAULT_TIME_PER_M,
  CHUTE_MIN_HEIGHT, CHUTE_SINK, CHUTE_GLIDE, CHUTE_BRAKE, CHUTE_STEER,
});

const SLOPE_COS = Math.cos((SLOPE_LIMIT_DEG * Math.PI) / 180);
const MAX_PITCH = 1.55;

// ---------------------------------------------------------------------------------------------------------------
// per-entity private state

export function initPlayer(e) {
  const st = e.stance | 0;
  const h = HEIGHTS[st] ?? HEIGHTS[0];
  e.ext.pl = {
    h,                 // current capsule height (animated between stances)
    stanceFrom: st,    // stance the current height transition started from
    coyote: 0, jumpBuf: 0, prevBtn: 0,
    lean: 0,           // -1..1 smoothed lean
    stepOff: 0,        // camera smoothing offset for step-ups/downs (added to eye height), decays to 0
    land: -1,          // ticks since last landing (-1 never)
    landSpeed: 0,      // fall speed at last landing (m/s)
    grounded: 0, swim: 0, slide: 0, wade: 0,
    gnx: 0, gny: 1, gnz: 0, // ground normal
    groundY: e.pos?.[1] ?? 0,
    mantleT: 0, mantleN: 0, // ticks left / total ticks of the current climb (0 = not mantling)
    mantleSX: 0, mantleSY: 0, mantleSZ: 0, mantleTX: 0, mantleTY: 0, mantleTZ: 0, // climb start / landing point
    vault: 0, vaultMX: 0, vaultMY: 0, vaultMZ: 0, // 1 while climbing over (the mantle runs via the top point M)
    chute: 0,          // 1 while the parachute is open
    fallTop: e.pos?.[1] ?? 0, // highest point of the current fall (feet y)
    landDrop: 0,       // metres fallen at the last landing (see CHUTE_* notes)
    landN: 0,          // landings so far; the authority applies fall damage once per increment
    zip: 0, zipS: 0, zipDir: 0, zipV: 0, zipT: 0, zipOX: 0, zipOY: 0, zipOZ: 0,  // zipline ride (see zipline.js)
    lad: 0, ladS: 0, ladT: 0, ladOX: 0, ladOY: 0, ladOZ: 0,                      // ladder climb (see ladder.js)
  };
  return e.ext.pl;
}

export function clonePlayerExt(pl) { return { ...pl }; }

// ---------------------------------------------------------------------------------------------------------------
// small helpers

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const moveToward = (v, t, d) => (v < t ? Math.min(v + d, t) : Math.max(v - d, t));

function rectDist2(x, z, b) {
  const cx = clamp(x, b[0], b[3]), cz = clamp(z, b[2], b[5]);
  const dx = x - cx, dz = z - cz;
  return dx * dx + dz * dz;
}
function inRect(x, z, b, m = 0) { return x >= b[0] - m && x <= b[3] + m && z >= b[2] - m && z <= b[5] + m; }

const _cands = [];
/** broadphase: colliders whose aabb touches the capsule's neighbourhood */
function gather(world, x, y, z, r, h) {
  _cands.length = 0;
  const cols = world.map.colliders;
  if (!cols) return _cands;
  const x0 = x - r - 0.6, x1 = x + r + 0.6, y0 = y - 0.8, y1 = y + h + 0.8, z0 = z - r - 0.6, z1 = z + r + 0.6;
  const touches = (c) => {
    const b = (c.movementAabb??c.aabb);
    if (!b || c.noPlayer) return false;
    if (c.solid === false && !c.floorHeight) return false;
    return !(b[3] < x0 || b[0] > x1 || b[5] < z0 || b[2] > z1 || b[4] < y0 || b[1] > y1);
  };
  // The index applies the exact test before its stable ordering, so only the few touching colliders are sorted.
  if (cols.queryMovement) { for (const c of cols.queryMovement(x0,y0,z0,x1,y1,z1,touches)) _cands.push(c); return _cands; }
  if (cols.query) { for (const c of cols.query(x0,z0,x1,z1,touches)) _cands.push(c); return _cands; }
  for (const c of cols.values()) if (touches(c)) _cands.push(c);
  return _cands;
}

/** underside of a walkable surface at height `top`: the slab bottom for thickness ramps, else the aabb floor */
function underside(c, top) { return c.floorThickness > 0 ? Math.max((c.movementAabb??c.aabb)[1], top - c.floorThickness) : (c.movementAabb??c.aabb)[1]; }

/** is the vertical span [y+0.05, y+h] free of solid boxes around (x,z)? */
function headroomClear(cands, x, y, z, h, r) {
  const rr = (r * 0.95) * (r * 0.95);
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false) continue;
    const b = (c.movementAabb??c.aabb);
    if (b[1] >= y + h - 1e-3 || b[4] <= y + 0.05) continue;
    if (c.floorHeight) {
      // walkable surface: blocks only if its surface is above the feet inside the footprint
      if (!inRect(x, z, b, r * 0.95)) continue;
      const fh = c.floorHeight(clamp(x, b[0], b[3]), clamp(z, b[2], b[5]));
      if (fh <= y + 0.05) continue;
      if (underside(c, fh) >= y + h - 1e-3) continue;   // the flight passes overhead
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
  return headroomClear(gather(world, ...pos, RADIUS, h), ...pos, h, RADIUS / .95);
}

/** Read-only walking corridor, using the same rounded walls, steps, headroom
 * and supported floors as movement. Substeps are smaller than capsule diameter;
 * removed slabs and thin surviving fracture bands cannot fall between probes. */
export function walkingCorridor(world, start, end, candidates = null) {
  const length = Math.hypot(end[0]-start[0], end[2]-start[2]);
  const steps = Math.max(1, Math.ceil(length/.2)), pos = start.slice(), vel = [0,0,0];
  const cols = world.map.colliders, margin = RADIUS+.1;
  const x0=Math.min(start[0],end[0])-margin,x1=Math.max(start[0],end[0])+margin,z0=Math.min(start[2],end[2])-margin,z1=Math.max(start[2],end[2])+margin;
  const relevant = c => {const b=c.movementAabb??c.aabb;return b && !c.noPlayer && (c.solid!==false || c.floorHeight) && b[0]<=x1&&b[3]>=x0&&b[2]<=z1&&b[5]>=z0&&b[1]<start[1]+HEIGHTS[0]+STEP_UP&&b[4]>start[1]-.7;};
  // The index filters before its stable ordering: a tower column no longer sorts every floor for each probe.
  const cands = candidates ? [...candidates].filter(relevant) : cols.queryMovement ? cols.queryMovement(x0,start[1]-.7,z0,x1,start[1]+HEIGHTS[0]+STEP_UP,z1,relevant) : cols.query ? cols.query(x0,z0,x1,z1,relevant) : [...cols.values()].filter(relevant);
  for(let i=1;i<=steps;i++) {
    const x=start[0]+(end[0]-start[0])*i/steps,z=start[2]+(end[2]-start[2])*i/steps,previousY=pos[1];
    pos[0]=x;pos[2]=z;
    resolveHorizontal(pos,vel,HEIGHTS[0],RADIUS,cands,true,world);
    if(Math.hypot(pos[0]-x,pos[2]-z)>.025)return null;
    const g=computeGround(pos,RADIUS,HEIGHTS[0],cands,world);
    if(g.y-previousY>STEP_UP+.02 || previousY-g.y>.65 || g.ny<.55)return null;
    pos[1]=g.y;
    if(!headroomClear(cands,...pos,HEIGHTS[0],RADIUS))return null;
  }
  return pos;
}

/** is a small sphere at (x,y,z) inside any solid box? (lean check) */
function pointBlocked(cands, x, y, z, rad) {
  const rr = rad * rad;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false) continue;
    const b = (c.movementAabb??c.aabb);
    if (b[1] > y + rad || b[4] < y - rad) continue;
    if (c.floorHeight) { if (inRect(x, z, b) && c.floorHeight(x, z) > y - rad) return true; continue; }
    if (rectDist2(x, z, b) < rr) return true;
  }
  return false;
}

/** ground friction. The velocity component along the wish direction is exempt (so accel reaches the wish speed),
 *  except any excess above wishSpeed which decays normally. Everything else decays with FRICTION and STOP_SPEED. */
function applyFriction(vel, dt, wx, wz, wishSpeed) {
  const speed = Math.hypot(vel[0], vel[2]);
  if (speed < 1e-4) { vel[0] = 0; vel[2] = 0; return; }
  const control = speed < STOP_SPEED ? STOP_SPEED : speed;
  const drop = control * FRICTION * dt;
  const ns = speed - drop > 0 ? speed - drop : 0;
  const f = ns / speed;
  if (wishSpeed > 0) {
    const par = vel[0] * wx + vel[2] * wz;
    if (par > 0) {
      const npar = par > wishSpeed ? Math.max(wishSpeed, par * f) : par;
      const px = vel[0] - wx * par, pz = vel[2] - wz * par; // perpendicular part
      vel[0] = wx * npar + px * f; vel[2] = wz * npar + pz * f;
      return;
    }
  }
  vel[0] *= f; vel[2] *= f;
}

function accelerate(vel, wx, wz, wishSpeed, accel, dt) {
  if (wishSpeed <= 0) return;
  const cur = vel[0] * wx + vel[2] * wz;
  const add = wishSpeed - cur;
  if (add <= 0) return;
  const a = accel * dt;
  const s = a < add ? a : add;
  vel[0] += wx * s; vel[2] += wz * s;
}

const _n = [0, 1, 0];
function surfaceNormal(c, x, z, out) {
  if (c.floorNormal) { c.floorNormal(x, z, out); return out; }
  const b = (c.movementAabb??c.aabb), e = 0.05;
  const hx0 = c.floorHeight(clamp(x - e, b[0], b[3]), z), hx1 = c.floorHeight(clamp(x + e, b[0], b[3]), z);
  const hz0 = c.floorHeight(x, clamp(z - e, b[2], b[5])), hz1 = c.floorHeight(x, clamp(z + e, b[2], b[5]));
  let nx = -(hx1 - hx0) / (2 * e), nz = -(hz1 - hz0) / (2 * e);
  const il = 1 / Math.hypot(nx, 1, nz);
  out[0] = nx * il; out[1] = il; out[2] = nz * il;
  return out;
}

const _mantle = { x: 0, y: 0, z: 0 };
/**
 * Ledge the capsule could climb onto in direction (dx,dz): the highest solid box top in (feet+STEP_UP, feet+MANTLE_MAX]
 * whose footprint contains the probe point MANTLE_REACH ahead of the capsule edge, whose face is between the feet and
 * that top (a real wall, not a floating slab), with standing room on it. Returns the landing point or null.
 */
const MANTLE_PROBES = [MANTLE_REACH, 0.15]; // the far probe finds sills and crates, the near one a thin parapet or wall top
function findMantle(pos, h, r, dx, dz, cands, reach = MANTLE_MAX, minW = 0) {
  for (let i = 0; i < MANTLE_PROBES.length; i++) {
    const m = findMantleAt(pos, h, r, dx, dz, cands, reach, MANTLE_PROBES[i], minW);
    if (m) return m;
  }
  return null;
}
function findMantleAt(pos, h, r, dx, dz, cands, reach, ahead, minW = 0) {
  const px = pos[0] + dx * (r + ahead), pz = pos[2] + dz * (r + ahead);
  const lo = pos[1] + STEP_UP + 1e-3, hi = pos[1] + reach;
  let best = null, bestTop = -Infinity;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false || c.floorHeight) continue;
    const b = (c.movementAabb??c.aabb), top = b[4];
    if (top <= lo || top > hi || top <= bestTop) continue;
    if (minW > 0 && (b[3] - b[0] < minW || b[5] - b[2] < minW)) continue;   // a bot: no sills, awnings or rails
    if (b[1] > pos[1] + h * 0.5) continue;            // a slab floating above the waist is a ceiling, not a ledge
    if (!inRect(px, pz, b)) continue;                 // must be right in front
    if (inRect(pos[0], pos[2], b)) continue;          // already inside its footprint: not a face to climb
    // land with the capsule axis over the box (a thin rail is stood on at its centre line)
    const lx = clamp(px, b[0] + Math.min(r, (b[3] - b[0]) * 0.5), b[3] - Math.min(r, (b[3] - b[0]) * 0.5));
    const lz = clamp(pz, b[2] + Math.min(r, (b[5] - b[2]) * 0.5), b[5] - Math.min(r, (b[5] - b[2]) * 0.5));
    if (!headroomClear(cands, lx, top, lz, h, r)) continue;
    // nothing else solid pokes up through the landing spot (a crate on the sill)
    let blocked = false;
    for (let j = 0; j < cands.length && !blocked; j++) {
      const o = cands[j];
      if (o === c || o.solid === false || o.floorHeight) continue;
      if ((o.movementAabb??o.aabb)[4] > top + 0.05 && (o.movementAabb??o.aabb)[1] < top + h && rectDist2(lx, lz, (o.movementAabb??o.aabb)) < r * r) blocked = true;
    }
    if (blocked) continue;
    bestTop = top; _mantle.x = lx; _mantle.y = top; _mantle.z = lz; best = _mantle;
  }
  return best;
}

const _vault = { x: 0, y: 0, z: 0, mx: 0, my: 0, mz: 0, rise: 0 };
/**
 * Thin upright obstacle the capsule could climb over in direction (dx,dz): the nearest solid box rooted near the feet
 * whose near face is within VAULT_REACH of the capsule edge, top in (feet+STEP_UP, feet+VAULT_MAX], at most VAULT_THICK
 * through along the travel and at least VAULT_MIN_LEN across it, nothing overhead where the body crosses, and a spot
 * on the far side with ground no more than VAULT_DROP below the feet and full headroom. Returns
 * {x,y,z (landing), mx,my,mz (the top crossing point), rise} or null.
 */
function findVault(pos, h, r, dx, dz, cands, world, groundY = pos[1]) {
  const feet = pos[1], base = Math.min(feet, groundY), reach = r + VAULT_REACH; // height counts from the ground, not mid-jump
  let best = null, bestT = Infinity;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false || c.floorHeight) continue;
    const b = (c.movementAabb ?? c.aabb), top = b[4];
    if (top <= feet + STEP_UP + 1e-3 || top > base + VAULT_MAX || b[1] > base + 0.6) continue;
    if (inRect(pos[0], pos[2], b)) continue;
    // where the travel line from the capsule axis enters and leaves the box footprint (slab test)
    let t0 = -Infinity, t1 = Infinity;
    for (const [o, d, lo, hi] of [[pos[0], dx, b[0], b[3]], [pos[2], dz, b[2], b[5]]]) {
      if (Math.abs(d) < 1e-6) { if (o < lo || o > hi) { t0 = Infinity; break; } continue; }
      let a = (lo - o) / d, z = (hi - o) / d; if (a > z) [a, z] = [z, a];
      if (a > t0) t0 = a; if (z < t1) t1 = z;
    }
    if (!(t0 <= t1) || t0 < 0 || t0 > reach || t0 >= bestT) continue;
    if (t1 - t0 > VAULT_THICK) continue;
    const across = Math.abs(dx) > Math.abs(dz) ? b[5] - b[2] : b[3] - b[0];
    if (across < VAULT_MIN_LEN) continue;
    // over the top: the body crosses hunched (1 m) at the middle of the box, nothing may hang there
    const cx = pos[0] + dx * (t0 + t1) / 2, cz = pos[2] + dz * (t0 + t1) / 2;
    if (!headroomClear(cands, cx, top, cz, 1.0, r * 0.6)) continue;
    // the far side: standable ground about level with the feet, full headroom
    const lx = pos[0] + dx * (t1 + r + 0.12), lz = pos[2] + dz * (t1 + r + 0.12);
    const far = gather(world, lx, feet, lz, r, h);
    _vaultProbe[0] = lx; _vaultProbe[1] = Math.min(top, feet + 0.45); _vaultProbe[2] = lz;
    const g = computeGround(_vaultProbe, r, h, far, world);
    if (g.y < feet - VAULT_DROP || g.y > feet + 0.45 || g.ny < SLOPE_COS) continue;
    if (!headroomClear(far, lx, g.y, lz, h, r)) continue;
    bestT = t0;
    _vault.x = lx; _vault.y = g.y; _vault.z = lz; _vault.mx = cx; _vault.my = top + 0.05; _vault.mz = cz; _vault.rise = top - feet;
    best = _vault;
  }
  return best;
}
const _vaultProbe = [0, 0, 0];

/**
 * Terrain lip the capsule could climb in direction (dx,dz): the nearest probe whose ground is above a plain step but
 * within TERRAIN_MANTLE_MAX of the feet, is itself standable (the ground just beyond it has levelled off, so this is
 * the top of the bank and not the middle of a cliff), and has headroom. Returns the landing point or null.
 */
function findTerrainMantle(pos, h, r, dx, dz, cands, world) {
  const map = world?.map; if (typeof map?.getHeight !== 'function') return null;
  const feet = pos[1], here = map.getHeight(pos[0], pos[2]);
  if (!Number.isFinite(here) || feet - here > 0.6) return null;   // standing on a floor/roof well above the terrain
  for (let i = 0; i < TERRAIN_MANTLE_REACH.length; i++) {
    const d = r + TERRAIN_MANTLE_REACH[i], lx = pos[0] + dx * d, lz = pos[2] + dz * d, top = map.getHeight(lx, lz);
    if (!Number.isFinite(top)) return null;
    const rise = top - feet;
    if (rise > TERRAIN_MANTLE_MAX) return null;                    // the face keeps going up: a cliff, not a ledge
    if (rise <= STEP_UP + 1e-3) continue;
    // Only a face too steep to walk is climbed; on a walkable slope Space stays an ordinary jump.
    const mid = map.getHeight(pos[0] + dx * d * 0.5, pos[2] + dz * d * 0.5);
    if (Math.max(mid - feet, top - mid) / (d * 0.5) < Math.tan(SLOPE_LIMIT_DEG * Math.PI / 180)) continue;
    const beyond = map.getHeight(lx + dx * 0.5, lz + dz * 0.5);
    if (!Number.isFinite(beyond) || Math.abs(beyond - top) > 0.4) continue; // still on the face, try further in
    if (!headroomClear(cands, lx, top, lz, h, r)) return null;
    _mantle.x = lx; _mantle.y = top; _mantle.z = lz; return _mantle;
  }
  return null;
}

/** move the capsule out of solid boxes horizontally, stepping up onto low ledges. Mutates pos & vel. Returns rise stepped. */
function resolveHorizontal(pos, vel, h, r, cands, canStep, world) {
  let stepped = 0;
  let depen = 0;                     // metres of degenerate (inside-a-box) push spent this tick, capped at MAX_DEPEN
  for (let iter = 0; iter < 4; iter++) {
    let any = false;
    for (let i = 0; i < cands.length; i++) {
      const c = cands[i];
      if (c.solid === false) continue;
      const b = (c.movementAabb??c.aabb);
      if (b[4] <= pos[1] + 1e-3) continue;          // entirely below the feet: ground, not wall
      if (b[1] >= pos[1] + h - 1e-3) continue;      // entirely above the head: ceiling, handled vertically
      const fil = Math.min(CORNER_ROUND, (b[3] - b[0]) * 0.5, (b[5] - b[2]) * 0.5);
      const reach = r + fil;
      const cx = clamp(pos[0], b[0] + fil, b[3] - fil), cz = clamp(pos[2], b[2] + fil, b[5] - fil);
      const dx = pos[0] - cx, dz = pos[2] - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= reach * reach) continue;
      let top = b[4];
      if (c.floorHeight) {
        top = c.floorHeight(cx, cz);
        if (top <= pos[1] + 1e-3) continue;         // low edge of a ramp/stair: walk onto it
        const under = underside(c, top);
        if (under >= pos[1] + h - 1e-3) continue;   // the flight passes overhead: open space under a stair
        // The box *below* a tread/ramp surface must never act as a wall. An ascending capsule is already above the
        // surface it will land on and the vertical pass places it exactly, so this is unconditional: gating it on
        // `canStep` made a jump onto a staircase treat the whole 2 m stair AABB as a wall and eject the player
        // metres backwards out of it in a single tick.
        if (top - pos[1] <= STEP_UP) continue;
        // Capsule centre inside the footprint but below the surface: it is buried inside the solid (spawned there,
        // wedged by a neighbouring box, teleported). The only correct resolution is straight up onto the surface —
        // pushing sideways here is what soft-locked players under the 20° ramp.
        if (d2 <= 1e-10 && c.floorThickness > 0 && pos[1] < under - 0.05) {
          // Under a thickness stair the underside is a sloped ceiling that gets lower toward the flight's low end.
          // A head that meets it is pushed back toward the HIGH end (where headroom grows) until it clears; never
          // lift onto the surface (that is the buried case below).
          surfaceNormal(c, pos[0], pos[2], _n);
          const hl = Math.hypot(_n[0], _n[2]);
          if (hl > 1e-6 && _n[1] > 1e-6) {
            const slope = hl / _n[1], dx2 = -_n[0] / hl, dz2 = -_n[2] / hl;   // uphill unit direction
            const push = Math.min((pos[1] + h - under + 1e-3) / slope, MAX_DEPEN - depen);
            if (push > 0) {
              depen += push; pos[0] += dx2 * push; pos[2] += dz2 * push;
              const vn = vel[0] * dx2 + vel[2] * dz2;
              if (vn < 0) { vel[0] -= dx2 * vn; vel[2] -= dz2 * vn; }
              any = true;
            }
          }
          continue;
        }
        if (d2 <= 1e-10) {
          const rise = top - pos[1];
          if (rise > stepped) stepped = rise;
          pos[1] = top;
          if (vel[1] < 0) vel[1] = 0;
          any = true;
          continue;
        }
      } else if (top - pos[1] <= STEP_UP && canStep) {
        if (headroomClear(cands, pos[0], top, pos[2], h, r) || pos[1] >= top - 1e-3) {
          const rise = top - pos[1];
          if (rise > stepped) stepped = rise;
          pos[1] = top;
          any = true;
          continue;
        }
      }
      // wall: push out along the closest-point normal (rounded corners => smooth corner sliding)
      let nx, nz;
      if (d2 > 1e-10) {
        const d = Math.sqrt(d2); nx = dx / d; nz = dz / d;
        pos[0] = cx + nx * reach; pos[2] = cz + nz * reach;
      } else {
        // The capsule centre is inside the box's footprint. If the box is a low CEILING (it starts well above the
        // feet) the body is simply standing under something too low: pushing it sideways would fling a soldier out
        // of a tunnel he is lying in while his stance is still blending. Leave it to the stance/ceiling passes.
        if (b[1] > pos[1] + 0.35) continue;
        // Otherwise leave along the shallowest horizontal axis, capped: a body inside a big volume walks out over a
        // few ticks instead of being flung across the map (a legitimate one-tick overlap is at most 0.11 m + r).
        const dl = pos[0] - (b[0] + fil), dr = (b[3] - fil) - pos[0], dn = pos[2] - (b[2] + fil), df = (b[5] - fil) - pos[2];
        let m = dl; nx = -1; nz = 0;
        if (dr < m) { m = dr; nx = 1; nz = 0; }
        if (dn < m) { m = dn; nx = 0; nz = -1; }
        if (df < m) { m = df; nx = 0; nz = 1; }
        const push = Math.min(m + reach, MAX_DEPEN - depen);
        if (push <= 0) continue;
        depen += push;
        pos[0] += nx * push; pos[2] += nz * push;
      }
      const vn = vel[0] * nx + vel[2] * nz;
      if (vn < 0) {
        // slide: remove the into-wall component, then keep most of the original speed along the tangent so
        // grazing a crate corner deflects instead of grinding to a halt (head-on still stops: tangent = 0)
        const s0 = Math.hypot(vel[0], vel[2]);
        vel[0] -= nx * vn; vel[2] -= nz * vn;
        const s1 = Math.hypot(vel[0], vel[2]);
        if (s1 > 0.15 && s0 > s1) { const k = (s1 + (s0 - s1) * WALL_SLIDE_KEEP) / s1; vel[0] *= k; vel[2] *= k; }
      }
      any = true;
    }
    if (!any) break;
  }
  return stepped;
}

/** how far below the feet the ground may be and still be snapped to. A capsule can overhang a ledge by up to
 *  RADIUS, so onto a steep face the geometric drop is RADIUS * tan(slope) more than on the flat. */
function snapLimit(ny, steep) {
  if (!steep || !(ny > 0.05)) return GROUND_SNAP;
  return GROUND_SNAP + RADIUS * Math.sqrt(Math.max(0, 1 - ny * ny)) / ny;
}

const _g = { y: 0, nx: 0, ny: 1, nz: 0 };
/** highest walkable surface under the capsule that is not more than STEP_UP above the feet */
function computeGround(pos, r, h, cands, world) {
  const map = world.map;
  let gy = map.getHeight(pos[0], pos[2]);
  _n[0] = 0; _n[1] = 1; _n[2] = 0;
  if (map.getNormal) map.getNormal(pos[0], pos[2], _n);
  let nx = _n[0], ny = _n[1], nz = _n[2];
  if (!(ny > 0)) { nx = 0; ny = 1; nz = 0; }
  const limit = pos[1] + STEP_UP + 1e-3;
  const rr = (r + 0.01) * (r + 0.01); // same reach as the wall test so a stepped-onto box is also ground
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.overrideGround && c.floorHeight && inRect(pos[0], pos[2], (c.movementAabb??c.aabb))) { gy = c.floorHeight(pos[0], pos[2]); nx = 0; ny = 1; nz = 0; }
  }
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.overrideGround) continue;
    const b = (c.movementAabb??c.aabb);
    if (c.floorHeight) {
      if (!inRect(pos[0], pos[2], b)) continue;
      const fh = c.floorHeight(pos[0], pos[2]);
      // `fh` further than STEP_UP above the feet is a wall, not ground — EXCEPT when the feet are *below* it, i.e.
      // the capsule is inside the solid. Then the surface is the only place it can legally be, at any distance.
      // Under a thickness stair the feet are below the slab: the real ground applies, not the surface overhead.
      const buried = pos[1] < fh - 1e-3 && !(c.floorThickness > 0 && pos[1] < underside(c, fh) - 0.05);
      if (fh > gy && (fh <= limit || buried)) { gy = fh; surfaceNormal(c, pos[0], pos[2], _n); nx = _n[0]; ny = _n[1]; nz = _n[2]; }
    } else if (c.solid !== false) {
      const top = b[4];
      if (top > gy && top <= limit && rectDist2(pos[0], pos[2], b) < rr) {
        if (top > pos[1] + 0.02 && !headroomClear(cands, pos[0], top, pos[2], h, r)) continue; // a lip under a low ceiling
        gy = top; nx = 0; ny = 1; nz = 0;
      }
    }
  }
  _g.y = gy; _g.nx = nx; _g.ny = ny; _g.nz = nz;
  return _g;
}

/** push the capsule down out of a ceiling it is intersecting — but never below the ground it is standing on. A
 *  body too tall for the headroom (mid stance-blend, or force-placed) keeps its feet on the floor and its head in
 *  the ceiling for a few ticks; sinking it through the floor put it inside the ground slab, which the horizontal
 *  pass then treated as a wall and shoved it sideways out of the tunnel. */
function resolveCeiling(pos, vel, h, r, cands, groundY) {
  const rr = (r * 0.9) * (r * 0.9);
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false) continue;
    const b = (c.movementAabb??c.aabb);
    if (c.floorHeight) {
      // the underside of a thickness stair is a ceiling for a capsule under it (jumping under a flight)
      if (!(c.floorThickness > 0) || !inRect(pos[0], pos[2], b, r * 0.9)) continue;
      const fh = c.floorHeight(clamp(pos[0], b[0], b[3]), clamp(pos[2], b[2], b[5])), under = underside(c, fh);
      if (pos[1] >= under - 0.05 || pos[1] + h <= under) continue;
      const y = under - h;
      if (y < pos[1]) pos[1] = y > groundY ? y : groundY;
      if (vel[1] > 0) vel[1] = 0;
      continue;
    }
    if (b[1] >= pos[1] + h || b[1] < pos[1] + h * 0.5 || b[4] <= pos[1] + h * 0.5) continue;
    if (rectDist2(pos[0], pos[2], b) >= rr) continue;
    const y = b[1] - h;
    if (y < pos[1]) pos[1] = y > groundY ? y : groundY;
    if (vel[1] > 0) vel[1] = 0;
  }
}

// ---------------------------------------------------------------------------------------------------------------
// the step

/**
 * Advance one soldier by one fixed tick. Deterministic; mutates `e` only.
 * @param e Entity (type 'soldier')
 * @param input input record (ARCHITECTURE §3.6)
 * @param world world data model
 * @param dt seconds (TICK_DT)
 */
/** Where a climber reaching the top of ladder L stands on the deck: feet [x, y, z], or null. */
const _land = [0, 0, 0], _lp = [0, 0, 0];
function ladderLanding(L, world) {
  const [lx, lz] = ladderLook(L), h = HEIGHTS[0];
  // past the rails first (a deck behind the ladder), then the climber's own spot (a ladder up through a scaffold lift)
  const distances = Number.isFinite(L.landingOffset) && L.landingOffset > 0
    ? [L.landingOffset, 0.5, 0.7, 0.9, -LADDER_OFF] : [0.5, 0.7, 0.9, -LADDER_OFF];
  for (const d of distances) {
    const x = L.x + lx * d, z = L.z + lz * d;
    const cands = gather(world, x, L.y1, z, RADIUS, h);
    _lp[0] = x; _lp[1] = L.y1 + 0.1; _lp[2] = z;
    const g = computeGround(_lp, RADIUS, h, cands, world);
    if (Math.abs(g.y - L.y1) > 0.45 || !headroomClear(cands, x, g.y, z, h, RADIUS)) continue;
    _land[0] = x; _land[1] = g.y; _land[2] = z; return _land;
  }
  return null;
}

export function stepPlayer(e, input, world, dt) {
  const pl = e.ext.pl || initPlayer(e);
  if (e.state & STATE.IN_VEHICLE) return e;
  carryLift(e,world);
  if (world.map.hangar) hangarRide(e, world);   // Hangar Nine: ride the towed plane, and be shoved clear of it (hangar-sim.js)
  if (world.map.bascule) basculeRide(e, world);   // Bascule: a lifting leaf slides whoever is on it back to its hinge (bascule-sim.js)
  if (world.map.mesa) mesaRide(e, world);         // Mesa Dome: ride the rolling field tray and the stage gear, be shoved clear (mesa-sim.js)
  const pos = e.pos, vel = e.vel, map = world.map;
  if (!Number.isFinite(pos[0]) || !Number.isFinite(pos[1]) || !Number.isFinite(pos[2])) { pos[0] = 0; pos[1] = map.getHeight(0, 0); pos[2] = 0; }
  if (!Number.isFinite(vel[0]) || !Number.isFinite(vel[1]) || !Number.isFinite(vel[2])) { vel[0] = 0; vel[1] = 0; vel[2] = 0; }

  const dead = (e.state & STATE.DEAD) !== 0;
  const btn = dead ? 0 : (input.buttons | 0);
  const pressed = btn & ~pl.prevBtn;
  pl.prevBtn = btn;
  if (!dead) {
    const yaw = +input.yaw || 0, pitch = +input.pitch || 0;
    e.yaw = yaw; e.pitch = clamp(pitch, -MAX_PITCH, MAX_PITCH);
  }
  // ---- zipline (map.ziplines): Interact at either end grabs the line; while riding, the line owns the soldier's
  // movement for the tick (collision suspended, as in a mantle). Jump or Interact lets go; dying drops the rider.
  if (dead) pl.zip = 0;
  else if (!pl.zip && (pressed & BTN.INTERACT) && map.ziplines?.length) { const grab = zipGrab(world, pos); if (grab) zipAttach(e, pl, grab, world); }
  if (pl.zip) {
    zipStep(e, pl, world, dt, (pressed & (BTN.JUMP | BTN.INTERACT)) !== 0);
    if (e.stance !== STANCE.STAND) { pl.stanceFrom = e.stance; e.stance = STANCE.STAND; }
    pl.h = moveToward(pl.h, HEIGHTS[0], 5 * dt);
    pl.grounded = 0; pl.swim = 0; pl.wade = 0; pl.slide = 0; pl.coyote = 0; pl.lean = moveToward(pl.lean, 0, LEAN_RATE * dt);
    e.state = e.state & ~(STATE.SPRINT | STATE.ADS | STATE.GROUNDED | STATE.LEAN_L | STATE.LEAN_R | STATE.SWIMMING) | STATE.JUMPING;
    return e;
  }
  const mx = dead ? 0 : clamp(+input.mx || 0, -1, 1);
  const mz = dead ? 0 : clamp(+input.mz || 0, -1, 1);
  const r = RADIUS;
  // ---- ladders (map.ladders): walk into the foot (or off the top toward it), or Interact beside it, to get on; the
  // ladder then owns the soldier's movement for the tick (collision suspended). Reaching the top steps onto the deck
  // with a mantle; Jump pushes off, Interact lets go; dying drops the climber.
  if (dead) pl.lad = 0;
  // e.ext.noLadder: a bot with no climb in its plans walks past ladder feet (bots/server.js ladderGuard); players never set it
  else if (!pl.lad && map.ladders?.length && pl.mantleT === 0 && pl.swim === 0 && e.stance !== STANCE.PRONE && !e.ext?.noLadder) {
    const sy = Math.sin(e.yaw), cy = Math.cos(e.yaw);
    let wx = cy * mx - sy * mz, wz = -sy * mx - cy * mz; const wl = Math.hypot(wx, wz);
    if (wl > 0.3) { wx /= wl; wz /= wl; } else { wx = 0; wz = 0; }
    const grab = ladderGrab(world, pos, wx, wz, (pressed & BTN.INTERACT) !== 0, pl.grounded === 1, e.pitch);
    if (grab) ladderAttach(e, pl, grab, world);
  }
  if (pl.lad) {
    const L = map.ladders[pl.lad - 1];
    const res = ladderStep(e, pl, world, dt, mx, mz, (btn & BTN.SPRINT) !== 0, (pressed & BTN.JUMP) !== 0, (pressed & BTN.INTERACT) !== 0);
    if (res === 'top') {
      const land = L && ladderLanding(L, world);
      if (land) { // step off onto the deck: the mantle branch carries the soldier there from the next tick
        pl.lad = 0; pl.vault = 0;
        pl.mantleN = Math.max(1, Math.round(MANTLE_TIME / dt)); pl.mantleT = pl.mantleN;
        pl.mantleSX = pos[0]; pl.mantleSY = pos[1]; pl.mantleSZ = pos[2];
        pl.mantleTX = land[0]; pl.mantleTY = land[1]; pl.mantleTZ = land[2];
      }
    }
    if (pl.lad || res === 'top') {
      if (e.stance !== STANCE.STAND) { pl.stanceFrom = e.stance; e.stance = STANCE.STAND; }
      pl.h = moveToward(pl.h, HEIGHTS[0], 5 * dt);
      pl.grounded = 0; pl.swim = 0; pl.wade = 0; pl.slide = 0; pl.coyote = 0; pl.chute = 0; pl.fallTop = pos[1];
      pl.lean = moveToward(pl.lean, 0, LEAN_RATE * dt);
      e.state = e.state & ~(STATE.SPRINT | STATE.ADS | STATE.GROUNDED | STATE.LEAN_L | STATE.LEAN_R | STATE.SWIMMING | STATE.JUMPING | STATE.CHUTE);
      return e;
    }
    pl.fallTop = pos[1]; // let go or reached the foot: any fall is measured from here
  }

  // ---- water. `map.waterLevel` is the surface height; the optional `map.waterBounds = [minX,minZ,maxX,maxZ]`
  // restricts it to a footprint (a pool), so a 6 cm pond does not nominally submerge the whole map.
  const wb = map.waterBounds;
  const inWater = !wb || (pos[0] >= wb[0] && pos[0] <= wb[2] && pos[2] >= wb[1] && pos[2] <= wb[3]);
  const wl = (inWater && typeof map.waterLevel === 'number') ? map.waterLevel : -Infinity;
  const depth = wl - pos[1];
  let swimming = pl.swim === 1;
  // A correction/teleport or crossing a bounded pool edge can leave the old
  // swimming flag on dry land. Never run buoyancy against -Infinity there.
  if (!Number.isFinite(wl) || depth < SWIM_EXIT_DEPTH) swimming = false;
  if (!swimming && depth > SWIM_DEPTH) swimming = true;

  // ---- stance (hold semantics; the client latches toggles)
  const grounded0 = pl.grounded === 1;
  const ads = !!(btn & BTN.ADS) && !swimming;
  const sprintWant = !!(btn & BTN.SPRINT) && mz > 0.2 && !ads;
  const cands = gather(world, pos[0], pos[1], pos[2], r, HEIGHTS[0]);
  let want = swimming ? STANCE.STAND : (btn & BTN.PRONE) ? STANCE.PRONE : (btn & BTN.CROUCH) ? STANCE.CROUCH : STANCE.STAND;
  // Sprinting lifts you straight out of a crouch or prone (headroom permitting, below).
  if (sprintWant && want !== STANCE.STAND) want = STANCE.STAND;
  if (want < e.stance) { // getting taller: need headroom
    if (!headroomClear(cands, pos[0], pos[1], pos[2], HEIGHTS[want], r)) {
      if (want === STANCE.STAND && e.stance === STANCE.PRONE && headroomClear(cands, pos[0], pos[1], pos[2], HEIGHTS[STANCE.CROUCH], r)) want = STANCE.CROUCH;
      else want = e.stance;
    }
  }
  if (want !== e.stance) { pl.stanceFrom = e.stance; e.stance = want; }
  const targetH = HEIGHTS[e.stance];
  if (pl.h !== targetH) {
    const fromH = HEIGHTS[pl.stanceFrom] ?? HEIGHTS[0];
    const time = STANCE_TIME[pl.stanceFrom]?.[e.stance] || 0.2;
    const rate = Math.abs(targetH - fromH) / time || 5;
    pl.h = moveToward(pl.h, targetH, rate * dt);
  }
  const h = pl.h;

  // ---- wish direction (yaw 0 faces -Z; right = (cos yaw, 0, -sin yaw))
  const sy = Math.sin(e.yaw), cy = Math.cos(e.yaw);
  let wx = cy * mx - sy * mz, wz = -sy * mx - cy * mz;
  let wlen = Math.hypot(wx, wz);
  if (wlen > 1e-6) { wx /= wlen; wz /= wlen; }
  if (wlen > 1) wlen = 1;

  let speed = SPEEDS.walk;
  if (e.stance === STANCE.CROUCH) speed = SPEEDS.crouch; else if (e.stance === STANCE.PRONE) speed = SPEEDS.prone;
  if (ads && speed > SPEEDS.ads) speed = SPEEDS.ads;
  let sprinting = sprintWant && e.stance === STANCE.STAND && !swimming;
  if (sprinting) speed = SPEEDS.sprint;
  if (mz < 0) speed *= BACKPEDAL;
  let wading = 0;
  if (!swimming && depth > WADE_DEPTH) {
    wading = clamp((depth - WADE_DEPTH) / (SWIM_DEPTH - WADE_DEPTH), 0, 1);
    speed *= 1 - 0.55 * wading;
    sprinting = false;
  }
  // uphill drag: walking up a ramp is slower than the flat (weight), downhill is unchanged
  if (wlen > 1e-6 && pl.grounded === 1 && pl.gny > 0.2 && pl.gny < 0.999) {
    const rise = -(pl.gnx * wx + pl.gnz * wz) / pl.gny; // metres of rise per metre along the wish direction
    if (rise > 0) speed /= 1 + SLOPE_DRAG * rise;
  }
  const wishSpeed = speed * wlen;

  let jumped = false;
  const velY0 = vel[1];
  let groundedNow = false, landed = false;

  // Jump buffer: the tick the press lands must not also consume a tick of the buffer, or the window is one tick
  // shorter than JUMP_BUFFER_TICKS. Same for coyote below.
  const jumpPressed = (pressed & BTN.JUMP) !== 0;
  if (jumpPressed && !swimming) pl.jumpBuf = JUMP_BUFFER_TICKS + 1;
  if (dead || swimming || grounded0) pl.chute = 0;
  else if (jumpPressed && pl.chute === 0 && pl.mantleT === 0 && pos[1] - pl.groundY >= CHUTE_MIN_HEIGHT) { pl.chute = 1; pl.jumpBuf = 0; }
  // Mantle: a jump press while pushing into (or facing) a climbable ledge, or a live jump carrying the capsule
  // into one. Starts the scripted climb this tick; the mantle branch below then runs instead of ground/air.
  if (dead) pl.mantleT = 0;
  else if (pl.mantleT === 0 && !swimming && e.stance !== STANCE.PRONE && pl.slide === 0 &&
      (pl.jumpBuf > 0 || (!grounded0 && (e.state & STATE.JUMPING) && wlen >= 0.3))) {
    let dx = wx, dz = wz;
    if (wlen < 0.3) { dx = -sy; dz = -cy; }            // no movement input: climb what is faced
    // a thin fence or rail is climbed over when its far side is clear; anything else is climbed onto
    // (findVault probes the far side through the shared broadphase list: give it a copy, then put ours back)
    const own = cands.slice(), v = findVault(pos, h, r, dx, dz, own, world, pl.groundY);
    cands.length = 0; for (let i = 0; i < own.length; i++) cands.push(own[i]);
    // on the ground the ledge must be within chest height; in a jump the hands reach up for a pull-up
    const reach = !grounded0 && (e.state & STATE.JUMPING) ? CLIMB_REACH : MANTLE_MAX;
    const m = v ?? findMantle(pos, h, r, dx, dz, cands, reach, e.ext?.bot ? BOT_MANTLE_MIN : 0) ?? findTerrainMantle(pos, h, r, dx, dz, cands, world);
    pl.vault = v ? 1 : 0;
    if (v) { pl.vaultMX = v.mx; pl.vaultMY = v.my; pl.vaultMZ = v.mz; }
    if (m) {
      const time = v ? VAULT_TIME + VAULT_TIME_PER_M * v.rise : MANTLE_TIME + CLIMB_TIME_PER_M * Math.max(0, m.y - pos[1] - MANTLE_MAX);
      pl.mantleN = Math.max(1, Math.round(time / dt)); pl.mantleT = pl.mantleN;
      pl.mantleSX = pos[0]; pl.mantleSY = pos[1]; pl.mantleSZ = pos[2];
      pl.mantleTX = m.x; pl.mantleTY = m.y; pl.mantleTZ = m.z;
      pl.jumpBuf = 0; pl.coyote = 0;
      e.state |= STATE.JUMPING;
    }
  }

  if (swimming) {
    // ---- swimming: 3D movement along the look direction, damped, buoyant
    const cp = Math.cos(e.pitch), sp = Math.sin(e.pitch);
    let ax = (-sy * cp) * mz + cy * mx, ay = sp * mz, az = (-cy * cp) * mz - sy * mx;
    if (btn & BTN.JUMP) ay += 1;
    if (btn & BTN.CROUCH) ay -= 1;
    const al = Math.hypot(ax, ay, az);
    if (al > 1) { ax /= al; ay /= al; az /= al; }
    const k = Math.min(1, 5 * dt);
    vel[0] += (ax * SPEEDS.swim - vel[0]) * k;
    vel[1] += (ay * SPEEDS.swim - vel[1]) * k;
    vel[2] += (az * SPEEDS.swim - vel[2]) * k;
    const surf = wl - SWIM_SURFACE;
    if (Math.abs(ay) < 0.01 && pos[1] < surf - 0.15 && vel[1] < 1.2) vel[1] += 3 * dt; // buoyancy
    const y0 = pos[1];
    pos[0] += vel[0] * dt; pos[2] += vel[2] * dt;
    const stepped = resolveHorizontal(pos, vel, h, r, cands, true, world);
    const g = computeGround(pos, r, h, cands, world);
    let ny = pos[1] + vel[1] * dt;
    if (ny <= g.y) { ny = g.y; if (vel[1] < 0) vel[1] = 0; groundedNow = true; }
    if (ny > surf && g.y <= surf) { ny = surf; if (vel[1] > 0) vel[1] = 0; }
    // wading up steps / pool stairs: same eye smoothing as on land
    if (groundedNow && grounded0 && g.ny > 0.98) { const d = ny - y0; if (d > 0.08 || d < -0.08) pl.stepOff -= d; }
    else if (stepped > 0.08) pl.stepOff -= stepped;
    pos[1] = ny;
    resolveCeiling(pos, vel, h, r, cands, g.y);
    pl.gnx = g.nx; pl.gny = g.ny; pl.gnz = g.nz; pl.groundY = g.y;
    if (groundedNow && wl - pos[1] < SWIM_EXIT_DEPTH) swimming = false;
    pl.slide = 0; pl.coyote = 0; pl.jumpBuf = 0;
    if (!swimming) { groundedNow = true; }
  } else if (pl.mantleT > 0 && !dead) {
    // ---- mantling: scripted climb, collision suspended. Rise first, then move forward over the lip.
    pl.mantleT--;
    const t = 1 - pl.mantleT / pl.mantleN;
    const ease = (u) => { u = clamp(u, 0, 1); return u * u * (3 - 2 * u); };
    if (pl.vault === 1) {
      // climbing over: up to the top while closing on it, across, then down the far side (accelerating)
      const T = 0.6;
      if (t < T) {
        const u = t / T, fy = ease(u / 0.8), fxz = ease((u - 0.3) / 0.7);
        pos[0] = pl.mantleSX + (pl.vaultMX - pl.mantleSX) * fxz; pos[2] = pl.mantleSZ + (pl.vaultMZ - pl.mantleSZ) * fxz;
        pos[1] = pl.mantleSY + (pl.vaultMY - pl.mantleSY) * fy;
      } else {
        const u = (t - T) / (1 - T), fxz = ease(u / 0.6);
        pos[0] = pl.vaultMX + (pl.mantleTX - pl.vaultMX) * fxz; pos[2] = pl.vaultMZ + (pl.mantleTZ - pl.vaultMZ) * fxz;
        pos[1] = pl.vaultMY + (pl.mantleTY - pl.vaultMY) * u * u;
      }
    } else {
      const fy = ease(t / 0.65), fxz = ease((t - 0.3) / 0.7);
      pos[0] = pl.mantleSX + (pl.mantleTX - pl.mantleSX) * fxz;
      pos[2] = pl.mantleSZ + (pl.mantleTZ - pl.mantleSZ) * fxz;
      pos[1] = pl.mantleSY + (pl.mantleTY - pl.mantleSY) * fy;
    }
    vel[0] = 0; vel[1] = 0; vel[2] = 0;
    pl.slide = 0; pl.coyote = 0; pl.jumpBuf = 0;
    if (pl.mantleT === 0) {
      pl.vault = 0;
      pos[0] = pl.mantleTX; pos[1] = pl.mantleTY; pos[2] = pl.mantleTZ;
      const ddx = pl.mantleTX - pl.mantleSX, ddz = pl.mantleTZ - pl.mantleSZ, dl = Math.hypot(ddx, ddz);
      if (dl > 1e-6) { vel[0] = ddx / dl * MANTLE_EXIT_SPEED; vel[2] = ddz / dl * MANTLE_EXIT_SPEED; }
      const g = computeGround(pos, r, h, cands, world);
      pl.gnx = g.nx; pl.gny = g.ny; pl.gnz = g.nz; pl.groundY = g.y;
      groundedNow = true; pl.coyote = COYOTE_TICKS + 2;
    }
  } else {
    // ---- ground / air
    const onGround = grounded0 && pl.slide === 0;
    const chute = pl.chute === 1 && !onGround;
    if (chute) {
      // under canopy: fall speed eases to a gentle sink, WASD steers the glide
      const kh = Math.min(1, CHUTE_STEER * dt);
      vel[0] += (wx * CHUTE_GLIDE * wlen - vel[0]) * kh; vel[2] += (wz * CHUTE_GLIDE * wlen - vel[2]) * kh;
    } else {
      if (onGround) applyFriction(vel, dt, wx, wz, wishSpeed);
      accelerate(vel, wx, wz, wishSpeed, onGround ? GROUND_ACCEL : GROUND_ACCEL * AIR_CONTROL, dt);
    }

    const canJump = (grounded0 || pl.coyote > 0) && e.stance !== STANCE.PRONE && pl.slide === 0 && !dead;
    if (pl.jumpBuf > 0 && canJump) {
      const boost = 1 - 0.5 * wading;
      vel[1] = JUMP_SPEED * boost; jumped = true; pl.jumpBuf = 0; pl.coyote = 0;
      e.state |= STATE.JUMPING;
    } else if (pl.jumpBuf > 0 && !jumpPressed) pl.jumpBuf--;

    if (!grounded0 || jumped || pl.slide) vel[1] -= GRAVITY * dt; else vel[1] = 0;
    if (vel[1] < -TERMINAL) vel[1] = -TERMINAL;
    if (chute && vel[1] < -CHUTE_SINK) { // the canopy holds gravity off and bleeds the fall down to a gentle sink
      vel[1] += GRAVITY * dt;
      vel[1] += (-CHUTE_SINK - vel[1]) * Math.min(1, CHUTE_BRAKE * dt);
      if (vel[1] > -CHUTE_SINK) vel[1] = -CHUTE_SINK;
    }

    // horizontal move + slide along walls / step up ledges
    const y0 = pos[1];
    pos[0] += vel[0] * dt; pos[2] += vel[2] * dt;
    const canStep = grounded0 || vel[1] <= 0.01;
    const stepped = resolveHorizontal(pos, vel, h, r, cands, canStep, world);
    if (stepped > 0.08) pl.stepOff -= stepped;

    // vertical move vs ground
    const g = computeGround(pos, r, h, cands, world);
    const steep = g.ny < SLOPE_COS - 1e-3;
    let ny = pos[1] + vel[1] * dt;
    if (ny <= g.y + 1e-4) {
      if (jumped && vel[1] > 0) { if (ny < g.y) ny = g.y; }
      else {
        // a landing is a real touchdown: from the air, or off the end of a slide onto walkable ground
        if (!grounded0 && vel[1] < 0 && !(pl.slide === 1 && steep)) landed = true;
        ny = g.y; groundedNow = true;
        if (!steep) vel[1] = 0;
      }
    } else if (grounded0 && !jumped && vel[1] <= 0.01 && ny - g.y <= snapLimit(g.ny, steep)) {
      ny = g.y; groundedNow = true; vel[1] = 0;
    } else if (pl.slide === 1 && steep && !jumped && ny - g.y <= snapLimit(g.ny, steep)) {
      // sliding down a steep face: stay on it (gravity along the surface is applied by the projection below)
      ny = g.y; groundedNow = true;
    }
    // stair / ledge smoothing. On flat ground any step over 8 cm is a riser and gets smoothed; on a slope the
    // per-tick rise is continuous and must NOT be smoothed, so only a real discontinuity counts there — e.g.
    // slipping off the tower lip onto the 60 degree slide, which drops the feet 0.8 m in one tick.
    if (groundedNow && grounded0) {
      const d = ny - (y0 + stepped);
      const thr = g.ny > 0.98 ? 0.08 : 0.25;
      if (d > thr || d < -thr) pl.stepOff -= d;
    }
    pos[1] = ny;
    if (steep && groundedNow) {
      // too steep to stand: slide. keep contact (velocity in the surface plane) and let gravity act along it.
      groundedNow = false; pl.slide = 1;
      const vn = vel[0] * g.nx + vel[1] * g.ny + vel[2] * g.nz;
      vel[0] -= g.nx * vn; vel[1] -= g.ny * vn; vel[2] -= g.nz * vn;
    } else pl.slide = 0;
    resolveCeiling(pos, vel, h, r, cands, g.y);
    pl.gnx = g.nx; pl.gny = g.ny; pl.gnz = g.nz; pl.groundY = g.y;

    // +2: the tick the feet leave the ground still jumps off `grounded0`, and the counter is decremented at the end
    // of every airborne tick including that one, so a bare COYOTE_TICKS grants only COYOTE_TICKS-1 real chances.
    if (groundedNow) pl.coyote = COYOTE_TICKS + 2;
    else if (jumped) pl.coyote = 0;
    else if (pl.coyote > 0) pl.coyote--;
  }

  // ---- landing bookkeeping
  if (landed) {
    pl.land = 0; pl.landSpeed = -velY0;
    pl.landDrop = Math.max(0, Math.min(pl.fallTop - pos[1], velY0 * velY0 / (2 * GRAVITY)));
    pl.landN = (pl.landN + 1) % 65536;
  }
  else if (pl.land >= 0 && pl.land < 100000) pl.land++;
  if (groundedNow || swimming || pl.slide === 1 || pl.mantleT > 0 || !(pl.fallTop >= pos[1])) pl.fallTop = pos[1];
  if (groundedNow || swimming || dead) pl.chute = 0;

  // ---- eye catch-up. Decays AFTER this tick's offsets are applied: decaying first leaked a fraction of the
  // accumulated lag straight back into the eye on the same tick the feet rose, which is the stair sawtooth.
  // A max-rate follower (not an exponential) makes the eye rise at a bounded, near-constant speed, so a climb
  // reads as a continuous rise rather than a per-riser pop.
  if (pl.stepOff > 0.9) pl.stepOff = 0.9; else if (pl.stepOff < -0.9) pl.stepOff = -0.9;
  if (pl.stepOff !== 0) {
    const rate = EYE_CATCHUP_RATE + EYE_CATCHUP_GAIN * (pl.stepOff < 0 ? -pl.stepOff : pl.stepOff);
    pl.stepOff = moveToward(pl.stepOff, 0, rate * dt);
    if (pl.stepOff < 1e-4 && pl.stepOff > -1e-4) pl.stepOff = 0;
  }

  // ---- lean (blocked by walls, disabled while sprinting / prone / swimming)
  let leanT = (swimming || sprinting || e.stance === STANCE.PRONE || dead) ? 0 : ((btn & BTN.LEAN_R) ? 1 : 0) - ((btn & BTN.LEAN_L) ? 1 : 0);
  if (leanT !== 0) {
    const ey = pos[1] + h - EYE_DROP;
    if (pointBlocked(cands, pos[0] + cy * leanT * LEAN_OFFSET, ey, pos[2] - sy * leanT * LEAN_OFFSET, 0.2)) {
      leanT *= 0.5;
      if (pointBlocked(cands, pos[0] + cy * leanT * LEAN_OFFSET, ey, pos[2] - sy * leanT * LEAN_OFFSET, 0.2)) leanT = 0;
    }
  }
  pl.lean = moveToward(pl.lean, leanT, LEAN_RATE * dt);

  // ---- bounds
  const bb = map.bounds;
  if (bb) {
    if (pos[0] < bb[0] + r) { pos[0] = bb[0] + r; if (vel[0] < 0) vel[0] = 0; }
    if (pos[2] < bb[1] + r) { pos[2] = bb[1] + r; if (vel[2] < 0) vel[2] = 0; }
    if (pos[0] > bb[2] - r) { pos[0] = bb[2] - r; if (vel[0] > 0) vel[0] = 0; }
    if (pos[2] > bb[3] - r) { pos[2] = bb[3] - r; if (vel[2] > 0) vel[2] = 0; }
  }

  // ---- state flags
  pl.grounded = groundedNow ? 1 : 0;
  pl.swim = swimming ? 1 : 0;
  pl.wade = wading;
  const hspeed = Math.hypot(vel[0], vel[2]);
  let st = e.state & ~(STATE.SPRINT | STATE.ADS | STATE.GROUNDED | STATE.LEAN_L | STATE.LEAN_R | STATE.SWIMMING);
  if (sprinting && hspeed > 1) st |= STATE.SPRINT;
  if (ads) st |= STATE.ADS;
  if (groundedNow) { st |= STATE.GROUNDED; st &= ~STATE.JUMPING; }
  if (pl.lean < -0.05) st |= STATE.LEAN_L;
  if (pl.lean > 0.05) st |= STATE.LEAN_R;
  if (swimming) st |= STATE.SWIMMING;
  if (pl.chute === 1) st |= STATE.CHUTE; else st &= ~STATE.CHUTE;
  e.state = st;
  if (BODY_SCALE > 1) duckUnder(e, pl, world, h, dt);   // last: its collider query reuses the shared candidate list
  return e;
}

// ---------------------------------------------------------------------------------------------------------------
// queries

/** true while Space would open a parachute this tick (for the HUD prompt) */
export function chuteReady(e) {
  const pl = e?.ext?.pl;
  return !!pl && !(e.state & (STATE.DEAD | STATE.IN_VEHICLE)) && pl.chute === 0 && pl.grounded === 0 && pl.swim === 0 &&
    pl.mantleT === 0 && e.pos[1] - pl.groundY >= CHUTE_MIN_HEIGHT;
}

const _pres = { h: HEIGHTS[0], lean: 0, stepOff: 0, exact: false, scale: 1 };
/**
 * The presentation state every query below is built on: capsule height, lean and eye lag.
 * Uses `entity.ext.pl` when it exists (local prediction + server authority: exact), and otherwise reconstructs
 * from replicated fields only — stance for the height, the STATE.LEAN_L/LEAN_R bits for the lean — so a remote
 * soldier's hitboxes are never silently centred and full height. Returns a shared object; do not retain it.
 */
export function presentationFromState(e) {
  const pl = e.ext?.pl;
  if (pl) { _pres.h = pl.h; _pres.lean = pl.lean; _pres.stepOff = pl.stepOff; _pres.exact = true; _pres.scale = pl.bs ?? BODY_SCALE; return _pres; }
  _pres.h = HEIGHTS[e.stance | 0] ?? HEIGHTS[0];
  const st = e.state | 0;
  _pres.lean = (st & STATE.LEAN_R) ? 1 : (st & STATE.LEAN_L) ? -1 : 0;
  _pres.stepOff = 0; _pres.exact = false; _pres.scale = e.bs ?? BODY_SCALE;   // e.bs: the client's duck for a remote (duckRemote)
  return _pres;
}

/** eye height above the feet, including stance transition and step smoothing */
export function eyeHeight(e) {
  const p = presentationFromState(e);
  return (p.h - EYE_DROP) * p.scale + p.stepOff;   // the eye rides up with a scaled body (combat-tuning.js)
}

/**
 * How far forward of the capsule axis the eye sits. Zero upright; going prone the head moves out in front of the
 * capsule centre (see the prone hit capsules below), so without this the first-person camera ends up inside the
 * soldier's own chest and looks at the inside of his backpack.
 */
export function eyeForward(e) {
  const h = presentationFromState(e).h;
  const t = clamp((HEIGHTS[1] - h) / (HEIGHTS[1] - HEIGHTS[2]), 0, 1);
  return t * t * PRONE_EYE_FWD;
}

/** current capsule height */
export function capsuleHeight(e) {
  return presentationFromState(e).h;
}

/** world-space eye position including lean, written to out */
export function eyePosition(e, out = [0, 0, 0]) {
  const lean = presentationFromState(e).lean;
  const sy = Math.sin(e.yaw), cy = Math.cos(e.yaw);
  const f = eyeForward(e);
  out[0] = e.pos[0] + cy * lean * LEAN_OFFSET - sy * f;
  out[1] = e.pos[1] + eyeHeight(e);
  out[2] = e.pos[2] - sy * lean * LEAN_OFFSET - cy * f;
  return out;
}

// Conservative sphere about feet containing every hit capsule, including prone legs and full lean.
// This is only a broad phase; exact damage still resolves against hitboxes() below.
export const HIT_BOUNDS_RADIUS = 2;

// Per-map body scale (demo/combat-tuning.js; 1 everywhere but a trial map): the hit capsules grow about the feet with the
// rendered Cubie, and eyeHeight() rises with it. Movement and collision stay standard (the 1.8 m capsule), so doorways
// and cover work as before; only the bodies, the hit capsules and the eye are bigger.
export const GAME_BODY_SCALE = 1.3;   // the default every map plays at (combat-tuning.js); the lab shows Cubies at it too
let BODY_SCALE = 1;
export function setBodyScale(s = 1) { BODY_SCALE = s > 0 ? s : 1; }
export function bodyScale() { return BODY_SCALE; }
export function hitBoundsRadius() { return HIT_BOUNDS_RADIUS * Math.max(1, BODY_SCALE); }

// Low-ceiling duck: under anything lower than the scaled body (a door head, a porch, a low office ceiling) the body, the
// hit capsules and the eye shrink back toward the standard 1.8 m size, which the movement capsule always fits, so the
// camera never pokes through a lintel. Server and client prediction run it in stepPlayer (pl.bs); the client runs
// duckRemote() for everyone else from the same map colliders.
const DUCK_CLEAR = 0.06, DUCK_RATE = 2.5;
function ceilingAbove(world, pos, top) {
  const cands = gather(world, pos[0], pos[1], pos[2], RADIUS, top), y = pos[1];
  let ceil = Infinity;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false && !c.floorHeight) continue;
    const b = (c.movementAabb ?? c.aabb);
    if (b[4] <= y + 0.05 || b[1] >= y + top) continue;
    if (!inRect(pos[0], pos[2], b, RADIUS * 0.95)) continue;
    let under = b[1];
    if (c.floorHeight) { const fh = c.floorHeight(clamp(pos[0], b[0], b[3]), clamp(pos[2], b[2], b[5])); if (fh <= y + 0.05) continue; under = underside(c, fh); }
    if (under > y + 0.3) ceil = Math.min(ceil, under);   // lower boxes are walls the capsule already stays out of
  }
  return ceil - y;
}
// scale this body can stand at, given the room above its feet (1 = the standard body, which always fits)
function duckTarget(world, pos, h) {
  const full = h + 0.04, room = ceilingAbove(world, pos, full * BODY_SCALE + DUCK_CLEAR);
  return clamp((room - DUCK_CLEAR) / full, 1, BODY_SCALE);
}
function duckUnder(e, pl, world, h, dt) {
  const moved = Math.abs((pl.duckAt?.[0] ?? 1e9) - e.pos[0]) + Math.abs((pl.duckAt?.[1] ?? 0) - e.pos[1]) + Math.abs((pl.duckAt?.[2] ?? 0) - e.pos[2]) > 0.04;
  if (moved || pl.duckH !== h) { pl.duckT = duckTarget(world, e.pos, h); pl.duckAt = [e.pos[0], e.pos[1], e.pos[2]]; pl.duckH = h; }
  const t = pl.duckT ?? BODY_SCALE;
  // ducking is quick (you never see through the lintel), standing back up is gentle
  pl.bs = t < (pl.bs ?? BODY_SCALE) ? t : moveToward(pl.bs ?? BODY_SCALE, t, DUCK_RATE * 0.4 * dt);
}
/** client: the duck for a replicated soldier (no pl), cached per position; call once per frame before posing it */
export function duckRemote(e, world, dt) {
  if (BODY_SCALE <= 1 || !world?.map) { e.bs = BODY_SCALE; return e.bs; }
  const h = HEIGHTS[e.stance | 0] ?? HEIGHTS[0], k = e.duckKey ??= [NaN, 0, 0, 0];
  if (Math.abs(k[0] - e.pos[0]) + Math.abs(k[1] - e.pos[1]) + Math.abs(k[2] - e.pos[2]) > 0.04 || k[3] !== h) {
    e.duckT = duckTarget(world, e.pos, h); k[0] = e.pos[0]; k[1] = e.pos[1]; k[2] = e.pos[2]; k[3] = h;
  }
  const cur = e.bs ?? BODY_SCALE;
  e.bs = e.duckT < cur ? e.duckT : moveToward(cur, e.duckT, DUCK_RATE * 0.4 * dt);
  return e.bs;
}

/** hit capsules in world space: [{ part, capsule: { a:[x,y,z], b:[x,y,z], r } }] */
export function hitboxes(e, out = []) {
  standardHitboxes(e, out);
  const s = presentationFromState(e).scale;
  if (s !== 1) {
    const p = e.pos;
    for (const { capsule: c } of out) {
      for (const v of [c.a, c.b]) for (let i = 0; i < 3; i++) v[i] = p[i] + (v[i] - p[i]) * s;
      c.r *= s;
    }
  }
  return out;
}
function standardHitboxes(e, out) {
  out.length = 0;
  const p = presentationFromState(e);
  const h = p.h, lean = p.lean;
  const sy = Math.sin(e.yaw), cy = Math.cos(e.yaw);
  const px = e.pos[0], py = e.pos[1], pz = e.pos[2];
  // local frame: right = (cy, 0, -sy), forward = (-sy, 0, -cy)
  const cap = (part, rx0, y0, f0, rx1, y1, f1, rad) => {
    out.push({ part, capsule: {
      a: [px + cy * rx0 - sy * f0, py + y0, pz - sy * rx0 - cy * f0],
      b: [px + cy * rx1 - sy * f1, py + y1, pz - sy * rx1 - cy * f1],
      r: rad,
    } });
  };
  if (e.stance === STANCE.PRONE && h < 0.9) {
    // prone the head is held upright to look ahead (poses.js), so its capsule stands up like the standing one, at the
    // same height above the bottom of the head mesh (it used to lie at 0.36, below the face, so shots at it passed over)
    cap('head', 0, 0.50, 0.64, 0, 0.66, 0.64, 0.14);
    cap('torso', 0, 0.28, -0.2, 0, 0.3, 0.30, 0.2);
    // arms from the shoulders out to the hands on the rifle ahead of the head (the drawn prone pose, poses.js UPPER.prone;
    // they used to lie back along the ribs where no arm is drawn), legs ending at the drawn boots (they ran ~0.3 m past
    // them). Measured from the posed Cubie skeleton, owner 2026-10-05 "hitboxes don't feel quite right".
    cap('arm_l', -0.3, 0.33, 0.5, -0.2, 0.21, 1.02, 0.08);
    cap('arm_r', 0.3, 0.33, 0.5, 0.4, 0.17, 0.98, 0.08);
    cap('leg_l', -0.13, 0.17, -0.75, -0.13, 0.19, -0.25, 0.11);
    cap('leg_r', 0.13, 0.17, -0.75, 0.13, 0.19, -0.25, 0.11);
    return out;
  }
  const crouch = clamp((HEIGHTS[0] - h) / (HEIGHTS[0] - HEIGHTS[1]), 0, 1);
  const fwd = 0.12 * crouch;
  const lx = lean * LEAN_BODY_OFFSET;
  // The drawn crouch (poses.js STANCE.crouch: hips down, back nearly upright) carries the head 0.24 m and the shoulders
  // ~0.2 m higher than the movement capsule's crouch height suggests; the capsules follow the drawn body, or the top
  // third of a crouched head could not be hit (owner 2026-10-05: hitboxes don't feel right). Standing is unchanged.
  const up = 0.24 * crouch, chest = 0.2 * crouch;
  cap('head', lx, h - 0.29 + up, fwd + 0.02, lx, h - 0.12 + up, fwd + 0.02, 0.14);
  // Keep the rounded shoulder cap below the face; the old upper endpoint
  // let the larger torso surface intercept rays aimed into the head capsule.
  cap('torso', lx * 0.5, Math.min(h * 0.52,h-.54), fwd * 0.5, lx, h - 0.54 + chest, fwd, 0.22);
  // Arms top out at the drawn shoulder (pivot + upper-arm cap), not 0.14 m above it beside the jaw, where a side-on
  // shot at the chin came back as a limb hit (owner 2026-10-07).
  cap('arm_l', -0.32 + lx * 0.5, h * 0.55, fwd * 0.5, -0.32 + lx, h - 0.54 + chest * 0.5, fwd, 0.09);
  cap('arm_r', 0.32 + lx * 0.5, h * 0.55, fwd * 0.5, 0.32 + lx, h - 0.54 + chest * 0.5, fwd, 0.09);
  cap('leg_l', -0.13, 0.12, 0, -0.13, h * 0.5, fwd * 0.3, 0.12);
  cap('leg_r', 0.13, 0.12, 0, 0.13, h * 0.5, fwd * 0.3, 0.12);
  return out;
}

/** convenience for other modules: an AABB around the whole capsule */
export function boundingBox(e, out = [0, 0, 0, 0, 0, 0]) {
  const h = capsuleHeight(e);
  out[0] = e.pos[0] - RADIUS; out[1] = e.pos[1]; out[2] = e.pos[2] - RADIUS;
  out[3] = e.pos[0] + RADIUS; out[4] = e.pos[1] + h; out[5] = e.pos[2] + RADIUS;
  return out;
}
