// assets__cube-soldier-DMHrHkZL 10 — math
// Lines 2695-3042 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function Hn() {
  if (Vn) return Vn;
  let e = document.createElement(`canvas`);
  ((e.width = 24 * In.length), (e.height = 24 * zn.length));
  let t = e.getContext(`2d`);
  zn.forEach((e, n) => In.forEach((r, i) => Bn(t, i * 24, n * 24, e, i)));
  let n = new j(e);
  return (
    (n.magFilter = T),
    (n.minFilter = T),
    (n.generateMipmaps = !1),
    (n.colorSpace = h),
    (Vn = { texture: n, canvas: e }),
    Vn
  );
}
function Un(e, t = 0) {
  let n = In.length,
    r = zn.length,
    i = 0.02 / 24,
    a = t / n,
    o = 1 - e / r;
  return [a + i, o - 1 / r + i, a + 1 / n - i, o - i];
}
var G = { w: 0.34, h: 0.34, d: 0.32, y: 0.23, neck: 0.6 },
  Wn = G.y + G.h / 2,
  Gn = -G.d / 2,
  Kn = (e) => Wn - (G.h * (e + 0.5)) / 24,
  qn = { cols: 44, rows: 14, disc: 20, tube: [16, 6], curve: 5, bevel: 1 };
function Jn(e) {
  Object.assign(
    qn,
    e
      ? { cols: 28, rows: 8, disc: 10, tube: [8, 4], curve: 2, bevel: 0.34 }
      : { cols: 44, rows: 14, disc: 20, tube: [16, 6], curve: 5, bevel: 1 },
  );
}
var Yn = [
    `nods up`,
    `nods down`,
    `light up`,
    `light down`,
    `cover up`,
    `cover down`,
  ],
  Xn = [
    [0.065, Kn(11)],
    [-0.065, Kn(11)],
  ],
  K = {
    dark: 1908253,
    rubber: 1316116,
    lens: 923417,
    lensGlint: 6256512,
    lensRim: 1052946,
    ir: 7311194,
    seal: 1776410,
    steel: 9409168,
    nvg: 10521700,
  },
  Zn = new o(0, 1, 0),
  Qn = new o(1, 0, 0),
  $n = new M(),
  er = new o(),
  tr = new o(),
  nr = new p(),
  rr = (e, t) => new p(e).multiplyScalar(t).getHex(),
  ir = (e, t) => Math.sign(e) * Math.abs(e) ** t,
  ar = (e) => ((e.userData.smooth = !0), e),
  or = 0.3,
  sr = 0.18,
  cr = 0.22,
  lr = 0.215,
  ur = 0.55,
  dr = 0.55,
  fr = 0.338;
function pr(e, t) {
  let n = ir(Math.sin(t), ur),
    r = lr + (0.03 * (1 + Math.cos(e))) / 2;
  return new o(
    cr * n * ir(Math.sin(e), dr),
    or + sr * ir(Math.cos(t), ur),
    r * n * ir(Math.cos(e), dr),
  );
}
var mr = (e) => Math.acos(Math.max(-1, Math.min(1, ir((e - or) / sr, 1 / ur))));
function hr(e, t) {
  if (t < 0.02) return new o(0, 1, 0);
  let n = 0.003,
    r = pr(e, t),
    i = pr(e + n, t)
      .sub(r)
      .cross(pr(e, t + n).sub(r))
      .normalize();
  return (i.dot(new o(r.x, r.y - or + 0.1, r.z)) < 0 && i.negate(), i);
}
var gr = (e) => {
    let t = ((e % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    return Math.abs(t - Math.PI);
  },
  _r = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (e - t) / (n - t)));
    return r * r * (3 - 2 * r);
  };
