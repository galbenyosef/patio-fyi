// assets__greywater-signs-view-D86rZqNX 10 — math
// Lines 4546-4892 of readable/assets__greywater-signs-view-D86rZqNX.pretty.js (statement-aligned).
function Oe(e, t, n, r, i, a, o = !1) {
  (e.save(),
    e.translate(n, r),
    e.scale(i / 110, i / 110),
    (e.lineCap = e.lineJoin = `round`),
    o ||
      ((e.fillStyle = a.bg),
      $(e, 0, 0, 57, 57),
      e.fill(),
      (e.globalAlpha = 0.7),
      (e.strokeStyle = a.secondary),
      (e.lineWidth = 1.3),
      $(e, 0, 0, 54, 54),
      e.stroke(),
      (e.globalAlpha = 1),
      e.save(),
      e.translate(2.2, 3.2),
      (e.strokeStyle = a.secondary),
      (e.globalAlpha = 0.3),
      (e.lineWidth = 7),
      De(e, t),
      e.restore()),
    (e.strokeStyle = a.accent),
    (e.lineWidth = 4.5),
    o && ((e.shadowColor = a.accent), (e.shadowBlur = 10)),
    De(e, t),
    (e.shadowBlur = 0),
    (e.strokeStyle = o ? `#fff4de` : a.ink),
    (e.lineWidth = o ? 1.3 : 1.5),
    De(e, t),
    e.restore());
}
function ke(e, t, n, r = !1, i = !1) {
  (e.save(),
    (e.font = t.font),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`),
    (e.lineJoin = `round`),
    t.lines.forEach((a, o) => {
      let { x: s, y: c } = t.positions[o];
      r
        ? ((e.lineWidth = Math.max(0.8, t.fontSize * 0.047)),
          (e.strokeStyle = n.accent),
          (e.shadowColor = n.accent),
          (e.shadowBlur = Math.min(24, t.fontSize * (i ? 0.18 : 0.07))),
          e.strokeText(a, s, c),
          (e.shadowBlur = 0),
          (e.strokeStyle = `#fff6de`),
          (e.lineWidth = Math.max(0.45, t.fontSize * 0.012)),
          e.strokeText(a, s, c))
        : ((e.fillStyle = n.ink),
          i ||
            ((e.shadowColor = n.bg),
            (e.shadowOffsetX = t.fontSize * 0.018),
            (e.shadowOffsetY = t.fontSize * 0.03)),
          e.fillText(a, s, c));
    }),
    e.restore());
}
function Ae(e, t, n, r, i = {}) {
  let a = Ee(e, t, n, {
    font: { family: `Arial, sans-serif`, weight: 700 },
    maxFontSize: n.height * 0.7,
    ...i,
  });
  return (
    e.save(),
    (e.fillStyle = r),
    (e.font = a.font),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`),
    a.lines.forEach((t, n) =>
      e.fillText(t, a.positions[n].x, a.positions[n].y),
    ),
    e.restore(),
    a
  );
}
function je(e, t, n, r) {
  (t.faceShape === `circle` || t.faceShape === `oval`
    ? $(e, n / 2, r / 2, n / 2, r / 2)
    : t.faceShape === `rounded`
      ? Q(e, 0, 0, n, r, Math.min(n, r) * 0.065)
      : (e.beginPath(), e.rect(0, 0, n, r)),
    e.clip());
}
function Me(e, t, n, r) {
  let i = e.faceStyle === `letters`,
    a = t / n >= 2.15,
    o = t / n < 1.08,
    s = Math.min(t, n) * 0.064;
  return i
    ? {
        message: {
          x: t * 0.035,
          y: n * 0.155,
          width: t * 0.93,
          height: n * 0.69,
        },
        brand: {
          x: t * 0.12,
          y: n * 0.023,
          width: t * 0.76,
          height: n * 0.105,
        },
        footer: { x: t * 0.15, y: n * 0.89, width: t * 0.7, height: n * 0.058 },
        icon: null,
        align: `center`,
        margin: s,
      }
    : a
      ? {
          message: {
            x: t * 0.245,
            y: n * 0.235,
            width: t * 0.695 - s,
            height: n * 0.58,
          },
          brand: {
            x: t * 0.25,
            y: n * 0.066,
            width: t * 0.67 - s,
            height: n * 0.105,
          },
          footer: {
            x: t * 0.25,
            y: n * 0.855,
            width: t * 0.66 - s,
            height: n * 0.053,
          },
          icon: {
            x: t * 0.125,
            y: n * 0.5,
            size: Math.min(t * 0.18, n * 0.63),
          },
          align: r % 3 ? `left` : `center`,
          margin: s,
        }
      : o
        ? {
            message: {
              x: t * 0.1,
              y: n * 0.245,
              width: t * 0.8,
              height: n * 0.585,
            },
            brand: {
              x: t * 0.105,
              y: n * 0.063,
              width: t * 0.49,
              height: n * 0.09,
            },
            footer: {
              x: t * 0.14,
              y: n * 0.88,
              width: t * 0.72,
              height: n * 0.044,
            },
            icon: {
              x: t * 0.78,
              y: n * 0.125,
              size: Math.min(t * 0.27, n * 0.15),
            },
            align: `center`,
            margin: s,
          }
        : {
            message: {
              x: t * 0.075,
              y: n * 0.27,
              width: t * 0.69,
              height: n * 0.545,
            },
            brand: {
              x: t * 0.08,
              y: n * 0.073,
              width: t * 0.6,
              height: n * 0.11,
            },
            footer: {
              x: t * 0.1,
              y: n * 0.88,
              width: t * 0.8,
              height: n * 0.055,
            },
            icon: {
              x: t * 0.855,
              y: n * 0.51,
              size: Math.min(t * 0.2, n * 0.4),
            },
            align: r % 2 ? `left` : `center`,
            margin: s,
          };
}
function Ne(e, t, n, r, i, a, o) {
  ((e.fillStyle = r.bg), e.fillRect(0, 0, t, n));
  let s = Math.min(t, n),
    c = a.margin;
  switch (
    (e.save(),
    (e.globalAlpha = o ? 0.095 : 0.13),
    (e.fillStyle = r.secondary),
    i % 6)
  ) {
    case 0:
      (Z(
        e,
        [
          [0, n * 0.63],
          [t * 0.29, n],
          [0, n],
        ],
        !0,
      ),
        e.fill(),
        Z(
          e,
          [
            [t * 0.76, 0],
            [t, n * 0.43],
            [t, 0],
          ],
          !0,
        ),
        e.fill());
      break;
    case 1:
      (Q(e, c * 0.42, c * 0.42, t - c * 0.84, n - c * 0.84, s * 0.06),
        (e.lineWidth = c * 0.28),
        (e.strokeStyle = r.secondary),
        e.stroke());
      break;
    case 2:
      if (a.icon)
        for (let t = 0; t < 16; t++) {
          let n = (t * ye) / 16,
            r = a.icon.size * 0.79;
          (Z(
            e,
            [
              [a.icon.x, a.icon.y],
              [a.icon.x + Math.cos(n) * r, a.icon.y + Math.sin(n) * r],
              [
                a.icon.x + Math.cos(n + 0.1) * r,
                a.icon.y + Math.sin(n + 0.1) * r,
              ],
            ],
            !0,
          ),
            e.fill());
        }
      break;
    case 3:
      (e.fillRect(0, 0, t * 0.018, n), e.fillRect(t * 0.965, 0, t * 0.035, n));
      for (let r = 0; r < 5; r++)
        e.fillRect(t * 0.04 + r * s * 0.034, n * 0.945, s * 0.015, n * 0.018);
      break;
    case 4:
      ((e.lineWidth = s * 0.016), (e.strokeStyle = r.secondary));
      for (let r = 0; r < 3; r++)
        ($(
          e,
          t * 0.98,
          n * 0.98,
          s * (0.19 + r * 0.065),
          s * (0.19 + r * 0.065),
        ),
          e.stroke());
      break;
    default:
      (e.fillRect(c * 0.7, c * 0.7, t - c * 1.4, s * 0.009),
        e.fillRect(c * 0.7, n - c * 0.7, t - c * 1.4, s * 0.009));
      for (let r = 0; r < 4; r++)
        e.fillRect(t - c * (0.5 + r * 0.24), c * 0.8, s * 0.004, n - c * 1.6);
  }
  e.restore();
  let l = e.createLinearGradient(0, 0, t * 0.2, n);
  (l.addColorStop(0, `rgba(255,255,255,0.06)`),
    l.addColorStop(0.55, `rgba(0,0,0,0)`),
    l.addColorStop(1, `rgba(0,0,0,0.16)`),
    (e.fillStyle = l),
    e.fillRect(0, 0, t, n));
}
function Pe(e, t, n, r, i, a, o) {
  if (
    (e.save(),
    (e.strokeStyle = r.secondary),
    (e.lineCap = `round`),
    (e.lineWidth = Math.max(1, Math.min(t, n) * 0.005)),
    a &&
      ((e.shadowBlur = Math.min(t, n) * 0.019), (e.shadowColor = r.secondary)),
    o)
  )
    (Z(e, [
      [t * 0.13, n * 0.863],
      [t * 0.87, n * 0.863],
    ]),
      e.stroke());
  else {
    let r = i.margin * 0.5;
    (Q(e, r, r, t - 2 * r, n - 2 * r, Math.min(t, n) * 0.036),
      e.stroke(),
      Z(e, [
        [i.brand.x, n * 0.205],
        [i.brand.x + i.brand.width * 0.38, n * 0.205],
      ]),
      e.stroke());
  }
  e.restore();
}
function Fe(e, t, n, r, i, a) {
  (e.clearRect(0, 0, i, a),
    e.drawImage(n, 0, 0),
    t.clearRect(0, 0, i, a),
    (t.fillStyle = r === `backlit` ? `#c4c4c4` : `#070909`),
    t.fillRect(0, 0, i, a),
    (t.globalCompositeOperation = `screen`));
  let o = (e, n, r, o) => {
    let s = t.createRadialGradient(e, n, 0, e, n, r);
    (s.addColorStop(0, `rgba(255,237,204,${o})`),
      s.addColorStop(0.26, `rgba(247,229,204,${o * 0.75})`),
      s.addColorStop(1, `rgba(0,0,0,0)`),
      (t.fillStyle = s),
      t.fillRect(0, 0, i, a));
  };
  if (r === `bulb`)
    for (let e = 0; e < 5; e++)
      (o(i * (0.1 + e * 0.2), a * 0.035, a * 0.71, 0.68),
        o(i * (0.1 + e * 0.2), a * 0.965, a * 0.55, 0.48));
  else if (r === `backlit`) o(i * 0.5, a * 0.45, Math.max(i, a) * 0.64, 0.28);
  else {
    let e = i / a > 2.5 ? 3 : 2;
    for (let t = 0; t < e; t++)
      o(
        (i * (t + 0.5)) / e,
        -a * 0.04,
        Math.max(a * 1.28, (i / e) * 0.77),
        0.9,
      );
  }
  ((t.globalCompositeOperation = `source-over`),
    (e.globalCompositeOperation = `multiply`),
    e.drawImage(t.canvas, 0, 0),
    (e.globalCompositeOperation = `destination-in`),
    e.drawImage(n, 0, 0),
    (e.globalCompositeOperation = `source-over`));
}
