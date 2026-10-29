// assets__greywater-signs-view-D86rZqNX 06 — beam
// Lines 1512-1855 of readable/assets__greywater-signs-view-D86rZqNX.pretty.js (statement-aligned).
function me(e, { position: t = [0, 0, 0], rotation: n = [0, 0, 0] } = {}) {
  let r = e.spec,
    { width: i, height: a, elevation: o, palette: s } = r,
    c = I(i * 0.024, 0.16, 0.42),
    l = I(i * 0.013, 0.055, 0.14),
    u = o + a / 2;
  e.withFrame(t, n, () => {
    if (r.faceStyle !== `letters`) {
      (e.box(
        i + l * 2,
        a + l * 2,
        c,
        0,
        u,
        0,
        r.construction === `banner` ? `canvas` : `paint`,
        s.bg,
      ),
        e.solid([0, u, 0], [i + l * 2, a + l * 2, c]));
      for (let t of [-1, 1])
        e.box(
          l,
          a + l * 3,
          c + 0.055,
          t * (i / 2 + l),
          u,
          0.015,
          `metal`,
          s.metal,
        );
      for (let t of [-1, 1])
        e.box(
          i + l * 2,
          l,
          c + 0.055,
          0,
          u + t * (a / 2 + l),
          0.015,
          `metal`,
          s.metal,
        );
      for (let t = -i / 2 + 0.2; t < i / 2; t += Math.max(0.8, i / 8))
        e.box(0.06, a + l, 0.09, t, u, -c / 2 - 0.07, `metal`, L);
    } else {
      W(
        e,
        -i / 2,
        i / 2,
        o - 0.08,
        o + 0.25,
        -0.16,
        Math.max(5, Math.ceil(i)),
        R,
      );
      for (let t = -i / 2; t <= i / 2; t += i / Math.ceil(i / 0.75))
        (e.box(0.045, a + 0.25, 0.07, t, u, -0.18, `metal`, s.metal),
          e.beam(
            [t, o - 0.15, -0.2],
            [t, o + a * 0.9, -0.65],
            0.05,
            `metal`,
            R,
          ));
      e.box(i, 0.09, 0.12, 0, o + a * 0.68, -0.35, `metal`, s.metal);
    }
    let t = e.point([0, u, c / 2 + 0.04]),
      n = new m().setFromRotationMatrix(e.frame),
      d = new v().setFromQuaternion(n);
    if (
      (e.faces.push({
        width: i,
        height: a,
        position: t,
        rotation: [d.x, d.y, d.z],
      }),
      r.lighting === `neon` &&
        r.faceStyle !== `letters` &&
        e.line(
          [
            [-i / 2 - l, o - l, c / 2 + 0.07],
            [i / 2 + l, o - l, c / 2 + 0.07],
            [i / 2 + l, o + a + l, c / 2 + 0.07],
            [-i / 2 - l, o + a + l, c / 2 + 0.07],
          ],
          0.036,
          `neon`,
          s.accent,
          !0,
        ),
      r.lighting === `backlit`)
    )
      for (let t of [-1, 1])
        e.box(
          0.023,
          a - 0.08,
          0.015,
          t * (i / 2 + l * 0.3),
          u,
          c / 2 + 0.04,
          `lamp`,
          `#e6f4d9`,
        );
    (e.box(0.25, 0.34, 0.13, i * 0.35, o + 0.3, -c / 2 - 0.16, `metal`, R),
      e.line(
        [
          [i * 0.35, o + 0.25, -0.3],
          [i * 0.35, o - 0.2, -0.3],
          [0, o - 0.2, -0.3],
        ],
        0.025,
        `metal`,
        R,
      ));
  });
}
function q(e, t = 3, { top: n = !0, reach: r = 0.8, goose: i = !1 } = {}) {
  let { width: a, height: o, elevation: s } = e.spec;
  for (let c = 0; c < t; c++) {
    let l = t === 1 ? 0 : -a * 0.4 + (c * a * 0.8) / (t - 1),
      u = n ? s + o + 0.22 : s - 1.14;
    if (i) {
      let t = [
        [l, u - 0.15, -0.3],
        [l, u + 0.3, -0.3],
        [l, u + 0.52, 0.1],
        [l, u + 0.48, r],
        [l, u + 0.24, r + 0.15],
      ];
      (e.line(t, 0.07, `metal`, R),
        e.cyl(
          0.08,
          0.24,
          0.13,
          l,
          u + 0.15,
          r + 0.15,
          `metal`,
          e.spec.palette.metal,
        ),
        e.cyl(0.2, 0.2, 0.02, l, u + 0.078, r + 0.15, `lamp`, `#ffe4ad`));
    } else
      (e.beam([l, u, -0.3], [l, u + (n ? 0.45 : -0.14), r], 0.075),
        e.beam(
          [l, u - 0.3, -0.3],
          [l, u + (n ? 0.45 : -0.14), r * 0.65],
          0.045,
        ),
        e.box(0.38, 0.19, 0.28, l, u + (n ? 0.4 : -0.08), r, `metal`, R, [
          n ? -0.62 : 0.62,
          0,
          0,
        ]),
        e.box(
          0.3,
          0.025,
          0.21,
          l,
          u + (n ? 0.33 : 0.03),
          r + 0.015,
          `lamp`,
          `#fff0c4`,
          [n ? -0.62 : 0.62, 0, 0],
        ));
    e.fixtures.push({
      position: e.point([l, u + (i ? 0.12 : n ? 0.34 : 0.02), r]),
      target: e.point([l * 0.7, s + o * 0.5, 0.2]),
      color: `#ffe6bb`,
    });
  }
}
function J(e, t, n, r = 0.22, i = 0) {
  let a = Math.max(2, Math.ceil(F(t).distanceTo(F(n)) / r)),
    o = [];
  for (let r = 0; r <= a; r++) {
    let s = r / a,
      c = F(t).lerp(F(n), s);
    ((c.y -= Math.sin(s * Math.PI) * i),
      o.push(c.toArray()),
      e.cyl(0.038, 0.038, 0.07, c.x, c.y - 0.04, c.z, `metal`, R),
      e.ball(0.05, c.x, c.y - 0.105, c.z));
  }
  e.line(o, 0.025, `metal`, R);
}
function he(e) {
  let t = e.spec;
  if (!t.serviceAccess) return;
  let n = t.width + 1.15,
    r = Math.max(0.32, t.elevation - 0.94),
    i = 0.09,
    a = 0.52,
    o = 1.82,
    s = 1.3,
    c = -n / 2 + 0.58;
  ((e.collisionRole = `platform`),
    e.box(n, i, s, 0, r - i / 2, 2.34 / 2, `metal`, R),
    (e.collisionRole = `detail`));
  for (let t = -n / 2 + 0.06; t < n / 2; t += 0.14)
    e.box(0.035, 0.025, 1.22, t, r + 0.014, 2.34 / 2, `metal`, L);
  (e.access.platforms.push({
    center: e.point([0, r - i / 2, 2.34 / 2]),
    size: [n, i, s],
    kind: `catwalk`,
  }),
    (e.collisionRole = `rail`));
  let l = (t, n, i) => {
    if (n - t < 0.05) return;
    for (let a of [r + 0.52, r + 1.02])
      e.beam([t, a, i], [n, a, i], 0.047, `metal`, L, !0);
    let a = Math.max(1, Math.ceil((n - t) / 1.35));
    for (let o = 0; o <= a; o++)
      e.beam(
        [t + ((n - t) * o) / a, r, i],
        [t + ((n - t) * o) / a, r + 1.02, i],
        0.045,
        `metal`,
        L,
        !0,
      );
    e.box(n - t, 0.1, 0.035, (t + n) / 2, r + 0.07, i, `metal`, R);
  };
  (l(-n / 2, c - 0.44, o), l(c + 0.44, n / 2, o));
  for (let t of [-n / 2, n / 2]) {
    for (let n of [r + 0.52, r + 1.02])
      e.beam([t, n, a], [t, n, o], 0.047, `metal`, L, !0);
    for (let n of [a, o])
      e.beam([t, r, n], [t, r + 1.02, n], 0.045, `metal`, L, !0);
  }
  (l(-n / 2, n / 2, a), (e.collisionRole = `solid`));
  for (let t = -n / 2 + 0.25; t < n / 2; t += Math.min(2, n / 2))
    (e.beam([t, r - 0.07, o], [t, Math.max(0.13, r - 0.85), -0.32], 0.085),
      e.beam([t, r - 0.07, o], [t, r - 0.07, -0.35], 0.09));
  let u = 1.94;
  e.collisionRole = `ladder`;
  for (let t of [-0.36, 0.36])
    (e.beam([c + t, 0.12, u], [c + t, r + 0.97, u], 0.075, `metal`, L),
      e.beam(
        [c + t, r + 0.97, u],
        [c + t, r + 0.97, 1.57],
        0.07,
        `metal`,
        L,
        !0,
      ));
  for (let t = 0.21; t <= r; t += 0.28)
    e.beam([c - 0.36, t, u], [c + 0.36, t, u], 0.037, `metal`, V, !0);
  if (
    (e.beam(
      [c - 0.36, r - 0.025, u],
      [c + 0.36, r - 0.025, u],
      0.04,
      `metal`,
      V,
      !0,
    ),
    r > 4.5)
  ) {
    for (let t = 2.3; t < r - 0.5; t += 1.3)
      e.arc(c, t, 1.98, 0.51, 0.62, 0, Math.PI, 0.027, `metal`, L, `xz`);
    for (let t of [-0.51, 0, 0.51])
      e.beam(
        [c + t, 2.3, u + (t ? 0.04 : 0.66)],
        [c + t, r - 0.55, u + (t ? 0.04 : 0.66)],
        0.027,
        `metal`,
        L,
        !0,
      );
  }
  (e.access.ladders.push({
    bottom: e.point([c, 0, 2.12]),
    top: e.point([c, r, 2.12]),
    landing: e.point([c, r, 1.29]),
    width: 0.68,
    rungSpacing: 0.28,
  }),
    e.access.entryGaps.push({ center: e.point([c, r, o]), width: 0.88 }),
    (e.collisionRole = `solid`));
}
var Y = {
  motel(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    (U(e, -0.3, a + 0.65, -0.42, 0.28, `metal`, i.metal),
      e.poly(
        [
          [-1.25, 0.16],
          [0.45, 0.16],
          [0.1, r],
          [-0.75, r],
        ],
        0.55,
        -0.45,
        `paint`,
        i.metal,
      ),
      e.poly(
        [
          [-t / 2 - 0.65, r - 0.55],
          [-t / 2 - 0.38, a + 0.2],
          [t / 2 + 0.72, a + 0.57],
          [t / 2 + 0.36, a + 0.15],
          [-t / 2 - 0.08, a - 0.1],
          [-t / 2 - 0.22, r],
        ],
        0.19,
        -0.07,
        `paint`,
        i.secondary,
      ),
      e.line(
        [
          [-t / 2 - 0.51, r - 0.25, 0.1],
          [-t / 2 - 0.3, a + 0.1, 0.1],
          [t / 2 + 0.51, a + 0.41, 0.1],
        ],
        0.045,
        `neon2`,
        i.secondary,
      ),
      e.beam([-0.3, a - 0.15, -0.4], [0.85, a + 1.2, -0.2], 0.1, `metal`, R),
      fe(e, 0.88, a + 1.35, -0.1, 0.8));
    for (let t = 0; t < 3; t++) {
      let n = -0.75 + t * 0.62,
        a = r - 0.3,
        o = 0.65 + (t % 2) * 0.3;
      (e.poly(
        [
          [n - 0.29, a - o],
          [n - 0.13, a - o * 0.57],
          [n - 0.23, a - o * 0.57],
          [n, a],
          [n + 0.23, a - o * 0.57],
          [n + 0.13, a - o * 0.57],
          [n + 0.29, a - o],
        ],
        0.055,
        0.15,
        `paint`,
        i.secondary,
      ),
        e.box(0.06, 0.18, 0.06, n, a - o - 0.07, 0.15, `metal`, i.secondary));
    }
  },
};
