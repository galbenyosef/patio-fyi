// assets__greywater-centre-view-Cf3_SbRw 04 — platout
// Lines 729-1024 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
function Me(e, t = 44, n = I.deckY, r = {}) {
  let i = new A(),
    a = e.M,
    o = t / 2,
    s = I.platTop,
    c = new y(),
    l = r.stairs ?? [
      { side: 1, dir: -1 },
      { side: -1, dir: 1 },
    ];
  for (let e of [-1, 1]) {
    let t = l.find((t) => t.side === e),
      n = t ? (t.dir < 0 ? [4, 6.8] : [-6.8, -4]) : [0, 0],
      r = (t) => e * t;
    (Ee(
      i,
      `precastDark`,
      a,
      e > 0 ? R(4.05, 5.5, 0, s - 0.15) : R(-5.5, -4.05, 0, s - 0.15),
      -o,
      o,
    ),
      Ee(
        i,
        `precast`,
        a,
        e > 0
          ? R(3.85, I.platOut, s - 0.3, s - 0.02)
          : R(-I.platOut, -3.85, s - 0.3, s - 0.02),
        -o,
        o,
      ),
      U(i, `trimWhite`, a, r(3.85), r(3.97), s - 0.02, s, -o, o),
      U(i, `tactile`, a, r(3.97), r(4.57), s - 0.02, s + 0.004, -o, o),
      U(i, `platformPave`, a, r(4.57), r(I.platOut), s - 0.02, s, -o, o),
      U(
        i,
        `lineAmber`,
        a,
        r(I.platOut),
        r(I.platOut + 0.08),
        s - 0.62,
        s + 0.02,
        -o,
        o,
      ));
    for (let e = -o + 2; e <= o - 1.9; e += 6)
      (U(
        i,
        `galv`,
        a,
        r(5.4),
        r(I.platOut - 0.05),
        s - 0.5,
        s - 0.3,
        e - 0.09,
        e + 0.09,
      ),
        H(
          i,
          `galv`,
          a,
          [r(2.95), -1.35, e],
          [r(I.platOut - 0.9), s - 0.62, e],
          0.14,
          0.16,
        ));
    for (let [e, t] of Oe([[-o, o]], [n])) {
      for (
        let n = e;
        n <= t + 0.001;
        n += Math.max(0.6, (t - e) / Math.max(1, Math.round((t - e) / 1.6)))
      )
        U(
          i,
          `galv`,
          a,
          r(I.platOut - 0.12),
          r(I.platOut - 0.04),
          s,
          s + 1.1,
          n - 0.04,
          n + 0.04,
        );
      (U(
        i,
        `railGlass`,
        a,
        r(I.platOut - 0.1),
        r(I.platOut - 0.08),
        s + 0.1,
        s + 1,
        e,
        t,
      ),
        U(
          i,
          `galv`,
          a,
          r(I.platOut - 0.15),
          r(I.platOut - 0.01),
          s + 1.06,
          s + 1.12,
          e,
          t,
        ));
    }
    for (let e of [-1, 1]) {
      let t = e * o;
      U(i, `galv`, a, r(3.9), r(4.5), s + 1.06, s + 1.12, t - 0.04, t + 0.04);
      for (let n = 0; n < 7; n++) {
        let o = s - ((n + 1) * (s - 0.32)) / 7;
        U(
          i,
          `precastDark`,
          a,
          r(4.5),
          r(5.5),
          0,
          o + (s - 0.32) / 7,
          t + e * n * 0.28,
          t + e * (n + 1) * 0.28,
        );
      }
      U(i, `galv`, a, r(5.5), r(5.56), 0.32, s + 1.1, t, t + e * 2.1);
    }
    let u = [];
    for (let e = -o + 4; e <= o - 3.9; e += 8) u.push(e);
    let d = 4.55;
    for (let e of u)
      (U(i, `ironDark`, a, r(7.75), r(7.95), s, s + d + 0.2, e - 0.1, e + 0.1),
        U(i, `ironDark`, a, r(7.6), r(8.1), s, s + 0.05, e - 0.25, e + 0.25),
        H(
          i,
          `ironDark`,
          a,
          [r(3.9), s + 5 - 0.12, e],
          [r(9.05), s + d - 0.12, e],
          0.16,
          0.34,
        ));
    (Ee(
      i,
      `aluminum`,
      a,
      e > 0
        ? [
            [3.85, s + 5],
            [9.15, s + d],
            [9.15, s + d + 0.22],
            [3.85, s + 5 + 0.22],
          ]
        : [
            [-9.15, s + d],
            [-3.85, s + 5],
            [-3.85, s + 5 + 0.22],
            [-9.15, s + d + 0.22],
          ],
      -o - 1,
      o + 1,
    ),
      U(
        i,
        `lineAmber`,
        a,
        r(3.8),
        r(3.86),
        s + 5 - 0.1,
        s + 5 + 0.26,
        -o - 1,
        o + 1,
      ),
      U(
        i,
        `ironDark`,
        a,
        r(9.15),
        r(9.4),
        s + d - 0.05,
        s + d + 0.18,
        -o - 1,
        o + 1,
      ));
    for (let e = -o + 2; e < o - 1; e += 4)
      U(
        i,
        `lampGlow`,
        a,
        r(6.2),
        r(6.32),
        s + 4.72,
        s + 4.76,
        e - 0.7,
        e + 0.7,
      );
    for (let e = 0; e < u.length - 1; e += 1) {
      let t = (u[e] + u[e + 1]) / 2;
      if (!(t > n[0] - 2 && t < n[1] + 2)) {
        (U(i, `wood`, a, r(7.05), r(7.5), s + 0.43, s + 0.47, t - 0.9, t + 0.9),
          U(
            i,
            `wood`,
            a,
            r(7.48),
            r(7.52),
            s + 0.55,
            s + 0.9,
            t - 0.9,
            t + 0.9,
          ));
        for (let e of [-0.75, 0.75])
          U(
            i,
            `ironDark`,
            a,
            r(7.1),
            r(7.5),
            s,
            s + 0.43,
            t + e - 0.03,
            t + e + 0.03,
          );
      }
    }
    for (let t of [u[0] + 4, 0, u[u.length - 1] - 4])
      Ne(c, a, r(4.6), s + 3.7, t, e, pe, 3.4, 0.58);
    Ne(c, a, r(5.3), s + 3.05, e * -8, e, he, 1.9, 0.57);
    for (let e of [u[0] + 4, 0, u[u.length - 1] - 4])
      for (let t of [-1.3, 1.3])
        U(
          i,
          `galv`,
          a,
          r(4.6) - 0.01,
          r(4.6) + 0.01,
          s + 4,
          s + 5,
          e + t,
          e + t + 0.02,
        );
  }
  for (let e of l) Fe(i, a, n, c, e.side, e.dir, r.groundY ?? (() => 0));
  let u = i.build();
  return (c.add(u), (c.userData.tris = u.userData.tris), c);
}
function Ne(e, n, r, i, a, o, s, c, l) {
  let d = j(s),
    f = new y();
  for (let e of [-1, 1]) {
    let t = new u(new h(c, l), d);
    (t.position.set(r + e * 0.035, i, a),
      (t.rotation.y = (e * Math.PI) / 2),
      f.add(t));
  }
  let p = new u(new t(0.06, l + 0.08, c + 0.08), j(`ironDark`));
  (p.position.set(r, i, a), f.add(p), f.applyMatrix4(n));
  for (let e of f.children) e.castShadow = !0;
  e.add(f);
}
function Pe(e, n) {
  if (!n) return e;
  let r = {
    add(t, n, r, i, a) {
      let o = n.index ? n.toNonIndexed() : n.clone();
      for (let e of [`position`, `normal`]) {
        let t = o.attributes[e];
        if (t)
          for (let e = 0; e < t.count; e += 3)
            for (let n = 0; n < t.itemSize; n++) {
              let r = t.array[(e + 1) * t.itemSize + n];
              ((t.array[(e + 1) * t.itemSize + n] =
                t.array[(e + 2) * t.itemSize + n]),
                (t.array[(e + 2) * t.itemSize + n] = r));
            }
      }
      e.add(t, o, r, i, a);
    },
    box(e, n, i, a, o, s, c, l, u, d) {
      o - a < 0.001 ||
        c - s < 0.001 ||
        u - l < 0.001 ||
        r.add(
          e,
          new t(o - a, c - s, u - l).translate(
            (a + o) / 2,
            (s + c) / 2,
            (l + u) / 2,
          ),
          n,
          i,
          d,
        );
    },
  };
  return r;
}
