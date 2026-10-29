// assets__terrain-D4VU5r38 29 — lighting
// Lines 10046-10132 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function Ei(e) {
  let t = e.modules.get(`environment`);
  if (!t || typeof t.getSun != `function` || !$.U || !$.mapData) return;
  let n = null;
  try {
    n = t.getSun();
  } catch {
    return;
  }
  if (!n || !n.dir) return;
  let r = n.dir,
    i = Math.hypot(r[0], r[1], r[2]) || 1,
    a = r[0] / i,
    o = r[1] / i,
    s = r[2] / i;
  $.U.uSunDirW.value.set(a, o, s);
  let c = Math.asin(L(o, -1, 1)) * 57.29578;
  (($.U.uSunElev.value = c > -2 ? $.mapData.encodeElev(c) : 1),
    c > -2 && $.mapData.setAzimuth(Math.atan2(s, a)),
    e.scene.fog &&
      e.scene.fog.color &&
      ($.U.uFogCool.value.copy(e.scene.fog.color),
      $.U.uFogWarm.value.copy(e.scene.fog.color)));
}
var Di = {
  name: `terrain`,
  deps: [],
  async init(e, t = {}) {
    (($.ctx = e), ($.builds = 0));
    let n =
      t.yieldTask ??
      (
        await se(
          async () => {
            let { yieldToBrowser: e } = await import(
              `./index-D8RniaPa.js`
            ).then((e) => e.p);
            return { yieldToBrowser: e };
          },
          __vite__mapDeps([0, 1]),
        )
      ).yieldToBrowser;
    await Ci(
      e,
      e.config?.seed ?? e.world?.seed ?? 1,
      e.config?.initialTerrain ?? Ve,
      { ...t, yieldTask: n },
    );
  },
  tick() {},
  update(e, t) {
    $.built &&
      (($.U.uTime.value += Math.min(t || 0, 0.1)),
      $.root?.visible !== !1 &&
        ($.terrain.update(e.camera),
        $.scatter.update(e.camera),
        $.water.update(e.camera)),
      $.lighting
        ? ($.lighting.update(), $.water.setSkyTint($.lighting.sky))
        : (Ei(e),
          e.scene.background &&
            e.scene.background.isColor &&
            $.water.setSkyTint(e.scene.background)));
  },
  showcase(e, t) {
    $.built &&
      (e.modules.get(`environment`) ||
        xi(e, t && t.tod != null ? t.tod : (e.world.time.tod ?? 14)),
      ($.offTod = e.events.on(`env:timeOfDay`, (e) => {
        $.lighting && $.lighting.setTimeOfDay(e.tod);
      })),
      e.setCameraFocus($.scenic),
      e.log(
        `showcase focus at [${$.scenic.map((e) => e.toFixed(1)).join(`, `)}]`,
      ));
  },
  dispose(e) {
    (_i++,
      ($.offTod &&= ($.offTod(), null)),
      ($.lighting &&= ($.lighting.dispose(), null)),
      bi(),
      ($.built = !1),
      ($.ctx = $.hf = $.U = $.scenic = null),
      ($.opts = Ve));
  },
  api: Ti,
};
