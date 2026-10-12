// assets__hangar-view--r_UA7k- 03 — setattribute
// Lines 9305-9484 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function $e({ paint: e = `white` } = {}) {
  let t = e === `grey` ? `dark-grey` : e,
    n = F.palettes[t] ?? F.palettes.white,
    i = new a();
  (i.setAttribute(`position`, new b(F.positions, 3)),
    i.setAttribute(`normal`, new b(F.normals, 3)),
    i.setIndex(F.indices));
  let o = new Float32Array(F.positions.length);
  for (let e of F.parts)
    for (let t = e.start; t < e.start + e.count; t++)
      o.set(n[e.material], t * 3);
  (i.setAttribute(`color`, new r(o, 3)),
    i.computeBoundingBox(),
    i.computeBoundingSphere());
  let s = new m({
      vertexColors: !0,
      roughness: 0.85,
      metalness: 0,
      flatShading: !0,
      side: 2,
    }),
    c = new d(i, s);
  ((c.name = `bizjet-body`), (c.castShadow = c.receiveShadow = !0));
  let l = new y();
  ((l.name = `bizjet-${e}`), l.add(c));
  let u = { root: l };
  return ((l.userData = u), u);
}
var I = {
    body: P.navyGrey,
    radome: P.charcoal,
    tyre: P.tyre,
    floor: P.grating,
    ramp: P.navyDeck,
    bench: P.canvasRed,
    lining: P.wallpaperGreen,
    panel: P.charcoal,
    prop: P.metalDark,
    hazard: P.hazard,
    metal: P.metal,
    metalDark: P.metalDark,
    light: P.cabinetWhite,
    tug: P.canoeYellow,
    tugDark: P.charcoal,
    amber: P.amberGlass,
    glass: P.glass,
    bare: P.carSilver,
    olive: P.orchard,
    navy: P.boxBlue,
    red: P.carRed,
    yellow: P.canoeYellow,
    canopy: P.glass,
    black: P.ironBlack,
    tan: P.carTan,
    camo: P.glassGreen,
    safety: P.safety,
    grating: P.grating,
    b52: P.boxGrey,
    zinc: P.zinc,
    sand: P.limestone,
    chinookOlive: P.oilTank,
    tint: P.glassDark,
    chinook: P.carTan,
    fire: P.sandbag,
    door: P.bulkheadSteel,
    rib: P.oilTank,
    doorFrame: P.metalDark,
    doorLeaf: P.concreteDark,
  },
  et = new p();
function L(e, t) {
  let n = typeof t == `number` ? t : I[t];
  if (n === void 0) throw Error(`airfield-kit: unknown colour key '${t}'`);
  et.setHex(n);
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3);
  for (let e = 0; e < i; e++) a.set([et.r, et.g, et.b], e * 3);
  return (e.setAttribute(`color`, new r(a, 3)), e);
}
function R(e) {
  let t = e.index ? e.toNonIndexed() : e;
  for (let e of Object.keys(t.attributes))
    e !== `position` && t.deleteAttribute(e);
  return t;
}
function z([e, t, r, i, a, o], s) {
  let c = R(new n(i - e, a - t, o - r));
  return (c.translate((e + i) / 2, (t + a) / 2, (r + o) / 2), L(c, s));
}
function B(e, t, n, r, a, o = 12, s = t) {
  let c = R(new i(s, t, n, o));
  return (
    r === `x` ? c.rotateZ(-Math.PI / 2) : r === `z` && c.rotateX(Math.PI / 2),
    c.translate(...e),
    L(c, a)
  );
}
function V(e, t, n) {
  let r = [],
    i = [0, 0, 0],
    o = [...e, ...t];
  for (let e of o) for (let t = 0; t < 3; t++) i[t] += e[t] / o.length;
  let s = (e, t, n) => {
      let a = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
        o = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
        s = a[1] * o[2] - a[2] * o[1],
        c = a[2] * o[0] - a[0] * o[2],
        l = a[0] * o[1] - a[1] * o[0],
        u = s * (e[0] - i[0]) + c * (e[1] - i[1]) + l * (e[2] - i[2]);
      r.push(...e, ...(u >= 0 ? [...t, ...n] : [...n, ...t]));
    },
    c = e.length;
  for (let n = 0; n < c; n++) {
    let r = (n + 1) % c;
    (s(e[n], e[r], t[r]), s(e[n], t[r], t[n]));
  }
  for (let n = 1; n < c - 1; n++)
    (s(e[0], e[n], e[n + 1]), s(t[0], t[n], t[n + 1]));
  let l = new a();
  return (l.setAttribute(`position`, new b(r, 3)), L(l, n));
}
var H = (e, t, n, r) =>
    V(
      e.map(([e, n]) => [e, n, t]),
      e.map(([e, t]) => [e, t, n]),
      r,
    ),
  tt = (e, t, n, r) =>
    V(
      e.map(([e, n]) => [t, n, e]),
      e.map(([e, t]) => [n, t, e]),
      r,
    ),
  U = (e) =>
    e.flatMap((e) => {
      let t = e.clone();
      return (t.scale(1, 1, -1), nt(t), [e, t]);
    });
function nt(e) {
  let t = e.attributes.position.array,
    n = e.attributes.color.array;
  for (let e = 0; e < t.length; e += 9)
    for (let r = 0; r < 3; r++)
      (([t[e + 3 + r], t[e + 6 + r]] = [t[e + 6 + r], t[e + 3 + r]]),
        ([n[e + 3 + r], n[e + 6 + r]] = [n[e + 6 + r], n[e + 3 + r]]));
}
var rt = () =>
  new m({
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.78,
    metalness: 0.12,
  });
function W(e, t) {
  let n = x(e.filter(Boolean));
  (n.computeVertexNormals(), n.computeBoundingBox(), n.computeBoundingSphere());
  let r = new d(n, rt());
  return ((r.name = t), (r.castShadow = r.receiveShadow = !0), r);
}
var it = new n(1, 1, 1);
function at(e, t, n) {
  let r = new v(it, t, e.length),
    i = new h();
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
function ot(e, t, n, r, i = `tyre`) {
  return [
    B([e, n, t], n, r, `z`, i, 14),
    B([e, n, t], n * 0.55, r + 0.04, `z`, `metal`, 10),
  ];
}
