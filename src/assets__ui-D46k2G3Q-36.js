// assets__ui-D46k2G3Q 36 — dispose
// Lines 16351-16511 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var bo = {
  name: `ui`,
  deps: [],
  async init(e) {
    (yo(),
      (mo = ea(e)),
      (io = Ba(e, mo)),
      (ro = Xa(e)),
      (_o = la(e)),
      (oo = Oa(e)),
      (ao = La(e, mo)),
      (vo = Jt(e, mo)),
      (uo = ga(e)),
      (fo = bt(e)),
      (so = _a(e)),
      (co = va(e)),
      (lo = ya(e)),
      (to = tn(e, mo.root)),
      (no = eo(e)));
    let t = () => {
      let t = e.modules?.get?.(`terrain`);
      return t && typeof t.getHeight == `function`
        ? (mo.setTerrain({
            getHeight: t.getHeight,
            getMaterialAt: t.getMaterialAt,
            bounds: t.bounds ?? e.world?.map?.bounds,
          }),
          !0)
        : !1;
    };
    if (!t()) {
      let e = 0;
      po = setInterval(() => {
        (t() || ++e > 20) && (clearInterval(po), (po = null));
      }, 500);
    }
  },
  tick(e, t) {
    ho?.tick(t);
  },
  lateUpdate(e, t) {
    (e.camera?.updateMatrixWorld?.(),
      mo?.update(t),
      io?.update(t),
      ro?.update(t),
      _o?.update(),
      vo?.update(),
      oo?.update(),
      uo?.update(t),
      fo?.update(t),
      ao?.update(),
      lo?.update(t),
      to?.update(t));
  },
  dispose() {
    (no?.dispose(),
      (no = null),
      fo?.dispose(),
      (fo = null),
      to?.dispose(),
      (to = null),
      ro?.dispose(),
      (ro = null),
      io?.dispose(),
      (io = null),
      clearInterval(po),
      (po = null),
      ao?.dispose(),
      (ao = null),
      oo?.dispose(),
      (oo = null),
      so?.dispose(),
      (so = null),
      co?.dispose(),
      (co = null),
      lo?.dispose(),
      (lo = null),
      uo?.dispose(),
      (uo = null),
      vo?.dispose(),
      (vo = null),
      _o?.dispose(),
      (_o = null),
      ho?.dispose(),
      (ho = null),
      mo?.dispose(),
      (mo = null));
  },
  async showcase(e, t) {
    let { createShowcase: n } = await ce(
      async () => {
        let { createShowcase: e } = await import(`./showcase-1sunEboh.js`);
        return { createShowcase: e };
      },
      __vite__mapDeps([0, 1]),
    );
    ho = n(e, mo, t || {});
  },
  api: {
    show(e) {
      return mo ? mo.show(e) : !1;
    },
    hide(e) {
      return mo ? mo.hide(e) : !1;
    },
    toggle(e) {
      return mo ? mo.toggle(e) : !1;
    },
    isVisible(e) {
      return mo ? mo.isVisible(e) : !1;
    },
    message(e, t, n) {
      mo?.message(e, t, n);
    },
    setLocalEntity(e) {
      mo?.setLocalEntity(e);
    },
    hitmarker(e = !1, t = !1) {
      mo?.hitmarker(e, t);
    },
    setSpread(e) {
      mo?.setSpread(e);
    },
    setAmmo(e) {
      mo?.setAmmo(e);
    },
    setMinimapRange(e) {
      mo?.setMinimapRange(e);
    },
    setTerrainSampler(e) {
      mo?.setTerrain(e);
    },
    getRoot() {
      return mo?.root ?? null;
    },
    acceptProgress(e, t) {
      mo?.progression.accept(e, t);
    },
    getProgress() {
      return mo?.progression.get() ?? null;
    },
    showAchievement(e, t = 1) {
      no?.show(e, t);
    },
    widgets: [
      `crosshair`,
      `health`,
      `ammo`,
      `compass`,
      `match`,
      `minimap`,
      `markers`,
      `killfeed`,
      `messages`,
      `scoreboard`,
      `spawn`,
      `netstats`,
      `modules`,
    ],
  },
};
