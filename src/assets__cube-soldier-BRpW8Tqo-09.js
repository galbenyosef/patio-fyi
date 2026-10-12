// assets__cube-soldier-BRpW8Tqo 09 — math
// Lines 2375-2712 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function kn(e, t, n) {
  let r = $t.cols,
    i = $t.rows,
    a = [],
    o = [],
    s = [],
    l = [],
    u = [],
    d = [e, un(e, 0.74), 7171143, 9141078, 5196599],
    f = (r) => {
      if (!t) return e;
      let i =
        Math.sin(r.x * 31 + n) * Math.sin(r.z * 27 - n * 0.7) +
        Math.sin(r.y * 41 + r.x * 13 + n * 1.3) * 0.7;
      return d[i > 0.9 ? 4 : i > 0.45 ? 2 : i > 0 ? 0 : i > -0.5 ? 3 : 1];
    },
    p = (e, t, n, r = 1, i = 0, c = 0) => (
      u.push(i, c),
      a.push(e.x, e.y, e.z),
      o.push(t.x, t.y, t.z),
      ln.set(n).multiplyScalar(r),
      s.push(ln.r, ln.g, ln.b),
      a.length / 3 - 1
    ),
    m = [],
    h = [];
  for (let t = 0; t <= r; t++) {
    let n = (t / r) * Math.PI * 2,
      a = xn(Tn(n)),
      o = [];
    for (let e = 0; e <= i; e++) {
      let s = Math.max(0.001, a * (1 - e / i) ** 1.1),
        c = bn(n, s);
      o.push(p(c, Sn(n, s), f(c), 1 - 0.05 * (1 - e / i), t / r, 1 - s / a));
    }
    m.push(o);
    let s = bn(n, a),
      c = Sn(n, a),
      l = new M(-s.x, 0, -s.z).normalize(),
      u = s
        .clone()
        .addScaledVector(c, 0.004)
        .add(new M(0, -0.008, 0)),
      d = s
        .clone()
        .addScaledVector(l, 0.02)
        .add(new M(0, -0.004, 0)),
      g = c
        .clone()
        .multiplyScalar(0.4)
        .add(new M(0, -1, 0))
        .normalize();
    h.push([
      p(u, c, e, 0.72, t / r, 0),
      p(u, g, e, 0.62, t / r, 0),
      p(d, g, e, 0.5, t / r, 0),
    ]);
  }
  for (let e = 0; e < r; e++) {
    for (let t = 0; t < i; t++) {
      let n = m[e][t],
        r = m[e + 1][t],
        i = m[e + 1][t + 1],
        a = m[e][t + 1];
      l.push(n, r, i, n, i, a);
    }
    let t = h[e],
      n = h[e + 1];
    l.push(
      m[e][0],
      t[0],
      n[0],
      m[e][0],
      n[0],
      m[e + 1][0],
      t[1],
      t[2],
      n[2],
      t[1],
      n[2],
      n[1],
    );
  }
  let g = new c();
  (g.setAttribute(`position`, new D(a, 3)),
    g.setAttribute(`normal`, new D(o, 3)),
    g.setAttribute(`color`, new D(s, 3)),
    g.setAttribute(`uv`, new D(u, 2)),
    g.setIndex(l));
  let _ = g.attributes.position,
    v = g.attributes.normal,
    y = g.index.array,
    b = new M(),
    x = new M(),
    S = new M(),
    C = new M();
  for (let e = 0; e < y.length; e += 3)
    if (
      (b.fromBufferAttribute(_, y[e]),
      x.fromBufferAttribute(_, y[e + 1]),
      S.fromBufferAttribute(_, y[e + 2]),
      C.fromBufferAttribute(v, y[e]),
      x.sub(b).cross(S.sub(b)).dot(C) < 0)
    ) {
      let t = y[e + 1];
      ((y[e + 1] = y[e + 2]), (y[e + 2] = t));
    }
  let w = g.toNonIndexed();
  return (
    g.dispose(),
    w.setAttribute(
      `aTag`,
      new D(new Float32Array(w.attributes.position.count), 1),
    ),
    (w.userData.shell = !0),
    fn(w)
  );
}
var An = {},
  jn = [38, 114],
  Mn = (e) => {
    let t = Math.max(Tn(e), 0.3);
    return [t + 0.004, t + 0.044];
  };
