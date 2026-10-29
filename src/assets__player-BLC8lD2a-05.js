// assets__player-BLC8lD2a 05 — color
// Lines 1508-1796 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
function Pe(
  e,
  { scene: t, renderer: n, rng: r, centre: i = [0, 0, 0], radius: a = 90 } = {},
) {
  Ne = new e.Color();
  let o = {
      elev: 62,
      azi: 152,
      int: 3.2,
      hemiInt: 0.9,
      amb: 0.1,
      fogD: 0.0012,
      star: 0,
      exp: 1,
      sun: new e.Color(),
      hemiSky: new e.Color(),
      hemiGnd: new e.Color(),
      zen: new e.Color(),
      hor: new e.Color(),
      haze: new e.Color(),
    },
    s = new e.DirectionalLight(16777215, 3.2);
  ((s.name = `playerSun`),
    (s.castShadow = !0),
    s.shadow.mapSize.set(4096, 4096),
    (s.shadow.camera.near = 1),
    (s.shadow.camera.far = 900),
    (s.shadow.bias = -12e-5),
    (s.shadow.normalBias = 0.022),
    s.target.position.set(i[0], i[1], i[2]),
    t.add(s, s.target));
  let c = new e.HemisphereLight(12178687, 7240277, 0.9);
  ((c.name = `playerHemi`), t.add(c));
  let l = new e.AmbientLight(16777215, 0.1);
  ((l.name = `playerAmbient`), t.add(l));
  let u = new e.SphereGeometry(2600, 32, 20),
    d = new Float32Array(u.attributes.position.count * 3);
  u.setAttribute(`color`, new e.BufferAttribute(d, 3));
  let f = new e.MeshBasicMaterial({
      vertexColors: !0,
      side: e.BackSide,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !0,
    }),
    p = new e.Mesh(u, f);
  ((p.name = `playerSky`),
    (p.renderOrder = -1e3),
    (p.frustumCulled = !1),
    (p.matrixAutoUpdate = !1),
    t.add(p));
  let m = new e.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      opacity: 1,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !1,
    }),
    h = new e.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      opacity: 0.18,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !1,
      blending: e.AdditiveBlending,
    }),
    g = new e.Mesh(new e.CircleGeometry(34, 24), m),
    _ = new e.Mesh(new e.CircleGeometry(150, 24), h);
  for (let e of [g, _])
    ((e.renderOrder = -999),
      (e.frustumCulled = !1),
      (e.matrixAutoUpdate = !1),
      t.add(e));
  let v = new Float32Array(2700),
    y = new Float32Array(2700),
    b = r ?? { next: () => 0.5 };
  for (let e = 0; e < 900; e++) {
    let t = b.next(),
      n = b.next(),
      r = t * Math.PI * 2,
      i = 0.04 + n * 0.96,
      a = Math.sqrt(Math.max(0, 1 - i * i));
    ((v[e * 3] = Math.cos(r) * a * 2400),
      (v[e * 3 + 1] = i * 2400),
      (v[e * 3 + 2] = Math.sin(r) * a * 2400));
    let o = 0.55 + b.next() * 0.45,
      s = b.next();
    ((y[e * 3] = o * (0.85 + s * 0.15)),
      (y[e * 3 + 1] = o * 0.94),
      (y[e * 3 + 2] = o));
  }
  let x = new e.BufferGeometry();
  (x.setAttribute(`position`, new e.BufferAttribute(v, 3)),
    x.setAttribute(`color`, new e.BufferAttribute(y, 3)));
  let S = new e.PointsMaterial({
      size: 5,
      sizeAttenuation: !1,
      vertexColors: !0,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      depthTest: !1,
      fog: !1,
      toneMapped: !1,
    }),
    C = new e.Points(x, S);
  ((C.name = `playerStars`),
    (C.renderOrder = -998),
    (C.frustumCulled = !1),
    (C.matrixAutoUpdate = !1),
    t.add(C),
    (t.fog = new e.FogExp2(12768742, 0.0016)),
    (t.background = new e.Color(10995164)));
  let w = new e.Vector3(),
    T = new e.Vector3(),
    E = new e.Vector3(),
    D = new e.Vector3(0, 1, 0),
    O = new e.Color(),
    k = new e.Color(),
    A = new e.Color();
  function j(e, t, n) {
    let r = Math.cos(e * ke);
    return (
      n.set(Math.sin(t * ke) * r, Math.sin(e * ke), Math.cos(t * ke) * r),
      n
    );
  }
  function M() {
    let e = u.attributes.position,
      t = e.count;
    (E.set(w.x, 0, w.z), E.lengthSq() < 1e-6 ? E.set(0, 0, 1) : E.normalize());
    let n = W(o.elev / 25, -1, 1),
      r = W(1 - Math.abs(n), 0, 1) * 0.85;
    for (let n = 0; n < t; n++) {
      let t = e.getX(n),
        i = e.getY(n),
        a = e.getZ(n),
        s = 1 / Math.hypot(t, i, a),
        c = i * s,
        l = Ae(-0.02, 0.62, c);
      O.copy(o.hor).lerp(o.zen, l ** 0.85);
      let u = t * s * E.x + a * s * E.z,
        f = Math.max(0, u) ** 3.5 * (1 - Ae(0, 0.45, c)) * r;
      (f > 0.001 && O.lerp(o.haze, f),
        c < 0 && O.lerp(o.haze, W(-c * 3, 0, 0.55)),
        (d[n * 3] = O.r),
        (d[n * 3 + 1] = O.g),
        (d[n * 3 + 2] = O.b));
    }
    u.attributes.color.needsUpdate = !0;
  }
  function N(e) {
    (Me(e, o), j(o.elev, o.azi, w), j(52, o.azi + 155, T));
    let r = W((o.elev + 5) / 8, 0, 1);
    (D.copy(T).lerp(w, r).normalize(),
      s.position.set(i[0] + D.x * 420, i[1] + D.y * 420, i[2] + D.z * 420),
      s.color.copy(o.sun),
      (s.intensity = o.int),
      c.color.copy(o.hemiSky),
      c.groundColor.copy(o.hemiGnd),
      (c.intensity = o.hemiInt),
      k.copy(o.hemiSky).lerp(o.sun, 0.18),
      l.color.copy(k),
      (l.intensity = o.amb),
      A.copy(o.hor).lerp(o.haze, 0.45),
      t.fog.color.copy(A),
      (t.fog.density = o.fogD),
      t.background.copy(A),
      n && (n.toneMappingExposure = o.exp));
    let a = Ae(-4, 1.5, o.elev);
    return (
      (g.visible = a > 0.01),
      (_.visible = g.visible),
      g.visible &&
        (O.copy(o.sun).lerp(Ne.set(16777215), 0.35),
        m.color.copy(O),
        (m.opacity = a),
        h.color.copy(o.haze),
        (h.opacity = 0.22 * a)),
      (S.opacity = o.star),
      (C.visible = o.star > 0.01),
      o
    );
  }
  new e.Quaternion();
  function P(e, t) {
    (p.position.copy(e.position),
      p.updateMatrix(),
      C.position.copy(e.position),
      C.updateMatrix());
    let n = t || i;
    E.copy(D);
    for (let t of [g, _])
      (t.position.copy(e.position).addScaledVector(E, 2100),
        t.quaternion.copy(e.quaternion),
        t.updateMatrix());
    let r = W(
        Math.hypot(
          e.position.x - n[0],
          e.position.y - n[1],
          e.position.z - n[2],
        ) * 0.55,
        24,
        150,
      ),
      a = s.shadow.camera;
    Math.abs(a.right - r) > 0.5 &&
      ((a.left = -r),
      (a.right = r),
      (a.top = r),
      (a.bottom = -r),
      (a.far = 900),
      a.updateProjectionMatrix());
    let o = n[0] + (e.position.x - n[0]) * 0.15,
      c = n[2] + (e.position.z - n[2]) * 0.15;
    (s.target.position.set(o, n[1], c),
      s.target.updateMatrixWorld(),
      s.position.set(o + E.x * 420, n[1] + E.y * 420, c + E.z * 420),
      s.updateMatrixWorld());
  }
  return (
    N(14),
    M(),
    {
      sun: s,
      hemi: c,
      ambient: l,
      dome: p,
      stars: C,
      state: o,
      apply(e) {
        (N(e), M());
      },
      update: P,
      dispose() {
        (t.remove(s, s.target, c, l, p, g, _, C),
          u.dispose(),
          f.dispose(),
          g.geometry.dispose(),
          _.geometry.dispose(),
          m.dispose(),
          h.dispose(),
          x.dispose(),
          S.dispose(),
          (t.fog = null));
      },
    }
  );
}
var G = (e, t, n) => (e < t ? t : e > n ? n : e),
  Fe = (e, t, n) => e + (t - e) * n,
  K = (e) => e * e * (3 - 2 * e);
