// assets__bascule-view-BJhdmaMb 08 — math
// Lines 3339-5223 of readable/assets__bascule-view-BJhdmaMb.pretty.js (statement-aligned).
function ze(t, r, a, p) {
  let h = a.bascule,
    C = h.leaves[0].y,
    T = h.bankY ?? C,
    A = [],
    j = (...e) => (A.push(...e), e[0]),
    re = [],
    P = (a.climate?.tod ?? 20) > 6.5 && (a.climate?.tod ?? 20) < 19,
    F = new S();
  ((F.name = `bascule-live`), (F.userData.dynamicShadow = !0), r.add(F));
  let I = new S();
  ((I.name = `bascule-scenery`), r.add(I));
  let z = j(new o({ vertexColors: !0, roughness: 0.78, metalness: 0.12 })),
    V = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.3, `rgba(255,255,255,.45)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64));
      let r = new ne(e);
      return ((r.colorSpace = v), r);
    })();
  j(V);
  let ue = (e, t, n) => {
      let r = new Float32Array(e * 3).fill(-9999),
        i = new d();
      i.setAttribute(`position`, new c(r, 3));
      let a = new y({
        map: V,
        color: t,
        size: n,
        sizeAttenuation: !0,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        fog: !1,
      });
      j(i, a);
      let o = new w(i, a);
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
    de = (e, t, n, r = -e.hw, i = e.hw, a = !0) => {
      let o = [],
        s = e.hw,
        c = e.t,
        l = (t, n, a, s, c, l, u) => {
          let d = Math.max(a, r),
            f = Math.min(l, i);
          f - d > 0.01 && Z(o, e.dir * t, n, d, e.dir * s, c, f, u);
        };
      (l(t, -c, -s, n, 0, s, X.stone), l(t, 0, -B, n, 0.03, B, X.asphalt));
      for (let e of [-1, 1])
        (l(t, 0, e < 0 ? -s : B, n, 0.05, e < 0 ? -B : s, X.pave),
          l(t, 0, e * B - 0.15, n, 0.12, e * B + 0.15, X.kerb));
      for (let a of R(e, t, n, r, i))
        Z(
          o,
          a[0] - e.hinge,
          a[1] - e.y,
          a[2],
          a[3] - e.hinge,
          a[4] - e.y,
          a[5],
          X.iron,
        );
      for (let e of [-4.4, 0, 4.4].map(L))
        l(Math.max(t, -6), -c - 1.4, e - 0.35, n, -c, e + 0.35, X.blue);
      return (
        t <= 0 && a && l(-5.5, -c - 4, -5.5, -1, -c - 1.4, 5.5, X.stoneDark),
        o.length ? j(Re(o)) : null
      );
    },
    W = h.ramps?.[0],
    fe = W ? Math.atan2(W.yOut - W.yIn, W.xOut - W.xIn) : 0.36,
    pe = W ? Math.hypot(W.yOut - W.yIn, W.xOut - W.xIn) : 10.7,
    G = h.leaves.map((t) => {
      let n = (t, n) => {
          let r = new e(t, z);
          r.castShadow = r.receiveShadow = !0;
          let i = new S();
          return (i.position.set(...n), i.add(r), F.add(i), i);
        },
        r = n(de(t, 0, t.len), [t.hinge, t.y, 0]),
        i = n(de(t, 0, pe, W?.z0 ?? -t.hw, W?.z1 ?? t.hw, !1), [
          t.hinge,
          t.y,
          0,
        ]);
      i.visible = !1;
      let a = [],
        o = de(t, pe, t.len);
      (o.translate(-t.dir * pe, 0, 0),
        a.push(n(o, [t.hinge + t.dir * pe, t.y, 0])));
      let s = de(t, 0, pe, W?.z1 ?? t.hw, t.hw, !1);
      s && a.push(n(s, [t.hinge, t.y, 0]));
      let c = de(t, 0, pe, -t.hw, W?.z0 ?? -t.hw, !1);
      return (
        c && a.push(n(c, [t.hinge, t.y, 0])),
        a.forEach((e) => (e.visible = !1)),
        { L: t, whole: r, ramp: i, gone: a }
      );
    }),
    me = new S();
  ((me.visible = !1), F.add(me));
  {
    let t = [];
    for (let e of h.wreckRails ?? []) for (let n of e.boxes) Z(t, ...n, X.iron);
    for (let e of h.ramps ?? []) {
      let n = e.sx,
        r = (t) =>
          e.yIn + ((Math.abs(t) - e.xIn) / (e.xOut - e.xIn)) * (e.yOut - e.yIn);
      for (let r = 0; r < 7; r++) {
        let i = e.z0 + 0.6 + (r * (e.z1 - e.z0 - 1.2)) / 6,
          a = 0.25 + ((r * 37) % 5) * 0.12,
          o = new M().makeRotationFromEuler(
            new O(((r % 3) - 1) * 0.4, 0, n * (0.6 + ((r * 13) % 4) * 0.15)),
          );
        (o.setPosition(n * (e.xIn + 0.1), e.yIn + 0.02, i),
          Z(t, -0.05, 0, -0.45, 0.05, a + 0.4, 0.45, X.stoneDark, o));
      }
      for (let i = 0; i < 6; i++) {
        let a = e.xIn + 1 + i * 1.6,
          o = new M().makeRotationFromEuler(
            new O(0.5 + (i % 3) * 0.25, 0, ((i % 2) - 0.5) * 0.3),
          );
        (o.setPosition(n * a, r(a) - 0.2, e.z1 + 0.05),
          Z(t, -0.4, 0, -0.04, 0.4, 0.5 + (i % 3) * 0.15, 0.04, X.blue, o));
      }
    }
    if (t.length) {
      let n = new e(j(Re(t)), z);
      ((n.castShadow = n.receiveShadow = !0), me.add(n));
    }
  }
  let he = new Map(),
    ge = (e) => {
      if (!he.has(e)) {
        let t = [];
        for (let n = 0; n < e; n += 0.5)
          Z(
            t,
            n,
            -0.11,
            -0.11,
            Math.min(e, n + 0.5),
            0.11,
            0.11,
            (n / 0.5) % 2 ? 12850716 : 15198183,
          );
        he.set(e, j(Re(t)));
      }
      return he.get(e);
    },
    _e = h.barriers.map((t) => {
      let n = t.len ?? 8.7,
        r = new S();
      (r.position.set(t.x, C + 1.15, t.z),
        (r.rotation.y = t.side > 0 ? Math.PI / 2 : -Math.PI / 2));
      let i = new e(ge(n), z);
      return (r.add(i), F.add(r), { b: t, pv: r, len: n });
    }),
    ve = ue(h.barriers.length, 16722458, 1.5);
  F.add(ve.points);
  let ye = h.signals ?? [],
    be = ue(ye.length * 2, 16722458, 1.6),
    K = ue(ye.length, 3866474, 1.3);
  F.add(be.points, K.points);
  let q = ue(ye.length, 16753178, 1.5),
    Se = ue(4, 16753178, 1.8);
  F.add(q.points, Se.points);
  let J = Math.abs(h.towers?.[0] ?? 26),
    Ce = Math.abs(
      a.objects.find((e) => e.id === `arch-booth-s`)?.x ?? J - 11.1,
    ),
    Te = [-1, 1].map((e) => ({
      t: e,
      bank: e < 0 ? 0 : 1,
      owner: null,
      arm: 1,
      flash: -99,
    }));
  (t.world?.map &&
    (t.world.map.signalAt = (e) =>
      Math.abs(Math.abs(e.pos?.[0] ?? 0) - J) < 4
        ? [Math.sign(e.pos[0]) * (J - 9.6), 43.4, 0]
        : null),
    re.push(() => {
      t.world?.map && delete t.world.map.signalAt;
    }));
  let Ee = [],
    Y = j(new u(1.1, 7, 14, 1, !0));
  (Y.rotateX(-Math.PI / 2), Y.translate(0, 0, 3.5));
  let De = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      return (
        n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.6, `rgba(255,255,255,.55)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64),
        j(new ne(e))
      );
    })(),
    Oe = j(new D(10, 10));
  Oe.rotateX(-Math.PI / 2);
  let ke = j(new k(4.5, 0.5, 110, 16, 1, !0));
  (ke.rotateX(Math.PI / 2), ke.translate(0, 0, 55));
  let Ae = new s(),
    je = ue(4, 16777215, 2.4);
  F.add(je.points);
  for (let t of [-1, 1])
    for (let n of [-4.2, 4.2]) {
      let r = t * (J - 9.5),
        i = new S();
      i.position.set(r, 40.6, n);
      let a = new e(
        j(new k(0.42, 0.32, 0.8, 12)),
        j(new o({ color: 2764081, roughness: 0.6, metalness: 0.5 })),
      );
      ((a.rotation.x = Math.PI / 2), (a.position.z = -0.2), i.add(a));
      let s = j(
          new g({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
            blending: 2,
            side: 2,
            fog: !1,
          }),
        ),
        c = new e(Y, s);
      ((c.frustumCulled = !1), i.add(c), F.add(i));
      let l = j(
          new g({
            map: De,
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
            blending: 2,
            fog: !1,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
          }),
        ),
        u = new e(Oe, l);
      ((u.frustumCulled = !1), (u.renderOrder = 1), F.add(u));
      let d = new S();
      d.position.set(r, 41.2, n);
      let f = j(
          new g({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
            blending: 2,
            side: 2,
            fog: !1,
          }),
        ),
        p = new e(ke, f);
      ((p.frustumCulled = !1),
        d.add(p),
        F.add(d),
        Ee.push({
          t,
          z: n,
          g: i,
          mat: s,
          pool: u,
          pmat: l,
          sg: d,
          smat: f,
          on: 0,
          col: new _(1, 1, 1),
        }));
    }
  let Me = new s(),
    Ne = new _(),
    Fe = (e) =>
      (t.world?.match?.objectives ?? []).find(
        (t) =>
          Math.sign(t.pos?.[0] ?? 0) === e &&
          Math.abs(Math.abs(t.pos[0]) - J) < 4,
      ) ?? null;
  if (!P) {
    let t = (() => {
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
      let i = new ne(e);
      return ((i.colorSpace = v), i);
    })();
    j(t);
    let n = [],
      r = (e, t, r, i, a) => {
        let o = new D(r, i);
        (o.rotateX(-Math.PI / 2), o.translate(e, 0.45, t), Q(o, a), n.push(o));
      };
    for (let e of h.towers)
      for (let t of [-1, 1])
        (r(e, L(t * 26), 14, 24, 16769200),
          r(e + (e < 0 ? -10 : 10), L(t * 24), 4, 16, 16756832));
    for (let e of [-50, -39, 39, 50].map(U))
      for (let t of [-1, 1]) r(e, L(t * 16), 2.4, 18, 16754250);
    for (let e of [-1, 1])
      for (let t = -500; t <= 500; t += 70)
        Math.abs(t) < 60 ||
          r(e * (48 - (t % 140 ? 6 : 12)), t, 2.5, 30, 13623295);
    let i = new e(
      j(ee(n)),
      j(
        new g({
          map: t,
          vertexColors: !0,
          transparent: !0,
          opacity: 0.42,
          depthWrite: !1,
          blending: 2,
        }),
      ),
    );
    (n.forEach((e) => e.dispose()), (i.renderOrder = 1), I.add(i));
  }
  let Le = h.cars.flatMap((e) => [
      [e.x, e.z, e.alongX],
      [-e.x, -e.z, e.alongX],
    ]),
    ze = ue(Le.length * 4, 16753178, 1.2);
  F.add(ze.points);
  let Be = h.ramps?.length
      ? [H(h.ramps[0].z0 - 0.3), H(h.ramps[0].z1 + 0.3)]
      : null,
    Ve = xe({
      brace: ae.brace,
      tug: !1,
      bowsprit: !1,
      lights: !P,
      dismast: ie,
      breach: Be,
    }),
    He = Ve.group;
  ((He.name = `bascule-barque`),
    He.scale.setScalar(ae.k),
    F.add(He),
    A.push(Ve));
  {
    let t = [],
      n = ae.k,
      r = (e, t, r) => [e / n, t / n, (r - ae.z0) / n];
    for (let [e, i, a, o, s, c] of h.shipStairs ?? []) {
      let l = Math.round((c - s) / 0.24);
      for (let n = 0; n < l; n++) {
        let u = i + ((o - i) * n) / l,
          d = i + ((o - i) * (n + 1)) / l,
          f = s + ((c - s) * (n + 1)) / l,
          p = r(e, f - 0.06 - (c - s) / l, u),
          m = r(a, f, d);
        Z(t, p[0], p[1], p[2], m[0], m[1], m[2], 10847840);
      }
      for (let l of [e, a]) {
        let e = r(l - 0.04, s + 0.95, i),
          a = r(l + 0.04, c + 1, o),
          u = Math.hypot(a[1] - e[1], a[2] - e[2]),
          d = new M().makeRotationX(-Math.atan2(a[1] - e[1], a[2] - e[2]));
        (d.setPosition(e[0] + 0.04 / n, (e[1] + a[1]) / 2, (e[2] + a[2]) / 2),
          Z(t, -0.03, -0.025, -u / 2, 0.03, 0.025, u / 2, 14933451, d));
      }
    }
    if (t.length) {
      let n = new e(j(Re(t)), z);
      ((n.castShadow = !0), He.add(n));
    }
  }
  let Ue = we({ S: C, day: P });
  (I.add(Ue.group), A.push(Ue));
  let We = Pe(h.vehicles ?? []);
  (I.add(We.group), A.push(We));
  let Ge = [
      [-34, 1, 0],
      [-71.4, -1, 0.5],
    ].map(([e, t, n]) => {
      let r = Ue.clipper();
      return (F.add(r), { g: r, x: e, dir: t, ph: n });
    }),
    Ke = [0, 1].map(() =>
      j(
        new o({
          vertexColors: !0,
          roughness: 0.78,
          metalness: 0.12,
          color: X.blue,
        }),
      ),
    );
  {
    let t = [[], []],
      n = [];
    for (let e of h.chains)
      for (let r of [1, -1]) {
        let a = e.pts.map(([t, n]) => new s(t * r, n, e.z * r)),
          o = new m(a),
          c = new m(a.map((e) => e.clone().setY(e.y - 1.4)));
        for (let e of [o, c]) {
          let n = new l(e, 48, e === o ? 0.42 : 0.32, 8);
          (Q(n, 16777215), t[r > 0 ? 0 : 1].push(n));
        }
        for (let t = 1; t < 28; t++) {
          let a = o.getPoint(t / 28),
            s = c.getPoint(t / 28),
            l = new i(0.16, a.y - s.y, 0.16);
          if (
            (l.translate((a.x + s.x) / 2, (a.y + s.y) / 2, e.z * r),
            Q(l, X.white),
            n.push(l),
            s.y - C > 1.5)
          ) {
            let t = new i(0.1, s.y - C - 1.2, 0.1);
            (t.translate(s.x, (s.y + C + 1.2) / 2, e.z * r),
              Q(t, X.iron),
              n.push(t));
          }
        }
      }
    for (let n of [0, 1]) {
      let r = new e(j(Re(t[n])), Ke[n]);
      ((r.castShadow = !0), I.add(r));
    }
    let r = new e(j(Re(n)), z);
    ((r.castShadow = !0), I.add(r));
  }
  let qe = new _(),
    Je = new _(X.blue);
  if (h.linings?.length) {
    let n = (a.lights ?? [])
        .filter((e) => e.kind === `quad` && Math.abs(e.x) < 144)
        .map((e) => [e.x, e.y, e.z, Math.min(1.6, e.gain ?? 1)]),
      r = {
        plaster: [13286815, 0.04, 0.24, 9],
        dado: [6046768, 0.04, 0.24, 9],
        road: [5656907, 0.035, 0.42, 16],
        floor: [11049602, 0.06, 0.3, 12],
        ceil: [11773580, 0.05, 0.16, 10],
        stone: [9405552, 0.035, 0.2, 9],
        step: [10261638, 0.045, 0.3, 10],
        stepEdge: [7301471, 0.07, 0.3, 10],
      },
      i = new _(16767392),
      o = new _();
    new _();
    let s = [],
      c = [],
      l = (e, t, a, s) => {
        let [c, l, u, d] = r[s],
          f = l;
        for (let [r, i, o, s] of n) {
          let n = (e - r) ** 2 + (t - i) ** 2 * 0.35 + (a - o) ** 2;
          n < 140 && (f += u * s * Math.exp(-n / d));
        }
        return (
          (f = Math.min(f, 0.42)),
          o
            .set(c)
            .multiplyScalar(f * 1.3)
            .lerp(i.clone().multiplyScalar(f * 0.9), Math.min(0.3, f * 0.6))
        );
      },
      u = (e, t) => {
        for (let n of e)
          (s.push(...n), l(n[0], n[1], n[2], t), c.push(o.r, o.g, o.b));
      },
      f = (e, t, n = 1, r = []) => {
        let i = Math.max(1, Math.ceil((t - e) / n - 1e-6)),
          a = [];
        for (let n = 0; n <= i; n++) a.push(e + ((t - e) * n) / i);
        return [
          ...new Set([...a, ...r.filter((n) => n > e + 0.02 && n < t - 0.02)]),
        ].sort((e, t) => e - t);
      },
      p = (e, t, n, r, i, a = null) => {
        let [o, s] = [0, 1, 2].filter((t) => t !== e),
          c = f(n[o], r[o]),
          l = f(n[s], r[s], 1, a != null && s === 1 ? [a] : []);
        for (let n = 0; n < c.length - 1; n++)
          for (let r = 0; r < l.length - 1; r++) {
            let a = (n, r) => {
                let i = [0, 0, 0];
                return ((i[e] = t), (i[o] = n), (i[s] = r), i);
              },
              d = a(c[n], l[r]),
              f = a(c[n + 1], l[r]),
              p = a(c[n + 1], l[r + 1]),
              m = a(c[n], l[r + 1]),
              h = [0, 0, 0];
            ((h[e] = t),
              (h[o] = (c[n] + c[n + 1]) / 2),
              (h[s] = (l[r] + l[r + 1]) / 2));
            let g = i(h);
            u([d, f, p, d, p, m], g);
          }
      },
      m = [C, C + 8, C + 20, T],
      v = [];
    for (let [e, [t, n, r, i, a, o, c = `plaster`]] of h.linings.entries()) {
      let l = s.length,
        u = [t, n, r],
        d = [i, a, o],
        f = [i - t, a - n, o - r],
        h = f.indexOf(Math.min(...f)),
        g = (u[h] + d[h]) / 2,
        _ =
          c === `plaster` && h !== 1 && m.some((e) => Math.abs(n - e) < 0.1)
            ? n + 1.05
            : null;
      (p(h, g, u, d, (e) => (_ != null && e[1] < _ ? `dado` : c), _),
        (v[e] = [l, s.length]));
    }
    for (let [e, t, n, r, i, a, o] of h.flights ?? []) {
      let s = Math.round((a - i) / 0.25),
        c = Math.sign(r - n),
        l = Math.abs(r - n);
      for (let r = 0; r < s; r++) {
        let u = n + (c * l * r) / s,
          d = n + (c * l * (r + 1)) / s,
          f = i + ((a - i) * (r + 1)) / s,
          m = o ?? (Math.abs(i - C) < 0.1 ? C : f - 0.5),
          h = [Math.min(u, d), m, e],
          g = [Math.max(u, d), f, t];
        for (let e = 0; e < 3; e++)
          for (let t of [0, 1])
            p(e, t ? g[e] : h[e], h, g, () =>
              e === 1 ? (t ? `step` : `ceil`) : `stepEdge`,
            );
      }
    }
    for (let [e, t, n, r, i, a] of h.slabs ?? []) {
      let o = [e, t, n],
        s = [r, i, a];
      for (let e = 0; e < 3; e++)
        for (let t of [0, 1])
          p(e, t ? s[e] : o[e], o, s, () =>
            e === 1 ? (t ? `floor` : `ceil`) : `stepEdge`,
          );
    }
    let y = j(new d());
    (y.setAttribute(`position`, new b(s, 3)),
      y.setAttribute(`color`, new b(c, 3)),
      I.add(new e(y, j(new g({ vertexColors: !0, side: 2, fog: !1 })))));
    let x = new Map();
    (h.liningOwners ?? []).forEach((e, t) => {
      for (let n of e) (x.has(n) || x.set(n, []), x.get(n).push(t));
    });
    let S = new Set();
    re.push(
      t.events.on(`destruction:state`, (e) => {
        let t = x.get(e?.id);
        if (!t || !e.state?.hp?.some((e) => e === 0)) return;
        let n = y.attributes.position.array;
        for (let e of t) {
          if (S.has(e) || !v[e]) continue;
          S.add(e);
          let [t, r] = v[e];
          for (let e = t; e < r; e++) n[e] = 0;
        }
        y.attributes.position.needsUpdate = !0;
      }),
    );
  }
  {
    let t = h.leaves[0].hw,
      n = [],
      r = [],
      a = [],
      o = T,
      s = 2830131,
      c = 5594467,
      l = 8014384,
      u = 4020796,
      d = 14198049,
      f = 1513498,
      p = (e, t, r, i, a, o) => {
        let s = new k(a, a, Math.abs(t - e), 8);
        (s.rotateZ(Math.PI / 2),
          s.translate((e + t) / 2, r, i),
          Q(s, o),
          n.push(s));
      },
      m = (e, t, r, i, a, o) => {
        let s = new k(a, a, Math.abs(t - e), 8);
        (s.rotateX(Math.PI / 2),
          s.translate(i, r, (e + t) / 2),
          Q(s, o),
          n.push(s));
      },
      g = (e, t, r, i, a, o, s = 12) => {
        let c = new k(i, i, a, s);
        (c.translate(e, t + a / 2, r), Q(c, o), n.push(c));
      };
    for (let e = U(-58.4); e < -37; e += 0.45)
      Z(n, e, o + 0.035, -1.9, e + 0.07, o + 0.055, 1.9, f);
    for (let e of [-1, 1])
      Z(n, U(-58.6), o, e * 1.97 - 0.03, -37, o + 0.16, e * 1.97 + 0.03, d);
    (p(U(-58), -37, C - 1.95, 1.3, 0.16, l),
      p(U(-58), -37, C - 1.95, 1.75, 0.11, u),
      Z(n, U(-58), C - 2.05, -1.9, -37, C - 1.98, -1.2, c));
    for (let e of [-2.15, 2.15])
      Z(n, -37.12, o, e - 0.12, -36.98, o + 2.75, e + 0.12, c);
    Z(n, -37.12, o + 2.62, -2.25, -36.98, o + 2.78, 2.25, c);
    for (let e = U(-54); e < -37; e += 6)
      Z(n, e - 0.5, C - 1.72, -0.18, e + 0.5, C - 1.62, 0.18, f);
    for (let e of [-3.4, 3.4]) {
      let t = -17.6,
        r = C - 1.2,
        a = 2.7;
      for (let o = 0; o < 9; o++) {
        let l = -Math.PI * 0.95 + o * Math.PI * 0.09,
          u = l + Math.PI * 0.09,
          d = [t + Math.cos(l) * a, r + Math.sin(l) * a],
          f = [t + Math.cos(u) * a, r + Math.sin(u) * a],
          p = Math.hypot(f[0] - d[0], f[1] - d[1]),
          m = new i(p + 0.05, 0.45, 0.36);
        (m.rotateZ(Math.atan2(f[1] - d[1], f[0] - d[0])),
          m.translate((d[0] + f[0]) / 2, (d[1] + f[1]) / 2, e),
          Q(m, s),
          n.push(m));
        let h = [(d[0] + f[0]) / 2, (d[1] + f[1]) / 2],
          g = Math.atan2(h[1] - r, h[0] - t),
          _ = new i(0.18, 0.22, 0.36);
        (_.rotateZ(g),
          _.translate(h[0] - Math.cos(g) * 0.32, h[1] - Math.sin(g) * 0.32, e),
          Q(_, c),
          n.push(_));
      }
      let l = new k(0.75, 0.75, 0.42, 14);
      (l.rotateX(Math.PI / 2),
        l.translate(-20.700000000000003, o + 2.35, e),
        Q(l, c),
        n.push(l));
    }
    m(-4.4, 4.4, o + 2.35, -20.7, 0.16, c);
    for (let e of [-4.4, 4.4])
      Z(n, -21.1, o, e - 0.3, -20.3, o + 2.5, e + 0.3, s);
    for (let e of [-11.3, 11.3].map(L)) {
      g(-35.4, o, e, 0.85, 2.9, u);
      for (let t of [0.5, 1.5, 2.5]) g(-35.4, o + t, e, 0.9, 0.12, f);
    }
    for (let e of [-14.15, 14.15].map(L)) p(-36.2, -15.8, o + 2.75, e, 0.13, l);
    p(-36.2, -15.8, C - 1.05, L(-6), 0.1, u);
    for (let [e, t, r, i] of [
      [-20.5, -5.3, -16.2, -5.15],
      [-20.5, 5.15, -16.2, 5.3],
      [-20.5, -5.3, -20.35, 5.3],
    ])
      Z(n, e, o + 0.035, t, r, o + 0.05, i, d);
    for (let [e, t, n] of [
      [-36.4, C - 1.1, -13.6],
      [-36.4, C - 1.1, 13.6],
      [-15.7, C - 1.1, -13.6],
      [-15.7, C - 1.1, 13.6],
      [-36.3, o + 2.95, -2.5],
      [-36.3, o + 2.95, 2.5],
    ])
      a.push([e, t, Math.abs(n) > 3 ? L(n) : n]);
    for (let e of [-1, 1])
      for (let [r, a] of [
        [-95.2, -88.6],
        [-87.4, -69.2],
        [-68, -63],
        [-61.8, -58],
      ].map((e) => e.map(U))) {
        let s = (r + a) / 2,
          c = (a - r) / 2 - 0.2,
          l = C - 1.05,
          u = Math.max(o + 1.8, l - c * 0.55),
          d = e * (t + 0.29);
        for (let e = 0; e < 10; e++) {
          let t = e / 10,
            r = (e + 1) / 10,
            a = (e) => {
              let t = Math.PI * (1 - e);
              return [s + Math.cos(t) * c, u + Math.sin(t) * (l - u)];
            },
            o = a(t),
            f = a(r),
            p = Math.hypot(f[0] - o[0], f[1] - o[1]),
            m = new i(p + 0.06, 0.32, 0.08);
          (m.rotateZ(Math.atan2(f[1] - o[1], f[0] - o[0])),
            m.translate((o[0] + f[0]) / 2, (o[1] + f[1]) / 2, d),
            Q(m, 11773317),
            n.push(m));
        }
      }
    for (let e of [-1, 1])
      for (let i of [-86, -77, -62].map(U))
        (Z(
          n,
          i - 0.1,
          C,
          e * (t - 0.3) - 0.1,
          i + 0.1,
          C + 4.6,
          e * (t - 0.3) + 0.1,
          f,
        ),
          Z(
            n,
            i - 0.25,
            C + 4.6,
            e * (t - 0.3) - 0.25,
            i + 0.25,
            C + 4.75,
            e * (t - 0.3) + 0.25,
            f,
          ),
          r.push([i, C + 4.4, e * (t - 0.3)]));
    let _ =
        (h.vehicles?.find((e) => e.kind === `tractor` && e.x < 0)?.z ?? 0.2) -
        0.2,
      v =
        (h.vehicles?.find((e) => e.kind === `trailer` && e.x < 0)?.z ?? -2.85) +
        2.85,
      y =
        (h.vehicles?.find((e) => e.kind === `tractor` && e.x < 0)?.x ?? -44.7) +
        44.7,
      b =
        (h.vehicles?.find((e) => e.kind === `trailer` && e.x < 0)?.x ??
          -50.35) + 50.35;
    for (let e of [-2.25, 2.65])
      Z(
        n,
        -45.7 + y,
        C + 1.95,
        e + _ - 0.02,
        -44 + y,
        C + 2.85,
        e + _ + 0.02,
        1054236,
      );
    for (let [e, t] of [
      [-54.5, -4.15],
      [-54.5, -1.55],
      [-43.35, -2.25],
      [-43.35, 2.65],
    ])
      a.push([e + (e < -50 ? b : y), C + 1, t + (e < -50 ? v : _)]);
    let x = [];
    for (let e of n) {
      x.push(e);
      let t = e.clone();
      (t.rotateY(Math.PI), x.push(t));
    }
    let S = new e(j(Re(x)), z);
    ((S.castShadow = !0), I.add(S));
    let w = a.filter(Boolean),
      E = ue(w.length * 2, 16752672, 1.1);
    if (
      (w.forEach(([e, t, n], r) => {
        (E.set(r * 2, e, t, n), E.set(r * 2 + 1, -e, t, -n));
      }),
      E.dirty(),
      I.add(E.points),
      !P)
    ) {
      let e = ue(r.length * 2, 16767392, 1.6);
      (r.forEach(([t, n, r], i) => {
        (e.set(i * 2, t, n, r), e.set(i * 2 + 1, -t, n, -r));
      }),
        e.dirty(),
        I.add(e.points));
    }
  }
  let Ye = [],
    Xe = [],
    Ze = [];
  {
    let r = [],
      a = [],
      o = 12891542,
      s = 10129272,
      c = 14200906,
      l = 16761464,
      d = (e, t, n, r, a, o, s, c, l) => {
        let u = new i(a, o, s);
        (c && u.rotateY(c), u.translate(t, n, r), Q(u, l), e.push(u));
      },
      p = (e, t, n, r, i, a, o, s, c, l = 0) => {
        let u = new k(t, n, r, i);
        (l && u.rotateY(l), u.translate(a, o + r / 2, s), Q(u, c), e.push(u));
      },
      m = (e, t, n, r, a, o, s, c, l) => {
        let u = o[1] - a[1],
          d = o[0] - a[0],
          f = new i(c, s, Math.hypot(d, u) + s * 0.4);
        (f.rotateX(-Math.atan2(u, d)), t && f.rotateY(Math.PI / 2));
        let p = (a[0] + o[0]) / 2,
          m = (a[1] + o[1]) / 2;
        (t ? f.translate(p, m, n + r) : f.translate(n + r, m, p),
          Q(f, l),
          e.push(f));
      };
    for (let e of h.towers) {
      let t = Math.sign(e) || 1;
      for (let n of [1, -1]) {
        let i = e + t * n * 9,
          c = t * n;
        for (let e of [-1, 1])
          (Z(r, i, C, L(e * 7), i + c * 0.3, 39.4, L(e * 7.6), o),
            Z(r, i, C, L(e * 6.9), i + c * 0.45, C + 1.1, L(e * 7.7), s));
        for (let e of [-1, 1])
          (p(r, 0.22, 0.22, 5.6, 8, i + c * 0.24, C + 0.1, L(e * 7.25), o),
            Z(
              r,
              i,
              C + 5.6,
              L(e * 6.95),
              i + c * 0.5,
              C + 6.05,
              L(e * 7.55),
              s,
            ));
        let u = 7.3 + se,
          d = (e) => [
            -u + u * e,
            C +
              6.1 +
              (2.5 * Math.sin(e * Math.PI * 0.4)) / Math.sin(Math.PI * 0.4),
          ];
        for (let e of [-1, 1])
          for (let t = 0; t < 8; t++) {
            let n = d(t / 8),
              a = d((t + 1) / 8);
            ((n[0] *= -e),
              (a[0] *= -e),
              m(r, !1, i, c * 0.16, n, a, 0.42, 0.32, 8747619));
            let o = Math.min(n[0], a[0]),
              s = Math.max(n[0], a[0]),
              l = Math.min(n[1], a[1]) - 0.2;
            l > C + 6.6 && Z(r, i, C + 6.6, o, i + c * 0.03, l, s, 7300694);
          }
        let f = (e, t, n) => {
          for (let a of [-1, 1]) {
            let s = [e + a * (n / 2 + 0.15), t + 0.05],
              l = [e, t + 0.05 + n * 0.38];
            (m(r, !1, i, c * 0.1, s, l, 0.16, 0.2, o),
              Z(
                r,
                i,
                t - 0.35,
                s[0] - 0.1,
                i + c * 0.2,
                t + 0.05,
                s[0] + 0.1,
                o,
              ));
          }
        };
        for (let e of [-4.2, -1.4, 1.4, 4.2].map(L))
          for (let t of [C + 9, C + 14.2]) f(e, t + 2.4, 0.8);
        for (let e of [-9.5, -3.2, 3.2, 9.5].map(L)) f(e, C + 27.1, 0.9);
        for (let e of [-9.5, 9.5].map(L))
          (f(e, C + 8, 1.2), f(e, C + 14.5, 1.2));
        for (let e of (n > 0 ? [-9.5, -3.2, 3.2, 9.5] : [-9.5, 9.5]).map(L))
          f(e, C + 23.2, 1.4);
        if (n < 0) for (let e of [-5.2, 5.2].map(L)) f(e, C + 23.2, 3.6);
        if (n > 0) for (let e of [-8.85, 8.85].map(L)) f(e, C + 2.5, 2.1);
        let h = (e) => 8.8 * (1 - e / 14);
        for (let i of [-4.6, 4.6].map(L)) {
          let s = e + t * n * h(4.2),
            u = e + t * n * (h(1.4) + 0.15);
          Z(r, s, 41.4, i - 0.85, u, 43.4, i + 0.85, o);
          let d = new k(0.98, 0.98, Math.abs(u - s) + 0.1, 3);
          (d.rotateX(-Math.PI / 2),
            d.rotateY(Math.PI / 2),
            d.translate((s + u) / 2, 43.89, i),
            Q(d, 3884371),
            r.push(d),
            Z(a, u, 41.8, i - 0.42, u + c * 0.04, 43, i + 0.42, l));
        }
        Z(r, i - c * 0.2, 40, L(-10.2), i + c * 0.25, 40.55, L(10.2), o);
        let g = Math.ceil((9.6 + se) / 1.6);
        for (let e = -g; e <= g; e++) {
          let t = (e * (9.6 + se)) / g;
          Z(r, i - c * 0.2, 40.55, t - 0.4, i + c * 0.25, 41.45, t + 0.4, o);
        }
      }
      for (let t of [1, -1]) {
        let n = L(t * 12);
        for (let i of [-1, 1])
          (Z(r, e + i * 2.6, C, n, e + i * 3.1, 39.4, n + t * 0.3, o),
            Z(r, e + i * 2.5, C, n, e + i * 3.2, C + 1.1, n + t * 0.45, s));
        let i = (e, i, a) => {
          for (let s of [-1, 1]) {
            let c = [e + s * (a / 2 + 0.15), i + 0.05],
              l = [e, i + 0.05 + a * 0.38];
            (m(r, !0, n, t * 0.1, c, l, 0.16, 0.2, o),
              Z(
                r,
                c[0] - 0.1,
                i - 0.35,
                n,
                c[0] + 0.1,
                i + 0.05,
                n + t * 0.2,
                o,
              ));
          }
        };
        for (let t of [-5, 0, 5])
          for (let n of [8, 14.5, 18.5]) i(e + t, C + n, 1.2);
        for (let t of [-4, 4]) i(e + t, C + 23.2, 1.4);
        for (let t of [-6, -2, 2, 6]) i(e + t, C + 27.1, 0.9);
        {
          let n = t * ((11.8 + se) * (1 - 1.4 / 14) + 0.15),
            i = n - t * 2.5100000000000002;
          Z(r, e - 0.85, 41.4, i, e + 0.85, 43.4, n, o);
          let s = new k(0.98, 0.98, Math.abs(n - i) + 0.1, 3);
          (s.rotateX(-Math.PI / 2),
            s.translate(e, 43.89, (i + n) / 2),
            Q(s, 3884371),
            r.push(s),
            Z(a, e - 0.42, 41.8, n, e + 0.42, 43, n + t * 0.04, l));
        }
        Z(r, e - 7.2, 40, n - t * 0.2, e + 7.2, 40.55, n + t * 0.25, o);
        for (let i = -6.4; i <= 6.41; i += 1.6)
          Z(
            r,
            e + i - 0.4,
            40.55,
            n - t * 0.2,
            e + i + 0.4,
            41.45,
            n + t * 0.25,
            o,
          );
      }
      {
        let t = new u(1, 1, 4);
        (t.rotateY(Math.PI / 4),
          t.scale(8.8 / Math.SQRT1_2, 14, (11.8 + se) / Math.SQRT1_2),
          t.translate(e, 47, 0),
          Q(t, X.slate),
          r.push(t));
      }
      p(r, 1.25, 1.25, 3.2, 8, e, 50.4, 0, o, Math.PI / 8);
      for (let t = 0; t < 8; t++) {
        let n = (t * Math.PI) / 4;
        d(
          a,
          e + Math.sin(n) * 1.2,
          52,
          Math.cos(n) * 1.2,
          0.38,
          1.3,
          0.06,
          n,
          l,
        );
      }
      p(r, 1.45, 1.45, 0.3, 8, e, 53.6, 0, o, Math.PI / 8);
      {
        let t = new u(1.45, 3.4, 8);
        (t.rotateY(Math.PI / 8),
          t.translate(e, 55.6, 0),
          Q(t, X.slate),
          r.push(t));
      }
      p(r, 0.09, 0.09, 5.2, 6, e, 57.2, 0, c);
      {
        let t = new n(0.42, 10, 8);
        (t.translate(e, 57.6, 0), Q(t, c), r.push(t));
      }
      Ye.push([e, 62.2, 0]);
      for (let [t, i] of [
        [-8.7, -11.7],
        [-8.7, 11.7],
        [8.7, -11.7],
        [8.7, 11.7],
      ]) {
        let f = L(i),
          m = e + t,
          h = Math.atan2(Math.sign(t), Math.sign(f));
        for (let e of [C + 9, C + 17, C + 26.5])
          for (let t of [-0.55, 0.55]) {
            let n = h + t;
            d(
              a,
              m + Math.sin(n) * 1.52,
              e,
              f + Math.cos(n) * 1.52,
              0.22,
              1.2,
              0.06,
              n,
              l,
            );
          }
        p(r, 1.8, 1.8, 6, 8, m, 39.8, f, o, Math.PI / 8);
        for (let e of [41.6, 44.6])
          p(r, 1.92, 1.92, 0.22, 8, m, e, f, s, Math.PI / 8);
        for (let e = 0; e < 8; e++) {
          let t = (e * Math.PI) / 4;
          d(
            a,
            m + Math.sin(t) * 1.69,
            43.1,
            f + Math.cos(t) * 1.68,
            0.24,
            1.1,
            0.06,
            t,
            l,
          );
        }
        p(r, 2.15, 1.8, 0.6, 8, m, 45.8, f, o, Math.PI / 8);
        for (let e = 0; e < 8; e++) {
          let t = (e * Math.PI) / 4;
          d(
            r,
            m + Math.sin(t) * 1.95,
            46.75,
            f + Math.cos(t) * 1.95,
            0.5,
            0.7,
            0.3,
            t,
            o,
          );
        }
        {
          let e = new u(1.75, 10.5, 8);
          (e.rotateY(Math.PI / 8),
            e.translate(m, 51.65, f),
            Q(e, X.slate),
            r.push(e));
        }
        for (let e = 0; e < 4; e++) {
          let t = (e * Math.PI) / 2 + Math.PI / 4,
            n = m + Math.sin(t) * 1.95,
            i = f + Math.cos(t) * 1.95;
          p(r, 0.18, 0.18, 1.1, 6, n, 46.4, i, o);
          let a = new u(0.26, 1.7, 6);
          (a.translate(n, 48.35, i), Q(a, X.slate), r.push(a));
        }
        p(r, 0.05, 0.05, 2.2, 6, m, 56.7, f, c);
        {
          let e = new n(0.26, 8, 6);
          (e.translate(m, 58.9, f), Q(e, c), r.push(e));
        }
      }
    }
    for (let e of [-62, 62].map(U))
      for (let t of [-10.5, 10.5].map(L)) {
        let i = T + 5,
          f = T + 16;
        for (let [m, h] of [
          [-4, -3.5],
          [-4, 3.5],
          [4, -3.5],
          [4, 3.5],
        ]) {
          let g = e + m,
            _ = t + h;
          p(r, 0.78, 0.78, f + 2.6 - i, 8, g, i, _, o, Math.PI / 8);
          for (let e of [i + 4.6, f - 0.2])
            p(r, 0.9, 0.9, 0.22, 8, g, e, _, s, Math.PI / 8);
          p(r, 0.98, 0.78, 0.4, 8, g, f + 2.2, _, o, Math.PI / 8);
          {
            let e = new u(0.9, 4.6, 8);
            (e.rotateY(Math.PI / 8),
              e.translate(g, f + 2.6 + 2.3, _),
              Q(e, X.slate),
              r.push(e));
          }
          {
            let e = new n(0.16, 8, 6);
            (e.translate(g, f + 7.3, _), Q(e, c), r.push(e));
          }
          let v = Math.atan2(Math.sign(m), Math.sign(h));
          for (let e of [i + 2.5, i + 7.5])
            d(
              a,
              g + Math.sin(v) * 0.8,
              e,
              _ + Math.cos(v) * 0.8,
              0.16,
              0.9,
              0.05,
              v,
              l,
            );
        }
        for (let n of [-1, 1]) {
          let s = e + n * 4;
          Z(r, s - n * 0.15, f, t - 3, s + n * 0.2, f + 0.45, t + 3, o);
          for (let e = -2.4; e <= 2.41; e += 1.2)
            Z(
              r,
              s - n * 0.15,
              f + 0.45,
              t + e - 0.32,
              s + n * 0.2,
              f + 1.2,
              t + e + 0.32,
              o,
            );
          for (let e of [-1.4, 1.4])
            for (let c of [i + 2, i + 5.5]) {
              Z(a, s, c, t + e - 0.32, s + n * 0.04, c + 1.9, t + e + 0.32, l);
              for (let i of [-1, 1])
                m(
                  r,
                  !1,
                  s,
                  n * 0.08,
                  [t + e + i * 0.5, c + 1.95],
                  [t + e, c + 2.3],
                  0.14,
                  0.16,
                  o,
                );
            }
          let c = t + n * 3.5;
          Z(r, e - 3.5, f, c - n * 0.15, e + 3.5, f + 0.45, c + n * 0.2, o);
          for (let t = -2.8; t <= 2.81; t += 1.4)
            Z(
              r,
              e + t - 0.32,
              f + 0.45,
              c - n * 0.15,
              e + t + 0.32,
              f + 1.2,
              c + n * 0.2,
              o,
            );
          for (let t of [C + 9.2, C + 12.7])
            for (let i of [-1, 1])
              m(
                r,
                !0,
                c,
                n * 0.08,
                [e + i * 1.55, t + 0.05],
                [e, t + 0.75],
                0.16,
                0.18,
                o,
              );
        }
      }
    for (let e of [-1, 1])
      for (let t of [-62, 62].map(U)) {
        let n = new u(6.2, 7, 4);
        (n.rotateY(Math.PI / 4),
          n.translate(t, T + 16 + 3.5, L((t < 0 ? 1 : -1) * e * 10.5)),
          Q(n, X.slate),
          r.push(n));
      }
    let _ = Object.entries(h.panelBoxes ?? {}),
      v = new f(),
      y = (e) => {
        (e.computeBoundingBox(), v.copy(e.boundingBox));
        for (let [e, t] of _) {
          let n = t[3] - t[0] < t[5] - t[2] ? 0 : 2,
            r = 2 - n,
            i = n ? v.min.z : v.min.x,
            a = n ? v.max.z : v.max.x,
            o = r ? v.min.z : v.min.x,
            s = r ? v.max.z : v.max.x;
          if (
            i >= t[n] - 0.7 &&
            a <= t[n + 3] + 0.7 &&
            o >= t[r] - 0.02 &&
            s <= t[r + 3] + 0.02 &&
            v.min.y >= t[1] - 0.02 &&
            v.max.y <= t[4] + 0.02
          )
            return e;
        }
        return null;
      },
      b = (e, t) => {
        let n = [],
          r = 0;
        for (let t of e) {
          let e = (t.index ? t.index.count : t.attributes.position.count) * 3,
            i = y(t);
          (i && n.push([i, r, r + e]), (r += e));
        }
        return { spans: n, mesh: t };
      };
    if (!P)
      for (let [e, t, n, r, i, o] of h.glows ?? [])
        d(a, e, t, n, r, i, 0.02, o, 15249520);
    let x = b(r),
      S = b(a),
      w = new e(j(Re(r)), z);
    ((w.castShadow = !0), I.add(w), (x.mesh = w));
    let E = new e(
      j(Re(a)),
      j(new g({ vertexColors: !0, color: P ? 2764854 : 16777215 })),
    );
    (I.add(E),
      (S.mesh = E),
      re.push(
        t.events.on(`destruction:state`, (e) => {
          if (e?.state?.hp?.some((e) => e === 0))
            for (let t of [x, S]) {
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
  let Qe = j(new D(3.2, 1.9, 12, 4));
  Qe.translate(1.6, -0.95, 0);
  let $e = Qe.attributes.position.array.slice();
  {
    let n = document.createElement(`canvas`);
    ((n.width = 96), (n.height = 56));
    let r = n.getContext(`2d`);
    ((r.fillStyle = `#d8b04a`),
      r.fillRect(0, 0, 96, 56),
      (r.fillStyle = `#1c2f6b`),
      r.fillRect(4, 4, 88, 48),
      (r.fillStyle = `#eee6d2`),
      r.fillRect(30, 14, 10, 30),
      r.fillRect(56, 14, 10, 30),
      r.fillRect(28, 24, 40, 4),
      (r.fillStyle = `#d8b04a`),
      r.fillRect(33, 10, 4, 5),
      r.fillRect(59, 10, 4, 5));
    let i = j(new ne(n));
    i.colorSpace = v;
    let a = j(new o({ map: i, side: 2, roughness: 0.9 })),
      s = (e) => {
        let t = document.createElement(`canvas`);
        ((t.width = 96), (t.height = 56));
        let n = t.getContext(`2d`);
        ((n.fillStyle = `#1b1d20`),
          n.fillRect(0, 0, 96, 56),
          (n.fillStyle = e),
          n.fillRect(3, 3, 90, 50),
          (n.fillStyle = `rgba(255,255,255,.9)`),
          n.beginPath(),
          n.moveTo(3, 53),
          n.lineTo(26, 53),
          n.lineTo(93, 8),
          n.lineTo(93, 3),
          n.lineTo(70, 3),
          n.lineTo(3, 48),
          n.closePath(),
          n.fill());
        let r = j(new ne(t));
        return (
          (r.colorSpace = v),
          j(new o({ map: r, side: 2, roughness: 0.9 }))
        );
      };
    Ze.push(
      a,
      s(t.world?.teams?.[0]?.color ?? `#e0a030`),
      s(t.world?.teams?.[1]?.color ?? `#d23a32`),
    );
    for (let [t, n, r] of Ye) {
      let i = new e(Qe, a);
      (i.position.set(t, n, r),
        (i.rotation.y = -Math.PI / 2),
        (i.frustumCulled = !1),
        I.add(i),
        Xe.push({ mesh: i, t: Math.sign(t), top: n }));
    }
  }
  let et = (e) => {
    let t = Qe.attributes.position.array;
    for (let n = 0; n < t.length; n += 3) {
      let r = $e[n] / 3.2;
      ((t[n + 2] =
        $e[n + 2] +
        Math.sin(e * 4.2 - $e[n] * 1.9) * 0.28 * r +
        Math.sin(e * 2.3 - $e[n] * 0.8) * 0.12 * r),
        (t[n + 1] = $e[n + 1] - 0.12 * r * r));
    }
    ((Qe.attributes.position.needsUpdate = !0), Qe.computeVertexNormals());
  };
  if (!P) {
    let t = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = 8), (e.height = 128));
      let t = e.getContext(`2d`),
        n = t.createLinearGradient(0, 128, 0, 0);
      (n.addColorStop(0, `rgba(255,236,200,.95)`),
        n.addColorStop(0.35, `rgba(255,226,180,.45)`),
        n.addColorStop(1, `rgba(255,220,170,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 8, 128));
      let r = new ne(e);
      return ((r.colorSpace = v), r);
    })();
    j(t);
    let n = j(
        new g({
          map: t,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          opacity: 0.38,
          fog: !1,
        }),
      ),
      r = [],
      i = (e, t, n, i, a, o, s, c) => {
        let l = o - a,
          u = c - s,
          d = new D(l, u),
          f = d.attributes.uv;
        for (let e = 0; e < f.count; e++)
          f.setY(e, (f.getY(e) * u + s - C) / 30);
        d.rotateY(Math.atan2(e, t));
        let p = (a + o) / 2;
        (d.translate(n + (t ? p : 0), s + u / 2, i + (e ? p : 0)), r.push(d));
      };
    for (let e of h.towers) {
      for (let [t, n] of [
        [1, e + 9.34],
        [-1, e - 9.34],
      ])
        (i(t, 0, n, 0, L(-12), -le, C, C + 30),
          i(t, 0, n, 0, le, L(12), C, C + 30),
          i(t, 0, n, 0, -le, le, C + 6.4, C + 30));
      for (let [t, n] of [
        [1, L(12.34)],
        [-1, L(-12.34)],
      ])
        i(0, t, e, n, -9, 9, C, C + 30);
      for (let t of [-10.5, 10.5].map(L)) {
        let n = Math.sign(e) * 62;
        for (let e of [-1, 1])
          (i(e, 0, n + e * 4.3, t, -3.5, 3.5, T + 5, T + 16),
            i(0, e, n, t + e * 3.8, -4, 4, T + 5, T + 16));
      }
      for (let [t, n] of [
        [-8.7, -11.7],
        [-8.7, 11.7],
        [8.7, -11.7],
        [8.7, 11.7],
      ]) {
        let i = new k(1.76, 1.76, 30, 12, 1, !0);
        (i.translate(e + t, C + 15, L(n)), r.push(i));
      }
    }
    let a = new e(j(ee(r)), n);
    (r.forEach((e) => e.dispose()), (a.renderOrder = 2), I.add(a));
  }
  {
    let e = Ue.tops;
    var tt = ue(e.length, 16722458, 9);
    (e.forEach(([e, t, n], r) => tt.set(r, e, t, n)),
      tt.dirty(),
      I.add(tt.points));
  }
  {
    let t = [];
    for (let [e, n] of h.trees ?? [])
      for (let [r, i] of [
        [e, n],
        [-e, -n],
      ])
        for (let e = 0; e < 4; e++) {
          let n = new E(2.4 + Ie() * 0.9, 1);
          (n.translate(
            r + (Ie() - 0.5) * 2.4,
            T + 5.6 + Ie() * 2.2,
            i + (Ie() - 0.5) * 2.4,
          ),
            Q(n, [1915428, 2377002, 2903856][e % 3]),
            t.push(n));
        }
    if (t.length) {
      let n = new e(
        j(Re(t)),
        j(new o({ vertexColors: !0, roughness: 0.95, flatShading: !0 })),
      );
      ((n.castShadow = !0), I.add(n));
    }
  }
  let nt = h.engineHouses.map((e) => {
      let t = new d(),
        n = new Float32Array(36);
      t.setAttribute(`position`, new c(n, 3));
      let r = new y({
        map: V,
        color: 13159894,
        size: 7,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: 0.26,
        depthWrite: !1,
      });
      j(t, r);
      let i = new w(t, r);
      return (
        (i.frustumCulled = !1),
        I.add(i),
        {
          base: [e.chimney[0], e.chimney[1] + 14, e.chimney[2]],
          pos: n,
          g: t,
          mat: r,
          n: 12,
        }
      );
    }),
    rt = (() => {
      let e = [];
      return (
        Z(
          e,
          -0.8,
          0,
          -0.12,
          0,
          0.04,
          0.12,
          X.white,
          new M().makeRotationZ(0.35),
        ),
        Z(
          e,
          0,
          0,
          -0.12,
          0.8,
          0.04,
          0.12,
          X.white,
          new M().makeRotationZ(-0.35),
        ),
        Z(e, -0.09, -0.08, -0.3, 0.09, 0.08, 0.3, X.white),
        j(Re(e))
      );
    })(),
    it = new te(rt, z, 16);
  ((it.frustumCulled = !1), I.add(it));
  let at = Array.from({ length: 16 }, (e, t) => ({
      cx: (t % 2 ? 1 : -1) * (26 + Ie() * 20),
      cz: (Ie() - 0.5) * 60,
      r: 10 + Ie() * 24,
      y: C + 12 + Ie() * 30,
      sp: 0.12 + Ie() * 0.18,
      ph: Ie() * 6,
    })),
    ot = new M(),
    st = new x(),
    ct = new O(),
    lt = new s(),
    ut = new s(1, 1, 1),
    $ = 0,
    dt = null,
    ft = null,
    pt = !1,
    mt = -1,
    ht = null,
    gt = null,
    _t = 21.5,
    vt = new s(-1, 0, -1).normalize(),
    yt = () => p?.() ?? t.world.time.tick,
    bt = (e, n, r) => {
      let i = t.camera?.position;
      return !i || Math.hypot(i.x - e, i.y - n, i.z - r) < 260;
    };
  return {
    update(e) {
      $ += Math.min(e || 0, 0.1);
      let n = yt(),
        r = oe(h, n),
        i = $ % 1 < 0.5;
      if (r.phase !== dt) {
        let e = {
          warn: `SHIP OUT OF CONTROL · get off the middle of the bridge`,
          impact: `THE SHIP HAS HIT THE BRIDGE`,
          wrecked: `B is on the ship's deck · the torn road runs down onto it from both towers`,
        }[r.phase];
        (e &&
          dt != null &&
          t.events.emit(`ui:message`, { kind: `hint`, text: e, ttl: 6 }),
          (dt = r.phase));
      }
      let a = r.broken ? r.t - N.hit : -1;
      (G.forEach(({ L: e, whole: t, ramp: n, gone: r }) => {
        if (((t.visible = a < 0), (n.visible = a >= 0), a < 0)) {
          r.forEach((e) => {
            ((e.visible = !1), e.rotation.set(0, 0, 0));
          });
          return;
        }
        let i = Math.min(1, a / 0.9);
        n.rotation.z =
          -e.dir *
          fe *
          (i * i * (3 - 2 * i)) *
          (1 + 0.08 * Math.sin(Math.min(a, 4) * 9) * Math.max(0, 1 - a / 4));
        let o = Math.min(1, a / 3.2);
        r.forEach((t, n) => {
          ((t.visible = o < 1),
            (t.rotation.z = -e.dir * (0.3 + 1.4 * o * o) * (n ? 0.6 : 1)),
            (t.rotation.x = (n ? 0.9 : 0.25) * o * e.dir),
            (t.position.y = e.y - 16 * o * o));
        });
      }),
        (me.visible = r.rest));
      let o = r.ship == null ? null : r.ship + ae.stemRest - ae.z0;
      if (r.broken && a < 6 && !pt && ((pt = !0), bt(0, C, 0))) {
        for (let e of [-11, -6, -2, 2, 6, 11])
          t.events.emit(`destruction:collapse`, {
            pos: [e, C, -le + Math.abs(e) * 0.15],
            scale: 2.2,
          });
        for (let e of [-15, 15])
          t.events.emit(`destruction:collapse`, {
            pos: [e, C + 1, 0],
            scale: 2.6,
          });
      }
      if (
        (r.broken || (pt = !1),
        a > 2.4 && a < 3.4 && ft !== h.epoch && ((ft = h.epoch), bt(0, 0, 0)))
      )
        for (let e of [-8, 0, 8])
          t.events.emit(`destruction:collapse`, {
            pos: [e, 0.3, 2],
            scale: 2.6,
          });
      (r.phase === `impact` &&
        o != null &&
        Math.floor(a / 0.9) !== mt &&
        ((mt = Math.floor(a / 0.9)),
        bt(0, 0, o) &&
          (t.events.emit(`destruction:collapse`, {
            pos: [(mt % 2 ? -1 : 1) * 2, 1.2, o - 2],
            scale: 2.4,
          }),
          mt % 2 == 0 &&
            t.events.emit(`destruction:collapse`, {
              pos: [
                (mt % 4 ? -1 : 1) * 12.5,
                C - 2,
                Math.max(-14 - se, Math.min(14 + se, o - 30)),
              ],
              scale: 1.6,
            }))),
        r.phase !== `impact` && (mt = -1));
      let s = Ve.foreTop;
      if (s) {
        let e = r.snapped ? r.t - N.snap : -1;
        if (e < 0 || r.ship == null)
          ((s.visible = !0),
            s.position.set(0, ie, _t),
            s.quaternion.identity(),
            (ht = null));
        else {
          let n = ae.k,
            i = ce(N.snap),
            a = Math.min(1, e / 3.6),
            o = 1.55 * a * a;
          if (
            ((s.visible = e < 16),
            s.position.set(
              0,
              ie - (ie + 1.5) * a * a - Math.max(0, e - 3.6) * 0.7,
              _t + (i - r.ship) / n,
            ),
            s.quaternion.setFromAxisAngle(vt, o),
            ht !== h.epoch &&
              e < 1 &&
              ((ht = h.epoch),
              bt(0, 30, -11.6) &&
                (t.events.emit(`destruction:collapse`, {
                  pos: [0, C + 18, -le],
                  scale: 2.4,
                }),
                t.events.emit(`destruction:collapse`, {
                  pos: [0, ie * n, i + _t * n],
                  scale: 2,
                }))),
            gt !== h.epoch &&
              e > 3.4 &&
              e < 5 &&
              ((gt = h.epoch), bt(18, 0, i)))
          )
            for (let e of [10, 22, 34])
              t.events.emit(`destruction:collapse`, {
                pos: [e * 0.7, 0.4, i + _t * n - e * 0.7],
                scale: 3,
              });
        }
      }
      {
        let e = t.modules?.get?.(`player`),
          n = t.camera?.position;
        if (e?.shakeView && n && o != null && r.broken && a < 16) {
          let t = Math.hypot(n.x, n.y - C, n.z - Math.min(o, 10)),
            i = Math.max(0, 1 - t / 110),
            s = r.snapped ? r.t - N.snap : 99,
            c =
              (0.9 * Math.max(0, 1 - a / 2.2) +
                (r.rest ? 0 : 0.22 * (1 - a / (N.rest - N.hit))) +
                0.45 * Math.max(0, 1 - s / 1.4)) *
              i;
          c > 0.01 && e.shakeView(c);
        }
      }
      let c = r.phase === `warn` || r.phase === `impact`;
      for (let t of Te) {
        let n = Fe(t.t);
        t.o = n;
        let i = n ? n.team : -1;
        t.owner === null
          ? (t.owner = i)
          : i !== t.owner && ((t.owner = i), (t.flash = $));
        let a = c ? r.barrier : i === t.bank ? 0 : 1;
        t.arm += Math.sign(a - t.arm) * Math.min(Math.abs(a - t.arm), e * 0.6);
        let o = n
          ? n.team >= 0 && n.progressTeam !== n.team
            ? 1 - n.progress
            : n.team < 0 && n.progressTeam >= 0
              ? n.progress
              : 0
          : 0;
        ((t.taking = !!n && !n.contested && o > 0.001),
          (t.p = o),
          (t.contested = !!n?.contested),
          (t.hot = $ - t.flash < 4));
        let s = t.t * Ce;
        (Se.set(t.t < 0 ? 0 : 2, s, C + 3.55, -0.6, t.hot && ($ * 6) % 1 < 0.5),
          Se.set(
            (t.t < 0 ? 0 : 2) + 1,
            s,
            C + 3.55,
            0.6,
            t.hot && ($ * 6) % 1 >= 0.5,
          ));
      }
      (Se.dirty(),
        Te.forEach((n, r) => {
          let i = Ke[r],
            a = n.owner === 0 || n.owner === 1;
          (a
            ? qe.set(t.world?.teams?.[n.owner]?.color ?? `#ffffff`)
            : qe.copy(Je),
            i.color.lerp(qe, Math.min(1, e * 1.4)));
          let o = a ? Math.max(0, 1 - ($ - n.flash) / 3) : 0;
          i.emissive.copy(qe).multiplyScalar(o * 0.7);
        }));
      for (let e of Xe) {
        let t = Te[e.t < 0 ? 0 : 1].o,
          n = t
            ? t.team >= 0
              ? t.team
              : t.progressTeam >= 0 && t.progress > 0.001
                ? t.progressTeam
                : -1
            : -1,
          r = !t || n < 0 ? 1 : t.progress;
        ((e.mesh.material = Ze[n < 0 ? 0 : 1 + n]),
          (e.mesh.position.y = e.top - (1 - r) * 2.9));
      }
      if (
        (Ee.forEach((n, r) => {
          let i = Te[n.t < 0 ? 0 : 1],
            a = i.owner === 0 || i.owner === 1,
            o = $ - i.flash;
          ((n.on += (+!!a - n.on) * Math.min(1, e * (a ? 6 : 1.5))),
            a &&
              (Ne.set(t.world?.teams?.[i.owner]?.color ?? `#ffffff`),
              n.col.setRGB(1, 1, 1).lerp(Ne, 0.55)));
          let s = a && o < 10,
            c = $ * 1.3 + r * 1.7;
          (s
            ? Me.set(
                -n.t * (6 + 24 * (0.5 + 0.5 * Math.sin(c))),
                C,
                9 * Math.sin(c * 1.6 + r),
              )
            : Me.set(-n.t * 7, C, n.z * 0.6),
            n.g.lookAt(Me),
            n.mat.color.copy(n.col),
            (n.mat.opacity = n.on * (s ? 0.22 : 0.14)),
            n.pool.position.set(Me.x, C + 0.06, Me.z),
            n.pmat.color.copy(n.col),
            (n.pmat.opacity = n.on * (s ? 0.75 : 0.5)),
            (n.pool.visible = n.on > 0.02));
          let l = r % 2 ? 1 : -1,
            u = s ? Math.sin($ * 1.1 + r * 1.9) : Math.sin($ * 0.18 + r) * 0.25;
          (Ae.set(
            n.sg.position.x -
              n.t * (18 + 40 * (s ? 0.5 + 0.5 * Math.sin($ * 0.7 + r) : 0.35)),
            n.sg.position.y + 60,
            n.z + l * (10 + 34 * u),
          ),
            n.sg.lookAt(Ae),
            n.smat.color.copy(n.col),
            (n.smat.opacity = n.on * (s ? 0.3 : 0.13)),
            (n.sg.visible = n.on > 0.02),
            je.set(
              r,
              n.g.position.x,
              n.g.position.y,
              n.g.position.z,
              n.on > 0.05,
            ));
        }),
        je.dirty(),
        _e.forEach(({ b: e, pv: t, len: n }, i) => {
          let a = Te[e.x < 0 ? 0 : 1];
          t.rotation.z = (((1 - a.arm) * Math.PI) / 2) * 0.95;
          let o = t.rotation.z;
          ve.set(
            i,
            e.x,
            C + 1.3 + n * Math.sin(o),
            e.z - e.side * n * Math.cos(o),
            c
              ? r.barrier > 0.01 && ($ + i * 0.5) % 1 < 0.5
              : a.hot && ($ * 4 + i * 0.5) % 1 < 0.5,
          );
        }),
        ve.dirty(),
        ye.forEach(([e, t, n], r) => {
          let a = Te[e < 0 ? 0 : 1],
            o = !1,
            s = !1,
            l = !1;
          if (c) ((o = i), (s = !i));
          else if (a.hot && $ - a.flash < 1.6) {
            let e = Math.floor(($ - a.flash) / 0.4) % 3;
            ((o = e === 0), (s = e === 1), (l = e === 2));
          } else if (a.contested) {
            let e = ($ * 4) % 1 < 0.5;
            ((o = e), (s = !e));
          } else
            a.taking
              ? (s = ($ * (1 + 5 * a.p)) % 1 < 0.5)
              : a.owner === a.bank
                ? (l = !0)
                : a.owner >= 0
                  ? (o = !0)
                  : (s = $ % 1.6 < 0.8);
          (be.set(r * 2, e, t, n, o),
            be.set(r * 2 + 1, e, t - 0.3, n, !1),
            q.set(r, e, t - 0.3, n, s),
            K.set(r, e, t - 0.6, n, l));
        }),
        be.dirty(),
        q.dirty(),
        K.dirty(),
        Le.forEach(([e, t, n], a) => {
          for (let o = 0; o < 4; o++) {
            let s = n ? e + (o < 2 ? -2.2 : 2.2) : e + (o % 2 ? -0.8 : 0.8),
              c = n ? t + (o % 2 ? -0.8 : 0.8) : t + (o < 2 ? -2.2 : 2.2);
            ze.set(a * 4 + o, s, C + 0.8, c, r.barrier > 0.01 && i);
          }
        }),
        ze.dirty(),
        (He.visible = r.ship != null && r.ship > -700),
        He.visible)
      ) {
        if ((He.position.set(0, 0, r.ship), r.rest))
          (He.rotation.set(0, 0, 0), (Ve.foam.visible = !1));
        else if (r.broken) {
          Ve.foam.visible = !0;
          let e = a / (N.rest - N.hit),
            t = Math.sin(Math.PI * Math.min(1, e)),
            n = Math.max(0, 1 - a / 3) * 0.006 * Math.sin(a * 31);
          ((He.rotation.x = -0.022 * t + n),
            (He.rotation.z = 0.03 * t * Math.max(0, 1 - e) + n * 0.7),
            (He.position.y = 0.9 * t));
        } else
          (Ve.update($),
            (Ve.foam.visible = !0),
            (He.rotation.z = 0.012 * Math.sin($ * 0.5)),
            (He.rotation.x = 0.004 * Math.sin($ * 0.7)),
            (He.position.y = 0));
      }
      for (let e of Ge) {
        let t = (((($ * 8 * e.dir + e.ph * 2400) % 2400) + 2400) % 2400) - 1200;
        (e.g.position.set(e.x, 0, t),
          (e.g.rotation.y = e.dir > 0 ? 0 : Math.PI));
      }
      for (let e of nt) {
        for (let t = 0; t < e.n; t++) {
          let n = ($ * 0.1 + t / e.n) % 1;
          ((e.pos[t * 3] = e.base[0] + n * 10),
            (e.pos[t * 3 + 1] = e.base[1] + n * 14),
            (e.pos[t * 3 + 2] = e.base[2] + n * 4));
        }
        ((e.g.attributes.position.needsUpdate = !0),
          (e.mat.opacity = 0.18),
          (e.mat.size = 6));
      }
      (at.forEach((e, t) => {
        let n = $ * e.sp + e.ph;
        (lt.set(
          e.cx + Math.cos(n) * e.r,
          e.y + Math.sin(n * 2.3) * 3,
          e.cz + Math.sin(n) * e.r,
        ),
          ct.set(Math.sin($ * 9 + e.ph) * 0.25, -n, 0),
          st.setFromEuler(ct),
          ot.compose(lt, st, ut),
          it.setMatrixAt(t, ot));
      }),
        (it.instanceMatrix.needsUpdate = !0),
        (tt.points.visible = $ % 2 < 1),
        et($));
    },
    stats() {
      let e = oe(h, yt());
      return {
        towers: Te.map((e, t) => ({
          owner: e.owner,
          arm: +e.arm.toFixed(2),
          hot: !!e.hot,
          taking: !!e.taking,
          flag: Ze.indexOf(Xe[t]?.mesh.material),
          flagDrop: Xe[t]
            ? +(Xe[t].top - Xe[t].mesh.position.y).toFixed(2)
            : null,
          flood: +(Ee.filter((t) => t.t === e.t)[0]?.on ?? 0).toFixed(2),
        })),
        phase: e.phase,
        ship: e.ship == null ? null : Math.round(e.ship),
        barrier: +e.barrier.toFixed(2),
        broken: e.broken,
        snapped: e.snapped,
        rest: e.rest,
      };
    },
    dispose() {
      (re.forEach((e) => e?.()), r.remove(F), r.remove(I));
      for (let e of A) e?.dispose?.();
    },
  };
}
