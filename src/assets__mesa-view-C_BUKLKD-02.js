// assets__mesa-view-C_BUKLKD 02 — push
// Lines 200-1016 of readable/assets__mesa-view-C_BUKLKD.pretty.js (statement-aligned).
function xe(t, n) {
  let r = new _();
  ((r.name = `mesa-forecourt`), t.add(r));
  let s = G(1515),
    c = (e, t = {}) => n(null, new a({ color: e, roughness: 0.8, ...t })),
    u = new O(),
    d = new g(),
    m = new o(0, 1, 0),
    v = new o(),
    y = new o(),
    x = (t, i, a, o, s, c, { rep: l = 4, name: u = null } = {}) => {
      let d = n(new b(a - t, o - i).rotateX(-Math.PI / 2)),
        f = d.attributes.uv;
      for (let e = 0; e < f.count; e++)
        f.setXY(e, (f.getX(e) * (a - t)) / l, (f.getY(e) * (o - i)) / l);
      let p = new e(d, c);
      return (
        p.position.set((t + a) / 2, s, (i + o) / 2),
        (p.receiveShadow = !0),
        u && (p.name = u),
        r.add(p),
        p
      );
    },
    C = [],
    E = (e, t, n, r, a, o) =>
      C.push(
        new i(r - e, a - t, o - n).translate(
          (e + r) / 2,
          (t + a) / 2,
          (n + o) / 2,
        ),
      ),
    D = 10 + H.water,
    k = H.z - 4,
    A = [
      [H.x0 - 3.2, 10.05],
      [H.x0 - 1.6, 9.5],
      [H.x0, 8.95],
    ],
    j = H.lip,
    M = H.fz,
    N = V.fx - 0.7,
    re = N,
    P = H.way,
    I = P.hz,
    ae = (e, t) => [
      [e, -I],
      [I, t],
    ];
  {
    let e = n(
        null,
        null,
        J(256, 256, (e, t, n) => {
          ((e.fillStyle = `#cfccc4`),
            e.fillRect(0, 0, t, n),
            be(e, t, n, 2600, 200, s),
            (e.fillStyle = `rgba(120,116,108,.55)`));
          for (let r = 0; r < t; r += 64)
            (e.fillRect(r, 0, 2, n), e.fillRect(0, r, t, 2));
          ((e.fillStyle = `rgba(95,92,88,.9)`), e.fillRect(0, 0, t, 14));
        }),
      ),
      t = n(
        null,
        new a({
          map: e,
          roughness: 0.85,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -4,
        }),
      );
    (x(j, -M, N, M, 10.034, t, { rep: 6, name: `mesa-forecourt-paving` }),
      x(-236, -I, j + 0.75, I, 10.075, t, {
        rep: 6,
        name: `mesa-causeway-paving`,
      }));
  }
  let oe = c(12432288, { roughness: 0.9 }),
    L = c(7301730, { roughness: 0.95 });
  {
    let t = [],
      a = (e, n, r, a, o, s) =>
        t.push(
          new i(a - e, o - n, s - r).translate(
            (e + a) / 2,
            (n + o) / 2,
            (r + s) / 2,
          ),
        );
    a(j - 0.2, D - 0.3, -M - 0.2, j + 0.75, 10.045, M + 0.2);
    for (let e of [-1, 1])
      a(
        j - 0.2,
        D - 0.3,
        e > 0 ? M - 0.75 : -M - 0.2,
        re,
        10.045,
        e > 0 ? M + 0.2 : -M + 0.75,
      );
    let o = new e(n(w(t)), oe);
    (t.forEach((e) => e.dispose()),
      (o.castShadow = o.receiveShadow = !0),
      (o.name = `mesa-lake-lip`),
      r.add(o));
  }
  for (let e of [-1, 1])
    (E(
      H.arm - 0.6,
      6.8,
      e > 0 ? 35.3 : -H.z,
      V.skin + 1,
      10.6,
      e > 0 ? H.z : -35.3,
    ),
      E(
        V.skin - 0.5,
        6.8,
        e > 0 ? M : -35.3,
        V.skin + 1,
        10.6,
        e > 0 ? 35.3 : -M,
      ),
      E(K.x0, 6.8, e > 0 ? H.z : -K.z, V.skin + 3, 10.05, e > 0 ? K.z : -H.z));
  E(K.x0, 6.8, -K.z, A[0][0], 10.05, K.z);
  for (let e of [-1, 1])
    E(A[0][0], 6.8, e > 0 ? k : -K.z, H.x0, 10.05, e > 0 ? K.z : -k);
  (A.slice(1).forEach(([e, t], n) =>
    ae(-k, k).forEach(([r, i]) => E(A[n][0], 6.8, r, e, t, i)),
  ),
    E(P.x0, 10 - P.depth, -I, j - 0.2, 10.03, I));
  {
    let t = n(w(C));
    C.forEach((e) => e.dispose());
    let i = new e(t, oe);
    ((i.receiveShadow = !0),
      (i.castShadow = !0),
      (i.name = `mesa-lake-coping`),
      r.add(i));
  }
  {
    let t = c(6113846, { roughness: 1 });
    for (let e of [-1, 1])
      x(
        H.arm - 0.3,
        e > 0 ? 35.6 : -H.z + 0.3,
        V.skin + 0.7,
        e > 0 ? H.z - 0.3 : -35.6,
        10.61,
        t,
      );
    let a = [];
    for (let e of [-1, 1])
      a.push(
        new i(H.arm - H.x0, 0.08, 0.5).translate(
          (H.x0 + H.arm) / 2,
          10.07,
          e * (H.z + 0.25),
        ),
      );
    a.push(new i(0.5, 0.08, 2 * H.z + 1).translate(H.x0 - 0.25, 10.07, 0));
    let o = new e(n(w(a)), L);
    (a.forEach((e) => e.dispose()), r.add(o));
  }
  let R = n(
    null,
    null,
    J(128, 128, (e, t, n) => {
      ((e.fillStyle = `#3b777b`), e.fillRect(0, 0, t, n));
      for (let r = 0; r < 160; r++) {
        let r = s() * t,
          i = s() * n,
          a = 6 + s() * 16;
        ((e.strokeStyle = `rgba(${(150 + s() * 50) | 0},200,205,${0.06 + s() * 0.1})`),
          (e.lineWidth = 1),
          e.beginPath(),
          e.moveTo(r, i),
          e.quadraticCurveTo(r + a / 2, i - 2, r + a, i),
          e.stroke());
      }
    }),
  );
  {
    let e = n(
      null,
      new a({ map: R, color: 13294808, roughness: 0.08, metalness: 0.2 }),
    );
    for (let [t, n] of ae(-k, k))
      (x(A[0][0] - 1.2, t, A[0][0], n, 10.065, e, { rep: 9 }),
        A.slice(1).forEach(([r, i], a) =>
          x(A[a][0], t, r, n, i + 0.02, e, { rep: 9 }),
        ));
  }
  let se = x(
    H.x0,
    -H.z,
    H.arm,
    H.z,
    D,
    n(
      null,
      new a({ map: R, color: 13294808, roughness: 0.08, metalness: 0.2 }),
    ),
    { rep: 9, name: `mesa-lake` },
  );
  se.castShadow = !1;
  let z = n(
      null,
      null,
      J(64, 128, (e, t, n) => {
        ((e.fillStyle = `rgba(205,232,236,.82)`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < 70; r++)
          ((e.fillStyle = `rgba(255,255,255,${0.25 + s() * 0.5})`),
            e.fillRect(s() * t, s() * n, 1 + s() * 2, 10 + s() * 40));
        for (let r = 0; r < 30; r++)
          ((e.fillStyle = `rgba(60,110,120,${0.15 + s() * 0.2})`),
            e.fillRect(s() * t, s() * n, 1, 8 + s() * 30));
      }),
    ),
    ce = n(
      null,
      null,
      J(128, 32, (e, t, n) => {
        e.clearRect(0, 0, t, n);
        for (let r = 0; r < 500; r++)
          ((e.fillStyle = `rgba(255,255,255,${0.3 + s() * 0.6})`),
            e.beginPath(),
            e.arc(s() * t, s() * n, 1 + s() * 2.5, 0, 7),
            e.fill());
      }),
    ),
    de = n(
      null,
      new a({
        map: z,
        transparent: !0,
        roughness: 0.25,
        depthWrite: !1,
        side: 2,
      }),
    ),
    fe = n(
      null,
      new a({ map: ce, transparent: !0, roughness: 0.6, depthWrite: !1 }),
    );
  {
    let t = [],
      i = [];
    10.05 - D;
    let a = (e, n, r, a, o, s, c = 10.05, l = D) => {
      let u = c - l,
        d = Math.hypot(r - e, a - n),
        f = new b(d, u, 1, 1),
        p = f.attributes.uv;
      for (let e = 0; e < p.count; e++)
        p.setXY(e, (p.getX(e) * d) / 3, (p.getY(e) * u) / 2);
      f.rotateY(Math.atan2(-(a - n), r - e));
      let m = f.attributes.position;
      for (let e = 0; e < m.count; e++) {
        let t = m.getY(e) > 0;
        (m.setX(e, m.getX(e) + o * (t ? 0.04 : 0.1 + u * 0.2)),
          m.setZ(e, m.getZ(e) + s * (t ? 0.04 : 0.1 + u * 0.2)));
      }
      (f.translate((e + r) / 2, (c + l) / 2, (n + a) / 2), t.push(f));
      let h = new b(d, 0.6 + u * 0.3).rotateX(-Math.PI / 2);
      (h.rotateY(Math.atan2(-(a - n), r - e)),
        h.translate(
          (e + r) / 2 + o * (0.3 + u * 0.3),
          l + 0.02,
          (n + a) / 2 + s * (0.3 + u * 0.3),
        ),
        i.push(h));
    };
    (a(j - 0.2, M + 0.2, j - 0.2, I, -1, 0),
      a(j - 0.2, -I, j - 0.2, -M - 0.2, -1, 0),
      A.forEach(([e, t], n) => {
        for (let [r, i] of ae(-k, k))
          a(e, r, e, i, 1, 0, t, A[n + 1]?.[1] ?? D);
      }),
      a(j - 0.2, -M - 0.2, re, -M - 0.2, 0, -1),
      a(re, M + 0.2, j - 0.2, M + 0.2, 0, 1));
    let o = new e(n(w(t)), de),
      s = new e(n(w(i)), fe);
    (t.forEach((e) => e.dispose()),
      i.forEach((e) => e.dispose()),
      (o.name = `mesa-cascade`),
      (o.renderOrder = 2),
      (s.renderOrder = 3),
      r.add(o, s));
  }
  {
    let t = H.roof,
      i = (e) => Math.PI - t.span + (2 * t.span * e) / 120,
      o = (e, n) => {
        let r = i(e),
          a = t.gIn + (B(r) - t.gIn) * n,
          [o, s] = ue(r, a);
        return [o, ne(n), s];
      },
      s = (e, t, n) => {
        let r = [],
          i = [],
          a = [];
        for (let a = 0; a <= t; a++)
          for (let t = 0; t <= e; t++) {
            let [e, o, s, c, l] = n(t, a);
            (r.push(e, o, s), i.push(c ?? t, l ?? a));
          }
        for (let n = 0; n < t; n++)
          for (let t = 0; t < e; t++) {
            let r = n * (e + 1) + t;
            a.push(r, r + e + 1, r + 1, r + 1, r + e + 1, r + e + 2);
          }
        let o = new l();
        return (
          o.setAttribute(`position`, new h(r, 3)),
          o.setAttribute(`uv`, new h(i, 2)),
          o.setIndex(a),
          o.computeVertexNormals(),
          o
        );
      },
      u = n(
        null,
        null,
        J(64, 64, (e, t, n) => {
          ((e.fillStyle = `rgba(232,238,240,.42)`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `rgba(255,255,255,.95)`),
            e.fillRect(0, 0, t, 2),
            e.fillRect(0, 0, 2, n),
            (e.fillStyle = `rgba(255,255,255,.35)`),
            e.fillRect(t / 2, 0, 1, n));
        }),
      ),
      d = n(
        s(120, 12, (e, n) => {
          let [r, a, s] = o(e, n / 12),
            c = i(e);
          return [
            r,
            a,
            s,
            (c * (U.a + 20)) / 3,
            (t.gIn + ((B(c) - t.gIn) * n) / 12) / 3,
          ];
        }),
      ),
      f = new e(
        d,
        n(
          null,
          new a({
            map: u,
            transparent: !0,
            roughness: 0.35,
            side: 2,
            depthWrite: !1,
            emissive: 10132634,
          }),
        ),
      );
    ((f.renderOrder = 2), (f.name = `mesa-roof-panels`), r.add(f));
    let p = [],
      m = (e, t) =>
        p.push(
          s(e.length - 1, 1, (n, r) => {
            let [i, a, o] = e[n];
            return [i, a - 0.05 - r * t, o];
          }),
        );
    for (let e = 0; e <= 120; e += 3)
      m(
        Array.from({ length: 13 }, (t, n) => o(e, n / 12)),
        e % 12 == 0 ? 1.1 : 0.6,
      );
    for (let e = 1; e < 12; e += 2)
      m(
        Array.from({ length: 121 }, (t, n) => o(n, e / 12)),
        0.45,
      );
    let g = t.fascia,
      _ = (e) => o(e, 1),
      v = (e) => {
        let n = i(e),
          [r, a] = ue(n, B(n) - 1.4);
        return [r, ne(1 - 1.4 / (B(n) - t.gIn)), a];
      };
    (p.push(
      s(120, 1, (e, t) => {
        let [n, r, i] = _(e);
        return [n, r - g + t * (g + 0.7), i];
      }),
    ),
      p.push(
        s(120, 1, (e, t) => {
          let [n, r, i] = t ? _(e) : v(e);
          return [n, r - g, i];
        }),
      ),
      p.push(
        s(120, 1, (e, t) => {
          let [n, r, i] = t ? _(e) : v(e);
          return [n, r + 0.7, i];
        }),
      ),
      p.push(
        s(120, 1, (e, t) => {
          let [n, r, i] = v(e);
          return [n, r - g + t * (g + 0.7), i];
        }),
      ));
    for (let e of [0, 120]) {
      let t = v(e),
        n = _(e);
      p.push(
        s(1, 1, (e, r) => {
          let [i, a, o] = e ? n : t;
          return [i, a - g + r * (g + 0.7), o];
        }),
      );
    }
    let y = c(15987438, { roughness: 0.45, side: 2 }),
      b = new e(n(w(p)), y);
    (p.forEach((e) => e.dispose()),
      (b.castShadow = !0),
      (b.receiveShadow = !0),
      (b.name = `mesa-roof-steel`),
      r.add(b));
  }
  {
    let t = [];
    for (let [e, n, r, i] of H.cols) {
      let a = ne(ie(e, n).u ?? 1) - 10 + 0.3 - i;
      (t.push(new S(r, r * 1.05, a, 32, 1, !0).translate(e, 10 + i + a / 2, n)),
        i === 0 &&
          t.push(new S(r * 1.06, r * 1.06, 0.06, 32).translate(e, 10.05, n)));
    }
    let i = new e(n(w(t)), c(15921645, { roughness: 0.55 }));
    (t.forEach((e) => e.dispose()),
      (i.castShadow = !0),
      (i.receiveShadow = !0),
      (i.name = `mesa-columns`),
      r.add(i));
  }
  {
    let t = F(),
      a = t.bars.map(([e, t, n, r, a, o]) =>
        new i(r - e, a - t, o - n).translate(
          (e + r) / 2,
          10 + (t + a) / 2,
          (n + o) / 2,
        ),
      ),
      o = new e(n(w(a)), c(12172994, { metalness: 0.7, roughness: 0.3 }));
    (a.forEach((e) => e.dispose()),
      (o.castShadow = !0),
      (o.name = `mesa-turnstiles`),
      r.add(o));
    let s = [],
      l = [],
      m = [],
      h = [],
      g = V.fence - t.d;
    for (let e = 0; e <= t.n; e++) {
      let n = -I + t.w * e;
      if (e === 0 || e === t.n) continue;
      let r = [g - 0.6, g - 3.4, g - 6.2, g - 9];
      r.forEach((e, t) => {
        (s.push(
          new S(0.03, 0.03, 0.95, 8).translate(e, 10.475, n),
          new S(0.16, 0.18, 0.05, 12).translate(e, 10.025, n),
        ),
          t &&
            l.push(
              new i(r[t - 1] - e, 0.05, 0.012).translate(
                (e + r[t - 1]) / 2,
                10.88,
                n,
              ),
            ));
      });
    }
    for (let e = 0; e < t.n; e++) {
      let n = -I + t.w * (e + 0.5);
      (m.push(
        new i(0.22, 1.05, 0.3).translate(g - 0.35, 10.525, n + t.w * 0.32),
      ),
        h.push(
          new i(0.18, 0.06, 0.2).translate(g - 0.35, 11.08, n + t.w * 0.32),
        ));
    }
    let _ = (t, i) => {
      let a = new e(n(w(t)), i);
      (t.forEach((e) => e.dispose()), (a.castShadow = !0), r.add(a));
    };
    (_(s, c(13225682, { metalness: 0.8, roughness: 0.25 })),
      _(l, c(1447962, { roughness: 0.6 })),
      _(m, c(2764080, { roughness: 0.5 })),
      _(h, n(null, new f({ color: 3661946 }))),
      x(g - 1.2, -I, g - 0.5, I, 10.056, c(14200874, { roughness: 0.7 })));
    let C = [],
      E = [],
      D = [];
    for (let e = P.x0 + 6; e < j - 6; e += 13)
      for (let t of [-1, 1]) {
        let n = t * (I - 0.55);
        (C.push(
          new S(0.09, 0.13, 9, 10).translate(e, 14.5, n),
          new i(0.18, 0.12, 2.4).translate(e, 18.95, n - t * 1.1),
        ),
          E.push(new i(0.5, 0.06, 1.1).translate(e, 18.86, n - t * 1.9)));
        let r = e + 6.5;
        (C.push(
          new S(0.06, 0.08, 6.2, 8).translate(r, 13.1, n),
          new S(0.03, 0.03, 1.1, 6)
            .rotateZ(Math.PI / 2)
            .translate(r - 0.55, 15.9, n),
        ),
          D.push([r - 0.6, n, t]));
      }
    (_(C, c(15658730, { roughness: 0.5 })),
      _(E, n(null, new f({ color: 16774108 }))));
    {
      let e = n(new b(1, 2.6)),
        t = new T(e, c(16777215, { roughness: 0.8, side: 2 }), D.length),
        i = new p();
      (D.forEach(([e, n, r], a) => {
        (u.compose(v.set(e, 14.55, n), d.identity(), y.set(1, 1, 1)),
          t.setMatrixAt(a, u),
          t.setColorAt(a, i.setHex((a >> 1) % 2 ? 15921386 : 11739178)));
      }),
        (t.castShadow = !0),
        r.add(t));
    }
  }
  {
    let t = c(16053231, { roughness: 0.6, emissive: 7829370 }),
      i = le,
      a = (i, a, o, s, c) => {
        let l = n(new b(o - i, s - a).rotateX(Math.PI / 2)),
          u = new e(l, t);
        (u.position.set((i + o) / 2, c, (a + s) / 2), r.add(u));
      };
    (a(i.x0, -i.hz, i.x1, i.hz, 10 + i.y - 0.01),
      a(V.skin - 8.2, -V.door, V.skin + 0.3, V.door, 10 + V.canopy - 0.01));
  }
  let pe = (e, t, n) =>
      ((e - U.cx) / (U.a + n)) ** 4 + (t / (U.b + n)) ** 4 > 1,
    me = [
      [-I, I],
      [-98, -90],
      [90, 98],
    ],
    he = (e) => me.some(([t, n]) => e > t - 1 && e < n + 1),
    W = (e, t) =>
      e > -236 && e < -40 && Math.abs(t) < 132 && pe(e, t, 18.5) && !_e(e, t);
  {
    let t = [],
      i = [],
      o = [],
      c = 0;
    for (let e = -236; e < -40; e += 4)
      for (let n = -132; n < 132; n += 4)
        !W(e + 2, n + 2) ||
          (he(n + 2) && e < K.x0) ||
          (t.push(
            e,
            10.02,
            n,
            e + 4,
            10.02,
            n,
            e,
            10.02,
            n + 4,
            e + 4,
            10.02,
            n + 4,
          ),
          i.push(
            e / 8,
            n / 8,
            (e + 4) / 8,
            n / 8,
            e / 8,
            (n + 4) / 8,
            (e + 4) / 8,
            (n + 4) / 8,
          ),
          o.push(c, c + 2, c + 1, c + 1, c + 2, c + 3),
          (c += 4));
    let u = n(new l());
    (u.setAttribute(`position`, new h(t, 3)),
      u.setAttribute(`uv`, new h(i, 2)),
      u.setIndex(o),
      u.computeVertexNormals());
    let d = n(
        null,
        null,
        J(128, 128, (e, t, n) => {
          ((e.fillStyle = `#7c8d55`), e.fillRect(0, 0, t, n));
          for (let r = 0; r < 2200; r++)
            ((e.fillStyle = `rgba(${(100 + s() * 60) | 0},${(115 + s() * 45) | 0},${(60 + s() * 30) | 0},.4)`),
              e.fillRect(s() * t, s() * n, 1, 2 + s() * 2));
        }),
      ),
      f = new e(
        u,
        n(
          null,
          new a({
            map: d,
            roughness: 0.95,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -2,
          }),
        ),
      );
    ((f.receiveShadow = !0), (f.name = `mesa-lawn`), r.add(f));
    let p = n(
        null,
        null,
        J(128, 128, (e, t, n) => {
          ((e.fillStyle = `#c9c3b6`),
            e.fillRect(0, 0, t, n),
            be(e, t, n, 900, 190, s),
            (e.fillStyle = `rgba(130,124,112,.6)`));
          for (let r = 0; r < t; r += 32)
            (e.fillRect(r, 0, 2, n), e.fillRect(0, r, t, 2));
        }),
      ),
      m = n(
        null,
        new a({
          map: p,
          roughness: 0.9,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -4,
        }),
      );
    for (let [e, t] of me.slice(1)) x(-236, e, K.x0, t, 10.03, m, { rep: 4 });
  }
  let ge = ve(),
    xe = q(),
    Se = n(ye());
  [ge.trunk, ge.crown, ge.skirt, xe.wood, xe.crown].forEach((e) => n(e));
  let Y = [],
    X = [],
    Ce = [];
  for (let [e, t] of [
    [-220, -66],
    [-220, 66],
    [-224, -14],
    [-224, 14],
    [-206, -80],
    [-206, 80],
    [-170, -78],
    [-170, 78],
    [-226, -108],
    [-226, 108],
    [-150, -84],
    [-150, 84],
  ]) {
    let n = 3 + Math.floor(s() * 3);
    for (let r = 0; r < n; r++) {
      let n = s() * 6.3,
        i = r ? 1.6 + s() * 2.2 : 0,
        a = e + Math.cos(n) * i,
        o = t + Math.sin(n) * i;
      _e(a, o) || Y.push([a, o, 0.85 + s() * 0.35, s() * 6.3]);
    }
  }
  for (let e = -126; e <= 126; e += 7.5)
    he(e) || X.push([-231.5 + s() * 1.5, e, 0.95 + s() * 0.3, s() * 6.3]);
  for (let e = 0; e < 900 && X.length < 110; e++) {
    let e = -234 + s() * 190,
      t = (s() - 0.5) * 262;
    !W(e, t) ||
      he(t) ||
      !pe(e, t, 22) ||
      Y.some((n) => Math.hypot(n[0] - e, n[1] - t) < 6) ||
      X.some((n) => Math.hypot(n[0] - e, n[1] - t) < 7) ||
      X.push([e, t, 0.8 + s() * 0.45, s() * 6.3]);
  }
  for (let e of [-1, 1]) {
    for (let t = 0; t < 46; t++)
      Ce.push([
        H.arm + 0.6 + s() * (V.skin - H.arm - 1.2),
        e * (36 + s() * (H.z - 37)),
        10.6,
        0.6 + s() * 0.5,
      ]);
    for (let [t, n, r, i, a] of [
      [-150.8, -149.2, 20, 24, 0.86],
      [-142, -140.4, 19, 25, 0.86],
      [-151, -150.4, 14.1, 17.9, 0.86],
      [-151, -150.4, 26.5, 30.3, 0.86],
    ])
      for (let o = 0; o < 3; o++)
        Ce.push([
          t + 0.3 + s() * (n - t - 0.6),
          e * (r + 0.5 + ((i - r - 1) * (o + 0.5)) / 3),
          10 + a,
          0.45 + s() * 0.2,
        ]);
  }
  for (let e = -K.z + 2; e < K.z - 2; e += 2.2)
    he(e) || Ce.push([K.x0 - 2 + s() * 0.8, e, 10, 0.7 + s() * 0.5]);
  {
    let e = (e, t, n, i = (e) => 10, a = (e) => [e[2], e[2], e[2]], o) => {
        let s = new T(e, t, Math.max(1, n.length));
        return (
          n.forEach((e, t) => {
            (u.compose(
              v.set(e[0], i(e), e[1]),
              d.setFromAxisAngle(m, e[3] ?? 0),
              y.set(...a(e)),
            ),
              s.setMatrixAt(t, u));
          }),
          (s.count = n.length),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          o && (s.name = o),
          r.add(s),
          s
        );
      },
      t = c(9074008, { roughness: 0.95 }),
      a = c(6126138, { roughness: 0.8, side: 2 }),
      o = c(9206354, { roughness: 1, side: 2 });
    (e(ge.trunk, t, Y, void 0, void 0, `mesa-palms-trunk`),
      e(ge.crown, a, Y),
      e(ge.skirt, o, Y),
      e(xe.wood, c(7036236, { roughness: 1 }), X),
      e(
        xe.crown,
        c(8359776, { roughness: 0.85 }),
        X,
        void 0,
        void 0,
        `mesa-olives`,
      ));
    let l = Ce.map(([e, t, n, r]) => [e, t, r, s() * 6.3, n]);
    e(
      Se,
      c(9348764, { roughness: 0.7 }),
      l,
      (e) => e[4],
      (e) => [e[2], e[2] * 0.9, e[2]],
      `mesa-agaves`,
    );
    let f = n(new i(2.2, 0.04, 2.2)),
      p = new T(f, c(3948354, { metalness: 0.5 }), Math.max(1, Y.length));
    (Y.forEach((e, t) =>
      p.setMatrixAt(t, u.makeTranslation(e[0], 10.04, e[1])),
    ),
      (p.count = Y.length),
      r.add(p));
  }
  {
    r.updateMatrixWorld(!0);
    let e = [],
      t = [],
      i = new O(),
      a = new p();
    r.traverse((n) => {
      let r = n.material;
      if (
        n.isMesh &&
        !Array.isArray(r) &&
        te(r) &&
        !r.polygonOffset &&
        !r.transparent &&
        n.geometry.attributes.normal
      ) {
        if ((t.push(n), n.isInstancedMesh))
          for (let t = 0; t < n.count; t++)
            (n.getMatrixAt(t, i),
              e.push({
                geometry: n.geometry,
                material: r,
                matrix: i.clone().premultiply(n.matrixWorld),
                tint: n.instanceColor
                  ? a.fromBufferAttribute(n.instanceColor, t).getHex()
                  : null,
                cast: n.castShadow,
              }));
        else
          e.push({
            geometry: n.geometry,
            material: r,
            matrix: n.matrixWorld.clone(),
            cast: n.castShadow,
          });
      }
    });
    let o = ee(e, { cell: 0, name: `mesa-forecourt-bake` });
    for (let e of t) (e.removeFromParent(), e.isInstancedMesh && e.dispose());
    for (let e of o.rest)
      console.warn(`mesa forecourt: part left unbaked`, e.material?.type);
    for (let e of o.meshes) (n(e.geometry, e.material), r.add(e));
  }
  return {
    counts: { palms: Y.length, olives: X.length, agaves: Ce.length },
    update(e) {
      ((z.offset.y = (e * 0.9) % 1),
        (ce.offset.x = (e * 0.07) % 1),
        R.offset.set((e * 0.004) % 1, (e * 0.006) % 1));
    },
  };
}
