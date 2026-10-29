// assets__voice-DdE4VFHL 01 — mic
// Lines 1-320 of readable/assets__voice-DdE4VFHL.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { _ as e } from "./graphics-quality-CrL3qbU3.js";
import { v as t } from "./sim-CCeMdhLh.js";
import { n } from "./acoustics-BfYC1rA2.js";
import { a as r, n as i, t as a } from "./shared-DPd8kRBt.js";
var o = `salient.voice.enabled`,
  s = `salient.voice.volume`,
  c = `salient.voice.key`,
  l = `salient.voice.muted`,
  u = `salient.voice.mode`,
  d = [`off`, `ptt`, `open`],
  f = (a.sampleRate * a.frameMs) / 1e3,
  p = a.frameMs * 1e3,
  m = 0.08,
  h = 0.35,
  g = 2,
  _ = 0.3,
  v = 0.15,
  y = `registerProcessor('salient-voice-capture', class extends AudioWorkletProcessor {
  constructor() {
    super(); this.on = false; this.buf = new Float32Array(${f}); this.n = 0;
    this.prev = null; this.hang = 0; this.floor = 0.003; this.open = false;
    this.port.onmessage = (e) => { this.on = !!e.data; if (!this.on) { this.n = 0; this.hang = 0; this.prev = null; this.gate(false); } };
  }
  gate(open) { if (open !== this.open) { this.open = open; this.port.postMessage({ open }); } }
  send(frame) { this.port.postMessage({ frame }, [frame.buffer]); }
  frame(f) {
    let sum = 0; for (let i = 0; i < f.length; i++) sum += f[i] * f[i];
    const rms = Math.sqrt(sum / f.length);
    if (!this.hang) this.floor += (rms - this.floor) * (rms < this.floor ? 0.2 : 0.01);
    const loud = rms > Math.max(0.01, this.floor * 3);
    if (loud) { if (!this.hang && this.prev) this.send(this.prev); this.prev = null; this.hang = 25; }
    else if (this.hang) this.hang--;
    if (this.hang) { this.gate(true); this.send(f); } else { this.gate(false); this.prev = f; }
  }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!this.on || !ch) return true;
    let i = 0;
    while (i < ch.length) {
      const take = Math.min(ch.length - i, ${f} - this.n);
      this.buf.set(ch.subarray(i, i + take), this.n); this.n += take; i += take;
      if (this.n === ${f}) { this.frame(this.buf.slice()); this.n = 0; }
    }
    return true;
  }
});`,
  b = (e, t) => {
    try {
      return localStorage.getItem(e) ?? t;
    } catch {
      return t;
    }
  },
  x = (e, t) => {
    try {
      localStorage.setItem(e, String(t));
    } catch {}
  },
  S = null,
  C = null;
function w() {
  return {
    enabled: b(o, `true`) !== `false`,
    volume: Math.max(0, Math.min(2, Number(b(s, `1`)) || 0)),
    bind: b(c, `KeyN`),
    muted: b(l, e() ? `true` : `false`) === `true`,
    mode: d.includes(b(u, ``)) ? b(u, ``) : null,
    pttHeld: !1,
    mic: `idle`,
    transmitting: !1,
    talking: !1,
    awaitGesture: !1,
    permissionWatch: null,
    seq: 0,
    stampUs: 0,
    capture: null,
    bus: null,
    speakers: new Map(),
    offs: [],
    lastSignature: ``,
    counters: {
      sent: 0,
      bytesSent: 0,
      received: 0,
      decoded: 0,
      played: 0,
      late: 0,
      errors: 0,
    },
  };
}
var T = () =>
    typeof window < `u` &&
    `AudioDecoder` in window &&
    `EncodedAudioChunk` in window,
  E = () =>
    typeof window < `u` &&
    `AudioEncoder` in window &&
    `AudioData` in window &&
    `AudioWorkletNode` in window &&
    !!navigator.mediaDevices?.getUserMedia;
