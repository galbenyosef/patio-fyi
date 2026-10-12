// assets__animation-DTvaGqA- 08 — map
// Lines 1692-1982 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
var $n = () =>
    Ye({
      top: 0.05,
      bottom: -0.52,
      a: [0.066, 0.066],
      b: [0.058, 0.058],
      round: 0.05,
      joints: [{ y: -Fe, band: 0.1, below: !0 }],
      colour: () => [N, ke.cloth, 0.9],
    }),
  er = (e) =>
    Ye({
      top: Ze.bottom,
      bottom: -(P + We) - 0.06,
      a: [Ie.half, 0.106],
      b: [0.07, 0.076],
      shift: -e * Ie.shift,
      joints: [{ y: -P, band: 0.11, below: !0 }],
      colour: () => [N, ke.cloth, 0.82],
    }),
  tr = [
    [
      `waist`,
      () =>
        Ye({
          top: 0.3,
          bottom: Ze.top,
          a: [0.22, 0.12],
          b: [Ze.X, Ze.D],
          joints: [{ y: 0, c: 0.19, band: 0.07, below: !1 }],
          colour: () => [N, ke.cloth, 0.82],
        }),
      (e) => e,
      0.82,
      0,
      0,
      0,
    ],
    [`pants`, Xe, (e) => e, 0.82, 1, 0, 0],
    [`chest`, () => oe(), (e) => e.multiplyScalar(ht), 1, 2, 0, 0],
    [`leg`, () => er(-1), (e) => e.add(new k(-Ke, 0, 0)), 0.82, 3, 0, -1],
    [`leg`, () => er(1), (e) => e.add(new k(Ke, 0, 0)), 0.82, 0, 1, 1],
    [
      `arm`,
      $n,
      (e) => e.add(new k(-je, ft, 0)).multiplyScalar(ht),
      0.9,
      1,
      1,
      -1,
    ],
    [
      `arm`,
      $n,
      (e) => e.add(new k(je, ft, 0)).multiplyScalar(ht),
      0.9,
      2,
      1,
      1,
    ],
  ],
  nr = null,
  rr = (e, t) =>
    t ? { ...qe[e], ...Ge[e] } : nr ? { ...qe[e], ...rt[nr][e] } : qe[e];
