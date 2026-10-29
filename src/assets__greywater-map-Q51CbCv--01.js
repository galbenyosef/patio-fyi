// assets__greywater-map-Q51CbCv- 01 — math
// Lines 1-306 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { a as t, n, r, t as i } from "./greywater-nests-5ECPKgjn.js";
import { n as a, t as o } from "./helipad-kit-DK8Pj1KR.js";
import { f as s, o as c, p as l, s as u } from "./combat-tuning-B4WclXDv.js";
import { n as d, r as f, t as p } from "./streetlife-KYkvhSFp.js";
import { t as m } from "./prop-collision-BF7s3ofu.js";
import { t as h } from "./lab-footprints-Bots4mYb.js";
import {
  a as g,
  i as _,
  n as v,
  o as y,
  r as b,
  t as x,
} from "./lab-city-DCFvouWE.js";
import { t as S } from "./round-collider-CyTIuJfx.js";
import { a as C, i as w, n as T, t as E } from "./greywater-centre-hZuxA5K7.js";
import {
  a as D,
  i as ee,
  o as O,
  r as te,
  s as k,
  t as ne,
} from "./lab-doors-BzTQZbnf.js";
import { t as A } from "./setpiece-ladders-BjER_Jg5.js";
var j = [-102, 0, 102],
  M = [-140, 140],
  N = 6,
  re = 10.5,
  ie = 7.6,
  P = [6.3, 8.1],
  ae = 7.2,
  F = (e, t) => {
    let n = Math.imul((e * 73856093) ^ (t * 19349663), 2654435761) >>> 0;
    return (
      (n ^= n >>> 15),
      (n = Math.imul(n, 2246822519) >>> 0),
      (n ^= n >>> 13),
      (n >>> 0) / 4294967296
    );
  };
