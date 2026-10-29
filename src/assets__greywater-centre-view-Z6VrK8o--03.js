// assets__greywater-centre-view-Z6VrK8o- 03 — math
// Lines 571-728 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function je(e, t = {}) {
  let n = t.deckY ?? L.deckY,
    r = t.span ?? L.span,
    i = e.getLength(),
    a = new j(),
    o = (t.stations ?? []).map((e) => ({
      ...e,
      s0: e.at - e.length / 2,
      s1: e.at + e.length / 2,
    })),
    s =
      t.joints ??
      (() => {
        let e = Math.max(1, Math.round(i / r));
        return Array.from({ length: e + 1 }, (t, n) => (n * i) / e);
      })(),
    c = s.length - 1,
    l = 0.03,
    u = R(z(0, 0.83, 0, 0.32), L.walkIn),
    d = t.groundY ?? (() => 0);
  for (let t = 0; t < c; t++) {
    let r = s[t] + l,
      i = s[t + 1] - l,
      c = be(e, r, i, 2, n);
    V(a, `precast`, he, c, { caps: !0 });
    for (let e of [-L.track, L.track]) {
      V(a, `precastDark`, R(z(-1.35, 1.35, 0, L.slabTop), e), c);
      for (let t of [-L.gauge / 2 - 0.036, L.gauge / 2 + 0.036]) {
        let n = R(_e, e + t, L.slabTop + 0.012);
        V(
          a,
          n.map((e, t) => (t === 6 ? `railHead` : `railRust`)),
          n,
          c,
        );
      }
    }
    for (let [t, s] of Oe(
      [[r, i]],
      o.map((e) => [e.s0 - 2.3, e.s1 + 2.3]),
    )) {
      let r = be(e, t, s, 2, n);
      for (let e of [u, ve(u)]) V(a, `precastDark`, e, r, { caps: !0 });
      for (let e of [ge, ve(ge)]) V(a, `precast`, e, r, { caps: !0 });
      for (let r = t + 0.75; r < s; r += 1.5) {
        let t = B(e, r, n);
        for (let e of [-1, 1])
          U(
            a,
            `rubberPad`,
            t.M,
            e * L.walkIn,
            e * (L.walkIn + 0.83),
            0.32,
            0.325,
            -0.015,
            0.015,
          );
      }
    }
    for (let t = r + 0.3; t < i; t += 0.65) {
      let r = B(e, t, n);
      for (let e of [-L.track, L.track])
        for (let t of [-L.gauge / 2 - 0.036, L.gauge / 2 + 0.036]) {
          let n = e + t;
          U(
            a,
            `rubberPad`,
            r.M,
            n - 0.17,
            n + 0.17,
            L.slabTop,
            L.slabTop + 0.012,
            -0.09,
            0.09,
          );
          for (let e of [-1, 1])
            U(
              a,
              `ironDark`,
              r.M,
              n + e * 0.1 - 0.035,
              n + e * 0.1 + 0.035,
              L.slabTop + 0.012,
              L.slabTop + 0.05,
              -0.05,
              0.05,
            );
        }
    }
  }
  for (let r = 0; r <= c; r++) {
    let o = B(e, s[r], n);
    U(a, `ironDark`, o.M, -4.3, 4.3, 0, 0.012, -0.16, 0.16);
    let l =
      r > 0 && r < c
        ? o
        : t.endPiers === !1
          ? null
          : B(e, Math.min(i - 0.6, Math.max(0.6, s[r])), n);
    l && ke(a, l, n, { drain: r % 3 == 1, ground: d(l.pos.x, l.pos.z) });
  }
  let f = [];
  for (let e = 0; e <= c; e += 2) {
    let t = Math.min(i - 0.4, Math.max(0.4, s[e]));
    o.some((e) => t > e.s0 - 3 && t < e.s1 + 3) || f.push(t);
  }
  for (let e of o) f.push(e.s0 - 4, e.s1 + 4);
  if (
    (f.sort((e, t) => e - t),
    f.forEach((t, r) => Ae(a, B(e, t, n), r % 2 ? 0.2 : -0.2)),
    t.wires !== !1)
  )
    for (let t = 0; t < f.length - 1; t++) {
      let r = f[t],
        i = f[t + 1],
        o = be(e, r, i, 3, n),
        s = t % 2 ? 0.2 : -0.2;
      for (let t of [-1, 1]) {
        let c = t * L.track,
          l = (e) => {
            let t = (e - r) / (i - r);
            return -4.2 * t * (1 - t);
          };
        V(a, `wire`, R(z(-0.012, 0.012, 0, 0.024), c, L.messY), o, { yOff: l });
        let u = o.map((e) => {
          let n = (e.s - r) / (i - r),
            a = t * (s + -2 * s * n);
          return { ...e, pos: e.pos.clone().addScaledVector(e.side, a) };
        });
        V(a, `wire`, R(z(-0.008, 0.008, 0, 0.016), c, L.wireY), u);
        for (let o = r + 4; o < i - 2; o += 6) {
          let u = B(e, o, n),
            d = (o - r) / (i - r),
            f = t * (s - 2 * s * d);
          U(
            a,
            `wire`,
            u.M,
            c + f - 0.006,
            c + f + 0.006,
            L.wireY,
            L.messY + l(o),
            -0.006,
            0.006,
          );
        }
      }
    }
  let p = a.build();
  for (let t of o) p.add(Me(B(e, t.at, n), t.length, n, { ...t, groundY: d }));
  return (
    (p.userData.tris =
      (p.userData.tris ?? 0) +
      p.children.reduce((e, t) => e + (t.userData.tris ?? 0), 0)),
    p
  );
}
