/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Bt as e,
  Dn as t,
  E as n,
  F as r,
  Fn as i,
  Gt as a,
  H as o,
  Hn as s,
  On as c,
  S as l,
  Vn as u,
  W as d,
  Zt as f,
  _n as p,
  dt as m,
  m as h,
  nn as g,
  pn as _,
  pt as v,
  q as y,
  rn as ee,
  s as te,
  st as ne,
  tn as re,
  v as b,
  yn as ie,
  z as x,
} from "./graphics-quality-CrL3qbU3.js";
import { Ft as ae, _ as S } from "./cube-soldier-DMHrHkZL.js";
import {
  a as C,
  n as oe,
  o as w,
  r as T,
  s as E,
  t as D,
} from "./continental-kit-BYKNMKwf.js";
var O = `salient.frontDesk`,
  k = `salient.lobbySound`;
function A() {
  try {
    let e = new URLSearchParams(location.search).get(`desk`);
    return (
      (e === `1` || e === `0`) && localStorage.setItem(O, e),
      (e ?? localStorage.getItem(O)) !== `0`
    );
  } catch {
    return !0;
  }
}
function se(e) {
  try {
    let t = e.getExtension(`WEBGL_debug_renderer_info`);
    return String(
      e.getParameter(t ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER) ?? ``,
    );
  } catch {
    return ``;
  }
}
var j = () => new Promise((e) => setTimeout(e, 0)),
  M = { x0: -5.4, x1: 5.4, z0: -2.7, z1: 5, h: 4.2 },
  N = { w: 3.4, d: 0.72, h: 1.08 },
  P = N.h,
  F = { x: -0.18, z: 0.06, w: 0.9, d: 0.6 },
  I = { x: 0.3, z: -0.66 },
  L = { x: 0.35, y: 2.5, size: 2 },
  R = [
    [-1.7, 0.3],
    [0.3, 0.3],
    [2.3, 0.3],
    [-1.7, 2.6],
    [0.3, 2.6],
    [2.3, 2.6],
  ],
  ce = 1,
  le = 5,
  ue = new s(0.02, P, -0.31),
  z = new s(0.62, P, -0.24),
  B = [`#1c2745`, `#221a12`, `#3a2616`, `#14223a`, `#2a1d2e`],
  V = `'Segoe Script','Snell Roundhand','Brush Script MT','URW Chancery L',cursive`,
  H = `Georgia,'Times New Roman',serif`,
  de = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  U = (e, t, n) => de((e - t) / (n - t));
