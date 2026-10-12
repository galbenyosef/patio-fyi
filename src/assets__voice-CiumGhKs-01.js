// assets__voice-CiumGhKs 01 — mic
// Lines 1-351 of readable/assets__voice-CiumGhKs.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { _ as e } from "./graphics-quality-BsjABS0s.js";
import { g as t } from "./sim-D8F3HPJq.js";
import { n } from "./acoustics-BfYC1rA2.js";
import { a as r, n as i, t as a } from "./shared-DPd8kRBt.js";
var o = `salient.voice.enabled`,
  s = `salient.voice.volume`,
  c = `salient.voice.key`,
  l = `salient.voice.muted`,
  u = (a.sampleRate * a.frameMs) / 1e3,
  d = a.frameMs * 1e3,
  f = 0.08,
  p = 0.35,
  m = 2,
  h = 0.3,
  g = 0.15,
  _ = `registerProcessor('salient-voice-capture', class extends AudioWorkletProcessor {
  constructor() {
    super(); this.on = false; this.buf = new Float32Array(${u}); this.n = 0;
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
      const take = Math.min(ch.length - i, ${u} - this.n);
      this.buf.set(ch.subarray(i, i + take), this.n); this.n += take; i += take;
      if (this.n === ${u}) { this.frame(this.buf.slice()); this.n = 0; }
    }
    return true;
  }
});`,
  v = (e, t) => {
    try {
      return localStorage.getItem(e) ?? t;
    } catch {
      return t;
    }
  },
  y = (e, t) => {
    try {
      localStorage.setItem(e, String(t));
    } catch {}
  },
  b = null,
  x = null;
