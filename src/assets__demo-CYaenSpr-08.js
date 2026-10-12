// assets__demo-CYaenSpr 08 — math
// Lines 1902-2243 of readable/assets__demo-CYaenSpr.pretty.js (statement-aligned).
function rt(e, t, r) {
  let i = r.roofLinks ?? [];
  if (!i.length) return null;
  let o = e.modules.get(`environment`),
    c = [],
    l = [],
    d = [],
    m = 1,
    g = () => ((m = (m * 16807) % 2147483647), m / 2147483647),
    v = new s(),
    y = new h(),
    b = new _(),
    x = new k(1, 1, 1),
    C = new k(),
    w = (e, t, n) => {
      let r = new f(t).multiplyScalar(1 - n / 2 + g() * n),
        i = e.attributes.position.count,
        a = new Float32Array(i * 3);
      for (let e = 0; e < i; e++)
        ((a[e * 3] = r.r), (a[e * 3 + 1] = r.g), (a[e * 3 + 2] = r.b));
      return (e.setAttribute(`color`, new E(a, 3)), e);
    },
    T = (e, t, r, i, a, o, s, c, l, u = 0, d = 0) => {
      let f = new n(i, a, o);
      (b.set(-d, u, 0, `YXZ`),
        y.setFromEuler(b),
        C.set(s, c, l),
        f.applyMatrix4(v.compose(C, y, x)),
        e.push(w(f, t, r)));
    },
    O = new k(0, 1, 0),
    A = new k(),
    j = (e, t, n = 0.024) => {
      A.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
      let r = A.length();
      if (r < 0.001) return;
      let i = new a(n, n, r, 6, 1, !0);
      (y.setFromUnitVectors(O, A.normalize()),
        C.set((e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2),
        i.applyMatrix4(v.compose(C, y, x)),
        d.push(w(i, tt, 0.08)));
    },
    M = (e) => {
      let [t, n, r, i, a, o] = e,
        s = a - n,
        u = Math.max(1, Math.round(s / 0.144)),
        d = s / u,
        f = (t + i) / 2,
        p = (r + o) / 2,
        m = i - t,
        h = o - r,
        g = m >= h,
        _ = g ? m : h,
        v = g ? h : m,
        y = Math.max(3, Math.round(v / 0.17));
      for (let e = 0; e < u; e++) {
        let t = n + e * d;
        T(
          l,
          et,
          0.25,
          m - 0.03,
          d - 0.025,
          h - 0.03,
          f,
          t + (d - 0.025) / 2,
          p,
        );
        for (let e = 0; e < y; e++) {
          let n = -v / 2 + ((e + 0.5) * v) / y,
            r = v / y - 0.025;
          g
            ? T(c, J, 0.3, _, 0.022, r, f, t + d - 0.011, p + n)
            : T(c, J, 0.3, r, 0.022, _, f + n, t + d - 0.011, p);
        }
      }
    };
  for (let e of i) {
    for (let t of e.boxes)
      if (t.kind === `pad`) {
        let [e, n, r, i, a, o] = t.aabb;
        T(
          c,
          J,
          0.3,
          i - e,
          a - n,
          o - r,
          (e + i) / 2,
          (n + a) / 2,
          (r + o) / 2,
        );
      } else M(t.aabb);
    e.ladder && N(e.ladder);
    let t = e.deck;
    if (!t) continue;
    let n = ae(t),
      r = t.y1 - t.y0,
      i = n.len,
      a = Math.atan2(r, i),
      o = -n.uz,
      s = n.ux,
      l = (e, a = 0, c = 0) => [
        t.x0 + n.ux * i * e + o * a,
        t.y0 + r * e + c,
        t.z0 + n.uz * i * e + s * a,
      ];
    Math.abs(r) / i;
    let u = e.kind === `stair`,
      d = t.half * 2;
    if (u) {
      let e = Math.max(2, Math.round(Math.abs(r) / 0.19)),
        a = Math.min(0.3, i / e);
      for (let t = 0; t < e; t++) {
        let r = l((t + 0.5) / e, 0, -0.02);
        T(c, J, 0.25, d, 0.04, a, r[0], r[1], r[2], n.yaw);
      }
      for (let e of [-1, 1])
        j(
          l(0, e * (t.half - 0.03), -0.12),
          l(1, e * (t.half - 0.03), -0.12),
          0.035,
        );
    } else {
      let e = Math.max(4, Math.round(d / 0.225)),
        u = d / e - 0.012,
        f = l(0.5, 0, 0.011),
        p = Math.hypot(i, r) + 0.3;
      for (let r = 0; r < e; r++) {
        let i = -t.half + ((r + 0.5) * d) / e;
        T(c, J, 0.35, u, 0.038, p, f[0] + o * i, f[1], f[2] + s * i, n.yaw, a);
      }
    }
    if (e.kind === `board`) continue;
    let f = Math.max(1, Math.round(i / 2)),
      p = i > 9 && !u;
    for (let e of [-1, 1]) {
      let o = e * (t.half + L.tube / 2);
      (u || j(l(0, o, -0.06), l(1, o, -0.06)),
        j(l(0, o, L.mid), l(1, o, L.mid)),
        j(l(0, o, L.top), l(1, o, L.top)),
        p && j(l(0, o, -0.75), l(1, o, -0.75)));
      for (let e = 0; e <= f; e++) {
        let t = e / f;
        (j(l(t, o, p ? -0.75 : -0.06), l(t, o, L.top + 0.05)),
          p &&
            e < f &&
            j(
              l(t, o, e % 2 ? -0.06 : -0.75),
              l((e + 1) / f, o, e % 2 ? -0.75 : -0.06),
            ));
      }
      let s = l(0.5, e * (t.half - 0.012), 0.075);
      T(c, J, 0.3, 0.025, 0.15, Math.hypot(i, r), s[0], s[1], s[2], n.yaw, a);
    }
    for (let e = 0; e <= f; e++) {
      let n = e / f;
      (j(l(n, -t.half, -0.06), l(n, t.half, -0.06)),
        p && j(l(n, -t.half, -0.75), l(n, t.half, -0.75)));
    }
  }
  function N(e) {
    let t = Math.sin(e.facing),
      n = Math.cos(e.facing),
      r = -n,
      i = t,
      a = 0.12,
      o = e.standoff ?? 0,
      s = e.y1 + 1,
      c = (o, s, c = 0) => [
        e.x - t * (a + c) + r * o,
        s,
        e.z - n * (a + c) + i * o,
      ];
    for (let t of [-0.22, 0.22]) {
      T(d, tt, 0.06, 0.012, s - e.y0, 0.065, ...c(t, (e.y0 + s) / 2), e.facing);
      for (let n = e.y0 + 0.4; n < e.y1 - 0.1; n += 2)
        T(
          d,
          tt,
          0.06,
          0.012,
          0.05,
          a + o + 0.03,
          ...c(t, n, -(a + o) / 2 - 0.015),
          e.facing,
        );
    }
    for (let t = e.y0 + 0.28; t <= e.y1 + 0.02; t += 0.28)
      j(c(-0.22, t), c(0.22, t), 0.014);
    for (let t of [-0.22, 0.22])
      T(
        d,
        tt,
        0.06,
        0.012,
        0.05,
        a + o + 0.03,
        ...c(t, e.y1 - 0.15, -(a + o) / 2 - 0.015),
        e.facing,
      );
    if (!e.cage) return;
    let l = [];
    for (let e = 0; e <= 8; e++) {
      let t = -Math.PI / 2 + (Math.PI * e) / 8;
      l.push([Math.sin(t) * 0.38, 0.03 + Math.cos(t) * 0.72]);
    }
    let u = e.y0 + 2.3,
      f = e.y1 + 1;
    for (let e = u; e <= f + 1e-6; e += 0.9)
      for (let t = 0; t < l.length - 1; t++)
        j(c(l[t][0], e, l[t][1]), c(l[t + 1][0], e, l[t + 1][1]), 0.012);
    for (let e of [0, 2, 4, 6, 8])
      j(c(l[e][0], u, l[e][1]), c(l[e][0], f, l[e][1]), 0.011);
  }
  let P = new S();
  P.name = `roof-links`;
  let F = [];
  for (let [e, t] of [
    [c, { roughness: 0.9 }],
    [l, { roughness: 0.95 }],
    [d, { roughness: 0.45, metalness: 0.65 }],
  ]) {
    if (!e.length) continue;
    let n = D(e, !1);
    for (let t of e) t.dispose();
    ((e.length = 0), n.computeBoundingBox(), n.computeBoundingSphere());
    let r = new p({ color: 16777215, vertexColors: !0, ...t });
    F.push(r);
    let i = new u(n, r);
    ((i.castShadow = i.receiveShadow = !0),
      (i.name = `roof-links`),
      (i.userData.releaseAfterUpload = !0),
      o?.configureCaster?.(r),
      P.add(i));
  }
  return (t.add(P), nt(P, F));
}
function it(e, t) {
  let r = new n(1, 1, 1),
    i = new p({ color: 6713706, roughness: 0.7, metalness: 0.3 }),
    a = new p({ color: 12162623, roughness: 0.8 }),
    o = [],
    s = [],
    c = new g(2.4, 1.2),
    d = (t, n) => {
      let a = document.createElement(`canvas`);
      ((a.width = 512), (a.height = 256));
      let d = a.getContext(`2d`);
      ((d.fillStyle = `#172426`),
        d.fillRect(0, 0, 512, 256),
        (d.strokeStyle = `#d2ad58`),
        (d.lineWidth = 10),
        d.strokeRect(8, 8, 496, 240),
        (d.fillStyle = `#f3e6c6`),
        (d.textAlign = `center`),
        (d.font = `bold 49px sans-serif`),
        d.fillText(n ? `GROUND ↓` : `ROOF LIFT ↑`, 256, 76),
        (d.font = `bold 36px sans-serif`),
        d.fillText(
          `${Math.round((t.top[1] - t.bottom[1]) / 3.2)} FLOORS`,
          256,
          132,
        ),
        (d.font = `26px sans-serif`),
        d.fillText(`F • CALL / SELECT FLOOR`, 256, 183),
        d.fillText(`BOARD, THEN PRESS F`, 256, 222));
      let f = new l(a);
      f.colorSpace = C;
      let p = new A({ map: f }),
        m = new u(c, p),
        h = n ? t.top : t.bottom,
        g = t.accessSide * (n ? -1 : 1);
      (m.position.set(h[0] + g * 1.8, h[1] + 2.2, h[2] + 2.3),
        (m.rotation.y = (g * Math.PI) / 2),
        e.scene.add(m),
        o.push(m),
        s.push(p, f));
      let _ = new u(r, i);
      (_.scale.set(0.08, 1.6, 0.08),
        _.position.set(m.position.x - g * 0.07, h[1] + 0.8, m.position.z),
        e.scene.add(_),
        o.push(_));
      let v = new u(r, i);
      (v.scale.set(0.04, 1.2, 2.4),
        v.position.copy(m.position),
        (v.position.x -= g * 0.03),
        e.scene.add(v),
        o.push(v));
    },
    f = t.map((t) => {
      (d(t, !1), d(t, !0));
      let n = new S();
      n.name = t.id;
      let o = (e, t, i, a, o, s, c) => {
        let l = new u(r, c);
        return (
          l.scale.set(e, t, i),
          l.position.set(a, o, s),
          (l.castShadow = !0),
          (l.receiveShadow = !0),
          n.add(l),
          l
        );
      };
      o(t.width, 0.22, t.depth, 0, -0.11, 0, i);
      for (let e of [-1, 1])
        (o(t.width, 2.7, 0.11, 0, 1.35, e * 1.445, i),
          o(2.6, 0.06, 0.06, 0, 1, e * 1.35, a));
      (o(3, 0.2, 3, 0, 2.8, 0, i), o(2, 0.035, 0.25, 0, 2.68, 0, a));
      let s = [];
      for (let e of [-1, 1]) {
        o(0.18, 0.18, 3.2, e * 1.48, 2.67, 0, i);
        for (let t of [-1, 1])
          s.push({
            leaf: t,
            mesh: o(0.12, 2.65, 1.5, e * 1.44, 1.325, t * 0.75, i),
          });
      }
      return (
        o(0.18, 0.5, 0.08, 0.9, 1.3, 1.36, a),
        e.scene.add(n),
        { lift: t, group: n, doors: s }
      );
    });
  return {
    update() {
      for (let { lift: t, group: n, doors: r } of f) {
        let i = e.world.map.liftClock?.() ?? e.world.time.tick;
        n.position.set(t.bottom[0], ne(t, i), t.bottom[2]);
        for (let { leaf: e, mesh: n } of r)
          n.position.z = e * (0.75 + re(t, i) * 1.5);
      }
    },
    dispose() {
      for (let { group: t } of f) e.scene.remove(t);
      for (let t of o) e.scene.remove(t);
      for (let e of s) e.dispose();
      (c.dispose(), r.dispose(), i.dispose(), a.dispose());
    },
  };
}
