/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  F as n,
  Fn as r,
  Gt as i,
  I as a,
  Qt as o,
  Tt as s,
  Vn as c,
  Vt as l,
  W as u,
  _n as d,
  dt as f,
  hn as p,
  nn as m,
  q as h,
  rn as g,
  z as _,
} from "./graphics-quality-CrL3qbU3.js";
import {
  $ as v,
  M as y,
  Ot as b,
  Q as x,
  U as S,
  W as C,
  ct as w,
  et as T,
  j as E,
  nt as D,
  ot as O,
  r as k,
} from "./cube-soldier-DMHrHkZL.js";
var A = (e) => () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296;
function j(e, t, n, r = null, i = !0) {
  let a = document.createElement(`canvas`);
  ((a.width = e), (a.height = t), n(a.getContext(`2d`), e, t));
  let o = new _(a);
  return (
    i && (o.colorSpace = d),
    (o.anisotropy = 8),
    r && ((o.wrapS = o.wrapT = p), o.repeat.set(...r)),
    o
  );
}
function M(e, t, n) {
  ((e.fillStyle = `#5b1519`), e.fillRect(0, 0, t, n));
  let r = A(7);
  for (let i = 0; i < 9e3; i++)
    ((e.fillStyle = `rgba(${r() < 0.5 ? 0 : 120},0,0,${r() * 0.08})`),
      e.fillRect(r() * t, r() * n, 1, 2));
  let i = (t, n, r) => {
    (e.save(), e.translate(t, n));
    for (let t of [1, -1])
      (e.save(),
        e.scale(t, 1),
        (e.fillStyle = `#74202a`),
        e.beginPath(),
        e.moveTo(0, -r),
        e.bezierCurveTo(r * 0.55, -r * 0.75, r * 0.62, -r * 0.15, r * 0.16, 0),
        e.bezierCurveTo(r * 0.62, r * 0.15, r * 0.55, r * 0.75, 0, r),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = `#8a3a30`),
        (e.lineWidth = r * 0.035),
        e.beginPath(),
        e.moveTo(r * 0.08, -r * 0.55),
        e.bezierCurveTo(
          r * 0.6,
          -r * 0.95,
          r * 0.95,
          -r * 0.35,
          r * 0.62,
          -r * 0.1,
        ),
        e.stroke(),
        e.beginPath(),
        e.arc(r * 0.56, -r * 0.3, r * 0.1, 0, Math.PI * 1.6),
        e.stroke(),
        e.beginPath(),
        e.moveTo(r * 0.08, r * 0.55),
        e.bezierCurveTo(
          r * 0.6,
          r * 0.95,
          r * 0.95,
          r * 0.35,
          r * 0.62,
          r * 0.1,
        ),
        e.stroke(),
        e.beginPath(),
        e.arc(r * 0.56, r * 0.3, r * 0.1, Math.PI * 0.4, Math.PI * 2),
        e.stroke(),
        (e.fillStyle = `#8f4a33`),
        e.beginPath(),
        e.ellipse(r * 0.28, 0, r * 0.08, r * 0.2, 0, 0, Math.PI * 2),
        e.fill(),
        e.restore());
    ((e.fillStyle = `#96583a`),
      e.beginPath(),
      e.moveTo(0, -r * 0.34),
      e.lineTo(r * 0.1, 0),
      e.lineTo(0, r * 0.34),
      e.lineTo(-r * 0.1, 0),
      e.closePath(),
      e.fill(),
      e.restore());
  };
  i(t / 2, n / 2, t * 0.36);
  for (let [e, r] of [
    [0, 0],
    [t, 0],
    [0, n],
    [t, n],
  ])
    i(e, r, t * 0.36);
  for (let [r, i] of [
    [0, n / 2],
    [t, n / 2],
    [t / 2, 0],
    [t / 2, n],
  ])
    ((e.fillStyle = `#6d1d24`),
      e.beginPath(),
      e.ellipse(r, i, t * 0.05, t * 0.11, 0, 0, Math.PI * 2),
      e.fill());
}
function N(e, t) {
  let n = t / (4 * Math.SQRT2),
    r = [
      `#6b4424`,
      `#5c3a1f`,
      `#74492a`,
      `#613d21`,
      `#6f4526`,
      `#553519`,
      `#7a4f2d`,
      `#64401f`,
    ];
  ((e.fillStyle = `#2a1a0e`),
    e.fillRect(0, 0, t, t),
    e.save(),
    e.rotate(-Math.PI / 4),
    e.scale(n, n));
  let i = A(3);
  for (let t = -4; t <= 4; t++)
    for (let n = -12; n <= 16; n++)
      for (let [a, o, s, c, l] of [
        [0, 0, 4, 1, 0],
        [-1, 0, 1, 4, 4],
      ]) {
        let u = n + 4 * t + a,
          d = n - 4 * t + o;
        ((e.fillStyle = r[(((n % 4) + 4) % 4) + l]),
          e.fillRect(u + 0.03, d + 0.03, s - 0.06, c - 0.06),
          (e.strokeStyle = `rgba(20,10,4,.25)`),
          (e.lineWidth = 0.02));
        for (let t = 0; t < 5; t++) {
          let n = 0.15 + t * 0.17 + i() * 0.05;
          (e.beginPath(),
            s > c
              ? (e.moveTo(u + 0.1, d + n),
                e.lineTo(u + s - 0.1, d + n + (i() - 0.5) * 0.05))
              : (e.moveTo(u + n, d + 0.1),
                e.lineTo(u + n + (i() - 0.5) * 0.05, d + c - 0.1)),
            e.stroke());
        }
      }
  e.restore();
}
function P(e, t, n, r, i) {
  ((e.fillStyle = r), e.fillRect(0, 0, t, n));
  let a = A(11);
  for (let r = 0; r < 140; r++) {
    let o = a() * t,
      s = a() * 0.35;
    ((e.strokeStyle = i.replace(`A`, s.toFixed(2))),
      (e.lineWidth = 0.6 + a() * 2.2),
      e.beginPath(),
      e.moveTo(o, 0));
    for (let t = 0; t <= n; t += 16)
      e.lineTo(o + Math.sin(t * 0.013 + r) * 6 * a(), t);
    e.stroke();
  }
}
var F = (t, r, i, a, o = 0, s = 0, c = 0, l = null) => {
    let u = new e(new n(t, r, i), a);
    return (u.position.set(o, s, c), l?.add(u), u);
  },
  I = (t, n, r = 24) =>
    new e(
      new s(
        t.map(([e, t]) => new c(e, t)),
        r,
      ),
      n,
    );
