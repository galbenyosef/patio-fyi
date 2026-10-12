// assets__greywater-landmarks-view-BqWgNxEz 04 — material
// Lines 905-1064 of readable/assets__greywater-landmarks-view-BqWgNxEz.pretty.js (statement-aligned).
function L([e, n], r) {
  let i = new u(),
    a = 11.5,
    o = 2.5,
    s = b(e, 0.35, 0.3),
    c = b(n, 0.35, 0.3),
    l = b(1909801, 0.1, 0.5),
    d = b(1381653, 0.9);
  (w(i, o, 2.55, a, 0.18, s, 0, 0.45, 0),
    C(i, 2.52, 1, 9.9, l, 0, 1.7, -0.4),
    C(i, 2.53, 0.18, 11.2, c, 0, 1.28, 0),
    C(i, 2.3, 1.3, 0.05, l, 0, 1.45, 5.76),
    O(
      i,
      2,
      2 / 8,
      k(r, {
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
    C(i, 0.9, 2, 0.04, l, o / 2 - 0.5, 0.45, a / 2 - 1.2));
  for (let [e, n] of [
    [a / 2 - 2.2, 1],
    [-3.15, 1],
    [a / 2 - 2.2, -1],
    [-3.15, -1],
  ]) {
    let r = S(i, new t(0.5, 0.5, 0.32, 18), d, n * (o / 2 - 0.1), 0.5, e);
    r.rotation.z = Math.PI / 2;
    let a = S(
      i,
      new t(0.28, 0.28, 0.34, 12),
      b(12106944, 0.4, 0.8),
      n * (o / 2 - 0.09),
      0.5,
      e,
    );
    a.rotation.z = Math.PI / 2;
  }
  for (let e of [-1, 1])
    (C(i, 0.3, 0.14, 0.04, x(16774360, 0.4), e * 0.9, 0.7, 5.77),
      C(i, 0.25, 0.3, 0.04, x(10489872, 0.3), e * 1, 0.8, -11.5 / 2 - 0.02));
  return i;
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
function B(e, t, n) {
  let r = n.baseLandmarks ?? [];
  if (!r.length) return null;
  let i = e.modules.get(`environment`),
    o = new u(),
    s = [],
    c = new Map(),
    l = new Set();
  o.name = `greywater-landmarks`;
  for (let e of r) {
    let t = z(e.key, e.opts ?? void 0);
    (t.position.set(e.x, e.y, e.z),
      (t.rotation.y = e.rotY),
      t.updateMatrixWorld(!0));
    let n = new Map();
    t.traverse((e) => {
      if (!e.isMesh) return;
      let t = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone();
      t.applyMatrix4(e.matrixWorld);
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`].includes(e) || t.deleteAttribute(e);
      t.attributes.uv ||
        t.setAttribute(
          `uv`,
          new f(new Float32Array(t.attributes.position.count * 2), 2),
        );
      let r = `${e.material.uuid}|${e.castShadow}`,
        i = n.get(r);
      (i ||
        n.set(r, (i = { material: e.material, cast: e.castShadow, geos: [] })),
        i.geos.push(t),
        e.userData.blink && l.add(e.material));
      let a = e.userData.nightGlow ?? e.material.userData?.nightGlow;
      a && c.set(e.material, a);
    });
    for (let t of n.values()) {
      let n = m(t.geos, !1);
      for (let e of t.geos) e.dispose();
      if (!n) continue;
      let r = new a(n, t.material);
      ((r.castShadow = t.cast),
        (r.receiveShadow = !0),
        (r.matrixAutoUpdate = !1),
        (r.name = `landmark-${e.key}`),
        o.add(r),
        s.push(n));
    }
    t.traverse((e) => {
      e.isMesh && e.geometry.dispose();
    });
  }
  t.add(o);
  let d = new Set();
  return (
    o.traverse((e) => {
      e.isMesh && d.add(e.material);
    }),
    {
      update() {
        let e = i?.getPracticals?.() ?? 0;
        for (let [t, n] of c) t.emissiveIntensity = n * (0.35 + 0.65 * e);
        let t = Math.floor(performance.now() / 750) % 2 == 0;
        for (let n of l) n.emissiveIntensity = t ? 3 + 4 * e : 0.2;
      },
      dispose() {
        o.removeFromParent();
        for (let e of s) e.dispose();
        for (let e of d) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
