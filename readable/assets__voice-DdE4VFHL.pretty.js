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
function F(e) {
  let t = P();
  if (!t || !T()) return null;
  let n = C.ac,
    r = C,
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
          C === r && r.speakers.get(e) === c && L(c, t);
        } finally {
          t.close();
        }
      },
      error: (t) => {
        (r.counters.errors++,
          S.warn(`voice decoder ${e}: ${t?.message ?? t}`),
          r.speakers.get(e) === c && I(c));
      },
    })),
    c.decoder.configure({
      codec: `opus`,
      sampleRate: a.sampleRate,
      numberOfChannels: 1,
    }),
    C.speakers.set(e, c),
    R(c, !0),
    c
  );
}
function I(e) {
  C.speakers.get(e.entityId) === e && C.speakers.delete(e.entityId);
  try {
    e.decoder.state !== `closed` && e.decoder.close();
  } catch {}
  try {
    (e.gain.disconnect(), e.filter.disconnect(), e.panner.disconnect());
  } catch {}
}
function L(e, t) {
  let n = C.ac,
    r = t.numberOfFrames;
  C.counters.decoded++;
  let i = n.currentTime;
  if ((e.playhead < i + 0.01 && (e.playhead = i + m), e.playhead > i + h)) {
    C.counters.late++;
    return;
  }
  let a = n.createBuffer(1, r, t.sampleRate);
  t.copyTo(a.getChannelData(0), { planeIndex: 0, format: `f32-planar` });
  let o = n.createBufferSource();
  ((o.buffer = a),
    o.connect(e.gain),
    (o.onended = () => {
      try {
        o.disconnect();
      } catch {}
    }),
    o.start(e.playhead),
    (e.playhead += r / t.sampleRate),
    C.counters.played++);
}
function R(e, r = !1) {
  let i = S.world.get(e.entityId);
  if (!i) return;
  let a = C.ac,
    o = e.panner,
    s = a.currentTime,
    c = i.pos[1] + 1.5 * t();
  r || !e.placed || !o.positionX
    ? (o.positionX
        ? ((o.positionX.value = i.pos[0]),
          (o.positionY.value = c),
          (o.positionZ.value = i.pos[2]))
        : o.setPosition(i.pos[0], c, i.pos[2]),
      (e.placed = !0))
    : (o.positionX.setTargetAtTime(i.pos[0], s, 0.03),
      o.positionY.setTargetAtTime(c, s, 0.03),
      o.positionZ.setTargetAtTime(i.pos[2], s, 0.03));
  let l = performance.now() / 1e3;
  if (l - e.occlusionAt < v) return;
  e.occlusionAt = l;
  let u = S.camera.position,
    d = n(S.world.map, [u.x, u.y, u.z], [i.pos[0], c, i.pos[2]]);
  (e.gain.gain.setTargetAtTime(d.gain, s, 0.08),
    e.filter.frequency.setTargetAtTime(d.cutoff, s, 0.08));
}
function z(e) {
  if (!C.enabled) return;
  let t = i(e);
  if (!t) return;
  C.counters.received++;
  let n = C.speakers.get(t.entityId) ?? F(t.entityId);
  if (!n || n.decoder.state !== `configured`) return;
  let r = n.lastSeq < 0 ? 1 : (t.seq - n.lastSeq) & 255 || 1;
  ((n.lastSeq = t.seq),
    (n.stampUs += r * p),
    (n.lastFrame = performance.now() / 1e3));
  try {
    n.decoder.decode(
      new EncodedAudioChunk({
        type: `key`,
        timestamp: n.stampUs,
        duration: p,
        data: t.frame,
      }),
    );
  } catch (e) {
    (C.counters.errors++,
      S.warn(`voice decode ${t.entityId}: ${e?.message ?? e}`));
  }
}
function B() {
  let e = performance.now() / 1e3,
    t = [];
  for (let n of C.speakers.values()) {
    if (e - n.lastFrame > _) continue;
    let r = ``,
      i = -1;
    for (let e of S.world.players.values())
      if (e.entityId === n.entityId) {
        ((r = e.name ?? ``), (i = e.team ?? -1));
        break;
      }
    t.push({ entityId: n.entityId, name: r, team: i });
  }
  return t;
}
function V() {
  let e = U.state(),
    t = JSON.stringify(e);
  t !== C.lastSignature &&
    ((C.lastSignature = t), S.events.emit(`voice:state`, e));
}
var H = (e) =>
    !!e.target?.closest?.(`input,textarea,select,[contenteditable="true"]`),
  U = {
    state() {
      return C
        ? {
            enabled: C.enabled,
            mode: C.mode ?? `off`,
            muted: C.muted,
            mic: C.mic,
            transmitting: C.transmitting,
            talking: C.talking,
            key: C.bind,
            volume: C.volume,
            speakers: B(),
          }
        : null;
    },
    setEnabled(e) {
      if (C) {
        if (
          ((C.enabled = !!e),
          x(o, C.enabled),
          C.bus && (C.bus.gain.value = C.enabled ? C.volume : 0),
          C.enabled)
        )
          C.mode && C.mode !== `off` && C.mic === `idle` && D();
        else {
          for (let e of [...C.speakers.values()]) I(e);
          (O(),
            (C.mic === `ready` || C.mic === `starting`) && (C.mic = `idle`));
        }
        (k(), V());
      }
    },
    setVolume(e) {
      C &&
        ((C.volume = Math.max(0, Math.min(2, Number(e) || 0))),
        x(s, C.volume),
        C.bus && C.enabled && (C.bus.gain.value = C.volume),
        V());
    },
    setKey(e) {
      C && e && ((C.bind = String(e)), x(c, C.bind), V());
    },
    setMode(e) {
      C && (N(e), V());
    },
    setMuted(e) {
      C && (M(e), V());
    },
    stats() {
      return C
        ? {
            ...C.counters,
            speakers: C.speakers.size,
            mode: C.mode,
            mic: C.mic,
            muted: C.muted,
            transmitting: C.transmitting,
            talking: C.talking,
          }
        : null;
    },
  },
  W = {
    name: `voice`,
    deps: [`netcode`, `audio`],
    api: U,
    async init(e) {
      if (((S = e), (C = w()), e.config.showcase)) return;
      let t = (e) => {
          (j(),
            !(e.code !== C.bind || e.repeat || H(e) || !C.enabled) &&
              (e.preventDefault(),
              C.mode === `open`
                ? M(!C.muted)
                : (C.mode !== `ptt` && N(`ptt`), (C.pttHeld = !0), k()),
              V()));
        },
        n = (e) => {
          e.code === C.bind && C.pttHeld && ((C.pttHeld = !1), k(), V());
        },
        r = () => {
          C.pttHeld && ((C.pttHeld = !1), k(), V());
        };
      (window.addEventListener(`keydown`, t),
        window.addEventListener(`keyup`, n),
        window.addEventListener(`blur`, r),
        window.addEventListener(`pointerdown`, j, !0),
        C.offs.push(() => {
          (window.removeEventListener(`keydown`, t),
            window.removeEventListener(`keyup`, n),
            window.removeEventListener(`blur`, r),
            window.removeEventListener(`pointerdown`, j, !0));
        }),
        A(),
        C.offs.push(e.events.on(`net:voice`, z)),
        C.offs.push(
          e.events.on(`net:disconnected`, () => {
            for (let e of [...C.speakers.values()]) I(e);
            k();
          }),
        ));
    },
    update() {
      if (!C) return;
      k();
      let e = performance.now() / 1e3;
      for (let t of [...C.speakers.values()]) e - t.lastFrame > g ? I(t) : R(t);
      V();
    },
    dispose() {
      if (C) {
        for (let e of C.offs)
          try {
            e?.();
          } catch {}
        for (let e of [...C.speakers.values()]) I(e);
        (O(), C.permissionWatch && (C.permissionWatch.onchange = null));
        try {
          C.bus?.disconnect();
        } catch {}
        ((C = null), (S = null));
      }
    },
  };
export { W as default };
//# sourceMappingURL=voice-DdE4VFHL.js.map
