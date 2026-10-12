// assets__yard-dressing-view-Du2F6MWT 09 — math
// Lines 2525-2855 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Jt(e, t) {
  let n = U(e),
    r = new D(),
    i = new tt(),
    o = t.length ?? 5,
    s = t.h ?? 0.8 + n() * 0.8,
    c = 0.6 + n() * 0.3,
    l = n.pick([`privet`, `boxwood`, `arborvitae`]);
  if (l === `arborvitae`)
    for (let e = -o / 2 + 0.4; e < o / 2; e += 0.8) {
      let t = 2.2 + n() * 0.6,
        o = H(1979416, 1),
        s = new v(new a(0.42, t, 10), o);
      (s.position.set(e, t / 2 + 0.1, 0),
        (s.castShadow = s.receiveShadow = !0),
        r.add(s),
        dt(r, i, n, e, 0.1, 0, {
          rx: 0.42,
          ry: t / 2,
          colors: [2771490, 3364906, 4088368],
          size: 0.045,
          density: 900,
          core: 1715732,
        }));
    }
  else
    dt(r, i, n, 0, 0, 0, {
      boxed: { w: o, h: s, d: c },
      colors:
        l === `privet`
          ? [4090410, 4880434, 5669946]
          : [3035682, 3694120, 4352046],
      size: l === `privet` ? 0.04 : 0.028,
      density: 1400,
      core: 1715732,
    });
  return (
    i.flush(r),
    bt(r, t, o, 2.2, e, 15, {
      area: { inside: (e, t) => Math.abs(t) > c / 2 + 0.02 },
    }),
    R(r, {})
  );
}
function Yt(e, t, n) {
  let r = new k(),
    i = -t / 2,
    a = t / 2 - n * 1.2;
  return (
    r.moveTo(-e / 2, i),
    r.lineTo(e / 2, i),
    r.lineTo(e / 2, a),
    r.quadraticCurveTo(e / 2, t / 2, e / 2 + n, t / 2),
    r.lineTo(-e / 2 - n, t / 2),
    r.quadraticCurveTo(-e / 2, t / 2, -e / 2, a),
    r.lineTo(-e / 2, i),
    r
  );
}
var Xt = (e, t, n) => (r, i) =>
  i > -t / 2 - 0.02 &&
  i < t / 2 + 0.02 &&
  Math.abs(r) <
    e / 2 +
      0.02 +
      (i > t / 2 - n * 1.2
        ? n * ((i - (t / 2 - n * 1.2)) / (n * 1.2)) ** 2
        : 0);