function* ir(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 1024), (t.height = 1280));
  let n = t.getContext(`2d`);
  for (let [r, i] of et.entries())
    for (let a of [0, 1]) {
      let o = r * 2 + a,
        s = o % 2,
        c = Math.floor(o / 2);
      for (let [r, o, l, u, d, f, p] of tr) {
        let m = rr(a, e),
          h = i === `sniper` && r !== `chest`,
          g = o(),
          _;
        try {
          ((_ = _t(
            [`game`, r, p, i, a, e, nr ?? ``].join(`:`),
            g,
            {
              part: r,
              side: p,
              cls: i,
              pal: h ? { ...m, cloth: Re[a] } : m,
              base: u,
            },
            l,
            128,
          )),
            n.drawImage(
              _.image,
              (s * 4 + d) * 128,
              t.height - (c * 2 + f + 1) * 128,
            ));
        } finally {
          (_?.dispose(), g.dispose());
        }
        yield;
      }
    }
  let r = new m(t);
  return (
    (r.colorSpace = E),
    (r.generateMipmaps = !1),
    (r.minFilter = f),
    (r.anisotropy = 4),
    r
  );
}
function* ar() {
  let e = (e) => (se(e), e),
    [t, n, r, i, a, o, s] = tr,
    c = ([, t, , , n, r]) => Qn(e(t()), n, r),
    l = c(n),
    u = l.userData.pants;
  try {
    yield [
      `waist`,
      K([G(c(t), B.hips, { joint: H.waist, def: [0, 0.19, 0.07, 0] })], !0),
    ];
    let e = K(
      [G(l, B.hips, { mode: 1, def2: (e) => [u.wL[e], u.wR[e], 0, 0] })],
      !0,
    );
    ((l = null),
      yield [`pants`, e],
      yield [`chest`, K([G(c(r), B.torso)], !0)],
      yield [
        `legs`,
        K(
          [
            G(c(i), B.legL, { joint: H.kneeL, def: [-P, -P, 0.11, 1] }),
            G(c(a), B.legR, { joint: H.kneeR, def: [-P, -P, 0.11, 1] }),
          ],
          !0,
        ),
      ],
      yield [
        `arms`,
        K(
          [
            G(c(o), B.armL, { joint: H.elbowL, def: [-Fe, -Fe, 0.1, 1] }),
            G(c(s), B.armR, { joint: H.elbowR, def: [-Fe, -Fe, 0.1, 1] }),
          ],
          !0,
        ),
      ]);
  } finally {
    l?.dispose();
  }
}
var q = (e) => (e.index ? e.toNonIndexed() : e);
function or(e) {
  let t = be(`assault`),
    n = [];
  for (let [r, i, a] of [
    [-1, B.foreL, B.armL],
    [1, B.foreR, B.armR],
  ]) {
    for (let e of t.fore.slice(2)) n.push(G(q(e.clone()), i, { heat: 0.5 }));
    for (let t of [
      Pe(0.006, 0.05, 0.062, r * 0.066, -0.075, 0, 2763559),
      ...mt(Me[e], 0.054, 0.04, r * 0.066, -0.075, 0, `x`, r),
    ])
      n.push(G(q(t), a));
  }
  for (let e of Object.values(t)) for (let t of e) t.dispose();
  return K(n);
}
function sr() {
  return K(
    [B.shinL, B.shinR].map((e) =>
      G(q(Pe(0.14, 0.1, 0.271, 0, -We - 0.01, -0.0595, N, dt(0.6232))), e, {
        heat: 0.3,
      }),
    ),
  );
}
function cr(e, t, n) {
  let r = rr(t, n);
  return K(
    [...ye(!0), ...gt(e, r), ...(e === `sniper` ? [] : Ae(e, t))].map((e) =>
      G(q(e), B.torso, { heat: 0.4 }),
    ),
  );
}
function lr() {
  let e = { tag: ke.skin },
    t = [
      Pe(M.w, M.h, M.d, 0, M.y, 0, N, { ...e, bevel: 0.022 }),
      Pe(0.13, 0.08, 0.12, 0, 0.03, 0.01, N, { ...e, shade: 0.86 }),
      ...[-1, 1].map((t) =>
        Pe(0.03, 0.075, 0.06, t * (M.w / 2 + 0.01), 0.23 - 0.02, 0.02, N, {
          ...e,
          shade: 0.93,
          bevel: 0.008,
        }),
      ),
    ].map((e) => G(q(e), B.head)),
    n = pt({ hair: N, hairStyle: 0 }, !0).map(
      (e) => (e.attributes.aTag.array.fill(5), G(q(e), B.head, { heat: 0.3 })),
    );
  return K([...t, ...n]);
}
function ur() {
  return K(
    [
      G(
        Be(M.w - 0.03, M.h - 0.03, 0, M.y, me - 0.0015, [0, 0, 1, 1], Math.PI),
        B.head,
        { heat: 0.95 },
      ),
    ],
    !0,
  );
}
function dr(e, t, n) {
  _e(!0);
  let r;
  try {
    r = pe(rr(e, n), Ee[t], 0, Hn).map((e) => (e.index ? e.toNonIndexed() : e));
  } finally {
    _e(!1);
  }
  let i = r.filter((e) => e.userData.shell),
    a = r.filter((e) => e.userData.smooth && !e.userData.shell),
    o = r.filter((e) => !e.userData.smooth),
    s = (e) => e.map((e) => G(e, B.head, { heat: 0.3 }));
  return {
    hard: K(s(o)),
    soft: a.length ? K(s(a)) : null,
    shell: i.length ? K(s(i), !0) : null,
  };
}
function fr() {
  return K(
    Te.map(([e, t]) => {
      let n = new x(0.05, 0.03);
      return (
        n.rotateY(Math.PI),
        n.translate(e, t + 0.004, me - 0.003),
        G(n, B.head, { heat: 0.9 })
      );
    }),
  );
}
var pr = 0.3;
function mr() {
  return K(
    Te.map(([e, t]) => {
      let n = new x(1, 1),
        r = n.attributes.position.array.slice();
      for (let i = 0; i < r.length; i += 3)
        n.attributes.position.array.set([e, t, me - 0.022], i);
      return G(n, B.head, {
        heat: 0.9,
        def2: (e) => [r[e * 3] * pr, r[e * 3 + 1] * pr, 0, 0],
      });
    }),
    !0,
  );
}
var hr = { friend: [10354612, 4063096], foe: [16753571, 16727357] };
async function gr(
  e,
  t = 128,
  n = !1,
  {
    yieldTask: r,
    budgetMs: i = 40,
    now: a = () => performance.now(),
    uniform: o = null,
  } = {},
) {
  if (((nr = rt[o] ? o : null), typeof r != `function`))
    throw TypeError(`Cubie construction requires a task scheduler`);
  let s = _r(e, t, n),
    c = a();
  try {
    for (;;) {
      let e = s.next();
      if (e.done) return e.value;
      a() - c >= i && (await r(), (c = a()));
    }
  } finally {
    s.return();
  }
}
