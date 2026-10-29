// assets__gain-pop-BO3NCiqK 03 — dispose
// Lines 453-493 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
var Re = Object.freeze({ lights: [2, 4.5, 2.2], env: 0.25, exposure: 1.25 }),
  ze = (e) =>
    e.id + JSON.stringify(e.attachments) + (e.camo ?? ``) + JSON.stringify(W());
function Be(e, t, { reticle: n = !1 } = {}) {
  let r = new E(),
    i = (e) => new o({ color: e, roughness: 0.55, metalness: 0.35 }),
    a = {
      dark: i(3160384),
      steel: i(7832972),
      glass: new b({ color: 10079470, transparent: !0, opacity: 0.25 }),
      red: new b({ color: 16737616 }),
      amber: i(16759654),
      reticleEdge: i(1382685),
      disposables: [],
    };
  n && (a.reticle = he({ depthTest: !0 }));
  let s = () => {
    r.removeFromParent();
    let e = new Set();
    (r.traverse((t) => {
      t.geometry && e.add(t.geometry);
    }),
      e.forEach((e) => e.dispose()),
      new Set([
        ...Object.values(a).filter((e) => e?.isMaterial),
        ...a.disposables,
      ]).forEach((e) => e.dispose()),
      a.reticle?.dispose());
  };
  try {
    let n = t?.[e.id] ? le(r, e, a, t) : q(r, e, a),
      i = G(r, K(e).optic, n, a),
      o = fe(r, e, n, a);
    return (
      _e(r, e, n, a),
      { group: r, body: n, muzzle: o, sight: i, dispose: s }
    );
  } catch (e) {
    throw (s(), e);
  }
}
