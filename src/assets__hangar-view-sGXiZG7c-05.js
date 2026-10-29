// assets__hangar-view-sGXiZG7c 05 — push
// Lines 9782-10118 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function ct() {
  let e = new _();
  e.name = `cargo-plane`;
  let t = G(ot(), `plane-body`);
  e.add(t);
  let n = new a({
      color: L.glass,
      roughness: 0.08,
      metalness: 0.3,
      transparent: !0,
      opacity: 0.42,
      depthWrite: !1,
    }),
    r = he(),
    i = it(r, n, `plane-glass`);
  e.add(i);
  let o = new S(st(), nt(), N.engines.length);
  ((o.name = `plane-props`), (o.castShadow = !0), e.add(o));
  let s = new m(),
    c = new Set(),
    l = new w().makeScale(0, 0, 0),
    u = (e) => {
      (N.engines.forEach((t, n) => {
        (s.position.set(N.prop.x, N.prop.y, t),
          s.rotation.set(e + n * 0.4, 0, 0),
          s.updateMatrix(),
          o.setMatrixAt(n, s.matrix));
      }),
        (o.instanceMatrix.needsUpdate = !0));
    },
    d = (e, t) => {
      let [n, a, o, u, d, f] = r[e];
      (t ? c.add(e) : c.delete(e),
        t
          ? i.setMatrixAt(e, l)
          : (s.position.set((n + u) / 2, (a + d) / 2, (o + f) / 2),
            s.rotation.set(0, 0, 0),
            s.scale.set(u - n, d - a, f - o),
            s.updateMatrix(),
            i.setMatrixAt(e, s.matrix),
            s.scale.set(1, 1, 1)),
        (i.instanceMatrix.needsUpdate = !0));
    };
  u(0);
  let f = {
    root: e,
    body: t,
    glass: i,
    props: o,
    spin: u,
    setPaneBroken: d,
    panes: r,
  };
  return ((e.userData = f), f);
}
function lt() {
  let e = [],
    t = A.width / 2;
  for (let t of Ve()) {
    if (t.part === `wheel`) {
      let n = (t.b[0] + t.b[3]) / 2,
        r = (t.b[2] + t.b[5]) / 2,
        i = t.b[5] - t.b[2];
      e.push(
        V([n, A.wheelR, r], A.wheelR, i, `z`, `tyre`, 14),
        V([n, A.wheelR, r + Math.sign(r) * 0.01], 0.22, i, `z`, `metal`, 10),
      );
      continue;
    }
    e.push(B(t.b, t.m));
  }
  for (let n of [-A.wheelX, A.wheelX])
    for (let r of [1, -1])
      e.push(
        B(
          [
            n - 0.55,
            0.92,
            r > 0 ? 0.8 : -t - 0.02,
            n + 0.55,
            0.98,
            r > 0 ? t + 0.02 : -0.8,
          ],
          `tugDark`,
        ),
      );
  for (let n = 0; n < 6; n++) {
    let r = -t + 0.2 + n * 0.4;
    e.push(
      B(
        [A.length / 2 - 0.02, 0.3, r, A.length / 2 + 0.005, 0.7, r + 0.18],
        `tugDark`,
      ),
    );
  }
  for (let t of [-0.8, 0.8])
    e.push(B([2.14, 1.05, t - 0.14, 2.17, 1.2, t + 0.14], `light`));
  return (
    e.push(V([1.9, 1.38, 0.85], 0.09, 0.16, `y`, `amber`, 10)),
    e.push(
      V([-0.15, 1.5, 0], 0.2, 0.04, `x`, `tugDark`, 12),
      V([-0.05, 1.42, 0], 0.03, 0.25, `x`, `tugDark`, 6),
    ),
    e.push(
      B([-2.2, 1.9, -1.12, 0.3, 1.93, -1], `tugDark`),
      B([-2.2, 1.9, 1, 0.3, 1.93, 1.12], `tugDark`),
    ),
    e.push(V([-2.42, 0.45, 0], 0.05, 0.3, `y`, `metal`, 8)),
    e.push(B([0.5, 1.3, -0.9, 1.9, 1.31, 0.9], `tugDark`)),
    e
  );
}
function ut() {
  let e = new _();
  e.name = `tug`;
  let t = G(lt(), `tug-body`);
  e.add(t);
  let n = { root: e, body: t };
  return ((e.userData = n), n);
}
function dt() {
  let e = [],
    t = Ce.y;
  for (let n of Oe()) {
    if (n.part === `wheels`) {
      for (let t of [-0.33, 0.33])
        e.push(V([1, 0.18, t], 0.18, 0.1, `z`, `tyre`, 12));
      e.push(
        V([1, 0.18, 0], 0.025, 0.66, `z`, `metal`, 6),
        B([0.97, 0.18, -0.03, 1.03, t, 0.03], `metal`),
      );
      continue;
    }
    if (n.part === `lunette`) {
      let n = z(new i(0.13, 0.04, 6, 14));
      (n.rotateX(Math.PI / 2),
        n.translate(4.83, t, 0),
        e.push(
          R(n, `tugDark`),
          B([4.6, t - 0.04, -0.05, 4.72, t + 0.04, 0.05], `tugDark`),
        ));
      continue;
    }
    e.push(B(n.b, n.m));
  }
  for (let n = 0.6; n < 4.5; n += 0.6)
    e.push(B([n, t - 0.065, -0.065, n + 0.3, t + 0.065, 0.065], `tugDark`));
  return e;
}
function ft() {
  let e = new _();
  e.name = `tow-bar`;
  let t = G(dt(), `towbar-body`);
  e.add(t);
  let n = { root: e, body: t };
  return ((e.userData = n), n);
}
function pt(e = {}) {
  let t = [],
    n = E.thick / 2,
    r = E.width / 2,
    i = E.height,
    a = E.skirt,
    o = E.personnel,
    s = 0.14;
  for (let n of we(e)) {
    if (n.part !== `panel`) {
      t.push(B(n.b, n.m));
      continue;
    }
    let [, e, r, , i, a] = n.b;
    t.push(B([-0.14, e, r, s, i, a], `door`));
  }
  for (let a = -r + 0.3; a < r - 0.4; a += 0.3) {
    let r =
      e.personnelDoor && a + 0.15 > o.z0 - 0.1 && a < o.z1 + 0.1
        ? o.top + 0.1
        : 0.5;
    for (let e of [1, -1])
      t.push(
        B(
          e > 0
            ? [s, r, a, n, i - 0.3, a + 0.15]
            : [-n, r, a, -0.14, i - 0.3, a + 0.15],
          `rib`,
        ),
      );
  }
  (t.push(
    B([-n, a, r - 0.16, n, i, r], `doorFrame`),
    B([-n, a, -r, n, i, -r + 0.16], `doorFrame`),
  ),
    t.push(B([-n, i - 0.3, -r, n, i, r], `doorFrame`)));
  let c = (e, r) => t.push(B([-n, a, e, n, 0.5, r], `doorFrame`));
  e.personnelDoor ? (c(-r, o.z0), c(o.z1, r)) : c(-r, r);
  for (let e of [4.7, 9.4]) t.push(B([-n, e, -r, n, e + 0.18, r], `doorFrame`));
  for (let e = 0.6; e < i - 0.4; e += 0.8)
    for (let i of [1, -1])
      t.push(
        B(
          [
            i > 0 ? n : -n - 0.004,
            e,
            r - 0.16,
            i > 0 ? n + 0.004 : -n,
            e + 0.4,
            r,
          ],
          `hazard`,
        ),
      );
  for (let n of [-2.8 - (e.personnelDoor ? 0.6 : 0), 2.8])
    (t.push(V([0, 0.22, n], 0.22, 0.14, `x`, `metal`, 12)),
      t.push(V([0, i + 0.08, n], 0.08, 0.16, `z`, `metal`, 8)));
  if (e.personnelDoor) {
    for (let e of [1, -1]) {
      let r = e > 0 ? n : -n - 0.02,
        i = e > 0 ? n + 0.02 : -n;
      t.push(
        B([r, o.sill, o.z0 - 0.1, i, o.top + 0.1, o.z0], `doorFrame`),
        B([r, o.sill, o.z1, i, o.top + 0.1, o.z1 + 0.1], `doorFrame`),
        B([r, o.top, o.z0 - 0.1, i, o.top + 0.1, o.z1 + 0.1], `doorFrame`),
      );
    }
    let r = we(e).find((e) => e.part === `door leaf`).b,
      i = r[5] - r[2] < 0.1;
    t.push(
      B(
        i
          ? [r[0] + 0.15, 1, r[5], r[0] + 0.3, 1.05, r[5] + 0.05]
          : [0.03, 1, r[5] - 0.3, 0.06, 1.05, r[5] - 0.15],
        `metal`,
      ),
    );
  }
  return t;
}
function mt(e = {}) {
  let t = new _();
  t.name = e.personnelDoor ? `door-panel-personnel` : `door-panel`;
  let n = G(pt(e), `door-body`);
  t.add(n);
  let r = { root: t, body: n };
  return ((t.userData = r), r);
}
var ht = (e, t, n, r, i = 0.3) => [
    [e, n, t * (1 - i)],
    [e, n + (r - n) * i * 0.6, t],
    [e, r - (r - n) * i * 0.6, t],
    [e, r, t * (1 - i)],
    [e, r, -t * (1 - i)],
    [e, r - (r - n) * i * 0.6, -t],
    [e, n + (r - n) * i * 0.6, -t],
    [e, n, -t * (1 - i)],
  ],
  gt = (e, t) => e.slice(1).map((n, r) => H(ht(...e[r]), ht(...n), t)),
  _t = ({ z: e, y: t, le: n, te: r, t: i }) => {
    let a = n - r;
    return [
      [r, t, e],
      [n, t, e],
      [n, t + 0.7 * i, e],
      [n - 0.3 * a, t + i, e],
      [r, t + 0.7 * i, e],
    ];
  },
  vt = (e, t, n) => W([H(_t(e), _t(t), n)]);
