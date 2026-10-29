// assets__sim-dCf7ngvf 02 — the
// Lines 371-695 of readable/assets__sim-dCf7ngvf.pretty.js (statement-aligned).
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
export function walkingCorridor(world, start, end, candidates = null) {
  const length = Math.hypot(end[0] - start[0], end[2] - start[2]);
  const steps = Math.max(1, Math.ceil(length / 0.2)),
    pos = start.slice(),
    vel = [0, 0, 0];
  const cols = world.map.colliders,
    margin = RADIUS + 0.1;
  const x0 = Math.min(start[0], end[0]) - margin,
    x1 = Math.max(start[0], end[0]) + margin,
    z0 = Math.min(start[2], end[2]) - margin,
    z1 = Math.max(start[2], end[2]) + margin;
  const relevant = (c) => {
    const b = c.movementAabb ?? c.aabb;
    return (
      b &&
      !c.noPlayer &&
      (c.solid !== false || c.floorHeight) &&
      b[0] <= x1 &&
      b[3] >= x0 &&
      b[2] <= z1 &&
      b[5] >= z0 &&
      b[1] < start[1] + HEIGHTS[0] + STEP_UP &&
      b[4] > start[1] - 0.7
    );
  };
  // The index filters before its stable ordering: a tower column no longer sorts every floor for each probe.
  const cands = candidates
    ? [...candidates].filter(relevant)
    : cols.queryMovement
      ? cols.queryMovement(
          x0,
          start[1] - 0.7,
          z0,
          x1,
          start[1] + HEIGHTS[0] + STEP_UP,
          z1,
          relevant,
        )
      : cols.query
        ? cols.query(x0, z0, x1, z1, relevant)
        : [...cols.values()].filter(relevant);
  for (let i = 1; i <= steps; i++) {
    const x = start[0] + ((end[0] - start[0]) * i) / steps,
      z = start[2] + ((end[2] - start[2]) * i) / steps,
      previousY = pos[1];
    pos[0] = x;
    pos[2] = z;
    resolveHorizontal(pos, vel, HEIGHTS[0], RADIUS, cands, true, world);
    if (Math.hypot(pos[0] - x, pos[2] - z) > 0.025) return null;
    const g = computeGround(pos, RADIUS, HEIGHTS[0], cands, world);
    if (
      g.y - previousY > STEP_UP + 0.02 ||
      previousY - g.y > 0.65 ||
      g.ny < 0.55
    )
      return null;
    pos[1] = g.y;
    // (the capsule's foot over a slab's edge a step up, Observatory Ridge's drum plinth, before its centre is on the slab:
    // a soldier steps up onto it, so the body raised by a step is what has to fit)
    if (
      !headroomClear(cands, ...pos, HEIGHTS[0], RADIUS) &&
      !headroomClear(
        cands,
        pos[0],
        pos[1] + STEP_UP,
        pos[2],
        HEIGHTS[0],
        RADIUS,
      )
    )
      return null;
  }
  return pos;
}

/** is a small sphere at (x,y,z) inside any solid box? (lean check) */
function pointBlocked(cands, x, y, z, rad) {
  const rr = rad * rad;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false) continue;
    const b = c.movementAabb ?? c.aabb;
    if (b[1] > y + rad || b[4] < y - rad) continue;
    if (c.floorHeight) {
      if (inRect(x, z, b) && c.floorHeight(x, z) > y - rad) return true;
      continue;
    }
    if (rectDist2(x, z, b) < rr) return true;
  }
  return false;
}

/** ground friction. The velocity component along the wish direction is exempt (so accel reaches the wish speed),
 *  except any excess above wishSpeed which decays normally. Everything else decays with FRICTION and STOP_SPEED. */
function applyFriction(vel, dt, wx, wz, wishSpeed) {
  const speed = Math.hypot(vel[0], vel[2]);
  if (speed < 1e-4) {
    vel[0] = 0;
    vel[2] = 0;
    return;
  }
  const control = speed < STOP_SPEED ? STOP_SPEED : speed;
  const drop = control * FRICTION * dt;
  const ns = speed - drop > 0 ? speed - drop : 0;
  const f = ns / speed;
  if (wishSpeed > 0) {
    const par = vel[0] * wx + vel[2] * wz;
    if (par > 0) {
      const npar = par > wishSpeed ? Math.max(wishSpeed, par * f) : par;
      const px = vel[0] - wx * par,
        pz = vel[2] - wz * par; // perpendicular part
      vel[0] = wx * npar + px * f;
      vel[2] = wz * npar + pz * f;
      return;
    }
  }
  vel[0] *= f;
  vel[2] *= f;
}

function accelerate(vel, wx, wz, wishSpeed, accel, dt) {
  if (wishSpeed <= 0) return;
  const cur = vel[0] * wx + vel[2] * wz;
  const add = wishSpeed - cur;
  if (add <= 0) return;
  const a = accel * dt;
  const s = a < add ? a : add;
  vel[0] += wx * s;
  vel[2] += wz * s;
}

