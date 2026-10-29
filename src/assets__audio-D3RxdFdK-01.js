// assets__audio-D3RxdFdK 01 — math
// Lines 1-268 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  A as t,
  An as n,
  Bt as r,
  F as i,
  Fn as a,
  Gt as o,
  H as s,
  Hn as c,
  I as l,
  Jn as u,
  K as d,
  Vt as f,
  W as p,
  _n as m,
  cn as h,
  dt as g,
  gn as _,
  jt as v,
  k as y,
  kn as b,
  mt as x,
  pt as S,
  q as C,
  rn as w,
  st as T,
  tt as E,
  v as D,
  vt as O,
  z as k,
  zt as A,
} from "./graphics-quality-CrL3qbU3.js";
import { v as ee } from "./sim-CCeMdhLh.js";
import { t as j } from "./sim-aWA3uwbl.js";
import { r as te, t as M } from "./hostility-BAA0I7XB.js";
import { r as N } from "./squads-7-3V4T83.js";
import { n as P, t as F } from "./acoustics-BfYC1rA2.js";
import {
  a as ne,
  c as re,
  d as I,
  i as ie,
  l as L,
  n as R,
  o as z,
  r as B,
  s as V,
  t as ae,
  u as H,
} from "./synth-B52TAiVy.js";
import { t as oe } from "./grenade-sim-CyMT7Itf.js";
import { i as se, n as ce } from "./rotor-spool-BGBN_bun.js";
var le = Object.freeze({
    threshold: -3,
    ratio: 20,
    attack: 0,
    knee: 0,
    release: 0.08,
    trim: 0.819,
  }),
  ue = (e) => {
    let t = Math.abs(e);
    return (
      Math.sign(e) *
      (t <= 0.8 ? t : 0.8 + 0.18 * (1 - Math.exp(-(t - 0.8) / 0.18)))
    );
  };
