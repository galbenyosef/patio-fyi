// assets__hangar-view-sGXiZG7c 10 — push
// Lines 11426-11723 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
var Y = (e, t) => {
  let n = new _();
  ((n.name = t), n.add(e));
  let r = { root: n };
  return ((n.userData = r), r);
};
function X(e, t, n, r, i = `metalDark`) {
  let a = [];
  for (let o of e)
    for (let e of [1, -1])
      a.push(
        q([o, n, e * t], n, r, `z`, `tyre`, 12),
        q([o, n, e * (t + r / 2 + 0.005)], n * 0.5, 0.02, `z`, i, 8),
      );
  return a;
}
function Yt(e = {}) {
  let t = Bt.dolly,
    n = 1.6,
    r = t.width / 2,
    i = [];
  i.push(K([-1.6, 0.38, -r, n, 0.5, r], `olive`));
  for (let e = -1.6 + 0.15; e < n; e += 0.3)
    i.push(q([e, 0.53, 0], 0.035, 2.3, `z`, `metal`, 6));
  for (let e of [1, -1])
    i.push(
      K(
        [
          -1.6,
          0.5,
          e * r - (e > 0 ? 0.08 : 0),
          n,
          0.62,
          e * r + (e > 0 ? 0 : 0.08),
        ],
        `oliveDark`,
      ),
    );
  if (
    (i.push(...X([-1.05, 1.05], 0.9, 0.24, 0.16)),
    i.push(
      K([n, 0.36, -0.05, 1.85, 0.42, 0.05], `black`),
      q([2.2, 0.38, 0], 0.03, 0.75, `x`, `black`, 6),
      q([2.58, 0.38, 0], 0.06, 0.03, `y`, `black`, 8),
    ),
    e.load !== `empty`)
  ) {
    (i.push(K([-1.37, 0.56, -1.12, 1.37, 0.62, 1.12], `metal`)),
      [
        [-1.3, -1.05, 0, 0, 1.5],
        [0, -1.05, 1.3, 0, 1.25],
        [-1.3, 0, -0.05, 1.05, 1.7],
        [0.05, 0, 1.3, 1.05, 1.35],
      ].forEach(([e, t, n, r, a], o) =>
        i.push(K([e, 0.62, t, n, 0.62 + a, r], o % 2 ? `crate` : `cardboard`)),
      ),
      i.push(K([-1.32, 0.62, -1.08, 1.32, 0.66, 1.08], `wrap`)));
    for (let e = -1.2; e <= 1.21; e += 0.6)
      for (let t of [1, -1])
        i.push(
          K(
            [e - 0.02, 0.62, t * 1.07 - 0.01, e + 0.02, 2.3, t * 1.07 + 0.01],
            `black`,
          ),
        );
    for (let e = -0.9; e <= 0.91; e += 0.6)
      i.push(K([-1.32, 2.28, e - 0.02, 1.32, 2.33, e + 0.02], `black`));
  }
  return Y(J(i, `cargo-dolly`), `cargo-dolly`);
}
function Xt() {
  let e = [];
  (e.push(K([-1.3, 0.35, -0.7, 1, 0.5, 0.7], `black`)),
    e.push(
      K([-1.25, 0.5, -0.68, 0.95, 1.38, 0.68], `olive`),
      K([-1.28, 1.38, -0.7, 0.98, 1.45, 0.7], `oliveDark`),
    ));
  for (let t = -1; t < 0.8; t += 0.18)
    for (let n of [1, -1])
      e.push(
        K(
          [t, 0.75, n * 0.684 - 0.004, t + 0.1, 1.2, n * 0.684 + 0.004],
          `oliveDark`,
        ),
      );
  return (
    e.push(
      K([0.95, 0.75, -0.45, 0.99, 1.25, 0.45], `black`),
      K([0.99, 1, -0.3, 1, 1.15, -0.1], `amber`),
      K([0.99, 1, 0.1, 1, 1.15, 0.3], `white`),
    ),
    e.push(
      q([-1.33, 1, 0], 0.32, 0.6, `z`, `black`, 14),
      q([-1.33, 1, 0], 0.12, 0.62, `z`, `metal`, 8),
    ),
    e.push(q([-0.5, 1.5, 0.35], 0.06, 0.15, `y`, `black`, 8)),
    e.push(...X([-0.2], 0.78, 0.33, 0.2)),
    e.push(
      q([1.5, 0.4, 0], 0.035, 1, `x`, `black`, 6),
      q([1.62, 0.15, 0], 0.08, 0.06, `z`, `tyre`, 8),
      K([1.6, 0.15, -0.02, 1.64, 0.4, 0.02], `metal`),
    ),
    Y(J(e, `gpu`), `gpu`)
  );
}
function Zt(e = {}) {
  let t = e.count ?? 1,
    n = e.spacing ?? 2,
    r = Bt.cone,
    i = [];
  for (let e = 0; e < t; e++) {
    let a = (e - (t - 1) / 2) * n;
    (i.push(
      K(
        [a - r.base / 2, 0, -r.base / 2, a + r.base / 2, 0.03, r.base / 2],
        `black`,
      ),
    ),
      i.push(
        q(
          [a, 0.03 + (r.height - 0.03) / 2, 0],
          0.14,
          r.height - 0.03,
          `y`,
          `orange`,
          10,
          0.025,
        ),
      ));
    for (let [e, t] of [
      [0.42, 0.075],
      [0.56, 0.055],
    ])
      i.push(q([a, e, 0], t + 0.004, 0.06, `y`, `white`, 10, t - 0.004));
  }
  return Y(J(i, `cones`), `cones`);
}
function Qt() {
  let e = Bt.chocks,
    t = [];
  for (let n of [1, -1])
    t.push(
      Kt(
        [
          [0.33, 0],
          [0.63, 0],
          [0.63, e.height],
          [0.36, 0.03],
        ].map(([e, t]) => [n * e, t]),
        -0.15,
        0.15,
        `yellow`,
      ),
    );
  return (
    t.push(K([-0.5, 0.09, 0.12, 0.5, 0.11, 0.14], `rope`)),
    Y(J(t, `chocks`), `chocks`)
  );
}
function $t() {
  let e = 4.6,
    t = 1.25,
    n = [];
  (n.push(
    K([-4.6, 0.45, -1.25, e, 2.95, t], `white`),
    K([-4.5, 2.95, -1.15, 4.5, 3.05, 1.15], `light`),
  ),
    n.push(
      Kt(
        [
          [e, 0.45],
          [4.6499999999999995, 0.45],
          [4.6499999999999995, 1.4],
          [e, 2.9],
        ],
        -1.25,
        t,
        `white`,
      ),
    ));
  for (let r of [1, -1]) {
    n.push(K([-4.6, 1.15, r * t - 0.006, e, 1.35, r * t + 0.006], `blue`));
    for (let e = -4.1; e < 2.9999999999999996; e += 1.05)
      n.push(K([e, 1.6, r * t - 0.008, e + 0.85, 2.5, r * t + 0.008], `glass`));
    n.push(K([3.3, 1.6, r * t - 0.008, 4.35, 2.5, r * t + 0.008], `glass`));
  }
  (n.push(
    K(
      [3.1499999999999995, 0.5, 1.24, 4.1499999999999995, 2.55, 1.262],
      `glass`,
    ),
  ),
    n.push(
      K(
        [4.619999999999999, 1.45, -1.13, 4.659999999999999, 2.6, 1.13],
        `glass`,
      ),
      K([4.619999999999999, 0.5, -1.15, 4.68, 0.75, 1.15], `black`),
    ));
  for (let e of [1, -1])
    n.push(
      K(
        [4.6499999999999995, 0.85, e * 0.95 - 0.13, 4.67, 1, e * 0.95 + 0.13],
        `light`,
      ),
      K([-4.6 - 0.01, 0.9, e * 0.95 - 0.1, -4.6, 1.15, e * 0.95 + 0.1], `red`),
    );
  return (
    n.push(
      K([-4.6 - 0.02, 1.6, -0.9, -4.6, 2.5, 0.9], `glass`),
      K([-4.68, 0.5, -1.15, -4.6, 0.75, 1.15], `black`),
    ),
    n.push(
      ...X([2.8999999999999995], 1.05, 0.5, 0.3),
      ...X([-4.6 + 2.2], 1.05, 0.5, 0.3),
      ...X([-4.6 + 2.2], 0.73, 0.5, 0.28),
    ),
    Y(J(n, `crew-bus`), `crew-bus`)
  );
}
function en(e = {}) {
  let t = [];
  (t.push(
    K([-1.25, 0.25, -0.62, 0.7, 1.05, 0.62], `yellow`),
    K([-1.6, 0.25, -0.6, -1.2, 1.25, 0.6], `oliveDark`),
  ),
    t.push(
      K([-0.75, 1.05, -0.3, -0.25, 1.2, 0.3], `black`),
      K([-0.75, 1.2, -0.3, -0.62, 1.6, 0.3], `black`),
    ),
    t.push(q([0.15, 1.35, 0], 0.15, 0.03, `x`, `black`, 10)));
  for (let e of [-1.05, 0.55])
    for (let n of [1, -1])
      t.push(
        K(
          [e - 0.03, 1.05, n * 0.55 - 0.03, e + 0.03, 2.15, n * 0.55 + 0.03],
          `black`,
        ),
      );
  t.push(K([-1.1, 2.15, -0.6, 0.6, 2.2, 0.6], `black`));
  for (let e of [1, -1])
    t.push(
      K(
        [0.78, 0.15, e * 0.42 - 0.05, 0.88, 2.15, e * 0.42 + 0.05],
        `metalDark`,
      ),
    );
  t.push(K([0.88, 0.2, -0.5, 0.95, 0.85, 0.5], `metalDark`));
  for (let e of [1, -1])
    t.push(
      K([0.95, 0.12, e * 0.3 - 0.06, 2.05, 0.17, e * 0.3 + 0.06], `metalDark`),
    );
  return (
    e.pallet &&
      t.push(
        K([0.98, 0.17, -0.6, 2.1, 0.3, 0.6], `crate`),
        K([1, 0.3, -0.55, 2.05, 1.1, 0.55], `cardboard`),
      ),
    t.push(...X([0.45], 0.5, 0.3, 0.24), ...X([-1.05], 0.5, 0.25, 0.2)),
    Y(J(t, `forklift`), `forklift`)
  );
}
function tn() {
  let e = Bt.windsock,
    n = [];
  n.push(
    K([-0.4, 0, -0.4, 0.4, 0.15, 0.4], `grey`),
    q([0, e.mast / 2, 0], 0.07, e.mast, `y`, `white`, 10),
    q([0, e.mast + 0.05, 0], 0.1, 0.1, `y`, `red`, 8),
  );
  let r = J(n, `windsock-mast`),
    i = [],
    a = e.sock;
  for (let e = 0; e < 5; e++) {
    let t = (e * a) / 5,
      n = ((e + 1) * a) / 5,
      r = 0.45 - (t / a) * 0.25,
      o = 0.45 - (n / a) * 0.25;
    i.push(
      q([(t + n) / 2, 0, 0], r, n - t, `x`, e % 2 ? `white` : `orange`, 12, o),
    );
  }
  i.push(q([0, 0, 0], 0.47, 0.06, `x`, `metal`, 12, 0.47));
  let o = x(i);
  o.computeVertexNormals();
  let s = new t(o, Jt());
  ((s.name = `windsock-sock`), (s.castShadow = !0));
  let c = new _();
  (c.position.set(0, e.mast - 0.1, 0), c.add(s));
  let l = new _();
  ((l.name = `windsock`), l.add(r, c));
  let u = (e = 1, t = 0) => {
    c.rotation.set(0, t, -(1 - Math.min(1, Math.max(0, e))) * 1.35);
  };
  u(1, 0);
  let d = { root: l, sock: s, setWind: u };
  return ((l.userData = d), d);
}
