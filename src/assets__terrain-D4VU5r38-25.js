// assets__terrain-D4VU5r38 25 — math
// Lines 8383-9211 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function* ni(e, t, n, r, a, c, l) {
  let u = j(),
    p = !!u;
  ((Hr = u?.lodK ?? 1),
    u
      ? ((Jr = u.grass.r), (Yr = u.grass.cell), (Xr = u.grass.fade))
      : ((Jr = 47), (Yr = 0.4), (Xr = [30, 45])),
    e.opts?.grass === !1 && (Jr = 0));
  let m = ce(n).fork(`terrain:scatter`),
    { waterLevel: g, material: v, noScatter: y, riverDist: b } = e,
    x = new T();
  x.name = `scatter`;
  let S = [0, 1, 0],
    w = n | 0,
    E = e.half,
    O = Ft(),
    k = e.opts?.biome === `snow`,
    ee = e.opts?.biome === `jungle`,
    A = e.opts?.biome === `tropical`,
    M =
      e.opts?.biome === `quarry` && e.quarry
        ? (t, n) => e.quarry.dist(t, n) < e.quarry.pitch * e.quarry.steps + 20
        : null,
    te = (e, t, n) => {
      let r = (e + E) / n,
        i = (t + E) / n,
        a = Math.floor(r),
        o = Math.floor(i),
        s = r - a,
        l = i - o,
        u = -E + a * n,
        d = -E + o * n,
        f = c(u, d),
        p = c(u + n, d),
        m = c(u, d + n),
        h = c(u + n, d + n),
        g = f + (p - f) * s;
      return g + (m + (h - m) * s - g) * l;
    },
    ne = l || (() => 0),
    ie = (t, n) => [e.getHeight(t, n) + ne(t, n), te(t, n, 4), te(t, n, 8)],
    ae = (e, t) => {
      let n = de(e.y0, e.y1, P(Zr * 0.78, Zr * 0.97, t));
      return de(n, e.y2, P(Qr * 0.78, Qr * 0.97, t));
    },
    se = [];
  if (r) {
    let e = (e, t) => [
      r[0] + Math.sin((t * Math.PI) / 180) * e,
      r[2] + Math.cos((t * Math.PI) / 180) * e,
    ];
    se.push(
      { a: [r[0], r[2]], b: [r[0], r[2]], r: 6.5 },
      { a: e(5, 20), b: e(5, 20), r: 5.5 },
      { a: [r[0], r[2]], b: e(50, 30), r: 5 },
      { a: e(50, 30), b: e(50, 30), r: 9 },
    );
  }
  let ue = (e, t) => se.some((n) => $r(e, t, n.a, n.b) < n.r),
    me = [9, 13, 17],
    he = e.opts?.foliage === `autumn`,
    R = e.opts?.foliage === `tropical`,
    _e = he || R,
    ve = he && e.opts?.forestDress === `classic`,
    ye = ve ? ze({}) : null,
    be = he
      ? yield* we(un)
      : R
        ? Or()
        : ze({
            snow: e.opts?.biome === `snow`,
            jungle: e.opts?.biome === `jungle`,
            tropical: e.opts?.biome === `tropical`,
          }),
    xe = new o({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.9,
      metalness: 0,
    });
  ge(xe, a, { key: `terrain-tree-v5`, detail: 0.075 });
  let Se = _e ? Me(a, ge) : null,
    Ce = _e ? Ae(a, ge, { key: `terrain-autumn-leaf-v1` }) : null,
    z = _e
      ? Ae(a, ge, { key: `terrain-autumn-leaf-v1`, map: R ? gn() : Lt() })
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
      he && e.planted && e.sp === 0 ? (I(t, 3, w + 771) < 0.6 ? 1 : 2) : e.sp,
    je = (e, t, n, r, i) => {
      let a = be[e].weights;
      if (!a) return null;
      let o = (i && a.town.some((e) => e > 0) ? a.town : a.forest).map(
          (e, r) => e * Math.exp(2.2 * le(t / 38, n / 38, w + 811 + r * 37)),
        ),
        s = I(r, 5, w + 823) * o.reduce((e, t) => e + t, 0);
      for (let e = 0; e < o.length; e++) if ((s -= o[e]) < 0) return e;
      return o.length - 1;
    };
  if (e.opts?.forest)
    for (let [t, n] of pe(e).entries()) {
      let e = ie(n.x, n.z);
      if (ve && !n.planted) {
        B.push({ ...n, classic: !0, y0: e[0], y1: e[1], y2: e[2] });
        continue;
      }
      let r = ke(n, t);
      B.push({
        ...n,
        sp: r,
        v: je(r, n.x, n.z, t, n.planted) ?? n.v,
        y0: e[0],
        y1: e[1],
        y2: e[2],
      });
    }
  else {
    let t = [],
      n = ei(e.size, E, 5);
    for (let i of me)
      for (let a = -E + 26; a < E - 26; a += i) {
        let o = Math.round((a + E) / i),
          s = (I(o, 17, w + 91) - 0.5) * i;
        for (let o = -E + 26; o < E - 26; o += i) {
          let c = o + s + m.range(-0.9, 0.9) * i,
            l = a + m.range(-0.9, 0.9) * i;
          if (c < -E + 20 || c > E - 20 || l < -E + 20 || l > E - 20) continue;
          let u = e.cellIndex(c, l),
            d = v[u];
          if (
            y[u] ||
            d === fe.WATER ||
            d === fe.ROAD ||
            d === fe.SAND ||
            d === fe.ROCK
          )
            continue;
          let f = e.getHeight(c, l);
          if (
            f < g + 1.2 ||
            f > 168 ||
            (e.getNormal(c, l, S), S[1] < 0.8) ||
            ue(c, l) ||
            (M && M(c, l)) ||
            !n.ok(c, l, 4)
          )
            continue;
          let p = e.roadDist[u];
          if (p < 46 && p < 12 + 30 * (0.5 + 0.5 * le(c / 41, l / 41, w + 603)))
            continue;
          let h =
              0.5 +
              0.5 * F(c / 168, l / 168, 3, w + 601) +
              0.3 * F(c / 47, l / 47, 2, w + 602),
            _ = L((h - 0.54) * 2.9, 0, 1);
          if ((b[u] < 140 && (_ *= 1 + 0.55 * (1 - b[u] / 140)), r)) {
            let e = Math.hypot(c - r[0] + 40, l - r[2] + 50);
            _ += 0.34 * Math.exp(-(e * e) / 45e3);
          }
          let x = L(_, 0, 1.4),
            C = x * (0.3 + 0.7 * m.next());
          if (C <= 0.06) continue;
          n.add(c, l);
          let T = b[u] < 90,
            D,
            O = m.next();
          D =
            f > 60 + 20 * le(c / 200, l / 200, w + 9) || (O < 0.28 && f > 30)
              ? 0
              : T && O < 0.42
                ? 2
                : O < 0.9
                  ? 1
                  : 2;
          let k = m.next() < 0.035,
            ee = 1 - L(x, 0, 1),
            A = k
              ? m.range(1.28, 1.58)
              : 0.5 + m.range(0, 0.55) * (0.85 + 0.75 * ee),
            j = ie(c, l);
          t.push({
            x: c,
            y0: j[0],
            y1: j[1],
            y2: j[2],
            z: l,
            sp: D,
            w: C,
            v: m.int(0, 2),
            s: A * (D === 0 ? 1.05 : 1),
            sxz: m.range(0.85, 1.2),
            sy: m.range(0.88, 1.18),
            rot: m.range(0, 6.2831),
            tiltA: m.range(0, 6.2831),
            tilt: m.range(0.02, 0.11),
            tint: 0.84 + 0.3 * m.next(),
          });
        }
      }
    t.sort((e, t) => t.w - e.w);
    for (let e = 0; e < Math.min(Br, t.length); e++) B.push(t[e]);
  }
  if (R && e.opts?.forest) {
    let t = e.opts.forest,
      n = t.clearings ?? [],
      r = t.lanes ?? [];
    for (let i = -E + 12; i < E - 12; i += Kr)
      for (let a = -E + 12; a < E - 12; a += Kr) {
        let o = Math.round(a / Kr),
          s = Math.round(i / Kr),
          c = a + (I(o, s, w + 901) - 0.5) * Kr,
          l = i + (I(o, s, w + 902) - 0.5) * Kr,
          u = e.cellIndex(c, l),
          d = v[u];
        if (y[u] || (d !== fe.GRASS && d !== fe.DIRT)) continue;
        let f = e.getHeight(c, l);
        if (
          f < g + 1 ||
          f > (t.treeLine ?? 150) ||
          (e.getNormal(c, l, S),
          S[1] < 0.8 || e.roadDist[u] < 6 + 4 * I(o, s, w + 903)) ||
          n.some((e) => Math.hypot(c - e.x, l - e.z) < e.r * 0.9) ||
          r.some((e) => $r(c, l, [e[0], e[1]], [e[2], e[3]]) < (e[4] ?? 14) / 2)
        )
          continue;
        let p =
          0.5 +
          0.5 * F(c / 150, l / 150, 3, w + 701) +
          0.3 * F(c / 23, l / 23, 2, w + 905);
        if (I(o, s, w + 904) > L((p - 0.42) * 1.6, 0, 0.85)) continue;
        let m = ie(c, l),
          h = B.length,
          _ = (e) => I(o, s, w + 910 + e);
        B.push({
          x: c,
          z: l,
          sp: 3,
          v: je(3, c, l, h, !1),
          under: !0,
          s: 0.7 + 0.55 * _(1),
          sxz: 0.85 + 0.3 * _(2),
          sy: 0.85 + 0.3 * _(3),
          rot: _(4) * 6.2831,
          tiltA: _(5) * 6.2831,
          tilt: 0.03 * _(6),
          tint: 0.86 + 0.24 * _(7),
          y0: m[0],
          y1: m[1],
          y2: m[2],
        });
      }
  }
  if (p && e.bounds) {
    let [t, n, r, i] = e.bounds,
      a = (t + r) / 2,
      o = (n + i) / 2,
      s = ((r - t) / 2) * 0.72,
      c = ((i - n) / 2) * 0.72;
    for (let e = B.length - 1; e >= 0; e--) {
      let t = B[e];
      (Math.abs(t.x - a) > s || Math.abs(t.z - o) > c) && B.splice(e, 1);
    }
  }
  let Ne = new _(1, 1, 1),
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
                  o = new d(a, r, i || void 0, t);
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
                return (x.add(o), { bm: o, gid: s, n: 0, shown: 0 });
              })
            );
          }),
        }
      : null,
    Fe = H ? ye : be,
    Ie = Fe
      ? Fe.map((e, t) => {
          let n = B.filter((e) => e.sp === t && (!H || e.classic)),
            r = (t, n, r, i) =>
              Ee(t).map(([t, a], o) => {
                let s = ti(new re(t, a, Math.max(1, n)));
                return (
                  (s.castShadow = i),
                  (s.receiveShadow = !0),
                  (s.frustumCulled = !1),
                  (s.count = 0),
                  s.instanceMatrix.setUsage(N),
                  (s.name = `trees_${e.name}_${r}${o ? `_leaves` : ``}`),
                  x.add(s),
                  s
                );
              }),
            i = (e) => n.filter((t) => t.v === e).length,
            a = (e, t, a) =>
              Array.isArray(e)
                ? e.map((e, n) => r(e, i(n), `${t}${n}`, a))
                : [r(e, n.length, t, a)],
            o = [
              e.near.map((e, t) => r(e, i(t), `${t}`, !0)),
              a(e.mid, `mid`, he && !H),
              a(e.far, `far`, !1),
            ];
          return {
            list: n,
            tiers: o,
            counts: o.map((e) => Array(e.length).fill(0)),
          };
        })
      : [],
    Le = he
      ? Fr({
          hf: e,
          trees: Pe,
          species: be,
          mic: ne,
          excluded: () => O,
          U: a,
          injectSurface: ge,
          seed: w,
        })
      : null;
  Le && x.add(Le.group);
  let Ve =
    he && e.opts?.paving
      ? zr({ U: a, injectSurface: ge, leafMat: Ce, seed: w })
      : null;
  Ve && x.add(Ve.group);
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
        tint: 0.94 + 0.08 * I(t, 9, w + 829),
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
  let U = new oe(),
    Ke = new C(),
    qe = new C(),
    Je = new s(),
    Ye = new s(),
    Xe = new s(0, 1, 0),
    Ze = new s(),
    Qe = new _(),
    $e = new i();
  function et(e, t) {
    let n = ae(e, t);
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
        e.tint * (0.93 + 0.07 * I(e.x | 0, e.z | 0, 6)),
        e.tint,
        e.tint * (0.88 + 0.11 * I(e.x | 0, e.z | 0, 7)),
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
  if (r) {
    let t = Re(),
      n = [],
      i = m.fork(`reeds`);
    for (let t = 0; t < 260; t++) {
      let t = i.range(0, 6.2831),
        a = 3 + i.range(0, 26),
        o = r[0] + Math.cos(t) * a,
        s = r[2] + Math.sin(t) * a,
        c = e.cellIndex(o, s),
        l = e.getHeight(o, s);
      if (
        !(l < g + 0.05 || l > g + 1.9) &&
        !(y[c] || v[c] === fe.ROAD) &&
        (n.push({
          x: o,
          y: l - 0.05,
          z: s,
          s: i.range(0.7, 1.5),
          rot: i.range(0, 6.2831),
        }),
        n.length >= 90)
      )
        break;
    }
    if (n.length) {
      let r = ti(new re(t, xe, n.length));
      ((r.castShadow = !1),
        (r.receiveShadow = !0),
        (r.frustumCulled = !0),
        (r.name = `reeds`),
        n.forEach((t, n) => {
          (Ke.setFromAxisAngle(Xe, t.rot),
            U.compose(
              Je.set(t.x, t.y, t.z),
              Ke,
              Ye.set(t.s, t.s * m.range(0.85, 1.2), t.s),
            ),
            r.setMatrixAt(n, U),
            k
              ? Qe.setRGB(1.15, 0.85, 0.5)
              : ee
                ? Qe.setRGB(0.72, 1.12, 0.62)
                : A
                  ? Qe.setRGB(0.86, 1.1, 0.64)
                  : e.opts?.biome === `desert`
                    ? Qe.setRGB(1.08, 0.95, 0.7)
                    : Qe.setRGB(0.95, 1, 0.85),
            r.setColorAt(n, Qe));
        }),
        (r.count = n.length),
        x.add(r),
        (it = { im: r, geo: t, matrices: r.instanceMatrix.array.slice() }));
    } else t.dispose();
  }
  let at = [Be(0), Be(1), Be(2), Be(3)],
    ot = new o({
      vertexColors: !0,
      flatShading: !1,
      roughness: 1,
      metalness: 0,
      side: 0,
    });
  ge(ot, a, {
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
    uniforms: { uFade: { value: new h(Xr[0], Xr[1]) } },
  });
  let st = at.map((e, t) => {
    let n = ti(new re(e, ot, Math.ceil(Vr * 0.42) + 64));
    return (
      (n.frustumCulled = !1),
      (n.receiveShadow = !1),
      (n.castShadow = !1),
      (n.name = `grass_${t}`),
      n.instanceMatrix.setUsage(N),
      (n.count = 0),
      x.add(n),
      n
    );
  });
  function ct(n) {
    let r = n.x,
      i = n.z,
      a = Math.floor((r - Jr) / Yr),
      o = Math.ceil((r + Jr) / Yr),
      s = Math.floor((i - Jr) / Yr),
      c = Math.ceil((i + Jr) / Yr),
      l = [0, 0, 0, 0],
      u = Math.ceil(Vr * 0.42),
      d = Jr * Jr;
    for (let n = s; n <= c; n++) {
      let s = I(n, 5, w + 95) * Yr;
      for (let c = a; c <= o; c++) {
        let a = I(c, n, w + 1),
          o = I(c, n, w + 2),
          f = I(c, n, w + 3),
          p = I(c, n, w + 4),
          m = I(c, n, w + 5),
          h = (c + 0.1 + 0.8 * a) * Yr + s,
          _ = (n + 0.1 + 0.8 * o) * Yr,
          b = h - r,
          x = _ - i;
        if (b * b + x * x > d) continue;
        let C = e.cellIndex(h, _),
          T = v[C];
        if (
          y[C] ||
          O(h - 0.75, _ - 0.75, h + 0.75, _ + 0.75) ||
          (T !== fe.GRASS && !(T === fe.DIRT && f < 0.22)) ||
          (k && m > 0.1) ||
          (M && m > 0.18 && M(h, _))
        )
          continue;
        let E = le(h / 9, _ / 9, w + 77) + 0.35 * le(h / 2.7, _ / 2.7, w + 78);
        if (E < -0.3) continue;
        let D = e.sampleSmooth(h, _),
          j = e.getHeight(h, _) + ne(h, _);
        if (
          j < g + 0.55 ||
          Math.abs(j - D) > 0.5 ||
          (e.getNormal(h, _, S), S[1] < 0.72)
        )
          continue;
        let te = 0;
        if (
          (f > 0.8
            ? (te = 1)
            : f < 0.17 || E > 0.75
              ? (te = 2)
              : m > 0.62 && (te = 3),
          l[te] >= u)
        )
          continue;
        let N = (0.7 + 0.7 * f) * (1 + 0.18 * L(E, -0.3, 0.8));
        (Ke.setFromAxisAngle(Xe, p * 6.2831),
          U.compose(
            Je.set(h, j - 0.02, _),
            Ke,
            Ye.set(
              N * (0.86 + 0.3 * m),
              N * (0.82 + 0.44 * o),
              N * (0.86 + 0.3 * o),
            ),
          ));
        let re = st[te];
        (re.setMatrixAt(l[te], U),
          k
            ? Qe.setRGB(1 + 0.2 * a, 0.8, 0.5)
            : ee
              ? Qe.setRGB(
                  t[C * 3] * 0.86,
                  t[C * 3 + 1] * 1.1,
                  t[C * 3 + 2] * 0.8,
                )
              : A
                ? Qe.setRGB(
                    t[C * 3] * 0.95,
                    t[C * 3 + 1] * 1.13,
                    t[C * 3 + 2] * 0.82,
                  )
                : e.opts?.biome === `desert`
                  ? Qe.setRGB(
                      t[C * 3] * 1.08,
                      t[C * 3 + 1] * 1.04,
                      t[C * 3 + 2] * 0.86,
                    )
                  : Qe.setRGB(
                      t[C * 3] * 1.04,
                      t[C * 3 + 1] * 1.09,
                      t[C * 3 + 2] * 0.94,
                    ),
          re.setColorAt(l[te], Qe),
          l[te]++);
      }
    }
    for (let e = 0; e < st.length; e++)
      ((st[e].count = l[e]),
        (st[e].instanceMatrix.needsUpdate = !0),
        st[e].instanceColor && (st[e].instanceColor.needsUpdate = !0));
    return l[0] + l[1] + l[2] + l[3];
  }
  let lt = new s(),
    ut = new s(),
    dt = new s(0, 0, 0),
    ft = new D(),
    pt = new oe(),
    mt = null,
    ht = null,
    gt = 0,
    _t = new f(),
    vt = (e) => (
      e.boundingBox || e.computeBoundingBox(),
      _t.copy(e.boundingBox).applyMatrix4(U),
      O(_t.min.x, _t.min.z, _t.max.x, _t.max.z)
    );
  function yt(e = []) {
    ((O = Ft(e)), Le && Le.reset());
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
  let bt = new _(3160138);
  function xt(e) {
    let t = L(e, 0, 1);
    (xe.color.setRGB(1, 1, 1).lerp(bt, t * 0.4),
      Se &&
        (Se.color.copy(xe.color),
        Ce.color.copy(xe.color),
        z.color.copy(xe.color)),
      Le && Le.setNight(xe.color),
      Ve && Ve.setNight(xe.color),
      ot.color.setRGB(1, 1, 1).lerp(bt, t * 0.4));
  }
  function St(t) {
    if (
      (t.getWorldPosition(lt),
      t.getWorldDirection(ut),
      t.updateMatrixWorld(),
      pt.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      ft.setFromProjectionMatrix(pt),
      !mt || lt.distanceToSquared(mt) > 64 || ut.dot(dt) < 0.9985)
    ) {
      let t =
        p && lt.y - e.getHeight(lt.x, lt.z) < 60
          ? u.treeFar
          : L(760 + Math.max(0, lt.y - 40) * 1.9, 760, 2700);
      (nt(lt, ft, t), (mt = mt ? mt.copy(lt) : lt.clone()), dt.copy(ut));
    }
    let n = lt.y - e.getHeight(lt.x, lt.z) > 130;
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
    group: x,
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
