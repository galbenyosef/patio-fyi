// assets__combat-tuning-B4WclXDv 01 — map
// Lines 1-332 of readable/assets__combat-tuning-B4WclXDv.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { r as e } from "./index-D8RniaPa.js";
import { o as t } from "./map-collider-0Gc3D4Vs.js";
import { A as n, i as r } from "./sim-CCeMdhLh.js";
import { a as i } from "./sim-Dl_3Wa5P.js";
function a(
  e,
  {
    id: t,
    x: n,
    y: r,
    z: i,
    index: a,
    floor: o,
    mirror: s = 1,
    use: c = o === 0
      ? [`workshop`, `market`, `office`][a % 3]
      : [`office`, `apartment`, `archive`][(a + o) % 3],
  },
) {
  let l = (a + o) % 2 ? -1 : 1,
    u = (a, o, c, u, d, f, p = `timber`, m = 0, h = !0) =>
      e(t + `-interior-` + a, n + s * o, r + m, i + s * c * l, u, d, f, p, h);
  for (let e of [-1, 1]) u(`wall-` + e, -2, e * 5, 0.24, 2.45, 5, `plaster`);
  let d = (e, t, n, r = 2.6, i = 1.15) => {
      u(e + `-top`, t, n, r, 0.12, i, `timber`, 0.82);
      for (let a of [-1, 1])
        for (let o of [-1, 1])
          u(
            e + `-leg-` + a + `-` + o,
            t + a * (r / 2 - 0.14),
            n + o * (i / 2 - 0.14),
            0.14,
            0.82,
            0.14,
            `metalDark`,
          );
    },
    f = (e, t, n) => {
      u(e + `-back`, t, n, 2.8, 2.05, 0.18, `timberDark`);
      for (let r = 0; r < 4; r++)
        u(e + `-` + r, t, n - 0.35, 2.8, 0.12, 0.8, `timber`, 0.12 + r * 0.55);
      for (let r of [-1, 1])
        u(
          e + `-side-` + r,
          t + r * 1.35,
          n - 0.35,
          0.1,
          2.05,
          0.8,
          `timberDark`,
        );
    };
  if (c === `workshop`) {
    (d(`workbench`, -7, -4, 4, 1.3),
      u(`toolboard`, -7, -4.5, 4, 1.15, 0.12, `metalDark`, 0.95));
    for (let e = 0; e < 4; e++)
      (u(
        `tool-handle-` + e,
        -8.2 + e * 0.8,
        -4.37,
        0.12,
        0.5,
        0.12,
        `metal`,
        1.2,
      ),
        u(
          `tool-head-` + e,
          -8.2 + e * 0.8,
          -4.37,
          0.35,
          0.12,
          0.12,
          `metal`,
          1.65,
        ));
    u(`vise-base`, -5.8, -3.8, 0.55, 0.15, 0.42, `metal`, 0.94);
    for (let e of [-1, 1])
      u(
        `vise-jaw-` + e,
        -5.8 + e * 0.18,
        -3.8,
        0.12,
        0.24,
        0.42,
        `metalDark`,
        1.09,
      );
    (u(`cabinet`, -8, 4, 2, 1.7, 0.9, `metal`),
      u(`parts-crate`, 3, -3.7, 2, 1.15, 1.8, `timber`),
      u(`pallet`, 3, 3.7, 2.6, 0.18, 1.7, `timberDark`),
      u(`cargo`, 3, 3.7, 1.9, 0.85, 1.3, `timber`, 0.18));
  } else if (c === `market`) {
    (f(`stock`, -7, -7),
      f(`stock-rear`, -7, 6.8),
      u(`checkout`, 3, -3.7, 3, 1.05, 1.1, `timber`),
      u(`display`, 3, 3.8, 2.8, 0.9, 1.4, `timberDark`));
    for (let e of [-1, 1])
      u(
        `goods-` + e,
        3 + e * 0.7,
        3.8,
        0.55,
        0.35,
        0.7,
        e < 0 ? `amber` : `cobalt`,
        0.9,
      );
  } else if (c === `apartment`)
    (u(`bed-base`, -7, -4, 2.1, 0.3, 3.5, `timberDark`),
      u(`mattress`, -7, -4, 2, 0.28, 3.4, `plaster`, 0.3),
      u(`pillow`, -7, -5.1, 1.6, 0.15, 0.65, `plasterRed`, 0.58),
      u(`wardrobe`, -8, 4, 2, 2.2, 0.9, `timber`),
      u(`sofa-seat`, 3, 3.7, 3.1, 0.46, 1.1, `cobalt`),
      u(`sofa-back`, 3, 4.2, 3.1, 0.6, 0.22, `cobalt`, 0.46),
      d(`dining`, 3, -3.7, 2.4, 1.2));
  else if (c === `archive`) {
    for (let e of [-5, 5]) f(`files-` + e, -7, e);
    (u(`filing-cabinet`, 3, -3.7, 2.6, 1.25, 0.85, `metal`),
      d(`sorting`, 3, 3.7));
  } else {
    for (let e of [-4, 4])
      (d(`desk-` + e, -7, e),
        u(`monitor-` + e, -7, e - 0.3, 0.8, 0.48, 0.12, `metalDark`, 0.94),
        u(`chair-seat-` + e, -7, e + 1.2, 0.6, 0.12, 0.6, `metalDark`, 0.45),
        u(`chair-base-` + e, -7, e + 1.2, 0.35, 0.45, 0.35, `metalDark`));
    (u(`files`, 3, -3.7, 2.6, 1.2, 0.85, `metal`),
      d(`meeting`, 3, 3.7, 3.2, 1.4));
  }
  return {
    use: c,
    floor: o,
    y: r,
    route: [
      [7.7, 0],
      [0, 0],
      [0, -7.5],
      [0, 0],
      [-7, 0],
      [0, 0],
      [0, 7.5],
      [0, 0],
      [7.7, 0],
      [7.7, -7.7],
      [7.7, 0],
      [7.7, 7.7],
      [7.7, 0],
    ].map(([e, t]) => [n + s * e, r, i + s * t]),
  };
}
var o = new Set([4, 5, 8, 9, 12, 13, 18, 25]);
function s(e, t, n) {
  let { id: r, x: i, y: a, z: o, floors: s } = t,
    c = t.mirror ?? 1,
    l = a + s * 3.2 + 0.07,
    u = s % 2 ? -7 : 7,
    d = o + c * u,
    f =
      n === 18
        ? `workshop service deck`
        : n === 25
          ? `relay maintenance roof`
          : [
              `workshop service deck`,
              `market terrace`,
              `relay maintenance roof`,
            ][Math.floor(n / 4) - 1],
    p = (t, n, a, s, u, d, f = `concreteDark`, p = 0, m = !0) =>
      e(r + `-roof-` + t, i + c * n, l + p, o + c * a, s, u, d, f, m);
  e(r + `-roof-landing`, i + c * 13.9, l - 0.25, d, 6.2, 0.18, 3, `concrete`);
  for (let e of [-1, 1]) {
    p(`parapet-` + e, 0, e * 9, 22, 1.02, 0.35);
    let t = s % 2 ? 1.4 : -1.4;
    e === 1 && p(`east-parapet`, 10.95, t, 0.35, 1.02, 14.4);
  }
  if (
    (p(`west-parapet`, -10.95, 0, 0.35, 1.02, 18),
    p(`arrival-screen`, 5.2, u, 3.2, 1.45, 0.45),
    f === `workshop service deck`)
  ) {
    (p(`water-tank-base`, -7, 4, 3, 1.8, 2.8, `metal`),
      p(`tank-cap`, -7, 4, 3.2, 0.18, 3, `metalDark`, 1.8));
    for (let e of [-1, 1])
      p(`duct-` + e, -3 + e * 1.5, -4, 2.6, 0.75, 1.5, `metal`);
  } else if (f === `market terrace`) {
    for (let e of [-8, -3])
      (p(`planter-` + e, e, 4, 2.7, 0.85, 1.5, `plasterRed`),
        p(`planter-green-` + e, e, 4, 2.3, 0.4, 1.1, `orchard`, 0.85, !1));
    p(`shade`, -5, 4, 8, 0.15, 4, `timber`, 2.5, !1);
    for (let e of [-8.5, -1.5])
      for (let t of [2.4, 5.6])
        p(`shade-post-` + e + `-` + t, e, t, 0.16, 2.5, 0.16, `metalDark`);
  } else {
    (p(`equipment`, -7, 4, 3.4, 1.7, 2.6, `metal`),
      p(`mast-base`, -7, 4, 0.8, 0.5, 0.8, `concrete`, 1.7),
      p(`mast`, -7, 4, 0.16, 6, 0.16, `metalDark`, 2.2, !1));
    for (let e = 0; e < 3; e++)
      p(`antenna-` + e, -7, 4, 2.8 - e * 0.5, 0.1, 0.12, `metal`, 5 + e, !1);
  }
  t.roof = {
    use: f,
    y: l,
    entry: [i + c * 13.9, l, d],
    route: [
      [13.9, u],
      [8, u],
      [8, 0],
      [0, 0],
      [0, -7.4],
      [0, 0],
      [0, 7.4],
      [0, 0],
      [8, 0],
      [8, u],
      [13.9, u],
    ].map(([e, t]) => [i + c * e, l, o + c * t]),
    counterplay: `Open external switchbacks and north/south windows expose approaches; arrival cover can be flanked from both roof edges.`,
  };
}
var c = new Set([4, 5, 8, 9, 12, 13]);
function l(e, t, n, r, i) {
  let { id: a, x: o, z: s, y: c } = n,
    l = s < 0 ? 1 : -1,
    u = [`workshop yard`, `market court`, `office garden`][r % 3],
    d = (t, n, r, c, u, d, f, { solid: p = !0, cap: m = !1 } = {}) => {
      let h = o + n,
        g = s + r * l,
        _ = [-1, 1].flatMap((e) =>
          [-1, 1].map((t) => i(h + (e * c) / 2, g + (t * d) / 2)),
        ),
        v = Math.min(..._) - 0.08,
        y = Math.max(..._) + u,
        b = a + `-frontage-` + t;
      return (
        e(b, h, v, g, c, y - v, d, f, p),
        m &&
          e(b + `-cap`, h, y, g, c + 0.08, 0.08, d + 0.08, `concreteDark`, !1),
        { id: b, x: h, z: g, base: v, top: y }
      );
    },
    f = [];
  for (let e of [-1, 1])
    f.push(
      d(`gate-` + e, e * 5.5, 21, 7.4, 1.15, 0.48, `plaster`, { cap: !0 }),
    );
  if (
    (f.push(d(`approach`, -4, 31, 5.2, 1.15, 0.48, `concrete`, { cap: !0 })),
    f.push(d(`east-return`, 9.7, 16, 0.48, 1.15, 5.5, `plaster`, { cap: !0 })),
    u === `workshop yard`)
  )
    (d(`parts-bin`, -6, 15, 3.7, 1.2, 1.9, `metal`),
      d(`pallet-stack`, 6, 16, 2.4, 0.75, 1.8, `timberDark`));
  else if (u === `market court`) {
    d(`stall-counter`, -6, 15, 4.2, 1.02, 1.5, `timber`);
    for (let e of [-1, 1])
      d(`produce-` + e, 5 + e * 0.7, 16, 1.15, 0.75, 1.2, `crate`);
  } else {
    d(`planter`, -6, 15, 4.2, 0.9, 1.6, `concreteDark`);
    let e = d(`planting`, -6, 15, 3.7, 1.3, 1.25, `orchard`, { solid: !1 }),
      n = t.objects.at(-1);
    ((n.y = e.top - 0.45),
      (n.sy = 0.45),
      d(`bench`, 6, 16, 3.4, 0.48, 0.65, `timber`));
  }
  let p =
      Math.max(
        ...[-8.5, -3.5].flatMap((e) =>
          [12.5, 17.5].map((t) => i(o + e, s + t * l)),
        ),
      ) + 2.9,
    m = a + `-frontage-canopy`;
  e(
    m,
    o - 6,
    p,
    s + 15 * l,
    6.4,
    0.18,
    6.4,
    u === `market court` ? `roofRed` : `metalDark`,
  );
  for (let t of [-8.8, -3.2])
    for (let n of [12.2, 17.8]) {
      let r = i(o + t, s + n * l) - 0.08;
      e(
        a + `-frontage-post-` + t + `-` + n,
        o + t,
        r,
        s + n * l,
        0.16,
        p - r,
        0.16,
        `metalDark`,
      );
    }
  let h = (e, t) => [o + e, i(o + e, s + t * l), s + t * l];
  n.frontage = {
    use: u,
    toward: l,
    walls: f,
    roofId: m,
    approach: [
      h(0, 34),
      h(0, 24),
      h(0, 19),
      h(0, 11),
      [o, c, s + 8 * l],
      [o, c, s],
    ],
    flank: [
      h(-10.6, 24),
      h(-10.6, 11),
      h(0, 11),
      [o, c, s + 8 * l],
      [o, c, s],
      [o + 7.7, c, s],
    ],
    sheltered: h(-6, 12.9),
    counterplay: `Low street walls can be breached; the central gate and west flank lead into the through-room and external stairs. The canopy shelters one side from roof fire, not the whole approach.`,
  };
}
var u = [
    ...[-132, -98, -64, -30, 4, 38, 72, 106, 140].flatMap((e, t) =>
      [-76, 76].map((n, r) => ({ x: e, z: n, floors: 2 + ((t + r) % 4) })),
    ),
    ...[-244, -204, 204, 244].flatMap((e, t) =>
      [-80, 88].map((n, r) => ({ x: e, z: n, floors: 2 + ((t + r) % 3) })),
    ),
  ],
  d = (e, t) => e.frontage ?? c.has(t),
  f = (e, t) => e.roof ?? o.has(t);