function vr(e) {
  let t = (gr(e) * 180) / Math.PI,
    n = 0.302 + 0.01 * _r(t, 20, 55);
  return n + (fr - n) * _r(t, 58, 74) - 0.12600000000000003 * _r(t, 104, 116);
}
var yr = (e, t) => Math.PI - t * e;
function br(e, t, n = 0) {
  let r = mr(t);
  return pr(e, r).addScaledVector(hr(e, r), n);
}
var xr = (e, t) => hr(e, mr(t));
function Sr(e, t, n) {
  let r = qn.cols,
    i = qn.rows,
    a = [],
    s = [],
    c = [],
    u = [],
    d = [],
    f = [e, rr(e, 0.74), 7171143, 9141078, 5196599],
    p = (r) => {
      if (!t) return e;
      let i =
        Math.sin(r.x * 31 + n) * Math.sin(r.z * 27 - n * 0.7) +
        Math.sin(r.y * 41 + r.x * 13 + n * 1.3) * 0.7;
      return f[i > 0.9 ? 4 : i > 0.45 ? 2 : i > 0 ? 0 : i > -0.5 ? 3 : 1];
    },
    m = (e, t, n, r = 1, i = 0, o = 0) => (
      d.push(i, o),
      a.push(e.x, e.y, e.z),
      s.push(t.x, t.y, t.z),
      nr.set(n).multiplyScalar(r),
      c.push(nr.r, nr.g, nr.b),
      a.length / 3 - 1
    ),
    h = [],
    _ = [];
  for (let t = 0; t <= r; t++) {
    let n = (t / r) * Math.PI * 2,
      a = mr(vr(n)),
      s = [];
    for (let e = 0; e <= i; e++) {
      let o = Math.max(0.001, a * (1 - e / i) ** 1.1),
        c = pr(n, o);
      s.push(m(c, hr(n, o), p(c), 1 - 0.05 * (1 - e / i), t / r, 1 - o / a));
    }
    h.push(s);
    let c = pr(n, a),
      l = hr(n, a),
      u = new o(-c.x, 0, -c.z).normalize(),
      d = c
        .clone()
        .addScaledVector(l, 0.004)
        .add(new o(0, -0.008, 0)),
      f = c
        .clone()
        .addScaledVector(u, 0.02)
        .add(new o(0, -0.004, 0)),
      g = l
        .clone()
        .multiplyScalar(0.4)
        .add(new o(0, -1, 0))
        .normalize();
    _.push([
      m(d, l, e, 0.72, t / r, 0),
      m(d, g, e, 0.62, t / r, 0),
      m(f, g, e, 0.5, t / r, 0),
    ]);
  }
  for (let e = 0; e < r; e++) {
    for (let t = 0; t < i; t++) {
      let n = h[e][t],
        r = h[e + 1][t],
        i = h[e + 1][t + 1],
        a = h[e][t + 1];
      u.push(n, r, i, n, i, a);
    }
    let t = _[e],
      n = _[e + 1];
    u.push(
      h[e][0],
      t[0],
      n[0],
      h[e][0],
      n[0],
      h[e + 1][0],
      t[1],
      t[2],
      n[2],
      t[1],
      n[2],
      n[1],
    );
  }
  let v = new l();
  (v.setAttribute(`position`, new g(a, 3)),
    v.setAttribute(`normal`, new g(s, 3)),
    v.setAttribute(`color`, new g(c, 3)),
    v.setAttribute(`uv`, new g(d, 2)),
    v.setIndex(u));
  let y = v.attributes.position,
    b = v.attributes.normal,
    x = v.index.array,
    S = new o(),
    C = new o(),
    w = new o(),
    T = new o();
  for (let e = 0; e < x.length; e += 3)
    if (
      (S.fromBufferAttribute(y, x[e]),
      C.fromBufferAttribute(y, x[e + 1]),
      w.fromBufferAttribute(y, x[e + 2]),
      T.fromBufferAttribute(b, x[e]),
      C.sub(S).cross(w.sub(S)).dot(T) < 0)
    ) {
      let t = x[e + 1];
      ((x[e + 1] = x[e + 2]), (x[e + 2] = t));
    }
  let E = v.toNonIndexed();
  return (
    v.dispose(),
    E.setAttribute(
      `aTag`,
      new g(new Float32Array(E.attributes.position.count), 1),
    ),
    (E.userData.shell = !0),
    ar(E)
  );
}
var Cr = {},
  wr = [38, 114],
  Tr = (e) => {
    let t = Math.max(vr(e), 0.3);
    return [t + 0.004, t + 0.044];
  };
