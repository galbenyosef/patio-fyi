// assets__yard-dressing-view-Du2F6MWT 06 — math
// Lines 1530-1877 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Dt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? 1.1,
    o = ht(n),
    s = Tt(n, i, 0.5),
    c = n.chance(0.5) ? q.peaGravel() : q.soil(),
    l = new k();
  for (let e = 0; e <= 24; e++) {
    let t = i / 2 - (e / 24) * i;
    l[e ? `lineTo` : `moveTo`](s(t) + a / 2, t);
  }
  for (let e = 24; e >= 0; e--) {
    let t = i / 2 - (e / 24) * i;
    l.lineTo(s(t) - a / 2, t);
  }
  let u = _t(l);
  Me(u, 0.8);
  let d = new v(u, c);
  ((d.position.y = 0.012), (d.receiveShadow = !0), r.add(d));
  for (let e = i / 2 - 0.2; e > -i / 2 + 0.1; e -= 0.3 + n() * 0.06) {
    let t = n.chance(0.5) ? 2 : 3;
    for (let i = 0; i < t; i++) {
      let c = s(e) + (i - (t - 1) / 2) * (a / t) + (n() - 0.5) * 0.05,
        l = Math.min((a / t / 2) * 1.3, 0.24 + n() * 0.06);
      gt(r, n, c, e + (n() - 0.5) * 0.06, l, 0.05, 0.03, o);
    }
  }
  if (c !== q.peaGravel()) {
    let e = new tt();
    for (let t = 0; t < i * 260; t++) {
      let t = (n() - 0.5) * i,
        r = s(t) + (n() - 0.5) * a;
      e.add(
        ot(),
        H(4880938, 1),
        r,
        0.02,
        t,
        0,
        0,
        0,
        0.012 + n() * 0.01,
        0.006,
        0.012 + n() * 0.01,
        n.pick([4155944, 5933620, 6982202]),
      );
    }
    e.flush(r, { cast: !1 });
  }
  return (
    bt(r, t, a, i, e, 12, { y: 0.035 }),
    R(r, {
      clear: (e, t) => Math.abs(e - s(t)) < a / 2 + 0.03 && Math.abs(t) < i / 2,
      sunk: !0,
      keepGrass: !0,
    })
  );
}
function Ot(e, t, n, r, i, a, o, s = 0.04, c = 0.1, l = 0.12) {
  let u = new tt(),
    d = H(16777215, 0.85),
    f = (e, n, r) => {
      o(e, n) &&
        u.add(
          lt(),
          d,
          e,
          s - 0.06,
          n,
          0,
          r ? 0 : Math.PI / 2,
          0,
          c * 2 - 0.006,
          0.06,
          c - 0.006,
          new y(t.pick(a)).multiplyScalar(1 - l / 2 + l * t()).getHex(),
        );
    },
    p = i === `herring45` ? Math.PI / 4 : 0,
    m = Math.cos(p),
    h = Math.sin(p),
    g = Math.hypot(n, r) / 2 + 0.4,
    _ = (e, i, g) => {
      let _ = e * m - i * h,
        v = e * h + i * m;
      if (!(Math.abs(_) > n / 2 + 0.2 || Math.abs(v) > r / 2 + 0.2)) {
        if (p) {
          if (!o(_, v)) return;
          u.add(
            lt(),
            d,
            _,
            s - 0.06,
            v,
            0,
            (g ? 0 : Math.PI / 2) - p,
            0,
            c * 2 - 0.006,
            0.06,
            c - 0.006,
            new y(t.pick(a)).multiplyScalar(1 - l / 2 + l * t()).getHex(),
          );
        } else f(_, v, g);
      }
    };
  if (i.startsWith(`herring`)) {
    let e = Math.ceil(g / c) + 4;
    for (let t = -e; t <= e; t++)
      for (let n = -e; n <= e; n++) {
        let e = (t + 2 * n) * c,
          r = (t - 2 * n) * c;
        (_(e + c, r + c / 2, !0), _(e + c / 2, r + c * 2, !1));
      }
  } else if (i === `basket`)
    for (let e = -n / 2; e < n / 2 + c * 2; e += c * 2)
      for (let t = -r / 2; t < r / 2 + c * 2; t += c * 2)
        (Math.round((e + 50) / (c * 2)) + Math.round((t + 50) / (c * 2))) % 2
          ? (f(e + c, t + c / 2, !0), f(e + c, t + c * 1.5, !0))
          : (f(e + c / 2, t + c, !1), f(e + c * 1.5, t + c, !1));
  else {
    let e = 0;
    for (let t = -r / 2 + c / 2; t < r / 2; t += c, e++)
      for (
        let r = -n / 2 + (i === `running` && e % 2 ? 0 : c);
        r < n / 2 + c;
        r += c * 2
      )
        f(r, t, !0);
  }
  let b = new v(new C(n, r).rotateX(-Math.PI / 2), q.peaGravel());
  ((b.position.y = s - 0.012),
    Me(b.geometry, 0.5),
    (b.receiveShadow = !0),
    e.add(b),
    u.flush(e));
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
        new y(t.pick(r)).multiplyScalar(0.9 + 0.15 * t()).getHex(),
      );
    }
  }
  a.flush(e);
}
function jt(e, t) {
  let n = U(e),
    r = new D(),
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
function Mt(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 6,
    a = t.w ?? 1,
    o = Tt(n, i, 0.7),
    s = n.chance(0.5) ? q.gravel() : q.peaGravel(),
    c = new k();
  for (let e = 0; e <= 30; e++) {
    let t = i / 2 - (e / 30) * i;
    c[e ? `lineTo` : `moveTo`](o(t) + a / 2, t);
  }
  for (let e = 30; e >= 0; e--) {
    let t = i / 2 - (e / 30) * i;
    c.lineTo(o(t) - a / 2, t);
  }
  let l = _t(c);
  Me(l, 0.6);
  let u = new v(l, s);
  ((u.position.y = 0.02), (u.receiveShadow = !0), r.add(u));
  let d = new tt(),
    f =
      s === q.gravel()
        ? [12104360, 8025194, 13157048, 10130570]
        : [13152400, 9073752, 14206116, 14733496];
  for (let e = 0; e < i * a * 900; e++) {
    let e = (n() - 0.5) * i,
      t = o(e) + (n() - 0.5) * a * 0.98,
      r = 0.008 + n() * 0.012;
    d.add(
      st(),
      H(16777215, 0.8),
      t,
      0.022,
      e,
      n() * 6,
      n() * 6,
      0,
      r,
      r * 0.6,
      r * (0.8 + n() * 0.4),
      n.pick(f),
    );
  }
  d.flush(r, { cast: !1 });
  let p = n.pick([`steel`, `timber`, `brick`]);
  for (let e of [-1, 1]) {
    let t = Array.from({ length: 31 }, (t, n) => {
      let r = i / 2 - (n / 30) * i;
      return [o(r) + e * (a / 2 + 0.02), r];
    });
    p === `brick`
      ? At(r, n, t, kt.red)
      : L(
          r,
          t.map(([e, t]) => [e, p === `steel` ? 0.03 : 0.04, t]),
          p === `steel` ? 0.004 : 0.04,
          p === `steel` ? H(3811874, 0.6, 0.6) : G(W.treated),
          60,
          p === `steel` ? 4 : 6,
        );
  }
  return (
    bt(r, t, a, i, e, 10, { y: 0.03 }),
    R(r, {
      clear: (e, t) => Math.abs(e - o(t)) < a / 2 + 0.06 && Math.abs(t) < i / 2,
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
function Pt(e, t, n, r, i, a = 0.04) {
  let o = new re(t, {
    depth: n,
    bevelEnabled: !0,
    bevelSize: 0.01,
    bevelThickness: 0.01,
    bevelSegments: 1,
    curveSegments: 16,
  });
  (o.rotateX(Math.PI / 2), o.translate(0, a, 0), Me(o, i));
  let s = new v(o, r);
  return ((s.castShadow = !1), (s.receiveShadow = !0), e.add(s), s);
}
var Ft = (e, t) => {
  let n = new k();
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
