// assets__greywater-grounds-BnVxfPOG 05 — math
// Lines 1204-1847 of readable/assets__greywater-grounds-BnVxfPOG.pretty.js (statement-aligned).
function Le(e, i, { U: o = null } = {}) {
  let s = (e, t) => (o && ee(e, o, { key: `greywater-ground-${t}-v1` }), e),
    c = re(),
    l = Pe(c.greens),
    u = new n(1, 1, 1),
    d = new Map(),
    m = new Set(),
    y = new Map(),
    b = {},
    x = (e, t, n = 0) => {
      let r = `${e}|${n}`;
      (d.has(r) || d.set(r, []), d.get(r).push(t));
    },
    S = (e, t, n, r, i = 0, a = 1) => {
      (y.has(e) || y.set(e, []),
        y.get(e).push({ x: t, z: n, y: r, angle: i, scale: a }));
    },
    C = e.objects.filter(
      (e) => e.kind === `box` && /^plan-(court|lawn|linear-park)-/.test(e.id),
    );
  for (let e of C) {
    let t = Ne(e, l);
    t &&
      (m.add(e.id),
      !/^plan-linear-park-/.test(e.id) && x(t, u.clone().applyMatrix4(i(e))));
  }
  for (let e of C) {
    if (!m.has(e.id) || /^plan-linear-park-/.test(e.id)) continue;
    let t = Ne(e, l),
      n = e.y + e.sy + we,
      r = e.x - e.sx / 2;
    e.x + e.sx / 2;
    let i = e.z - e.sz / 2;
    e.z + e.sz / 2;
    let a = (t) => V(`${e.id}:${t}`),
      o = (t, n = 1.2) => [
        r + n + a(t + `x`) * (e.sx - 2 * n),
        i + n + a(t + `z`) * (e.sz - 2 * n),
      ];
    if (t === `worn-asphalt` && !e.ry) {
      let t = e.sx >= e.sz,
        s = Math.max(2, Math.round(Math.max(e.sx, e.sz) / 7));
      for (let o = 0; o < s; o++) {
        let s = (t ? r : i) + 2 + a(`oil${o}`) * ((t ? e.sx : e.sz) - 4),
          c = a(`side${o}`) < 0.5 ? 2.5 : (t ? e.sz : e.sx) - 2.5;
        if ((t ? e.sz : e.sx) < 9) {
          let r = t ? [s, e.z] : [e.x, s];
          S(
            `oil-stain`,
            r[0],
            r[1],
            n,
            a(`a${o}`) * 360,
            0.8 + a(`s${o}`) * 0.4,
          );
          continue;
        }
        let l = t ? [s, i + c] : [r + c, s];
        S(
          `oil-stain`,
          l[0],
          l[1],
          n,
          a(`a${o}`) * 360,
          0.75 + a(`s${o}`) * 0.4,
        );
      }
      let [c, l] = [
        e.x + (a(`px`) - 0.5) * e.sx * 0.4,
        e.z + (a(`pz`) - 0.5) * e.sz * 0.3,
      ];
      if (
        (S(`asphalt-patch`, c, l, n, t ? 90 : 0, 1), Math.max(e.sx, e.sz) > 16)
      ) {
        let [e, t] = o(`crack`, 3);
        S(`asphalt-crack`, e, t, n, a(`ca`) * 60 - 30, 1);
      }
    } else if (t === `gravel-yard` && e.material === `rubble`) {
      let t = e.sx >= e.sz,
        a = t ? e.sx : e.sz,
        o = t ? e.z : e.x;
      for (let e of [-0.85, 0.85])
        for (let s = 3; s < a - 2; s += 5.6) {
          let a = (t ? r : i) + s;
          S(`tyre-rut`, t ? a : o + e, t ? o + e : a, n, t ? 90 : 0, 1);
        }
    } else if (t === `flagstone-sidewalk`) {
      let t = Math.max(1, Math.round(Math.max(e.sx, e.sz) / 18));
      for (let e = 0; e < t; e++) {
        let [t, r] = o(`cover${e}`, 1);
        S(`utility-cover`, t, r, n);
      }
      let [r, i] = o(`slabcrack`, 1);
      S(`slab-crack`, r, i, n, a(`sa`) * 90);
    } else if (t === `overgrown-concrete`) {
      let t = e.sx >= e.sz,
        r = Math.max(1, Math.round(Math.max(e.sx, e.sz) / 6));
      for (let e = 0; e < r; e++) {
        let [r, i] = o(`weed${e}`, 0.8);
        S(
          `joint-weeds`,
          r,
          i,
          n,
          (t ? 90 : 0) + (a(`w${e}`) < 0.3 ? 90 : 0),
          0.9 + a(`ws${e}`) * 0.3,
        );
      }
      if (a(`moss`) < 0.6) {
        let [e, t] = o(`moss`, 1.2);
        S(`moss-patch`, e, t, n, a(`ma`) * 360, 0.7);
      }
    }
  }
  let w = 24.044;
  for (let e of Oe) x(`gravel-yard`, Y(e, w), 1);
  x(`gravel-yard`, Y(W.rect, W.y), 1);
  for (let e of [-0.85, 0.85])
    for (let t = W.gate[0] + 3; t < 24; t += 5.6)
      S(`tyre-rut`, t, W.gate[1] + e, W.y + we, 90);
  for (let [e, t, n] of [
    [16, -24, 20],
    [52, -58, -35],
    [22, -55, 70],
  ])
    S(`dried-puddle`, e, t, W.y + we, n, 1.3);
  let T = c.greens.find((e) => e.line);
  if (T) {
    let e = [
        ...ne.map((e) => [
          e.rect[0] - e.walk,
          e.rect[1] - e.walk,
          e.rect[2] + e.walk,
          e.rect[3] + e.walk,
        ]),
        ...v.map((e) => e.rect),
        ...c.parking.map((e) => e.rect),
        ...c.plazas.map((e) => e.rect),
        ...c.buildings.map((e) => e.rect),
        [c.square[0] - 2, c.square[1] - 2, c.square[2] + 2, c.square[3] + 2],
        ...c.setpieces.filter((e) => e.key !== `cathedral`).map((e) => e.block),
        ...c.greens.filter((e) => e.rect).map((e) => e.rect),
      ],
      t = T.line,
      n = T.width / 2,
      r = [-134, -96, 134, 96];
    for (let i = 1; i < t.length; i++) {
      let [a, o] = t[i - 1],
        [s, c] = t[i],
        l = Math.hypot(s - a, c - o),
        u = (s - a) / l,
        d = (c - o) / l,
        f = (e, t) => [a + u * e + d * t, o + d * e - u * t],
        p = [
          X(
            X(
              X(
                X(
                  [f(-0.5, -n), f(l + 0.5, -n), f(l + 0.5, n), f(-0.5, n)],
                  0,
                  r[0],
                  1,
                ),
                0,
                r[2],
                -1,
              ),
              1,
              r[1],
              1,
            ),
            1,
            r[3],
            -1,
          ),
        ];
      for (let t of e) p = p.flatMap((e) => Z(e, t));
      for (let e of p)
        e.length >= 3 && Q(e) > 0.05 && x(`park-lawn`, $(e, 24.02));
    }
    let i = new Set(
        c.greens
          .map((e, t) =>
            (e.rect && !e.kind) || l.get(t) === `park-lawn` ? e.rect : null,
          )
          .filter(Boolean),
      ),
      a = e.filter((e) => !i.has(e)),
      o = (e, t) =>
        Math.abs(e) < 132 &&
        Math.abs(t) < 94 &&
        !a.some((n) => H(n, e, t, 1.4)),
      s = null,
      u = () => {
        if (s && s.length > 15)
          for (let e = 1; e < s.length; e++)
            x(
              `gravel-yard`,
              J(s[e - 1][0], s[e - 1][1], s[e][0], s[e][1], U.width, w),
              1,
            );
        s = null;
      };
    for (let e = 1; e < t.length; e++) {
      let [n, r] = t[e - 1],
        [i, a] = t[e],
        c = Math.hypot(i - n, a - r),
        l = (i - n) / c,
        d = (a - r) / c;
      for (let e = 0; e <= c; e += 1) {
        let t = n + l * e + d * U.offset,
          i = r + d * e - l * U.offset;
        o(t, i) ? (s ??= []).push([t, i]) : u();
      }
    }
    u();
  }
  let D = e.objects.filter(
      (e) => e.kind === `box` && !e.ry && g(e.id) === `walk`,
    ),
    O = e.objects
      .filter((e) => e.kind === `box` && !e.ry && g(e.id) === `asphalt`)
      .map((e) => [
        e.x - e.sx / 2,
        e.z - e.sz / 2,
        e.x + e.sx / 2,
        e.z + e.sz / 2,
      ]),
    k = (e, t, n) =>
      Math.hypot(
        Math.max(e[0] - t, 0, t - e[2]),
        Math.max(e[1] - n, 0, n - e[3]),
      ),
    A = (e, t) => Math.min(...O.map((n) => k(n, e, t)), 1e9),
    j = [
      [c.square[0] - 1, c.square[1] - 1, c.square[2] + 1, c.square[3] + 1],
      ...c.plazas.map((e) => e.rect),
    ],
    M = [],
    N = [];
  for (let e of D) {
    let t = [e.x - e.sx / 2, e.z - e.sz / 2, e.x + e.sx / 2, e.z + e.sz / 2],
      n = /^cross-walk-plan-/.test(e.id)
        ? ke.street
        : /^avenue-walk-median-/.test(e.id)
          ? 1 / 0
          : ke.avenue,
      r = /^cross-walk-corner-(-?\d+)-/.exec(e.id),
      i = !r && e.sx >= e.sz;
    if (r) {
      let i = +r[1],
        a = Math.sign(e.x - i),
        o = i + a * 6;
      t =
        a > 0
          ? [o, t[1], Math.min(t[2], o + n), t[3]]
          : [Math.max(t[0], o - n), t[1], o, t[3]];
    } else
      i && e.sz > n
        ? (t =
            A(e.x, t[1]) <= A(e.x, t[3])
              ? [t[0], t[1], t[2], t[1] + n]
              : [t[0], t[3] - n, t[2], t[3]])
        : !i &&
          e.sx > n &&
          (t =
            A(t[0], e.z) <= A(t[2], e.z)
              ? [t[0], t[1], t[0] + n, t[3]]
              : [t[2] - n, t[1], t[2], t[3]]);
    (m.add(e.id), M.push(t));
    let a = [
      [
        [t[0], t[1]],
        [t[2], t[1]],
        [t[2], t[3]],
        [t[0], t[3]],
      ],
    ];
    for (let e of [...j, ...O, ...v.map((e) => e.rect)])
      a = a.flatMap((t) => Z(t, e));
    for (let e of a)
      Q(e) > 0.05 && (x(`flagstone-sidewalk`, $(e, q), 1), N.push(Fe(e)));
    let o = Math.max(1, Math.round(Math.max(t[2] - t[0], t[3] - t[1]) / 24));
    for (let n = 0; n < o; n++) {
      let r = (n + 0.5 + (V(`${e.id}:c${n}`) - 0.5) * 0.6) / o,
        a = i ? t[0] + r * (t[2] - t[0]) : (t[0] + t[2]) / 2,
        s = i ? (t[1] + t[3]) / 2 : t[1] + r * (t[3] - t[1]);
      j.some((e) => H(e, a, s, 1)) ||
        S(
          V(`${e.id}:k${n}`) < 0.6 ? `utility-cover` : `slab-crack`,
          a,
          s,
          24.042,
          V(`${e.id}:a${n}`) * 90,
        );
    }
  }
  for (let e of c.plazas) x(`flagstone-sidewalk`, Y(e.rect, q), 1);
  let P = (e, t, n) =>
      M.some((r) => H(r, e, t, n)) || c.plazas.some((r) => H(r.rect, e, t, n)),
    F = (e, t) => Math.abs(e) < 158 && Math.abs(t) < 124,
    I = [...(e.buildings ?? []), ...(e.infill ?? [])]
      .filter((e) => e.w > 0 && e.d > 0 && F(e.x, e.z))
      .map((e) => [e.x - e.w / 2, e.z - e.d / 2, e.x + e.w / 2, e.z + e.d / 2])
      .concat(
        e.colliderDefs
          .filter(
            (e) =>
              /^nest-.*-c0$/.test(e.id) &&
              e.aabb &&
              F((e.aabb[0] + e.aabb[3]) / 2, (e.aabb[2] + e.aabb[5]) / 2),
          )
          .map((e) => [e.aabb[0], e.aabb[2], e.aabb[3], e.aabb[5]]),
      )
      .filter(
        (e) =>
          !O.some(
            (t) =>
              Math.min(e[2], t[2]) - Math.max(e[0], t[0]) > 1 &&
              Math.min(e[3], t[3]) - Math.max(e[1], t[1]) > 1,
          ),
      ),
    L = [...O, ...v.map((e) => e.rect)];
  for (let [e, t, n, r] of I) {
    let i = G;
    for (let a of [
      [e - i, t - i, n + i, t],
      [e - i, r, n + i, r + i],
      [e - i, t, e, r],
      [n, t, n + i, r],
    ]) {
      let e = [
        [
          [a[0], a[1]],
          [a[2], a[1]],
          [a[2], a[3]],
          [a[0], a[3]],
        ],
      ];
      for (let t of [...j, ...L]) e = e.flatMap((e) => Z(e, t));
      for (let t of e)
        Q(t) > 0.05 && (x(`flagstone-sidewalk`, $(t, q), 1), N.push(Fe(t)));
    }
  }
  for (let t of e.labBuildings ?? []) {
    let e = h[t.key],
      n = e?.tiers?.[0] ?? [e?.W ?? 0, e?.D ?? 0, 0, 0, 0];
    if (!e || !F(t.x, t.z)) continue;
    let r = Math.round(Math.sin(t.rotY)),
      i = Math.round(Math.cos(t.rotY)),
      a = n[4] + n[1] / 2,
      o = Math.cos(t.rotY),
      s = -Math.sin(t.rotY);
    for (let [e, n] of ae[t.key] ?? []) {
      let l = (e + n) / 2,
        u = Math.max(1.4, Math.min(2.4, n - e + 0.6)),
        d = t.x + l * o + r * a,
        f = t.z + l * s + i * a;
      if (P(d + r * G, f + i * G, 0.3)) continue;
      let p = null;
      for (let e = G; e <= Ae && p === null; e += 0.5) {
        let t = d + r * e,
          n = f + i * e;
        if (
          P(t, n, 0) ||
          I.some((e) => H(e, t, n)) ||
          j.some((e) => H(e, t, n))
        )
          p = e;
        else if (
          [...O, ...v.map((e) => e.rect), ...c.parking.map((e) => e.rect)].some(
            (e) => H(e, t, n),
          )
        )
          break;
      }
      p !== null &&
        P(d + r * p, f + i * p, 0) &&
        x(`flagstone-sidewalk`, J(d, f, d + r * p, f + i * p, u, q), 1);
    }
  }
  {
    let t = 0.5,
      n = -158,
      r = -124,
      i = Math.round(je / 2 / t),
      a = new Uint8Array(313472),
      o = (e, i) => {
        let o = Math.max(0, Math.round((e[0] - n) / t)),
          s = Math.min(632, Math.round((e[2] - n) / t)),
          c = Math.max(0, Math.round((e[1] - r) / t)),
          l = Math.min(496, Math.round((e[3] - r) / t));
        for (let e = c; e < l; e++)
          for (let t = o; t < s; t++)
            (i || a[e * 632 + t] !== 1) && (a[e * 632 + t] = i);
      },
      s = e.objects
        .filter((e) => e.kind === `box` && !e.ry && g(e.id) === `kerb`)
        .map((e) => [
          e.x - e.sx / 2,
          e.z - e.sz / 2,
          e.x + e.sx / 2,
          e.z + e.sz / 2,
        ]);
    for (let e of [
      ...M,
      ...O,
      ...s,
      ...v.map((e) => e.rect),
      ...c.parking.map((e) => e.rect),
      ...j,
      ...I.map((e) => [e[0] - G, e[1] - G, e[2] + G, e[3] + G]),
    ])
      o(e, 1);
    let l = (e, t) => {
        let n = new Uint8Array(e.length);
        for (let r = 0; r < 496; r++)
          for (let a = 0; a < 632; a++) {
            let o = +!t;
            for (let n = -3; n <= i; n++) {
              let i = a + n,
                s = i < 0 || i >= 632 ? +!t : +!!e[r * 632 + i];
              o = t ? o | s : o & s;
            }
            n[r * 632 + a] = o;
          }
        let r = new Uint8Array(e.length);
        for (let e = 0; e < 632; e++)
          for (let a = 0; a < 496; a++) {
            let o = +!t;
            for (let r = -3; r <= i; r++) {
              let i = a + r,
                s = i < 0 || i >= 496 ? +!t : n[i * 632 + e];
              o = t ? o | s : o & s;
            }
            r[a * 632 + e] = o;
          }
        return r;
      },
      u = l(l(a, !0), !1);
    a.fill(0);
    for (let e of [
      ...N,
      ...O,
      ...s,
      ...v.map((e) => e.rect),
      ...c.parking.map((e) => e.rect),
      ...j,
      ...I,
    ])
      o(e, 1);
    for (let e of [
      ...c.greens.filter((e) => e.rect).map((e) => e.rect),
      ...c.setpieces.filter((e) => e.lawn).map((e) => e.lawn),
      W.rect,
      ...v.flatMap((e) => [
        [e.rect[0], e.rect[1] - K, e.rect[2], e.rect[1]],
        [e.rect[0], e.rect[3], e.rect[2], e.rect[3] + K],
      ]),
    ])
      o(e, 2);
    let d = 0;
    for (let e = 0; e < 496; e++) {
      let i = 0;
      for (; i < 632;) {
        let o = (i) =>
          u[e * 632 + i] &&
          !a[e * 632 + i] &&
          ie(n + (i + 0.5) * t, r + (e + 0.5) * t) > 13;
        if (!o(i)) {
          i++;
          continue;
        }
        let s = i;
        for (; s < 632 && o(s);) s++;
        (x(
          `flagstone-sidewalk`,
          Y([n + i * t, r + e * t, n + s * t, r + (e + 1) * t], q),
          1,
        ),
          d++,
          (i = s));
      }
    }
    b.slivers = d;
  }
  if (T) {
    let t = T.line,
      n = [
        ...I.map((e) => [e[0] - G, e[1] - G, e[2] + G, e[3] + G]),
        ...c.parking.map((e) => e.rect),
      ],
      r = [...j, ...v.map((e) => e.rect), ...c.setpieces.map((e) => e.block)],
      i = e.colliderDefs
        .filter(
          (e) =>
            /^(demo-)?rail-/.test(e.id) &&
            e.aabb &&
            e.aabb[1] < 25 &&
            e.aabb[4] > 27,
        )
        .map((e) => [
          e.aabb[0] - 0.8,
          e.aabb[2] - 0.8,
          e.aabb[3] + 0.8,
          e.aabb[5] + 0.8,
        ]),
      a = 0;
    for (let e = 1; e < t.length; e++) {
      let [o, s] = t[e - 1],
        [c, l] = t[e],
        u = Math.hypot(c - o, l - s),
        d = (c - o) / u,
        f = (l - s) / u;
      for (let e = 3; e < u - 3; e += 8, a++) {
        if (V(`${a}:desire`) > 0.36) continue;
        let t = o + d * e,
          c = s + f * e,
          l = (V(`${a}:desire-skew`) - 0.5) * 12,
          u = (e) => {
            for (let a = 1; a < 26; a += 0.5) {
              let o = t + f * a * e + (d * l * e * a) / 26,
                s = c - d * a * e + (f * l * e * a) / 26;
              if (P(o, s, 0) || n.some((e) => H(e, o, s))) return [o, s];
              if (r.some((e) => H(e, o, s, 0.6)) || i.some((e) => H(e, o, s)))
                return null;
            }
            return null;
          },
          p = u(1),
          m = u(-1),
          h = [t + f * U.offset, c - d * U.offset],
          [g, _] = p && m ? [p, m] : [p ?? m, p || m ? h : null];
        g &&
          _ &&
          Math.hypot(g[0] - _[0], g[1] - _[1]) > 6 &&
          x(`dirt-path`, J(g[0], g[1], _[0], _[1], 1.3, w), 1);
      }
    }
  }
  let se = [
    ...I,
    ...c.parking.map((e) => e.rect),
    ...c.greens.filter((e) => e.rect).map((e) => e.rect),
    ...j,
    ...c.setpieces.map((e) => e.block),
    W.rect,
  ];
  for (let e of v) {
    let [t, n, r, i] = e.rect;
    for (let e of [
      [t, n - K, r, n],
      [t, i, r, i + K],
    ]) {
      let t = [
        [
          [e[0], e[1]],
          [e[2], e[1]],
          [e[2], e[3]],
          [e[0], e[3]],
        ],
      ];
      for (let e of se) t = t.flatMap((t) => Z(t, e));
      for (let e of t) {
        let t = e.reduce((e, t) => e + t[0], 0) / e.length,
          n = e.reduce((e, t) => e + t[1], 0) / e.length;
        Q(e) > 0.5 && ie(t, n) > 9 && x(`gravel-yard`, $(e, Me));
      }
    }
  }
  let R = [],
    z = [];
  for (let [e, n] of d) {
    let [i, a] = e.split(`|`),
      [o, c] = Te[+a],
      l = _(i),
      u = Ie(p(n, !1), l);
    for (let e of n) e.dispose();
    let d = te(i, 1),
      f = new r({
        map: d.map,
        bumpMap: d.bumpMap,
        bumpScale: Ee[i] ?? 0.012,
        roughness: 0.98,
        polygonOffset: !0,
        polygonOffsetFactor: o,
        polygonOffsetUnits: c,
      }),
      m = oe(f, i, 1, { span: Ce, strength: De[i] });
    s(f, i);
    let h = new t(u, f);
    ((h.name = `greywater-ground-${i}${+a ? `-over` : ``}`),
      (h.receiveShadow = !0),
      (h.castShadow = !1),
      R.push(h),
      z.push(() => {
        (u.dispose(), f.dispose(), d.release(), m?.dispose());
      }));
  }
  for (let [e, t] of y) {
    let n = E[e],
      r = Se(e, { seed: 1 }),
      i = t.map((e) =>
        new f(n.width * e.scale, n.depth * e.scale)
          .rotateX(-Math.PI / 2)
          .rotateY(a.degToRad(e.angle))
          .translate(e.x, e.y, e.z),
      ),
      o = p(i, !1);
    for (let e of i) e.dispose();
    (r.geometry.dispose(),
      (r.geometry = o),
      r.position.set(0, 0, 0),
      r.rotation.set(0, 0, 0),
      r.scale.set(1, 1, 1),
      (r.material.polygonOffsetFactor = Te[2][0]),
      (r.material.polygonOffsetUnits = Te[2][1]),
      (r.name = `greywater-ground-detail-${e}`),
      (r.renderOrder = 1),
      s(r.material, `detail-${e}`),
      R.push(r),
      z.push(() => {
        (o.dispose(), r.userData.dispose());
      }));
  }
  u.dispose();
  let B = !1;
  return {
    meshes: R,
    replaced: m,
    stats: {
      ...b,
      surfaces: d.size,
      details: [...y].reduce((e, [, t]) => e + t.length, 0),
      draws: R.length,
    },
    dispose() {
      if (!B) {
        B = !0;
        for (let e of z) e();
      }
    },
  };
}
