/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $t as e,
  An as t,
  At as n,
  Bt as r,
  Dn as i,
  Dt as a,
  F as o,
  Fn as s,
  Gn as c,
  Gt as l,
  H as u,
  Hn as d,
  I as f,
  K as p,
  L as m,
  Rt as h,
  Sn as g,
  U as ee,
  Vn as te,
  Vt as _,
  W as v,
  Zt as y,
  _n as ne,
  an as b,
  at as x,
  bn as S,
  cn as re,
  dn as C,
  dt as ie,
  gn as ae,
  hn as oe,
  in as w,
  jt as T,
  kn as se,
  kt as ce,
  nn as E,
  nt as le,
  q as D,
  rn as ue,
  v as O,
  vt as de,
  xn as fe,
  yn as k,
  z as pe,
  zn as me,
  zt as he,
} from "./graphics-quality-CrL3qbU3.js";
import {
  c as A,
  d as ge,
  i as j,
  n as _e,
  s as M,
  t as N,
  u as ve,
} from "./kepler-CGq3Tp1E.js";
import {
  EARTH_ANG as ye,
  EARTH_DIR as be,
  ORBIT_N as xe,
  ORBIT_W as Se,
  armAt as Ce,
  auroraOrbit as we,
  craneAt as Te,
  orbitAt as Ee,
  sunDirAt as De,
} from "./kepler-sim-BMWVfyGS.js";
function Oe(e, t, n) {
  let i = [],
    a = (e) => (i.push(e), e),
    s = 29,
    c = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296,
    u = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let o = a(new pe(i));
      return (
        (o.wrapS = o.wrapT = oe),
        o.repeat.set(...r),
        (o.colorSpace = ne),
        (o.anisotropy = 8),
        o
      );
    },
    f = (e, t, n, r, i = 0.12) => {
      for (let a = 0; a < r; a++) {
        let r = c() * t,
          a = c() * n,
          o = 10 + c() * n * 0.4,
          s = e.createLinearGradient(r, a, r, a + o);
        (s.addColorStop(0, `rgba(20,18,16,${i * c()})`),
          s.addColorStop(1, `rgba(20,18,16,0)`),
          (e.fillStyle = s),
          e.fillRect(r, a, 1 + c() * 4, o));
      }
    },
    p = (e, t, n, r, i = 0.08) => {
      for (let a = 0; a < r; a++)
        ((e.fillStyle = `rgba(${c() < 0.5 ? `0,0,0` : `255,255,255`},${c() * i})`),
          e.fillRect(c() * t, c() * n, 1 + c() * 2, 1 + c() * 2));
    },
    h = new ie();
  ((h.name = `kepler-detail`), t.add(h));
  let g = u(
      512,
      512,
      (e, t, n) => {
        ((e.fillStyle = `#3d434b`), e.fillRect(0, 0, t, n));
        for (let t = 0; t < 4; t++)
          ((e.fillStyle = `rgba(${c() < 0.5 ? `0,0,0` : `255,255,255`},${0.03 + c() * 0.05})`),
            e.fillRect((t % 2) * 256, (t >> 1) * 256, 256, 256));
        (p(e, t, n, 6e3, 0.06),
          f(e, t, n, 60, 0.18),
          (e.strokeStyle = `rgba(15,17,20,.85)`),
          (e.lineWidth = 3));
        for (let r of [0, 256, 512])
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
        ((e.strokeStyle = `rgba(200,205,210,.08)`), (e.lineWidth = 1));
        for (let r of [3, 259])
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
        e.fillStyle = `rgba(12,13,15,.7)`;
        for (let t = 10; t < n; t += 24)
          for (let n of [8, 248, 264, 504]) e.fillRect(n - 2, t - 2, 4, 4);
        ((e.fillStyle = `rgba(217,169,31,.55)`),
          (e.font = `bold 22px monospace`),
          e.fillText(`K-7`, 30, 60),
          e.fillText(`K-8`, 286, 316),
          (e.fillStyle = `rgba(230,230,225,.35)`),
          (e.font = `14px monospace`),
          e.fillText(`PRESSURE HULL · DO NOT DRILL`, 30, 230),
          (e.fillStyle = `rgba(30,34,40,.9)`),
          e.fillRect(300, 60, 120, 70),
          (e.strokeStyle = `rgba(217,169,31,.6)`),
          e.strokeRect(300, 60, 120, 70),
          (e.fillStyle = `rgba(217,169,31,.7)`),
          (e.font = `bold 13px monospace`),
          e.fillText(`O2 · N2`, 326, 90),
          e.fillText(`VALVE 7-14`, 318, 112));
      },
      [45, 12],
    ),
    te = u(
      256,
      64,
      (e, t, n) => {
        ((e.fillStyle = `#d9a91f`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#1b1c1e`));
        for (let r = -64; r < t + 64; r += 32)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r + 16, 0),
            e.lineTo(r - 16, n),
            e.lineTo(r - 32, n),
            e.fill());
        (p(e, t, n, 800, 0.25), f(e, t, n, 20, 0.3));
      },
      [45, 1],
    ),
    y = a(new l({ map: g, roughness: 0.75, metalness: 0.35 })),
    b = a(new l({ map: te, roughness: 0.8, metalness: 0.1 }));
  (g.repeat.set(1, 1), te.repeat.set(1, 1));
  let S = { panel: [], hazard: [] },
    C = (e, t, n, r, i, a, o, s) => {
      let c = new E(e, t),
        l = c.attributes.uv,
        u = n === b ? 1 : t / 8;
      for (let e = 0; e < l.count; e++)
        l.setXY(e, l.getX(e) * s, l.getY(e) * u);
      (c.rotateY(o),
        c.translate(r, i, a),
        S[n === b ? `hazard` : `panel`].push(c));
    },
    ae = N.x1 - N.x0,
    w = N.z1 - A.wz;
  (C(ae, N.h - 1.2, y, 0, 13.2 + (N.h - 1.2) / 2, N.z1 - 0.02, Math.PI, ae / 8),
    C(ae, 1.2, b, 0, 12.6, N.z1 - 0.025, Math.PI, ae / 2));
  for (let e of [-1, 1]) {
    let t = e < 0 ? N.x0 + 0.02 : N.x1 - 0.02;
    (C(
      w,
      N.h - 1.2,
      y,
      t,
      13.2 + (N.h - 1.2) / 2,
      (A.wz + N.z1) / 2,
      (-e * Math.PI) / 2,
      w / 8,
    ),
      C(
        w,
        1.2,
        b,
        t + (e < 0 ? 0.005 : -0.005),
        12.6,
        (A.wz + N.z1) / 2,
        (-e * Math.PI) / 2,
        w / 2,
      ));
  }
  for (let [e, t] of [
    [`panel`, y],
    [`hazard`, b],
  ]) {
    let n = new r(a(O(S[e])), t);
    (S[e].forEach((e) => e.dispose()), (n.receiveShadow = !0), h.add(n));
  }
  {
    let e = { orange: [], blue: [], grey: [], dark: [] },
      t = { orange: 13133354, blue: 4156042, grey: 9080725, dark: 2764340 };
    for (let t of n.kepler?.pipes ?? []) {
      let n = t.alongX ? t.x1 - t.x0 : t.z1 - t.z0;
      t.runs.forEach(([r, i, a], o) => {
        let s = new D(i, i, n, 10, 1, !0);
        (s.rotateZ(Math.PI / 2),
          t.alongX || s.rotateY(Math.PI / 2),
          s.translate(
            t.alongX ? (t.x0 + t.x1) / 2 : t.x,
            12 + t.y + r,
            t.alongX ? t.z : (t.z0 + t.z1) / 2,
          ),
          e[a].push(s));
        for (let a = 3; a < n - 1; a += 6) {
          let n = new D(i * 1.45, i * 1.45, 0.12, 10);
          (n.rotateZ(Math.PI / 2),
            t.alongX || n.rotateY(Math.PI / 2),
            n.translate(
              t.alongX ? t.x0 + a : t.x,
              12 + t.y + r,
              t.alongX ? t.z : t.z0 + a,
            ),
            e.dark.push(n));
        }
      });
      for (let r = 1.5; r < n; r += 3) {
        let n = new o(
          t.alongX ? 0.08 : 0.5,
          t.runs.length * 0.42 + 0.2,
          t.alongX ? 0.5 : 0.08,
        );
        (n.translate(
          t.alongX ? t.x0 + r : t.x + (t.x > 0 ? 0.15 : -0.15),
          12 + t.y + t.runs.reduce((e, t) => e + t[0], 0) / t.runs.length,
          t.alongX ? t.z + (t.z > 0 ? 0.15 : -0.15) : t.z0 + r,
        ),
          e.dark.push(n));
      }
    }
    for (let [n, i] of Object.entries(e)) {
      if (!i.length) continue;
      let e = new r(
        a(O(i)),
        a(new l({ color: t[n], roughness: 0.5, metalness: 0.5 })),
      );
      (i.forEach((e) => e.dispose()),
        (e.castShadow = !0),
        (e.receiveShadow = !0),
        h.add(e));
    }
  }
  {
    let e = u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#25292e`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#565c64`));
        for (let r = 0; r < t; r += 8) e.fillRect(r, 0, 3, n);
        e.fillStyle = `#4a5058`;
        for (let r = 0; r < n; r += 32) e.fillRect(0, r, t, 4);
        (p(e, t, n, 1500, 0.12), f(e, t, n, 12, 0.25));
      }),
      t = [],
      i = [],
      o = [],
      s = 0;
    for (let e of n.objects) {
      if (
        e.kind !== `box` ||
        e.material !== `grating` ||
        e.sy > 0.4 ||
        e.rotX ||
        e.ry
      )
        continue;
      let n = e.y + e.sy + 0.012,
        r = e.x - e.sx / 2,
        a = e.x + e.sx / 2,
        c = e.z - e.sz / 2,
        l = e.z + e.sz / 2;
      (t.push(r, n, c, a, n, c, a, n, l, r, n, l),
        i.push(r, c, a, c, a, l, r, l),
        o.push(s, s + 2, s + 1, s, s + 3, s + 2),
        (s += 4));
    }
    if (s) {
      let n = a(new m());
      (n.setAttribute(`position`, new x(t, 3)),
        n.setAttribute(`uv`, new x(i, 2)),
        n.setIndex(o),
        n.computeVertexNormals());
      let s = new r(
        n,
        a(
          new l({
            map: e,
            roughness: 0.6,
            metalness: 0.6,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -2,
          }),
        ),
      );
      ((s.receiveShadow = !0), h.add(s));
    }
  }
  let T = u(256, 256, (e, t, n) => {
      ((e.fillStyle = `#d9a91f`),
        e.fillRect(0, 0, t, n),
        p(e, t, n, 2500, 0.15),
        f(e, t, n, 40, 0.35),
        (e.fillStyle = `#1b1c1e`));
      for (let r = -64; r < t + 64; r += 40)
        (e.beginPath(),
          e.moveTo(r, n - 40),
          e.lineTo(r + 20, n - 40),
          e.lineTo(r, n),
          e.lineTo(r - 20, n),
          e.fill());
      e.fillStyle = `rgba(30,30,30,.8)`;
      for (let [t, n] of [
        [30, 30],
        [226, 30],
        [30, 170],
        [226, 170],
      ])
        (e.beginPath(), e.arc(t, n, 9, 0, 7), e.fill());
      ((e.font = `bold 30px monospace`),
        e.fillText(`CRADLE`, 70, 110),
        (e.font = `16px monospace`),
        e.fillText(`SWL 4000 t`, 80, 140));
    }),
    se = u(512, 256, (e, t, n) => {
      ((e.fillStyle = `#8a8f95`),
        e.fillRect(0, 0, t, n),
        p(e, t, n, 5e3, 0.08));
      for (let t = 0; t < 8; t++)
        ((e.fillStyle = `rgba(${c() < 0.5 ? `40,44,50` : `170,175,180`},.15)`),
          e.fillRect((t % 4) * 128, (t >> 2) * 128, 127, 127));
      ((e.strokeStyle = `rgba(30,32,36,.6)`), (e.lineWidth = 2));
      for (let r = 0; r <= t; r += 128)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      (e.beginPath(),
        e.moveTo(0, 128),
        e.lineTo(t, 128),
        e.stroke(),
        (e.fillStyle = `#1a2330`));
      for (let n = 24; n < t; n += 48)
        (e.beginPath(), e.arc(n, 64, 9, 0, 7), e.fill());
      e.fillStyle = `rgba(120,170,220,.35)`;
      for (let n = 24; n < t; n += 48)
        (e.beginPath(), e.arc(n - 2, 62, 4, 0, 7), e.fill());
      ((e.fillStyle = `rgba(217,169,31,.7)`),
        e.fillRect(0, n - 14, t, 6),
        f(e, t, n, 40, 0.2));
    });
  {
    let e = (e, t) =>
      u(256, 256, (n, r, i) => {
        (n.clearRect(0, 0, r, i),
          (n.strokeStyle = t),
          (n.lineWidth = 10),
          (n.globalAlpha = 0.75),
          n.beginPath(),
          n.arc(128, 128, 118, 0, 7),
          n.stroke(),
          n.setLineDash([18, 14]),
          (n.lineWidth = 5),
          n.beginPath(),
          n.arc(128, 128, 100, 0, 7),
          n.stroke(),
          n.setLineDash([]),
          (n.fillStyle = t),
          (n.font = `bold 120px system-ui`),
          (n.textAlign = `center`),
          (n.textBaseline = `middle`),
          n.fillText(e, 128, 136));
      });
    for (let t of n.objects === void 0 ? [] : n.objectives) {
      let n = e(t.letter, `#e8e4d8`),
        i = t.radius,
        o = a(new E(i * 2, i * 2));
      o.rotateX(-Math.PI / 2);
      let s = new r(
        o,
        a(
          new _({
            map: n,
            transparent: !0,
            depthWrite: !1,
            opacity: 0.55,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4,
          }),
        ),
      );
      (s.position.set(t.pos[0], t.pos[1] + 0.02, t.pos[2]),
        (s.renderOrder = 1),
        h.add(s));
    }
    let t = [],
      i = [];
    for (let [e, r, a] of n.kepler?.lamps ?? []) {
      let n = a > 0 ? 1 : -1,
        s = new o(1.6, 0.7, 1);
      (s.rotateX(n * 0.5), s.translate(e, r - 0.1, a - n * 0.5), t.push(s));
      let c = new E(1.3, 0.5);
      (c.rotateX(-Math.PI / 2 + n * 0.5),
        c.translate(e, r - 0.47, a - n * 0.62),
        i.push(c));
    }
    if (t.length) {
      let e = new r(
        a(O(t)),
        a(new l({ color: 1908773, roughness: 0.5, metalness: 0.7 })),
      );
      ((e.castShadow = !0),
        h.add(e),
        h.add(
          new r(
            a(O(i)),
            a(new _({ color: new v(1.6, 1.2, 0.7), toneMapped: !1, side: 2 })),
          ),
        ),
        t.forEach((e) => e.dispose()),
        i.forEach((e) => e.dispose()));
    }
  }
  {
    let e = M,
      t = u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#3a4048`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 9e3, 0.1),
          (e.strokeStyle = `rgba(20,22,26,.6)`),
          (e.lineWidth = 2));
        for (let r = 0; r <= t; r += 64)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
      }),
      n = u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#c9cbc8`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 2e3, 0.05),
          (e.strokeStyle = `rgba(120,122,120,.8)`),
          (e.lineWidth = 3));
        for (let r = 0; r <= t; r += 64)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
        ((e.fillStyle = `#fff6e2`),
          e.fillRect(70, 70, 116, 52),
          e.fillRect(70, 134, 116, 52));
      }),
      i = a(
        new l({
          map: t,
          roughness: 0.95,
          metalness: 0,
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -2,
        }),
      ),
      o = a(
        new l({
          map: n,
          emissive: 16777215,
          emissiveMap: n,
          emissiveIntensity: 0.28,
          roughness: 0.8,
          metalness: 0,
        }),
      ),
      s = (t, n, r) => {
        let i = new E(e.x1 - e.x0 - 0.3, e.z1 - e.z0 - 0.3);
        i.rotateX(n ? Math.PI / 2 : -Math.PI / 2);
        let a = i.attributes.uv;
        for (let t = 0; t < a.count; t++)
          a.setXY(
            t,
            (a.getX(t) * (e.x1 - e.x0)) / r,
            (a.getY(t) * (e.z1 - e.z0)) / r,
          );
        return (i.translate((e.x0 + e.x1) / 2, t, (e.z0 + e.z1) / 2), i);
      };
    for (let [t, n] of [
      [i, [s(12.013, !1, 2), s(12 + e.f1 + 0.013, !1, 2)]],
      [o, [s(12 + e.f1 - 0.215, !0, 3), s(12 + e.roof - 0.215, !0, 3)]],
    ]) {
      let e = new r(a(O(n)), t);
      (n.forEach((e) => e.dispose()), (e.receiveShadow = !0), h.add(e));
    }
  }
  let ce = [
      u(512, 256, (e, t, n) => {
        ((e.fillStyle = `#3f6a8a`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < t; r += 12)
          ((e.fillStyle = `rgba(0,0,0,.22)`),
            e.fillRect(r, 0, 4, n),
            (e.fillStyle = `rgba(255,255,255,.08)`),
            e.fillRect(r + 6, 0, 3, n));
        ((e.fillStyle = `rgba(0,0,0,.35)`),
          e.fillRect(0, 0, t, 10),
          e.fillRect(0, n - 12, t, 12),
          p(e, t, n, 3e3, 0.08),
          f(e, t, n, 40, 0.3),
          (e.fillStyle = `rgba(235,235,230,.85)`),
          (e.font = `bold 26px monospace`),
          e.fillText(`KDYU 204117 3`, 22, 46),
          (e.font = `16px monospace`),
          e.fillText(`22G1 · MAX GROSS 30480 KG`, 22, 70),
          (e.fillStyle = `rgba(217,169,31,.9)`),
          e.fillRect(t - 120, n - 60, 96, 28),
          (e.fillStyle = `#111`),
          (e.font = `bold 16px monospace`),
          e.fillText(`BAY 7`, t - 104, n - 40));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#3f6a8a`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `rgba(0,0,0,.4)`),
          e.fillRect(t / 2 - 2, 0, 4, n));
        for (let t of [40, 90, 166, 216])
          ((e.fillStyle = `#2a3035`),
            e.fillRect(t - 4, 10, 8, n - 20),
            (e.fillStyle = `#8a8f95`),
            e.fillRect(t - 8, n / 2 - 6, 16, 12));
        (p(e, t, n, 1500, 0.08), f(e, t, n, 20, 0.3));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#30343a`),
          e.fillRect(0, 0, t, n),
          (e.strokeStyle = `#d9a91f`),
          (e.lineWidth = 14),
          e.strokeRect(7, 7, t - 14, n - 14),
          (e.strokeStyle = `rgba(0,0,0,.5)`),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(20, 20),
          e.lineTo(t - 20, n - 20),
          e.moveTo(t - 20, 20),
          e.lineTo(20, n - 20),
          e.stroke(),
          (e.fillStyle = `rgba(235,235,230,.8)`),
          (e.font = `bold 22px monospace`),
          e.fillText(`KEPLER`, 70, 118),
          (e.font = `14px monospace`),
          e.fillText(`FRAGILE · 4 t`, 78, 142),
          (e.fillStyle = `#d9a91f`));
        for (let [r, i] of [
          [0, 0],
          [t - 30, 0],
          [0, n - 30],
          [t - 30, n - 30],
        ])
          e.fillRect(r, i, 30, 30);
        (p(e, t, n, 1500, 0.1), f(e, t, n, 15, 0.25));
      }),
      se,
      T,
      u(512, 128, (e, t, n) => {
        ((e.fillStyle = `#7b6a52`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < n; r += 14)
          ((e.fillStyle = `rgba(30,26,20,.55)`),
            e.fillRect(0, r, t, 3),
            (e.fillStyle = `rgba(255,240,220,.08)`),
            e.fillRect(0, r + 4, t, 2));
        (p(e, t, n, 2e3, 0.1),
          (e.fillStyle = `rgba(240,240,240,.7)`),
          (e.font = `bold 18px monospace`),
          e.fillText(`HP-112 · 40 mm`, 20, 40),
          e.fillText(`QA ✓`, t - 80, 90));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#7b6a52`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 3e3, 0.1),
          f(e, t, n, 25, 0.2),
          (e.strokeStyle = `rgba(30,26,20,.6)`),
          (e.lineWidth = 2),
          e.strokeRect(6, 6, t - 12, n - 12),
          (e.fillStyle = `rgba(240,240,240,.6)`),
          (e.font = `bold 20px monospace`),
          e.fillText(`ARGENT CV-07`, 40, 120),
          e.fillText(`FRAME 31`, 70, 150));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#8c8a82`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 5e3, 0.12),
          f(e, t, n, 30, 0.3),
          (e.fillStyle = `#d9a91f`),
          e.fillRect(0, n - 50, t, 22),
          (e.fillStyle = `#1b1c1e`));
        for (let r = -40; r < t + 40; r += 36)
          (e.beginPath(),
            e.moveTo(r, n - 50),
            e.lineTo(r + 18, n - 50),
            e.lineTo(r, n - 28),
            e.lineTo(r - 18, n - 28),
            e.fill());
        ((e.fillStyle = `rgba(30,30,30,.7)`),
          (e.font = `bold 26px monospace`),
          e.fillText(`BLAST`, 80, 110));
      }),
    ],
    le = u(2048, 1024, (e) => {
      ce.forEach((t, n) =>
        e.drawImage(t.image, (n % 4) * 512, Math.floor(n / 4) * 512, 512, 512),
      );
    });
  ((le.wrapS = le.wrapT = ee), le.repeat.set(1, 1));
  let ue = (e) => [
      (e % 4) * 0.25 + 0.002,
      1 - (Math.floor(e / 4) + 1) * 0.5 + 0.004,
      0.246,
      0.492,
    ],
    de = {
      container: { re: /^(?:[ns]-cont-\d+)$/, cells: [1, 1, 0, 0, 0, 0] },
      crate: {
        re: /^(?:[ns]-crate-\d+|inner-crate-\d+|collar-cargo-\d+)$/,
        cells: [2, 2, 2, 2, 2, 2],
      },
      superstructure: {
        re: /^(?:bridge-[123]|turret|turret-barbette)$/,
        cells: [3, 3, 3, 3, 3, 3],
      },
      cradle: {
        re: /^(?:cradle--?[\d.]+|bow-trestle|pod-stand)$/,
        cells: [4, 4, 4, 4, 4, 4],
      },
      barrier: { re: /^(?:hq\d-barrier--?\d+)$/, cells: [7, 7, 7, 7, 7, 7] },
      plates: {
        re: /^(?:[ns]-plates-\d+|c-pallet-\d+|scaf-pallet-\d+|plate-stack)$/,
        cells: [5, 5, 6, 6, 5, 5],
      },
    },
    fe = [],
    k = new Map(),
    me = new he(),
    ge = new re(),
    j = new d(0, 1, 0),
    _e = 0;
  for (let e of Object.values(de))
    for (let t of n.objects) {
      if (t.kind !== `box` || !e.re.test(t.id)) continue;
      let n = t.sz > t.sx * 1.05,
        r = (n ? t.sz : t.sx) + 0.02,
        i = (n ? t.sx : t.sz) + 0.02;
      ge.setFromAxisAngle(j, n ? Math.PI / 2 : 0);
      let a = new o(1, 1, 1).toNonIndexed(),
        s = a.attributes.uv;
      for (let t = 0; t < 6; t++) {
        let [n, r, i, a] = ue(e.cells[t]);
        for (let e = 0; e < 6; e++) {
          let o = t * 6 + e;
          s.setXY(o, n + s.getX(o) * i, r + s.getY(o) * a);
        }
      }
      (a.applyMatrix4(
        me.compose(
          new d(t.x, t.y + t.sy / 2, t.z),
          ge,
          new d(r, t.sy + 0.01, i),
        ),
      ),
        k.set(t.id, { start: _e, count: a.attributes.position.count }),
        (_e += a.attributes.position.count),
        fe.push(a));
    }
  let ve = a(O(fe));
  fe.forEach((e) => e.dispose());
  let ye = new r(ve, a(new l({ map: le, roughness: 0.62, metalness: 0.35 })));
  ((ye.name = `kepler-skins`), (ye.receiveShadow = !0), h.add(ye));
  let be = k.size,
    xe = (t) => {
      let r = k.get(t);
      if (!r) return;
      let i = ve.attributes.position,
        a = i.getX(r.start),
        o = i.getY(r.start),
        s = i.getZ(r.start);
      for (let e = r.start; e < r.start + r.count; e++) i.setXYZ(e, a, o, s);
      ((i.needsUpdate = !0), k.delete(t));
      let c = e.modules.get(`demo`);
      for (let e of [`-band`, `-skid`])
        n.objects.some((n) => n.id === t + e) &&
          c?.setObjectVisible?.(t + e, !1);
    },
    Se = e.events.on(`destruction:state`, (e) => {
      e?.id && k.has(e.id) && xe(e.id);
    });
  return {
    stats: () => ({ skins: be, hidden: be - k.size }),
    hide: xe,
    dispose() {
      (Se?.(), t.remove(h));
      for (let e of i) e.dispose?.();
    },
  };
}
var P = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
 vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
 vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
 vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
 float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
 vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
 vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
 vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
 vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
 vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
 return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
