// assets__terrain-C3lt_eD1 02 — math
// Lines 241-639 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function bt(e, t, r) {
  let { n: i, res: a, half: s, heights: c } = e,
    l = St(e),
    f = Tt(e, l, t),
    p = (t) => {
      for (let n = 0; n < i * i; n++) {
        let r = I(
          Math.max(e.padMask[n], 1 - N(4, 11, e.roadDist[n]), +!!e.fordMask[n]),
          0,
          1,
        );
        if (!(r <= 0))
          for (let e = 0; e < 3; e++)
            t[n * 3 + e] += (f[n * 3 + e] - t[n * 3 + e]) * r;
      }
      return t;
    },
    h = [p(Ct(f, i, 2)), p(Ct(f, i, 1)), f],
    g = f,
    v = (t | 0) * 7919 + 13,
    b = e.opts?.paving?.bounds ?? null,
    x = b ? (e.opts.paving.ground ?? null) : null,
    S = x ? R(x, 1).map : b ? Se(`plazaStone`).map : null,
    C = x ? he(x) : Ce.plazaStone.scale,
    w = (t) => {
      let n = new y({
        vertexColors: !0,
        flatShading: !0,
        roughness: 0.96,
        metalness: 0,
      });
      return (
        (n.userData.uMorphSplit = { value: t }),
        ge(n, r, {
          key: `terrain-ground-v9-${e.opts?.biome ?? `temperate`}${b ? `-paved${x ? `-` + x : ``}` : ``}`,
          ...Et(b, C, !!x),
          winter: e.opts?.biome === `snow`,
          biome: e.opts?.biome ?? null,
          detail: 0.16,
          cliff: 0.3,
          skirt: !0,
          built: !0,
          facet: 0.19,
          smoothFar: [95, 330],
          uniforms: {
            uMorphSplit: n.userData.uMorphSplit,
            ...(b ? { uPaveMap: { value: S } } : {}),
          },
          vertexDecl: `attribute float aTargetY;
attribute vec3 aTargetC;
uniform float uMorphSplit;
float terMorph = 0.0;`,
          colorVertex: `
        if (uMorphSplit > 0.5) {
          vec3 mwp = (modelMatrix * vec4(position, 1.0)).xyz;
          terMorph = smoothstep(uMorphSplit * 0.78, uMorphSplit * 0.97, distance(mwp, cameraPosition));
          vColor.rgb = mix(vColor.rgb, aTargetC, terMorph);
        }`,
          extraVertex: `
        transformed.y = mix(transformed.y, aTargetY, terMorph);`,
        }),
        n
      );
    },
    T = [w(0), w(gt[0]), w(gt[1])],
    E = new te();
  E.name = `terrain`;
  let D = new Map(),
    O = new Set(),
    ee = 0,
    k = 128 / a,
    A = Math.ceil(e.size / 128),
    ne = new Float32Array(A * A).fill(1 / 0),
    re = new Float32Array(A * A).fill(-1 / 0);
  for (let e = 0; e < A; e++)
    for (let t = 0; t < A; t++) {
      let n = e * A + t,
        r = Math.min(i - 1, Math.ceil((t + 1) * k)),
        a = Math.min(i - 1, Math.ceil((e + 1) * k));
      for (let o = Math.floor(e * k); o <= a; o++)
        for (let e = Math.floor(t * k); e <= r; e++) {
          let t = c[o * i + e];
          (t < ne[n] && (ne[n] = t), t > re[n] && (re[n] = t));
        }
    }
  function j(e, t, n, r) {
    let i = 4 >> e;
    if (t * i >= A || n * i >= A) return null;
    let a = 1 / 0,
      o = -1 / 0;
    for (let e = n * i; e < Math.min(A, (n + 1) * i); e++)
      for (let n = t * i; n < Math.min(A, (t + 1) * i); n++) {
        let t = e * A + n;
        (ne[t] < a && (a = ne[t]), re[t] > o && (o = re[t]));
      }
    let c = mt >> e,
      l = -s + t * c,
      u = -s + n * c;
    return (
      (r[0] = l),
      (r[1] = a - _t - yt),
      (r[2] = u),
      (r[3] = Math.min(s, l + c)),
      (r[4] = o + yt),
      (r[5] = Math.min(s, u + c)),
      r
    );
  }
  let ie = i - 1.000001;
  function ae(e, t) {
    let n = (e + s) / a,
      r = (t + s) / a;
    (n > 0 ? n > ie && (n = ie) : (n = 0),
      r > 0 ? r > ie && (r = ie) : (r = 0));
    let o = n | 0,
      l = r | 0,
      u = n - o,
      d = r - l,
      f = l * i + o,
      p = c[f] + (c[f + 1] - c[f]) * u;
    return p + (c[f + i] + (c[f + i + 1] - c[f + i]) * u - p) * d;
  }
  function se(e, t, n) {
    let r = (e + s) / n,
      i = (t + s) / n,
      a = Math.floor(r),
      o = Math.floor(i),
      c = r - a,
      l = i - o,
      u = -s + a * n,
      d = -s + o * n,
      f = ae(u, d),
      p = ae(u + n, d),
      m = ae(u, d + n),
      h = ae(u + n, d + n),
      g = f + (p - f) * c;
    return g + (m + (h - m) * c - g) * l;
  }
  function ce(t, n) {
    let r = e.cellIndex(t, n);
    return I(Math.max(e.padMask[r], 1 - N(3.2, 8, e.roadDist[r])), 0, 1);
  }
  function le(t, n) {
    let r = e.cellIndex(t, n),
      i =
        yt * (1 - 0.86 * Math.max(e.padMask[r], 1 - N(4.5, 11, e.roadDist[r]))),
      a = Math.round(t),
      o = Math.round(n);
    return (
      ((F(a, o, v) - 0.5) * 0.62 + (F(a >> 1, o >> 1, v + 1) - 0.5) * 0.38) *
      i *
      2
    );
  }
  function ue(e, t, n, r, o) {
    let c = (t + s) / a,
      l = (n + s) / a;
    (c > 0 ? c > ie && (c = ie) : (c = 0),
      l > 0 ? l > ie && (l = ie) : (l = 0));
    let u = c | 0,
      d = l | 0,
      f = c - u,
      p = l - d,
      m = (d * i + u) * 3,
      h = m + i * 3;
    for (let t = 0; t < 3; t++) {
      let n = e[m + t] + (e[m + 3 + t] - e[m + t]) * f,
        i = e[h + t] + (e[h + 3 + t] - e[h + t]) * f;
      r[o + t] = n + (i - n) * p;
    }
  }
  let P = new Float32Array(12);
  function de(e, t, n, r, i, a) {
    let o = (t + s) / r,
      c = (n + s) / r,
      l = Math.floor(o),
      u = Math.floor(c),
      d = o - l,
      f = c - u,
      p = -s + l * r,
      m = -s + u * r;
    (ue(e, p, m, P, 0),
      ue(e, p + r, m, P, 3),
      ue(e, p, m + r, P, 6),
      ue(e, p + r, m + r, P, 9));
    for (let e = 0; e < 3; e++) {
      let t = P[e] + (P[3 + e] - P[e]) * d,
        n = P[6 + e] + (P[9 + e] - P[6 + e]) * d;
      i[a + e] = t + (n - t) * f;
    }
  }
  function fe(e, t, r) {
    let i = mt >> e,
      c = i / (ht[e] - 1),
      l = -s + t * i,
      d = -s + r * i,
      f = Math.min(i, s - l),
      p = Math.min(i, s - d),
      m = Math.ceil(f / c) + 1,
      g = Math.ceil(p / c) + 1,
      y = e === 0 ? 0 : mt / (ht[e - 1] - 1) / (1 << (e - 1)),
      b = e === 2,
      x = m * g + 4 * (m + g),
      S = new Float32Array(x * 3),
      C = new Float32Array(x * 3),
      w = new Float32Array(x * 3),
      D = new Float32Array(x),
      O = new Float32Array(x),
      ee = new Float32Array(x),
      te = new Float32Array(x * 3),
      k = new Float32Array(x),
      A = h[e],
      ne = e > 0 ? h[e - 1] : null,
      re = v + 977,
      j = 0,
      M = (e, t, n, r) => {
        let i = Math.min(e * c, f),
          o = Math.min(t * c, p),
          s = l + i,
          u = d + o,
          m = ae(s, u);
        (b && (m += le(s, u)),
          (S[j * 3] = i),
          (S[j * 3 + 1] = m + n),
          (S[j * 3 + 2] = o));
        let h = (ae(s + a, u) - ae(s - a, u)) / (2 * a),
          g = (ae(s, u + a) - ae(s, u - a)) / (2 * a),
          _ = 1 / Math.sqrt(h * h + 1 + g * g);
        ((C[j * 3] = -h * _),
          (C[j * 3 + 1] = _),
          (C[j * 3 + 2] = -g * _),
          ue(A, s, u, w, j * 3),
          ne
            ? de(ne, s, u, y, te, j * 3)
            : ((te[j * 3] = w[j * 3]),
              (te[j * 3 + 1] = w[j * 3 + 1]),
              (te[j * 3 + 2] = w[j * 3 + 2])),
          (D[j] = (y ? se(s, u, y) : m) + n),
          (O[j] = +!!r),
          (ee[j] = ce(s, u)),
          (k[j] = F(Math.round(s * 2), Math.round(u * 2), re)),
          j++);
      };
    for (let e = 0; e < g; e++) for (let t = 0; t < m; t++) M(t, e, 0, !1);
    let ie = j;
    for (let e = 0; e < m; e++) M(e, 0, 0, !0);
    let oe = j;
    for (let e = 0; e < m; e++) M(e, 0, -8, !0);
    let N = j;
    for (let e = 0; e < m; e++) M(e, g - 1, 0, !0);
    let P = j;
    for (let e = 0; e < m; e++) M(e, g - 1, -8, !0);
    let I = j;
    for (let e = 0; e < g; e++) M(0, e, 0, !0);
    let fe = j;
    for (let e = 0; e < g; e++) M(0, e, -8, !0);
    let pe = j;
    for (let e = 0; e < g; e++) M(m - 1, e, 0, !0);
    let me = j;
    for (let e = 0; e < g; e++) M(m - 1, e, -8, !0);
    let L = new Uint16Array(((m - 1) * (g - 1) * 2 + 4 * (m + g - 2)) * 3),
      he = 0,
      ge = (e, t, n, r, i) => {
        i
          ? ((L[he++] = e),
            (L[he++] = n),
            (L[he++] = r),
            (L[he++] = e),
            (L[he++] = r),
            (L[he++] = t))
          : ((L[he++] = e),
            (L[he++] = n),
            (L[he++] = t),
            (L[he++] = t),
            (L[he++] = n),
            (L[he++] = r));
      };
    for (let e = 0; e < g - 1; e++)
      for (let t = 0; t < m - 1; t++) {
        let n = e * m + t,
          r = n + 1,
          i = n + m;
        ge(n, r, i, i + 1, ((t + e) & 1) == 1);
      }
    for (let e = 0; e < m - 1; e++)
      (ge(ie + e + 1, ie + e, oe + e + 1, oe + e, !0),
        ge(N + e, N + e + 1, P + e, P + e + 1, !0));
    for (let e = 0; e < g - 1; e++)
      (ge(I + e, I + e + 1, fe + e, fe + e + 1, !0),
        ge(pe + e + 1, pe + e, me + e + 1, me + e, !0));
    let R = new u();
    (R.setAttribute(`position`, new o(S, 3)),
      R.setAttribute(`normal`, new o(C, 3)),
      R.setAttribute(`color`, new o(w, 3)),
      R.setAttribute(`aTargetY`, new o(D, 1)),
      R.setAttribute(`aTargetC`, new o(te, 3)),
      R.setAttribute(`aFacet`, new o(k, 1)),
      R.setAttribute(`aSkirt`, new o(O, 1)),
      R.setAttribute(`aBuilt`, new o(ee, 1)),
      R.setIndex(new o(L, 1)),
      R.computeBoundingBox());
    for (let e = 0; e < D.length; e++)
      ((R.boundingBox.min.y = Math.min(R.boundingBox.min.y, D[e])),
        (R.boundingBox.max.y = Math.max(R.boundingBox.max.y, D[e])));
    R.boundingSphere = R.boundingBox.getBoundingSphere(new n());
    let _e = new _(R, T[e]);
    return (
      _e.position.set(l, 0, d),
      (_e.castShadow = !1),
      (_e.receiveShadow = !0),
      (_e.matrixAutoUpdate = !1),
      _e.updateMatrix(),
      (_e.name = `terrain_${e}_${t}_${r}`),
      (_e.visible = !1),
      (_e.userData.level = e),
      E.add(_e),
      _e
    );
  }
  function pe(e, t, n) {
    let r = e * 4096 + n * 64 + t,
      i = D.get(r);
    return (
      i || ((i = fe(e, t, n)), (i.userData.key = r), D.set(r, i)),
      (i.userData.used = ee),
      i
    );
  }
  function me() {
    let e = 0;
    for (let t of D.values()) t.userData.level === 2 && e++;
    if (e <= vt) return;
    let t = [];
    for (let e of D.values()) e.userData.level === 2 && !O.has(e) && t.push(e);
    t.sort((e, t) => e.userData.used - t.userData.used);
    for (let n = 0; n < t.length && e > vt; n++, e--) {
      let e = t[n];
      (E.remove(e), e.geometry.dispose(), D.delete(e.userData.key));
    }
  }
  let L = new oe(),
    _e = new M(),
    ve = new d(),
    ye = new m(),
    be = [0, 0, 0, 0, 0, 0];
  function xe(e) {
    let t = Math.max(e[0] - L.x, 0, L.x - e[3]),
      n = Math.max(e[1] - L.y, 0, L.y - e[4]),
      r = Math.max(e[2] - L.z, 0, L.z - e[5]);
    return Math.sqrt(t * t + n * n + r * r);
  }
  let z = new Set();
  function we(e, t, n) {
    if (!j(e, t, n, be)) return;
    let r = xe(be);
    if (e < 2 && r < gt[e]) {
      for (let r = 0; r < 2; r++)
        for (let i = 0; i < 2; i++) we(e + 1, t * 2 + i, n * 2 + r);
      return;
    }
    if (
      (ye.min.set(be[0], be[1], be[2]),
      ye.max.set(be[3], be[4], be[5]),
      !_e.intersectsBox(ye))
    )
      return;
    let i = pe(e, t, n);
    ((i.visible = !0), z.add(i));
  }
  function Te(t) {
    (ee++,
      t.getWorldPosition(L),
      t.updateMatrixWorld(),
      ve.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      _e.setFromProjectionMatrix(ve),
      (z = new Set()));
    let n = Math.ceil(e.size / mt);
    for (let e = 0; e < n; e++) for (let t = 0; t < n; t++) we(0, t, e);
    for (let e of O) z.has(e) || (e.visible = !1);
    ((O = z), ee % 30 == 0 && me());
  }
  function Ee() {
    for (let e of D.values()) (e.geometry.dispose(), E.remove(e));
    (D.clear(), (O = new Set()));
    for (let e of T) e.dispose();
  }
  return {
    group: E,
    update: Te,
    dispose: Ee,
    colors: g,
    ao: l,
    materials: T,
    hAt: ae,
    micro: le,
    nodeCount: () => D.size,
    visibleCount: () => O.size,
  };
}
