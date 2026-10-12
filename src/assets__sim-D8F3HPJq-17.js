// assets__sim-D8F3HPJq 17 — vel
// Lines 4918-5267 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function ga(e, t, n, r, i, a, o = 0) {
  let s = e.map?.ladders;
  if (!s?.length) return null;
  for (let e = 0; e < s.length; e++) {
    let c = s[e],
      [l, u] = ma(c),
      d = t[0] - c.x,
      f = t[2] - c.z,
      p = Math.abs(d * u - f * l),
      m = d * l + f * u;
    if (p > 0.55) continue;
    let h = n * l + r * u;
    if (
      t[1] >= c.y0 - 0.45 &&
      t[1] <= c.y1 - 0.6 &&
      m <= 0.1 &&
      m >= -0.95 &&
      (i || (h > 0.5 && o > -0.6 && m >= -0.95 * 0.75))
    )
      return { index: e, top: !1 };
    if (
      a &&
      Math.abs(t[1] - c.y1) <= 0.35 &&
      m >= -0.62 &&
      m <= 1.1 &&
      (i || (h < -0.6 && m <= 0.9))
    )
      return { index: e, top: !0 };
  }
  return null;
}
function _a(e, t, n, r) {
  let i = r.map.ladders[n.index],
    a = n.top ? i.y1 - 0.15 : Math.max(i.y0, Math.min(i.y1 - 0.6, e.pos[1])),
    o = ha(i, a);
  ((t.lad = n.index + 1),
    (t.ladS = a),
    (t.ladT = 0),
    (t.ladOX = e.pos[0] - o[0]),
    (t.ladOY = e.pos[1] - o[1]),
    (t.ladOZ = e.pos[2] - o[2]),
    (t.mantleT = 0),
    (t.slide = 0),
    (t.jumpBuf = 0),
    (t.coyote = 0),
    (t.zip = 0),
    (t.chute = 0));
}
var va = [0, 0, 0];
function ya(e, t, n, r, i, a, o, s, c) {
  let l = n.map.ladders?.[t.lad - 1];
  if (!l) return ((t.lad = 0), `drop`);
  let [u, d] = ma(l);
  if ((t.ladT++, (s || c) && t.ladT > 6))
    return (
      (t.lad = 0),
      s
        ? ((e.vel[0] = -u * 2.4), (e.vel[1] = 2.2), (e.vel[2] = -d * 2.4))
        : ((e.vel[0] = 0), (e.vel[1] = 0), (e.vel[2] = 0)),
      `drop`
    );
  let f = Math.sin(e.yaw),
    p = Math.cos(e.yaw),
    m = p * i - f * a,
    h = -f * i - p * a,
    g = m * u + h * d;
  (g > 0 && e.pitch < -0.6 && (g = -g), g > -0.2 && g < 0.2 && (g = 0));
  let _ = Math.max(-1, Math.min(1, g)) * (o ? pa : fa);
  if (((t.ladS += _ * r), _ > 0 && t.ladS >= l.y1))
    return (
      (t.ladS = l.y1),
      ha(l, l.y1, e.pos),
      (e.vel[0] = 0),
      (e.vel[1] = 0),
      (e.vel[2] = 0),
      `top`
    );
  if (_ < 0 && t.ladS <= l.y0)
    return (
      (t.lad = 0),
      ha(l, l.y0, e.pos),
      (e.vel[0] = -u * 1),
      (e.vel[1] = 0),
      (e.vel[2] = -d * 1),
      `bottom`
    );
  (t.ladS > l.y1 && (t.ladS = l.y1), t.ladS < l.y0 && (t.ladS = l.y0));
  let v = Math.max(0, 1 - t.ladT / 8),
    y = ha(l, t.ladS, va);
  return (
    (e.pos[0] = y[0] + t.ladOX * v),
    (e.pos[1] = y[1] + t.ladOY * v),
    (e.pos[2] = y[2] + t.ladOZ * v),
    (e.vel[0] = 0),
    (e.vel[1] = _),
    (e.vel[2] = 0),
    `climb`
  );
}
var ba = r({
    AIR_CONTROL: () => Ta,
    BACKPEDAL: () => Ja,
    BOT_MANTLE_MIN: () => 1,
    CHUTE_BRAKE: () => Ka,
    CHUTE_GLIDE: () => 7,
    CHUTE_MIN_HEIGHT: () => 9,
    CHUTE_SINK: () => Ga,
    CHUTE_STEER: () => qa,
    CLIMB_REACH: () => ro,
    CLIMB_TIME_PER_M: () => io,
    CONSTANTS: () => po,
    CORNER_ROUND: () => Ra,
    COYOTE_TICKS: () => 3,
    EYE_CATCHUP_GAIN: () => Ia,
    EYE_CATCHUP_RATE: () => Fa,
    EYE_DROP: () => xa,
    FRICTION: () => 9,
    GAME_BODY_SCALE: () => ts,
    GRAVITY: () => 20,
    GROUND_ACCEL: () => 40,
    GROUND_SNAP: () => Pa,
    HEIGHTS: () => X,
    HIT_BOUNDS_RADIUS: () => 2,
    JUMP_BUFFER_TICKS: () => 3,
    JUMP_SPEED: () => Ea,
    LAND_DIP_MIN: () => 3,
    LEAN_BODY_OFFSET: () => ja,
    LEAN_OFFSET: () => Aa,
    LEAN_RATE: () => 9,
    LEAN_ROLL: () => Ma,
    MANTLE_EXIT_SPEED: () => no,
    MANTLE_MAX: () => Za,
    MANTLE_REACH: () => Qa,
    MANTLE_TIME: () => $a,
    MAX_DEPEN: () => La,
    PRONE_EYE_FWD: () => Sa,
    RADIUS: () => Y,
    SLOPE_DRAG: () => Xa,
    SLOPE_LIMIT_DEG: () => 50,
    SPEEDS: () => Ca,
    STANCE_TIME: () => ka,
    STEP_UP: () => Oa,
    STOP_SPEED: () => wa,
    SWIM_DEPTH: () => za,
    SWIM_EXIT_DEPTH: () => Ba,
    SWIM_SURFACE: () => Va,
    TERMINAL: () => 40,
    TERRAIN_MANTLE_MAX: () => eo,
    TERRAIN_MANTLE_REACH: () => to,
    VAULT_DROP: () => lo,
    VAULT_MAX: () => ao,
    VAULT_MIN_LEN: () => so,
    VAULT_REACH: () => co,
    VAULT_THICK: () => oo,
    VAULT_TIME: () => uo,
    VAULT_TIME_PER_M: () => fo,
    WADE_DEPTH: () => Ha,
    WALL_SLIDE_KEEP: () => Ya,
    bodyScale: () => rs,
    boundingBox: () => ps,
    capsuleHeight: () => $o,
    chuteReady: () => Jo,
    clonePlayerExt: () => _o,
    duckRemote: () => us,
    eyeForward: () => Qo,
    eyeHeight: () => Zo,
    eyePosition: () => es,
    hitBoundsRadius: () => is,
    hitboxes: () => ds,
    initPlayer: () => go,
    playerPlacementClear: () => To,
    presentationFromState: () => Xo,
    setBodyScale: () => ns,
    stepPlayer: () => qo,
    walkingCorridor: () => Eo,
  }),
  Y = 0.4,
  X = Object.freeze([1.8, 1.3, 0.55]),
  xa = 0.15,
  Sa = 0.5,
  Ca = Object.freeze({
    walk: 4.2,
    sprint: 6.6,
    ads: 2.6,
    crouch: 2.2,
    prone: 1,
    swim: 2.4,
  }),
  wa = 1.6,
  Ta = 0.25,
  Ea = 4.8,
  Da = 20,
  Oa = 0.5,
  ka = Object.freeze([
    [0, 0.22, 0.6],
    [0.22, 0, 0.45],
    [0.6, 0.45, 0],
  ]),
  Aa = 0.45,
  ja = 0.3,
  Ma = 0.2,
  Na = 9,
  Pa = 0.55,
  Fa = 2.6,
  Ia = 5.5,
  La = 0.8,
  Ra = 0.08,
  za = 1.05,
  Ba = 0.95,
  Va = 1.45,
  Ha = 0.3,
  Ua = 3,
  Wa = 9,
  Ga = 4.2,
  Ka = 3.2,
  qa = 1.4,
  Ja = 0.8,
  Ya = 0.85,
  Xa = 0.3,
  Za = 1.55,
  Qa = 0.55,
  $a = 0.4,
  eo = 1.9,
  to = [0.55, 0.95, 1.4],
  no = 1.6,
  ro = 2.35,
  io = 0.3,
  ao = 2.5,
  oo = 0.7,
  so = 0.9,
  co = 0.6,
  lo = 1.2,
  uo = 0.45,
  fo = 0.3,
  po = Object.freeze({
    TERRAIN_MANTLE_MAX: eo,
    RADIUS: Y,
    HEIGHTS: X,
    EYE_DROP: xa,
    SPEEDS: Ca,
    GROUND_ACCEL: 40,
    FRICTION: 9,
    STOP_SPEED: wa,
    AIR_CONTROL: Ta,
    JUMP_SPEED: Ea,
    GRAVITY: 20,
    STEP_UP: Oa,
    PRONE_EYE_FWD: Sa,
    SLOPE_LIMIT_DEG: 50,
    COYOTE_TICKS: 3,
    JUMP_BUFFER_TICKS: 3,
    STANCE_TIME: ka,
    LEAN_OFFSET: Aa,
    LEAN_BODY_OFFSET: ja,
    LEAN_ROLL: Ma,
    LEAN_RATE: 9,
    GROUND_SNAP: Pa,
    TERMINAL: 40,
    EYE_CATCHUP_RATE: Fa,
    EYE_CATCHUP_GAIN: Ia,
    MAX_DEPEN: La,
    CORNER_ROUND: Ra,
    SWIM_DEPTH: za,
    SWIM_EXIT_DEPTH: Ba,
    SWIM_SURFACE: Va,
    WADE_DEPTH: Ha,
    LAND_DIP_MIN: 3,
    BACKPEDAL: Ja,
    WALL_SLIDE_KEEP: Ya,
    SLOPE_DRAG: Xa,
    MANTLE_MAX: Za,
    MANTLE_REACH: Qa,
    MANTLE_TIME: $a,
    MANTLE_EXIT_SPEED: no,
    CLIMB_REACH: ro,
    CLIMB_TIME_PER_M: io,
    VAULT_MAX: ao,
    VAULT_THICK: oo,
    VAULT_MIN_LEN: so,
    VAULT_REACH: co,
    VAULT_DROP: lo,
    VAULT_TIME: uo,
    VAULT_TIME_PER_M: fo,
    CHUTE_MIN_HEIGHT: 9,
    CHUTE_SINK: Ga,
    CHUTE_GLIDE: 7,
    CHUTE_BRAKE: Ka,
    CHUTE_STEER: qa,
  }),
  mo = Math.cos((50 * Math.PI) / 180),
  ho = 1.55;
