// assets__voice-DdE4VFHL 02 — speakers
// Lines 321-608 of readable/assets__voice-DdE4VFHL.pretty.js (statement-aligned).
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
