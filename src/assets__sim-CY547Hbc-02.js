// assets__sim-CY547Hbc 02 — math
// Lines 157-956 of readable/assets__sim-CY547Hbc.pretty.js (statement-aligned).
function _(t, n) {
  let r = n.size,
    a = n.res,
    o = Math.round(r / a) + 1,
    h = r / 2,
    g = o * o,
    _ = n.waterLevel,
    T = e(t),
    E = (e) => T.fork(`terrain:` + e).int(1, 2147483e3),
    D = {
      hills: E(`hills`),
      detail: E(`detail`),
      ridge: E(`ridge`),
      edge: E(`edge`),
      plateau: E(`plateau`),
      plain: E(`plain`),
      river: E(`river`),
      lake: E(`lake`),
      mat: E(`mat`),
      width: E(`width`),
      roll: E(`roll`),
    },
    O = T.fork(`terrain:layout`),
    k = n.river || null,
    ie = O.next() < 0.5 ? Math.PI : 0,
    ae = O.range(-0.62, 0.62),
    oe = k && k.flip != null ? (k.flip ? Math.PI : 0) : ie,
    se = (k?.rot ?? ae) + oe,
    ce = Math.cos(se),
    le = Math.sin(se),
    A = (e, t) => e * ce - t * le,
    j = (e, t) => e * le + t * ce,
    ue = O.range(-235, 235),
    M = k?.x0 ?? ue,
    de = O.range(105, 185),
    fe = O.range(340, 520),
    pe = k?.amp?.[0] ?? de,
    me = k?.len?.[0] ?? fe,
    he = O.range(34, 78),
    ge = O.range(130, 215),
    _e = k?.amp?.[1] ?? he,
    ve = k?.len?.[1] ?? ge,
    ye = k?.wander ?? 1,
    be = k?.width ?? 1,
    xe = O.range(0, 6.28),
    Se = O.range(0, 6.28),
    Ce = O.range(0, 6.28),
    we = O.range(0.88, 1.14),
    Te = O.range(0.88, 1.14),
    Ee = O.range(0, 6.28),
    De = {
      x: M + O.range(140, 300),
      z: O.range(530, 690),
      r: O.range(165, 215),
    },
    N = k?.lake ? { ...De, ...k.lake } : De,
    P = { x: A(N.x, N.z), z: j(N.x, N.z), r: N.r },
    F = (n.flatten || []).map((e) => [e.x, e.z, Math.max(4, e.radius || 30)]),
    I = n.plateau
      ? { x: n.plateau.x, z: n.plateau.z, r: n.plateau.r, top: n.plateau.top }
      : null;
  for (let e = 0; e < 16 && !I; e++) {
    let e = M - (O.next() < 0.5 ? 1 : -1) * O.range(400, 640),
      t = O.range(-540, -60),
      n = O.range(190, 268),
      r = O.range(70, 96),
      i = A(e, t),
      a = j(e, t);
    Math.hypot(i - P.x, a - P.z) < n + P.r + 70 ||
      (Math.abs(i) ** 4 + Math.abs(a) ** 4) ** 0.25 > 700 - n * 0.35 ||
      F.some((e) => Math.hypot(i - e[0], a - e[1]) < n + e[2] + 80) ||
      (I = { x: i, z: a, r: n, top: r });
  }
  I ||= { x: A(M - 520, -300), z: j(M - 520, -300), r: 226, top: 82 };
  let L = [],
    Oe = -h * 1.65,
    ke = N.z + 30;
  for (let e = Oe; e <= ke; e += 12) {
    let t =
        M +
        pe * Math.sin(e / me + xe) +
        _e * Math.sin(e / ve + Se) +
        40 * ye * s(e / 260, 3.3, 2, D.river),
      n = l(N.z - 340, N.z - 40, e);
    ((t = d(t, N.x, n)), L.push([A(t, e), j(t, e)]));
  }
  let R = (e) => {
      let t = Oe + e * 12;
      return (
        be *
          (19 + 6 * Math.sin(e * 0.37 + Ce) + 3 * i(e * 0.11, 2.2, D.width)) +
        10 * l(N.z - 420, N.z - 120, t)
      );
    },
    z = C(L, 110, o, a, h, null),
    Ae = v(L, 470, r, h, 8),
    je = (e) => 22 + 9 * i(e * 0.09, 1.7, D.width + 3),
    B = (e) => b(r, h, 8, e),
    Me = (e) => b(r, h, 4, e),
    Ne = n.rim?.[0] ?? 620,
    Pe = n.rim?.[1] ?? 880,
    Fe = n.relief ?? 1,
    Ie = (e, t) => {
      let n = e * we,
        r = t * Te,
        i =
          (n * n * n * n + r * r * r * r) ** 0.25 +
          24 * Math.sin(Math.atan2(t, e) * 2 + Ee);
      return l(Ne, Pe, i + 60 * s(e / 260, t / 260, 2, D.edge));
    },
    [Le, Re] = y(r, h, 8, (e, t, n) => {
      let r = Ie(e, t);
      ((n[0] = r),
        (n[1] =
          24 +
          24 * s(e / 520, t / 520, 5, D.hills) +
          (48 + 215 * c(e / 640, t / 640, 4, D.ridge) ** 1.7) * r));
    }),
    V = n.island
      ? {
          r0: n.island.r0 ?? 300,
          r1: n.island.r1 ?? 400,
          depth: n.island.depth ?? 26,
          shelf: n.island.shelf ?? 1.6,
          fall: n.island.fall ?? 240,
          wob: n.island.wob ?? 46,
          ax: n.island.ax ?? 1,
          az: n.island.az ?? 1,
          plain: n.island.plain ?? 3.2,
          scale: n.island.scale ?? 1,
          bays: n.island.bays ?? [],
          coast: n.island.coast ?? [
            (n.island.r0 ?? 300) - 150,
            (n.island.r0 ?? 300) - 20,
          ],
        }
      : null,
    ze = V ? B((e, t) => s(e / 210, t / 210, 3, D.edge + 9)) : null,
    H = V
      ? (e, t) => {
          let n = e * V.ax,
            r = t * V.az,
            i = (n * n * n * n + r * r * r * r) ** 0.25 + V.wob * ze(e, t);
          for (let n of V.bays) {
            let r = Math.hypot(e - n.x, t - n.z);
            r < n.r && (i += (V.r1 - V.r0 + 90) * (1 - l(n.r * 0.3, n.r, r)));
          }
          return i;
        }
      : null,
    Be = B((e, t) => s(e / 95, t / 95, 3, D.plain)),
    Ve = B((e, t) => s(e / 230, t / 230, 2, D.plain + 3)),
    He = B((e, t) => s(e / 205, t / 205, 2, D.roll)),
    Ue = B((e, t) => c(e / 268, t / 268, 3, D.roll + 13)),
    We = [I.x - I.r - 210, I.z - I.r - 210, I.x + I.r + 210, I.z + I.r + 210],
    Ge = [P.x - P.r - 150, P.z - P.r - 150, P.x + P.r + 150, P.z + P.r + 150],
    U = (e) => b(r, h, 8, e, We),
    Ke = (e) => b(r, h, 8, e, Ge),
    qe = U((e, t) => s(e / 200, t / 200, 3, D.plateau)),
    Je = U((e, t) => s(e / 150, t / 150, 3, D.plateau + 7)),
    Ye = U((e, t) => s(e / 130, t / 130, 2, D.plateau + 17)),
    Xe = U((e, t) => s(e / 260, t / 260, 2, D.plateau + 23)),
    Ze = Ke((e, t) => s(e / 220, t / 220, 3, D.lake)),
    Qe = Me((e, t) => s(e / 70, t / 70, 3, D.detail)),
    $e = B((e, t) => s(e / 88, t / 88, 2, D.roll + 7)),
    et = b(r, h, 4, (e, t) => s(e / 55, t / 55, 2, D.plateau + 5), We),
    tt = Ke((e, t) => s(e / 60, t / 60, 2, D.lake + 3)),
    W = new Float32Array(2049);
  for (let e = 0; e <= 2048; e++) {
    let t = (e / 2048) * Math.PI * 2 - Math.PI;
    W[e] =
      34 * s(Math.cos(t) * 1.9, Math.sin(t) * 1.9, 3, D.plateau + 11) +
      15 * Math.sin(t * 3.1 + Se) +
      9 * Math.sin(t * 6.7 - xe);
  }
  let nt = (e) => {
      let t = (e + Math.PI) * (2048 / (Math.PI * 2)),
        n = Math.min(2047, Math.max(0, t | 0));
      return W[n] + (W[n + 1] - W[n]) * (t - n);
    },
    rt = b(r, h, 8, (e, t) => {
      let r = 0;
      for (let i = 0; i < F.length; i++) {
        let a = Math.hypot(e - F[i][0], t - F[i][1]),
          o = 1 - l(F[i][2] + 10, F[i][2] + (n.padReach ?? 130), a);
        o > r && (r = o);
      }
      return r;
    }),
    it = (I.r + 190) * (I.r + 190),
    at = (P.r + 130) * (P.r + 130),
    G = new Float32Array(g),
    ot = new Float32Array(g),
    st = new Float32Array(g),
    ct = new Float32Array(g),
    lt = (e, t, n) => {
      let r = Qe(e, t),
        i = Le(e, t),
        a = Re(e, t) + 3.5 * r,
        o = Ae(e, t),
        s = l(35, 35 + (400 - 250 * i), o),
        c =
          55 * u(0.5 + 0.5 * He(e, t), 0, 1) ** 1.3 +
          20 * Ue(e, t) ** 1.55 +
          8.5 * $e(e, t) -
          5;
      (c < 0 && (c = 0), (c *= Fe * l(30, 205, o) * (1 - 0.72 * rt(e, t))));
      let f = Math.max(0, Ve(e, t)) * 6 * l(50, 170, o),
        p = _ + 2.9 + 1.6 * Be(e, t) + 0.5 * r + f,
        m = p + (a - p) * s + c * (1 - i);
      if (V) {
        let n = H(e, t),
          r = _ + V.plain,
          i = 1 - l(V.coast[0], V.coast[1], n);
        m = r + (m - r) * V.scale * i;
        let a = 1 - l(V.r0, V.r1, n),
          o = _ - V.shelf - V.depth * l(V.r1, V.r1 + V.fall, n);
        m = o + (m - o) * a;
      }
      let h = e - I.x,
        g = t - I.z;
      if (h * h + g * g < it) {
        let i = Math.atan2(g, h),
          a = Math.hypot(h, g) + 34 * qe(e, t) + nt(i),
          o = l(I.r + 26, I.r - 30, a);
        if (o > 0.03 && o < 0.97) {
          let n = 0.55 * Ye(e, t) + 0.35 * Math.sin(i * 4.3 + Ce),
            r = u(0.35 + 0.75 * Xe(e, t), 0, 1),
            a = o * 3 + n,
            s = a - Math.floor(a),
            c = (Math.floor(a) + l(0.18, 0.82, s) - n) / 3;
          o = d(o, u(c, 0, 1), r);
        }
        if ((n >= 0 && (ct[n] = o), o > 0)) {
          let n = I.top + 4 * Je(e, t) + 1.5 * r;
          m += (n - m) * o;
        }
        let s = l(I.r + 110, I.r + 14, a) * (1 - o);
        s > 0.01 &&
          ((m += s * s * (11 + 9 * et(e, t))),
          n >= 0 && (st[n] = u(s * 1.5, 0, 1)));
      }
      let v = e - P.x,
        y = t - P.z;
      if (v * v + y * y < at) {
        let r = Math.sqrt(v * v + y * y) + 40 * Ze(e, t),
          i = l(P.r + 50, P.r - 30, r);
        if (i > 0) {
          let r = _ - 6 + 2 * tt(e, t);
          ((m = Math.min(m, m + (r - m) * i)), n >= 0 && (ot[n] = i));
        }
      }
      return m;
    };
  {
    let e = ((o - 1) >> 1) + 1,
      t = a * 2,
      n = new Float32Array(e * e);
    for (let r = 0; r < e; r++) {
      let i = -h + r * t;
      for (let a = 0; a < e; a++) n[r * e + a] = lt(-h + a * t, i, -1);
    }
    for (let t = 0; t < o; t++) {
      let r = Math.min(t >> 1, e - 2),
        i = t * 0.5 - r;
      for (let a = 0; a < o; a++) {
        let s = Math.min(a >> 1, e - 2),
          c = a * 0.5 - s,
          l = r * e + s,
          u = n[l] + (n[l + 1] - n[l]) * c,
          d = n[l + e] + (n[l + e + 1] - n[l + e]) * c;
        G[t * o + a] = u + (d - u) * i;
      }
    }
    for (let e of [We, Ge]) {
      let t = u(Math.floor((e[0] + h) / a), 0, o - 1),
        n = u(Math.ceil((e[2] + h) / a), 0, o - 1),
        r = u(Math.floor((e[1] + h) / a), 0, o - 1),
        i = u(Math.ceil((e[3] + h) / a), 0, o - 1);
      for (let e = r; e <= i; e++) {
        let r = -h + e * a;
        for (let i = t; i <= n; i++)
          G[e * o + i] = lt(-h + i * a, r, e * o + i);
      }
    }
  }
  let ut = () => {
    for (let e = 0; e < g; e++) {
      let t = z.dist[e];
      if (t === 1 / 0) continue;
      let r = R(z.par[e]),
        i = je(z.par[e]);
      if (t < r) {
        let i = t / r;
        G[e] = Math.min(G[e], _ - 0.3 - (n.riverDepth ?? 3.6) * (1 - i * i));
      } else if (t < r + i) {
        let n = (t - r) / i;
        G[e] = Math.min(G[e], _ + 0.35 + 3 * n * n);
      }
    }
  };
  ut();
  let K = new Float32Array(g);
  n.erosion &&
    (w(G, o, 3, 1.35, 0.24),
    re(G, o, T.fork(`terrain:erosion`), n.droplets, K),
    w(G, o, 2, 1.35, 0.2),
    ut());
  {
    let e = 0;
    for (let t = 0; t < g; t++) K[t] > e && (e = K[t]);
    let t = e > 0 ? 1 / e : 0,
      n = 1 / Math.log(29);
    for (let e = 0; e < g; e++) K[e] = Math.log1p(K[e] * t * 28) * n;
    S(K, o, 2);
  }
  for (let e = 0; e < g; e++) {
    if (
      ot[e] > 0.001 ||
      (V && H(-h + (e % o) * a, -h + ((e / o) | 0) * a) > V.r1 - 4)
    )
      continue;
    let t = z.dist[e];
    if (t !== 1 / 0) {
      let n = R(z.par[e]);
      if (t < n + 2) continue;
      if (t < n + je(z.par[e]) + 2) {
        G[e] < _ + 0.3 && (G[e] = _ + 0.3);
        continue;
      }
    }
    let n = G[e];
    if (n < _ + 1.2) {
      let t = u((n - _) / 1.2, 0, 1);
      G[e] = _ + 0.45 + 0.75 * t;
    }
  }
  let q = n.quarry
    ? {
        x: 0,
        z: 0,
        hx: 90,
        hz: 45,
        corner: 20,
        floor: 18,
        rise: 8,
        pitch: 30,
        face: 8,
        steps: 4,
        wobble: 2.5,
        outer: 40,
        ...n.quarry,
      }
    : null;
  q && (q.top = q.floor + q.rise * q.steps);
  let dt = q
      ? (e, t) => {
          let n = q.corner,
            r = Math.abs(e - q.x) - (q.hx - n),
            a = Math.abs(t - q.z) - (q.hz - n);
          return (
            Math.hypot(Math.max(r, 0), Math.max(a, 0)) +
            Math.min(Math.max(r, a), 0) -
            n +
            q.wobble *
              (0.7 * i(e / 31, t / 31, D.plateau + 71) +
                0.3 * i(e / 11, t / 11, D.plateau + 72))
          );
        }
      : null,
    ft = new Float32Array(q ? g : 0);
  if (q) {
    let e = (q.steps - 1) * q.pitch,
      t = _ + 6;
    for (let n = 0; n < o; n++) {
      let r = -h + n * a;
      for (let s = 0; s < o; s++) {
        let c = -h + s * a,
          d = n * o + s,
          f = dt(c, r),
          p = q.floor,
          m = 0;
        for (let e = 0; e < q.steps; e++) {
          let t = u((f - e * q.pitch + q.face / 2) / q.face, 0, 1);
          ((p += q.rise * l(0, 1, t)), t > 0.04 && t < 0.96 && (m = 1));
        }
        p +=
          0.35 * i(c / 9, r / 9, D.detail + 5) +
          0.2 * i(c / 3.7, r / 3.7, D.detail + 6);
        let g = e + q.face / 2 + (q.rimFlat ?? 0),
          _ = l(g, g + q.outer, f);
        (_ > 0 && (p += _ * Math.max(0, G[d] - t) * 0.8),
          (G[d] = p),
          (ft[d] = m));
      }
    }
    if (q.ways?.length) {
      let e = [];
      for (let t of q.ways)
        for (let n = 1; n < t.pts.length; n++)
          e.push({ a: t.pts[n - 1], b: t.pts[n], w: t.w ?? 7 });
      let t = new Float32Array(g).fill(1 / 0),
        n = new Float32Array(g),
        r = new Float32Array(g);
      for (let r of e) {
        let [e, i, s] = r.a,
          [c, l, d] = r.b,
          f = r.w / 2 + 10,
          p = c - e,
          m = l - i,
          g = p * p + m * m || 1,
          _ = u(Math.floor((Math.min(e, c) - f + h) / a), 0, o - 1),
          v = u(Math.ceil((Math.max(e, c) + f + h) / a), 0, o - 1),
          y = u(Math.floor((Math.min(i, l) - f + h) / a), 0, o - 1),
          b = u(Math.ceil((Math.max(i, l) + f + h) / a), 0, o - 1);
        for (let c = y; c <= b; c++)
          for (let l = _; l <= v; l++) {
            let f = -h + l * a,
              _ = -h + c * a,
              v = c * o + l,
              y = u(((f - e) * p + (_ - i) * m) / g, 0, 1),
              b = Math.hypot(f - e - p * y, _ - i - m * y) - r.w / 2;
            b < t[v] && ((t[v] = b), (n[v] = s + (d - s) * y));
          }
      }
      for (let e = 0; e < g; e++) {
        let i = t[e];
        if (i === 1 / 0) continue;
        let a = u(2.5 + 0.45 * Math.abs(G[e] - n[e]), 2.5, 7);
        if (i <= 0) ((G[e] = n[e] + 0.04), (r[e] = 1));
        else if (i < a) {
          let t = l(0, 1, i / a);
          ((G[e] = d(n[e], G[e], t)), (r[e] = 1 - t));
        }
      }
      q.wayMask = r;
    }
  }
  let J = new Uint8Array(g),
    Y = new Float32Array(g),
    pt = new Float32Array(g);
  if (q?.wayMask)
    for (let e = 0; e < g; e++) {
      let t = q.wayMask[e];
      t > 0 && ((Y[e] = t), t > 0.4 && (J[e] = 1));
    }
  let X = [];
  for (let e of n.flatten || []) {
    let t = e.x,
      n = e.z,
      r = Math.max(4, e.radius || 30),
      i = e.height;
    if (i == null) {
      let e = 0,
        s = 0;
      for (let i = 0; i < 8; i++)
        ((e += x(
          G,
          o,
          a,
          h,
          t + Math.cos(i * 0.785) * r * 0.6,
          n + Math.sin(i * 0.785) * r * 0.6,
        )),
          s++);
      ((e += x(G, o, a, h, t, n)), s++, (i = e / s));
    }
    ((i = Math.max(i, _ + 1.5)), X.push({ x: t, z: n, radius: r, height: i }));
  }
  let mt = () => {
    for (let e of X) {
      let t = e.x,
        n = e.z,
        r = e.radius,
        s = e.height,
        c = r + 70,
        f = u(Math.floor((t - c + h) / a), 0, o - 1),
        p = u(Math.ceil((t + c + h) / a), 0, o - 1),
        m = u(Math.floor((n - c + h) / a), 0, o - 1),
        g = u(Math.ceil((n + c + h) / a), 0, o - 1);
      for (let e = m; e <= g; e++)
        for (let c = f; c <= p; c++) {
          let f = -h + c * a,
            p = -h + e * a,
            m = e * o + c,
            g = f - t,
            _ = p - n,
            v =
              1 +
              0.085 * i(g / 26, _ / 26, D.plateau + 41) +
              0.055 * i(g / 9, _ / 9, D.plateau + 42) +
              0.045 * i(g / 3.4, _ / 3.4, D.plateau + 43),
            y = Math.hypot(g, _) / v;
          if (y <= r) {
            ((G[m] = s), (J[m] = 1), (Y[m] = 1));
            let e = Math.abs((y / r - 0.55) * 3.4),
              t = Math.abs(_ * Math.cos(0.4) - g * Math.sin(0.4)) / 3.6;
            pt[m] = u(
              Math.max(1 - e, 1 - t) *
                (0.55 + 0.55 * i(g / 5.5, _ / 5.5, D.plateau + 44)),
              0,
              1,
            );
            continue;
          }
          let b = u(9 + 2.5 * Math.abs(G[m] - s), 9, 62);
          if (y < r + b) {
            let e = l(0, 1, (y - r) / b);
            ((G[m] = d(s, G[m], e)), y < r + 5 && (J[m] = 1));
            let t = 1 - l(0, 4.5, y - r);
            t > Y[m] && (Y[m] = t);
          }
        }
    }
  };
  mt();
  let ht = new Float32Array(g).fill(1 / 0),
    gt = new Uint8Array(g);
  for (let e of n.roads || []) {
    if (!e || e.length < 2) continue;
    let t = ee(e, 4),
      r = new Float32Array(t.length);
    for (let e = 0; e < t.length; e++) r[e] = x(G, o, a, h, t[e][0], t[e][1]);
    te(r, 14, 3);
    let i = null;
    if (n.padRoads) {
      i = new Uint8Array(t.length);
      for (let e = 0; e < t.length; e++)
        for (let n of X)
          Math.hypot(t[e][0] - n.x, t[e][1] - n.z) < n.radius + 6 &&
            ((r[e] = n.height), (i[e] = 1));
    }
    ne(r, 4 * (n.roadGrade ?? 0.15), i);
    for (let e = 0; e < r.length; e++) r[e] = Math.max(r[e], _ + 0.25);
    let s = C(t, 56, o, a, h, r);
    for (let e = 0; e < g; e++) {
      let t = s.dist[e];
      if (t === 1 / 0) continue;
      let n = z.dist[e],
        r = n !== 1 / 0 && n < R(z.par[e]) + 3,
        i = s.val[e];
      r && (i = Math.min(i, _ - 0.42));
      let a = r ? 0 : 0.17 * (1 - l(0, 3.1, t));
      if (t <= 3.1) G[e] = i + a;
      else if (t <= 6.2) G[e] = d(i, i - 0.42, (t - 3.1) / 3.1);
      else {
        let n = u(4 + 2.4 * Math.abs(G[e] - i), 4, r ? 8 : 46);
        t < 6.2 + n && (G[e] = d(i - 0.42, G[e], l(0, 1, (t - 6.2) / n)));
      }
      (t < ht[e] && (ht[e] = t),
        t < 9 && (J[e] = 1),
        r && t < 14 && (gt[e] = 1),
        n !== 1 / 0 && n < R(z.par[e]) + 26 && t < 16 && (gt[e] = 1));
    }
  }
  (X.length && (n.roads || []).length && mt(),
    n.platforms?.length && f(G, o, a, h, n.platforms, J, Y));
  let _t = Me((e, t) => i(e / 37, t / 37, D.mat)),
    vt = Me((e, t) => s(e / 140, t / 140, 2, D.mat + 5)),
    yt = new Uint8Array(g),
    bt = new Float32Array(g),
    xt = 1 / 0,
    St = -1 / 0,
    Ct = 0,
    wt = 1 / (2 * a),
    Tt = (e, t) => {
      if (e > 0 && t > 0 && e < o - 1 && t < o - 1) {
        let n = t * o + e,
          r = (G[n + 1] - G[n - 1]) * wt,
          i = (G[n + o] - G[n - o]) * wt;
        return Math.sqrt(r * r + i * i);
      }
      let n = e > 0 ? e - 1 : e,
        r = e < o - 1 ? e + 1 : e,
        i = t > 0 ? t - 1 : t,
        s = t < o - 1 ? t + 1 : t,
        c = (G[t * o + r] - G[t * o + n]) / ((r - n) * a),
        l = (G[s * o + e] - G[i * o + e]) / ((s - i) * a);
      return Math.hypot(c, l);
    };
  for (let e = 0; e < o; e++)
    for (let t = 0; t < o; t++) {
      let n = e * o + t,
        r = G[n],
        i = -h + t * a,
        s = -h + e * a;
      (r < xt && (xt = r), r > St && (St = r));
      let c = Tt(t, e);
      ((bt[n] = c), c > Ct && (Ct = c));
      let l,
        u = ht[n],
        d = _t(i, s),
        f = vt(i, s),
        m =
          z.dist[n] < R(z.par[n]) + 40 ||
          Math.hypot(i - P.x, s - P.z) < P.r + 95 ||
          (V !== null && H(i, s) > V.r0);
      ((l =
        Y[n] > 0.5 || u <= 3.2
          ? p.ROAD
          : r < _ - 0.05
            ? p.WATER
            : gt[n]
              ? p.ROCK
              : u <= 5.2
                ? p.DIRT
                : st[n] > 0.35 || c > 1.05 + 0.25 * d || r > 150 + 25 * f
                  ? p.ROCK
                  : (r < _ + 2.3 + 0.8 * d && m) ||
                      (V !== null &&
                        r < _ + 3.6 + 0.8 * d &&
                        H(i, s) > V.r0 + 16 + 18 * f)
                    ? p.SAND
                    : c > 0.55 + 0.15 * d || f > 0.46 + 0.16 * d
                      ? p.DIRT
                      : p.GRASS),
        (yt[n] = l));
    }
  let Z = 16 / a,
    Q = Math.ceil((o - 1) / Z),
    Et = new Float32Array(Q * Q).fill(-1 / 0);
  for (let e = 0; e < o; e++) {
    let t = Math.min(Q - 1, (e / Z) | 0);
    for (let n = 0; n < o; n++) {
      let r = Math.min(Q - 1, (n / Z) | 0),
        i = t * Q + r;
      G[e * o + n] > Et[i] && (Et[i] = G[e * o + n]);
    }
  }
  let Dt = new Float32Array(Q * Q);
  for (let e = 0; e < Q; e++)
    for (let t = 0; t < Q; t++) {
      let n = -1 / 0;
      for (let r = -1; r <= 1; r++)
        for (let i = -1; i <= 1; i++) {
          let a = e + r,
            o = t + i;
          if (a < 0 || o < 0 || a >= Q || o >= Q) continue;
          let s = Et[a * Q + o];
          s > n && (n = s);
        }
      Dt[e * Q + t] = n;
    }
  let Ot = o - 1.000001;
  function $(e, t) {
    let n = (e + h) / a,
      r = (t + h) / a;
    (n > 0 ? n > Ot && (n = Ot) : (n = 0),
      r > 0 ? r > Ot && (r = Ot) : (r = 0));
    let i = n | 0,
      s = r | 0,
      c = n - i,
      l = r - s,
      u = s * o + i,
      d = G[u],
      f = G[u + 1],
      p = G[u + o],
      m = G[u + o + 1];
    return (i + s) & 1
      ? c >= l
        ? d + (f - d) * c + (m - f) * l
        : d + (p - d) * l + (m - p) * c
      : c + l <= 1
        ? d + (f - d) * c + (p - d) * l
        : m + (p - m) * (1 - c) + (f - m) * (1 - l);
  }
  function kt(e, t, n = [0, 1, 0]) {
    let r = a,
      i = ($(e + r, t) - $(e - r, t)) / (2 * r),
      o = ($(e, t + r) - $(e, t - r)) / (2 * r),
      s = 1 / Math.sqrt(i * i + 1 + o * o);
    return ((n[0] = -i * s), (n[1] = s), (n[2] = -o * s), n);
  }
  function At(e, t) {
    let n = ((e + h) / a) | 0,
      r = ((t + h) / a) | 0;
    return (
      n < 0 ? (n = 0) : n > o - 1 && (n = o - 1),
      r < 0 ? (r = 0) : r > o - 1 && (r = o - 1),
      r * o + n
    );
  }
  function jt(e, t) {
    return yt[At(e, t)];
  }
  let Mt = n.biome === `snow`;
  function Nt(e, t) {
    let n = yt[At(e, t)];
    return Mt && (n === p.GRASS || n === p.DIRT || n === p.SAND)
      ? `snow`
      : m[n];
  }
  function Pt(e, t) {
    let n = ((e + h) / (Z * a)) | 0,
      r = ((t + h) / (Z * a)) | 0;
    return (
      n < 0 ? (n = 0) : n > Q - 1 && (n = Q - 1),
      r < 0 ? (r = 0) : r > Q - 1 && (r = Q - 1),
      Dt[r * Q + n]
    );
  }
  function Ft(e, t, n = 1e3) {
    let r = e[0],
      i = e[1],
      a = e[2],
      o = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    if (!(o > 0) || !(n > 0)) return null;
    let s = t[0] / o,
      c = t[1] / o,
      l = t[2] / o;
    if (i < $(r, a)) return null;
    let u = 0;
    for (; u < n;) {
      let e = r + s * u,
        t = i + c * u,
        o = a + l * u;
      if (
        (t > St + 0.5 && c >= 0) ||
        (c >= 0 && (e < -h || e > h || o < -h || o > h) && t > $(e, o))
      )
        return null;
      let d = Math.min(u + 8, n),
        f = i + c * d,
        p = Pt(e, o);
      if (t > p && f > p) {
        u = d;
        continue;
      }
      let m = u,
        g = u;
      for (; g < d;) {
        g = Math.min(g + 1, d);
        let e = r + s * g;
        if (i + c * g - $(e, a + l * g) < 0) {
          let e = m,
            t = g;
          for (let n = 0; n < 10; n++) {
            let n = (e + t) * 0.5;
            i + c * n - $(r + s * n, a + l * n) < 0 ? (t = n) : (e = n);
          }
          let n = (e + t) * 0.5,
            o = r + s * n,
            u = a + l * n;
          return {
            point: [o, $(o, u), u],
            normal: kt(o, u),
            dist: n,
            colliderId: `terrain`,
            surface: Nt(o, u),
          };
        }
        m = g;
      }
      u = d;
    }
    return null;
  }
  return {
    seed: t,
    opts: n,
    size: r,
    res: a,
    n: o,
    half: h,
    waterLevel: _,
    island: V ? { ...V, radius: H } : null,
    quarry: q ? { ...q, dist: dt, faceMask: ft } : null,
    bounds: [-h, -h, h, h],
    heights: G,
    material: yt,
    roadDist: ht,
    noScatter: J,
    riverDist: z.dist,
    riverPar: z.par,
    lakeMask: ot,
    slope: bt,
    flow: K,
    talus: st,
    padMask: Y,
    padWear: pt,
    fordMask: gt,
    plateauMask: ct,
    river: L,
    riverWidthAt: R,
    bankWidthAt: je,
    lake: P,
    plateau: I,
    flats: X,
    minHeight: xt,
    maxHeight: St,
    maxSlope: Ct,
    getHeight: $,
    getNormal: kt,
    raycast: Ft,
    getMaterialAt: Nt,
    getMaterialCode: jt,
    sampleSmooth: (e, t) => x(G, o, a, h, e, t),
    cellIndex: At,
  };
}
