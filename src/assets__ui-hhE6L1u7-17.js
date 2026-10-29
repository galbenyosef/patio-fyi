// assets__ui-hhE6L1u7 17 — math
// Lines 5984-6986 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function ai(t, r, { stage: i }) {
  let a = D(),
    s = r.appendChild(document.createElement(`canvas`));
  ((s.className = `armory-room`), s.setAttribute(`aria-hidden`, `true`));
  let c = r.appendChild(document.createElement(`div`));
  ((c.className = `armory-room-shade`),
    (s.hidden = c.hidden = !0),
    (s.__view = null));
  let l = Je(t.assets),
    u = null,
    m,
    h,
    g,
    v = null,
    b = null,
    C = null,
    T = l.scenes,
    E = null,
    O = !1,
    k = !1,
    j = 0,
    P = 0,
    F = null,
    ee = !1,
    te = ``,
    L = ``,
    z = !1,
    ie = new Map(),
    oe = [],
    se = ii(t),
    ce = xr(),
    B = (s.__view = {
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
      target: new o(0, 1.05, 0),
      want: new o(0, 1.05, 0),
    }),
    V = null;
  async function ue() {
    if (
      (F && (await l.ensure(F.id, { priority: `visible` }).catch(() => {})),
      await me(),
      k)
    )
      return;
    ((u = new n({
      canvas: s,
      antialias: !0,
      powerPreference: `high-performance`,
    })),
      u.setPixelRatio(a ? Math.min(devicePixelRatio, 1.5) : 1),
      (u.outputColorSpace = x),
      (u.toneMapping = 4),
      (u.toneMappingExposure = 1.15),
      (u.shadowMap.enabled = !0),
      (u.shadowMap.type = 1),
      (m = new re()),
      (m.background = new _(787973)),
      (m.fog = new I(1312774, 7, 16)));
    let e = new p(u);
    ((m.environment = e.fromScene(new le(), 0.04).texture),
      (m.environmentIntensity = 0.28),
      e.dispose(),
      (h = new ne(40, 1, 0.05, 40)),
      (g = pe()),
      m.add(new N(16766630, 2756104, 0.55)),
      Jr(m, g),
      fe(m, g));
    let t = Xr(m, g);
    ((b = Zr(m)),
      (C = new d(16773336, 34, 6, 0.34, 0.75, 2)),
      C.position.set(0.35, 3.3, 0.55),
      C.target.position.set(0, 1.02, 0),
      (C.castShadow = !0),
      C.shadow.mapSize.set(1024, 1024),
      (C.shadow.bias = -4e-4),
      (C.shadow.normalBias = 0.01),
      (C.shadow.camera.near = 1),
      (C.shadow.camera.far = 5),
      m.add(C, C.target),
      ti(m, g, -Wr.x + 0.02, 0, Math.PI / 2),
      ni(m, g, 0, Wr.z, Math.PI));
    let r = (e, t) =>
        e === `n`
          ? [t, -Wr.z, 0]
          : e === `s`
            ? [t, Wr.z, Math.PI]
            : e === `w`
              ? [-Wr.x, t, Math.PI / 2]
              : [Wr.x, t, -Math.PI / 2],
      i = (e, t, n) => {
        let [i, a, o] = r(t, n);
        return (
          e.position.set(i, 0, a),
          (e.rotation.y = o),
          m.add(e),
          e.updateMatrixWorld(!0),
          e
        );
      },
      o = {
        cabinets: [],
        shelves: [],
        lockers: [],
        boards: [],
        trays: [],
        floor: [],
        counter: t,
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
      let [n, i, a] = r(e, t);
      o.cabinets.push(ei(m, g, n, i, a));
    }
    for (let [e, t] of [
      [`n`, -2.55],
      [`n`, 2.55],
      [`w`, 1.75],
      [`s`, -1.75],
    ])
      o.shelves.push({ side: e, t });
    for (let [e, t] of [
      [`n`, -4.15],
      [`e`, 3.6],
    ])
      o.lockers.push({ side: e, t });
    for (let [e, t] of [
      [`n`, 4.1],
      [`w`, -1.75],
      [`s`, 1.75],
    ])
      o.boards.push({ side: e, t });
    o.trays.push({ side: `e`, t: 0 });
    let c = (e, t, n, i, a, o) => {
      let [s, c, l] = r(e, t),
        u = new y();
      (u.position.set(s, 0, c),
        (u.rotation.y = l),
        m.add(u),
        $r(u, 0, n, i, a, o));
    };
    for (let { side: e, t } of o.shelves) c(e, t, 1.55, 0.5, 2.4, 2.1);
    for (let { side: e, t } of o.boards) c(e, t, 2.2, 0.55, 2.2, 2.2);
    for (let { side: e, t } of o.lockers) c(e, t, 0.95, 0.35, 1.4, 1.3);
    ((o.cabinets[1].kind = `herring`),
      (o.cabinets[4].kind = `shotguns`),
      (o.cabinets[6].kind = `hung`),
      (o.cabinets[7].kind = `profile`));
    for (let [e, t, n, r] of [
      [0, -1.2, 0, -Wr.z],
      [0, 1.2, 0, Wr.z],
      [-1.4, 0, -Wr.x, 0],
      [1.4, 0, Wr.x, 0],
    ]) {
      let i = new d(16770240, 14, 8, 0.95, 0.9, 2);
      (i.position.set(e, 3.3, t),
        i.target.position.set(n, 1.3, r),
        m.add(i, i.target));
    }
    return (
      (v = ri(m)),
      v.root.position.set(0.2, 0, -1.5),
      (v.root.rotation.y = Math.PI - 0.05),
      m.traverse((e) => {
        e.isMesh && !e.castShadow && (e.receiveShadow = !1);
      }),
      () => ve(o, i)
    );
  }
  let de = !1,
    me = async () => {
      for (; !de && !O && !k;) await new Promise((e) => setTimeout(e, 250));
    };
  async function ge() {
    let e = _e
      .filter((e) => qr.has(e.class) && !e.retired && !l.has(e.id))
      .map((e) => e.id);
    for (let t = 0; t < e.length; t += 4) {
      if ((await me(), k)) return;
      await Promise.all(
        e
          .slice(t, t + 4)
          .map((e) => l.ensure(e, { priority: `background` }).catch(() => {})),
      );
    }
  }
  async function ve(n, r) {
    let i = () => new Promise((e) => setTimeout(e, 0)),
      a = he(97),
      s = (e) => e[Math.floor(a() * e.length)],
      c = Er(),
      l = new Map(),
      u = [11901804, 7041096, 9080207, 5917242],
      d = (e, t, n) => {
        let r = l.get(e);
        return (r || ((r = { geo: t(), mats: [], kind: n }), l.set(e, r)), r);
      },
      f = new A(),
      p = new S(),
      h = new o(),
      _ = new o(),
      v = new ae(),
      y = (
        e,
        t,
        n,
        r,
        i,
        { rx: a = 0, ry: o = 0, rz: s = 0, s: c = 1 } = {},
      ) => {
        (f.set(a, o, s, `YXZ`), p.setFromEuler(f));
        let l = e.geo.boundingBox,
          u = 1 / 0;
        for (let e of [l.min.x, l.max.x])
          for (let t of [l.min.y, l.max.y])
            for (let n of [l.min.z, l.max.z])
              u = Math.min(u, h.set(e, t, n).applyQuaternion(p).y * c);
        (t.updateMatrixWorld(!0),
          e.mats.push(
            new ae().multiplyMatrices(
              t.matrixWorld,
              v.compose(h.set(n, r - u, i), p, _.set(c, c, c)),
            ),
          ));
      },
      b = 0,
      x = async () => {
        if (++b % 3 == 0 && (await i(), await me(), k)) throw Error(`disposed`);
      };
    if ((await ge(), k)) return;
    let C = [],
      E = [],
      D = [],
      O = [],
      j = [],
      M = [];
    for (let e of _e.filter((e) => qr.has(e.class) && !e.retired && T[e.id]))
      for (let n = 0; n < 3; n++) {
        let r = xe(null);
        if (r.weapons[e.id] && n)
          for (let t of [`optic`, `muzzle`, `grip`]) {
            let n = ye(e.id, t);
            n.length && (r.weapons[e.id][t] = s(n));
          }
        let i = n === 2 ? s(u) : null;
        try {
          let t = d(`g${e.id}/${n}`, () => Se(be(e.id, r), i));
          ((e.class === `pistol` ? D : e.class === `smg` ? E : C).push(t),
            e.class !== `pistol` && (e.class === `smg` ? M : j).push(t));
        } catch (e) {
          t.warn?.(`Armory wall gun`, String(e));
        }
        await x();
      }
    let N = [11901804, 12888184, 10848860],
      P = [];
    for (let e of _e.filter(
      (e) =>
        [`ar`, `carbine`, `sniper`, `dmr`].includes(e.class) &&
        !e.retired &&
        T[e.id],
    )) {
      let n = xe(null);
      if (n.weapons[e.id])
        for (let t of [`optic`, `muzzle`, `grip`]) {
          let r = ye(e.id, t);
          r.length && (n.weapons[e.id][t] = s(r));
        }
      try {
        P.push(d(`d${e.id}`, () => Se(be(e.id, n), s(N))));
      } catch (e) {
        t.warn?.(`Armory desert gun`, String(e));
      }
      await x();
    }
    for (let e of wr) {
      try {
        let t = d(`s` + e.id, () =>
          Tr(e, { finish: a() < 0.55 ? s(u) : null }),
        );
        ((
          ({
            Sidearms: D,
            Wheelguns: D,
            "Personal defense": E,
            Scatterguns: O,
          })[e.family] ?? C
        ).push(t),
          e.family === `Scatterguns` && C.push(t));
      } catch (e) {
        t.warn?.(`Armory study`, String(e));
      }
      await x();
    }
    let F = Or.map((e) => d(`k` + e, () => Sr(kr(c, e)))),
      ee = Ar.map((e) => d(`n` + e, () => Sr(jr(c, e)))),
      te = Nr.map((e) => d(`l` + e, () => Sr(Pr(c, e)))),
      I = [`rpg`, `he`].map((e) => d(`r` + e, () => Sr(Mr(c, e)))),
      ne = d(`can`, () => Sr(Fr(c))),
      L = d(`canTan`, () => Sr(Fr(c, `crate`))),
      z = [`red`, `olive`, `dark`].map((e) => d(`c` + e, () => Sr(Vr(c, e))));
    await x();
    let re = (e, t, n, r) => {
      for (let i = 0; i < e; i++)
        r(e > 1 ? t + (i * (n - t)) / (e - 1) : (t + n) / 2, i);
    };
    for (let e of n.cabinets) {
      let { w: t, d: n, low: r, high: i, g: o } = e,
        c = -t / 2,
        l = t / 2,
        u = (e) => a() < e,
        d = (e, t, n, r, i) => y(e, o, t, n, r, { ry: i, rz: Math.PI / 2 }),
        f =
          e.kind ?? s([`rack`, `rack`, `herring`, `profile`, `hung`, `mixed`]);
      if (f === `rack` || f === `herring` || f === `shotguns`) {
        let e = f === `herring` ? null : s([0.55, 0.75, 1.05]),
          t = f === `shotguns` && O.length ? O : C;
        (re(11, c + 0.14, l - 0.14, (i, o) => {
          u(0.04) ||
            d(
              s(t),
              i,
              r.y,
              n * 0.45,
              (e ?? (o % 2 ? 0.75 : -0.75)) + (a() - 0.5) * 0.15,
            );
        }),
          re(12, c + 0.12, l - 0.12, (t, r) => {
            u(0.05) ||
              d(
                s(E),
                t,
                i.y,
                n * 0.45,
                (e ?? (r % 2 ? 0.75 : -0.75)) + (a() - 0.5) * 0.15,
              );
          }),
          y(s(C), o, 0, i.y + i.h - 0.34, 0.1));
      } else if (f === `profile`)
        (re(7, c + 0.17, l - 0.17, (e) =>
          d(s(C), e, r.y, n * 0.5, (a() - 0.5) * 0.2),
        ),
          re(9, c + 0.13, l - 0.13, (e) =>
            d(s(E), e, i.y, n * 0.5, (a() - 0.5) * 0.2),
          ));
      else if (f === `hung`) {
        for (let e = 0; e < 5; e++)
          y(s(C), o, (a() - 0.5) * 0.1, r.y + 0.04 + e * 0.25, 0.12);
        for (let e = 0; e < 3; e++)
          for (let t of [-0.4, 0.4]) y(s(E), o, t, i.y + 0.06 + e * 0.33, 0.12);
      } else {
        re(6, c + 0.14, -0.05, (e) =>
          d(s(C), e, r.y, n * 0.45, 0.9 + (a() - 0.5) * 0.2),
        );
        for (let e = 0; e < 4; e++)
          y(s(E), o, 0.42, r.y + 0.06 + e * 0.3, 0.12);
        (re(9, c + 0.12, l - 0.12, (e) =>
          y(s(D), o, e, i.y, n * 0.5, { ry: (a() - 0.5) * 0.5 }),
        ),
          re(9, c + 0.12, l - 0.12, (e) =>
            y(s(D), o, e, i.y + 0.36, n * 0.5, { ry: (a() - 0.5) * 0.5 }),
          ));
      }
      await x();
    }
    for (let { side: t, t: i } of n.shelves) {
      let n = Rr(c),
        o = r(new e(Sr(n.group, { center: !1 }), ce), t, i),
        { w: l, d: u } = n;
      (n.rows.forEach((e, t) => {
        let n = H(
          l - 0.2,
          0.008,
          0.01,
          g.shelfGlow,
          0,
          e + 2.4 / 6 - 0.045,
          u - 0.05,
          o,
        );
        n.castShadow = !1;
        let r =
          t === 0
            ? `cartons`
            : s([`hand`, `hand`, `hand`, `grenades`, `knives`, `cartons`]);
        r === `hand`
          ? re(4, -l / 2 + 0.24, l / 2 - 0.24, (t) =>
              y(s(D), o, t, e, u * 0.55, { ry: (a() - 0.5) * 0.3 }),
            )
          : r === `knives`
            ? re(3, -l / 2 + 0.3, l / 2 - 0.3, (t) =>
                y(s(F), o, t, e, u * 0.55, {
                  rx: -Math.PI / 2,
                  ry: (a() - 0.5) * 0.4,
                  s: 0.7,
                }),
              )
            : r === `grenades`
              ? re(7, -l / 2 + 0.18, l / 2 - 0.18, (t) =>
                  y(s(ee), o, t, e, u * 0.55, { ry: a() * 6 }),
                )
              : re(4, -l / 2 + 0.2, l / 2 - 0.2, (t) => {
                  let n = s(z);
                  (y(n, o, t, e, u * 0.5, { ry: (a() - 0.5) * 0.2 }),
                    a() < 0.6 &&
                      y(n, o, t, e + 0.07, u * 0.5, { ry: (a() - 0.5) * 0.3 }));
                });
      }),
        await x());
    }
    for (let { side: t, t: i } of n.lockers) {
      let n = zr(c),
        o = r(new e(Sr(n.group, { center: !1 }), ce), t, i);
      for (let e of n.slots)
        y(s(C), o, e.x, e.y, e.z, {
          ry: 1.35 + (a() - 0.5) * 0.2,
          rz: Math.PI / 2,
          s: 0.85,
        });
      (y(ne, o, -0.5, 0, 0.35, { ry: 0.3 }),
        y(L, o, -0.52, 0.17, 0.35, { ry: 0.1 }),
        y(ne, o, 0.5, 0, 0.4, { ry: -0.4 }),
        await x());
    }
    for (let { side: t, t: i } of n.boards) {
      let n = Br(c, 1.4, 1.3),
        o = new w();
      r(o, t, i);
      let l = new e(Sr(n.group, { center: !1 }), ce);
      ((l.position.y = 1.3),
        o.add(l),
        n.rows.forEach((e, t) =>
          y(
            te[(t + Math.floor(a() * 3)) % te.length],
            o,
            0,
            1.3 + e - 0.06,
            0.1,
          ),
        ));
      let u = Ir(c, 1, 0.28, 0.42, { open: !0 }),
        d = new e(Sr(u, { center: !1 }), ce);
      (d.position.set(-0.1, 0, 0.5),
        (d.rotation.y = 0.05),
        o.add(d),
        re(3, 0.4, 0.62, (e) => y(s(I), d, 0, 0.26, e - 0.5, { rz: 0 })));
      let f = Ir(c, 0.5, 0.22, 0.36, { open: !0, lidLean: !0 }),
        p = new e(Sr(f, { center: !1 }), ce);
      (p.position.set(0.55, 0, 0.55), (p.rotation.y = -0.3), o.add(p));
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 3; t++)
          y(ee[0], p, -0.17 + e * 0.11, 0.2, -0.1 + t * 0.1);
      await x();
    }
    {
      let e = n.counter,
        t = e.g,
        r = { rx: -Math.PI / 2 },
        i = [...(P.length ? P : j)],
        o = [...M],
        c = [...D],
        l = (e) =>
          e.length ? e.splice(Math.floor(a() * e.length), 1)[0] : null,
        u = (e) => {
          let t = e.geo.boundingBox;
          return { len: t.max.x - t.min.x, h: t.max.y - t.min.y };
        },
        d = (e, n, i, a, o, s) => {
          let c = u(e),
            l = Math.min(1, o / c.len);
          return (
            y(e, t, n, i, a, { ...r, ry: ((s ? -1 : 1) * Math.PI) / 2, s: l }),
            c.h * l
          );
        },
        f = (e) => {
          let n = [0, 1, 2, 3, 4].map((e) =>
              e === 2 && j.length ? s(j) : (l(i) ?? s(j)),
            ),
            f = 0.64,
            p = n.map((e) => {
              let t = u(e);
              return t.h * Math.min(1, f / t.len);
            }),
            m = 0.88 - p.reduce((e, t) => e + t, 0),
            h = m < 0.04 ? 0.84 / (0.88 - m) : 1,
            g = Math.max(0.01, m / 4),
            _ = -0.44;
          n.forEach((n, i) => {
            let a = p[i] * h,
              o = u(n);
            (y(n, t, _ + a / 2, e, -0.07, {
              ...r,
              ry: ((i % 2 ? -1 : 1) * Math.PI) / 2,
              s: Math.min(1, f / o.len) * h,
            }),
              (_ += a + g));
          });
          for (let n of [-1, 1]) {
            let r = l(o) ?? s(M);
            (r && d(r, n * 0.565, e, -0.14, 0.5, n > 0),
              y(I[n < 0 ? 0 : 1], t, n * 0.675, e, -0.19, {
                ry: Math.PI / 2,
                s: 0.6,
              }));
          }
          let v = [];
          for (let e = 0; e < 6; e++) v.push(l(c) ?? s(D));
          re(6, -0.5, 0.5, (n, i) => {
            let a = v[i];
            if (!a) return;
            let o = u(a);
            y(a, t, n, e, 0.33, { ...r, ry: 0, s: Math.min(1, 0.17 / o.len) });
          });
          for (let n of [-1, 1])
            for (let [r, i] of [
              [0, 0.2],
              [0.045, 0.27],
              [0, 0.34],
            ])
              y(s(ee), t, n * (0.665 + r), e, i, { ry: a() * 6, s: 0.8 });
        };
      (f(e.floor + 0.01), f(e.shelf + 0.002));
    }
    for (let { side: t, t: i } of n.trays) {
      let n = new w();
      (r(n, t, i),
        H(1, 0.05, 0.5, g.wood, 0, 0.8, 0.3, n),
        H(0.92, 0.1, 0.44, g.darkWood, 0, 0.72, 0.3, n));
      for (let e of [-1, 1])
        for (let t of [-1, 1])
          H(0.05, 0.7, 0.05, g.darkWood, e * 0.44, 0.35, 0.3 + t * 0.19, n);
      let a = Lr(c),
        o = new e(Sr(a.group, { center: !1 }), ce);
      (o.position.set(0, 0.825, 0.3),
        o.scale.setScalar(0.9),
        n.add(o),
        a.slots.forEach((e, t) =>
          y(F[t % F.length], o, e.x, e.y, e.z, {
            rx: -Math.PI / 2,
            ry: e.ry,
            s: e.s,
          }),
        ));
      for (let e = 0; e < 3; e++) y(s(ee), n, -0.4 + e * 0.06, 0.825, 0.46);
    }
    for (let [t, n, r] of [
      [-3.3, 3.3, 0.4],
      [3.4, -3.1, -0.6],
      [-3.4, -3, 0.9],
    ]) {
      let i = new w();
      (i.position.set(t, 0, n), (i.rotation.y = r), m.add(i));
      let a = new e(Sr(Ir(c, 0.9, 0.45, 0.5), { center: !1 }), ce);
      i.add(a);
      let o = new e(Sr(Ir(c, 0.55, 0.3, 0.4), { center: !1 }), ce);
      (o.position.set(0.1, 0.47, 0),
        (o.rotation.y = 0.25),
        i.add(o),
        y(ne, i, 0.65, 0, 0.1, { ry: 0.4 }),
        y(ne, i, 0.65, 0.17, 0.12, { ry: 0.2 }),
        y(L, i, -0.62, 0, 0.2, { ry: -0.3 }),
        y(s(te), i, 0, 0.8, 0.05, { ry: 0.2 }));
    }
    for (let e of l.values()) {
      if (!e.mats.length) {
        e.geo.dispose();
        continue;
      }
      let t = new R(e.geo, ce, e.mats.length);
      (e.mats.forEach((e, n) => t.setMatrixAt(n, e)),
        t.computeBoundingSphere(),
        m.add(t));
    }
    for (let e of Object.values(c)) e.dispose();
    ke();
  }
  function Se(e, t = null) {
    let n = Jt(e, T),
      r = Ce(n, e);
    try {
      return Sr(r, { finish: t });
    } finally {
      n.dispose();
    }
  }
  function Ce(e, t) {
    let n = new f().setFromObject(e.group),
      r = n.getCenter(new o()),
      i = n.getSize(new o());
    e.group.position.sub(r);
    let a = new w();
    (a.add(e.group), (a.rotation.y = -Math.PI / 2));
    let s = new w();
    return (
      s.add(a),
      s.scale.setScalar((Kr[t.class] ?? 0.9) / Math.max(i.z, i.x, 0.001)),
      (s.userData.model = e),
      s
    );
  }
  function we(e) {
    let t = Yt(e),
      n = ie.get(t);
    if (!n) {
      let r = Jt(e, T, { reticle: !0 }),
        i = Ce(r, e),
        a = new w();
      a.add(i);
      let s = new Set();
      (i.traverse((e) => {
        if (e.isMesh) {
          e.castShadow = e.receiveShadow = e.name !== `sight_reticle`;
          for (let t of [e.material].flat()) s.add(t);
        }
      }),
        m.add(a),
        a.updateMatrixWorld(!0));
      let c = [];
      i.traverse((e) => {
        if (!e.isMesh) return;
        let t = e.geometry.attributes.position,
          n = Math.max(1, Math.floor(t.count / 500));
        for (let r = 0; r < t.count; r += n)
          c.push(new o().fromBufferAttribute(t, r).applyMatrix4(e.matrixWorld));
      });
      let l = 1 / 0,
        u = -1 / 0;
      for (let e of c) ((l = Math.min(l, e.x)), (u = Math.max(u, e.x)));
      let d = u - l,
        p = 0.04,
        h = 0;
      for (; p < 0.2; p += 0.01) {
        let e = Math.cos(p),
          t = Math.sin(p),
          n = 0;
        h = 1 / 0;
        for (let r of c) {
          let i = r.x * t + r.y * e;
          i < h && ((h = i), (n = r.x));
        }
        if (n < l + 0.16 * d) {
          let n = 1 / 0;
          for (let r of c)
            r.x > l + 0.3 * d && (n = Math.min(n, r.x * t + r.y * e));
          if (n - h > 0.004) break;
        }
      }
      ((a.rotation.z = p),
        a.position.set((-(l + u) / 2) * Math.cos(p), b.top + 0.001 - h, 0),
        a.updateMatrixWorld(!0));
      let g = new M(),
        _ = [];
      i.traverse((e) => {
        e.isMesh && _.push(e);
      });
      let v = new f().setFromObject(a),
        y = v.max.x - v.min.x,
        x = [0.6].map((e) => {
          for (let t of [0, -0.04, 0.04, -0.08, 0.08, -0.14]) {
            let n = v.min.x + (e + t) * y;
            g.set(new o(n, b.top, 0), new o(0, 1, 0));
            let r = g.intersectObjects(_, !1)[0];
            if (r && r.point.y - b.top > 0.03)
              return {
                x: n,
                h: r.point.y - b.top,
                w: Math.min(
                  0.045,
                  Math.max(
                    0.024,
                    0.5 * new f().setFromObject(r.object).getSize(new o()).z +
                      0.008,
                  ),
                ),
              };
          }
          return { x: v.min.x + e * y, h: 0.06, w: 0.03 };
        });
      m.remove(a);
      let S = {
        optic: r.sight.aim.clone(),
        muzzle: new o(0, 0.012, r.muzzle),
        grip: new o(
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
          mats: [...s],
          forks: x,
          anchors: S,
          name: e.name,
          opacity: 0,
        }),
        ie.set(t, n),
        ie.size > 48)
      ) {
        for (let [e, t] of ie)
          if (t !== V && !oe.includes(t) && !t.tilt.parent) {
            (ie.delete(e), t.model.dispose());
            break;
          }
      }
    }
    return n;
  }
  function Te(e, t) {
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
  function Ee(e, t = !1) {
    if (!T || !b) return;
    B.hold = t && !!te;
    let n = Yt(e);
    if (!t) {
      let e = !!L && n !== L;
      ((L = n), e && (v.present(), se.clack()));
    }
    if (n === te) return;
    let r = !te;
    te = n;
    let i = we(e);
    V && V !== i && !oe.includes(V) && oe.push(V);
    let a = oe.indexOf(i);
    (a >= 0 && oe.splice(a, 1),
      (V = i),
      i.tilt.parent || m.add(i.tilt),
      r && Te(i, 1),
      b.forks.forEach((e, t) => {
        ((e.tx = i.forks[t].x),
          (e.th = i.forks[t].h),
          (e.w = i.forks[t].w),
          r && ((e.x = e.tx), (e.h = e.th)));
      }));
  }
  function De() {
    if (!u) return;
    let e = innerWidth,
      t = innerHeight;
    ((s.width !== Math.round(e * u.getPixelRatio()) ||
      s.height !== Math.round(t * u.getPixelRatio())) &&
      u.setSize(e, t, !1),
      (h.aspect = e / t));
    let n = i.getBoundingClientRect();
    (n.width > 0 && !a
      ? h.setViewOffset(
          e,
          t,
          e / 2 - (n.left + n.width / 2),
          t / 2 - (n.top + n.height / 2),
          e,
          t,
        )
      : h.clearViewOffset(),
      h.updateProjectionMatrix());
  }
  function Oe(e) {
    if (((j = 0), !O || k || !u)) return;
    let t = Math.min(0.1, (e - (P || e)) / 1e3);
    ((P = e), a || (j = requestAnimationFrame(Oe)));
    let n = 1 - Math.exp(-t * 5);
    if (
      ((B.curPitch += (B.pitch - B.curPitch) * n),
      (B.curZoom += (B.zoom - B.curZoom) * n),
      B.hold ||
        (V && B.focus && V.anchors[B.focus]
          ? (V.tilt.updateMatrixWorld(!0),
            B.want.copy(V.anchors[B.focus]),
            V.model.group.localToWorld(B.want))
          : V && new f().setFromObject(V.tilt).getCenter(B.want)),
      B.qaTarget && B.want.copy(B.qaTarget),
      B.target.lerp(B.want, n),
      B.goal != null)
    ) {
      let e =
        B.goal + Math.PI * 2 * Math.round((B.phase - B.goal) / (Math.PI * 2));
      ((B.phase += (e - B.phase) * (1 - Math.exp(-t * 2.5))),
        Math.abs(e - B.phase) < 0.002 && (B.goal = null));
    }
    let r = B.phase,
      i = 2.3 / B.curZoom,
      o = (0.5 / Math.sqrt(B.curZoom)) * (B.rear ? 0.35 : 1) + B.curPitch * 1.6;
    if (v) {
      let e = v.root.position,
        t = e.x - B.target.x,
        n = e.z - B.target.z,
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
          l = ((2.35 - B.target.y) * i) / (a - 0.2);
        o += Math.min(2.2, Math.max(0, l - o)) * c;
      }
    }
    let s = Math.sin(r),
      c = Math.cos(r),
      l = Math.min(
        s ? (Wr.x - 0.4 - Math.sign(s) * B.target.x) / Math.abs(s) : 99,
        c ? (Wr.z - 0.55 - Math.sign(c) * B.target.z) / Math.abs(c) : 99,
      ),
      d = Math.min(i, l);
    (h.position.set(
      B.target.x + s * d,
      Math.min(Wr.h - 0.25, B.target.y + o),
      B.target.z + c * d,
    ),
      h.lookAt(B.target));
    let p = t / 0.3;
    V && V.opacity < 1 && Te(V, Math.min(1, V.opacity + p));
    for (let e = oe.length - 1; e >= 0; e--) {
      let t = oe[e];
      (Te(t, Math.max(0, t.opacity - p)),
        t.opacity <= 0 && (m.remove(t.tilt), oe.splice(e, 1)));
    }
    (b.update(t), v.update(t, h), De(), u.render(m, h));
  }
  function ke() {
    !j && O && (j = requestAnimationFrame(Oe));
  }
  let Ae = () => {
    document.hidden
      ? (cancelAnimationFrame(j), (j = 0), se.stop(), (z = !1))
      : O && ((P = 0), ke(), !a && !z && (se.start(), (z = !0)));
  };
  (document.addEventListener(`visibilitychange`, Ae),
    addEventListener(`resize`, ke));
  let je = !1,
    Me = !1,
    Ne = [],
    Pe = (e) =>
      window.requestIdleCallback
        ? requestIdleCallback(e, { timeout: 400 })
        : setTimeout(e, 30);
  function Fe() {
    return (
      (E ??= ue()
        .then(async (e) => {
          !k &&
            u &&
            (F && !a && Ee(F, ee),
            De(),
            await u.compileAsync?.(m, h),
            u.render(m, h),
            (je = !0),
            (P = 0),
            ke(),
            Ie(),
            await e?.(),
            !k &&
              !O &&
              (await me(),
              await u.compileAsync?.(m, h),
              k || (De(), u.render(m, h))));
        })
        .catch((e) => {
          k || t.warn?.(`Armory room`, String(e));
        })),
      E
    );
  }
  function Ie() {
    if (Me || !je || k) return;
    Me = !0;
    let e = () => {
      let n = Ne.shift();
      if (!n || k) {
        Me = !1;
        return;
      }
      if (!l.has(n.id)) {
        l.ensure(n.id, { priority: `visible` }).then(
          () => {
            (Ne.unshift(n), Pe(e));
          },
          () => Pe(e),
        );
        return;
      }
      try {
        let e = we(n);
        if (!e.warm) {
          e.warm = !0;
          for (let t of e.mats)
            for (let e of Object.values(t)) e?.isTexture && u.initTexture(e);
          (u.compile(e.tilt, h, m),
            e !== V &&
              !e.tilt.parent &&
              (Te(e, 0.5), u.compile(e.tilt, h, m), Te(e, 1), (e.opacity = 0)));
        }
      } catch (e) {
        t.warn?.(`Armory prewarm`, String(e));
      }
      Pe(e);
    };
    Pe(e);
  }
  return {
    live: !a,
    still: a,
    show(e) {
      ((O = e),
        (s.hidden = c.hidden = !e),
        e
          ? (Fe(), (P = 0), ke(), !a && !z && (se.start(), (z = !0)))
          : (cancelAnimationFrame(j), (j = 0), (z &&= (se.stop(), !1))));
    },
    setGun(e, { preview: t = !1 } = {}) {
      if (((F = e), (ee = t), !l.has(e.id))) {
        l.ensure(e.id, { priority: `visible` }).then(
          () => {
            F === e && !a && je && !k && (Ee(e, ee), ke());
          },
          () => {},
        );
        return;
      }
      (!a && je && Ee(e, t), ke());
    },
    preload(e) {
      a || ((de = !!e), e && Fe());
    },
    prewarm(e) {
      if (!a) {
        for (let t of e) t && !Ne.includes(t) && Ne.push(t);
        Ie();
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
        ? ((B.phase -= e - B.lastYaw), (B.goal = null))
        : r && (r !== B.focus || a !== !!B.rear) && (B.goal = a ? -1.25 : 0.45),
        (B.rear = a),
        (B.lastYaw = e),
        (B.pitch = t),
        (B.zoom = n),
        (B.focus = r),
        ke());
    },
    dispose() {
      ((k = !0),
        cancelAnimationFrame(j),
        se.stop(),
        document.removeEventListener(`visibilitychange`, Ae),
        removeEventListener(`resize`, ke));
      for (let e of ie.values()) e.model.dispose();
      (v?.dispose(),
        m?.traverse((e) => {
          e.geometry?.dispose?.();
        }),
        u?.dispose(),
        u?.forceContextLoss(),
        s.remove(),
        c.remove());
    },
  };
}
