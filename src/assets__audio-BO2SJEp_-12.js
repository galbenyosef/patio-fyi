// assets__audio-BO2SJEp_ 12 — handle
// Lines 3342-3494 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function pt(e, t) {
  if (((rt += t), rt < 0.1)) return;
  let n = rt;
  rt = 0;
  let r = performance.now();
  for (let t of e.world.sorted()) {
    if (t.type !== `vehicle`) continue;
    let e = Math.hypot(t.vel[0], t.vel[1], t.vel[2]),
      i = t.weapon >= 3 ? (et.has(t.id) ? oe(et.get(t.id), t, n) : se(t)) : 1;
    t.weapon >= 3 && et.set(t.id, i);
    let a =
        t.weapon >= 3
          ? i > 0.02
          : t.hp > 0 && (t.ext?.engineOn ?? (e > 0.3 || t.owner >= 0)),
      o = Y.distanceTo(t.pos),
      s = Q.get(t.id),
      c = t.weapon >= 3 ? `vehicle_rotor` : `vehicle_engine`;
    if (a && o < L[c].max) {
      let n = Math.min(1, 0.15 + e / 22) * (0.35 + 0.65 * i),
        a = t.weapon >= 3 && !!Y.movementSamples.rotor;
      if (
        (s && s.sampled !== a && (s.handle.stop(), Q.delete(t.id), (s = null)),
        !s || !s.handle.alive())
      ) {
        let e = Y.play(c, { pos: t.pos, rpm: n, volume: 0.55 });
        if (!e) continue;
        ((s = { handle: e, sampled: a }), Q.set(t.id, s));
      }
      (s.handle.setPosition(t.pos),
        s.handle.setRpm(n),
        s.handle.setVolume(0.55 * i * ue(L[c], o)),
        (s.t = r));
    } else s && (s.handle.stop(), Q.delete(t.id));
  }
  for (let [e, t] of Q) r - t.t > 500 && (t.handle.stop(), Q.delete(e));
  for (let t of et.keys()) e.world.get(t) || et.delete(t);
}
var mt = {
  name: `audio`,
  deps: [],
  async init(e) {
    if (((Z = e), (Y = new Se(e)), !Y.ok))
      e.warn(`audio engine unavailable; api is a no-op`);
    else {
      let t = Y,
        n = () => {
          Y === t && t.movementSamples.load(t.ac);
        },
        r = () => {
          Y === t && t.voiceSamples.load(t.ac);
        };
      if (e.config.showcase) (n(), r());
      else {
        let i = Date.now(),
          a = () => {
            Y === t &&
              (globalThis.__game?.ready || Date.now() - i > 9e4
                ? n()
                : setTimeout(a, 500));
          };
        (a(), e.events.on(`player:local`, r));
      }
      ((X = new Te(Y)),
        (X.tod = e.world.time.tod ?? e.config.tod ?? 14),
        e.config.showcase || X.start(),
        ut(e),
        (Je = He(e, lt)),
        (Ye = qe(e, Y)));
      try {
        e.renderer.domElement.click();
      } catch {}
      let i = Y;
      i.resume()
        .then((t) => {
          Y === i &&
            e.log(
              `context ${t ? `running` : i.ac?.state} · ${z.length} sound ids · ${i.voices.length} voices`,
            );
        })
        .catch((t) => {
          Y === i && e.warn(`audio resume failed`, t?.message);
        });
    }
  },
  tick(e, t) {
    if (Y?.ok) {
      for (let [t, n] of tt) {
        let r = e.world.get(t);
        (!n.handle.alive() ||
          !r ||
          r.hp <= 0 ||
          !(r.state & o.RELOADING) ||
          r.weapon !== n.weapon) &&
          (n.handle.stop(), tt.delete(t));
      }
      try {
        ft(e, t);
      } catch (t) {
        e.warn(`footsteps`, t?.message);
      }
    }
  },
  update(e, t) {
    if (Y?.ok) {
      try {
        (Y.update(), X?.update());
      } catch (t) {
        e.warn(`update`, t?.message);
      }
      try {
        pt(e, t);
      } catch (t) {
        e.warn(`vehicles`, t?.message);
      }
      try {
        Ye?.update(t);
      } catch (t) {
        e.warn(`voices`, t?.message);
      }
      if (Xe)
        try {
          Xe.update(t);
        } catch (t) {
          e.warn(`showcase`, t?.message);
        }
    }
  },
  async showcase(e, t) {
    if (!Y?.ok) {
      (e.debugGround(200), e.warn(`showcase without audio context`));
      return;
    }
    Xe = je(e, lt, Y, X, t);
  },
  dispose(e) {
    (Je?.(), (Je = null), Ye?.dispose(), (Ye = null));
    for (let e of tt.values()) e.handle.stop();
    (tt.clear(), $e.clear());
    for (let e of Q.values()) e.handle.stop();
    (Q.clear(), et.clear());
    try {
      Xe?.dispose();
    } catch {}
    try {
      X?.stop();
    } catch {}
    try {
      Y?.dispose();
    } catch {}
    ((Xe = null), (X = null), (Y = null), (Z = null));
  },
  api: lt,
};
