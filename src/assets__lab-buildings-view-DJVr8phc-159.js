// assets__lab-buildings-view-DJVr8phc 159 — box
// Lines 50153-50470 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
var um = (e) => (t, n, r) => {
    let i = e.y,
      a = e.d,
      o = e.rail || `pnRailWhite`,
      s = e.trim || `pnTrimWhite`,
      c = e.deck || `pnDeck`,
      l = e.rh ?? 1,
      u = 0.72,
      d = (e, t) => [e / u, (t - i - 0.06) / (l - 0.06)],
      f = (e, t, n) => [n / u, (t - i - 0.06) / (l - 0.06)];
    for (let [u, p] of Qp(r, e.a0, e.a1)) {
      let m = Xp(r, (u + p) / 2, i + 0.3);
      (t.box(c, n, m, u, p, i - 0.18, i + 0.04, 0, a),
        t.box(e.edge || s, n, m, u, p, i - 0.26, i - 0.1, a - 0.1, a + 0.02),
        t.box(o, n, m, u, p, i + 0.04, i + l, a - 0.07, a - 0.05, {
          planar: d,
        }),
        t.box(s, n, m, u, p, i + l, i + l + 0.07, a - 0.11, a - 0.01));
      for (let [r, c] of [
        [u === e.a0, u],
        [p === e.a1, p - 0.04],
      ])
        r &&
          (t.box(o, n, m, c + 0.01, c + 0.03, i + 0.04, i + l, 0, a - 0.07, {
            planar: f,
          }),
          t.box(s, n, m, c, c + 0.04, i + l, i + l + 0.07, 0, a - 0.01));
      if (e.under !== `none`)
        for (
          let r = Math.ceil((u - e.a0 - 0.5) / 1.6) * 1.6 + e.a0 + 0.5;
          r < p - 0.1;
          r += 1.6
        )
          e.under === `console`
            ? (t.box(
                c,
                n,
                m,
                r - 0.12,
                r + 0.12,
                i - 0.6,
                i - 0.18,
                0,
                a * 0.35,
              ),
              t.box(
                c,
                n,
                m,
                r - 0.1,
                r + 0.1,
                i - 0.4,
                i - 0.18,
                a * 0.35,
                a * 0.7,
              ))
            : D(t, s, n, m, [r, i - 1, 0.04], [r, i - 0.22, a * 0.78], 0.12);
    }
  },
  dm = (e) => (t, n, r) => {
    let { y: i, d: a, mat: o } = e,
      s = e.drop ?? 0.4,
      c = e.a0 ?? 0,
      l = e.a1 ?? r.L,
      u = e.stripe ? { planar: (e, t, n) => [e, n * 0.5] } : void 0;
    for (let [d, f] of Qp(r, c, l)) {
      let c = Xp(r, (d + f) / 2, i - 0.3);
      (tm(t, o, n, c, d, f, [0, i], [a, i - s], e.th ?? 0.06, u),
        e.valance &&
          t.box(o, n, c, d, f, i - s - e.valance, i - s, a - 0.02, a, {
            planar: (e, t) => [e, t],
          }),
        e.fascia &&
          t.box(
            e.fascia,
            n,
            c,
            d,
            f,
            i - s - 0.2,
            i - s + 0.03,
            a - 0.05,
            a + 0.02,
          ),
        t.box(
          e.ledger || e.fascia || W,
          n,
          c,
          d,
          f,
          i - 0.14,
          i + 0.03,
          0,
          0.1,
        ));
    }
    for (let o of e.posts || [])
      t.box(
        e.postMat || e.fascia || W,
        n,
        Xp(r, o, 1),
        o - 0.07,
        o + 0.07,
        0,
        i - s - 0.05,
        a - 0.22,
        a - 0.08,
      );
    for (let o of e.rods || [])
      D(
        t,
        W,
        n,
        Xp(r, o, i - 0.3),
        [o, i + 1, 0.02],
        [o, i - s + 0.04, a - 0.06],
        0.035,
      );
  },
  fm = (e) => (t, n, r) => {
    let i = e.d,
      a = e.y ?? 0.45,
      o = e.a0 ?? 0,
      s = e.a1 ?? r.L,
      c = e.deck || `pnDeck`,
      l = e.pile || `pnPile`;
    for (let [u, d] of Qp(r, o, s)) {
      let o = Xp(r, (u + d) / 2, 0.5);
      (t.box(c, n, o, u, d, a - 0.12, a, 0, i),
        t.box(l, n, o, u, d, a - 0.45, a - 0.12, i - 0.35, i - 0.05),
        e.bull !== !1 && t.box(l, n, o, u, d, a, a + 0.2, i - 0.3, i - 0.08));
    }
    let d = e.step ?? 2.4,
      f = Math.max(1, Math.round((s - o - 0.4) / d));
    for (let e = 0; e <= f; e++) {
      let c = o + 0.2 + (e * (s - o - 0.4)) / f,
        d = Xp(r, c, 0.5);
      (K(t, l, n, d, c, i - 0.2, -0.4, a - 0.12, 0.17, 0.16, 8),
        t.add(
          `pnShell`,
          new u(0.19, 0.035, 4, 10)
            .rotateX(Math.PI / 2)
            .translate(c, 0.3, i - 0.2),
          n,
          d,
        ));
    }
    for (let o of e.cleats || []) {
      let e = Xp(r, o, 0.5);
      (t.box(
        W,
        n,
        e,
        o - 0.25,
        o + 0.25,
        a + 0.26,
        a + 0.32,
        i - 0.22,
        i - 0.14,
      ),
        t.box(
          W,
          n,
          e,
          o - 0.07,
          o + 0.07,
          a + 0.2,
          a + 0.27,
          i - 0.24,
          i - 0.12,
        ));
    }
    for (let o of e.bollards || []) {
      let e = Xp(r, o, 0.5);
      (K(t, W, n, e, o, i - 0.6, a, a + 0.5, 0.15, 0.13, 10),
        t.add(
          W,
          new w(0.17, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2).translate(
            o,
            a + 0.5,
            i - 0.6,
          ),
          n,
          e,
        ));
    }
    for (let o of e.ladders || []) {
      let e = Xp(r, o, 0.5);
      for (let r of [o - 0.25, o + 0.25])
        t.box(W, n, e, r - 0.03, r + 0.03, -0.2, a + 0.9, i + 0.02, i + 0.08);
      for (let r = 0.3; r < a + 0.8; r += 0.3)
        t.box(
          W,
          n,
          e,
          o - 0.25,
          o + 0.25,
          r - 0.015,
          r + 0.015,
          i + 0.03,
          i + 0.07,
        );
    }
  },
  pm = (e, t, n, r, i, a) => e.box(`pnWater`, t, 0, n, r, 0.16, 0.2, i, a);
