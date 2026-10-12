// assets__tower-styles-DZ2NTXsa 01 — box
// Lines 1-116 of readable/assets__tower-styles-DZ2NTXsa.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { F as e, K as t, wn as n } from "./graphics-quality-BsjABS0s.js";
import { s as r } from "./facade-kit-DGwo5rab.js";
var i = `ironDark`,
  a = (e, t) => Array(e).fill(t);
function o(t, n, r, a, o, s, c, l = 1.2) {
  let u = r.H + l;
  for (let a of [-o * 0.38, o * 0.38]) {
    t.box(i, n, 0, a - 0.1, a + 0.1, r.H, u + s * 0.9, c - 0.55, c - 0.35);
    let o = u + s * 0.6 - r.H,
      l = 1.8;
    t.add(
      i,
      new e(0.08, 0.08, Math.hypot(o, l))
        .rotateX(-Math.atan2(o, l))
        .translate(a, r.H + o / 2, c - 0.45 - l / 2),
      n,
      0,
    );
  }
  (t.box(i, n, 0, -o / 2, o / 2, u - 0.1, u, c - 0.55, c - 0.35),
    t.box(a, n, 0, -o / 2, o / 2, u, u + s, c - 0.32, c - 0.3, {
      planar: (e, t) => [(e + o / 2) / o, (t - u) / s],
    }));
}
function s(e, t, n, r, i) {
  let a = n.W / 2 - r,
    o = n.D / 2 - r,
    s = n.H;
  (e.box(`louver`, t, 0, -a, a, s, s + i, o - 0.15, o),
    e.box(`louver`, t, 0, -a, a, s, s + i, -o, -o + 0.15),
    e.box(`louver`, t, 0, a - 0.15, a, s, s + i, -o, o),
    e.box(`louver`, t, 0, -a, -a + 0.15, s, s + i, -o, o),
    e.box(
      `aluminum`,
      t,
      0,
      -a - 0.05,
      a + 0.05,
      s + i,
      s + i + 0.15,
      -o - 0.05,
      o + 0.05,
    ));
  for (let [n, r, c] of [
    [-a / 2, 0, 2.2],
    [a / 2, -o / 3, 1.6],
  ])
    e.box(`concrete`, t, 0, n - c, n + c, s, s + i - 1, r - c, r + c);
}
function c(e, r, i, a, o, s) {
  e.add(`aluminum`, new t(0.12, 0.35, s, 10).translate(a, i + s / 2, o), r, 0);
  for (let t = 1; t < 4; t++)
    e.box(
      `aluminum`,
      r,
      0,
      a - 0.6,
      a + 0.6,
      i + (s * t) / 4,
      i + (s * t) / 4 + 0.08,
      o - 0.04,
      o + 0.04,
    );
  e.add(`beacon`, new n(0.22, 10, 8).translate(a, i + s + 0.2, o), r, 0);
}
function l(e, r, i) {
  let a = i.H + 0.6;
  for (let [t, n, o] of [
    [i.W - 2, i.D - 2, 3.2],
    [i.W - 4.4, i.D - 4.4, 2.8],
    [i.W - 6.6, i.D - 6.6, 2.4],
  ]) {
    e.box(`limestone`, r, 0, -t / 2, t / 2, a, a + o, -n / 2, n / 2);
    for (let i = -t / 2 + 0.6; i <= t / 2 - 0.5; i += 1)
      for (let t of [1, -1])
        e.box(
          `bronze`,
          r,
          0,
          i - 0.08,
          i + 0.08,
          a + 0.2,
          a + o - 0.3,
          t > 0 ? n / 2 : -n / 2 - 0.12,
          t > 0 ? n / 2 + 0.12 : -n / 2,
        );
    for (let i = -n / 2 + 0.6; i <= n / 2 - 0.5; i += 1)
      for (let n of [1, -1])
        e.box(
          `bronze`,
          r,
          0,
          n > 0 ? t / 2 : -t / 2 - 0.12,
          n > 0 ? t / 2 + 0.12 : -t / 2,
          a + 0.2,
          a + o - 0.3,
          i - 0.08,
          i + 0.08,
        );
    (e.box(
      `limestone`,
      r,
      0,
      -t / 2 - 0.15,
      t / 2 + 0.15,
      a + o - 0.25,
      a + o,
      -n / 2 - 0.15,
      n / 2 + 0.15,
    ),
      (a += o));
  }
  (e.add(`aluminum`, new t(0.08, 0.9, 14, 12).translate(0, a + 7, 0), r, 0),
    e.add(`beacon`, new n(0.2, 10, 8).translate(0, a + 14.1, 0), r, 0));
}
