// assets__hangar-view--r_UA7k- 06 — push
// Lines 10119-10425 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function Ct(e, t, [n, r] = [`black`, `yellow`]) {
  let i = we(e),
    a = new o()
      .makeTranslation(0, e.mainR, 0)
      .multiply(new o().makeRotationZ(i.pitch))
      .multiply(new o().makeTranslation(0, -e.axleY, 0)),
    s = x(t);
  (s.applyMatrix4(a),
    s.computeVertexNormals(),
    s.computeBoundingBox(),
    s.computeBoundingSphere());
  let c = new y();
  c.name = e.key;
  let l = new d(s, rt());
  ((l.name = `${e.key}-body`), (l.castShadow = l.receiveShadow = !0), c.add(l));
  let u = ct(e.prop, 0.24);
  (St(u, I.prop, I[n]), St(u, I.hazard, I[r]));
  let f = new d(u, rt());
  ((f.name = `${e.key}-prop`), (f.castShadow = !0));
  let p = new y();
  ((p.matrixAutoUpdate = !1),
    p.matrix.copy(a).multiply(new o().makeTranslation(e.prop.x, 0, 0)),
    p.add(f),
    c.add(p));
  let m = {
    root: c,
    body: l,
    prop: f,
    stance: i,
    spin: (e) => {
      f.rotation.x = e;
    },
  };
  return ((c.userData = m), m);
}
function wt(e) {
  let t = [],
    n = (e) => 2.4 - 1.25 * e,
    r = (e) => -0.13 + 0.1 * e,
    i = (e) => -0.78 + 0.75 * e ** 0.75,
    a = (n, r, i, a) => t.push(...U([H(n, e + i, e + a, r)]));
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
function Tt(e = {}) {
  let t = Ve,
    n = [`olive`, `bare`].includes(e.paint) ? e.paint : `camo`,
    r = [],
    i = n === `camo` ? `camo` : n,
    a = n === `camo` ? `tan` : i;
  (r.push(
    ..._t(
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
    r.push(B([2.825, 0, 0], 0.42, 0.65, `x`, `tan`, 12, 0.03)),
    r.push(
      ..._t(
        [
          [2.42, 0.47, -0.9, 0, 0.12],
          [1.05, 0.47, -0.9, 0, 0.12],
          [0.3, 0.4, -0.64, 0, 0.18],
        ],
        `light`,
      ),
    ),
    r.push(
      z([2.42, -0.8, -0.36, 2.44, -0.18, 0.36], `black`),
      z([2.42, -0.8, -0.02, 2.45, -0.18, 0.02], `light`),
    ),
    r.push(...wt(0.47)));
  for (let e of [1, -1])
    r.push(
      B([2.1, 0.15, e * 0.452], 0.08, 0.01, `z`, `light`, 10),
      B([2.09, 0.15, e * 0.458], 0.045, 0.01, `z`, `black`, 8),
    );
  (r.push(
    ..._t(
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
      V(gt(-2.3, 0.12, 0.38, 0.6, 0.4), gt(-3.6, 0.06, 0.38, 0.46, 0.4), i),
    ),
    n !== `olive` &&
      r.push(
        z([0.3, 0.44, -0.16, 2.45, 0.47, 0.16], n === `camo` ? `tan` : `olive`),
      ));
  for (let e = 0; e < 6; e++)
    for (let t of [1, -1])
      r.push(
        z(
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
      ...yt(
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
      ...yt(
        { z: 0.12, y: 0.02, le: -5.25, te: -6.45, t: 0.12 },
        { z: 2.05, y: 0.02, le: -5.9, te: -6.35, t: 0.06 },
        a,
      ),
    ),
    r.push(
      H(
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
    r.push(...xt(t, -0.55 + (t.mainZ - 0.4) * o, i)),
    Ct(t, r)
  );
}
function Et() {
  let e = oe,
    t = `navy`,
    n = [];
  (n.push(
    ..._t(
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
      B([3.44, 0, 0], 0.5, 0.04, `x`, `black`, 14),
      B([3.51, 0, 0], 0.3, 0.18, `x`, t, 12, 0.06),
    ),
    n.push(
      ..._t(
        [
          [-0.9, 0.2, 0.5, 0.62, 0.4],
          [-1.3, 0.34, 0.5, 1.08, 0.45],
          [-2.1, 0.32, 0.5, 1.02, 0.45],
          [-2.8, 0.1, 0.48, 0.62, 0.4],
        ],
        `canopy`,
      ),
    ),
    n.push(V(gt(-2.8, 0.1, 0.46, 0.62, 0.4), gt(-4, 0.06, 0.42, 0.5, 0.4), t)));
  for (let e of [1, -1])
    n.push(z([2, -0.3, e * 0.63 - 0.05, 2.4, -0.1, e * 0.63 + 0.05], `black`));
  let r = { z: e.mainZ, y: -1.05, le: 1.2, te: -1.45, t: 0.38 };
  return (
    n.push(...yt({ z: 0.5, y: -0.6, le: 1.35, te: -1.6, t: 0.45 }, r, t)),
    n.push(
      ...yt(
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
      ...yt(
        { z: 0.15, y: 0.05, le: -5.15, te: -6.35, t: 0.14 },
        { z: 2.6, y: 0.05, le: -5.75, te: -6.3, t: 0.07 },
        t,
      ),
    ),
    n.push(
      H(
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
    n.push(...xt(e, -1.05, t)),
    Ct(e, n)
  );
}
function Dt(e, t, n, r) {
  let i = [];
  for (let a of e)
    for (let e of [1, -1])
      i.push(
        B([a, n, e * t], n, r, `z`, `tyre`, 14),
        B([a, n, e * (t + r / 2 + 0.005)], n * 0.5, 0.02, `z`, `metal`, 10),
      );
  return i;
}
