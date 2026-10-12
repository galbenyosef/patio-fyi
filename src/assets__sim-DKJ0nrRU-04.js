// assets__sim-DKJ0nrRU 04 — pos
// Lines 999-1689 of readable/assets__sim-DKJ0nrRU.pretty.js (statement-aligned).
export function stepPlayer(e, input, world, dt) {
  const pl = e.ext.pl || initPlayer(e);
  if (e.state & STATE.IN_VEHICLE) return e;
  carryLift(e, world);
  if (world.map.hangar) hangarRide(e, world); // Hangar Nine: ride the towed plane, and be shoved clear of it (hangar-sim.js)
  if (world.map.bascule) basculeRide(e, world); // Bascule: a lifting leaf slides whoever is on it back to its hinge (bascule-sim.js)
  if (world.map.mesa) mesaRide(e, world); // Mesa Dome: ride the rolling field tray and the stage gear, be shoved clear (mesa-sim.js)
  const pos = e.pos,
    vel = e.vel,
    map = world.map;
  if (
    !Number.isFinite(pos[0]) ||
    !Number.isFinite(pos[1]) ||
    !Number.isFinite(pos[2])
  ) {
    pos[0] = 0;
    pos[1] = map.getHeight(0, 0);
    pos[2] = 0;
  }
  if (
    !Number.isFinite(vel[0]) ||
    !Number.isFinite(vel[1]) ||
    !Number.isFinite(vel[2])
  ) {
    vel[0] = 0;
    vel[1] = 0;
    vel[2] = 0;
  }

  const dead = (e.state & STATE.DEAD) !== 0;
  const btn = dead ? 0 : input.buttons | 0;
  const pressed = btn & ~pl.prevBtn;
  pl.prevBtn = btn;
  if (!dead) {
    const yaw = +input.yaw || 0,
      pitch = +input.pitch || 0;
    e.yaw = yaw;
    e.pitch = clamp(pitch, -MAX_PITCH, MAX_PITCH);
  }
  // ---- zipline (map.ziplines): Interact at either end grabs the line; while riding, the line owns the soldier's
  // movement for the tick (collision suspended, as in a mantle). Jump or Interact lets go; dying drops the rider.
  if (dead) pl.zip = 0;
  else if (!pl.zip && pressed & BTN.INTERACT && map.ziplines?.length) {
    const grab = zipGrab(world, pos);
    if (grab) zipAttach(e, pl, grab, world);
  }
  if (pl.zip) {
    zipStep(e, pl, world, dt, (pressed & (BTN.JUMP | BTN.INTERACT)) !== 0);
    if (e.stance !== STANCE.STAND) {
      pl.stanceFrom = e.stance;
      e.stance = STANCE.STAND;
    }
    pl.h = moveToward(pl.h, HEIGHTS[0], 5 * dt);
    pl.grounded = 0;
    pl.swim = 0;
    pl.wade = 0;
    pl.slide = 0;
    pl.coyote = 0;
    pl.lean = moveToward(pl.lean, 0, LEAN_RATE * dt);
    e.state =
      (e.state &
        ~(
          STATE.SPRINT |
          STATE.ADS |
          STATE.GROUNDED |
          STATE.LEAN_L |
          STATE.LEAN_R |
          STATE.SWIMMING
        )) |
      STATE.JUMPING;
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
  else if (
    !pl.lad &&
    map.ladders?.length &&
    pl.mantleT === 0 &&
    pl.swim === 0 &&
    e.stance !== STANCE.PRONE &&
    !e.ext?.noLadder
  ) {
    const sy = Math.sin(e.yaw),
      cy = Math.cos(e.yaw);
    let wx = cy * mx - sy * mz,
      wz = -sy * mx - cy * mz;
    const wl = Math.hypot(wx, wz);
    if (wl > 0.3) {
      wx /= wl;
      wz /= wl;
    } else {
      wx = 0;
      wz = 0;
    }
    const grab = ladderGrab(
      world,
      pos,
      wx,
      wz,
      (pressed & BTN.INTERACT) !== 0,
      pl.grounded === 1,
      e.pitch,
    );
    if (grab) ladderAttach(e, pl, grab, world);
  }
  if (pl.lad) {
    const L = map.ladders[pl.lad - 1];
    const res = ladderStep(
      e,
      pl,
      world,
      dt,
      mx,
      mz,
      (btn & BTN.SPRINT) !== 0,
      (pressed & BTN.JUMP) !== 0,
      (pressed & BTN.INTERACT) !== 0,
    );
    if (res === "top") {
      const land = L && ladderLanding(L, world);
      if (land) {
        // step off onto the deck: the mantle branch carries the soldier there from the next tick
        pl.lad = 0;
        pl.vault = 0;
        pl.mantleN = Math.max(1, Math.round(MANTLE_TIME / dt));
        pl.mantleT = pl.mantleN;
        pl.mantleSX = pos[0];
        pl.mantleSY = pos[1];
        pl.mantleSZ = pos[2];
        pl.mantleTX = land[0];
        pl.mantleTY = land[1];
        pl.mantleTZ = land[2];
      }
    }
    if (pl.lad || res === "top") {
      if (e.stance !== STANCE.STAND) {
        pl.stanceFrom = e.stance;
        e.stance = STANCE.STAND;
      }
      pl.h = moveToward(pl.h, HEIGHTS[0], 5 * dt);
      pl.grounded = 0;
      pl.swim = 0;
      pl.wade = 0;
      pl.slide = 0;
      pl.coyote = 0;
      pl.chute = 0;
      pl.fallTop = pos[1];
      pl.lean = moveToward(pl.lean, 0, LEAN_RATE * dt);
      e.state =
        e.state &
        ~(
          STATE.SPRINT |
          STATE.ADS |
          STATE.GROUNDED |
          STATE.LEAN_L |
          STATE.LEAN_R |
          STATE.SWIMMING |
          STATE.JUMPING |
          STATE.CHUTE
        );
      return e;
    }
    pl.fallTop = pos[1]; // let go or reached the foot: any fall is measured from here
  }

  // ---- water. `map.waterLevel` is the surface height; the optional `map.waterBounds = [minX,minZ,maxX,maxZ]`
  // restricts it to a footprint (a pool), so a 6 cm pond does not nominally submerge the whole map.
  const wb = map.waterBounds;
  const inWater =
    !wb ||
    (pos[0] >= wb[0] && pos[0] <= wb[2] && pos[2] >= wb[1] && pos[2] <= wb[3]);
  const wl =
    inWater && typeof map.waterLevel === "number" ? map.waterLevel : -Infinity;
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
  let want = swimming
    ? STANCE.STAND
    : btn & BTN.PRONE
      ? STANCE.PRONE
      : btn & BTN.CROUCH
        ? STANCE.CROUCH
        : STANCE.STAND;
  // Sprinting lifts you straight out of a crouch or prone (headroom permitting, below).
  if (sprintWant && want !== STANCE.STAND) want = STANCE.STAND;
  if (want < e.stance) {
    // getting taller: need headroom
    if (!headroomClear(cands, pos[0], pos[1], pos[2], HEIGHTS[want], r)) {
      if (
        want === STANCE.STAND &&
        e.stance === STANCE.PRONE &&
        headroomClear(cands, pos[0], pos[1], pos[2], HEIGHTS[STANCE.CROUCH], r)
      )
        want = STANCE.CROUCH;
      else want = e.stance;
    }
  }
  if (want !== e.stance) {
    pl.stanceFrom = e.stance;
    e.stance = want;
  }
  const targetH = HEIGHTS[e.stance];
  if (pl.h !== targetH) {
    const fromH = HEIGHTS[pl.stanceFrom] ?? HEIGHTS[0];
    const time = STANCE_TIME[pl.stanceFrom]?.[e.stance] || 0.2;
    const rate = Math.abs(targetH - fromH) / time || 5;
    pl.h = moveToward(pl.h, targetH, rate * dt);
  }
  const h = pl.h;

  // ---- wish direction (yaw 0 faces -Z; right = (cos yaw, 0, -sin yaw))
  const sy = Math.sin(e.yaw),
    cy = Math.cos(e.yaw);
  let wx = cy * mx - sy * mz,
    wz = -sy * mx - cy * mz;
  let wlen = Math.hypot(wx, wz);
  if (wlen > 1e-6) {
    wx /= wlen;
    wz /= wlen;
  }
  if (wlen > 1) wlen = 1;

  let speed = SPEEDS.walk;
  if (e.stance === STANCE.CROUCH) speed = SPEEDS.crouch;
  else if (e.stance === STANCE.PRONE) speed = SPEEDS.prone;
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
  let groundedNow = false,
    landed = false;

  // Jump buffer: the tick the press lands must not also consume a tick of the buffer, or the window is one tick
  // shorter than JUMP_BUFFER_TICKS. Same for coyote below.
  const jumpPressed = (pressed & BTN.JUMP) !== 0;
  if (jumpPressed && !swimming) pl.jumpBuf = JUMP_BUFFER_TICKS + 1;
  if (dead || swimming || grounded0) pl.chute = 0;
  else if (
    jumpPressed &&
    pl.chute === 0 &&
    pl.mantleT === 0 &&
    pos[1] - pl.groundY >= CHUTE_MIN_HEIGHT
  ) {
    pl.chute = 1;
    pl.jumpBuf = 0;
  }
  // Mantle: a jump press while pushing into (or facing) a climbable ledge, or a live jump carrying the capsule
  // into one. Starts the scripted climb this tick; the mantle branch below then runs instead of ground/air.
  if (dead) pl.mantleT = 0;
  else if (
    pl.mantleT === 0 &&
    !swimming &&
    e.stance !== STANCE.PRONE &&
    pl.slide === 0 &&
    (pl.jumpBuf > 0 || (!grounded0 && e.state & STATE.JUMPING && wlen >= 0.3))
  ) {
    let dx = wx,
      dz = wz;
    if (wlen < 0.3) {
      dx = -sy;
      dz = -cy;
    } // no movement input: climb what is faced
    // a thin fence or rail is climbed over when its far side is clear; anything else is climbed onto
    // (findVault probes the far side through the shared broadphase list: give it a copy, then put ours back)
    const own = cands.slice(),
      v = findVault(pos, h, r, dx, dz, own, world, pl.groundY);
    cands.length = 0;
    for (let i = 0; i < own.length; i++) cands.push(own[i]);
    // on the ground the ledge must be within chest height; in a jump the hands reach up for a pull-up
    const reach =
      !grounded0 && e.state & STATE.JUMPING ? CLIMB_REACH : MANTLE_MAX;
    const m =
      v ??
      findMantle(
        pos,
        h,
        r,
        dx,
        dz,
        cands,
        reach,
        e.ext?.bot ? BOT_MANTLE_MIN : 0,
      ) ??
      findTerrainMantle(pos, h, r, dx, dz, cands, world);
    pl.vault = v ? 1 : 0;
    if (v) {
      pl.vaultMX = v.mx;
      pl.vaultMY = v.my;
      pl.vaultMZ = v.mz;
    }
    if (m) {
      const time = v
        ? VAULT_TIME + VAULT_TIME_PER_M * v.rise
        : MANTLE_TIME +
          CLIMB_TIME_PER_M * Math.max(0, m.y - pos[1] - MANTLE_MAX);
      pl.mantleN = Math.max(1, Math.round(time / dt));
      pl.mantleT = pl.mantleN;
      pl.mantleSX = pos[0];
      pl.mantleSY = pos[1];
      pl.mantleSZ = pos[2];
      pl.mantleTX = m.x;
      pl.mantleTY = m.y;
      pl.mantleTZ = m.z;
      pl.jumpBuf = 0;
      pl.coyote = 0;
      e.state |= STATE.JUMPING;
    }
  }

  if (swimming) {
    // ---- swimming: 3D movement along the look direction, damped, buoyant
    const cp = Math.cos(e.pitch),
      sp = Math.sin(e.pitch);
    let ax = -sy * cp * mz + cy * mx,
      ay = sp * mz,
      az = -cy * cp * mz - sy * mx;
    if (btn & BTN.JUMP) ay += 1;
    if (btn & BTN.CROUCH) ay -= 1;
    const al = Math.hypot(ax, ay, az);
    if (al > 1) {
      ax /= al;
      ay /= al;
      az /= al;
    }
    const k = Math.min(1, 5 * dt);
    vel[0] += (ax * SPEEDS.swim - vel[0]) * k;
    vel[1] += (ay * SPEEDS.swim - vel[1]) * k;
    vel[2] += (az * SPEEDS.swim - vel[2]) * k;
    const surf = wl - SWIM_SURFACE;
    if (Math.abs(ay) < 0.01 && pos[1] < surf - 0.15 && vel[1] < 1.2)
      vel[1] += 3 * dt; // buoyancy
    const y0 = pos[1];
    pos[0] += vel[0] * dt;
    pos[2] += vel[2] * dt;
    const stepped = resolveHorizontal(pos, vel, h, r, cands, true, world);
    const g = computeGround(pos, r, h, cands, world);
    let ny = pos[1] + vel[1] * dt;
    if (ny <= g.y) {
      ny = g.y;
      if (vel[1] < 0) vel[1] = 0;
      groundedNow = true;
    }
    if (ny > surf && g.y <= surf) {
      ny = surf;
      if (vel[1] > 0) vel[1] = 0;
    }
    // wading up steps / pool stairs: same eye smoothing as on land
    if (groundedNow && grounded0 && g.ny > 0.98) {
      const d = ny - y0;
      if (d > 0.08 || d < -0.08) pl.stepOff -= d;
    } else if (stepped > 0.08) pl.stepOff -= stepped;
    pos[1] = ny;
    resolveCeiling(pos, vel, h, r, cands, g.y);
    pl.gnx = g.nx;
    pl.gny = g.ny;
    pl.gnz = g.nz;
    pl.groundY = g.y;
    if (groundedNow && wl - pos[1] < SWIM_EXIT_DEPTH) swimming = false;
    pl.slide = 0;
    pl.coyote = 0;
    pl.jumpBuf = 0;
    if (!swimming) {
      groundedNow = true;
    }
  } else if (pl.mantleT > 0 && !dead) {
    // ---- mantling: scripted climb, collision suspended. Rise first, then move forward over the lip.
    pl.mantleT--;
    const t = 1 - pl.mantleT / pl.mantleN;
    const ease = (u) => {
      u = clamp(u, 0, 1);
      return u * u * (3 - 2 * u);
    };
    if (pl.vault === 1) {
      // climbing over: up to the top while closing on it, across, then down the far side (accelerating)
      const T = 0.6;
      if (t < T) {
        const u = t / T,
          fy = ease(u / 0.8),
          fxz = ease((u - 0.3) / 0.7);
        pos[0] = pl.mantleSX + (pl.vaultMX - pl.mantleSX) * fxz;
        pos[2] = pl.mantleSZ + (pl.vaultMZ - pl.mantleSZ) * fxz;
        pos[1] = pl.mantleSY + (pl.vaultMY - pl.mantleSY) * fy;
      } else {
        const u = (t - T) / (1 - T),
          fxz = ease(u / 0.6);
        pos[0] = pl.vaultMX + (pl.mantleTX - pl.vaultMX) * fxz;
        pos[2] = pl.vaultMZ + (pl.mantleTZ - pl.vaultMZ) * fxz;
        pos[1] = pl.vaultMY + (pl.mantleTY - pl.vaultMY) * u * u;
      }
    } else {
      const fy = ease(t / 0.65),
        fxz = ease((t - 0.3) / 0.7);
      pos[0] = pl.mantleSX + (pl.mantleTX - pl.mantleSX) * fxz;
      pos[2] = pl.mantleSZ + (pl.mantleTZ - pl.mantleSZ) * fxz;
      pos[1] = pl.mantleSY + (pl.mantleTY - pl.mantleSY) * fy;
    }
    vel[0] = 0;
    vel[1] = 0;
    vel[2] = 0;
    pl.slide = 0;
    pl.coyote = 0;
    pl.jumpBuf = 0;
    if (pl.mantleT === 0) {
      pl.vault = 0;
      pos[0] = pl.mantleTX;
      pos[1] = pl.mantleTY;
      pos[2] = pl.mantleTZ;
      const ddx = pl.mantleTX - pl.mantleSX,
        ddz = pl.mantleTZ - pl.mantleSZ,
        dl = Math.hypot(ddx, ddz);
      if (dl > 1e-6) {
        vel[0] = (ddx / dl) * MANTLE_EXIT_SPEED;
        vel[2] = (ddz / dl) * MANTLE_EXIT_SPEED;
      }
      const g = computeGround(pos, r, h, cands, world);
      pl.gnx = g.nx;
      pl.gny = g.ny;
      pl.gnz = g.nz;
      pl.groundY = g.y;
      groundedNow = true;
      pl.coyote = COYOTE_TICKS + 2;
    }
  } else {
    // ---- ground / air
    const onGround = grounded0 && pl.slide === 0;
    const chute = pl.chute === 1 && !onGround;
    if (chute) {
      // under canopy: fall speed eases to a gentle sink, WASD steers the glide
      const kh = Math.min(1, CHUTE_STEER * dt);
      vel[0] += (wx * CHUTE_GLIDE * wlen - vel[0]) * kh;
      vel[2] += (wz * CHUTE_GLIDE * wlen - vel[2]) * kh;
    } else {
      if (onGround) applyFriction(vel, dt, wx, wz, wishSpeed);
      accelerate(
        vel,
        wx,
        wz,
        wishSpeed,
        onGround ? GROUND_ACCEL : GROUND_ACCEL * AIR_CONTROL,
        dt,
      );
    }

    const canJump =
      (grounded0 || pl.coyote > 0) &&
      e.stance !== STANCE.PRONE &&
      pl.slide === 0 &&
      !dead;
    if (pl.jumpBuf > 0 && canJump) {
      const boost = 1 - 0.5 * wading;
      vel[1] = JUMP_SPEED * boost;
      jumped = true;
      pl.jumpBuf = 0;
      pl.coyote = 0;
      e.state |= STATE.JUMPING;
    } else if (pl.jumpBuf > 0 && !jumpPressed) pl.jumpBuf--;

    if (!grounded0 || jumped || pl.slide) vel[1] -= GRAVITY * dt;
    else vel[1] = 0;
    if (vel[1] < -TERMINAL) vel[1] = -TERMINAL;
    if (chute && vel[1] < -CHUTE_SINK) {
      // the canopy holds gravity off and bleeds the fall down to a gentle sink
      vel[1] += GRAVITY * dt;
      vel[1] += (-CHUTE_SINK - vel[1]) * Math.min(1, CHUTE_BRAKE * dt);
      if (vel[1] > -CHUTE_SINK) vel[1] = -CHUTE_SINK;
    }

    // horizontal move + slide along walls / step up ledges
    const y0 = pos[1];
    pos[0] += vel[0] * dt;
    pos[2] += vel[2] * dt;
    const canStep = grounded0 || vel[1] <= 0.01;
    const stepped = resolveHorizontal(pos, vel, h, r, cands, canStep, world);
    if (stepped > 0.08) pl.stepOff -= stepped;

    // vertical move vs ground
    const g = computeGround(pos, r, h, cands, world);
    const steep = g.ny < SLOPE_COS - 1e-3;
    let ny = pos[1] + vel[1] * dt;
    if (ny <= g.y + 1e-4) {
      if (jumped && vel[1] > 0) {
        if (ny < g.y) ny = g.y;
      } else {
        // a landing is a real touchdown: from the air, or off the end of a slide onto walkable ground
        if (!grounded0 && vel[1] < 0 && !(pl.slide === 1 && steep))
          landed = true;
        ny = g.y;
        groundedNow = true;
        if (!steep) vel[1] = 0;
      }
    } else if (
      grounded0 &&
      !jumped &&
      vel[1] <= 0.01 &&
      ny - g.y <= snapLimit(g.ny, steep)
    ) {
      ny = g.y;
      groundedNow = true;
      vel[1] = 0;
    } else if (
      pl.slide === 1 &&
      steep &&
      !jumped &&
      ny - g.y <= snapLimit(g.ny, steep)
    ) {
      // sliding down a steep face: stay on it (gravity along the surface is applied by the projection below)
      ny = g.y;
      groundedNow = true;
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
      groundedNow = false;
      pl.slide = 1;
      const vn = vel[0] * g.nx + vel[1] * g.ny + vel[2] * g.nz;
      vel[0] -= g.nx * vn;
      vel[1] -= g.ny * vn;
      vel[2] -= g.nz * vn;
    } else pl.slide = 0;
    resolveCeiling(pos, vel, h, r, cands, g.y);
    pl.gnx = g.nx;
    pl.gny = g.ny;
    pl.gnz = g.nz;
    pl.groundY = g.y;

    // +2: the tick the feet leave the ground still jumps off `grounded0`, and the counter is decremented at the end
    // of every airborne tick including that one, so a bare COYOTE_TICKS grants only COYOTE_TICKS-1 real chances.
    if (groundedNow) pl.coyote = COYOTE_TICKS + 2;
    else if (jumped) pl.coyote = 0;
    else if (pl.coyote > 0) pl.coyote--;
  }

  // ---- landing bookkeeping
  if (landed) {
    pl.land = 0;
    pl.landSpeed = -velY0;
    pl.landDrop = Math.max(
      0,
      Math.min(pl.fallTop - pos[1], (velY0 * velY0) / (2 * GRAVITY)),
    );
    pl.landN = (pl.landN + 1) % 65536;
  } else if (pl.land >= 0 && pl.land < 100000) pl.land++;
  if (
    groundedNow ||
    swimming ||
    pl.slide === 1 ||
    pl.mantleT > 0 ||
    !(pl.fallTop >= pos[1])
  )
    pl.fallTop = pos[1];
  if (groundedNow || swimming || dead) pl.chute = 0;

  // ---- eye catch-up. Decays AFTER this tick's offsets are applied: decaying first leaked a fraction of the
  // accumulated lag straight back into the eye on the same tick the feet rose, which is the stair sawtooth.
  // A max-rate follower (not an exponential) makes the eye rise at a bounded, near-constant speed, so a climb
  // reads as a continuous rise rather than a per-riser pop.
  if (pl.stepOff > 0.9) pl.stepOff = 0.9;
  else if (pl.stepOff < -0.9) pl.stepOff = -0.9;
  if (pl.stepOff !== 0) {
    const rate =
      EYE_CATCHUP_RATE +
      EYE_CATCHUP_GAIN * (pl.stepOff < 0 ? -pl.stepOff : pl.stepOff);
    pl.stepOff = moveToward(pl.stepOff, 0, rate * dt);
    if (pl.stepOff < 1e-4 && pl.stepOff > -1e-4) pl.stepOff = 0;
  }

  // ---- lean (blocked by walls, disabled while sprinting / prone / swimming)
  let leanT =
    swimming || sprinting || e.stance === STANCE.PRONE || dead
      ? 0
      : (btn & BTN.LEAN_R ? 1 : 0) - (btn & BTN.LEAN_L ? 1 : 0);
  if (leanT !== 0) {
    const ey = pos[1] + h - EYE_DROP;
    if (
      pointBlocked(
        cands,
        pos[0] + cy * leanT * LEAN_OFFSET,
        ey,
        pos[2] - sy * leanT * LEAN_OFFSET,
        0.2,
      )
    ) {
      leanT *= 0.5;
      if (
        pointBlocked(
          cands,
          pos[0] + cy * leanT * LEAN_OFFSET,
          ey,
          pos[2] - sy * leanT * LEAN_OFFSET,
          0.2,
        )
      )
        leanT = 0;
    }
  }
  pl.lean = moveToward(pl.lean, leanT, LEAN_RATE * dt);

  // ---- bounds
  const bb = map.bounds;
  if (bb) {
    if (pos[0] < bb[0] + r) {
      pos[0] = bb[0] + r;
      if (vel[0] < 0) vel[0] = 0;
    }
    if (pos[2] < bb[1] + r) {
      pos[2] = bb[1] + r;
      if (vel[2] < 0) vel[2] = 0;
    }
    if (pos[0] > bb[2] - r) {
      pos[0] = bb[2] - r;
      if (vel[0] > 0) vel[0] = 0;
    }
    if (pos[2] > bb[3] - r) {
      pos[2] = bb[3] - r;
      if (vel[2] > 0) vel[2] = 0;
    }
  }

  // ---- state flags
  pl.grounded = groundedNow ? 1 : 0;
  pl.swim = swimming ? 1 : 0;
  pl.wade = wading;
  const hspeed = Math.hypot(vel[0], vel[2]);
  let st =
    e.state &
    ~(
      STATE.SPRINT |
      STATE.ADS |
      STATE.GROUNDED |
      STATE.LEAN_L |
      STATE.LEAN_R |
      STATE.SWIMMING
    );
  if (sprinting && hspeed > 1) st |= STATE.SPRINT;
  if (ads) st |= STATE.ADS;
  if (groundedNow) {
    st |= STATE.GROUNDED;
    st &= ~STATE.JUMPING;
  }
  if (pl.lean < -0.05) st |= STATE.LEAN_L;
  if (pl.lean > 0.05) st |= STATE.LEAN_R;
  if (swimming) st |= STATE.SWIMMING;
  if (pl.chute === 1) st |= STATE.CHUTE;
  else st &= ~STATE.CHUTE;
  e.state = st;
  if (BODY_SCALE > 1) duckUnder(e, pl, world, h, dt); // last: its collider query reuses the shared candidate list
  return e;
}

// ---------------------------------------------------------------------------------------------------------------
// queries

/** true while Space would open a parachute this tick (for the HUD prompt) */