function L() {
  let e = j(256, 256, M, [1, 1]),
    t = j(512, 512, (e, t) => N(e, t), [1, 1]),
    n = j(
      256,
      512,
      (e, t, n) => P(e, t, n, `#3a2413`, `rgba(15,7,2,A)`),
      [1, 1],
    ),
    r = j(
      256,
      512,
      (e, t, n) => P(e, t, n, `#7a5430`, `rgba(40,20,6,A)`),
      [1, 1],
    );
  return {
    damask: new i({ map: e, roughness: 0.85 }),
    floor: new i({ map: t, roughness: 0.42, metalness: 0.05 }),
    wood: new i({ map: n, roughness: 0.45, metalness: 0.05 }),
    cabinet: new i({ map: r, roughness: 0.5, metalness: 0.05 }),
    darkWood: new i({ color: 1905162, roughness: 0.5 }),
    gold: new i({ color: 13213772, roughness: 0.32, metalness: 1 }),
    brass: new i({ color: 11569732, roughness: 0.38, metalness: 1 }),
    felt: new i({ color: 1058332, roughness: 0.95 }),
    ceiling: new i({ color: 1780282, roughness: 0.8 }),
    curtain: new i({ color: 11569746, roughness: 0.7, side: 2 }),
    leather: new i({ color: 4856338, roughness: 0.55 }),
    glow: new i({ color: 16773584, emissive: 16767392, emissiveIntensity: 3 }),
    shelfGlow: new i({
      color: 16771524,
      emissive: 16764810,
      emissiveIntensity: 2.2,
    }),
    backlit: new i({
      map: e,
      emissive: 16769732,
      emissiveMap: e,
      emissiveIntensity: 0.55,
      roughness: 0.9,
    }),
    edgeGlow: new i({
      color: 15138800,
      emissive: 13172704,
      emissiveIntensity: 2.6,
    }),
    glass: new i({
      color: 13625066,
      roughness: 0.04,
      metalness: 0.1,
      transparent: !0,
      opacity: 0.1,
      depthWrite: !1,
    }),
    bottle: new i({
      color: 1323036,
      roughness: 0.12,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.9,
    }),
    wine: new i({
      color: 4851218,
      roughness: 0.2,
      transparent: !0,
      opacity: 0.92,
    }),
    label: new i({ color: 15260864, roughness: 0.8 }),
    painting: new i({
      map: j(256, 192, (e, t, n) => {
        let r = e.createLinearGradient(0, 0, 0, n);
        (r.addColorStop(0, `#3b3a2c`),
          r.addColorStop(0.6, `#6b5a3a`),
          r.addColorStop(1, `#20180f`),
          (e.fillStyle = r),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#1a140c`),
          e.beginPath(),
          e.moveTo(0, n * 0.72));
        for (let r = 0; r <= t; r += 8)
          e.lineTo(r, n * 0.66 + Math.sin(r * 0.05) * 8);
        (e.lineTo(t, n),
          e.lineTo(0, n),
          e.fill(),
          (e.fillStyle = `rgba(240,200,120,.5)`),
          e.beginPath(),
          e.arc(t * 0.7, n * 0.3, 14, 0, Math.PI * 2),
          e.fill());
      }),
      roughness: 0.8,
    }),
  };
}
function R(n, a, s = 3.8) {
  let c = new f();
  (c.position.set(0, s - 0.26, 0), n.add(c));
  let l = new e(new h(0.012, 0.012, 0.5), a.brass);
  ((l.position.y = -0.25), c.add(l));
  let u = I(
    [
      [0, 0],
      [0.08, -0.05],
      [0.13, -0.2],
      [0.06, -0.34],
      [0.1, -0.42],
      [0.02, -0.52],
      [0, -0.52],
    ],
    a.gold,
  );
  ((u.position.y = -0.5), c.add(u));
  let d = new e(new r(0.42, 0.018, 8, 48), a.gold);
  ((d.rotation.x = Math.PI / 2), (d.position.y = -0.86), c.add(d));
  let p = new i({
      color: 16774888,
      emissive: 16764808,
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.3,
    }),
    m = [];
  for (let n = 0; n < 8; n++) {
    let r = (n / 8) * Math.PI * 2,
      s = Math.cos(r) * 0.42,
      l = Math.sin(r) * 0.42,
      u = new e(new h(0.01, 0.01, 0.42), a.gold);
    (u.position.set(s / 2, -0.8, l / 2),
      (u.rotation.z = Math.PI / 2),
      (u.rotation.y = -r),
      c.add(u));
    let d = I(
      [
        [0, 0],
        [0.045, 0.02],
        [0.05, 0.05],
        [0, 0.05],
      ],
      a.gold,
      12,
    );
    (d.position.set(s, -0.87, l), c.add(d));
    let f = new e(
      new h(0.016, 0.016, 0.09, 10),
      new i({ color: 15919832, roughness: 0.6 }),
    );
    (f.position.set(s, -0.78, l), c.add(f));
    let g = new e(new t(0.024, 10, 8), a.glow);
    ((g.scale.y = 1.5), g.position.set(s, -0.7, l), c.add(g), m.push(g));
    for (let t = 0; t < 3; t++) {
      let n = new e(new o(0.022), p);
      ((n.scale.y = 1.8),
        n.position.set(
          Math.cos(r + 0.39) * 0.43,
          -0.93 - t * 0.055,
          Math.sin(r + 0.39) * 0.43,
        ),
        c.add(n));
    }
  }
  let _ = new e(new o(0.05), p);
  ((_.scale.y = 2), (_.position.y = -1.08), c.add(_));
  let v = new g(16761466, 9, 9, 2);
  return (v.position.set(0, -0.75, 0), c.add(v), v);
}
var z = {
    jacket: 15656143,
    shirt: 16513782,
    black: 1579035,
    skin: 14265996,
    mask: 2565932,
    socket: 2826525,
    eye: 15331810,
    halo: 13625544,
  },
  B = 0.215;
