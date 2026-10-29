/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  F as t,
  Fn as n,
  Gt as r,
  Hn as i,
  U as a,
  Wt as o,
  _n as s,
  dt as c,
  gn as l,
  hn as u,
  q as d,
  rt as f,
  xn as p,
  z as m,
} from "./graphics-quality-CrL3qbU3.js";
function h(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function g(e, t, n, r = !0) {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
  let a = new m(i);
  return (
    (a.colorSpace = r ? s : ``),
    (a.anisotropy = 8),
    (a.wrapS = a.wrapT = u),
    a
  );
}
var _ = () =>
    g(512, 512, (e, t) => {
      let n = h(7);
      ((e.fillStyle = `#2a2522`), e.fillRect(0, 0, t, t));
      for (let r = 0; r < 90; r++) {
        let r = n() * t,
          i = n() * t,
          a = 10 + n() * 70,
          o = e.createRadialGradient(r, i, 0, r, i, a),
          s = n() < 0.35 ? `120,62,32` : n() < 0.6 ? `78,72,66` : `16,15,14`;
        (o.addColorStop(0, `rgba(${s},${0.25 + n() * 0.4})`),
          o.addColorStop(1, `rgba(${s},0)`),
          (e.fillStyle = o),
          e.fillRect(r - a, i - a, 2 * a, 2 * a));
      }
      for (let r = 0; r < 2e4; r++)
        ((e.fillStyle = `rgba(${n() < 0.7 ? `0,0,0` : `140,84,50`},${n() * 0.2})`),
          e.fillRect(n() * t, n() * t, 1 + n() * 2, 1 + n() * 2));
    }),
  v = () =>
    g(256, 64, (e, t, n) => {
      ((e.fillStyle = `#0d0e10`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#3a3d42`));
      for (let r = 4; r < n; r += 10) e.fillRect(0, r, t, 3);
      for (let r = 0; r < t; r += 22) e.fillRect(r, 0, 2, n);
    }),
  y = () =>
    g(256, 256, (e, t) => {
      ((e.fillStyle = `#e6e6e2`), e.fillRect(0, 0, t, t));
      for (let n = 0; n < t; n += 16)
        ((e.fillStyle = `rgba(0,0,0,.08)`),
          e.fillRect(n, 0, 3, t),
          (e.fillStyle = `rgba(255,255,255,.35)`),
          e.fillRect(n + 4, 0, 2, t));
      let n = h(3);
      for (let r = 0; r < 40; r++) {
        let r = n() * t,
          i = e.createLinearGradient(0, 0, 0, t);
        (i.addColorStop(0, `rgba(90,80,60,0)`),
          i.addColorStop(1, `rgba(90,80,60,${n() * 0.18})`),
          (e.fillStyle = i),
          e.fillRect(r, 0, 4 + n() * 10, t));
      }
    });
function b(e, t = `#f1ede2`, n = `#1f3a64`) {
  let r = g(256, 128, (r, i, a) => {
    ((r.fillStyle = t),
      r.fillRect(0, 0, i, a),
      (r.strokeStyle = n),
      (r.lineWidth = 6),
      r.strokeRect(5, 5, i - 10, a - 10),
      (r.fillStyle = n),
      (r.font = `700 64px "Arial Narrow", Arial, sans-serif`),
      (r.textAlign = `center`),
      (r.textBaseline = `middle`),
      r.fillText(e, i / 2, a / 2 + 4),
      (r.font = `600 16px Arial`),
      r.fillText(`CASCADIA`, i / 2, 20));
  });
  return ((r.wrapS = r.wrapT = a), r);
}
function x(e, t, n) {
  let r = g(512, 128, (r, i, a) => {
    ((r.fillStyle = t),
      r.fillRect(0, 0, i, a),
      (r.fillStyle = n),
      (r.font = `900 78px "Arial Black", Arial, sans-serif`),
      (r.textAlign = `center`),
      (r.textBaseline = `middle`),
      r.fillText(e, i / 2, a / 2 + 4));
  });
  return ((r.wrapS = r.wrapT = a), r);
}
var S = () =>
  g(256, 32, (e, t, n) => {
    for (let t = 0; t < 16; t++)
      for (let n = 0; n < 2; n++)
        ((e.fillStyle = (t + n) % 2 ? `#111` : `#f4f1e6`),
          e.fillRect(t * 16, n * 16, 16, 16));
  });
function C(e) {
  let t = new o({
    color: e,
    roughness: 0.38,
    metalness: 0.35,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  });
  return (
    (t.userData.dust = { value: 0 }),
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uDust = t.userData.dust),
        (e.vertexShader =
          `varying float vCarY;
` +
          e.vertexShader.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
 vCarY = position.y;`,
          )),
        (e.fragmentShader =
          `uniform float uDust; varying float vCarY;
` +
          e.fragmentShader
            .replace(
              `#include <color_fragment>`,
              `#include <color_fragment>
      float dirt = uDust * (0.35 + 0.65 * (1.0 - smoothstep(0.1, 0.9, vCarY)));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.37, 0.3), dirt * 0.75);`,
            )
            .replace(
              `#include <roughnessmap_fragment>`,
              `#include <roughnessmap_fragment>
 roughnessFactor = mix(roughnessFactor, 0.85, uDust);`,
            )));
    }),
    t
  );
}
var w = {};
function T() {
  return w.glass
    ? w
    : ((w.glass = new o({
        color: 1844782,
        roughness: 0.04,
        metalness: 0.1,
        transparent: !0,
        opacity: 0.62,
        clearcoat: 1,
      })),
      (w.rubber = new r({ color: 1710619, roughness: 0.92 })),
      (w.rim = new r({ color: 12172480, roughness: 0.25, metalness: 0.9 })),
      (w.chrome = new r({ color: 15001322, roughness: 0.1, metalness: 1 })),
      (w.trim = new r({ color: 1513498, roughness: 0.55 })),
      (w.head = new r({
        color: 15922421,
        roughness: 0.1,
        metalness: 0.4,
        emissive: 16774876,
        emissiveIntensity: 0.35,
      })),
      (w.tail = new r({
        color: 7998476,
        roughness: 0.2,
        emissive: 16718352,
        emissiveIntensity: 0.35,
      })),
      (w.amber = new r({
        color: 13928986,
        roughness: 0.2,
        emissive: 16751136,
        emissiveIntensity: 0.3,
      })),
      (w.interior = new r({ color: 2828841, roughness: 0.9 })),
      (w.seat = new r({ color: 3881012, roughness: 0.85 })),
      (w.grille = new r({ map: v(), roughness: 0.5, metalness: 0.4 })),
      (w.cargo = new r({ map: y(), roughness: 0.6 })),
      (w.white = new r({ color: 15790058, roughness: 0.4, metalness: 0.1 })),
      (w.checker = new r({ map: S(), roughness: 0.5 })),
      (w.bed = new r({ color: 1381911, roughness: 0.95 })),
      (w.lightRed = new r({
        color: 12589080,
        emissive: 16719904,
        emissiveIntensity: 1.2,
      })),
      (w.lightBlue = new r({
        color: 1720272,
        emissive: 2117887,
        emissiveIntensity: 1.2,
      })),
      (w.burnt = new r({ map: _(), roughness: 0.95, metalness: 0.2 })),
      (w.soot = new r({ color: 986637, roughness: 1 })),
      w);
}
var E = (e, t, n) => new i(e, t, n);
function D(e, t, n = 0.05, r = null) {
  let i = new p();
  if ((e.forEach(([e, t], n) => (n ? i.lineTo(e, t) : i.moveTo(e, t))), r)) {
    let { clr: e, list: t, zRear: n } = r;
    for (let n of t) {
      let t = Math.asin(Math.max(-1, Math.min(1, (e - n.cy) / n.r)));
      (i.lineTo(n.z + Math.cos(t) * n.r, e),
        i.absarc(n.z, n.cy, n.r, t, Math.PI - t, !1));
    }
    i.lineTo(n, e);
  }
  i.closePath();
  let a = new f(i, {
    depth: t - 2 * n,
    bevelEnabled: n > 0,
    bevelThickness: n,
    bevelSize: n * 0.8,
    bevelSegments: 3,
    curveSegments: 18,
  });
  return (a.rotateY(-Math.PI / 2).translate(t / 2 - n, 0, 0), a);
}
function O(t, n, r, i) {
  let a = new e(n, r);
  return (
    (a.castShadow = a.receiveShadow = !0),
    i && (a.name = i),
    t.add(a),
    a
  );
}
function k(e, n, r, i, a, o, s, c, l) {
  return O(e, new t(o, s, c).translate(r, i, a), n, l);
}
function A(e, t, n, r, i, a, o, s, c) {
  (k(e, t, n, r, i, a, o, s, c), k(e, t, -n, r, i, a, o, s, c));
}
function j(e, n, r, i, a, o, s) {
  let c = r.distanceTo(i),
    l = O(e, new t(a, c, o), n, s);
  return (
    l.position.copy(r).add(i).multiplyScalar(0.5),
    l.quaternion.setFromUnitVectors(E(0, 1, 0), i.clone().sub(r).normalize()),
    l
  );
}
function M(e, t, r, i, a, o = !1) {
  let s = new c();
  ((s.name = `wheel`), s.position.set(t, i, r), e.add(s));
  let u = Math.sign(t);
  (O(s, new d(i, i, a, 28).rotateZ(Math.PI / 2), w.rubber, `tyre`),
    O(
      s,
      new n(i * 0.86, i * 0.1, 8, 28)
        .rotateY(Math.PI / 2)
        .translate(u * a * 0.42, 0, 0),
      w.rubber,
      `tyre`,
    ),
    o &&
      O(
        s,
        new l(i * 0.66, i * 0.84, 28)
          .rotateY((u * Math.PI) / 2)
          .translate(u * (a / 2 + 0.004), 0, 0),
        w.white,
        `tyre`,
      ));
  let f = new c();
  ((f.name = `rim`),
    s.add(f),
    O(
      f,
      new d(i * 0.64, i * 0.6, 0.03, 24)
        .rotateZ((u * Math.PI) / 2)
        .translate(u * (a / 2 + 0.005), 0, 0),
      w.rim,
    ),
    O(
      f,
      new n(i * 0.64, 0.018, 6, 24)
        .rotateY(Math.PI / 2)
        .translate(u * (a / 2 + 0.012), 0, 0),
      w.chrome,
    ),
    O(
      f,
      new d(i * 0.16, i * 0.2, 0.05, 12)
        .rotateZ(Math.PI / 2)
        .translate(u * (a / 2 + 0.03), 0, 0),
      w.chrome,
    ));
  for (let e = 0; e < 5; e++) {
    let t = (e / 5) * Math.PI * 2;
    k(
      f,
      w.trim,
      u * (a / 2 + 0.024),
      0,
      i * 0.4,
      0.012,
      i * 0.14,
      i * 0.34,
    ).rotation.x = t;
  }
  return s;
}
function N(e, t) {
  T();
  let i = new c(),
    a = e.W - 0.2,
    o = e.L,
    s = o / 2,
    l = -o / 2,
    u = C(t);
  i.userData = { spec: e, paint: u, parts: {} };
  let d = e.wr + 0.07,
    f = e.clr,
    p = e.back ?? e.rw?.[0] ?? l + 0.9,
    m = [
      [l + 0.06, f + 0.08],
      [l, f + 0.2],
      [l, e.deck - 0.12],
      [l + 0.08, e.deck],
      ...(e.rw ? [[e.rw[0], e.deck]] : []),
      [p, e.belt],
      [e.ws[0], e.belt],
      [s - 0.35, e.hood],
      [s - 0.08, e.hood - 0.05],
      [s, e.nose],
      [s, f + 0.2],
      [s - 0.06, f + 0.08],
    ],
    h = [
      { z: e.axles[0], cy: e.wr, r: d },
      { z: e.axles[1], cy: e.wr, r: d },
    ];
  O(i, D(m, a, 0.07, { clr: f + 0.08, list: h, zRear: l + 0.06 }), u, `paint`);
  let g = e.ws[1],
    _ = e.roofEnd,
    v = a - 0.2,
    y = e.cabinH ?? e.H;
  (O(
    i,
    D(
      [
        [e.ws[0], e.belt],
        [g, y - 0.04],
        [(g + _) / 2, y],
        [_, y - 0.04],
        e.back == null ? [e.rw[0], e.deck + 0.02] : [e.back, e.belt],
      ],
      v,
      0.03,
    ),
    e.panelled ? u : w.glass,
    e.panelled ? `paint` : `glass`,
  ),
    O(
      i,
      D(
        [
          [g + 0.03, y - 0.07],
          [(g + _) / 2, y - 0.03],
          [_ - 0.03, y - 0.07],
          [_ - 0.03, y + 0.012],
          [(g + _) / 2, y + 0.035],
          [g + 0.03, y + 0.012],
        ],
        v + 0.04,
        0.012,
      ),
      u,
      `paint`,
    ));
  for (let t of [1, -1]) {
    let n = t * (v / 2 + 0.005);
    j(
      i,
      u,
      E(n, e.belt, e.ws[0] - 0.02),
      E(n, y - 0.03, g + 0.02),
      0.03,
      0.08,
      `paint`,
    );
    let r = e.back ?? e.rw[0];
    j(
      i,
      u,
      E(n, e.back == null ? e.deck : e.belt, r + 0.05),
      E(n, y - 0.03, _ - 0.02),
      0.03,
      e.cPillar ?? 0.2,
      `paint`,
    );
    for (let t of e.bPillars ?? [(e.ws[0] + _) / 2 + 0.1])
      j(i, w.trim, E(n, e.belt, t), E(n, y - 0.05, t - 0.04), 0.03, 0.09);
    (k(
      i,
      e.chromeTrim ? w.chrome : w.trim,
      t * (a / 2 + 0.004),
      e.belt - 0.005,
      (e.ws[0] + (e.back ?? e.rw?.[0] ?? l)) / 2,
      0.012,
      0.025,
      Math.abs(e.ws[0] - (e.back ?? e.rw?.[0] ?? l)),
    ),
      k(
        i,
        w.trim,
        t * (a / 2 - 0.02),
        f + 0.13,
        (e.axles[0] + e.axles[1]) / 2,
        0.06,
        0.1,
        e.axles[0] - e.axles[1] - 2 * d,
      ));
    for (let n of e.seams ?? [e.ws[0] + 0.05, (e.ws[0] + _) / 2 + 0.1, _ + 0.1])
      k(
        i,
        w.trim,
        t * (a / 2 + 0.003),
        (f + e.belt) / 2 + 0.08,
        n,
        0.008,
        e.belt - f - 0.28,
        0.012,
      );
    for (let n of e.handles ?? [
      (e.ws[0] + _) / 2 + 0.25,
      (e.ws[0] + _) / 2 - 0.55,
    ])
      k(
        i,
        e.chromeTrim ? w.chrome : w.trim,
        t * (a / 2 + 0.012),
        e.belt - 0.12,
        n,
        0.02,
        0.035,
        0.16,
      );
    (k(
      i,
      w.trim,
      t * (a / 2 + 0.06),
      e.belt + 0.02,
      e.ws[0] - 0.12,
      0.12,
      0.03,
      0.06,
    ),
      k(
        i,
        u,
        t * (a / 2 + 0.14),
        e.belt + 0.08,
        e.ws[0] - 0.14,
        0.12,
        0.12,
        0.08,
        `paint`,
      ));
  }
  let x = a / 2 - 0.22,
    S = 0.058;
  (A(i, w.head, x, e.nose - 0.1, s + S, 0.34, 0.12, 0.04, `light`),
    A(
      i,
      w.amber,
      a / 2 + 0.005,
      e.nose - 0.1,
      s - 0.1,
      0.04,
      0.08,
      0.14,
      `light`,
    ),
    k(i, w.grille, 0, e.nose - 0.14, s + S + 0.004, a - 0.95, 0.16, 0.02),
    A(i, w.tail, a / 2 - 0.16, e.deck - 0.16, l - S, 0.26, 0.14, 0.04, `light`),
    k(
      i,
      e.chromeBumpers ? w.chrome : w.trim,
      0,
      f + 0.2,
      s + S + 0.03,
      a - 0.04,
      0.16,
      0.12,
    ),
    k(
      i,
      e.chromeBumpers ? w.chrome : w.trim,
      0,
      f + 0.2,
      l - S - 0.03,
      a - 0.04,
      0.16,
      0.12,
    ));
  let N = new r({ map: b(e.plate ?? `GRY 204`), roughness: 0.4 });
  if (
    (k(i, N, 0, f + 0.4, l - S - 0.008, 0.52, 0.12, 0.012, `plate`),
    k(i, N, 0, f + 0.34, s + S + 0.1, 0.52, 0.12, 0.012, `plate`),
    !e.panelled || e.cabSeats)
  ) {
    let t = e.ws[0] - 0.25;
    k(i, w.interior, 0, e.belt - 0.05, t, v - 0.1, 0.18, 0.4);
    for (let n of [-1, 1])
      (k(i, w.seat, n * v * 0.24, e.belt - 0.35, t - 0.95, 0.5, 0.2, 0.5),
        k(i, w.seat, n * v * 0.24, e.belt - 0.02, t - 1.2, 0.48, 0.62, 0.12));
    (O(
      i,
      new n(0.17, 0.025, 6, 20)
        .rotateX(-0.35)
        .translate(v * 0.24, e.belt + 0.08, t - 0.32),
      w.trim,
    ),
      e.twoSeat || k(i, w.seat, 0, e.belt - 0.2, t - 2, v - 0.2, 0.55, 0.5));
  }
  let P = e.tyreW ?? 0.24;
  for (let t of e.axles)
    for (let n of [1, -1])
      M(i, n * (a / 2 - P / 2 - 0.02), t, e.wr, P, e.whitewall);
  return (
    e.extra?.(i, {
      Wb: a,
      gw: v,
      zf: s,
      zr: l,
      paint: u,
      H: y,
      M: w,
      belt: e.belt,
    }),
    i.traverse((e) => {
      e.isMesh && (e.userData.base = e.material);
    }),
    i
  );
}
var P = {
    L: 4.65,
    W: 2.06,
    H: 1.435,
    wr: 0.33,
    clr: 0.16,
    axles: [1.42, -1.33],
    belt: 0.95,
    hood: 0.9,
    nose: 0.78,
    deck: 0.98,
    ws: [0.78, -0.08],
    roofEnd: -0.98,
    rw: [-1.52],
  },
  F = [
    {
      key: `sedan`,
      name: `Family Sedan`,
      prop: `car_sedan`,
      desc: `Four-door saloon: three-box shape, chrome belt line, alloy wheels.`,
      ...P,
      chromeTrim: !0,
      plate: `GRY 204`,
    },
    {
      key: `hatch`,
      name: `City Hatchback`,
      prop: `car_hatchback`,
      desc: `Short five-door hatch with a steep tailgate and roof spoiler.`,
      L: 4.15,
      W: 2,
      H: 1.485,
      wr: 0.31,
      clr: 0.15,
      axles: [1.3, -1.25],
      belt: 0.95,
      hood: 0.86,
      nose: 0.76,
      deck: 0.98,
      ws: [0.82, 0.02],
      roofEnd: -1.72,
      back: -1.98,
      cPillar: 0.28,
      plate: `CSK 118`,
      seams: [0.86, -0.3, -1.25],
      handles: [-0.05, -0.85],
      extra: (e, t) =>
        k(e, t.paint, 0, t.H + 0, -1.78, t.gw - 0.05, 0.05, 0.28, `paint`),
    },
    {
      key: `wagon`,
      name: `Estate Wagon`,
      prop: `car_wagon`,
      desc: `Long-roof estate with roof rails and faux-wood side panels.`,
      ...P,
      L: 4.79,
      H: 1.465,
      axles: [1.45, -1.4],
      roofEnd: -2.12,
      back: -2.36,
      rw: void 0,
      cPillar: 0.3,
      plate: `WGN 552`,
      seams: [0.83, -0.15, -1.05],
      handles: [0.1, -0.75],
      extra: (e, t) => {
        for (let n of [1, -1]) {
          k(
            e,
            w.chrome,
            n * (t.gw / 2 - 0.05),
            t.H + 0.07,
            -0.6,
            0.04,
            0.04,
            2.8,
          );
          for (let r of [0.7, -1.9])
            k(
              e,
              w.trim,
              n * (t.gw / 2 - 0.05),
              t.H + 0.035,
              r,
              0.06,
              0.05,
              0.08,
            );
          k(e, R(), n * (t.Wb / 2 + 0.006), 0.6, -0.25, 0.01, 0.3, 3.3);
        }
      },
    },
    {
      key: `suv`,
      name: `Trail SUV`,
      prop: `car_suv`,
      desc: `Tall four-by-four: chunky tyres, black arches, roof rack, spare on the tailgate.`,
      L: 4.85,
      W: 2.16,
      H: 1.865,
      wr: 0.39,
      clr: 0.24,
      axles: [1.48, -1.45],
      belt: 1.18,
      hood: 1.1,
      nose: 0.98,
      deck: 1.2,
      ws: [0.95, 0.25],
      roofEnd: -2.2,
      back: -2.4,
      cPillar: 0.3,
      tyreW: 0.3,
      plate: `TRL 870`,
      seams: [1, -0.2, -1.3],
      handles: [0.05, -0.9],
      extra: (e, t) => {
        for (let r of [1, -1])
          for (let i of [1.48, -1.45])
            O(
              e,
              new n(0.47, 0.05, 6, 20, Math.PI)
                .rotateY(Math.PI / 2)
                .translate(r * (t.Wb / 2 + 0.01), 0.39, i),
              w.trim,
            );
        k(e, w.trim, 0, t.H + 0.1, -0.7, t.gw - 0.1, 0.04, 2);
        for (let n of [0.25, -1.65])
          k(e, w.trim, 0, t.H + 0.05, n, t.gw - 0.1, 0.08, 0.05);
        (O(
          e,
          new d(0.36, 0.36, 0.24, 24)
            .rotateX(Math.PI / 2)
            .translate(0, 0.95, t.zr - 0.2),
          w.rubber,
        ),
          k(e, w.trim, 0, 0.35, t.zf + 0.05, t.Wb - 0.3, 0.12, 0.12));
      },
    },
    {
      key: `van`,
      name: `Panel Van`,
      prop: `car_van`,
      desc: `Tall delivery van: short nose, panel sides, sliding door, twin rear doors.`,
      L: 5.25,
      W: 2.22,
      H: 2.1,
      wr: 0.36,
      clr: 0.2,
      axles: [1.75, -1.65],
      belt: 1.12,
      hood: 1.02,
      nose: 0.9,
      deck: 1.15,
      ws: [1.72, 1.05],
      roofEnd: -2.5,
      back: -2.62,
      panelled: !0,
      cabSeats: !0,
      twoSeat: !0,
      cPillar: 0.1,
      plate: `DLV 331`,
      bPillars: [0.62],
      seams: [1.62, 0.6, -0.95, -2.55],
      handles: [0.8, -0.8],
      extra: (e, n) => {
        O(
          e,
          new t(n.gw - 0.2, 0.95, 0.02).rotateX(-0.62).translate(0, 1.6, 1.42),
          w.glass,
          `glass`,
        );
        for (let t of [1, -1])
          (k(
            e,
            w.glass,
            t * (n.gw / 2 + 0.012),
            1.5,
            1,
            0.01,
            0.52,
            0.72,
            `glass`,
          ),
            k(e, w.trim, t * (n.Wb / 2 + 0.01), 1.95, -0.3, 0.02, 0.03, 1.7));
        k(e, w.trim, 0, 1.2, n.zr - 0.004, 0.012, 1.7, 0.01);
        for (let t of [1, -1])
          k(e, w.glass, t * 0.45, 1.6, n.zr - 0.008, 0.62, 0.4, 0.01, `glass`);
      },
    },
    {
      key: `pickup`,
      name: `Work Pickup`,
      prop: `car_pickup`,
      desc: `Crew-cab pickup: open bed with liner, tailgate, towing hitch, light bar.`,
      L: 5.35,
      W: 2.2,
      H: 1.805,
      wr: 0.4,
      clr: 0.28,
      axles: [1.75, -1.6],
      belt: 1.15,
      hood: 1.12,
      nose: 1,
      deck: 1.15,
      ws: [1.05, 0.4],
      roofEnd: -0.62,
      back: -0.72,
      cPillar: 0.14,
      tyreW: 0.3,
      plate: `RDG 419`,
      seams: [1.1, 0, -0.65],
      handles: [0.3, -0.45],
      extra: (e, t) => {
        k(e, w.bed, 0, 1.1, -1.72, t.Wb - 0.22, 0.12, 1.9);
        for (let n of [1, -1])
          k(
            e,
            t.paint,
            n * (t.Wb / 2 - 0.05),
            1.17,
            -1.72,
            0.1,
            0.06,
            1.95,
            `paint`,
          );
        (k(e, w.trim, 0, 1.18, -0.78, t.Wb - 0.2, 0.06, 0.08),
          k(e, w.chrome, 0, 0.42, t.zr - 0.12, 0.1, 0.1, 0.2),
          k(e, w.trim, 0, t.H + 0.07, 0.3, 1.2, 0.08, 0.1));
        for (let n = -3; n <= 3; n++)
          k(e, w.head, n * 0.16, t.H + 0.07, 0.36, 0.12, 0.06, 0.02, `light`);
        for (let r of [1, -1])
          for (let i of [1.75, -1.6])
            O(
              e,
              new n(0.48, 0.05, 6, 20, Math.PI)
                .rotateY(Math.PI / 2)
                .translate(r * (t.Wb / 2 + 0.01), 0.4, i),
              w.trim,
            );
      },
    },
    {
      key: `taxi`,
      name: `Cab`,
      prop: `car_taxi`,
      desc: `Yellow taxi sedan with a roof sign and chequered side stripe.`,
      ...P,
      H: 1.435,
      paintLock: 15909424,
      plate: `TXI 007`,
      extra: (e, n) => {
        k(e, w.trim, 0, n.H + 0.04, -0.5, 0.9, 0.05, 0.3);
        let i = new r({
          map: x(`TAXI`, `#f7f2dc`, `#1a1a1a`),
          emissive: 16773312,
          emissiveIntensity: 0.3,
          emissiveMap: null,
        });
        O(
          e,
          new t(0.85, 0.2, 0.26).translate(0, n.H + 0.16, -0.5),
          [w.white, w.white, w.white, w.white, i, i],
          `light`,
        );
        for (let t of [1, -1])
          k(e, w.checker, t * (n.Wb / 2 + 0.006), 0.66, 0, 0.008, 0.08, 3.4);
      },
    },
    {
      key: `police`,
      name: `Patrol Car`,
      prop: `car_police`,
      desc: `Black-and-white cruiser: light bar, push bar, spotlight, door shields.`,
      ...P,
      L: 4.755,
      paintLock: 1447963,
      plate: `PD 1147`,
      extra: (e, t) => {
        k(e, w.trim, 0, t.H + 0.05, -0.45, 1.3, 0.06, 0.28);
        for (let n of [1, -1])
          k(
            e,
            n > 0 ? w.lightRed : w.lightBlue,
            n * 0.34,
            t.H + 0.12,
            -0.45,
            0.58,
            0.1,
            0.24,
            `light`,
          );
        k(e, w.white, 0, t.H + 0.12, -0.45, 0.1, 0.1, 0.24);
        for (let n of [1, -1])
          (k(e, w.white, n * (t.Wb / 2 + 0.005), 0.66, 0.05, 0.01, 0.46, 1.75),
            k(e, z(), n * (t.Wb / 2 + 0.012), 0.68, 0.2, 0.01, 0.26, 0.22),
            k(
              e,
              w.chrome,
              n * (t.gw / 2 + 0.04),
              t.belt + 0.14,
              0.62,
              0.05,
              0.1,
              0.12,
            ));
        for (let n of [1, -1])
          k(e, w.trim, n * 0.45, 0.55, t.zf + 0.2, 0.07, 0.55, 0.07);
        (k(e, w.trim, 0, 0.72, t.zf + 0.21, 1, 0.07, 0.07),
          k(e, w.trim, 0, 0.42, t.zf + 0.21, 1, 0.07, 0.07));
      },
    },
    {
      key: `boxtruck`,
      name: `Box Truck`,
      prop: `car_boxtruck`,
      desc: `Delivery truck: cab-over-style front, corrugated cargo box, roll-up door.`,
      L: 6.45,
      W: 2.54,
      H: 2.5,
      wr: 0.46,
      clr: 0.3,
      axles: [2.35, -1.8],
      belt: 1.4,
      hood: 1.3,
      nose: 1.15,
      deck: 1.3,
      ws: [2.55, 2.1],
      roofEnd: 1.25,
      back: 1.12,
      cPillar: 0.1,
      tyreW: 0.3,
      cabSeats: !0,
      twoSeat: !0,
      plate: `FRT 660`,
      seams: [2.45, 1.2],
      handles: [1.5],
      extra: (e, t) => {
        (k(e, w.cargo, 0, 1.95, -1.05, 2.54, 2.1, 4.35),
          k(e, w.trim, 0, 0.82, -1.05, 2.3, 0.18, 4.3),
          k(e, w.chrome, 0, 0.55, t.zr + 0.2, 2.3, 0.1, 0.12));
        for (let n = 0; n < 12; n++)
          k(e, w.trim, 0, 1 + n * 0.16, t.zr - 0.006, 2.2, 0.012, 0.01);
        for (let n of [1, -1])
          (k(e, w.tail, n * 1.1, 0.75, t.zr + 0.18, 0.2, 0.12, 0.04, `light`),
            k(e, w.amber, n * 1.22, 2.95, -3.22, 0.06, 0.06, 0.03, `light`));
      },
    },
    {
      key: `coupe`,
      name: `Classic Coupe`,
      prop: null,
      desc: `Old two-door fastback: long hood, chrome bumpers, whitewall tyres (a new extra).`,
      L: 5,
      W: 1.98,
      H: 1.34,
      wr: 0.34,
      clr: 0.16,
      axles: [1.62, -1.35],
      belt: 0.9,
      hood: 0.86,
      nose: 0.74,
      deck: 0.92,
      ws: [0.62, -0.1],
      roofEnd: -0.75,
      rw: [-2.05],
      cPillar: 0.5,
      twoSeat: !0,
      chromeBumpers: !0,
      chromeTrim: !0,
      whitewall: !0,
      plate: `VNT 1968`,
      seams: [0.66, -0.55],
      handles: [-0.35],
      extra: (e, t) => {
        for (let n of [1, -1])
          k(e, w.chrome, n * (t.Wb / 2 + 0.006), 0.62, 0.3, 0.01, 0.03, 4.2);
      },
    },
  ],
  I = null,
  L = null;