function Ie(e) {
  let t = new Float32Array(65536);
  for (let n = 0; n < 65536; n++) t[n] = e.next();
  let n = (e, n) => t[(n & 255) * 256 + (e & 255)];
  return (e, t, r) => {
    let i = e / r,
      a = t / r,
      o = Math.floor(i),
      s = Math.floor(a),
      c = K(i - o),
      l = K(a - s);
    return Fe(
      Fe(n(o, s), n(o + 1, s), c),
      Fe(n(o, s + 1), n(o + 1, s + 1), c),
      l,
    );
  };
}
function Le(e, t, n, r, i, a = []) {
  let o = [];
  for (let r = e - t; r <= e + t + 1e-6; r += n) o.push(+r.toFixed(4));
  let s = n * i,
    c = e + t + s;
  for (; c < e + r;) (o.push(+c.toFixed(4)), (s *= i), (c += s));
  (o.push(e + r), (s = n * i), (c = e - t - s));
  let l = [];
  for (; c > e - r;) (l.push(+c.toFixed(4)), (s *= i), (c -= s));
  l.push(e - r);
  let u = l.reverse().concat(o);
  for (let e of a) u.some((t) => Math.abs(t - e) < 1e-4) || u.push(e);
  return (u.sort((e, t) => e - t), u);
}
