// assets__yard-dressing-view-Du2F6MWT 19 — chance
// Lines 5538-5695 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
var yr = () => H(12633288, 0.35, 0.35);
function br(e, t = {}) {
  let n = U(e),
    r = new D(),
    i = cn(t),
    a = t.w ?? n.range(3, 4.2),
    o = t.d ?? n.range(2.6, 3.6),
    s = n.range(2.3, 2.6),
    l = n.pick([`cedar`, `white`, `grey`, `brown`, `cedar`]),
    u =
      l === `white`
        ? gn(bn, 0.55)
        : l === `grey`
          ? G(9407364, 0.85, 4)
          : l === `brown`
            ? G(6045744, 0.8, 5)
            : G(W.cedar, 0.8, 3),
    d;
  if (n.chance(0.6)) d = sr(r, n, a + 1, o + 1);
  else {
    (B(r, a + 1, 0.1, o + 1, vn(), 0, 0, 0), (d = 0.1));
    for (let e of [-(a + 1) / 6, (a + 1) / 6])
      V(r, 0.008, 0.002, o + 1, H(6973024, 1), e, d, 0);
    V(r, a + 1, 0.002, 0.008, H(6973024, 1), 0, d, 0);
  }
  let f = 0.14,
    p = a > 3.8 ? [-a / 2, 0, a / 2] : [-a / 2, a / 2],
    m = 0.235,
    h = 0.038,
    g = n.range(0.35, 0.5),
    _ = n.range(0.3, 0.45),
    v = d + s + m,
    y = 0.184,
    b = n.pick([`bevel`, `ogee`, `step`, `round`]),
    x = _n(),
    S = _e();
  for (let e of p)
    for (let t of [-1, 1]) {
      (dn(r, f, v - d - 0.01, f, u, e, d + 0.01, (t * o) / 2, 0.006),
        V(r, 0.16, 0.02, 0.16, x, e, d + 0.01, (t * o) / 2),
        (n.chance(0.5) || l === `white`) &&
          dn(r, 0.2, 0.25, 0.2, u, e, d + 0.02, (t * o) / 2, 0.008));
      for (let n of [-1, 1])
        for (let i of [-0.05, 0.05])
          I(
            r,
            new c(0.014, 0.014, 0.01, 10),
            S,
            e + i,
            v - m / 2 + i * 0.6,
            (t * o) / 2 + n * 0.11300000000000002,
            J / 2,
            0,
            0,
          );
    }
  let ee = qn(a + 2 * g, m, h, b);
  for (let e of [-1, 1])
    for (let t of [-1, 1])
      I(r, ee, u, 0, v - m, (e * o) / 2 + t * 0.08900000000000001);
  let w = qn(o + 2 * f + 2 * _, y, h, b),
    T = a + 2 * g - 0.2,
    E = Math.round(T / 0.4),
    O = (e) => -T / 2 + (T * e) / E;
  for (let e = 0; e <= E; e++) I(r, w, u, O(e), v, 0, 0, J / 2, 0);
  let te = v + y;
  if (n.chance(0.6)) {
    for (let e = -(o / 2 + _); e <= o / 2 + _ + 0.01; e += 0.18)
      Y(r, T + 0.1, 0.038, 0.038, u, 0, te + 0.019, e);
    te += 0.038;
  }
  for (let e of p)
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        Math.abs(e + n * 0.6) > a / 2 + 0.01 ||
          pn(
            r,
            [e + (n * f) / 2, v - m - 0.5, (t * o) / 2],
            [e + n * 0.5700000000000001, v - m + 0.02, (t * o) / 2],
            0.089,
            0.089,
            u,
          );
  if (n.chance(0.35)) {
    let e = E * 6,
      t = new C(T, o + 0.3, e, 1).rotateX(-J / 2),
      i = t.attributes.position;
    for (let e = 0; e < i.count; e++) {
      let t = ((i.getX(e) + T / 2) / (T / E)) % 1;
      i.setY(e, -0.035 * Math.sin(J * t));
    }
    (t.computeVertexNormals(),
      I(
        r,
        t,
        H(n.pick([15261900, 6974052, 13154458, 3820122]), 0.95, 0, { side: 2 }),
        0,
        te + 0.004,
        0,
      ));
  } else if (n.chance(0.55)) {
    let e = [];
    for (let [t, n] of [
      [p[0], 1],
      [p.at(-1), -1],
    ]) {
      let r = [];
      for (let e = 0; e <= 8; e++) {
        let i = e * 1.4;
        r.push([
          t + Math.cos(i) * 0.1,
          d + 0.1 + ((v - d) * e) / 8,
          (n * o) / 2 + Math.sin(i) * 0.1,
        ]);
      }
      for (let e = 1; e <= 5; e++)
        r.push([
          t * (1 - e * 0.18),
          te + 0.05 + Math.sin(e * 2) * 0.03,
          ((n * o) / 2) * (1 - e * 0.3),
        ]);
      e.push(r);
    }
    Gn(r, n, e, {
      n: 260,
      spread: 0.2,
      bloom: n.chance(0.5)
        ? n.pick([10506440, 16777215, 15900856, 15217226])
        : null,
    });
  }
  if (n.chance(0.45)) {
    let e = H(1710618, 0.6),
      t = Ce(16767136, 1.3);
    for (let n of [-o / 3, 0, o / 3]) {
      let i = [];
      for (let e = 0; e <= 10; e++) {
        let t = e / 10;
        i.push([-a / 2 + a * t, v - 0.03 - 0.25 * Math.sin(J * t), n]);
      }
      L(r, i, 0.003, e, 30, 4);
      for (let a = 1; a < 10; a++) {
        let [o, s] = i[a];
        (z(r, 0.01, 0.01, 0.03, e, o, s - 0.03, n, 8),
          j(r, 0.028, t, o, s - 0.055, n, 10));
      }
    }
  }
  return (
    i &&
      K(
        r,
        { w: a + 0.6, d: o + 0.6 },
        { count: 70, y: d + 0.012, seed: e, clump: 0.3 },
      ),
    R(hn(r), { note: `${l}, ${b} tails` })
  );
}
