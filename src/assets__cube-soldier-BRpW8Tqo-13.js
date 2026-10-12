// assets__cube-soldier-BRpW8Tqo 13 — cloth
// Lines 3662-4010 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function Ur(e) {
  if (zr[e]) return zr[e];
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`);
  for (let t = 0; t < 16; t++) {
    let r = (t % 4) * 64 + 32,
      i = Math.floor(t / 4) * 64 + 2;
    (Hr(n, r, i, 50, 60),
      (n.fillStyle = Lr[e][t % 8]),
      n.fill(),
      (n.strokeStyle = `rgba(30,26,20,0.45)`),
      (n.lineWidth = 1.5),
      n.beginPath(),
      n.moveTo(r, i + 2),
      n.lineTo(r, i + 52),
      n.stroke(),
      (n.fillStyle = `rgba(255,255,255,0.08)`),
      Hr(n, r - 4, i + 6, 22, 40),
      n.fill());
  }
  let r = (zr[e] = new d(t));
  return ((r.colorSpace = T), (r.anisotropy = 4), r);
}
function Wr(e) {
  if (Br[e]) return Br[e];
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`),
    r = gr(5);
  ((n.fillStyle = Rr[e]), n.fillRect(0, 0, 256, 256));
  for (let t = 0; t < 90; t++) {
    let i = r() * 256,
      a = r() * 256,
      o = 22 + r() * 22,
      s = (r() - 0.5) * 0.8;
    for (let [r, c] of [
      [0, 0],
      [256, 0],
      [-256, 0],
      [0, 256],
      [0, -256],
    ])
      (Hr(n, i + r, a + c, o * 0.8, o, s),
        (n.fillStyle = Lr[e][t % 8]),
        n.fill());
  }
  let i = (Br[e] = new d(t));
  return ((i.colorSpace = T), (i.wrapS = i.wrapT = x), (i.anisotropy = 4), i);
}
function Gr(e = 0) {
  let t = +(e === 1);
  return (Vr[t] ??= {
    cloth: new m({ map: Wr(t), side: 2, roughness: 1 }),
    leaves: new m({
      map: Ur(t),
      alphaTest: 0.5,
      alphaToCoverage: !0,
      side: 2,
      roughness: 1,
    }),
  });
}
var Kr = new M(),
  qr = new M(),
  Jr = new M(),
  Yr = new M(),
  Xr = new M();
