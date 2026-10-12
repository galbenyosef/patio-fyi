// assets__audio-BO2SJEp_ 04 — math
// Lines 998-1415 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
var Te = class e {
    constructor(e) {
      ((this.e = e),
        (this.ac = e.ac),
        (this.started = !1),
        (this.tod = 14),
        (this.w = { wind: 0, birds: 0, crickets: 0, rumble: 0 }),
        (this.rng = e.ctx.rng.fork(`ambience`)),
        (this.rand = () => this.rng.next()),
        (this.next = { bird: 0, cricket: 0, gust: 0, rumble: 0 }),
        (this.layers = null),
        (this._lastBoom = null),
        (this.lfos = []),
        (this.habitat = {
          foliage: 0,
          vegetation: 0,
          sheltered: !1,
          birdPos: null,
        }),
        (this.nextHabitat = 0),
        (this.war = null),
        (this.next.battle = 0),
        (this.sea = null),
        (this.next.salvo = 0),
        (this.next.slam = 0));
    }
    _layer(e, t, n, r, i, a = 0) {
      let o = this.ac,
        s = this.e.busses.ambience,
        c = o.createBufferSource();
      ((c.buffer = e), (c.loop = !0));
      let l = o.createBiquadFilter();
      ((l.type = t), (l.frequency.value = n), (l.Q.value = r));
      let u = o.createGain();
      u.gain.value = 0.6;
      let d = o.createGain();
      d.gain.value = 0;
      let f = d;
      if (o.createStereoPanner) {
        let e = o.createStereoPanner();
        ((e.pan.value = i), d.connect(e), (f = e));
      }
      return (
        c.connect(l),
        l.connect(u),
        u.connect(d),
        f.connect(s),
        c.start(0, a),
        { src: c, filter: l, mod: u, layer: d, out: f }
      );
    }
    _seaStart(e) {
      let t = B(this.ac),
        n = this.ac,
        r = {
          swell: this._layer(t.brown, `lowpass`, 220, 0.8, 0, 1.1),
          wash: this._layer(t.pink, `bandpass`, 850, 0.55, -0.35, 0.3),
        };
      (this._lfo(0.071, 0.62, r.swell.mod.gain),
        this._lfo(0.113, 0.4, r.wash.mod.gain));
      let i = n.createOscillator(),
        a = n.createOscillator(),
        o = n.createGain();
      ((i.type = `sine`),
        (i.frequency.value = 46),
        (a.type = `triangle`),
        (a.frequency.value = 92.6),
        (o.gain.value = 0),
        i.connect(o),
        a.connect(o),
        o.connect(this.e.busses.ambience),
        i.start(),
        a.start(),
        (r.hum = { src: i, src2: a, layer: o, out: o }),
        (this.sea = { sc: e, L: r }));
    }
    _seaMix() {
      let e = this.sea;
      if (!e) return;
      let t = e.sc,
        n = this.habitat.sheltered,
        r = this.e.listenerPosition([0, 0, 0]),
        i = Math.max(0, Math.min(1, (-(r[0] ?? 0) - 40) / 60)),
        a = this.ac.currentTime,
        o = (e, t) => {
          try {
            e.gain.setTargetAtTime(t, a, 0.8);
          } catch {
            e.gain.value = t;
          }
        };
      (o(e.L.swell.layer, (n ? 0.008 : 0.018) * (t.sea ?? 1)),
        o(e.L.wash.layer, 0),
        o(e.L.hum.layer, (0.005 + 0.012 * i + (n ? 0.008 : 0)) * (t.hum ?? 1)));
    }
    _shipEvents(e, t, n) {
      let r = this.next,
        i = this.rand,
        a = this._l0(),
        o = a[0],
        s = a[2],
        c = a[1] - 1.5,
        l = { kind: `ambience` },
        u = (e, n, a) => (r[e] ?? (r[e] = t + n + i() * (a - n)), t >= r[e]),
        d = (e, t, n) => {
          let r = i() * Math.PI * 2,
            a = e + i() * (t - e);
          return [o + Math.cos(r) * a, n, s + Math.sin(r) * a];
        };
      (u(`horn`, 40, 120) &&
        (this.e.play(`ship_horn`, {
          ...l,
          pos: d(400, 700, a[1] + 10),
          volume: 0.5 * n,
          priority: 1,
          open: !0,
        }),
        (r.horn = t + 90 + i() * 90)),
        u(`groan`, 6, 20) &&
          (this.e.play(`hull_groan`, {
            ...l,
            pos: d(2, 7, c),
            volume: 0.16,
            priority: 1,
          }),
          (r.groan = t + 12 + i() * 18)),
        u(`clank`, 4, 12) &&
          (this.e.play(`chain_clank`, {
            ...l,
            pos: d(3, 10, c + 0.5 + i() * 4),
            volume: 0.2 * n,
            priority: 1,
          }),
          (r.clank = t + 8 + i() * 12)),
        u(`door`, 10, 30) &&
          (this.e.play(`door_bang`, {
            ...l,
            pos: d(15, 50, c + 1 + i() * 4),
            volume: 0.25 * n,
            priority: 1.5,
          }),
          (r.door = t + 20 + i() * 25)));
      let f = e.house;
      if (f && u(`bell`, 8, 20)) {
        if (o < f.near) {
          let e = Math.max(f.y[0] + 1.2, Math.min(f.y[1] - 1, a[1] + 0.8));
          this.e.play(`alarm_bell`, {
            ...l,
            pos: [f.x + (i() - 0.5) * 6, e, f.z + (i() - 0.5) * 8],
            volume: this.habitat.sheltered ? 0.15 : 0.06,
            priority: 1.5,
          });
        }
        r.bell = t + 15 + i() * 15;
      }
      let p = e.fire;
      if (p && u(`fire`, 0, 2)) {
        let e = Math.hypot(p[0] - o, p[1] - a[1], p[2] - s);
        (e < 45 &&
          this.e.play(`ship_fire`, {
            ...l,
            pos: [p[0] + (i() - 0.5) * 6, p[1] + i(), p[2] + (i() - 0.5) * 2],
            volume: 0.18 * (1 - e / 45),
            priority: 1,
          }),
          (r.fire = t + 1.5 + i() * 2.5));
      }
    }
    _lfo(e, t, n, r = `sine`) {
      let i = this.ac,
        a = i.createOscillator();
      ((a.type = r), (a.frequency.value = e));
      let o = i.createGain();
      return (
        (o.gain.value = t),
        a.connect(o),
        o.connect(n),
        a.start(),
        this.lfos.push({ o: a, g: o }),
        a
      );
    }
    start() {
      if (!this.started && this.e.ok)
        try {
          let e = B(this.ac),
            t = this._layer(e.brown, `lowpass`, 70, 0.9, 0, 0.4);
          ((t.mod.gain.value = 0.9),
            this._lfo(0.031, 0.35, t.mod.gain),
            (this.layers = { rumble: t }),
            (this.started = !0),
            this.setTod(this.tod, !0));
        } catch (e) {
          this.e.ctx.warn(`ambience start failed:`, e?.message ?? e);
        }
    }
    stop() {
      if (this.started) {
        for (let e of Object.values(this.layers))
          try {
            (e.src.stop(), e.out.disconnect());
          } catch {}
        for (let { o: e, g: t } of this.lfos)
          try {
            (e.stop(), e.disconnect(), t.disconnect());
          } catch {}
        if (((this.lfos.length = 0), (this.nextHabitat = 0), this.war)) {
          try {
            this.war.stop();
          } catch {}
          this.war = null;
        }
        if (this.sea) {
          for (let e of Object.values(this.sea.L))
            try {
              (e.src.stop(), e.src2?.stop(), e.out.disconnect());
            } catch {}
          this.sea = null;
        }
        ((this.layers = null), (this.started = !1));
      }
    }
    static WAR_BED = 0.5;
    static weights(e) {
      e = ((e % 24) + 24) % 24;
      let t = V(5.2, 7.6, e) * (1 - V(18.2, 20.6, e)),
        n = 1 - t,
        r = V(5.5, 7, e) * (1 - V(9, 12, e));
      return {
        day: t,
        night: n,
        wind: 0.7 + 0.3 * n,
        birds: t * (0.55 + 0.45 * r),
        crickets: n,
        rumble: 0,
      };
    }
    setTod(t, n = !1) {
      this.tod = t;
      let r = e.weights(t),
        i = this.habitat,
        a = i.sheltered ? 0.12 : 1;
      if (
        ((r.wind *= a * (1 - i.foliage * 0.45)),
        (r.birds *= a * i.foliage),
        (r.crickets *= a * i.vegetation),
        (this.w = r),
        !this.started)
      )
        return;
      let o = this.ac.currentTime,
        s = n ? 0.05 : 1.2;
      ((e, t) => {
        try {
          e.setTargetAtTime(t, o, s);
        } catch {
          e.value = t;
        }
      })(this.layers.rumble.layer.gain, 0.8 * r.rumble);
    }
    _l0() {
      return this.e.listenerPosition([0, 0, 0]);
    }
    _around(e, t, n, r) {
      let i = this.e.listenerPosition([0, 0, 0]),
        a = this.rand() * Math.PI * 2,
        o = e + this.rand() * (t - e);
      return [
        i[0] + Math.cos(a) * o,
        i[1] + n + this.rand() * (r - n),
        i[2] + Math.sin(a) * o,
      ];
    }
    update() {
      if (!this.started) return;
      let t = this.ac.currentTime;
      if (t >= this.nextHabitat) {
        ((this.habitat = we(this.e.ctx, this.e.listenerPosition([0, 0, 0]))),
          this.setTod(this.tod),
          (this.nextHabitat = t + 0.5));
        let e = this.e.ctx.modules.get(`demo`)?.getDefinition?.()?.soundscape;
        if (e && !this.sea)
          try {
            this._seaStart(e);
          } catch (t) {
            (this.e.ctx.warn(`sea soundscape failed:`, t?.message ?? t),
              (this.sea = { sc: e, L: {} }));
          }
        this._seaMix();
      }
      if (this.e.ctx.modules.get(`demo`)?.getDefinition?.()?.quietAmbience) {
        this.war?.alive?.() && this.war.setVolume(0);
        return;
      }
      let n = this.sea?.sc,
        r = !!n,
        i = this.w,
        a = this.next,
        o = this.rand,
        s = () => this._l0(),
        c = this.e.voiceSamples,
        l = this.habitat.sheltered ? 0.35 : 1;
      if (c?.has?.(`war_ambience`)) {
        let t = e.WAR_BED * l * (n?.battle ?? 1);
        !this.war || !this.war.alive()
          ? (this.war = this.e.play(`voice_war_ambience`, {
              volume: t,
              kind: `ambience`,
            }))
          : this.war.setVolume(t);
      }
      if (c?.has?.(`war_distant`) && t >= a.battle) {
        let e = 500 + o() * 700,
          n = o() * Math.PI * 2,
          i = this.e.listenerPosition([0, 0, 0]);
        (this.e.play(`voice_war_distant`, {
          pos: [i[0] + Math.cos(n) * e, i[1] + 6, i[2] + Math.sin(n) * e],
          volume: (r ? 1 : 0.7) * l,
          priority: 2,
          kind: `ambience`,
          open: r,
        }),
          (a.battle = t + (r ? 7 + o() * 11 : 16 + o() * 22)));
      }
      if (r && t >= a.salvo) {
        let e = o() * Math.PI * 2,
          n = 550 + o() * 650,
          i = s(),
          u = 2 + Math.floor(o() * 3);
        for (let t = 0; t < u; t++) {
          let a = [
              i[0] + Math.cos(e) * n + (o() - 0.5) * 120,
              i[1] + 8,
              i[2] + Math.sin(e) * n + (o() - 0.5) * 120,
            ],
            s = t * (0.25 + o() * 0.65);
          this.e.play(
            t % 2 && c?.has?.(`blast_heavy`)
              ? `voice_blast_heavy`
              : `explosion_large`,
            {
              pos: a,
              delay: s,
              volume: (2.2 - t * 0.3) * l,
              priority: 2,
              kind: `ambience`,
              open: r,
            },
          );
        }
        a.salvo = t + 3.5 + o() * 6;
      }
      if (
        (r && n.ship && this._shipEvents(n.ship, t, l),
        i.birds > 0.05 &&
          t >= a.bird &&
          (this.e.play(`bird_chirp`, {
            pos: this.habitat.birdPos,
            volume: 0.45 * i.birds,
            kind: `ambience`,
          }),
          (a.bird = t + 3 + o() * 7)),
        i.crickets > 0.05 &&
          t >= a.cricket &&
          (this.e.play(`cricket`, {
            pos: this._around(3, 12, -0.5, 0.5),
            volume: 0.3 * i.crickets,
            kind: `ambience`,
          }),
          (a.cricket = t + 1 + o() * 2)),
        i.rumble > 0 && t >= a.rumble)
      ) {
        let e = 650 + o() * 900,
          n = o() * Math.PI * 2,
          r = this.e.listenerPosition([0, 0, 0]);
        ((this._lastBoom = this.e.play(
          o() < 0.3 ? `explosion_large` : `explosion`,
          {
            pos: [r[0] + Math.cos(n) * e, r[1] + 5, r[2] + Math.sin(n) * e],
            volume: 0.7,
            priority: 2,
            kind: `ambience`,
          },
        )),
          (a.rumble = t + 8 + o() * 14));
      }
    }
  },
  K = {
    gun: `#f0a030`,
    gunfar: `#c8383a`,
    foot: `#7fd44a`,
    explosion: `#ff6a2a`,
    impact: `#4a8fd8`,
    ui: `#b06ae0`,
    ambience: `#79b8b0`,
    vehicle: `#d8c060`,
  },
  Ee = {
    grass: 6262586,
    dirt: 8018490,
    rock: 8224642,
    sand: 13218425,
    road: 4869200,
    water: 3833776,
  },
  De = 6.2,
  Oe = 1.8,
  ke = (e) => (e.index ? e.toNonIndexed() : e),
  Ae = (e) => O(e.map(ke), !1),
  q = (e, t = {}) =>
    new m({
      color: e,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: !0,
      ...t,
    });
