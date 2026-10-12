// assets__bascule-view-D4Ql_83X 04 — math
// Lines 1107-2699 of readable/assets__bascule-view-D4Ql_83X.pretty.js (statement-aligned).
function U(n, d, g, ce) {
  let k = g.bascule,
    A = k.leaves[0].y,
    j = k.bankY ?? A,
    M = [],
    N = (...e) => (M.push(...e), e[0]),
    le = [],
    P = new ne();
  ((P.name = `bascule-live`), (P.userData.dynamicShadow = !0), d.add(P));
  let F = new ne();
  ((F.name = `bascule-scenery`), d.add(F));
  let I = N(new v({ vertexColors: !0, roughness: 0.78, metalness: 0.12 })),
    ue = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.3, `rgba(255,255,255,.45)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64));
      let r = new m(e);
      return ((r.colorSpace = re), r);
    })();
  N(ue);
  let L = (e, t, n) => {
      let r = new Float32Array(e * 3).fill(-9999),
        i = new l();
      i.setAttribute(`position`, new s(r, 3));
      let a = new ae({
        map: ue,
        color: t,
        size: n,
        sizeAttenuation: !0,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        fog: !1,
      });
      N(i, a);
      let o = new ie(i, a);
      return (
        (o.frustumCulled = !1),
        {
          points: o,
          pos: r,
          set(e, t, n, i, a = !0) {
            ((r[e * 3] = t),
              (r[e * 3 + 1] = a ? n : -9999),
              (r[e * 3 + 2] = i));
          },
          dirty() {
            i.attributes.position.needsUpdate = !0;
          },
        }
      );
    },
    fe = k.leaves.map((e) => {
      let t = [],
        n = e.len,
        r = e.hw,
        i = e.t,
        a = (n, r, i, a, o, s, c) => B(t, e.dir * n, r, i, e.dir * a, o, s, c);
      (a(0, -i, -r, n, 0, r, z.stone), a(0, 0, -4.6, n, 0.03, 4.6, z.asphalt));
      for (let e of [-1, 1]) {
        (a(0, 0, e < 0 ? -r : 4.6, n, 0.05, e < 0 ? -4.6 : r, z.pave),
          a(0, 0, e * 4.6 - 0.15, n, 0.12, e * 4.6 + 0.15, z.kerb),
          a(0, 1.02, e * r - 0.04, n, 1.1, e * r + 0.04, z.iron),
          a(0, 0.5, e * r - 0.02, n, 0.54, e * r + 0.02, z.iron));
        for (let t = 0; t <= n + 0.01; t += 1.6)
          a(
            t - 0.035,
            0,
            e * r - 0.035,
            t + 0.035,
            1.02,
            e * r + 0.035,
            z.iron,
          );
        a(
          n / 2 - 0.12,
          0,
          e * (r - 0.35) - 0.12,
          n / 2 + 0.12,
          5.4,
          e * (r - 0.35) + 0.12,
          z.iron,
        );
      }
      for (let e of [-4.4, 0, 4.4])
        a(-6, -i - 1.4, e - 0.35, n, -i, e + 0.35, z.blue);
      a(-5.5, -i - 4, -5.5, -1, -i - 1.4, 5.5, z.stoneDark);
      for (let e = -r; e < r; e += 1)
        (a(n - 0.25, 0, e, n, 0.14, e + 0.5, z.hazardY),
          a(n - 0.25, 0, e + 0.5, n, 0.14, e + 1, z.hazardK));
      let o = N(H(t)),
        s = new ne();
      s.position.set(e.hinge, e.y, 0);
      let c = new h(o, I);
      return (
        (c.castShadow = c.receiveShadow = !0),
        s.add(c),
        P.add(s),
        { L: e, pivot: s }
      );
    }),
    pe = L(4, 16756832, 2.6);
  P.add(pe.points);
  let U = (() => {
      let e = [];
      for (let t = 0; t < 4.1; t += 0.5)
        B(
          e,
          t,
          -0.11,
          -0.11,
          Math.min(4.1, t + 0.5),
          0.11,
          0.11,
          (t / 0.5) % 2 ? 12850716 : 15198183,
        );
      return N(H(e));
    })(),
    me = k.barriers.map((e) => {
      let t = new ne();
      (t.position.set(e.x, A + 1.15, e.z),
        (t.rotation.y = e.side > 0 ? Math.PI / 2 : -Math.PI / 2));
      let n = new h(U, I);
      return (t.add(n), P.add(t), { b: e, pv: t });
    }),
    he = L(k.barriers.length, 16722458, 1.5);
  P.add(he.points);
  let ge = k.signals ?? [],
    _e = L(ge.length * 2, 16722458, 1.6),
    W = L(ge.length, 3866474, 1.3);
  P.add(_e.points, W.points);
  {
    let e = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 32), (e.height = 128));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 0, 0, 128);
      (n.addColorStop(0, `rgba(255,255,255,0)`),
        n.addColorStop(0.5, `rgba(255,255,255,1)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 32, 128));
      let r = t.getImageData(0, 0, 32, 128);
      for (let e = 0; e < 128; e++)
        for (let t = 0; t < 32; t++) {
          let n = (e * 32 + t) * 4,
            i = Math.sin((Math.PI * t) / 31);
          r.data[n + 3] *= i * (0.55 + 0.45 * Math.sin(e * 0.9 + t * 0.3));
        }
      t.putImageData(r, 0, 0);
      let i = new m(e);
      return ((i.colorSpace = re), i);
    })();
    N(e);
    let t = [],
      n = (e, n, r, i, a) => {
        let o = new x(r, i);
        (o.rotateX(-Math.PI / 2), o.translate(e, 0.45, n), V(o, a), t.push(o));
      };
    for (let e of k.towers)
      for (let t of [-1, 1])
        (n(e, t * 26, 14, 24, 16769200),
          n(e + (e < 0 ? -10 : 10), t * 24, 4, 16, 16756832));
    for (let e of [-50, -39, 39, 50])
      for (let t of [-1, 1]) n(e, t * 16, 2.4, 18, 16754250);
    for (let e of [-1, 1])
      for (let t = -500; t <= 500; t += 70)
        Math.abs(t) < 60 ||
          n(e * (48 - (t % 140 ? 6 : 12)), t, 2.5, 30, 13623295);
    let r = new h(
      N(oe(t)),
      N(
        new E({
          map: e,
          vertexColors: !0,
          transparent: !0,
          opacity: 0.42,
          depthWrite: !1,
          blending: 2,
        }),
      ),
    );
    (t.forEach((e) => e.dispose()), (r.renderOrder = 1), F.add(r));
  }
  let ve = k.cars.flatMap((e) => [
      [e.x, e.z, e.alongX],
      [-e.x, -e.z, e.alongX],
    ]),
    ye = L(ve.length * 4, 16753178, 1.2);
  P.add(ye.points);
  let be = de({ brace: D }),
    G = be.group;
  ((G.name = `bascule-barque`), P.add(G), M.push(be));
  let K = Object.freeze({ at: [0, 6.5, 95.6], half: 0.045, on: [-260, -18] }),
    xe = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 4), (e.height = 128));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 0, 0, 128);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.4, `rgba(255,255,255,.5)`),
        n.addColorStop(1, `rgba(255,255,255,.08)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 4, 128));
      let r = new m(e);
      return ((r.colorSpace = re), N(r));
    })(),
    Se = N(new c(0.012, 1, 1, 20, 1, !0));
  (Se.translate(0, -0.5, 0), Se.rotateX(-Math.PI / 2));
  let Ce = N(
      new E({
        color: 14674175,
        map: xe,
        transparent: !0,
        opacity: 0.16,
        depthWrite: !1,
        blending: 2,
        side: 2,
      }),
    ),
    q = new h(Se, Ce);
  ((q.frustumCulled = !1), (q.visible = !1), (q.renderOrder = 2), P.add(q));
  let we = N(
      new E({
        color: 15660031,
        map: ue,
        transparent: !0,
        opacity: 0.75,
        depthWrite: !1,
        blending: 2,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
    ),
    J = new h(N(new y(1, 24)), we);
  ((J.visible = !1), (J.renderOrder = 2), P.add(J));
  let Te = L(1, 16054527, 3.2);
  P.add(Te.points);
  let Ee = N(
      new t({
        map: ue,
        color: 16054527,
        transparent: !0,
        depthTest: !1,
        depthWrite: !1,
        blending: 2,
        fog: !1,
      }),
    ),
    Y = new r(Ee);
  ((Y.visible = !1), (Y.renderOrder = 999), P.add(Y));
  let X = {
    o: new T(),
    aim: new T(),
    dir: new T(),
    cam: new T(),
    look: new T(),
    q: new b(),
    Z: new T(0, 0, 1),
    N: new T(),
    len: 120,
    frame: 0,
    hit: null,
  };
  function De(e, t) {
    let r = t + K.at[2],
      i =
        r > K.on[0] && r < K.on[1]
          ? Math.min(1, (r - K.on[0]) / 25, (K.on[1] - r) / 6)
          : 0;
    if (
      ((q.visible = J.visible = i > 0),
      Te.set(0, K.at[0], K.at[1], r, i > 0),
      Te.dirty(),
      !(i > 0))
    ) {
      Y.visible = !1;
      return;
    }
    let o = e / 60;
    if (
      (X.o.set(K.at[0], K.at[1], r),
      X.aim.set(
        24 * Math.sin(o * 0.33),
        A + 9 + 9 * Math.sin(o * 0.21 + 1.3),
        Math.sin(o * 0.13) * 4,
      ),
      X.dir.subVectors(X.aim, X.o).normalize(),
      X.frame++ % 3 == 0)
    ) {
      let e = n.world.map.raycast(
        [X.o.x, X.o.y, X.o.z],
        [X.dir.x, X.dir.y, X.dir.z],
        300,
        null,
        null,
        !1,
      );
      ((X.hit = e), (X.len = e ? e.dist : 300));
    }
    (X.q.setFromUnitVectors(X.Z, X.dir),
      q.position.copy(X.o),
      q.quaternion.copy(X.q));
    let s = X.len * Math.tan(K.half);
    if ((q.scale.set(s, s, X.len), (Ce.opacity = 0.16 * i), X.hit?.normal)) {
      let e = X.N.fromArray(X.hit.normal);
      (J.position
        .copy(X.o)
        .addScaledVector(X.dir, X.len)
        .addScaledVector(e, 0.06),
        J.quaternion.setFromUnitVectors(X.Z, e),
        J.scale.setScalar(s * 1.5),
        (we.opacity = 0.75 * i));
    } else J.visible = !1;
    let c = n.camera;
    (c.getWorldPosition(X.cam), X.look.subVectors(X.cam, X.o));
    let l = X.look.length();
    X.look.divideScalar(l || 1);
    let u = a.smoothstep(
      X.look.dot(X.dir),
      Math.cos(K.half * 2.6),
      Math.cos(K.half * 0.5),
    );
    c.getWorldDirection(X.N);
    let d = u * a.smoothstep(-X.N.dot(X.look), 0.82, 0.985) * i;
    if (d > 0 && l < X.len + 2 && X.frame % 3 == 1) {
      let e = n.world.map.raycast(
        [X.cam.x, X.cam.y, X.cam.z],
        [-X.look.x, -X.look.y, -X.look.z],
        l - 1,
        null,
        null,
        !1,
      );
      X.blocked = !!e;
    }
    ((X.blocked || l > X.len + 2) && (d = 0),
      (Y.visible = d > 0.01),
      Y.visible &&
        (Y.position.copy(X.o),
        Y.scale.setScalar(l * (0.25 + 1.6 * d)),
        (Ee.opacity = Math.min(1, 0.35 + 0.9 * d))));
  }
  let Oe = [
    [-40, 1, 0],
    [42, -1, 0.5],
  ].map(([e, t, n]) => {
    let r = [];
    (B(r, -3.4, -0.3, -15, 3.4, 1.9, 15, z.busWhite),
      B(r, -3.45, -0.3, -15.05, 3.45, 0.4, 15.05, z.busBlue),
      B(r, -3, 1.9, -10, 3, 4, 8, z.busWhite));
    let a = new ne(),
      o = new h(N(H(r)), I);
    a.add(o);
    let s = new h(N(new i(6.15, 1, 17.5)), N(new E({ color: 9423103 })));
    (s.position.set(0, 3, -1), a.add(s));
    let c = L(2, 16777215, 2.4);
    return (
      c.set(0, 0, 4.5, 9),
      c.set(1, 0, 2.5, -15),
      c.dirty(),
      a.add(c.points),
      P.add(a),
      { g: a, x: e, dir: t, ph: n }
    );
  });
  {
    let e = [],
      t = -215;
    B(e, 26, -4, -295, 42, 5, -135, z.grey);
    let n = new i(11.3, 9, 11.3);
    (n.rotateY(Math.PI / 4),
      n.scale(1, 1, 1.6),
      n.translate(34, 0.5, -135),
      V(n, z.grey),
      e.push(n),
      B(e, 28, 5, -217, 40, 13, -191, z.grey),
      B(e, 29.5, 13, -211, 38.5, 19, -197, z.grey),
      B(e, 32.5, 19, -205, 35.5, 34, -202, z.greyDark),
      B(e, 29, 5, -253, 39, 11, -235, z.grey));
    for (let n of [-169, -181, -265, -277])
      (B(e, 30, 5, n - 4.5, 38, 8, n + 4.5, z.greyDark),
        B(
          e,
          33.6,
          6.2,
          n + (n > t ? 4.5 : -16.5),
          34.4,
          6.9,
          n + (n > t ? 16.5 : -4.5),
          z.greyDark,
        ));
    let r = new h(N(H(e)), I);
    ((r.name = `bascule-cruiser`), F.add(r));
    let a = L(60, 16767136, 0.9);
    for (let e = 0; e < 30; e++)
      for (let t of [-1, 1])
        a.set(e * 2 + (t > 0), 34 + t * 8.1, 2.6, -287 + e * 5);
    (a.dirty(), F.add(a.points));
  }
  {
    let t = [],
      n = [];
    for (let r of k.chains)
      for (let a of [1, -1]) {
        let o = r.pts.map(([e, t]) => new T(e * a, t, r.z * a)),
          s = new e(o),
          c = new e(o.map((e) => e.clone().setY(e.y - 1.4)));
        for (let e of [s, c]) {
          let n = new f(e, 48, e === s ? 0.42 : 0.32, 8);
          (V(n, z.blue), t.push(n));
        }
        for (let e = 1; e < 28; e++) {
          let t = s.getPoint(e / 28),
            o = c.getPoint(e / 28),
            l = new i(0.16, t.y - o.y, 0.16);
          if (
            (l.translate((t.x + o.x) / 2, (t.y + o.y) / 2, r.z * a),
            V(l, z.white),
            n.push(l),
            o.y - A > 1.5)
          ) {
            let e = new i(0.1, o.y - A - 1.2, 0.1);
            (e.translate(o.x, (o.y + A + 1.2) / 2, r.z * a),
              V(e, z.iron),
              n.push(e));
          }
        }
      }
    let r = new h(N(H([...t, ...n])), I);
    ((r.castShadow = !0), F.add(r));
  }
  if (k.linings?.length) {
    let e = (g.lights ?? [])
        .filter((e) => e.kind === `quad` && Math.abs(e.x) < 100)
        .map((e) => [e.x, e.y, e.z, Math.min(1.6, e.gain ?? 1)]),
      t = {
        plaster: [13286815, 0.04, 0.24, 9],
        dado: [6046768, 0.04, 0.24, 9],
        road: [5656907, 0.035, 0.42, 16],
        floor: [11049602, 0.06, 0.3, 12],
        ceil: [11773580, 0.05, 0.16, 10],
        stone: [9405552, 0.035, 0.2, 9],
        step: [10261638, 0.045, 0.3, 10],
        stepEdge: [7301471, 0.07, 0.3, 10],
      },
      r = new _(16767392),
      i = new _();
    new _();
    let a = [],
      o = [],
      s = (n, a, o, s) => {
        let [c, l, u, d] = t[s],
          f = l;
        for (let [t, r, i, s] of e) {
          let e = (n - t) ** 2 + (a - r) ** 2 * 0.35 + (o - i) ** 2;
          e < 140 && (f += u * s * Math.exp(-e / d));
        }
        return (
          (f = Math.min(f, 0.42)),
          i
            .set(c)
            .multiplyScalar(f * 1.3)
            .lerp(r.clone().multiplyScalar(f * 0.9), Math.min(0.3, f * 0.6))
        );
      },
      c = (e, t) => {
        for (let n of e)
          (a.push(...n), s(n[0], n[1], n[2], t), o.push(i.r, i.g, i.b));
      },
      u = (e, t, n = 1, r = []) => {
        let i = Math.max(1, Math.ceil((t - e) / n - 1e-6)),
          a = [];
        for (let n = 0; n <= i; n++) a.push(e + ((t - e) * n) / i);
        return [
          ...new Set([...a, ...r.filter((n) => n > e + 0.02 && n < t - 0.02)]),
        ].sort((e, t) => e - t);
      },
      d = (e, t, n, r, i, a = null) => {
        let [o, s] = [0, 1, 2].filter((t) => t !== e),
          l = u(n[o], r[o]),
          d = u(n[s], r[s], 1, a != null && s === 1 ? [a] : []);
        for (let n = 0; n < l.length - 1; n++)
          for (let r = 0; r < d.length - 1; r++) {
            let a = (n, r) => {
                let i = [0, 0, 0];
                return ((i[e] = t), (i[o] = n), (i[s] = r), i);
              },
              u = a(l[n], d[r]),
              f = a(l[n + 1], d[r]),
              p = a(l[n + 1], d[r + 1]),
              m = a(l[n], d[r + 1]),
              h = [0, 0, 0];
            ((h[e] = t),
              (h[o] = (l[n] + l[n + 1]) / 2),
              (h[s] = (d[r] + d[r + 1]) / 2));
            let g = i(h);
            c([u, f, p, u, p, m], g);
          }
      },
      f = [A, A + 20, j],
      p = [];
    for (let [e, [t, n, r, i, o, s, c = `plaster`]] of k.linings.entries()) {
      let l = a.length,
        u = [t, n, r],
        m = [i, o, s],
        h = [i - t, o - n, s - r],
        g = h.indexOf(Math.min(...h)),
        _ = (u[g] + m[g]) / 2,
        v =
          c === `plaster` && g !== 1 && f.some((e) => Math.abs(n - e) < 0.1)
            ? n + 1.05
            : null;
      (d(g, _, u, m, (e) => (v != null && e[1] < v ? `dado` : c), v),
        (p[e] = [l, a.length]));
    }
    for (let [e, t, n, r, i, a, o] of k.flights ?? []) {
      let s = Math.round((a - i) / 0.25),
        c = Math.sign(r - n),
        l = Math.abs(r - n);
      for (let r = 0; r < s; r++) {
        let u = n + (c * l * r) / s,
          f = n + (c * l * (r + 1)) / s,
          p = i + ((a - i) * (r + 1)) / s,
          m = o ?? (Math.abs(i - A) < 0.1 ? A : p - 0.5),
          h = [Math.min(u, f), m, e],
          g = [Math.max(u, f), p, t];
        for (let e = 0; e < 3; e++)
          for (let t of [0, 1])
            d(e, t ? g[e] : h[e], h, g, () =>
              e === 1 ? (t ? `step` : `ceil`) : `stepEdge`,
            );
      }
    }
    for (let [e, t, n, r, i, a] of k.slabs ?? []) {
      let o = [e, t, n],
        s = [r, i, a];
      for (let e = 0; e < 3; e++)
        for (let t of [0, 1])
          d(e, t ? s[e] : o[e], o, s, () =>
            e === 1 ? (t ? `floor` : `ceil`) : `stepEdge`,
          );
    }
    let m = N(new l());
    (m.setAttribute(`position`, new w(a, 3)),
      m.setAttribute(`color`, new w(o, 3)),
      F.add(new h(m, N(new E({ vertexColors: !0, side: 2, fog: !1 })))));
    let v = new Map();
    (k.liningOwners ?? []).forEach((e, t) => {
      for (let n of e) (v.has(n) || v.set(n, []), v.get(n).push(t));
    });
    let y = new Set();
    le.push(
      n.events.on(`destruction:state`, (e) => {
        let t = v.get(e?.id);
        if (!t || !e.state?.hp?.some((e) => e === 0)) return;
        let n = m.attributes.position.array;
        for (let e of t) {
          if (y.has(e) || !p[e]) continue;
          y.add(e);
          let [t, r] = p[e];
          for (let e = t; e < r; e++) n[e] = 0;
        }
        m.attributes.position.needsUpdate = !0;
      }),
    );
  }
  {
    let e = k.leaves[0].hw,
      t = [],
      n = [],
      r = [],
      a = j,
      o = 2830131,
      s = 5594467,
      l = 8014384,
      u = 4020796,
      d = 14198049,
      f = 1513498,
      p = (e, n, r, i, a, o) => {
        let s = new c(a, a, Math.abs(n - e), 8);
        (s.rotateZ(Math.PI / 2),
          s.translate((e + n) / 2, r, i),
          V(s, o),
          t.push(s));
      },
      m = (e, n, r, i, a, o) => {
        let s = new c(a, a, Math.abs(n - e), 8);
        (s.rotateX(Math.PI / 2),
          s.translate(i, r, (e + n) / 2),
          V(s, o),
          t.push(s));
      },
      g = (e, n, r, i, a, o, s = 12) => {
        let l = new c(i, i, a, s);
        (l.translate(e, n + a / 2, r), V(l, o), t.push(l));
      };
    for (let e = -58.4; e < -37; e += 0.45)
      B(t, e, a + 0.035, -1.9, e + 0.07, a + 0.055, 1.9, f);
    for (let e of [-1, 1])
      B(t, -58.6, a, e * 1.97 - 0.03, -37, a + 0.16, e * 1.97 + 0.03, d);
    (p(-58, -37, A - 1.95, 1.3, 0.16, l),
      p(-58, -37, A - 1.95, 1.75, 0.11, u),
      B(t, -58, A - 2.05, -1.9, -37, A - 1.98, -1.2, s));
    for (let e of [-2.15, 2.15])
      B(t, -37.12, a, e - 0.12, -36.98, a + 2.75, e + 0.12, s);
    B(t, -37.12, a + 2.62, -2.25, -36.98, a + 2.78, 2.25, s);
    for (let e = -54; e < -37; e += 6)
      B(t, e - 0.5, A - 1.72, -0.18, e + 0.5, A - 1.62, 0.18, f);
    for (let e of [-3.4, 3.4]) {
      let n = -17.6,
        r = A - 1.2,
        l = 2.7;
      for (let a = 0; a < 9; a++) {
        let c = -Math.PI * 0.95 + a * Math.PI * 0.09,
          u = c + Math.PI * 0.09,
          d = [n + Math.cos(c) * l, r + Math.sin(c) * l],
          f = [n + Math.cos(u) * l, r + Math.sin(u) * l],
          p = Math.hypot(f[0] - d[0], f[1] - d[1]),
          m = new i(p + 0.05, 0.45, 0.36);
        (m.rotateZ(Math.atan2(f[1] - d[1], f[0] - d[0])),
          m.translate((d[0] + f[0]) / 2, (d[1] + f[1]) / 2, e),
          V(m, o),
          t.push(m));
        let h = [(d[0] + f[0]) / 2, (d[1] + f[1]) / 2],
          g = Math.atan2(h[1] - r, h[0] - n),
          _ = new i(0.18, 0.22, 0.36);
        (_.rotateZ(g),
          _.translate(h[0] - Math.cos(g) * 0.32, h[1] - Math.sin(g) * 0.32, e),
          V(_, s),
          t.push(_));
      }
      let u = new c(0.75, 0.75, 0.42, 14);
      (u.rotateX(Math.PI / 2),
        u.translate(-20.700000000000003, a + 2.35, e),
        V(u, s),
        t.push(u));
    }
    m(-4.4, 4.4, a + 2.35, -20.7, 0.16, s);
    for (let e of [-4.4, 4.4])
      B(t, -21.1, a, e - 0.3, -20.3, a + 2.5, e + 0.3, o);
    for (let e of [-11.3, 11.3]) {
      g(-35.4, a, e, 0.85, 2.9, u);
      for (let t of [0.5, 1.5, 2.5]) g(-35.4, a + t, e, 0.9, 0.12, f);
    }
    for (let e of [-14.15, 14.15]) p(-36.2, -15.8, a + 2.75, e, 0.13, l);
    p(-36.2, -15.8, A - 1.05, -6, 0.1, u);
    for (let [e, n, r, i] of [
      [-20.5, -5.3, -16.2, -5.15],
      [-20.5, 5.15, -16.2, 5.3],
      [-20.5, -5.3, -20.35, 5.3],
    ])
      B(t, e, a + 0.035, n, r, a + 0.05, i, d);
    for (let [e, t, n] of [
      [-36.4, A - 1.1, -13.6],
      [-36.4, A - 1.1, 13.6],
      [-15.7, A - 1.1, -13.6],
      [-15.7, A - 1.1, 13.6],
      [-36.3, a + 2.95, -2.5],
      [-36.3, a + 2.95, 2.5],
    ])
      r.push([e, t, n]);
    for (let n of [-1, 1])
      for (let [r, o] of [
        [-95.2, -88.6],
        [-87.4, -69.2],
        [-68, -63],
        [-61.8, -58],
      ]) {
        let s = (r + o) / 2,
          c = (o - r) / 2 - 0.2,
          l = A - 1.05,
          u = Math.max(a + 1.8, l - c * 0.55),
          d = n * (e + 0.29);
        for (let e = 0; e < 10; e++) {
          let n = e / 10,
            r = (e + 1) / 10,
            a = (e) => {
              let t = Math.PI * (1 - e);
              return [s + Math.cos(t) * c, u + Math.sin(t) * (l - u)];
            },
            o = a(n),
            f = a(r),
            p = Math.hypot(f[0] - o[0], f[1] - o[1]),
            m = new i(p + 0.06, 0.32, 0.08);
          (m.rotateZ(Math.atan2(f[1] - o[1], f[0] - o[0])),
            m.translate((o[0] + f[0]) / 2, (o[1] + f[1]) / 2, d),
            V(m, 11773317),
            t.push(m));
        }
      }
    for (let r of [-1, 1])
      for (let i of [-86, -77, -62])
        (B(
          t,
          i - 0.1,
          A,
          r * (e - 0.3) - 0.1,
          i + 0.1,
          A + 4.6,
          r * (e - 0.3) + 0.1,
          f,
        ),
          B(
            t,
            i - 0.25,
            A + 4.6,
            r * (e - 0.3) - 0.25,
            i + 0.25,
            A + 4.75,
            r * (e - 0.3) + 0.25,
            f,
          ),
          n.push([i, A + 4.4, r * (e - 0.3)]));
    for (let e of [-2.25, 2.65])
      B(t, -45.7, A + 1.95, e - 0.02, -44, A + 2.85, e + 0.02, 1054236);
    for (let [e, t] of [
      [-54.5, -4.15],
      [-54.5, -1.55],
      [-43.35, -2.25],
      [-43.35, 2.65],
    ])
      r.push([e, A + 1, t]);
    let _ = [];
    for (let e of t) {
      _.push(e);
      let t = e.clone();
      (t.rotateY(Math.PI), _.push(t));
    }
    let v = new h(N(H(_)), I);
    ((v.castShadow = !0), F.add(v));
    let y = r.filter(Boolean),
      b = L(y.length * 2, 16752672, 1.1);
    (y.forEach(([e, t, n], r) => {
      (b.set(r * 2, e, t, n), b.set(r * 2 + 1, -e, t, -n));
    }),
      b.dirty(),
      F.add(b.points));
    let x = L(n.length * 2, 16767392, 1.6);
    (n.forEach(([e, t, n], r) => {
      (x.set(r * 2, e, t, n), x.set(r * 2 + 1, -e, t, -n));
    }),
      x.dirty(),
      F.add(x.points));
  }
  let ke = [];
  {
    let e = [],
      t = [],
      r = 12891542,
      a = 10129272,
      s = 14200906,
      l = 16761464,
      u = (e, t, n, r, a, o, s, c, l) => {
        let u = new i(a, o, s);
        (c && u.rotateY(c), u.translate(t, n, r), V(u, l), e.push(u));
      },
      d = (e, t, n, r, i, a, o, s, l, u = 0) => {
        let d = new c(t, n, r, i);
        (u && d.rotateY(u), d.translate(a, o + r / 2, s), V(d, l), e.push(d));
      },
      f = (e, t, n, r, a, o, s, c, l) => {
        let u = o[1] - a[1],
          d = o[0] - a[0],
          f = new i(c, s, Math.hypot(d, u) + s * 0.4);
        (f.rotateX(-Math.atan2(u, d)), t && f.rotateY(Math.PI / 2));
        let p = (a[0] + o[0]) / 2,
          m = (a[1] + o[1]) / 2;
        (t ? f.translate(p, m, n + r) : f.translate(n + r, m, p),
          V(f, l),
          e.push(f));
      };
    for (let n of k.towers) {
      let i = Math.sign(n) || 1;
      for (let o of [1, -1]) {
        let s = n + i * o * 9,
          u = i * o;
        for (let t of [-1, 1])
          (B(e, s, A, t * 7, s + u * 0.3, 39.4, t * 7.6, r),
            B(e, s, A, t * 6.9, s + u * 0.45, A + 1.1, t * 7.7, a));
        for (let t of [-1, 1])
          (d(e, 0.22, 0.22, 5.6, 8, s + u * 0.24, A + 0.1, t * 7.25, r),
            B(e, s, A + 5.6, t * 6.95, s + u * 0.5, A + 6.05, t * 7.55, a));
        let p = (e) => [
          -7.3 + 7.3 * e,
          A +
            6.1 +
            (2.5 * Math.sin(e * Math.PI * 0.4)) / Math.sin(Math.PI * 0.4),
        ];
        for (let t of [-1, 1])
          for (let n = 0; n < 8; n++) {
            let r = p(n / 8),
              i = p((n + 1) / 8);
            ((r[0] *= -t),
              (i[0] *= -t),
              f(e, !1, s, u * 0.16, r, i, 0.42, 0.32, 8747619));
            let a = Math.min(r[0], i[0]),
              o = Math.max(r[0], i[0]),
              c = Math.min(r[1], i[1]) - 0.2;
            c > A + 6.6 && B(e, s, A + 6.6, a, s + u * 0.03, c, o, 7300694);
          }
        let m = (t, n, i) => {
          for (let a of [-1, 1]) {
            let o = [t + a * (i / 2 + 0.15), n + 0.05],
              c = [t, n + 0.05 + i * 0.38];
            (f(e, !1, s, u * 0.1, o, c, 0.16, 0.2, r),
              B(
                e,
                s,
                n - 0.35,
                o[0] - 0.1,
                s + u * 0.2,
                n + 0.05,
                o[0] + 0.1,
                r,
              ));
          }
        };
        for (let e of [-4.2, -1.4, 1.4, 4.2])
          for (let t of [A + 9, A + 14.2]) m(e, t + 2.4, 0.8);
        for (let e of [-9.5, -3.2, 3.2, 9.5]) m(e, A + 27.1, 0.9);
        for (let e of [-9.5, 9.5]) (m(e, A + 8, 1.2), m(e, A + 14.5, 1.2));
        for (let e of o > 0 ? [-9.5, -3.2, 3.2, 9.5] : [-9.5, 9.5])
          m(e, A + 23.2, 1.4);
        if (o < 0) for (let e of [-5.2, 5.2]) m(e, A + 23.2, 3.6);
        if (o > 0) for (let e of [-8.85, 8.85]) m(e, A + 2.5, 2.1);
        let h = (e) => 8.8 * (1 - e / 14);
        for (let a of [-4.6, 4.6]) {
          let s = n + i * o * h(4.2),
            d = n + i * o * (h(1.4) + 0.15);
          B(e, s, 41.4, a - 0.85, d, 43.4, a + 0.85, r);
          let f = new c(0.98, 0.98, Math.abs(d - s) + 0.1, 3);
          (f.rotateX(-Math.PI / 2),
            f.rotateY(Math.PI / 2),
            f.translate((s + d) / 2, 43.89, a),
            V(f, 3884371),
            e.push(f),
            B(t, d, 41.8, a - 0.42, d + u * 0.04, 43, a + 0.42, l));
        }
        B(e, s - u * 0.2, 40, -10.2, s + u * 0.25, 40.55, 10.2, r);
        for (let t = -9.6; t <= 9.61; t += 1.6)
          B(e, s - u * 0.2, 40.55, t - 0.4, s + u * 0.25, 41.45, t + 0.4, r);
      }
      for (let i of [1, -1]) {
        let o = i * 12;
        for (let t of [-1, 1])
          (B(e, n + t * 2.6, A, o, n + t * 3.1, 39.4, o + i * 0.3, r),
            B(e, n + t * 2.5, A, o, n + t * 3.2, A + 1.1, o + i * 0.45, a));
        let s = (t, n, a) => {
          for (let s of [-1, 1]) {
            let c = [t + s * (a / 2 + 0.15), n + 0.05],
              l = [t, n + 0.05 + a * 0.38];
            (f(e, !0, o, i * 0.1, c, l, 0.16, 0.2, r),
              B(
                e,
                c[0] - 0.1,
                n - 0.35,
                o,
                c[0] + 0.1,
                n + 0.05,
                o + i * 0.2,
                r,
              ));
          }
        };
        for (let e of [-5, 0, 5])
          for (let t of [8, 14.5, 18.5]) s(n + e, A + t, 1.2);
        for (let e of [-4, 4]) s(n + e, A + 23.2, 1.4);
        for (let e of [-6, -2, 2, 6]) s(n + e, A + 27.1, 0.9);
        {
          let a = i * 11.8 * (1 - 4.2 / 14),
            o = i * (11.8 * (1 - 1.4 / 14) + 0.15);
          B(e, n - 0.85, 41.4, a, n + 0.85, 43.4, o, r);
          let s = new c(0.98, 0.98, Math.abs(o - a) + 0.1, 3);
          (s.rotateX(-Math.PI / 2),
            s.translate(n, 43.89, (a + o) / 2),
            V(s, 3884371),
            e.push(s),
            B(t, n - 0.42, 41.8, o, n + 0.42, 43, o + i * 0.04, l));
        }
        B(e, n - 7.2, 40, o - i * 0.2, n + 7.2, 40.55, o + i * 0.25, r);
        for (let t = -6.4; t <= 6.41; t += 1.6)
          B(
            e,
            n + t - 0.4,
            40.55,
            o - i * 0.2,
            n + t + 0.4,
            41.45,
            o + i * 0.25,
            r,
          );
      }
      {
        let t = new o(1, 1, 4);
        (t.rotateY(Math.PI / 4),
          t.scale(8.8 / Math.SQRT1_2, 14, 11.8 / Math.SQRT1_2),
          t.translate(n, 47, 0),
          V(t, z.slate),
          e.push(t));
      }
      d(e, 1.25, 1.25, 3.2, 8, n, 50.4, 0, r, Math.PI / 8);
      for (let e = 0; e < 8; e++) {
        let r = (e * Math.PI) / 4;
        u(
          t,
          n + Math.sin(r) * 1.2,
          52,
          Math.cos(r) * 1.2,
          0.38,
          1.3,
          0.06,
          r,
          l,
        );
      }
      d(e, 1.45, 1.45, 0.3, 8, n, 53.6, 0, r, Math.PI / 8);
      {
        let t = new o(1.45, 3.4, 8);
        (t.rotateY(Math.PI / 8),
          t.translate(n, 55.6, 0),
          V(t, z.slate),
          e.push(t));
      }
      d(e, 0.09, 0.09, 5.2, 6, n, 57.2, 0, s);
      {
        let t = new se(0.42, 10, 8);
        (t.translate(n, 57.6, 0), V(t, s), e.push(t));
      }
      ke.push([n, 62.2, 0]);
      for (let [i, c] of [
        [-8.7, -11.7],
        [-8.7, 11.7],
        [8.7, -11.7],
        [8.7, 11.7],
      ]) {
        let f = n + i,
          p = Math.atan2(Math.sign(i), Math.sign(c));
        for (let e of [A + 9, A + 17, A + 26.5])
          for (let n of [-0.55, 0.55]) {
            let r = p + n;
            u(
              t,
              f + Math.sin(r) * 1.52,
              e,
              c + Math.cos(r) * 1.52,
              0.22,
              1.2,
              0.06,
              r,
              l,
            );
          }
        d(e, 1.8, 1.8, 6, 8, f, 39.8, c, r, Math.PI / 8);
        for (let t of [41.6, 44.6])
          d(e, 1.92, 1.92, 0.22, 8, f, t, c, a, Math.PI / 8);
        for (let e = 0; e < 8; e++) {
          let n = (e * Math.PI) / 4;
          u(
            t,
            f + Math.sin(n) * 1.69,
            43.1,
            c + Math.cos(n) * 1.68,
            0.24,
            1.1,
            0.06,
            n,
            l,
          );
        }
        d(e, 2.15, 1.8, 0.6, 8, f, 45.8, c, r, Math.PI / 8);
        for (let t = 0; t < 8; t++) {
          let n = (t * Math.PI) / 4;
          u(
            e,
            f + Math.sin(n) * 1.95,
            46.75,
            c + Math.cos(n) * 1.95,
            0.5,
            0.7,
            0.3,
            n,
            r,
          );
        }
        {
          let t = new o(1.75, 10.5, 8);
          (t.rotateY(Math.PI / 8),
            t.translate(f, 51.65, c),
            V(t, z.slate),
            e.push(t));
        }
        for (let t = 0; t < 4; t++) {
          let n = (t * Math.PI) / 2 + Math.PI / 4,
            i = f + Math.sin(n) * 1.95,
            a = c + Math.cos(n) * 1.95;
          d(e, 0.18, 0.18, 1.1, 6, i, 46.4, a, r);
          let s = new o(0.26, 1.7, 6);
          (s.translate(i, 48.35, a), V(s, z.slate), e.push(s));
        }
        d(e, 0.05, 0.05, 2.2, 6, f, 56.7, c, s);
        {
          let t = new se(0.26, 8, 6);
          (t.translate(f, 58.9, c), V(t, s), e.push(t));
        }
      }
    }
    for (let n of [-62, 62])
      for (let i of [-10.5, 10.5]) {
        let c = j + 5,
          p = j + 16;
        for (let [f, m] of [
          [-4, -3.5],
          [-4, 3.5],
          [4, -3.5],
          [4, 3.5],
        ]) {
          let h = n + f,
            g = i + m;
          d(e, 0.78, 0.78, p + 2.6 - c, 8, h, c, g, r, Math.PI / 8);
          for (let t of [c + 4.6, p - 0.2])
            d(e, 0.9, 0.9, 0.22, 8, h, t, g, a, Math.PI / 8);
          d(e, 0.98, 0.78, 0.4, 8, h, p + 2.2, g, r, Math.PI / 8);
          {
            let t = new o(0.9, 4.6, 8);
            (t.rotateY(Math.PI / 8),
              t.translate(h, p + 2.6 + 2.3, g),
              V(t, z.slate),
              e.push(t));
          }
          {
            let t = new se(0.16, 8, 6);
            (t.translate(h, p + 7.3, g), V(t, s), e.push(t));
          }
          let _ = Math.atan2(Math.sign(f), Math.sign(m));
          for (let e of [c + 2.5, c + 7.5])
            u(
              t,
              h + Math.sin(_) * 0.8,
              e,
              g + Math.cos(_) * 0.8,
              0.16,
              0.9,
              0.05,
              _,
              l,
            );
        }
        for (let a of [-1, 1]) {
          let o = n + a * 4;
          B(e, o - a * 0.15, p, i - 3, o + a * 0.2, p + 0.45, i + 3, r);
          for (let t = -2.4; t <= 2.41; t += 1.2)
            B(
              e,
              o - a * 0.15,
              p + 0.45,
              i + t - 0.32,
              o + a * 0.2,
              p + 1.2,
              i + t + 0.32,
              r,
            );
          for (let n of [-1.4, 1.4])
            for (let s of [c + 2, c + 5.5]) {
              B(t, o, s, i + n - 0.32, o + a * 0.04, s + 1.9, i + n + 0.32, l);
              for (let t of [-1, 1])
                f(
                  e,
                  !1,
                  o,
                  a * 0.08,
                  [i + n + t * 0.5, s + 1.95],
                  [i + n, s + 2.3],
                  0.14,
                  0.16,
                  r,
                );
            }
          let s = i + a * 3.5;
          B(e, n - 3.5, p, s - a * 0.15, n + 3.5, p + 0.45, s + a * 0.2, r);
          for (let t = -2.8; t <= 2.81; t += 1.4)
            B(
              e,
              n + t - 0.32,
              p + 0.45,
              s - a * 0.15,
              n + t + 0.32,
              p + 1.2,
              s + a * 0.2,
              r,
            );
          for (let t of [A + 9.2, A + 12.7])
            for (let i of [-1, 1])
              f(
                e,
                !0,
                s,
                a * 0.08,
                [n + i * 1.55, t + 0.05],
                [n, t + 0.75],
                0.16,
                0.18,
                r,
              );
        }
      }
    for (let t of [-1, 1])
      for (let n of [-62, 62]) {
        let r = new o(6.2, 7, 4);
        (r.rotateY(Math.PI / 4),
          r.translate(n, j + 16 + 3.5, (n < 0 ? 1 : -1) * t * 10.5),
          V(r, z.slate),
          e.push(r));
      }
    let m = Object.entries(k.panelBoxes ?? {}),
      g = new p(),
      _ = (e) => {
        (e.computeBoundingBox(), g.copy(e.boundingBox));
        for (let [e, t] of m) {
          let n = t[3] - t[0] < t[5] - t[2] ? 0 : 2,
            r = 2 - n,
            i = n ? g.min.z : g.min.x,
            a = n ? g.max.z : g.max.x,
            o = r ? g.min.z : g.min.x,
            s = r ? g.max.z : g.max.x;
          if (
            i >= t[n] - 0.7 &&
            a <= t[n + 3] + 0.7 &&
            o >= t[r] - 0.02 &&
            s <= t[r + 3] + 0.02 &&
            g.min.y >= t[1] - 0.02 &&
            g.max.y <= t[4] + 0.02
          )
            return e;
        }
        return null;
      },
      v = (e, t) => {
        let n = [],
          r = 0;
        for (let t of e) {
          let e = (t.index ? t.index.count : t.attributes.position.count) * 3,
            i = _(t);
          (i && n.push([i, r, r + e]), (r += e));
        }
        return { spans: n, mesh: t };
      };
    for (let [e, n, r, i, a, o] of k.glows ?? [])
      u(t, e, n, r, i, a, 0.02, o, 15249520);
    let y = v(e),
      b = v(t),
      x = new h(N(H(e)), I);
    ((x.castShadow = !0), F.add(x), (y.mesh = x));
    let S = new h(N(H(t)), N(new E({ vertexColors: !0 })));
    (F.add(S),
      (b.mesh = S),
      le.push(
        n.events.on(`destruction:state`, (e) => {
          if (e?.state?.hp?.some((e) => e === 0))
            for (let t of [y, b]) {
              let n = !1,
                r = t.mesh.geometry.attributes.position.array;
              for (let [i, a, o] of t.spans)
                if (i === e.id) {
                  for (let e = a; e < o; e++) r[e] = 0;
                  n = !0;
                }
              n && (t.mesh.geometry.attributes.position.needsUpdate = !0);
            }
        }),
      ));
  }
  let Z = N(new x(3.2, 1.9, 12, 4));
  Z.translate(1.6, -0.95, 0);
  let Q = Z.attributes.position.array.slice();
  {
    let e = document.createElement(`canvas`);
    ((e.width = 96), (e.height = 56));
    let t = e.getContext(`2d`);
    ((t.fillStyle = `#d8b04a`),
      t.fillRect(0, 0, 96, 56),
      (t.fillStyle = `#1c2f6b`),
      t.fillRect(4, 4, 88, 48),
      (t.fillStyle = `#eee6d2`),
      t.fillRect(30, 14, 10, 30),
      t.fillRect(56, 14, 10, 30),
      t.fillRect(28, 24, 40, 4),
      (t.fillStyle = `#d8b04a`),
      t.fillRect(33, 10, 4, 5),
      t.fillRect(59, 10, 4, 5));
    let n = N(new m(e));
    n.colorSpace = re;
    let r = N(new v({ map: n, side: 2, roughness: 0.9 }));
    for (let [e, t, n] of ke) {
      let i = new h(Z, r);
      (i.position.set(e, t, n),
        (i.rotation.y = -Math.PI / 2),
        (i.frustumCulled = !1),
        F.add(i));
    }
  }
  let Ae = (e) => {
    let t = Z.attributes.position.array;
    for (let n = 0; n < t.length; n += 3) {
      let r = Q[n] / 3.2;
      ((t[n + 2] =
        Q[n + 2] +
        Math.sin(e * 4.2 - Q[n] * 1.9) * 0.28 * r +
        Math.sin(e * 2.3 - Q[n] * 0.8) * 0.12 * r),
        (t[n + 1] = Q[n + 1] - 0.12 * r * r));
    }
    ((Z.attributes.position.needsUpdate = !0), Z.computeVertexNormals());
  };
  {
    let e = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 8), (e.height = 128));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 128, 0, 0);
      (n.addColorStop(0, `rgba(255,236,200,.95)`),
        n.addColorStop(0.35, `rgba(255,226,180,.45)`),
        n.addColorStop(1, `rgba(255,220,170,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 8, 128));
      let r = new m(e);
      return ((r.colorSpace = re), r);
    })();
    N(e);
    let t = N(
        new E({
          map: e,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          opacity: 0.38,
          fog: !1,
        }),
      ),
      n = [],
      r = (e, t, r, i, a, o, s, c) => {
        let l = o - a,
          u = c - s,
          d = new x(l, u),
          f = d.attributes.uv;
        for (let e = 0; e < f.count; e++)
          f.setY(e, (f.getY(e) * u + s - A) / 30);
        d.rotateY(Math.atan2(e, t));
        let p = (a + o) / 2;
        (d.translate(r + (t ? p : 0), s + u / 2, i + (e ? p : 0)), n.push(d));
      };
    for (let e of k.towers) {
      for (let [t, n] of [
        [1, e + 9.34],
        [-1, e - 9.34],
      ])
        (r(t, 0, n, 0, -12, -7, A, A + 30),
          r(t, 0, n, 0, 7, 12, A, A + 30),
          r(t, 0, n, 0, -7, 7, A + 6.4, A + 30));
      for (let [t, n] of [
        [1, 12.34],
        [-1, -12.34],
      ])
        r(0, t, e, n, -9, 9, A, A + 30);
      for (let t of [-10.5, 10.5]) {
        let n = Math.sign(e) * 62;
        for (let e of [-1, 1])
          (r(e, 0, n + e * 4.3, t, -3.5, 3.5, j + 5, j + 16),
            r(0, e, n, t + e * 3.8, -4, 4, j + 5, j + 16));
      }
      for (let [t, r] of [
        [-8.7, -11.7],
        [-8.7, 11.7],
        [8.7, -11.7],
        [8.7, 11.7],
      ]) {
        let i = new c(1.76, 1.76, 30, 12, 1, !0);
        (i.translate(e + t, A + 15, r), n.push(i));
      }
    }
    let i = new h(N(oe(n)), t);
    (n.forEach((e) => e.dispose()), (i.renderOrder = 2), F.add(i));
  }
  {
    let e = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 128), (e.height = 256));
      let t = e.getContext(`2d`);
      ((t.fillStyle = `#141820`), t.fillRect(0, 0, 128, 256));
      for (let e = 6; e < 256; e += 16)
        for (let n = 6; n < 128; n += 16) {
          let r = R();
          ((t.fillStyle =
            r < 0.42 ? `#ffd28a` : r < 0.5 ? `#cfe2ff` : `#1b212b`),
            t.fillRect(n, e, 9, 10));
        }
      let n = new m(e);
      return ((n.wrapS = n.wrapT = ee), (n.colorSpace = re), n);
    })();
    N(e);
    let t = N(
        new v({
          map: e,
          emissive: 16777215,
          emissiveMap: e,
          emissiveIntensity: 0.6,
          roughness: 0.85,
        }),
      ),
      n = [],
      r = [],
      a = (e, t, r, a, o) => {
        let s = new i(r, o, a),
          c = s.attributes.uv;
        for (let e = 0; e < c.count; e++)
          c.setXY(e, (c.getX(e) * r) / 16, (c.getY(e) * o) / 16);
        (s.translate(e, A + o / 2, t), n.push(s));
      };
    for (let e = 0; e < 620; e++) {
      let e = (R() < 0.5 ? -1 : 1) * (104 + R() * 900),
        t = (R() * 2 - 1) * 1600;
      (Math.abs(e) < 150 && Math.abs(t) < 70) ||
        a(
          e,
          t,
          14 + R() * 24,
          14 + R() * 24,
          10 + R() * R() * 56 + (Math.abs(e) > 450 ? R() * 60 : 0),
        );
    }
    for (let e of [-1, 1])
      for (let t = -900; t <= 900; t += 34)
        Math.abs(t) < 60 || a(e * (84 + R() * 6), t, 22, 30, 16 + R() * 12);
    for (let [e, t, n] of [
      [-480, 360, 220],
      [-640, -180, 160],
      [560, 500, 190],
      [720, -420, 250],
      [-860, 880, 150],
      [860, 180, 170],
    ])
      (a(e, t, 30, 30, n), r.push([e, A + n + 3, t]));
    let o = new h(N(oe(n)), t);
    (n.forEach((e) => e.dispose()), (o.name = `bascule-city`), F.add(o));
    let s = [];
    B(s, 250, A, -380, 330, A + 40, -300, 10393226);
    let l = new c(26, 26, 14, 32);
    (l.translate(290, A + 47, -340), V(l, 10393226), s.push(l));
    let u = new se(25, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    (u.translate(290, A + 54, -340), V(u, z.slate), s.push(u));
    let d = new c(2.6, 3.4, 12, 12);
    (d.translate(290, A + 85, -340),
      V(d, 14200906),
      s.push(d),
      F.add(new h(N(H(s)), I)));
    var je = L(r.length, 16722458, 9);
    (r.forEach(([e, t, n], r) => je.set(r, e, t, n)),
      je.dirty(),
      F.add(je.points));
  }
  {
    let e = [];
    for (let [t, n] of k.trees ?? [])
      for (let [r, i] of [
        [t, n],
        [-t, -n],
      ])
        for (let t = 0; t < 4; t++) {
          let n = new te(2.4 + R() * 0.9, 1);
          (n.translate(
            r + (R() - 0.5) * 2.4,
            j + 5.6 + R() * 2.2,
            i + (R() - 0.5) * 2.4,
          ),
            V(n, [1915428, 2377002, 2903856][t % 3]),
            e.push(n));
        }
    if (e.length) {
      let t = new h(
        N(H(e)),
        N(new v({ vertexColors: !0, roughness: 0.95, flatShading: !0 })),
      );
      ((t.castShadow = !0), F.add(t));
    }
  }
  let Me = k.engineHouses.map((e) => {
      let t = new l(),
        n = new Float32Array(36);
      t.setAttribute(`position`, new s(n, 3));
      let r = new ae({
        map: ue,
        color: 13159894,
        size: 7,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: 0.26,
        depthWrite: !1,
      });
      N(t, r);
      let i = new ie(t, r);
      return (
        (i.frustumCulled = !1),
        F.add(i),
        {
          base: [e.chimney[0], e.chimney[1] + 14, e.chimney[2]],
          pos: n,
          g: t,
          mat: r,
          n: 12,
        }
      );
    }),
    Ne = (() => {
      let e = [];
      return (
        B(
          e,
          -0.8,
          0,
          -0.12,
          0,
          0.04,
          0.12,
          z.white,
          new u().makeRotationZ(0.35),
        ),
        B(
          e,
          0,
          0,
          -0.12,
          0.8,
          0.04,
          0.12,
          z.white,
          new u().makeRotationZ(-0.35),
        ),
        B(e, -0.09, -0.08, -0.3, 0.09, 0.08, 0.3, z.white),
        N(H(e))
      );
    })(),
    Pe = new C(Ne, I, 16);
  ((Pe.frustumCulled = !1), F.add(Pe));
  let Fe = Array.from({ length: 16 }, (e, t) => ({
      cx: (t % 2 ? 1 : -1) * (26 + R() * 20),
      cz: (R() - 0.5) * 60,
      r: 10 + R() * 24,
      y: A + 12 + R() * 30,
      sp: 0.12 + R() * 0.18,
      ph: R() * 6,
    })),
    Ie = new u(),
    Le = new b(),
    Re = new S(),
    ze = new T(),
    Be = new T(1, 1, 1),
    $ = 0,
    Ve = null,
    He = L(4, 16722458, 1.8);
  P.add(He.points);
  let Ue = () => ce?.() ?? n.world.time.tick;
  return {
    update(e) {
      $ += Math.min(e || 0, 0.1);
      let t = Ue(),
        r = O(k, t),
        i = r.angle,
        a = $ % 1 < 0.5;
      if (r.phase !== Ve) {
        let e = {
          warn: `BRIDGE LIFTING · the deck closes in 10 s · cross by the walkways`,
          up: `BRIDGE UP · the walkways are the only way across`,
          clearing: `BRIDGE DOWN · the deck is open`,
        }[r.phase];
        (e &&
          Ve != null &&
          n.events.emit(`ui:message`, { kind: `hint`, text: e, ttl: 5 }),
          (Ve = r.phase));
      }
      (fe.forEach(({ L: e, pivot: t }, n) => {
        t.rotation.z = e.dir * i;
        let o = Math.cos(i),
          s = Math.sin(i),
          c = e.len / 2;
        for (let t of [-1, 1])
          (pe.set(
            n * 2 + (t > 0),
            e.hinge + e.dir * (c * o - 5.4 * s),
            e.y + c * s + 5.4 * o,
            t * (e.hw - 0.35),
          ),
            He.set(
              n * 2 + (t > 0),
              e.hinge + e.dir * (e.len * o - 0.3 * s),
              e.y + e.len * s + 0.3 * o,
              t * (e.hw - 0.2),
              r.barrier > 0.01 && a,
            ));
      }),
        pe.dirty(),
        He.dirty(),
        me.forEach(({ b: e, pv: t }, n) => {
          t.rotation.z = (((1 - r.barrier) * Math.PI) / 2) * 0.95;
          let i = t.rotation.z;
          he.set(
            n,
            e.x,
            A + 1.3 + 4.1 * Math.sin(i),
            e.z - e.side * 4.1 * Math.cos(i),
            r.barrier > 0.01 && ($ + n * 0.5) % 1 < 0.5,
          );
        }),
        he.dirty(),
        ge.forEach(([e, t, n], i) => {
          let o = r.barrier > 0.01 || r.phase === `warn`;
          (_e.set(i * 2, e, t, n, o && a),
            _e.set(i * 2 + 1, e, t - 0.3, n, o && !a),
            W.set(i, e, t - 0.6, n, !o));
        }),
        _e.dirty(),
        W.dirty(),
        ve.forEach(([e, t, n], i) => {
          for (let o = 0; o < 4; o++) {
            let s = n ? e + (o < 2 ? -2.2 : 2.2) : e + (o % 2 ? -0.8 : 0.8),
              c = n ? t + (o % 2 ? -0.8 : 0.8) : t + (o < 2 ? -2.2 : 2.2);
            ye.set(i * 4 + o, s, A + 0.8, c, r.barrier > 0.01 && a);
          }
        }),
        ye.dirty(),
        De(t, r.ship),
        G.position.set(0, 0, r.ship),
        (G.visible = Math.abs(r.ship) < 420),
        G.visible && be.update($),
        (G.rotation.z = 0.012 * Math.sin($ * 0.5)),
        (G.rotation.x = 0.004 * Math.sin($ * 0.7)));
      for (let e of Oe) {
        let t = (((($ * 8 * e.dir + e.ph * 2400) % 2400) + 2400) % 2400) - 1200;
        (e.g.position.set(e.x, 0, t),
          (e.g.rotation.y = e.dir > 0 ? 0 : Math.PI));
      }
      let o =
        r.phase === `rising` || r.phase === `lowering`
          ? 1
          : r.phase === `warn` || r.phase === `up`
            ? 0.4
            : 0;
      for (let e of Me) {
        for (let t = 0; t < e.n; t++) {
          let n = ($ * (0.1 + 0.12 * o) + t / e.n) % 1;
          ((e.pos[t * 3] = e.base[0] + n * 10),
            (e.pos[t * 3 + 1] = e.base[1] + n * 14),
            (e.pos[t * 3 + 2] = e.base[2] + n * 4));
        }
        ((e.g.attributes.position.needsUpdate = !0),
          (e.mat.opacity = 0.18 + 0.22 * o),
          (e.mat.size = 6 + 5 * o));
      }
      (Fe.forEach((e, t) => {
        let n = $ * e.sp + e.ph;
        (ze.set(
          e.cx + Math.cos(n) * e.r,
          e.y + Math.sin(n * 2.3) * 3,
          e.cz + Math.sin(n) * e.r,
        ),
          Re.set(Math.sin($ * 9 + e.ph) * 0.25, -n, 0),
          Le.setFromEuler(Re),
          Ie.compose(ze, Le, Be),
          Pe.setMatrixAt(t, Ie));
      }),
        (Pe.instanceMatrix.needsUpdate = !0),
        (je.points.visible = $ % 2 < 1),
        Ae($));
    },
    stats() {
      let e = O(k, Ue());
      return {
        phase: e.phase,
        angle: +((e.angle * 180) / Math.PI).toFixed(1),
        ship: Math.round(e.ship),
        barrier: +e.barrier.toFixed(2),
      };
    },
    dispose() {
      (le.forEach((e) => e?.()), d.remove(P), d.remove(F));
      for (let e of M) e?.dispose?.();
    },
  };
}