function Er(e) {
  if (Cr[e]) return Cr[e];
  let t = 1024,
    n = document.createElement(`canvas`);
  ((n.width = t), (n.height = 512));
  let r = n.getContext(`2d`),
    i = (e) => `rgb(${e},${e},${e})`,
    a = e === `textured`,
    o = (e, n) => [(e / (Math.PI * 2)) * t, (mr(n) / mr(vr(e))) * 512];
  ((r.fillStyle = i(a ? 238 : 255)), r.fillRect(0, 0, t, 512));
  let s = 7,
    c = () => (s = (s * 16807) % 2147483647) / 2147483647;
  if (a) {
    for (let e = 0; e < 26e3; e++)
      ((r.fillStyle = i(c() < 0.5 ? 222 : 252)),
        r.fillRect(c() * t, c() * 512, c() < 0.2 ? 2 : 1, 1));
    for (let e = 0; e < t; e++) {
      let [, n] = o((e / t) * Math.PI * 2, 0.47);
      ((r.fillStyle = i(212)),
        r.fillRect(e, n, 1, 2),
        (r.fillStyle = i(250)),
        r.fillRect(e, n + 2, 1, 1));
    }
  }
  let l = r.createLinearGradient(0, 409.6, 0, 512);
  (l.addColorStop(0, `rgba(0,0,0,0)`),
    l.addColorStop(1, `rgba(0,0,0,${a ? 0.3 : 0.12})`),
    (r.fillStyle = l),
    r.fillRect(0, 409.6, t, 102.4));
  for (let e of [-1, 1]) {
    for (let n = 0; n < t; n++) {
      let s = (n / t) * Math.PI * 2,
        c = (gr(s) * 180) / Math.PI;
      if (Math.sign(Math.sin(s)) !== e || c < wr[0] || c > wr[1]) continue;
      let [l, u] = Tr(s),
        [, d] = o(s, l),
        [, f] = o(s, u),
        p = Math.min(d, f),
        m = Math.abs(d - f);
      a
        ? ((r.fillStyle = `rgba(0,0,0,0.28)`), r.fillRect(n, p - 3, 1, m + 8))
        : ((r.fillStyle = i(168)),
          r.fillRect(n, p, 1, m),
          (r.fillStyle = i(128)),
          r.fillRect(n, p, 1, 2),
          r.fillRect(n, p + m - 2, 1, 2),
          Math.round(c) % 6 < 3 &&
            c > wr[0] + 3 &&
            c < wr[1] - 3 &&
            ((r.fillStyle = i(70)), r.fillRect(n, p + m * 0.3, 1, m * 0.4)));
    }
    for (let t of wr) {
      let n = yr((t * Math.PI) / 180 + (t === wr[0] ? 0.05 : -0.05), e),
        [s, c] = Tr(n),
        [l, u] = o(n, (s + c) / 2);
      ((r.fillStyle = i(a ? 90 : 60)),
        r.beginPath(),
        r.arc(l, u, 5, 0, Math.PI * 2),
        r.fill());
    }
  }
  if (a)
    for (let [e, t] of [
      [Math.PI - 0.35, 0.34],
      [Math.PI + 0.35, 0.34],
      [0.5, 0.36],
      [2 * Math.PI - 0.5, 0.36],
      [2.2, 0.33],
      [2 * Math.PI - 2.2, 0.33],
    ]) {
      let [n, a] = o(e, t);
      ((r.fillStyle = i(120)),
        r.beginPath(),
        r.arc(n, a, 6, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = i(70)),
        r.fillRect(n - 3, a - 1, 6, 2));
    }
  let u = new j(n);
  return ((u.colorSpace = h), (u.anisotropy = 4), (Cr[e] = u));
}
function Dr(e, t, n, r, i, a, s = {}) {
  let c = xr(r, i),
    l = br(r, i).addScaledVector(c, n / 2 + (s.lift ?? 0.001)),
    u = U(e, t, n, 0, 0, 0, a, {
      bevel: s.bevel ?? Math.min(e, t, n) * 0.3,
      tag: s.tag,
    });
  return (
    $n
      .lookAt(c, new o(), Math.abs(c.y) > 0.95 ? new o(0, 0, 1) : Zn)
      .setPosition(l),
    u.applyMatrix4($n)
  );
}
function Or(e, t, n, r) {
  (er.copy(e.isVector3 ? e : new o(...e)),
    tr.copy(t.isVector3 ? t : new o(...t)));
  let i = U(n, n, er.distanceTo(tr), 0, 0, 0, r, { bevel: 0 });
  return (
    $n.lookAt(
      er,
      tr,
      Math.abs(tr.clone().sub(er).normalize().y) > 0.95 ? Qn : Zn,
    ),
    $n.setPosition(er.clone().add(tr).multiplyScalar(0.5)),
    i.applyMatrix4($n)
  );
}
