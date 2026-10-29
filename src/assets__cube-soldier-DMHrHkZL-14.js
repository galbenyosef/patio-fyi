// assets__cube-soldier-DMHrHkZL 14 — math
// Lines 3979-4309 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function ki(n = !1, r = 1, i = 0) {
  let a = Di(r % 4),
    o = a.P,
    s = o.length,
    c = gi(a, _i),
    l = c.attributes.position.array,
    u = new Float32Array(s);
  o.forEach((e, t) => {
    let n = Math.max(0, Math.min(1, (e.y - 0.64) / 0.12));
    u[t] = n * n * (3 - 2 * n);
  });
  let d = Float32Array.from(l),
    p = Ei(n, i),
    m = [new t(c, p.inner), new t(c, p.net)];
  if (!Ci) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(255,255,255,0.9)`),
      n.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (Ci = new j(e)));
  }
  let h = [];
  for (let n of [-1, 1]) {
    let r = n * 0.052 * ti,
      i = $r + bi * ti,
      a = 0;
    for (let e of o)
      Math.abs(e.x - r) < 0.03 &&
        Math.abs(e.y - i) < 0.03 &&
        (a = Math.min(a, e.z));
    let s = (a + 0.005 - ei) / ti,
      c = new t(
        new S(0.044, 0.009),
        new f({ color: 15331810, toneMapped: !1, side: 2 }),
      );
    (c.position.set(n * 0.052, bi, s), (c.rotation.z = n * 0.28));
    let l = new x(
      new e({
        map: Ci,
        color: 13625544,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        opacity: 0.35,
        toneMapped: !1,
      }),
    );
    (l.position.set(n * 0.052, bi, s - 0.03),
      l.scale.set(0.065, 0.032, 1),
      h.push(c, l));
  }
  let g = new M().compose(J(0, $r, ei), new _(), J(ti, ti, ti)).invert(),
    v = new M(),
    y = J(0, 0, 0),
    b = c.attributes.position.array;
  return {
    meshes: m,
    eyes: h,
    update: (e) => {
      (e.updateMatrix(), v.multiplyMatrices(e.matrix, g));
      for (let e = 0; e < s; e++) {
        let t = u[e],
          n = e * 3;
        if (t === 0) {
          ((b[n] = d[n]), (b[n + 1] = d[n + 1]), (b[n + 2] = d[n + 2]));
          continue;
        }
        (y.set(d[n], d[n + 1], d[n + 2]).applyMatrix4(v),
          (b[n] = d[n] + (y.x - d[n]) * t),
          (b[n + 1] = d[n + 1] + (y.y - d[n + 1]) * t),
          (b[n + 2] = d[n + 2] + (y.z - d[n + 2]) * t));
      }
      ((c.attributes.position.needsUpdate = !0), c.computeVertexNormals());
    },
  };
}
var Ai = [
    [
      `#9d927e`,
      `#857b69`,
      `#b3a791`,
      `#6f6757`,
      `#a89c86`,
      `#c1b59d`,
      `#8f8573`,
      `#a1967f`,
    ],
    [
      `#4a4749`,
      `#6e3a35`,
      `#3b393c`,
      `#5c3533`,
      `#55524f`,
      `#2f2e31`,
      `#7a4038`,
      `#434044`,
    ],
  ],
  ji = [`#6c6353`, `#2c2b2e`],
  Mi = [],
  Ni = [],
  Pi = [];
function Fi(e, t, n, r, i, a = 0) {
  (e.save(), e.translate(t, n), e.rotate(a), e.beginPath());
  for (let t = 0; t <= 64; t++) {
    let n = (t / 64) * Math.PI * 2,
      a = 0.78 + 0.22 * Math.cos(9 * n) * Math.sin(n / 2) ** 0.5,
      o = (Math.sin(n) * a * r) / 2,
      s = i * 0.12 + ((1 - Math.cos(n)) / 2) * i * 0.88 * (0.9 + 0.1 * a);
    t ? e.lineTo(o, s) : e.moveTo(o, s);
  }
  (e.closePath(), e.restore());
}
function Ii(e) {
  if (Mi[e]) return Mi[e];
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`);
  for (let t = 0; t < 16; t++) {
    let r = (t % 4) * 64 + 32,
      i = Math.floor(t / 4) * 64 + 2;
    (Fi(n, r, i, 50, 60),
      (n.fillStyle = Ai[e][t % 8]),
      n.fill(),
      (n.strokeStyle = `rgba(30,26,20,0.45)`),
      (n.lineWidth = 1.5),
      n.beginPath(),
      n.moveTo(r, i + 2),
      n.lineTo(r, i + 52),
      n.stroke(),
      (n.fillStyle = `rgba(255,255,255,0.08)`),
      Fi(n, r - 4, i + 6, 22, 40),
      n.fill());
  }
  let r = (Mi[e] = new j(t));
  return ((r.colorSpace = h), (r.anisotropy = 4), r);
}
function Li(e) {
  if (Ni[e]) return Ni[e];
  let t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`),
    r = li(5);
  ((n.fillStyle = ji[e]), n.fillRect(0, 0, 256, 256));
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
      (Fi(n, i + r, a + c, o * 0.8, o, s),
        (n.fillStyle = Ai[e][t % 8]),
        n.fill());
  }
  let i = (Ni[e] = new j(t));
  return ((i.colorSpace = h), (i.wrapS = i.wrapT = b), (i.anisotropy = 4), i);
}
function Ri(e = 0) {
  let t = +(e === 1);
  return (Pi[t] ??= {
    cloth: new a({ map: Li(t), side: 2, roughness: 1 }),
    leaves: new a({
      map: Ii(t),
      alphaTest: 0.5,
      alphaToCoverage: !0,
      side: 2,
      roughness: 1,
    }),
  });
}
var zi = new o(),
  Bi = new o(),
  Vi = new o(),
  Hi = new o(),
  Ui = new o();