function Nn(e) {
  if (An[e]) return An[e];
  let t = 1024,
    n = document.createElement(`canvas`);
  ((n.width = t), (n.height = 512));
  let r = n.getContext(`2d`),
    i = (e) => `rgb(${e},${e},${e})`,
    a = e === `textured`,
    o = (e, n) => [(e / (Math.PI * 2)) * t, (xn(n) / xn(Tn(e))) * 512];
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
        c = (Cn(s) * 180) / Math.PI;
      if (Math.sign(Math.sin(s)) !== e || c < jn[0] || c > jn[1]) continue;
      let [l, u] = Mn(s),
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
            c > jn[0] + 3 &&
            c < jn[1] - 3 &&
            ((r.fillStyle = i(70)), r.fillRect(n, p + m * 0.3, 1, m * 0.4)));
    }
    for (let t of jn) {
      let n = En((t * Math.PI) / 180 + (t === jn[0] ? 0.05 : -0.05), e),
        [s, c] = Mn(n),
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
  let u = new d(n);
  return ((u.colorSpace = T), (u.anisotropy = 4), (An[e] = u));
}
function Pn(e, t, n, r, i, a, o = {}) {
  let s = On(r, i),
    c = Dn(r, i).addScaledVector(s, n / 2 + (o.lift ?? 0.001)),
    l = H(e, t, n, 0, 0, 0, a, {
      bevel: o.bevel ?? Math.min(e, t, n) * 0.3,
      tag: o.tag,
    });
  return (
    on
      .lookAt(s, new M(), Math.abs(s.y) > 0.95 ? new M(0, 0, 1) : rn)
      .setPosition(c),
    l.applyMatrix4(on)
  );
}
function Fn(e, t, n, r) {
  (sn.copy(e.isVector3 ? e : new M(...e)),
    cn.copy(t.isVector3 ? t : new M(...t)));
  let i = H(n, n, sn.distanceTo(cn), 0, 0, 0, r, { bevel: 0 });
  return (
    on.lookAt(
      sn,
      cn,
      Math.abs(cn.clone().sub(sn).normalize().y) > 0.95 ? an : rn,
    ),
    on.setPosition(sn.clone().add(cn).multiplyScalar(0.5)),
    i.applyMatrix4(on)
  );
}
var In = (e, t) => {
  for (let n of e) n.applyMatrix4(t);
  return e;
};
function Ln(e, t) {
  let n = [],
    r = [];
  for (let t = 38; t <= 114; t += 5) {
    let n = En((t * Math.PI) / 180, e),
      i = Math.max(Tn(n), 0.3) + 0.024;
    r.push({ p: Dn(n, i, 0.0045), n: On(n, i) });
  }
  for (let e = 0; e < r.length - 1; e++) {
    let i = r[e],
      a = r[e + 1],
      o = a.p.clone().sub(i.p),
      s = o.length();
    o.normalize();
    let c = i.n.clone().add(a.n).normalize(),
      l = c.sub(o.clone().multiplyScalar(c.dot(o))).normalize();
    (on
      .makeBasis(l, o.clone().cross(l).normalize(), o)
      .setPosition(i.p.clone().add(a.p).multiplyScalar(0.5)),
      n.push(
        H(0.01, 0.038, s + 0.004, 0, 0, 0, t, { bevel: 0.004 }).applyMatrix4(
          on,
        ),
      ),
      e % 2 &&
        n.push(
          H(0.004, 0.014, s * 0.55, 0.0045, 0, 0, G.dark, {
            bevel: 0,
          }).applyMatrix4(on),
        ));
  }
  return { p: n, pts: r };
}
var Rn = (e, t) => {
  e.deleteAttribute(`uv`);
  let n = e.index ? e.toNonIndexed() : e;
  n !== e && e.dispose();
  let r = n.attributes.position.count,
    i = new Float32Array(r * 3);
  ln.set(t);
  for (let e = 0; e < r; e++) i.set([ln.r, ln.g, ln.b], e * 3);
  return (
    n.setAttribute(`color`, new o(i, 3)),
    n.setAttribute(`aTag`, new o(new Float32Array(r), 1)),
    fn(n)
  );
};
function zn(e, t, n, r, i) {
  let a = new s(e, e, t, $t.disc);
  return (
    a.applyQuaternion(new v().setFromUnitVectors(rn, i)),
    a.translate(r.x, r.y, r.z),
    Rn(a, n)
  );
}
function Bn(e, n, r) {
  return Rn(new u(new t(e), $t.tube[0], n, $t.tube[1], !1), r);
}
var Vn = 0.4;
function Hn(e, t) {
  let n = e.attributes.position;
  for (let e = 0; e < n.count; e++) n.setX(e, t(n.getX(e), n.getY(e)));
  e.deleteAttribute(`normal`);
  let r = te(e, 1e-5);
  (e.dispose(), r.computeVertexNormals());
  let i = r.toNonIndexed();
  return (r.dispose(), fn(i));
}
function Un(e, t, n, r = 0, i = 0) {
  let a = new j(),
    o = r - e / 2,
    s = i - t / 2;
  return (
    a.moveTo(o + n, s),
    a.lineTo(o + e - n, s),
    a.quadraticCurveTo(o + e, s, o + e, s + n),
    a.lineTo(o + e, s + t - n),
    a.quadraticCurveTo(o + e, s + t, o + e - n, s + t),
    a.lineTo(o + n, s + t),
    a.quadraticCurveTo(o, s + t, o, s + t - n),
    a.lineTo(o, s + n),
    a.quadraticCurveTo(o, s, o + n, s),
    a
  );
}
function Wn(e, t, n, r, i, a, o, s, c = 3) {
  let l = new k(e, {
    depth: t,
    bevelEnabled: !0,
    bevelThickness: n,
    bevelSize: n * 0.85,
    bevelSegments: Math.max(1, Math.round(c * $t.bevel)),
    curveSegments: $t.curve,
  });
  return (
    l.translate(0, 0, n),
    l.rotateY((i * Math.PI) / 2),
    l.translate(a, o, s),
    Rn(l, r)
  );
}