const _n = [0, 1, 0];
function surfaceNormal(c, x, z, out) {
  if (c.floorNormal) {
    c.floorNormal(x, z, out);
    return out;
  }
  const b = c.movementAabb ?? c.aabb,
    e = 0.05;
  const hx0 = c.floorHeight(clamp(x - e, b[0], b[3]), z),
    hx1 = c.floorHeight(clamp(x + e, b[0], b[3]), z);
  const hz0 = c.floorHeight(x, clamp(z - e, b[2], b[5])),
    hz1 = c.floorHeight(x, clamp(z + e, b[2], b[5]));
  let nx = -(hx1 - hx0) / (2 * e),
    nz = -(hz1 - hz0) / (2 * e);
  const il = 1 / Math.hypot(nx, 1, nz);
  out[0] = nx * il;
  out[1] = il;
  out[2] = nz * il;
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
    const m = findMantleAt(
      pos,
      h,
      r,
      dx,
      dz,
      cands,
      reach,
      MANTLE_PROBES[i],
      minW,
    );
    if (m) return m;
  }
  return null;
}
function findMantleAt(pos, h, r, dx, dz, cands, reach, ahead, minW = 0) {
  const px = pos[0] + dx * (r + ahead),
    pz = pos[2] + dz * (r + ahead);
  const lo = pos[1] + STEP_UP + 1e-3,
    hi = pos[1] + reach;
  let best = null,
    bestTop = -Infinity;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false || c.floorHeight) continue;
    const b = c.movementAabb ?? c.aabb,
      top = b[4];
    if (top <= lo || top > hi || top <= bestTop) continue;
    if (minW > 0 && (b[3] - b[0] < minW || b[5] - b[2] < minW)) continue; // a bot: no sills, awnings or rails
    if (b[1] > pos[1] + h * 0.5) continue; // a slab floating above the waist is a ceiling, not a ledge
    if (!inRect(px, pz, b)) continue; // must be right in front
    if (inRect(pos[0], pos[2], b)) continue; // already inside its footprint: not a face to climb
    // land with the capsule axis over the box (a thin rail is stood on at its centre line)
    const lx = clamp(
      px,
      b[0] + Math.min(r, (b[3] - b[0]) * 0.5),
      b[3] - Math.min(r, (b[3] - b[0]) * 0.5),
    );
    const lz = clamp(
      pz,
      b[2] + Math.min(r, (b[5] - b[2]) * 0.5),
      b[5] - Math.min(r, (b[5] - b[2]) * 0.5),
    );
    if (!headroomClear(cands, lx, top, lz, h, r)) continue;
    // nothing else solid pokes up through the landing spot (a crate on the sill)
    let blocked = false;
    for (let j = 0; j < cands.length && !blocked; j++) {
      const o = cands[j];
      if (o === c || o.solid === false || o.floorHeight) continue;
      if (
        (o.movementAabb ?? o.aabb)[4] > top + 0.05 &&
        (o.movementAabb ?? o.aabb)[1] < top + h &&
        rectDist2(lx, lz, o.movementAabb ?? o.aabb) < r * r
      )
        blocked = true;
    }
    if (blocked) continue;
    bestTop = top;
    _mantle.x = lx;
    _mantle.y = top;
    _mantle.z = lz;
    best = _mantle;
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
  const feet = pos[1],
    base = Math.min(feet, groundY),
    reach = r + VAULT_REACH; // height counts from the ground, not mid-jump
  let best = null,
    bestT = Infinity;
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false || c.floorHeight) continue;
    const b = c.movementAabb ?? c.aabb,
      top = b[4];
    if (
      top <= feet + STEP_UP + 1e-3 ||
      top > base + VAULT_MAX ||
      b[1] > base + 0.6
    )
      continue;
    if (inRect(pos[0], pos[2], b)) continue;
    // where the travel line from the capsule axis enters and leaves the box footprint (slab test)
    let t0 = -Infinity,
      t1 = Infinity;
    for (const [o, d, lo, hi] of [
      [pos[0], dx, b[0], b[3]],
      [pos[2], dz, b[2], b[5]],
    ]) {
      if (Math.abs(d) < 1e-6) {
        if (o < lo || o > hi) {
          t0 = Infinity;
          break;
        }
        continue;
      }
      let a = (lo - o) / d,
        z = (hi - o) / d;
      if (a > z) [a, z] = [z, a];
      if (a > t0) t0 = a;
      if (z < t1) t1 = z;
    }
    if (!(t0 <= t1) || t0 < 0 || t0 > reach || t0 >= bestT) continue;
    if (t1 - t0 > VAULT_THICK) continue;
    const across = Math.abs(dx) > Math.abs(dz) ? b[5] - b[2] : b[3] - b[0];
    if (across < VAULT_MIN_LEN) continue;
    // over the top: the body crosses hunched (1 m) at the middle of the box, nothing may hang there
    const cx = pos[0] + (dx * (t0 + t1)) / 2,
      cz = pos[2] + (dz * (t0 + t1)) / 2;
    if (!headroomClear(cands, cx, top, cz, 1.0, r * 0.6)) continue;
    // the far side: standable ground about level with the feet, full headroom
    const lx = pos[0] + dx * (t1 + r + 0.12),
      lz = pos[2] + dz * (t1 + r + 0.12);
    const far = gather(world, lx, feet, lz, r, h);
    _vaultProbe[0] = lx;
    _vaultProbe[1] = Math.min(top, feet + 0.45);
    _vaultProbe[2] = lz;
    const g = computeGround(_vaultProbe, r, h, far, world);
    if (g.y < feet - VAULT_DROP || g.y > feet + 0.45 || g.ny < SLOPE_COS)
      continue;
    if (!headroomClear(far, lx, g.y, lz, h, r)) continue;
    bestT = t0;
    _vault.x = lx;
    _vault.y = g.y;
    _vault.z = lz;
    _vault.mx = cx;
    _vault.my = top + 0.05;
    _vault.mz = cz;
    _vault.rise = top - feet;
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
