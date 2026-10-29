// assets__server-DjKK0Hoa 08 — home
// Lines 2253-2303 of readable/assets__server-DjKK0Hoa.pretty.js (statement-aligned).
function Wt(e, n, r, i, a, o, s, c) {
  n.lift || ((n.lift = { stage: `out`, since: o }), (r.liftCarried = !1));
  let l = n.lift,
    u = (t, n) => Math.max(e.map.getHeight(t, n) + 38.5, v(e, t, n, 400) + 12),
    d = i.pos[1] - v(e, i.pos[0], i.pos[2], i.pos[1]),
    f = r.seats.slice(1).some((e) => e != null);
  return (
    (l.descend = !1),
    l.stage === `out`
      ? (l.objective !== a.id && ((l.objective = a.id), (l.lz = null)),
        f && (r.liftCarried = !0),
        (l.lz ??= Ut(e, a, i, n.rng)),
        l.lz
          ? (K(i.pos, l.lz) < 8 && ((l.stage = `land`), (l.since = o)),
            [l.lz[0], u(l.lz[0], l.lz[2]), l.lz[2]])
          : ((l.stage = `home`),
            [r.home[0], u(r.home[0], r.home[2]), r.home[2]]))
      : l.stage === `land`
        ? ((l.descend = !0),
          d < 1.2
            ? ((l.stage = `drop`), (l.since = o), (r.liftDrop = o + 360))
            : o - l.since > 1200 &&
              ((l.stage = `out`), (l.lz = null), (l.objective = null)),
          l.lz)
        : l.stage === `drop`
          ? ((l.descend = !0),
            ((!f && o - l.since > 90) || o - l.since > 360) &&
              (!r.liftCarried && o % 30 == 0
                ? ((c.buttons |= t.INTERACT),
                  (n.vehicleCooldown = o + 900),
                  (n.lift = null))
                : (r.liftCarried &&= ((l.stage = `home`), !1))),
            i.pos.slice())
          : l.stage === `home`
            ? (K(i.pos, r.home) < 8 && ((l.stage = `park`), (l.since = o)),
              [r.home[0], u(r.home[0], r.home[2]), r.home[2]])
            : K(i.pos, r.home) > 8
              ? [r.home[0], i.pos[1], r.home[2]]
              : ((l.descend = !0),
                d < 1.2 &&
                  o % 30 == 0 &&
                  ((c.buttons |= t.INTERACT),
                  (n.vehicleCooldown = o + 1800),
                  (n.lift = null)),
                [
                  r.home[0],
                  v(e, r.home[0], r.home[2], r.home[1] + 2),
                  r.home[2],
                ])
  );
}