function V(t = {}) {
  let n = Object.assign({}, z, t),
    r = new k({
      faction: 0,
      cls: `assault`,
      body: `seamless`,
      kit: 0,
      face: 0,
      headgear: 0,
    }),
    o = r.sk,
    s = (e, t = 0.7) => new i({ color: e, roughness: t }),
    c = {
      jacket: s(n.jacket, 0.78),
      trouser: s(n.black, 0.92),
      shoe: s(460552, 0.3),
      head: s(n.mask, 0.8),
      tones: new i({ vertexColors: !0, roughness: 0.65, flatShading: !0 }),
    },
    d = new Set([
      r.material,
      r.smoothMaterial,
      r.limbMaterial,
      r.shellMaterial,
      ...r.paintMats,
    ]),
    f = 0;
  for (let e of [...r.meshes]) {
    let t = e.parent?.name,
      i = () => {
        (e.removeFromParent(),
          e.geometry.dispose(),
          r.meshes.splice(r.meshes.indexOf(e), 1));
      };
    if (t === `head` || t === `weapon`) i();
    else if (t === `torso`)
      e.geometry.userData.smoothLimb
        ? (e.geometry.dispose(),
          (e.geometry = E(0.42, 0.32, 0.25, 0.42, 0.012)),
          (e.material = c.jacket))
        : i();
    else if (t === `hips`) e.material = f++ ? c.trouser : c.jacket;
    else if (t === `armL` || t === `armR`) {
      if (!e.geometry.userData.bend) {
        i();
        continue;
      }
      let t = y({
        top: 0.05,
        bottom: -0.52,
        a: [0.066, 0.066],
        b: [0.058, 0.058],
        round: 0,
        joints: [{ y: -b, band: 0.1, below: !0 }],
        colour: () => [16777215, x.cloth, 0.9],
      });
      for (let n of r.limbs) n.g === e.geometry && (n.g = t);
      (e.geometry.dispose(), (e.geometry = t), (e.material = c.jacket));
    } else if (t === `foreL` || t === `foreR`) {
      let t = e.geometry.attributes.position,
        r = new Float32Array(t.count * 3),
        i = new u(n.shirt),
        o = new u(n.skin);
      for (let e = 0; e < t.count; e++)
        (t.getY(e) > -0.258 ? i : o).toArray(r, e * 3);
      (e.geometry.setAttribute(`color`, new a(r, 3)), (e.material = c.tones));
    } else
      t === `legL` || t === `legR`
        ? (e.material = c.trouser)
        : (t === `shinL` || t === `shinR`) && (e.material = c.shoe);
  }
  for (let e of r.glow ?? []) e.removeFromParent();
  r.glow = [];
  for (let e of d) e?.dispose();
  let p = new e(
    D([
      T(0.2, 0.05, 0.17, 0, 0.6, 0, n.shirt),
      T(0.12, 0.12, 0.006, 0, 0.53, -0.128, n.shirt, { bevel: 0 }),
      T(0.07, 0.1, 0.006, 0, 0.43, -0.128, n.shirt, { bevel: 0 }),
      ...[-1, 1].map((e) =>
        T(0.035, 0.26, 0.008, e * 0.058, 0.46, -0.13, n.jacket, {
          bevel: 0,
          rot: [0, 0, -e * 0.26],
          shade: 0.86,
        }),
      ),
      ...[-1, 1].map((e) =>
        T(0.05, 0.034, 0.02, e * 0.03, 0.585, -0.136, n.black, {
          bevel: 0.006,
        }),
      ),
      T(0.02, 0.024, 0.024, 0, 0.585, -0.14, n.black, { bevel: 0.004 }),
      T(0.018, 0.018, 0.006, 0, 0.33, -0.129, n.black, { bevel: 0 }),
    ]),
    c.tones,
  );
  ((p.castShadow = !0), o.torso.add(p));
  let h = new e(v(C.w, C.h, C.d, 0.022), c.head);
  ((h.position.y = C.y), (h.castShadow = !0), o.head.add(h));
  let g = new e(v(0.13, 0.1, 0.12, 0.02), c.head);
  (g.position.set(0, 0.02, 0.01), o.head.add(g));
  let _ = new i({
      color: n.socket,
      roughness: 0.9,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
    A = new l({ color: n.eye, toneMapped: !1, side: 2 });
  for (let t of [-1, 1]) {
    let n = new e(new m(0.058, 0.02), _);
    (n.position.set(t * 0.052, B, S - 0.0015),
      n.rotation.set(0, Math.PI, t * -0.28),
      o.head.add(n));
    let r = new e(new m(0.044, 0.009), A);
    (r.position.set(t * 0.052, B, S - 0.0025),
      (r.rotation.z = t * 0.28),
      o.head.add(r));
  }
  let j = w();
  return (
    O(
      {
        h: 1.8,
        lean: 0,
        hspeed: 0,
        moveF: 0,
        moveR: 0,
        phase: 0,
        sprintW: 0,
        aimW: 0,
        pitch: 0,
        grounded: !0,
        swim: !1,
        airT: 0,
        fireT: 99,
        reloadT: 99,
        hitT: 99,
        landT: 99,
        deadT: -1,
        deadDir: 0,
        breathe: 0,
      },
      j,
    ),
    (r.contactR = r.contactL = 0),
    {
      s: r,
      sk: o,
      root: r.root,
      base: j,
      dispose() {
        (r.root.removeFromParent(),
          r.root.traverse((e) => e.geometry?.dispose()));
        for (let e of Object.values(c)) e.dispose();
        (A.dispose(), _.dispose());
      },
    }
  );
}
export { V as a, R as i, L as n, I as o, j as r, A as s, F as t };
//# sourceMappingURL=continental-kit-BYKNMKwf.js.map
