// assets__facade-kit-DPPNwSDt 10 — math
// Lines 2460-2652 of readable/assets__facade-kit-DPPNwSDt.pretty.js (statement-aligned).
function Ae(e, t, n, r, i, a, o, s, c = {}) {
  let u = (e) =>
      (c.holes ?? [])
        .filter((t) => Math.abs(t.y - e) < 0.06)
        .map((e) => e.rect),
    d = r.t,
    f = (e) => ({ ...t[e], ...(n[e] || {}), fo: s, side: e }),
    p = r.roof?.ridge === `z`,
    m = r.roof?.pitch || 0,
    h = Math.tan(m),
    g = r.roof && p ? { h: (i / 2) * h } : null,
    v = r.roof && !p ? { h: (a / 2) * h, lip: d * h } : null,
    b = n.chamfer?.l ?? t.chamfer?.l ?? 0,
    x = n.chamfer?.r ?? t.chamfer?.r ?? 0,
    S = b > 0 || x > 0,
    C = {
      front: Y(e, X(o, -i / 2 + b, a / 2, 0), i - b - x, r, {
        ends: [!b, !x],
        gable: g,
        ...f(`front`),
      }),
      right: Y(
        e,
        X(o, i / 2, a / 2 - (x || d), Math.PI / 2),
        a - d - (x || d),
        r,
        { gable: v, ...f(`right`) },
      ),
      back: Y(e, X(o, i / 2, -a / 2, Math.PI), i, r, {
        ends: !0,
        gable: g,
        ...f(`back`),
      }),
      left: Y(e, X(o, -i / 2, -a / 2 + d, -Math.PI / 2), a - d - (b || d), r, {
        gable: v,
        ...f(`left`),
      }),
    };
  (x &&
    (C.cornerR = Y(e, X(o, i / 2 - x, a / 2, Math.PI / 4), x * Math.SQRT2, r, {
      ends: !1,
      bay: x * Math.SQRT2,
      ...f(`corner`),
    })),
    b &&
      (C.cornerL = Y(
        e,
        X(o, -i / 2, a / 2 - b, -Math.PI / 4),
        b * Math.SQRT2,
        r,
        { ends: !1, bay: b * Math.SQRT2, ...f(`corner`) },
      )));
  let w = (e) => [
      [-i / 2 + e, -a / 2 + e],
      [i / 2 - e, -a / 2 + e],
      [i / 2 - e, a / 2 - x - e * 0.41],
      [i / 2 - x - e * 0.41, a / 2 - e],
      [-i / 2 + b + e * 0.41, a / 2 - e],
      [-i / 2 + e, a / 2 - b - e * 0.41],
    ],
    T = (t, n, r, i) => {
      let a = new y(w(i).map(([e, t]) => new l(e, -t)));
      e.add(
        t,
        new _(a, { depth: r - n, bevelEnabled: !1 })
          .rotateX(-Math.PI / 2)
          .translate(0, n, 0),
        o,
        0,
      );
    },
    E = C.front.H,
    D = d + 0.02;
  if (c.decks) {
    let t = 0;
    for (let n of r.floors)
      (s === 0 && t === 0
        ? S
          ? T(`floorSlab`, 0, 0.03, D)
          : e.box(
              `floorSlab`,
              o,
              0,
              -i / 2 + D,
              i / 2 - D,
              0,
              0.03,
              -a / 2 + D,
              a / 2 - D,
            )
        : $(
            e,
            `floorSlab`,
            o,
            -i / 2 + D,
            i / 2 - D,
            -a / 2 + D,
            a / 2 - D,
            t,
            t + 0.03,
            t,
            S ? w(D) : null,
            u(t),
          ),
        (t += n));
  } else if (c.interior !== !1) {
    S
      ? T(`interior`, 0.01, E, D)
      : e.box(
          `interior`,
          o,
          0,
          -i / 2 + D,
          i / 2 - D,
          0.01,
          E,
          -a / 2 + D,
          a / 2 - D,
        );
    let t = 0;
    for (let n of r.floors)
      (S
        ? T(`floorSlab`, t, t + 0.03, D)
        : e.box(
            `floorSlab`,
            o,
            0,
            -i / 2 + D,
            i / 2 - D,
            t,
            t + 0.03,
            -a / 2 + D,
            a / 2 - D,
          ),
        (t += n));
  }
  return (
    s === 0 &&
      (S
        ? T(`concrete`, -0.4, 0.06, -0.02)
        : e.box(
            `concrete`,
            o,
            0,
            -i / 2 - 0.02,
            i / 2 + 0.02,
            -0.4,
            0.06,
            -a / 2 - 0.02,
            a / 2 + 0.02,
          )),
    c.noRoof
      ? { faces: C, H: E, roofTop: E }
      : S && !r.roof && c.decks
        ? ($(
            e,
            `tarRoof`,
            o,
            -i / 2 + d,
            i / 2 - d,
            -a / 2 + d,
            a / 2 - d,
            E - 0.25,
            E + 0.02,
            E,
            w(d),
          ),
          { faces: C, H: E, roofTop: E + (r.parapet || 0) })
        : S && !r.roof
          ? (T(`tarRoof`, E - 0.25, E + 0.02, d),
            { faces: C, H: E, roofTop: E + (r.parapet || 0) })
          : c.gameRoof != null && !r.roof
            ? (e.box(
                `tarRoof`,
                o,
                0,
                -i / 2 + d,
                i / 2 - d,
                E - 0.05,
                E + c.gameRoof,
                -a / 2 + d,
                a / 2 - d,
              ),
              { faces: C, H: E, roofTop: E + (r.parapet || 0) })
            : {
                faces: C,
                H: E,
                roofTop: r.roof
                  ? Z(e, o, r, i, a, E, c.decks)
                  : (Ee(e, o, r, i, a, E, c.decks, u(E)), E + (r.parapet || 0)),
              }
  );
}
