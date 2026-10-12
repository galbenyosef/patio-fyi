// assets__sim-DKJ0nrRU 05 — the
// Lines 1690-1978 of readable/assets__sim-DKJ0nrRU.pretty.js (statement-aligned).
export function chuteReady(e) {
  const pl = e?.ext?.pl;
  return (
    !!pl &&
    !(e.state & (STATE.DEAD | STATE.IN_VEHICLE)) &&
    pl.chute === 0 &&
    pl.grounded === 0 &&
    pl.swim === 0 &&
    pl.mantleT === 0 &&
    e.pos[1] - pl.groundY >= CHUTE_MIN_HEIGHT
  );
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
  if (pl) {
    _pres.h = pl.h;
    _pres.lean = pl.lean;
    _pres.stepOff = pl.stepOff;
    _pres.exact = true;
    _pres.scale = pl.bs ?? BODY_SCALE;
    return _pres;
  }
  _pres.h = HEIGHTS[e.stance | 0] ?? HEIGHTS[0];
  const st = e.state | 0;
  _pres.lean = st & STATE.LEAN_R ? 1 : st & STATE.LEAN_L ? -1 : 0;
  _pres.stepOff = 0;
  _pres.exact = false;
  _pres.scale = e.bs ?? BODY_SCALE; // e.bs: the client's duck for a remote (duckRemote)
  return _pres;
}

/** eye height above the feet, including stance transition and step smoothing */
export function eyeHeight(e) {
  const p = presentationFromState(e);
  return (p.h - EYE_DROP) * p.scale + p.stepOff; // the eye rides up with a scaled body (combat-tuning.js)
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
  const sy = Math.sin(e.yaw),
    cy = Math.cos(e.yaw);
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
export const GAME_BODY_SCALE = 1.3; // the default every map plays at (combat-tuning.js); the lab shows Cubies at it too
let BODY_SCALE = 1;
export function setBodyScale(s = 1) {
  BODY_SCALE = s > 0 ? s : 1;
}
export function bodyScale() {
  return BODY_SCALE;
}
export function hitBoundsRadius() {
  return HIT_BOUNDS_RADIUS * Math.max(1, BODY_SCALE);
}

// Low-ceiling duck: under anything lower than the scaled body (a door head, a porch, a low office ceiling) the body, the
// hit capsules and the eye shrink back toward the standard 1.8 m size, which the movement capsule always fits, so the
// camera never pokes through a lintel. Server and client prediction run it in stepPlayer (pl.bs); the client runs
// duckRemote() for everyone else from the same map colliders.
const DUCK_CLEAR = 0.06,
  DUCK_RATE = 2.5;
function ceilingAbove(world, pos, top) {
  const cands = gather(world, pos[0], pos[1], pos[2], RADIUS, top),
    y = pos[1];
  let ceil = Infinity;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false && !c.floorHeight) continue;
    const b = c.movementAabb ?? c.aabb;
    if (b[4] <= y + 0.05 || b[1] >= y + top) continue;
    if (!inRect(pos[0], pos[2], b, RADIUS * 0.95)) continue;
    let under = b[1];
    if (c.floorHeight) {
      const fh = c.floorHeight(
        clamp(pos[0], b[0], b[3]),
        clamp(pos[2], b[2], b[5]),
      );
      if (fh <= y + 0.05) continue;
      under = underside(c, fh);
    }
    if (under > y + 0.3) ceil = Math.min(ceil, under); // lower boxes are walls the capsule already stays out of
  }
  return ceil - y;
}
// scale this body can stand at, given the room above its feet (1 = the standard body, which always fits)
function duckTarget(world, pos, h) {
  const full = h + 0.04,
    room = ceilingAbove(world, pos, full * BODY_SCALE + DUCK_CLEAR);
  return clamp((room - DUCK_CLEAR) / full, 1, BODY_SCALE);
}
function duckUnder(e, pl, world, h, dt) {
  const moved =
    Math.abs((pl.duckAt?.[0] ?? 1e9) - e.pos[0]) +
      Math.abs((pl.duckAt?.[1] ?? 0) - e.pos[1]) +
      Math.abs((pl.duckAt?.[2] ?? 0) - e.pos[2]) >
    0.04;
  if (moved || pl.duckH !== h) {
    pl.duckT = duckTarget(world, e.pos, h);
    pl.duckAt = [e.pos[0], e.pos[1], e.pos[2]];
    pl.duckH = h;
  }
  const t = pl.duckT ?? BODY_SCALE;
  // ducking is quick (you never see through the lintel), standing back up is gentle
  pl.bs =
    t < (pl.bs ?? BODY_SCALE)
      ? t
      : moveToward(pl.bs ?? BODY_SCALE, t, DUCK_RATE * 0.4 * dt);
}
/** client: the duck for a replicated soldier (no pl), cached per position; call once per frame before posing it */
export function duckRemote(e, world, dt) {
  if (BODY_SCALE <= 1 || !world?.map) {
    e.bs = BODY_SCALE;
    return e.bs;
  }
  const h = HEIGHTS[e.stance | 0] ?? HEIGHTS[0],
    k = (e.duckKey ??= [NaN, 0, 0, 0]);
  if (
    Math.abs(k[0] - e.pos[0]) +
      Math.abs(k[1] - e.pos[1]) +
      Math.abs(k[2] - e.pos[2]) >
      0.04 ||
    k[3] !== h
  ) {
    e.duckT = duckTarget(world, e.pos, h);
    k[0] = e.pos[0];
    k[1] = e.pos[1];
    k[2] = e.pos[2];
    k[3] = h;
  }
  const cur = e.bs ?? BODY_SCALE;
  e.bs =
    e.duckT < cur ? e.duckT : moveToward(cur, e.duckT, DUCK_RATE * 0.4 * dt);
  return e.bs;
}