float fbm(vec3 p,int o){float a=0.,s=.5,f=1.;for(int i=0;i<10;i++){if(i>=o)break;a+=s*snoise(p*f);f*=2.03;s*=.5;}return a;}
float ridged(vec3 p,int o){float a=0.,s=.5,f=1.;for(int i=0;i<8;i++){if(i>=o)break;float n=1.-abs(snoise(p*f));a+=s*n*n;f*=2.1;s*=.5;}return a;}
`,
  F = `precision highp float;varying vec2 vUv;uniform float mode;
${P}
#define srgb(r,g,b) (vec3(float(r),float(g),float(b))/255.)
void main(){
 float lon=(vUv.x-.5)*6.2831853,lat=(vUv.y-.5)*3.14159265;vec3 p=vec3(cos(lat)*cos(lon),sin(lat),cos(lat)*sin(lon));
 float alat=abs(lat)*57.2958;
 // continents: domain-warped noise, a few big masses with ragged, fractal coasts and island chains
 vec3 w=vec3(fbm(p*1.3+vec3(3.1,0.,1.7),5),fbm(p*1.3+vec3(-2.,5.2,.3),5),fbm(p*1.3+vec3(.7,-1.4,4.4),5));
 float cont=fbm(p*1.15+w*.55,10)+.05*fbm(p*18.+w,5)+.02*fbm(p*60.,4);
 float e=cont+.04,landK=smoothstep(-.004,.004,e);
 float moist=fbm(p*2.4+vec3(11.,3.,7.)+w*.4,7)*.8+.1-.55*smoothstep(12.,30.,alat)*(1.-smoothstep(32.,45.,alat))+.25*smoothstep(45.,60.,alat);
 float mount=ridged(p*3.2+w*.3,8)*smoothstep(.02,.22,e);
 // the sea: shelves turquoise along the coasts, deepening to navy
 float depth=clamp(-e*7.,0.,1.);
 vec3 sea=mix(srgb(40,110,132),mix(srgb(14,52,92),srgb(7,28,58),smoothstep(.3,1.,depth)),smoothstep(0.,.22,depth));
 sea*=.94+.06*fbm(p*40.,3);
 // the land by moisture and latitude: desert, steppe, forest, jungle, tundra, rock and snow on the ranges
 vec3 desert=mix(srgb(198,164,114),srgb(170,112,72),.5+.5*fbm(p*9.,5));
 vec3 steppe=srgb(148,138,96),forest=mix(srgb(48,76,42),srgb(32,56,34),.5+.5*fbm(p*14.,4)),jungle=srgb(30,62,32);
 vec3 tundra=srgb(116,110,92),rock=mix(srgb(110,96,84),srgb(150,140,130),.5+.5*fbm(p*26.,4));
 float m=clamp(moist*1.4+.56,0.,1.);
 vec3 land=mix(desert,steppe,smoothstep(.25,.45,m));land=mix(land,forest,smoothstep(.45,.65,m));
 land=mix(land,jungle,smoothstep(.6,.8,m)*(1.-smoothstep(18.,28.,alat)));
 land=mix(land,tundra,smoothstep(55.,64.,alat));
 land=mix(land,rock,smoothstep(.35,.7,mount));
 land=mix(land,srgb(236,240,244),smoothstep(.62,.75,mount)*smoothstep(30.,55.,alat+mount*25.));
 land*=.88+.24*(fbm(p*70.,3)*.5+.5);
 vec3 col=mix(sea,land,landK);
 // ice caps and sea ice
 float ice=smoothstep(68.,74.,alat+6.*fbm(p*6.,5));col=mix(col,srgb(232,238,244),ice);
 // clouds: twice domain-warped fields (swirls and fronts, a little stretched east-west), the equatorial belt, the clear
 // subtropics, the cloudier mid-latitudes, and fields of small cumulus over the warm seas
 vec3 pc=vec3(p.x,p.y*1.4,p.z)*2.2;
 vec3 q=pc+.7*vec3(fbm(pc+vec3(1.7,9.2,0.),5),fbm(pc+vec3(8.3,2.8,1.),5),fbm(pc+vec3(3.,1.,6.6),5));
 vec3 r=q+.8*vec3(fbm(q*1.3+vec3(5.2,1.3,2.),5),fbm(q*1.3+vec3(1.,7.,3.),5),fbm(q*1.3+vec3(2.,4.,9.),5));
 float cl=fbm(r,8)+.08*fbm(p*35.+r,4);
 float belt=.2*exp(-pow(alat/7.,2.))-.2*exp(-pow((alat-24.)/8.,2.))+.16*exp(-pow((alat-52.)/12.,2.))+.1*smoothstep(60.,75.,alat);
 float cloud=smoothstep(.02,.42,cl+belt);
 float cu=smoothstep(.3,.7,fbm(p*150.,4)*.5+.5)*smoothstep(.05,.25,belt+.2)*(1.-landK*.6)*.3*smoothstep(-.1,.2,cl);
 cloud=clamp(max(cloud,cu*(1.-smoothstep(28.,40.,alat))),0.,1.)*.95;
 // city lights: on land, near coasts and in the moist lowlands, in clusters and dots, dimmed by cloud; none on ice or deep desert
 float coast=1.-smoothstep(0.,.1,e);float grow=smoothstep(.45,.85,fbm(p*18.+w,4)*.5+.5);
 float dots=smoothstep(.6,.95,fbm(p*160.,3)*.5+.5);
 float city=landK*(coast*.75+.25)*grow*(.15+.85*dots)*smoothstep(.2,.5,m)*(1.-ice)*(1.-smoothstep(55.,65.,alat));
 // metropolises: bright cores on the coasts and rivers, and the lit roads strung between towns (thin ridges of noise)
 float metro=smoothstep(.72,.9,fbm(p*9.+w*.5,4)*.5+.5)*landK*(coast*.8+.2)*(1.-ice)*smoothstep(.25,.5,m)*(1.-smoothstep(50.,62.,alat));
 float roads=pow(1.-abs(snoise(p*70.+w)),60.)*smoothstep(.62,.8,fbm(p*14.,3)*.5+.5)*landK*(1.-ice)*smoothstep(.2,.45,m)*(1.-smoothstep(55.,65.,alat));
 city=max(city,max(metro*(.6+.4*dots),roads*.3));
 // mode 1: the low-frequency fields the sphere adds its own fine octaves to (cloud field, cumulus mask, open water)
 float cuMask=smoothstep(.05,.25,belt+.2)*(1.-landK*.6)*.3*smoothstep(-.1,.2,cl)*(1.-smoothstep(28.,40.,alat));
 if(mode>.5){gl_FragColor=vec4(clamp((cl+belt)*.8+.4,0.,1.),cuMask*2.,(1.-landK)*(1.-ice),1.);return;}
 gl_FragColor=vec4(col,clamp(city,0.,1.));
}`;
function ke(t, { size: i = 4096 } = {}) {
  let a = i,
    o = i / 2,
    s = () => {
      let e = new c(a, o, {
        type: me,
        format: C,
        generateMipmaps: !0,
        minFilter: T,
        magFilter: n,
        depthBuffer: !1,
        stencilBuffer: !1,
      });
      return (
        (e.texture.wrapS = oe),
        (e.texture.anisotropy = Math.min(
          8,
          t.capabilities.getMaxAnisotropy?.() ?? 1,
        )),
        e
      );
    },
    l = [s(), s()],
    u = new k(),
    d = new e(-1, 1, 1, -1, 0, 1),
    f = new S({
      uniforms: { mode: { value: 0 } },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
      fragmentShader: F,
      depthTest: !1,
      depthWrite: !1,
    }),
    p = new r(new E(2, 2), f);
  ((p.frustumCulled = !1), u.add(p));
  let m = 0;
  return {
    texture: l[0].texture,
    fields: l[1].texture,
    done: () => m >= 32,
    step(e = 1) {
      if (m >= 32) return !0;
      let n = t.getRenderTarget(),
        r = t.getScissorTest();
      for (let n = 0; n < e && m < 32; n++, m++) {
        let e = +(m >= 16),
          n = l[e],
          r = m % 16;
        ((f.uniforms.mode.value = e),
          n.viewport.set(0, 0, a, o),
          t.setRenderTarget(n),
          t.setScissorTest(!0));
        let i = Math.floor((r * o) / 16),
          s = Math.floor(((r + 1) * o) / 16);
        (n.scissor.set(0, i, a, s - i),
          (n.scissorTest = !0),
          t.render(u, d),
          (n.scissorTest = !1));
      }
      return (
        t.setScissorTest(r),
        t.setRenderTarget(n),
        m >= 32 && (f.dispose(), p.geometry.dispose()),
        m >= 32
      );
    },
    dispose() {
      for (let e of l) e.dispose();
      (f.dispose(), p.geometry.dispose());
    },
  };
}
var I = `
 #include <tonemapping_fragment>
 #include <colorspace_fragment>`,
  Ae = `
vec4 equirect(sampler2D t,vec3 d){float lon=atan(d.z,d.x),lat=asin(clamp(d.y,-1.,1.));
 vec2 uv=vec2(lon/6.2831853+.5,lat/3.14159265+.5),uv2=vec2(fract(uv.x+.5)-.5,uv.y);
 vec2 dx=dFdx(uv),dy=dFdy(uv),dx2=dFdx(uv2),dy2=dFdy(uv2);
 bool alt=abs(dx.x)+abs(dy.x)>abs(dx2.x)+abs(dy2.x)+1e-6;
 return alt?textureGrad(t,uv2,dx2,dy2):textureGrad(t,uv,dx,dy);}`;
