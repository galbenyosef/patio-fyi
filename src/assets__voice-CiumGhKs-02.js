// assets__voice-CiumGhKs 02 — speakers
// Lines 352-563 of readable/assets__voice-CiumGhKs.pretty.js (statement-aligned).
function N(e) {
  x.speakers.get(e.entityId) === e && x.speakers.delete(e.entityId);
  try {
    e.decoder.state !== `closed` && e.decoder.close();
  } catch {}
  try {
    (e.gain.disconnect(), e.filter.disconnect(), e.panner.disconnect());
  } catch {}
}
function P(e, t) {
  let n = x.ac,
    r = t.numberOfFrames;
  x.counters.decoded++;
  let i = n.currentTime;
  if ((e.playhead < i + 0.01 && (e.playhead = i + f), e.playhead > i + p)) {
    x.counters.late++;
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
    x.counters.played++);
}
function F(e, r = !1) {
  let i = b.world.get(e.entityId);
  if (!i) return;
  let a = x.ac,
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
  if (l - e.occlusionAt < g) return;
  e.occlusionAt = l;
  let u = b.camera.position,
    d = n(b.world.map, [u.x, u.y, u.z], [i.pos[0], c, i.pos[2]]);
  (e.gain.gain.setTargetAtTime(d.gain, s, 0.08),
    e.filter.frequency.setTargetAtTime(d.cutoff, s, 0.08));
}
function I(e) {
  if (!x.enabled) return;
  let t = i(e);
  if (!t) return;
  x.counters.received++;
  let n = x.speakers.get(t.entityId) ?? M(t.entityId);
  if (!n || n.decoder.state !== `configured`) return;
  let r = n.lastSeq < 0 ? 1 : (t.seq - n.lastSeq) & 255 || 1;
  ((n.lastSeq = t.seq),
    (n.stampUs += r * d),
    (n.lastFrame = performance.now() / 1e3));
  try {
    n.decoder.decode(
      new EncodedAudioChunk({
        type: `key`,
        timestamp: n.stampUs,
        duration: d,
        data: t.frame,
      }),
    );
  } catch (e) {
    (x.counters.errors++,
      b.warn(`voice decode ${t.entityId}: ${e?.message ?? e}`));
  }
}
function L() {
  let e = performance.now() / 1e3,
    t = [];
  for (let n of x.speakers.values()) {
    if (e - n.lastFrame > h) continue;
    let r = ``,
      i = -1;
    for (let e of b.world.players.values())
      if (e.entityId === n.entityId) {
        ((r = e.name ?? ``), (i = e.team ?? -1));
        break;
      }
    t.push({ entityId: n.entityId, name: r, team: i });
  }
  return t;
}
function R() {
  let e = B.state(),
    t = JSON.stringify(e);
  t !== x.lastSignature &&
    ((x.lastSignature = t), b.events.emit(`voice:state`, e));
}
var z = (e) =>
    !!e.target?.closest?.(`input,textarea,select,[contenteditable="true"]`),
  B = {
    state() {
      return x
        ? {
            enabled: x.enabled,
            muted: x.muted,
            mic: x.mic,
            transmitting: x.transmitting,
            talking: x.talking,
            key: x.bind,
            volume: x.volume,
            speakers: L(),
          }
        : null;
    },
    setEnabled(e) {
      if (x) {
        if (
          ((x.enabled = !!e),
          y(o, x.enabled),
          x.bus && (x.bus.gain.value = x.enabled ? x.volume : 0),
          x.enabled)
        )
          !x.muted && x.mic === `idle` && T();
        else {
          for (let e of [...x.speakers.values()]) N(e);
          (E(),
            (x.mic === `ready` || x.mic === `starting`) && (x.mic = `idle`));
        }
        (D(), R());
      }
    },
    setVolume(e) {
      x &&
        ((x.volume = Math.max(0, Math.min(2, Number(e) || 0))),
        y(s, x.volume),
        x.bus && x.enabled && (x.bus.gain.value = x.volume),
        R());
    },
    setKey(e) {
      x && e && ((x.bind = String(e)), y(c, x.bind), R());
    },
    setMuted(e) {
      x && (A(e), R());
    },
    stats() {
      return x
        ? {
            ...x.counters,
            speakers: x.speakers.size,
            mic: x.mic,
            muted: x.muted,
            transmitting: x.transmitting,
            talking: x.talking,
          }
        : null;
    },
  },
  V = {
    name: `voice`,
    deps: [`netcode`, `audio`],
    api: B,
    async init(e) {
      if (((b = e), (x = S()), e.config.showcase)) return;
      let t = (e) => {
        (k(),
          !(e.code !== x.bind || e.repeat || z(e) || !x.enabled) &&
            (e.preventDefault(), A(!x.muted), R()));
      };
      (window.addEventListener(`keydown`, t),
        window.addEventListener(`pointerdown`, k, !0),
        x.offs.push(() => {
          (window.removeEventListener(`keydown`, t),
            window.removeEventListener(`pointerdown`, k, !0));
        }),
        O(),
        x.offs.push(e.events.on(`net:voice`, I)),
        x.offs.push(
          e.events.on(`net:disconnected`, () => {
            for (let e of [...x.speakers.values()]) N(e);
            D();
          }),
        ));
    },
    update() {
      if (!x) return;
      D();
      let e = performance.now() / 1e3;
      for (let t of [...x.speakers.values()]) e - t.lastFrame > m ? N(t) : F(t);
      R();
    },
    dispose() {
      if (x) {
        for (let e of x.offs)
          try {
            e?.();
          } catch {}
        for (let e of [...x.speakers.values()]) N(e);
        (E(), x.permissionWatch && (x.permissionWatch.onchange = null));
        try {
          x.bus?.disconnect();
        } catch {}
        ((x = null), (b = null));
      }
    },
  };
