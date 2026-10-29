// assets__terrain-D4VU5r38 02 — math
// Lines 241-639 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function bt(e, t, r) {
  let { n: a, res: u, half: d, heights: p } = e,
    m = St(e),
    h = Tt(e, m, t),
    g = (t) => {
      for (let n = 0; n < a * a; n++) {
        let r = L(
          Math.max(e.padMask[n], 1 - P(4, 11, e.roadDist[n]), +!!e.fordMask[n]),
          0,
          1,
        );
        if (!(r <= 0))
          for (let e = 0; e < 3; e++)
            t[n * 3 + e] += (h[n * 3 + e] - t[n * 3 + e]) * r;
      }
      return t;
    },
    _ = [g(Ct(h, a, 2)), g(Ct(h, a, 1)), h],
    v = h,
    y = (t | 0) * 7919 + 13,
    b = e.opts?.paving?.bounds ?? null,
    x = b ? (e.opts.paving.ground ?? null) : null,
    S = x ? R(x, 1).map : b ? Se(`plazaStone`).map : null,
    C = x ? he(x) : Ce.plazaStone.scale,
    w = (t) => {
      let n = new o({
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
    E = [w(0), w(gt[0]), w(gt[1])],
    O = new T();
  O.name = `terrain`;
  let k = new Map(),
    ee = new Set(),
    A = 0,
    j = 128 / u,
    M = Math.ceil(e.size / 128),
    te = new Float32Array(M * M).fill(1 / 0),
    N = new Float32Array(M * M).fill(-1 / 0);
  for (let e = 0; e < M; e++)
    for (let t = 0; t < M; t++) {
      let n = e * M + t,
        r = Math.min(a - 1, Math.ceil((t + 1) * j)),
        i = Math.min(a - 1, Math.ceil((e + 1) * j));
      for (let o = Math.floor(e * j); o <= i; o++)
        for (let e = Math.floor(t * j); e <= r; e++) {
          let t = p[o * a + e];
          (t < te[n] && (te[n] = t), t > N[n] && (N[n] = t));
        }
    }
  function ne(e, t, n, r) {
    let i = 4 >> e;
    if (t * i >= M || n * i >= M) return null;
    let a = 1 / 0,
      o = -1 / 0;
    for (let e = n * i; e < Math.min(M, (n + 1) * i); e++)
      for (let n = t * i; n < Math.min(M, (t + 1) * i); n++) {
        let t = e * M + n;
        (te[t] < a && (a = te[t]), N[t] > o && (o = N[t]));
      }
    let s = mt >> e,
      c = -d + t * s,
      l = -d + n * s;
    return (
      (r[0] = c),
      (r[1] = a - _t - yt),
      (r[2] = l),
      (r[3] = Math.min(d, c + s)),
      (r[4] = o + yt),
      (r[5] = Math.min(d, l + s)),
      r
    );
  }
  let re = a - 1.000001;
  function ie(e, t) {
    let n = (e + d) / u,
      r = (t + d) / u;
    (n > 0 ? n > re && (n = re) : (n = 0),
      r > 0 ? r > re && (r = re) : (r = 0));
    let i = n | 0,
      o = r | 0,
      s = n - i,
      c = r - o,
      l = o * a + i,
      f = p[l] + (p[l + 1] - p[l]) * s;
    return f + (p[l + a] + (p[l + a + 1] - p[l + a]) * s - f) * c;
  }
  function ae(e, t, n) {
    let r = (e + d) / n,
      i = (t + d) / n,
      a = Math.floor(r),
      o = Math.floor(i),
      s = r - a,
      c = i - o,
      l = -d + a * n,
      u = -d + o * n,
      f = ie(l, u),
      p = ie(l + n, u),
      m = ie(l, u + n),
      h = ie(l + n, u + n),
      g = f + (p - f) * s;
    return g + (m + (h - m) * s - g) * c;
  }
  function se(t, n) {
    let r = e.cellIndex(t, n);
    return L(Math.max(e.padMask[r], 1 - P(3.2, 8, e.roadDist[r])), 0, 1);
  }
  function ce(t, n) {
    let r = e.cellIndex(t, n),
      i =
        yt * (1 - 0.86 * Math.max(e.padMask[r], 1 - P(4.5, 11, e.roadDist[r]))),
      a = Math.round(t),
      o = Math.round(n);
    return (
      ((I(a, o, y) - 0.5) * 0.62 + (I(a >> 1, o >> 1, y + 1) - 0.5) * 0.38) *
      i *
      2
    );
  }
  function le(e, t, n, r, i) {
    let o = (t + d) / u,
      s = (n + d) / u;
    (o > 0 ? o > re && (o = re) : (o = 0),
      s > 0 ? s > re && (s = re) : (s = 0));
    let c = o | 0,
      l = s | 0,
      f = o - c,
      p = s - l,
      m = (l * a + c) * 3,
      h = m + a * 3;
    for (let t = 0; t < 3; t++) {
      let n = e[m + t] + (e[m + 3 + t] - e[m + t]) * f,
        a = e[h + t] + (e[h + 3 + t] - e[h + t]) * f;
      r[i + t] = n + (a - n) * p;
    }
  }
  let F = new Float32Array(12);
  function ue(e, t, n, r, i, a) {
    let o = (t + d) / r,
      s = (n + d) / r,
      c = Math.floor(o),
      l = Math.floor(s),
      u = o - c,
      f = s - l,
      p = -d + c * r,
      m = -d + l * r;
    (le(e, p, m, F, 0),
      le(e, p + r, m, F, 3),
      le(e, p, m + r, F, 6),
      le(e, p + r, m + r, F, 9));
    for (let e = 0; e < 3; e++) {
      let t = F[e] + (F[3 + e] - F[e]) * u,
        n = F[6 + e] + (F[9 + e] - F[6 + e]) * u;
      i[a + e] = t + (n - t) * f;
    }
  }
  function de(e, t, r) {
    let a = mt >> e,
      o = a / (ht[e] - 1),
      s = -d + t * a,
      f = -d + r * a,
      p = Math.min(a, d - s),
      m = Math.min(a, d - f),
      h = Math.ceil(p / o) + 1,
      g = Math.ceil(m / o) + 1,
      v = e === 0 ? 0 : mt / (ht[e - 1] - 1) / (1 << (e - 1)),
      b = e === 2,
      x = h * g + 4 * (h + g),
      S = new Float32Array(x * 3),
      C = new Float32Array(x * 3),
      w = new Float32Array(x * 3),
      T = new Float32Array(x),
      D = new Float32Array(x),
      k = new Float32Array(x),
      ee = new Float32Array(x * 3),
      A = new Float32Array(x),
      j = _[e],
      M = e > 0 ? _[e - 1] : null,
      te = y + 977,
      N = 0,
      ne = (e, t, n, r) => {
        let i = Math.min(e * o, p),
          a = Math.min(t * o, m),
          c = s + i,
          l = f + a,
          d = ie(c, l);
        (b && (d += ce(c, l)),
          (S[N * 3] = i),
          (S[N * 3 + 1] = d + n),
          (S[N * 3 + 2] = a));
        let h = (ie(c + u, l) - ie(c - u, l)) / (2 * u),
          g = (ie(c, l + u) - ie(c, l - u)) / (2 * u),
          _ = 1 / Math.sqrt(h * h + 1 + g * g);
        ((C[N * 3] = -h * _),
          (C[N * 3 + 1] = _),
          (C[N * 3 + 2] = -g * _),
          le(j, c, l, w, N * 3),
          M
            ? ue(M, c, l, v, ee, N * 3)
            : ((ee[N * 3] = w[N * 3]),
              (ee[N * 3 + 1] = w[N * 3 + 1]),
              (ee[N * 3 + 2] = w[N * 3 + 2])),
          (T[N] = (v ? ae(c, l, v) : d) + n),
          (D[N] = +!!r),
          (k[N] = se(c, l)),
          (A[N] = I(Math.round(c * 2), Math.round(l * 2), te)),
          N++);
      };
    for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) ne(t, e, 0, !1);
    let re = N;
    for (let e = 0; e < h; e++) ne(e, 0, 0, !0);
    let oe = N;
    for (let e = 0; e < h; e++) ne(e, 0, -8, !0);
    let P = N;
    for (let e = 0; e < h; e++) ne(e, g - 1, 0, !0);
    let F = N;
    for (let e = 0; e < h; e++) ne(e, g - 1, -8, !0);
    let L = N;
    for (let e = 0; e < g; e++) ne(0, e, 0, !0);
    let de = N;
    for (let e = 0; e < g; e++) ne(0, e, -8, !0);
    let fe = N;
    for (let e = 0; e < g; e++) ne(h - 1, e, 0, !0);
    let pe = N;
    for (let e = 0; e < g; e++) ne(h - 1, e, -8, !0);
    let me = new Uint16Array(((h - 1) * (g - 1) * 2 + 4 * (h + g - 2)) * 3),
      he = 0,
      ge = (e, t, n, r, i) => {
        i
          ? ((me[he++] = e),
            (me[he++] = n),
            (me[he++] = r),
            (me[he++] = e),
            (me[he++] = r),
            (me[he++] = t))
          : ((me[he++] = e),
            (me[he++] = n),
            (me[he++] = t),
            (me[he++] = t),
            (me[he++] = n),
            (me[he++] = r));
      };
    for (let e = 0; e < g - 1; e++)
      for (let t = 0; t < h - 1; t++) {
        let n = e * h + t,
          r = n + 1,
          i = n + h;
        ge(n, r, i, i + 1, ((t + e) & 1) == 1);
      }
    for (let e = 0; e < h - 1; e++)
      (ge(re + e + 1, re + e, oe + e + 1, oe + e, !0),
        ge(P + e, P + e + 1, F + e, F + e + 1, !0));
    for (let e = 0; e < g - 1; e++)
      (ge(L + e, L + e + 1, de + e, de + e + 1, !0),
        ge(fe + e + 1, fe + e, pe + e + 1, pe + e, !0));
    let R = new l();
    (R.setAttribute(`position`, new c(S, 3)),
      R.setAttribute(`normal`, new c(C, 3)),
      R.setAttribute(`color`, new c(w, 3)),
      R.setAttribute(`aTargetY`, new c(T, 1)),
      R.setAttribute(`aTargetC`, new c(ee, 3)),
      R.setAttribute(`aFacet`, new c(A, 1)),
      R.setAttribute(`aSkirt`, new c(D, 1)),
      R.setAttribute(`aBuilt`, new c(k, 1)),
      R.setIndex(new c(me, 1)),
      R.computeBoundingBox());
    for (let e = 0; e < T.length; e++)
      ((R.boundingBox.min.y = Math.min(R.boundingBox.min.y, T[e])),
        (R.boundingBox.max.y = Math.max(R.boundingBox.max.y, T[e])));
    R.boundingSphere = R.boundingBox.getBoundingSphere(new i());
    let _e = new n(R, E[e]);
    return (
      _e.position.set(s, 0, f),
      (_e.castShadow = !1),
      (_e.receiveShadow = !0),
      (_e.matrixAutoUpdate = !1),
      _e.updateMatrix(),
      (_e.name = `terrain_${e}_${t}_${r}`),
      (_e.visible = !1),
      (_e.userData.level = e),
      O.add(_e),
      _e
    );
  }
  function fe(e, t, n) {
    let r = e * 4096 + n * 64 + t,
      i = k.get(r);
    return (
      i || ((i = de(e, t, n)), (i.userData.key = r), k.set(r, i)),
      (i.userData.used = A),
      i
    );
  }
  function pe() {
    let e = 0;
    for (let t of k.values()) t.userData.level === 2 && e++;
    if (e <= vt) return;
    let t = [];
    for (let e of k.values()) e.userData.level === 2 && !ee.has(e) && t.push(e);
    t.sort((e, t) => e.userData.used - t.userData.used);
    for (let n = 0; n < t.length && e > vt; n++, e--) {
      let e = t[n];
      (O.remove(e), e.geometry.dispose(), k.delete(e.userData.key));
    }
  }
  let me = new s(),
    _e = new D(),
    ve = new oe(),
    ye = new f(),
    be = [0, 0, 0, 0, 0, 0];
  function xe(e) {
    let t = Math.max(e[0] - me.x, 0, me.x - e[3]),
      n = Math.max(e[1] - me.y, 0, me.y - e[4]),
      r = Math.max(e[2] - me.z, 0, me.z - e[5]);
    return Math.sqrt(t * t + n * n + r * r);
  }
  let z = new Set();
  function we(e, t, n) {
    if (!ne(e, t, n, be)) return;
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
    let i = fe(e, t, n);
    ((i.visible = !0), z.add(i));
  }
  function Te(t) {
    (A++,
      t.getWorldPosition(me),
      t.updateMatrixWorld(),
      ve.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      _e.setFromProjectionMatrix(ve),
      (z = new Set()));
    let n = Math.ceil(e.size / mt);
    for (let e = 0; e < n; e++) for (let t = 0; t < n; t++) we(0, t, e);
    for (let e of ee) z.has(e) || (e.visible = !1);
    ((ee = z), A % 30 == 0 && pe());
  }
  function Ee() {
    for (let e of k.values()) (e.geometry.dispose(), O.remove(e));
    (k.clear(), (ee = new Set()));
    for (let e of E) e.dispose();
  }
  return {
    group: O,
    update: Te,
    dispose: Ee,
    colors: v,
    ao: m,
    materials: E,
    hAt: ie,
    micro: ce,
    nodeCount: () => k.size,
    visibleCount: () => ee.size,
  };
}
