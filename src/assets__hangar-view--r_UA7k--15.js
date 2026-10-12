// assets__hangar-view--r_UA7k- 15 — voice
// Lines 13034-13128 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function Ln(e, t) {
  let n = ie(e, t);
  if (!n.visible) return null;
  let r = jn(e, t);
  if (r == null) return null;
  let i = ((r % A.period) + A.period) % A.period,
    a = A[n.phase],
    o = a ? (((i - a[0]) % A.period) + A.period) % A.period : 0;
  return Fn(
    n.phase,
    n.phase === `rollout` ? o + A.touchdown[1] : o,
    a ? a[1] : 1,
    An(n),
  );
}
function Rn(e, t, n) {
  let r = [
      ...(t.helos ?? []).map((e, n) => ({
        kind: `blackhawk`,
        at: (e) => Mn(t, n, e),
      })),
      { kind: `chinook`, at: (e) => Nn(t, 0, e) },
      { kind: `chinook`, at: (e) => Nn(t, 1, e) },
      { kind: `b52`, at: (e) => Pn(t, e) },
      { kind: `c130`, at: (e) => In(t, e) },
      { kind: `c130`, at: (e) => Ln(t, e) },
    ].map((e) => ({ ...e, voice: null, touch: !1 })),
    i = 0,
    a = null,
    o = [0, 0, 0],
    s = new C();
  function c(e, t) {
    (e.voice?.stop(t), (e.voice = null), (e.touch = !1));
  }
  return {
    update() {
      let l = performance.now();
      if (l - i < 40) return;
      i = l;
      let u = e.modules.get(`audio`),
        d = u?.busses?.sfx;
      if (
        ((a = u?.context ?? null),
        !a || !d || a.state !== `running` || t.epoch == null)
      )
        return;
      let f = n(),
        p = a.currentTime,
        m = e.camera;
      (m.getWorldPosition(s),
        (o[0] = s.x),
        (o[1] = s.y - D.surfaceY),
        (o[2] = s.z),
        m.getWorldDirection(s));
      let h = Math.hypot(s.x, s.z) || 1,
        g = [s.x / h, s.z / h];
      for (let e of r) {
        let t = f,
          n = e.at(t);
        for (let r = 0; r < 3 && n; r++)
          ((t =
            f -
            (Math.hypot(n.p[0] - o[0], n.p[1] - o[1], n.p[2] - o[2]) / 343) *
              En),
            (n = e.at(t)));
        if (!n || Math.hypot(n.p[0] - o[0], n.p[2] - o[2]) > Dn) {
          e.voice && c(e, p);
          continue;
        }
        let r = e.at(t - 3)?.p ?? n.p,
          i = [0, 1, 2].map((e) => ((n.p[e] - r[e]) * En) / 3),
          s = Sn[e.kind],
          l = wn(n.p, i, { ear: o, facing: g, ref: s.ref });
        (e.voice || ((e.voice = Cn(a, e.kind, d)), (e.fade = 0)),
          (e.fade = Math.min(1, e.fade + 0.08)));
        let u = On(n.idle ?? 0, 0, 1);
        (e.voice.setTrim(kn(s.trim, s.idleTrim, u) + (n.gain ?? 0), p),
          (l.gain *= e.fade),
          e.voice.place(l, p),
          e.voice.set({ ...n, front: l.front }, p),
          n.touch &&
            !e.touch &&
            Tn(a, e.voice.input, p + 0.01, e.kind === `b52` ? 1.4 : 1),
          (e.touch = !!n.touch));
      }
    },
    stats() {
      return r.filter((e) => e.voice).map((e) => e.kind);
    },
    dispose() {
      let e = a?.currentTime ?? 0;
      for (let t of r) t.voice && c(t, e);
    },
  };
}
