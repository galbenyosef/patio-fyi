// assets__greywater-nests-5ECPKgjn 02 — aabb
// Lines 1866-1990 of readable/assets__greywater-nests-5ECPKgjn.pretty.js (statement-aligned).
function o(e, t) {
  let [r, o] = a(e.q, t[0], t[2]),
    [s, c] = a(e.q, t[3], t[5]);
  return [
    e.x + Math.min(r, s),
    n + t[1],
    e.z + Math.min(o, c),
    e.x + Math.max(r, s),
    n + t[4],
    e.z + Math.max(o, c),
  ].map(i);
}
function s(t, n = 0) {
  let r = o(t, e[t.key].bounds);
  return [r[0] - n, r[2] - n, r[3] + n, r[5] + n];
}
var c = (e, t) => Math.max(e[0] - t[2], t[0] - e[2], e[1] - t[3], t[1] - e[3]),
  l = t.map((e) => s(e, 0.5));
function u(e) {
  return l.some((t) => c(e, t) < 0.5);
}
function d(c) {
  let l = [];
  ((c.noSpawn ??= []),
    (c.nests = []),
    (c.ladders = (c.ladders ?? []).filter((e) => !e.nest)),
    (c.lindenFences ??= { panels: [] }));
  let u = c.lindenFences.panels;
  for (let d of t) {
    let t = e[d.key];
    if (!t) continue;
    let f = s(d, 0.6),
      p = (e, t) => e > f[0] && e < f[2] && t > f[1] && t < f[3],
      m = (e) =>
        /^(avenue|cross)-/.test(String(e).replace(/^demo-/, ``)) ||
        /^(rail-|plaza-)/.test(String(e));
    ((c.objects = c.objects.filter(
      (e) =>
        m(e.id) ||
        e.labPanel ||
        (e.kind !== `box` && e.kind !== `cylinder` && e.kind !== `canopy`) ||
        e.sx > 40 ||
        e.sz > 40 ||
        !p(e.x, e.z),
    )),
      (c.colliderDefs = c.colliderDefs.filter(
        (e) =>
          !e.aabb ||
          m(e.id) ||
          /-lab-\d/.test(e.id) ||
          e.aabb[3] - e.aabb[0] > 40 ||
          e.aabb[5] - e.aabb[2] > 40 ||
          !p((e.aabb[0] + e.aabb[3]) / 2, (e.aabb[2] + e.aabb[5]) / 2),
      )),
      (c.props = (c.props ?? []).filter((e) => !p(e.x, e.z))),
      (c.signs = (c.signs ?? []).filter((e) => !p(e.x, e.z))));
    for (let e of [`lights`, `fixtureSpills`, `shelters`])
      Array.isArray(c[e]) &&
        (c[e] = c[e].filter((e) => {
          let t = Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z];
          return !p(t[0], t[1]);
        }));
    t.colliders.forEach((e, t) => {
      e.panel ||
        l.push({
          id: `nest-${d.id}-c${t}`,
          aabb: o(d, e.aabb),
          surface: e.surface,
        });
    });
    for (let e of t.panels) {
      let n = `nest-${d.id}-${e.id}`,
        i = (e.parts ?? [e.aabb]).map((e) => o(d, e)),
        a = t.colliders.find((t) => t.panel === e.id)?.surface ?? `concrete`;
      (i.forEach((e, t) =>
        l.push({
          id: i.length > 1 ? `demo-${n}-${t}` : `demo-${n}`,
          aabb: e,
          surface: a,
          ...(a === `glass` ? { pen: `armor` } : {}),
        }),
      ),
        u.push({
          id: n,
          key: `nest`,
          box: o(d, e.aabb),
          ...(i.length > 1 ? { parts: i } : {}),
          hp: r[e.material] ?? 8,
          nest: d.id,
          panel: e.id,
        }));
    }
    for (let e of t.ladders ?? []) {
      let [t, r] = a(d.q, e.x, e.z);
      c.ladders.push({
        nest: d.id,
        x: i(d.x + t),
        z: i(d.z + r),
        y0: i(n + e.y0),
        y1: i(n + e.y1),
        facing: i(e.facing + (d.q * Math.PI) / 2),
      });
    }
    (c.noSpawn.push(s(d, 0.5)),
      c.nests.push({
        key: d.key,
        id: d.id,
        x: d.x,
        y: n,
        z: d.z,
        rotY: (d.q * Math.PI) / 2,
        perches: t.perches.map((e) => {
          let [t, r] = a(d.q, e.x, e.z);
          return {
            x: i(d.x + t),
            y: i(n + e.y),
            z: i(d.z + r),
            yaw: i(e.yaw + (d.q * Math.PI) / 2),
            stance: e.stance,
          };
        }),
      }));
  }
  return (c.colliderDefs.push(...l), c);
}
