// assets__hangar-view-sGXiZG7c 03 — setattribute
// Lines 9305-9484 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function Qe({ paint: e = `white` } = {}) {
  let n = e === `grey` ? `dark-grey` : e,
    r = I.palettes[n] ?? I.palettes.white,
    i = new c();
  (i.setAttribute(`position`, new h(I.positions, 3)),
    i.setAttribute(`normal`, new h(I.normals, 3)),
    i.setIndex(I.indices));
  let o = new Float32Array(I.positions.length);
  for (let e of I.parts)
    for (let t = e.start; t < e.start + e.count; t++)
      o.set(r[e.material], t * 3);
  (i.setAttribute(`color`, new s(o, 3)),
    i.computeBoundingBox(),
    i.computeBoundingSphere());
  let l = new a({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0,
      flatShading: !0,
      side: 2,
    }),
    u = new t(i, l);
  ((u.name = `bizjet-body`), (u.castShadow = u.receiveShadow = !0));
  let d = new _();
  ((d.name = `bizjet-${e}`), d.add(u));
  let f = { root: d };
  return ((d.userData = f), f);
}
var L = {
    body: F.navyGrey,
    radome: F.charcoal,
    tyre: F.tyre,
    floor: F.grating,
    ramp: F.navyDeck,
    bench: F.canvasRed,
    lining: F.wallpaperGreen,
    panel: F.charcoal,
    prop: F.metalDark,
    hazard: F.hazard,
    metal: F.metal,
    metalDark: F.metalDark,
    light: F.cabinetWhite,
    tug: F.canoeYellow,
    tugDark: F.charcoal,
    amber: F.amberGlass,
    glass: F.glass,
    bare: F.carSilver,
    olive: F.orchard,
    navy: F.boxBlue,
    red: F.carRed,
    yellow: F.canoeYellow,
    canopy: F.glass,
    black: F.ironBlack,
    tan: F.carTan,
    camo: F.glassGreen,
    safety: F.safety,
    grating: F.grating,
    b52: F.boxGrey,
    zinc: F.zinc,
    sand: F.limestone,
    chinookOlive: F.oilTank,
    tint: F.glassDark,
    chinook: F.carTan,
    fire: F.sandbag,
    door: F.bulkheadSteel,
    rib: F.oilTank,
    doorFrame: F.metalDark,
    doorLeaf: F.concreteDark,
  },
  $e = new p();
function R(e, t) {
  let n = typeof t == `number` ? t : L[t];
  if (n === void 0) throw Error(`airfield-kit: unknown colour key '${t}'`);
  $e.setHex(n);
  let r = e.attributes.position.count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e++) i.set([$e.r, $e.g, $e.b], e * 3);
  return (e.setAttribute(`color`, new s(i, 3)), e);
}
function z(e) {
  let t = e.index ? e.toNonIndexed() : e;
  for (let e of Object.keys(t.attributes))
    e !== `position` && t.deleteAttribute(e);
  return t;
}
function B([e, t, n, i, a, o], s) {
  let c = z(new r(i - e, a - t, o - n));
  return (c.translate((e + i) / 2, (t + a) / 2, (n + o) / 2), R(c, s));
}
function V(e, t, n, r, i, a = 12, o = t) {
  let s = z(new b(o, t, n, a));
  return (
    r === `x` ? s.rotateZ(-Math.PI / 2) : r === `z` && s.rotateX(Math.PI / 2),
    s.translate(...e),
    R(s, i)
  );
}
function H(e, t, n) {
  let r = [],
    i = [0, 0, 0],
    a = [...e, ...t];
  for (let e of a) for (let t = 0; t < 3; t++) i[t] += e[t] / a.length;
  let o = (e, t, n) => {
      let a = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
        o = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
        s = a[1] * o[2] - a[2] * o[1],
        c = a[2] * o[0] - a[0] * o[2],
        l = a[0] * o[1] - a[1] * o[0],
        u = s * (e[0] - i[0]) + c * (e[1] - i[1]) + l * (e[2] - i[2]);
      r.push(...e, ...(u >= 0 ? [...t, ...n] : [...n, ...t]));
    },
    s = e.length;
  for (let n = 0; n < s; n++) {
    let r = (n + 1) % s;
    (o(e[n], e[r], t[r]), o(e[n], t[r], t[n]));
  }
  for (let n = 1; n < s - 1; n++)
    (o(e[0], e[n], e[n + 1]), o(t[0], t[n], t[n + 1]));
  let l = new c();
  return (l.setAttribute(`position`, new h(r, 3)), R(l, n));
}
var U = (e, t, n, r) =>
    H(
      e.map(([e, n]) => [e, n, t]),
      e.map(([e, t]) => [e, t, n]),
      r,
    ),
  et = (e, t, n, r) =>
    H(
      e.map(([e, n]) => [t, n, e]),
      e.map(([e, t]) => [n, t, e]),
      r,
    ),
  W = (e) =>
    e.flatMap((e) => {
      let t = e.clone();
      return (t.scale(1, 1, -1), tt(t), [e, t]);
    });
function tt(e) {
  let t = e.attributes.position.array,
    n = e.attributes.color.array;
  for (let e = 0; e < t.length; e += 9)
    for (let r = 0; r < 3; r++)
      (([t[e + 3 + r], t[e + 6 + r]] = [t[e + 6 + r], t[e + 3 + r]]),
        ([n[e + 3 + r], n[e + 6 + r]] = [n[e + 6 + r], n[e + 3 + r]]));
}
var nt = () =>
  new a({
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.78,
    metalness: 0.12,
  });
function G(e, n) {
  let r = x(e.filter(Boolean));
  (r.computeVertexNormals(), r.computeBoundingBox(), r.computeBoundingSphere());
  let i = new t(r, nt());
  return ((i.name = n), (i.castShadow = i.receiveShadow = !0), i);
}
var rt = new r(1, 1, 1);
function it(e, t, n) {
  let r = new S(rt, t, e.length),
    i = new m();
  return (
    e.forEach(([e, t, n, a, o, s], c) => {
      (i.position.set((e + a) / 2, (t + o) / 2, (n + s) / 2),
        i.scale.set(a - e, o - t, s - n),
        i.updateMatrix(),
        r.setMatrixAt(c, i.matrix));
    }),
    (r.name = n),
    r
  );
}
function at(e, t, n, r, i = `tyre`) {
  return [
    V([e, n, t], n, r, `z`, i, 14),
    V([e, n, t], n * 0.55, r + 0.04, `z`, `metal`, 10),
  ];
}