function Wi(e, t, n, r, i = 1) {
  let a = (0.05 + r() * 0.035) * i,
    o = a * (1.2 + r() * 0.25),
    s = 0.15 + r() * 0.4;
  (Vi.set(0, -1, 0).addScaledVector(n, n.y),
    Vi.lengthSq() < 0.02
      ? Vi.set(t.x, 0, t.z - 0.03).normalize()
      : Vi.normalize(),
    zi
      .copy(Vi)
      .multiplyScalar(Math.cos(s))
      .addScaledVector(n, Math.sin(s))
      .applyAxisAngle(n, (r() - 0.5) * 0.7)
      .normalize(),
    Bi.crossVectors(zi, n).normalize(),
    Hi.copy(t).addScaledVector(n, 0.005));
  let c = Hi.clone().addScaledVector(Bi, -a / 2),
    l = Hi.clone().addScaledVector(Bi, a / 2),
    u = c.clone().addScaledVector(zi, o),
    d = l.clone().addScaledVector(zi, o),
    f = (r() * 16) | 0,
    p = (f % 4) / 4,
    m = p + 0.25,
    h = 1 - Math.floor(f / 4) / 4,
    g = h - 0.25;
  (Ui.crossVectors(Bi, zi).normalize(), Ui.dot(n) < 0 && Ui.negate());
  for (let [t, n, r] of [
    [c, p, h],
    [u, p, g],
    [d, m, g],
    [c, p, h],
    [d, m, g],
    [l, m, h],
  ])
    (e.pos.push(t.x, t.y, t.z), e.uv.push(n, r), e.nor.push(Ui.x, Ui.y, Ui.z));
}
function Gi(e) {
  let t = new l();
  return (
    t.setAttribute(`position`, new g(e.pos, 3)),
    t.setAttribute(`normal`, new g(e.nor, 3)),
    t.setAttribute(`uv`, new g(e.uv, 2)),
    t
  );
}
function Ki(e) {
  let t = li(e * 104729 + 7),
    n = [t() * 9, t() * 9, t() * 9, t() * 9],
    r = (e, t) =>
      0.05 * Math.abs(Math.sin(e * 23 + n[t])) +
      0.04 * Math.abs(Math.sin(e * 57 + n[t + 1])) +
      0.03 * Math.sin(e * 9 + n[t]);
  return hi({
    key: `poncho` + e,
    nx: 33,
    nz: 56,
    spacing: 0.04,
    centre: J(0, 0.72, 0.02),
    off: 0.018,
    steps: 300,
    keep: (e, t) =>
      Math.hypot(e, t) > 0.11 &&
      Math.abs(t) <= 1.08 - r(e, 0) &&
      Math.abs(e) <= 0.64 - r(t, 2),
    pin: (e, t) => (Math.hypot(e, t) < 0.17 ? 0.655 : null),
  });
}
function qi(e = 0, n = 0) {
  let { cloth: r, leaves: i } = Ji(e),
    a = Ri(n);
  return [new t(r, a.cloth), new t(i, a.leaves)];
}
function Ji(e = 0) {
  let t = gi(Ki(e % 2), 0.25),
    n = t.attributes.position,
    r = t.attributes.normal,
    i = t.index.array,
    a = li(e * 31 + 3),
    o = [],
    s = J(0, 0, 0),
    c = J(0, 0, 0),
    l = J(0, 0, 0),
    u = 0;
  for (let e = 0; e < i.length; e += 3)
    (s.fromBufferAttribute(n, i[e]),
      c.fromBufferAttribute(n, i[e + 1]),
      l.fromBufferAttribute(n, i[e + 2]),
      (u += c.sub(s).cross(l.sub(s)).length() / 2),
      o.push(u));
  let d = { pos: [], uv: [], nor: [] },
    f = J(0, 0, 0),
    p = J(0, 0, 0),
    m = J(0, 0, 0);
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
      Wi(d, f, p, a));
  }
  return { cloth: t, leaves: Gi(d) };
}
function Yi(e, n, r, i = 1, a = 70, o = 0) {
  return new t(Xi(e, n, r, i, a), Ri(o).leaves);
}
function Xi(e, t, n, r = 1, i = 70) {
  let a = li(r * 613 + 1),
    o = { pos: [], uv: [], nor: [] },
    s = J(0, 0, 0),
    c = J(0, 0, 0),
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
      Wi(o, s, c, a, 0.8));
  }
  return Gi(o);
}