function oe(e) {
  let t = (e, t, n) => {
      let r = [];
      for (let i of [...e]
        .filter(t)
        .sort((e, t) => t[3] - e[3] || e[0] - t[0] || e[1] - t[1]))
        r.some((e) => Math.hypot(e[0] - i[0], e[1] - i[1]) < n) || r.push(i);
      let i = new Set(r);
      return e.filter((e) => !t(e) || i.has(e));
    },
    n = t(e, ([e, t]) => Math.abs(e) < 134 && Math.abs(t) < 96, 30);
  return Object.freeze(
    t(n, ([e, t]) => Math.abs(e) < 158 && Math.abs(t) < 124, 62),
  );
}
var se = (e, t, [n, r], [i, a]) => {
  let o = i - n,
    s = a - r,
    c = Math.max(
      0,
      Math.min(1, ((e - n) * o + (t - r) * s) / (o * o + s * s || 1)),
    );
  return Math.hypot(e - n - o * c, t - r - s * c);
};
function ce(e, t) {
  let n = e.objects,
    r = e.colliderDefs,
    i = (e, r, i, a, o, s, c, l) =>
      n.push({
        id: e,
        kind: `box`,
        x: r,
        y: t(r, i) + l,
        z: i,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !1,
      }),
    a = Object.values(e.routes ?? {}),
    o = (e, t, n) =>
      a.some((r) => r.some((i, a) => a && se(e, t, r[a - 1], i) < n)),
    s = (e.objectives ?? []).map((e) => [e.pos[0], e.pos[2]]),
    c = n.filter(
      (e) =>
        !/^(avenue|cross|district-tree|combat-)/.test(e.id) &&
        e.kind !== `canopy` &&
        e.sx < 40 &&
        e.sz < 40,
    ),
    l = r.filter(
      (e) =>
        e.aabb &&
        !/^(forest-trunk-|town-bed-|demo-avenue|demo-cross)/.test(e.id),
    ),
    u = n
      .filter((e) => /^(district-tree-\d+-trunk|combat-tree-\d+)$/.test(e.id))
      .map((e) => [e.x, e.z]),
    d = (e.buildings ?? []).map((e) => [
      e.x - e.w / 2,
      e.z - e.d / 2,
      e.x + e.w / 2,
      e.z + e.d / 2,
    ]),
    f = (e, t, n) => [e - n, t - n, e + n, t + n],
    p = (e, t) => e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1],
    m = (e, t, [n, r, i, a]) =>
      Math.hypot(Math.max(n - e, 0, e - i), Math.max(r - t, 0, t - a));
  function g(e, n, r = 1.2) {
    let i = f(e, n, r),
      a = t(e, n);
    return c.some((e) =>
      p(i, [e.x - e.sx / 2, e.z - e.sz / 2, e.x + e.sx / 2, e.z + e.sz / 2]),
    ) ||
      l.some(
        (e) =>
          e.aabb[1] < a + 3 &&
          p(i, [e.aabb[0], e.aabb[2], e.aabb[3], e.aabb[5]]),
      ) ||
      d.some((e) => p(i, e))
      ? !1
      : !u.some(([t, r]) => Math.hypot(t - e, r - n) < 7);
  }
  let _ = (e.labBuildings ?? []).map((e) => {
      let t = h[e.key],
        n = t?.tiers?.[0] ?? [t?.W ?? 0, t?.D ?? 0, 0, 0, 0],
        r = Math.round(Math.sin(e.rotY)),
        i = Math.round(Math.cos(e.rotY)),
        a = n[4] + n[1] / 2,
        o = Math.cos(e.rotY),
        s = -Math.sin(e.rotY);
      return {
        fx: r,
        fz: i,
        line: i ? e.z + i * a : e.x + r * a,
        runs: (ne[e.key] ?? []).map(([t, n]) =>
          (i ? [e.x + t * o, e.x + n * o] : [e.z + t * s, e.z + n * s]).sort(
            (e, t) => e - t,
          ),
        ),
      };
    }),
    v = 0;
  function y(e, i, a) {
    let o = t(e, i),
      s = `district-tree-${200 + v++}`;
    (n.push({
      id: s + `-trunk`,
      kind: `cylinder`,
      x: e,
      y: o,
      z: i,
      sx: 0.22,
      sy: 4.8,
      sz: 0.22,
      material: `timberDark`,
      cast: !0,
    }),
      r.push({
        id: `demo-${s}-trunk`,
        aabb: [e - 0.22, o, i - 0.22, e + 0.22, o + 4.8, i + 0.22],
        surface: `wood`,
      }),
      n.push({
        id: s + `-crown`,
        kind: `canopy`,
        x: e,
        y: o + 3.8,
        z: i,
        sx: a,
        sy: a * 0.85,
        sz: a,
        material: `orchard`,
        cast: !0,
      }),
      u.push([e, i]));
  }
  function b(e, t, n, r, i, a, c) {
    let l = (r) => (e === `x` ? [r, t + n * a] : [t + n * a, r]),
      u = _.filter(
        (r) =>
          (e === `x` ? r.fz === -n && !r.fx : r.fx === -n && !r.fz) &&
          Math.abs(r.line - (t + n * re)) < 12,
      ).flatMap((e) => e.runs),
      f = (e) => {
        if (e < r || e > i || u.some(([t, n]) => e > t - 0.9 && e < n + 0.9))
          return !1;
        let [t, n] = l(e);
        return (
          g(t, n) &&
          !o(t, n, 3.5) &&
          !s.some(([e, r]) => Math.hypot(e - t, r - n) < 15) &&
          !(Math.abs(n) < 20 && Math.abs(t) < 40)
        );
      },
      p = r + F(c, 1) * 3,
      h = 0;
    for (; p <= i;) {
      let e = null;
      for (let t = 0; t <= 2.5 && e === null; t += 0.25)
        e = f(p + t) ? p + t : f(p - t) ? p - t : null;
      if (e === null) {
        p += 1.5;
        continue;
      }
      let [t, n] = l(e),
        r = F(c, 10 + h++);
      if (((p = e + 52 + F(c, 50 + h) * 16), r < 0.07)) continue;
      let i = Math.min(...d.map((e) => m(t, n, e)), 99),
        a = Math.min(r > 0.88 ? 4.2 : 5.6 + F(c, 90 + h) * 0.9, 2 * (i - 0.3));
      a >= 3.6 && y(t, n, +a.toFixed(2));
    }
  }
  (j.forEach((e, t) => {
    for (let n of [-1, 1]) {
      let r = Math.abs(e + n * 7) < 97 ? 129 : 141;
      b(`x`, e, n, -r, r, ie, 11 + t * 7 + (n > 0 ? 3 : 0));
    }
  }),
    M.forEach((e, t) =>
      [-51, 51].forEach((n, r) =>
        [-1, 1].forEach((a) => {
          let o = e + (a * (P[0] + P[1])) / 2;
          (i(
            `cross-strip-${e}-${n}-${a}`,
            o,
            n,
            P[1] - P[0],
            0.03,
            70,
            `orchard`,
            0.02,
          ),
            b(
              `z`,
              e,
              a,
              n - 33,
              n + 33,
              ae,
              101 + t * 13 + r * 5 + (a > 0 ? 2 : 0),
            ));
        }),
      ),
    ));
  let x = (e, t, n, r, a) => i(e, t, n, r, 0.008, a, `plaster`, 0.035);
  for (let e of M) {
    let t = -Math.sign(e);
    for (let n of j)
      for (let r of [-1, 1]) {
        let a = n + r * 8.4;
        if (Math.abs(a) > 96) continue;
        for (let t = e - N + 0.6; t < e + N - 0.4; t += 1.1)
          x(`cross-zebra-${e}-${n}-${r}-${t.toFixed(1)}`, t + 0.25, a, 0.5, 4);
        let o = -r > 0 ? [e - N + 0.4, e] : [e, e + N - 0.4];
        x(
          `cross-stop-${e}-${n}-${r}`,
          (o[0] + o[1]) / 2,
          a + r * 3.4,
          o[1] - o[0],
          0.4,
        );
        let s = n + r * re,
          c = n + r * 12,
          l = e + t * 8.25;
        (i(
          `cross-walk-corner-${e}-${n}-${r}`,
          l,
          (s + c) / 2,
          4.5,
          0.03,
          Math.abs(c - s),
          `pavement`,
          0.012,
        ),
          i(
            `cross-kerb-corner-${e}-${n}-${r}`,
            e + t * 6.15,
            n + r * 9,
            0.3,
            0.05,
            6,
            `concreteDark`,
            0.012,
          ));
      }
    for (let n of j) {
      let r = e + t * 8.4;
      for (let t = n - N + 0.6; t < n + N - 0.4; t += 1.1)
        x(`avenue-zebra-${e}-${n}-${t.toFixed(1)}`, r, t + 0.25, 4, 0.5);
      let i = -t > 0 ? [n, n + N - 0.4] : [n - N + 0.4, n];
      x(
        `avenue-stop-${e}-${n}`,
        r + t * 3.4,
        (i[0] + i[1]) / 2,
        0.4,
        i[1] - i[0],
      );
    }
  }
  return e;
}
