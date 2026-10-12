// assets__sim-D8F3HPJq 20 — math
// Lines 5790-6230 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function qo(r, i, a, o) {
  let s = r.ext.pl || go(r);
  if (r.state & e.IN_VEHICLE) return r;
  (d(r, a),
    a.map.hangar && si(r, a),
    a.map.bascule && Ci(r, a),
    a.map.mesa && Qi(r, a));
  let c = r.pos,
    l = r.vel,
    u = a.map;
  ((!Number.isFinite(c[0]) ||
    !Number.isFinite(c[1]) ||
    !Number.isFinite(c[2])) &&
    ((c[0] = 0), (c[1] = u.getHeight(0, 0)), (c[2] = 0)),
    (!Number.isFinite(l[0]) ||
      !Number.isFinite(l[1]) ||
      !Number.isFinite(l[2])) &&
      ((l[0] = 0), (l[1] = 0), (l[2] = 0)));
  let f = (r.state & e.DEAD) !== 0,
    p = f ? 0 : i.buttons | 0,
    m = p & ~s.prevBtn;
  if (((s.prevBtn = p), !f)) {
    let e = +i.yaw || 0,
      t = +i.pitch || 0;
    ((r.yaw = e), (r.pitch = Z(t, -1.55, ho)));
  }
  if (f) s.zip = 0;
  else if (!s.zip && m & t.INTERACT && u.ziplines?.length) {
    let e = sa(a, c);
    e && la(r, s, e, a);
  }
  if (s.zip)
    return (
      ua(r, s, a, o, (m & (t.JUMP | t.INTERACT)) !== 0),
      r.stance !== n.STAND && ((s.stanceFrom = r.stance), (r.stance = n.STAND)),
      (s.h = vo(s.h, X[0], 5 * o)),
      (s.grounded = 0),
      (s.swim = 0),
      (s.wade = 0),
      (s.slide = 0),
      (s.coyote = 0),
      (s.lean = vo(s.lean, 0, 9 * o)),
      (r.state =
        (r.state &
          ~(e.SPRINT | e.ADS | e.GROUNDED | e.LEAN_L | e.LEAN_R | e.SWIMMING)) |
        e.JUMPING),
      r
    );
  let h = f ? 0 : Z(+i.mx || 0, -1, 1),
    g = f ? 0 : Z(+i.mz || 0, -1, 1),
    _ = Y;
  if (f) s.lad = 0;
  else if (
    !s.lad &&
    u.ladders?.length &&
    s.mantleT === 0 &&
    s.swim === 0 &&
    r.stance !== n.PRONE &&
    !r.ext?.noLadder
  ) {
    let e = Math.sin(r.yaw),
      n = Math.cos(r.yaw),
      i = n * h - e * g,
      o = -e * h - n * g,
      l = Math.hypot(i, o);
    l > 0.3 ? ((i /= l), (o /= l)) : ((i = 0), (o = 0));
    let u = ga(a, c, i, o, (m & t.INTERACT) !== 0, s.grounded === 1, r.pitch);
    u && _a(r, s, u, a);
  }
  if (s.lad) {
    let i = u.ladders[s.lad - 1],
      l = ya(
        r,
        s,
        a,
        o,
        h,
        g,
        (p & t.SPRINT) !== 0,
        (m & t.JUMP) !== 0,
        (m & t.INTERACT) !== 0,
      );
    if (l === `top`) {
      let e = i && Ko(i, a);
      e &&
        ((s.lad = 0),
        (s.vault = 0),
        (s.mantleN = Math.max(1, Math.round($a / o))),
        (s.mantleT = s.mantleN),
        (s.mantleSX = c[0]),
        (s.mantleSY = c[1]),
        (s.mantleSZ = c[2]),
        (s.mantleTX = e[0]),
        (s.mantleTY = e[1]),
        (s.mantleTZ = e[2]));
    }
    if (s.lad || l === `top`)
      return (
        r.stance !== n.STAND &&
          ((s.stanceFrom = r.stance), (r.stance = n.STAND)),
        (s.h = vo(s.h, X[0], 5 * o)),
        (s.grounded = 0),
        (s.swim = 0),
        (s.wade = 0),
        (s.slide = 0),
        (s.coyote = 0),
        (s.chute = 0),
        (s.fallTop = c[1]),
        (s.lean = vo(s.lean, 0, 9 * o)),
        (r.state &= ~(
          e.SPRINT |
          e.ADS |
          e.GROUNDED |
          e.LEAN_L |
          e.LEAN_R |
          e.SWIMMING |
          e.JUMPING |
          e.CHUTE
        )),
        r
      );
    s.fallTop = c[1];
  }
  let v = u.waterBounds,
    y =
      (!v || (c[0] >= v[0] && c[0] <= v[2] && c[2] >= v[1] && c[2] <= v[3])) &&
      typeof u.waterLevel == `number`
        ? u.waterLevel
        : -1 / 0,
    b = y - c[1],
    x = s.swim === 1;
  ((!Number.isFinite(y) || b < 0.95) && (x = !1), !x && b > 1.05 && (x = !0));
  let S = s.grounded === 1,
    ee = !!(p & t.ADS) && !x,
    C = !!(p & t.SPRINT) && g > 0.2 && !ee,
    w = So(a, c[0], c[1], c[2], _, X[0]),
    T = x ? n.STAND : p & t.PRONE ? n.PRONE : p & t.CROUCH ? n.CROUCH : n.STAND;
  (C && T !== n.STAND && (T = n.STAND),
    T < r.stance &&
      (wo(w, c[0], c[1], c[2], X[T], _) ||
        (T =
          T === n.STAND &&
          r.stance === n.PRONE &&
          wo(w, c[0], c[1], c[2], X[n.CROUCH], _)
            ? n.CROUCH
            : r.stance)),
    T !== r.stance && ((s.stanceFrom = r.stance), (r.stance = T)));
  let te = X[r.stance];
  if (s.h !== te) {
    let e = X[s.stanceFrom] ?? X[0],
      t = ka[s.stanceFrom]?.[r.stance] || 0.2,
      n = Math.abs(te - e) / t || 5;
    s.h = vo(s.h, te, n * o);
  }
  let E = s.h,
    D = Math.sin(r.yaw),
    ne = Math.cos(r.yaw),
    re = ne * h - D * g,
    ie = -D * h - ne * g,
    O = Math.hypot(re, ie);
  (O > 1e-6 && ((re /= O), (ie /= O)), O > 1 && (O = 1));
  let ae = Ca.walk;
  (r.stance === n.CROUCH
    ? (ae = Ca.crouch)
    : r.stance === n.PRONE && (ae = Ca.prone),
    ee && ae > Ca.ads && (ae = Ca.ads));
  let oe = C && r.stance === n.STAND && !x;
  (oe && (ae = Ca.sprint), g < 0 && (ae *= Ja));
  let se = 0;
  if (
    (!x &&
      b > 0.3 &&
      ((se = Z((b - Ha) / 0.75, 0, 1)), (ae *= 1 - 0.55 * se), (oe = !1)),
    O > 1e-6 && s.grounded === 1 && s.gny > 0.2 && s.gny < 0.999)
  ) {
    let e = -(s.gnx * re + s.gnz * ie) / s.gny;
    e > 0 && (ae /= 1 + Xa * e);
  }
  let ce = ae * O,
    le = !1,
    ue = l[1],
    k = !1,
    de = !1,
    fe = (m & t.JUMP) !== 0;
  if (
    (fe && !x && (s.jumpBuf = 4),
    f || x || S
      ? (s.chute = 0)
      : fe &&
        s.chute === 0 &&
        s.mantleT === 0 &&
        c[1] - s.groundY >= 9 &&
        ((s.chute = 1), (s.jumpBuf = 0)),
    f)
  )
    s.mantleT = 0;
  else if (
    s.mantleT === 0 &&
    !x &&
    r.stance !== n.PRONE &&
    s.slide === 0 &&
    (s.jumpBuf > 0 || (!S && r.state & e.JUMPING && O >= 0.3))
  ) {
    let t = re,
      n = ie;
    O < 0.3 && ((t = -D), (n = -ne));
    let i = w.slice(),
      l = Io(c, E, _, t, n, i, a, s.groundY);
    w.length = 0;
    for (let e = 0; e < i.length; e++) w.push(i[e]);
    let u = !S && r.state & e.JUMPING ? ro : Za,
      d =
        l ?? No(c, E, _, t, n, w, u, +!!r.ext?.bot) ?? Ro(c, E, _, t, n, w, a);
    if (
      ((s.vault = +!!l),
      l && ((s.vaultMX = l.mx), (s.vaultMY = l.my), (s.vaultMZ = l.mz)),
      d)
    ) {
      let t = l ? uo + fo * l.rise : $a + io * Math.max(0, d.y - c[1] - Za);
      ((s.mantleN = Math.max(1, Math.round(t / o))),
        (s.mantleT = s.mantleN),
        (s.mantleSX = c[0]),
        (s.mantleSY = c[1]),
        (s.mantleSZ = c[2]),
        (s.mantleTX = d.x),
        (s.mantleTY = d.y),
        (s.mantleTZ = d.z),
        (s.jumpBuf = 0),
        (s.coyote = 0),
        (r.state |= e.JUMPING));
    }
  }
  if (x) {
    let e = Math.cos(r.pitch),
      n = Math.sin(r.pitch),
      i = -D * e * g + ne * h,
      u = n * g,
      d = -ne * e * g - D * h;
    (p & t.JUMP && (u += 1), p & t.CROUCH && --u);
    let f = Math.hypot(i, u, d);
    f > 1 && ((i /= f), (u /= f), (d /= f));
    let m = Math.min(1, 5 * o);
    ((l[0] += (i * Ca.swim - l[0]) * m),
      (l[1] += (u * Ca.swim - l[1]) * m),
      (l[2] += (d * Ca.swim - l[2]) * m));
    let v = y - Va;
    Math.abs(u) < 0.01 && c[1] < v - 0.15 && l[1] < 1.2 && (l[1] += 3 * o);
    let b = c[1];
    ((c[0] += l[0] * o), (c[2] += l[2] * o));
    let ee = zo(c, l, E, _, w, !0, a),
      C = Ho(c, _, E, w, a),
      T = c[1] + l[1] * o;
    if (
      (T <= C.y && ((T = C.y), l[1] < 0 && (l[1] = 0), (k = !0)),
      T > v && C.y <= v && ((T = v), l[1] > 0 && (l[1] = 0)),
      k && S && C.ny > 0.98)
    ) {
      let e = T - b;
      (e > 0.08 || e < -0.08) && (s.stepOff -= e);
    } else ee > 0.08 && (s.stepOff -= ee);
    ((c[1] = T),
      Uo(c, l, E, _, w, C.y),
      (s.gnx = C.nx),
      (s.gny = C.ny),
      (s.gnz = C.nz),
      (s.groundY = C.y),
      k && y - c[1] < 0.95 && (x = !1),
      (s.slide = 0),
      (s.coyote = 0),
      (s.jumpBuf = 0),
      x || (k = !0));
  } else if (s.mantleT > 0 && !f) {
    s.mantleT--;
    let e = 1 - s.mantleT / s.mantleN,
      t = (e) => ((e = Z(e, 0, 1)), e * e * (3 - 2 * e));
    if (s.vault === 1) {
      let n = 0.6;
      if (e < n) {
        let r = e / n,
          i = t(r / 0.8),
          a = t((r - 0.3) / 0.7);
        ((c[0] = s.mantleSX + (s.vaultMX - s.mantleSX) * a),
          (c[2] = s.mantleSZ + (s.vaultMZ - s.mantleSZ) * a),
          (c[1] = s.mantleSY + (s.vaultMY - s.mantleSY) * i));
      } else {
        let r = (e - n) / 0.4,
          i = t(r / 0.6);
        ((c[0] = s.vaultMX + (s.mantleTX - s.vaultMX) * i),
          (c[2] = s.vaultMZ + (s.mantleTZ - s.vaultMZ) * i),
          (c[1] = s.vaultMY + (s.mantleTY - s.vaultMY) * r * r));
      }
    } else {
      let n = t(e / 0.65),
        r = t((e - 0.3) / 0.7);
      ((c[0] = s.mantleSX + (s.mantleTX - s.mantleSX) * r),
        (c[2] = s.mantleSZ + (s.mantleTZ - s.mantleSZ) * r),
        (c[1] = s.mantleSY + (s.mantleTY - s.mantleSY) * n));
    }
    if (
      ((l[0] = 0),
      (l[1] = 0),
      (l[2] = 0),
      (s.slide = 0),
      (s.coyote = 0),
      (s.jumpBuf = 0),
      s.mantleT === 0)
    ) {
      ((s.vault = 0),
        (c[0] = s.mantleTX),
        (c[1] = s.mantleTY),
        (c[2] = s.mantleTZ));
      let e = s.mantleTX - s.mantleSX,
        t = s.mantleTZ - s.mantleSZ,
        n = Math.hypot(e, t);
      n > 1e-6 && ((l[0] = (e / n) * no), (l[2] = (t / n) * no));
      let r = Ho(c, _, E, w, a);
      ((s.gnx = r.nx),
        (s.gny = r.ny),
        (s.gnz = r.nz),
        (s.groundY = r.y),
        (k = !0),
        (s.coyote = 5));
    }
  } else {
    let t = S && s.slide === 0,
      i = s.chute === 1 && !t;
    if (i) {
      let e = Math.min(1, qa * o);
      ((l[0] += (re * 7 * O - l[0]) * e), (l[2] += (ie * 7 * O - l[2]) * e));
    } else (t && Oo(l, o, re, ie, ce), ko(l, re, ie, ce, t ? 40 : 40 * Ta, o));
    let u = (S || s.coyote > 0) && r.stance !== n.PRONE && s.slide === 0 && !f;
    (s.jumpBuf > 0 && u
      ? ((l[1] = Ea * (1 - 0.5 * se)),
        (le = !0),
        (s.jumpBuf = 0),
        (s.coyote = 0),
        (r.state |= e.JUMPING))
      : s.jumpBuf > 0 && !fe && s.jumpBuf--,
      !S || le || s.slide ? (l[1] -= 20 * o) : (l[1] = 0),
      l[1] < -40 && (l[1] = -40),
      i &&
        l[1] < -4.2 &&
        ((l[1] += 20 * o),
        (l[1] += (-4.2 - l[1]) * Math.min(1, Ka * o)),
        l[1] > -4.2 && (l[1] = -4.2)));
    let d = c[1];
    ((c[0] += l[0] * o), (c[2] += l[2] * o));
    let p = zo(c, l, E, _, w, S || l[1] <= 0.01, a);
    p > 0.08 && (s.stepOff -= p);
    let m = Ho(c, _, E, w, a),
      h = m.ny < mo - 0.001,
      g = c[1] + l[1] * o;
    if (
      (g <= m.y + 1e-4
        ? le && l[1] > 0
          ? g < m.y && (g = m.y)
          : (!S && l[1] < 0 && !(s.slide === 1 && h) && (de = !0),
            (g = m.y),
            (k = !0),
            h || (l[1] = 0))
        : S && !le && l[1] <= 0.01 && g - m.y <= Bo(m.ny, h)
          ? ((g = m.y), (k = !0), (l[1] = 0))
          : s.slide === 1 &&
            h &&
            !le &&
            g - m.y <= Bo(m.ny, h) &&
            ((g = m.y), (k = !0)),
      k && S)
    ) {
      let e = g - (d + p),
        t = m.ny > 0.98 ? 0.08 : 0.25;
      (e > t || e < -t) && (s.stepOff -= e);
    }
    if (((c[1] = g), h && k)) {
      ((k = !1), (s.slide = 1));
      let e = l[0] * m.nx + l[1] * m.ny + l[2] * m.nz;
      ((l[0] -= m.nx * e), (l[1] -= m.ny * e), (l[2] -= m.nz * e));
    } else s.slide = 0;
    (Uo(c, l, E, _, w, m.y),
      (s.gnx = m.nx),
      (s.gny = m.ny),
      (s.gnz = m.nz),
      (s.groundY = m.y),
      k ? (s.coyote = 5) : le ? (s.coyote = 0) : s.coyote > 0 && s.coyote--);
  }
  if (
    (de
      ? ((s.land = 0),
        (s.landSpeed = -ue),
        (s.landDrop = Math.max(0, Math.min(s.fallTop - c[1], (ue * ue) / 40))),
        (s.landN = (s.landN + 1) % 65536))
      : s.land >= 0 && s.land < 1e5 && s.land++,
    (k || x || s.slide === 1 || s.mantleT > 0 || !(s.fallTop >= c[1])) &&
      (s.fallTop = c[1]),
    (k || x || f) && (s.chute = 0),
    s.stepOff > 0.9
      ? (s.stepOff = 0.9)
      : s.stepOff < -0.9 && (s.stepOff = -0.9),
    s.stepOff !== 0)
  ) {
    let e = Fa + Ia * (s.stepOff < 0 ? -s.stepOff : s.stepOff);
    ((s.stepOff = vo(s.stepOff, 0, e * o)),
      s.stepOff < 1e-4 && s.stepOff > -1e-4 && (s.stepOff = 0));
  }
  let pe =
    x || oe || r.stance === n.PRONE || f
      ? 0
      : (p & t.LEAN_R ? 1 : 0) - (p & t.LEAN_L ? 1 : 0);
  if (pe !== 0) {
    let e = c[1] + E - xa;
    Do(w, c[0] + ne * pe * 0.45, e, c[2] - D * pe * 0.45, 0.2) &&
      ((pe *= 0.5),
      Do(w, c[0] + ne * pe * 0.45, e, c[2] - D * pe * 0.45, 0.2) && (pe = 0));
  }
  s.lean = vo(s.lean, pe, 9 * o);
  let me = u.bounds;
  (me &&
    (c[0] < me[0] + _ && ((c[0] = me[0] + _), l[0] < 0 && (l[0] = 0)),
    c[2] < me[1] + _ && ((c[2] = me[1] + _), l[2] < 0 && (l[2] = 0)),
    c[0] > me[2] - _ && ((c[0] = me[2] - _), l[0] > 0 && (l[0] = 0)),
    c[2] > me[3] - _ && ((c[2] = me[3] - _), l[2] > 0 && (l[2] = 0))),
    (s.grounded = +!!k),
    (s.swim = +!!x),
    (s.wade = se));
  let he = Math.hypot(l[0], l[2]),
    ge =
      r.state &
      ~(e.SPRINT | e.ADS | e.GROUNDED | e.LEAN_L | e.LEAN_R | e.SWIMMING);
  return (
    oe && he > 1 && (ge |= e.SPRINT),
    ee && (ge |= e.ADS),
    k && ((ge |= e.GROUNDED), (ge &= ~e.JUMPING)),
    s.lean < -0.05 && (ge |= e.LEAN_L),
    s.lean > 0.05 && (ge |= e.LEAN_R),
    x && (ge |= e.SWIMMING),
    s.chute === 1 ? (ge |= e.CHUTE) : (ge &= ~e.CHUTE),
    (r.state = ge),
    $ > 1 && ls(r, s, a, E, o),
    r
  );
}
