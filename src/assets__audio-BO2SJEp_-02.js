// assets__audio-BO2SJEp_ 02 — gain
// Lines 244-944 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
var ge = class {
    constructor() {
      ((this.banks = new Map()),
        (this.last = new Map()),
        (this.disposed = !1),
        (this.abort = new AbortController()),
        (this.failures = []),
        (this.loading = null));
    }
    async load(e) {
      return ((this.loading ||= this._load(e)), this.loading);
    }
    async _load(e) {
      let t = this.abort.signal,
        n = setTimeout(() => this.abort.abort(), 18e4);
      try {
        let n = await Promise.all(
            W.map(async (e) => {
              let n = await fetch(he + e, { signal: t, cache: `no-store` });
              if (!n.ok) throw Error(`${e} HTTP ${n.status}`);
              return (await n.json()).voices ?? {};
            }),
          ),
          r = {};
        for (let e of n) for (let [t, n] of Object.entries(e)) r[t] ??= n;
        let i = await G(
          Object.entries(r).flatMap(([e, t]) =>
            t.map((t, n) => ({ key: e, entry: t, index: n })),
          ),
          async ({ key: n, entry: r, index: i }) => ({
            key: n,
            index: i,
            buffer: await e.decodeAudioData(await fe(he + r.file, t)),
            file: r.file,
            loop: !!r.loop,
          }),
        );
        if (this.disposed) return;
        let a = new Map();
        for (let e of i) {
          if (e.status === `rejected`) {
            this.failures.push(String(e.reason));
            continue;
          }
          let { key: t, index: n, ...r } = e.value;
          (a.has(t) || a.set(t, []), (a.get(t)[n] = r));
        }
        for (let [e, t] of a) {
          let n = t.filter(Boolean);
          n.length && this.banks.set(e, n);
        }
      } catch (e) {
        this.disposed || this.failures.push(String(e));
      } finally {
        clearTimeout(n);
      }
    }
    has(e) {
      return this.banks.has(e);
    }
    build(e, t, n, r, i, a) {
      if (this.disposed || !e.startsWith(`voice_`)) return;
      let o = e.slice(6),
        s = this.banks.get(o);
      if (!s?.length) return;
      let c = Math.min(s.length - 1, Math.floor((i.rand?.() ?? 0) * s.length));
      (s.length > 1 && c === this.last.get(o) && (c = (c + 1) % s.length),
        this.last.set(o, c));
      let { buffer: l, file: u, loop: d } = s[c],
        f = t.createBufferSource();
      f.buffer = l;
      let p = Math.max(0.8, Math.min(1.2, i.pitch ?? 1));
      return (
        f.playbackRate.setValueAtTime(p, r),
        f.connect(n),
        a(f),
        (i.sample = u),
        d
          ? ((f.loop = !0), f.start(r, (i.rand?.() ?? 0) * l.duration), 1 / 0)
          : (f.start(r), r + l.duration / p)
      );
    }
    stats() {
      return {
        banks: Object.fromEntries(
          [...this.banks].map(([e, t]) => [e, t.length]),
        ),
        failures: this.failures.slice(),
      };
    }
    dispose() {
      ((this.disposed = !0),
        this.abort.abort(),
        this.banks.clear(),
        this.last.clear());
    }
  },
  _e = 0.1,
  ve = 48,
  ye = 8,
  be = 6,
  xe = class {
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
  Se = class {
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
        (this._tmp = new k()),
        (this._gestureOff = null),
        (this.offlineBuffer = null),
        (this.offlineRate = 0),
        (this._offlinePromise = null),
        (this.listenerOverride = null),
        (this.movementSamples = new me()),
        (this.voiceSamples = new ge()));
      try {
        this._build();
      } catch (t) {
        (e.warn(`audio unavailable:`, t?.message ?? t), (this.ok = !1));
      }
    }
    _build() {
      if (!(window.AudioContext || window.webkitAudioContext)) {
        this.ctx.warn(`no AudioContext in this browser`);
        return;
      }
      ((this.listener = new t()), (this.ac = this.listener.context));
      let e = this.ac,
        n = e.createGain();
      n.gain.value = 0.85;
      let r = e.createGain();
      r.gain.value = 1;
      let i = e.createGain();
      i.gain.value = 0.7;
      let a = e.createGain();
      a.gain.value = 0.8;
      let o = e.createDynamicsCompressor();
      ((o.threshold.value = -10),
        (o.knee.value = 16),
        (o.ratio.value = 6),
        (o.attack.value = 0.002),
        (o.release.value = 0.14));
      let s = e.createAnalyser();
      ((s.fftSize = 2048), (s.smoothingTimeConstant = 0.55));
      let c = e.createBiquadFilter();
      ((c.type = `lowpass`), (c.frequency.value = 2e4), (c.Q.value = 0.5));
      let l = e.createGain();
      l.gain.value = 1;
      let u = e.createGain();
      ((u.gain.value = 1),
        r.connect(c),
        i.connect(c),
        c.connect(l),
        l.connect(u),
        u.connect(n),
        a.connect(n),
        (this.muffle = c),
        (this.muffleGain = l),
        (this.presence = u));
      let d = ce(e);
      ((this.outputLimiter = d),
        n.connect(o),
        o.connect(d),
        d.connect(s),
        s.connect(this.listener.getInput()),
        (this.busses = { master: n, sfx: r, ambience: i, ui: a }),
        (this.analyser = s),
        (this.compressor = o),
        this.ctx.camera.add(this.listener));
      for (let e = 0; e < 48; e++) this.voices.push(new xe(this, e));
      ((this._td = new Float32Array(s.fftSize)),
        (this._lastAdvance = performance.now()),
        (this.ok = !0),
        (this.health = e.state),
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
      return z.slice();
    }
    has(e) {
      return !!L[e];
    }
    setBus(e, t) {
      let n = this.busses[e];
      if (!n) return !1;
      let r = R(+t || 0, 0, 2);
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
      let n = R(+e || 0, 0, 1),
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
        let n = L[e];
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
              (i - this._rate.t0 > _e &&
                ((this._rate.t0 = i), (this._rate.n = 0)),
              ++this._rate.n > ve && (t.priority ?? n.pri) < 8)))
        )
          return (this.culled++, null);
        let c = ue(n, s),
          l = R((t.volume ?? 1) * c * (n.level ?? 1), 0, 4);
        if (l < 0.003) return (this.culled++, null);
        let u = t.priority ?? n.pri,
          d = o ? u * (0.45 + 0.55 * Math.min(1, c * 3)) : u,
          f = e.startsWith(`footstep`) || e === `land`,
          p = this._acquire(d, i, o || f ? d : Math.max(d, ye));
        if (!p) return (this.culled++, null);
        let m = this.busses[t.bus ?? n.bus] ?? this.busses.sfx;
        (p.route(o, m),
          o &&
            ((p.panner.panningModel = n.hrtf ? `HRTF` : `equalpower`),
            p.place(a)));
        let h =
          o && !t.open
            ? M(this.ctx.world.map, this.listenerPosition(), a)
            : { blocked: !1, gain: 1, cutoff: 2e4 };
        ((p.open = !!t.open),
          (p.air = o && !!n.air),
          p.filter.frequency.setValueAtTime(
            p.air ? Math.min(h.cutoff, de(s)) : h.cutoff,
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
        I((e) => p.sources.push(e));
        try {
          b =
            this.movementSamples.build(e, r, p.input, g, y, (e) =>
              p.sources.push(e),
            ) ??
            this.voiceSamples.build(e, r, p.input, g, y, (e) =>
              p.sources.push(e),
            ) ??
            n.build(r, p.input, g, y);
        } finally {
          I(null);
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
        let x = this,
          S = () => {
            p.touch = x.ac.currentTime;
          };
        return {
          id: e,
          voice: p.index,
          stop() {
            p.serial === v && p.busy && p.kill(x.ac.currentTime);
          },
          setRpm(e) {
            p.serial === v &&
              p.handle?.setRpm &&
              (S(), p.handle.setRpm(R(e, 0, 1), x.ac.currentTime));
          },
          setParam(e, t) {
            p.serial === v &&
              p.handle?.setParam &&
              (S(), p.handle.setParam(e, t, x.ac.currentTime));
          },
          setVolume(e) {
            if (x.ok && p.serial === v && p.busy) {
              S();
              try {
                p.input.gain.setTargetAtTime(
                  R(e, 0, 4),
                  x.ac.currentTime,
                  0.05,
                );
              } catch {}
            }
          },
          setPosition(e) {
            if (x.ok && p.serial === v && p.busy && p.positional) {
              if ((S(), p.place(e), (p.pos = e.slice()), p.open)) return;
              let t = M(x.ctx.world.map, x.listenerPosition(), e);
              (p.filter.frequency.setTargetAtTime(
                p.air ? Math.min(t.cutoff, de(x.distanceTo(e))) : t.cutoff,
                x.ac.currentTime,
                0.06,
              ),
                p.occlusion.gain.setTargetAtTime(
                  t.gain,
                  x.ac.currentTime,
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
        kind: i ?? Ce(e),
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
            : e.end === 1 / 0 && t - e.touch > be && e.kill(t));
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
            I(null);
            for (let [e, t, n] of c) {
              let a = L[e];
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
          this.voiceSamples.dispose());
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
          S.getContext() === this.ac && S.setContext(void 0);
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