function mm(e, t, n, r, i, a, o, s, c, l, u = !1) {
  let d = o - a,
    f = c - s,
    p = 0.06;
  (e.box(i, t, n, a - p, o + p, s - p, c + p, l - 0.05, l),
    e.box(r, t, n, a, o, s, c, l, l + 0.012, {
      planar: (e, t) => [(e - a) / d, (t - s) / f],
    }),
    u &&
      e.box(r, t, n, a, o, s, c, l - 0.062, l - 0.05, {
        planar: (e, t) => [(o - e) / d, (t - s) / f],
      }));
}
function hm(e, t, n, r, i, a, o, s, c = 24) {
  e.add(r, new y(s, c).translate(i, a, o), t, n, {
    planar: (e, t) => [(e - i) / (2 * s) + 0.5, (t - a) / (2 * s) + 0.5],
  });
}
function gm(e, t, n, r, i, a) {
  e.add(
    `pnBuoyOrange`,
    new u(0.3, 0.075, 6, 16).translate(r, i, a + 0.08),
    t,
    n,
  );
  for (let o = 0; o < 4; o++) {
    let s = (o * Math.PI) / 2 + Math.PI / 4,
      c = r + Math.cos(s) * 0.3,
      l = i + Math.sin(s) * 0.3;
    e.box(
      `pnBuoyWhite`,
      t,
      n,
      c - 0.06,
      c + 0.06,
      l - 0.06,
      l + 0.06,
      a,
      a + 0.165,
    );
  }
  e.box(W, t, n, r - 0.03, r + 0.03, i + 0.26, i + 0.4, 0, 0.06);
}
function _m(e, t, n, r, i, a = 0) {
  K(e, `pnBarrel`, t, n, r, i, a, a + 0.88, 0.29, 0.29, 10);
  for (let o of [a + 0.16, a + 0.7])
    K(e, W, t, n, r, i, o, o + 0.05, 0.305, 0.305, 10);
}
function vm(e, t, n, r, i, a, o = 0.9, s = 0.42) {
  e.box(`pnNet`, t, n, r - o / 2, r + o / 2, i, i + s, a - o / 2, a + o / 2);
  for (let [c, l] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      W,
      t,
      n,
      r + (c * o) / 2 - 0.02,
      r + (c * o) / 2 + 0.02,
      i,
      i + s,
      a + (l * o) / 2 - 0.02,
      a + (l * o) / 2 + 0.02,
    );
  for (let c of [i, i + s - 0.03])
    for (let i of [-1, 1])
      (e.box(
        W,
        t,
        n,
        r - o / 2,
        r + o / 2,
        c,
        c + 0.03,
        a + (i * o) / 2 - 0.02,
        a + (i * o) / 2 + 0.02,
      ),
        e.box(
          W,
          t,
          n,
          r + (i * o) / 2 - 0.02,
          r + (i * o) / 2 + 0.02,
          c,
          c + 0.03,
          a - o / 2,
          a + o / 2,
        ));
}
function ym(e, t, n, r, a, o, s) {
  (K(e, s, t, n, r, o, a - 0.5, a - 0.12, 0.13, 0.15, 10),
    e.add(
      s,
      new i(0.13, 0.14, 10).rotateX(Math.PI).translate(r, a - 0.57, o),
      t,
      n,
    ),
    K(e, `pnRope`, t, n, r, o, a - 0.12, a, 0.015, 0.015, 4));
}
function bm(e, t, n, r, a) {
  (e.box(W, t, n, r - 0.03, r + 0.03, a - 0.05, a + 0.02, 0, 0.32),
    e.box(W, t, n, r - 0.12, r + 0.12, a - 0.42, a - 0.4, 0.2, 0.44),
    e.add(
      `pnLamp`,
      new s(0.1, 0.07, 0.3, 8).translate(r, a - 0.25, 0.32),
      t,
      n,
    ),
    e.add(W, new i(0.15, 0.14, 8).translate(r, a - 0.05, 0.32), t, n));
}
