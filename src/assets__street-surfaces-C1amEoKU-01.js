// assets__street-surfaces-C1amEoKU 01 — gutter
// Lines 1-52 of readable/assets__street-surfaces-C1amEoKU.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Bt as e, F as t, v as n } from "./graphics-quality-CrL3qbU3.js";
import { n as r } from "./town-beds-C6HTLOgG.js";
import { i, n as a, t as o } from "./ground-textures-Chd0kE89.js";
var s = {
  asphalt: `asphalt`,
  walk: `pavers`,
  kerb: `kerbStone`,
  gutter: `setts`,
  median: `lawn`,
  strip: `lawn`,
};
function c(c, l) {
  let u = new t(1, 1, 1),
    d = { asphalt: [], walk: [], kerb: [], gutter: [], median: [], strip: [] },
    f = c.filter((e) => r(e.id) === `asphalt`),
    p = (e, t, n, r = 0) =>
      Math.abs(t - e.x) <= e.sx / 2 + r && Math.abs(n - e.z) <= e.sz / 2 + r;
  for (let e of c) {
    let n = r(e.id);
    if (
      !n ||
      (d[n].push(u.clone().applyMatrix4(l(e))),
      n !== `kerb` || /-median-/.test(e.id))
    )
      continue;
    let i = f.find((t) => p(t, e.x, e.z, 1.2));
    if (!i) continue;
    let a = e.sx > e.sz,
      o = Math.sign(a ? i.z - e.z : i.x - e.x),
      s = (a ? e.sz : e.sx) / 2,
      c = i.y + i.sy + 0.012,
      m = (a ? e.z : e.x) + o * (s + 0.25);
    d.gutter.push(
      a
        ? new t(e.sx, 0.01, 0.5).translate(e.x, c - 0.005, m)
        : new t(0.5, 0.01, e.sz).translate(m, c - 0.005, e.z),
    );
  }
  let m = [];
  for (let [t, r] of Object.entries(d)) {
    if (!r.length) continue;
    let c = i(n(r, !1), o[s[t]].scale);
    for (let e of r) e.dispose();
    let l = new e(c, a(s[t]));
    ((l.name = `street-surface-${t}`),
      (l.receiveShadow = !0),
      (l.castShadow = !1),
      m.push(l));
  }
  return (u.dispose(), m);
}
