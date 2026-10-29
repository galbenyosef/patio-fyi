/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = (e) => (Math.abs(e) > 43 ? e + Math.sign(e) * 44 : e),
  t = (e) => {
    let t = Math.abs(e),
      n = Math.sign(e);
    return t <= 37
      ? e
      : t <= 58
        ? n * (37 + (t - 37) * 3.0952380952380953)
        : e + n * 44;
  },
  n = (t, n) => [e(t), e(n)],
  r = (e) => (([e[0], e[2]] = n(e[0], e[2])), e),
  i = (e) => (([e[0], e[3]] = n(e[0], e[3])), e),
  a = (t, n = 0) => ((t[n] = e(t[n])), t),
  o = (t) => t.map(([t, ...n]) => [e(t), ...n]),
  s = (e) => ({
    ...e,
    platforms: e.platforms.map((e) => ({ ...e, bounds: r(e.bounds.slice()) })),
  });
function c(o) {
  let s = o.bascule,
    c = [];
  for (let e of o.colliderDefs) {
    let t = e.aabb;
    if (e.pen === `bars` && t)
      for (let n of [-1, 1]) {
        let r = n < 0 ? t[0] : -t[3],
          i = n < 0 ? t[3] : -t[0];
        if (!(r < -43 && i > -43)) continue;
        let a = e.shotBoxes.find((e) => e[3] - e[0] < 0.1 && e[5] - e[2] < 0.1),
          s = e.id.replace(/^demo-/, ``),
          l =
            o.objects.find((e) => e.id.startsWith(s + `-post-`))?.material ??
            `ironBlack`;
        a && c.push({ c: e, s: n, post: a, id: s, mat: l });
      }
  }
  for (let t of o.objects)
    if (t.kind === `box` && !t.ry && !t.rotZ && !t.rotX) {
      let [e, r] = n(t.x - t.sx / 2, t.x + t.sx / 2);
      ((t.x = (e + r) / 2), (t.sx = r - e));
    } else t.x = e(t.x);
  for (let t of o.colliderDefs) {
    if ((t.aabb && i(t.aabb), t.shotBoxes)) for (let e of t.shotBoxes) i(e);
    t.obb && (t.obb.x = e(t.obb.x));
  }
  for (let { c: e, s: t, post: n, id: r, mat: i } of c) {
    let a = (n[2] + n[5]) / 2,
      s = n[1],
      c = n[4];
    for (let n = 0, l = 1.6; l < 44; l += 1.6, n++) {
      let u = t * (43 + l),
        d = [u - 0.035, s, a - 0.035, u + 0.035, c, a + 0.035];
      (e.shotBoxes.push(d),
        o.objects.push({
          id: `${r}-post-ext-${n}`,
          kind: `box`,
          x: u,
          y: s,
          z: a,
          sx: 0.07,
          sy: c - s,
          sz: 0.07,
          material: i,
          cast: !1,
        }));
    }
  }
  for (let t of s.flights) ((t[2] = e(t[2])), (t[3] = e(t[3])));
  for (let e of s.slabs) i(e);
  for (let t of o.lights) t.x = e(t.x);
  for (let e of o.fixtureSpills) a(e.pos);
  for (let t of o.signs) t.x = e(t.x);
  for (let e of o.buildings) {
    let [t, r] = n(e.x - e.w / 2, e.x + e.w / 2);
    ((e.x = (t + r) / 2), (e.w = r - t));
  }
  for (let e of s.chains) e.pts = e.pts.map(([e, ...n]) => [t(e), ...n]);
  for (let t of s.barriers) t.x = e(t.x);
  for (let e of s.glows) a(e);
  for (let e of s.signals ?? []) a(e);
  for (let e of s.trees ?? []) a(e);
  for (let e of s.engineHouses) a(e.chimney);
  for (let t of s.cars) t.x = e(t.x);
  for (let t of o.props ?? []) t.x = e(t.x);
  for (let e of s.spawnFloors) r(e);
  for (let e of o.noSpawn) r(e);
  for (let e of [`playBounds`, `viewBounds`, `spawnBounds`]) r(o[e]);
  for (let e of o.scatterExclude) r(e);
  for (let e of o.homeBases) a(e.pos);
  let l = o.floorNav;
  for (let e of l.levels) {
    r(e.bounds);
    for (let t of e.floors) r(t);
  }
  for (let e of l.links) for (let t of e.pts) a(t);
  return ((s.quay = 102), (s.ext = 44), o);
}
function l(e) {
  for (let t of e) {
    let [e, r] = n(t.x - t.w / 2, t.x + t.w / 2);
    ((t.x = (e + r) / 2), (t.w = r - e));
  }
  return e;
}
export { e as a, s as i, l as n, o as r, c as t };
//# sourceMappingURL=bascule-length-_yBxttEI.js.map
