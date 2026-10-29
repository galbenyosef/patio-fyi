// assets__sim-dCf7ngvf 03 — pos
// Lines 696-1048 of readable/assets__sim-dCf7ngvf.pretty.js (statement-aligned).
function findTerrainMantle(pos, h, r, dx, dz, cands, world) {
  const map = world?.map;
  if (typeof map?.getHeight !== "function") return null;
  const feet = pos[1],
    here = map.getHeight(pos[0], pos[2]);
  if (!Number.isFinite(here) || feet - here > 0.6) return null; // standing on a floor/roof well above the terrain
  for (let i = 0; i < TERRAIN_MANTLE_REACH.length; i++) {
    const d = r + TERRAIN_MANTLE_REACH[i],
      lx = pos[0] + dx * d,
      lz = pos[2] + dz * d,
      top = map.getHeight(lx, lz);
    if (!Number.isFinite(top)) return null;
    const rise = top - feet;
    if (rise > TERRAIN_MANTLE_MAX) return null; // the face keeps going up: a cliff, not a ledge
    if (rise <= STEP_UP + 1e-3) continue;
    // Only a face too steep to walk is climbed; on a walkable slope Space stays an ordinary jump.
    const mid = map.getHeight(pos[0] + dx * d * 0.5, pos[2] + dz * d * 0.5);
    if (
      Math.max(mid - feet, top - mid) / (d * 0.5) <
      Math.tan((SLOPE_LIMIT_DEG * Math.PI) / 180)
    )
      continue;
    const beyond = map.getHeight(lx + dx * 0.5, lz + dz * 0.5);
    if (!Number.isFinite(beyond) || Math.abs(beyond - top) > 0.4) continue; // still on the face, try further in
    if (!headroomClear(cands, lx, top, lz, h, r)) return null;
    _mantle.x = lx;
    _mantle.y = top;
    _mantle.z = lz;
    return _mantle;
  }
  return null;
}

/** move the capsule out of solid boxes horizontally, stepping up onto low ledges. Mutates pos & vel. Returns rise stepped. */
function resolveHorizontal(pos, vel, h, r, cands, canStep, world) {
  const stepBase = pos[1];
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
      // a turned slab (closestXZ): the closest point of its own rotated footprint, not of its world bounding box
      let cx, cz;
      if (c.closestXZ) {
        c.closestXZ(pos[0], pos[2], fil, _cxz);
        cx = _cxz[0];
        cz = _cxz[1];
      } else {
        cx = clamp(pos[0], b[0] + fil, b[3] - fil);
        cz = clamp(pos[2], b[2] + fil, b[5] - fil);
      }
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
        if (d2 <= 1e-10 && c.exitXZ) {
          // inside a turned wall or rock (wedged by a neighbouring box): out through its nearest side, never onto its top
          c.exitXZ(pos[0], pos[2], _exit);
          const push = Math.min(_exit[2] + reach, MAX_DEPEN - depen);
          if (push <= 0) continue;
          depen += push;
          pos[0] += _exit[0] * push;
          pos[2] += _exit[1] * push;
          const vn = vel[0] * _exit[0] + vel[2] * _exit[1];
          if (vn < 0) {
            vel[0] -= _exit[0] * vn;
            vel[2] -= _exit[1] * vn;
          }
          any = true;
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
      } else if (top - stepBase <= STEP_UP && canStep) {
        // Stepping needs clearance over the whole supporting footprint, unlike
        // the slightly inset stance test. Otherwise brushing stacked fracture
        // bands climbs their outside edges like a ladder without moving inward.
        if (
          headroomClear(cands, pos[0], top, pos[2], h, (r + 0.01) / 0.95) ||
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
// Prone body (owner 2026-10-12: "boxes/coverage I'm half way inside of if I prone"): the upright movement cylinder
// covers only the hips, while the drawn prone body reaches ~1.1 m ahead (head, arms, rifle) and ~0.85 m behind (legs;
// see the prone hit capsules in standardHitboxes). Two low circles along the facing, one for the head and arms and one
// for the legs, push the soldier back out of any wall or cover they would lie inside, turning included.
export const PRONE_BODY = Object.freeze([
  { f: 0.68, r: 0.32 },
  { f: -0.5, r: 0.3 },
]);
const PRONE_CLEAR = 0.3; // boxes topping out lower than this above the feet are lain over, not pushed off
function resolveProneBody(pos, vel, yaw, h, cands) {
  const fx = -Math.sin(yaw),
    fz = -Math.cos(yaw);
  for (let iter = 0; iter < 3; iter++) {
    let any = false;
    for (const part of PRONE_BODY) {
      const px = pos[0] + fx * part.f,
        pz = pos[2] + fz * part.f,
        rr = part.r * part.r;
      for (let i = 0; i < cands.length; i++) {
        const c = cands[i];
        if (c.solid === false || c.floorHeight) continue;
        const b = c.movementAabb ?? c.aabb;
        if (b[4] <= pos[1] + PRONE_CLEAR || b[1] >= pos[1] + h - 1e-3) continue;
        const cx = clamp(px, b[0], b[3]),
          cz = clamp(pz, b[2], b[5]),
          dx = px - cx,
          dz = pz - cz,
          d2 = dx * dx + dz * dz;
        if (d2 >= rr) continue;
        let nx, nz, push;
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2);
          nx = dx / d;
          nz = dz / d;
          push = part.r - d;
        } else {
          nx = -fx * Math.sign(part.f);
          nz = -fz * Math.sign(part.f);
          push = part.r;
        } // the part is inside the box: back off along the body
        push = Math.min(push, 0.25);
        pos[0] += nx * push;
        pos[2] += nz * push;
        const vn = vel[0] * nx + vel[2] * nz;
        if (vn < 0) {
          vel[0] -= nx * vn;
          vel[2] -= nz * vn;
        }
        any = true;
      }
    }
    if (!any) return;
  }
}

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
      // A solid whose base is above the feet (a lintel over a doorway, a slab overhead) is not one the capsule is in.
      const buried =
        pos[1] < fh - 1e-3 &&
        pos[1] >= b[1] - 0.05 &&
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
          !headroomClear(cands, pos[0], top, pos[2], h, (r + 0.01) / 0.95)
        )
          continue; // full support footprint, also at a fragmented wall edge
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
