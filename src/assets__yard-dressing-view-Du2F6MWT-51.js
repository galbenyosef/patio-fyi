// assets__yard-dressing-view-Du2F6MWT 51 — range
// Lines 14101-14415 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function ao(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = n.int(2, 3),
    o = n.pick([1.2, 1.2, 0.9]),
    s = n.pick([2.4, 1.8, 2.4]),
    c = n.pick([0.28, 0.28, 0.42]),
    l = n.range(0.6, 0.8),
    u = G(n.pick([W.cedar, W.treated, W.weathered, W.redwood]), 0.85, 13),
    d = H(11054256, 0.4, 0.8),
    f = ca(Zi),
    p = ca(Xi),
    m = ca(Zi),
    h = a * o + (a - 1) * l,
    g = I(
      r,
      Me(new C(h + 0.7, s + 0.7).rotateX(-Q / 2), 1),
      n.pick([q.mulch, q.peaGravel, q.gravel])(),
      0,
      0.004,
      0,
    );
  g.castShadow = !1;
  let _ = [`tomato`, `lettuce`, `pepper`, `beans`, `squash`, `herbs`].sort(
    () => n() - 0.5,
  );
  for (let e = 0; e < a; e++) {
    let t = -h / 2 + o / 2 + e * (o + l),
      a = _[e],
      g = c - 0.04;
    for (let e = 0; e < Math.round(c / 0.14); e++)
      for (let n of [-1, 1])
        (B(r, o, 0.135, 0.04, u, t, e * 0.14, n * (s / 2 - 0.02)),
          B(r, 0.04, 0.135, s - 0.08, u, t + n * (o / 2 - 0.02), e * 0.14, 0));
    for (let e of [-1, 1])
      for (let n of [-1, 1])
        B(
          r,
          0.09,
          c + 0.03,
          0.09,
          u,
          t + e * (o / 2 - 0.045),
          0,
          n * (s / 2 - 0.045),
        );
    (I(r, Me(new C(o - 0.08, s - 0.08).rotateX(-Q / 2), 1), q.soil(), t, g, 0),
      i &&
        n.chance(0.4) &&
        I(
          r,
          Me(new C(o - 0.1, s - 0.1).rotateX(-Q / 2), 1),
          je(
            `straw`,
            (e, t, n) =>
              Ne(
                e,
                t,
                n,
                `#c8a860`,
                [`#e0c080`, `#a88840`, `#d8b870`, `#b89850`],
                33,
                9e3,
                [2, 8],
              ),
            { rough: 1 },
          ),
          t,
          g + 0.01,
          0,
        ));
    let v = (e, t) => {
      for (let n = 0; n < e; n++) t(-s / 2 + 0.2 + ((n + 0.5) * (s - 0.4)) / e);
    };
    if (a === `tomato`)
      v(Math.round(s / 0.75), (e) => {
        for (let n = 0; n < 3; n++)
          ia(
            r,
            0.16 + n * 0.05,
            0.004,
            d,
            t,
            g + 0.25 + n * 0.3,
            e,
            Q / 2,
            0,
            0,
            20,
            4,
          );
        for (let n = 0; n < 3; n++) {
          let i = (n / 3) * $;
          N(
            r,
            [t + Math.cos(i) * 0.16, g, e + Math.sin(i) * 0.16],
            [t + Math.cos(i) * 0.26, g + 0.85, e + Math.sin(i) * 0.26],
            0.004,
            d,
            4,
          );
        }
        for (let r = 0; r < 60; r++) {
          let r = n() * 0.95,
            a = 0.04 + (0.1 + r * 0.12) * Math.sqrt(n()),
            o = n() * $;
          f.add(
            t + Math.cos(o) * a,
            g + 0.08 + r,
            e + Math.sin(o) * a,
            n.range(0.03, 0.055),
            i ? n.pick(no) : n.pick(to),
          );
        }
        for (let r = 0; r < (i ? 3 : 9); r++) {
          let r = n() * $,
            i = n.range(0.1, 0.2);
          m.add(
            t + Math.cos(r) * i,
            g + n.range(0.3, 0.8),
            e + Math.sin(r) * i,
            n.range(0.028, 0.038),
            n.pick([14166042, 13120026, 15228954, 6986298]),
          );
        }
      });
    else if (a === `lettuce` || a === `herbs`)
      for (let e = -1; e <= 1; e++)
        v(Math.floor(s / 0.28), (r) => {
          let s = t + (o / 3.2) * e,
            c =
              a === `lettuce`
                ? i
                  ? [4876922, 6965882, 3828298]
                  : [8040512, 10143824, 9058890, 6987832]
                : [3832362, 5937722, 4876874],
            l = n.pick(c);
          for (let e = 0; e < 6; e++) {
            let t = (e / 6) * $;
            p.add(
              s + Math.cos(t) * 0.05,
              g + 0.04,
              r + Math.sin(t) * 0.05,
              0.08,
              l,
              a === `lettuce` ? 0.035 : 0.07,
            );
          }
          p.add(s, g + 0.07, r, 0.05, Se(l, 1.15), 0.04);
        });
    else if (a === `pepper`)
      v(Math.round(s / 0.45), (e) => {
        for (let a of [t - o / 4, t + o / 4]) {
          N(
            r,
            [a + 0.03, g, e],
            [a + 0.03, g + 0.55, e],
            0.008,
            G(W.treated, 0.8),
            4,
          );
          for (let t = 0; t < 22; t++) {
            let t = n() * 0.4;
            f.add(
              a + n.range(-0.12, 0.12),
              g + 0.08 + t,
              e + n.range(-0.12, 0.12),
              n.range(0.03, 0.05),
              i ? n.pick(no) : n.pick(to),
            );
          }
          for (let t = 0; t < n.int(2, 4); t++)
            m.add(
              a + n.range(-0.1, 0.1),
              g + n.range(0.15, 0.35),
              e + n.range(-0.1, 0.1),
              0.03,
              n.pick([13117978, 3836458, 15253536, 15231514]),
              0.05,
            );
        }
      });
    else if (a === `beans`) {
      let e = G(W.weathered, 0.9, 13);
      for (let n of [-1, 1])
        for (let i of [-1, 1])
          N(
            r,
            [t + i * o * 0.3, g, n * (s / 2 - 0.15)],
            [t, g + 1.6, n * (s / 2 - 0.15)],
            0.018,
            e,
            6,
          );
      N(
        r,
        [t, g + 1.6, -s / 2 + 0.05],
        [t, g + 1.6, s / 2 - 0.05],
        0.018,
        e,
        6,
      );
      for (let e = 0; e < 70; e++) {
        let e = n.chance(0.5) ? 1 : -1,
          r = n(),
          a = n.range(-s / 2 + 0.2, s / 2 - 0.2);
        f.add(
          t + e * o * 0.3 * (1 - r),
          g + 0.1 + 1.5 * r,
          a,
          n.range(0.05, 0.08),
          i ? n.pick(no) : n.pick(to),
        );
      }
      if (!i)
        for (let e = 0; e < 20; e++)
          m.add(
            t + n.range(-0.3, 0.3),
            g + n.range(0.3, 1.2),
            n.range(-s / 2 + 0.2, s / 2 - 0.2),
            0.008,
            4885034,
            0.07,
          );
    } else {
      for (let e = 0; e < 26; e++)
        f.add(
          t + n.range(-o / 2 + 0.15, o / 2 - 0.15),
          g + 0.12 + n() * 0.1,
          n.range(-s / 2 + 0.2, s / 2 - 0.2),
          n.range(0.12, 0.18),
          i ? n.pick(no) : n.pick([3103268, 3828266, 4880944]),
          0.05,
        );
      if (i)
        for (let e = 0; e < n.int(2, 4); e++)
          io(
            r,
            t + n.range(-0.3, 0.3),
            g,
            n.range(-s / 2 + 0.3, s / 2 - 0.3),
            n.range(0.1, 0.16),
            n.pick([14708762, 14180378, 15261896, 14195242]),
          );
      else
        for (let e = 0; e < 6; e++)
          m.add(
            t + n.range(-0.4, 0.4),
            g + 0.18,
            n.range(-s / 2 + 0.2, s / 2 - 0.2),
            0.035,
            n.pick([16110138, 3828266, 15253536]),
            0.035,
            0.08,
          );
    }
    n.chance(0.6) &&
      V(
        r,
        0.05,
        0.08,
        0.005,
        H(15790314, 0.5),
        t - o / 2 + 0.12,
        g + 0.08,
        s / 2 - 0.12,
      );
  }
  if (
    (f.flush(r, H(16777215, 0.8)),
    p.flush(r, H(16777215, 0.8)),
    m.flush(r, H(16777215, 0.35)),
    i && n.chance(0.6))
  )
    for (let e = 0; e < n.int(2, 4); e++)
      io(
        r,
        n.range(-h / 2, h / 2),
        0,
        s / 2 + n.range(0.15, 0.3),
        n.range(0.1, 0.18),
        n.pick([14708762, 14180378, 15261896]),
      );
  if (!i && n.chance(0.5)) {
    let e = h / 2 + 0.25,
      t = s / 2 - 0.1;
    (P(
      r,
      [
        [0.12, 0],
        [0.14, 0.24],
        [0.1, 0.26],
      ],
      H(2783802, 0.5),
      e,
      0,
      t,
      16,
    ),
      N(r, [e, 0.24, t], [e + 0.35, 0.34, t], 0.012, H(2783802, 0.5), 6),
      N(
        r,
        [e - 0.14, 0.18, t],
        [e - 0.12, 0.34, t],
        0.008,
        H(2783802, 0.5),
        5,
      ));
  }
  return (
    ha(r, i, h + 0.7, s + 0.7, e + 1, 80),
    R(r, { note: `${a} beds: ${_.slice(0, a).join(`, `)}` })
  );
}
