// assets__yard-dressing-view-CwP6m0Hr 48 — math
// Lines 13434-13683 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function qa(e, t) {
  let n = U(e),
    r = new C(),
    i = Yi(t),
    a = n.pick([`square`, `square`, `hex`, `turtle`]);
  if (a === `turtle`) {
    let t = H(n.pick([3840570, 2787914, 5941306]), 0.45),
      a = H(n.pick([2783786, 3836474]), 0.45);
    (P(
      r,
      [
        [0, 0.01],
        [0.5, 0.01],
        [0.56, 0.05],
        [0.58, 0.22],
        [0.62, 0.24],
        [0.6, 0.26],
        [0.55, 0.23],
        [0.52, 0.06],
        [0, 0.06],
      ],
      t,
      0,
      0,
      0,
      36,
    ),
      j(r, 0.14, t, 0, 0.14, 0.66, 14).scale.set(1, 0.8, 1.2));
    for (let [e, n] of [
      [0.45, 0.35],
      [-0.45, 0.35],
      [0.45, -0.35],
      [-0.45, -0.35],
    ])
      j(r, 0.12, t, e, 0.05, n, 10).scale.set(1.2, 0.45, 1);
    for (let e of [-1, 1]) j(r, 0.02, H(1118481, 0.3), e * 0.06, 0.2, 0.78, 8);
    let o = aa(r);
    P(
      o,
      [
        [0.63, 0],
        [0.6, 0.12],
        [0.45, 0.24],
        [0.25, 0.3],
        [0, 0.32],
      ],
      a,
      0,
      0,
      0,
      12,
    );
    let s = ca(Xi);
    for (let e = 0; e < 7; e++) {
      let t = (e / 6) * $,
        n = e ? 0.33 : 0;
      s.add(
        Math.cos(t) * n,
        n ? 0.23 : 0.32,
        Math.sin(t) * n,
        0.1,
        6989898,
        0.03,
        0.1,
      );
    }
    return (
      s.flush(o, H(16777215, 0.45)),
      i || n.chance(0.3)
        ? ((o.position.y = 0.24),
          i && K(o, { w: 0.6, d: 0.6 }, { count: 8, y: 0.3, seed: e }))
        : (z(r, 0.52, 0.52, 0.02, Ga(), 0, 0.2, 0, 32),
          Ka(r, n, 0, 0, 0.25, 0.22),
          (o.rotation.x = Q),
          o.position.set(1, 0.33, 0.1),
          oa(o, r)),
      ha(r, i, 2.4, 2, e + 1, 50),
      R(r, { note: `turtle` })
    );
  }
  let o = G(n.pick([W.cedar, W.treated, W.redwood, W.weathered]), 0.85, 11),
    s = n.pick([0.28, 0.36]),
    c = n.range(1.5, 2.2),
    l = (e) => {
      let t = new m(e, 8).rotateX(-Q / 2),
        n = t.attributes.position;
      for (let e = 0; e < n.count; e++)
        n.setY(
          e,
          Math.sin(n.getX(e) * 5.3) * Math.cos(n.getZ(e) * 4.1) * 0.015,
        );
      return (t.computeVertexNormals(), Me(t, 1));
    };
  if (a === `square`) {
    for (let e = 0; e < s / 0.14 - 0.01; e++)
      for (let t of [-1, 1])
        (B(r, c, 0.13, 0.04, o, 0, e * 0.14, t * (c / 2 - 0.02)),
          B(r, 0.04, 0.13, c - 0.08, o, t * (c / 2 - 0.02), e * 0.14, 0));
    for (let e of [-1, 1])
      for (let t of [-1, 1])
        B(
          r,
          0.09,
          s + 0.02,
          0.09,
          o,
          e * (c / 2 - 0.045),
          0,
          t * (c / 2 - 0.045),
        );
    let t = new ie([
      new _(-c / 2 + 0.04, -c / 2 + 0.04),
      new _(c / 2 - 0.04, -c / 2 + 0.04),
      new _(c / 2 - 0.04, c / 2 - 0.04),
      new _(-c / 2 + 0.04, c / 2 - 0.04),
    ]);
    I(r, l(t), Ga(), 0, s - 0.08, 0);
    let a = i ? `closed` : n.pick([`corners`, `bench`, `none`]);
    if (a === `corners`)
      for (let e of [-1, 1])
        for (let t of [-1, 1]) {
          let n = c / 2 - 0.01,
            i = 0.42;
          ((be(
            r,
            [
              [e * n, -t * n],
              [e * (n - i), -t * n],
              [e * n, -t * (n - i)],
            ],
            0.03,
            o,
          ).rotation.x = -Q / 2),
            (r.children[r.children.length - 1].position.y = s + 0.005));
        }
    if (a === `bench`)
      for (let e of [-1, 1]) {
        for (let t = 0; t < 3; t++)
          B(
            r,
            c - 0.1,
            0.02,
            0.12,
            o,
            0,
            s + 0.005,
            e * (c / 2 - 0.1 - t * 0.13),
          );
        let t = aa(r, 0, s + 0.03, e * (c / 2 - 0.42));
        t.rotation.x = e * 0.25;
        for (let e = 0; e < 3; e++)
          B(t, c - 0.1, 0.12, 0.02, o, 0, 0.02 + e * 0.13, 0);
      }
    if (a === `closed`) {
      for (let e = 0; e < Math.floor(c / 0.14); e++)
        B(r, c, 0.02, 0.13, o, 0, s + 0.005, -c / 2 + 0.07 + e * 0.14);
      for (let e of [-1, 1])
        B(r, 0.1, 0.02, c - 0.1, o, e * c * 0.3, s + 0.025, 0);
      K(r, { w: c, d: c }, { count: 24, y: s + 0.03, seed: e });
    } else Ka(r, n, 0, 0, c * 0.3, s - 0.08);
  } else {
    c = n.range(1.6, 2.1);
    let t = c / 2,
      a = [];
    for (let e = 0; e < 6; e++) {
      let n = (e / 6) * $ + Q / 6,
        i = ((e + 1) / 6) * $ + Q / 6,
        s = Math.cos(n) * t,
        c = Math.sin(n) * t,
        l = Math.cos(i) * t,
        u = Math.sin(i) * t,
        d = Math.hypot(l - s, u - c);
      for (let e = 0; e < 2; e++)
        V(
          r,
          d + 0.02,
          0.13,
          0.04,
          o,
          ((s + l) / 2) * 0.98,
          0.065 + e * 0.14,
          ((c + u) / 2) * 0.98,
          0,
          -Math.atan2(u - c, l - s),
          0,
        );
      (B(r, 0.08, 0.3, 0.08, o, s, 0, c),
        a.push(new _(Math.cos(n) * (t - 0.05), -Math.sin(n) * (t - 0.05))));
    }
    (I(r, l(new ie(a)), Ga(), 0, 0.2, 0),
      i && n.chance(0.6)
        ? (va(
            r,
            c * 0.95,
            0.02,
            c * 0.95,
            H(n.pick([2771594, 3824170, 6969914]), 0.7),
            0,
            0.28,
            0,
            n,
            0.01,
            0,
          ),
          K(r, { w: c * 0.8, d: c * 0.8 }, { count: 20, y: 0.31, seed: e }))
        : Ka(r, n, 0, 0, c * 0.25, 0.2));
  }
  return (
    i &&
      a !== `square` &&
      K(r, { w: c * 0.6, d: c * 0.6 }, { count: 10, y: 0.21, seed: e + 5 }),
    ha(r, i, c + 1, c + 1, e + 1, 50),
    R(r, { note: a })
  );
}
function Ja(e, t, n, r, i, a, o, s, c, l, u = 0) {
  let d = new ie();
  (d.moveTo(-t / 2, 0),
    d.lineTo(t / 2, 0),
    d.lineTo(t / 2, n),
    u && d.lineTo(0, n + u),
    d.lineTo(-t / 2, n),
    d.lineTo(-t / 2, 0));
  for (let [e, t, n, r] of i) {
    let i = new w();
    (i.moveTo(e - n / 2, t),
      i.lineTo(e - n / 2, t + r),
      i.lineTo(e + n / 2, t + r),
      i.lineTo(e + n / 2, t),
      i.lineTo(e - n / 2, t),
      d.holes.push(i));
  }
  let f = new ne(d, { depth: r, bevelEnabled: !1 });
  return (f.translate(0, 0, -r / 2), I(e, f, a, o, s, c, 0, l, 0));
}
var Ya = (e) =>
  je(
    `siding`,
    (e, t, n) => {
      ((e.fillStyle = `#ffffff`), e.fillRect(0, 0, t, n));
      for (let r = 0; r < 8; r++) {
        let i = (r * n) / 8;
        ((e.fillStyle = `rgba(0,0,0,0.22)`),
          e.fillRect(0, i, t, 3),
          (e.fillStyle = `rgba(0,0,0,0.06)`),
          e.fillRect(0, i + 3, t, n / 16));
      }
    },
    { color: e, rough: 0.8 },
  );
