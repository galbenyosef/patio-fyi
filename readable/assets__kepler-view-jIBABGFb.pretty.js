/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Dn as e,
  Dt as t,
  En as n,
  F as r,
  G as i,
  H as a,
  Hn as o,
  I as s,
  In as c,
  It as l,
  K as u,
  L as d,
  Lt as f,
  Mn as p,
  Ot as m,
  R as h,
  Rn as g,
  Rt as _,
  Tt as ee,
  U as v,
  Ut as y,
  V as te,
  Yt as b,
  Zt as x,
  _n as S,
  an as ne,
  cn as C,
  en as w,
  et as re,
  fn as ie,
  gn as T,
  gt as ae,
  kt as oe,
  lt as se,
  mn as ce,
  nn as le,
  pn as ue,
  rn as de,
  rt as E,
  tn as fe,
  v as D,
  vn as pe,
  wn as O,
  yn as me,
  zn as k,
  zt as he,
} from "./graphics-quality-BsjABS0s.js";
import {
  c as A,
  d as ge,
  i as j,
  n as _e,
  s as M,
  t as N,
  u as ve,
} from "./kepler-BUDn6dZs.js";
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
} from "./kepler-sim-CZsZKMi2.js";
function Oe(e, t, n) {
  let i = [],
    o = (e) => (i.push(e), e),
    s = 29,
    c = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296,
    l = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let a = o(new h(i));
      return (
        (a.wrapS = a.wrapT = ie),
        a.repeat.set(...r),
        (a.colorSpace = ce),
        (a.anisotropy = 8),
        a
      );
    },
    p = (e, t, n, r, i = 0.12) => {
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
    m = (e, t, n, r, i = 0.08) => {
      for (let a = 0; a < r; a++)
        ((e.fillStyle = `rgba(${c() < 0.5 ? `0,0,0` : `255,255,255`},${c() * i})`),
          e.fillRect(c() * t, c() * n, 1 + c() * 2, 1 + c() * 2));
    },
    g = new se();
  ((g.name = `kepler-detail`), t.add(g));
  let ee = l(
      512,
      512,
      (e, t, n) => {
        ((e.fillStyle = `#3d434b`), e.fillRect(0, 0, t, n));
        for (let t = 0; t < 4; t++)
          ((e.fillStyle = `rgba(${c() < 0.5 ? `0,0,0` : `255,255,255`},${0.03 + c() * 0.05})`),
            e.fillRect((t % 2) * 256, (t >> 1) * 256, 256, 256));
        (m(e, t, n, 6e3, 0.06),
          p(e, t, n, 60, 0.18),
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
    te = l(
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
        (m(e, t, n, 800, 0.25), p(e, t, n, 20, 0.3));
      },
      [45, 1],
    ),
    b = o(new y({ map: ee, roughness: 0.75, metalness: 0.35 })),
    x = o(new y({ map: te, roughness: 0.8, metalness: 0.1 }));
  (ee.repeat.set(1, 1), te.repeat.set(1, 1));
  let S = { panel: [], hazard: [] },
    C = (e, t, n, r, i, a, o, s) => {
      let c = new w(e, t),
        l = c.attributes.uv,
        u = n === x ? 1 : t / 8;
      for (let e = 0; e < l.count; e++)
        l.setXY(e, l.getX(e) * s, l.getY(e) * u);
      (c.rotateY(o),
        c.translate(r, i, a),
        S[n === x ? `hazard` : `panel`].push(c));
    },
    re = N.x1 - N.x0,
    T = N.z1 - A.wz;
  (C(re, N.h - 1.2, b, 0, 13.2 + (N.h - 1.2) / 2, N.z1 - 0.02, Math.PI, re / 8),
    C(re, 1.2, x, 0, 12.6, N.z1 - 0.025, Math.PI, re / 2));
  for (let e of [-1, 1]) {
    let t = e < 0 ? N.x0 + 0.02 : N.x1 - 0.02;
    (C(
      T,
      N.h - 1.2,
      b,
      t,
      13.2 + (N.h - 1.2) / 2,
      (A.wz + N.z1) / 2,
      (-e * Math.PI) / 2,
      T / 8,
    ),
      C(
        T,
        1.2,
        x,
        t + (e < 0 ? 0.005 : -0.005),
        12.6,
        (A.wz + N.z1) / 2,
        (-e * Math.PI) / 2,
        T / 2,
      ));
  }
  for (let [e, t] of [
    [`panel`, b],
    [`hazard`, x],
  ]) {
    let n = new _(o(D(S[e])), t);
    (S[e].forEach((e) => e.dispose()), (n.receiveShadow = !0), g.add(n));
  }
  {
    let e = { orange: [], blue: [], grey: [], dark: [] },
      t = { orange: 13133354, blue: 4156042, grey: 9080725, dark: 2764340 };
    for (let t of n.kepler?.pipes ?? []) {
      let n = t.alongX ? t.x1 - t.x0 : t.z1 - t.z0;
      t.runs.forEach(([r, i, a], o) => {
        let s = new u(i, i, n, 10, 1, !0);
        (s.rotateZ(Math.PI / 2),
          t.alongX || s.rotateY(Math.PI / 2),
          s.translate(
            t.alongX ? (t.x0 + t.x1) / 2 : t.x,
            12 + t.y + r,
            t.alongX ? t.z : (t.z0 + t.z1) / 2,
          ),
          e[a].push(s));
        for (let a = 3; a < n - 1; a += 6) {
          let n = new u(i * 1.45, i * 1.45, 0.12, 10);
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
      for (let i = 1.5; i < n; i += 3) {
        let n = new r(
          t.alongX ? 0.08 : 0.5,
          t.runs.length * 0.42 + 0.2,
          t.alongX ? 0.5 : 0.08,
        );
        (n.translate(
          t.alongX ? t.x0 + i : t.x + (t.x > 0 ? 0.15 : -0.15),
          12 + t.y + t.runs.reduce((e, t) => e + t[0], 0) / t.runs.length,
          t.alongX ? t.z + (t.z > 0 ? 0.15 : -0.15) : t.z0 + i,
        ),
          e.dark.push(n));
      }
    }
    for (let [n, r] of Object.entries(e)) {
      if (!r.length) continue;
      let e = new _(
        o(D(r)),
        o(new y({ color: t[n], roughness: 0.5, metalness: 0.5 })),
      );
      (r.forEach((e) => e.dispose()),
        (e.castShadow = !0),
        (e.receiveShadow = !0),
        g.add(e));
    }
  }
  {
    let e = l(256, 256, (e, t, n) => {
        ((e.fillStyle = `#25292e`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#565c64`));
        for (let r = 0; r < t; r += 8) e.fillRect(r, 0, 3, n);
        e.fillStyle = `#4a5058`;
        for (let r = 0; r < n; r += 32) e.fillRect(0, r, t, 4);
        (m(e, t, n, 1500, 0.12), p(e, t, n, 12, 0.25));
      }),
      t = [],
      r = [],
      i = [],
      a = 0;
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
        o = e.x - e.sx / 2,
        s = e.x + e.sx / 2,
        c = e.z - e.sz / 2,
        l = e.z + e.sz / 2;
      (t.push(o, n, c, s, n, c, s, n, l, o, n, l),
        r.push(o, c, s, c, s, l, o, l),
        i.push(a, a + 2, a + 1, a, a + 3, a + 2),
        (a += 4));
    }
    if (a) {
      let n = o(new d());
      (n.setAttribute(`position`, new E(t, 3)),
        n.setAttribute(`uv`, new E(r, 2)),
        n.setIndex(i),
        n.computeVertexNormals());
      let a = new _(
        n,
        o(
          new y({
            map: e,
            roughness: 0.6,
            metalness: 0.6,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -2,
          }),
        ),
      );
      ((a.receiveShadow = !0), g.add(a));
    }
  }
  let ae = l(256, 256, (e, t, n) => {
      ((e.fillStyle = `#d9a91f`),
        e.fillRect(0, 0, t, n),
        m(e, t, n, 2500, 0.15),
        p(e, t, n, 40, 0.35),
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
    oe = l(512, 256, (e, t, n) => {
      ((e.fillStyle = `#8a8f95`),
        e.fillRect(0, 0, t, n),
        m(e, t, n, 5e3, 0.08));
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
        p(e, t, n, 40, 0.2));
    });
  {
    let e = (e, t) =>
      l(256, 256, (n, r, i) => {
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
        r = t.radius,
        i = o(new w(r * 2, r * 2));
      i.rotateX(-Math.PI / 2);
      let a = new _(
        i,
        o(
          new he({
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
      (a.position.set(t.pos[0], t.pos[1] + 0.02, t.pos[2]),
        (a.renderOrder = 1),
        g.add(a));
    }
    let t = [],
      i = [];
    for (let [e, a, o] of n.kepler?.lamps ?? []) {
      let n = o > 0 ? 1 : -1,
        s = new r(1.6, 0.7, 1);
      (s.rotateX(n * 0.5), s.translate(e, a - 0.1, o - n * 0.5), t.push(s));
      let c = new w(1.3, 0.5);
      (c.rotateX(-Math.PI / 2 + n * 0.5),
        c.translate(e, a - 0.47, o - n * 0.62),
        i.push(c));
    }
    if (t.length) {
      let e = new _(
        o(D(t)),
        o(new y({ color: 1908773, roughness: 0.5, metalness: 0.7 })),
      );
      ((e.castShadow = !0),
        g.add(e),
        g.add(
          new _(
            o(D(i)),
            o(new he({ color: new v(1.6, 1.2, 0.7), toneMapped: !1, side: 2 })),
          ),
        ),
        t.forEach((e) => e.dispose()),
        i.forEach((e) => e.dispose()));
    }
  }
  {
    let e = M,
      t = l(256, 256, (e, t, n) => {
        ((e.fillStyle = `#3a4048`),
          e.fillRect(0, 0, t, n),
          m(e, t, n, 9e3, 0.1),
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
      n = l(256, 256, (e, t, n) => {
        ((e.fillStyle = `#c9cbc8`),
          e.fillRect(0, 0, t, n),
          m(e, t, n, 2e3, 0.05),
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
      r = o(
        new y({
          map: t,
          roughness: 0.95,
          metalness: 0,
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -2,
        }),
      ),
      i = o(
        new y({
          map: n,
          emissive: 16777215,
          emissiveMap: n,
          emissiveIntensity: 0.28,
          roughness: 0.8,
          metalness: 0,
        }),
      ),
      a = (t, n, r) => {
        let i = new w(e.x1 - e.x0 - 0.3, e.z1 - e.z0 - 0.3);
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
      [r, [a(12.013, !1, 2), a(12 + e.f1 + 0.013, !1, 2)]],
      [i, [a(12 + e.f1 - 0.215, !0, 3), a(12 + e.roof - 0.215, !0, 3)]],
    ]) {
      let e = new _(o(D(n)), t);
      (n.forEach((e) => e.dispose()), (e.receiveShadow = !0), g.add(e));
    }
  }
  let le = [
      l(512, 256, (e, t, n) => {
        ((e.fillStyle = `#3f6a8a`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < t; r += 12)
          ((e.fillStyle = `rgba(0,0,0,.22)`),
            e.fillRect(r, 0, 4, n),
            (e.fillStyle = `rgba(255,255,255,.08)`),
            e.fillRect(r + 6, 0, 3, n));
        ((e.fillStyle = `rgba(0,0,0,.35)`),
          e.fillRect(0, 0, t, 10),
          e.fillRect(0, n - 12, t, 12),
          m(e, t, n, 3e3, 0.08),
          p(e, t, n, 40, 0.3),
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
      l(256, 256, (e, t, n) => {
        ((e.fillStyle = `#3f6a8a`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `rgba(0,0,0,.4)`),
          e.fillRect(t / 2 - 2, 0, 4, n));
        for (let t of [40, 90, 166, 216])
          ((e.fillStyle = `#2a3035`),
            e.fillRect(t - 4, 10, 8, n - 20),
            (e.fillStyle = `#8a8f95`),
            e.fillRect(t - 8, n / 2 - 6, 16, 12));
        (m(e, t, n, 1500, 0.08), p(e, t, n, 20, 0.3));
      }),
      l(256, 256, (e, t, n) => {
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
        (m(e, t, n, 1500, 0.1), p(e, t, n, 15, 0.25));
      }),
      oe,
      ae,
      l(512, 128, (e, t, n) => {
        ((e.fillStyle = `#7b6a52`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < n; r += 14)
          ((e.fillStyle = `rgba(30,26,20,.55)`),
            e.fillRect(0, r, t, 3),
            (e.fillStyle = `rgba(255,240,220,.08)`),
            e.fillRect(0, r + 4, t, 2));
        (m(e, t, n, 2e3, 0.1),
          (e.fillStyle = `rgba(240,240,240,.7)`),
          (e.font = `bold 18px monospace`),
          e.fillText(`HP-112 · 40 mm`, 20, 40),
          e.fillText(`QA ✓`, t - 80, 90));
      }),
      l(256, 256, (e, t, n) => {
        ((e.fillStyle = `#7b6a52`),
          e.fillRect(0, 0, t, n),
          m(e, t, n, 3e3, 0.1),
          p(e, t, n, 25, 0.2),
          (e.strokeStyle = `rgba(30,26,20,.6)`),
          (e.lineWidth = 2),
          e.strokeRect(6, 6, t - 12, n - 12),
          (e.fillStyle = `rgba(240,240,240,.6)`),
          (e.font = `bold 20px monospace`),
          e.fillText(`ARGENT CV-07`, 40, 120),
          e.fillText(`FRAME 31`, 70, 150));
      }),
      l(256, 256, (e, t, n) => {
        ((e.fillStyle = `#8c8a82`),
          e.fillRect(0, 0, t, n),
          m(e, t, n, 5e3, 0.12),
          p(e, t, n, 30, 0.3),
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
    ue = l(2048, 1024, (e) => {
      le.forEach((t, n) =>
        e.drawImage(t.image, (n % 4) * 512, Math.floor(n / 4) * 512, 512, 512),
      );
    });
  ((ue.wrapS = ue.wrapT = a), ue.repeat.set(1, 1));
  let de = (e) => [
      (e % 4) * 0.25 + 0.002,
      1 - (Math.floor(e / 4) + 1) * 0.5 + 0.004,
      0.246,
      0.492,
    ],
    fe = {
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
    pe = [],
    O = new Map(),
    me = new f(),
    ge = new ne(),
    j = new k(0, 1, 0),
    _e = 0;
  for (let e of Object.values(fe))
    for (let t of n.objects) {
      if (t.kind !== `box` || !e.re.test(t.id)) continue;
      let n = t.sz > t.sx * 1.05,
        i = (n ? t.sz : t.sx) + 0.02,
        a = (n ? t.sx : t.sz) + 0.02;
      ge.setFromAxisAngle(j, n ? Math.PI / 2 : 0);
      let o = new r(1, 1, 1).toNonIndexed(),
        s = o.attributes.uv;
      for (let t = 0; t < 6; t++) {
        let [n, r, i, a] = de(e.cells[t]);
        for (let e = 0; e < 6; e++) {
          let o = t * 6 + e;
          s.setXY(o, n + s.getX(o) * i, r + s.getY(o) * a);
        }
      }
      (o.applyMatrix4(
        me.compose(
          new k(t.x, t.y + t.sy / 2, t.z),
          ge,
          new k(i, t.sy + 0.01, a),
        ),
      ),
        O.set(t.id, { start: _e, count: o.attributes.position.count }),
        (_e += o.attributes.position.count),
        pe.push(o));
    }
  let ve = o(D(pe));
  pe.forEach((e) => e.dispose());
  let ye = new _(ve, o(new y({ map: ue, roughness: 0.62, metalness: 0.35 })));
  ((ye.name = `kepler-skins`), (ye.receiveShadow = !0), g.add(ye));
  let be = O.size,
    xe = (t) => {
      let r = O.get(t);
      if (!r) return;
      let i = ve.attributes.position,
        a = i.getX(r.start),
        o = i.getY(r.start),
        s = i.getZ(r.start);
      for (let e = r.start; e < r.start + r.count; e++) i.setXYZ(e, a, o, s);
      ((i.needsUpdate = !0), O.delete(t));
      let c = e.modules.get(`demo`);
      for (let e of [`-band`, `-skid`])
        n.objects.some((n) => n.id === t + e) &&
          c?.setObjectVisible?.(t + e, !1);
    },
    Se = e.events.on(`destruction:state`, (e) => {
      e?.id && O.has(e.id) && xe(e.id);
    });
  return {
    stats: () => ({ skins: be, hidden: be - O.size }),
    hide: xe,
    dispose() {
      (Se?.(), t.remove(g));
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
function ke(e, { size: t = 4096 } = {}) {
  let n = t,
    r = t / 2,
    i = () => {
      let t = new o(n, r, {
        type: c,
        format: C,
        generateMipmaps: !0,
        minFilter: oe,
        magFilter: m,
        depthBuffer: !1,
        stencilBuffer: !1,
      });
      return (
        (t.texture.wrapS = ie),
        (t.texture.anisotropy = Math.min(
          8,
          e.capabilities.getMaxAnisotropy?.() ?? 1,
        )),
        t
      );
    },
    a = [i(), i()],
    s = new T(),
    l = new x(-1, 1, 1, -1, 0, 1),
    u = new S({
      uniforms: { mode: { value: 0 } },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
      fragmentShader: F,
      depthTest: !1,
      depthWrite: !1,
    }),
    d = new _(new w(2, 2), u);
  ((d.frustumCulled = !1), s.add(d));
  let f = 0;
  return {
    texture: a[0].texture,
    fields: a[1].texture,
    done: () => f >= 32,
    step(t = 1) {
      if (f >= 32) return !0;
      let i = e.getRenderTarget(),
        o = e.getScissorTest();
      for (let i = 0; i < t && f < 32; i++, f++) {
        let t = +(f >= 16),
          i = a[t],
          o = f % 16;
        ((u.uniforms.mode.value = t),
          i.viewport.set(0, 0, n, r),
          e.setRenderTarget(i),
          e.setScissorTest(!0));
        let c = Math.floor((o * r) / 16),
          d = Math.floor(((o + 1) * r) / 16);
        (i.scissor.set(0, c, n, d - c),
          (i.scissorTest = !0),
          e.render(s, l),
          (i.scissorTest = !1));
      }
      return (
        e.setScissorTest(o),
        e.setRenderTarget(i),
        f >= 32 && (u.dispose(), d.geometry.dispose()),
        f >= 32
      );
    },
    dispose() {
      for (let e of a) e.dispose();
      (u.dispose(), d.geometry.dispose());
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
    sunDir: { value: new k(0, 1, 0) },
    spin: { value: new l() },
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
    float px=length(fwidth(dd));float o1=clamp(1.-px*700.*1.2,0.,1.),o2=clamp(1.-px*2100.*1.2,0.,1.),o3=clamp(1.-px*4200.*1.2,0.,1.);
    float fine=snoise(dd*700.)*.6*o1+snoise(dd*2100.)*.4*o2;
    float clf=(f.r-.4)/.8+fine*.07+snoise(dd*4200.)*.02*o3;
    float cloud=smoothstep(.02,.42,clf);
    float cu=f.g*.5*smoothstep(.3,.7,mix(.5,snoise(dd*1100.)*.5+.5,o1)+.15*snoise(dd*3300.)*o2);
    cloud=clamp(max(cloud,cu),0.,1.)*.95;
    vec3 c=pow(s.rgb,vec3(2.2))*(1.+fine*.08);
    // cloud shadows on the ground: the cloud field ~10 km up, looked up toward the sun (longer as the sun gets low)
    {float dS=dot(n,sunDir);vec3 sT=spin*sunDir,tg=sT-dd*dot(dd,sT);
     if(dS>0.&&dot(tg,tg)>1e-8){float off=min(.02,.0016*sqrt(max(0.,1.-dS*dS))/max(dS,.08));
      vec4 fs=equirect(fields,normalize(dd+normalize(tg)*off));float sh=smoothstep(.02,.42,(fs.r-.4)/.8+fine*.05);c*=1.-.45*sh;}}
    // cloud tops: bright, with soft grey shading in their thicker cores
    vec3 cw=vec3(.92,.94,.97)*(.86+.14*smoothstep(.4,.9,clf+fine*.05));
    float cloudy=cloud;c=mix(c,cw,cloud);c=mix(vec3(.004,.012,.03),c,ready);
    s.a*=(1.-cloud*.85)*mix(.6,smoothstep(.15,.75,snoise(dd*3200.)*.5+.5)*1.9,o2);
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
function Ne(e, t) {
  return new S({
    uniforms: { ...e, k: { value: t } },
    fog: !1,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    vertexShader: `varying vec3 vN;varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vN=normalize(mat3(modelMatrix)*normal);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*.99995;}`,
    fragmentShader: `uniform vec3 pole;uniform vec3 sunDir;uniform float time;uniform float dark;uniform float k;varying vec3 vN;varying vec3 vW;
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
    gl_FragColor=vec4(col*a*1.1,1.);${I}}`,
  });
}
function Pe() {
  let t = (() => {
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
      let r = new h(e);
      return ((r.colorSpace = ce), r);
    })(),
    r = (() => {
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
      let r = new h(e);
      return ((r.colorSpace = ce), r);
    })(),
    i = new e({
      map: t,
      color: new v(8, 7.6, 7),
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
      toneMapped: !1,
    }),
    a = new e({
      map: r,
      color: new v(1.6, 1.5, 1.4),
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
      toneMapped: !1,
    }),
    o = new n(i),
    s = new n(a);
  return (
    (o.renderOrder = -4),
    (s.renderOrder = -4),
    {
      disc: o,
      glare: s,
      dispose() {
        (t.dispose(), r.dispose(), i.dispose(), a.dispose());
      },
    }
  );
}
function Fe(o, c, l, m) {
  let x = l.kepler,
    C = { geos: [], mats: [], texs: [] },
    T = (e) => (
      e?.isBufferGeometry
        ? C.geos.push(e)
        : e?.isTexture
          ? C.texs.push(e)
          : e && C.mats.push(e),
      e
    ),
    oe = 11,
    M = () => (oe = (Math.imul(oe, 1664525) + 1013904223) >>> 0) / 4294967296,
    P = new se();
  ((P.name = `kepler-fixed`), c.add(P));
  let F = new se();
  ((F.name = `kepler-live`), (F.userData.dynamicShadow = !0), c.add(F));
  let I = new se();
  ((I.name = `kepler-space`), (I.userData.dynamicShadow = !0), c.add(I));
  let Ae = j.z,
    Fe = 12 + j.y,
    Ie = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let a = T(new h(i));
      return (
        (a.wrapS = a.wrapT = ie),
        a.repeat.set(...r),
        (a.colorSpace = ce),
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
  Ge.wrapS = Ge.wrapT = a;
  let L = {
      plate: T(new y({ map: Re, roughness: 0.55, metalness: 0.45, side: 2 })),
      primer: T(new y({ map: ze, roughness: 0.75, metalness: 0.2, side: 2 })),
      deck: T(new y({ map: We, roughness: 0.82, metalness: 0.3 })),
      wall: T(new y({ color: 3883080, roughness: 0.7, metalness: 0.4 })),
      frame: T(new y({ color: 2764340, roughness: 0.5, metalness: 0.8 })),
      yellow: T(new y({ color: 14264607, roughness: 0.6, metalness: 0.2 })),
      white: T(new y({ color: 14343648, roughness: 0.45, metalness: 0.1 })),
      orange: T(new y({ color: 14181930, roughness: 0.55, metalness: 0.2 })),
      dark: T(
        new y({ color: 1908773, roughness: 0.5, metalness: 0.7, side: 2 }),
      ),
      glass: T(
        new y({
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
      solar: T(
        new y({
          color: 1320010,
          roughness: 0.25,
          metalness: 0.85,
          emissive: 132624,
        }),
      ),
      vc: T(new y({ vertexColors: !0, roughness: 0.5, metalness: 0.25 })),
    },
    R = (e, t, n, i, a, o, s = 0) => {
      let c = new r(e, t, n);
      return (s && c.rotateY(s), c.translate(i, a, o), c);
    },
    z = (e, t) => {
      let n = new v(t),
        r = e.attributes.position.count,
        i = new Float32Array(r * 3);
      for (let e = 0; e < r; e++) i.set([n.r, n.g, n.b], e * 3);
      return (
        e.setAttribute(`color`, new s(i, 3)),
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
            new E(new Float32Array(e.attributes.position.count * 2), 2),
          );
      let n = D(t);
      for (let t of e) t.dispose();
      return T(n);
    },
    B = (e, t, n = P, { cast: r = !0, receive: i = !0 } = {}) => {
      let a = new _(e, t);
      return ((a.castShadow = r), (a.receiveShadow = i), n.add(a), a);
    };
  {
    let e = T(new w(N.x1 - N.x0, N.z1 - N.z0));
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
  L.windowGlass = T(
    new y({
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
    let e = T(new w(A.x1 - A.x0, N.h - N.sill));
    e.translate(0, 12 + N.sill + (N.h - N.sill) / 2, N.z0 - 0.05);
    let t = B(e, L.windowGlass, P, { cast: !1, receive: !1 });
    t.renderOrder = 3;
    let n = T(new w(N.x1 - N.x0, N.z1 - N.z0));
    (n.rotateX(Math.PI / 2),
      n.translate(0, 12 + N.h + 0.05, (N.z0 + N.z1) / 2));
    let r = B(n, L.glass, P, { cast: !1, receive: !1 });
    r.renderOrder = 3;
    for (let e of [-1, 1]) {
      let t = e < 0 ? N.x0 : N.x1,
        n = A.x1 - N.x1,
        r = A.wz - N.z0,
        i = T(new w(n, r));
      (i.rotateX(Math.PI / 2),
        i.translate(t + (e * n) / 2, 12 + N.h + 0.05, N.z0 + r / 2),
        (B(i, L.glass, P, { cast: !1, receive: !1 }).renderOrder = 3));
      let a = T(new w(r, N.h - N.sill));
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
    let c = new d();
    return (
      c.setAttribute(`position`, new E(a, 3)),
      c.setAttribute(`uv`, new E(o, 2)),
      c.computeVertexNormals(),
      T(c)
    );
  }
  let Ye = (e) => ve(...ge(e)),
    Xe = (e, t) => {
      let n = new pe(Ye(e).map(([e, t]) => new g(e, t))),
        r = new me(n);
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
    let n = new u(2.6, 3.6, 6, 24, 1, !0);
    (n.rotateZ(Math.PI / 2),
      n.translate(j.x0 - 3, Fe + e + 1.5, Ae + t),
      B(T(n), L.dark));
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
    [x.reactor, L.dark, !0],
    [x.pod, L.white, !1],
  ]) {
    if (!e) continue;
    let r = new u(e.r, e.r, e.x1 - e.x0, 28, 1, !1);
    if (
      (r.rotateZ(Math.PI / 2),
      r.translate((e.x0 + e.x1) / 2, e.y, e.z),
      B(T(r), t),
      n)
    ) {
      let t = T(new he({ color: 6279423, toneMapped: !1 }));
      for (let n of [e.x0 + 0.4, e.x1 - 0.4, (e.x0 + e.x1) / 2]) {
        let r = new p(e.r + 0.1, 0.12, 8, 36);
        (r.rotateY(Math.PI / 2),
          r.translate(n, e.y, e.z),
          B(T(r), t, P, { cast: !1, receive: !1 }));
      }
    } else {
      let n = new i(e.r, 2.4, 24);
      (n.rotateZ(-Math.PI / 2), n.translate(e.x1 + 1.2, e.y, e.z), B(T(n), t));
      let r = new u(e.r * 0.7, e.r * 1.05, 2, 20, 1, !0);
      (r.rotateZ(Math.PI / 2),
        r.translate(e.x0 - 1, e.y, e.z),
        B(T(r), L.dark));
    }
  }
  {
    let e = _e,
      t = 12 + e.y,
      n = new p(e.r, 1.4, 16, 48);
    (n.translate(e.x, t, N.z0 + 0.1), B(T(n), L.white));
    let r = new u(e.r - 1, e.r - 1, 14, 32, 1, !0);
    (r.rotateX(Math.PI / 2), r.translate(e.x, t, N.z0 - 7), B(T(r), L.wall));
    let i = new p(e.r - 0.6, 0.6, 12, 40);
    (i.translate(e.x, t, N.z0 - 14), B(T(i), L.orange));
    let a = new te(e.r - 1.3, 40);
    (a.translate(e.x, t, N.z0 - 1), B(T(a), L.frame));
    let o = new ue(e.r - 1.9, e.r - 1.3, 40);
    (o.translate(e.x, t, N.z0 - 0.97), B(T(o), L.yellow, P, { cast: !1 }));
    let s = new te(1.1, 24);
    (s.translate(e.x, t + 1.6, N.z0 - 0.95),
      B(T(s), T(new he({ color: 12574975, toneMapped: !0 })), P, {
        cast: !1,
        receive: !1,
      }));
  }
  let Ze = {
      sunDir: { value: new k(0, 1, 0) },
      earthDir: { value: new k(...be) },
      lit: { value: 1 },
    },
    Qe = T(
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
      (e.push(z(new u(1.86, 1.86, 0.25, 40).translate(0, 0.12, 0), 3813414)),
        e.push(z(new u(1.02, 1.86, 3.2, 40).translate(0, 1.85, 0), t)),
        e.push(
          z(new u(0.62, 1.02, 0.7, 32).translate(0, 3.8, 0), t),
          z(new u(0.66, 0.66, 0.25, 32).translate(0, 4.27, 0), 10133670),
        ));
      for (let t of [0, 1, 2, 3]) {
        let n = new r(0.5, 0.32, 0.06);
        (n.translate(0, 2.6, 1.46),
          n.rotateY((t * Math.PI) / 2 + 0.4),
          e.push(z(n, 1053464)));
      }
      let n = new u(1.86, 1.86, 2.8, 40, 1, !0);
      n.translate(0, -1.4, 0);
      let i = n.toNonIndexed(),
        a = i.attributes.position,
        o = new Float32Array(a.count * 3),
        c = new v(1583698),
        l = new v(14474975);
      for (let e = 0; e < a.count; e++) {
        let t = Math.atan2(a.getZ(e), a.getX(e)) > 0 ? c : l;
        o.set([t.r, t.g, t.b], e * 3);
      }
      (i.setAttribute(`color`, new s(o, 3)),
        n.dispose(),
        e.push(i),
        e.push(z(new u(1.86, 1.86, 0.08, 40).translate(0, -2.8, 0), 2764340)));
      for (let t of [0, 1, 2, 3]) {
        let n = new r(0.06, 1.4, 0.5);
        (n.translate(0, -2.1, 2.05),
          n.rotateY((t * Math.PI) / 2 + Math.PI / 4),
          e.push(z(n, 14474975)));
      }
      return Ke(e);
    })(),
    et = (() => {
      let e = [];
      (e.push(
        z(new u(1.53, 1.53, 5.2, 40).translate(0, 2.6, 0), 14275780),
        z(new u(0.9, 1.53, 0.5, 32).translate(0, 5.45, 0), 12567236),
      ),
        e.push(
          z(new u(1.53, 1.53, 1.3, 32).translate(0, -0.65, 0), 3816770),
          z(new u(0.5, 0.8, 0.6, 16).translate(0, -1.6, 0), 1908773),
        ));
      for (let t of [-1, 1]) {
        e.push(z(new r(2.2, 0.12, 0.12).translate(t * 2.6, -0.6, 0), 9080725));
        let n = new te(1.9, 10);
        (n.rotateY((t * Math.PI) / 2),
          n.translate(t * 3.71, -0.6, 0),
          e.push(z(n, 1715286)));
        let i = new te(1.9, 10);
        (i.rotateY((-t * Math.PI) / 2),
          i.translate(t * 3.69, -0.6, 0),
          e.push(z(i, 12106944)));
      }
      return Ke(e);
    })(),
    V = [],
    tt = (e, t = F) => {
      let n = new _(e, Qe);
      return ((n.frustumCulled = !1), t.add(n), n);
    },
    nt = tt($e, P);
  (nt.position.set(_e.x, 12 + _e.y, N.z0 - 14 - 4.4),
    nt.quaternion.setFromUnitVectors(new k(0, 1, 0), new k(0, 0, 1)));
  let rt = new k(...be).negate(),
    it = new k(...Se).negate(),
    at = (2 * Math.PI) / 180,
    H = {
      m: tt($e),
      hold: new k(10, 32, N.z0 - 60),
      d: (e) => 25 + 575 * Math.exp(-e / 400),
    };
  (H.m.quaternion.setFromUnitVectors(new k(0, 1, 0), it.clone().negate()),
    V.push(
      [H.m, new k(1.9, 1.2, 0), 16777215, `strobe`],
      [H.m, new k(0, 4.3, 0.7), 16777215, `rcs0`],
      [H.m, new k(0.7, 4.3, 0), 16777215, `rcs1`],
    ));
  let U = { m: tt(et), from: new k(30, 42, N.z0 - 30), vx: 0.04, vy: 0.08 };
  (U.m.quaternion.setFromUnitVectors(new k(0, 1, 0), it),
    V.push(
      [U.m, new k(1.6, 3, 0), 16777215, `strobe2`],
      [U.m, new k(0, -1.6, 1.2), 16777215, `rcs2`],
    ));
  let ot = new se();
  F.add(ot);
  {
    let e = new u(4, 4, 13, 32);
    e.rotateZ(Math.PI / 2);
    let t = new r(3, 2.6, 3);
    t.translate(-8.2, 0, 0);
    let n = new _(Ke([z(e, 14474975), z(t, 13136938)]), Qe);
    ((n.frustumCulled = !1),
      ot.add(n),
      V.push(
        [ot, new k(-9.8, 0, -1.2), 16773328, `rcs3`],
        [ot, new k(-8.2, 1.5, 0), 16777215, `strobe3`],
      ));
  }
  V.push([null, new k(-620, 532, -1250), 16777215, `far`]);
  {
    let e = [],
      t = [],
      n = [],
      i = N.z0 - 60;
    e.push(
      R(1400, 4, 4, 0, -40, i + 6),
      R(1400, 4, 4, 0, -40, i - 6),
      R(4, 40, 30, A.x0 + 10, -20, N.z0 - 20),
      R(4, 40, 30, A.x1 - 10, -20, N.z0 - 20),
    );
    for (let t = -650; t <= 650; t += 26) e.push(R(1, 1, 16, t, -40, i));
    for (let n of [-560, -420, -280, 280, 420, 560]) {
      e.push(R(2, 2, 200, n, -40, i));
      for (let e of [-36, 104]) {
        let a = new r(46, 0.4, 120);
        (a.rotateX(0.35), a.translate(n, -40, i - e), t.push(a));
      }
    }
    for (let e of [-180, -130, 130, 180]) n.push(R(30, 50, 0.4, e, -70, i));
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
  let W = new se();
  ((W.name = `kepler-crane`),
    F.add(W),
    B(T(R(2, 2, N.z1 - N.z0 - 4, 0, 52, (N.z0 + N.z1) / 2)), L.yellow, W, {
      cast: !1,
    }));
  let st = B(T(R(4, 1.6, 4, 0, 0, 0)), L.dark, W, { cast: !1 });
  st.position.y = 50.6;
  let ct = B(T(R(9, 0.35, 5.5, 0, 0, 0)), L.primer, W, { cast: !1 }),
    lt = T(new d());
  lt.setAttribute(`position`, new E(new Float32Array(12), 3));
  let ut = new t(lt, T(new ee({ color: 2236962 })));
  ((ut.frustumCulled = !1), W.add(ut));
  let dt = x.arms,
    ft = [
      [T(new u(0.7, 0.9, 0.6, 16)), L.dark],
      [T(R(3.2, 0.55, 0.6, 1.6, 0, 0)), L.orange],
      [T(R(2.6, 0.45, 0.5, 1.3, 0, 0)), L.orange],
      [T(R(0.6, 0.3, 0.3, 0.3, 0, 0)), L.dark],
    ].map(([e, t]) => {
      let n = new ae(e, t, dt.length);
      return (
        (n.castShadow = !1),
        (n.receiveShadow = !0),
        (n.frustumCulled = !1),
        F.add(n),
        n
      );
    }),
    G = (() => {
      let e = new b(),
        t = new b(),
        n = new b(),
        r = new b(),
        i = new b(),
        a = new b();
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
    pt = T(
      new e({
        map: Ge,
        color: 13625087,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
    mt = dt.map(() => {
      let e = new n(pt);
      return (e.scale.setScalar(1.6), (e.visible = !1), F.add(e), e);
    }),
    ht = [0, 1].map(() => {
      let e = new fe(12573951, 0, 16, 2);
      return (F.add(e), e);
    }),
    K = new Float32Array(2100),
    q = new Float32Array(2100),
    gt = new Float32Array(700),
    _t = new Float32Array(700);
  for (let e = 0; e < 700; e++) K[e * 3 + 1] = -1e3;
  let vt = T(new d());
  vt.setAttribute(`position`, new s(K, 3));
  let yt = new le(
    vt,
    T(
      new de({
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
  ((yt.frustumCulled = !1), F.add(yt));
  let bt = 0,
    xt = (() => {
      let e = 15001320,
        t = [
          z(R(0.8, 1, 0.55, 0, 0, 0), e),
          z(R(0.55, 0.5, 0.55, 0, 0.8, 0), e),
          z(R(0.42, 0.3, 0.05, 0, 0.82, 0.29), 13146682),
          z(R(0.7, 0.9, 0.4, 0, 0, -0.45), e),
        ];
      for (let n of [-1, 1]) {
        t.push(z(R(0.3, 0.9, 0.3, n * 0.22, -0.95, 0), e));
        let i = new r(0.25, 0.8, 0.25);
        (i.rotateX(-0.9), i.translate(n * 0.55, 0.1, 0.2), t.push(z(i, e)));
      }
      return Ke(t);
    })(),
    St = [
      [-40, 30],
      [-31, 22],
      [12, 38],
      [48, 18],
    ].map(([e, t], n) => ({
      base: new k(e, 12 + t, N.z0 - 1.9),
      anchor: new k(Math.round(e / 9) * 9, 12 + t + 3, N.z0 - 0.8),
      ph: n * 1.7,
    })),
    Ct = new ae(xt, Qe, St.length);
  ((Ct.frustumCulled = !1), F.add(Ct));
  let wt = T(new d());
  wt.setAttribute(`position`, new E(new Float32Array(St.length * 6), 3));
  let Tt = new t(wt, T(new ee({ color: 14209200 })));
  ((Tt.frustumCulled = !1), F.add(Tt));
  for (let e of St) V.push([null, e.base, 16773584, `helmet`, e]);
  let Et = new Float32Array(V.length * 3),
    Dt = new Float32Array(V.length * 3),
    Ot = T(new d());
  (Ot.setAttribute(`position`, new s(Et, 3)),
    Ot.setAttribute(`color`, new s(Dt, 3)));
  let kt = new le(
    Ot,
    T(
      new de({
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
  ((kt.frustumCulled = !1), F.add(kt));
  let At = o.camera.far || 4e3,
    J = Math.min(2800, At * 0.7),
    jt = new _(
      T(new O(At * 0.95, 24, 12)),
      T(new he({ color: 0, side: 1, fog: !1, depthWrite: !1 })),
    );
  ((jt.renderOrder = -10), (jt.frustumCulled = !1), I.add(jt));
  let Mt = T(
    new de({
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
      n = new k(...be),
      r = Math.cos(ye - 0.004);
    for (let i = 0; i < 9e3; i++) {
      let i = new k(M() * 2 - 1, M() * 2 - 1, M() * 2 - 1).normalize();
      if (i.dot(n) > r) continue;
      (i.multiplyScalar(J * 1.3), e.push(i.x, i.y, i.z));
      let a = 0.5 + M() * 0.5,
        o = M();
      t.push(a * (o > 0.8 ? 1 : 0.85), a * 0.9, a * (o < 0.2 ? 1 : 0.85));
    }
    let i = T(new d());
    (i.setAttribute(`position`, new E(e, 3)),
      i.setAttribute(`color`, new E(t, 3)),
      (Mt.vertexColors = !0));
    let a = new le(i, Mt);
    ((a.frustumCulled = !1), (a.renderOrder = -9), I.add(a));
  }
  let Nt = J * Math.sin(ye),
    Pt = new k(...be),
    Ft = (e, t, n) => {
      let r = new O(e, 720, n, 0, Math.PI * 2, 0, (t * Math.PI) / 180);
      return T(r);
    },
    It = new ne().setFromUnitVectors(new k(0, 1, 0), Pt.clone().negate()),
    Lt =
      (o.config.quality ?? `high`) === `high` &&
      (o.renderer.capabilities.maxTextureSize ?? 0) >= 4096,
    Rt = ke(o.renderer, { size: Lt ? 4096 : 2048 }),
    zt = T(je(Rt.texture, Rt.fields)),
    Y = zt.uniforms,
    X = new _(Ft(Nt, 50, 160), zt);
  (X.quaternion.copy(It),
    (X.frustumCulled = !1),
    (X.renderOrder = -8),
    I.add(X));
  let Bt = new _(Ft(Nt * 1.008, 58, 64), T(Me(Y.sunDir)));
  (Bt.quaternion.copy(It),
    (Bt.frustumCulled = !1),
    (Bt.renderOrder = -7),
    I.add(Bt));
  let Vt = new k(...xe),
    Ht = (() => {
      let e = Pt.clone().negate(),
        t = new k(...xe),
        n = new k().crossVectors(e, t),
        r = (51.6 * Math.PI) / 180,
        i = new k(Math.cos(0.9), 0, Math.sin(0.9)),
        a = new k(0, Math.cos(r), 0)
          .addScaledVector(new k(-Math.sin(0.9), 0, Math.cos(0.9)), Math.sin(r))
          .normalize(),
        o = new k().crossVectors(i, a),
        s = new f().makeBasis(e, t, n);
      return new f().makeBasis(i, a, o).multiply(s.transpose());
    })(),
    Ut = new f(),
    Wt = new k(0, 1, 0).addScaledVector(Pt, -Pt.y).normalize(),
    Gt = {
      pole: {
        value: Pt.clone()
          .negate()
          .multiplyScalar(Math.cos(0.61))
          .addScaledVector(Wt, Math.sin(0.61))
          .normalize(),
      },
      sunDir: Y.sunDir,
      time: { value: 0 },
      dark: { value: 0 },
    },
    Kt = Ft(1, 60, 80),
    qt = [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1].map((e) => {
      let t = new _(Kt, T(Ne(Gt, e)));
      return (
        t.scale.setScalar(Nt * (1.016 + 0.03 * e)),
        t.quaternion.copy(It),
        (t.frustumCulled = !1),
        (t.renderOrder = -6),
        I.add(t),
        t
      );
    }),
    Jt = new k(0.62, 0.42, -0.66).normalize(),
    Yt = new _(
      T(new O(J * 1.2 * Math.tan((0.26 * Math.PI) / 180), 32, 16)),
      T(
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
  ((Yt.frustumCulled = !1),
    (Yt.renderOrder = -8),
    Yt.position.copy(Jt).multiplyScalar(J * 1.2),
    I.add(Yt));
  let Z = Pe();
  (Z.disc.scale.setScalar(J * 1.25 * 0.0096),
    Z.glare.scale.setScalar(J * 1.25 * 0.13),
    I.add(Z.glare, Z.disc));
  let Xt = (() => {
      let e = x.pools ?? [];
      if (!e.length) return null;
      let t = [],
        n = [],
        r = [],
        i = [],
        a = new v();
      e.forEach((e, o) => {
        a.setHex(e.col).multiplyScalar(e.gain);
        for (let [i, o] of [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ])
          (t.push(e.x + (i * 2 - 1) * e.r, e.y, e.z + (o * 2 - 1) * e.r),
            n.push(i, o),
            r.push(a.r, a.g, a.b));
        i.push(o * 4, o * 4 + 2, o * 4 + 1, o * 4, o * 4 + 3, o * 4 + 2);
      });
      let o = T(new d());
      (o.setAttribute(`position`, new E(t, 3)),
        o.setAttribute(`uv`, new E(n, 2)),
        o.setAttribute(`color`, new E(r, 3)),
        o.setIndex(i));
      let s = new _(
        o,
        T(
          new he({
            map: Ge,
            vertexColors: !0,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            side: 2,
          }),
        ),
      );
      return ((s.renderOrder = 2), (s.frustumCulled = !1), P.add(s), s);
    })(),
    Zt = [
      [-42, 3837183],
      [42, 16726570],
    ].map(([e, t]) => {
      let n = new fe(t, 220, 48, 2);
      return (n.position.set(e, 18, Ae), F.add(n), n);
    }),
    Qt = Oe(o, P, l),
    Q = o.modules.get(`environment`),
    $t = l.climate.grade,
    en = {
      key: $t.key.intensity,
      sky: new v($t.hemi.sky),
      ground: new v($t.hemi.ground),
      hemi: $t.hemi.intensity,
      exp: $t.exposure ?? 1,
    },
    tn = { sky: new v(7757887), ground: new v(1975862), hemi: 1.05 },
    nn = new v($t.key.color),
    rn = new v(16742970),
    an = new k(),
    on = [0, 0, 0],
    $ = new k(),
    sn = new k(),
    cn = new f(),
    ln = new v(),
    un = new v(6, 2.6, 1),
    dn = new re(),
    fn = new v(),
    pn = en.exp,
    mn = null,
    hn = 0,
    gn = null,
    _n = (e) => o.events.emit(`ui:message`, { kind: `hint`, text: e, ttl: 4 });
  function vn(e) {
    ((e = Math.min(e || 0, 0.1)),
      (hn += e),
      !Rt.done() && Rt.step(2) && (Y.ready.value = 1));
    let t = o.camera,
      n = Ee(x, m());
    ((gn = n),
      De(n.t, on),
      an.set(on[0], on[1], on[2]),
      I.position.copy(t.position),
      X.position.copy(Pt).multiplyScalar(J),
      Bt.position.copy(X.position));
    for (let e of qt) e.position.copy(X.position);
    (Z.disc.position.copy(an).multiplyScalar(J * 1.25),
      Z.glare.position.copy(Z.disc.position),
      Y.sunDir.value.copy(an),
      (Gt.time.value = m() / 60));
    let r = we(x, m()) || globalThis.__keplerAurora === !0;
    Gt.dark.value = r ? 1 - n.lit : 0;
    for (let e of qt) e.visible = r && n.lit < 0.97;
    (Ut.makeRotationAxis(Vt, (2 * Math.PI * (m() / 60)) / 9028).premultiply(Ht),
      Y.spin.value.setFromMatrix4(Ut),
      (Y.time.value = hn));
    let i = ln.copy(nn).lerp(rn, n.red * 0.85);
    ((Z.disc.visible = Z.glare.visible = n.lit > 0.001),
      (Z.disc.material.opacity = Z.glare.material.opacity = n.lit),
      Z.disc.material.color.setRGB(8, 7.6, 7).lerp(un, n.red * 0.8),
      (Mt.opacity = 0.3 + 0.7 * (1 - n.lit)),
      Ze.sunDir.value.copy(an),
      (Ze.lit.value = n.lit),
      Q?.skyDome && (Q.skyDome.visible = !1),
      Q?.clouds && (Q.clouds.visible = !1),
      Q?.fog && (Q.fog.density = Math.min(Q.fog.density, 4e-5)));
    let a = Q?.sunLight,
      s = Q?.hemiLight;
    (a && ((a.intensity = en.key * n.lit), a.color.copy(i)),
      s &&
        ((s.intensity = tn.hemi + (en.hemi - tn.hemi) * n.lit),
        s.color.copy(tn.sky).lerp(en.sky, n.lit),
        s.groundColor.copy(tn.ground).lerp(en.ground, n.lit)));
    let c = en.exp * (1 + 1.3 * (1 - n.lit));
    ((pn += (c - pn) * Math.min(1, e * (c > pn ? 0.5 : 2.5))),
      (o.renderer.toneMappingExposure = pn));
    for (let [e, t] of Zt.entries())
      t.intensity = 200 + 90 * Math.sin(hn * 1.6 + e);
    (Xt && Xt.material.color.setScalar(0.22 + 0.63 * (1 - n.lit)),
      mn !== null &&
        n.shadow !== mn &&
        _n(
          n.shadow
            ? `ENTERING EARTH'S SHADOW · 40 s on work lights`
            : `SUNRISE · the bay is back in sunlight`,
        ),
      (mn = n.shadow));
    let l = m() / 60,
      u = Te(l);
    W.position.x = u.x;
    let d = u.z,
      f = 12 + u.y;
    ((st.position.z = d), ct.position.set(0, f, d), (ct.rotation.y = u.yaw));
    {
      let e = lt.attributes.position;
      (e.setXYZ(0, -1.5, 49.8, d),
        e.setXYZ(1, -1.5, f + 0.2, d),
        e.setXYZ(2, 1.5, 49.8, d),
        e.setXYZ(3, 1.5, f + 0.2, d),
        (e.needsUpdate = !0));
    }
    let p = 0;
    for (let e = 0; e < dt.length; e++) {
      let n = dt[e],
        r = Ce(n, l);
      (G.base.position.set(n.x, n.y, n.z),
        (G.yawJ.rotation.y = r.ya),
        (G.sh.rotation.z = r.sh),
        (G.el.rotation.z = r.el),
        (G.wr.rotation.z = r.wr),
        G.base.updateMatrixWorld(!0),
        ft[0].setMatrixAt(e, cn.copy(G.yawJ.matrixWorld)),
        ft[1].setMatrixAt(e, G.sh.matrixWorld),
        ft[2].setMatrixAt(e, G.el.matrixWorld),
        ft[3].setMatrixAt(e, G.wr.matrixWorld));
      let i = r.on,
        a = mt[e];
      if (((a.visible = i), i)) {
        (G.tip.getWorldPosition($),
          a.position.copy($),
          (a.material.opacity = 0.8),
          a.scale.setScalar(1 + Math.random() * 1.2),
          p < ht.length &&
            t.position.distanceToSquared($) < 6400 &&
            (ht[p].position.copy($),
            (ht[p].intensity = 50 + Math.random() * 70),
            p++));
        for (let e = 0; e < 5; e++) {
          let e = bt;
          ((bt = (bt + 1) % 700),
            (K[e * 3] = $.x),
            (K[e * 3 + 1] = $.y),
            (K[e * 3 + 2] = $.z),
            (q[e * 3] = (Math.random() - 0.5) * 5),
            (q[e * 3 + 1] = Math.random() * 3),
            (q[e * 3 + 2] = (Math.random() - 0.5) * 5),
            (gt[e] = 0.6 + Math.random() * 0.9),
            (_t[e] = n.y - 0.55));
        }
      }
    }
    for (let e of ft) e.instanceMatrix.needsUpdate = !0;
    for (let e = p; e < ht.length; e++) ht[e].intensity = 0;
    for (let t = 0; t < 700; t++) {
      if (gt[t] <= 0) continue;
      gt[t] -= e;
      let n = t * 3;
      ((q[n + 1] -= 9 * e),
        (K[n] += q[n] * e),
        (K[n + 1] += q[n + 1] * e),
        (K[n + 2] += q[n + 2] * e),
        K[n + 1] < _t[t] &&
          ((K[n + 1] = _t[t]),
          (q[n + 1] *= -0.3),
          (q[n] *= 0.5),
          (q[n + 2] *= 0.5)),
        gt[t] <= 0 && (K[n + 1] = -1e3));
    }
    vt.attributes.position.needsUpdate = !0;
    let h = Math.max(0, (m() - (x.epoch ?? 0)) / 60);
    H.m.position.copy(H.hold).addScaledVector(it, H.d(h));
    {
      let e = at,
        t =
          (U.vx / e) * Math.sin(e * h) +
          ((2 * U.vy) / e) * (1 - Math.cos(e * h)),
        n =
          ((2 * U.vx) / e) * (Math.cos(e * h) - 1) +
          ((4 * U.vy) / e) * Math.sin(e * h) -
          3 * U.vy * h;
      U.m.position.copy(U.from).addScaledVector(rt, t).addScaledVector(it, n);
    }
    ot.position.set(-300 + ((h * 0.12) % 600), -28, N.z0 - 110);
    {
      let e = wt.attributes.position;
      (St.forEach((t, n) => {
        let r = $.set(
          t.base.x + Math.sin(hn * 0.3 + t.ph) * 0.4,
          t.base.y + Math.sin(hn * 0.4 + t.ph * 2) * 0.5,
          t.base.z,
        );
        (cn.makeRotationFromEuler(
          dn.set(0, Math.PI, 0.15 * Math.sin(hn * 0.25 + t.ph)),
        ),
          cn.setPosition(r),
          Ct.setMatrixAt(n, cn),
          (t.pos = (t.pos ?? new k()).copy(r)),
          e.setXYZ(n * 2, t.anchor.x, t.anchor.y, t.anchor.z),
          e.setXYZ(n * 2 + 1, r.x, r.y, r.z - 0.4));
      }),
        (e.needsUpdate = !0),
        (Ct.instanceMatrix.needsUpdate = !0));
    }
    let g = fn;
    (V.forEach(([e, t, n, r, i], a) => {
      let o = 1,
        s = m() / 60;
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
            ? $.copy(i.pos ?? t).add(sn.set(0.2, 0.95, 0.3))
            : $.copy(t),
        (Et[a * 3] = $.x),
        (Et[a * 3 + 1] = $.y),
        (Et[a * 3 + 2] = $.z),
        g.setHex(n).multiplyScalar(o),
        (Dt[a * 3] = g.r),
        (Dt[a * 3 + 1] = g.g),
        (Dt[a * 3 + 2] = g.b));
    }),
      (Ot.attributes.position.needsUpdate = Ot.attributes.color.needsUpdate =
        !0));
  }
  return {
    update: vn,
    stats() {
      let e = gn;
      return e
        ? {
            t: +e.t.toFixed(2),
            lit: +e.lit.toFixed(3),
            shadow: e.shadow,
            next: +e.next.toFixed(1),
            exposure: +pn.toFixed(3),
            earth: Rt.done(),
            arms: dt.length,
            detail: Qt.stats(),
            key: Q?.sunLight?.intensity ?? null,
            hemi: Q?.hemiLight?.intensity ?? null,
          }
        : null;
    },
    dispose() {
      c.remove(P, F, I);
      for (let e of ft) e.dispose?.();
      (Ct.dispose?.(), Qt.dispose(), Rt.dispose(), Z.dispose());
      for (let e of C.geos) e.dispose();
      for (let e of C.mats) e.dispose();
      for (let e of C.texs) e.dispose();
      Q?.skyDome && (Q.skyDome.visible = !0);
    },
  };
}
export { Fe as createKeplerView };
//# sourceMappingURL=kepler-view-jIBABGFb.js.map
