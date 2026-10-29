// assets__lab-buildings-view-DY6ytqNM 75 — box
// Lines 23091-23235 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var bs = (e) => (t, n, r) => {
  let i = e.S,
    a = i.t,
    o = e.w,
    s = e.d,
    c = i.floors.reduce((e, t) => e + t, 0),
    l = e.y0 || 0,
    u = Ho(n, Bo(e.u, l, s / 2)),
    d = i.roof,
    f = d?.ridge === `z`,
    p = Math.tan(d?.pitch || 0),
    m = d && f ? { h: (o / 2) * p } : null,
    h = d && !f ? { h: (s / 2) * p, lip: a * p } : null,
    g = {
      front: ge(t, Te(u, -o / 2, s / 2, 0), o, i, {
        ends: !0,
        gable: m,
        ...e.front,
      }),
      right: ge(t, Te(u, o / 2, s / 2 - a, Math.PI / 2), s - a, i, {
        gable: h,
        ...e.right,
      }),
      left: ge(t, Te(u, -o / 2, -s / 2, -Math.PI / 2), s - a, i, {
        gable: h,
        ...e.left,
      }),
    };
  (e.open ||
    t.box(
      `interior`,
      u,
      0,
      -o / 2 + a + 0.02,
      o / 2 - a - 0.02,
      0.01,
      c,
      -s / 2 - 0.1,
      s / 2 - a - 0.02,
    ),
    t.box(
      `concrete`,
      u,
      0,
      -o / 2 - 0.02,
      o / 2 + 0.02,
      -0.4 - l,
      0.06,
      -s / 2,
      s / 2 + 0.02,
    ));
  let _ = c + (i.parapet || 0);
  if (d) {
    let n = e.roofBack || 0;
    _ = Se(t, Ho(u, Bo(0, 0, -n / 2)), i, o, s + n, c);
  } else
    t.box(
      `tarRoof`,
      u,
      0,
      -o / 2 + a,
      o / 2 - a,
      c - 0.25,
      c + 0.02,
      -s / 2,
      s / 2 - a,
    );
  e.then?.(t, u, { faces: g, H: c, top: _, w: o, d: s });
};
function xs(e, t, n, r, a, o, s, c) {
  let l = r.trim || I,
    u = r.col || `post`;
  if (u === `turned`) {
    (e.box(l, t, n, a - 0.09, a + 0.09, s, s + 0.45, o - 0.09, o + 0.09),
      e.add(
        l,
        new C(0.055, 0.075, c - s - 0.8, 8).translate(
          a,
          (s + 0.45 + c - 0.35) / 2,
          o,
        ),
        t,
        n,
      ));
    for (let r of [s + 0.9, c - 0.6])
      e.add(l, new i(0.085, 8, 6).translate(a, r, o), t, n);
    e.box(l, t, n, a - 0.09, a + 0.09, c - 0.35, c, o - 0.09, o + 0.09);
  } else if (u === `classic`)
    Ss(e, t, n, a, o, s, c, r.colR ?? 0.16, r.colMat || l);
  else if (u === `iron`) {
    let i = r.colMat || Fo;
    (e.box(i, t, n, a - 0.12, a + 0.12, s, s + 0.3, o - 0.12, o + 0.12),
      e.add(
        i,
        new C(0.07, 0.085, c - s - 0.55, 8).translate(
          a,
          (s + 0.3 + c - 0.25) / 2,
          o,
        ),
        t,
        n,
      ),
      e.add(i, new C(0.16, 0.08, 0.18, 8).translate(a, c - 0.16, o), t, n),
      e.box(i, t, n, a - 0.15, a + 0.15, c - 0.07, c, o - 0.15, o + 0.15));
  } else {
    let i = r.colW || 0.08;
    e.box(r.colMat || l, t, n, a - i, a + i, s, c, o - i, o + i);
  }
}
function Ss(e, t, n, r, i, a, o, s, c, l = 14) {
  (e.box(
    c,
    t,
    n,
    r - s * 1.35,
    r + s * 1.35,
    a,
    a + 0.22,
    i - s * 1.35,
    i + s * 1.35,
  ),
    e.add(c, new C(s * 1.15, s * 1.25, 0.16, l).translate(r, a + 0.3, i), t, n),
    e.add(
      c,
      new C(s * 0.86, s, o - a - 0.75, l).translate(
        r,
        (a + 0.38 + o - 0.37) / 2,
        i,
      ),
      t,
      n,
    ),
    e.add(c, new C(s * 1.2, s * 0.88, 0.2, l).translate(r, o - 0.27, i), t, n),
    e.box(
      c,
      t,
      n,
      r - s * 1.3,
      r + s * 1.3,
      o - 0.17,
      o,
      i - s * 1.3,
      i + s * 1.3,
    ));
}