function je(e, t) {
  let n = {
    map: { value: e },
    fields: { value: t },
    sunDir: { value: new d(0, 1, 0) },
    spin: { value: new h() },
    ready: { value: 0 },
    time: { value: 0 },
  };
  return new S({
    uniforms: n,
    fog: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99996;}`,
    fragmentShader: `uniform sampler2D map;uniform sampler2D fields;uniform vec3 sunDir;uniform float time;uniform mat3 spin;uniform float ready;varying vec3 vN;varying vec3 vW;
   ${Ae}
   ${P}
   void main(){vec3 n=normalize(vN),v=normalize(cameraPosition-vW);vec3 dd=spin*n;vec4 s=equirect(map,dd);
    // The maps are ~10 km a texel; the sphere adds the fine octaves itself, so cloud edges, cumulus fields and city
    // lights stay crisp up close: the cloud field from the bake plus three more octaves, thresholded per pixel.
    vec4 f=equirect(fields,dd);
    // each octave fades out where it would be finer than a pixel (no sparkle toward the horizon)
    // Three noise calls a pixel (perf pass 2026-10-23): the 3200/3300/4200 octaves were below a pixel from orbit, and
    // the cumulus and city twinkle reuse the 2100 one.
    float px=length(fwidth(dd));float o1=clamp(1.-px*700.*1.2,0.,1.),o2=clamp(1.-px*2100.*1.2,0.,1.);
    float n2=snoise(dd*2100.);
    float fine=snoise(dd*700.)*.6*o1+n2*.4*o2;
    float clf=(f.r-.4)/.8+fine*.07;
    float cloud=smoothstep(.02,.42,clf);
    float cu=f.g*.5*smoothstep(.3,.7,mix(.5,snoise(dd*1100.)*.5+.5,o1)+.15*n2*o2);
    cloud=clamp(max(cloud,cu),0.,1.)*.95;
    vec3 c=pow(s.rgb,vec3(2.2))*(1.+fine*.08);
    // cloud shadows on the ground: the cloud field ~10 km up, looked up toward the sun (longer as the sun gets low)
    {float dS=dot(n,sunDir);vec3 sT=spin*sunDir,tg=sT-dd*dot(dd,sT);
     if(dS>0.&&dot(tg,tg)>1e-8){float off=min(.02,.0016*sqrt(max(0.,1.-dS*dS))/max(dS,.08));
      vec4 fs=equirect(fields,normalize(dd+normalize(tg)*off));float sh=smoothstep(.02,.42,(fs.r-.4)/.8+fine*.05);c*=1.-.45*sh;}}
    // cloud tops: bright, with soft grey shading in their thicker cores
    vec3 cw=vec3(.92,.94,.97)*(.86+.14*smoothstep(.4,.9,clf+fine*.05));
    float cloudy=cloud;c=mix(c,cw,cloud);c=mix(vec3(.004,.012,.03),c,ready);
    s.a*=(1.-cloud*.85)*mix(.6,smoothstep(.15,.75,n2*.5+.5)*1.9,o2);
    float d=dot(n,sunDir),day=smoothstep(-.02,.12,d);
    // the terminator: a narrow band of low, reddened light
    vec3 tint=mix(vec3(1.,.66,.46),vec3(1.),smoothstep(-.01,.035,d));
    float water=f.b*(1.-cloud);
    vec3 col=c*tint*day*(.15+.95*clamp(d,0.,1.));
    // sun glint on open water
    vec3 h=normalize(sunDir+v);col+=vec3(1.,.93,.8)*pow(max(dot(n,h),0.),220.)*water*day*3.5;
    // limb haze: the atmosphere seen at a slant whitens and blues the day side toward the edge
    // the air between: optical depth grows as 1/cos of the view angle, so it only veils the ground toward the horizon
    float haze=1.-exp(-.03/max(dot(n,v),.015));col=mix(col,vec3(.36,.56,1.)*day*(.35+.65*clamp(d*2.,0.,1.)),haze*.55);
    // cities on the night side (sodium orange in the suburbs, whiter in the cores), seen through the gaps in the cloud
    float night=smoothstep(.05,-.12,d);col+=mix(vec3(1.,.66,.32),vec3(1.,.9,.75),smoothstep(.5,.9,s.a))*pow(s.a,1.2)*night*2.*ready;
    // the night side is not black: starlight and airglow pick out the cloud tops faintly
    col+=c*vec3(.55,.65,.9)*.007*smoothstep(.05,-.12,d)*cloudy;
    gl_FragColor=vec4(col,1.);${I}}`,
  });
}
function Me(e) {
  return new S({
    uniforms: { sunDir: e },
    fog: !1,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vN=normalize(mat3(modelMatrix)*normal);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99995;}`,
    fragmentShader: `uniform vec3 sunDir;varying vec3 vN;varying vec3 vW;
   void main(){vec3 n=normalize(vN),v=normalize(cameraPosition-vW);float rim=1.-abs(dot(n,v));float d=dot(n,sunDir);
    vec3 day=mix(vec3(1.,.42,.12),vec3(.3,.55,1.),smoothstep(-.02,.25,d))*smoothstep(-.2,.05,d)*pow(rim,9.)*1.6;
    vec3 glow=vec3(.25,1.,.45)*pow(rim,26.)*smoothstep(0.,-.2,d)*.18;
    gl_FragColor=vec4(day+glow,1.);${I}}`,
  });
}
function Ne(e, t, n = 1) {
  return new S({
    uniforms: { ...e, k: { value: t }, gain: { value: n } },
    fog: !1,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vN=normalize(mat3(modelMatrix)*normal);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99995;}`,
    fragmentShader: `uniform vec3 pole;uniform vec3 sunDir;uniform float time;uniform float dark;uniform float k;uniform float gain;varying vec3 vN;varying vec3 vW;
   ${P}
   void main(){vec3 n=normalize(vN),v=normalize(cameraPosition-vW);
    float night=smoothstep(.02,-.18,dot(n,sunDir));if(night*dark<.002)discard;
    // magnetic coordinates: colatitude from the pole, longitude round it (nothing to draw away from the oval)
    float co=acos(clamp(dot(n,pole),-1.,1.));if(abs(co-.38)>.16)discard;
    vec3 e1=normalize(cross(pole,vec3(.3,1.,.2))),e2=cross(pole,e1);float ml=atan(dot(n,e2),dot(n,e1));
    // the oval: ~22 degrees from the pole, wider toward midnight, its edge folding and drifting
    vec3 r=vec3(cos(ml),sin(ml),0.);
    // A living aurora, not a ring. The oval is broken into separate arcs that brighten, fade and move on (a substorm
    // cycle over tens of seconds); each arc folds into S-bends and spirals that travel along it; the curtains ripple,
    // and their rays shimmer and run sideways along the arc in seconds. The curtain leans a little with height.
    float t=time;
    float c0=.38+.05*cos(ml-2.4)+.035*snoise(r*1.8+vec3(0.,0.,t*.04))
     +.014*snoise(vec3(r.xy*8.,t*.18)+vec3(ml*.5,0.,0.))                  // folds that wander
     +.006*sin(ml*40.-t*.9+snoise(r*5.+t*.1)*3.)                            // travelling ripples
     +.0025*snoise(vec3(r.xy*30.,t*.6))                                     // fine crinkle
     -.004*k*(1.+snoise(vec3(r.xy*4.,t*.1)));                               // the curtain leans poleward with height
    float x=(co-c0)/(.0035+.003*(.5+.5*snoise(vec3(r.xy*6.,t*.15))));
    float band=exp(-x*x*(x>0.?1.:.1));
    // a second, fainter arc poleward that comes and goes on its own
    float c1=c0-.03+.008*snoise(vec3(r.xy*10.,t*.25)+7.);band+=.55*exp(-pow((co-c1)/.004,2.))*smoothstep(-.1,.5,snoise(vec3(r.xy*2.,t*.07)+3.));
    // which stretches of the oval are lit right now: patches that grow, brighten and break up
    float lit=smoothstep(-.4,.35,snoise(vec3(r.xy*2.3,t*.06)))*(.45+.55*smoothstep(-.4,.6,snoise(vec3(r.xy*5.,t*.2)+11.)));
    // substorm: the whole display surges every few tens of seconds
    float surge=.55+.45*sin(t*.11+snoise(vec3(t*.03,1.,2.))*2.);
    // rays: vertical streaks along the curtain that shimmer and race along it
    float rays=.25+.75*smoothstep(-.35,.75,snoise(vec3(ml*120.-t*1.8,t*.9,k*.6)))*(.55+.45*snoise(vec3(ml*35.+t*.4,t*.3,4.)));
    float flick=.85+.15*snoise(vec3(ml*60.,t*4.,k));
    float slant=1.-abs(dot(n,v));
    // colour by height: green at the bottom (a pinkish fringe at the very lower edge when it surges), red-purple at the top
    vec3 col=mix(vec3(.2,1.,.45),vec3(.85,.2,.45),smoothstep(.35,1.,k));col=mix(col,vec3(.9,.4,.7),smoothstep(.7,1.,surge)*smoothstep(.5,1.5,x)*(1.-k));
    float a=band*lit*surge*rays*flick*night*dark*(1.-k*.7)*(.18+1.3*pow(slant,2.));
    gl_FragColor=vec4(col*a*1.1*gain,1.);${I}}`,
  });
}
function Pe() {
  let e = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 128;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.46, `rgba(255,255,255,1)`),
        n.addColorStop(0.5, `rgba(255,250,240,.9)`),
        n.addColorStop(0.56, `rgba(255,240,220,.18)`),
        n.addColorStop(1, `rgba(255,240,220,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 128, 128));
      let r = new pe(e);
      return ((r.colorSpace = ne), r);
    })(),
    n = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 256;
      let t = e.getContext(`2d`),
        n = t.createImageData(256, 256);
      for (let e = 0; e < 256; e++)
        for (let t = 0; t < 256; t++) {
          let r = (t - 127.5) / 127.5,
            i = (e - 127.5) / 127.5,
            a = Math.hypot(r, i),
            o =
              Math.max(
                0,
                Math.exp(-a * 9) * 1 + Math.exp(-a * 3.2) * 0.18 - 0.01,
              ) *
              (1 - Math.min(1, a)),
            s =
              Math.max(0, 1 - Math.abs(r) * 60) *
                Math.exp(-Math.abs(i) * 3) *
                0.25 +
              Math.max(0, 1 - Math.abs(i) * 60) *
                Math.exp(-Math.abs(r) * 3) *
                0.25,
            c = (e * 256 + t) * 4,
            l = Math.min(1, o + s * (1 - a));
          ((n.data[c] = 255),
            (n.data[c + 1] = 248),
            (n.data[c + 2] = 236),
            (n.data[c + 3] = 255 * l));
        }
      t.putImageData(n, 0, 0);
      let r = new pe(e);
      return ((r.colorSpace = ne), r);
    })(),
    r = new t({
      map: e,
      color: new v(8, 7.6, 7),
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
      toneMapped: !1,
    }),
    i = new t({
      map: n,
      color: new v(1.6, 1.5, 1.4),
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
      toneMapped: !1,
    }),
    a = new se(r),
    o = new se(i);
  return (
    (a.renderOrder = -4),
    (o.renderOrder = -4),
    {
      disc: a,
      glare: o,
      dispose() {
        (e.dispose(), n.dispose(), r.dispose(), i.dispose());
      },
    }
  );
}
function Fe(e, n, c, h) {
  let C = c.kepler,
    T = { geos: [], mats: [], texs: [] },
    k = (e) => (
      e?.isBufferGeometry
        ? T.geos.push(e)
        : e?.isTexture
          ? T.texs.push(e)
          : e && T.mats.push(e),
      e
    ),
    me = 11,
    M = () => (me = (Math.imul(me, 1664525) + 1013904223) >>> 0) / 4294967296,
    P = new ie();
  ((P.name = `kepler-fixed`), n.add(P));
  let F = new ie();
  ((F.name = `kepler-live`), (F.userData.dynamicShadow = !0), n.add(F));
  let I = new ie();
  ((I.name = `kepler-space`), (I.userData.dynamicShadow = !0), n.add(I));
  let Ae = j.z,
    Fe = 12 + j.y,
    Ie = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let a = k(new pe(i));
      return (
        (a.wrapS = a.wrapT = oe),
        a.repeat.set(...r),
        (a.colorSpace = ne),
        (a.anisotropy = 8),
        a
      );
    },
    Le = (e, t, n, r, i, a = 0.1) => {
      ((e.fillStyle = r), e.fillRect(0, 0, t, n));
      for (let r = 0; r < i; r++)
        ((e.fillStyle = `rgba(${M() < 0.5 ? `0,0,0` : `255,255,255`},${M() * a})`),
          e.fillRect(M() * t, M() * n, 1 + M() * 2, 1 + M() * 2));
    },
    Re = Ie(256, 256, (e, t, n) => {
      Le(e, t, n, `#8a8f95`, 5e3, 0.08);
      for (let t = 0; t < 9; t++)
        ((e.fillStyle = `rgba(${M() < 0.5 ? `40,44,50` : `170,175,180`},.18)`),
          e.fillRect((t % 3) * 86, Math.floor(t / 3) * 86, 85, 85));
      ((e.strokeStyle = `rgba(30,32,36,.6)`), (e.lineWidth = 2));
      for (let r = 0; r <= t; r += 86)
        (e.beginPath(),
          e.moveTo(r, 0),
          e.lineTo(r, n),
          e.stroke(),
          e.beginPath(),
          e.moveTo(0, r),
          e.lineTo(t, r),
          e.stroke());
      e.fillStyle = `rgba(30,32,36,.5)`;
      for (let r = 6; r < n; r += 14)
        for (let n = 6; n < t; n += 86) e.fillRect(n, r, 2, 2);
    }),
    ze = Ie(256, 256, (e, t, n) => {
      (Le(e, t, n, `#7b6a52`, 4e3, 0.09),
        (e.strokeStyle = `rgba(30,26,20,.55)`),
        (e.lineWidth = 2));
      for (let r = 0; r <= t; r += 64)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      ((e.fillStyle = `rgba(220,220,220,.5)`),
        (e.font = `10px monospace`),
        e.fillText(`P-114`, 8, 30),
        e.fillText(`QA OK`, 140, 200));
    }),
    Be = N.x1 - N.x0,
    Ve = N.z1 - N.z0,
    He = (e) => e - N.x0,
    Ue = (e) => e - N.z0,
    We = Ie(2048, Math.round((2048 * Ve) / Be), (e, t, n) => {
      Le(e, t, n, `#4c5157`, Math.round((6e4 * Ve) / 100), 0.07);
      let r = t / Be,
        i = n / Ve;
      ((e.strokeStyle = `rgba(25,27,30,.7)`), (e.lineWidth = 2));
      for (let t = 0; t <= Be; t += 4)
        (e.beginPath(), e.moveTo(t * r, 0), e.lineTo(t * r, n), e.stroke());
      for (let n = 0; n <= Ve; n += 4)
        (e.beginPath(), e.moveTo(0, n * i), e.lineTo(t, n * i), e.stroke());
      e.fillStyle = `rgba(30,32,36,.35)`;
      for (let a = 0; a < 45; a++)
        (e.beginPath(),
          e.ellipse(
            M() * t,
            M() * n,
            ((4 + M() * 14) * r) / 4,
            ((3 + M() * 10) * i) / 4,
            M() * 3,
            0,
            7,
          ),
          e.fill());
      e.fillStyle = `rgba(230,230,225,.5)`;
      for (let t = 4; t < Be - 4; t += 6)
        (e.fillRect(t * r, 4 * i, 3 * r, 0.35 * i),
          e.fillRect(t * r, (Ve - 5) * i, 3 * r, 0.35 * i));
      ((e.textAlign = `center`),
        (e.font = `bold ${10 * i}px system-ui`),
        (e.fillStyle = `rgba(217,169,31,.5)`),
        e.fillText(`BAY 7`, He(-6) * r, Ue(-17) * i),
        (e.font = `bold ${2.6 * i}px system-ui`),
        (e.fillStyle = `rgba(230,230,225,.45)`),
        e.fillText(`KEEP CLEAR OF CRADLE`, He(0) * r, Ue(Ae + 9.6) * i),
        e.fillText(`FAB SHOP`, He(-44) * r, Ue(10) * i),
        e.fillText(`DOCKING COLLAR`, He(37) * r, Ue(-18.5) * i),
        (e.fillStyle = `rgba(58,140,255,.35)`),
        e.fillText(`BLUE CREW DECK`, He(-48) * r, Ue(-8) * i),
        (e.fillStyle = `rgba(255,58,42,.35)`),
        e.fillText(`RED CREW DECK`, He(48) * r, Ue(16) * i));
    }),
    Ge = Ie(64, 64, (e) => {
      let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
      (t.addColorStop(0, `rgba(255,255,255,1)`),
        t.addColorStop(0.25, `rgba(255,255,255,.6)`),
        t.addColorStop(1, `rgba(255,255,255,0)`),
        (e.fillStyle = t),
        e.fillRect(0, 0, 64, 64));
    });
  Ge.wrapS = Ge.wrapT = ee;
  let L = {
      plate: k(new l({ map: Re, roughness: 0.55, metalness: 0.45, side: 2 })),
      primer: k(new l({ map: ze, roughness: 0.75, metalness: 0.2, side: 2 })),
      deck: k(new l({ map: We, roughness: 0.82, metalness: 0.3 })),
      wall: k(new l({ color: 3883080, roughness: 0.7, metalness: 0.4 })),
      frame: k(new l({ color: 2764340, roughness: 0.5, metalness: 0.8 })),
      yellow: k(new l({ color: 14264607, roughness: 0.6, metalness: 0.2 })),
      white: k(new l({ color: 14343648, roughness: 0.45, metalness: 0.1 })),
      orange: k(new l({ color: 14181930, roughness: 0.55, metalness: 0.2 })),
      dark: k(
        new l({ color: 1908773, roughness: 0.5, metalness: 0.7, side: 2 }),
      ),
      glass: k(
        new l({
          color: 10470638,
          roughness: 0.05,
          metalness: 0.2,
          transparent: !0,
          opacity: 0.07,
          depthWrite: !1,
          side: 2,
        }),
      ),
      windowGlass: null,
      solar: k(
        new l({
          color: 1320010,
          roughness: 0.25,
          metalness: 0.85,
          emissive: 132624,
        }),
      ),
      vc: k(new l({ vertexColors: !0, roughness: 0.5, metalness: 0.25 })),
    },
    R = (e, t, n, r, i, a, s = 0) => {
      let c = new o(e, t, n);
      return (s && c.rotateY(s), c.translate(r, i, a), c);
    },
    z = (e, t) => {
      let n = new v(t),
        r = e.attributes.position.count,
        i = new Float32Array(r * 3);
      for (let e = 0; e < r; e++) i.set([n.r, n.g, n.b], e * 3);
      return (
        e.setAttribute(`color`, new f(i, 3)),
        e.index ? e.toNonIndexed() : e
      );
    },
    Ke = (e) => {
      let t = e.map((e) => (e.index ? e.toNonIndexed() : e));
      for (let e of t)
        for (let t of Object.keys(e.attributes))
          [`position`, `normal`, `uv`, `color`].includes(t) ||
            e.deleteAttribute(t);
      for (let e of t)
        e.attributes.uv ||
          e.setAttribute(
            `uv`,
            new x(new Float32Array(e.attributes.position.count * 2), 2),
          );
      let n = O(t);
      for (let t of e) t.dispose();
      return k(n);
    },
    B = (e, t, n = P, { cast: i = !0, receive: a = !0 } = {}) => {
      let o = new r(e, t);
      return ((o.castShadow = i), (o.receiveShadow = a), n.add(o), o);
    };
  {
    let e = k(new E(N.x1 - N.x0, N.z1 - N.z0));
    (e.rotateX(-Math.PI / 2),
      e.translate(0, 12.012, (N.z0 + N.z1) / 2),
      B(e, L.deck, P, { cast: !1 }));
  }
  let qe = Ie(
    1024,
    256,
    (e, t, n) => {
      e.clearRect(0, 0, t, n);
      for (let r = 0; r < 5e3; r++)
        ((e.fillStyle = `rgba(220,230,240,${M() * 0.25})`),
          e.fillRect(M() * t, M() * n, 1, 1));
      for (let r = 0; r < 60; r++) {
        let r = M() * t,
          i = M() * n,
          a = 40 + M() * 160;
        ((e.strokeStyle = `rgba(210,225,240,${0.04 + M() * 0.06})`),
          (e.lineWidth = 1 + M() * 3),
          e.beginPath(),
          e.moveTo(r, i),
          e.quadraticCurveTo(
            r + a * 0.5,
            i + M() * 30 - 15,
            r + a,
            i + M() * 20 - 10,
          ),
          e.stroke());
      }
      let r = e.createLinearGradient(0, n, 0, n - 60);
      (r.addColorStop(0, `rgba(120,110,90,.35)`),
        r.addColorStop(1, `rgba(120,110,90,0)`),
        (e.fillStyle = r),
        e.fillRect(0, n - 60, t, 60));
    },
    [12, 6],
  );
  L.windowGlass = k(
    new l({
      color: 13623536,
      map: qe,
      alphaMap: qe,
      roughness: 0.1,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.55,
      depthWrite: !1,
      side: 2,
    }),
  );
  {
    let e = k(new E(A.x1 - A.x0, N.h - N.sill));
    e.translate(0, 12 + N.sill + (N.h - N.sill) / 2, N.z0 - 0.05);
    let t = B(e, L.windowGlass, P, { cast: !1, receive: !1 });
    t.renderOrder = 3;
    let n = k(new E(N.x1 - N.x0, N.z1 - N.z0));
    (n.rotateX(Math.PI / 2),
      n.translate(0, 12 + N.h + 0.05, (N.z0 + N.z1) / 2));
    let r = B(n, L.glass, P, { cast: !1, receive: !1 });
    r.renderOrder = 3;
    for (let e of [-1, 1]) {
      let t = e < 0 ? N.x0 : N.x1,
        n = A.x1 - N.x1,
        r = A.wz - N.z0,
        i = k(new E(n, r));
      (i.rotateX(Math.PI / 2),
        i.translate(t + (e * n) / 2, 12 + N.h + 0.05, N.z0 + r / 2),
        (B(i, L.glass, P, { cast: !1, receive: !1 }).renderOrder = 3));
      let a = k(new E(r, N.h - N.sill));
      (a.rotateY(Math.PI / 2),
        a.translate(t, 12 + N.sill + (N.h - N.sill) / 2, N.z0 + r / 2),
        (B(a, L.glass, P, { cast: !1, receive: !1 }).renderOrder = 3));
    }
  }
  function Je(e, t, n, r, i = !0) {
    let a = [],
      o = [],
      s = [];
    for (let r = e; r < t - 1e-6; r += n) s.push(r);
    s.push(t);
    for (let e = 0; e < s.length - 1; e++) {
      let t = r(s[e]),
        n = r(s[e + 1]),
        c = t.length,
        l = i ? c : c - 1;
      for (let r = 0; r < l; r++) {
        let i = (r + 1) % c,
          l = (e, t) => [e, Fe + t[1], Ae + t[0]],
          u = [
            l(s[e], t[r]),
            l(s[e + 1], n[r]),
            l(s[e + 1], n[i]),
            l(s[e], t[r]),
            l(s[e + 1], n[i]),
            l(s[e], t[i]),
          ];
        for (let e of u) (a.push(...e), o.push(e[0] / 6, (e[1] + e[2]) / 6));
      }
    }
    let c = new m();
    return (
      c.setAttribute(`position`, new x(a, 3)),
      c.setAttribute(`uv`, new x(o, 2)),
      c.computeVertexNormals(),
      k(c)
    );
  }
  let Ye = (e) => ve(...ge(e)),
    Xe = (e, t) => {
      let n = new fe(Ye(e).map(([e, t]) => new te(e, t))),
        r = new g(n);
      {
        let e = r.attributes.uv;
        for (let t = 0; t < e.count; t++)
          e.setXY(t, e.getX(t) / 6, e.getY(t) / 6);
      }
      return (r.rotateY(-Math.PI / 2), r.translate(e, Fe, Ae), r);
    };
  B(
    Ke([
      Je(j.x0, j.open0, 2, Ye),
      Je(j.open1, j.x1, 2, Ye),
      Xe(j.x0),
      Xe(j.open0),
      Xe(j.open1),
      Xe(j.x1),
    ]),
    L.plate,
  );
  {
    let e = Math.min(j.W, j.H) * 0.42,
      t = j.W,
      n = j.H,
      r = j.inner - j.y;
    B(
      Je(
        j.open0,
        j.open1,
        2,
        () => [
          [t, r],
          [t, -n + e],
          [t - e * 1.4, -n],
          [-t + e * 1.4, -n],
          [-t, -n + e],
          [-t, r],
        ],
        !1,
      ),
      L.primer,
    );
  }
  for (let [e, t] of [
    [0, 0],
    [-3.6, -5],
    [-3.6, 5],
  ]) {
    let n = new D(2.6, 3.6, 6, 24, 1, !0);
    (n.rotateZ(Math.PI / 2),
      n.translate(j.x0 - 3, Fe + e + 1.5, Ae + t),
      B(k(n), L.dark));
  }
  B(
    Je(j.open0 - 6, j.open0, 2, (e) =>
      Ye(e).map(([e, t]) => [e * 1.004, t * 1.004]),
    ),
    L.primer,
    P,
    { cast: !1 },
  );
  for (let [e, t, n] of [
    [C.reactor, L.dark, !0],
    [C.pod, L.white, !1],
  ]) {
    if (!e) continue;
    let r = new D(e.r, e.r, e.x1 - e.x0, 28, 1, !1);
    if (
      (r.rotateZ(Math.PI / 2),
      r.translate((e.x0 + e.x1) / 2, e.y, e.z),
      B(k(r), t),
      n)
    ) {
      let t = k(new _({ color: 6279423, toneMapped: !1 }));
      for (let n of [e.x0 + 0.4, e.x1 - 0.4, (e.x0 + e.x1) / 2]) {
        let r = new s(e.r + 0.1, 0.12, 8, 36);
        (r.rotateY(Math.PI / 2),
          r.translate(n, e.y, e.z),
          B(k(r), t, P, { cast: !1, receive: !1 }));
      }
    } else {
      let n = new p(e.r, 2.4, 24);
      (n.rotateZ(-Math.PI / 2), n.translate(e.x1 + 1.2, e.y, e.z), B(k(n), t));
      let r = new D(e.r * 0.7, e.r * 1.05, 2, 20, 1, !0);
      (r.rotateZ(Math.PI / 2),
        r.translate(e.x0 - 1, e.y, e.z),
        B(k(r), L.dark));
    }
  }
  {
    let e = _e,
      t = 12 + e.y,
      n = new s(e.r, 1.4, 16, 48);
    (n.translate(e.x, t, N.z0 + 0.1), B(k(n), L.white));
    let r = new D(e.r - 1, e.r - 1, 14, 32, 1, !0);
    (r.rotateX(Math.PI / 2), r.translate(e.x, t, N.z0 - 7), B(k(r), L.wall));
    let i = new s(e.r - 0.6, 0.6, 12, 40);
    (i.translate(e.x, t, N.z0 - 14), B(k(i), L.orange));
    let a = new u(e.r - 1.3, 40);
    (a.translate(e.x, t, N.z0 - 1), B(k(a), L.frame));
    let o = new ae(e.r - 1.9, e.r - 1.3, 40);
    (o.translate(e.x, t, N.z0 - 0.97), B(k(o), L.yellow, P, { cast: !1 }));
    let c = new u(1.1, 24);
    (c.translate(e.x, t + 1.6, N.z0 - 0.95),
      B(k(c), k(new _({ color: 12574975, toneMapped: !0 })), P, {
        cast: !1,
        receive: !1,
      }));
  }
  let Ze = {
      sunDir: { value: new d(0, 1, 0) },
      earthDir: { value: new d(...be) },
      lit: { value: 1 },
    },
    Qe = k(
      new S({
        uniforms: Ze,
        vertexColors: !0,
        fog: !1,
        vertexShader: `varying vec3 vN;varying vec3 vC;
   void main(){vC=color;
    #ifdef USE_INSTANCING
     mat4 m=modelMatrix*instanceMatrix;
    #else
     mat4 m=modelMatrix;
    #endif
    vN=normalize(mat3(m)*normal);gl_Position=projectionMatrix*viewMatrix*m*vec4(position,1.);}`,
        fragmentShader: `uniform vec3 sunDir;uniform vec3 earthDir;uniform float lit;varying vec3 vN;varying vec3 vC;
   void main(){vec3 n=normalize(vN);
    float sun=max(dot(n,sunDir),0.)*lit*2.6,earth=max(dot(n,earthDir),0.)*.22*lit;
    gl_FragColor=vec4(vC*(sun+earth*vec3(.55,.7,1.)+.004),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`,
      }),
    ),
    $e = (() => {
      let e = [],
        t = 15264234;
      (e.push(z(new D(1.86, 1.86, 0.25, 40).translate(0, 0.12, 0), 3813414)),
        e.push(z(new D(1.02, 1.86, 3.2, 40).translate(0, 1.85, 0), t)),
        e.push(
          z(new D(0.62, 1.02, 0.7, 32).translate(0, 3.8, 0), t),
          z(new D(0.66, 0.66, 0.25, 32).translate(0, 4.27, 0), 10133670),
        ));
      for (let t of [0, 1, 2, 3]) {
        let n = new o(0.5, 0.32, 0.06);
        (n.translate(0, 2.6, 1.46),
          n.rotateY((t * Math.PI) / 2 + 0.4),
          e.push(z(n, 1053464)));
      }
      let n = new D(1.86, 1.86, 2.8, 40, 1, !0);
      n.translate(0, -1.4, 0);
      let r = n.toNonIndexed(),
        i = r.attributes.position,
        a = new Float32Array(i.count * 3),
        s = new v(1583698),
        c = new v(14474975);
      for (let e = 0; e < i.count; e++) {
        let t = Math.atan2(i.getZ(e), i.getX(e)) > 0 ? s : c;
        a.set([t.r, t.g, t.b], e * 3);
      }
      (r.setAttribute(`color`, new f(a, 3)),
        n.dispose(),
        e.push(r),
        e.push(z(new D(1.86, 1.86, 0.08, 40).translate(0, -2.8, 0), 2764340)));
      for (let t of [0, 1, 2, 3]) {
        let n = new o(0.06, 1.4, 0.5);
        (n.translate(0, -2.1, 2.05),
          n.rotateY((t * Math.PI) / 2 + Math.PI / 4),
          e.push(z(n, 14474975)));
      }
      return Ke(e);
    })(),
    et = (() => {
      let e = [];
      (e.push(
        z(new D(1.53, 1.53, 5.2, 40).translate(0, 2.6, 0), 14275780),
        z(new D(0.9, 1.53, 0.5, 32).translate(0, 5.45, 0), 12567236),
      ),
        e.push(
          z(new D(1.53, 1.53, 1.3, 32).translate(0, -0.65, 0), 3816770),
          z(new D(0.5, 0.8, 0.6, 16).translate(0, -1.6, 0), 1908773),
        ));
      for (let t of [-1, 1]) {
        e.push(z(new o(2.2, 0.12, 0.12).translate(t * 2.6, -0.6, 0), 9080725));
        let n = new u(1.9, 10);
        (n.rotateY((t * Math.PI) / 2),
          n.translate(t * 3.71, -0.6, 0),
          e.push(z(n, 1715286)));
        let r = new u(1.9, 10);
        (r.rotateY((-t * Math.PI) / 2),
          r.translate(t * 3.69, -0.6, 0),
          e.push(z(r, 12106944)));
      }
      return Ke(e);
    })(),
    V = [],
    tt = (e, t = F) => {
      let n = new r(e, Qe);
      return ((n.frustumCulled = !1), t.add(n), n);
    },
    nt = tt($e, P);
  (nt.position.set(_e.x, 12 + _e.y, N.z0 - 14 - 4.4),
    nt.quaternion.setFromUnitVectors(new d(0, 1, 0), new d(0, 0, 1)));
  let rt = new d(...be).negate(),
    it = new d(...Se).negate(),
    at = (2 * Math.PI) / 180,
    H = {
      m: tt($e),
      hold: new d(10, 32, N.z0 - 60),
      d: (e) => 25 + 575 * Math.exp(-e / 400),
    };
  (H.m.quaternion.setFromUnitVectors(new d(0, 1, 0), it.clone().negate()),
    V.push(
      [H.m, new d(1.9, 1.2, 0), 16777215, `strobe`],
      [H.m, new d(0, 4.3, 0.7), 16777215, `rcs0`],
      [H.m, new d(0.7, 4.3, 0), 16777215, `rcs1`],
    ));
  let U = { m: tt(et), from: new d(30, 42, N.z0 - 30), vx: 0.04, vy: 0.08 };
  (U.m.quaternion.setFromUnitVectors(new d(0, 1, 0), it),
    V.push(
      [U.m, new d(1.6, 3, 0), 16777215, `strobe2`],
      [U.m, new d(0, -1.6, 1.2), 16777215, `rcs2`],
    ));
  let ot = new ie();
  F.add(ot);
  {
    let e = new D(4, 4, 13, 32);
    e.rotateZ(Math.PI / 2);
    let t = new o(3, 2.6, 3);
    t.translate(-8.2, 0, 0);
    let n = new r(Ke([z(e, 14474975), z(t, 13136938)]), Qe);
    ((n.frustumCulled = !1),
      ot.add(n),
      V.push(
        [ot, new d(-9.8, 0, -1.2), 16773328, `rcs3`],
        [ot, new d(-8.2, 1.5, 0), 16777215, `strobe3`],
      ));
  }
  V.push([null, new d(-620, 532, -1250), 16777215, `far`]);
  {
    let e = [],
      t = [],
      n = [],
      r = N.z0 - 60;
    e.push(
      R(1400, 4, 4, 0, -40, r + 6),
      R(1400, 4, 4, 0, -40, r - 6),
      R(4, 40, 30, A.x0 + 10, -20, N.z0 - 20),
      R(4, 40, 30, A.x1 - 10, -20, N.z0 - 20),
    );
    for (let t = -650; t <= 650; t += 26) e.push(R(1, 1, 16, t, -40, r));
    for (let n of [-560, -420, -280, 280, 420, 560]) {
      e.push(R(2, 2, 200, n, -40, r));
      for (let e of [-36, 104]) {
        let i = new o(46, 0.4, 120);
        (i.rotateX(0.35), i.translate(n, -40, r - e), t.push(i));
      }
    }
    for (let e of [-180, -130, 130, 180]) n.push(R(30, 50, 0.4, e, -70, r));
    (e.push(
      R(A.x1 - A.x0 + 8, 20, 8, 0, 2, N.z0 - 4),
      R(8, N.h + 24, 8, A.x0 - 4, 12 + N.h / 2 - 4, N.z0 - 4),
      R(8, N.h + 24, 8, A.x1 + 4, 12 + N.h / 2 - 4, N.z0 - 4),
      R(A.x1 - A.x0 + 8, 6, 8, 0, 12 + N.h + 3, N.z0 - 4),
    ),
      B(
        Ke([
          ...e.map((e) => z(e, 6975350)),
          ...t.map((e) => z(e, 1583698)),
          ...n.map((e) => z(e, 14474975)),
        ]),
        Qe,
        P,
        { cast: !1 },
      ));
  }
  let W = new ie();
  ((W.name = `kepler-crane`),
    F.add(W),
    B(k(R(2, 2, N.z1 - N.z0 - 4, 0, 52, (N.z0 + N.z1) / 2)), L.yellow, W, {
      cast: !1,
    }));
  let st = B(k(R(4, 1.6, 4, 0, 0, 0)), L.dark, W, { cast: !1 });
  st.position.y = 50.6;
  let ct = B(k(R(9, 0.35, 5.5, 0, 0, 0)), L.primer, W, { cast: !1 }),
    lt = k(new m());
  lt.setAttribute(`position`, new x(new Float32Array(12), 3));
  let ut = new ce(lt, k(new a({ color: 2236962 })));
  ((ut.frustumCulled = !1), W.add(ut));
  let dt = C.arms,
    ft = [
      [k(new D(0.7, 0.9, 0.6, 16)), L.dark],
      [k(R(3.2, 0.55, 0.6, 1.6, 0, 0)), L.orange],
      [k(R(2.6, 0.45, 0.5, 1.3, 0, 0)), L.orange],
      [k(R(0.6, 0.3, 0.3, 0.3, 0, 0)), L.dark],
    ].map(([e, t]) => {
      let n = new de(e, t, dt.length);
      return (
        (n.castShadow = !1),
        (n.receiveShadow = !0),
        (n.frustumCulled = !1),
        F.add(n),
        n
      );
    }),
    G = (() => {
      let e = new y(),
        t = new y(),
        n = new y(),
        r = new y(),
        i = new y(),
        a = new y();
      return (
        e.add(t),
        (t.position.y = -0.3),
        t.add(n),
        (n.position.y = 0.6),
        n.add(r),
        (r.position.x = 3.2),
        r.add(i),
        (i.position.x = 2.6),
        i.add(a),
        (a.position.x = 0.7),
        { base: e, yawJ: t, sh: n, el: r, wr: i, tip: a }
      );
    })(),
    pt = k(
      new t({
        map: Ge,
        color: 13625087,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
    mt = dt.map(() => {
      let e = new se(pt);
      return (e.scale.setScalar(1.6), (e.visible = !1), F.add(e), e);
    }),
    K = new Float32Array(2100),
    q = new Float32Array(2100),
    ht = new Float32Array(700),
    gt = new Float32Array(700);
  for (let e = 0; e < 700; e++) K[e * 3 + 1] = -1e3;
  let _t = k(new m());
  _t.setAttribute(`position`, new f(K, 3));
  let vt = new w(
    _t,
    k(
      new b({
        color: 16761466,
        size: 0.14,
        map: Ge,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
  );
  ((vt.frustumCulled = !1), F.add(vt));
  let yt = 0,
    bt = (() => {
      let e = 15001320,
        t = [
          z(R(0.8, 1, 0.55, 0, 0, 0), e),
          z(R(0.55, 0.5, 0.55, 0, 0.8, 0), e),
          z(R(0.42, 0.3, 0.05, 0, 0.82, 0.29), 13146682),
          z(R(0.7, 0.9, 0.4, 0, 0, -0.45), e),
        ];
      for (let n of [-1, 1]) {
        t.push(z(R(0.3, 0.9, 0.3, n * 0.22, -0.95, 0), e));
        let r = new o(0.25, 0.8, 0.25);
        (r.rotateX(-0.9), r.translate(n * 0.55, 0.1, 0.2), t.push(z(r, e)));
      }
      return Ke(t);
    })(),
    xt = [
      [-40, 30],
      [-31, 22],
      [12, 38],
      [48, 18],
    ].map(([e, t], n) => ({
      base: new d(e, 12 + t, N.z0 - 1.9),
      anchor: new d(Math.round(e / 9) * 9, 12 + t + 3, N.z0 - 0.8),
      ph: n * 1.7,
    })),
    St = new de(bt, Qe, xt.length);
  ((St.frustumCulled = !1), F.add(St));
  let Ct = k(new m());
  Ct.setAttribute(`position`, new x(new Float32Array(xt.length * 6), 3));
  let wt = new ce(Ct, k(new a({ color: 14209200 })));
  ((wt.frustumCulled = !1), F.add(wt));
  for (let e of xt) V.push([null, e.base, 16773584, `helmet`, e]);
  let Tt = new Float32Array(V.length * 3),
    Et = new Float32Array(V.length * 3),
    Dt = k(new m());
  (Dt.setAttribute(`position`, new f(Tt, 3)),
    Dt.setAttribute(`color`, new f(Et, 3)));
  let Ot = new w(
    Dt,
    k(
      new b({
        size: 1.2,
        map: Ge,
        vertexColors: !0,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
        sizeAttenuation: !0,
      }),
    ),
  );
  ((Ot.frustumCulled = !1), F.add(Ot));
  let kt = e.camera.far || 4e3,
    J = Math.min(2800, kt * 0.7),
    At = new r(
      k(new i(kt * 0.95, 24, 12)),
      k(new _({ color: 0, side: 1, fog: !1, depthWrite: !1 })),
    );
  ((At.renderOrder = -10), (At.frustumCulled = !1), I.add(At));
  let jt = k(
    new b({
      color: 16777215,
      size: 1.6,
      sizeAttenuation: !1,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
    }),
  );
  {
    let e = [],
      t = [],
      n = new d(...be),
      r = Math.cos(ye - 0.004);
    for (let i = 0; i < 9e3; i++) {
      let i = new d(M() * 2 - 1, M() * 2 - 1, M() * 2 - 1).normalize();
      if (i.dot(n) > r) continue;
      (i.multiplyScalar(J * 1.3), e.push(i.x, i.y, i.z));
      let a = 0.5 + M() * 0.5,
        o = M();
      t.push(a * (o > 0.8 ? 1 : 0.85), a * 0.9, a * (o < 0.2 ? 1 : 0.85));
    }
    let i = k(new m());
    (i.setAttribute(`position`, new x(e, 3)),
      i.setAttribute(`color`, new x(t, 3)),
      (jt.vertexColors = !0));
    let a = new w(i, jt);
    ((a.frustumCulled = !1), (a.renderOrder = -9), I.add(a));
  }
  let Mt = J * Math.sin(ye),
    Nt = new d(...be),
    Pt = (e, t, n) => {
      let r = new i(e, 256, n, 0, Math.PI * 2, 0, (t * Math.PI) / 180);
      return k(r);
    },
    Ft = new re().setFromUnitVectors(new d(0, 1, 0), Nt.clone().negate()),
    It =
      (e.config.quality ?? `high`) === `high` &&
      (e.renderer.capabilities.maxTextureSize ?? 0) >= 4096,
    Lt = ke(e.renderer, { size: It ? 4096 : 2048 }),
    Rt = k(je(Lt.texture, Lt.fields)),
    Y = Rt.uniforms,
    X = new r(Pt(Mt, 50, 96), Rt);
  (X.quaternion.copy(Ft),
    (X.frustumCulled = !1),
    (X.renderOrder = -8),
    I.add(X));
  let zt = new r(Pt(Mt * 1.008, 58, 64), k(Me(Y.sunDir)));
  (zt.quaternion.copy(Ft),
    (zt.frustumCulled = !1),
    (zt.renderOrder = -7),
    I.add(zt));
  let Bt = new d(...xe),
    Vt = (() => {
      let e = Nt.clone().negate(),
        t = new d(...xe),
        n = new d().crossVectors(e, t),
        r = (51.6 * Math.PI) / 180,
        i = new d(Math.cos(0.9), 0, Math.sin(0.9)),
        a = new d(0, Math.cos(r), 0)
          .addScaledVector(new d(-Math.sin(0.9), 0, Math.cos(0.9)), Math.sin(r))
          .normalize(),
        o = new d().crossVectors(i, a),
        s = new he().makeBasis(e, t, n);
      return new he().makeBasis(i, a, o).multiply(s.transpose());
    })(),
    Ht = new he(),
    Ut = new d(0, 1, 0).addScaledVector(Nt, -Nt.y).normalize(),
    Wt = {
      pole: {
        value: Nt.clone()
          .negate()
          .multiplyScalar(Math.cos(0.61))
          .addScaledVector(Ut, Math.sin(0.61))
          .normalize(),
      },
      sunDir: Y.sunDir,
      time: { value: 0 },
      dark: { value: 0 },
    },
    Gt = Pt(1, 60, 60),
    Kt = [0, 0.25, 0.5, 0.75, 1].map((e) => {
      let t = new r(Gt, k(Ne(Wt, e, 2)));
      return (
        t.scale.setScalar(Mt * (1.016 + 0.03 * e)),
        t.quaternion.copy(Ft),
        (t.frustumCulled = !1),
        (t.renderOrder = -6),
        I.add(t),
        t
      );
    }),
    qt = new d(0.62, 0.42, -0.66).normalize(),
    Jt = new r(
      k(new i(J * 1.2 * Math.tan((0.26 * Math.PI) / 180), 32, 16)),
      k(
        new S({
          uniforms: { sunDir: Y.sunDir },
          fog: !1,
          vertexShader: `varying vec3 vN;varying vec3 vP;void main(){vN=normalize(mat3(modelMatrix)*normal);vP=position;gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);gl_Position.z=gl_Position.w*.99999;}`,
          fragmentShader: `uniform vec3 sunDir;varying vec3 vN;varying vec3 vP;
   float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
   void main(){vec3 n=normalize(vN);float d=max(dot(n,sunDir),0.);vec3 q=normalize(vP)*6.;float m=.72+.18*sin(q.x*1.7+sin(q.y*2.3))*sin(q.z*1.3)+.1*h(floor(q*4.));
    gl_FragColor=vec4(vec3(.82,.8,.76)*m*smoothstep(0.,.15,d)*1.6+vec3(.01),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`,
        }),
      ),
    );
  ((Jt.frustumCulled = !1),
    (Jt.renderOrder = -8),
    Jt.position.copy(qt).multiplyScalar(J * 1.2),
    I.add(Jt));
  let Z = Pe();
  (Z.disc.scale.setScalar(J * 1.25 * 0.0096),
    Z.glare.scale.setScalar(J * 1.25 * 0.13),
    I.add(Z.glare, Z.disc));
  let Yt = (() => {
      let e = C.pools ?? [];
      if (!e.length) return null;
      let t = [],
        n = [],
        i = [],
        a = [],
        o = new v();
      e.forEach((e, r) => {
        o.setHex(e.col).multiplyScalar(e.gain);
        for (let [r, a] of [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ])
          (t.push(e.x + (r * 2 - 1) * e.r, e.y, e.z + (a * 2 - 1) * e.r),
            n.push(r, a),
            i.push(o.r, o.g, o.b));
        a.push(r * 4, r * 4 + 2, r * 4 + 1, r * 4, r * 4 + 3, r * 4 + 2);
      });
      let s = k(new m());
      (s.setAttribute(`position`, new x(t, 3)),
        s.setAttribute(`uv`, new x(n, 2)),
        s.setAttribute(`color`, new x(i, 3)),
        s.setIndex(a));
      let c = new r(
        s,
        k(
          new _({
            map: Ge,
            vertexColors: !0,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            side: 2,
          }),
        ),
      );
      return ((c.renderOrder = 2), (c.frustumCulled = !1), P.add(c), c);
    })(),
    Xt = [
      [-42, 3837183],
      [42, 16726570],
    ].map(([e, t]) => {
      let n = new ue(t, 220, 48, 2);
      return (n.position.set(e, 18, Ae), F.add(n), n);
    }),
    Zt = Oe(e, P, c),
    Q = e.modules.get(`environment`),
    Qt = c.climate.grade,
    $t = {
      key: Qt.key.intensity,
      sky: new v(Qt.hemi.sky),
      ground: new v(Qt.hemi.ground),
      hemi: Qt.hemi.intensity,
      exp: Qt.exposure ?? 1,
    },
    en = { sky: new v(7757887), ground: new v(1975862), hemi: 1.05 },
    tn = new v(Qt.key.color),
    nn = new v(16742970),
    rn = new d(),
    an = [0, 0, 0],
    $ = new d(),
    on = new d(),
    sn = new he(),
    cn = new v(),
    ln = new v(6, 2.6, 1),
    un = new le(),
    dn = new v(),
    fn = $t.exp,
    pn = null,
    mn = 0,
    hn = null,
    gn = (t) => e.events.emit(`ui:message`, { kind: `hint`, text: t, ttl: 4 });
  function _n(t) {
    ((t = Math.min(t || 0, 0.1)),
      (mn += t),
      !Lt.done() && Lt.step(2) && (Y.ready.value = 1));
    let n = e.camera,
      r = Ee(C, h());
    ((hn = r),
      De(r.t, an),
      rn.set(an[0], an[1], an[2]),
      I.position.copy(n.position),
      X.position.copy(Nt).multiplyScalar(J),
      zt.position.copy(X.position));
    for (let e of Kt) e.position.copy(X.position);
    (Z.disc.position.copy(rn).multiplyScalar(J * 1.25),
      Z.glare.position.copy(Z.disc.position),
      Y.sunDir.value.copy(rn),
      (Wt.time.value = h() / 60));
    let i = we(C, h()) || globalThis.__keplerAurora === !0;
    Wt.dark.value = i ? 1 - r.lit : 0;
    for (let e of Kt) e.visible = i && r.lit < 0.97;
    (Ht.makeRotationAxis(Bt, (2 * Math.PI * (h() / 60)) / 9028).premultiply(Vt),
      Y.spin.value.setFromMatrix4(Ht),
      (Y.time.value = mn));
    let a = cn.copy(tn).lerp(nn, r.red * 0.85);
    ((Z.disc.visible = Z.glare.visible = r.lit > 0.001),
      (Z.disc.material.opacity = Z.glare.material.opacity = r.lit),
      Z.disc.material.color.setRGB(8, 7.6, 7).lerp(ln, r.red * 0.8),
      (jt.opacity = 0.3 + 0.7 * (1 - r.lit)),
      Ze.sunDir.value.copy(rn),
      (Ze.lit.value = r.lit),
      Q?.skyDome && (Q.skyDome.visible = !1),
      Q?.clouds && (Q.clouds.visible = !1),
      Q?.fog && (Q.fog.density = Math.min(Q.fog.density, 4e-5)));
    let o = Q?.sunLight,
      s = Q?.hemiLight;
    (o && ((o.intensity = $t.key * r.lit), o.color.copy(a)),
      s &&
        ((s.intensity = en.hemi + ($t.hemi - en.hemi) * r.lit),
        s.color.copy(en.sky).lerp($t.sky, r.lit),
        s.groundColor.copy(en.ground).lerp($t.ground, r.lit)));
    let c = $t.exp * (1 + 1.3 * (1 - r.lit));
    ((fn += (c - fn) * Math.min(1, t * (c > fn ? 0.5 : 2.5))),
      (e.renderer.toneMappingExposure = fn));
    for (let [e, t] of Xt.entries())
      t.intensity = 200 + 90 * Math.sin(mn * 1.6 + e);
    (Yt && Yt.material.color.setScalar(0.22 + 0.63 * (1 - r.lit)),
      pn !== null &&
        r.shadow !== pn &&
        gn(
          r.shadow
            ? `ENTERING EARTH'S SHADOW · 40 s on work lights`
            : `SUNRISE · the bay is back in sunlight`,
        ),
      (pn = r.shadow));
    let l = h() / 60,
      u = Te(l);
    W.position.x = u.x;
    let f = u.z,
      p = 12 + u.y;
    ((st.position.z = f), ct.position.set(0, p, f), (ct.rotation.y = u.yaw));
    {
      let e = lt.attributes.position;
      (e.setXYZ(0, -1.5, 49.8, f),
        e.setXYZ(1, -1.5, p + 0.2, f),
        e.setXYZ(2, 1.5, 49.8, f),
        e.setXYZ(3, 1.5, p + 0.2, f),
        (e.needsUpdate = !0));
    }
    for (let e = 0; e < dt.length; e++) {
      let t = dt[e],
        n = Ce(t, l);
      (G.base.position.set(t.x, t.y, t.z),
        (G.yawJ.rotation.y = n.ya),
        (G.sh.rotation.z = n.sh),
        (G.el.rotation.z = n.el),
        (G.wr.rotation.z = n.wr),
        G.base.updateMatrixWorld(!0),
        ft[0].setMatrixAt(e, sn.copy(G.yawJ.matrixWorld)),
        ft[1].setMatrixAt(e, G.sh.matrixWorld),
        ft[2].setMatrixAt(e, G.el.matrixWorld),
        ft[3].setMatrixAt(e, G.wr.matrixWorld));
      let r = n.on,
        i = mt[e];
      if (((i.visible = r), r)) {
        (G.tip.getWorldPosition($),
          i.position.copy($),
          (i.material.opacity = 0.8),
          i.scale.setScalar(1 + Math.random() * 1.2));
        for (let e = 0; e < 5; e++) {
          let e = yt;
          ((yt = (yt + 1) % 700),
            (K[e * 3] = $.x),
            (K[e * 3 + 1] = $.y),
            (K[e * 3 + 2] = $.z),
            (q[e * 3] = (Math.random() - 0.5) * 5),
            (q[e * 3 + 1] = Math.random() * 3),
            (q[e * 3 + 2] = (Math.random() - 0.5) * 5),
            (ht[e] = 0.6 + Math.random() * 0.9),
            (gt[e] = t.y - 0.55));
        }
      }
    }
    for (let e of ft) e.instanceMatrix.needsUpdate = !0;
    for (let e = 0; e < 700; e++) {
      if (ht[e] <= 0) continue;
      ht[e] -= t;
      let n = e * 3;
      ((q[n + 1] -= 9 * t),
        (K[n] += q[n] * t),
        (K[n + 1] += q[n + 1] * t),
        (K[n + 2] += q[n + 2] * t),
        K[n + 1] < gt[e] &&
          ((K[n + 1] = gt[e]),
          (q[n + 1] *= -0.3),
          (q[n] *= 0.5),
          (q[n + 2] *= 0.5)),
        ht[e] <= 0 && (K[n + 1] = -1e3));
    }
    _t.attributes.position.needsUpdate = !0;
    let m = Math.max(0, (h() - (C.epoch ?? 0)) / 60);
    H.m.position.copy(H.hold).addScaledVector(it, H.d(m));
    {
      let e = at,
        t =
          (U.vx / e) * Math.sin(e * m) +
          ((2 * U.vy) / e) * (1 - Math.cos(e * m)),
        n =
          ((2 * U.vx) / e) * (Math.cos(e * m) - 1) +
          ((4 * U.vy) / e) * Math.sin(e * m) -
          3 * U.vy * m;
      U.m.position.copy(U.from).addScaledVector(rt, t).addScaledVector(it, n);
    }
    ot.position.set(-300 + ((m * 0.12) % 600), -28, N.z0 - 110);
    {
      let e = Ct.attributes.position;
      (xt.forEach((t, n) => {
        let r = $.set(
          t.base.x + Math.sin(mn * 0.3 + t.ph) * 0.4,
          t.base.y + Math.sin(mn * 0.4 + t.ph * 2) * 0.5,
          t.base.z,
        );
        (sn.makeRotationFromEuler(
          un.set(0, Math.PI, 0.15 * Math.sin(mn * 0.25 + t.ph)),
        ),
          sn.setPosition(r),
          St.setMatrixAt(n, sn),
          (t.pos = (t.pos ?? new d()).copy(r)),
          e.setXYZ(n * 2, t.anchor.x, t.anchor.y, t.anchor.z),
          e.setXYZ(n * 2 + 1, r.x, r.y, r.z - 0.4));
      }),
        (e.needsUpdate = !0),
        (St.instanceMatrix.needsUpdate = !0));
    }
    let g = dn;
    (V.forEach(([e, t, n, r, i], a) => {
      let o = 1,
        s = h() / 60;
      (r.startsWith(`strobe`)
        ? (o = (s + a * 0.37) % 2.2 < 0.06 ? 2 : 0)
        : r.startsWith(`rcs`)
          ? (o = (s * 0.31 + a * 0.71) % 7 < 0.12 ? 0.6 : 0)
          : r === `far`
            ? (o = s % 2.6 < 0.05 ? 1.2 : 0)
            : r === `helmet` && (o = 0.5),
        e
          ? (e.updateMatrixWorld(), $.copy(t).applyMatrix4(e.matrixWorld))
          : i
            ? $.copy(i.pos ?? t).add(on.set(0.2, 0.95, 0.3))
            : $.copy(t),
        (Tt[a * 3] = $.x),
        (Tt[a * 3 + 1] = $.y),
        (Tt[a * 3 + 2] = $.z),
        g.setHex(n).multiplyScalar(o),
        (Et[a * 3] = g.r),
        (Et[a * 3 + 1] = g.g),
        (Et[a * 3 + 2] = g.b));
    }),
      (Dt.attributes.position.needsUpdate = Dt.attributes.color.needsUpdate =
        !0));
  }
  return {
    update: _n,
    stats() {
      let e = hn;
      return e
        ? {
            t: +e.t.toFixed(2),
            lit: +e.lit.toFixed(3),
            shadow: e.shadow,
            next: +e.next.toFixed(1),
            exposure: +fn.toFixed(3),
            earth: Lt.done(),
            arms: dt.length,
            detail: Zt.stats(),
            key: Q?.sunLight?.intensity ?? null,
            hemi: Q?.hemiLight?.intensity ?? null,
          }
        : null;
    },
    dispose() {
      n.remove(P, F, I);
      for (let e of ft) e.dispose?.();
      (St.dispose?.(), Zt.dispose(), Lt.dispose(), Z.dispose());
      for (let e of T.geos) e.dispose();
      for (let e of T.mats) e.dispose();
      for (let e of T.texs) e.dispose();
      Q?.skyDome && (Q.skyDome.visible = !0);
    },
  };
}
export { Fe as createKeplerView };
//# sourceMappingURL=kepler-view-goYpYVca.js.map
