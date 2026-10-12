// assets__greywater-signs-view-b4Ps_Ogz 03 — userdata
// Lines 796-864 of readable/assets__greywater-signs-view-b4Ps_Ogz.pretty.js (statement-aligned).
for (let [e, t] of M.entries())
  ((t.defaultMessageId = te[e]),
    (t.serviceAccess =
      t.width >= 5 || t.height + t.elevation >= 5 || t.mount === `roof`),
    Object.freeze(t.palette),
    Object.freeze(t));
Object.freeze(M);
var N = (e) => new w(...e);
function ne(e, t, n, r) {
  if (n === `detail` || [`neon`, `neon2`, `lamp`].includes(r)) return null;
  let i = e.parameters,
    o = t.clone();
  e.userData.signRotation &&
    o.multiply(
      new a().makeRotationFromQuaternion(new p(...e.userData.signRotation)),
    );
  let s = {
    matrix: o.toArray(),
    role: n,
    beam: !!e.userData.signRotation,
    surface:
      r === `wood`
        ? `wood`
        : r === `concrete`
          ? `concrete`
          : r === `canvas`
            ? `cloth`
            : `metal`,
  };
  if (e.type === `BoxGeometry`) {
    let e = [i.width, i.height, i.depth];
    return n === `solid` && [...e].sort((e, t) => e - t)[1] < 0.06
      ? null
      : { ...s, type: `box`, size: e };
  }
  return e.type === `CylinderGeometry`
    ? n === `solid` && Math.max(i.radiusTop, i.radiusBottom) < 0.04
      ? null
      : {
          ...s,
          type: `cylinder`,
          rt: i.radiusTop,
          rb: i.radiusBottom,
          height: i.height,
          sides: i.radialSegments,
        }
    : e.type === `ExtrudeGeometry` && e.userData.signOutline
      ? {
          ...s,
          type: `outline`,
          points: e.userData.signOutline,
          depth: i.options.depth,
        }
      : null;
}
var P = (e, t, n, r) => {
  let i = [];
  for (let a = 0; a < e.length; a++) {
    let o = e[a],
      s = e[(a + 1) % e.length],
      c = r ? o[t] >= n : o[t] <= n,
      l = r ? s[t] >= n : s[t] <= n;
    if ((c && i.push(o), c !== l)) {
      let e = (n - o[t]) / (s[t] - o[t]);
      i.push(o.map((t, n) => t + (s[n] - t) * e));
    }
  }
  return i;
};
