// assets__demo-CYaenSpr 09 — vite__mapdeps
// Lines 2244-2582 of readable/assets__demo-CYaenSpr.pretty.js (statement-aligned).
var Y = {
    ctx: null,
    root: null,
    layout: null,
    sky: null,
    colliders: [],
    materials: [],
    geometries: [],
    soldiers: null,
    elapsed: 0,
  },
  X = new s(),
  at = new k(),
  Z = new h(),
  ot = new k(),
  st = new k(1, 0, 0),
  ct = new _(),
  lt = new k(0, 1, 0),
  ut = new h(),
  dt = new Map(),
  ft = () => [],
  Q = () => null,
  pt = () => null,
  mt = () => null,
  ht = async () => null,
  gt = () => null,
  _t = async () => null,
  vt = () => null,
  yt = async () => null,
  bt = () => null,
  xt = () => null,
  St = () => null,
  Ct = () => null,
  wt = () => () => {},
  Tt = () => () => {},
  Et = () => () => {},
  Dt = () => ({ broken: new Set(), hits: new Map() }),
  Ot = () => null,
  kt = () => null,
  At = () => () => {},
  jt = () => null,
  Mt = () => null,
  Nt = async () => null,
  Pt = async () => null,
  Ft = () => null,
  It = () => () => {},
  Lt = () => null,
  Rt = () => () => {},
  zt = () => null,
  Bt = () => () => {},
  Vt = () => null,
  Ht = () => () => {},
  Ut = () => null,
  Wt = () => () => {},
  Gt = () => null,
  $ = 0;
