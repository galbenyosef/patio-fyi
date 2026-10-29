// assets__sim-dCf7ngvf 04 — pos
// Lines 1049-1124 of readable/assets__sim-dCf7ngvf.pretty.js (statement-aligned).
function resolveCeiling(pos, vel, h, r, cands, groundY) {
  const rr = r * 0.9 * (r * 0.9);
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.solid === false) continue;
    const b = c.movementAabb ?? c.aabb;
    if (c.floorHeight) {
      // the underside of a thickness stair is a ceiling for a capsule under it (jumping under a flight)
      if (!(c.floorThickness > 0) || !inRect(pos[0], pos[2], b, r * 0.9))
        continue;
      const fh = c.floorHeight(
          clamp(pos[0], b[0], b[3]),
          clamp(pos[2], b[2], b[5]),
        ),
        under = underside(c, fh);
      if (pos[1] >= under - 0.05 || pos[1] + h <= under) continue;
      const y = under - h;
      if (y < pos[1]) pos[1] = y > groundY ? y : groundY;
      if (vel[1] > 0) vel[1] = 0;
      continue;
    }
    if (
      b[1] >= pos[1] + h ||
      b[1] < pos[1] + h * 0.5 ||
      b[4] <= pos[1] + h * 0.5
    )
      continue;
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
const _land = [0, 0, 0],
  _lp = [0, 0, 0];
function ladderLanding(L, world) {
  const [lx, lz] = ladderLook(L),
    h = HEIGHTS[0];
  // past the rails first (a deck behind the ladder), then the climber's own spot (a ladder up through a scaffold lift)
  const distances =
    Number.isFinite(L.landingOffset) && L.landingOffset > 0
      ? [L.landingOffset, 0.5, 0.7, 0.9, -LADDER_OFF]
      : [0.5, 0.7, 0.9, -LADDER_OFF];
  for (const d of distances) {
    const x = L.x + lx * d,
      z = L.z + lz * d;
    const cands = gather(world, x, L.y1, z, RADIUS, h);
    _lp[0] = x;
    _lp[1] = L.y1 + 0.1;
    _lp[2] = z;
    const g = computeGround(_lp, RADIUS, h, cands, world);
    if (
      Math.abs(g.y - L.y1) > 0.45 ||
      !headroomClear(cands, x, g.y, z, h, RADIUS)
    )
      continue;
    _land[0] = x;
    _land[1] = g.y;
    _land[2] = z;
    return _land;
  }
  return null;
}

