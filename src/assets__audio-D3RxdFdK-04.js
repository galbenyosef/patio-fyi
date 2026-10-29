// assets__audio-D3RxdFdK 04 — gain
// Lines 652-1271 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
var Oe = 0.025,
  ke = 0.1,
  Ae = 48,
  je = 8,
  Me = 6,
  Ne = class {
    constructor(e, t) {
      let n = e.ac;
      ((this.index = t),
        (this.input = n.createGain()),
        (this.filter = n.createBiquadFilter()),
        (this.filter.type = `lowpass`),
        (this.filter.Q.value = 0.7),
        (this.occlusion = n.createGain()),
        (this.panner = n.createPanner()),
        (this.panner.panningModel = `equalpower`),
        (this.panner.distanceModel = `linear`),
        (this.panner.rolloffFactor = 0),
        (this.panner.refDistance = 1),
        (this.panner.maxDistance = 1e5),
        (this.busy = !1),
        (this.pri = 0),
        (this.end = 0),
        (this.start = 0),
        (this.touch = 0),
        (this.id = null),
        (this.pos = null),
        (this.sources = []),
        (this.handle = null),
        (this.positional = !1),
        (this.bus = null),
        (this.serial = 0));
    }
    route(e, t) {
      try {
        this.input.disconnect();
      } catch {}
      try {
        this.panner.disconnect();
      } catch {}
      try {
        (this.filter.disconnect(), this.occlusion.disconnect());
      } catch {}
      (e
        ? (this.input.connect(this.filter),
          this.filter.connect(this.occlusion),
          this.occlusion.connect(this.panner),
          this.panner.connect(t))
        : this.input.connect(t),
        (this.positional = e),
        (this.bus = t));
    }
    place(e) {
      let t = this.panner;
      t.positionX
        ? ((t.positionX.value = e[0]),
          (t.positionY.value = e[1]),
          (t.positionZ.value = e[2]))
        : t.setPosition(e[0], e[1], e[2]);
    }
    kill(e) {
      let t = this.input.gain;
      try {
        (t.cancelAndHoldAtTime
          ? t.cancelAndHoldAtTime(e)
          : (t.cancelScheduledValues(e), t.setValueAtTime(t.value, e)),
          t.setTargetAtTime(0, e, 0.001),
          t.setValueAtTime(0, e + 0.006));
      } catch {}
      for (let t of this.sources)
        try {
          t.stop(e + 0.007);
        } catch {}
      ((this.sources.length = 0),
        (this.busy = !1),
        (this.handle = null),
        (this.end = 0),
        (this.id = null),
        (this.pos = null));
    }
    free(e) {
      this.kill(e);
    }
  },
  Pe = class {
    constructor(e, { ownsContext: t = !0 } = {}) {
      ((this.ctx = e),
        (this.ownsContext = t),
        (this.disposed = !1),
        (this.ok = !1),
        (this.ac = null),
        (this.listener = null),
        (this.analyser = null),
        (this.compressor = null),
        (this.busses = {}),
        (this.voices = []),
        (this.rng = e.rng.fork(`audio`)),
        (this.rand = () => this.rng.next()),
        (this.recent = []),
        (this.played = 0),
        (this.stolen = 0),
        (this.culled = 0),
        (this.health = `none`),
        (this._rate = { t0: 0, n: 0 }),
        (this._lastCt = -1),
        (this._lastAdvance = 0),
        (this._lastResumeTry = 0),
        (this._warned = new Set()),
        (this._tmp = new c()),
        (this._gestureOff = null),
        (this.offlineBuffer = null),
        (this.offlineRate = 0),
        (this._offlinePromise = null),
        (this.listenerOverride = null),
        (this.movementSamples = new G()),
        (this.voiceSamples = new ye()),
        (this.sfxSamples = new xe()),
        (this.bakedVoices = new Te()));
      try {
        this._build();
      } catch (t) {
        (e.warn(`audio unavailable:`, t?.message ?? t), (this.ok = !1));
      }
    }
    _build() {
      let e = window.AudioContext || window.webkitAudioContext;
      if (!e) {
        this.ctx.warn(`no AudioContext in this browser`);
        return;
      }
      if (this.ownsContext)
        try {
          y.setContext(new e({ latencyHint: Oe }));
        } catch {}
      ((this.listener = new t()), (this.ac = this.listener.context));
      let n = this.ac,
        r = n.createGain();
      r.gain.value = 0.85;
      let i = n.createGain();
      i.gain.value = 1;
      let a = n.createGain();
      a.gain.value = 0.7;
      let o = n.createGain();
      o.gain.value = 0.8;
      let s = n.createDynamicsCompressor();
      ((s.threshold.value = -10),
        (s.knee.value = 16),
        (s.ratio.value = 6),
        (s.attack.value = 0.002),
        (s.release.value = 0.14));
      let c = n.createAnalyser();
      ((c.fftSize = 2048), (c.smoothingTimeConstant = 0.55));
      let l = n.createBiquadFilter();
      ((l.type = `lowpass`), (l.frequency.value = 2e4), (l.Q.value = 0.5));
      let u = n.createGain();
      u.gain.value = 1;
      let d = n.createGain();
      ((d.gain.value = 1),
        i.connect(l),
        a.connect(l),
        l.connect(u),
        u.connect(d),
        d.connect(r),
        o.connect(r),
        (this.muffle = l),
        (this.muffleGain = u),
        (this.presence = d));
      let f = de(n);
      ((this.outputLimiter = f),
        r.connect(s),
        s.connect(f.input),
        f.connect(c),
        c.connect(this.listener.getInput()),
        (this.busses = { master: r, sfx: i, ambience: a, ui: o }),
        (this.analyser = c),
        (this.compressor = s),
        this.ctx.camera.add(this.listener));
      for (let e = 0; e < 48; e++) this.voices.push(new Ne(this, e));
      ((this._td = new Float32Array(c.fftSize)),
        (this._lastAdvance = performance.now()),
        (this.ok = !0),
        (this.health = n.state),
        this._installGestureResume());
    }
    _installGestureResume() {
      try {
        navigator.audioSession && (navigator.audioSession.type = `playback`);
      } catch {}
      let e = () => {
          this.resume();
        },
        t = [`pointerdown`, `keydown`, `touchstart`, `click`];
      for (let n of t) window.addEventListener(n, e, { passive: !0 });
      ((this._gestureOff = () => {
        for (let n of t) window.removeEventListener(n, e);
      }),
        this.resume());
    }
    resume() {
      let e = this.ac;
      if (!e) return Promise.resolve(!1);
      if (e.state === `running`) return Promise.resolve(!0);
      try {
        let t = e.resume();
        return t && typeof t.then == `function`
          ? t.then(() => e.state === `running`).catch(() => !1)
          : Promise.resolve(e.state === `running`);
      } catch {
        return Promise.resolve(!1);
      }
    }
    listenerPosition(e = [0, 0, 0]) {
      if (this.listenerOverride)
        return (
          (e[0] = this.listenerOverride[0]),
          (e[1] = this.listenerOverride[1]),
          (e[2] = this.listenerOverride[2]),
          e
        );
      let t = this.ctx.camera.getWorldPosition(this._tmp);
      return ((e[0] = t.x), (e[1] = t.y), (e[2] = t.z), e);
    }
    distanceTo(e) {
      let t = this.listenerPosition((this._lpos ??= [0, 0, 0])),
        n = e[0] - t[0],
        r = e[1] - t[1],
        i = e[2] - t[2];
      return Math.sqrt(n * n + r * r + i * i);
    }
    ids() {
      return B.slice();
    }
    has(e) {
      return !!R[e];
    }
    setBus(e, t) {
      let n = this.busses[e];
      if (!n) return !1;
      let r = z(+t || 0, 0, 2);
      try {
        n.gain.setTargetAtTime(r, this.ac.currentTime, 0.03);
      } catch {
        n.gain.value = r;
      }
      return !0;
    }
    getBus(e) {
      return this.busses[e]?.gain.value ?? 0;
    }
    setMuffle(e, t = 0.3) {
      if (!this.muffle) return !1;
      let n = z(+e || 0, 0, 1),
        r = this.ac.currentTime,
        i = Math.max(0.005, t / 3);
      try {
        (this.muffle.frequency.cancelScheduledValues(r),
          this.muffleGain.gain.cancelScheduledValues(r),
          this.muffle.frequency.setTargetAtTime(2e4 * (420 / 2e4) ** n, r, i),
          this.muffleGain.gain.setTargetAtTime(1 - 0.5 * n, r, i));
      } catch {
        return !1;
      }
      return !0;
    }
    setPresent(e, t = 0.3) {
      if (!this.presence) return !1;
      let n = this.ac.currentTime;
      try {
        (this.presence.gain.cancelScheduledValues(n),
          this.presence.gain.setTargetAtTime(+!!e, n, Math.max(0.005, t / 3)));
      } catch {
        return !1;
      }
      return !0;
    }
    play(e, t = {}) {
      if (!this.ok) return null;
      try {
        let n = R[e];
        if (!n)
          return (
            this._warned.has(e) ||
              (this._warned.add(e), this.ctx.warn(`unknown sound id '${e}'`)),
            null
          );
        let r = this.ac,
          i = r.currentTime,
          a = t.pos && t.pos.length >= 3 ? t.pos : null,
          o = !!a && n.bus !== `ui` && !t.local,
          s = 0;
        if (
          (t.dist == null
            ? o && (s = this.distanceTo(a))
            : (s = Math.max(0, +t.dist || 0)),
          s > (n.max ?? 1 / 0) ||
            (o &&
              (i - this._rate.t0 > ke &&
                ((this._rate.t0 = i), (this._rate.n = 0)),
              ++this._rate.n > Ae && (t.priority ?? n.pri) < 8)))
        )
          return (this.culled++, null);
        let c = U(n, s),
          l = z((t.volume ?? 1) * c * (n.level ?? 1), 0, 4);
        if (l < 0.003) return (this.culled++, null);
        let u = t.priority ?? n.pri,
          d = o ? u * (0.45 + 0.55 * Math.min(1, c * 3)) : u,
          f = e.startsWith(`footstep`) || e === `land`,
          p = this._acquire(d, i, o || f ? d : Math.max(d, je));
        if (!p) return (this.culled++, null);
        let m = this.busses[t.bus ?? n.bus] ?? this.busses.sfx;
        (p.route(o, m),
          o &&
            ((p.panner.panningModel = n.hrtf ? `HRTF` : `equalpower`),
            p.place(a)));
        let h =
          o && !t.open
            ? P(this.ctx.world.map, this.listenerPosition(), a)
            : { blocked: !1, gain: 1, cutoff: 2e4 };
        ((p.open = !!t.open),
          (p.air = o && !!n.air),
          p.filter.frequency.setValueAtTime(
            p.air ? Math.min(h.cutoff, pe(s)) : h.cutoff,
            i,
          ),
          p.occlusion.gain.setValueAtTime(h.gain, i));
        let g = i + 0.012 + Math.max(0, +t.delay || 0),
          _ = p.input.gain;
        try {
          _.setValueAtTime(l, g - 0.004);
        } catch {
          _.value = l;
        }
        let v = ++p.serial;
        p.handle = { setRpm: null };
        let y = {
            d: s,
            rand: this.rand,
            pitch: t.pitch ?? 1,
            volume: l,
            surface: t.surface,
            wp: t.wp,
            rpm: t.rpm,
            size: t.size,
            handle: p.handle,
            layerScale: t.layerScale,
            duration: t.duration,
          },
          b;
        H((e) => p.sources.push(e));
        let x = (e) => p.sources.push(e);
        this.bakedVoices.want(e, n, r.sampleRate);
        let S = this.bakedVoices.has(e)
          ? {
              ...n,
              build: (t, r, i, a) =>
                this.bakedVoices.build(e, t, r, i, a, x) ?? n.build(t, r, i, a),
            }
          : n;
        try {
          b =
            this.movementSamples.build(e, r, p.input, g, y, x) ??
            this.voiceSamples.build(e, r, p.input, g, y, x) ??
            this.sfxSamples.build(e, r, p.input, g, y, x, S) ??
            S.build(r, p.input, g, y);
        } finally {
          H(null);
        }
        ((p.busy = !0),
          (p.id = e),
          (p.pri = d),
          (p.end = b ?? g + 1),
          (p.start = i),
          (p.touch = i),
          (p.pos = a ? [a[0], a[1], a[2]] : null),
          this.played++,
          this._record(e, a, s, n.bus, t.kind),
          Object.assign(this.recent.at(-1), {
            surface: t.surface,
            sample: y.sample ?? null,
            occluded: h.blocked,
            pathGain: h.gain,
            cutoff: h.cutoff,
          }));
        let C = this,
          w = () => {
            p.touch = C.ac.currentTime;
          };
        return {
          id: e,
          voice: p.index,
          stop() {
            p.serial === v && p.busy && p.kill(C.ac.currentTime);
          },
          setRpm(e) {
            p.serial === v &&
              p.handle?.setRpm &&
              (w(), p.handle.setRpm(z(e, 0, 1), C.ac.currentTime));
          },
          setParam(e, t) {
            p.serial === v &&
              p.handle?.setParam &&
              (w(), p.handle.setParam(e, t, C.ac.currentTime));
          },
          setVolume(e) {
            if (C.ok && p.serial === v && p.busy) {
              w();
              try {
                p.input.gain.setTargetAtTime(
                  z(e, 0, 4),
                  C.ac.currentTime,
                  0.05,
                );
              } catch {}
            }
          },
          setPosition(e) {
            if (C.ok && p.serial === v && p.busy && p.positional) {
              if ((w(), p.place(e), (p.pos = e.slice()), p.open)) return;
              let t = P(C.ctx.world.map, C.listenerPosition(), e);
              (p.filter.frequency.setTargetAtTime(
                p.air ? Math.min(t.cutoff, pe(C.distanceTo(e))) : t.cutoff,
                C.ac.currentTime,
                0.06,
              ),
                p.occlusion.gain.setTargetAtTime(
                  t.gain,
                  C.ac.currentTime,
                  0.06,
                ));
            }
          },
          alive() {
            return p.serial === v && p.busy;
          },
        };
      } catch (t) {
        return (
          this._warned.has(`err:` + e) ||
            (this._warned.add(`err:` + e),
            this.ctx.warn(`play('${e}') failed:`, t?.message ?? t)),
          null
        );
      }
    }
    _acquire(e, t, n = e) {
      let r = null;
      for (let e of this.voices) {
        if (!e.busy) return e;
        if (e.end <= t) return (e.free(t), e);
      }
      for (let t of this.voices)
        t.pri > n ||
          (t.end === 1 / 0 && t.pri >= e) ||
          ((!r || t.pri < r.pri || (t.pri === r.pri && t.end < r.end)) &&
            (r = t));
      return r ? (r.kill(t), this.stolen++, r) : null;
    }
    _record(e, t, n, r, i) {
      let a = this.recent;
      (a.push({
        id: e,
        t: performance.now() / 1e3,
        pos: t ? [t[0], t[1], t[2]] : null,
        d: n,
        bus: r,
        kind: i ?? Fe(e),
      }),
        a.length > 96 && a.splice(0, a.length - 96));
    }
    activeVoices() {
      let e = this.ac?.currentTime ?? 0,
        t = 0;
      for (let n of this.voices) n.busy && n.end > e && t++;
      return t;
    }
    level() {
      if (!this.ok) return 0;
      let e = this.analyser,
        t = this._td;
      e.getFloatTimeDomainData(t);
      let n = 0;
      for (let e = 0; e < t.length; e++) n += t[e] * t[e];
      return Math.sqrt(n / t.length);
    }
    update() {
      if (!this.ok) return;
      let e = this.ac,
        t = e.currentTime;
      for (let e of this.voices)
        e.busy &&
          (e.end <= t
            ? e.free(t)
            : e.end === 1 / 0 && t - e.touch > Me && e.kill(t));
      let n = performance.now();
      e.state === `running`
        ? t === this._lastCt
          ? n - this._lastAdvance > 800 && (this.health = `stalled`)
          : ((this._lastCt = t),
            (this._lastAdvance = n),
            (this.health = `running`))
        : ((this.health = e.state),
          e.state === `suspended` &&
            n - this._lastResumeTry > 1e3 &&
            ((this._lastResumeTry = n), this.resume()));
    }
    renderOffline(e = 3.2, t = 22050) {
      if (this._offlinePromise) return this._offlinePromise;
      let n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      return n
        ? ((this._offlinePromise = (async () => {
            let r = new n(1, Math.ceil(e * t), t),
              i = r.createGain();
            i.gain.value = 0.8;
            let a = r.createDynamicsCompressor();
            ((a.threshold.value = -10),
              (a.ratio.value = 6),
              i.connect(a),
              a.connect(r.destination));
            let o = this.ctx.rng.fork(`audio-offline`),
              s = () => o.next(),
              c = [
                [`gun_ar`, 0.05, { d: 0 }],
                [`gun_ar`, 0.14, { d: 0 }],
                [`gun_ar`, 0.23, { d: 0 }],
                [`impact_rock`, 0.3, {}],
                [`footstep_grass`, 0.55, {}],
                [`footstep_rock`, 0.85, {}],
                [`footstep_water`, 1.1, {}],
                [`reload`, 1.2, {}],
                [`gun_sniper`, 1.55, { d: 140 }],
                [`whizz`, 1.6, {}],
                [`explosion`, 1.95, { d: 45 }],
                [`hit_confirm`, 2.4, {}],
                [`kill_headshot`, 2.6, {}],
                [`ui_tick`, 3, {}],
              ];
            H(null);
            for (let [e, t, n] of c) {
              let a = R[e];
              if (!a) continue;
              let o = r.createGain();
              ((o.gain.value = 0.7 * (a.level ?? 1)), o.connect(i));
              try {
                a.build(r, o, t, {
                  d: 0,
                  rand: s,
                  pitch: 1,
                  volume: 0.7,
                  ...n,
                });
              } catch {}
            }
            let l = await r.startRendering();
            return this.disposed
              ? null
              : ((this.offlineBuffer = l.getChannelData(0)),
                (this.offlineRate = t),
                this.offlineBuffer);
          })().catch(() => null)),
          this._offlinePromise)
        : Promise.resolve(null);
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0),
          this.movementSamples.dispose(),
          this.voiceSamples.dispose(),
          this.sfxSamples.dispose(),
          this.bakedVoices.dispose());
        try {
          this._gestureOff?.();
        } catch {}
        for (let e of this.voices)
          try {
            e.kill(this.ac.currentTime);
          } catch {}
        for (let e of this.voices)
          for (let t of [e.input, e.filter, e.occlusion, e.panner])
            try {
              t.disconnect();
            } catch {}
        try {
          this.listener?.removeFromParent();
        } catch {}
        for (let e of [
          ...Object.values(this.busses),
          this.muffle,
          this.muffleGain,
          this.compressor,
          this.outputLimiter,
          this.analyser,
        ])
          try {
            e?.disconnect();
          } catch {}
        try {
          this.listener?.getInput().disconnect();
        } catch {}
        if (this.ownsContext && this.ac) {
          y.getContext() === this.ac && y.setContext(void 0);
          try {
            this.ac.close()?.catch?.(() => {});
          } catch {}
        }
        ((this.ok = !1),
          (this.health = `closed`),
          (this.ctx = null),
          (this.ac = null),
          (this.listener = null),
          (this.voices.length = 0),
          (this.recent.length = 0),
          (this.busses = {}),
          (this.analyser = this.compressor = this.outputLimiter = null),
          (this.offlineBuffer =
            this._offlinePromise =
            this._gestureOff =
              null));
      }
    }
  };
