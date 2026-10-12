// assets__environment-CVWKhKHP 10 — math
// Lines 2435-2830 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
function Sn(e, t) {
  let n = new M();
  n.name = `envShowcaseCity`;
  let r = gn(),
    i = {},
    a = {},
    o = (e, t, n) => {
      a[e] = t;
      for (let r = 0; r < t; r++) i[`${e}_${r}`] = n(r);
    };
  (o(`low5`, 2, () => tn(t.range(4.6, 6.4), t)),
    o(`low8`, 2, () => tn(t.range(8, 10), t)),
    o(`mid14`, 2, () => tn(t.range(13, 16), t)),
    o(`mid20`, 1, () => tn(20, t, { crown: 2.4 })),
    o(`set24`, 1, () =>
      nn(
        [
          { s: 1, h: 10 },
          { s: 0.72, h: 24 },
        ],
        t,
      ),
    ),
    o(`tall34`, 2, () => tn(t.range(32, 37), t, { crown: 3 })),
    o(`set50`, 1, () =>
      nn(
        [
          { s: 1, h: 12 },
          { s: 0.8, h: 32 },
          { s: 0.58, h: 50 },
        ],
        t,
      ),
    ),
    o(`tower72`, 1, () =>
      nn(
        [
          { s: 0.82, h: 40 },
          { s: 0.62, h: 72 },
        ],
        t,
      ),
    ),
    o(`cyl26`, 1, () => rn(26, 12, t)),
    o(`cyl44`, 1, () => rn(44, 10, t)),
    o(`zig12`, 1, () => an(3, 4, 1.2)),
    o(`gable9`, 2, () => on(t.range(5, 6.5), t.range(3, 4.2), t)),
    o(`tank6`, 1, () => sn(6)),
    o(`monument`, 1, () => cn()),
    o(`mast`, 1, () => fn()),
    o(`prop`, 1, () => pn()),
    o(`mark`, 1, () => mn()),
    o(`slab`, 1, () => mn()));
  let s = {};
  for (let e in i) s[e] = [];
  let c = [],
    l = [],
    u = (e) => `${e}_${t.int(0, a[e] - 1)}`,
    d = (e, t, n, r, i, a, o, c, l, u, d, f = 1) => (
      s[e].push({
        x: t,
        y: n,
        z: r,
        sx: i,
        sy: a,
        sz: o,
        rot: c,
        palette: l,
        wallIdx: u,
        roofIdx: d,
        tint: f,
      }),
      s[e][s[e].length - 1]
    ),
    f = (e, t, n, r, a, o, s, u, f, p, m, h = 1) => {
      d(e, t, n, r, a, o, s, u, f, p, m, h);
      let g = i[e].userData.masses;
      c.push({ x: t, y: n, z: r, sx: a, sy: o, sz: s, rot: u, masses: g });
      let _ = Math.abs(Math.cos(u)),
        v = Math.abs(Math.sin(u));
      l.push([t, r, (a * _ + s * v) * 0.5, (a * v + s * _) * 0.5]);
    },
    p = () => t.int(0, 3) * (Math.PI / 2),
    m = (e, n) => {
      let r = Math.abs(
        Math.sin(
          (Math.floor(e / 2) + 3) * 12.9898 +
            (Math.floor(n / 2) + 7) * 78.233 +
            t.seed * 0.001,
        ) * 43758.5453,
      );
      return Math.floor((r % 1) * 3);
    },
    h = (e, t) => {
      let n = Math.hypot(e, t);
      return (
        0.55 +
        2.7 * Math.exp(-((n - 130) * (n - 130)) / 4900) +
        0.35 * Math.exp(-(n * n) / 9e4)
      );
    },
    g = [],
    _ = 0;
  for (let e = 0; e < Nt; e++)
    for (let n = 0; n < Nt; n++) {
      let r = (e - Pt) * H,
        a = (n - Pt) * H,
        o = e === Pt && n === Pt;
      if ((g.push({ cx: r, cz: a, plaza: o }), o)) continue;
      let s = m(e, n),
        c = h(r, a),
        l = Math.hypot(r, a) < 52,
        d = l ? 4 : c > 2.6 ? t.pick([1, 1, 2]) : t.pick([1, 2, 2, 4, 4]),
        v = [];
      if (d === 1) v.push([r, a, 31, 31]);
      else if (d === 2) {
        let e = t.chance(0.5),
          n = (Mt - 4.5) / 2;
        for (let t = 0; t < 2; t++) {
          let i = (t - 0.5) * 16.25;
          v.push(e ? [r + i, a, n, 31] : [r, a + i, 31, n]);
        }
      } else {
        let e = (Mt - 4.5) / 2;
        for (let t = 0; t < 2; t++)
          for (let n = 0; n < 2; n++)
            v.push([r + (t - 0.5) * 16.25, a + (n - 0.5) * 16.25, e, e]);
      }
      for (let [e, n, r, a] of v) {
        let o = l ? t.range(4, 9) : c * t.range(5, 13) * (r > 20 ? 1.35 : 1),
          d,
          m = t.next();
        d = l
          ? m < 0.45
            ? `gable9`
            : m < 0.85
              ? `low5`
              : `tank6`
          : o < 7
            ? m < 0.55
              ? `low5`
              : m < 0.8
                ? `gable9`
                : m < 0.9
                  ? `tank6`
                  : `zig12`
            : o < 11
              ? m < 0.6
                ? `low8`
                : m < 0.85
                  ? `gable9`
                  : `zig12`
              : o < 17
                ? m < 0.75
                  ? `mid14`
                  : `cyl26`
                : o < 24
                  ? m < 0.5
                    ? `mid20`
                    : m < 0.85
                      ? `set24`
                      : `cyl26`
                  : o < 34
                    ? m < 0.6
                      ? `tall34`
                      : m < 0.85
                        ? `set24`
                        : `cyl44`
                    : o < 50
                      ? m < 0.6
                        ? `set50`
                        : m < 0.85
                          ? `tall34`
                          : `cyl44`
                      : m < 0.7
                        ? `tower72`
                        : `set50`;
        let h =
            d.startsWith(`cyl`) || d === `tank6`
              ? 0.9
              : d === `zig12`
                ? 0.85
                : 1,
          g = r * h * t.range(0.86, 1),
          v = a * h * t.range(0.86, 1),
          y = t.range(0.86, 1.16),
          b = u(d),
          x = i[b].userData.height * y,
          S = Math.min(l ? 6.5 : 1 / 0, Ut(e, n, g / 2, v / 2));
        x > S && (y *= S / x);
        let C = Wt[s];
        (f(
          b,
          e + t.range(-0.5, 0.5),
          0,
          n + t.range(-0.5, 0.5),
          g,
          y,
          v,
          p(),
          s,
          t.int(0, C.walls.length - 1),
          t.int(0, C.roofs.length - 1),
          t.range(0.9, 1.08),
        ),
          _++);
      }
    }
  let v = [];
  for (let e = 0; e < 110; e++) {
    let e = t.range(0, Math.PI * 2),
      n = t.range(330, 545),
      r = Math.cos(e) * n * t.range(0.85, 1.25),
      i = Math.sin(e) * n * t.range(0.85, 1.25);
    if (Math.max(Math.abs(r), Math.abs(i)) < 320) continue;
    let a = t.pick([`low5`, `gable9`, `gable9`, `tank6`, `low8`, `zig12`]),
      o = t.int(0, 2),
      s = Wt[o],
      c = t.range(9, 19);
    (v.push([
      u(a),
      r,
      i,
      c,
      t.range(0.7, 1.05),
      c * t.range(0.7, 1.2),
      p(),
      o,
      t.int(0, s.walls.length - 1),
      t.int(0, s.roofs.length - 1),
      t.range(0.86, 1.04),
    ]),
      _++);
  }
  let y = [];
  for (let e = 0; e < 46; e++) {
    let e = t.range(0, Math.PI * 2),
      n = t.range(360, 1250),
      r = Math.cos(e) * n,
      i = Math.sin(e) * n;
    if (!(Math.max(Math.abs(r), Math.abs(i)) < 330))
      for (let e = 0, n = t.int(2, 5); e < n; e++) {
        let e = r + t.range(-26, 26),
          n = i + t.range(-26, 26),
          a = t.range(5, 14);
        y.push([
          e,
          n,
          a,
          t.range(2.6, 6.5),
          a * t.range(0.6, 1.3),
          t.range(0, Math.PI),
          t.int(0, 4),
          t.int(0, 3),
          t.range(0.85, 1.12),
        ]);
      }
  }
  (f(`gable9_0`, 0, 0, -19.5, 7.5, 0.62, 24, Math.PI / 2, 0, 2, 0, 1),
    f(`low8_0`, -15, 0, -4.5, 6, 0.62, 13, 0, 1, 2, 3, 1),
    f(`low5_0`, 15.2, 0, -4, 5.5, 1.05, 16, 0, 2, 1, 2, 1));
  let b = (e, t, n, r, i, a, o, s, c, l, u = 1) =>
    d(e, t, -0.08000000000000002, n, r, i + 0.26, a, o, s, c, l, u);
  (d(`slab_0`, 0, -0.3, 0, 11, 0.84, 11, 0, 0, 2, 0, 0.97),
    d(`slab_0`, 0, 0.3, 0, 8, 0.58, 8, 0, 0, 4, 0, 1),
    d(`monument_0`, 0, 0.6, 0, 1.15, 1.15, 1.15, 0, 0, 0, 2, 1),
    l.push([0, 0, 3.6, 3.6], [0, 0, 5.5, 5.5], [0, 0, 4, 4]));
  for (let e = 0; e < 4; e++) {
    let t = 1.4 + e * 2.7,
      n = 7.6;
    (b(`prop_0`, t, n, 0.26, 0.88, 0.26, 0, 1, 3, 1, 0.85),
      l.push([t, n, 0.18, 0.18]));
  }
  (b(`prop_0`, -0.6, 7, 2.8, 0.46, 0.62, -0.38, 0, 3, 0, 1),
    d(`prop_0`, -0.6, 0.62, 7, 2.8, 0.12, 0.46, -0.38, 0, 1, 0, 1),
    b(`prop_0`, 4.9, 6.7, 1.3, 0.85, 1.3, 0.28, 1, 0, 3, 1),
    b(`prop_0`, -6.4, 8.8, 1.4, 0.78, 1.4, 0.28, 1, 0, 3, 1),
    l.push([-0.6, 7, 1.5, 0.6], [4.9, 6.7, 0.8, 0.8], [-6.4, 8.8, 0.85, 0.85]));
  for (let e = 0; e < 6; e++) {
    let t = (Math.PI / 3) * e + 1.05,
      n = Math.cos(t) * 8.4,
      r = Math.sin(t) * 8.4;
    Math.hypot(n - (Bt[0] + 1.71), r - (Bt[2] + 4.7)) < 4.2 ||
      (b(`prop_0`, n, r, 2.4, 0.5, 0.7, -t, 0, 3, 0, 1),
      l.push([n, r, 1.3, 0.5]));
  }
  for (let e = 0; e < 5; e++)
    (b(`prop_0`, -11.4, -6 + e * 3.6, 0.55, 0.94, 3.2, 0, 0, 1, 0, 1),
      l.push([-11.4, -6 + e * 3.6, 0.35, 1.7]));
  for (let [e, t] of [
    [-1.6, 14.5],
    [1.4, 15.2],
    [4.4, 14.2],
  ])
    (b(`prop_0`, e, t, 0.22, 10, 0.22, 0, 1, 3, 0, 1),
      b(`prop_0`, e, t, 0.7, 0.42, 0.7, 0, 0, 2, 0, 1),
      d(`prop_0`, e, 7.4, t - 0.06, 0.1, 2.2, 1.3, 0, 2, 0, 1, 1),
      l.push([e, t, 0.4, 0.4]));
  let S = [
    [-6.5, 17],
    [-130, 104],
    [144, -98],
  ];
  for (let [e, t] of S)
    (d(`mast_0`, e, -0.08000000000000002, t, 1, 1, 1, 0, 1, 3, 0, 1),
      l.push([e, t, 0.9, 0.9]));
  for (let e = 0; e < 9; e++)
    d(`mark_0`, -8 + e * 2.6, 0.02, 25.5, 0.6, 0.06, 3.4, 0, 0, 4, 0, 1.2);
  for (let e = -5; e <= 5; e++)
    e !== 0 &&
      (b(`prop_0`, e * H + 16, 16, 1.1, 0.7, 1.1, 0, 2, 4, 1, 1),
      b(`prop_0`, 16, e * H + 16, 1.1, 0.7, 1.1, 0, 0, 2, 1, 1));
  let C = vn(l),
    w = yn(t, C);
  n.add(w.mesh);
  let T = bn(t, g, C);
  n.add(T.mesh);
  for (let [e, t, n, r, i, a, o, s, c, l, u] of v)
    f(e, t, w.hAt(t, n), n, r, i, a, o, s, c, l, u);
  for (let [e, t, n, r, i, a, o, s, c] of y)
    d(`prop_0`, e, w.hAt(e, t), t, n, r, i, a, 3, o, s, c);
  let E = new x(),
    D = 0,
    O = 0;
  for (let e in i) {
    let t = s[e];
    if (!t.length) {
      i[e].dispose();
      continue;
    }
    let a = i[e],
      o = new ee(a, r, t.length),
      c = new Float32Array(t.length * 3);
    (t.forEach((e, t) => {
      (E.position.set(e.x, e.y, e.z),
        E.rotation.set(0, e.rot, 0),
        E.scale.set(e.sx, e.sy, e.sz),
        E.updateMatrix(),
        o.setMatrixAt(t, E.matrix));
      let n = Wt[e.palette];
      (Gt.set(n.walls[e.wallIdx % n.walls.length]).multiplyScalar(e.tint),
        o.setColorAt(t, Gt),
        Kt.set(n.roofs[e.roofIdx % n.roofs.length]),
        (c[t * 3] = Kt.r),
        (c[t * 3 + 1] = Kt.g),
        (c[t * 3 + 2] = Kt.b));
    }),
      a.setAttribute(`aRoofColor`, new N(c, 3)),
      (o.castShadow = !e.startsWith(`mark`)),
      (o.receiveShadow = !0),
      (o.name = `bld_${e}`),
      o.computeBoundingSphere(),
      n.add(o),
      O++,
      (D += (a.attributes.position.count / 3) * t.length));
  }
  let k = xn(t.fork(`practicals`), c, S);
  (n.add(k.windows),
    n.add(k.poolMesh),
    e.log(
      `showcase: ${_} buildings, ${O + 4} meshes, ~${Math.round(D / 1e3)}k instanced tris, ground ${w.verts} verts, paving ${T.verts} verts, ${k.count} practicals`,
    ));
  let A = { v: -1 },
    j = (e, t) => Math.abs(e) < zt && Math.abs(t) < zt;
  return {
    group: n,
    material: r,
    buildings: _,
    focus: Bt.slice(),
    groundYAt(e, t) {
      if (!j(e, t)) return Rt + w.hAt(e, t);
      let n = Math.abs(e - Math.round(e / H) * H),
        r = Math.abs(t - Math.round(t / H) * H);
      return Math.max(n, r) <= It ? Lt : Rt;
    },
    setPracticals(e, t) {
      k.set(e, t);
    },
    setWetness(e) {
      let t = Math.max(0, Math.min(1, e || 0));
      Math.abs(t - A.v) < 0.01 ||
        ((A.v = t),
        (r.roughness = 0.92 - 0.34 * t),
        r.color.setRGB(1 - 0.17 * t, 1 - 0.16 * t, 1 - 0.13 * t),
        (w.material.roughness = 1 - 0.42 * t),
        w.material.color.setRGB(1 - 0.24 * t, 1 - 0.23 * t, 1 - 0.19 * t),
        (T.material.roughness = 0.95 - 0.4 * t),
        T.material.color.setRGB(1 - 0.22 * t, 1 - 0.21 * t, 1 - 0.17 * t));
    },
    dispose() {
      for (let e of n.children)
        (e.geometry?.dispose(), e.material !== r && e.material?.dispose());
      (r.dispose(), k.dispose());
    },
  };
}
