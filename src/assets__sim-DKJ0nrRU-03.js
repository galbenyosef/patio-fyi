// assets__sim-DKJ0nrRU 03 — pos
// Lines 689-998 of readable/assets__sim-DKJ0nrRU.pretty.js (statement-aligned).
function resolveHorizontal(pos, vel, h, r, cands, canStep, world) {
  let stepped = 0;
  let depen = 0; // metres of degenerate (inside-a-box) push spent this tick, capped at MAX_DEPEN
  for (let iter = 0; iter < 4; iter++) {
    let any = false;
    for (let i = 0; i < cands.length; i++) {
      const c = cands[i];
      if (c.solid === false) continue;
      const b = c.movementAabb ?? c.aabb;
      if (b[4] <= pos[1] + 1e-3) continue; // entirely below the feet: ground, not wall
      if (b[1] >= pos[1] + h - 1e-3) continue; // entirely above the head: ceiling, handled vertically
      const fil = Math.min(
        CORNER_ROUND,
        (b[3] - b[0]) * 0.5,
        (b[5] - b[2]) * 0.5,
      );
      const reach = r + fil;
      const cx = clamp(pos[0], b[0] + fil, b[3] - fil),
        cz = clamp(pos[2], b[2] + fil, b[5] - fil);
      const dx = pos[0] - cx,
        dz = pos[2] - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= reach * reach) continue;
      let top = b[4];
      if (c.floorHeight) {
        top = c.floorHeight(cx, cz);
        if (top <= pos[1] + 1e-3) continue; // low edge of a ramp/stair: walk onto it
        const under = underside(c, top);
        if (under >= pos[1] + h - 1e-3) continue; // the flight passes overhead: open space under a stair
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
            const slope = hl / _n[1],
              dx2 = -_n[0] / hl,
              dz2 = -_n[2] / hl; // uphill unit direction
            const push = Math.min(
              (pos[1] + h - under + 1e-3) / slope,
              MAX_DEPEN - depen,
            );
            if (push > 0) {
              depen += push;
              pos[0] += dx2 * push;
              pos[2] += dz2 * push;
              const vn = vel[0] * dx2 + vel[2] * dz2;
              if (vn < 0) {
                vel[0] -= dx2 * vn;
                vel[2] -= dz2 * vn;
              }
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
        if (
          headroomClear(cands, pos[0], top, pos[2], h, r) ||
          pos[1] >= top - 1e-3
        ) {
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
        const d = Math.sqrt(d2);
        nx = dx / d;
        nz = dz / d;
        pos[0] = cx + nx * reach;
        pos[2] = cz + nz * reach;
      } else {
        // The capsule centre is inside the box's footprint. If the box is a low CEILING (it starts well above the
        // feet) the body is simply standing under something too low: pushing it sideways would fling a soldier out
        // of a tunnel he is lying in while his stance is still blending. Leave it to the stance/ceiling passes.
        if (b[1] > pos[1] + 0.35) continue;
        // Otherwise leave along the shallowest horizontal axis, capped: a body inside a big volume walks out over a
        // few ticks instead of being flung across the map (a legitimate one-tick overlap is at most 0.11 m + r).
        const dl = pos[0] - (b[0] + fil),
          dr = b[3] - fil - pos[0],
          dn = pos[2] - (b[2] + fil),
          df = b[5] - fil - pos[2];
        let m = dl;
        nx = -1;
        nz = 0;
        if (dr < m) {
          m = dr;
          nx = 1;
          nz = 0;
        }
        if (dn < m) {
          m = dn;
          nx = 0;
          nz = -1;
        }
        if (df < m) {
          m = df;
          nx = 0;
          nz = 1;
        }
        const push = Math.min(m + reach, MAX_DEPEN - depen);
        if (push <= 0) continue;
        depen += push;
        pos[0] += nx * push;
        pos[2] += nz * push;
      }
      const vn = vel[0] * nx + vel[2] * nz;
      if (vn < 0) {
        // slide: remove the into-wall component, then keep most of the original speed along the tangent so
        // grazing a crate corner deflects instead of grinding to a halt (head-on still stops: tangent = 0)
        const s0 = Math.hypot(vel[0], vel[2]);
        vel[0] -= nx * vn;
        vel[2] -= nz * vn;
        const s1 = Math.hypot(vel[0], vel[2]);
        if (s1 > 0.15 && s0 > s1) {
          const k = (s1 + (s0 - s1) * WALL_SLIDE_KEEP) / s1;
          vel[0] *= k;
          vel[2] *= k;
        }
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
  return GROUND_SNAP + (RADIUS * Math.sqrt(Math.max(0, 1 - ny * ny))) / ny;
}

const _g = { y: 0, nx: 0, ny: 1, nz: 0 };
/** highest walkable surface under the capsule that is not more than STEP_UP above the feet */
function computeGround(pos, r, h, cands, world) {
  const map = world.map;
  let gy = map.getHeight(pos[0], pos[2]);
  _n[0] = 0;
  _n[1] = 1;
  _n[2] = 0;
  if (map.getNormal) map.getNormal(pos[0], pos[2], _n);
  let nx = _n[0],
    ny = _n[1],
    nz = _n[2];
  if (!(ny > 0)) {
    nx = 0;
    ny = 1;
    nz = 0;
  }
  const limit = pos[1] + STEP_UP + 1e-3;
  const rr = (r + 0.01) * (r + 0.01); // same reach as the wall test so a stepped-onto box is also ground
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (
      c.overrideGround &&
      c.floorHeight &&
      inRect(pos[0], pos[2], c.movementAabb ?? c.aabb)
    ) {
      gy = c.floorHeight(pos[0], pos[2]);
      nx = 0;
      ny = 1;
      nz = 0;
    }
  }
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i];
    if (c.overrideGround) continue;
    const b = c.movementAabb ?? c.aabb;
    if (c.floorHeight) {
      if (!inRect(pos[0], pos[2], b)) continue;
      const fh = c.floorHeight(pos[0], pos[2]);
      // `fh` further than STEP_UP above the feet is a wall, not ground — EXCEPT when the feet are *below* it, i.e.
      // the capsule is inside the solid. Then the surface is the only place it can legally be, at any distance.
      // Under a thickness stair the feet are below the slab: the real ground applies, not the surface overhead.
      const buried =
        pos[1] < fh - 1e-3 &&
        !(c.floorThickness > 0 && pos[1] < underside(c, fh) - 0.05);
      if (fh > gy && (fh <= limit || buried)) {
        gy = fh;
        surfaceNormal(c, pos[0], pos[2], _n);
        nx = _n[0];
        ny = _n[1];
        nz = _n[2];
      }
    } else if (c.solid !== false) {
      const top = b[4];
      if (top > gy && top <= limit && rectDist2(pos[0], pos[2], b) < rr) {
        if (
          top > pos[1] + 0.02 &&
          !headroomClear(cands, pos[0], top, pos[2], h, r)
        )
          continue; // a lip under a low ceiling
        gy = top;
        nx = 0;
        ny = 1;
        nz = 0;
      }
    }
  }
  _g.y = gy;
  _g.nx = nx;
  _g.ny = ny;
  _g.nz = nz;
  return _g;
}

/** push the capsule down out of a ceiling it is intersecting — but never below the ground it is standing on. A
 *  body too tall for the headroom (mid stance-blend, or force-placed) keeps its feet on the floor and its head in
 *  the ceiling for a few ticks; sinking it through the floor put it inside the ground slab, which the horizontal
 *  pass then treated as a wall and shoved it sideways out of the tunnel. */
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

