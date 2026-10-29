// assets__demo-BF8qQ4c6 08 — math
// Lines 1926-2267 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
function it(e, t, o) {
  let s = o.roofLinks ?? [];
  if (!s.length) return null;
  let c = e.modules.get(`environment`),
    l = [],
    u = [],
    d = [],
    f = 1,
    m = () => ((f = (f * 16807) % 2147483647), f / 2147483647),
    h = new A(),
    y = new _(),
    b = new w(),
    x = new a(1, 1, 1),
    S = new a(),
    C = (e, t, n) => {
      let r = new p(t).multiplyScalar(1 - n / 2 + m() * n),
        i = e.attributes.position.count,
        a = new Float32Array(i * 3);
      for (let e = 0; e < i; e++)
        ((a[e * 3] = r.r), (a[e * 3 + 1] = r.g), (a[e * 3 + 2] = r.b));
      return (e.setAttribute(`color`, new g(a, 3)), e);
    },
    T = (e, t, n, i, a, o, s, c, l, u = 0, d = 0) => {
      let f = new r(i, a, o);
      (b.set(-d, u, 0, `YXZ`),
        y.setFromEuler(b),
        S.set(s, c, l),
        f.applyMatrix4(h.compose(S, y, x)),
        e.push(C(f, t, n)));
    },
    O = new a(0, 1, 0),
    k = new a(),
    j = (e, t, n = 0.024) => {
      k.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
      let r = k.length();
      if (r < 0.001) return;
      let i = new E(n, n, r, 6, 1, !0);
      (y.setFromUnitVectors(O, k.normalize()),
        S.set((e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2),
        i.applyMatrix4(h.compose(S, y, x)),
        d.push(C(i, nt, 0.08)));
    },
    M = (e) => {
      let [t, n, r, i, a, o] = e,
        s = a - n,
        c = Math.max(1, Math.round(s / 0.144)),
        d = s / c,
        f = (t + i) / 2,
        p = (r + o) / 2,
        m = i - t,
        h = o - r,
        g = m >= h,
        _ = g ? m : h,
        v = g ? h : m,
        y = Math.max(3, Math.round(v / 0.17));
      for (let e = 0; e < c; e++) {
        let t = n + e * d;
        T(
          u,
          tt,
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
            ? T(l, J, 0.3, _, 0.022, r, f, t + d - 0.011, p + n)
            : T(l, J, 0.3, r, 0.022, _, f + n, t + d - 0.011, p);
        }
      }
    };
  for (let e of s) {
    for (let t of e.boxes)
      if (t.kind === `pad`) {
        let [e, n, r, i, a, o] = t.aabb;
        T(
          l,
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
      c = (e, a = 0, c = 0) => [
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
        let r = c((t + 0.5) / e, 0, -0.02);
        T(l, J, 0.25, d, 0.04, a, r[0], r[1], r[2], n.yaw);
      }
      for (let e of [-1, 1])
        j(
          c(0, e * (t.half - 0.03), -0.12),
          c(1, e * (t.half - 0.03), -0.12),
          0.035,
        );
    } else {
      let e = Math.max(4, Math.round(d / 0.225)),
        u = d / e - 0.012,
        f = c(0.5, 0, 0.011),
        p = Math.hypot(i, r) + 0.3;
      for (let r = 0; r < e; r++) {
        let i = -t.half + ((r + 0.5) * d) / e;
        T(l, J, 0.35, u, 0.038, p, f[0] + o * i, f[1], f[2] + s * i, n.yaw, a);
      }
    }
    if (e.kind === `board`) continue;
    let f = Math.max(1, Math.round(i / 2)),
      p = i > 9 && !u;
    for (let e of [-1, 1]) {
      let o = e * (t.half + L.tube / 2);
      (u || j(c(0, o, -0.06), c(1, o, -0.06)),
        j(c(0, o, L.mid), c(1, o, L.mid)),
        j(c(0, o, L.top), c(1, o, L.top)),
        p && j(c(0, o, -0.75), c(1, o, -0.75)));
      for (let e = 0; e <= f; e++) {
        let t = e / f;
        (j(c(t, o, p ? -0.75 : -0.06), c(t, o, L.top + 0.05)),
          p &&
            e < f &&
            j(
              c(t, o, e % 2 ? -0.06 : -0.75),
              c((e + 1) / f, o, e % 2 ? -0.75 : -0.06),
            ));
      }
      let s = c(0.5, e * (t.half - 0.012), 0.075);
      T(l, J, 0.3, 0.025, 0.15, Math.hypot(i, r), s[0], s[1], s[2], n.yaw, a);
    }
    for (let e = 0; e <= f; e++) {
      let n = e / f;
      (j(c(n, -t.half, -0.06), c(n, t.half, -0.06)),
        p && j(c(n, -t.half, -0.75), c(n, t.half, -0.75)));
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
      T(d, nt, 0.06, 0.012, s - e.y0, 0.065, ...c(t, (e.y0 + s) / 2), e.facing);
      for (let n = e.y0 + 0.4; n < e.y1 - 0.1; n += 2)
        T(
          d,
          nt,
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
        nt,
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
  let P = new v();
  P.name = `roof-links`;
  let F = [];
  for (let [e, t] of [
    [l, { roughness: 0.9 }],
    [u, { roughness: 0.95 }],
    [d, { roughness: 0.45, metalness: 0.65 }],
  ]) {
    if (!e.length) continue;
    let r = D(e, !1);
    for (let t of e) t.dispose();
    ((e.length = 0), r.computeBoundingBox(), r.computeBoundingSphere());
    let a = new i({ color: 16777215, vertexColors: !0, ...t });
    F.push(a);
    let o = new n(r, a);
    ((o.castShadow = o.receiveShadow = !0),
      (o.name = `roof-links`),
      (o.userData.releaseAfterUpload = !0),
      c?.configureCaster?.(a),
      P.add(o));
  }
  return (t.add(P), rt(P, F));
}
function at(e, t) {
  let a = new r(1, 1, 1),
    o = new i({ color: 6713706, roughness: 0.7, metalness: 0.3 }),
    s = new i({ color: 12162623, roughness: 0.8 }),
    c = [],
    l = [],
    u = new C(2.4, 1.2),
    d = (t, r) => {
      let i = document.createElement(`canvas`);
      ((i.width = 512), (i.height = 256));
      let s = i.getContext(`2d`);
      ((s.fillStyle = `#172426`),
        s.fillRect(0, 0, 512, 256),
        (s.strokeStyle = `#d2ad58`),
        (s.lineWidth = 10),
        s.strokeRect(8, 8, 496, 240),
        (s.fillStyle = `#f3e6c6`),
        (s.textAlign = `center`),
        (s.font = `bold 49px sans-serif`),
        s.fillText(r ? `GROUND ↓` : `ROOF LIFT ↑`, 256, 76),
        (s.font = `bold 36px sans-serif`),
        s.fillText(
          `${Math.round((t.top[1] - t.bottom[1]) / 3.2)} FLOORS`,
          256,
          132,
        ),
        (s.font = `26px sans-serif`),
        s.fillText(`F • CALL / SELECT FLOOR`, 256, 183),
        s.fillText(`BOARD, THEN PRESS F`, 256, 222));
      let d = new k(i);
      d.colorSpace = m;
      let p = new f({ map: d }),
        h = new n(u, p),
        g = r ? t.top : t.bottom,
        _ = t.accessSide * (r ? -1 : 1);
      (h.position.set(g[0] + _ * 1.8, g[1] + 2.2, g[2] + 2.3),
        (h.rotation.y = (_ * Math.PI) / 2),
        e.scene.add(h),
        c.push(h),
        l.push(p, d));
      let v = new n(a, o);
      (v.scale.set(0.08, 1.6, 0.08),
        v.position.set(h.position.x - _ * 0.07, g[1] + 0.8, h.position.z),
        e.scene.add(v),
        c.push(v));
      let y = new n(a, o);
      (y.scale.set(0.04, 1.2, 2.4),
        y.position.copy(h.position),
        (y.position.x -= _ * 0.03),
        e.scene.add(y),
        c.push(y));
    },
    p = t.map((t) => {
      (d(t, !1), d(t, !0));
      let r = new v();
      r.name = t.id;
      let i = (e, t, i, o, s, c, l) => {
        let u = new n(a, l);
        return (
          u.scale.set(e, t, i),
          u.position.set(o, s, c),
          (u.castShadow = !0),
          (u.receiveShadow = !0),
          r.add(u),
          u
        );
      };
      i(t.width, 0.22, t.depth, 0, -0.11, 0, o);
      for (let e of [-1, 1])
        (i(t.width, 2.7, 0.11, 0, 1.35, e * 1.445, o),
          i(2.6, 0.06, 0.06, 0, 1, e * 1.35, s));
      (i(3, 0.2, 3, 0, 2.8, 0, o), i(2, 0.035, 0.25, 0, 2.68, 0, s));
      let c = [];
      for (let e of [-1, 1]) {
        i(0.18, 0.18, 3.2, e * 1.48, 2.67, 0, o);
        for (let t of [-1, 1])
          c.push({
            leaf: t,
            mesh: i(0.12, 2.65, 1.5, e * 1.44, 1.325, t * 0.75, o),
          });
      }
      return (
        i(0.18, 0.5, 0.08, 0.9, 1.3, 1.36, s),
        e.scene.add(r),
        { lift: t, group: r, doors: c }
      );
    });
  return {
    update() {
      for (let { lift: t, group: n, doors: r } of p) {
        let i = e.world.map.liftClock?.() ?? e.world.time.tick;
        n.position.set(t.bottom[0], ie(t, i), t.bottom[2]);
        for (let { leaf: e, mesh: n } of r)
          n.position.z = e * (0.75 + ne(t, i) * 1.5);
      }
    },
    dispose() {
      for (let { group: t } of p) e.scene.remove(t);
      for (let t of c) e.scene.remove(t);
      for (let e of l) e.dispose();
      (u.dispose(), a.dispose(), o.dispose(), s.dispose());
    },
  };
}
