// assets__greywater-map-CJ8kbtVA 22 — math
// Lines 174172-174294 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
var At = {
    building: `urban-4`,
    tower: `tower-1`,
    bounds: [-90, -112, -12, -20],
  },
  Z = (e, t, n = 0.02) => Math.abs(e - t) < n;
function jt(e) {
  if (!e.compact || e.lightingSlice) return;
  let t = e.urbanBuildings.find((e) => e.id === At.building),
    n = e.highrises.find((e) => e.id === At.tower);
  if (!t || !n) return;
  let r = new Set(),
    i = new Set(),
    a = [],
    o = [],
    s = (t) =>
      e.lights.forEach((e) => {
        t(e) && r.add(e);
      }),
    c = (e, t, n, r, i, o = 0, s = null) => {
      let c = { id: e, model: t, x: n, y: r, z: i, yaw: o, lightGroup: s };
      return (a.push(c), c);
    };
  for (let n of e.props) {
    if (
      (n.model === `cp_light` &&
        (i.add(n),
        c(n.id, `fixture_street`, n.x, n.y, n.z, n.yaw),
        s(
          (e) =>
            Z(e.x, n.x) &&
            Z(e.z, n.z) &&
            (e.kind === `pool` || (e.y > n.y + 5 && e.y < n.y + 6)),
        ),
        o.push({
          pos: [
            n.x + Math.cos(n.yaw) * 0.8,
            n.y + 5.25,
            n.z - Math.sin(n.yaw) * 0.8,
          ],
          intensity: 24,
          distance: 8,
        })),
      n.id?.startsWith(`sconce-${t.id}-`) ||
        n.id?.startsWith(`stairlight-${t.id}-`))
    ) {
      i.add(n);
      let e = Number(n.id.match(/-f(\d+)$/)?.[1]),
        r = Number.isFinite(e) ? `${t.id}-f${e}` : null;
      (c(n.id, `fixture_sconce`, n.x, n.y, n.z, n.yaw, r),
        s(
          (e) =>
            e.kind === `quad` &&
            e.w < 0.35 &&
            Math.hypot(e.x - n.x, e.z - n.z) < 0.5 &&
            Math.abs(e.y - n.y) < 0.5,
        ),
        r && s((e) => e.kind === `pool` && e.group === r),
        o.push({
          pos: [
            n.x + Math.sin(n.yaw) * 0.27,
            n.y + 0.07,
            n.z + Math.cos(n.yaw) * 0.27,
          ],
          intensity: 2.5,
          distance: 2.4,
          group: r,
        }));
    }
    (n.id?.startsWith(`roof-string-${t.id}-`) ||
      n.id?.startsWith(`roof-pole-${t.id}-`)) &&
      i.add(n);
  }
  let l = t.y + t.floors * 3.2 + 0.1;
  ((e.objects = e.objects.filter(
    (e) => !e.id?.startsWith(`roof-string-${t.id}-`),
  )),
    s(
      (e) =>
        e.kind === `quad` &&
        e.y > l + 1.8 &&
        e.y < l + 2.6 &&
        Math.abs(e.x - t.x) < 9.2 &&
        Math.abs(e.z - t.z) < 7.2,
    ),
    s(
      (e) =>
        e.kind === `pool` &&
        ((Z(e.x, t.x) && Z(Math.abs(e.z - t.z), 7)) ||
          (Z(e.z, t.z) && Z(Math.abs(e.x - t.x), 9))),
    ),
    c(`review-roof-festoon`, `fixture_festoon`, t.x, l, t.z));
  for (let e of [-6, 6])
    o.push({ pos: [t.x + e, l + 2, t.z - 7], intensity: 2.5, distance: 4 });
  let u = e.highrises.indexOf(n);
  for (let t of e.props) t.id === `beacon-mast-${u}` && i.add(t);
  s(
    (e) =>
      e.mode === `beacon` &&
      Math.abs(e.x - n.x) <= n.width / 2 &&
      Math.abs(e.z - n.z) <= n.depth / 2 &&
      e.y >= n.roof &&
      e.y < n.roof + 4,
  );
  for (let [e, [t, r]] of [
    [-n.width / 2 + 0.2, -n.depth / 2 + 0.2],
    [n.width / 2 - 0.2, -n.depth / 2 + 0.2],
    [-n.width / 2 + 0.2, n.depth / 2 - 0.2],
    [n.width / 2 - 0.2, n.depth / 2 - 0.2],
  ].entries())
    c(`review-beacon-${e}`, `fixture_beacon`, n.x + t, n.roof + 1.05, n.z + r);
  e.props = e.props.filter((e) => !i.has(e)).concat(a);
  let d = new Set([...i].map((e) => `demo-` + e.id)),
    f = new Set(a.map((e) => `demo-` + e.id));
  ((e.colliderDefs = e.colliderDefs.filter((e) => !d.has(e.id) || f.has(e.id))),
    (e.lights = e.lights.filter((e) => !r.has(e))),
    (e.fixtureSpills = o),
    (e.lightingSlice = {
      ...At,
      fixtures: a.length,
      removedGlowRecords: r.size,
    }));
}
