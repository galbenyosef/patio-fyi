// assets__greywater-map-CJ8kbtVA 20 — model
// Lines 173672-173748 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
var xt = new Set([`cityprops`, `maha`]),
  St = /^(mh_parklight|cp_busstop|cp_utility)/,
  Ct = new Set([
    `cp_meter`,
    `cp_hydrant`,
    `mh_coffeetable`,
    `cp_manhole`,
    `mh_bin1`,
    `cp_trash_small`,
    `cp_postbox`,
    `mh_post2`,
    `mh_bench1`,
    `mh_bin3`,
    `mh_bin4`,
  ]),
  wt = (e) =>
    [...e].reduce((e, t) => (Math.imul(e, 31) + t.charCodeAt(0)) >>> 0, 0),
  Tt = new Set([`cp_bench_long`, `cp_bench_short`, `mh_signal1`, `mh_signal2`]);
function Et(e) {
  let t = [];
  for (let t of e.props)
    if (t.model === `mh_walllight`) {
      t.model = `fixture_sconce`;
      let e = t.id.match(/^stairlight-(.+-f\d+)$/);
      e && (t.lightGroup = e[1]);
    }
  e.props = e.props.filter((e) => {
    let n =
        e.model.startsWith(`interior_`) ||
        e.id.startsWith(`compact-hq-`) ||
        e.id.startsWith(`compact-loading-`) ||
        e.id.startsWith(`compact-van-`),
      r =
        (xt.has(u[e.model]?.source) && e.model !== `cp_light`) ||
        Tt.has(e.model) ||
        (!n &&
          ((e.model.startsWith(`car_`) &&
            (e.id.startsWith(`lot-`) ||
              (/^car-/.test(e.id) && wt(e.id) % 4 != 0))) ||
            (e.model === `cp_busstop` &&
              !e.id.startsWith(`compact-shelter-`)) ||
            (Ct.has(e.model) && wt(e.id) % 4 != 0) ||
            (e.model === `planter_concrete` &&
              !e.id.startsWith(`compact-`) &&
              wt(e.id.replace(/-\d+$/, ``)) % 3 != 0)));
    return (r && t.push(e), !r);
  });
  let n = new Set(t.map((e) => e.id));
  e.colliderDefs = e.colliderDefs.filter(
    (e) => !n.has(e.id.replace(/^demo-/, ``)),
  );
  let r = t.filter((e) => e.model.startsWith(`car_`) || St.test(e.model));
  ((e.lights = e.lights.filter(
    (e) =>
      !r.some(
        (t) =>
          Math.abs(e.x - t.x) < 3.3 &&
          Math.abs(e.z - t.z) < 3.3 &&
          e.y >= t.y &&
          e.y < t.y + 3.3,
      ),
  )),
    (e.lights = e.lights.filter((e) => !n.has(e.group))));
  for (let t of e.signs ?? [])
    t.style !== `painted` &&
      ((t.style = `painted`), (t.col = 14075814), (t.font = 1));
  return (
    (e.dressingCleanup = {
      removed: t.map((e) => ({ id: e.id, model: e.model })),
      remaining: e.props.length,
    }),
    e
  );
}
var Dt = [-102, 0, 102],
  Ot = [-140, 140],
  X = 11.2;