function yt(e, t, n, [r, i], [a, o], s, c = 0.006) {
  let l = ht(...e),
    u = ht(...t),
    d = (n + 1) % 8,
    f = (e, t, n) => e.map((e, r) => e + (t[r] - e) * n),
    p = (e, t) => f(f(l[n], l[d], t), f(u[n], u[d], t), e),
    m = [p(r, a), p(i, a), p(i, o), p(r, o)],
    h = m[1].map((e, t) => e - m[0][t]),
    g = m[3].map((e, t) => e - m[0][t]),
    _ = [
      h[1] * g[2] - h[2] * g[1],
      h[2] * g[0] - h[0] * g[2],
      h[0] * g[1] - h[1] * g[0],
    ],
    v = m.reduce((e, t) => e.map((e, n) => e + t[n] / 4), [0, 0, 0]),
    y = [v[0], (e[2] + e[3]) / 2, 0];
  _[1] * (v[1] - y[1]) + _[2] * (v[2] - y[2]) + _[0] * 0 < 0 &&
    (_ = _.map((e) => -e));
  let b = Math.hypot(..._) || 1;
  _ = _.map((e) => e / b);
  let x = (e) => m.map((t) => t.map((t, n) => t + _[n] * e));
  return H(x(0.002), x(0.002 + c), s);
}
function bt(e, t, n) {
  let r = [],
    i = e.tailWheel;
  for (let i of [1, -1]) {
    let a = i * e.mainZ;
    (r.push(
      V([0, e.axleY, a], e.mainR, e.mainR * 0.5, `z`, `tyre`, 14),
      V([0, e.axleY, a], e.mainR * 0.45, e.mainR * 0.52, `z`, `metal`, 8),
    ),
      r.push(
        B(
          [-0.05, e.axleY, a - i * 0.12 - 0.04, 0.05, t, a - i * 0.12 + 0.04],
          `metal`,
        ),
      ),
      r.push(
        B(
          [
            -0.25,
            e.axleY + 0.1,
            a + i * 0.16 - 0.015,
            0.35,
            t,
            a + i * 0.16 + 0.015,
          ],
          n,
        ),
      ));
  }
  return (
    r.push(
      V([i.x, i.y, 0], i.r, 0.09, `z`, `tyre`, 10),
      B([i.x - 0.03, i.y, -0.03, i.x + 0.03, i.y + 0.35, 0.03], `metal`),
    ),
    r
  );
}
function xt(e, t, n) {
  let r = new p().setHex(t),
    i = new p().setHex(n),
    a = e.attributes.color.array;
  for (let e = 0; e < a.length; e += 3)
    Math.abs(a[e] - r.r) < 1e-4 &&
      Math.abs(a[e + 1] - r.g) < 1e-4 &&
      Math.abs(a[e + 2] - r.b) < 1e-4 &&
      a.set([i.r, i.g, i.b], e);
}
