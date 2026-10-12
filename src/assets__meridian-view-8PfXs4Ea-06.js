// assets__meridian-view-8PfXs4Ea 06 — math
// Lines 1046-2774 of readable/assets__meridian-view-8PfXs4Ea.pretty.js (statement-aligned).
function ve(t, r, i, s, { setGroup: d } = {}) {
  let v = i.meridian;
  if (!v) return null;
  let b = new y();
  ((b.name = `meridian`), r.add(b));
  let x = [],
    S = (...e) => (x.push(...e), e[0]),
    T = v.floor,
    E = v.scale ?? 1,
    F = new o(),
    I = new m(),
    L = new C(),
    R = new C(),
    oe = new C(0, 1, 0),
    z = new o().makeScale(0, 0, 0),
    se = () => null,
    ce = () => t.modules.get(`audio`),
    B = 0,
    ue = S(
      new u({
        vertexColors: !0,
        roughness: 0.78,
        metalness: 0.05,
        flatShading: !0,
      }),
    ),
    de = S(new w({ vertexColors: !0, toneMapped: !0 })),
    ve = new Map();
  for (let [e, t] of v.props.entries()) {
    let n = ve.get(t.kind);
    (n || ((n = { list: [] }), ve.set(t.kind, n)), n.list.push(e));
  }
  let be = v.props.map(() => ({ alive: !0 })),
    xe = [];
  for (let [e, t] of ve) {
    let n = pe[e];
    if (!n) continue;
    let r = he(n, !1),
      i = he(n, !0);
    if (!r) continue;
    (S(r),
      (t.mesh = new _(r, ue, t.list.length)),
      (t.mesh.castShadow = e !== `sprinkler`),
      (t.mesh.receiveShadow = !0),
      (t.mesh.name = `m34-${e}`),
      i &&
        (S(i),
        (t.glow = new _(i, de, t.list.length)),
        (t.glow.name = `m34-${e}-glow`)),
      (t.glow = null));
    let a = r.boundingBox;
    (t.list.forEach((n, r) => {
      let i = v.props[n];
      (I.setFromAxisAngle(oe, i.yaw),
        F.compose(L.set(i.x, i.y, i.z), I, R.set(i.s, i.s, i.s)),
        t.mesh.setMatrixAt(r, F),
        (be[n].kind = e),
        (be[n].k = t),
        (be[n].j = r));
      let o = (Math.max(a.max.x - a.min.x, a.max.z - a.min.z) / 2) * i.s,
        s = (a.max.y - a.min.y) * i.s;
      xe[n] = [
        i.x - o,
        i.y + a.min.y * i.s,
        i.z - o,
        i.x + o,
        i.y + a.min.y * i.s + s,
        i.z + o,
      ];
    }),
      (t.mesh.instanceMatrix.needsUpdate = !0),
      b.add(t.mesh),
      t.glow &&
        ((t.glow.instanceMatrix.needsUpdate = !0),
        t.glow.instanceColor && (t.glow.instanceColor.needsUpdate = !0),
        b.add(t.glow)));
  }
  let Se = null;
  try {
    Se = le(t, b, v);
  } catch (e) {
    t.warn?.(`meridian decor failed: ` + e.message);
  }
  {
    let e = S(_e(`MERIDIAN MUTUAL`, `INSURANCE  ·  SINCE 1921`)),
      t = S(
        new w({ map: e, transparent: !0, toneMapped: !0, color: 13617336 }),
      ),
      n = S(new h(1, 1));
    for (let e of v.props.filter(
      (e) => e.kind === `logo` || e.kind === `logo-lobby`,
    )) {
      let r = new c(n, t);
      (r.position.set(e.x, e.y, e.z), (r.rotation.y = e.yaw + Math.PI));
      let i = e.kind === `logo` ? 3.8 : 2.2;
      (r.scale.set(i * e.s, (i * e.s) / 4, 1), b.add(r));
    }
  }
  let U = v.plate,
    W = U.x1 - U.x0,
    G = U.z1 - U.z0,
    Ce = Math.round(W / 0.6),
    K = Math.round(G / 1.2),
    we = W / Ce,
    Te = G / K,
    Ee = S(new n(we - 0.025, 0.018, Te - 0.025)),
    De = S(new u({ color: 14276300, roughness: 0.95 })),
    q = new _(Ee, De, Ce * K);
  ((q.name = `m34-ceiling-tiles`), (q.receiveShadow = !0));
  let Oe = new Uint8Array(Ce * K),
    ke = (e, t) => {
      let n = v.core;
      return (
        e > n.x0 &&
        e < n.x1 &&
        t > n.z0 &&
        t < n.z1 &&
        !(Math.abs(t) < 2) &&
        !(Math.abs(e) < 1)
      );
    };
  for (let e = 0; e < Ce; e++)
    for (let t = 0; t < K; t++) {
      let n = U.x0 + we * (e + 0.5),
        r = U.z0 + Te * (t + 0.5),
        i = e * K + t;
      if (ke(n, r)) {
        q.setMatrixAt(i, z);
        continue;
      }
      ((Oe[i] = 1),
        F.makeTranslation(n, v.ceil - 0.009, r),
        q.setMatrixAt(i, F));
    }
  ((q.instanceMatrix.needsUpdate = !0), b.add(q));
  {
    let e = S(new n(1, 0.012, 1)),
      t = S(new u({ color: 12170926, roughness: 0.7, metalness: 0.3 })),
      r = [],
      i = [];
    for (let e = 0; e <= Ce; e += 2) r.push(U.x0 + we * e);
    for (let e = 0; e <= K; e++) i.push(U.z0 + Te * e);
    let a = new _(e, t, r.length + i.length),
      o = 0;
    for (let e of r)
      (F.compose(L.set(e, v.ceil - 0.02, 0), I.identity(), R.set(0.024, 1, G)),
        a.setMatrixAt(o++, F));
    for (let e of i)
      (F.compose(L.set(0, v.ceil - 0.02, e), I.identity(), R.set(W, 1, 0.024)),
        a.setMatrixAt(o++, F));
    ((a.instanceMatrix.needsUpdate = !0), b.add(a));
  }
  {
    let e = [];
    for (let t = U.x0 + 2.1; t < U.x1 - 1; t += 3.6)
      for (let n = U.z0 + 1.8; n < U.z1 - 1; n += 3.6) {
        let r = v.core;
        (t > r.x0 - 0.5 &&
          t < r.x1 + 0.5 &&
          n > r.z0 - 0.5 &&
          n < r.z1 + 0.5 &&
          !(Math.abs(n) < 2)) ||
          e.push({ x: t, z: n });
      }
    let t = S(new n(0.6, 0.03, 1.2)),
      r = S(new u({ color: 13225168, roughness: 0.35, metalness: 0.2 })),
      i = new _(t, r, e.length);
    (e.forEach((e, t) => {
      (F.makeTranslation(e.x, v.ceil - 0.012, e.z), i.setMatrixAt(t, F));
    }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.name = `m34-troffers`),
      b.add(i));
  }
  {
    let e = (e, t, r, i, a, o, s, l = 0.6, d = 0.4) => {
      let f = new c(
        S(new n(i, a, o)),
        S(new u({ color: s, roughness: l, metalness: d })),
      );
      return (f.position.set(e, t + a / 2, r), b.add(f), f);
    };
    e(0, v.slab - 0.28, 0, W + 4, 0.28, G + 4, 4869198, 0.95, 0);
    for (let t of [-G * 0.3, G * 0.3])
      e(0, v.ceil + 0.35, t, W - 2, 0.55, 1.1, 10396840, 0.45, 0.6);
    for (let t of [-W * 0.3, W * 0.3])
      e(t, v.ceil + 0.3, 0, 0.8, 0.45, G - 4, 10396840, 0.45, 0.6);
    for (let t of [-8 * E, 8 * E])
      e(0, v.ceil + 0.95, t, W - 2, 0.1, 0.1, 10697258, 0.6, 0.2);
    for (let t of [-G * 0.42, G * 0.42])
      e(0, v.ceil + 1.05, t, W - 2, 0.08, 0.5, 6975088, 0.6, 0.4);
  }
  let J = v.panes,
    Ae = new Map(J.map((e, t) => [e.id, t])),
    je = S(new n(1, 1, 1)),
    Me = S(
      new u({
        color: 10466239,
        transparent: !0,
        opacity: 0.1,
        roughness: 0.3,
        metalness: 0,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Ne = S(
      new u({
        color: 12176598,
        transparent: !0,
        opacity: 0.075,
        roughness: 0.3,
        metalness: 0,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Pe = S(new h(1, 1)),
    Fe = J.filter((e) => e.ext),
    Ie = J.filter((e) => !e.ext),
    Le = new _(je, Me, Fe.length),
    Re = new _(je, Ne, Ie.length);
  ((Le.renderOrder = 3), (Re.renderOrder = 3));
  let ze = [],
    Be = new Map(),
    Ve = 0;
  for (let e = 0; e < 4; e++) {
    let t = S(ge(e * 977 + 13)),
      n = S(
        new u({
          color: 16054522,
          alphaMap: t,
          transparent: !0,
          depthWrite: !1,
          side: 2,
          roughness: 0.12,
          metalness: 0,
        }),
      ),
      r = new _(Pe, n, 160);
    ((r.renderOrder = 4), (r.frustumCulled = !1));
    for (let e = 0; e < 160; e++) r.setMatrixAt(e, z);
    ze.push(r);
  }
  let He = Array(640).fill(null),
    Ue = new m(),
    We = new m(),
    Ge = new C(0, 0, 1),
    Ke = (e) => {
      for (let t of Be.get(e) ?? []) {
        if (He[t] !== e) continue;
        He[t] = null;
        let n = ze[(t / 160) | 0];
        (n.setMatrixAt(t % 160, z), (n.instanceMatrix.needsUpdate = !0));
      }
      Be.delete(e);
    },
    qe = (e, t, n) => {
      let r = j(e),
        i = r[3] - r[0] > r[5] - r[2],
        a = i ? r[0] : r[2],
        o = i ? r[3] : r[5],
        s = Math.min(o - 0.05, Math.max(a + 0.05, i ? t[0] : t[2])),
        c = Math.min(r[4] - 0.05, Math.max(r[1] + 0.05, t[1])),
        l = (e.ext ? 0.85 : 0.62) + H(n) * 0.45;
      l = Math.min(l, 2 * Math.min(s - a, o - s, c - r[1], r[4] - c) + 0.35);
      let u = Ve++ % 640;
      if (He[u]) {
        let e = Be.get(He[u]);
        e && e.splice(e.indexOf(u), 1);
      }
      ((He[u] = e.id),
        Be.has(e.id) || Be.set(e.id, []),
        Be.get(e.id).push(u),
        Ue.setFromAxisAngle(oe, i ? 0 : Math.PI / 2),
        We.setFromAxisAngle(Ge, H(n * 3 + 1) * V),
        Ue.multiply(We));
      let d = i ? (r[2] + r[5]) / 2 : (r[0] + r[3]) / 2,
        f = H(n * 5) < 0.5 ? -1 : 1;
      F.compose(L.set(i ? s : d, c, i ? d : s), Ue, R.set(l * f, l, 1));
      let p = ze[(u / 160) | 0];
      (p.setMatrixAt(u % 160, F), (p.instanceMatrix.needsUpdate = !0));
    },
    Je = [
      S(
        new u({
          color: 11124682,
          transparent: !0,
          opacity: 0.3,
          roughness: 0.12,
          metalness: 0.15,
          depthWrite: !1,
          side: 2,
        }),
      ),
      S(
        new u({
          color: 12768476,
          transparent: !0,
          opacity: 0.26,
          roughness: 0.12,
          metalness: 0.15,
          depthWrite: !1,
          side: 2,
        }),
      ),
    ],
    Ye = S(
      new u({
        color: 14083822,
        transparent: !0,
        opacity: 0.55,
        roughness: 0.1,
        metalness: 0.2,
        depthWrite: !1,
        side: 2,
      }),
    ),
    Xe = [],
    Ze = (e) => {
      let t = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]) || 1;
      return {
        ax: e.a[0],
        az: e.a[1],
        dx: (e.b[0] - e.a[0]) / t,
        dz: (e.b[1] - e.a[1]) / t,
        y0: e.y0,
      };
    },
    Qe = (e) => {
      let t = Xe[e];
      if (t) {
        for (let e of t) (b.remove(e), e.geometry.dispose());
        Xe[e] = null;
      }
      let n = [[], []],
        r = [],
        i = s();
      for (let t = e * 16; t < Math.min(J.length, (e + 1) * 16); t++) {
        let e = J[t];
        if (N(v, e, i)) continue;
        let a = ae(v, e);
        if (!a) continue;
        let o = M(e),
          s = Ze(e),
          c = o.verts,
          l = n[+!e.ext],
          u = (e) => [
            s.ax + s.dx * c[e * 2],
            s.y0 + c[e * 2 + 1],
            s.az + s.dz * c[e * 2],
          ];
        for (let e = 0; e < o.nt; e++) {
          if (!a.alive[e]) continue;
          let t = o.tris[e * 3],
            n = o.tris[e * 3 + 1],
            i = o.tris[e * 3 + 2];
          l.push(...u(t), ...u(n), ...u(i));
          let d = o.cen[e * 2],
            f = o.cen[e * 2 + 1];
          for (let t = 0; t < 3; t++) {
            let n = o.nb[e * 3 + t];
            if (n < 0 || a.alive[n]) continue;
            let i = o.tris[e * 3 + t],
              l = o.tris[e * 3 + ((t + 1) % 3)],
              p = (e) => {
                let t = d - c[e * 2],
                  n = f - c[e * 2 + 1],
                  r = Math.hypot(t, n) || 1,
                  i = Math.min(0.015, r * 0.4) / r,
                  a = c[e * 2] + t * i,
                  o = c[e * 2 + 1] + n * i;
                return [s.ax + s.dx * a, s.y0 + o, s.az + s.dz * a];
              },
              m = u(i),
              h = u(l),
              g = p(l),
              _ = p(i);
            r.push(...m, ...h, ...g, ...m, ...g, ..._);
          }
        }
      }
      let o = [];
      if (
        (n.forEach((e, t) => {
          if (!e.length) return;
          let n = new a();
          (n.setAttribute(`position`, new te(e, 3)), n.computeVertexNormals());
          let r = new c(n, Je[t]);
          ((r.renderOrder = 3), o.push(r));
        }),
        r.length)
      ) {
        let e = new a();
        (e.setAttribute(`position`, new te(r, 3)), e.computeVertexNormals());
        let t = new c(e, Ye);
        ((t.renderOrder = 4), o.push(t));
      }
      for (let e of o) ((e.name = `m34-broken-glass`), b.add(e));
      Xe[e] = o.length ? o : null;
    };
  x.push({
    dispose() {
      for (let e of Xe) if (e) for (let t of e) t.geometry.dispose();
    },
  });
  let $e = (e, t = 1, n = 0) => {
      let r = j(e),
        i = (r[0] + r[3]) / 2,
        a = (r[1] + r[4]) / 2 - 0.0075,
        o = (r[2] + r[5]) / 2,
        s = r[3] - r[0],
        c = r[4] - r[1] + 0.015,
        l = r[5] - r[2];
      return (
        F.compose(
          L.set(i, a, o),
          I.identity(),
          R.set(Math.max(s, 0.012 * t), c, Math.max(l, 0.012 * t)),
        ),
        F
      );
    },
    et = J.map(() => ({ stage: 0, nb: 0, torn: !1 }));
  (Fe.forEach((e, t) => Le.setMatrixAt(t, $e(e))),
    Ie.forEach((e, t) => Re.setMatrixAt(t, $e(e))),
    Fe.forEach((e, t) => Le.setColorAt(t, new l(1, 1, 1))),
    Ie.forEach((e, t) => Re.setColorAt(t, new l(1, 1, 1))));
  let tt = new Map([
    ...Fe.map((e, t) => [e.id, t]),
    ...Ie.map((e, t) => [e.id, t]),
  ]);
  b.add(Le, Re, ...ze);
  let nt = null,
    rt = [];
  {
    let e = S(new n(1, 1, 1)),
      t = S(new u({ color: 2830131, roughness: 0.5, metalness: 0.6 })),
      r = [];
    for (let e of Fe) {
      let t = j(e),
        n = t[3] - t[0] > t[5] - t[2];
      r.push(
        n
          ? [t[0], T, t[2] + 0.03, 0.07, v.ceil - T, 0.14]
          : [t[0] + 0.03, T, t[2], 0.14, v.ceil - T, 0.07],
      );
    }
    for (let [e, t, n, i] of [
      [0, v.plate.z0, W, 0.16],
      [0, v.plate.z1, W, 0.16],
      [v.plate.x0, 0, 0.16, G],
      [v.plate.x1, 0, 0.16, G],
    ])
      (r.push([e, T, t, n, 0.08, i]),
        r.push([e, v.ceil - 0.08, t, n, 0.16, i]));
    let i = new _(e, t, r.length);
    (r.forEach(([e, t, n, r, a, o], s) => {
      (F.compose(L.set(e, t + a / 2, n), I.identity(), R.set(r, a, o)),
        s < Fe.length && Fe[s].id.split(`-`).pop() % 2 && F.copy(z),
        i.setMatrixAt(s, F),
        s < Fe.length && rt.push(F.clone()));
    }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.castShadow = !0),
      b.add(i),
      (nt = i));
  }
  let it = new Map(Fe.map((e, t) => [e.id, t])),
    at = (e, t) => {
      let n = it.get(e.id);
      n != null &&
        (nt.setMatrixAt(n, t ? z : rt[n]),
        (nt.instanceMatrix.needsUpdate = !0));
    },
    ot = 2400,
    st = S(new h(1, 1)),
    ct = S(
      new w({
        vertexColors: !1,
        side: 2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !0,
      }),
    ),
    Y = new _(st, ct, ot);
  ((Y.frustumCulled = !1), (Y.renderOrder = 5), Y.instanceMatrix.setUsage(e));
  let lt = [];
  for (let e = 0; e < ot; e++) (Y.setMatrixAt(e, z), Y.setColorAt(e, new l(0)));
  b.add(Y);
  let ut = 0,
    X = (
      e,
      t,
      {
        size: n = 0.05,
        life: r = 2,
        color: i = 16777215,
        drag: a = 0.3,
        grav: o = 9.8,
        flutter: s = 0,
        spin: c = 6,
        floorY: u = T,
        stretch: d = 1,
      } = {},
    ) => {
      let f = ut++ % ot;
      ((lt[f] = {
        p: e.slice(),
        v: t.slice(),
        size: n,
        life: r,
        age: 0,
        drag: a,
        grav: o,
        flutter: s,
        spin: c,
        rot: [H(f) * V, H(f + 1) * V, 0],
        floorY: u,
        stretch: d,
        col: new l(i),
      }),
        Y.setColorAt(f, lt[f].col));
    },
    dt = new g(),
    ft = (e) => {
      let t = !1;
      for (let n = 0; n < ot; n++) {
        let r = lt[n];
        if (!r) continue;
        if (((t = !0), (r.age += e), r.age > r.life)) {
          (Y.setMatrixAt(n, z), (lt[n] = null));
          continue;
        }
        let i = Math.exp(-r.drag * e);
        ((r.v[0] *= i),
          (r.v[2] *= i),
          (r.v[1] = r.v[1] * i - r.grav * e),
          r.flutter &&
            ((r.v[0] += Math.sin(B * 3 + n) * r.flutter * e),
            (r.v[2] += Math.cos(B * 2.3 + n * 1.7) * r.flutter * e)));
        for (let t = 0; t < 3; t++) r.p[t] += r.v[t] * e;
        (r.p[1] < r.floorY + 0.01 &&
          r.p[0] > v.plate.x0 &&
          r.p[0] < v.plate.x1 &&
          r.p[2] > v.plate.z0 &&
          r.p[2] < v.plate.z1 &&
          ((r.p[1] = r.floorY + 0.01),
          (r.v = [0, 0, 0]),
          (r.flutter = 0),
          (r.spin = 0),
          (r.rot[0] = -Math.PI / 2)),
          (r.rot[0] += r.spin * e),
          (r.rot[1] += r.spin * 0.7 * e),
          dt.set(r.rot[0], r.rot[1], r.rot[2]),
          I.setFromEuler(dt));
        let a = Math.min(1, (r.life - r.age) / 0.4);
        (F.compose(
          L.fromArray(r.p),
          I,
          R.set(r.size * a, r.size * r.stretch * a, 1),
        ),
          Y.setMatrixAt(n, F));
      }
      t &&
        ((Y.instanceMatrix.needsUpdate = !0),
        Y.instanceColor && (Y.instanceColor.needsUpdate = !0));
    },
    pt = (e, t, n, r) => {
      let i = j(e),
        a = i[3] - i[0] > i[5] - i[2],
        o = a ? [0, 0, 1] : [1, 0, 0];
      for (let e = 0; e < n; e++) {
        let s = H(e * 3 + B * 100),
          c = H(e * 7 + 1 + B * 50),
          l =
            t && e < n * 0.4
              ? [
                  t[0] + (H(e) - 0.5) * 0.5,
                  t[1] + (H(e + 9) - 0.5) * 0.5,
                  t[2] + (H(e + 5) - 0.5) * 0.5,
                ]
              : [
                  a ? i[0] + (i[3] - i[0]) * s : i[0],
                  i[1] + (i[4] - i[1]) * c,
                  a ? i[2] : i[2] + (i[5] - i[2]) * s,
                ],
          u = r ?? (H(e + 2) > 0.5 ? 1 : -1),
          d = 1.2 + H(e * 11) * 3.2;
        X(
          l,
          [
            o[0] * u * d + (H(e * 13) - 0.5),
            H(e * 17) * 1.5 - 0.5,
            o[2] * u * d + (H(e * 19) - 0.5),
          ],
          {
            size: 0.015 + H(e * 23) * 0.045,
            life: r ? 6 : 2.5 + H(e) * 1.5,
            color: 6124674,
            drag: 0.15,
            spin: 8 + H(e) * 10,
            stretch: 0.6 + H(e * 29),
          },
        );
      }
    },
    mt = (e) =>
      e.face === `north`
        ? -1
        : e.face === `south`
          ? 1
          : e.face === `west`
            ? -1
            : e.face === `east`
              ? 1
              : null,
    ht = (e) => {
      let t = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]),
        n = e.y1 - e.y0;
      return [[t / 2, n / 2, Math.hypot(t, n) / 2, 0]];
    },
    gt = (e, t) => {
      let n = J[e],
        r = Ze(n);
      for (let e of t) {
        let t = [r.ax + r.dx * e[0], r.y0 + e[1], r.az + r.dz * e[0]],
          i = Math.round(
            Math.min(110, 18 + e[2] * e[2] * 22) * (n.ext ? 1 : 0.7),
          ),
          a = j(n),
          o = a[3] - a[0] > a[5] - a[2] ? [0, 0, 1] : [1, 0, 0],
          s = n.ext ? mt(n) : null;
        for (let n = 0; n < i; n++) {
          let i = H(n * 3 + B * 100) * V,
            a = e[2] * Math.sqrt(H(n * 7 + 1 + B * 50)) * 0.8,
            c = s ?? (H(n + 2) > 0.5 ? 1 : -1),
            l = 0.8 + H(n * 11) * 2.8,
            u = [
              t[0] + r.dx * Math.cos(i) * a,
              t[1] + Math.sin(i) * a,
              t[2] + r.dz * Math.cos(i) * a,
            ];
          X(
            u,
            [
              o[0] * c * l + (H(n * 13) - 0.5),
              H(n * 17) * 1.2 - 0.6,
              o[2] * c * l + (H(n * 19) - 0.5),
            ],
            {
              size: 0.02 + H(n * 23) * 0.07,
              life: s ? 6 : 2.5 + H(n) * 1.5,
              color: 6124674,
              drag: 0.15,
              spin: 8 + H(n) * 10,
              stretch: 0.6 + H(n * 29),
            },
          );
        }
        se()?.play(`glass_shatter`, {
          pos: t,
          volume: Math.min(1, (n.ext ? 0.7 : 0.5) + e[2] * 0.25),
          size: Math.min(1.6, 0.6 + e[2] * 0.5),
        });
      }
    },
    _t = ye(v, S);
  b.add(_t.root);
  let vt = (e) => {
      let t = J[e],
        n = j(t),
        r = [
          (n[0] + n[3]) / 2,
          (v.crane.armY0 + v.crane.armY1) / 2,
          (n[2] + n[5]) / 2,
        ],
        i = mt(t),
        a = n[3] - n[0] > n[5] - n[2],
        o = a ? 0 : -i,
        s = a ? -i : 0;
      pt(t, null, 150, -i);
      for (let e = 0; e < 30; e++)
        X(
          [r[0] + o * 0.1, T + 0.2 + H(e + B) * 3.5, r[2] + s * 0.1],
          [
            o * (3 + H(e * 7 + B) * 5) + (H(e * 3 + B) - 0.5) * 2,
            H(e * 5 + B) * 2,
            s * (3 + H(e * 11 + B) * 5) + (H(e * 9 + B) - 0.5) * 2,
          ],
          {
            size: 0.06 + H(e) * 0.1,
            life: 5,
            color: 7177104,
            drag: 0.2,
            spin: 9,
            stretch: 0.7,
          },
        );
      ce()?.play(`glass_shatter`, { pos: r, volume: 1.25, size: 1.6 });
    },
    yt = (e, t, n) => {
      let r = n.bx - n.ax,
        i = n.bz - n.az,
        a = r * r + i * i || 1,
        o = Math.max(0, Math.min(1, ((e - n.ax) * r + (t - n.az) * i) / a));
      return Math.hypot(e - (n.ax + r * o), t - (n.az + i * o));
    },
    bt = -1,
    xt = -99,
    St = 2,
    Ct = 0,
    wt = 0,
    Tt = 0,
    Et = 0,
    Dt = 0,
    Z = null;
  v.plate.x1;
  let Ot = 20 * E;
  new l(9209210);
  let kt = S(new h(1, 1)),
    At = new ee(new Float32Array(280), 1);
  kt.setAttribute(`aAlpha`, At);
  let jt = S(
      new p({
        transparent: !0,
        depthWrite: !1,
        uniforms: { uColor: { value: new l(9077624) } },
        vertexShader: `attribute float aAlpha;varying float vA;varying vec2 vUv;void main(){vUv=uv;vA=aAlpha;vec4 c=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);float s=length(instanceMatrix[0].xyz);c.xy+=position.xy*s;gl_Position=projectionMatrix*c;}`,
        fragmentShader: `uniform vec3 uColor;varying float vA;varying vec2 vUv;void main(){float d=length(vUv-.5)*2.;float a=1.-smoothstep(.15,1.,d);gl_FragColor=vec4(uColor,a*a*vA);}`,
      }),
    ),
    Mt = new _(kt, jt, 280);
  ((Mt.frustumCulled = !1), (Mt.renderOrder = 6), (Mt.name = `m34-crane-dust`));
  for (let e = 0; e < 280; e++) Mt.setMatrixAt(e, z);
  b.add(Mt);
  let Nt = [],
    Pt = 0,
    Ft = (e, t, n, r, i) => {
      Nt[Pt++ % 280] = {
        p: e.slice(),
        v: t.slice(),
        size: n,
        life: r,
        age: 0,
        alpha: i,
      };
    },
    It = (e, t) => {
      let n = !1;
      for (let t = 0; t < 280; t++) {
        let r = Nt[t];
        if (!r) continue;
        if (((n = !0), (r.age += e), r.age > r.life)) {
          ((Nt[t] = null), Mt.setMatrixAt(t, z), (At.array[t] = 0));
          continue;
        }
        let i = Math.exp(-0.12 * e);
        ((r.v[0] *= i), (r.v[2] *= i), (r.v[1] *= Math.exp(-0.6 * e)));
        for (let t = 0; t < 3; t++) r.p[t] += r.v[t] * e;
        r.p[1] = Math.min(v.ceil - 0.8, Math.max(T + 0.6, r.p[1]));
        let a = r.size * (1 + (r.age / r.life) * 1.6);
        (F.makeScale(a, a, a).setPosition(r.p[0], r.p[1], r.p[2]),
          Mt.setMatrixAt(t, F),
          (At.array[t] =
            r.alpha *
            Math.min(1, r.age / 1.2) *
            Math.min(1, (r.life - r.age) / 8)));
      }
      (n && ((Mt.instanceMatrix.needsUpdate = !0), (At.needsUpdate = !0)),
        jt.uniforms.uColor.value.setHex(9077624).multiplyScalar(1 - 0.75 * t));
    },
    Lt = S(
      new w({
        color: 8222572,
        transparent: !0,
        opacity: 0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
      }),
    ),
    Rt = new c(S(new h(1, 1)), Lt);
  ((Rt.renderOrder = 999),
    (Rt.frustumCulled = !1),
    (Rt.visible = !1),
    b.add(Rt));
  let zt = new C(),
    Bt = new m(),
    Vt = (e, n) => {
      ((Rt.visible = e > 0.005),
        Rt.visible &&
          (t.camera.getWorldQuaternion(Bt),
          zt.set(0, 0, -0.25).applyQuaternion(Bt),
          Rt.position.copy($).add(zt),
          Rt.quaternion.copy(Bt),
          Rt.scale.set(4, 4, 1),
          (Lt.opacity = e),
          Lt.color.setHex(8222572).multiplyScalar(1 - 0.7 * n)));
    },
    Ht = v.fabric ?? [],
    Ut = new Uint8Array(Ht.length),
    Wt = new _(
      S(new n(1, 1, 1)),
      S(new u({ color: 9078653, roughness: 0.95, flatShading: !0 })),
      Math.max(1, Ht.length),
    );
  ((Wt.name = `m34-fallen-partitions`),
    (Wt.castShadow = !0),
    (Wt.receiveShadow = !0));
  for (let e = 0; e < Ht.length; e++) Wt.setMatrixAt(e, z);
  ((Wt.instanceMatrix.needsUpdate = !0), b.add(Wt));
  let Gt = () => {
      let e = s(),
        n = t.modules.get(`demo`),
        r = !1;
      for (let t = 0; t < Ht.length; t++) {
        let i = Ht[t],
          a = +!!O(v, i, e);
        if (a === Ut[t]) continue;
        if (((Ut[t] = a), (r = !0), n?.setObjectVisible?.(i.object, !a), !a)) {
          Wt.setMatrixAt(t, z);
          continue;
        }
        let [o, s, c, l] = i.box,
          u = c - o > l - s,
          d = u ? c - o : l - s,
          f = H(t * 7 + e) < 0.5 ? -1 : 1,
          p = (o + c) / 2 + (u ? 0 : f * 0.72 * E),
          m = (s + l) / 2 + (u ? f * 0.72 * E : 0);
        if (
          (I.setFromAxisAngle(oe, (H(t * 3 + e) - 0.5) * 0.35),
          F.compose(
            L.set(p, T + 0.05, m),
            I,
            R.set(u ? d : 1.45 * E, 0.07, u ? 1.45 * E : d),
          ),
          Wt.setMatrixAt(t, F),
          B > 1)
        ) {
          for (let e = 0; e < 12; e++)
            X(
              [
                p + (H(e + t) - 0.5) * d * (u ? 1 : 0.2),
                T + 0.3 + H(e * 3 + t) * 0.9,
                m + (H(e * 5 + t) - 0.5) * d * (u ? 0.2 : 1),
              ],
              [
                (H(e * 7 + t) - 0.5) * 3,
                0.6 + H(e * 11 + t) * 1.4,
                (H(e * 13 + t) - 0.5) * 3,
              ],
              {
                size: 0.05 + H(e) * 0.09,
                life: 2.5,
                color: 6249042,
                drag: 0.5,
                grav: 9.8,
                spin: 8,
              },
            );
          for (let e = 0; e < 3; e++)
            Ft(
              [p, T + 1 + H(e + t) * 0.8, m],
              [(H(e * 3 + t) - 0.5) * 1.6, 0.3, (H(e * 5 + t) - 0.5) * 1.6],
              2 + H(e) * 1.5,
              22 + H(e * 7 + t) * 10,
              0.3,
            );
          if (B > Et) {
            Et = B + 0.12;
            let e = ce();
            (e?.play(`impact_wood`, {
              pos: [p, T + 0.8, m],
              volume: 1,
              pitch: 0.7 + H(t) * 0.2,
            }),
              e?.play(`impact_metal`, {
                pos: [p, T + 0.8, m],
                volume: 0.7,
                pitch: 0.45,
              }));
          }
        }
      }
      r && (Wt.instanceMatrix.needsUpdate = !0);
    },
    Kt = (v.sweepables ?? []).filter((e) => !Ht.some((t) => t.id === e.id)),
    qt = new Uint8Array(Kt.length),
    Jt = () => {
      let e = s(),
        n = t.modules.get(`demo`);
      for (let t = 0; t < Kt.length; t++) {
        let r = Kt[t],
          i = +(ie(v, r.id, e) <= e);
        if (
          i === qt[t] ||
          ((qt[t] = i), n?.setObjectVisible?.(r.object, !i), !i || B <= 1)
        )
          continue;
        let [a, o, s, c] = r.box,
          l = (a + s) / 2,
          u = (o + c) / 2;
        for (let e = 0; e < 22; e++)
          X(
            [
              l + (H(e + t) - 0.5) * (s - a),
              T + 0.3 + H(e * 3 + t) * 2.4,
              u + (H(e * 5 + t) - 0.5) * (c - o),
            ],
            [
              (H(e * 7 + t) - 0.5) * 6,
              1 + H(e * 11 + t) * 2.5,
              (H(e * 13 + t) - 0.5) * 6,
            ],
            {
              size: 0.07 + H(e) * 0.18,
              life: 3,
              color: 10130570,
              drag: 0.3,
              grav: 9.8,
              spin: 9,
            },
          );
        for (let e = 0; e < 3; e++)
          Ft(
            [l, T + 1.2, u],
            [(H(e + t) - 0.5) * 2, 0.3, (H(e * 3 + t) - 0.5) * 2],
            2.6,
            26,
            0.36,
          );
        if (B > Et) {
          Et = B + 0.1;
          let e = ce();
          (e?.play(`collapse`, { pos: [l, T + 1, u], volume: 0.8 }),
            e?.play(`impact_metal`, {
              pos: [l, T + 1, u],
              volume: 0.8,
              pitch: 0.4,
            }));
        }
      }
    },
    Yt = (e) => S(new w({ color: e, toneMapped: !1 }));
  Se?.lit ?? new y();
  let Xt = [];
  for (let e of [-34, -22, -10, 2, 14, 26, 36])
    for (let t of [-24, -13, 0, 13, 24])
      (Math.abs(e) < 12 && Math.abs(t) < 6) || Xt.push([e * E, t * E]);
  let Zt = Yt(16726566),
    Qt = new _(je, Zt, Xt.length);
  ((Qt.name = `m34-emergency-lights`),
    (Qt.visible = !1),
    (Qt.frustumCulled = !1),
    Xt.forEach(([e, t], n) => {
      (F.compose(
        L.set(e, v.ceil - 0.03, t),
        I.identity(),
        R.set(0.5, 0.05, 0.22),
      ),
        Qt.setMatrixAt(n, F));
    }),
    b.add(Qt));
  let $t = [
      [-34, 0],
      [-22, -13],
      [-22, 13],
      [2, -13],
      [2, 13],
      [14, -24],
      [26, 0],
      [36, 24],
    ].map(([e, t]) => {
      let n = new ne(16726562, 0, 17 * E, 2);
      return (
        n.position.set(e * E, v.ceil - 0.35, t * E),
        (n.castShadow = !1),
        b.add(n),
        n
      );
    }),
    en = new l(16726566),
    tn = new l(16732726),
    nn = { mains: 1, emergency: 0, out: !1 },
    rn,
    an = (e) => {
      ((nn = P(v, e)),
        (Qt.visible = nn.emergency > 0),
        Qt.visible && Zt.color.copy(en).multiplyScalar(nn.emergency));
      for (let e = 0; e < $t.length; e++)
        $t[e].intensity =
          nn.emergency > 0
            ? 16 * nn.emergency * (0.94 + 0.06 * Math.sin(B * 7.3 + e * 1.9))
            : 0;
      if (v.epoch !== rn && ((rn = v.epoch), Se)) {
        let t = e >= k(v) ? A(v, re(v, e)) : null;
        for (let e of Se.groups.values())
          e.node.visible = !(t && yt(e.cx, e.cz, t) < t.r + e.r * 0.7 + 0.6);
      }
    },
    on = (e, n) => {
      ((Ct = Math.max(0, Ct - e * 1.1)), (Dt = Math.max(0, Dt - e / 28)));
      let r = null,
        i = v.plate;
      t.camera.getWorldPosition($);
      let a =
          $.x > i.x0 - 6 &&
          $.x < i.x1 + 6 &&
          $.z > i.z0 - 6 &&
          $.z < i.z1 + 6 &&
          $.y > T - 1 &&
          $.y < v.ceil + 0.5,
        o = (e) => {
          let t = 0,
            n = 1,
            r = [e.ax, e.az],
            a = [e.bx - e.ax, e.bz - e.az],
            o = [i.x0 - 0.3, i.z0 - 0.3],
            s = [i.x1 + 0.3, i.z1 + 0.3];
          for (let e = 0; e < 2; e++) {
            if (Math.abs(a[e]) < 1e-9) {
              if (r[e] < o[e] || r[e] > s[e]) return null;
              continue;
            }
            let i = (o[e] - r[e]) / a[e],
              c = (s[e] - r[e]) / a[e];
            if (i > c) {
              let e = i;
              ((i = c), (c = e));
            }
            if (((t = Math.max(t, i)), (n = Math.min(n, c)), t > n))
              return null;
          }
          return {
            ax: r[0] + a[0] * t,
            az: r[1] + a[1] * t,
            bx: r[0] + a[0] * n,
            bz: r[1] + a[1] * n,
            y: e.y,
            r: e.r,
          };
        };
      if (n.phase === `warn` && B > wt) {
        wt = B + 0.45 + H(Math.floor(B * 9)) * 0.4;
        let e = ce(),
          t = [v.crane.mast[0], T + 1, v.crane.mast[1]];
        (e?.play(`impact_metal`, {
          pos: t,
          volume: 0.9,
          pitch: 0.25 + H(Math.floor(B * 17)) * 0.25,
          open: !0,
        }),
          n.t > -2.6 &&
            n.t < -2.4 &&
            e?.play(`crane_groan`, {
              pos: t,
              volume: 1,
              open: !0,
              pitch: 0.8,
            }));
      }
      if (
        n.phase === `swing` ||
        (n.phase === `jammed` && n.t < v.crane.swings[n.k].in + 0.6)
      ) {
        let e = o(A(v, n));
        if (e) {
          let t = [e.ax, e.y, e.az],
            i = n.dir;
          if (bt !== n.k) {
            ((bt = n.k), (xt = B));
            let e = Math.hypot($.x - t[0], $.z - t[2]);
            ((St = e < 16 ? 0 : e < 36 ? 1 : 2),
              a &&
                ((Ct = [1.5, 1.1, 0.7][St]),
                (Dt = Math.max(Dt, [1, 0.65, 0.4][St]))));
            let r = ce();
            (r?.play(`collapse`, { pos: t, volume: 1 }),
              r?.play(`explosion_wreck`, { pos: t, volume: 1 }),
              r?.play(`impact_metal`, { pos: t, volume: 1, pitch: 0.45 }));
            for (let e = 0; e < 80; e++)
              X(
                [t[0], T + 0.3 + H(e + B) * 4, t[2] + (H(e * 3 + B) - 0.5) * 3],
                [
                  i[0] * (3 + H(e * 5 + B) * 9) + (H(e * 7 + B) - 0.5) * 4,
                  H(e * 7 + B) * 3.5,
                  i[1] * (3 + H(e * 5 + B) * 9) + (H(e * 9 + B) - 0.5) * 4,
                ],
                {
                  size: 0.06 + H(e) * 0.14,
                  life: 3,
                  color: 6249042,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 9,
                },
              );
            for (let e = 0; e < 40; e++)
              Ft(
                [
                  t[0] + i[0] * H(e + B) * 6,
                  T + 0.8 + H(e * 3 + B) * 3,
                  t[2] + i[1] * H(e + B) * 6 + (H(e * 5 + B) - 0.5) * 4,
                ],
                [
                  i[0] * (1.5 + H(e * 7 + B) * 3),
                  0.2 + H(e * 9 + B) * 0.4,
                  i[1] * (1.5 + H(e * 7 + B) * 3) + (H(e * 11 + B) - 0.5) * 3,
                ],
                2.6 + H(e) * 2,
                26 + H(e * 13 + B) * 10,
                0.42,
              );
          }
          for (let t = 0; t < v.props.length; t++) {
            let n = be[t],
              r = xe[t];
            if (
              !n.alive ||
              !r ||
              !n.k ||
              r[3] < Ot ||
              r[1] > T + 2.9 * E ||
              r[4] < T + 0.5 * E
            )
              continue;
            let a = (r[0] + r[3]) / 2,
              o = (r[2] + r[5]) / 2;
            yt(a, o, e) < e.r + 0.9 &&
              fn(
                t,
                [a, (r[1] + r[4]) / 2, o],
                [i[0] * 0.4, 0.5, i[1] * 0.4],
                `pop`,
              );
          }
          if (Se)
            for (let t of Se.groups.values())
              t.node.visible &&
                yt(t.cx, t.cz, e) < e.r + t.r * 0.7 + 0.6 &&
                (t.node.visible = !1);
          for (let t = Math.max(0, Math.floor((Ot - U.x0) / we)); t < Ce; t++)
            for (let n = 0; n < K; n++) {
              let r = t * K + n;
              if (!Oe[r]) continue;
              let i = U.x0 + we * (t + 0.5),
                a = U.z0 + Te * (n + 0.5);
              if (yt(i, a, e) < 1.6 + H(r) * 1.1) {
                ((Oe[r] = 0),
                  q.setMatrixAt(r, z),
                  (q.instanceMatrix.needsUpdate = !0),
                  X(
                    [i, v.ceil - 0.02, a],
                    [(H(r) - 0.5) * 1.5, -0.8, (H(r + 1) - 0.5) * 1.5],
                    {
                      size: 0.55,
                      life: 6,
                      color: 12434098,
                      drag: 0.4,
                      grav: 9.8,
                      spin: 2 + H(r) * 3,
                      stretch: 2,
                      floorY: T + 0.02,
                    },
                  ));
                for (let e = 0; e < 5; e++)
                  X(
                    [i, v.ceil, a],
                    [(H(e + r) - 0.5) * 0.8, -0.2, (H(e * 3 + r) - 0.5) * 0.8],
                    {
                      size: 0.12,
                      life: 4,
                      color: 14209992,
                      drag: 1.6,
                      grav: 0.5,
                      flutter: 0.6,
                      spin: 1,
                    },
                  );
              }
            }
          if (B > Tt) {
            Tt = B + 0.06;
            for (let t = 0; t < 3; t++) {
              let n = H(t + B * 61);
              Ft(
                [
                  e.ax + (e.bx - e.ax) * n,
                  e.y + 0.3 + H(t * 5 + B),
                  e.az + (e.bz - e.az) * n,
                ],
                [(H(t * 7 + B) - 0.5) * 2.6, 0.25, (H(t * 13 + B) - 0.5) * 2.6],
                2.4 + H(t * 3 + B) * 1.5,
                24 + H(t * 9 + B) * 10,
                0.36,
              );
            }
            for (let t = 0; t < 5; t++) {
              let n = H(t + B * 37);
              X(
                [e.ax + (e.bx - e.ax) * n, e.y, e.az + (e.bz - e.az) * n],
                [
                  (H(t * 7 + B) - 0.5) * 5,
                  1 + H(t * 3 + B) * 2,
                  (H(t * 13 + B) - 0.5) * 5,
                ],
                {
                  size: 0.05 + H(t) * 0.1,
                  life: 2,
                  color: 6249042,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 9,
                },
              );
            }
            for (let n = 0; n < 9; n++)
              X(
                [t[0], e.y + (H(n * 3 + B) - 0.5) * 1.6, t[2]],
                [
                  i[0] * (1 + H(n + B * 7) * 3) + (H(n * 5 + B) - 0.5) * 3,
                  H(n * 3 + B) * 2,
                  i[1] * (1 + H(n + B * 7) * 3) + (H(n * 9 + B) - 0.5) * 3,
                ],
                {
                  size: 0.025,
                  life: 0.5 + H(n) * 0.4,
                  color: 16760928,
                  drag: 0.6,
                  grav: 9.8,
                  spin: 0,
                  stretch: 3.5,
                },
              );
          }
          if (B > wt) {
            wt = B + 0.18;
            let e = ce();
            (e?.play(`impact_metal`, {
              pos: t,
              volume: 1,
              pitch: 0.4 + H(Math.floor(B * 50)) * 0.3,
            }),
              H(Math.floor(B * 31)) < 0.4 &&
                e?.play(`spark_zap`, { pos: t, volume: 0.8 }));
          }
          r = e;
        }
      }
      let s = B - xt,
        c = H(Math.floor(B * 13)) < 0.5 ? 1 : 0.15,
        l = 0;
      if (
        (a &&
          ((l =
            St === 0
              ? s < 2.8
                ? 1
                : s < 3.8
                  ? c
                  : 0
              : St === 1
                ? s < 1.7
                  ? c * 0.8
                  : 0
                : s < 0.7
                  ? c * 0.6
                  : 0),
          r && yt($.x, $.z, r) < 9 && (l = Math.max(l, c * 0.7))),
        r && a)
      ) {
        let e = yt($.x, $.z, r);
        e < 10 ? (Dt = Math.max(Dt, 0.9)) : e < 22 && (Dt = Math.max(Dt, 0.55));
      }
      let u = 0,
        d = 0;
      (a && nn.out && ((d = 1 - nn.mains), (u = nn.emergency)),
        sn(l, u, d),
        It(e, Math.max(l, d)),
        Vt(a ? 0.42 * Math.min(1, Dt) ** 1.3 : 0, Math.max(l, d)));
      let f = t.modules.get(`player`);
      if (!f?.shakeView || !a) return;
      let p = Ct;
      if (r) {
        let e = yt($.x, $.z, r);
        p += e < 10 ? 1.1 : e < 24 ? 0.55 : 0.22;
      } else n.phase === `warn` && (p += 0.1 * n.wild);
      p > 0.01 && f.shakeView(Math.min(1.5, p));
    },
    sn = (e, n = 0, r = 0) => {
      let i = t.modules.get(`environment`),
        a = i?.hemiLight,
        o = i?.sunLight,
        s = t.camera?.userData;
      if (e < 0.001 && n < 0.001 && r < 0.001) {
        (s?.viewLight && delete s.viewLight,
          (Z &&=
            (a && ((a.intensity = Z.hemi), a.color.copy(Z.sky)),
            o && (o.intensity = Z.sun),
            (Q.intensity = Z.fill),
            Q.color.copy(Z.fillCol),
            null)));
        return;
      }
      if (
        ((Z ||= {
          hemi: a?.intensity ?? 0,
          sky: a?.color.clone() ?? new l(),
          sun: o?.intensity ?? 0,
          fill: Q.intensity,
          fillCol: Q.color.clone(),
        }),
        a &&
          ((a.intensity = Z.hemi * (1 - Math.max(0.88 * e, 0.95 * r))),
          a.color.copy(Z.sky).lerp(tn, n * 0.35)),
        o && (o.intensity = Z.sun * (1 - Math.max(0.9 * e, 0.97 * r))),
        (Q.intensity = Z.fill * (1 - Math.max(0.93 * e, 0.99 * r))),
        Q.color.copy(Z.fillCol).lerp(tn, n * 0.5),
        s)
      ) {
        let t = (s.viewLight ??= { scale: 1, tint: tn, tintAmount: 0 });
        ((t.scale = Math.max(1 - Math.max(0.88 * e, 0.95 * r), 0.14 * n * r)),
          (t.tintAmount = n * r * 0.8));
      }
    },
    Q = new f(16774890, 1.1);
  (Q.position.set(12, T + 40, 8),
    Q.target.position.set(0, T, 0),
    (Q.castShadow = !1),
    b.add(Q, Q.target));
  let $ = new C(),
    cn = [],
    ln = (e, n) => cn.push(t.events.on(e, n)),
    un = () => {
      let e = s(),
        t = 0,
        n = new Set();
      for (let r = 0; r < J.length; r++) {
        let i = J[r],
          a = et[r],
          o = i.ext ? D.ext : D.int,
          s = v.hits.get(i.id) ?? 0,
          c = v.breaks?.get(i.id),
          u = c?.length ?? 0,
          d = N(v, i, e),
          f = s <= 0 ? 0 : Math.min(3, 1 + Math.floor((s / o) * 3));
        if (a.stage === f && a.nb === u && a.torn === d) continue;
        let p = i.ext ? Le : Re,
          m = tt.get(i.id),
          h = d || u > 0;
        (p.setMatrixAt(m, h ? z : $e(i)),
          (p.instanceMatrix.needsUpdate = !0),
          h ||
            (p.setColorAt(m, new l().setScalar(1 + f * 0.16)),
            p.instanceColor && (p.instanceColor.needsUpdate = !0)),
          (h || f <= 0) && Ke(i.id),
          i.ext && d !== a.torn && at(i, d),
          (u !== a.nb || d !== a.torn) && n.add((r / 16) | 0),
          B > 1 && d && !a.torn
            ? (vt(r), t++)
            : B > 1 &&
              !d &&
              u > a.nb &&
              (gt(r, a.nb === 0 ? ht(i) : c.slice(a.nb)), t++),
          (a.stage = f),
          (a.nb = u),
          (a.torn = d));
      }
      for (let e of n) Qe(e);
      return t;
    };
  (ln(`demo:meridian`, () => {
    (un(), Gt());
  }),
    ln(`demo:meridianGlass`, (e) => {
      let t = Ae.get(e?.id);
      if (t == null) return;
      let n = J[t];
      if (e.point) {
        se()?.play(`impact_glass`, { pos: e.point, volume: 0.7 });
        for (let t = 0; t < 5; t++)
          X(
            e.point,
            [
              (H(t + B) - 0.5) * 2,
              H(t * 3 + B) * 1.4,
              (H(t * 7 + B) - 0.5) * 2,
            ],
            { size: 0.025, life: 0.8, color: 14741759, spin: 12 },
          );
      }
      (e.point &&
        !e.breaks?.length &&
        !N(v, n, s()) &&
        qe(n, e.point, (e.hits | 0) * 131 + t * 7 + Math.floor(B * 10)),
        un());
    }));
  let dn = (e, t, n, r) => {
    let i = 0,
      a = n;
    for (let n = 0; n < 3; n++) {
      if (Math.abs(t[n]) < 1e-9) {
        if (e[n] < r[n] || e[n] > r[n + 3]) return -1;
        continue;
      }
      let o = (r[n] - e[n]) / t[n],
        s = (r[n + 3] - e[n]) / t[n];
      if (o > s) {
        let e = o;
        ((o = s), (s = e));
      }
      if (((i = Math.max(i, o)), (a = Math.min(a, s)), i > a)) return -1;
    }
    return i;
  };
  (ln(`weapon:fire`, (e) => {
    if (!e?.origin || !e?.dir) return;
    let t = (e.dist ?? 200) + 0.3;
    (e.origin[0], e.origin[2]);
    for (let n = 0; n < v.props.length; n++) {
      let r = be[n];
      if (!r.alive || !me[r.kind] || !xe[n]) continue;
      let i = dn(e.origin, e.dir, t, xe[n]);
      i < 0 ||
        fn(
          n,
          e.origin.map((t, n) => t + e.dir[n] * i),
          e.dir,
        );
    }
  }),
    ln(`explosion`, (e) => {
      if (!Array.isArray(e?.pos)) return;
      let t = e.pos,
        n = Math.max(3, Math.min(7, e.radius ?? 4));
      (t[0], t[2]);
      for (let e = 0; e < v.props.length; e++) {
        let r = be[e];
        if (!r.alive || !me[r.kind]) continue;
        let i = xe[e],
          a = [(i[0] + i[3]) / 2, (i[1] + i[4]) / 2, (i[2] + i[5]) / 2];
        Math.hypot(a[0] - t[0], a[1] - t[1], a[2] - t[2]) < n * 0.7 &&
          fn(e, a, [a[0] - t[0], 0.5, a[2] - t[2]]);
      }
      if (t[1] > T - 1 && t[1] < v.slab + 1)
        for (let e = 0; e < Ce; e++)
          for (let r = 0; r < K; r++) {
            let i = e * K + r;
            if (!Oe[i]) continue;
            let a = U.x0 + we * (e + 0.5),
              o = U.z0 + Te * (r + 0.5);
            if (
              Math.hypot(a - t[0], o - t[2], (v.ceil - t[1]) * 0.6) <
                n * (0.55 + H(i) * 0.45) &&
              ((Oe[i] = 0),
              q.setMatrixAt(i, z),
              (q.instanceMatrix.needsUpdate = !0),
              X(
                [a, v.ceil - 0.02, o],
                [
                  (a - t[0]) * 0.3 + (H(i) - 0.5),
                  -0.5,
                  (o - t[2]) * 0.3 + (H(i + 1) - 0.5),
                ],
                {
                  size: 0.55,
                  life: 5,
                  color: 12434098,
                  drag: 0.4,
                  grav: 9.8,
                  spin: 2 + H(i) * 3,
                  stretch: 2,
                  floorY: T + 0.02,
                },
              ),
              H(i * 7) < 0.3)
            )
              for (let e = 0; e < 4; e++)
                X(
                  [a, v.ceil, o],
                  [(H(e + i) - 0.5) * 0.6, -0.2, (H(e * 3 + i) - 0.5) * 0.6],
                  {
                    size: 0.04,
                    life: 3,
                    color: 15262936,
                    drag: 1.5,
                    grav: 1.2,
                    flutter: 0.8,
                    spin: 1,
                  },
                );
          }
    }));
  function fn(e, t, n, r) {
    let i = be[e],
      a = v.props[e],
      o = me[i.kind] ?? r;
    i.alive = !1;
    let { k: s, j: c } = i,
      l = Math.hypot(n[0], n[2]) || 1,
      u = n[0] / l,
      d = n[2] / l;
    if (o === `screen` || o === `pop`) {
      if (
        (I.setFromEuler(new g(o === `screen` ? -1.2 : -1.5, a.yaw, 0, `YXZ`)),
        F.compose(
          L.set(a.x + u * 0.15, a.y, a.z + d * 0.15),
          I,
          R.set(a.s, a.s, a.s),
        ),
        s.mesh.setMatrixAt(c, F),
        (s.mesh.instanceMatrix.needsUpdate = !0),
        s.glow &&
          (s.glow.setMatrixAt(c, z), (s.glow.instanceMatrix.needsUpdate = !0)),
        o === `screen`)
      ) {
        for (let n = 0; n < 14; n++)
          X(
            t,
            [
              u * 0.5 + (H(n + e) - 0.5) * 2.5,
              1 + H(n * 3 + e) * 2,
              d * 0.5 + (H(n * 5 + e) - 0.5) * 2.5,
            ],
            {
              size: 0.02,
              life: 0.5 + H(n) * 0.4,
              color: 16762976,
              drag: 0.8,
              grav: 9.8,
              spin: 0,
              stretch: 3,
            },
          );
        (se()?.play(`impact_glass`, { pos: t, volume: 0.5, pitch: 0.7 }),
          se()?.play(`spark_zap`, { pos: t, volume: 0.5 }));
      } else (r ? ce : se)()?.play(`impact_wood`, { pos: t, volume: 0.5 });
    } else
      (s.mesh.setMatrixAt(c, z),
        (s.mesh.instanceMatrix.needsUpdate = !0),
        s.glow &&
          (s.glow.setMatrixAt(c, z), (s.glow.instanceMatrix.needsUpdate = !0)));
    if (o === `paper`) {
      let n =
        i.kind === `paper-pile`
          ? 110
          : i.kind === `books`
            ? 30
            : i.kind === `magazines`
              ? 45
              : 60;
      for (let r = 0; r < n; r++)
        X(
          [
            t[0] + (H(r) - 0.5) * 0.3,
            t[1] + H(r + 1) * 0.2,
            t[2] + (H(r + 2) - 0.5) * 0.3,
          ],
          [
            u * 1.5 + (H(r * 3 + e) - 0.5) * 2.6,
            1.2 + H(r * 7 + e) * 2.2,
            d * 1.5 + (H(r * 11 + e) - 0.5) * 2.6,
          ],
          {
            size: i.kind === `books` ? 0.14 : 0.2,
            life: 9 + H(r) * 6,
            color:
              i.kind === `books`
                ? [7023142, 2770022, 4086328][r % 3]
                : H(r * 13) < 0.1
                  ? 15917168
                  : 16052970,
            drag: 2.2,
            grav: 1.6,
            flutter: 2.2,
            spin: 2 + H(r) * 3,
            stretch: 1.3,
          },
        );
      se()?.play(`paper_burst`, { pos: t, volume: 0.6 });
    }
    if (o === `water` || o === `spray`) {
      let n = {
        i: e,
        pos: t.slice(),
        dir: o === `spray` ? [0, -1, 0] : [-u, 0, -d],
        until: B + (o === `spray` ? 9 : 6),
        kind: o,
        col: i.kind === `extinguisher` ? 16053492 : 12574964,
      };
      (pn.push(n),
        se()?.play(o === `spray` ? `water_spray` : `water_burst`, {
          pos: t,
          volume: 0.6,
        }));
    }
  }
  let pn = [],
    mn = (e) => {
      for (let t = pn.length - 1; t >= 0; t--) {
        let n = pn[t];
        if (B > n.until) {
          pn.splice(t, 1);
          continue;
        }
        let r = n.kind === `spray` ? 55 : 35,
          i = Math.ceil(r * e);
        for (let e = 0; e < i; e++) {
          let t = H(e + B * 977),
            r =
              n.kind === `spray`
                ? [
                    (H(e * 3 + B * 13) - 0.5) * 3.4,
                    -1.5 - t * 2,
                    (H(e * 5 + B * 7) - 0.5) * 3.4,
                  ]
                : [
                    n.dir[0] * 2.2 + (t - 0.5) * 0.6,
                    0.6 + H(e * 9 + B) * 0.6,
                    n.dir[2] * 2.2 + (H(e * 2 + B) - 0.5) * 0.6,
                  ];
          X(n.pos, r, {
            size: 0.025 + t * 0.02,
            life: 1.2,
            color: n.col,
            drag: 0.2,
            grav: 9.8,
            spin: 0,
            stretch: 2.5,
          });
        }
      }
    },
    hn = 2,
    gn = 0,
    _n = () => {
      t.camera.getWorldPosition($);
      let e = v.plate;
      if ($.x < e.x0 || $.x > e.x1 || $.z < e.z0 || $.z > e.z1) return 1;
      let n = 0;
      for (let e = 0; e < J.length; e++) {
        if (!J[e].ext || !et[e].broken) continue;
        let t = j(J[e]),
          r = Math.max(t[0] - $.x, 0, $.x - t[3]),
          i = Math.max(t[2] - $.z, 0, $.z - t[5]);
        n = Math.max(n, Math.max(0, 1 - Math.hypot(r, i) / 14) ** 1.6 * 0.75);
      }
      return Math.max(0.035, n);
    },
    vn = () => {
      let e = _n(),
        t = se();
      if (
        t &&
        (B > gn &&
          ((gn = B + 5.2),
          t.play(`city_traffic`, { local: !0, volume: 0.5 * e })),
        B > hn)
      ) {
        let n = H(Math.floor(B * 10));
        hn = B + 1.4 + H(Math.floor(B * 7)) * 4.5;
        let r =
          n < 0.55
            ? `city_horn`
            : n < 0.72
              ? `city_siren`
              : n < 0.86
                ? `city_brake`
                : `city_horn`;
        t.play(r, {
          local: !0,
          volume: (r === `city_siren` ? 0.55 : 0.8) * e,
          pitch: 0.9 + H(Math.floor(B * 3)) * 0.25,
        });
      }
    },
    yn = null;
  try {
    yn = fe(t, b, v, s);
  } catch (e) {
    t.warn?.(`meridian helicopters failed: ` + e.message);
  }
  let bn = 0,
    xn = -1,
    Sn = 0;
  return {
    group: b,
    update(e) {
      ((e = Math.min(e || 0, 0.1)), (B += e));
      let t = s();
      an(t);
      let n = re(v, t);
      (_t.update(n, B),
        on(e, n),
        n.phase === `warn` &&
          n.k !== xn &&
          ((xn = n.k),
          ce()?.play(`crane_groan`, {
            pos: [v.crane.mast[0], T + 2, v.crane.mast[1]],
            volume: 1,
            open: !0,
          })),
        B > bn && ((bn = B + 0.1), un(), Gt(), Jt()),
        B > Sn && ((Sn = B + 0.25), vn()),
        yn?.update(e),
        mn(e),
        ft(e));
    },
    stats() {
      return {
        props: v.props.length,
        panes: J.length,
        broken: et.filter((e) => e.broken).length,
        particles: lt.filter(Boolean).length,
        tiles: Oe.reduce((e, t) => e + t, 0),
        decor: Se?.stats ?? null,
      };
    },
    dispose() {
      (sn(0), Se?.dispose(), yn?.dispose());
      for (let e of cn) e?.();
      r.remove(b);
      for (let e of x) e.dispose?.();
      (_t.dispose(), Q.dispose());
    },
  };
}
