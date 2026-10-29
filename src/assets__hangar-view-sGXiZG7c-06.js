// assets__hangar-view-sGXiZG7c 06 — push
// Lines 10119-10425 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function St(e, n, [r, i] = [`black`, `yellow`]) {
  let a = Ie(e),
    o = new w()
      .makeTranslation(0, e.mainR, 0)
      .multiply(new w().makeRotationZ(a.pitch))
      .multiply(new w().makeTranslation(0, -e.axleY, 0)),
    s = x(n);
  (s.applyMatrix4(o),
    s.computeVertexNormals(),
    s.computeBoundingBox(),
    s.computeBoundingSphere());
  let c = new _();
  c.name = e.key;
  let l = new t(s, nt());
  ((l.name = `${e.key}-body`), (l.castShadow = l.receiveShadow = !0), c.add(l));
  let u = st(e.prop, 0.24);
  (xt(u, L.prop, L[r]), xt(u, L.hazard, L[i]));
  let d = new t(u, nt());
  ((d.name = `${e.key}-prop`), (d.castShadow = !0));
  let f = new _();
  ((f.matrixAutoUpdate = !1),
    f.matrix.copy(o).multiply(new w().makeTranslation(e.prop.x, 0, 0)),
    f.add(d),
    c.add(f));
  let p = {
    root: c,
    body: l,
    prop: d,
    stance: a,
    spin: (e) => {
      d.rotation.x = e;
    },
  };
  return ((c.userData = p), p);
}
function Ct(e) {
  let t = [],
    n = (e) => 2.4 - 1.25 * e,
    r = (e) => -0.13 + 0.1 * e,
    i = (e) => -0.78 + 0.75 * e ** 0.75,
    a = (n, r, i, a) => t.push(...W([U(n, e + i, e + a, r)]));
  for (let e = 0; e < 9; e++) {
    let t = e / 9,
      o = (e + 1) / 9,
      s = (e) => r(e) - i(e);
    a(
      [
        [n(t), i(t)],
        [n(o), i(o)],
        [n(o), r(o)],
        [n(t), r(t)],
      ],
      `red`,
      0.002,
      0.006,
    );
    let c = (t + o) / 2;
    (a(
      [
        [n(t), r(t)],
        [n(c), r(c) - 0.42 * s(c)],
        [n(o), r(o)],
      ],
      `light`,
      0.004,
      0.009,
    ),
      a(
        [
          [n(t), i(t)],
          [n(o), i(o)],
          [n(c), i(c) + 0.42 * s(c)],
        ],
        `light`,
        0.004,
        0.009,
      ),
      a(
        [
          [n(t), r(t)],
          [n(o), r(o)],
          [n(o), r(o) + 0.035],
          [n(t), r(t) + 0.035],
        ],
        `black`,
        0.004,
        0.01,
      ),
      a(
        [
          [n(t), i(t) - 0.035],
          [n(o), i(o) - 0.035],
          [n(o), i(o)],
          [n(t), i(t)],
        ],
        `black`,
        0.004,
        0.01,
      ));
  }
  return t;
}
function wt(e = {}) {
  let t = le,
    n = [`olive`, `bare`].includes(e.paint) ? e.paint : `camo`,
    r = [],
    i = n === `camo` ? `camo` : n,
    a = n === `camo` ? `tan` : i;
  (r.push(
    ...gt(
      [
        [2.5, 0.42, -0.42, 0.4, 0.35],
        [1.9, 0.46, -0.5, 0.45],
        [0.6, 0.48, -0.58, 0.5],
        [-0.4, 0.47, -0.7, 0.52],
        [-1.6, 0.44, -0.88, 0.5],
        [-2.8, 0.36, -0.7, 0.45],
        [-4.2, 0.26, -0.42, 0.4, 0.25],
        [-5.6, 0.14, -0.28, 0.32, 0.2],
        [t.tail, 0.05, -0.06, 0.22, 0.2],
      ],
      i,
    ),
  ),
    r.push(V([2.825, 0, 0], 0.42, 0.65, `x`, `tan`, 12, 0.03)),
    r.push(
      ...gt(
        [
          [2.42, 0.47, -0.9, 0, 0.12],
          [1.05, 0.47, -0.9, 0, 0.12],
          [0.3, 0.4, -0.64, 0, 0.18],
        ],
        `light`,
      ),
    ),
    r.push(
      B([2.42, -0.8, -0.36, 2.44, -0.18, 0.36], `black`),
      B([2.42, -0.8, -0.02, 2.45, -0.18, 0.02], `light`),
    ),
    r.push(...Ct(0.47)));
  for (let e of [1, -1])
    r.push(
      V([2.1, 0.15, e * 0.452], 0.08, 0.01, `z`, `light`, 10),
      V([2.09, 0.15, e * 0.458], 0.045, 0.01, `z`, `black`, 8),
    );
  (r.push(
    ...gt(
      [
        [-0.5, 0.22, 0.42, 0.55, 0.4],
        [-0.9, 0.34, 0.42, 1.02, 0.45],
        [-1.6, 0.32, 0.42, 0.98, 0.45],
        [-2.3, 0.12, 0.4, 0.6, 0.4],
      ],
      `canopy`,
    ),
  ),
    r.push(
      H(ht(-2.3, 0.12, 0.38, 0.6, 0.4), ht(-3.6, 0.06, 0.38, 0.46, 0.4), i),
    ),
    n !== `olive` &&
      r.push(
        B([0.3, 0.44, -0.16, 2.45, 0.47, 0.16], n === `camo` ? `tan` : `olive`),
      ));
  for (let e = 0; e < 6; e++)
    for (let t of [1, -1])
      r.push(
        B(
          [
            1 + e * 0.22,
            0.08,
            t * 0.47 - 0.04,
            1.14 + e * 0.22,
            0.2,
            t * 0.47 + 0.04,
          ],
          `black`,
        ),
      );
  let o = Math.tan((5 * Math.PI) / 180);
  return (
    r.push(
      ...vt(
        { z: 0.4, y: -0.55, le: 1.25, te: -1.35, t: 0.36 },
        {
          z: t.span / 2,
          y: -0.55 + (t.span / 2 - 0.4) * o,
          le: 0.45,
          te: -0.75,
          t: 0.14,
        },
        a,
      ),
    ),
    r.push(
      ...vt(
        { z: 0.12, y: 0.02, le: -5.25, te: -6.45, t: 0.12 },
        { z: 2.05, y: 0.02, le: -5.9, te: -6.35, t: 0.06 },
        a,
      ),
    ),
    r.push(
      U(
        [
          [-5, 0.34],
          [-5.95, 1.5],
          [-6.2, t.finTop[1]],
          [-6.45, 1.55],
          [t.tail, 0.15],
        ],
        -0.07,
        0.07,
        i,
      ),
    ),
    r.push(...bt(t, -0.55 + (t.mainZ - 0.4) * o, i)),
    St(t, r)
  );
}
function Tt() {
  let e = Je,
    t = `navy`,
    n = [];
  (n.push(
    ...gt(
      [
        [3.42, 0.66, -0.66, 0.62, 0.38],
        [2.9, 0.68, -0.68, 0.66, 0.38],
        [2.3, 0.64, -0.66, 0.64, 0.35],
        [0.6, 0.6, -0.68, 0.62, 0.32],
        [-1, 0.55, -0.68, 0.6],
        [-2.6, 0.46, -0.58, 0.52],
        [-4.2, 0.32, -0.4, 0.44, 0.25],
        [-5.6, 0.16, -0.25, 0.36, 0.2],
        [e.tail, 0.05, -0.04, 0.24, 0.2],
      ],
      t,
    ),
  ),
    n.push(
      V([3.44, 0, 0], 0.5, 0.04, `x`, `black`, 14),
      V([3.51, 0, 0], 0.3, 0.18, `x`, t, 12, 0.06),
    ),
    n.push(
      ...gt(
        [
          [-0.9, 0.2, 0.5, 0.62, 0.4],
          [-1.3, 0.34, 0.5, 1.08, 0.45],
          [-2.1, 0.32, 0.5, 1.02, 0.45],
          [-2.8, 0.1, 0.48, 0.62, 0.4],
        ],
        `canopy`,
      ),
    ),
    n.push(H(ht(-2.8, 0.1, 0.46, 0.62, 0.4), ht(-4, 0.06, 0.42, 0.5, 0.4), t)));
  for (let e of [1, -1])
    n.push(B([2, -0.3, e * 0.63 - 0.05, 2.4, -0.1, e * 0.63 + 0.05], `black`));
  let r = { z: e.mainZ, y: -1.05, le: 1.2, te: -1.45, t: 0.38 };
  return (
    n.push(...vt({ z: 0.5, y: -0.6, le: 1.35, te: -1.6, t: 0.45 }, r, t)),
    n.push(
      ...vt(
        r,
        {
          z: e.span / 2,
          y: -1.05 + (e.span / 2 - e.mainZ) * Math.tan((9 * Math.PI) / 180),
          le: 0.55,
          te: -0.95,
          t: 0.15,
        },
        t,
      ),
    ),
    n.push(
      ...vt(
        { z: 0.15, y: 0.05, le: -5.15, te: -6.35, t: 0.14 },
        { z: 2.6, y: 0.05, le: -5.75, te: -6.3, t: 0.07 },
        t,
      ),
    ),
    n.push(
      U(
        [
          [-4.9, 0.4],
          [-5.85, 1.65],
          [-6.1, e.finTop[1]],
          [-6.4, 1.7],
          [e.tail, 0.15],
        ],
        -0.08,
        0.08,
        t,
      ),
    ),
    n.push(...bt(e, -1.05, t)),
    St(e, n)
  );
}
function Et(e, t, n, r) {
  let i = [];
  for (let a of e)
    for (let e of [1, -1])
      i.push(
        V([a, n, e * t], n, r, `z`, `tyre`, 14),
        V([a, n, e * (t + r / 2 + 0.005)], n * 0.5, 0.02, `z`, `metal`, 10),
      );
  return i;
}
