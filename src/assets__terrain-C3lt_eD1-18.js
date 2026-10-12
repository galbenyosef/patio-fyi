// assets__terrain-C3lt_eD1 18 — addscaledvector
// Lines 6424-6725 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function mr(e) {
  let { r: t, lod: n, wood: r, sink: i } = e,
    a = [],
    o = Y(1.1);
  for (let e = 0; e <= 50; e++) {
    let t = e / 50;
    a.push(new K(0, 9 * t, 0).addScaledVector(o, 0.6 * t * t));
  }
  let s = (e, t, n, r) => {
    e.set(10132110)
      .lerp(fn.set(14211276), Math.max(0, Math.sin(r.y * 12) - 0.7) * 3)
      .lerp(fn.set(5921360), mn(1 - r.y / 0.5, 0, 1) * 0.5);
  };
  r.push(bn(a, (e) => 0.17 - 0.07 * e + 0.1 * Math.exp(-e * 30), n ? 6 : 9, s));
  let c = [a[50]];
  new v();
  let l = _n([6982234, 8297070, 10137230, 12108974]);
  for (let e = 0; e < 4; e++) {
    let i = 0.78 + e * 0.05,
      o = a[Math.round(i * 50)],
      l = Y(e * 1.7 + 0.4 + t() * 0.3),
      u = 1.8 + t() * 0.9,
      d = o.clone().addScaledVector(An(l, 0.6), u * 0.55),
      f = d.clone().addScaledVector(An(l, 1.25), u * 0.5),
      p = [];
    for (let e = 0; e <= 8; e++) {
      let t = e / 8;
      p.push(
        o
          .clone()
          .multiplyScalar((1 - t) ** 2)
          .addScaledVector(d, 2 * t * (1 - t))
          .addScaledVector(f, t * t),
      );
    }
    (r.push(bn(p, (e) => 0.075 - 0.03 * e, n ? 5 : 7, s)), c.push(f));
  }
  for (let e of c) {
    let a = On(e.clone().addScaledVector(V, -0.2), 0.6),
      o = n ? 5 : 8;
    for (let n = 0; n < o; n++) {
      let s = Y(n * 2.39996 + t()),
        c = En(e, An(s, 0.55 - (n / o) * 0.7), 0.8 + 0.2 * t(), 2, 0.1);
      Dn(r, c.pts, 0.018, 0.012, 4, J(10127962));
      let u = c.pts[2],
        d = 1.2 + 0.3 * t(),
        f = l(t(), new v()).multiplyScalar(0.85 + 0.25 * t());
      Le(
        i,
        u.clone().addScaledVector(s, d * 0.12),
        V.clone().addScaledVector(s, 0.25).normalize(),
        s,
        d,
        d,
        q.LOBED,
        f,
        a,
        0.25,
      );
    }
  }
}
function hr(e) {
  let t = Mn(e, {
    h: 3.8,
    r0: 0.2,
    r1: 0.17,
    flare: 0.4,
    lean: 0.4,
    leanA: 2,
    rings: 40,
    radial: 11,
    bump: Bn(0.18),
    bark: zn(3022870, 5914152),
    crown: {
      n: 18,
      len: 3,
      w: 1,
      tile: q.FERN,
      eTop: 1.35,
      eBot: -0.25,
      droop: 0.7,
      keel: 0.15,
      twist: 0.3,
      stops: [8038970, 5935150, 4880936],
      dead: 0.14,
      deadStops: [8018484, 6177832],
    },
  });
  for (let n = 0; n < 5; n++)
    e.wood.push(
      xn(
        t.top
          .clone()
          .addScaledVector(Y(n * 1.3), 0.08)
          .addScaledVector(V, 0.12 + (n % 2) * 0.05),
        0.06,
        6974010,
        0,
      ),
    );
}
function gr(e, t) {
  let n = {
    ...Zn,
    trunkH: 7.2,
    trunkR: 0.32,
    lean: 0,
    wobble: 0.015,
    roots: 5,
    limbs: 4,
    limbStart: 0.88,
    spread: 0.7,
    rise: 0.3,
    limbLen: 3,
    clumpR: 1.5,
    cards: 18,
    cardSize: 1.3,
    tile: q.GLOSSY,
    barkColor: er(6974042, 9079402, 4079150),
    leafColor: Qn([3037726, 4618794, 6460986, 8433230]),
  };
  return tr(n, e, t, (e) => {
    let { r: t, wood: r, sink: i } = e,
      a = nr(n),
      o = new v(),
      s = _n([1985046, 2775580, 3040800]),
      c = [],
      l = t() * 6;
    for (let e = 0; e <= 60; e++) {
      let t = 0.05 + (6.9 * e) / 60,
        n = l + t * 1.25;
      c.push(
        Y(n)
          .multiplyScalar(a(t) + 0.03)
          .setY(t),
      );
    }
    r.push(bn(c, () => 0.035, e.lod ? 4 : 5, J(5925418)));
    let u = (e) =>
      pn
        .set(e.x, 0, e.z)
        .normalize()
        .multiplyScalar(0.75)
        .addScaledVector(V, 0.55)
        .normalize();
    for (let e = 2; e < 60; e += 3) {
      let n = c[e].y,
        a = Y(l + n * 1.25),
        d = 0.5 + (n / 6.9) * 0.85 * (0.8 + 0.4 * t());
      if (n < 1.3) {
        (o.copy(s(t())).multiplyScalar(0.9),
          Le(
            i,
            c[e].clone().addScaledVector(a, 0.03),
            a,
            V,
            0.22,
            0.26,
            q.HEART,
            o,
            u,
          ));
        continue;
      }
      let f = a
          .clone()
          .multiplyScalar(0.6)
          .addScaledVector(V, -0.8)
          .normalize(),
        p = c[e].clone().addScaledVector(a, 0.12);
      if (
        (r.push(
          z(
            c[e],
            p.clone().addScaledVector(V, 0.08),
            0.014,
            0.01,
            4,
            J(5929514),
          ),
        ),
        o.copy(s(t())).multiplyScalar(0.85 + 0.25 * t()),
        Le(
          i,
          p
            .clone()
            .addScaledVector(f, d * 0.3)
            .addScaledVector(a, 0.1),
          a.clone().multiplyScalar(0.8).addScaledVector(V, 0.6).normalize(),
          f,
          d * 0.9,
          d,
          q.MONSTERA,
          o,
          u,
          0.08,
        ),
        e % 9 == 2 && n > 2.5)
      ) {
        let n = c[e].clone().addScaledVector(a, 0.06);
        r.push(
          z(
            n,
            n
              .clone()
              .setY(0.02)
              .addScaledVector(a, 0.1 + 0.2 * t()),
            0.012,
            0.01,
            4,
            J(6967860),
          ),
        );
      }
    }
  });
}
function _r(e, t) {
  return tr(
    {
      trunkH: 3,
      trunkR: 0.2,
      lean: 0.25,
      roots: 0,
      limbs: 6,
      spread: 0.95,
      rise: 0.25,
      limbLen: 2.8,
      gnarl: 0.3,
      clumpR: 1.45,
      cards: 24,
      cardSize: 1.1,
      tile: q.ROUND,
      barkColor: er(5918272, 8023646, 3813928),
      leafColor: Qn([1980952, 2772510, 4088872, 5799476]),
    },
    e,
    t,
    (e, t, n) => {
      let { r, wood: i } = e,
        a = 1.5;
      (n.wood.translate(0, a, 0),
        n.leaves && n.leaves.translate(0, a, 0),
        i.push(wn(3, 3813408, 4866608)),
        i.push(xn(new K(0, a, 0), 0.24, 4866100, 0, 1.2)));
      let o = (e, t, n, r) =>
          e
            .set(6181444)
            .lerp(fn.set(8023128), 0.5 + 0.5 * Math.sin(t * 5 + n * 3 + r * 4))
            .lerp(fn.set(3025442), mn(1 - n / 0.4, 0, 1) * 0.6),
        s = (t, n, r) => {
          let a = t.clone().lerp(n, 0.5).addScaledVector(V, r),
            s = [];
          for (let e = 0; e <= 8; e++) {
            let r = e / 8;
            s.push(
              t
                .clone()
                .multiplyScalar((1 - r) ** 2)
                .addScaledVector(a, 2 * r * (1 - r))
                .addScaledVector(n, r * r),
            );
          }
          i.push(
            bn(
              s,
              (e) => 0.055 + 0.02 * e,
              e.lod ? 4 : 6,
              (e, t, n, r) => o(e, r.x, r.y, r.z),
            ),
          );
        };
      for (let t = 0; t < (e.lod ? 8 : 15); t++) {
        let e = Y((t / 15) * Math.PI * 2 + r() * 0.3);
        s(
          new K(0, a + r() * 1.1, 0).addScaledVector(e, 0.15),
          e
            .clone()
            .multiplyScalar(1.2 + r() * 1.5)
            .setY(-0.05),
          0.5 + 0.4 * r(),
        );
      }
      for (let e of t
        .filter((e) => e.y > 1.8 && Math.hypot(e.x, e.z) > 0.9)
        .slice(0, 60)
        .filter((e, t) => t % 12 == 0)) {
        let t = e.clone().setY(e.y + a),
          n = new K(e.x, 0, e.z).normalize();
        s(
          t,
          t
            .clone()
            .addScaledVector(n, 0.8 + r())
            .setY(-0.05),
          0.3,
        );
      }
    },
  );
}
