// assets__demo-BF8qQ4c6 09 — vite__mapdeps
// Lines 2268-2603 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
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
  X = new A(),
  ot = new a(),
  Z = new _(),
  st = new a(),
  ct = new a(1, 0, 0),
  lt = new w(),
  ut = new a(0, 1, 0),
  dt = new _(),
  ft = new Map(),
  pt = () => [],
  Q = () => null,
  mt = () => null,
  ht = () => null,
  gt = async () => null,
  _t = () => null,
  vt = async () => null,
  yt = () => null,
  bt = async () => null,
  xt = () => null,
  St = () => null,
  Ct = () => null,
  wt = () => null,
  Tt = () => () => {},
  Et = () => () => {},
  Dt = () => () => {},
  Ot = () => ({ broken: new Set(), hits: new Map() }),
  kt = () => null,
  At = () => null,
  jt = () => () => {},
  Mt = () => null,
  Nt = () => null,
  Pt = async () => null,
  Ft = async () => null,
  It = () => null,
  Lt = () => () => {},
  Rt = () => null,
  zt = () => () => {},
  Bt = () => null,
  Vt = () => () => {},
  Ht = () => null,
  Ut = () => () => {},
  Wt = () => null,
  Gt = () => () => {},
  Kt = () => null,
  $ = 0;
