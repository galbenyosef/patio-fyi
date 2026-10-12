// assets__rifle-pose-CdM47EZt 23 — math
// Lines 29253-29455 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
var wr = (e) => (t) => t.arc(e),
  K = {
    dot: (e = 14) => ({ dot: e }),
    ringDot: (e = 96, t = []) => ({ dot: 9, width: 7, path: wr(e), dots: t }),
    triangle: () => ({
      dot: 0,
      fill: (e) =>
        e.line(
          [
            [0, -14],
            [13, 9],
            [-13, 9],
          ],
          !0,
        ),
    }),
    chevron: (e = 46, t = !1) => ({
      dot: 0,
      width: 9,
      path: (n) => {
        if (
          (n.line([
            [-e, e],
            [0, 0],
            [e, e],
          ]),
          t)
        ) {
          n.line([
            [0, e * 0.5],
            [0, 118],
          ]);
          for (let e of [64, 92])
            n.line([
              [-10, e],
              [10, e],
            ]);
        }
      },
    }),
    kobra: () => ({
      dot: 0,
      width: 8,
      path: (e) => {
        e.line([
          [-30, 34],
          [0, 0],
          [30, 34],
        ]);
        for (let t of [-1, 1])
          e.line([
            [t * 56, 4],
            [t * 96, 4],
          ]);
        e.line([
          [0, 46],
          [0, 90],
        ]);
      },
    }),
    horseshoe: () => ({
      dot: 9,
      width: 8,
      path: (e) => e.arc(70, 2.3, Math.PI * 2 + 0.84),
    }),
    cross: () => ({
      dot: 7,
      width: 5,
      dark: !0,
      path: (e) => {
        for (let [t, n] of [
          [
            [-120, 0],
            [-16, 0],
          ],
          [
            [16, 0],
            [120, 0],
          ],
          [
            [0, 16],
            [0, 120],
          ],
          [
            [0, -120],
            [0, -16],
          ],
        ])
          e.line([t, n]);
      },
    }),
    ticked: () => ({
      dot: 7,
      width: 7,
      path: (e) => {
        e.arc(90);
        for (let t = 0; t < 4; t++) {
          let n = (t * Math.PI) / 2;
          e.line([
            [Math.cos(n) * 90, Math.sin(n) * 90],
            [Math.cos(n) * 116, Math.sin(n) * 116],
          ]);
        }
      },
    }),
    cqb: () => ({
      dot: 7,
      width: 7,
      path: (e) => {
        e.arc(94);
        for (let t = 0; t < 4; t++) {
          let n = Math.PI / 4 + (t * Math.PI) / 2;
          e.line([
            [Math.cos(n) * 60, Math.sin(n) * 60],
            [Math.cos(n) * 76, Math.sin(n) * 76],
          ]);
        }
      },
    }),
  },
  Tr = { red: `#ff3b2f`, green: `#46ff5e`, amber: `#ffb13c`, black: `#151515` };
function Er(e, t, n) {
  let r = t / 2,
    i = t / 256,
    a = Tr[n.color] ?? n.color,
    o = {
      line(t, n = !1) {
        (t.forEach(([t, n], a) =>
          e[a ? `lineTo` : `moveTo`](r + t * i, r + n * i),
        ),
          n && e.closePath());
      },
      arc(t, n = 0, a = Math.PI * 2) {
        (e.moveTo(r + Math.cos(n) * t * i, r + Math.sin(n) * t * i),
          e.arc(r, r, t * i, n, a));
      },
    };
  (e.clearRect(0, 0, t, t), (e.lineCap = `round`), (e.lineJoin = `round`));
  let s = n.look,
    c = s.width ?? 7,
    l = s.dark ? [`dark`, `lit`] : [`edge`, `lit`];
  for (let t of l) {
    let n = t === `edge`,
      l = t === `dark`;
    if (
      ((e.strokeStyle = e.fillStyle =
        l ? `#121212` : n ? `rgba(8,10,12,.5)` : a),
      (e.shadowColor = n || l ? `transparent` : a),
      (e.shadowBlur = n || l ? 0 : 7 * i),
      (e.lineWidth = (c + (n ? 4 : 0)) * i),
      s.path && (l || !s.dark) && (e.beginPath(), s.path(o), e.stroke()),
      !(s.dark && l))
    ) {
      (e.beginPath(), s.dot && o.arc(s.dot + (n ? 2 : 0)));
      for (let [t, a] of s.dots ?? [])
        (e.moveTo(r + (t + 6 + (n ? 2 : 0)) * i, r + a * i),
          e.arc(r + t * i, r + a * i, (6 + (n ? 2 : 0)) * i, 0, Math.PI * 2));
      (e.fill(),
        s.fill && (e.beginPath(), s.fill(o), e.fill(), n && e.stroke()));
    }
  }
  e.shadowBlur = 0;
}
var q = (e, t, n, r, i, a, o, s = {}) => ({
  key: e,
  name: t,
  real: n,
  type: r,
  finish: i,
  reticle: a,
  build: o,
  place: `mid`,
  mag: r === `prism` ? 3 : r === `holo` ? 1.25 : 1.2,
  ...s,
});
function Dr(e, t, n) {
  let { eye: r, len: i, r: a, front: o = a, hood: s = 0, wall: c = 0.0022 } = n,
    l = -i / 2,
    u = [
      [0, a - 6e-4],
      [0.0025, a],
      [i - s - 0.004, a],
      [i - s, o],
      [i, o],
      [i + 0.0012, o - 8e-4],
    ];
  return (
    t.shell(`body`, l, r, u, [
      [0, a - c],
      [i + 0.0012, Math.min(a, o) - c],
    ]),
    t.disc(`lensRed`, l + i - 0.006, r, Math.min(a, o) - c),
    t.disc(`lens`, l + 0.004, r, a - c),
    { x0: l, x1: l + i }
  );
}
function Or(e, t, n, r, i, a, o = {}) {
  (t.clamp(i, a, { levers: +!!o.lever }),
    t.riser(i + 0.003, a - 0.003, n - r + 0.0015, {
      width: 0.012,
      plate: 0.018,
    }));
}
