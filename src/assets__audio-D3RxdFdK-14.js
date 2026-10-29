// assets__audio-D3RxdFdK 14 — pos
// Lines 3692-3915 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
function Nt(e, t) {
  let n = X.listenerPosition([0, 0, 0]),
    r = Dt(),
    i = bt.size ? new Set() : null;
  for (let a of e.world.sorted()) {
    if (a.type !== `soldier`) continue;
    let o = a.pos[0] - n[0],
      s = a.pos[2] - n[2];
    if (o * o + s * s > 4900 || a.state & (u.DEAD | u.IN_VEHICLE | u.SWIMMING))
      continue;
    let c = bt.get(a.id);
    (c || ((c = { stride: 0, gear: 0, grounded: !0 }), bt.set(a.id, c)),
      i?.add(a.id));
    let l = (a.state & u.GROUNDED) !== 0 || (a.state & u.JUMPING) === 0,
      d = r && r.id === a.id,
      f = !d && (!r || M(e.world, r, a));
    if (
      (!c.grounded &&
        l &&
        X.play(
          `land`,
          d
            ? { local: !0, volume: 0.35, surface: F(e, a.pos) }
            : { pos: a.pos, surface: F(e, a.pos) },
        ),
      (c.grounded = l),
      !l)
    ) {
      ((c.stride = 0), (c.gear = 0));
      continue;
    }
    let p = Math.hypot(a.vel[0], a.vel[2]);
    if (p < 0.4) {
      ((c.stride = 0), (c.gear = 0));
      continue;
    }
    c.stride += p * t;
    let m = a.stance === 2 ? 0.7 : a.stance === 1 ? 0.9 : p > 5 ? 1.9 : 1.6;
    if (c.stride >= m) {
      c.stride -= m;
      let t = F(e, a.pos),
        n = a.stance === 2 ? 0.35 : a.stance === 1 ? 0.6 : p > 5 ? 1.1 : 0.9,
        r = 0.94 + Math.min(0.12, p * 0.018),
        i = f ? 1.35 : 0.4;
      X.play(
        `footstep`,
        d
          ? { local: !0, surface: t, volume: n * 0.13, pitch: r }
          : {
              pos: a.pos,
              surface: t,
              volume: n * (p > 5 ? 0.92 : 0.76) * i,
              pitch: r,
              ...(f ? { priority: 5 } : {}),
            },
      );
    }
    if (!d && a.stance === 0 && p >= 2) {
      c.gear += p * t;
      let e = p > 5 ? 3.8 : 5.4;
      c.gear >= e &&
        ((c.gear -= e),
        X.play(`movement_gear`, {
          pos: [a.pos[0], a.pos[1] + 1.25, a.pos[2]],
          volume: (p > 5 ? 0.3 : 0.18) * (f ? 1.2 : 0.35),
          pitch: 0.94 + Math.min(0.12, p * 0.018),
        }));
    } else c.gear = 0;
  }
  if (i) for (let e of bt.keys()) i.has(e) || bt.delete(e);
}
function Pt(e, t) {
  if (((wt += t), wt < 0.1)) return;
  let n = wt;
  wt = 0;
  let r = performance.now();
  for (let t of e.world.sorted()) {
    if (t.type !== `vehicle`) continue;
    let e = Math.hypot(t.vel[0], t.vel[1], t.vel[2]),
      i = t.weapon >= 3 ? (xt.has(t.id) ? se(xt.get(t.id), t, n) : ce(t)) : 1;
    t.weapon >= 3 && xt.set(t.id, i);
    let a =
        t.weapon >= 3
          ? i > 0.02
          : t.hp > 0 && (t.ext?.engineOn ?? (e > 0.3 || t.owner >= 0)),
      o = X.distanceTo(t.pos),
      s = Q.get(t.id),
      c = t.weapon >= 3 ? `vehicle_rotor` : `vehicle_engine`;
    if (a && o < R[c].max) {
      let n = Math.min(1, 0.15 + e / 22) * (0.35 + 0.65 * i),
        a = t.weapon >= 3 && !!X.movementSamples.rotor;
      if (
        (s && s.sampled !== a && (s.handle.stop(), Q.delete(t.id), (s = null)),
        !s || !s.handle.alive())
      ) {
        let e = X.play(c, { pos: t.pos, rpm: n, volume: 0.55 });
        if (!e) continue;
        ((s = { handle: e, sampled: a }), Q.set(t.id, s));
      }
      (s.handle.setPosition(t.pos),
        s.handle.setRpm(n),
        s.handle.setVolume(0.55 * i * U(R[c], o)),
        (s.t = r));
    } else s && (s.handle.stop(), Q.delete(t.id));
  }
  for (let [e, t] of Q) r - t.t > 500 && (t.handle.stop(), Q.delete(e));
  for (let t of xt.keys()) e.world.get(t) || xt.delete(t);
}
var Ft = {
  name: `audio`,
  deps: [],
  async init(e) {
    if (((_t = e), (X = new Pe(e)), !X.ok))
      e.warn(`audio engine unavailable; api is a no-op`);
    else {
      let t = X,
        n = () => {
          X === t && (t.movementSamples.load(t.ac), t.sfxSamples.load(t.ac));
        },
        r = () => {
          X === t && t.voiceSamples.load(t.ac);
        };
      if (e.config.showcase) (n(), r());
      else {
        let i = Date.now(),
          a = () => {
            X === t &&
              (globalThis.__game?.ready || Date.now() - i > 9e4
                ? n()
                : setTimeout(a, 500));
          };
        (a(), e.events.on(`player:local`, r));
      }
      ((Z = new Le(X)),
        (Z.tod = e.world.time.tod ?? e.config.tod ?? 14),
        e.config.showcase || Z.start(),
        jt(e),
        (mt = ct(e, At)),
        (ht = pt(e, X)));
      try {
        e.renderer.domElement.click();
      } catch {}
      let i = X;
      i.resume()
        .then((t) => {
          X === i &&
            e.log(
              `context ${t ? `running` : i.ac?.state} · ${B.length} sound ids · ${i.voices.length} voices`,
            );
        })
        .catch((t) => {
          X === i && e.warn(`audio resume failed`, t?.message);
        });
    }
  },
  tick(e, t) {
    if (X?.ok) {
      for (let [t, n] of St) {
        let r = e.world.get(t);
        (!n.handle.alive() ||
          !r ||
          r.hp <= 0 ||
          !(r.state & u.RELOADING) ||
          r.weapon !== n.weapon) &&
          (n.handle.stop(), St.delete(t));
      }
      try {
        Nt(e, t);
      } catch (t) {
        e.warn(`footsteps`, t?.message);
      }
    }
  },
  update(e, t) {
    if (X?.ok) {
      try {
        (X.update(), Z?.update());
      } catch (t) {
        e.warn(`update`, t?.message);
      }
      try {
        Pt(e, t);
      } catch (t) {
        e.warn(`vehicles`, t?.message);
      }
      try {
        ht?.update(t);
      } catch (t) {
        e.warn(`voices`, t?.message);
      }
      if (gt)
        try {
          gt.update(t);
        } catch (t) {
          e.warn(`showcase`, t?.message);
        }
    }
  },
  async showcase(e, t) {
    if (!X?.ok) {
      (e.debugGround(200), e.warn(`showcase without audio context`));
      return;
    }
    gt = Ue(e, At, X, Z, t);
  },
  dispose(e) {
    (mt?.(), (mt = null), ht?.dispose(), (ht = null));
    for (let e of St.values()) e.handle.stop();
    (St.clear(), bt.clear());
    for (let e of Q.values()) e.handle.stop();
    (Q.clear(), xt.clear());
    try {
      gt?.dispose();
    } catch {}
    try {
      Z?.stop();
    } catch {}
    try {
      X?.dispose();
    } catch {}
    ((gt = null), (Z = null), (X = null), (_t = null));
  },
  api: At,
};
