// assets__audio-D3RxdFdK 02 — banks
// Lines 269-591 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
var ye = class {
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
            _e.map(async (e) => {
              let n = await fetch(ge + e, { signal: t, cache: `no-store` });
              if (!n.ok) throw Error(`${e} HTTP ${n.status}`);
              return (await n.json()).voices ?? {};
            }),
          ),
          r = {};
        for (let e of n) for (let [t, n] of Object.entries(e)) r[t] ??= n;
        let i = await ve(
          Object.entries(r).flatMap(([e, t]) =>
            t.map((t, n) => ({ key: e, entry: t, index: n })),
          ),
          async ({ key: n, entry: r, index: i }) => ({
            key: n,
            index: i,
            buffer: await e.decodeAudioData(await me(ge + r.file, t)),
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
  be = `/assets/audio/sfx/`,
  xe = class {
    constructor() {
      ((this.banks = new Map()),
        (this.last = new Map()),
        (this.disposed = !1),
        (this.abort = new AbortController()),
        (this.failures = []),
        (this.loading = null));
    }
    load(e) {
      return (this.loading ??= this._load(e));
    }
    async _load(e) {
      let t = this.abort.signal,
        n = setTimeout(() => this.abort.abort(), 18e4);
      try {
        let n = await fetch(be + `manifest.json`, {
          signal: t,
          cache: `no-store`,
        });
        if (!n.ok) throw Error(`manifest HTTP ${n.status}`);
        let r = (await n.json()).sounds ?? {};
        await Promise.all(
          Object.entries(r).map(async ([n, r]) => {
            let i = await Promise.allSettled(
              r.map(async (n) => ({
                buffer: await e.decodeAudioData(await me(be + n.file, t)),
                file: n.file,
                gain: n.gain ?? 1,
                layered: !!n.layered,
                farSynth: !!n.farSynth,
              })),
            );
            if (this.disposed) return;
            for (let e of i)
              e.status === `rejected` && this.failures.push(String(e.reason));
            let a = i
              .filter((e) => e.status === `fulfilled`)
              .map((e) => e.value);
            a.length && this.banks.set(n, a);
          }),
        );
      } catch (e) {
        this.disposed || this.failures.push(String(e));
      } finally {
        clearTimeout(n);
      }
    }
    has(e) {
      return this.banks.has(e);
    }
    build(e, t, n, r, i, a, o) {
      let s = this.disposed ? null : this.banks.get(e);
      if (!s?.length) return;
      let c = this._pick(e, s, i);
      if (!c.layered)
        return ((i.sample = c.file), this._play(c, t, n, r, c.gain, 2e4, a));
      let l = i.d ?? 0,
        u = i.layerScale ?? 1,
        d = V(l, u),
        f = r + d.delay,
        p = this.banks.get(e + `_far`),
        m = !p && c.farSynth && o?.build,
        h = p || m ? Math.min(1, Math.max(0, (l / u - 25) / 135)) : 0,
        g = h * h * (3 - 2 * h),
        _ = f;
      if (
        (g < 0.98 &&
          ((i.sample = c.file),
          (_ = Math.max(
            _,
            this._play(c, t, n, f, c.gain * Math.sqrt(1 - g), d.lp, a),
          ))),
        g > 0.02 && m)
      ) {
        let e = t.createGain();
        ((e.gain.value = Math.sqrt(g)),
          e.connect(n),
          (_ = Math.max(_, o.build(t, e, r, i) ?? f)));
      } else if (g > 0.02) {
        let r = this._pick(e + `_far`, p, i);
        ((i.sample ??= r.file),
          (_ = Math.max(
            _,
            this._play(
              r,
              t,
              n,
              f,
              r.gain * Math.sqrt(g),
              V(Math.max(0, l - 60), u).lp,
              a,
            ),
          )));
      }
      return _;
    }
    _pick(e, t, n) {
      let r = Math.min(t.length - 1, Math.floor((n.rand?.() ?? 0) * t.length));
      return (
        t.length > 1 && r === this.last.get(e) && (r = (r + 1) % t.length),
        this.last.set(e, r),
        t[r]
      );
    }
    _play({ buffer: e }, t, n, r, i, a, o) {
      let s = t.createBufferSource(),
        c = t.createGain();
      if (((s.buffer = e), (c.gain.value = i), s.connect(c), o(s), a < 19e3)) {
        let e = t.createBiquadFilter();
        ((e.type = `lowpass`),
          (e.frequency.value = a),
          (e.Q.value = 0.5),
          c.connect(e),
          e.connect(n));
      } else c.connect(n);
      return (s.start(r), r + e.duration);
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
  K = [0, 15, 30, 45, 62, 82, 105, 135, 175, 230, 320, 480, 750],
  Se = 3,
  Ce = 0.05,
  we = (e, t) =>
    e.startsWith(`gun_`) && e !== `gun_tail` && typeof t?.build == `function`,
  Te = class {
    constructor() {
      ((this.banks = new Map()),
        (this.queue = []),
        (this.busy = !1),
        (this.disposed = !1),
        (this.baked = 0),
        (this.failed = 0),
        (this.ms = 0));
    }
    has(e) {
      return !!this.banks.get(e);
    }
    want(e, t, n) {
      this.disposed ||
        this.banks.has(e) ||
        !we(e, t) ||
        this.queue.some((t) => t.id === e) ||
        (this.banks.set(e, null),
        this.queue.push({ id: e, def: t, sampleRate: n }),
        this._pump());
    }
    async _pump() {
      if (!this.busy) {
        for (
          this.busy = !0, await new Promise((e) => setTimeout(e, 0));
          this.queue.length && !this.disposed;
        ) {
          let { id: e, def: t, sampleRate: n } = this.queue.shift(),
            r = performance.now();
          try {
            (this.banks.set(e, await De(t, n)), this.baked++);
          } catch {
            (this.failed++, this.banks.delete(e));
          }
          ((this.ms += performance.now() - r),
            await new Promise((e) => setTimeout(e, 30)));
        }
        this.busy = !1;
      }
    }
    build(e, t, n, r, i, a) {
      let o = this.disposed ? null : this.banks.get(e);
      if (!o) return;
      let s = i.d ?? 0,
        c = s / (i.layerScale ?? 1),
        l = i.pitch ?? 1,
        u = 0;
      for (; u < K.length - 1 && c >= K[u + 1];) u++;
      let d = r + Math.min(s / 343, 2.5),
        f = Math.floor((i.rand?.() ?? Math.random()) * Se) % Se,
        p = o[u][f],
        m = t.createBufferSource();
      ((m.buffer = p), (m.playbackRate.value = l), a(m));
      let h = n;
      if (u < K.length - 1) {
        let e = Math.min(1, (c - K[u]) / (K[u + 1] - K[u])),
          n = (o.levels[u + 1] - o.levels[u]) * e;
        if (Math.abs(n) > 0.3) {
          let e = t.createGain();
          ((e.gain.value = 10 ** (n / 20)), e.connect(h), (h = e));
        }
      }
      let g = V(c).lp;
      if (g < V(K[u]).lp * 0.97) {
        let e = t.createBiquadFilter();
        ((e.type = `lowpass`),
          (e.frequency.value = g),
          (e.Q.value = 0.5),
          m.connect(e),
          e.connect(h));
      } else m.connect(h);
      return (m.start(d), (i.sample = `baked:` + e), d + p.duration / l);
    }
    stats() {
      return {
        baked: this.baked,
        failed: this.failed,
        queued: this.queue.length,
        ms: Math.round(this.ms),
      };
    }
    dispose() {
      ((this.disposed = !0), (this.queue.length = 0), this.banks.clear());
    }
  },
  Ee = () => new Promise((e) => setTimeout(e, 0));
