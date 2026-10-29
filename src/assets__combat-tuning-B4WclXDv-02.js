// assets__combat-tuning-B4WclXDv 02 — math
// Lines 333-665 of readable/assets__combat-tuning-B4WclXDv.pretty.js (statement-aligned).
function p(e, t = u) {
  return {
    ...e,
    flatten: [...e.flatten, ...t.map((e) => ({ ...e, radius: 17 }))],
    platforms: [
      ...(e.platforms ?? []),
      ...t.map((e, t) => {
        let { x: n, z: r } = e;
        return {
          x: n,
          z: r,
          bounds: [
            -12,
            d(e, t) && r > 0 ? -36 : -12,
            18,
            d(e, t) && r < 0 ? 36 : 12,
          ],
          blend: 4,
        };
      }),
    ],
  };
}
function m(e, t, n = u) {
  let r = (t, n, r, i, a, o, s, c, l = !0) => {
    (e.objects.push({
      id: t,
      kind: `box`,
      x: n,
      y: r,
      z: i,
      sx: a,
      sy: o,
      sz: s,
      material: c,
      cast: !0,
    }),
      l &&
        e.colliderDefs.push({
          id: `demo-` + t,
          aabb: [n - a / 2, r, i - s / 2, n + a / 2, r + o, i + s / 2],
          surface: c.startsWith(`timber`)
            ? `wood`
            : c.startsWith(`metal`)
              ? `metal`
              : `concrete`,
        }));
  };
  e.urbanBuildings = [];
  for (let [i, o] of n.entries()) {
    let { x: n, z: c, floors: u } = o,
      p = o.mirror ? -1 : 1,
      m = f(o, i),
      h = d(o, i),
      g = t(n, c) + 0.12,
      _ = `urban-` + i,
      v = 3.2,
      y = [`plaster`, `plasterRed`, `concrete`][i % 3];
    if (!Number.isFinite(g) || g < 8.6) continue;
    r(_ + `-foundation`, n, g - 0.5, c, 22, 0.5, 18, `concreteDark`);
    let b = [];
    for (let t = 0; t < u; t++) {
      let s = g + t * v,
        l = _ + `-f` + t;
      r(l + `-floor`, n, s - 0.18, c, 22, 0.18, 18, `concrete`);
      for (let e of [-1, 1]) {
        let i = c + e * 8.8;
        for (let t of [-1, 1])
          (r(l + `-sill-` + e + `-` + t, n + t * 6, s, i, 9.6, 0.92, 0.4, y),
            r(
              l + `-lintel-` + e + `-` + t,
              n + t * 6,
              s + 2.65,
              i,
              9.6,
              0.55,
              0.4,
              y,
            ));
        for (let t of [-10.7, -6, 6, 10.7])
          r(l + `-pier-` + e + `-` + t, n + t, s, i, 0.55, v, 0.4, y);
        (r(l + `-doorhead-` + e, n, s + 2.5, i, 2.4, 0.7, 0.4, y),
          t && r(l + `-balcony-sill-` + e, n, s, i, 2.4, 0.92, 0.4, y));
      }
      r(l + `-west`, n - p * 10.8, s, c, 0.4, v, 17.2, y);
      let d = c + p * (t % 2 ? -7 : 7);
      if (
        (r(
          l + `-east-mid`,
          n + p * 10.8,
          s,
          c + p * (t % 2 ? 1.4 : -1.4),
          0.4,
          v,
          14.4,
          y,
        ),
        r(l + `-east-doorhead`, n + p * 10.8, s + 2.5, d, 0.4, 0.7, 2.8, y),
        r(
          l + `-east-corner`,
          n + p * 10.8,
          s,
          c + p * (t % 2 ? -8.8 : 8.8),
          0.4,
          v,
          0.4,
          y,
        ),
        r(l + `-landing`, n + p * 13.9, s - 0.18, d, 6.2, 0.18, 3, `concrete`),
        t < u - 1 || m)
      ) {
        let i = c + p * (t % 2 ? -7 : 7),
          a = c + p * (t % 2 ? 7 : -7),
          o = n + p * (t % 2 ? 15.3 : 12.5);
        for (let e = 0; e < 20; e++) {
          let t = (e + 0.5) / 20;
          r(
            l + `-step-` + e,
            o,
            s + e * 0.16,
            i + (a - i) * t,
            2.5,
            0.16,
            0.7,
            `concrete`,
            !1,
          );
        }
        e.colliderDefs.push({
          id: `demo-` + l + `-ramp`,
          aabb: [o - 1.25, s, c - 7.4, o + 1.25, s + v, c + 7.4],
          ramp: { y: s, start: i, end: a, rise: v, thickness: 0.16 },
          surface: `concrete`,
        });
        for (let t of [-1, 1])
          (r(
            l + `-stringer-` + t,
            o + t * 1.05,
            s + v / 2 - 0.25,
            c,
            0.14,
            0.14,
            Math.hypot(14, v),
            `metalDark`,
            !1,
          ),
            (e.objects.at(-1).rotX = -Math.atan(v / (a - i))));
        (r(
          l + `-handrail`,
          o + p * 1.5,
          s + v / 2 + 0.95,
          c,
          0.1,
          0.1,
          Math.hypot(14, v),
          `metalDark`,
          !1,
        ),
          (e.objects.at(-1).rotX = -Math.atan(v / (a - i))));
        for (let e of [c - 7, c, c + 7])
          r(
            l + `-rail-post-` + e,
            o + p * 1.5,
            s + (v * (e - i)) / (a - i),
            e,
            0.12,
            1,
            0.12,
            `metalDark`,
            !1,
          );
      }
      b.push(
        a(r, {
          id: l,
          x: n,
          y: s,
          z: c,
          index: i,
          floor: t,
          use: o.interiorUses?.[t],
          mirror: p,
        }),
      );
    }
    for (let e of [-1, 1]) {
      let i = Math.min(g, t(n + p * 16.7, c + e * 7.8));
      r(
        _ + `-stair-support-` + e,
        n + p * 16.7,
        i,
        c + e * 7.8,
        0.18,
        g + (u - 1 + +!!m) * v + 0.9 - i,
        0.18,
        `metalDark`,
      );
    }
    (r(_ + `-roof`, n, g + u * v - 0.18, c, 22.6, 0.25, 18.6, `roof`),
      r(
        _ + `-roof-plant`,
        n - p * 6,
        g + u * v + 0.07,
        c - p * 3,
        3,
        1.3,
        2,
        `metal`,
      ));
    for (let e of [-1, 1]) {
      r(
        _ + `-awning-` + e,
        n,
        g + 2.5,
        c + e * 9.7,
        7,
        0.18,
        2,
        `metalDark`,
        !1,
      );
      for (let t = 1; t <= u; t++)
        r(
          _ + `-band-` + e + `-` + t,
          n,
          g + t * v - 0.2,
          c + e * 9.06,
          22.3,
          0.15,
          0.14,
          `concreteDark`,
          !1,
        );
    }
    for (let e of [-1, 1])
      for (let i = 0; i < 3; i++) {
        let a = c + e * (9.3 + i * 0.5),
          o = t(n, a);
        r(
          _ + `-entry-` + e + `-` + i,
          n,
          o - 0.05,
          a,
          3,
          Math.max(0.1, g - o - 0.16 * i),
          0.5,
          `concrete`,
        );
      }
    let x = {
      id: _,
      x: n,
      y: g,
      z: c,
      w: 22,
      d: 18,
      h: u * v,
      floors: u,
      interiors: b,
      mirror: p,
      entry: [n, g, c + p * 9.6],
      stairs: [n + p * 12.5, g, c + p * 7],
    };
    (m && s(r, x, i),
      h && l(r, e, x, i, t),
      e.buildings.push(x),
      e.urbanBuildings.push(x));
  }
  return e;
}
var h = {
  A: `M0 0L2 6L4 0M0.8 2.3L3.2 2.3`,
  B: `M0 0L0 6L2.3 6C3.9 6 3.9 3.1 2.1 3.1L0 3.1M2.1 3.1C4.3 3.1 4.3 0 2.3 0L0 0`,
  C: `M4 5C3.2 6.3 0 6.4 0 3C0 -0.4 3.2 -0.3 4 1`,
  D: `M0 0L0 6L1.5 6C4.5 6 4.5 0 1.5 0L0 0`,
  E: `M4 6L0 6L0 0L4 0M0 3.1L3 3.1`,
  F: `M4 6L0 6L0 0M0 3.1L3 3.1`,
  G: `M4 5C3.2 6.3 0 6.4 0 3C0 -0.4 4 -0.4 4 2.6L2.3 2.6`,
  H: `M0 6L0 0M4 6L4 0M0 3.1L4 3.1`,
  I: `M0.8 6L3.2 6M2 6L2 0M0.8 0L3.2 0`,
  J: `M1.2 6L4 6M3 6L3 1.6C3 -0.6 0.2 -0.6 0 1.2`,
  K: `M0 6L0 0M4 6L0 2.4M1.3 3.3L4 0`,
  L: `M0 6L0 0L4 0`,
  M: `M0 0L0 6L2 2.4L4 6L4 0`,
  N: `M0 0L0 6L4 0L4 6`,
  O: `M2 6C-0.7 6 -0.7 0 2 0C4.7 0 4.7 6 2 6`,
  P: `M0 0L0 6L2.3 6C4.1 6 4.1 2.8 2.3 2.8L0 2.8`,
  Q: `M2 6C-0.7 6 -0.7 0 2 0C4.7 0 4.7 6 2 6M2.5 1.5L4.2 -0.4`,
  R: `M0 0L0 6L2.3 6C4.1 6 4.1 2.8 2.3 2.8L0 2.8M1.9 2.8L4 0`,
  S: `M4 5C3.3 6.4 0.2 6.4 0.2 4.6C0.2 2.8 3.8 3.4 3.8 1.4C3.8 -0.4 0.6 -0.4 0 1`,
  T: `M0 6L4 6M2 6L2 0`,
  U: `M0 6L0 2C0 -0.7 4 -0.7 4 2L4 6`,
  V: `M0 6L2 0L4 6`,
  W: `M0 6L1 0L2 4L3 0L4 6`,
  X: `M0 6L4 0M4 6L0 0`,
  Y: `M0 6L2 3L4 6M2 3L2 0`,
  Z: `M0 6L4 6L0 0L4 0`,
  0: `M2 6C0.3 6 0.3 0 2 0C3.7 0 3.7 6 2 6M2.9 4.6L1.1 1.4`,
  1: `M0.8 4.6L2.2 6L2.2 0M0.8 0L3.6 0`,
  2: `M0.2 4.6C0.6 6.5 4 6.4 3.8 4.2C3.6 2.8 0 1.6 0 0L4 0`,
  3: `M0.2 5.2C1.2 6.5 4 6.2 3.6 4.4C3.4 3.4 2.4 3.2 1.4 3.2C4.4 3.2 4.2 -0.2 2 0C1.2 0 0.4 0.4 0 1`,
  4: `M3 0L3 6L0 1.8L4 1.8`,
  5: `M3.8 6L0.4 6L0.1 3.4C1.8 4.4 4 3.8 4 1.8C4 -0.5 0.8 -0.6 0 1`,
  6: `M3.6 5.4C2.4 6.6 0 6.2 0 2.6C0 -0.6 4 -0.6 4 1.8C4 4 0.4 4 0.1 2.2`,
  7: `M0 6L4 6L1.4 0`,
  8: `M2 3.2C-0.4 3.6 0 6 2 6C4 6 4.4 3.6 2 3.2C-0.6 2.8 -0.4 0 2 0C4.4 0 4.6 2.8 2 3.2`,
  9: `M3.9 3.8C3.6 2 0 2 0 4C0 6.4 4 6.4 4 3.6C4 0.6 2 -0.4 0.4 0.4`,
  " ": ``,
  "!": `M2 6L2 1.8M2 0.3L2 0`,
  "?": `M0.3 4.8C0.8 6.5 3.9 6.4 3.9 4.6C3.9 3.2 2 3.2 2 1.8M2 0.3L2 0`,
  ".": `M2 0.3L2 0`,
  ",": `M2.2 0.5L1.6 -1`,
  "'": `M2 6L1.8 4.6`,
  "-": `M0.6 3L3.4 3`,
  "<": `M4 5.4L0 3L4 0.6`,
  ":": `M2 4.3L2 4M2 1.3L2 1`,
  "&": `M4 0L1 4.2C0.2 5.4 1 6.2 1.8 6.2C2.8 6.2 3.2 5 2.2 4L0.8 2.6C-0.4 1.2 0.4 0 1.8 0C3 0 3.8 1.4 4 2.4`,
  "#": `M1.4 6L1 0M3 6L2.6 0M0 4L4 4M0 2L4 2`,
};
Object.freeze(h);
var g = 5.5,
  _ = 1.5,
  v = 1.35;
function y(e) {
  let t = String(e ?? ``)
      .toUpperCase()
      .replace(/[\r\n\t]+/g, ` `),
    n = ``;
  for (let e of t) h[e] != null && (n += e);
  return n.replace(/ {2,}/g, ` `).trim().slice(0, 40);
}
var b = 0.3,
  x = new Map();
