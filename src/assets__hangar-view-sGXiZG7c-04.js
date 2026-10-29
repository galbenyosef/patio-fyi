// assets__hangar-view-sGXiZG7c 04 — push
// Lines 9485-9781 of readable/assets__hangar-view-sGXiZG7c.pretty.js (statement-aligned).
function ot() {
  let e = [],
    t = N.skin.halfWidth,
    n = N.hold.halfWidth,
    r = N.floor,
    i = N.hold.ceiling,
    a = -13.5,
    o = N.skin.crown,
    s = N.wing;
  for (let t of T()) {
    if (t.part === `main gear`) {
      let n = (t.b[2] + t.b[5]) / 2;
      for (let t of [-0.8, 0.8]) e.push(...at(t, n, 0.62, 0.45));
      e.push(B([-0.12, 0.62, n - 0.06, 0.12, 1.3, n + 0.06], `metal`));
      continue;
    }
    if (t.part === `nose gear`) {
      for (let t of [-0.25, 0.25]) e.push(...at(9, t, 0.4, 0.22));
      e.push(
        V([9, 0.62, 0], 0.07, 0.5, `y`, `metal`),
        B([9, 0.34, -0.06, 9.36, 0.46, 0.06], `hazard`),
      );
      continue;
    }
    t.part !== `radome` &&
      t.part !== `fairing` &&
      t.part !== `ramp` &&
      t.part !== `aft wall` &&
      t.part !== `tail cone` &&
      t.part !== `fin` &&
      t.part !== `tailplane` &&
      t.part !== `wing` &&
      e.push(B(t.b, t.m));
  }
  (e.push(
    ...W([
      et(
        [
          [t, 3.6],
          [1.2, o],
          [1.2, 3.95],
          [1.55, 3.6],
        ],
        a,
        10.42,
        `body`,
      ),
    ]),
  ),
    e.push(
      ...W([
        et(
          [
            [t, 0.6],
            [1.4, 0.6],
            [1.4, 0.45],
          ],
          N.hold.x0,
          8,
          `body`,
        ),
      ]),
    ));
  let c = (e, t, n, r, i = 0.3) => [
    [e, n, t * (1 - i)],
    [e, n + (r - n) * i * 0.6, t],
    [e, r - (r - n) * i * 0.6, t],
    [e, r, t * (1 - i)],
    [e, r, -t * (1 - i)],
    [e, r - (r - n) * i * 0.6, -t],
    [e, n + (r - n) * i * 0.6, -t],
    [e, n, -t * (1 - i)],
  ];
  (e.push(H(c(11.2, 1.55, 0.6, 2.75, 0.12), c(11.8, 1, 0.95, 2.5), `body`)),
    e.push(H(c(11.8, 1, 0.95, 2.5), c(12.5, 0.28, 1.45, 1.95), `radome`)),
    e.push(
      B([9.66, 1.75, -1.3, 9.7, 2.6, 1.3], `panel`),
      B([9.3, 2.62, -1.35, 9.7, 2.75, 1.35], `panel`),
    ),
    e.push(B([N.hold.x0, r, -1.38, N.hold.x1, r + 0.012, 1.38], `floor`)));
  for (let t of [-0.9, -0.3, 0.3, 0.9])
    e.push(
      B([N.hold.x0, r, t - 0.05, N.hold.x1, r + 0.03, t + 0.05], `metalDark`),
    );
  for (let t of [1, -1]) {
    let r = t * (n - 0.015);
    for (let [n, i] of t > 0
      ? [
          [N.hold.x0, 2.9],
          [3.8, 4.5],
        ]
      : [[N.hold.x0, 4.5]])
      e.push(B([n, 1.5, r - 0.015, i, 3.55, r + 0.015], `lining`));
  }
  e.push(B([N.hold.x0, i - 0.03, -1.2, 9.7, i, 1.2], `lining`));
  for (let t = -7; t <= 8; t += 2.5)
    e.push(B([t - 0.4, i - 0.05, -0.1, t + 0.4, i - 0.03, 0.1], `light`));
  let l = N.ramp.hingeX - Math.sqrt(N.ramp.length ** 2 - r ** 2);
  e.push(
    U(
      [
        [l, 0],
        [N.ramp.hingeX, 0],
        [N.ramp.hingeX, r],
      ],
      -n,
      n,
      `ramp`,
    ),
  );
  for (let t of [1, -1])
    e.push(
      U(
        [
          [l, 0.005],
          [N.ramp.hingeX, r + 0.005],
          [N.ramp.hingeX, r - 0.04],
          [l + 0.1, 0],
        ],
        t * n - 0.12 * t,
        t * n,
        `hazard`,
      ),
    );
  for (let t of [-1.1, -0.4, 0.4, 1.1])
    e.push(B([l - 0.25, 0, t - 0.2, l + 0.05, 0.04, t + 0.2], `metalDark`));
  e.push(
    ...W([
      U(
        [
          [N.hold.x0, r],
          [N.hold.x0, 3.6],
          [a, 3.6],
          [a, 3.3],
        ],
        n,
        t,
        `body`,
      ),
    ]),
  );
  let u = (e, t, n, r, i, a) => [
    [e, n, t],
    [e, a, t],
    [e, r, i],
    [e, r, -i],
    [e, a, -t],
    [e, n, -t],
  ];
  (e.push(
    H(u(a, t, 3.3, o, 1.2, 3.6), u(N.tail, 0.35, 3.9, 4.4, 0.25, 4.1), `body`),
  ),
    e.push(
      U(
        [
          [-11, 4.4],
          [-15.2, N.tailTop],
          [-17.3, N.tailTop],
          [-17, 4.4],
        ],
        -0.22,
        0.22,
        `body`,
      ),
    ),
    e.push(
      U(
        [
          [-16.15, 4.6],
          [-16.3, N.tailTop - 0.05],
          [-16.36, N.tailTop - 0.05],
          [-16.21, 4.6],
        ],
        -0.225,
        0.225,
        `metalDark`,
      ),
    ),
    e.push(
      ...W([
        H(
          [
            [-17, 4.4, 0.6],
            [-13, 4.4, 0.6],
            [-13, 4.72, 0.6],
            [-17, 4.72, 0.6],
          ],
          [
            [-17, 4.48, 8],
            [-15, 4.48, 8],
            [-15, 4.66, 8],
            [-17, 4.66, 8],
          ],
          `body`,
        ),
      ]),
    ),
    e.push(
      U(
        [
          [s.rootLE, o],
          [s.rootLE, 6.05],
          [s.rootLE + 3, o],
        ],
        -1.15,
        1.15,
        `body`,
      ),
    ),
    e.push(
      U(
        [
          [s.rootTE, o],
          [s.rootTE, 6.05],
          [s.rootTE - 3.6, o],
        ],
        -1.15,
        1.15,
        `body`,
      ),
    ));
  let d = (e, t, n, r) => {
    let i = r - s.under,
      a = t - n;
    return [
      [n, s.under, e],
      [t, s.under, e],
      [t, s.under + 0.7 * i, e],
      [t - 0.3 * a, r, e],
      [n, s.under + 0.7 * i, e],
    ];
  };
  e.push(
    ...W([
      H(
        d(s.root, s.rootLE, s.rootTE, s.rootTop),
        d(N.span / 2, s.tipLE, s.tipTE, s.tipTop),
        `body`,
      ),
    ]),
  );
  let f = N.nacelle;
  for (let t of N.engines)
    (e.push(
      V([f.x1 + 0.35, N.prop.y, t], 0.42, 0.7, `x`, `metalDark`, 12, 0.08),
    ),
      e.push(
        B(
          [f.x1 - 0.9, f.y0 - 0.18, t - 0.32, f.x1 - 0.05, f.y0, t + 0.32],
          `metalDark`,
        ),
      ),
      e.push(
        B(
          [
            f.x0 + 0.4,
            f.y0 + 0.5,
            t + (t > 0 ? f.half : -f.half - 0.04),
            f.x0 + 1.4,
            f.y0 + 0.75,
            t + (t > 0 ? f.half + 0.04 : -f.half),
          ],
          `metalDark`,
        ),
      ));
  let p = N.crewDoor;
  (e.push(
    B([p.x0 - 0.08, p.y0, t, p.x0, p.y1 + 0.08, t + 0.02], `metalDark`),
    B([p.x1, p.y0, t, p.x1 + 0.08, p.y1 + 0.08, t + 0.02], `metalDark`),
  ),
    e.push(
      B(
        [p.x0 - 0.08, p.y1, t, p.x1 + 0.08, p.y1 + 0.08, t + 0.02],
        `metalDark`,
      ),
    ));
  for (let t of [p.x0 + 0.04, p.x1 - 0.04])
    e.push(V([t, 0.9, 2.4], 0.025, 1.1, `y`, `metal`, 6));
  return (e.push(B([a, o, -0.25, 9, o + 0.01, 0.25], `metalDark`)), e);
}
function st(e = N.prop, t = 0.32) {
  let n = [V([0, 0, 0], 0.28, 0.4, `x`, `prop`, 10)];
  for (let i = 0; i < e.blades; i++) {
    let a = z(new r(0.07, e.radius - 0.2, t));
    (a.translate(0, (e.radius - 0.2) / 2 + 0.2, 0),
      a.rotateY(0.35),
      a.rotateX((i * Math.PI * 2) / e.blades),
      n.push(R(a, `prop`)));
    let o = z(new r(0.075, 0.22, t + 0.01));
    (o.translate(0, e.radius - 0.11, 0),
      o.rotateY(0.35),
      o.rotateX((i * Math.PI * 2) / e.blades),
      n.push(R(o, `hazard`)));
  }
  let i = x(n);
  return (i.computeVertexNormals(), i);
}
