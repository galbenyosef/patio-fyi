// assets__greywater-map-CJ8kbtVA 26 — freeze
// Lines 175129-175401 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function Vt(e) {
  let t = new Set(),
    n = new Map(e.objects.map((e) => [e.id, e]));
  for (let r of e.buildings) {
    let i = n.get(r.id + (r.tower ? `-podium` : `-body`));
    if (!i) continue;
    t.add(i.id);
    let a = (t, a, o, s, c, l, u, d = i.material) => {
        let f = r.id + `-` + t,
          p = {
            id: f,
            kind: `box`,
            x: a,
            y: o,
            z: s,
            sx: c,
            sy: l,
            sz: u,
            material: d,
            cast: !0,
          };
        return (
          e.objects.push(p),
          n.set(f, p),
          e.colliderDefs.push({
            id: `demo-` + f,
            aabb: [a - c / 2, o, s - u / 2, a + c / 2, o + l, s + u / 2],
            surface: `concrete`,
          }),
          f
        );
      },
      o = [],
      s = Math.round(i.sy / 3.2);
    for (let e = 0; e < s; e++) {
      let t = i.y + e * 3.2;
      (!r.tower || e > 0) &&
        a(
          `shell-floor-${e}`,
          i.x,
          t - 0.22,
          i.z,
          i.sx - 0.4,
          0.22,
          i.sz - 0.4,
          `concrete`,
        );
      for (let n of [-1, 1])
        (o.push(
          a(
            `shell-wall-${e}-z${n}`,
            i.x,
            t,
            i.z + n * (i.sz / 2 - 0.18),
            i.sx,
            3.2,
            0.36,
          ),
        ),
          o.push(
            a(
              `shell-wall-${e}-x${n}`,
              i.x + n * (i.sx / 2 - 0.18),
              t,
              i.z,
              0.36,
              3.2,
              i.sz - 0.72,
            ),
          ));
    }
    ((r.demolitionPanels = [
      ...new Set([
        ...(r.demolitionPanels ??
          r.breachPanels ?? [r.id + `-breach--1`, r.id + `-breach-1`]),
        ...o,
      ]),
    ]),
      (r.demolitionAttachments ??= {}));
    let c = o.map((e) => n.get(e));
    for (let t of e.objects)
      if (
        t.id.startsWith(r.id + `-`) &&
        (r.tower
          ? /^window-[xz]-[01]-/.test(t.id.slice(r.id.length + 1))
          : /^(window-|end-window-)/.test(t.id.slice(r.id.length + 1)))
      ) {
        let e = c.find(
          (e) =>
            t.y >= e.y - 0.01 &&
            t.y < e.y + e.sy &&
            (e.sx < e.sz
              ? Math.abs(t.x - e.x) < 0.6
              : Math.abs(t.z - e.z) < 0.6),
        );
        e && (r.demolitionAttachments[e.id] ??= []).push(t.id);
      }
    if (r.tower) for (let e of [0, 1]) t.add(r.id + `-band-` + e);
  }
  return (
    (e.objects = e.objects.filter((e) => !t.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !t.has(e.id.slice(5)))),
    e
  );
}
var Ht = e({
    COMPACT_CONFIG: () => zt,
    GREYWATER_CLIMATE: () => Wt,
    HOME_BASES: () => Jt,
    MAP_CONFIG: () => $,
    MAP_ID: () => Gt,
    MAP_NAME: () => Kt,
    OBJECTIVES: () => qt,
    ROUTES: () => Q,
    buildCompactLayout: () => Zt,
    buildCompactLayoutAsync: () => Qt,
    buildLegacyBattlefieldLayout: () => $t,
    objectiveDefinitions: () => Yt,
  }),
  Ut = (e) => Object.assign(Ze(e), { staticShadows: !0, labChunk: 256 }),
  Wt = Object.freeze({
    fog: 0.3,
    clouds: 0,
    grade: Object.freeze({
      key: Object.freeze({ color: 15580058, intensity: 1.3 }),
      hemi: Object.freeze({ sky: 10468580, ground: 2702928, intensity: 1.45 }),
      exposure: 1,
    }),
  }),
  Gt = `greywater-gap`,
  Kt = `Greywater Gap`,
  qt = Object.freeze([
    Object.freeze({
      id: `conquest-a`,
      letter: `A`,
      name: `Relay Ridge`,
      x: -205,
      z: -18,
      radius: 13,
    }),
    Object.freeze({
      id: `conquest-b`,
      letter: `B`,
      name: `Mill Yard`,
      x: 0,
      z: 0,
      radius: 14,
    }),
    Object.freeze({
      id: `conquest-c`,
      letter: `C`,
      name: `Orchard Depot`,
      x: 205,
      z: 24,
      radius: 13,
    }),
  ]),
  Jt = Object.freeze([
    Object.freeze({ id: `hq-0`, name: `Amber Camp`, x: -338, z: -2 }),
    Object.freeze({ id: `hq-1`, name: `Crimson Camp`, x: 338, z: 9 }),
  ]),
  Q = Object.freeze({
    main: Object.freeze([
      [-370, 1],
      [-300, -6],
      [-205, -18],
      [-105, 8],
      [0, 0],
      [105, -8],
      [205, 24],
      [300, 16],
      [370, 7],
    ]),
    north: Object.freeze([
      [-330, -8],
      [-258, -67],
      [-165, -109],
      [-62, -122],
      [43, -106],
      [143, -114],
      [255, -58],
      [332, 2],
    ]),
    south: Object.freeze([
      [-332, 7],
      [-258, 68],
      [-174, 112],
      [-75, 124],
      [32, 101],
      [130, 122],
      [252, 71],
      [332, 13],
    ]),
  }),
  $ = Object.freeze({
    size: 800,
    res: 2,
    waterLevel: 8,
    erosion: !0,
    droplets: 7e3,
    roads: [Q.main, Q.north, Q.south],
    flatten: [
      { x: -338, z: -2, radius: 36 },
      { x: 338, z: 9, radius: 36 },
      { x: -205, z: -18, radius: 43 },
      { x: 0, z: 0, radius: 48 },
      { x: 205, z: 24, radius: 46 },
      { x: -70, z: -120, radius: 27 },
      { x: 78, z: 108, radius: 27 },
    ],
  });
function Yt(e) {
  return qt.map((t) => ({
    id: t.id,
    letter: t.letter,
    name: t.name,
    pos: [t.x, e(t.x, t.z), t.z],
    radius: t.radius,
    team: -1,
    progress: 0,
    progressTeam: 0,
    contested: !1,
    spawnable: !1,
  }));
}
function* Xt(e) {
  let t = Bt(e);
  return (
    yield,
    (t = Vt(t)),
    yield,
    (t = _(t, e)),
    yield,
    (t = ce(t, e)),
    yield,
    (t = T(t, e)),
    yield,
    (t = Ke(t, e)),
    yield,
    (t = ye(t, e)),
    yield,
    (t = n(t)),
    yield,
    (t = ke(t, e, zt.forest.planted)),
    yield,
    (t = Ue(t, e)),
    yield,
    Ut(t)
  );
}
function Zt(e) {
  let t = Xt(e),
    n;
  do n = t.next();
  while (!n.done);
  return n.value;
}
async function Qt(
  e,
  { yieldTask: t = () => null, shouldStop: n = () => !1 } = {},
) {
  let r = Xt(e);
  try {
    for (; !n();) {
      let e = r.next();
      if (e.done) return e.value;
      await t();
    }
    return null;
  } finally {
    r.return();
  }
}
