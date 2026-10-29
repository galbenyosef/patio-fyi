// assets__greywater-signs-view-D86rZqNX 08 — width
// Lines 3949-4211 of readable/assets__greywater-signs-view-D86rZqNX.pretty.js (statement-aligned).
function ge(e) {
  let t = Y[e.construction];
  if (!t)
    throw Error(`Sign structure recipe not yet authored: ${e.construction}`);
  let n = new se(e);
  if (e.construction === `vboard`)
    for (let t of [-1, 1])
      me(n, {
        position: [t * (e.width / 2 + 0.03), 0, -0.48],
        rotation: [0, t * 0.075, 0],
      });
  else me(n);
  return (
    t(n),
    e.lighting === `flood` &&
      !n.fixtures.length &&
      q(n, Math.max(1, Math.ceil(e.width / 3.5)), { goose: e.width < 6 }),
    e.lighting === `bulb` &&
      J(
        n,
        [-e.width / 2, e.elevation + e.height + 0.13, 0.28],
        [e.width / 2, e.elevation + e.height + 0.13, 0.28],
        0.24,
      ),
    e.construction === `vboard`
      ? ((n.spec = { ...e, width: e.width * 2 + 0.2 }), he(n), (n.spec = e))
      : he(n),
    n.finish()
  );
}
function _e(e, t) {
  let n = { ...e };
  for (let e of [
    `width`,
    `height`,
    `elevation`,
    `serviceAccess`,
    `brand`,
    `icon`,
  ])
    t[e] != null && (n[e] = t[e]);
  return n;
}
function ve(e, n) {
  e = _e(e, n);
  let r = n.panelScale ?? 1,
    i = ge({ ...e, width: e.width * r, height: e.height * r });
  if (!n.roofStand) return i;
  let c = new o({ color: 3752778, roughness: 0.8 });
  c.userData.pen = `metal`;
  let l = (e, n, r) => {
    let o = new s(...e),
      l = new s(...n),
      u = l.clone().sub(o),
      d = new t(new a(r, u.length(), r), c);
    (d.position.copy(o.add(l).multiplyScalar(0.5)),
      d.quaternion.setFromUnitVectors(new s(0, 1, 0), u.normalize()),
      (d.castShadow = !0),
      i.add(d),
      ue(i, d));
  };
  for (let e of [-2, 2])
    (l([e, 0, -0.5], [e, 3.1, -0.5], 0.15, !0),
      l([e, 0, -1.6], [e, 2.9, -0.5], 0.1));
  return (
    l([-2, 0.5, -0.5], [2, 2.9, -0.5], 0.08),
    l([2, 0.5, -0.5], [-2, 2.9, -0.5], 0.08),
    le(i),
    i
  );
}
var ye = Math.PI * 2,
  be = [
    {
      family: `"Arial Black", Arial, sans-serif`,
      weight: 900,
      style: `normal`,
    },
    {
      family: `Georgia, "Times New Roman", serif`,
      weight: 700,
      style: `normal`,
    },
    {
      family: `Impact, "Arial Narrow", Arial, sans-serif`,
      weight: 400,
      style: `normal`,
    },
    {
      family: `"Trebuchet MS", Arial, sans-serif`,
      weight: 800,
      style: `normal`,
    },
    {
      family: `Georgia, "Times New Roman", serif`,
      weight: 700,
      style: `italic`,
    },
    { family: `"Courier New", monospace`, weight: 700, style: `normal` },
  ],
  xe = [
    `A BETTER TOMORROW. TERMS APPLY.`,
    `PROUDLY LOWERING EXPECTATIONS.`,
    `YOUR ATTENTION IS OUR BUSINESS.`,
    `EST. SINCE LAST QUARTER.`,
    `LOCALLY OWNED. GLOBALLY CONCERNED.`,
    `THE FUTURE IS SUBJECT TO AVAILABILITY.`,
  ],
  Se = {
    bg: `#122128`,
    ink: `#fff2d6`,
    accent: `#ff7849`,
    secondary: `#77dfce`,
    metal: `#36464a`,
  };
