// assets__yard-dressing-view-Du2F6MWT 23 — fillrect
// Lines 6592-6876 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
var qr = (e) =>
    je(
      `plaster` + e,
      (t, n, r) =>
        Ne(
          t,
          n,
          r,
          e,
          [`#ffffff`, `#c8dde4`, `#a8c4cc`, `#e4f0f2`, `#8aaab8`],
          31,
          2e4,
          [1, 2],
        ),
      { rough: 0.7, extra: { side: Tr } },
    ),
  Jr = [
    [`#2a6ab0`, `#3a80c0`],
    [`#1f5a8a`, `#2f7aa0`],
    [`#3a9aa8`, `#2a8090`],
    [`#1c3a6a`, `#6a8ab0`],
    [`#e8e4d8`, `#1f4a7a`],
    [`#4a7a6a`, `#2a5a5a`],
  ],
  Yr = ([e, t]) =>
    je(
      `ptile` + e + t,
      (n, r, i) => {
        let a = r / 8,
          o = U(33);
        ((n.fillStyle = `#d8dcd8`), n.fillRect(0, 0, r, i));
        for (let r = 0; r < 8; r++)
          for (let i = 0; i < 8; i++)
            ((n.fillStyle = o() < 0.5 ? e : t),
              n.fillRect(r * a + 2, i * a + 2, a - 4, a - 4));
      },
      { rough: 0.25, extra: { side: Tr } },
    ),
  Xr = {
    concrete: () => q.concrete(),
    cool: () =>
      je(
        `cooldeck`,
        (e, t, n) =>
          Ne(
            e,
            t,
            n,
            `#d6c6a6`,
            [`#c4b08c`, `#e6dac0`, `#b8a484`, `#efe4cc`],
            34,
            3e4,
            [1, 3],
          ),
        { rough: 0.95 },
      ),
    pavers: () =>
      je(
        `pavers`,
        (e, t, n) => {
          let r = U(35),
            i = [`#b08a6a`, `#9a7458`, `#c49a78`, `#a88062`, `#8a6a52`];
          ((e.fillStyle = `#6a6056`), e.fillRect(0, 0, t, n));
          let a = t / 4,
            o = n / 8;
          for (let t = 0; t < 8; t++)
            for (let n = -1; n < 5; n++)
              ((e.fillStyle = i[Math.floor(r() * i.length)]),
                e.fillRect(
                  n * a + ((t % 2) * a) / 2 + 2,
                  t * o + 2,
                  a - 4,
                  o - 4,
                ));
        },
        { rough: 0.9 },
      ),
    travertine: () =>
      je(
        `travertine`,
        (e, t, n) => {
          let r = U(36),
            i = [`#e6dcc6`, `#dccfb4`, `#efe6d2`, `#d4c4a6`];
          ((e.fillStyle = `#c8bca4`), e.fillRect(0, 0, t, n));
          let a = t / 2,
            o = n / 3;
          for (let t = 0; t < 3; t++)
            for (let n = 0; n < 2; n++)
              ((e.fillStyle = i[Math.floor(r() * i.length)]),
                e.fillRect(n * a + 2, t * o + 2, a - 3, o - 3));
          for (let i = 0; i < 2e3; i++)
            ((e.fillStyle = `rgba(160,140,110,0.25)`),
              e.fillRect(r() * t, r() * n, 1 + r() * 3, 1));
        },
        { rough: 0.8 },
      ),
  },
  Zr = { concrete: 2, cool: 2, pavers: 1.2, travertine: 1.2 },
  Qr = (e) =>
    je(
      `seedmix` + e,
      (t, n, r) =>
        Ne(
          t,
          n,
          r,
          e ? `#1a1816` : `#3a3430`,
          e
            ? [`#2a2622`, `#0e0c0a`, `#3a3632`]
            : [
                `#1a1816`,
                `#d8c080`,
                `#8a8680`,
                `#c8a860`,
                `#e8e0c8`,
                `#4a4440`,
              ],
          37 + e,
          12e3,
          [2, 5],
        ),
      { rough: 0.9 },
    ),
  $r = () => G(W.treated, 0.85, 5);