/** hit capsules in world space: [{ part, capsule: { a:[x,y,z], b:[x,y,z], r } }] */
export function hitboxes(e, out = []) {
  standardHitboxes(e, out);
  const s = presentationFromState(e).scale;
  if (s !== 1) {
    const p = e.pos;
    for (const { capsule: c } of out) {
      for (const v of [c.a, c.b])
        for (let i = 0; i < 3; i++) v[i] = p[i] + (v[i] - p[i]) * s;
      c.r *= s;
    }
  }
  return out;
}
function standardHitboxes(e, out) {
  out.length = 0;
  const p = presentationFromState(e);
  const h = p.h,
    lean = p.lean;
  const sy = Math.sin(e.yaw),
    cy = Math.cos(e.yaw);
  const px = e.pos[0],
    py = e.pos[1],
    pz = e.pos[2];
  // local frame: right = (cy, 0, -sy), forward = (-sy, 0, -cy)
  const cap = (part, rx0, y0, f0, rx1, y1, f1, rad) => {
    out.push({
      part,
      capsule: {
        a: [px + cy * rx0 - sy * f0, py + y0, pz - sy * rx0 - cy * f0],
        b: [px + cy * rx1 - sy * f1, py + y1, pz - sy * rx1 - cy * f1],
        r: rad,
      },
    });
  };
  if (e.stance === STANCE.PRONE && h < 0.9) {
    // prone the head is held upright to look ahead (poses.js), so its capsule stands up like the standing one, at the
    // same height above the bottom of the head mesh (it used to lie at 0.36, below the face, so shots at it passed over)
    cap("head", 0, 0.5, 0.64, 0, 0.66, 0.64, 0.14);
    cap("torso", 0, 0.28, -0.2, 0, 0.3, 0.3, 0.2);
    // arms from the shoulders out to the hands on the rifle ahead of the head (the drawn prone pose, poses.js UPPER.prone;
    // they used to lie back along the ribs where no arm is drawn), legs ending at the drawn boots (they ran ~0.3 m past
    // them). Measured from the posed Cubie skeleton, owner 2026-10-05 "hitboxes don't feel quite right".
    cap("arm_l", -0.3, 0.33, 0.5, -0.2, 0.21, 1.02, 0.08);
    cap("arm_r", 0.3, 0.33, 0.5, 0.4, 0.17, 0.98, 0.08);
    cap("leg_l", -0.13, 0.17, -0.75, -0.13, 0.19, -0.25, 0.11);
    cap("leg_r", 0.13, 0.17, -0.75, 0.13, 0.19, -0.25, 0.11);
    return out;
  }
  const crouch = clamp((HEIGHTS[0] - h) / (HEIGHTS[0] - HEIGHTS[1]), 0, 1);
  const fwd = 0.12 * crouch;
  const lx = lean * LEAN_BODY_OFFSET;
  // The drawn crouch (poses.js STANCE.crouch: hips down, back nearly upright) carries the head 0.24 m and the shoulders
  // ~0.2 m higher than the movement capsule's crouch height suggests; the capsules follow the drawn body, or the top
  // third of a crouched head could not be hit (owner 2026-10-05: hitboxes don't feel right). Standing is unchanged.
  const up = 0.24 * crouch,
    chest = 0.2 * crouch;
  cap(
    "head",
    lx,
    h - 0.29 + up,
    fwd + 0.02,
    lx,
    h - 0.12 + up,
    fwd + 0.02,
    0.14,
  );
  // Keep the rounded shoulder cap below the face; the old upper endpoint
  // let the larger torso surface intercept rays aimed into the head capsule.
  cap(
    "torso",
    lx * 0.5,
    Math.min(h * 0.52, h - 0.54),
    fwd * 0.5,
    lx,
    h - 0.54 + chest,
    fwd,
    0.22,
  );
  // Arms top out at the drawn shoulder (pivot + upper-arm cap), not 0.14 m above it beside the jaw, where a side-on
  // shot at the chin came back as a limb hit (owner 2026-10-07).
  cap(
    "arm_l",
    -0.32 + lx * 0.5,
    h * 0.55,
    fwd * 0.5,
    -0.32 + lx,
    h - 0.54 + chest * 0.5,
    fwd,
    0.09,
  );
  cap(
    "arm_r",
    0.32 + lx * 0.5,
    h * 0.55,
    fwd * 0.5,
    0.32 + lx,
    h - 0.54 + chest * 0.5,
    fwd,
    0.09,
  );
  cap("leg_l", -0.13, 0.12, 0, -0.13, h * 0.5, fwd * 0.3, 0.12);
  cap("leg_r", 0.13, 0.12, 0, 0.13, h * 0.5, fwd * 0.3, 0.12);
  return out;
}

/** convenience for other modules: an AABB around the whole capsule */
export function boundingBox(e, out = [0, 0, 0, 0, 0, 0]) {
  const h = capsuleHeight(e);
  out[0] = e.pos[0] - RADIUS;
  out[1] = e.pos[1];
  out[2] = e.pos[2] - RADIUS;
  out[3] = e.pos[0] + RADIUS;
  out[4] = e.pos[1] + h;
  out[5] = e.pos[2] + RADIUS;
  return out;
}
