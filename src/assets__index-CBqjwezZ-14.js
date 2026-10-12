// assets__index-CBqjwezZ 14 — map
// Lines 5247-5283 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
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
