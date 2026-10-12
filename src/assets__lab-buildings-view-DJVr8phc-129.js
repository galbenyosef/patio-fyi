// assets__lab-buildings-view-DJVr8phc 129 — math
// Lines 42983-43086 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Vf(e, t, n) {
  let i = Math.tan(n.pitch),
    a = n.rt ?? 0.14 / Math.cos(n.pitch),
    o = (e) => n.H + (n.span / 2 - e) * i + a,
    c = n.w / 2,
    l = n.x,
    u = n.zf,
    d = o(u),
    f = d + n.h,
    p = n.dp ?? 50 * V,
    m = c * Math.tan(p),
    h =
      n.type === `shed`
        ? f + 0.15
        : n.type === `round`
          ? f + c + 0.14
          : f + m + 0.1,
    g = Math.min(u - 0.3, n.span / 2 - (h + 0.1 - n.H - a) / i);
  e.box(n.mat, t, 0, l - c, l + c, d - 0.5, f, g, u);
  let _ = c - 0.16,
    v = d + 0.14,
    y = f - 0.12,
    b = n.trim;
  e.box(`glass`, t, 0, l - _, l + _, v, y, u, u + 0.015);
  for (let [n, r, i, a] of [
    [l - _ - 0.07, l - _, v, y],
    [l + _, l + _ + 0.07, v, y],
    [l - _ - 0.07, l + _ + 0.07, v - 0.08, v],
    [l - _ - 0.07, l + _ + 0.07, y, y + 0.07],
    [l - 0.025, l + 0.025, v, y],
    [l - _, l + _, v + (y - v) * 0.6 - 0.025, v + (y - v) * 0.6 + 0.025],
  ])
    e.box(b, t, 0, n, r, i, a, u, u + 0.06);
  if (n.type === `shed`) {
    e.box(n.roof, t, 0, l - c - 0.12, l + c + 0.12, f, f + 0.12, g, u + 0.25);
    return;
  }
  if (n.type === `round`) {
    let r = new C();
    (r.moveTo(l - c, f),
      r.absarc(l, f, c, Math.PI, 0, !0),
      r.lineTo(l - c, f),
      bf(e, n.mat, t, 0, r, g, u),
      e.add(
        n.roof,
        new s(c + 0.12, c + 0.12, u + 0.2 - g, 12, 1, !1, -Math.PI / 2, Math.PI)
          .rotateX(-Math.PI / 2)
          .translate(l, f, (u + 0.2 + g) / 2),
        t,
        0,
      ));
    return;
  }
  xf(
    e,
    n.mat,
    t,
    0,
    [
      [l - c, f],
      [l + c, f],
      [l, f + m],
    ],
    g,
    u,
  );
  let x = (c + 0.14) / Math.cos(p),
    ee = u + 0.2 - g;
  for (let i of [-1, 1]) {
    let a = l + (x / 2) * i * Math.cos(p) + i * 0.05 * Math.sin(p),
      o = f + m - (x / 2) * Math.sin(p) + 0.05 * Math.cos(p);
    (e.add(
      n.roof,
      new r(x, 0.1, ee).rotateZ(-i * p).translate(a, o, (u + 0.2 + g) / 2),
      t,
      0,
    ),
      e.add(
        b,
        new r(x, 0.18, 0.05)
          .rotateZ(-i * p)
          .translate(
            a - i * 0.06 * Math.sin(p),
            o - 0.08 * Math.cos(p) - 0.04,
            u + 0.22,
          ),
        t,
        0,
      ));
  }
}
function Hf(e, t, n, r, i) {
  let a = i.ridge === `z`,
    o = a ? n.W : n.D;
  for (let s of i.sides || [1, -1]) {
    let c = a
      ? of(t, 0, 0, (s * Math.PI) / 2)
      : s > 0
        ? t
        : of(t, 0, 0, Math.PI);
    for (let t of r)
      Vf(e, c, { ...i, x: t, span: o, H: n.H, zf: o / 2 - (i.inset ?? 0.9) });
  }
}