function Ce(e) {
  let t = 2166136261;
  for (let n of String(e)) t = Math.imul(t ^ n.codePointAt(0), 16777619);
  return t >>> 0;
}
function we(e, t) {
  return `${t.style || `normal`} ${t.weight || 800} ${e}px ${t.family || be[0].family}`;
}
function X(e, t) {
  let n = e.measureText(t);
  return (
    Math.max(n.width, n.actualBoundingBoxRight || 0) -
    Math.min(0, -(n.actualBoundingBoxLeft || 0))
  );
}
function Te(e, t, n) {
  let r = [];
  for (let i of t.split(`
`)) {
    let t = i.trim().split(/\s+/u).filter(Boolean);
    if (!t.length) {
      r.push(``);
      continue;
    }
    let a = ``;
    for (let i of t) {
      let t = a ? `${a} ${i}` : i;
      if (X(e, t) <= n) {
        a = t;
        continue;
      }
      if (((a &&= (r.push(a), ``)), X(e, i) <= n)) {
        a = i;
        continue;
      }
      for (let t of Array.from(i))
        (a && X(e, a + t) > n && (r.push(a), (a = ``)), (a += t));
    }
    a && r.push(a);
  }
  return r;
}
function Ee(e, t, n, r = {}) {
  (e.save(), (e.textAlign = `left`), (e.textBaseline = `alphabetic`));
  let i = String(t ?? ``).replace(
      /\r\n?/g,
      `
`,
    ),
    a = r.font || r,
    o = Math.max(0, r.padding ?? 0),
    s = {
      x: Number(n.x) || 0,
      y: Number(n.y) || 0,
      width: Math.max(0.01, n.width - o * 2),
      height: Math.max(0.01, n.height - o * 2),
    };
  ((s.x += o), (s.y += o));
  let c = Math.max(0.1, r.maxFontSize || s.height * 0.72),
    l = (t) => {
      e.font = we(t, a);
      let n = Te(e, i, s.width),
        o = n.map((t) => e.measureText(t || `Mg`)),
        c = Math.max(t * 0.72, ...o.map((e) => e.actualBoundingBoxAscent || 0)),
        l = Math.max(
          t * 0.18,
          ...o.map((e) => e.actualBoundingBoxDescent || 0),
        ),
        u = Math.max(t * (r.lineHeight || 1.13), c + l + t * 0.06),
        d = c + l + Math.max(0, n.length - 1) * u,
        f = Math.max(0, ...n.map((t) => X(e, t)));
      return {
        lines: n,
        metrics: o,
        ascent: c,
        descent: l,
        advance: u,
        height: d,
        width: f,
        fits: f <= s.width + 0.001 && d <= s.height + 0.001,
      };
    },
    u = Math.min(1, c),
    d = c;
  for (; !l(u).fits && u > 1e-4;) u /= 2;
  for (let e = 0; e < 17; e++) {
    let e = (u + d) / 2;
    l(e).fits ? (u = e) : (d = e);
  }
  let f = l(u),
    p = s.y + (s.height - f.height) / 2,
    m = r.align || `center`,
    h = m === `left` ? s.x : m === `right` ? s.x + s.width : s.x + s.width / 2,
    g = f.metrics.map((e, t) => {
      let n = Math.min(0, -(e.actualBoundingBoxLeft || 0)),
        r = Math.max(e.width, e.actualBoundingBoxRight || 0) - n;
      return {
        x:
          (m === `left`
            ? s.x
            : m === `right`
              ? s.x + s.width - r
              : s.x + (s.width - r) / 2) - n,
        y: p + f.ascent + t * f.advance,
      };
    });
  return (
    e.restore(),
    {
      text: i,
      lines: f.lines,
      fontSize: u,
      font: we(u, a),
      overflow: !f.fits,
      width: f.width,
      height: f.height,
      lineHeight: f.advance,
      box: { ...n },
      area: s,
      align: m,
      x: h,
      positions: g,
      baselines: g.map((e) => e.y),
    }
  );
}
function Z(e, t, n = !1) {
  (e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    n && e.closePath());
}
function Q(e, t, n, r, i, a) {
  ((a = Math.min(a, r / 2, i / 2)),
    e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function $(e, t, n, r, i) {
  (e.beginPath(), e.ellipse(t, n, r, i, 0, 0, ye));
}
