// assets__lab-city-DCFvouWE 03 — math
// Lines 39113-39385 of readable/assets__lab-city-DCFvouWE.pretty.js (statement-aligned).
function v(e, t) {
  let r = n[e] ?? [{ t: 0.3, fl: [] }],
    i = r[t.k] ?? r[0],
    a = [t.yb];
  for (let e of i.fl) {
    let n = a[a.length - 1] + e;
    if (n > t.yt + 0.01) break;
    a.push(n);
  }
  return (
    a.length < 2 && a.push(t.yt),
    (a[a.length - 1] = t.yt),
    { ys: a, t: i.t }
  );
}
function y(
  e,
  {
    id: t,
    x: n,
    y: r,
    z: i,
    rotY: a,
    boxes: d,
    ground: f = !1,
    furnished: y = !0,
  },
) {
  let x = o[e];
  if (!x?.length) return null;
  let S = Math.round(Math.cos(a)),
    C = Math.round(Math.sin(a)),
    w = (e, t) => [n + e * S + t * C, i - e * C + t * S],
    T = (e, t) => {
      let r = e - n,
        a = t - i;
      return [r * S - a * C, r * C + a * S];
    },
    E = x.map((e) => {
      let [t, n] = w(e.x, e.z);
      return {
        x: t,
        z: n,
        y: r + e.y,
        nx: e.nx * S + e.nz * C,
        nz: -e.nx * C + e.nz * S,
        w: e.w,
        h: e.h,
        t: e.t,
      };
    }),
    D = Math.min(...E.map((e) => e.y)),
    O = (t) => {
      let { ys: n, t: r } = v(e, t);
      return {
        ys: n,
        t: r,
        inner: [t.x0 + r + u, t.z0 + r + u, t.x1 - r - u, t.z1 - r - u],
      };
    },
    k =
      d.find((t) =>
        v(e, t)
          .ys.slice(0, -1)
          .some((e) => Math.abs(e - D) < 0.06),
      ) ?? d[0],
    A = [];
  for (let e = !0; k; e = !1) {
    let { ys: t, inner: n } = O(k),
      r = e
        ? Math.max(
            0,
            t.findIndex((e) => Math.abs(e - D) < 0.06),
          )
        : 0;
    for (let e = r; e < t.length - 1; e++)
      A.push({
        y: t[e],
        ceil: t[e + 1],
        inner: n,
        roofOf: e === t.length - 2 ? k : null,
      });
    let i = k;
    k = d.find(
      (e) =>
        e !== i &&
        Math.abs(e.yb - i.yt) < 0.06 &&
        e.x0 < i.x1 &&
        e.x1 > i.x0 &&
        e.z0 < i.z1 &&
        e.z1 > i.z0,
    );
  }
  let j = A.length
    ? null
    : { ceil: Math.max(D + 2.8, ...E.map((e) => e.y + e.h + 0.05)) };
  if (j) {
    let e = d[0];
    A.push({ y: D, ceil: j.ceil, inner: O(e).inner, roofOf: null });
  }
  let M = A[0].inner,
    N = {
      hollow: j,
      doors: E,
      steps: [],
      stairs: [],
      holes: [],
      boxes: [],
      decor: [],
      colliders: [],
      levels: [],
      toL: T,
    },
    P = h(g(t || e));
  for (let [e, n] of E.entries()) {
    let i = n.y - r;
    if (i <= 0.45) continue;
    let a = Math.ceil(i / 0.28),
      o = i / a,
      s = 0.34,
      c = n.w + 0.4,
      l = n.nx !== 0;
    for (let i = 0; i < a; i++) {
      let a = (i + 0.5) * s + 0.02,
        u = n.x + n.nx * a,
        d = n.z + n.nz * a;
      N.steps.push({
        id: `${t}-step-${e}-${i}`,
        x: u,
        z: d,
        sx: l ? s : c,
        sz: l ? c : s,
        y0: r - 0.4,
        y1: n.y - i * o,
      });
    }
  }
  let F = (e) =>
      E.filter((t) => Math.abs(t.y - e) < 0.06).map((e) => {
        let t = 2.6,
          n = e.w / 2 + 0.6,
          r = e.x - e.nx * (e.t + t / 2),
          i = e.z - e.nz * (e.t + t / 2);
        return e.nx === 0
          ? [r - n, i - t / 2, r + n, i + t / 2]
          : [r - t / 2, i - n, r + t / 2, i + n];
      }),
    I = (e, t) =>
      e[0] >= t[0] - 1e-6 &&
      e[2] <= t[2] + 1e-6 &&
      e[1] >= t[1] - 1e-6 &&
      e[3] <= t[3] + 1e-6,
    L = null,
    R = 0;
  if (A.length > 1 && !f) {
    let e = F(D),
      t = A.slice(0, -1).map((e, t) => (A[t + 1].y - e.y) / s);
    for (let n = A.length - 1; n >= 1 && !L; n--) {
      let r = Math.max(...t.slice(0, n)),
        i = n > 1 ? c * 2 : c,
        a = r + l * 2,
        o = [];
      for (let e of [M[0], M[2] - i, (M[0] + M[2]) / 2 - i / 2])
        for (let t of [M[1], M[3] - a]) o.push([e, t, e + i, t + a]);
      ((L =
        o.find(
          (t) =>
            A.slice(0, n + 1).every((e) => I(t, e.inner)) &&
            !e.some((e) => _(t, e, 0.2)),
        ) ?? null),
        L && (R = n));
    }
  }
  if (L) {
    let e = L[1] + l;
    for (let n = 0; n < R; n++) {
      let r = A[n].y,
        i = A[n + 1].y,
        a = (i - r) / s,
        o = L[0] + (n % 2) * c,
        l = o + c,
        u = n % 2 == 0,
        d = u ? e : e + a,
        f = u ? e + a : e;
      N.stairs.push({
        id: `${t}-stair-${n}`,
        x0: o,
        x1: l,
        start: d,
        end: f,
        foot: r,
        top: i,
      });
      let p = Math.min(d, f) - (u ? 0.6 : 0),
        m = Math.max(d, f) + (u ? 0 : 0.6);
      N.holes.push({
        y: i,
        rect: [o, Math.max(p, L[1]), l, Math.min(m, L[3])],
      });
    }
  }
  let z = p(e),
    B = m[z] ?? m.office;
  for (let e = 0; e <= R; e++) {
    let n = A[e].y,
      r = A[e].ceil - 0.25,
      i = A[e].inner,
      o = [...F(n)];
    (L && o.push([L[0] - 0.4, L[1] - 0.2, L[2] + 0.4, L[3] + 0.2]),
      N.levels.push({ y: n, ceil: r, inner: i }));
    let s = i[2] - i[0],
      c = i[3] - i[1],
      l = s >= c;
    if (Math.max(s, c) >= 12 && z !== `church` && z !== `works` && z !== `hall`)
      for (let a of [0.62, 0.38, 0.5]) {
        let u = l ? i[0] + s * a : i[1] + c * a,
          d = 1.8,
          f = (l ? i[1] : i[0]) + (l ? c : s) * (0.3 + 0.4 * P()) - d / 2,
          p = l
            ? [u - 0.08, i[1], u + 0.08, i[3]]
            : [i[0], u - 0.08, i[2], u + 0.08];
        if (o.some((e) => _(p, e, 0.3))) continue;
        let m = l ? i[1] : i[0],
          h = l ? i[3] : i[2];
        for (let [i, a, o] of [
          [m, f, `a`],
          [f + d, h, `b`],
        ])
          if (a - i > 0.3) {
            let s = l ? [u - 0.08, i, u + 0.08, a] : [i, u - 0.08, a, u + 0.08];
            N.boxes.push({
              id: `${t}-l${e}-wall-${o}`,
              rect: s,
              y0: n,
              y1: r,
              material: `plaster`,
              solid: !0,
            });
          }
        (N.boxes.push({
          id: `${t}-l${e}-wall-head`,
          rect: l
            ? [u - 0.08, f, u + 0.08, f + d]
            : [f, u - 0.08, f + d, u + 0.08],
          y0: n + 2.6,
          y1: r,
          material: `plaster`,
          solid: !1,
        }),
          o.push(
            l
              ? [u - 1.2, f - 0.2, u + 1.2, f + d + 0.2]
              : [f - 0.2, u - 1.2, f + d + 0.2, u + 1.2],
          ),
          o.push(p));
        break;
      }
    let u = e === 0 ? B.main : B.upper.length ? B.upper : B.main;
    y &&
      b(N, u, {
        id: `${t}-l${e}`,
        inner: i,
        keep: o,
        fy: n,
        ceil: r,
        rnd: P,
        rotY: a,
        church: z === `church`,
        doors: E.filter((e) => Math.abs(e.y - n) < 0.06),
      });
  }
  return N;
}
