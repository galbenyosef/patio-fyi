/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Ct as e,
  F as t,
  I as n,
  K as r,
  Mn as i,
  R as a,
  Rn as o,
  Rt as s,
  U as c,
  Ut as l,
  Xt as u,
  en as d,
  fn as f,
  lt as p,
  mn as m,
  tn as h,
  wn as g,
  zt as _,
} from "./graphics-quality-BsjABS0s.js";
import {
  $ as v,
  A as y,
  H as b,
  Q as x,
  U as S,
  Z as C,
  bt as w,
  j as T,
  lt as E,
  r as D,
  st as O,
  tt as k,
} from "./cube-soldier-BRpW8Tqo.js";
var A = (e) => () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296;
function j(e, t, n, r = null, i = !0) {
  let o = document.createElement(`canvas`);
  ((o.width = e), (o.height = t), n(o.getContext(`2d`), e, t));
  let s = new a(o);
  return (
    i && (s.colorSpace = m),
    (s.anisotropy = 8),
    r && ((s.wrapS = s.wrapT = f), s.repeat.set(...r)),
    s
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
var F = (e, n, r, i, a = 0, o = 0, c = 0, l = null) => {
    let u = new s(new t(e, n, r), i);
    return (u.position.set(a, o, c), l?.add(u), u);
  },
  I = (t, n, r = 24) =>
    new s(
      new e(
        t.map(([e, t]) => new o(e, t)),
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
    damask: new l({ map: e, roughness: 0.85 }),
    floor: new l({ map: t, roughness: 0.42, metalness: 0.05 }),
    wood: new l({ map: n, roughness: 0.45, metalness: 0.05 }),
    cabinet: new l({ map: r, roughness: 0.5, metalness: 0.05 }),
    darkWood: new l({ color: 1905162, roughness: 0.5 }),
    gold: new l({ color: 13213772, roughness: 0.32, metalness: 1 }),
    brass: new l({ color: 11569732, roughness: 0.38, metalness: 1 }),
    felt: new l({ color: 1058332, roughness: 0.95 }),
    ceiling: new l({ color: 1780282, roughness: 0.8 }),
    curtain: new l({ color: 11569746, roughness: 0.7, side: 2 }),
    leather: new l({ color: 4856338, roughness: 0.55 }),
    glow: new l({ color: 16773584, emissive: 16767392, emissiveIntensity: 3 }),
    shelfGlow: new l({
      color: 16771524,
      emissive: 16764810,
      emissiveIntensity: 2.2,
    }),
    backlit: new l({
      map: e,
      emissive: 16769732,
      emissiveMap: e,
      emissiveIntensity: 0.55,
      roughness: 0.9,
    }),
    edgeGlow: new l({
      color: 15138800,
      emissive: 13172704,
      emissiveIntensity: 2.6,
    }),
    glass: new l({
      color: 13625066,
      roughness: 0.04,
      metalness: 0.1,
      transparent: !0,
      opacity: 0.1,
      depthWrite: !1,
    }),
    bottle: new l({
      color: 1323036,
      roughness: 0.12,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.9,
    }),
    wine: new l({
      color: 4851218,
      roughness: 0.2,
      transparent: !0,
      opacity: 0.92,
    }),
    label: new l({ color: 15260864, roughness: 0.8 }),
    painting: new l({
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
function R(e, t, n = 3.8) {
  let a = new p();
  (a.position.set(0, n - 0.26, 0), e.add(a));
  let o = new s(new r(0.012, 0.012, 0.5), t.brass);
  ((o.position.y = -0.25), a.add(o));
  let c = I(
    [
      [0, 0],
      [0.08, -0.05],
      [0.13, -0.2],
      [0.06, -0.34],
      [0.1, -0.42],
      [0.02, -0.52],
      [0, -0.52],
    ],
    t.gold,
  );
  ((c.position.y = -0.5), a.add(c));
  let d = new s(new i(0.42, 0.018, 8, 48), t.gold);
  ((d.rotation.x = Math.PI / 2), (d.position.y = -0.86), a.add(d));
  let f = new l({
      color: 16774888,
      emissive: 16764808,
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.3,
    }),
    m = [];
  for (let e = 0; e < 8; e++) {
    let n = (e / 8) * Math.PI * 2,
      i = Math.cos(n) * 0.42,
      o = Math.sin(n) * 0.42,
      c = new s(new r(0.01, 0.01, 0.42), t.gold);
    (c.position.set(i / 2, -0.8, o / 2),
      (c.rotation.z = Math.PI / 2),
      (c.rotation.y = -n),
      a.add(c));
    let d = I(
      [
        [0, 0],
        [0.045, 0.02],
        [0.05, 0.05],
        [0, 0.05],
      ],
      t.gold,
      12,
    );
    (d.position.set(i, -0.87, o), a.add(d));
    let p = new s(
      new r(0.016, 0.016, 0.09, 10),
      new l({ color: 15919832, roughness: 0.6 }),
    );
    (p.position.set(i, -0.78, o), a.add(p));
    let h = new s(new g(0.024, 10, 8), t.glow);
    ((h.scale.y = 1.5), h.position.set(i, -0.7, o), a.add(h), m.push(h));
    for (let e = 0; e < 3; e++) {
      let t = new s(new u(0.022), f);
      ((t.scale.y = 1.8),
        t.position.set(
          Math.cos(n + 0.39) * 0.43,
          -0.93 - e * 0.055,
          Math.sin(n + 0.39) * 0.43,
        ),
        a.add(t));
    }
  }
  let _ = new s(new u(0.05), f);
  ((_.scale.y = 2), (_.position.y = -1.08), a.add(_));
  let v = new h(16761466, 9, 9, 2);
  return (v.position.set(0, -0.75, 0), a.add(v), v);
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
function V(e = {}) {
  let t = Object.assign({}, z, e),
    r = new D({
      faction: 0,
      cls: `assault`,
      body: `seamless`,
      kit: 0,
      face: 0,
      headgear: 0,
    }),
    i = r.sk,
    a = (e, t = 0.7) => new l({ color: e, roughness: t }),
    o = {
      jacket: a(t.jacket, 0.78),
      trouser: a(t.black, 0.92),
      shoe: a(460552, 0.3),
      head: a(t.mask, 0.8),
      tones: new l({ vertexColors: !0, roughness: 0.65, flatShading: !0 }),
    },
    u = new Set([
      r.material,
      r.smoothMaterial,
      r.limbMaterial,
      r.shellMaterial,
      ...r.paintMats,
    ]),
    f = 0;
  for (let e of [...r.meshes]) {
    let i = e.parent?.name,
      a = () => {
        (e.removeFromParent(),
          e.geometry.dispose(),
          r.meshes.splice(r.meshes.indexOf(e), 1));
      };
    if (i === `head` || i === `weapon`) a();
    else if (i === `torso`)
      e.geometry.userData.smoothLimb
        ? (e.geometry.dispose(),
          (e.geometry = y(0.42, 0.32, 0.25, 0.42, 0.012)),
          (e.material = o.jacket))
        : a();
    else if (i === `hips`) e.material = f++ ? o.trouser : o.jacket;
    else if (i === `armL` || i === `armR`) {
      if (!e.geometry.userData.bend) {
        a();
        continue;
      }
      let t = T({
        top: 0.05,
        bottom: -0.52,
        a: [0.066, 0.066],
        b: [0.058, 0.058],
        round: 0,
        joints: [{ y: -w, band: 0.1, below: !0 }],
        colour: () => [16777215, C.cloth, 0.9],
      });
      for (let n of r.limbs) n.g === e.geometry && (n.g = t);
      (e.geometry.dispose(), (e.geometry = t), (e.material = o.jacket));
    } else if (i === `foreL` || i === `foreR`) {
      let r = e.geometry.attributes.position,
        i = new Float32Array(r.count * 3),
        a = new c(t.shirt),
        s = new c(t.skin);
      for (let e = 0; e < r.count; e++)
        (r.getY(e) > -0.258 ? a : s).toArray(i, e * 3);
      (e.geometry.setAttribute(`color`, new n(i, 3)), (e.material = o.tones));
    } else
      i === `legL` || i === `legR`
        ? (e.material = o.trouser)
        : (i === `shinL` || i === `shinR`) && (e.material = o.shoe);
  }
  for (let e of r.glow ?? []) e.removeFromParent();
  r.glow = [];
  for (let e of u) e?.dispose();
  let p = new s(
    k([
      v(0.2, 0.05, 0.17, 0, 0.6, 0, t.shirt),
      v(0.12, 0.12, 0.006, 0, 0.53, -0.128, t.shirt, { bevel: 0 }),
      v(0.07, 0.1, 0.006, 0, 0.43, -0.128, t.shirt, { bevel: 0 }),
      ...[-1, 1].map((e) =>
        v(0.035, 0.26, 0.008, e * 0.058, 0.46, -0.13, t.jacket, {
          bevel: 0,
          rot: [0, 0, -e * 0.26],
          shade: 0.86,
        }),
      ),
      ...[-1, 1].map((e) =>
        v(0.05, 0.034, 0.02, e * 0.03, 0.585, -0.136, t.black, {
          bevel: 0.006,
        }),
      ),
      v(0.02, 0.024, 0.024, 0, 0.585, -0.14, t.black, { bevel: 0.004 }),
      v(0.018, 0.018, 0.006, 0, 0.33, -0.129, t.black, { bevel: 0 }),
    ]),
    o.tones,
  );
  ((p.castShadow = !0), i.torso.add(p));
  let m = new s(x(S.w, S.h, S.d, 0.022), o.head);
  ((m.position.y = S.y), (m.castShadow = !0), i.head.add(m));
  let h = new s(x(0.13, 0.1, 0.12, 0.02), o.head);
  (h.position.set(0, 0.02, 0.01), i.head.add(h));
  let g = new l({
      color: t.socket,
      roughness: 0.9,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
    A = new _({ color: t.eye, toneMapped: !1, side: 2 });
  for (let e of [-1, 1]) {
    let t = new s(new d(0.058, 0.02), g);
    (t.position.set(e * 0.052, B, b - 0.0015),
      t.rotation.set(0, Math.PI, e * -0.28),
      i.head.add(t));
    let n = new s(new d(0.044, 0.009), A);
    (n.position.set(e * 0.052, B, b - 0.0025),
      (n.rotation.z = e * 0.28),
      i.head.add(n));
  }
  let j = E();
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
      sk: i,
      root: r.root,
      base: j,
      dispose() {
        (r.root.removeFromParent(),
          r.root.traverse((e) => e.geometry?.dispose()));
        for (let e of Object.values(o)) e.dispose();
        (A.dispose(), g.dispose());
      },
    }
  );
}
export { V as a, R as i, L as n, I as o, j as r, A as s, F as t };
//# sourceMappingURL=continental-kit-cMnzi5gd.js.map