async function Kt(e, t) {
  if (e === `legacy` || e === `compact`) {
    let [e, n, r, i, a, o, s, c, l, u, d, f] = await Promise.all([
      j(
        () => import(`./street-surfaces-Bu4Nhn2h.js`),
        __vite__mapDeps([36, 1, 15, 4, 16, 37]),
      ),
      j(
        () => import(`./greywater-grounds-DtDaJ4sV.js`),
        __vite__mapDeps([38, 1, 4, 13, 15, 16, 39, 34, 32]),
      ),
      j(
        () => import(`./workshop-equipment-DYDXE0R0.js`),
        __vite__mapDeps([40, 1]),
      ),
      j(
        () => import(`./facade-buildings-B-dMZaU6.js`),
        __vite__mapDeps([41, 42, 1, 43]),
      ),
      j(
        () => import(`./lab-buildings-view-DJVr8phc.js`),
        __vite__mapDeps([44, 1, 5, 42, 43, 45, 46, 47, 48, 49, 50, 51]),
      ),
      j(
        () => import(`./greywater-centre-view-Cf3_SbRw.js`),
        __vite__mapDeps([52, 1, 5, 42, 45, 46, 33, 53]),
      ),
      j(
        () => import(`./greywater-harbor-BSIBZxXc.js`),
        __vite__mapDeps([54, 1, 55]),
      ),
      j(
        () => import(`./greywater-landmarks-view-BqWgNxEz.js`),
        __vite__mapDeps([56, 1, 51]),
      ),
      j(
        () => import(`./greywater-setpieces-view-CRqPs-L5.js`),
        __vite__mapDeps([57, 1, 5, 46, 35, 58, 59, 51, 60, 47]),
      ),
      j(
        () => import(`./greywater-nests-view-DL2K5mmv.js`),
        __vite__mapDeps([61, 1, 5, 6, 46, 51, 58]),
      ),
      j(
        () => import(`./greywater-signs-view-b4Ps_Ogz.js`),
        __vite__mapDeps([62, 1, 5, 46, 58]),
      ),
      j(() => import(`./trains-sim-BhrrY_Za.js`), __vite__mapDeps([53, 33])),
    ]);
    if (t !== $) return;
    (({ createStreetSurfaces: ft, streetKind: Q } = e),
      ({ createGreywaterGrounds: pt } = n),
      ({ addWorkshopEquipment: ht } = r),
      ({ addFacadeBuildings: gt } = i),
      ({ addLabBuildings: _t } = a),
      ({ addGreywaterCentre: vt } = o),
      ({ addGreywaterHarbor: yt } = s),
      ({ addGreywaterLandmarks: bt } = c),
      ({ addGreywaterSetpiecesAsync: xt } = l),
      ({ addGreywaterNestsAsync: St } = u),
      ({ addGreywaterSignsAsync: Ct } = d),
      ({ installTrains: wt } = f));
  }
  if (
    [`frost`, `marabas`, `cay`, `ironwood`, `deadweight`, `barranco`].includes(
      e,
    )
  ) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./facade-buildings-B-dMZaU6.js`),
        __vite__mapDeps([41, 42, 1, 43]),
      ),
      j(
        () => import(`./workshop-equipment-DYDXE0R0.js`),
        __vite__mapDeps([40, 1]),
      ),
    ]);
    if (t !== $) return;
    (({ addFacadeBuildings: gt } = e), ({ addWorkshopEquipment: ht } = n));
  }
  if (e === `cay` || e === `deadweight`) {
    let e = await j(
      () => import(`./naval-vJ9I-D0A.js`),
      __vite__mapDeps([63, 1]),
    );
    if (t !== $) return;
    ({ createNavalBattle: mt } = e);
  }
  if (e === `deadweight`) {
    let e = await j(
      () => import(`./ship-dressing-y_vqKCl7.js`),
      __vite__mapDeps([64, 1, 59, 51, 60]),
    );
    if (t !== $) return;
    ({ createShipDressing: Ft } = e);
  }
  if (e === `meridian`) {
    let [e, n, r] = await Promise.all([
      j(() => import(`./meridian-sim-Cefyo3f2.js`), []),
      j(
        () => import(`./meridian-view-8PfXs4Ea.js`),
        __vite__mapDeps([65, 1, 46, 49, 50, 51, 66]),
      ),
      j(
        () => import(`./meridian-skyline-BNU0XLQu.js`),
        __vite__mapDeps([67, 1]),
      ),
    ]);
    if (t !== $) return;
    (({ installMeridian: Tt } = e),
      ({ createMeridianView: Ot } = n),
      ({ createMeridianSkyline: kt } = r));
  }
  if (e === `housefire`) {
    let [e, n, r, i] = await Promise.all([
      j(() => import(`./housefire-sim-D_OSgDgj.js`), []),
      j(
        () => import(`./housefire-view-7U8AhLMH.js`),
        __vite__mapDeps([68, 1, 69]),
      ),
      j(
        () => import(`./yard-dressing-view-Du2F6MWT.js`),
        __vite__mapDeps([70, 1, 13, 46, 51, 60, 48, 42, 43, 50]),
      ),
      j(
        () => import(`./lab-buildings-view-DJVr8phc.js`),
        __vite__mapDeps([44, 1, 5, 42, 43, 45, 46, 47, 48, 49, 50, 51]),
      ),
    ]);
    if (t !== $) return;
    ((At = e.installHouseFire),
      (jt = e.stateOf),
      ({ createHouseFireView: Mt } = n),
      ({ addYardDressing: Nt } = r),
      ({ addLabBuildings: _t } = i));
  }
  if (e === `hangar`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./sim-D8F3HPJq.js`).then((e) => e.at),
        __vite__mapDeps([6, 1, 5]),
      ),
      j(
        () => import(`./hangar-view--r_UA7k-.js`),
        __vite__mapDeps([71, 1, 6, 5, 72, 51, 73, 74]),
      ),
    ]);
    if (t !== $) return;
    (({ installHangar: It } = e), ({ createHangarView: Lt } = n));
  }
  if (e === `bascule`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./sim-D8F3HPJq.js`).then((e) => e.Y),
        __vite__mapDeps([6, 1, 5]),
      ),
      j(
        () => import(`./bascule-view-D4Ql_83X.js`),
        __vite__mapDeps([75, 1, 6, 5]),
      ),
    ]);
    if (t !== $) return;
    (({ installBascule: Rt } = e), ({ createBasculeView: zt } = n));
  }
  if (e === `mesa`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./sim-D8F3HPJq.js`).then((e) => e.V),
        __vite__mapDeps([6, 1, 5]),
      ),
      j(
        () => import(`./mesa-view-BpSuH7GP.js`),
        __vite__mapDeps([76, 1, 6, 5, 28]),
      ),
    ]);
    if (t !== $) return;
    (({ installMesa: Bt } = e), ({ createMesaView: Vt } = n));
  }
  if (e === `kepler`) {
    let [e, n] = await Promise.all([
      j(() => import(`./kepler-sim-CZsZKMi2.js`), __vite__mapDeps([77, 29, 1])),
      j(
        () => import(`./kepler-view-jIBABGFb.js`),
        __vite__mapDeps([78, 1, 29, 77]),
      ),
    ]);
    if (t !== $) return;
    (({ installKepler: Ht } = e), ({ createKeplerView: Ut } = n));
  }
  if (e === `observatory`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./observatory-sim-BYYrPAWg.js`),
        __vite__mapDeps([79, 5]),
      ),
      j(
        () => import(`./observatory-view-D3oaNGlt.js`),
        __vite__mapDeps([80, 1, 79, 5]),
      ),
    ]);
    if (t !== $) return;
    (({ installObservatory: Wt } = e), ({ createObservatoryView: Gt } = n));
  }
  if (e === `linden`) {
    let [e, n, r, i] = await Promise.all([
      j(() => import(`./linden-sim-lCb_uLzG.js`), __vite__mapDeps([24, 5])),
      j(
        () => import(`./yard-dressing-view-Du2F6MWT.js`),
        __vite__mapDeps([70, 1, 13, 46, 51, 60, 48, 42, 43, 50]),
      ),
      j(
        () => import(`./suburb-view-rGO8_xlp.js`),
        __vite__mapDeps([81, 1, 42, 48, 43, 25, 13, 82, 83, 16, 4]),
      ),
      j(
        () => import(`./lab-buildings-view-DJVr8phc.js`),
        __vite__mapDeps([44, 1, 5, 42, 43, 45, 46, 47, 48, 49, 50, 51]),
      ),
    ]);
    if (t !== $) return;
    ((Et = e.installLindenFences),
      (Dt = e.fenceState),
      ({ addYardDressing: Nt } = n),
      ({ addSuburb: Pt } = r),
      ({ addLabBuildings: _t } = i));
  }
}
var qt = -1e9;
function Jt(e) {
  if (!e.world.map.ziplines?.length || Y.elapsed - qt < 4) return;
  let t = e.modules.get(`player`)?.getLocalEntity?.();
  !t ||
    t.hp <= 0 ||
    t.ext?.pl?.zip ||
    !te(e.world, t.pos) ||
    ((qt = Y.elapsed),
    e.events.emit(`ui:message`, {
      kind: `hint`,
      text: `F  Ride the zipline · Space or F to let go`,
      ttl: 3,
    }));
}
var Yt = 0,
  Xt = !1;
function Zt(e) {
  if (!e.world.map.ladders?.length || Yt >= 3) return;
  let t = !!e.modules.get(`player`)?.getLocalEntity?.()?.ext?.pl?.lad;
  (t &&
    !Xt &&
    (Yt++,
    e.events.emit(`ui:message`, {
      kind: `hint`,
      text: `W  Climb · S  Down · Space  Jump off · F  Let go`,
      ttl: 3,
    })),
    (Xt = t));
}
function Qt() {
  let e = new Float32Array([
      -0.5, 0, -0.5, 0.5, 0, -0.5, 0, 1, -0.5, -0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0,
      0.5, -0.5, 0, -0.5, -0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, 0.5, 0, 0.5,
      0.5, 0, -0.5, -0.5, 0, -0.5, 0, 1, -0.5, 0, 1, 0.5, -0.5, 0, -0.5, 0, 1,
      0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0, -0.5, 0,
      1, 0.5, 0, 1, -0.5,
    ]),
    t = new o();
  return (t.setAttribute(`position`, new i(e, 3)), t.computeVertexNormals(), t);
}
function $t(e) {
  let t = new p({ color: R[e] ?? 7829357, ...je(e), flatShading: !0 });
  return (Y.materials.push(t), t);
}
function en(e) {
  let t = e.kind === `gable` ? e.y : e.y + e.sy / 2;
  return (
    e.rotZ
      ? Z.setFromEuler(ct.set(e.rotX ?? 0, 0, e.rotZ))
      : Z.setFromAxisAngle(st, e.rotX ?? 0),
    e.ry && Z.premultiply(ut.setFromAxisAngle(lt, e.ry)),
    X.compose(at.set(e.x, t, e.z), Z, ot.set(e.sx, e.sy, e.sz))
  );
}