function Zr(e, t, n, r, i = 1) {
  let a = (0.05 + r() * 0.035) * i,
    o = a * (1.2 + r() * 0.25),
    s = 0.15 + r() * 0.4;
  (Jr.set(0, -1, 0).addScaledVector(n, n.y),
    Jr.lengthSq() < 0.02
      ? Jr.set(t.x, 0, t.z - 0.03).normalize()
      : Jr.normalize(),
    Kr.copy(Jr)
      .multiplyScalar(Math.cos(s))
      .addScaledVector(n, Math.sin(s))
      .applyAxisAngle(n, (r() - 0.5) * 0.7)
      .normalize(),
    qr.crossVectors(Kr, n).normalize(),
    Yr.copy(t).addScaledVector(n, 0.005));
  let c = Yr.clone().addScaledVector(qr, -a / 2),
    l = Yr.clone().addScaledVector(qr, a / 2),
    u = c.clone().addScaledVector(Kr, o),
    d = l.clone().addScaledVector(Kr, o),
    f = (r() * 16) | 0,
    p = (f % 4) / 4,
    m = p + 0.25,
    h = 1 - Math.floor(f / 4) / 4,
    g = h - 0.25;
  (Xr.crossVectors(qr, Kr).normalize(), Xr.dot(n) < 0 && Xr.negate());
  for (let [t, n, r] of [
    [c, p, h],
    [u, p, g],
    [d, m, g],
    [c, p, h],
    [d, m, g],
    [l, m, h],
  ])
    (e.pos.push(t.x, t.y, t.z), e.uv.push(n, r), e.nor.push(Xr.x, Xr.y, Xr.z));
}
function Qr(e) {
  let t = new c();
  return (
    t.setAttribute(`position`, new D(e.pos, 3)),
    t.setAttribute(`normal`, new D(e.nor, 3)),
    t.setAttribute(`uv`, new D(e.uv, 2)),
    t
  );
}
function $r(e) {
  let t = gr(e * 104729 + 7),
    n = [t() * 9, t() * 9, t() * 9, t() * 9],
    r = (e, t) =>
      0.05 * Math.abs(Math.sin(e * 23 + n[t])) +
      0.04 * Math.abs(Math.sin(e * 57 + n[t + 1])) +
      0.03 * Math.sin(e * 9 + n[t]);
  return Sr({
    key: `poncho` + e,
    nx: 33,
    nz: 56,
    spacing: 0.04,
    centre: q(0, 0.72, 0.02),
    off: 0.018,
    steps: 300,
    keep: (e, t) =>
      Math.hypot(e, t) > 0.11 &&
      Math.abs(t) <= 1.08 - r(e, 0) &&
      Math.abs(e) <= 0.64 - r(t, 2),
    pin: (e, t) => (Math.hypot(e, t) < 0.17 ? 0.655 : null),
  });
}
function ei(e = 0, t = 0) {
  let { cloth: n, leaves: r } = ti(e),
    i = Gr(t);
  return [new f(n, i.cloth), new f(r, i.leaves)];
}
function ti(e = 0) {
  let t = Cr($r(e % 2), 0.25),
    n = t.attributes.position,
    r = t.attributes.normal,
    i = t.index.array,
    a = gr(e * 31 + 3),
    o = [],
    s = q(0, 0, 0),
    c = q(0, 0, 0),
    l = q(0, 0, 0),
    u = 0;
  for (let e = 0; e < i.length; e += 3)
    (s.fromBufferAttribute(n, i[e]),
      c.fromBufferAttribute(n, i[e + 1]),
      l.fromBufferAttribute(n, i[e + 2]),
      (u += c.sub(s).cross(l.sub(s)).length() / 2),
      o.push(u));
  let d = { pos: [], uv: [], nor: [] },
    f = q(0, 0, 0),
    p = q(0, 0, 0),
    m = q(0, 0, 0);
  for (let e = 0; e < 1150; e++) {
    let e = a() * u,
      t = 0,
      h = o.length - 1;
    for (; t < h;) {
      let n = (t + h) >> 1;
      o[n] < e ? (t = n + 1) : (h = n);
    }
    let g = a(),
      _ = a();
    g + _ > 1 && ((g = 1 - g), (_ = 1 - _));
    let [v, y, b] = [i[t * 3], i[t * 3 + 1], i[t * 3 + 2]],
      x = 1 - g - _;
    (f
      .set(0, 0, 0)
      .addScaledVector(s.fromBufferAttribute(n, v), x)
      .addScaledVector(c.fromBufferAttribute(n, y), g)
      .addScaledVector(l.fromBufferAttribute(n, b), _),
      p
        .set(0, 0, 0)
        .addScaledVector(s.fromBufferAttribute(r, v), x)
        .addScaledVector(c.fromBufferAttribute(r, y), g)
        .addScaledVector(l.fromBufferAttribute(r, b), _)
        .normalize(),
      m.set(f.x, +(f.y > 0.6), f.z - 0.03),
      p.dot(m) < 0 && p.negate(),
      Zr(d, f, p, a));
  }
  return { cloth: t, leaves: Qr(d) };
}
function ni(e, t, n, r = 1, i = 70, a = 0) {
  return new f(ri(e, t, n, r, i), Gr(a).leaves);
}
function ri(e, t, n, r = 1, i = 70) {
  let a = gr(r * 613 + 1),
    o = { pos: [], uv: [], nor: [] },
    s = q(0, 0, 0),
    c = q(0, 0, 0),
    l = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0],
    ];
  for (let r = 0; r < i; r++) {
    let [r, , i] = l[(a() * 4) | 0],
      u = (a() - 0.5) * 2 * n;
    (c.set(r, 0, i),
      s.set(r * n + (i ? u : 0), e + (t - e) * a(), i * n + (r ? u : 0)),
      Zr(o, s, c, a, 0.8));
  }
  return Qr(o);
}
var J = (e, t, n, r, i, a, o, s = {}) =>
    H(e, t, n, r, i, a, o, { ...s, bevel: 0 }),
  ii = [`assault`, `sniper`, `support`, `engineer`, `medic`],
  ai = [tn, tn],
  oi = [
    `none`,
    `scarf`,
    `radio`,
    `bandolier`,
    `bedroll`,
    `knife`,
    `admin`,
    `heavy`,
    `grenades`,
    `holster`,
    `canteen`,
  ],
  si = [
    {
      name: `Amber`,
      team: 14850092,
      cloth: 12035452,
      gear: 4936516,
      helmet: 10259046,
      rim: 7299401,
    },
    {
      name: `Crimson`,
      team: 13777458,
      cloth: 3552827,
      gear: 8137258,
      helmet: 2894896,
      rim: 1579034,
    },
  ],
  ci = [4012851, 2368551],
  li = Object.freeze({
    kepler: Object.freeze([
      { cloth: 11843772, gear: 13136938, helmet: 14080212, rim: 7106676 },
      { cloth: 3094084, gear: 8137258, helmet: 2896186, rim: 1579809 },
    ]),
    hangar: Object.freeze([
      { cloth: 8357480, gear: 4409913, helmet: 7041115, rim: 4935489 },
      { cloth: 3883600, gear: 8137258, helmet: 3159358, rim: 1842981 },
    ]),
    mesa: Object.freeze([
      { cloth: 12087356, gear: 2060139, helmet: 2785146, rim: 6962466 },
      { cloth: 2240597, gear: 9053734, helmet: 1845063, rim: 1054244 },
    ]),
  }),
  ui = [
    { cloth: 13226708, gear: 5596767, helmet: 13950173, rim: 8030860 },
    { cloth: 11843258, gear: 7220268, helmet: 12632773, rim: 3815998 },
  ],
  Y = {
    boot: 2236187,
    sole: 1315602,
    glove: 8022607,
    metal: 2960683,
    dark: 1974046,
    wood: 5916210,
    white: 15658728,
    red: 13115434,
    lens: 1845806,
  },
  X = (e) => ({ tag: Pt.cloth, shade: e }),
  Z = (e = 1) => ({ tag: Pt.gear, shade: e }),
  di = { tag: Pt.team },
  Q = 16777215;
