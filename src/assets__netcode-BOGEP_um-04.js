// assets__netcode-BOGEP_um 04 — math
// Lines 1488-1766 of readable/assets__netcode-BOGEP_um.pretty.js (statement-aligned).
function W(e, t, n) {
  let r = t.lastInput,
    i = null,
    a = e.modules.get(`player`);
  if (a && typeof a.getInput == `function`)
    try {
      i = a.getInput();
    } catch (t) {
      e.warn(`player.getInput threw: ${t?.message ?? t}`);
    }
  if (i)
    ((r.mx = +i.mx || 0),
      (r.mz = +i.mz || 0),
      Number.isFinite(i.yaw) && (r.yaw = i.yaw),
      Number.isFinite(i.pitch) && (r.pitch = i.pitch),
      (r.buttons = i.buttons | 0),
      (r.slot = i.slot | 0));
  else if (t.showcase) {
    let e = t.showcase.input(n);
    ((r.mx = e.mx),
      (r.mz = e.mz),
      (r.yaw = e.yaw),
      (r.pitch = e.pitch),
      (r.buttons = e.buttons),
      (r.slot = e.slot));
  }
  let o =
    typeof window < `u` &&
    window.__game &&
    typeof window.__game.getScriptedInput == `function`
      ? window.__game.getScriptedInput()
      : null;
  return (
    o &&
      typeof o == `object` &&
      (o.mx != null && (r.mx = +o.mx),
      o.mz != null && (r.mz = +o.mz),
      o.yaw != null && (r.yaw = +o.yaw),
      o.pitch != null && (r.pitch = +o.pitch),
      o.buttons != null && (r.buttons = o.buttons | 0),
      o.slot != null && (r.slot = o.slot | 0),
      o.dyaw != null && (r.yaw += +o.dyaw * n),
      o.dpitch != null && (r.pitch += +o.dpitch * n)),
    r
  );
}
var G = {
  skin: 13214334,
  skinDark: 10845276,
  rifle: 2828844,
  rifleWood: 5916210,
  pack: 6119490,
  boot: 3090981,
  strap: 3816240,
  teamTint: [14129722, 13384499],
  teamDark: [11038762, 9315874],
  local: 15855846,
  boulder: [9143931, 7762282, 10130568],
  crate: [10125138, 11047006, 8875847],
  ridge: [6584655, 5992265, 7308634],
  sandbag: [10655341, 9668447, 11576441],
  canopy: [5140536, 6061890, 4416560],
  trunk: 6968892,
};
function K(e) {
  return e.index ? e.toNonIndexed() : e;
}
function q(e, t, n = 1) {
  let r = new u(t).multiplyScalar(n),
    a = e.attributes.position.count,
    o = new Float32Array(a * 3);
  for (let e = 0; e < a; e++)
    ((o[e * 3] = r.r), (o[e * 3 + 1] = r.g), (o[e * 3 + 2] = r.b));
  return (e.setAttribute(`color`, new i(o, 3)), e);
}
function J(e, t, n) {
  let r = e.attributes.position,
    i = e.attributes.color,
    a = 1 / 0,
    o = -1 / 0;
  for (let e = 0; e < r.count; e++) {
    let t = r.getY(e);
    (t < a && (a = t), t > o && (o = t));
  }
  let s = o - a || 1;
  for (let e = 0; e < r.count; e++) {
    let o = t + (n - t) * ((r.getY(e) - a) / s);
    i.setXYZ(e, i.getX(e) * o, i.getY(e) * o, i.getZ(e) * o);
  }
  return ((i.needsUpdate = !0), e);
}
function Y(e, t = {}) {
  let n = new u(t.grass ?? 6455370),
    r = new u(t.dry ?? 10328661),
    a = new u(t.dirt ?? 8810829),
    o = new u(7168580),
    c = new u(6715727),
    l = new u(),
    d = Ee(e, 0.021),
    f = Ee(e, 0.0034),
    p = Ee(e, 0.09),
    m = (e, t, n) => {
      let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
      return r * r * (3 - 2 * r);
    },
    h = [],
    g = [],
    _ = (e, t, i, s) => {
      let u = (e + i) * 0.5,
        _ = (t + s) * 0.5,
        v = Math.hypot(u, _),
        y = m(120, 700, v),
        b = d(u, _) * (1 - y) + f(u, _) * y;
      (l.copy(n).lerp(r, m(0.5, 0.86, b)),
        b < 0.42 && l.lerp(a, Math.min(0.8, (0.42 - b) * 2.4)),
        l.lerp(o, Math.max(0, 0.5 - Math.abs(v - 26) * 0.017)),
        l.lerp(c, m(400, 2400, v) * 0.5),
        l.multiplyScalar(0.94 + p(u, _) * 0.12));
      for (let [n, r] of [
        [e, t],
        [e, s],
        [i, s],
        [e, t],
        [i, s],
        [i, t],
      ])
        (h.push(n, 0, r), g.push(l.r, l.g, l.b));
    },
    v = (e, t, n, r, i) => {
      let a = Math.max(1, Math.round((n - e) / i)),
        o = Math.max(1, Math.round((r - t) / i)),
        s = (n - e) / a,
        c = (r - t) / o;
      for (let n = 0; n < a; n++)
        for (let r = 0; r < o; r++)
          _(e + n * s, t + r * c, e + (n + 1) * s, t + (r + 1) * c);
    };
  v(-96, -96, 96, 96, 6);
  let y = 96,
    b = 12;
  for (let e = 0; e < 7; e++) {
    let e = y * 2;
    (v(-e, y, e, e, b),
      v(-e, -e, e, -y, b),
      v(-e, -y, -y, y, b),
      v(y, -y, e, y, b),
      (y = e),
      (b *= 2));
  }
  let x = new s();
  return (
    x.setAttribute(`position`, new i(new Float32Array(h), 3)),
    x.setAttribute(`color`, new i(new Float32Array(g), 3)),
    x.computeVertexNormals(),
    x
  );
}
function Ee(e, t) {
  let n = Math.floor(e.range(1, 1 << 28)),
    r = (e, t) => {
      let r = Math.imul(e | 0, 374761393) ^ Math.imul(t | 0, 668265263) ^ n;
      return (
        (r = Math.imul(r ^ (r >>> 13), 1274126177)),
        ((r ^ (r >>> 16)) >>> 0) / 4294967295
      );
    },
    i = (e, t, n) => e + (t - e) * n,
    a = (e, t) => {
      let n = Math.floor(e),
        a = Math.floor(t),
        o = e - n,
        s = t - a,
        c = o * o * (3 - 2 * o),
        l = s * s * (3 - 2 * s);
      return i(
        i(r(n, a), r(n + 1, a), c),
        i(r(n, a + 1), r(n + 1, a + 1), c),
        l,
      );
    };
  return (e, n) => {
    let r = 0,
      i = 0.5,
      o = t,
      s = 0;
    for (let t = 0; t < 4; t++)
      ((r += i * a(e * o + t * 17.3, n * o - t * 9.1)),
        (s += i),
        (i *= 0.5),
        (o *= 2.13));
    return r / s;
  };
}
function X(e, t, n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0) {
  return (
    (e = K(e)),
    (o || s || c) && (e.rotateX(o), e.rotateY(s), e.rotateZ(c)),
    e.translate(r, i, a),
    q(e, t, n)
  );
}
function Z() {
  let e = S(
      [
        X(new C(0.115, 0.5, 2, 6), 16777215, 0.62, -0.13, 0.45, 0),
        X(new C(0.115, 0.5, 2, 6), 16777215, 0.62, 0.13, 0.45, 0),
        X(new C(0.235, 0.46, 2, 7), 16777215, 1, 0, 1.13, 0),
        X(
          new C(0.075, 0.42, 2, 5),
          16777215,
          0.85,
          -0.33,
          1.2,
          0.02,
          0.35,
          0,
          0.12,
        ),
        X(
          new C(0.075, 0.42, 2, 5),
          16777215,
          0.85,
          0.33,
          1.2,
          0.02,
          0.35,
          0,
          -0.12,
        ),
        X(
          new te(0.175, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.55),
          16777215,
          1.15,
          0,
          1.6,
          0,
        ),
      ],
      !1,
    ),
    n = S(
      [
        X(new v(0.135, 1), G.skin, 1, 0, 1.6, 0),
        X(new t(0.22, 0.09, 0.26), G.boot, 1, -0.13, 0.05, -0.02),
        X(new t(0.22, 0.09, 0.26), G.boot, 1, 0.13, 0.05, -0.02),
        X(new t(0.3, 0.36, 0.16), G.pack, 1, 0, 1.2, 0.28),
        X(new t(0.5, 0.07, 0.34), G.strap, 1, 0, 0.92, 0),
        X(
          new t(0.055, 0.075, 0.72),
          G.rifle,
          1,
          0.22,
          1.12,
          -0.38,
          -0.08,
          0,
          0,
        ),
        X(new t(0.05, 0.13, 0.22), G.rifleWood, 1, 0.22, 1.09, -0.02),
        X(
          new a(0.014, 0.014, 0.35, 5),
          G.rifle,
          1,
          0.22,
          1.16,
          -0.88,
          Math.PI / 2,
          0,
          0,
        ),
      ],
      !1,
    );
  return (
    e.computeVertexNormals(),
    n.computeVertexNormals(),
    { tinted: e, neutral: n }
  );
}
