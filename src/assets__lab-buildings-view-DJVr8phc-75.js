// assets__lab-buildings-view-DJVr8phc 75 — box
// Lines 23091-23235 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var xs = (e) => (t, n, r) => {
  let i = e.S,
    a = i.t,
    o = e.w,
    s = e.d,
    c = i.floors.reduce((e, t) => e + t, 0),
    l = e.y0 || 0,
    u = Uo(n, Vo(e.u, l, s / 2)),
    d = i.roof,
    f = d?.ridge === `z`,
    p = Math.tan(d?.pitch || 0),
    m = d && f ? { h: (o / 2) * p } : null,
    h = d && !f ? { h: (s / 2) * p, lip: a * p } : null,
    g = {
      front: ve(t, De(u, -o / 2, s / 2, 0), o, i, {
        ends: !0,
        gable: m,
        ...e.front,
      }),
      right: ve(t, De(u, o / 2, s / 2 - a, Math.PI / 2), s - a, i, {
        gable: h,
        ...e.right,
      }),
      left: ve(t, De(u, -o / 2, -s / 2, -Math.PI / 2), s - a, i, {
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
    _ = we(t, Uo(u, Vo(0, 0, -n / 2)), i, o, s + n, c);
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
function Ss(e, t, n, r, i, a, o, c) {
  let l = r.trim || F,
    u = r.col || `post`;
  if (u === `turned`) {
    (e.box(l, t, n, i - 0.09, i + 0.09, o, o + 0.45, a - 0.09, a + 0.09),
      e.add(
        l,
        new s(0.055, 0.075, c - o - 0.8, 8).translate(
          i,
          (o + 0.45 + c - 0.35) / 2,
          a,
        ),
        t,
        n,
      ));
    for (let r of [o + 0.9, c - 0.6])
      e.add(l, new w(0.085, 8, 6).translate(i, r, a), t, n);
    e.box(l, t, n, i - 0.09, i + 0.09, c - 0.35, c, a - 0.09, a + 0.09);
  } else if (u === `classic`)
    Cs(e, t, n, i, a, o, c, r.colR ?? 0.16, r.colMat || l);
  else if (u === `iron`) {
    let l = r.colMat || Io;
    (e.box(l, t, n, i - 0.12, i + 0.12, o, o + 0.3, a - 0.12, a + 0.12),
      e.add(
        l,
        new s(0.07, 0.085, c - o - 0.55, 8).translate(
          i,
          (o + 0.3 + c - 0.25) / 2,
          a,
        ),
        t,
        n,
      ),
      e.add(l, new s(0.16, 0.08, 0.18, 8).translate(i, c - 0.16, a), t, n),
      e.box(l, t, n, i - 0.15, i + 0.15, c - 0.07, c, a - 0.15, a + 0.15));
  } else {
    let s = r.colW || 0.08;
    e.box(r.colMat || l, t, n, i - s, i + s, o, c, a - s, a + s);
  }
}
function Cs(e, t, n, r, i, a, o, c, l, u = 14) {
  (e.box(
    l,
    t,
    n,
    r - c * 1.35,
    r + c * 1.35,
    a,
    a + 0.22,
    i - c * 1.35,
    i + c * 1.35,
  ),
    e.add(l, new s(c * 1.15, c * 1.25, 0.16, u).translate(r, a + 0.3, i), t, n),
    e.add(
      l,
      new s(c * 0.86, c, o - a - 0.75, u).translate(
        r,
        (a + 0.38 + o - 0.37) / 2,
        i,
      ),
      t,
      n,
    ),
    e.add(l, new s(c * 1.2, c * 0.88, 0.2, u).translate(r, o - 0.27, i), t, n),
    e.box(
      l,
      t,
      n,
      r - c * 1.3,
      r + c * 1.3,
      o - 0.17,
      o,
      i - c * 1.3,
      i + c * 1.3,
    ));
}