function S() {
  return {
    enabled: v(o, `true`) !== `false`,
    volume: Math.max(0, Math.min(2, Number(v(s, `1`)) || 0)),
    bind: v(c, `KeyN`),
    muted: v(l, e() ? `true` : `false`) === `true`,
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
var C = () =>
    typeof window < `u` &&
    `AudioDecoder` in window &&
    `EncodedAudioChunk` in window,
  w = () =>
    typeof window < `u` &&
    `AudioEncoder` in window &&
    `AudioData` in window &&
    `AudioWorkletNode` in window &&
    !!navigator.mediaDevices?.getUserMedia;
async function T() {
  if (x.mic !== `idle`) return;
  if (!w()) {
    ((x.mic = `unsupported`),
      b.warn(`voice capture unavailable (needs a secure page and WebCodecs)`));
    return;
  }
  x.mic = `starting`;
  let e = x;
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
    if (x !== e) {
      t.getTracks().forEach((e) => e.stop());
      return;
    }
    let n = new AudioContext({
        sampleRate: a.sampleRate,
        latencyHint: `interactive`,
      }),
      i = URL.createObjectURL(new Blob([_], { type: `text/javascript` }));
    try {
      await n.audioWorklet.addModule(i);
    } finally {
      URL.revokeObjectURL(i);
    }
    if (x !== e) {
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
        if (x !== e || !e.transmitting) return;
        let n = new Uint8Array(t.byteLength);
        if ((t.copyTo(n), n.byteLength > a.maxFrameBytes)) return;
        let i = r(e.seq++, n);
        b.modules.get(`netcode`)?.sendRaw?.(i) &&
          (e.counters.sent++, (e.counters.bytesSent += i.byteLength));
      },
      error: (t) => {
        (e.counters.errors++, b.warn(`voice encoder: ${t?.message ?? t}`));
      },
    });
    (l.configure({
      codec: `opus`,
      sampleRate: a.sampleRate,
      numberOfChannels: 1,
      bitrate: a.bitrate,
      opus: { frameDuration: d },
    }),
      (s.port.onmessage = (t) => {
        if (x !== e) return;
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
          numberOfFrames: u,
          numberOfChannels: 1,
          timestamp: e.stampUs,
          data: t.data.frame,
        });
        e.stampUs += d;
        try {
          l.encode(n);
        } finally {
          n.close();
        }
      }),
      (x.capture = {
        ac: n,
        stream: t,
        source: o,
        node: s,
        sink: c,
        encoder: l,
      }),
      (x.mic = `ready`),
      D());
  } catch (t) {
    if (x !== e) return;
    ((x.mic =
      t?.name === `NotAllowedError` || t?.name === `SecurityError`
        ? `denied`
        : `unsupported`),
      b.warn(`voice capture failed: ${t?.name ?? ``} ${t?.message ?? t}`));
  }
}
function E() {
  let e = x?.capture;
  if (e) {
    x.capture = null;
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
function D() {
  let e =
    x.enabled &&
    !x.muted &&
    x.mic === `ready` &&
    !!b.modules.get(`netcode`)?.isConnected?.();
  if (e === x.transmitting) return;
  ((x.transmitting = e), e || (x.talking = !1));
  let t = x.capture;
  t &&
    (e && t.ac.state === `suspended` && t.ac.resume().catch(() => {}),
    t.node.port.postMessage(e));
}
async function O() {
  let e = x;
  if (!e || !e.enabled || e.muted || e.mic !== `idle`) return;
  let t = !1;
  try {
    let n = await navigator.permissions?.query({ name: `microphone` });
    ((t = n?.state === `granted`),
      n &&
        !e.permissionWatch &&
        ((e.permissionWatch = n),
        (n.onchange = () => {
          x === e &&
            n.state === `granted` &&
            (e.mic === `denied` || e.mic === `idle`) &&
            ((e.mic = `idle`), O());
        })));
  } catch {}
  x === e && e.mic === `idle` && (t ? T() : (e.awaitGesture = !0));
}
function k() {
  if (!x) return;
  x.awaitGesture &&
    x.enabled &&
    !x.muted &&
    x.mic === `idle` &&
    ((x.awaitGesture = !1), T());
  let e = x.capture?.ac;
  e && e.state === `suspended` && e.resume().catch(() => {});
}
function A(e) {
  ((x.muted = !!e),
    y(l, x.muted),
    !x.muted && x.mic === `idle` && ((x.awaitGesture = !1), T()),
    D());
}
function j() {
  if (x.bus) return x.bus;
  let e = b.modules.get(`audio`),
    t = e?.context,
    n = e?.busses?.master;
  if (!t || !n) return null;
  let r = t.createGain();
  return (
    (r.gain.value = x.enabled ? x.volume : 0),
    r.connect(n),
    (x.bus = r),
    (x.ac = t),
    r
  );
}
function M(e) {
  let t = j();
  if (!t || !C()) return null;
  let n = x.ac,
    r = x,
    i = n.createGain(),
    o = n.createBiquadFilter(),
    s = n.createPanner();
  ((o.type = `lowpass`),
    (o.frequency.value = 2e4),
    (o.Q.value = 0.5),
    (s.panningModel = `HRTF`),
    (s.distanceModel = `linear`),
    (s.refDistance = a.refDistance),
    (s.maxDistance = a.range),
    (s.rolloffFactor = 1),
    i.connect(o),
    o.connect(s),
    s.connect(t));
  let c = {
    entityId: e,
    gain: i,
    filter: o,
    panner: s,
    decoder: null,
    lastSeq: -1,
    stampUs: 0,
    playhead: 0,
    lastFrame: 0,
    occlusionAt: 0,
    placed: !1,
  };
  return (
    (c.decoder = new AudioDecoder({
      output: (t) => {
        try {
          x === r && r.speakers.get(e) === c && P(c, t);
        } finally {
          t.close();
        }
      },
      error: (t) => {
        (r.counters.errors++,
          b.warn(`voice decoder ${e}: ${t?.message ?? t}`),
          r.speakers.get(e) === c && N(c));
      },
    })),
    c.decoder.configure({
      codec: `opus`,
      sampleRate: a.sampleRate,
      numberOfChannels: 1,
    }),
    x.speakers.set(e, c),
    F(c, !0),
    c
  );
}