function fe(e, t) {
  let n = t / 2,
    r = e.createRadialGradient(n * 0.8, n * 0.7, n * 0.1, n, n, n);
  (r.addColorStop(0, `#f6dc8c`),
    r.addColorStop(0.7, `#c99a3c`),
    r.addColorStop(1, `#8c6420`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, t),
    (e.strokeStyle = `#7a5518`),
    (e.lineWidth = t * 0.03),
    e.beginPath(),
    e.arc(n, n, n * 0.84, 0, Math.PI * 2),
    e.stroke());
  for (let r = 0; r < 48; r++) {
    let i = (r / 48) * Math.PI * 2;
    ((e.fillStyle = `#8c6420`),
      e.beginPath(),
      e.arc(
        n + Math.cos(i) * n * 0.93,
        n + Math.sin(i) * n * 0.93,
        t * 0.012,
        0,
        Math.PI * 2,
      ),
      e.fill());
  }
  ((e.fillStyle = `#6e4c14`),
    (e.font = `700 ${t * 0.5}px ${H}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`C`, n, n * 1.04));
}
var W = 1600,
  G = 1066,
  K = 78;
function pe(e) {
  let t = document.createElement(`canvas`);
  ((t.width = W), (t.height = G));
  let n = t.getContext(`2d`),
    r = new x(t);
  ((r.colorSpace = p), (r.anisotropy = 8));
  let i = document.createElement(`canvas`);
  ((i.width = W), (i.height = G), l(i.getContext(`2d`)));
  let a = {
      guests: [],
      name: ``,
      shown: 0,
      welcome: !1,
      stamp: null,
      room: null,
      dirty: !0,
      date: new Date(),
    },
    o = [],
    s = [];
  for (let e = 372; e < 1036; e += K) o.push(e);
  for (let e = 212; e < 1036; e += K) s.push(e);
  let c = () => {
    let e = a.guests.slice(0, o.length + 2).reverse(),
      t = e.slice(0, Math.max(0, e.length - 2)),
      n = e.slice(t.length);
    return { left: t, right: n, mine: s[n.length] };
  };
  function l(t) {
    for (let [e, n] of [
      [0, 1],
      [W / 2, -1],
    ]) {
      let r = t.createLinearGradient(e, 0, e + W / 2, 0),
        i = `#cdbb92`,
        a = `#e8dcc0`,
        o = `#a8936a`;
      (n > 0
        ? (r.addColorStop(0, i),
          r.addColorStop(0.08, a),
          r.addColorStop(0.88, a),
          r.addColorStop(1, o))
        : (r.addColorStop(0, o),
          r.addColorStop(0.12, a),
          r.addColorStop(0.92, a),
          r.addColorStop(1, i)),
        (t.fillStyle = r),
        t.fillRect(e, 0, W / 2, G));
    }
    let n = E(31);
    for (let e = 0; e < 9e3; e++)
      ((t.fillStyle = `rgba(120,90,40,${n() * 0.05})`),
        t.fillRect(n() * W, n() * G, 1 + n() * 2, 1 + n() * 2));
    ((t.strokeStyle = `rgba(70,95,130,.35)`), (t.lineWidth = 1.5));
    for (let [e, n] of [
      [0, 372],
      [W / 2, 212],
    ])
      for (let r = n; r < 1036; r += K)
        (t.beginPath(),
          t.moveTo(e + 50, r),
          t.lineTo(e + W / 2 - 50, r),
          t.stroke());
    t.strokeStyle = `rgba(170,40,40,.45)`;
    for (let e of [0, W / 2])
      for (let n of [250, 120])
        (t.beginPath(),
          t.moveTo(e + W / 2 - n, e ? 112 : 272),
          t.lineTo(e + W / 2 - n, 1026),
          t.stroke());
    ((t.fillStyle = `#2b2014`),
      (t.textAlign = `center`),
      (t.textBaseline = `alphabetic`),
      (t.font = `700 58px ${H}`));
    let r = 58,
      i = e.toUpperCase().split(` `).join(`  `);
    for (; r > 30 && t.measureText(i).width > W / 2 - 120;)
      ((r -= 2), (t.font = `700 ${r}px ${H}`));
    (t.fillText(i, W / 4, 110),
      (t.font = `italic 30px ${H}`),
      t.fillText(`Register of Guests`, W / 4, 158),
      (t.strokeStyle = `#2b2014`),
      (t.lineWidth = 2),
      t.beginPath(),
      t.moveTo(W / 4 - 180, 178),
      t.lineTo(580, 178),
      t.stroke(),
      (t.font = `600 19px ${H}`),
      (t.textAlign = `left`));
    for (let [e, n] of [
      [0, 318],
      [W / 2, 158],
    ])
      (t.fillText(`GUEST`, e + 60, n),
        t.fillText(`ARRIVED`, e + W / 2 - 240, n),
        t.fillText(`ROOM`, e + W / 2 - 112, n));
  }
  let u = (e) => {
    let t = new Date(e);
    return `${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`;
  };
  function d(e, t, r, i, a = 40) {
    let o = E(1 + i * 7);
    (n.save(),
      n.translate(t, r - 10),
      n.rotate((o() - 0.5) * 0.03),
      (n.fillStyle = B[i % B.length]),
      (n.font = `${a}px ${V}`),
      (n.textAlign = `left`),
      n.fillText(e, 0, 0),
      n.restore());
  }
  function f(e, t, r) {
    n.font = `${r}px ${V}`;
    let i = r;
    for (; i > 26 && n.measureText(e).width > t;)
      ((i -= 2), (n.font = `${i}px ${V}`));
    return i;
  }
  function m() {
    n.drawImage(i, 0, 0);
    let e = c(),
      t = (e, t, r, i) => {
        (d(e.name, t + 62, r, i, f(e.name, W / 2 - 330, 56)),
          (n.fillStyle = `#3a3026`),
          (n.font = `italic 30px ${H}`),
          n.fillText(u(e.at), t + W / 2 - 236, r - 14),
          e.live &&
            ((n.fillStyle = `#7a1f1a`),
            n.fillText(`in`, t + W / 2 - 100, r - 14)));
      };
    (e.left.forEach((e, n) => t(e, 0, o[n], n)),
      e.right.forEach((n, r) => t(n, W / 2, s[r], r + e.left.length)));
    let l = e.mine;
    if (l) {
      let e = a.name.trim();
      if (!e)
        ((n.fillStyle = `rgba(60,60,64,.6)`),
          (n.font = `italic 34px ${H}`),
          n.fillText(`✕  sign here`, 864, l - 14));
      else {
        let t = f(e, W / 2 - 330, 64);
        (n.save(), (n.font = `${t}px ${V}`));
        let r = n.measureText(e).width,
          i = n.measureText(e.slice(0, Math.floor(a.shown))).width,
          o = a.shown % 1,
          s = n.measureText(e.slice(0, Math.ceil(a.shown))).width;
        (n.beginPath(),
          n.rect(854, l - 70, i + (s - i) * o + 4, 90),
          n.clip(),
          n.translate(862, l - 10),
          n.rotate(-0.012),
          (n.fillStyle = `#101a33`),
          n.fillText(e, 0, 0),
          n.restore(),
          r > 0 &&
            ((n.fillStyle = `#3a3026`),
            (n.font = `italic 30px ${H}`),
            n.fillText(u(Date.now()), 1364, l - 14)));
      }
      (a.welcome &&
        e &&
        ((n.fillStyle = `rgba(70,64,58,.75)`),
        (n.font = `italic 30px ${H}`),
        n.fillText(`welcome back`, 1130, l + 32)),
        a.room != null && d(String(a.room), 1496, l, 3, 50),
        a.side &&
          ((n.fillStyle = `rgba(70,64,58,.8)`),
          (n.font = `italic 28px ${H}`),
          (n.textAlign = `left`),
          n.fillText(a.side, 1364, l + 32)),
        a.stamp && h(1400, l + 10, a.stamp));
    }
    ((r.needsUpdate = !0), (a.dirty = !1));
  }
  function h(t, r, { angle: i, time: a }) {
    (n.save(),
      n.translate(t, r),
      n.rotate(i),
      (n.globalAlpha = 0.82),
      (n.strokeStyle = n.fillStyle = `#a3161e`),
      n.scale(1.25, 1.25),
      (n.lineWidth = 5),
      n.beginPath(),
      n.arc(0, 0, 78, 0, Math.PI * 2),
      n.stroke(),
      (n.lineWidth = 2),
      n.beginPath(),
      n.arc(0, 0, 66, 0, Math.PI * 2),
      n.stroke(),
      (n.font = `700 15px ${H}`),
      (n.textAlign = `center`),
      (n.textBaseline = `middle`));
    let o = `${e.toUpperCase()} · CHECKED IN · `;
    for (let e = 0; e < o.length; e++) {
      let t = (e / o.length) * Math.PI * 2;
      (n.save(),
        n.rotate(t),
        n.translate(0, -70),
        n.fillText(o[e], 0, 0),
        n.restore());
    }
    ((n.font = `800 22px ${H}`),
      n.fillText(`CHECKED`, 0, -12),
      n.fillText(`IN`, 0, 12),
      (n.font = `600 16px ${H}`),
      n.fillText(a, 0, 38),
      (n.globalCompositeOperation = `destination-out`));
    let s = E(77);
    for (let e = 0; e < 160; e++)
      ((n.globalAlpha = s() * 0.6),
        n.beginPath(),
        n.arc(
          (s() - 0.5) * 160,
          (s() - 0.5) * 160,
          1 + s() * 3,
          0,
          Math.PI * 2,
        ),
        n.fill());
    n.restore();
  }
  return {
    tex: r,
    st: a,
    mineUV() {
      let e = c().mine ?? s[2];
      return { u: 1400 / W, v: (e + 10) / G };
    },
    setGuests(e) {
      ((a.guests = e), (a.dirty = !0));
    },
    setHotel(t) {
      t && t !== e && ((e = t), l(i.getContext(`2d`)), (a.dirty = !0));
    },
    setSide(e) {
      ((a.side = e), (a.dirty = !0));
    },
    setName(e, t) {
      (e !== a.name &&
        (e.startsWith(a.name.slice(0, Math.floor(a.shown))) ||
          (a.shown = Math.min(a.shown, e.length)),
        (a.name = e),
        (a.dirty = !0)),
        t !== a.welcome && ((a.welcome = t), (a.dirty = !0)));
    },
    stamp(e) {
      let t = new Date();
      ((a.stamp = {
        angle: (Math.random() - 0.5) * 0.5,
        time: `${t.getDate()} ${t.toLocaleString(`en`, { month: `short` }).toUpperCase()} · ${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`,
      }),
        (a.room = e),
        (a.dirty = !0));
    },
    reset() {
      ((a.stamp = null), (a.room = null), (a.side = null), (a.dirty = !0));
    },
    update(e) {
      let t = a.name.trim().length;
      return (
        a.shown < t
          ? ((a.shown = Math.min(t, a.shown + e * 16)), (a.dirty = !0))
          : a.shown > t && ((a.shown = t), (a.dirty = !0)),
        a.dirty && m(),
        a.shown < t
      );
    },
    draw: m,
  };
}
function me(e, t) {
  let n = new g(e, t, 64, 1);
  n.rotateX(-Math.PI / 2);
  let r = n.attributes.position;
  for (let t = 0; t < r.count; t++) {
    let n = Math.abs(r.getX(t)) / (e / 2),
      i =
        0.004 +
        0.03 *
          Math.sin(Math.PI * Math.min(1, n * 1.05)) ** 0.55 *
          (1 - 0.45 * n) *
          Math.min(1, n * 12);
    r.setY(t, i);
  }
  return (n.computeVertexNormals(), n);
}
function he() {
  let e = null,
    t = null,
    n = !0,
    r = null;
  try {
    n = localStorage.getItem(k) !== `0`;
  } catch {}
  let i = () => {
      if (!n) return null;
      if (!e)
        try {
          ((e = new (window.AudioContext || window.webkitAudioContext)()),
            (t = e.createGain()),
            (t.gain.value = 0.7),
            t.connect(e.destination));
        } catch {
          return null;
        }
      return (e.state === `suspended` && e.resume?.(), e);
    },
    a = (t, n) => {
      let r = (e.sampleRate * t) | 0,
        i = e.createBuffer(1, r, e.sampleRate),
        a = i.getChannelData(0),
        o = 0;
      for (let e = 0; e < r; e++) {
        let t = Math.random() * 2 - 1;
        n ? ((o = (o + 0.02 * t) / 1.02), (a[e] = o * 3.5)) : (a[e] = t);
      }
      return i;
    },
    o = (
      n,
      r,
      {
        type: i = `bandpass`,
        f: o = 2e3,
        q: s = 1,
        level: c = 0.05,
        attack: l = 0.003,
      },
    ) => {
      let u = e.createBufferSource();
      u.buffer = a(r + 0.05, !1);
      let d = e.createBiquadFilter();
      ((d.type = i), (d.frequency.value = o), (d.Q.value = s));
      let f = e.createGain();
      (f.gain.setValueAtTime(0, n),
        f.gain.linearRampToValueAtTime(c, n + l),
        f.gain.exponentialRampToValueAtTime(1e-4, n + r),
        u.connect(d).connect(f).connect(t),
        u.start(n),
        u.stop(n + r + 0.05));
    },
    s = (n, r) => {
      for (let [i, a, o] of r) {
        let r = e.createOscillator(),
          s = e.createGain();
        ((r.type = `sine`),
          (r.frequency.value = i),
          s.gain.setValueAtTime(0, n),
          s.gain.linearRampToValueAtTime(a, n + 0.004),
          s.gain.exponentialRampToValueAtTime(1e-5, n + o),
          r.connect(s).connect(t),
          r.start(n),
          r.stop(n + o + 0.05));
      }
    },
    c = {
      get on() {
        return n;
      },
      set(e) {
        n = e;
        try {
          localStorage.setItem(k, e ? `1` : `0`);
        } catch {}
        e ? c.start() : c.stop();
      },
      start() {
        let e = i();
        if (!e || r) return;
        let n = e.createGain();
        ((n.gain.value = 0),
          n.connect(t),
          n.gain.setTargetAtTime(1, e.currentTime, 0.8));
        let o = e.createBufferSource();
        ((o.buffer = a(5, !0)), (o.loop = !0));
        let s = e.createBiquadFilter();
        ((s.type = `lowpass`), (s.frequency.value = 300));
        let c = e.createGain();
        ((c.gain.value = 0.045), o.connect(s).connect(c).connect(n), o.start());
        let l = e.createBufferSource();
        ((l.buffer = a(5, !1)), (l.loop = !0));
        let u = e.createBiquadFilter();
        ((u.type = `bandpass`), (u.frequency.value = 420), (u.Q.value = 1.1));
        let d = e.createBiquadFilter();
        ((d.type = `lowpass`), (d.frequency.value = 700));
        let f = e.createGain();
        ((f.gain.value = 0),
          l.connect(u).connect(d).connect(f).connect(n),
          l.start());
        let p = setInterval(() => {
          let t = Math.random();
          (f.gain.setTargetAtTime(
            t < 0.3 ? 0.001 : 0.003 + t * 0.007,
            e.currentTime,
            0.1 + Math.random() * 0.12,
          ),
            u.frequency.setTargetAtTime(
              330 + Math.random() * 260,
              e.currentTime,
              0.1,
            ));
        }, 180);
        r = { g: n, srcs: [o, l], timer: p };
      },
      stop() {
        if (!r || !e) return;
        let { g: t, srcs: n, timer: i } = r;
        ((r = null),
          clearInterval(i),
          t.gain.setTargetAtTime(0, e.currentTime, 0.2),
          setTimeout(() => {
            for (let e of n)
              try {
                e.stop();
              } catch {}
            t.disconnect();
          }, 1200));
      },
      scratch() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        (o(t, 0.05 + Math.random() * 0.05, {
          f: 2600 + Math.random() * 1800,
          q: 2.5,
          level: 0.035,
        }),
          o(t + 0.03, 0.04, { f: 5200, q: 3, level: 0.012 }));
      },
      coin() {
        let e = i();
        if (!e) return;
        let t = e.currentTime + 0.02;
        (o(t, 0.25, { type: `lowpass`, f: 900, level: 0.05, attack: 0.02 }),
          s(t + 0.24, [
            [3150, 0.03, 0.5],
            [4870, 0.018, 0.35],
            [6230, 0.01, 0.25],
          ]));
      },
      stamp() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        (o(t, 0.12, { type: `lowpass`, f: 260, q: 0.6, level: 0.35 }),
          s(t, [[140, 0.12, 0.12]]));
      },
      key() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        for (let e = 0; e < 4; e++)
          s(t + e * 0.045 + Math.random() * 0.02, [
            [3600 + Math.random() * 1500, 0.012, 0.18],
            [6100 + Math.random() * 900, 0.006, 0.12],
          ]);
        o(t + 0.2, 0.35, {
          type: `lowpass`,
          f: 700,
          level: 0.03,
          attack: 0.03,
        });
      },
      bell() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        s(t, [
          [1568, 0.09, 2.4],
          [1568 * 2.76, 0.03, 1.2],
          [8467.2, 0.012, 0.6],
          [1571, 0.05, 2.2],
        ]);
      },
      door() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        o(t, 1.2, { type: `lowpass`, f: 380, level: 0.05, attack: 0.4 });
      },
    };
  return c;
}
function ge(e, t, n) {
  ((e.fillStyle = `#1b1816`), e.fillRect(0, 0, t, n));
  let r = E(9);
  for (let i = 0; i < 6e3; i++)
    ((e.fillStyle =
      r() < 0.5
        ? `rgba(0,0,0,${r() * 0.05})`
        : `rgba(255,245,230,${r() * 0.018})`),
      e.fillRect(r() * t, r() * n, 2 + r() * 7, 2 + r() * 7));
}
function _e(e, t) {
  ((e.fillStyle = `#161413`), e.fillRect(0, 0, t, t));
  let n = E(4);
  for (let r = 0; r < 5e3; r++)
    ((e.fillStyle = `rgba(255,248,236,${n() * 0.02})`),
      e.fillRect(n() * t, n() * t, 1 + n() * 3, 1 + n() * 3));
  ((e.strokeStyle = `rgba(0,0,0,.6)`),
    (e.lineWidth = 2),
    e.strokeRect(1, 1, t - 2, t - 2));
}
function ve(e, t, n) {
  ((e.fillStyle = `#211d1a`), e.fillRect(0, 0, t, n));
  let r = E(6);
  for (let i = 0; i < 9e3; i++)
    ((e.fillStyle = `rgba(${r() < 0.5 ? 0 : 255},${r() < 0.5 ? 0 : 240},${r() < 0.5 ? 0 : 220},${r() * 0.035})`),
      e.fillRect(r() * t, r() * n, 1, 2));
}
function ye(t, n) {
  let { x0: r, x1: i, z0: s, z1: c, h: l } = M,
    u = i - r,
    d = c - s,
    f = (r + i) / 2,
    p = (s + c) / 2,
    m = new e(new g(u, d), n.stone);
  ((m.rotation.x = -Math.PI / 2),
    m.position.set(f, 0, p),
    (m.receiveShadow = !0),
    t.add(m),
    n.stone.map.repeat.set(u / 1.2, d / 1.2));
  let h = (r, i, a, o) => {
    let s = new e(new g(r, l), n.plaster);
    (s.position.set(i, l / 2, a), (s.rotation.y = o), t.add(s));
  };
  (h(u, f, s, 0),
    h(u, f, c, Math.PI),
    h(d, r, p, Math.PI / 2),
    h(d, i, p, -Math.PI / 2),
    n.plaster.map.repeat.set(3, 1.2));
  let _ = new e(new g(u, d), n.ceiling);
  ((_.rotation.x = Math.PI / 2), _.position.set(f, l, p), t.add(_));
  let v = new a({ color: 1709844, emissive: 16769720, emissiveIntensity: 2 });
  for (let [n, r] of R) {
    let i = new e(new o(0.06, 24), v);
    ((i.rotation.x = Math.PI / 2), i.position.set(n, l - 0.002, r), t.add(i));
  }
  let y = new e(new g(3.4, 1.9), n.rug);
  ((y.rotation.x = -Math.PI / 2),
    y.position.set(0.2, 0.004, 1.55),
    (y.receiveShadow = !0),
    t.add(y));
}
function be(e, t) {
  let n = new m();
  e.add(n);
  let { w: r, d: i, h: o } = N,
    s = D(r, o - 0.135, i, t.wood, 0, 0.08 + (o - 0.135) / 2, 0, n);
  ((s.castShadow = s.receiveShadow = !0),
    D(
      r - 0.12,
      0.08,
      i - 0.12,
      new a({ color: 526087, roughness: 0.9 }),
      0,
      0.04,
      0,
      n,
    ),
    D(
      r - 0.04,
      0.015,
      i - 0.04,
      new a({ color: 526087, roughness: 0.9 }),
      0,
      o - 0.0475,
      0,
      n,
    ));
  let c = D(r + 0.04, 0.04, i + 0.04, t.wood, 0, o - 0.02, 0, n);
  return ((c.castShadow = c.receiveShadow = !0), n);
}
function xe(n, r, i) {
  let s = {},
    c = new m();
  (c.position.set(F.x, P, F.z), n.add(c));
  let l = D(
    F.w + 0.04,
    0.018,
    F.d + 0.03,
    new a({ color: 2759959, roughness: 0.6 }),
    0,
    0.009,
    0,
    c,
  );
  l.receiveShadow = !0;
  let u = D(
    F.w - 0.02,
    0.012,
    F.d - 0.01,
    new a({ color: 15129792, roughness: 0.9 }),
    0,
    0.022,
    0,
    c,
  );
  u.receiveShadow = !0;
  let d = new e(me(F.w, F.d), new a({ map: i.register.tex, roughness: 0.88 }));
  ((d.position.y = 0.026), (d.receiveShadow = !0), c.add(d));
  let f = D(
    0.012,
    0.002,
    0.16,
    new a({ color: 7999511, roughness: 0.6 }),
    0.02,
    0.058,
    F.d / 2 + 0.05,
    c,
  );
  ((f.rotation.y = 0.12), (s.book = c));
  let p = new a({ color: 855310, roughness: 0.45, metalness: 0.4 }),
    h = new a({ color: 9276553, roughness: 0.32, metalness: 1 }),
    g = new m();
  (g.position.set(0.42, P, 0.26), n.add(g));
  let _ = w(
    [
      [0, 0],
      [0.045, 0],
      [0.045, 0.01],
      [0.012, 0.02],
      [0, 0.02],
    ],
    p,
    24,
  );
  g.add(_);
  let v = new m();
  (v.position.set(0, 0.03, 0), v.rotation.set(-0.55, 0, 0.3), g.add(v));
  let te = w(
    [
      [0, 0],
      [0.006, 0],
      [0.0065, 0.1],
      [0.0058, 0.13],
      [0, 0.13],
    ],
    new a({ color: 789518, roughness: 0.2, metalness: 0.2 }),
    16,
  );
  v.add(te);
  let ne = new e(new y(0.0068, 0.0068, 0.006, 16), h);
  ((ne.position.y = 0.1), v.add(ne));
  let re = w(
    [
      [0.0058, 0],
      [0.004, 0.012],
      [0, 0.024],
    ],
    r.gold,
    12,
  );
  ((re.position.y = 0.13), v.add(re));
  let b = new m();
  (b.position.set(-1.1, P, -0.14),
    n.add(b),
    b.add(
      w(
        [
          [0, 0],
          [0.075, 0],
          [0.075, 0.012],
          [0, 0.014],
        ],
        p,
        32,
      ),
    ));
  let ie = new e(new y(0.007, 0.007, 0.42, 10), p);
  ((ie.position.y = 0.22), b.add(ie));
  let x = w(
    [
      [0.12, 0],
      [0.11, 0.012],
      [0.045, 0.07],
      [0.012, 0.085],
      [0, 0.085],
    ],
    new a({ color: 855310, roughness: 0.4, metalness: 0.4, side: 2 }),
    32,
  );
  ((x.position.y = 0.37), b.add(x));
  let ae = new e(new o(0.1, 24), r.glow);
  ((ae.rotation.x = Math.PI / 2), (ae.position.y = 0.374), b.add(ae));
  let S = new ee(16763271, 4.5, 2.8, 2);
  (S.position.set(0, 0.3, 0), b.add(S));
  let C = new m();
  (C.position.set(1.22, P, 0.16),
    n.add(C),
    C.add(
      w(
        [
          [0, 0],
          [0.065, 0],
          [0.065, 0.012],
          [0.05, 0.016],
          [0, 0.016],
        ],
        p,
        24,
      ),
    ));
  let oe = w(
    [
      [0, 0],
      [0.058, 0],
      [0.056, 0.012],
      [0.045, 0.04],
      [0.025, 0.056],
      [0, 0.06],
    ],
    h,
    32,
  );
  ((oe.position.y = 0.016), C.add(oe));
  let T = new e(new y(0.006, 0.006, 0.03, 8), h);
  ((T.position.y = 0.086), C.add(T));
  let E = new e(new t(0.01, 10, 8), h);
  ((E.position.y = 0.1),
    C.add(E),
    (s.bell = { group: C, plunger: T, knob: E, hit: oe }));
  let O = new m();
  (O.position.set(0.86, P, 0.16),
    n.add(O),
    D(0.2, 0.008, 0.14, p, 0, 0.004, 0, O),
    D(
      0.18,
      0.004,
      0.12,
      new a({ color: 1315344, roughness: 0.8 }),
      0,
      0.009,
      0,
      O,
    ));
  let k = [
      new a({ color: 11569732, roughness: 0.3, metalness: 1 }),
      new a({ map: i.coin, roughness: 0.28, metalness: 1 }),
      new a({ map: i.coin, roughness: 0.28, metalness: 1 }),
    ],
    A = new e(new y(0.021, 0.021, 0.004, 32), k);
  ((A.castShadow = !0), (A.visible = !1), n.add(A), (s.coin = A), (s.tray = O));
  let se = new m();
  (se.position.copy(ue).setY(P),
    n.add(se),
    D(0.11, 0.014, 0.075, p, 0, 0.007, 0, se),
    D(
      0.1,
      0.004,
      0.065,
      new a({ color: 3802632, roughness: 0.95 }),
      0,
      0.015,
      0,
      se,
    ));
  let j = new m();
  (n.add(j),
    D(0.07, 0.014, 0.045, p, 0, 0.007, 0, j),
    D(
      0.066,
      0.006,
      0.041,
      new a({ color: 5900814, roughness: 0.9 }),
      0,
      -0.002,
      0,
      j,
    ));
  let M = w(
    [
      [0, 0],
      [0.012, 0],
      [0.009, 0.03],
      [0.011, 0.05],
      [0.022, 0.075],
      [0.02, 0.09],
      [0, 0.095],
    ],
    new a({ color: 5910294, roughness: 0.45 }),
    16,
  );
  ((M.position.y = 0.014),
    j.add(M),
    j.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (s.stamp = j));
  let N = new m();
  (n.add(N), (N.visible = !1));
  let I = new e(q(), h);
  (I.rotation.set(-Math.PI / 2, 0, 0), I.scale.setScalar(1.25), N.add(I));
  let L = new e(
    new y(0.018, 0.018, 0.004, 20),
    new a({ color: 2759959, roughness: 0.6 }),
  );
  return (
    L.position.set(0, 0.003, -0.075),
    L.scale.set(1, 1, 1.5),
    N.add(L),
    N.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (s.key = N),
    s
  );
}
function q() {
  let e = [],
    t = new i(0.012, 0.0035, 8, 20);
  (t.translate(0, 0.012, 0), e.push(t));
  let n = new r(0.005, 0.06, 0.005);
  (n.translate(0, -0.03, 0), e.push(n));
  for (let [t, n] of [
    [-0.052, 0.014],
    [-0.042, 0.01],
  ]) {
    let i = new r(n, 0.006, 0.004);
    (i.translate(n / 2, t, 0), e.push(i));
  }
  let a = b(e.map((e) => e.toNonIndexed()));
  for (let t of e) t.dispose();
  return a;
}
function Se(t, n, r, i, o, s, c) {
  let l = new m();
  (l.position.set(n, r, M.z0),
    t.add(l),
    D(
      i + 0.05,
      o + 0.05,
      0.05,
      new a({ color: 592138, roughness: 0.3, metalness: 0.3 }),
      0,
      0,
      0.025,
      l,
    ));
  let u = new e(
    new g(i, o),
    new a({
      color: 0,
      emissive: 16777215,
      emissiveMap: s,
      emissiveIntensity: c,
      roughness: 0.85,
      metalness: 0,
    }),
  );
  return ((u.position.z = 0.052), l.add(u), l);
}
var J = 1024;
function Ce(e) {
  let t = document.createElement(`canvas`);
  t.width = t.height = J;
  let n = t.getContext(`2d`),
    r = new x(t);
  ((r.colorSpace = p), (r.anisotropy = 4));
  let i = Se(e, L.x, L.y, L.size, L.size, r, 0.7),
    a = -1,
    o = null,
    s = null,
    c = ``,
    l = null,
    u = null,
    d = () => {
      (ee(), u?.());
    };
  (fetch(`/assets/maps/deployment/manifest-v4.json`)
    .then((e) => (e.ok ? e.json() : null))
    .then((e) => {
      ((o = e?.maps ?? e), f());
    })
    .catch(() => {}),
    fetch(`/api/battlefield`, { cache: `no-store` })
      .then((e) => (e.ok ? e.json() : null))
      .then((e) => {
        e?.map && ((l = e), f(), d());
      })
      .catch(() => {}));
  function f() {
    if (!o || !l?.map || c === l.map) return;
    let e = (c = l.map),
      t = o[e] ?? o.compact;
    if (!t?.image) return;
    let n = new Image();
    ((n.onload = () => {
      c === e && ((s = { image: n, bounds: t.bounds }), d());
    }),
      (n.src = t.image));
  }
  let m = (e) =>
    e < 0
      ? `#cfd3d6`
      : l?.teams?.[e]?.color || (e === 0 ? `#e0a030` : `#d23a32`);
  function h() {
    let e = [...(l.objectives ?? []), ...(l.bases ?? [])],
      t = l.bounds ?? s?.bounds ?? [-256, -256, 256, 256];
    if (!e.length)
      return {
        cx: (t[0] + t[2]) / 2,
        cz: (t[1] + t[3]) / 2,
        half: Math.max(t[2] - t[0], t[3] - t[1]) / 2,
      };
    let n = e.map((e) => e.x),
      r = e.map((e) => e.z);
    return {
      cx: (Math.min(...n) + Math.max(...n)) / 2,
      cz: (Math.min(...r) + Math.max(...r)) / 2,
      half: Math.min(
        Math.max(t[2] - t[0], t[3] - t[1]) / 2,
        Math.max(
          Math.max(...n) - Math.min(...n),
          Math.max(...r) - Math.min(...r),
        ) /
          2 +
          45,
      ),
    };
  }
  let g = (e) => {
      let t = parseInt(String(e).slice(1), 16);
      if (!(t >= 0)) return e;
      let n = (t >> 16) & 255,
        r = (t >> 8) & 255,
        i = t & 255,
        a = (n + r + i) / 3,
        o = 0.3;
      return `rgb(${Math.round(n + (a - n) * o)},${Math.round(r + (a - r) * o)},${Math.round(i + (a - i) * o)})`;
    },
    _ = `#ece3cf`,
    v = `500 26px ${H}`,
    y = (e, t, r, i = `left`, a = 6) => {
      n.textAlign = `left`;
      let o = [...e],
        s = o.reduce((e, t) => e + n.measureText(t).width + a, 0) - a,
        c = i === `right` ? t - s : i === `center` ? t - s / 2 : t;
      for (let e of o) (n.fillText(e, c, r), (c += n.measureText(e).width + a));
    };
  function ee() {
    if (((n.fillStyle = `#0d0b09`), n.fillRect(0, 0, J, J), !l?.map)) {
      ((n.fillStyle = `rgba(236,227,207,.45)`),
        (n.font = `italic 38px ${H}`),
        (n.textAlign = `center`),
        (n.textBaseline = `middle`),
        n.fillText(`Awaiting dispatches`, J / 2, J / 2),
        (r.needsUpdate = !0));
      return;
    }
    let e = h(),
      t = J / (2 * e.half),
      i = (n) => J / 2 + (n - e.cx) * t,
      o = (n) => J / 2 + (n - e.cz) * t;
    if (s) {
      let e = s.bounds;
      (n.drawImage(
        s.image,
        i(e[0]),
        o(e[1]),
        (e[2] - e[0]) * t,
        (e[3] - e[1]) * t,
      ),
        (n.globalCompositeOperation = `saturation`),
        (n.fillStyle = `rgba(128,128,128,.85)`),
        n.fillRect(0, 0, J, J),
        (n.globalCompositeOperation = `multiply`),
        (n.fillStyle = `#b39a74`),
        n.fillRect(0, 0, J, J),
        (n.globalCompositeOperation = `source-over`));
    }
    ((n.fillStyle = `rgba(12,9,6,.22)`), n.fillRect(0, 0, J, J));
    let c = n.createRadialGradient(
      J / 2,
      J / 2,
      J * 0.3,
      J / 2,
      J / 2,
      J * 0.75,
    );
    (c.addColorStop(0, `rgba(0,0,0,0)`),
      c.addColorStop(1, `rgba(0,0,0,.55)`),
      (n.fillStyle = c),
      n.fillRect(0, 0, J, J),
      (n.strokeStyle = `rgba(236,227,207,.07)`),
      (n.lineWidth = 1),
      n.beginPath());
    for (let e = 1; e < 6; e++)
      (n.moveTo((e * J) / 6, 0),
        n.lineTo((e * J) / 6, J),
        n.moveTo(0, (e * J) / 6),
        n.lineTo(J, (e * J) / 6));
    (n.stroke(),
      (n.strokeStyle = `rgba(236,230,220,.18)`),
      (n.lineWidth = 1),
      n.strokeRect(26, 26, 972, 972),
      (n.textBaseline = `middle`));
    for (let e of l.bases ?? []) {
      let t = i(e.x),
        r = o(e.z),
        a = g(m(e.team));
      ((n.strokeStyle = a),
        (n.lineWidth = 2),
        n.strokeRect(t - 30, r - 19, 60, 38),
        (n.fillStyle = a),
        (n.font = `600 22px ${H}`),
        y(`HQ`, t, r + 1, `center`, 4));
    }
    if (a >= 0) {
      let e = (l.bases ?? []).find((e) => e.team === a);
      if (e) {
        let t = i(e.x),
          r = o(e.z);
        ((n.strokeStyle = g(m(a))),
          (n.globalAlpha = 0.8),
          (n.lineWidth = 2),
          n.beginPath(),
          n.arc(t, r, 52, 0, Math.PI * 2),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = _),
          (n.font = `500 20px ${H}`),
          y(`YOU`, t, r + 68, `center`, 5));
      }
    }
    for (let e of l.objectives ?? []) {
      let t = i(e.x),
        r = o(e.z);
      ((n.fillStyle = `rgba(12,9,6,.72)`),
        n.beginPath(),
        n.arc(t, r, 30, 0, Math.PI * 2),
        n.fill(),
        (n.strokeStyle = `rgba(236,227,207,.75)`),
        (n.lineWidth = 3),
        n.beginPath(),
        n.arc(t, r, 30, 0, Math.PI * 2),
        n.stroke(),
        (n.fillStyle = _),
        (n.font = `400 34px ${H}`),
        (n.textAlign = `center`),
        n.fillText(e.letter, t, r + 2));
    }
    ((n.font = v),
      (n.fillStyle = `rgba(236,227,207,.8)`),
      y(String(l.name || ``).toUpperCase(), J / 2, 66, `center`, 7));
    let u = l.teams ?? [];
    if (u.length >= 2 && l.mode !== `ffa`) {
      n.font = v;
      for (let [e, t, r] of [
        [0, `left`, 58],
        [1, `right`, 966],
      ])
        ((n.fillStyle = g(m(e))),
          y(String(u[e]?.name ?? ``).toUpperCase(), r, 960, t, 5));
    }
    r.needsUpdate = !0;
  }
  return (
    ee(),
    {
      group: i,
      onChange(e) {
        u = e;
      },
      get snapshot() {
        return l;
      },
      setYou(e) {
        a !== e && ((a = e), d());
      },
    }
  );
}
function we(e) {
  let t = C({ jacket: 2040883 }),
    { s: n, base: r } = t;
  (n.root.position.set(I.x, 0, I.z),
    (n.root.rotation.y = Math.PI),
    e.add(n.root));
  let i = new f(),
    a = new s(),
    o = new s(),
    c = new s(),
    l = new s(),
    u = { R: new s(), L: new s() };
  n.handContact = () => {
    let e = n.sk;
    e.torso.updateWorldMatrix(!0, !1);
    for (let [t, n, r, s] of [
      [e.armR, e.foreR, a, u.R],
      [e.armL, e.foreL, o, u.L],
    ])
      (s.copy(r),
        e.torso.worldToLocal(l.copy(r)),
        i.position.set(0, 0, 0),
        i.updateMatrix(),
        S(t, n, l, i, 0.15));
  };
  let d = 0,
    p = 0,
    m = 0;
  return {
    root: n.root,
    hands: u,
    update(
      e,
      { right: t, left: i, lookAt: l, lean: u = 0, shake: f = 0, nod: h = 0 },
    ) {
      ((m += e), a.copy(t), o.copy(i));
      let g = { ...r },
        _ = Math.sin(m * 1.2);
      ((g.torsoTilt = (r.torsoTilt ?? 0) + u + 0.008 * _),
        (g.torsoYaw = 0),
        (g.torsoRoll = 0),
        (g.hipYaw = 0),
        n.root.updateWorldMatrix(!0, !1),
        n.root.worldToLocal(c.copy(l)));
      let v = new s(0, 1.7, 0),
        y = c.x - v.x,
        ee = c.y - v.y,
        te = c.z - v.z,
        ne = Math.max(-0.9, Math.min(0.9, Math.atan2(-y, -te))),
        re = Math.max(
          -0.45,
          Math.min(0.45, Math.atan2(-ee, Math.hypot(y, te))),
        );
      ((d += (ne - d) * Math.min(1, e * 4)),
        (p += (re - p) * Math.min(1, e * 4)),
        (g.headYaw = d + Math.sin(m * 14) * 0.22 * f),
        (g.headPitch = p + 0.25 * h),
        n.apply(g));
    },
    dispose: t.dispose,
  };
}
function Te() {
  document.body.classList.remove(`desk-on`, `desk-pending`);
}
function Ee({
  host: e = document.body,
  form: t = document.querySelector(`form`),
} = {}) {
  let r = h() || matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    i = document.createElement(`canvas`);
  ((i.id = `desk`), i.setAttribute(`aria-hidden`, `true`));
  let o = i.getContext(`webgl2`, {
    antialias: !0,
    alpha: !1,
    depth: !0,
    stencil: !1,
    powerPreference: `high-performance`,
    failIfMajorPerformanceCaveat: !0,
  });
  if (!o || te(se(o), navigator.userAgent))
    return (o?.getExtension(`WEBGL_lose_context`)?.loseContext(), Te(), null);
  let f = document.createElement(`div`);
  f.id = `desk-shade`;
  let m = document.createElement(`div`);
  m.id = `desk-grade`;
  let g = document.createElement(`div`);
  ((g.id = `desk-fade`), e.prepend(i, m, f), e.append(g));
  let y = t?.querySelector(`[name=name]`),
    b = t?.querySelector(`[name=code]`),
    x = document.getElementById(`code-field`),
    S,
    C,
    w,
    E,
    D = {},
    O,
    k,
    A = null,
    N,
    I,
    R = 0,
    B = 0,
    V = 0,
    H = !1,
    W = !1,
    G = !1,
    K = he(),
    me = new Map(),
    q = { pos: new s(), look: new s(), focus: 0, wantFocus: 0 },
    Se = { pos: new s(0.42, 1.7, 4.7), look: new s(0.3, 1.86, -1.4) },
    J = { pos: new s(0.02, 2.3, 1.75), look: new s(-0.02, P, -0.02) },
    Ee = { pos: new s(0.35, 2.02, 2.45), look: new s(0.35, 2.3, M.z0) },
    De = { pos: new s(L.x, L.y, M.z0 + 0.62), look: new s(L.x, L.y, M.z0) },
    Y = {
      coin: 0,
      coinWant: 0,
      coinFrom: new s(),
      join: -1,
      refuse: -1,
      stamped: !1,
      keyed: !1,
      resolve: null,
      full: !1,
      frame: null,
      release: -1,
      stage: ``,
      stageAt: 0,
      watchAt: -9,
      subscribed: !1,
      team: -1,
      assignedAt: 0,
      outcome: null,
      mapW: 0,
      mapWant: 0,
      offW: 0,
    },
    Oe = () =>
      (
        document.querySelector(`meta[name=hotel]`)?.content || `The Patio`
      ).trim();
  async function ke(e) {
    ((S = new n({
      canvas: i,
      context: e,
      antialias: !0,
      powerPreference: `high-performance`,
    })),
      (S.debug.checkShaderErrors = !1),
      S.setPixelRatio(Math.min(devicePixelRatio, r ? 1.5 : 1.25)),
      (S.outputColorSpace = p),
      (S.toneMapping = 4),
      (S.toneMappingExposure = 1.02),
      (S.shadowMap.enabled = !0),
      (S.shadowMap.type = 1),
      (C = new ie()),
      (C.background = new d(526086)),
      (C.fog = new ne(526086, 8, 16)),
      await j());
    let t = new l(S);
    ((C.environment = t.fromScene(new ae(), 0.04).texture),
      (C.environmentIntensity = 0.16),
      t.dispose(),
      await j(),
      (w = new re(40, 1, 0.05, 40)),
      (E = oe()),
      (D.stone = new a({
        map: T(512, 512, (e, t) => _e(e, t), [1, 1]),
        roughness: 0.32,
        metalness: 0.05,
      })),
      (D.plaster = new a({ map: T(512, 512, ge, [1, 1]), roughness: 0.95 })),
      (D.ceiling = new a({ color: 1184016, roughness: 0.95 })),
      (D.rug = new a({ map: T(512, 320, ve), roughness: 1 })),
      (D.coin = T(128, 128, (e, t) => fe(e, t))),
      (O = pe(Oe())),
      (D.register = O),
      await j(),
      C.add(new v(16766630, 1705990, 0.24)),
      ye(C, D),
      be(C, E),
      (I = xe(C, E, D)),
      await j(),
      (k = Ce(C)));
    let o = new ee(11452372, 4, 7, 2);
    (o.position.set(0.6, 1.5, M.z0 + 1.8), C.add(o));
    for (let e of [-1.7, 2.3]) {
      let t = new c(16769208, 9, 6, 0.5, 0.8, 2);
      (t.position.set(e, M.h - 0.05, 2.6),
        t.target.position.set(e, 0, 2.4),
        C.add(t, t.target));
    }
    let s = new c(16770756, 22, 7, 0.4, 0.8, 2);
    (s.position.set(0.2, 3.6, 1.3),
      s.target.position.set(0, P, -0.1),
      (s.castShadow = !0),
      s.shadow.mapSize.set(1024, 1024),
      (s.shadow.bias = -4e-4),
      (s.shadow.normalBias = 0.01),
      (s.shadow.camera.near = 1),
      (s.shadow.camera.far = 5),
      C.add(s, s.target),
      await j(),
      (N = we(C)));
    for (let e = 0; e < 5; e++) Be(1 / 30);
  }
  function Ae() {
    Y.join < 0 ||
      (Object.assign(Y, {
        join: -1,
        frame: null,
        release: -1,
        resolve: null,
        settle: null,
        quiet: !1,
        booted: !1,
        stamped: !1,
        keyed: !1,
        doorSound: !1,
        mapWant: 0,
        refuse: V,
      }),
      X?.remove(),
      (X = null),
      (I.key.visible = !1),
      O.reset(),
      k.setYou(-1),
      (g.style.opacity = `0`),
      document.body.classList.remove(`checkin`),
      Ze(),
      Q(2500));
  }
  let je = [`download`, `build`, `connect`, `graphics`, `ready`],
    Me = [
      `First load takes 20–60 seconds. The next maps load faster.`,
      `Pressing Deploy captures your mouse. Esc frees it again.`,
      `Press F1 in the field to see the controls. Hold Tab for the scores.`,
      `Stuttering? Settings → Graphics → Low. Auto picks it for most laptops.`,
      `Capture the lettered flags. Holding more flags drains the enemy’s tickets.`,
      `F enters vehicles. Support repairs them with the torch (5).`,
    ],
    X = null;
  function Ne() {
    let e = document.createElement(`div`);
    ((e.id = `desk-caption`), e.setAttribute(`role`, `status`));
    let t = document.createElement(`div`),
      n = document.createElement(`div`),
      r = document.createElement(`div`),
      i = document.createElement(`i`),
      a = document.createElement(`div`);
    ((t.className = `dc-head`),
      (n.className = `dc-stage`),
      (r.className = `dc-bar`),
      (a.className = `dc-tip`),
      r.append(i),
      e.append(t, n, r, a),
      document.body.append(e));
    let o = {
        download: `Fetching the game`,
        build: `Setting up ${(document.getElementById(`map-name`)?.textContent ?? ``).trim() || `the battlefield`}`,
        connect: `Taking your seat on the server`,
        graphics: `Preparing your view`,
        ready: `Your room is ready`,
        failed: `The game could not start`,
      },
      s = -99,
      c = Math.floor(Math.random() * Me.length);
    return (
      (t.textContent = `Preparing your room`),
      requestAnimationFrame(() => e.classList.add(`on`)),
      {
        stage(e) {
          n.textContent = o[e] ?? ``;
        },
        side(e) {
          e && (t.textContent = `Your side · ${e}`);
        },
        update() {
          let e = Math.max(0, je.indexOf(Y.stage)),
            t =
              Y.stage === `ready`
                ? 1
                : 0.85 * (1 - Math.exp(-(V - Y.stageAt) / 9));
          ((i.style.transform = `scaleX(${Math.min(1, (e + t) / (je.length - 1)).toFixed(3)})`),
            V - s > 7 &&
              ((s = V), (c = (c + 1) % Me.length), (a.textContent = Me[c])));
        },
        leave() {
          e.classList.remove(`on`);
        },
        remove() {
          e.remove();
        },
      }
    );
  }
  function Pe(e) {
    if (Y.team === e) return;
    ((Y.team = e), (Y.assignedAt = V), k.setYou(e));
    let t = k.snapshot?.teams?.[e]?.name ?? (e === 0 ? `Amber` : `Crimson`);
    (O.setSide(t), X?.side(t));
  }
  function Fe() {
    if (!Y.frame || V - Y.watchAt < 0.25) return;
    Y.watchAt = V;
    let e = null,
      t = null;
    try {
      ((e = Y.frame.contentWindow?.__game ?? null),
        (t = Y.frame.contentDocument));
    } catch {}
    let n = !1;
    try {
      n = !!e?.ctx?.modules?.get?.(`netcode`)?.isConnected?.();
    } catch {}
    if (e?.ctx?.events && !Y.subscribed) {
      Y.subscribed = !0;
      try {
        e.ctx.events.on(`net:connected`, (e) => {
          Number.isInteger(e?.team) && Pe(e.team);
        });
      } catch {}
    }
    let r = !!t && t.getElementById(`sl-join-reload`)?.hidden === !1,
      i =
        e?.bootFailed || r
          ? `failed`
          : e?.ready && n
            ? `ready`
            : n
              ? `graphics`
              : (e?.bootStage ?? `download`);
    (i !== Y.stage && ((Y.stage = i), (Y.stageAt = V), X?.stage(i)),
      Y.release < 0 &&
        (i === `ready` || i === `failed` || V - Y.join > 150) &&
        ((Y.outcome = i),
        (Y.release = Math.max(V, Y.join + (i === `ready` ? le : ce)))));
  }
  let Ie = new s(),
    Le = new s(),
    Z = new s(),
    Re = new s();
  function ze(e, t, n) {
    return n.set(F.x + (e - 0.5) * F.w, P + 0.06, F.z + (t - 0.5) * F.d);
  }
  function Be(e) {
    V += e;
    let t = (Y.typing = O.update(e));
    q.focus += (q.wantFocus - q.focus) * Math.min(1, e * 2.2);
    let n = de(q.focus);
    if (
      (q.pos.lerpVectors(Se.pos, J.pos, n),
      q.look.lerpVectors(Se.look, J.look, n),
      (Y.mapW +=
        (Y.mapWant - Y.mapW) * Math.min(1, e * (Y.mapWant ? 2.4 : 1.4))),
      (Y.offW += (+(Y.join >= 0) - Y.offW) * Math.min(1, e * 1.5)),
      Y.mapW > 0.001)
    ) {
      let e = de(Y.mapW);
      (q.pos.lerp(Ee.pos, e), q.look.lerp(Ee.look, e));
    }
    X?.update();
    let r = Re.copy(ue).setY(P + 0.1);
    (Ie.copy(r), Le.set(z.x, P + 0.03, z.z));
    let i = 0.05,
      a = 0,
      o = 0;
    if (
      (Z.copy(w ? w.position : Se.pos),
      (t || (q.wantFocus && O.st.name)) && Z.copy(ze(0.62, 0.4, Re.clone())),
      Y.refuse >= 0)
    ) {
      let e = V - Y.refuse;
      e < 1.4
        ? (a = Math.sin(Math.min(1, e / 1.4) * Math.PI))
        : (Y.refuse = -1);
    }
    let c = null,
      l = null,
      u = 0;
    if (((Y.quiet = !1), Y.join >= 0)) {
      Fe();
      let e = Y.release >= 0 && V >= Y.release,
        t = e ? ce + (V - Y.release) : Math.min(V - Y.join, ce),
        n = O.mineUV(),
        r = ze(n.u, n.v, new s()),
        a = U(t, 0.1, 0.4) * (1 - U(t, 0.72, 0.95)),
        d =
          0.14 * U(t, 0, 0.3) * (1 - U(t, 0.42, 0.5)) +
          0.14 * U(t, 0.6, 0.75) * (1 - U(t, 0.8, 0.95));
      ((c = new s().lerpVectors(ue, r, a)),
        (c.y = P + 0.016 + 0.034 * a + d),
        t >= 0.5 &&
          !Y.stamped &&
          ((Y.stamped = !0), O.stamp(Y.room), K.stamp()),
        Ie.copy(c).setY(c.y + 0.1),
        (i = 0.05 + 0.22 * a),
        Z.copy(r));
      let f = !e && V - Y.join > ce;
      Y.mapWant = +!!f;
      let p = f && Y.mapW > 0.95;
      if ((p && (Y.booted = !0), p && Y.settle)) {
        let e = Y.settle;
        ((Y.settle = null), e());
      }
      if (
        ((Y.quiet =
          p && Y.mapW > 0.995 && !(Y.assignedAt > 0 && V - Y.assignedAt < 1.8)),
        f && (Z.set(L.x, L.y, M.z0), Y.assignedAt > 0))
      ) {
        let e = V - Y.assignedAt;
        e < 1.6 &&
          (Z.copy(w.position),
          (o = Math.sin(Math.min(1, e / 1.2) * Math.PI) * 0.7));
      }
      let m = U(t, 1, 1.45),
        h = U(t, 1.3, 1.65);
      if (
        ((l = new s(z.x - 0.04 * m, P + 0.003, z.z + 0.3 * m + 0.22 * h)),
        t >= 1 &&
          e &&
          !Y.keyed &&
          ((Y.keyed = !0), (I.key.visible = !0), K.key()),
        Le.set(l.x, P + 0.03, Math.min(l.z, z.z + 0.3)).lerp(
          new s(z.x, P + 0.03, z.z),
          U(t, 1.45, 1.85),
        ),
        (i += 0.18 * m * (1 - U(t, 1.45, 1.85))),
        e &&
          (t > 1.15 && Z.copy(w.position),
          t > 1.45 &&
            (Z.set(L.x, L.y, M.z0),
            (o = Math.sin(U(t, 1.45, 1.85) * Math.PI) * 0.8)),
          t > 1.4 && !Y.doorSound && ((Y.doorSound = !0), K.door(), X?.leave()),
          (u = U(t, 1.55, 2.85)),
          (g.style.opacity = String(U(t, 2.15, 2.7))),
          t >= 2.75 && Y.resolve))
      ) {
        let e = Y.resolve;
        ((Y.resolve = null), e(Y.outcome));
      }
      Y.keyed || (l = null);
    }
    if (
      (c ? I.stamp.position.copy(c) : I.stamp.position.copy(ue).setY(P + 0.016),
      l && (I.key.position.copy(l), (I.key.rotation.y = 0.4)),
      (Y.coin += (Y.coinWant - Y.coin) * Math.min(1, e * 5)),
      (I.coin.visible = Y.coin > 0.01),
      I.coin.visible)
    ) {
      let e = de(Y.coin);
      (I.coin.position.set(1 + -0.14 * e, P + 0.012, 0.4 + (0.16 - 0.4) * e),
        I.coin.rotation.set(0, e * 2.2, 0));
    }
    (u > 0 && (q.pos.lerp(De.pos, u), q.look.lerp(De.look, u)),
      N.update(e, {
        right: Ie,
        left: Le,
        lookAt: Z,
        lean: i,
        shake: a,
        nod: o,
      }));
    let d = I.bell,
      f = Math.max(0, 1 - (V - (Y.bellT ?? -9)) * 8);
    ((d.plunger.position.y = 0.086 - 0.01 * f),
      (d.knob.position.y = 0.1 - 0.01 * f));
  }
  function Ve() {
    let e = innerWidth,
      t = innerHeight;
    ((i.width !== Math.round(e * S.getPixelRatio()) ||
      i.height !== Math.round(t * S.getPixelRatio())) &&
      S.setSize(e, t, !1),
      (w.aspect = e / t),
      (w.fov = e / t < 1 ? 52 : 30),
      e >= 900
        ? w.setViewOffset(e, t, -e * 0.14 * (1 - de(Y.offW)), 0, e, t)
        : w.clearViewOffset(),
      w.updateProjectionMatrix());
  }
  let He = 0,
    Ue = 0,
    We = 0,
    Ge = 0,
    Ke = !1;
  function qe(e) {
    if (((R = 0), H)) return;
    let t = !r && !G && (Y.join >= 0 || Y.typing || e < Ge);
    if (
      (t && (R = requestAnimationFrame(qe)),
      t && B && e - B < (Y.booted ? 31 : 15.5) && (Y.join < 0 || Y.booted))
    )
      return;
    let n = Math.min(0.1, (e - (B || e)) / 1e3);
    B = e;
    let i = performance.now();
    (Be(n),
      w.position.copy(q.pos),
      w.lookAt(q.look),
      !(Y.quiet && Ke) &&
        ((Ke = Y.quiet),
        Ve(),
        S.render(C, w),
        t &&
          Y.join < 0 &&
          ++He > 3 &&
          We < 40 &&
          (We++,
          (n > 0.07 || performance.now() - i > 30) && Ue++,
          Ue >= 8 && ((G = !0), cancelAnimationFrame(R), (R = 0))),
        t || (B = 0)));
  }
  let Q = (e = 0) => {
      !H &&
        W &&
        ((Ge = Math.max(Ge, performance.now() + e)),
        (R ||= requestAnimationFrame(qe)));
    },
    Je = (e) => me.has(e.trim().toLowerCase()),
    Ye = () => {
      if (!O) return;
      let e = y?.value ?? ``;
      (O.setName(e.replace(/[\x00-\x1f<>]/g, ``).slice(0, 24), Je(e)), Q(400));
    },
    Xe = () => x && !x.hidden,
    Ze = () => {
      Y.coinWant = Xe() && b?.value ? 1 : +(Y.join >= 0);
    },
    Qe = 0;
  (y?.addEventListener(`input`, () => {
    let e = y.value.length;
    (e > Qe && K.scratch(), (Qe = e), Ye());
  }),
    y?.addEventListener(`focus`, () => {
      ((q.wantFocus = r || G ? 0 : 1), Q(2600));
    }),
    y?.addEventListener(`blur`, () => {
      ((q.wantFocus = 0), Q(2600));
    }),
    b?.addEventListener(`input`, () => {
      let e = Y.coinWant;
      (Ze(), Y.coinWant && !e && K.coin(), Q(1200));
    }));
  let $e = () => {
    (K.start(),
      removeEventListener(`pointerdown`, $e, !0),
      removeEventListener(`keydown`, $e, !0));
  };
  (addEventListener(`pointerdown`, $e, !0),
    addEventListener(`keydown`, $e, !0));
  let et = new _(),
    tt = new u();
  (i.addEventListener(`pointerdown`, (e) => {
    if (!W) return;
    let t = i.getBoundingClientRect();
    (tt.set(
      ((e.clientX - t.left) / t.width) * 2 - 1,
      -((e.clientY - t.top) / t.height) * 2 + 1,
    ),
      et.setFromCamera(tt, w),
      et.intersectObject(I.bell.group, !0).length &&
        ((Y.bellT = V), K.start(), K.bell(), Q(500)));
  }),
    document.addEventListener(`visibilitychange`, () => {
      document.hidden
        ? (cancelAnimationFrame(R), (R = 0), K.stop())
        : ((B = 0), Q());
    }),
    addEventListener(`resize`, () => Q()));
  let nt = (e) => {
    if (!e) return;
    (typeof e.hotel == `string` && O?.setHotel(e.hotel),
      (A = Math.min(64, Math.max(1, (e.players | 0) + 1))));
    let t = Number.isInteger(e.capacity) && e.players >= e.capacity;
    (t && !Y.full && (Y.refuse = V), (Y.full = t), Q(t ? 1600 : 0));
  };
  (addEventListener(`lobby:health`, (e) => nt(e.detail)),
    addEventListener(`pageshow`, (e) => {
      e.persisted &&
        W &&
        (Ae(),
        (Y.join = -1),
        (Y.stamped = Y.keyed = Y.doorSound = !1),
        (I.key.visible = !1),
        O.reset(),
        (g.style.opacity = `0`),
        document.body.classList.remove(`checkin`),
        Ze(),
        (B = 0),
        Q());
    }));
  async function rt() {
    try {
      let e = await fetch(`/api/register`, { cache: `no-store` });
      if (!e.ok) return;
      let t = await e.json(),
        n = (Array.isArray(t?.guests) ? t.guests : [])
          .filter((e) => typeof e?.name == `string` && Number.isFinite(e.at))
          .slice(0, 20)
          .map((e) => ({
            name: e.name.replace(/[\x00-\x1f]/g, ``).slice(0, 24),
            at: e.at,
            live: !!e.live,
          }));
      for (let e of n) me.set(e.name.trim().toLowerCase(), e);
      (O.setGuests(n), Ye(), Q());
    } catch {}
  }
  let $ = null;
  return (
    (async () => {
      try {
        await ke(o);
      } catch (e) {
        (console.warn(`Front desk`, e),
          i.remove(),
          f.remove(),
          m.remove(),
          g.remove(),
          (window.frontDesk = null),
          Te());
        return;
      }
      if (!H) {
        if (
          (Ye(), Ze(), nt(window.lobbyHealth), rt(), k.onChange(() => Q()), !r)
        ) {
          let e = document.querySelector(`.footer`);
          if (e) {
            (($ = document.createElement(`button`)),
              ($.type = `button`),
              ($.className = `desk-sound`));
            let t = () => {
              (($.textContent = K.on ? `Sound on` : `Sound off`),
                $.setAttribute(`aria-pressed`, String(K.on)));
            };
            (t(),
              $.addEventListener(`click`, () => {
                (K.set(!K.on), t());
              }),
              e.insertBefore($, e.lastElementChild));
          }
        }
        (Ve(),
          w.position.copy(q.pos),
          w.lookAt(q.look),
          await Promise.resolve(S.compileAsync?.(C, w)).catch(() => {}),
          await j(),
          !H &&
            (Be(0),
            w.position.copy(q.pos),
            w.lookAt(q.look),
            S.render(C, w),
            (W = !0),
            requestAnimationFrame(() => {
              (i.classList.add(`on`),
                f.classList.add(`on`),
                m.classList.add(`on`),
                document.body.classList.add(`desk-on`),
                document.body.classList.remove(`desk-pending`));
            }),
            Q()));
      }
    })(),
    {
      get ready() {
        return W && !r && !G;
      },
      checkIn(e) {
        return !W || r || G
          ? Promise.resolve(`ready`)
          : new Promise((t) => {
              (Object.assign(Y, {
                booted: !1,
                quiet: !1,
                join: V,
                stamped: !1,
                keyed: !1,
                doorSound: !1,
                resolve: t,
                room: A,
                frame: e,
                release: -1,
                stage: ``,
                stageAt: V,
                watchAt: -9,
                subscribed: !1,
                team: -1,
                assignedAt: 0,
                outcome: null,
              }),
                Y.coinWant || ((Y.coinWant = 1), K.coin()),
                (X = Ne()),
                X.stage(`download`),
                (q.wantFocus = 0),
                document.body.classList.add(`checkin`),
                K.start(),
                (B = 0),
                Q());
            });
      },
      whenSettled() {
        return Y.join < 0 || Y.booted || Y.release >= 0
          ? Promise.resolve()
          : new Promise((e) => {
              let t = Y.settle;
              ((Y.settle = () => {
                (t?.(), e());
              }),
                setTimeout(e, 4e3));
            });
      },
      abort: Ae,
      dispose() {
        ((H = !0),
          X?.remove(),
          cancelAnimationFrame(R),
          K.stop(),
          $?.remove(),
          N?.dispose(),
          C?.traverse((e) => e.geometry?.dispose?.()),
          S?.dispose(),
          i.remove(),
          f.remove(),
          m.remove(),
          g.remove(),
          document.body.classList.remove(`desk-on`));
      },
      qa: {
        state: Y,
        cam: q,
        reset() {
          ((Y.join = -1),
            (Y.resolve = null),
            (Y.stamped = Y.keyed = Y.doorSound = !1),
            (I.key.visible = !1),
            O.reset(),
            (g.style.opacity = `0`),
            document.body.classList.remove(`checkin`),
            Ze());
        },
        get t() {
          return V;
        },
        render() {
          (Be(0),
            w.position.copy(q.pos),
            w.lookAt(q.look),
            Ve(),
            S.render(C, w));
        },
      },
    }
  );
}
if (typeof document < `u` && document.getElementById(`backdrop`) && !A()) Te();
else if (typeof document < `u` && document.getElementById(`backdrop`)) {
  let e = () => {
      try {
        window.frontDesk = Ee();
      } catch (e) {
        (console.warn(`Front desk`, e), Te());
      }
    },
    t = () =>
      window.requestIdleCallback
        ? requestIdleCallback(e, { timeout: 1500 })
        : setTimeout(e, 200);
  document.readyState === `complete`
    ? t()
    : addEventListener(`load`, t, { once: !0 });
}
//# sourceMappingURL=front-desk-EjjcU289.js.map
