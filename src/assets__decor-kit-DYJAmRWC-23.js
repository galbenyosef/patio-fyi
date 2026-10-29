// assets__decor-kit-DYJAmRWC 23 — math
// Lines 6704-6916 of readable/assets__decor-kit-DYJAmRWC.pretty.js (statement-aligned).
function Mn(t) {
  let n = x(t),
    r = new f(),
    i = n.pick([2.4, 3, 3.6, 4.2]),
    a = i > 3 ? 1.22 : 1.07,
    o = n.range(0.035, 0.05),
    s = 0.74,
    c = n.pick([`rect`, `boat`, `racetrack`]),
    l = n.pick([
      R.walnut,
      R.oak,
      R.espresso,
      R.cherry,
      R.maple,
      15526628,
      2763565,
    ]),
    u = U(l, l === 15526628 ? 0.35 : 0.45),
    d = U(N(l, 0.8), 0.5),
    p = [],
    m = (e) =>
      c === `boat` ? (a / 2) * (1 - 0.3 * ((2 * e) / i) ** 2) : a / 2;
  if (c === `racetrack`) {
    let e = a / 2,
      t = i / 2 - e;
    for (let n = 0; n <= 24; n++) {
      let r = -Math.PI / 2 + (n / 24) * Math.PI;
      p.push([t + Math.cos(r) * e, Math.sin(r) * e]);
    }
    for (let n = 0; n <= 24; n++) {
      let r = Math.PI / 2 + (n / 24) * Math.PI;
      p.push([-t + Math.cos(r) * e, Math.sin(r) * e]);
    }
  } else {
    let e = 0.06,
      t = i / 2;
    for (let n = 0; n <= 24; n++) {
      let r = -t + e + (n / 24) * (i - 2 * e);
      p.push([r, -m(r)]);
    }
    for (let n = 0; n <= 24; n++) {
      let r = t - e - (n / 24) * (i - 2 * e);
      p.push([r, m(r)]);
    }
  }
  let h = re(r, p, o, u, 0, s - o, 0, 0.004);
  ((h.rotation.x = Math.PI / 2), (h.position.y = s));
  let _ = n.pick([`slab`, `drum`, `trestle`]),
    v =
      _ === `trestle`
        ? n.pick([E(), O()])
        : n.chance(0.5)
          ? d
          : U(2763565, 0.4, 0.4),
    y = i >= 3.6 ? [-i * 0.3, 0, i * 0.3] : [-i * 0.28, i * 0.28];
  for (let e of y)
    if (_ === `slab`)
      (z(r, 0.06, s - o, a * 0.55, v, e, 0, 0),
        z(r, 0.1, 0.02, a * 0.62, v, e, 0, 0));
    else if (_ === `drum`)
      (L(r, 0.16, 0.16, s - o - 0.02, v, e, 0.02, 0, 28),
        L(r, 0.3, 0.3, 0.02, v, e, 0, 0, 28));
    else {
      for (let t of [-1, 1]) z(r, 0.05, s - o, 0.05, v, e, 0, t * a * 0.34);
      (z(r, 0.05, 0.05, a * 0.72, v, e, s - o - 0.05, 0),
        z(r, 0.06, 0.02, 0.1, v, e, 0, a * 0.34),
        z(r, 0.06, 0.02, 0.1, v, e, 0, -a * 0.34));
    }
  _ === `trestle` && z(r, i * 0.6, 0.05, 0.04, v, 0, s - o - 0.05, 0);
  let ee = U(1908256, 0.45, 0.5);
  for (let e of y.length === 3 ? [-i * 0.22, i * 0.22] : [0]) {
    B(r, 0.24, 0.004, 0.1, ee, e, 0.742, 0);
    for (let t = 0; t < 3; t++)
      B(
        r,
        0.03,
        0.001,
        0.018,
        U(1118481, 0.6),
        e - 0.06 + t * 0.06,
        0.7444999999999999,
        0.02,
      );
  }
  let te = new e(new g(0.13, 0.15, 0.03, 3), U(2763566, 0.45));
  (te.position.set(y.length === 3 ? 0 : i * 0.18, 0.755, 0),
    (te.rotation.y = n.range(0, 2)),
    (te.castShadow = !0),
    r.add(te),
    b(r, 0.02, V(4436223, 0.9), te.position.x, 0.77, 0, 10));
  let S = Math.floor(i / 0.75);
  for (let e = 0; e < S; e++)
    for (let t of [-1, 1]) {
      if (!n.chance(0.45)) continue;
      let a = -i / 2 + ((e + 0.5) * i) / S,
        o = t * (m(a) - 0.2);
      (z(
        r,
        0.21,
        0.008,
        0.28,
        U(n.pick([16184556, 15917690, 16053488]), 0.9),
        a,
        s,
        o,
        n.range(-0.2, 0.2),
      ),
        C(
          r,
          [a + 0.12, 0.744, o - 0.06],
          [a + 0.13, 0.744, o + 0.08],
          0.004,
          w(n.pick([1907999, 2052e3, 13181724])),
          6,
        ),
        n.chance(0.4) &&
          D(
            r,
            [
              [0, 0],
              [0.03, 0],
              [0.036, 0.11],
              [0, 0.11],
            ],
            U(14675698, 0.05, 0, {
              transparent: !0,
              opacity: 0.35,
              depthWrite: !1,
            }),
            a - 0.2,
            s,
            o * 0.8,
            16,
          ));
    }
  return F(r, { note: `${i} m ${c}, ${_} base` });
}
function Nn(t) {
  let n = x(t),
    i = new f(),
    a = n.pick([`flat`, `parabolic`, `prismatic`, `basket`]),
    o = a === `parabolic` || n.chance(0.6),
    s = 0.6,
    c = o ? 1.2 : 0.6,
    l = U(16053490, 0.45, 0.1);
  for (let e of [-1, 1])
    (B(i, 0.65, 0.008, 0.024, l, 0, -0.004, e * (c / 2 + 0.012)),
      B(i, 0.024, 0.008, c, l, e * 0.312, -0.004, 0));
  z(i, s, 0.02, c, l, 0, -0.02, 0);
  let u = V(16054527, 0);
  if (a === `flat`)
    Tn(i, B(i, 0.57, 0.004, c - 0.03, u, 0, -0.021, 0).material, 1.6);
  else if (a === `prismatic`) {
    let e = P(128, 256, (e, t, n) => {
        ((e.fillStyle = `#e9edf2`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `rgba(160,170,185,0.5)`));
        for (let r = 0; r < n; r += 6)
          for (let n = (r / 6) % 2 ? 3 : 0; n < t; n += 6)
            e.fillRect(n, r, 2, 2);
      }),
      t = new r({
        map: e,
        color: 16054527,
        emissive: 16054527,
        emissiveMap: e,
        emissiveIntensity: 0,
        roughness: 0.4,
      }),
      n = Dn(i, 0.5599999999999999, c - 0.04, t, 0, -0.021, 0);
    ((n.rotation.x = Math.PI / 2), Tn(i, t, 1.6));
    for (let e of [-1, 1])
      B(i, 0.02, 0.012, c - 0.02, l, e * (s / 2 - 0.02), -0.02 - 0.006, 0);
  } else if (a === `basket`) {
    Tn(i, B(i, 0.52, 0.004, c - 0.03, u, 0, -0.021, 0).material, 1.6);
    let t = new e(
      new g(0.2, 0.2, c - 0.04, 24, 1, !0, Math.PI / 2 + 0.6, Math.PI - 1.2),
      U(16185336, 0.35, 0, { transparent: !0, opacity: 0.85, side: 2 }),
    );
    ((t.rotation.x = Math.PI / 2),
      t.position.set(0, -0.02 + 0.14, 0),
      i.add(t));
    for (let e of [-1, 1])
      B(i, 0.06, 0.004, c - 0.03, l, e * (s / 2 - 0.04), -0.022, 0);
  } else {
    Tn(i, B(i, 0.57, 0.004, c - 0.03, u, 0, -0.012, 0).material, 1.6);
    let e = U(14212578, 0.15, 1),
      t = 0.045;
    for (let n = 0; n <= 3; n++)
      B(
        i,
        0.004,
        t,
        c - 0.02,
        e,
        -0.29 + (n * 0.58) / 3,
        -0.032499999999999994,
        0,
      );
    for (let n = 0; n <= 6; n++)
      B(
        i,
        0.58,
        t,
        0.004,
        e,
        0,
        -0.032499999999999994,
        -c / 2 + 0.01 + (n * (c - 0.02)) / 6,
      );
  }
  return F(i, { ceiling: !0, light: !0, note: `${o ? `2x4` : `2x2`} ${a}` });
}