async function D() {
  if (C.mic !== `idle`) return;
  if (!E()) {
    ((C.mic = `unsupported`),
      S.warn(`voice capture unavailable (needs a secure page and WebCodecs)`));
    return;
  }
  C.mic = `starting`;
  let e = C;
  try {
    let t = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: !0,
        noiseSuppression: !0,
        autoGainControl: !0,
      },
      video: !1,
    });
    if (C !== e) {
      t.getTracks().forEach((e) => e.stop());
      return;
    }
    let n = new AudioContext({
        sampleRate: a.sampleRate,
        latencyHint: `interactive`,
      }),
      i = URL.createObjectURL(new Blob([y], { type: `text/javascript` }));
    try {
      await n.audioWorklet.addModule(i);
    } finally {
      URL.revokeObjectURL(i);
    }
    if (C !== e) {
      (t.getTracks().forEach((e) => e.stop()), n.close());
      return;
    }
    let o = n.createMediaStreamSource(t),
      s = new AudioWorkletNode(n, `salient-voice-capture`, {
        numberOfInputs: 1,
        numberOfOutputs: 1,
        channelCount: 1,
        channelCountMode: `explicit`,
      }),
      c = n.createGain();
    ((c.gain.value = 0), o.connect(s), s.connect(c), c.connect(n.destination));
    let l = new AudioEncoder({
      output: (t) => {
        if (C !== e || !e.transmitting) return;
        let n = new Uint8Array(t.byteLength);
        if ((t.copyTo(n), n.byteLength > a.maxFrameBytes)) return;
        let i = r(e.seq++, n);
        S.modules.get(`netcode`)?.sendRaw?.(i) &&
          (e.counters.sent++, (e.counters.bytesSent += i.byteLength));
      },
      error: (t) => {
        (e.counters.errors++, S.warn(`voice encoder: ${t?.message ?? t}`));
      },
    });
    (l.configure({
      codec: `opus`,
      sampleRate: a.sampleRate,
      numberOfChannels: 1,
      bitrate: a.bitrate,
      opus: { frameDuration: p },
    }),
      (s.port.onmessage = (t) => {
        if (C !== e) return;
        if (t.data.open !== void 0) {
          e.talking = !!t.data.open && e.transmitting;
          return;
        }
        if (
          !e.transmitting ||
          l.state !== `configured` ||
          l.encodeQueueSize > 5
        )
          return;
        let n = new AudioData({
          format: `f32`,
          sampleRate: a.sampleRate,
          numberOfFrames: f,
          numberOfChannels: 1,
          timestamp: e.stampUs,
          data: t.data.frame,
        });
        e.stampUs += p;
        try {
          l.encode(n);
        } finally {
          n.close();
        }
      }),
      (C.capture = {
        ac: n,
        stream: t,
        source: o,
        node: s,
        sink: c,
        encoder: l,
      }),
      (C.mic = `ready`),
      k());
  } catch (t) {
    if (C !== e) return;
    ((C.mic =
      t?.name === `NotAllowedError` || t?.name === `SecurityError`
        ? `denied`
        : `unsupported`),
      S.warn(`voice capture failed: ${t?.name ?? ``} ${t?.message ?? t}`));
  }
}
function O() {
  let e = C?.capture;
  if (e) {
    C.capture = null;
    try {
      ((e.node.port.onmessage = null), e.node.port.postMessage(!1));
    } catch {}
    try {
      (e.source.disconnect(), e.node.disconnect(), e.sink.disconnect());
    } catch {}
    try {
      e.stream.getTracks().forEach((e) => e.stop());
    } catch {}
    try {
      e.encoder.state !== `closed` && e.encoder.close();
    } catch {}
    try {
      e.ac.close();
    } catch {}
  }
}
function k() {
  let e = C.mode === `open` ? !C.muted : C.mode === `ptt` && C.pttHeld,
    t =
      C.enabled &&
      e &&
      C.mic === `ready` &&
      !!S.modules.get(`netcode`)?.isConnected?.();
  if (t === C.transmitting) return;
  ((C.transmitting = t), t || (C.talking = !1));
  let n = C.capture;
  n &&
    (t && n.ac.state === `suspended` && n.ac.resume().catch(() => {}),
    n.node.port.postMessage(t));
}
async function A() {
  let t = C;
  if (!t || !t.enabled || t.mode === `off` || t.mic !== `idle`) return;
  let n = !1;
  try {
    let e = await navigator.permissions?.query({ name: `microphone` });
    ((n = e?.state === `granted`),
      e &&
        !t.permissionWatch &&
        ((t.permissionWatch = e),
        (e.onchange = () => {
          C === t &&
            e.state === `granted` &&
            (t.mic === `denied` || t.mic === `idle`) &&
            ((t.mic = `idle`), A());
        })));
  } catch {}
  C === t &&
    t.mic === `idle` &&
    (t.mode ||
      ((t.mode = n && !t.muted && !e() ? `open` : `off`),
      t.mode === `open` && x(u, `open`)),
    t.mode !== `off` && (n ? D() : (t.awaitGesture = !0)));
}
function j() {
  if (!C) return;
  C.awaitGesture &&
    C.enabled &&
    C.mode !== `off` &&
    C.mic === `idle` &&
    ((C.awaitGesture = !1), D());
  let e = C.capture?.ac;
  e && e.state === `suspended` && e.resume().catch(() => {});
}
function M(e) {
  ((C.muted = !!e),
    x(l, C.muted),
    C.mode === `open` &&
      !C.muted &&
      C.mic === `idle` &&
      ((C.awaitGesture = !1), D()),
    k());
}
function N(e) {
  d.includes(e) &&
    ((C.mode = e),
    x(u, e),
    (C.pttHeld = !1),
    e === `off`
      ? (O(),
        (C.awaitGesture = !1),
        (C.mic === `ready` || C.mic === `starting`) && (C.mic = `idle`))
      : (e === `open` && ((C.muted = !1), x(l, !1)),
        C.enabled && C.mic === `idle` && ((C.awaitGesture = !1), D())),
    k());
}
function P() {
  if (C.bus) return C.bus;
  let e = S.modules.get(`audio`),
    t = e?.context,
    n = e?.busses?.master;
  if (!t || !n) return null;
  let r = t.createGain();
  return (
    (r.gain.value = C.enabled ? C.volume : 0),
    r.connect(n),
    (C.bus = r),
    (C.ac = t),
    r
  );
}