function R() {
  return (I ??= new r({
    roughness: 0.6,
    map: g(256, 64, (e, t, n) => {
      ((e.fillStyle = `#6a4326`), e.fillRect(0, 0, t, n));
      let r = h(9);
      for (let i = 0; i < 60; i++) {
        ((e.strokeStyle = `rgba(${r() < 0.5 ? `40,22,10` : `140,96,58`},${0.3 + r() * 0.4})`),
          (e.lineWidth = 1 + r() * 2),
          e.beginPath());
        let i = r() * n;
        (e.moveTo(0, i),
          e.bezierCurveTo(
            t * 0.3,
            i + (r() - 0.5) * 10,
            t * 0.6,
            i + (r() - 0.5) * 10,
            t,
            i,
          ),
          e.stroke());
      }
      ((e.strokeStyle = `#d8c9a8`),
        (e.lineWidth = 4),
        e.strokeRect(2, 2, t - 4, n - 4));
    }),
  }));
}
function z() {
  return (L ??= new r({
    roughness: 0.4,
    map: g(128, 128, (e, t) => {
      ((e.fillStyle = `#f0efea`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#c7a23a`),
        e.beginPath());
      for (let t = 0; t < 10; t++) {
        let n = (t / 10) * Math.PI * 2 - Math.PI / 2,
          r = t % 2 ? 26 : 56;
        e.lineTo(64 + Math.cos(n) * r, 64 + Math.sin(n) * r);
      }
      (e.fill(),
        (e.fillStyle = `#1a2a4a`),
        (e.font = `700 18px Arial`),
        (e.textAlign = `center`),
        e.fillText(`GREYWATER`, 64, 122));
    }),
  }));
}
var B = [
  16777215, 14080218, 3421754, 3821432, 9316906, 4020805, 12101768, 8159888,
  2763824, 7311270, 13203246, 5978706,
];
export { B as n, N as r, F as t };
//# sourceMappingURL=car-kit-C4kBe5xO.js.map
