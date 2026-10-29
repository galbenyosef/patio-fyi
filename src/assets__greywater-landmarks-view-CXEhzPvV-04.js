// assets__greywater-landmarks-view-CXEhzPvV 04 — material
// Lines 905-1064 of readable/assets__greywater-landmarks-view-CXEhzPvV.pretty.js (statement-aligned).
function L([e, t], n) {
  let r = new l(),
    i = 11.5,
    a = 2.5,
    o = b(e, 0.35, 0.3),
    s = b(t, 0.35, 0.3),
    c = b(1909801, 0.1, 0.5),
    u = b(1381653, 0.9);
  (w(r, a, 2.55, i, 0.18, o, 0, 0.45, 0),
    C(r, 2.52, 1, 9.9, c, 0, 1.7, -0.4),
    C(r, 2.53, 0.18, 11.2, s, 0, 1.28, 0),
    C(r, 2.3, 1.3, 0.05, c, 0, 1.45, 5.76),
    O(
      r,
      2,
      2 / 8,
      k(n, {
        w: 512,
        h: 64,
        bg: `#0b0b0b`,
        fg: `#ffb52a`,
        font: `bold 44px "Courier New", monospace`,
        spacing: 0.05,
      }),
      0,
      2.9,
      5.78,
      0,
      1.2,
    ),
    C(r, 0.9, 2, 0.04, c, a / 2 - 0.5, 0.45, i / 2 - 1.2));
  for (let [e, t] of [
    [i / 2 - 2.2, 1],
    [-3.15, 1],
    [i / 2 - 2.2, -1],
    [-3.15, -1],
  ]) {
    let n = S(r, new p(0.5, 0.5, 0.32, 18), u, t * (a / 2 - 0.1), 0.5, e);
    n.rotation.z = Math.PI / 2;
    let i = S(
      r,
      new p(0.28, 0.28, 0.34, 12),
      b(12106944, 0.4, 0.8),
      t * (a / 2 - 0.09),
      0.5,
      e,
    );
    i.rotation.z = Math.PI / 2;
  }
  for (let e of [-1, 1])
    (C(r, 0.3, 0.14, 0.04, x(16774360, 0.4), e * 0.9, 0.7, 5.77),
      C(r, 0.25, 0.3, 0.04, x(10489872, 0.3), e * 1, 0.8, -11.5 / 2 - 0.02));
  return r;
}
var R = [
  {
    key: `relay`,
    name: `North Relay`,
    base: `A`,
    desc: `34 m lattice telecom mast with red/white top, dishes and a red aviation beacon; equipment hut and fenced transformer yard.`,
    build: j,
  },
  {
    key: `market`,
    name: `South Market`,
    base: `B`,
    desc: `Cast-iron market hall with a gable clock, striped-awning produce stalls and bulbs strung across the aisle.`,
    build: M,
  },
  {
    key: `exchange`,
    name: `North Exchange`,
    base: `C`,
    desc: `Columned exchange front on broad steps, carved name frieze, split-flap board, bronze charging bull on a granite plinth.`,
    build: N,
  },
  {
    key: `depot`,
    name: `South Depot`,
    base: `D`,
    desc: `Curved-roof bus shed with roller shutters and the operator's fascia, three buses, fuel island and yard clutter.`,
    build: I,
  },
];
function z(e, t) {
  let n = R.find((t) => t.key === e);
  return t ? n.build(t) : n.build();
}
function B(t, n, r) {
  let i = r.baseLandmarks ?? [];
  if (!i.length) return null;
  let a = t.modules.get(`environment`),
    o = new l(),
    s = [],
    u = new Map(),
    d = new Set();
  o.name = `greywater-landmarks`;
  for (let t of i) {
    let n = z(t.key, t.opts ?? void 0);
    (n.position.set(t.x, t.y, t.z),
      (n.rotation.y = t.rotY),
      n.updateMatrixWorld(!0));
    let r = new Map();
    n.traverse((e) => {
      if (!e.isMesh) return;
      let t = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone();
      t.applyMatrix4(e.matrixWorld);
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`].includes(e) || t.deleteAttribute(e);
      t.attributes.uv ||
        t.setAttribute(
          `uv`,
          new c(new Float32Array(t.attributes.position.count * 2), 2),
        );
      let n = `${e.material.uuid}|${e.castShadow}`,
        i = r.get(n);
      (i ||
        r.set(n, (i = { material: e.material, cast: e.castShadow, geos: [] })),
        i.geos.push(t),
        e.userData.blink && d.add(e.material));
      let a = e.userData.nightGlow ?? e.material.userData?.nightGlow;
      a && u.set(e.material, a);
    });
    for (let n of r.values()) {
      let r = h(n.geos, !1);
      for (let e of n.geos) e.dispose();
      if (!r) continue;
      let i = new e(r, n.material);
      ((i.castShadow = n.cast),
        (i.receiveShadow = !0),
        (i.matrixAutoUpdate = !1),
        (i.name = `landmark-${t.key}`),
        o.add(i),
        s.push(r));
    }
    n.traverse((e) => {
      e.isMesh && e.geometry.dispose();
    });
  }
  n.add(o);
  let f = new Set();
  return (
    o.traverse((e) => {
      e.isMesh && f.add(e.material);
    }),
    {
      update() {
        let e = a?.getPracticals?.() ?? 0;
        for (let [t, n] of u) t.emissiveIntensity = n * (0.35 + 0.65 * e);
        let t = Math.floor(performance.now() / 750) % 2 == 0;
        for (let n of d) n.emissiveIntensity = t ? 3 + 4 * e : 0.2;
      },
      dispose() {
        o.removeFromParent();
        for (let e of s) e.dispose();
        for (let e of f) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