function ei(t, n, r, i, a = 22, o = 8) {
  let s = new e(
      n.map((e) => (e.isVector3 ? e : X(...e))),
      !1,
      `centripetal`,
    ),
    c = Math.max(8, Math.round(s.getLength() * a)),
    l = s.getSpacedPoints(c);
  return (
    l.some((e) => e.y < r * 0.85) &&
      (s = new e(
        l.map((e) => e.setY(Math.max(e.y, r * 0.85))),
        !1,
        `centripetal`,
      )),
    Nr(t, new f(s, c, r, o, !1), i),
    s
  );
}
function ti(e, t, n, r = 0.009, i = !1) {
  let a = Dr();
  ((n = n.clone().normalize()),
    Z(
      e,
      r * 1.25,
      r * 1.25,
      0.028,
      a,
      t.clone().addScaledVector(n, -0.026),
      n,
      10,
    ),
    Z(
      e,
      r * (i ? 1.45 : 1.8),
      r * (i ? 1.45 : 1.8),
      0.022,
      a,
      t,
      n,
      i ? 10 : 6,
    ),
    i &&
      Z(
        e,
        r * 1.2,
        r * 1.2,
        0.016,
        a,
        t.clone().addScaledVector(n, 0.022),
        n,
        10,
      ));
}
var ni = (e) => ({
  p0: e.getPointAt(0),
  d0: e.getTangentAt(0).negate(),
  p1: e.getPointAt(1),
  d1: e.getTangentAt(1),
});
function ri(e, t, n, r, i = 1.45) {
  let a = new D(),
    o = t.pick([`pistol`, `pistol`, `dial`, `twist`]),
    s = t.pick([
      H(2763306, 0.5),
      H(14211804, 0.3, 0.8),
      he(t.pick([3108816, 15245344, 13777450, 3842120])),
    ]),
    c = H(t.pick([1710618, 3108816, 14707226, 3842120]), 0.7);
  return (
    Z(a, 0.014, 0.014, 0.024, Dr(), X(0, 0, -0.004), X(0, 0, 1), 10),
    o === `twist`
      ? Z(a, 0.015, 0.008, 0.11, Dr(), X(0, 0, 0.02), X(0, 0, 1), 14)
      : (Z(a, 0.014, 0.012, 0.12, s, X(0, 0, 0.018), X(0, 0, 1), 12),
        F(a, 0.028, 0.12, 0.034, 0.01, c, 0, -0.052, 0.03, 0.38),
        F(a, 0.012, 0.085, 0.018, 0.005, s, 0, -0.048, 0.08, 0.12),
        o === `dial`
          ? (Z(a, 0.042, 0.042, 0.03, c, X(0, 0, 0.13), X(0, 0, 1), 20),
            Z(
              a,
              0.03,
              0.03,
              0.004,
              H(3355443, 0.4),
              X(0, 0, 0.16),
              X(0, 0, 1),
              16,
            ))
          : Z(a, 0.017, 0.019, 0.025, c, X(0, 0, 0.13), X(0, 0, 1), 12)),
    a.position.copy(n),
    a.lookAt(n.clone().add(r)),
    a.rotateZ(i),
    e.add(a),
    a
  );
}
function ii(e, t, n, r, i = 0) {
  let a = new D(),
    o = Dr();
  (Z(a, 0.013, 0.013, 0.07, o, X(0, 0, -0.03), X(0, 0, 1), 10),
    j(a, 0.021, o, 0, 0, 0.042, 10),
    Z(a, 0.006, 0.006, 0.045, o, X(0, 0.01, 0.042), X(0, 1, 0), 8),
    I(
      a,
      new d(0.024, 0.005, 6, 18),
      ai(11545122),
      0,
      0.056,
      0.042,
      Math.PI / 2,
    ));
  for (let e = 0; e < 3; e++)
    V(
      a,
      0.046,
      0.004,
      0.005,
      ai(11545122),
      0,
      0.056,
      0.042,
      0,
      (e * Math.PI) / 3,
      0,
    );
  (Z(a, 0.012, 0.011, 0.048, o, X(0, -0.008, 0.052), X(0, -1, 0.35), 10),
    z(a, 0.012, 0.012, 0.025, o, 0, 0.012, 0.075, 10),
    a.position.set(t, n, r),
    (a.rotation.y = i),
    e.add(a),
    a.updateMatrix());
  let s = X(0, -1, 0.35).normalize();
  return {
    out: X(0, -0.008, 0.052).addScaledVector(s, 0.048).applyMatrix4(a.matrix),
    dir: s.applyAxisAngle(wr, i),
  };
}
var ai = (e) => H(e, 0.5, 0.2);
function oi(e, t, n, r, i = 0) {
  let a = new D();
  (a.position.set(n, 0, r), (a.rotation.y = i), e.add(a));
  let o = t.range(0.55, 0.75);
  (B(a, 0.09, o + 0.1, 0.09, $r(), 0, 0, -0.06),
    z(a, 0.011, 0.011, o, H(12088115, 0.4, 0.8), 0, 0, 0, 10));
  for (let e of [0.15, o - 0.08])
    V(a, 0.05, 0.02, 0.03, H(7829367, 0.4, 0.8), 0, e, -0.005);
  let s = ii(a, 0, o + 0.01, 0.015, 0);
  return (
    a.updateMatrix(),
    { out: s.out.applyMatrix4(a.matrix), dir: s.dir.applyAxisAngle(wr, i) }
  );
}
var si = {
  cardinal: [12591130, 11541012, 1710618, 14707232],
  jay: [3828424, 15263976, 1710618, 2236962],
  chickadee: [9079430, 15261904, 1315860, 2236962],
  goldfinch: [15912992, 15912992, 1710618, 14721120],
  sparrow: [9071176, 13154458, 5914672, 6969930],
  junco: [4869718, 15263972, 3817030, 15255736],
  titmouse: [10133156, 15261912, 9080468, 3355443],
};