function go(e) {
  let t = e.stance | 0,
    n = X[t] ?? X[0];
  return (
    (e.ext.pl = {
      h: n,
      stanceFrom: t,
      coyote: 0,
      jumpBuf: 0,
      prevBtn: 0,
      lean: 0,
      stepOff: 0,
      land: -1,
      landSpeed: 0,
      grounded: 0,
      swim: 0,
      slide: 0,
      wade: 0,
      gnx: 0,
      gny: 1,
      gnz: 0,
      groundY: e.pos?.[1] ?? 0,
      mantleT: 0,
      mantleN: 0,
      mantleSX: 0,
      mantleSY: 0,
      mantleSZ: 0,
      mantleTX: 0,
      mantleTY: 0,
      mantleTZ: 0,
      vault: 0,
      vaultMX: 0,
      vaultMY: 0,
      vaultMZ: 0,
      chute: 0,
      fallTop: e.pos?.[1] ?? 0,
      landDrop: 0,
      landN: 0,
      zip: 0,
      zipS: 0,
      zipDir: 0,
      zipV: 0,
      zipT: 0,
      zipOX: 0,
      zipOY: 0,
      zipOZ: 0,
      lad: 0,
      ladS: 0,
      ladT: 0,
      ladOX: 0,
      ladOY: 0,
      ladOZ: 0,
    }),
    e.ext.pl
  );
}
function _o(e) {
  return { ...e };
}