function de(e) {
  let t = e.createWaveShaper(),
    n = new Float32Array(4097),
    r = e.createDynamicsCompressor(),
    i = e.createGain(),
    a = e.createGain();
  for (let e of [`threshold`, `ratio`, `attack`, `knee`, `release`])
    r[e].value = le[e];
  ((i.gain.value = le.trim), (a.gain.value = 1 / 2));
  for (let e = 0; e < n.length; e++)
    n[e] = ue(((e / (n.length - 1)) * 2 - 1) * 2);
  return (
    r.connect(i),
    i.connect(a),
    a.connect(t),
    (t.curve = n),
    (t.oversample = `2x`),
    (t.input = r),
    t
  );
}
var fe = 1.35;
function U(e, t) {
  let n = Math.max(0, t),
    r = e.ref;
  if (!r) return 1;
  if (e.rangeFalloff) return (r / (r + n)) ** +fe;
  let i = r / (r + Math.max(n - r, 0));
  if ((e.falloff && (i **= +e.falloff), e.fade)) {
    let t = Math.min(1, Math.max(0, (n - 0.5 * e.fade) / (0.5 * e.fade)));
    i *= 1 - t * t * (3 - 2 * t);
  }
  return e.layered ? Math.sqrt(i) : i;
}
function pe(e) {
  return Math.max(160, 6e3 * 0.5 ** (Math.max(0, e - 10) / 18));
}
async function me(e, t, n = 3) {
  for (let r = 1; ; r++)
    try {
      let n = await fetch(e, { signal: t });
      if (!n.ok) throw Error(`${e.split(`/`).pop()}: HTTP ${n.status}`);
      return await n.arrayBuffer();
    } catch (e) {
      if (t.aborted || r >= n) throw e;
      await new Promise((e) => setTimeout(e, 1500 * r));
    }
}
var he = `/assets/audio/movement/`,
  W = {
    concrete: `road`,
    stone: `road`,
    rock: `road`,
    mud: `dirt`,
    leaves: `grass`,
  },
  G = class {
    constructor() {
      ((this.banks = new Map()),
        (this.last = new Map()),
        (this.rotor = null),
        (this.disposed = !1),
        (this.abort = new AbortController()),
        (this.failures = []));
    }
    async load(e) {
      let t = this.abort.signal,
        n = setTimeout(() => this.abort.abort(), 18e4);
      try {
        let n = await fetch(he + `manifest.json`, {
          signal: t,
          cache: `no-store`,
        });
        if (!n.ok) throw Error(`manifest HTTP ${n.status}`);
        let r = await n.json(),
          i = new Map(),
          a = (n) => (
            i.has(n.file) ||
              i.set(
                n.file,
                (async () => ({
                  buffer: await e.decodeAudioData(await me(he + n.file, t)),
                  file: n.file,
                }))(),
              ),
            i.get(n.file)
          );
        await Promise.all([
          ...Object.entries(r.footsteps).map(async ([e, t]) => {
            let n = await Promise.allSettled(t.map(a));
            if (this.disposed) return;
            let r = n
              .filter((e) => e.status === `fulfilled`)
              .map((e) => e.value);
            for (let e of n)
              e.status === `rejected` && this.failures.push(String(e.reason));
            r.length && this.banks.set(e, r);
          }),
          a(r.rotor)
            .then((e) => {
              this.disposed || (this.rotor = e);
            })
            .catch((e) => this.failures.push(String(e))),
        ]);
      } catch (e) {
        this.disposed || this.failures.push(String(e));
      } finally {
        clearTimeout(n);
      }
    }
    build(e, t, n, r, i, a) {
      if (this.disposed) return;
      if (e === `vehicle_rotor` && this.rotor) {
        let e = t.createBufferSource(),
          o = t.createGain();
        ((e.buffer = this.rotor.buffer), (e.loop = !0));
        let s = Math.max(0, Math.min(1, i.rpm ?? 0.3));
        return (
          e.playbackRate.setValueAtTime(0.96 + s * 0.1, r),
          o.gain.setValueAtTime(0, r),
          o.gain.linearRampToValueAtTime(0.75 + s * 0.25, r + 0.25),
          e.connect(o),
          o.connect(n),
          a(e),
          (i.handle.setRpm = (t, n) => {
            (e.playbackRate.setTargetAtTime(0.96 + t * 0.1, n, 0.3),
              o.gain.setTargetAtTime(
                0.75 + t * 0.25,
                Math.max(n, r + 0.25),
                0.3,
              ));
          }),
          e.start(r, (i.rand?.() ?? 0) * e.buffer.duration),
          (i.sample = this.rotor.file),
          1 / 0
        );
      }
      if (e !== `footstep` && !e.startsWith(`footstep_`)) return;
      let o = i.surface ?? (e === `footstep` ? `dirt` : e.slice(9)),
        s = W[o] ?? o,
        c = this.banks.get(s);
      if (!c?.length) return;
      let l = Math.min(c.length - 1, Math.floor((i.rand?.() ?? 0) * c.length));
      (c.length > 1 && l === this.last.get(s) && (l = (l + 1) % c.length),
        this.last.set(s, l));
      let { buffer: u, file: d } = c[l],
        f = t.createBufferSource();
      f.buffer = u;
      let p =
        Math.max(0.75, Math.min(1.25, i.pitch ?? 1)) *
        (0.97 + (i.rand?.() ?? 0.5) * 0.06);
      return (
        f.playbackRate.setValueAtTime(p, r),
        f.connect(n),
        a(f),
        f.start(r),
        (i.sample = d),
        r + u.duration / p
      );
    }
    stats() {
      return {
        banks: Object.fromEntries(
          [...this.banks].map(([e, t]) => [e, t.length]),
        ),
        rotor: !!this.rotor,
        failures: this.failures.slice(),
      };
    }
    dispose() {
      ((this.disposed = !0),
        this.abort.abort(),
        this.banks.clear(),
        this.last.clear(),
        (this.rotor = null));
    }
  },
  ge = `/assets/audio/voice/`,
  _e = [`lewis/manifest.json`, `manifest.json`];
async function ve(e, t, n = 4) {
  let r = Array(e.length),
    i = 0;
  return (
    await Promise.all(
      Array.from({ length: Math.min(n, e.length) }, async () => {
        for (;;) {
          let n = i++;
          if (n >= e.length) return;
          try {
            r[n] = { status: `fulfilled`, value: await t(e[n], n) };
          } catch (e) {
            r[n] = { status: `rejected`, reason: e };
          }
        }
      }),
    ),
    r
  );
}
