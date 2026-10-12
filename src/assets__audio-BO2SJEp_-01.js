// assets__audio-BO2SJEp_ 01 — math
// Lines 1-243 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  $ as e,
  A as t,
  Dn as n,
  En as r,
  F as i,
  G as a,
  Gn as o,
  I as s,
  K as c,
  Lt as l,
  Mn as u,
  R as d,
  Rt as f,
  U as p,
  Ut as m,
  V as h,
  Z as g,
  an as _,
  at as v,
  dt as y,
  ft as b,
  gt as x,
  k as S,
  kt as C,
  lt as w,
  mn as T,
  pn as E,
  tn as D,
  v as O,
  zn as k,
  zt as A,
} from "./graphics-quality-BsjABS0s.js";
import { g as ee } from "./sim-D8F3HPJq.js";
import { t as j } from "./sim-DQ2nevDc.js";
import { r as te } from "./squads-3RTK34-j.js";
import { n as M, t as N } from "./acoustics-BfYC1rA2.js";
import {
  a as P,
  c as F,
  i as ne,
  l as I,
  n as L,
  o as R,
  r as z,
  s as B,
  t as re,
  u as V,
} from "./synth-xINWorK6.js";
import { r as H, t as ie } from "./hostility-BAA0I7XB.js";
import { t as ae } from "./grenade-sim-BPkr3Qs6.js";
import { i as oe, n as se } from "./rotor-spool-BGBN_bun.js";
function ce(e) {
  let t = e.createWaveShaper(),
    n = new Float32Array(4097);
  for (let e = 0; e < n.length; e++) {
    let t = (e / (n.length - 1)) * 2 - 1,
      r = Math.abs(t);
    n[e] =
      Math.sign(t) *
      (r <= 0.8 ? r : 0.8 + 0.18 * (1 - Math.exp(-(r - 0.8) / 0.18)));
  }
  return ((t.curve = n), (t.oversample = `2x`), t);
}
var le = 1.35;
function ue(e, t) {
  let n = Math.max(0, t),
    r = e.ref;
  if (!r) return 1;
  if (e.rangeFalloff) return (r / (r + n)) ** +le;
  let i = r / (r + Math.max(n - r, 0));
  if ((e.falloff && (i **= +e.falloff), e.fade)) {
    let t = Math.min(1, Math.max(0, (n - 0.5 * e.fade) / (0.5 * e.fade)));
    i *= 1 - t * t * (3 - 2 * t);
  }
  return e.layered ? Math.sqrt(i) : i;
}
function de(e) {
  return Math.max(160, 6e3 * 0.5 ** (Math.max(0, e - 10) / 18));
}
async function fe(e, t, n = 3) {
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
var U = `/assets/audio/movement/`,
  pe = {
    concrete: `road`,
    stone: `road`,
    rock: `road`,
    mud: `dirt`,
    leaves: `grass`,
  },
  me = class {
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
        let n = await fetch(U + `manifest.json`, {
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
                  buffer: await e.decodeAudioData(await fe(U + n.file, t)),
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
        s = pe[o] ?? o,
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
  he = `/assets/audio/voice/`,
  W = [`lewis/manifest.json`, `manifest.json`];
async function G(e, t, n = 4) {
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
