// assets__yard-dressing-view-CwP6m0Hr 06 — math
// Lines 1530-1877 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
function Dt(t, n) {
  let r = U(t),
    i = new C(),
    a = n.length ?? 6,
    o = n.w ?? 1.1,
    s = ht(r),
    c = Tt(r, a, 0.5),
    l = r.chance(0.5) ? q.peaGravel() : q.soil(),
    u = new ie();
  for (let e = 0; e <= 24; e++) {
    let t = a / 2 - (e / 24) * a;
    u[e ? `lineTo` : `moveTo`](c(t) + o / 2, t);
  }
  for (let e = 24; e >= 0; e--) {
    let t = a / 2 - (e / 24) * a;
    u.lineTo(c(t) - o / 2, t);
  }
  let d = _t(u);
  Me(d, 0.8);
  let f = new e(d, l);
  ((f.position.y = 0.012), (f.receiveShadow = !0), i.add(f));
  for (let e = a / 2 - 0.2; e > -a / 2 + 0.1; e -= 0.3 + r() * 0.06) {
    let t = r.chance(0.5) ? 2 : 3;
    for (let n = 0; n < t; n++) {
      let a = c(e) + (n - (t - 1) / 2) * (o / t) + (r() - 0.5) * 0.05,
        l = Math.min((o / t / 2) * 1.3, 0.24 + r() * 0.06);
      gt(i, r, a, e + (r() - 0.5) * 0.06, l, 0.05, 0.03, s);
    }
  }
  if (l !== q.peaGravel()) {
    let e = new tt();
    for (let t = 0; t < a * 260; t++) {
      let t = (r() - 0.5) * a,
        n = c(t) + (r() - 0.5) * o;
      e.add(
        ot(),
        H(4880938, 1),
        n,
        0.02,
        t,
        0,
        0,
        0,
        0.012 + r() * 0.01,
        0.006,
        0.012 + r() * 0.01,
        r.pick([4155944, 5933620, 6982202]),
      );
    }
    e.flush(i, { cast: !1 });
  }
  return (
    bt(i, n, o, a, t, 12, { y: 0.035 }),
    R(i, {
      clear: (e, t) => Math.abs(e - c(t)) < o / 2 + 0.03 && Math.abs(t) < a / 2,
      sunk: !0,
      keepGrass: !0,
    })
  );
}
function Ot(t, n, r, i, a, o, s, c = 0.04, l = 0.1, u = 0.12) {
  let d = new tt(),
    f = H(16777215, 0.85),
    p = (e, t, r) => {
      s(e, t) &&
        d.add(
          lt(),
          f,
          e,
          c - 0.06,
          t,
          0,
          r ? 0 : Math.PI / 2,
          0,
          l * 2 - 0.006,
          0.06,
          l - 0.006,
          new v(n.pick(o)).multiplyScalar(1 - u / 2 + u * n()).getHex(),
        );
    },
    m = a === `herring45` ? Math.PI / 4 : 0,
    h = Math.cos(m),
    g = Math.sin(m),
    _ = Math.hypot(r, i) / 2 + 0.4,
    y = (e, t, a) => {
      let _ = e * h - t * g,
        y = e * g + t * h;
      if (!(Math.abs(_) > r / 2 + 0.2 || Math.abs(y) > i / 2 + 0.2)) {
        if (m) {
          if (!s(_, y)) return;
          d.add(
            lt(),
            f,
            _,
            c - 0.06,
            y,
            0,
            (a ? 0 : Math.PI / 2) - m,
            0,
            l * 2 - 0.006,
            0.06,
            l - 0.006,
            new v(n.pick(o)).multiplyScalar(1 - u / 2 + u * n()).getHex(),
          );
        } else p(_, y, a);
      }
    };
  if (a.startsWith(`herring`)) {
    let e = Math.ceil(_ / l) + 4;
    for (let t = -e; t <= e; t++)
      for (let n = -e; n <= e; n++) {
        let e = (t + 2 * n) * l,
          r = (t - 2 * n) * l;
        (y(e + l, r + l / 2, !0), y(e + l / 2, r + l * 2, !1));
      }
  } else if (a === `basket`)
    for (let e = -r / 2; e < r / 2 + l * 2; e += l * 2)
      for (let t = -i / 2; t < i / 2 + l * 2; t += l * 2)
        (Math.round((e + 50) / (l * 2)) + Math.round((t + 50) / (l * 2))) % 2
          ? (p(e + l, t + l / 2, !0), p(e + l, t + l * 1.5, !0))
          : (p(e + l / 2, t + l, !1), p(e + l * 1.5, t + l, !1));
  else {
    let e = 0;
    for (let t = -i / 2 + l / 2; t < i / 2; t += l, e++)
      for (
        let n = -r / 2 + (a === `running` && e % 2 ? 0 : l);
        n < r / 2 + l;
        n += l * 2
      )
        p(n, t, !0);
  }
  let b = new e(new D(r, i).rotateX(-Math.PI / 2), q.peaGravel());
  ((b.position.y = c - 0.012),
    Me(b.geometry, 0.5),
    (b.receiveShadow = !0),
    t.add(b),
    d.flush(t));
}
var kt = {
  red: [10107432, 11029040, 9056802, 11557434, 8006174],
  tumbled: [9071194, 10517090, 6969936, 12096632, 8020562],
  grey: [9078916, 10131088, 8026228, 11052190],
  tan: [12888708, 11836020, 13941396, 10783332],
  charcoal: [4868680, 5920852, 4079164, 6973024],
};
function At(e, t, n, r, i = 0.04) {
  let a = new tt(),
    o = H(16777215, 0.85);
  for (let e = 0; e < n.length - 1; e++) {
    let [s, c] = n[e],
      [l, u] = n[e + 1],
      d = Math.hypot(l - s, u - c),
      f = Math.max(1, Math.round(d / 0.1)),
      p = Math.atan2(u - c, l - s);
    for (let e = 0; e < f; e++) {
      let n = (e + 0.5) / f;
      a.add(
        lt(),
        o,
        s + (l - s) * n,
        i - 0.06,
        c + (u - c) * n,
        0,
        -p + Math.PI / 2,
        0,
        0.194,
        0.06,
        0.094,
        new v(t.pick(r)).multiplyScalar(0.9 + 0.15 * t()).getHex(),
      );
    }
  }
  a.flush(e);
}
function jt(e, t) {
  let n = U(e),
    r = new C(),
    i = t.length ?? 6,
    a = t.w ?? n.pick([0.9, 1.1, 1.2]),
    o = kt[n.pick(Object.keys(kt))],
    s = n.pick([`herring`, `herring45`, `running`, `basket`]);
  Ot(
    r,
    n,
    a - 0.2,
    i - 0.2,
    s,
    o,
    (e, t) => Math.abs(e) < a / 2 - 0.1 && Math.abs(t) < i / 2 - 0.1,
  );
  let c = kt[n.pick(Object.keys(kt))];
  return (
    At(
      r,
      n,
      [
        [-a / 2 + 0.05, i / 2],
        [-a / 2 + 0.05, -i / 2],
      ],
      c,
    ),
    At(
      r,
      n,
      [
        [a / 2 - 0.05, i / 2],
        [a / 2 - 0.05, -i / 2],
      ],
      c,
    ),
    bt(r, t, a, i, e, 14, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < a / 2 + 0.02 && Math.abs(t) < i / 2 + 0.02,
      sunk: !0,
    })
  );
}
function Mt(t, n) {
  let r = U(t),
    i = new C(),
    a = n.length ?? 6,
    o = n.w ?? 1,
    s = Tt(r, a, 0.7),
    c = r.chance(0.5) ? q.gravel() : q.peaGravel(),
    l = new ie();
  for (let e = 0; e <= 30; e++) {
    let t = a / 2 - (e / 30) * a;
    l[e ? `lineTo` : `moveTo`](s(t) + o / 2, t);
  }
  for (let e = 30; e >= 0; e--) {
    let t = a / 2 - (e / 30) * a;
    l.lineTo(s(t) - o / 2, t);
  }
  let u = _t(l);
  Me(u, 0.6);
  let d = new e(u, c);
  ((d.position.y = 0.02), (d.receiveShadow = !0), i.add(d));
  let f = new tt(),
    p =
      c === q.gravel()
        ? [12104360, 8025194, 13157048, 10130570]
        : [13152400, 9073752, 14206116, 14733496];
  for (let e = 0; e < a * o * 900; e++) {
    let e = (r() - 0.5) * a,
      t = s(e) + (r() - 0.5) * o * 0.98,
      n = 0.008 + r() * 0.012;
    f.add(
      st(),
      H(16777215, 0.8),
      t,
      0.022,
      e,
      r() * 6,
      r() * 6,
      0,
      n,
      n * 0.6,
      n * (0.8 + r() * 0.4),
      r.pick(p),
    );
  }
  f.flush(i, { cast: !1 });
  let m = r.pick([`steel`, `timber`, `brick`]);
  for (let e of [-1, 1]) {
    let t = Array.from({ length: 31 }, (t, n) => {
      let r = a / 2 - (n / 30) * a;
      return [s(r) + e * (o / 2 + 0.02), r];
    });
    m === `brick`
      ? At(i, r, t, kt.red)
      : L(
          i,
          t.map(([e, t]) => [e, m === `steel` ? 0.03 : 0.04, t]),
          m === `steel` ? 0.004 : 0.04,
          m === `steel` ? H(3811874, 0.6, 0.6) : G(W.treated),
          60,
          m === `steel` ? 4 : 6,
        );
  }
  return (
    bt(i, n, o, a, t, 10, { y: 0.03 }),
    R(i, {
      clear: (e, t) => Math.abs(e - s(t)) < o / 2 + 0.06 && Math.abs(t) < a / 2,
      sunk: !0,
    })
  );
}
function Nt(e, t = 0.3) {
  return ke(`conc` + e, 512, 512, (n, r, i) => {
    let a = U(e);
    Ne(
      n,
      r,
      i,
      `#b8b4ab`,
      [`#aaa69e`, `#c4c0b8`, `#a09c94`, `#bcb8b0`],
      e,
      24e3,
      [1, 2],
    );
    for (let e = 0; e < i; e += 2)
      ((n.fillStyle = `rgba(${a() < 0.5 ? `0,0,0` : `255,255,255`},${0.02 + a() * 0.03})`),
        n.fillRect(0, e, r, 1));
    for (let e = 0; e < 6; e++) {
      let e = n.createRadialGradient(0, 0, 0, 0, 0, 1);
      (e.addColorStop(0, `rgba(60,55,50,${t * a()})`),
        e.addColorStop(1, `rgba(60,55,50,0)`),
        n.save(),
        n.translate(a() * r, a() * i),
        n.scale(20 + a() * 60, 12 + a() * 40),
        (n.fillStyle = e),
        n.beginPath(),
        n.arc(0, 0, 1, 0, 7),
        n.fill(),
        n.restore());
    }
  });
}
function Pt(t, n, r, i, a, o = 0.04) {
  let s = new ne(n, {
    depth: r,
    bevelEnabled: !0,
    bevelSize: 0.01,
    bevelThickness: 0.01,
    bevelSegments: 1,
    curveSegments: 16,
  });
  (s.rotateX(Math.PI / 2), s.translate(0, o, 0), Me(s, a));
  let c = new e(s, i);
  return ((c.castShadow = !1), (c.receiveShadow = !0), t.add(c), c);
}
var Ft = (e, t) => {
  let n = new ie();
  return (
    n.moveTo(-e / 2, -t / 2),
    n.lineTo(e / 2, -t / 2),
    n.lineTo(e / 2, t / 2),
    n.lineTo(-e / 2, t / 2),
    n.lineTo(-e / 2, -t / 2),
    n
  );
};
function It(e, t, n, r, i, a = !1, o = 0) {
  let s = H(4867648, 0.95);
  for (let a = -n / 2 + r; a < n / 2 - 0.2; a += r)
    V(e, t - 0.02, 0.004, 0.012, s, o, i + 0.001, a);
  a && V(e, 0.012, 0.004, n - 0.02, s, o, i + 0.001, 0);
}
