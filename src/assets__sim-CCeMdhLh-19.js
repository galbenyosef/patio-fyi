// assets__sim-CCeMdhLh 19 — math
// Lines 5424-5954 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function Co(n, i, a, o) {
  let s = n.ext.pl || Va(n);
  if (n.state & e.IN_VEHICLE) return n;
  (d(n, a), a.map.hangar && ai(n, a), a.map.mesa && _i(n, a));
  let c = n.pos,
    l = n.vel,
    u = a.map;
  ((!Number.isFinite(c[0]) ||
    !Number.isFinite(c[1]) ||
    !Number.isFinite(c[2])) &&
    ((c[0] = 0), (c[1] = u.getHeight(0, 0)), (c[2] = 0)),
    (!Number.isFinite(l[0]) ||
      !Number.isFinite(l[1]) ||
      !Number.isFinite(l[2])) &&
      ((l[0] = 0), (l[1] = 0), (l[2] = 0)));
  let f = (n.state & e.DEAD) !== 0,
    p = f ? 0 : i.buttons | 0,
    m = p & ~s.prevBtn;
  if (((s.prevBtn = p), !f)) {
    let e = +i.yaw || 0,
      t = +i.pitch || 0;
    ((n.yaw = e), (n.pitch = X(t, -1.55, Ba)));
  }
  if (f) s.zip = 0;
  else if (!s.zip && m & t.INTERACT && u.ziplines?.length) {
    let e = Ei(a, c);
    e && Oi(n, s, e, a);
  }
  if (s.zip)
    return (
      ki(n, s, a, o, (m & (t.JUMP | t.INTERACT)) !== 0),
      n.stance !== r.STAND && ((s.stanceFrom = n.stance), (n.stance = r.STAND)),
      (s.h = Ua(s.h, Y[0], 5 * o)),
      (s.grounded = 0),
      (s.swim = 0),
      (s.wade = 0),
      (s.slide = 0),
      (s.sld = 0),
      (s.coyote = 0),
      (s.lean = Ua(s.lean, 0, 9 * o)),
      (n.state =
        (n.state &
          ~(
            e.SPRINT |
            e.ADS |
            e.GROUNDED |
            e.LEAN_L |
            e.LEAN_R |
            e.SWIMMING |
            e.SLIDE
          )) |
        e.JUMPING),
      n
    );
  let h = f ? 0 : X(+i.mx || 0, -1, 1),
    g = f ? 0 : X(+i.mz || 0, -1, 1),
    _ = J;
  if (f) s.lad = 0;
  else if (
    !s.lad &&
    u.ladders?.length &&
    s.mantleT === 0 &&
    s.swim === 0 &&
    n.stance !== r.PRONE &&
    !n.ext?.noLadder
  ) {
    let e = Math.sin(n.yaw),
      r = Math.cos(n.yaw),
      i = r * h - e * g,
      o = -e * h - r * g,
      l = Math.hypot(i, o);
    l > 0.3 ? ((i /= l), (o /= l)) : ((i = 0), (o = 0));
    let u = Fi(a, c, i, o, (m & t.INTERACT) !== 0, s.grounded === 1, n.pitch);
    u && Ii(n, s, u, a);
  }
  if (s.lad) {
    let i = u.ladders[s.lad - 1],
      l = Ri(
        n,
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
      let e = i && So(i, a);
      e &&
        ((s.lad = 0),
        (s.vault = 0),
        (s.mantleN = Math.max(1, Math.round(va / o))),
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
        n.stance !== r.STAND &&
          ((s.stanceFrom = n.stance), (n.stance = r.STAND)),
        (s.h = Ua(s.h, Y[0], 5 * o)),
        (s.grounded = 0),
        (s.swim = 0),
        (s.wade = 0),
        (s.slide = 0),
        (s.sld = 0),
        (s.coyote = 0),
        (s.chute = 0),
        (s.fallTop = c[1]),
        (s.lean = Ua(s.lean, 0, 9 * o)),
        (n.state &= ~(
          e.SPRINT |
          e.ADS |
          e.GROUNDED |
          e.LEAN_L |
          e.LEAN_R |
          e.SWIMMING |
          e.JUMPING |
          e.CHUTE |
          e.SLIDE
        )),
        n
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
    C = !!(p & t.ADS) && !x,
    w = !!(p & t.SPRINT) && g > 0.2 && !C,
    T = Ya(a, c[0], c[1], c[2], _, Y[0]);
  if (
    (s.sld > 0 && (f || x || s.mantleT > 0 || s.chute === 1) && (s.sld = 0),
    s.sld === 0 &&
      !f &&
      !x &&
      S &&
      s.mantleT === 0 &&
      n.stance === r.STAND &&
      n.state & e.SPRINT &&
      p & t.PRONE &&
      p & t.SPRINT)
  ) {
    let e = Math.hypot(l[0], l[2]);
    if (e >= 5) {
      let t = Math.min(Na, e + Ma) / e;
      ((l[0] *= t), (l[2] *= t), (s.sld = Math.max(1, Math.round(Pa / o))));
    }
  }
  let E = s.sld > 0,
    ee = x
      ? r.STAND
      : p & t.PRONE
        ? r.PRONE
        : p & t.CROUCH
          ? r.CROUCH
          : r.STAND;
  (w && ee !== r.STAND && (ee = r.STAND),
    E && (ee = r.CROUCH),
    ee < n.stance &&
      (Z(T, c[0], c[1], c[2], Y[ee], _) ||
        (ee =
          ee === r.STAND &&
          n.stance === r.PRONE &&
          Z(T, c[0], c[1], c[2], Y[r.CROUCH], _)
            ? r.CROUCH
            : n.stance)),
    !E &&
      ee === r.CROUCH &&
      s.h < Y[r.CROUCH] - 0.001 &&
      !Z(T, c[0], c[1], c[2], Y[r.CROUCH], _) &&
      (ee = r.PRONE),
    ee !== n.stance && ((s.stanceFrom = n.stance), (n.stance = ee)));
  let D = E ? Ia : Y[n.stance];
  if (E) s.h = Ua(s.h, D, 6.5 * o);
  else if (s.h !== D) {
    let e = Y[s.stanceFrom] ?? Y[0],
      t = Ji[s.stanceFrom]?.[n.stance] || 0.2,
      r = Math.abs(D - e) / t || 5;
    s.h = Ua(s.h, D, r * o);
  }
  let O = s.h,
    te = Math.sin(n.yaw),
    ne = Math.cos(n.yaw),
    re = ne * h - te * g,
    ie = -te * h - ne * g,
    k = Math.hypot(re, ie);
  (k > 1e-6 && ((re /= k), (ie /= k)), k > 1 && (k = 1));
  let ae = Hi.walk;
  (n.stance === r.CROUCH
    ? (ae = Hi.crouch)
    : n.stance === r.PRONE && (ae = Hi.prone),
    C && ae > Hi.ads && (ae = Hi.ads));
  let oe = w && n.stance === r.STAND && !x && !E;
  (oe && (ae = Hi.sprint), g < 0 && (ae *= pa));
  let A = 0;
  if (
    (!x &&
      b > 0.3 &&
      ((A = X((b - sa) / 0.75, 0, 1)), (ae *= 1 - 0.55 * A), (oe = !1)),
    k > 1e-6 && s.grounded === 1 && s.gny > 0.2 && s.gny < 0.999)
  ) {
    let e = -(s.gnx * re + s.gnz * ie) / s.gny;
    e > 0 && (ae /= 1 + ha * e);
  }
  let se = ae * k,
    ce = !1,
    le = l[1],
    j = !1,
    ue = !1,
    de = (m & t.JUMP) !== 0;
  if (
    (de && !x && (s.jumpBuf = 4),
    f || x || S
      ? (s.chute = 0)
      : de &&
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
    n.stance !== r.PRONE &&
    s.slide === 0 &&
    (s.jumpBuf > 0 || (!S && n.state & e.JUMPING && k >= 0.3))
  ) {
    let t = re,
      r = ie;
    k < 0.3 && ((t = -te), (r = -ne));
    let i = T.slice(),
      l = co(c, O, _, t, r, i, a, s.groundY);
    T.length = 0;
    for (let e = 0; e < i.length; e++) T.push(i[e]);
    let u = !S && n.state & e.JUMPING ? Sa : ga,
      d =
        l ?? ao(c, O, _, t, r, T, u, +!!n.ext?.bot) ?? uo(c, O, _, t, r, T, a);
    if (
      ((s.vault = +!!l),
      l && ((s.vaultMX = l.mx), (s.vaultMY = l.my), (s.vaultMZ = l.mz)),
      d)
    ) {
      let t = l ? ka + Aa * l.rise : va + Ca * Math.max(0, d.y - c[1] - ga);
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
        (n.state |= e.JUMPING));
    }
  }
  if (x) {
    let e = Math.cos(n.pitch),
      r = Math.sin(n.pitch),
      i = -te * e * g + ne * h,
      u = r * g,
      d = -ne * e * g - te * h;
    (p & t.JUMP && (u += 1), p & t.CROUCH && --u);
    let f = Math.hypot(i, u, d);
    f > 1 && ((i /= f), (u /= f), (d /= f));
    let m = Math.min(1, 5 * o);
    ((l[0] += (i * Hi.swim - l[0]) * m),
      (l[1] += (u * Hi.swim - l[1]) * m),
      (l[2] += (d * Hi.swim - l[2]) * m));
    let v = y - oa;
    Math.abs(u) < 0.01 && c[1] < v - 0.15 && l[1] < 1.2 && (l[1] += 3 * o);
    let b = c[1];
    ((c[0] += l[0] * o), (c[2] += l[2] * o));
    let C = fo(c, l, O, _, T, !0, a),
      w = vo(c, _, O, T, a),
      E = c[1] + l[1] * o;
    if (
      (E <= w.y && ((E = w.y), l[1] < 0 && (l[1] = 0), (j = !0)),
      E > v && w.y <= v && ((E = v), l[1] > 0 && (l[1] = 0)),
      j && S && w.ny > 0.98)
    ) {
      let e = E - b;
      (e > 0.08 || e < -0.08) && (s.stepOff -= e);
    } else C > 0.08 && (s.stepOff -= C);
    ((c[1] = E),
      yo(c, l, O, _, T, w.y),
      (s.gnx = w.nx),
      (s.gny = w.ny),
      (s.gnz = w.nz),
      (s.groundY = w.y),
      j && y - c[1] < 0.95 && (x = !1),
      (s.slide = 0),
      (s.coyote = 0),
      (s.jumpBuf = 0),
      x || (j = !0));
  } else if (s.mantleT > 0 && !f) {
    s.mantleT--;
    let e = 1 - s.mantleT / s.mantleN,
      t = (e) => ((e = X(e, 0, 1)), e * e * (3 - 2 * e));
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
      n > 1e-6 && ((l[0] = (e / n) * xa), (l[2] = (t / n) * xa));
      let r = vo(c, _, O, T, a);
      ((s.gnx = r.nx),
        (s.gny = r.ny),
        (s.gnz = r.nz),
        (s.groundY = r.y),
        (j = !0),
        (s.coyote = 5));
    }
  } else {
    let t = S && s.slide === 0,
      i = s.chute === 1 && !t;
    if (i) {
      let e = Math.min(1, fa * o);
      ((l[0] += (re * 7 * k - l[0]) * e), (l[2] += (ie * 7 * k - l[2]) * e));
    } else if (E) {
      let e = Math.hypot(l[0], l[2]);
      if (t && e > 1e-4) {
        let t = l[0] / e,
          n = l[2] / e;
        if (k > 0.3) {
          let e = Math.min(1, La * o);
          ((t += (re - t) * e), (n += (ie - n) * e));
          let r = Math.hypot(t, n) || 1;
          ((t /= r), (n /= r));
        }
        let r = s.gny > 0.2 ? -(s.gnx * t + s.gnz * n) / s.gny : 0,
          i = Math.max(0, e - (5 + 12 * r) * o);
        ((l[0] = t * i), (l[2] = n * i));
      }
      (--s.sld <= 0 || (t && Math.hypot(l[0], l[2]) < 2.6)) && (s.sld = 0);
    } else (t && eo(l, o, re, ie, se), to(l, re, ie, se, t ? 40 : 40 * Wi, o));
    let u = (S || s.coyote > 0) && n.stance !== r.PRONE && s.slide === 0 && !f;
    (s.jumpBuf > 0 && u
      ? ((l[1] = Gi * (1 - 0.5 * A)),
        (ce = !0),
        (s.jumpBuf = 0),
        (s.coyote = 0),
        (s.sld = 0),
        (n.state |= e.JUMPING))
      : s.jumpBuf > 0 && !de && s.jumpBuf--,
      !S || ce || s.slide ? (l[1] -= 20 * o) : (l[1] = 0),
      l[1] < -40 && (l[1] = -40),
      i &&
        l[1] < -4.2 &&
        ((l[1] += 20 * o),
        (l[1] += (-4.2 - l[1]) * Math.min(1, da * o)),
        l[1] > -4.2 && (l[1] = -4.2)));
    let d = c[1];
    ((c[0] += l[0] * o), (c[2] += l[2] * o));
    let p = S || l[1] <= 0.01,
      m = fo(c, l, O, _, T, p, a);
    (n.stance === r.PRONE && (ho(c, l, n.yaw, O, T), fo(c, l, O, _, T, p, a)),
      m > 0.08 && (s.stepOff -= m));
    let h = vo(c, _, O, T, a),
      g = h.ny < za - 0.001,
      v = c[1] + l[1] * o;
    if (
      (v <= h.y + 1e-4
        ? ce && l[1] > 0
          ? v < h.y && (v = h.y)
          : (!S && l[1] < 0 && !(s.slide === 1 && g) && (ue = !0),
            (v = h.y),
            (j = !0),
            g || (l[1] = 0))
        : S && !ce && l[1] <= 0.01 && v - h.y <= go(h.ny, g)
          ? ((v = h.y), (j = !0), (l[1] = 0))
          : s.slide === 1 &&
            g &&
            !ce &&
            v - h.y <= go(h.ny, g) &&
            ((v = h.y), (j = !0)),
      j && S)
    ) {
      let e = v - (d + m),
        t = h.ny > 0.98 ? 0.08 : 0.25;
      (e > t || e < -t) && (s.stepOff -= e);
    }
    if (((c[1] = v), g && j)) {
      ((j = !1), (s.slide = 1));
      let e = l[0] * h.nx + l[1] * h.ny + l[2] * h.nz;
      ((l[0] -= h.nx * e), (l[1] -= h.ny * e), (l[2] -= h.nz * e));
    } else s.slide = 0;
    (yo(c, l, O, _, T, h.y),
      (s.gnx = h.nx),
      (s.gny = h.ny),
      (s.gnz = h.nz),
      (s.groundY = h.y),
      j ? (s.coyote = 5) : ce ? (s.coyote = 0) : s.coyote > 0 && s.coyote--);
  }
  if (
    (ue
      ? ((s.land = 0),
        (s.landSpeed = -le),
        (s.landDrop = Math.max(0, Math.min(s.fallTop - c[1], (le * le) / 40))),
        (s.landN = (s.landN + 1) % 65536))
      : s.land >= 0 && s.land < 1e5 && s.land++,
    (j || x || s.slide === 1 || s.mantleT > 0 || !(s.fallTop >= c[1])) &&
      (s.fallTop = c[1]),
    (j || x || f) && (s.chute = 0),
    s.stepOff > 0.9
      ? (s.stepOff = 0.9)
      : s.stepOff < -0.9 && (s.stepOff = -0.9),
    s.stepOff !== 0)
  ) {
    let e = ea + ta * (s.stepOff < 0 ? -s.stepOff : s.stepOff);
    ((s.stepOff = Ua(s.stepOff, 0, e * o)),
      s.stepOff < 1e-4 && s.stepOff > -1e-4 && (s.stepOff = 0));
  }
  let fe =
    x || oe || s.sld > 0 || n.stance === r.PRONE || f
      ? 0
      : (p & t.LEAN_R ? 1 : 0) - (p & t.LEAN_L ? 1 : 0);
  if (fe !== 0) {
    let e = c[1] + O - Bi;
    $a(T, c[0] + ne * fe * 0.45, e, c[2] - te * fe * 0.45, 0.2) &&
      ((fe *= 0.5),
      $a(T, c[0] + ne * fe * 0.45, e, c[2] - te * fe * 0.45, 0.2) && (fe = 0));
  }
  s.lean = Ua(s.lean, fe, 9 * o);
  let pe = u.bounds;
  pe &&
    (c[0] < pe[0] + _ && ((c[0] = pe[0] + _), l[0] < 0 && (l[0] = 0)),
    c[2] < pe[1] + _ && ((c[2] = pe[1] + _), l[2] < 0 && (l[2] = 0)),
    c[0] > pe[2] - _ && ((c[0] = pe[2] - _), l[0] > 0 && (l[0] = 0)),
    c[2] > pe[3] - _ && ((c[2] = pe[3] - _), l[2] > 0 && (l[2] = 0)));
  let me = u.boundsCuts;
  if (me)
    for (let e = 0; e < me.length; e++) {
      let t = me[e];
      if (
        c[0] <= t[0] - _ ||
        c[0] >= t[2] + _ ||
        c[2] <= t[1] - _ ||
        c[2] >= t[3] + _
      )
        continue;
      let n = c[0] - (t[0] - _),
        r = t[2] + _ - c[0],
        i = c[2] - (t[1] - _),
        a = t[3] + _ - c[2],
        o = Math.min(n, r, i, a);
      o === n
        ? ((c[0] = t[0] - _), l[0] > 0 && (l[0] = 0))
        : o === r
          ? ((c[0] = t[2] + _), l[0] < 0 && (l[0] = 0))
          : o === i
            ? ((c[2] = t[1] - _), l[2] > 0 && (l[2] = 0))
            : ((c[2] = t[3] + _), l[2] < 0 && (l[2] = 0));
    }
  ((s.grounded = +!!j), (s.swim = +!!x), (s.wade = A));
  let he = Math.hypot(l[0], l[2]),
    M =
      n.state &
      ~(
        e.SPRINT |
        e.ADS |
        e.GROUNDED |
        e.LEAN_L |
        e.LEAN_R |
        e.SWIMMING |
        e.SLIDE
      );
  return (
    oe && he > 1 && (M |= e.SPRINT),
    s.sld > 0 && (M |= e.SLIDE),
    C && (M |= e.ADS),
    j && ((M |= e.GROUNDED), (M &= ~e.JUMPING)),
    s.lean < -0.05 && (M |= e.LEAN_L),
    s.lean > 0.05 && (M |= e.LEAN_R),
    x && (M |= e.SWIMMING),
    s.chute === 1 ? (M |= e.CHUTE) : (M &= ~e.CHUTE),
    (n.state = M),
    $ > 1 && zo(n, s, a, O, o),
    n
  );
}