function Zt(e, t, n, r, i, a) {
  let o = ke(
      `decal` + r + t + n,
      512,
      Math.round((512 * n) / t) | 0 || 512,
      (e, t, n) => i(e, t, n, U(r)),
      !1,
    ),
    s = new v(
      new C(t, n).rotateX(-Math.PI / 2),
      new b({
        map: o,
        transparent: !0,
        roughness: 0.9,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
    );
  return ((s.position.y = a), (s.receiveShadow = !0), e.add(s), s);
}
var Qt = (e, t, n, r, i = 5, a = 0.35) => {
    for (let o = 0; o < i; o++) {
      let i = t * (0.3 + r() * 0.4),
        o = n * (0.2 + r() * 0.5),
        s = e.createRadialGradient(i, o, 0, i, o, 20 + r() * 50);
      (s.addColorStop(0, `rgba(30,26,22,${a * (0.5 + r() * 0.5)})`),
        s.addColorStop(1, `rgba(30,26,22,0)`),
        (e.fillStyle = s),
        e.fillRect(0, 0, t, n));
    }
  },
  $t = (e, t, n, r, i = 8) => {
    e.strokeStyle = `rgba(20,20,20,0.7)`;
    for (let a = 0; a < i; a++) {
      let i = r() * t,
        a = r() * n;
      ((e.lineWidth = 0.8 + r() * 1.2), e.beginPath(), e.moveTo(i, a));
      for (let t = 0; t < 14; t++)
        ((i += (r() - 0.5) * 30), (a += (r() - 0.5) * 30 + 6), e.lineTo(i, a));
      e.stroke();
    }
  },
  en = (e, t, n, r, i = 0.12) => {
    for (let r of [0.3, 0.7]) {
      let a = e.createLinearGradient(t * r - 30, 0, t * r + 30, 0);
      (a.addColorStop(0, `rgba(20,20,20,0)`),
        a.addColorStop(0.5, `rgba(20,20,20,${i})`),
        a.addColorStop(1, `rgba(20,20,20,0)`),
        (e.fillStyle = a),
        e.fillRect(t * r - 30, 0, 60, n));
    }
  };
function tn(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.pick([3.6, 5.5, 6]),
    a = t.length ?? 10,
    o = 0.7,
    s = new b({ map: Nt((e % 4) + 50, 0.2), roughness: 0.9 });
  (Pt(r, Yt(i, a, o), 0.12, s, 2.2),
    It(r, i, a - o * 1.2, n.pick([3, 3.5, 4]), 0.04, i > 4.5, 0));
  let c = H(5917242, 1);
  return (
    V(r, i, 0.005, 0.02, c, 0, 0.042, a / 2 - o * 1.2),
    Zt(
      r,
      i,
      a,
      e + 3,
      (e, t, n, r) => {
        (en(e, t, n, r), Qt(e, t, n * 0.4, r, 3, 0.3));
      },
      0.043,
    ),
    bt(r, t, i, a, e, 6, {
      y: 0.046,
      area: {
        inside: (e, t) =>
          Math.abs(e) < i / 2 - 0.1 &&
          n() < (Math.abs(e) > i / 2 - 0.5 ? 1 : 0.2),
      },
    }),
    R(r, { clear: Xt(i, a, o), sunk: !0, drive: { w: i, l: a } })
  );
}
function nn(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.pick([3.2, 3.8, 5.5]),
    a = t.length ?? 10,
    o = 0.9,
    s = n.chance(0.4),
    c = new b({
      map: q.asphalt().map,
      roughness: s ? 0.75 : 0.95,
      color: s ? 10526880 : 15789286,
    });
  if (
    (Pt(r, Yt(i, a, o), 0.1, c, 1.2),
    Zt(
      r,
      i + o * 2,
      a,
      e + 7,
      (e, t, n, r) => {
        (s || $t(e, t, n, r, 10),
          en(e, t, n, r, 0.08),
          Qt(e, t, n * 0.4, r, 2, 0.3));
      },
      0.043,
    ),
    !s)
  ) {
    let e = new tt();
    for (let t = 0; t < a * 30; t++) {
      let t = (n() - 0.5) * a,
        r = n() < 0.5 ? -1 : 1;
      e.add(
        st(),
        H(4079164, 0.9),
        r * (i / 2 + n() * 0.08),
        0.02,
        t,
        n() * 6,
        n() * 6,
        0,
        0.02 + n() * 0.02,
        0.012,
        0.02,
        null,
      );
    }
    e.flush(r, { cast: !1 });
  }
  return (
    bt(r, t, i, a, e, 6, { y: 0.046 }),
    R(r, { clear: Xt(i, a, o), sunk: !0, drive: { w: i, l: a } })
  );
}
function rn(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? 3.4,
    a = t.length ?? 10,
    o = new tt(),
    c = n.pick([q.gravel(), q.peaGravel()]),
    l = new C(i, a, 24, 60).rotateX(-Math.PI / 2),
    u = l.attributes.position,
    d = new Float32Array(u.count * 3);
  for (let e = 0; e < u.count; e++) {
    let t = u.getX(e),
      n = Math.min(Math.abs(Math.abs(t) - 0.8), 0.3) / 0.3;
    u.setY(e, 0.02 + 0.015 * n + 0.006 * Math.sin(u.getZ(e) * 3 + t * 5));
    let r = 0.8 + 0.2 * n;
    d.set([r, r, r], e * 3);
  }
  (l.setAttribute(`color`, new s(d, 3)), l.computeVertexNormals(), Me(l, 0.8));
  let f = new v(l, new b({ map: c.map, vertexColors: !0, roughness: 0.95 }));
  ((f.receiveShadow = !0), r.add(f));
  let p =
    c === q.gravel()
      ? [12104360, 8025194, 13157048, 10130570, 6972508]
      : [13152400, 9073752, 14206116, 14733496];
  for (let e = 0; e < i * a * 220; e++) {
    let e = (n() - 0.5) * i,
      t = (n() - 0.5) * a;
    if (Math.abs(Math.abs(e) - 0.8) < 0.2 && n() < 0.6) continue;
    let r = 0.008 + n() * 0.014;
    o.add(
      st(),
      H(16777215, 0.8),
      e,
      0.03,
      t,
      n() * 6,
      n() * 6,
      0,
      r,
      r * 0.6,
      r,
      n.pick(p),
    );
  }
  n.chance(0.5) &&
    Ve(
      r,
      { w: 0.5, d: a, inside: (e) => Math.abs(e) < 0.25 },
      { seed: e, density: 250, h: 0.08, tones: Be.shaggy, y: 0.03 },
    );
  for (let e of [-1, 1])
    B(r, 0.1, 0.1, a, G(W.treated), e * (i / 2 + 0.05), -0.04, 0);
  return (
    o.flush(r, { cast: !1 }),
    bt(r, t, i, a, e, 6, { y: 0.045 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < i / 2 + 0.1 && Math.abs(t) < a / 2,
      sunk: !0,
      drive: { w: i, l: a },
    })
  );
}
function an(e, t) {
  let n = U(e),
    r = new D(),
    i = t.w ?? n.pick([3.4, 5.5]),
    a = t.length ?? 8,
    o = kt[n.pick([`tumbled`, `grey`, `tan`, `charcoal`, `red`])];
  Ot(
    r,
    n,
    i - 0.24,
    a - 0.24,
    n.pick([`herring`, `herring45`, `basket`, `running`]),
    o,
    (e, t) => Math.abs(e) < i / 2 - 0.12 && Math.abs(t) < a / 2 - 0.12,
  );
  let s = kt[n.pick([`charcoal`, `red`, `grey`])];
  return (
    At(
      r,
      n,
      [
        [-i / 2 + 0.06, -a / 2],
        [-i / 2 + 0.06, a / 2],
      ],
      s,
    ),
    At(
      r,
      n,
      [
        [i / 2 - 0.06, -a / 2],
        [i / 2 - 0.06, a / 2],
      ],
      s,
    ),
    At(
      r,
      n,
      [
        [-i / 2, a / 2 - 0.06],
        [i / 2, a / 2 - 0.06],
      ],
      s,
    ),
    At(
      r,
      n,
      [
        [-i / 2, -a / 2 + 0.06],
        [i / 2, -a / 2 + 0.06],
      ],
      s,
    ),
    bt(r, t, i, a, e, 6, { y: 0.046 }),
    R(r, {
      clear: (e, t) => Math.abs(e) < i / 2 + 0.02 && Math.abs(t) < a / 2 + 0.02,
      sunk: !0,
      drive: { w: i, l: a },
    })
  );
}