async function qt(e, t) {
  if (e === `legacy` || e === `compact`) {
    let [e, n, r, i, a, o, s, c, l, u, d, f] = await Promise.all([
      j(
        () => import(`./street-surfaces-C1amEoKU.js`),
        __vite__mapDeps([40, 1, 16, 4, 17, 41]),
      ),
      j(
        () => import(`./greywater-grounds-BnVxfPOG.js`),
        __vite__mapDeps([42, 1, 4, 14, 16, 17, 43, 38, 36]),
      ),
      j(
        () => import(`./workshop-equipment-Dt0qlOLB.js`),
        __vite__mapDeps([44, 1]),
      ),
      j(
        () => import(`./facade-buildings-styA3k4D.js`),
        __vite__mapDeps([45, 46, 1, 47]),
      ),
      j(
        () => import(`./lab-buildings-view-DY6ytqNM.js`),
        __vite__mapDeps([48, 1, 5, 46, 47, 49, 50, 51, 52, 53, 54, 55]),
      ),
      j(
        () => import(`./greywater-centre-view-Z6VrK8o-.js`),
        __vite__mapDeps([56, 1, 5, 46, 49, 50, 37, 57]),
      ),
      j(
        () => import(`./greywater-harbor-CLQ2scWs.js`),
        __vite__mapDeps([58, 1, 59]),
      ),
      j(
        () => import(`./greywater-landmarks-view-CXEhzPvV.js`),
        __vite__mapDeps([60, 1, 55]),
      ),
      j(
        () => import(`./greywater-setpieces-view-CS3dCOa6.js`),
        __vite__mapDeps([61, 1, 5, 50, 39, 62, 63, 55, 64, 51]),
      ),
      j(
        () => import(`./greywater-nests-view-CrDz16Gz.js`),
        __vite__mapDeps([65, 1, 5, 6, 50, 55, 62]),
      ),
      j(
        () => import(`./greywater-signs-view-D86rZqNX.js`),
        __vite__mapDeps([66, 1, 5, 50, 62]),
      ),
      j(() => import(`./trains-sim-BhrrY_Za.js`), __vite__mapDeps([57, 37])),
    ]);
    if (t !== $) return;
    (({ createStreetSurfaces: pt, streetKind: Q } = e),
      ({ createGreywaterGrounds: mt } = n),
      ({ addWorkshopEquipment: gt } = r),
      ({ addFacadeBuildings: _t } = i),
      ({ addLabBuildings: vt } = a),
      ({ addGreywaterCentre: yt } = o),
      ({ addGreywaterHarbor: bt } = s),
      ({ addGreywaterLandmarks: xt } = c),
      ({ addGreywaterSetpiecesAsync: St } = l),
      ({ addGreywaterNestsAsync: Ct } = u),
      ({ addGreywaterSignsAsync: wt } = d),
      ({ installTrains: Tt } = f));
  }
  if (
    [`frost`, `marabas`, `cay`, `ironwood`, `deadweight`, `barranco`].includes(
      e,
    )
  ) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./facade-buildings-styA3k4D.js`),
        __vite__mapDeps([45, 46, 1, 47]),
      ),
      j(
        () => import(`./workshop-equipment-Dt0qlOLB.js`),
        __vite__mapDeps([44, 1]),
      ),
    ]);
    if (t !== $) return;
    (({ addFacadeBuildings: _t } = e), ({ addWorkshopEquipment: gt } = n));
  }
  if (e === `cay` || e === `deadweight`) {
    let e = await j(
      () => import(`./naval-CBHUF-qz.js`),
      __vite__mapDeps([67, 1]),
    );
    if (t !== $) return;
    ({ createNavalBattle: ht } = e);
  }
  if (e === `deadweight`) {
    let e = await j(
      () => import(`./ship-dressing-DTx9LFga.js`),
      __vite__mapDeps([68, 1, 63, 55, 64]),
    );
    if (t !== $) return;
    ({ createShipDressing: It } = e);
  }
  if (e === `meridian`) {
    let [e, n, r] = await Promise.all([
      j(() => import(`./meridian-sim-Cefyo3f2.js`), []),
      j(
        () => import(`./meridian-view-BtYJSXLi.js`),
        __vite__mapDeps([69, 1, 50, 53, 54, 55, 70]),
      ),
      j(
        () => import(`./meridian-skyline-EYiBRcN5.js`),
        __vite__mapDeps([71, 1]),
      ),
    ]);
    if (t !== $) return;
    (({ installMeridian: Et } = e),
      ({ createMeridianView: kt } = n),
      ({ createMeridianSkyline: At } = r));
  }
  if (e === `housefire`) {
    let [e, n, r, i] = await Promise.all([
      j(() => import(`./housefire-sim-D_OSgDgj.js`), []),
      j(
        () => import(`./housefire-view-RUObZkeT.js`),
        __vite__mapDeps([72, 1, 73]),
      ),
      j(
        () => import(`./yard-dressing-view-CwP6m0Hr.js`),
        __vite__mapDeps([74, 1, 14, 50, 55, 64, 52, 46, 47, 54]),
      ),
      j(
        () => import(`./lab-buildings-view-DY6ytqNM.js`),
        __vite__mapDeps([48, 1, 5, 46, 47, 49, 50, 51, 52, 53, 54, 55]),
      ),
    ]);
    if (t !== $) return;
    ((jt = e.installHouseFire),
      (Mt = e.stateOf),
      ({ createHouseFireView: Nt } = n),
      ({ addYardDressing: Pt } = r),
      ({ addLabBuildings: vt } = i));
  }
  if (e === `hangar`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./sim-CCeMdhLh.js`).then((e) => e.X),
        __vite__mapDeps([6, 1, 5]),
      ),
      j(
        () => import(`./hangar-view-sGXiZG7c.js`),
        __vite__mapDeps([75, 1, 6, 5, 76, 77, 55, 78, 79]),
      ),
    ]);
    if (t !== $) return;
    (({ installHangar: Lt } = e), ({ createHangarView: Rt } = n));
  }
  if (e === `bascule`) {
    let [e, n] = await Promise.all([
      j(() => import(`./bascule-sim-Cbk5CbGU.js`), []),
      j(
        () => import(`./bascule-view-BJhdmaMb.js`),
        __vite__mapDeps([80, 1, 5, 29, 30]),
      ),
    ]);
    if (t !== $) return;
    (({ installBascule: zt } = e), ({ createBasculeView: Bt } = n));
  }
  if (e === `mesa`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./sim-CCeMdhLh.js`).then((e) => e.B),
        __vite__mapDeps([6, 1, 5]),
      ),
      j(
        () => import(`./mesa-view-C_BUKLKD.js`),
        __vite__mapDeps([81, 1, 6, 5, 50, 31]),
      ),
    ]);
    if (t !== $) return;
    (({ installMesa: Vt } = e), ({ createMesaView: Ht } = n));
  }
  if (e === `kepler`) {
    let [e, n] = await Promise.all([
      j(() => import(`./kepler-sim-BMWVfyGS.js`), __vite__mapDeps([82, 32, 1])),
      j(
        () => import(`./kepler-view-goYpYVca.js`),
        __vite__mapDeps([83, 1, 32, 82]),
      ),
    ]);
    if (t !== $) return;
    (({ installKepler: Ut } = e), ({ createKeplerView: Wt } = n));
  }
  if (e === `observatory`) {
    let [e, n] = await Promise.all([
      j(
        () => import(`./observatory-sim-BDUGU5NF.js`),
        __vite__mapDeps([34, 5]),
      ),
      j(
        () => import(`./observatory-view-BtP2mjUr.js`),
        __vite__mapDeps([84, 1, 34, 5, 33, 11]),
      ),
    ]);
    if (t !== $) return;
    (({ installObservatory: Gt } = e), ({ createObservatoryView: Kt } = n));
  }
  if (e === `linden`) {
    let [e, n, r, i] = await Promise.all([
      j(() => import(`./linden-sim-Cv4sTY8p.js`), __vite__mapDeps([25, 5])),
      j(
        () => import(`./yard-dressing-view-CwP6m0Hr.js`),
        __vite__mapDeps([74, 1, 14, 50, 55, 64, 52, 46, 47, 54]),
      ),
      j(
        () => import(`./suburb-view-DkxWOrgD.js`),
        __vite__mapDeps([85, 1, 46, 52, 47, 26, 14, 86, 87, 17, 4]),
      ),
      j(
        () => import(`./lab-buildings-view-DY6ytqNM.js`),
        __vite__mapDeps([48, 1, 5, 46, 47, 49, 50, 51, 52, 53, 54, 55]),
      ),
    ]);
    if (t !== $) return;
    ((Dt = e.installLindenFences),
      (Ot = e.fenceState),
      ({ addYardDressing: Pt } = n),
      ({ addSuburb: Ft } = r),
      ({ addLabBuildings: vt } = i));
  }
}
var Jt = -1e9;
function Yt(e) {
  if (!e.world.map.ziplines?.length || Y.elapsed - Jt < 4) return;
  let t = e.modules.get(`player`)?.getLocalEntity?.();
  !t ||
    t.hp <= 0 ||
    t.ext?.pl?.zip ||
    !te(e.world, t.pos) ||
    ((Jt = Y.elapsed),
    e.events.emit(`ui:message`, {
      kind: `hint`,
      text: `F  Ride the zipline · Space or F to let go`,
      ttl: 3,
    }));
}
var Xt = 0,
  Zt = !1;
function Qt(e) {
  if (!e.world.map.ladders?.length || Xt >= 3) return;
  let t = !!e.modules.get(`player`)?.getLocalEntity?.()?.ext?.pl?.lad;
  (t &&
    !Zt &&
    (Xt++,
    e.events.emit(`ui:message`, {
      kind: `hint`,
      text: `W  Climb · S  Down · Space  Jump off · F  Let go`,
      ttl: 3,
    })),
    (Zt = t));
}
function $t() {
  let e = new Float32Array([
      -0.5, 0, -0.5, 0.5, 0, -0.5, 0, 1, -0.5, -0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0,
      0.5, -0.5, 0, -0.5, -0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, 0.5, 0, 0.5,
      0.5, 0, -0.5, -0.5, 0, -0.5, 0, 1, -0.5, 0, 1, 0.5, -0.5, 0, -0.5, 0, 1,
      0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0, -0.5, 0,
      1, 0.5, 0, 1, -0.5,
    ]),
    t = new c();
  return (t.setAttribute(`position`, new o(e, 3)), t.computeVertexNormals(), t);
}
function en(e) {
  let t = new i({ color: R[e] ?? 7829357, ...je(e), flatShading: !0 });
  return (Y.materials.push(t), t);
}
function tn(e) {
  let t = e.kind === `gable` ? e.y : e.y + e.sy / 2;
  return (
    e.rotZ
      ? Z.setFromEuler(lt.set(e.rotX ?? 0, 0, e.rotZ))
      : Z.setFromAxisAngle(ct, e.rotX ?? 0),
    e.ry && Z.premultiply(dt.setFromAxisAngle(ut, e.ry)),
    X.compose(ot.set(e.x, t, e.z), Z, st.set(e.sx, e.sy, e.sz))
  );
}
