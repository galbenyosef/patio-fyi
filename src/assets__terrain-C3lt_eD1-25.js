// assets__terrain-C3lt_eD1 25 — math
// Lines 8384-9211 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function* ni(t, r, i, a, o, s, c) {
  let l = re(),
    u = !!l;
  ((Hr = l?.lodK ?? 1),
    l
      ? ((Jr = l.grass.r), (Yr = l.grass.cell), (Xr = l.grass.fade))
      : ((Jr = 47), (Yr = 0.4), (Xr = [30, 45])));
  let p = le(i).fork(`terrain:scatter`),
    { waterLevel: h, material: _, noScatter: b, riverDist: x } = t,
    S = new te();
  S.name = `scatter`;
  let w = [0, 1, 0],
    T = i | 0,
    E = t.half,
    D = Ft(),
    O = t.opts?.biome === `snow`,
    k = t.opts?.biome === `jungle`,
    A = t.opts?.biome === `tropical`,
    ne =
      t.opts?.biome === `quarry` && t.quarry
        ? (e, n) => t.quarry.dist(e, n) < t.quarry.pitch * t.quarry.steps + 20
        : null,
    j = (e, t, n) => {
      let r = (e + E) / n,
        i = (t + E) / n,
        a = Math.floor(r),
        o = Math.floor(i),
        c = r - a,
        l = i - o,
        u = -E + a * n,
        d = -E + o * n,
        f = s(u, d),
        p = s(u + n, d),
        m = s(u, d + n),
        h = s(u + n, d + n),
        g = f + (p - f) * c;
      return g + (m + (h - m) * c - g) * l;
    },
    ie = c || (() => 0),
    ae = (e, n) => [t.getHeight(e, n) + ie(e, n), j(e, n, 4), j(e, n, 8)],
    se = (e, t) => {
      let n = fe(e.y0, e.y1, N(Zr * 0.78, Zr * 0.97, t));
      return fe(n, e.y2, N(Qr * 0.78, Qr * 0.97, t));
    },
    ce = [];
  if (a) {
    let e = (e, t) => [
      a[0] + Math.sin((t * Math.PI) / 180) * e,
      a[2] + Math.cos((t * Math.PI) / 180) * e,
    ];
    ce.push(
      { a: [a[0], a[2]], b: [a[0], a[2]], r: 6.5 },
      { a: e(5, 20), b: e(5, 20), r: 5.5 },
      { a: [a[0], a[2]], b: e(50, 30), r: 5 },
      { a: e(50, 30), b: e(50, 30), r: 9 },
    );
  }
  let de = (e, t) => ce.some((n) => $r(e, t, n.a, n.b) < n.r),
    L = [9, 13, 17],
    he = t.opts?.foliage === `autumn`,
    R = t.opts?.foliage === `tropical`,
    _e = he || R,
    ve = he && t.opts?.forestDress === `classic`,
    ye = ve ? ze({}) : null,
    be = he
      ? yield* we(un)
      : R
        ? Or()
        : ze({
            snow: t.opts?.biome === `snow`,
            jungle: t.opts?.biome === `jungle`,
            tropical: t.opts?.biome === `tropical`,
          }),
    xe = new y({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.9,
      metalness: 0,
    });
  ge(xe, o, { key: `terrain-tree-v5`, detail: 0.075 });
  let Se = _e ? Me(o, ge) : null,
    Ce = _e ? Ae(o, ge, { key: `terrain-autumn-leaf-v1` }) : null,
    z = _e
      ? Ae(o, ge, { key: `terrain-autumn-leaf-v1`, map: R ? gn() : Lt() })
      : null,
    Te = (e, t) => (Array.isArray(e) ? e[Math.min(t, e.length - 1)] : e),
    Ee = (e) =>
      e.isBufferGeometry
        ? [[e, xe]]
        : [
            [e.wood, Se],
            [e.leaves, e.cat ? z : Ce],
          ].filter((e) => e[0]),
    De = (e) => Ee(e).map((e) => e[0]),
    Oe = R ? [Gr, qr] : he ? [Gr, Ur] : [Ur, Wr],
    B = [],
    ke = (e, t) =>
      he && e.planted && e.sp === 0 ? (F(t, 3, T + 771) < 0.6 ? 1 : 2) : e.sp,
    je = (e, t, n, r, i) => {
      let a = be[e].weights;
      if (!a) return null;
      let o = (i && a.town.some((e) => e > 0) ? a.town : a.forest).map(
          (e, r) => e * Math.exp(2.2 * ue(t / 38, n / 38, T + 811 + r * 37)),
        ),
        s = F(r, 5, T + 823) * o.reduce((e, t) => e + t, 0);
      for (let e = 0; e < o.length; e++) if ((s -= o[e]) < 0) return e;
      return o.length - 1;
    };
  if (t.opts?.forest)
    for (let [e, n] of me(t).entries()) {
      let t = ae(n.x, n.z);
      if (ve && !n.planted) {
        B.push({ ...n, classic: !0, y0: t[0], y1: t[1], y2: t[2] });
        continue;
      }
      let r = ke(n, e);
      B.push({
        ...n,
        sp: r,
        v: je(r, n.x, n.z, e, n.planted) ?? n.v,
        y0: t[0],
        y1: t[1],
        y2: t[2],
      });
    }
  else {
    let e = [],
      n = ei(t.size, E, 5);
    for (let r of L)
      for (let i = -E + 26; i < E - 26; i += r) {
        let o = Math.round((i + E) / r),
          s = (F(o, 17, T + 91) - 0.5) * r;
        for (let o = -E + 26; o < E - 26; o += r) {
          let c = o + s + p.range(-0.9, 0.9) * r,
            l = i + p.range(-0.9, 0.9) * r;
          if (c < -E + 20 || c > E - 20 || l < -E + 20 || l > E - 20) continue;
          let u = t.cellIndex(c, l),
            d = _[u];
          if (
            b[u] ||
            d === pe.WATER ||
            d === pe.ROAD ||
            d === pe.SAND ||
            d === pe.ROCK
          )
            continue;
          let f = t.getHeight(c, l);
          if (
            f < h + 1.2 ||
            f > 168 ||
            (t.getNormal(c, l, w), w[1] < 0.8) ||
            de(c, l) ||
            (ne && ne(c, l)) ||
            !n.ok(c, l, 4)
          )
            continue;
          let m = t.roadDist[u];
          if (m < 46 && m < 12 + 30 * (0.5 + 0.5 * ue(c / 41, l / 41, T + 603)))
            continue;
          let g =
              0.5 +
              0.5 * P(c / 168, l / 168, 3, T + 601) +
              0.3 * P(c / 47, l / 47, 2, T + 602),
            v = I((g - 0.54) * 2.9, 0, 1);
          if ((x[u] < 140 && (v *= 1 + 0.55 * (1 - x[u] / 140)), a)) {
            let e = Math.hypot(c - a[0] + 40, l - a[2] + 50);
            v += 0.34 * Math.exp(-(e * e) / 45e3);
          }
          let y = I(v, 0, 1.4),
            S = y * (0.3 + 0.7 * p.next());
          if (S <= 0.06) continue;
          n.add(c, l);
          let C = x[u] < 90,
            D,
            O = p.next();
          D =
            f > 60 + 20 * ue(c / 200, l / 200, T + 9) || (O < 0.28 && f > 30)
              ? 0
              : C && O < 0.42
                ? 2
                : O < 0.9
                  ? 1
                  : 2;
          let ee = p.next() < 0.035,
            te = 1 - I(y, 0, 1),
            k = ee
              ? p.range(1.28, 1.58)
              : 0.5 + p.range(0, 0.55) * (0.85 + 0.75 * te),
            A = ae(c, l);
          e.push({
            x: c,
            y0: A[0],
            y1: A[1],
            y2: A[2],
            z: l,
            sp: D,
            w: S,
            v: p.int(0, 2),
            s: k * (D === 0 ? 1.05 : 1),
            sxz: p.range(0.85, 1.2),
            sy: p.range(0.88, 1.18),
            rot: p.range(0, 6.2831),
            tiltA: p.range(0, 6.2831),
            tilt: p.range(0.02, 0.11),
            tint: 0.84 + 0.3 * p.next(),
          });
        }
      }
    e.sort((e, t) => t.w - e.w);
    for (let t = 0; t < Math.min(Br, e.length); t++) B.push(e[t]);
  }
  if (R && t.opts?.forest) {
    let e = t.opts.forest,
      n = e.clearings ?? [],
      r = e.lanes ?? [];
    for (let i = -E + 12; i < E - 12; i += Kr)
      for (let a = -E + 12; a < E - 12; a += Kr) {
        let o = Math.round(a / Kr),
          s = Math.round(i / Kr),
          c = a + (F(o, s, T + 901) - 0.5) * Kr,
          l = i + (F(o, s, T + 902) - 0.5) * Kr,
          u = t.cellIndex(c, l),
          d = _[u];
        if (b[u] || (d !== pe.GRASS && d !== pe.DIRT)) continue;
        let f = t.getHeight(c, l);
        if (
          f < h + 1 ||
          f > (e.treeLine ?? 150) ||
          (t.getNormal(c, l, w),
          w[1] < 0.8 || t.roadDist[u] < 6 + 4 * F(o, s, T + 903)) ||
          n.some((e) => Math.hypot(c - e.x, l - e.z) < e.r * 0.9) ||
          r.some((e) => $r(c, l, [e[0], e[1]], [e[2], e[3]]) < (e[4] ?? 14) / 2)
        )
          continue;
        let p =
          0.5 +
          0.5 * P(c / 150, l / 150, 3, T + 701) +
          0.3 * P(c / 23, l / 23, 2, T + 905);
        if (F(o, s, T + 904) > I((p - 0.42) * 1.6, 0, 0.85)) continue;
        let m = ae(c, l),
          g = B.length,
          v = (e) => F(o, s, T + 910 + e);
        B.push({
          x: c,
          z: l,
          sp: 3,
          v: je(3, c, l, g, !1),
          under: !0,
          s: 0.7 + 0.55 * v(1),
          sxz: 0.85 + 0.3 * v(2),
          sy: 0.85 + 0.3 * v(3),
          rot: v(4) * 6.2831,
          tiltA: v(5) * 6.2831,
          tilt: 0.03 * v(6),
          tint: 0.86 + 0.24 * v(7),
          y0: m[0],
          y1: m[1],
          y2: m[2],
        });
      }
  }
  if (u && t.bounds) {
    let [e, n, r, i] = t.bounds,
      a = (e + r) / 2,
      o = (n + i) / 2,
      s = ((r - e) / 2) * 0.72,
      c = ((i - n) / 2) * 0.72;
    for (let e = B.length - 1; e >= 0; e--) {
      let t = B[e];
      (Math.abs(t.x - a) > s || Math.abs(t.z - o) > c) && B.splice(e, 1);
    }
  }
  let Ne = new v(1, 1, 1),
    V = [],
    Pe = ve ? B.filter((e) => !e.classic) : B,
    H = _e
      ? {
          tiers: [0, 1, 2].map((e) => {
            let t = be.map((t) => [t.near, t.mid, t.far][e]),
              n = new Map();
            return (
              t.forEach((e, t) =>
                e.forEach((e, r) =>
                  Ee(e).forEach(([e, i]) => {
                    let a = n.get(i);
                    (a || n.set(i, (a = { mat: i, geos: [] })),
                      a.geos.push({ si: t, vi: r, geo: e }));
                  }),
                ),
              ),
              [...n.values()].map(({ mat: t, geos: n }) => {
                let r = n.reduce(
                    (e, t) => e + t.geo.attributes.position.count,
                    0,
                  ),
                  i = n.reduce(
                    (e, t) => e + (t.geo.index ? t.geo.index.count : 0),
                    0,
                  ),
                  a = Pe.length + 512,
                  o = new f(a, r, i || void 0, t);
                ((o.castShadow = e < 2),
                  (o.receiveShadow = !0),
                  (o.frustumCulled = !1),
                  (o.perObjectFrustumCulled = !1),
                  (o.sortObjects = !1),
                  (o.name = `trees_batch_${[`near`, `mid`, `far`][e]}_${t === Se ? `wood` : t === Ce ? `leaves` : `catleaves`}`));
                let s = new Map();
                for (let e of n) s.set(`${e.si}:${e.vi}`, o.addGeometry(e.geo));
                let c = s.values().next().value;
                for (let e = 0; e < a; e++) {
                  let e = o.addInstance(c);
                  (o.setColorAt(e, Ne), o.setVisibleAt(e, !1));
                }
                return (S.add(o), { bm: o, gid: s, n: 0, shown: 0 });
              })
            );
          }),
        }
      : null,
    Fe = H ? ye : be,
    Ie = Fe
      ? Fe.map((t, n) => {
          let r = B.filter((e) => e.sp === n && (!H || e.classic)),
            i = (n, r, i, a) =>
              Ee(n).map(([n, o], s) => {
                let c = ti(new ee(n, o, Math.max(1, r)));
                return (
                  (c.castShadow = a),
                  (c.receiveShadow = !0),
                  (c.frustumCulled = !1),
                  (c.count = 0),
                  c.instanceMatrix.setUsage(e),
                  (c.name = `trees_${t.name}_${i}${s ? `_leaves` : ``}`),
                  S.add(c),
                  c
                );
              }),
            a = (e) => r.filter((t) => t.v === e).length,
            o = (e, t, n) =>
              Array.isArray(e)
                ? e.map((e, r) => i(e, a(r), `${t}${r}`, n))
                : [i(e, r.length, t, n)],
            s = [
              t.near.map((e, t) => i(e, a(t), `${t}`, !0)),
              o(t.mid, `mid`, he && !H),
              o(t.far, `far`, !1),
            ];
          return {
            list: r,
            tiers: s,
            counts: s.map((e) => Array(e.length).fill(0)),
          };
        })
      : [],
    Le = he
      ? Fr({
          hf: t,
          trees: Pe,
          species: be,
          mic: ie,
          excluded: () => D,
          U: o,
          injectSurface: ge,
          seed: T,
        })
      : null;
  Le && S.add(Le.group);
  let Ve =
    he && t.opts?.paving
      ? zr({ U: o, injectSurface: ge, leafMat: Ce, seed: T })
      : null;
  Ve && S.add(Ve.group);
  let He = null;
  function Ue() {
    He && ((He = null), (V = []), (mt = null), Le?.setExtra([]));
  }
  function We(e) {
    if ((Ue(), !he || !e?.length)) return !1;
    let t = be[1].near.length;
    He = { meshes: [] };
    let n = e.map((e, n) =>
      Math.min(e.v ?? je(1, e.x, e.z, 9e3 + n, !0) ?? n % t, t - 1),
    );
    return (
      (V = e.slice(0, 512).map((e, t) => ({
        x: e.x,
        z: e.z,
        y0: e.y + 0.05,
        y1: e.y + 0.05,
        y2: e.y + 0.05,
        sp: 1,
        v: n[t],
        s: e.s,
        sxz: 1,
        sy: 1,
        rot: e.rot ?? 0,
        tilt: 0,
        tiltA: 0,
        tint: 0.94 + 0.08 * F(t, 9, T + 829),
        hidden: !1,
      }))),
      (mt = null),
      Le?.setExtra(
        e.map((e, t) => ({
          x: e.x,
          z: e.z,
          y0: e.y,
          sp: 1,
          v: n[t],
          s: e.s,
          sxz: 1,
          sy: 1,
        })),
      ),
      !0
    );
  }
  function Ge(e, t) {
    let n = V[e];
    return n
      ? ((n.hidden = !t), (mt = null), Le?.setExtraVisible(e, t), !0)
      : !1;
  }
  let U = new d(),
    Ke = new C(),
    qe = new C(),
    Je = new oe(),
    Ye = new oe(),
    Xe = new oe(0, 1, 0),
    Ze = new oe(),
    Qe = new v(),
    $e = new n();
  function et(e, t) {
    let n = se(e, t);
    (Ke.setFromAxisAngle(Xe, e.rot),
      Ze.set(Math.cos(e.tiltA), 0, Math.sin(e.tiltA)),
      qe.setFromAxisAngle(Ze, e.tilt),
      Ke.premultiply(qe),
      U.compose(
        Je.set(e.x, n - 0.25, e.z),
        Ke,
        Ye.set(e.s * e.sxz, e.s * e.sy, e.s * e.sxz),
      ),
      Qe.setRGB(
        e.tint * (0.93 + 0.07 * F(e.x | 0, e.z | 0, 6)),
        e.tint,
        e.tint * (0.88 + 0.11 * F(e.x | 0, e.z | 0, 7)),
      ));
  }
  function tt(e, t, n) {
    for (let e of H.tiers) for (let t of e) t.n = 0;
    for (let r of [Pe, V])
      for (let i of r) {
        if (i.excluded || i.hidden) continue;
        let r = i.x - e.x,
          a = i.z - e.z,
          o = i.y0 - e.y,
          s = r * r + a * a + o * o;
        if (s > n * n || (i.under && s > 6400 * Hr * Hr)) continue;
        let c = Math.sqrt(s);
        if (
          ($e.center.set(i.x, i.y0 + 5 * i.s, i.z),
          ($e.radius = 7 * i.s),
          !t.intersectsSphere($e))
        )
          continue;
        et(i, c);
        let l = c < Oe[0](i.s) ? 0 : c < Oe[1](i.s) ? 1 : 2,
          u = (i.bk ??= `${i.sp}:${i.v}`);
        for (let e of H.tiers[l]) {
          let t = e.gid.get(u);
          if (t === void 0) continue;
          let n = e.n++;
          (e.bm.getGeometryIdAt(n) !== t &&
            (e.bm.setGeometryIdAt(n, t), (e.regeo = !0)),
            e.bm.setMatrixAt(n, U),
            e.bm.setColorAt(n, Qe),
            n >= e.shown && e.bm.setVisibleAt(n, !0));
        }
      }
    for (let e of H.tiers)
      for (let t of e) {
        for (let e = t.n; e < t.shown; e++) t.bm.setVisibleAt(e, !1);
        ((t.shown = t.n),
          (t.bm.visible = t.n > 0),
          (t.regeo &&= ((t.bm._visibilityChanged = !0), !1)));
      }
  }
  function nt(e, t, n) {
    H && tt(e, t, n);
    let r = H ? [Ur, Wr] : Oe;
    for (let { list: i, tiers: a, counts: o } of Ie) {
      for (let e of o) e.fill(0);
      for (let s of i) {
        if (s.excluded) continue;
        let i = s.x - e.x,
          c = s.z - e.z,
          l = s.y0 - e.y,
          u = i * i + c * c + l * l;
        if (u > n * n) continue;
        let d = Math.sqrt(u);
        if (
          ($e.center.set(s.x, s.y0 + 5 * s.s, s.z),
          ($e.radius = 7 * s.s),
          !t.intersectsSphere($e))
        )
          continue;
        et(s, d);
        let f = d < r[0](s.s) ? 0 : d < r[1](s.s) ? 1 : 2,
          p = Math.min(s.v, a[f].length - 1),
          m = o[f][p]++;
        for (let e of a[f][p]) (e.setMatrixAt(m, U), e.setColorAt(m, Qe));
      }
      a.forEach((e, t) =>
        e.forEach((e, n) => {
          for (let r of e)
            ((r.count = o[t][n]),
              (r.visible = r.count > 0),
              (r.instanceMatrix.needsUpdate = !0),
              r.instanceColor && (r.instanceColor.needsUpdate = !0));
        }),
      );
    }
  }
  let rt = [],
    it = null;
  if (a) {
    let e = Re(),
      n = [],
      r = p.fork(`reeds`);
    for (let e = 0; e < 260; e++) {
      let e = r.range(0, 6.2831),
        i = 3 + r.range(0, 26),
        o = a[0] + Math.cos(e) * i,
        s = a[2] + Math.sin(e) * i,
        c = t.cellIndex(o, s),
        l = t.getHeight(o, s);
      if (
        !(l < h + 0.05 || l > h + 1.9) &&
        !(b[c] || _[c] === pe.ROAD) &&
        (n.push({
          x: o,
          y: l - 0.05,
          z: s,
          s: r.range(0.7, 1.5),
          rot: r.range(0, 6.2831),
        }),
        n.length >= 90)
      )
        break;
    }
    if (n.length) {
      let r = ti(new ee(e, xe, n.length));
      ((r.castShadow = !1),
        (r.receiveShadow = !0),
        (r.frustumCulled = !0),
        (r.name = `reeds`),
        n.forEach((e, n) => {
          (Ke.setFromAxisAngle(Xe, e.rot),
            U.compose(
              Je.set(e.x, e.y, e.z),
              Ke,
              Ye.set(e.s, e.s * p.range(0.85, 1.2), e.s),
            ),
            r.setMatrixAt(n, U),
            O
              ? Qe.setRGB(1.15, 0.85, 0.5)
              : k
                ? Qe.setRGB(0.72, 1.12, 0.62)
                : A
                  ? Qe.setRGB(0.86, 1.1, 0.64)
                  : t.opts?.biome === `desert`
                    ? Qe.setRGB(1.08, 0.95, 0.7)
                    : Qe.setRGB(0.95, 1, 0.85),
            r.setColorAt(n, Qe));
        }),
        (r.count = n.length),
        S.add(r),
        (it = { im: r, geo: e, matrices: r.instanceMatrix.array.slice() }));
    } else e.dispose();
  }
  let at = [Be(0), Be(1), Be(2), Be(3)],
    ot = new y({
      vertexColors: !0,
      flatShading: !1,
      roughness: 1,
      metalness: 0,
      side: 0,
    });
  ge(ot, o, {
    key: `terrain-grass-v3`,
    detail: 0,
    vertexDecl: `uniform vec2 uFade;`,
    extraVertex: `
      {
        vec3 iw = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float dcam = distance(iw, cameraPosition);
        float fade = 1.0 - smoothstep(uFade.x, uFade.y, dcam);
        fade *= fade;
        float sway = sin(uTime * 1.6 + iw.x * 0.35 + iw.z * 0.27) * 0.6 + sin(uTime * 2.7 + iw.x * 1.1 - iw.z * 0.8) * 0.3;
        transformed.x += sway * 0.15 * position.y;
        transformed.z += sway * 0.09 * position.y;
        transformed *= fade;
      }`,
    uniforms: { uFade: { value: new g(Xr[0], Xr[1]) } },
  });
  let st = at.map((t, n) => {
    let r = ti(new ee(t, ot, Math.ceil(Vr * 0.42) + 64));
    return (
      (r.frustumCulled = !1),
      (r.receiveShadow = !1),
      (r.castShadow = !1),
      (r.name = `grass_${n}`),
      r.instanceMatrix.setUsage(e),
      (r.count = 0),
      S.add(r),
      r
    );
  });
  function ct(e) {
    let n = e.x,
      i = e.z,
      a = Math.floor((n - Jr) / Yr),
      o = Math.ceil((n + Jr) / Yr),
      s = Math.floor((i - Jr) / Yr),
      c = Math.ceil((i + Jr) / Yr),
      l = [0, 0, 0, 0],
      u = Math.ceil(Vr * 0.42),
      d = Jr * Jr;
    for (let e = s; e <= c; e++) {
      let s = F(e, 5, T + 95) * Yr;
      for (let c = a; c <= o; c++) {
        let a = F(c, e, T + 1),
          o = F(c, e, T + 2),
          f = F(c, e, T + 3),
          p = F(c, e, T + 4),
          m = F(c, e, T + 5),
          g = (c + 0.1 + 0.8 * a) * Yr + s,
          v = (e + 0.1 + 0.8 * o) * Yr,
          y = g - n,
          x = v - i;
        if (y * y + x * x > d) continue;
        let S = t.cellIndex(g, v),
          C = _[S];
        if (
          b[S] ||
          D(g - 0.75, v - 0.75, g + 0.75, v + 0.75) ||
          (C !== pe.GRASS && !(C === pe.DIRT && f < 0.22)) ||
          (O && m > 0.1) ||
          (ne && m > 0.18 && ne(g, v))
        )
          continue;
        let E = ue(g / 9, v / 9, T + 77) + 0.35 * ue(g / 2.7, v / 2.7, T + 78);
        if (E < -0.3) continue;
        let ee = t.sampleSmooth(g, v),
          te = t.getHeight(g, v) + ie(g, v);
        if (
          te < h + 0.55 ||
          Math.abs(te - ee) > 0.5 ||
          (t.getNormal(g, v, w), w[1] < 0.72)
        )
          continue;
        let re = 0;
        if (
          (f > 0.8
            ? (re = 1)
            : f < 0.17 || E > 0.75
              ? (re = 2)
              : m > 0.62 && (re = 3),
          l[re] >= u)
        )
          continue;
        let j = (0.7 + 0.7 * f) * (1 + 0.18 * I(E, -0.3, 0.8));
        (Ke.setFromAxisAngle(Xe, p * 6.2831),
          U.compose(
            Je.set(g, te - 0.02, v),
            Ke,
            Ye.set(
              j * (0.86 + 0.3 * m),
              j * (0.82 + 0.44 * o),
              j * (0.86 + 0.3 * o),
            ),
          ));
        let M = st[re];
        (M.setMatrixAt(l[re], U),
          O
            ? Qe.setRGB(1 + 0.2 * a, 0.8, 0.5)
            : k
              ? Qe.setRGB(
                  r[S * 3] * 0.86,
                  r[S * 3 + 1] * 1.1,
                  r[S * 3 + 2] * 0.8,
                )
              : A
                ? Qe.setRGB(
                    r[S * 3] * 0.95,
                    r[S * 3 + 1] * 1.13,
                    r[S * 3 + 2] * 0.82,
                  )
                : t.opts?.biome === `desert`
                  ? Qe.setRGB(
                      r[S * 3] * 1.08,
                      r[S * 3 + 1] * 1.04,
                      r[S * 3 + 2] * 0.86,
                    )
                  : Qe.setRGB(
                      r[S * 3] * 1.04,
                      r[S * 3 + 1] * 1.09,
                      r[S * 3 + 2] * 0.94,
                    ),
          M.setColorAt(l[re], Qe),
          l[re]++);
      }
    }
    for (let e = 0; e < st.length; e++)
      ((st[e].count = l[e]),
        (st[e].instanceMatrix.needsUpdate = !0),
        st[e].instanceColor && (st[e].instanceColor.needsUpdate = !0));
    return l[0] + l[1] + l[2] + l[3];
  }
  let lt = new oe(),
    ut = new oe(),
    dt = new oe(0, 0, 0),
    ft = new M(),
    pt = new d(),
    mt = null,
    ht = null,
    gt = 0,
    _t = new m(),
    vt = (e) => (
      e.boundingBox || e.computeBoundingBox(),
      _t.copy(e.boundingBox).applyMatrix4(U),
      D(_t.min.x, _t.min.z, _t.max.x, _t.max.z)
    );
  function yt(e = []) {
    ((D = Ft(e)), Le && Le.reset());
    for (let e of B) {
      et(e, 0);
      let t = (e.classic ? ye : be)[e.sp];
      e.excluded = [t.near[e.v], Te(t.mid, e.v), Te(t.far, e.v)]
        .flatMap(De)
        .some(vt);
    }
    if (it) {
      let e = 0;
      for (let t = 0; t < it.matrices.length; t += 16)
        (U.fromArray(it.matrices, t), vt(it.geo) || it.im.setMatrixAt(e++, U));
      ((it.im.count = e),
        (it.im.instanceMatrix.needsUpdate = !0),
        it.im.computeBoundingSphere());
    }
    mt = ht = null;
  }
  let bt = new v(3160138);
  function xt(e) {
    let t = I(e, 0, 1);
    (xe.color.setRGB(1, 1, 1).lerp(bt, t * 0.4),
      Se &&
        (Se.color.copy(xe.color),
        Ce.color.copy(xe.color),
        z.color.copy(xe.color)),
      Le && Le.setNight(xe.color),
      Ve && Ve.setNight(xe.color),
      ot.color.setRGB(1, 1, 1).lerp(bt, t * 0.4));
  }
  function St(e) {
    if (
      (e.getWorldPosition(lt),
      e.getWorldDirection(ut),
      e.updateMatrixWorld(),
      pt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      ft.setFromProjectionMatrix(pt),
      !mt || lt.distanceToSquared(mt) > 64 || ut.dot(dt) < 0.9985)
    ) {
      let e =
        u && lt.y - t.getHeight(lt.x, lt.z) < 60
          ? l.treeFar
          : I(760 + Math.max(0, lt.y - 40) * 1.9, 760, 2700);
      (nt(lt, ft, e), (mt = mt ? mt.copy(lt) : lt.clone()), dt.copy(ut));
    }
    let n = lt.y - t.getHeight(lt.x, lt.z) > 130;
    if (n) {
      if (gt) {
        for (let e of st) e.count = 0;
        gt = 0;
      }
      ht = null;
    } else
      (!ht || lt.distanceToSquared(ht) > 25) &&
        ((gt = ct(lt)), (ht = ht ? ht.copy(lt) : lt.clone()));
    Le && Le.update(lt, n);
  }
  function Ct() {
    for (let { tiers: e } of Ie)
      for (let t of e) for (let e of t) for (let t of e) t.dispose();
    if (H) for (let e of H.tiers) for (let t of e) t.bm.dispose();
    (Ue(), Le && Le.dispose(), Ve && Ve.dispose());
    for (let e of st) e.dispose();
    it && (it.im.dispose(), it.geo.dispose());
    for (let e of be)
      for (let t of [...e.near, ...[e.mid, e.far].flat()])
        for (let e of De(t)) e.dispose();
    for (let e of at) e.dispose();
    (xe.dispose(),
      ot.dispose(),
      Se && (Se.dispose(), Ce.dispose(), z.dispose()));
  }
  let wt = B.filter((e) => !e.under);
  return {
    group: S,
    update: St,
    dispose: Ct,
    setNight: xt,
    setExclusions: yt,
    plantDecor: We,
    setDecorVisible: Ge,
    addTownStreets: (e) => (Ve ? (Ve.addStreets(e), !0) : !1),
    counts: {
      trees: wt.length,
      understory: B.length - wt.length,
      rocks: rt.length,
      grass: () => gt,
    },
    trees: wt,
    rocks: rt,
  };
}