function fi(e, t) {
  let n = e.hair,
    r = [];
  if (e.hairStyle === 2) return r;
  let i = [0.014, 0.034, 0, 0.04][e.hairStyle];
  (t ||
    r.push(
      J(W.w + 0.012, i, W.d + 0.012, 0, Xt + i / 2 - 0.004, 0, n, {
        bevel: 0.006,
      }),
    ),
    r.push(
      J(
        W.w + 0.008,
        t ? 0.1 : 0.2,
        0.02,
        0,
        t ? Xt - 0.2 : Xt - 0.1,
        W.d / 2 + 0.006,
        n,
        { bevel: 0.005 },
      ),
    ));
  for (let e of [-1, 1])
    r.push(
      J(
        0.016,
        t ? 0.06 : 0.1,
        W.d * 0.55,
        e * (W.w / 2 + 0.004),
        Xt - (t ? 0.13 : 0.06),
        0.05,
        n,
        { bevel: 0.004 },
      ),
    );
  return (
    e.hairStyle === 3 &&
      r.push(
        J(0.07, 0.12, 0.06, 0, Xt - 0.16, W.d / 2 + 0.035, n),
        J(0.075, 0.025, 0.065, 0, Xt - 0.1, W.d / 2 + 0.035, Y.dark),
      ),
    r
  );
}
function pi(e, t, n, r, i) {
  let a = e.skin,
    o = [
      J(W.w, W.h, W.d, 0, W.y, 0, a, { bevel: 0.022 }),
      J(0.13, 0.08, 0.12, 0, 0.03, 0.01, a, { shade: 0.86 }),
      ...[-1, 1].map((e) =>
        J(0.03, 0.075, 0.06, e * (W.w / 2 + 0.01), Qt(12), 0.02, a, {
          shade: 0.93,
          bevel: 0.008,
        }),
      ),
    ];
  if (r === `sniper`) return { hard: zt(o), soft: null, shell: null };
  o.push(...fi(e, !0), ...qn(t, n, e.index, i));
  let s = o.find((e) => e.userData.shell),
    c = o.filter((e) => e.userData.smooth && !e.userData.shell);
  return {
    hard: zt(o.filter((e) => !e.userData.smooth)),
    soft: c.length ? zt(c) : null,
    shell: s,
  };
}
