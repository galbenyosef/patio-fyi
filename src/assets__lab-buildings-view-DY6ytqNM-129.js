// assets__lab-buildings-view-DY6ytqNM 129 — math
// Lines 42983-43086 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Bf(e, t, n) {
  let r = Math.tan(n.pitch),
    i = n.rt ?? 0.14 / Math.cos(n.pitch),
    o = (e) => n.H + (n.span / 2 - e) * r + i,
    s = n.w / 2,
    c = n.x,
    l = n.zf,
    u = o(l),
    d = u + n.h,
    f = n.dp ?? 50 * H,
    p = s * Math.tan(f),
    m =
      n.type === `shed`
        ? d + 0.15
        : n.type === `round`
          ? d + s + 0.14
          : d + p + 0.1,
    h = Math.min(l - 0.3, n.span / 2 - (m + 0.1 - n.H - i) / r);
  e.box(n.mat, t, 0, c - s, c + s, u - 0.5, d, h, l);
  let g = s - 0.16,
    _ = u + 0.14,
    v = d - 0.12,
    y = n.trim;
  e.box(`glass`, t, 0, c - g, c + g, _, v, l, l + 0.015);
  for (let [n, r, i, a] of [
    [c - g - 0.07, c - g, _, v],
    [c + g, c + g + 0.07, _, v],
    [c - g - 0.07, c + g + 0.07, _ - 0.08, _],
    [c - g - 0.07, c + g + 0.07, v, v + 0.07],
    [c - 0.025, c + 0.025, _, v],
    [c - g, c + g, _ + (v - _) * 0.6 - 0.025, _ + (v - _) * 0.6 + 0.025],
  ])
    e.box(y, t, 0, n, r, i, a, l, l + 0.06);
  if (n.type === `shed`) {
    e.box(n.roof, t, 0, c - s - 0.12, c + s + 0.12, d, d + 0.12, h, l + 0.25);
    return;
  }
  if (n.type === `round`) {
    let r = new T();
    (r.moveTo(c - s, d),
      r.absarc(c, d, s, Math.PI, 0, !0),
      r.lineTo(c - s, d),
      yf(e, n.mat, t, 0, r, h, l),
      e.add(
        n.roof,
        new C(s + 0.12, s + 0.12, l + 0.2 - h, 12, 1, !1, -Math.PI / 2, Math.PI)
          .rotateX(-Math.PI / 2)
          .translate(c, d, (l + 0.2 + h) / 2),
        t,
        0,
      ));
    return;
  }
  bf(
    e,
    n.mat,
    t,
    0,
    [
      [c - s, d],
      [c + s, d],
      [c, d + p],
    ],
    h,
    l,
  );
  let b = (s + 0.14) / Math.cos(f),
    x = l + 0.2 - h;
  for (let r of [-1, 1]) {
    let i = c + (b / 2) * r * Math.cos(f) + r * 0.05 * Math.sin(f),
      o = d + p - (b / 2) * Math.sin(f) + 0.05 * Math.cos(f);
    (e.add(
      n.roof,
      new a(b, 0.1, x).rotateZ(-r * f).translate(i, o, (l + 0.2 + h) / 2),
      t,
      0,
    ),
      e.add(
        y,
        new a(b, 0.18, 0.05)
          .rotateZ(-r * f)
          .translate(
            i - r * 0.06 * Math.sin(f),
            o - 0.08 * Math.cos(f) - 0.04,
            l + 0.22,
          ),
        t,
        0,
      ));
  }
}
function Vf(e, t, n, r, i) {
  let a = i.ridge === `z`,
    o = a ? n.W : n.D;
  for (let s of i.sides || [1, -1]) {
    let c = a
      ? af(t, 0, 0, (s * Math.PI) / 2)
      : s > 0
        ? t
        : af(t, 0, 0, Math.PI);
    for (let t of r)
      Bf(e, c, { ...i, x: t, span: o, H: n.H, zf: o / 2 - (i.inset ?? 0.9) });
  }
}
