// assets__index-D8RniaPa 14 — bumpmap
// Lines 5272-5325 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
function ir(e) {
  let t = 0,
    n = 0,
    r = new Set();
  for (let i of e.children)
    tr.has(i.name) &&
      i.traverse((e) => {
        n += nr(e, !0);
        for (let n of [].concat(e.material || [])) {
          n.bumpMap && ((n.bumpMap = null), (n.needsUpdate = !0));
          for (let e of Object.values(n))
            e?.isTexture && !r.has(e) && (r.add(e), (t += Zn(e)));
        }
      });
  return { textureMB: Math.round(t / 1e6), geometryMB: Math.round(n / 1e6) };
}
var $ = Ct();
function ar() {
  let e = new URLSearchParams(location.search),
    t = (t, n) =>
      e.has(t) && !Number.isNaN(parseFloat(e.get(t)))
        ? parseFloat(e.get(t))
        : n,
    n = !e.has(`server`),
    r = qn.some((t) => e.get(t) === `1`),
    i = Object.fromEntries(
      Kn.map((t) => [t, e.get(t) === `1` && !(t === `compact` && r)]),
    );
  return {
    showcase: e.get(`showcase`) || null,
    seed: t(`seed`, 1),
    tod: t(`tod`, Jn(i)?.tod ?? 14),
    bloom: e.get(`bloom`) !== `0`,
    camera: e.get(`camera`) || null,
    quality: e.get(`quality`) || null,
    offline: e.has(`offline`) ? e.get(`offline`) === `1` : n,
    sky: e.get(`sky`) || ``,
    expandedDemolition: e.get(`demolition`) === `1`,
    roofLinks: e.get(`rooflinks`) !== `0`,
    ...i,
    urban:
      e.get(`urban`) !== `0` &&
      (e.get(`offline`) === `1` || n || e.get(`urban`) === `1`),
    vehicles:
      e.get(`vehicles`) !== `0` &&
      (e.get(`offline`) === `1` || n || e.get(`vehicles`) === `1`),
    server: e.get(`server`) || `ws://${location.hostname}:8787`,
    bots: t(`bots`, n ? 63 : 0),
    mode: e.get(`mode`) || `conquest`,
    map: e.get(`map`) || `demo`,
    name: e.get(`name`) || `Player`,
    pause: e.get(`pause`) === `1`,
  };
}
