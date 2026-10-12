// assets__ui-D46k2G3Q 15 — math
// Lines 5846-6792 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Br(t, r, { stage: i }) {
  let a = ee(),
    o = r.appendChild(document.createElement(`canvas`));
  ((o.className = `armory-room`), o.setAttribute(`aria-hidden`, `true`));
  let s = r.appendChild(document.createElement(`div`));
  ((s.className = `armory-room-shade`),
    (o.hidden = s.hidden = !0),
    (o.__view = null));
  let c = Ye(t.assets),
    u = null,
    d,
    p,
    m,
    y = null,
    x = null,
    w = null,
    E = c.scenes,
    O = null,
    j = !1,
    P = !1,
    F = 0,
    te = 0,
    I = null,
    ne = !1,
    ie = ``,
    ae = ``,
    oe = !1,
    se = new Map(),
    ce = [],
    le = zr(t),
    ue = nr(),
    R = (o.__view = {
      yaw: 0,
      pitch: 0,
      zoom: 1,
      focus: null,
      drag: !1,
      lastYaw: 0,
      idle: 99,
      phase: 0.35,
      curPitch: 0,
      curZoom: 1,
      target: new L(0, 1.05, 0),
      want: new L(0, 1.05, 0),
    }),
    z = null;
  async function fe() {
    if (
      (I && (await c.ensure(I.id, { priority: `visible` })),
      (E = await Xe(t.assets)),
      P)
    )
      return;
    ((u = new n({
      canvas: o,
      antialias: !0,
      powerPreference: `high-performance`,
    })),
      u.setPixelRatio(a ? Math.min(devicePixelRatio, 1.5) : 1),
      (u.outputColorSpace = N),
      (u.toneMapping = 4),
      (u.toneMappingExposure = 1.15),
      (u.shadowMap.enabled = !0),
      (u.shadowMap.type = 1),
      (d = new k()),
      (d.background = new v(787973)),
      (d.fog = new C(1312774, 7, 16)));
    let r = new g(u);
    ((d.environment = r.fromScene(new de(), 0.04).texture),
      (d.environmentIntensity = 0.28),
      r.dispose(),
      (p = new e(40, 1, 0.05, 40)),
      (m = he()),
      d.add(new T(16766630, 2756104, 0.55)),
      kr(d, m),
      me(d, m));
    let i = jr(d, m);
    ((x = Mr(d)),
      (w = new _(16773336, 34, 6, 0.34, 0.75, 2)),
      w.position.set(0.35, 3.3, 0.55),
      w.target.position.set(0, 1.02, 0),
      (w.castShadow = !0),
      w.shadow.mapSize.set(1024, 1024),
      (w.shadow.bias = -4e-4),
      (w.shadow.normalBias = 0.01),
      (w.shadow.camera.near = 1),
      (w.shadow.camera.far = 5),
      d.add(w, w.target),
      Ir(d, m, -Tr.x + 0.02, 0, Math.PI / 2),
      Lr(d, m, 0, Tr.z, Math.PI));
    let s = (e, t) =>
        e === `n`
          ? [t, -Tr.z, 0]
          : e === `s`
            ? [t, Tr.z, Math.PI]
            : e === `w`
              ? [-Tr.x, t, Math.PI / 2]
              : [Tr.x, t, -Math.PI / 2],
      l = (e, t, n) => {
        let [r, i, a] = s(t, n);
        return (
          e.position.set(r, 0, i),
          (e.rotation.y = a),
          d.add(e),
          e.updateMatrixWorld(!0),
          e
        );
      },
      f = {
        cabinets: [],
        shelves: [],
        lockers: [],
        boards: [],
        trays: [],
        floor: [],
        counter: i,
      };
    for (let [e, t] of [
      [`n`, -0.87],
      [`n`, 0.87],
      [`w`, -3.5],
      [`w`, 3.5],
      [`e`, -3.5],
      [`e`, -1.75],
      [`e`, 1.75],
      [`s`, -3.5],
      [`s`, 3.5],
    ]) {
      let [n, r, i] = s(e, t);
      f.cabinets.push(Fr(d, m, n, r, i));
    }
    for (let [e, t] of [
      [`n`, -2.55],
      [`n`, 2.55],
      [`w`, 1.75],
      [`s`, -1.75],
    ])
      f.shelves.push({ side: e, t });
    for (let [e, t] of [
      [`n`, -4.15],
      [`e`, 3.6],
    ])
      f.lockers.push({ side: e, t });
    for (let [e, t] of [
      [`n`, 4.1],
      [`w`, -1.75],
      [`s`, 1.75],
    ])
      f.boards.push({ side: e, t });
    f.trays.push({ side: `e`, t: 0 });
    let h = (e, t, n, r, i, a) => {
      let [o, c, l] = s(e, t),
        u = new b();
      (u.position.set(o, 0, c),
        (u.rotation.y = l),
        d.add(u),
        Pr(u, 0, n, r, i, a));
    };
    for (let { side: e, t } of f.shelves) h(e, t, 1.55, 0.5, 2.4, 2.1);
    for (let { side: e, t } of f.boards) h(e, t, 2.2, 0.55, 2.2, 2.2);
    for (let { side: e, t } of f.lockers) h(e, t, 0.95, 0.35, 1.4, 1.3);
    ((f.cabinets[1].kind = `herring`),
      (f.cabinets[4].kind = `shotguns`),
      (f.cabinets[6].kind = `hung`),
      (f.cabinets[7].kind = `profile`));
    for (let [e, t, n, r] of [
      [0, -1.2, 0, -Tr.z],
      [0, 1.2, 0, Tr.z],
      [-1.4, 0, -Tr.x, 0],
      [1.4, 0, Tr.x, 0],
    ]) {
      let i = new _(16770240, 14, 8, 0.95, 0.9, 2);
      (i.position.set(e, 3.3, t),
        i.target.position.set(n, 1.3, r),
        d.add(i, i.target));
    }
    ((y = Rr(d)),
      y.root.position.set(0.2, 0, -1.5),
      (y.root.rotation.y = Math.PI - 0.05),
      d.traverse((e) => {
        e.isMesh && !e.castShadow && (e.receiveShadow = !1);
      }),
      await pe(f, l));
  }
  async function pe(e, n) {
    let r = () => new Promise((e) => setTimeout(e, 0)),
      i = _e(97),
      a = (e) => e[Math.floor(i() * e.length)],
      o = sr(),
      s = new Map(),
      c = [11901804, 7041096, 9080207, 5917242],
      u = (e, t, n) => {
        let r = s.get(e);
        return (r || ((r = { geo: t(), mats: [], kind: n }), s.set(e, r)), r);
      },
      f = new D(),
      p = new S(),
      g = new L(),
      _ = new L(),
      v = new l(),
      y = (
        e,
        t,
        n,
        r,
        i,
        { rx: a = 0, ry: o = 0, rz: s = 0, s: c = 1 } = {},
      ) => {
        (f.set(a, o, s, `YXZ`), p.setFromEuler(f));
        let u = e.geo.boundingBox,
          d = 1 / 0;
        for (let e of [u.min.x, u.max.x])
          for (let t of [u.min.y, u.max.y])
            for (let n of [u.min.z, u.max.z])
              d = Math.min(d, g.set(e, t, n).applyQuaternion(p).y * c);
        (t.updateMatrixWorld(!0),
          e.mats.push(
            new l().multiplyMatrices(
              t.matrixWorld,
              v.compose(g.set(n, r - d, i), p, _.set(c, c, c)),
            ),
          ));
      },
      b = 0,
      x = async () => {
        if (++b % 3 == 0 && (await r(), P)) throw Error(`disposed`);
      },
      C = [],
      w = [],
      T = [],
      O = [],
      k = [],
      j = [];
    for (let e of be.filter((e) => Or.has(e.class) && !e.retired && E[e.id]))
      for (let n = 0; n < 3; n++) {
        let r = Se(null);
        if (r.weapons[e.id] && n)
          for (let t of [`optic`, `muzzle`, `grip`]) {
            let n = De(e.id, t);
            n.length && (r.weapons[e.id][t] = a(n));
          }
        let i = n === 2 ? a(c) : null;
        try {
          let t = u(`g${e.id}/${n}`, () => ge(ke(e.id, r), i));
          ((e.class === `pistol` ? T : e.class === `smg` ? w : C).push(t),
            e.class !== `pistol` && (e.class === `smg` ? j : k).push(t));
        } catch (e) {
          t.warn?.(`Armory wall gun`, String(e));
        }
        await x();
      }
    let ee = [11901804, 12888184, 10848860],
      N = [];
    for (let e of be.filter(
      (e) =>
        [`ar`, `carbine`, `sniper`, `dmr`].includes(e.class) &&
        !e.retired &&
        E[e.id],
    )) {
      let n = Se(null);
      if (n.weapons[e.id])
        for (let t of [`optic`, `muzzle`, `grip`]) {
          let r = De(e.id, t);
          r.length && (n.weapons[e.id][t] = a(r));
        }
      try {
        N.push(u(`d${e.id}`, () => ge(ke(e.id, n), a(ee))));
      } catch (e) {
        t.warn?.(`Armory desert gun`, String(e));
      }
      await x();
    }
    for (let e of ar) {
      try {
        let t = u(`s` + e.id, () =>
          or(e, { finish: i() < 0.55 ? a(c) : null }),
        );
        ((
          ({
            Sidearms: T,
            Wheelguns: T,
            "Personal defense": w,
            Scatterguns: O,
          })[e.family] ?? C
        ).push(t),
          e.family === `Scatterguns` && C.push(t));
      } catch (e) {
        t.warn?.(`Armory study`, String(e));
      }
      await x();
    }
    let F = lr.map((e) => u(`k` + e, () => rr(ur(o, e)))),
      te = dr.map((e) => u(`n` + e, () => rr(fr(o, e)))),
      I = mr.map((e) => u(`l` + e, () => rr(hr(o, e)))),
      ne = [`rpg`, `he`].map((e) => u(`r` + e, () => rr(pr(o, e)))),
      re = u(`can`, () => rr(gr(o))),
      ie = u(`canTan`, () => rr(gr(o, `crate`))),
      ae = [`red`, `olive`, `dark`].map((e) => u(`c` + e, () => rr(Sr(o, e))));
    await x();
    let oe = (e, t, n, r) => {
      for (let i = 0; i < e; i++)
        r(e > 1 ? t + (i * (n - t)) / (e - 1) : (t + n) / 2, i);
    };
    for (let t of e.cabinets) {
      let { w: e, d: n, low: r, high: o, g: s } = t,
        c = -e / 2,
        l = e / 2,
        u = (e) => i() < e,
        d = (e, t, n, r, i) => y(e, s, t, n, r, { ry: i, rz: Math.PI / 2 }),
        f =
          t.kind ?? a([`rack`, `rack`, `herring`, `profile`, `hung`, `mixed`]);
      if (f === `rack` || f === `herring` || f === `shotguns`) {
        let e = f === `herring` ? null : a([0.55, 0.75, 1.05]),
          t = f === `shotguns` && O.length ? O : C;
        (oe(11, c + 0.14, l - 0.14, (o, s) => {
          u(0.04) ||
            d(
              a(t),
              o,
              r.y,
              n * 0.45,
              (e ?? (s % 2 ? 0.75 : -0.75)) + (i() - 0.5) * 0.15,
            );
        }),
          oe(12, c + 0.12, l - 0.12, (t, r) => {
            u(0.05) ||
              d(
                a(w),
                t,
                o.y,
                n * 0.45,
                (e ?? (r % 2 ? 0.75 : -0.75)) + (i() - 0.5) * 0.15,
              );
          }),
          y(a(C), s, 0, o.y + o.h - 0.34, 0.1));
      } else if (f === `profile`)
        (oe(7, c + 0.17, l - 0.17, (e) =>
          d(a(C), e, r.y, n * 0.5, (i() - 0.5) * 0.2),
        ),
          oe(9, c + 0.13, l - 0.13, (e) =>
            d(a(w), e, o.y, n * 0.5, (i() - 0.5) * 0.2),
          ));
      else if (f === `hung`) {
        for (let e = 0; e < 5; e++)
          y(a(C), s, (i() - 0.5) * 0.1, r.y + 0.04 + e * 0.25, 0.12);
        for (let e = 0; e < 3; e++)
          for (let t of [-0.4, 0.4]) y(a(w), s, t, o.y + 0.06 + e * 0.33, 0.12);
      } else {
        oe(6, c + 0.14, -0.05, (e) =>
          d(a(C), e, r.y, n * 0.45, 0.9 + (i() - 0.5) * 0.2),
        );
        for (let e = 0; e < 4; e++)
          y(a(w), s, 0.42, r.y + 0.06 + e * 0.3, 0.12);
        (oe(9, c + 0.12, l - 0.12, (e) =>
          y(a(T), s, e, o.y, n * 0.5, { ry: (i() - 0.5) * 0.5 }),
        ),
          oe(9, c + 0.12, l - 0.12, (e) =>
            y(a(T), s, e, o.y + 0.36, n * 0.5, { ry: (i() - 0.5) * 0.5 }),
          ));
      }
      await x();
    }
    for (let { side: t, t: r } of e.shelves) {
      let e = yr(o),
        s = n(new h(rr(e.group, { center: !1 }), ue), t, r),
        { w: c, d: l } = e;
      (e.rows.forEach((e, t) => {
        let n = B(
          c - 0.2,
          0.008,
          0.01,
          m.shelfGlow,
          0,
          e + 2.4 / 6 - 0.045,
          l - 0.05,
          s,
        );
        n.castShadow = !1;
        let r =
          t === 0
            ? `cartons`
            : a([`hand`, `hand`, `hand`, `grenades`, `knives`, `cartons`]);
        r === `hand`
          ? oe(4, -c / 2 + 0.24, c / 2 - 0.24, (t) =>
              y(a(T), s, t, e, l * 0.55, { ry: (i() - 0.5) * 0.3 }),
            )
          : r === `knives`
            ? oe(3, -c / 2 + 0.3, c / 2 - 0.3, (t) =>
                y(a(F), s, t, e, l * 0.55, {
                  rx: -Math.PI / 2,
                  ry: (i() - 0.5) * 0.4,
                  s: 0.7,
                }),
              )
            : r === `grenades`
              ? oe(7, -c / 2 + 0.18, c / 2 - 0.18, (t) =>
                  y(a(te), s, t, e, l * 0.55, { ry: i() * 6 }),
                )
              : oe(4, -c / 2 + 0.2, c / 2 - 0.2, (t) => {
                  let n = a(ae);
                  (y(n, s, t, e, l * 0.5, { ry: (i() - 0.5) * 0.2 }),
                    i() < 0.6 &&
                      y(n, s, t, e + 0.07, l * 0.5, { ry: (i() - 0.5) * 0.3 }));
                });
      }),
        await x());
    }
    for (let { side: t, t: r } of e.lockers) {
      let e = br(o),
        s = n(new h(rr(e.group, { center: !1 }), ue), t, r);
      for (let t of e.slots)
        y(a(C), s, t.x, t.y, t.z, {
          ry: 1.35 + (i() - 0.5) * 0.2,
          rz: Math.PI / 2,
          s: 0.85,
        });
      (y(re, s, -0.5, 0, 0.35, { ry: 0.3 }),
        y(ie, s, -0.52, 0.17, 0.35, { ry: 0.1 }),
        y(re, s, 0.5, 0, 0.4, { ry: -0.4 }),
        await x());
    }
    for (let { side: t, t: r } of e.boards) {
      let e = xr(o, 1.4, 1.3),
        s = new M();
      n(s, t, r);
      let c = new h(rr(e.group, { center: !1 }), ue);
      ((c.position.y = 1.3),
        s.add(c),
        e.rows.forEach((e, t) =>
          y(I[(t + Math.floor(i() * 3)) % I.length], s, 0, 1.3 + e - 0.06, 0.1),
        ));
      let l = _r(o, 1, 0.28, 0.42, { open: !0 }),
        u = new h(rr(l, { center: !1 }), ue);
      (u.position.set(-0.1, 0, 0.5),
        (u.rotation.y = 0.05),
        s.add(u),
        oe(3, 0.4, 0.62, (e) => y(a(ne), u, 0, 0.26, e - 0.5, { rz: 0 })));
      let d = _r(o, 0.5, 0.22, 0.36, { open: !0, lidLean: !0 }),
        f = new h(rr(d, { center: !1 }), ue);
      (f.position.set(0.55, 0, 0.55), (f.rotation.y = -0.3), s.add(f));
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 3; t++)
          y(te[0], f, -0.17 + e * 0.11, 0.2, -0.1 + t * 0.1);
      await x();
    }
    {
      let t = e.counter,
        n = t.g,
        r = { rx: -Math.PI / 2 },
        o = [...(N.length ? N : k)],
        s = [...j],
        c = [...T],
        l = (e) =>
          e.length ? e.splice(Math.floor(i() * e.length), 1)[0] : null,
        u = (e) => {
          let t = e.geo.boundingBox;
          return { len: t.max.x - t.min.x, h: t.max.y - t.min.y };
        },
        d = (e, t, i, a, o, s) => {
          let c = u(e),
            l = Math.min(1, o / c.len);
          return (
            y(e, n, t, i, a, { ...r, ry: ((s ? -1 : 1) * Math.PI) / 2, s: l }),
            c.h * l
          );
        },
        f = (e) => {
          let t = [0, 1, 2, 3, 4].map((e) =>
              e === 2 && k.length ? a(k) : (l(o) ?? a(k)),
            ),
            f = 0.64,
            p = t.map((e) => {
              let t = u(e);
              return t.h * Math.min(1, f / t.len);
            }),
            m = 0.88 - p.reduce((e, t) => e + t, 0),
            h = m < 0.04 ? 0.84 / (0.88 - m) : 1,
            g = Math.max(0.01, m / 4),
            _ = -0.44;
          t.forEach((t, i) => {
            let a = p[i] * h,
              o = u(t);
            (y(t, n, _ + a / 2, e, -0.07, {
              ...r,
              ry: ((i % 2 ? -1 : 1) * Math.PI) / 2,
              s: Math.min(1, f / o.len) * h,
            }),
              (_ += a + g));
          });
          for (let t of [-1, 1]) {
            let r = l(s) ?? a(j);
            (r && d(r, t * 0.565, e, -0.14, 0.5, t > 0),
              y(ne[t < 0 ? 0 : 1], n, t * 0.675, e, -0.19, {
                ry: Math.PI / 2,
                s: 0.6,
              }));
          }
          let v = [];
          for (let e = 0; e < 6; e++) v.push(l(c) ?? a(T));
          oe(6, -0.5, 0.5, (t, i) => {
            let a = v[i];
            if (!a) return;
            let o = u(a);
            y(a, n, t, e, 0.33, { ...r, ry: 0, s: Math.min(1, 0.17 / o.len) });
          });
          for (let t of [-1, 1])
            for (let [r, o] of [
              [0, 0.2],
              [0.045, 0.27],
              [0, 0.34],
            ])
              y(a(te), n, t * (0.665 + r), e, o, { ry: i() * 6, s: 0.8 });
        };
      (f(t.floor + 0.01), f(t.shelf + 0.002));
    }
    for (let { side: t, t: r } of e.trays) {
      let e = new M();
      (n(e, t, r),
        B(1, 0.05, 0.5, m.wood, 0, 0.8, 0.3, e),
        B(0.92, 0.1, 0.44, m.darkWood, 0, 0.72, 0.3, e));
      for (let t of [-1, 1])
        for (let n of [-1, 1])
          B(0.05, 0.7, 0.05, m.darkWood, t * 0.44, 0.35, 0.3 + n * 0.19, e);
      let i = vr(o),
        s = new h(rr(i.group, { center: !1 }), ue);
      (s.position.set(0, 0.825, 0.3),
        s.scale.setScalar(0.9),
        e.add(s),
        i.slots.forEach((e, t) =>
          y(F[t % F.length], s, e.x, e.y, e.z, {
            rx: -Math.PI / 2,
            ry: e.ry,
            s: e.s,
          }),
        ));
      for (let t = 0; t < 3; t++) y(a(te), e, -0.4 + t * 0.06, 0.825, 0.46);
    }
    for (let [e, t, n] of [
      [-3.3, 3.3, 0.4],
      [3.4, -3.1, -0.6],
      [-3.4, -3, 0.9],
    ]) {
      let r = new M();
      (r.position.set(e, 0, t), (r.rotation.y = n), d.add(r));
      let i = new h(rr(_r(o, 0.9, 0.45, 0.5), { center: !1 }), ue);
      r.add(i);
      let s = new h(rr(_r(o, 0.55, 0.3, 0.4), { center: !1 }), ue);
      (s.position.set(0.1, 0.47, 0),
        (s.rotation.y = 0.25),
        r.add(s),
        y(re, r, 0.65, 0, 0.1, { ry: 0.4 }),
        y(re, r, 0.65, 0.17, 0.12, { ry: 0.2 }),
        y(ie, r, -0.62, 0, 0.2, { ry: -0.3 }),
        y(a(I), r, 0, 0.8, 0.05, { ry: 0.2 }));
    }
    for (let e of s.values()) {
      if (!e.mats.length) {
        e.geo.dispose();
        continue;
      }
      let t = new A(e.geo, ue, e.mats.length);
      (e.mats.forEach((e, n) => t.setMatrixAt(n, e)),
        t.computeBoundingSphere(),
        d.add(t));
    }
    for (let e of Object.values(o)) e.dispose();
    Te();
  }
  function ge(e, t = null) {
    let n = Ht(e, E),
      r = V(n, e);
    try {
      return rr(r, { finish: t });
    } finally {
      n.dispose();
    }
  }
  function V(e, t) {
    let n = new f().setFromObject(e.group),
      r = n.getCenter(new L()),
      i = n.getSize(new L());
    e.group.position.sub(r);
    let a = new M();
    (a.add(e.group), (a.rotation.y = -Math.PI / 2));
    let o = new M();
    return (
      o.add(a),
      o.scale.setScalar((Dr[t.class] ?? 0.9) / Math.max(i.z, i.x, 0.001)),
      (o.userData.model = e),
      o
    );
  }
  function ve(e) {
    let t = zt(e),
      n = se.get(t);
    if (!n) {
      let r = Ht(e, E, { reticle: !0 }),
        i = V(r, e),
        a = new M();
      a.add(i);
      let o = new Set();
      (i.traverse((e) => {
        if (e.isMesh) {
          e.castShadow = e.receiveShadow = e.name !== `sight_reticle`;
          for (let t of [e.material].flat()) o.add(t);
        }
      }),
        d.add(a),
        a.updateMatrixWorld(!0));
      let s = [];
      i.traverse((e) => {
        if (!e.isMesh) return;
        let t = e.geometry.attributes.position,
          n = Math.max(1, Math.floor(t.count / 500));
        for (let r = 0; r < t.count; r += n)
          s.push(new L().fromBufferAttribute(t, r).applyMatrix4(e.matrixWorld));
      });
      let c = 1 / 0,
        l = -1 / 0;
      for (let e of s) ((c = Math.min(c, e.x)), (l = Math.max(l, e.x)));
      let u = l - c,
        p = 0.04,
        m = 0;
      for (; p < 0.2; p += 0.01) {
        let e = Math.cos(p),
          t = Math.sin(p),
          n = 0;
        m = 1 / 0;
        for (let r of s) {
          let i = r.x * t + r.y * e;
          i < m && ((m = i), (n = r.x));
        }
        if (n < c + 0.16 * u) {
          let n = 1 / 0;
          for (let r of s)
            r.x > c + 0.3 * u && (n = Math.min(n, r.x * t + r.y * e));
          if (n - m > 0.004) break;
        }
      }
      ((a.rotation.z = p),
        a.position.set((-(c + l) / 2) * Math.cos(p), x.top + 0.001 - m, 0),
        a.updateMatrixWorld(!0));
      let h = new re(),
        g = [];
      i.traverse((e) => {
        e.isMesh && g.push(e);
      });
      let _ = new f().setFromObject(a),
        v = _.max.x - _.min.x,
        y = [0.6].map((e) => {
          for (let t of [0, -0.04, 0.04, -0.08, 0.08, -0.14]) {
            let n = _.min.x + (e + t) * v;
            h.set(new L(n, x.top, 0), new L(0, 1, 0));
            let r = h.intersectObjects(g, !1)[0];
            if (r && r.point.y - x.top > 0.03)
              return {
                x: n,
                h: r.point.y - x.top,
                w: Math.min(
                  0.045,
                  Math.max(
                    0.024,
                    0.5 * new f().setFromObject(r.object).getSize(new L()).z +
                      0.008,
                  ),
                ),
              };
          }
          return { x: _.min.x + e * v, h: 0.06, w: 0.03 };
        });
      d.remove(a);
      let b = {
        optic: r.sight.aim.clone(),
        muzzle: new L(0, 0.012, r.muzzle),
        grip: new L(
          0,
          r.body.mounts?.under?.y ?? r.body.gripY ?? -0.08,
          r.body.mounts?.under?.z ?? r.body.gripZ ?? r.body.sightZ,
        ),
      };
      if (
        ((n = {
          key: t,
          tilt: a,
          model: r,
          mats: [...o],
          forks: y,
          anchors: b,
          name: e.name,
          opacity: 0,
        }),
        se.set(t, n),
        se.size > 48)
      ) {
        for (let [e, t] of se)
          if (t !== z && !ce.includes(t) && !t.tilt.parent) {
            (se.delete(e), t.model.dispose());
            break;
          }
      }
    }
    return n;
  }
  function ye(e, t) {
    e.opacity = t;
    let n = t < 0.999;
    for (let r of e.mats) {
      let e = r.userData;
      (e.baseOpacity ??
        ((e.baseOpacity = r.opacity),
        (e.baseTransparent = r.transparent),
        (e.baseDepthWrite = r.depthWrite)),
        r.transparent !== (n || e.baseTransparent) && (r.needsUpdate = !0),
        (r.transparent = n || e.baseTransparent),
        (r.opacity = e.baseOpacity * t),
        (r.depthWrite = n ? t > 0.5 && e.baseDepthWrite : e.baseDepthWrite));
    }
  }
  function xe(e, t = !1) {
    if (!E || !x) return;
    R.hold = t && !!ie;
    let n = zt(e);
    if (!t) {
      let e = !!ae && n !== ae;
      ((ae = n), e && (y.present(), le.clack()));
    }
    if (n === ie) return;
    let r = !ie;
    ie = n;
    let i = ve(e);
    z && z !== i && !ce.includes(z) && ce.push(z);
    let a = ce.indexOf(i);
    (a >= 0 && ce.splice(a, 1),
      (z = i),
      i.tilt.parent || d.add(i.tilt),
      r && ye(i, 1),
      x.forks.forEach((e, t) => {
        ((e.tx = i.forks[t].x),
          (e.th = i.forks[t].h),
          (e.w = i.forks[t].w),
          r && ((e.x = e.tx), (e.h = e.th)));
      }));
  }
  function Ce() {
    if (!u) return;
    let e = innerWidth,
      t = innerHeight;
    ((o.width !== Math.round(e * u.getPixelRatio()) ||
      o.height !== Math.round(t * u.getPixelRatio())) &&
      u.setSize(e, t, !1),
      (p.aspect = e / t));
    let n = i.getBoundingClientRect();
    (n.width > 0 && !a
      ? p.setViewOffset(
          e,
          t,
          e / 2 - (n.left + n.width / 2),
          t / 2 - (n.top + n.height / 2),
          e,
          t,
        )
      : p.clearViewOffset(),
      p.updateProjectionMatrix());
  }
  function we(e) {
    if (((F = 0), !j || P || !u)) return;
    let t = Math.min(0.1, (e - (te || e)) / 1e3);
    ((te = e), a || (F = requestAnimationFrame(we)));
    let n = 1 - Math.exp(-t * 5);
    if (
      ((R.curPitch += (R.pitch - R.curPitch) * n),
      (R.curZoom += (R.zoom - R.curZoom) * n),
      R.hold ||
        (z && R.focus && z.anchors[R.focus]
          ? (z.tilt.updateMatrixWorld(!0),
            R.want.copy(z.anchors[R.focus]),
            z.model.group.localToWorld(R.want))
          : z && new f().setFromObject(z.tilt).getCenter(R.want)),
      R.qaTarget && R.want.copy(R.qaTarget),
      R.target.lerp(R.want, n),
      R.goal != null)
    ) {
      let e =
        R.goal + Math.PI * 2 * Math.round((R.phase - R.goal) / (Math.PI * 2));
      ((R.phase += (e - R.phase) * (1 - Math.exp(-t * 2.5))),
        Math.abs(e - R.phase) < 0.002 && (R.goal = null));
    }
    let r = R.phase,
      i = 2.3 / R.curZoom,
      o = (0.5 / Math.sqrt(R.curZoom)) * (R.rear ? 0.35 : 1) + R.curPitch * 1.6;
    if (y) {
      let e = y.root.position,
        t = e.x - R.target.x,
        n = e.z - R.target.z,
        a = Math.hypot(t, n);
      if (a > 0.3 && i > a + 0.1) {
        let e = Math.abs(
            Math.atan2(
              Math.sin(r - Math.atan2(t, n)),
              Math.cos(r - Math.atan2(t, n)),
            ),
          ),
          s = Math.min(1, Math.max(0, (0.9 - e) / 0.6)),
          c = s * s * (3 - 2 * s),
          l = ((2.35 - R.target.y) * i) / (a - 0.2);
        o += Math.min(2.2, Math.max(0, l - o)) * c;
      }
    }
    let s = Math.sin(r),
      c = Math.cos(r),
      l = Math.min(
        s ? (Tr.x - 0.4 - Math.sign(s) * R.target.x) / Math.abs(s) : 99,
        c ? (Tr.z - 0.55 - Math.sign(c) * R.target.z) / Math.abs(c) : 99,
      ),
      m = Math.min(i, l);
    (p.position.set(
      R.target.x + s * m,
      Math.min(Tr.h - 0.25, R.target.y + o),
      R.target.z + c * m,
    ),
      p.lookAt(R.target));
    let h = t / 0.3;
    z && z.opacity < 1 && ye(z, Math.min(1, z.opacity + h));
    for (let e = ce.length - 1; e >= 0; e--) {
      let t = ce[e];
      (ye(t, Math.max(0, t.opacity - h)),
        t.opacity <= 0 && (d.remove(t.tilt), ce.splice(e, 1)));
    }
    (x.update(t), y.update(t, p), Ce(), u.render(d, p));
  }
  function Te() {
    !F && j && (F = requestAnimationFrame(we));
  }
  let Ee = () => {
    document.hidden
      ? (cancelAnimationFrame(F), (F = 0), le.stop(), (oe = !1))
      : j && ((te = 0), Te(), !a && !oe && (le.start(), (oe = !0)));
  };
  (document.addEventListener(`visibilitychange`, Ee),
    addEventListener(`resize`, Te));
  let Oe = !1,
    Ae = !1,
    je = [],
    Me = (e) =>
      window.requestIdleCallback
        ? requestIdleCallback(e, { timeout: 400 })
        : setTimeout(e, 30);
  function Ne() {
    return (
      (O ??= fe()
        .then(async () => {
          !P &&
            u &&
            (I && !a && xe(I, ne),
            Ce(),
            await u.compileAsync?.(d, p),
            u.render(d, p),
            (Oe = !0),
            (te = 0),
            Te(),
            Pe());
        })
        .catch((e) => {
          t.warn?.(`Armory room`, String(e));
        })),
      O
    );
  }
  function Pe() {
    if (Ae || !Oe || P) return;
    Ae = !0;
    let e = () => {
      let n = je.shift();
      if (!n || P) {
        Ae = !1;
        return;
      }
      try {
        let e = ve(n);
        if (!e.warm) {
          e.warm = !0;
          for (let t of e.mats)
            for (let e of Object.values(t)) e?.isTexture && u.initTexture(e);
          u.compile(e.tilt, p, d);
        }
      } catch (e) {
        t.warn?.(`Armory prewarm`, String(e));
      }
      Me(e);
    };
    Me(e);
  }
  return {
    live: !a,
    still: a,
    show(e) {
      ((j = e),
        (o.hidden = s.hidden = !e),
        e
          ? (Ne(), (te = 0), Te(), !a && !oe && (le.start(), (oe = !0)))
          : (cancelAnimationFrame(F), (F = 0), (oe &&= (le.stop(), !1))));
    },
    setGun(e, { preview: t = !1 } = {}) {
      ((I = e), (ne = t), !a && Oe && xe(e, t), Te());
    },
    prewarm(e) {
      if (!a) {
        for (let t of e) t && !je.includes(t) && je.push(t);
        Pe();
      }
    },
    setView({
      yaw: e = 0,
      pitch: t = 0,
      zoom: n = 1,
      focus: r = null,
      drag: i = !1,
      rear: a = !1,
    }) {
      (i
        ? ((R.phase -= e - R.lastYaw), (R.goal = null))
        : r && (r !== R.focus || a !== !!R.rear) && (R.goal = a ? -1.25 : 0.45),
        (R.rear = a),
        (R.lastYaw = e),
        (R.pitch = t),
        (R.zoom = n),
        (R.focus = r),
        Te());
    },
    dispose() {
      ((P = !0),
        cancelAnimationFrame(F),
        le.stop(),
        document.removeEventListener(`visibilitychange`, Ee),
        removeEventListener(`resize`, Te));
      for (let e of se.values()) e.model.dispose();
      (y?.dispose(),
        d?.traverse((e) => {
          e.geometry?.dispose?.();
        }),
        u?.dispose(),
        u?.forceContextLoss(),
        o.remove(),
        s.remove());
    },
  };
}
