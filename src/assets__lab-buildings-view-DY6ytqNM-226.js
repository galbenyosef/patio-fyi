// assets__lab-buildings-view-DY6ytqNM 226 — attributes
// Lines 70792-70823 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function tS(e, t, n = null) {
  let r = (
    e.attributes.normal
      ? new f().copy(e)
      : e.index
        ? e.toNonIndexed()
        : e.clone()
  ).applyMatrix4(t);
  for (let e of Object.keys(r.attributes))
    [`position`, `normal`, `uv`].includes(e) || r.deleteAttribute(e);
  if (
    (r.attributes.normal || r.computeVertexNormals(),
    r.attributes.uv ||
      r.setAttribute(
        `uv`,
        new S(new Float32Array(r.attributes.position.count * 2), 2),
      ),
    !r.index)
  ) {
    let e = r.attributes.position.count,
      t = e <= 65536 ? new Uint16Array(e) : new Uint32Array(e);
    for (let n = 0; n < e; n++) t[n] = n;
    r.setIndex(new u(t, 1));
  }
  if (n) {
    let e = new Float32Array(r.attributes.position.count * 3);
    for (let t = 0; t < e.length; t += 3)
      ((e[t] = n.r), (e[t + 1] = n.g), (e[t + 2] = n.b));
    r.setAttribute(`color`, new u(e, 3));
  }
  return ((r.morphAttributes = {}), (r.groups = []), r);
}
