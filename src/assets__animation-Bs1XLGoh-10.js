// assets__animation-Bs1XLGoh 10 — map
// Lines 2772-2950 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function* bi() {
  let e = (e) => (Ie(e), e),
    [t, n, r, i, a, o, s] = gi,
    c = ([, t, , , n, r]) => pi(e(t()), n, r),
    l = c(n),
    u = l.userData.pants;
  try {
    yield [
      `waist`,
      J([q(c(t), W.hips, { joint: G.waist, def: [0, 0.19, 0.07, 0] })], !0),
    ];
    let e = J(
      [q(l, W.hips, { mode: 1, def2: (e) => [u.wL[e], u.wR[e], 0, 0] })],
      !0,
    );
    ((l = null),
      yield [`pants`, e],
      yield [`chest`, J([q(c(r), W.torso)], !0)],
      yield [
        `legs`,
        J(
          [
            q(c(i), W.legL, { joint: G.kneeL, def: [-pe, -pe, 0.11, 1] }),
            q(c(a), W.legR, { joint: G.kneeR, def: [-pe, -pe, 0.11, 1] }),
          ],
          !0,
        ),
      ],
      yield [
        `arms`,
        J(
          [
            q(c(o), W.armL, { joint: G.elbowL, def: [-Ee, -Ee, 0.1, 1] }),
            q(c(s), W.armR, { joint: G.elbowR, def: [-Ee, -Ee, 0.1, 1] }),
          ],
          !0,
        ),
      ]);
  } finally {
    l?.dispose();
  }
}
var xi = (e) => (e.index ? e.toNonIndexed() : e);
function Si(e) {
  let t = it(`assault`),
    n = [];
  for (let [r, i, a] of [
    [-1, W.foreL, W.armL],
    [1, W.foreR, W.armR],
  ]) {
    for (let e of t.fore.slice(2)) n.push(q(xi(e.clone()), i, { heat: 0.5 }));
    for (let t of [
      Et(0.006, 0.05, 0.062, r * 0.066, -0.075, 0, 2763559),
      ...je(Ve[e], 0.054, 0.04, r * 0.066, -0.075, 0, `x`, r),
    ])
      n.push(q(xi(t), a));
  }
  for (let e of Object.values(t)) for (let t of e) t.dispose();
  return J(n);
}
function Ci() {
  return J(
    [W.shinL, W.shinR].map((e) =>
      q(xi(Et(0.14, 0.1, 0.271, 0, -Tt - 0.01, -0.0595, Qe, Dt(0.6232))), e, {
        heat: 0.3,
      }),
    ),
  );
}
function wi(e, t, n) {
  let r = vi(t, n);
  return J(
    [...De(!0), ...Ue(e, r), ...(e === `sniper` ? [] : St(e, t))].map((e) =>
      q(xi(e), W.torso, { heat: 0.4 }),
    ),
  );
}
function Ti() {
  let e = { tag: ke.skin },
    t = [
      Et(N.w, N.h, N.d, 0, N.y, 0, Qe, { ...e, bevel: 0.022 }),
      Et(0.13, 0.08, 0.12, 0, 0.03, 0.01, Qe, { ...e, shade: 0.86 }),
      ...[-1, 1].map((t) =>
        Et(0.03, 0.075, 0.06, t * (N.w / 2 + 0.01), 0.23 - 0.02, 0.02, Qe, {
          ...e,
          shade: 0.93,
          bevel: 0.008,
        }),
      ),
    ].map((e) => q(xi(e), W.head)),
    n = Ne({ hair: Qe, hairStyle: 0 }, !0).map(
      (e) => (e.attributes.aTag.array.fill(5), q(xi(e), W.head, { heat: 0.3 })),
    );
  return J([...t, ...n]);
}
function Ei() {
  return J(
    [
      q(
        yt(N.w - 0.03, N.h - 0.03, 0, N.y, Fe - 0.0015, [0, 0, 1, 1], Math.PI),
        W.head,
        { heat: 0.95 },
      ),
    ],
    !0,
  );
}
function Di(e, t, n) {
  mt(!0);
  let r;
  try {
    r = xe(vi(e, n), _e[t], 0, ti).map((e) => (e.index ? e.toNonIndexed() : e));
  } finally {
    mt(!1);
  }
  let i = r.filter((e) => e.userData.shell),
    a = r.filter((e) => e.userData.smooth && !e.userData.shell),
    o = r.filter((e) => !e.userData.smooth),
    s = (e) => e.map((e) => q(e, W.head, { heat: 0.3 }));
  return {
    hard: J(s(o)),
    soft: a.length ? J(s(a)) : null,
    shell: i.length ? J(s(i), !0) : null,
  };
}
function Oi() {
  return J(
    ve.map(([e, t]) => {
      let n = new E(0.05, 0.03);
      return (
        n.rotateY(Math.PI),
        n.translate(e, t + 0.004, Fe - 0.003),
        q(n, W.head, { heat: 0.9 })
      );
    }),
  );
}
var ki = 0.3;
function Ai() {
  return J(
    ve.map(([e, t]) => {
      let n = new E(1, 1),
        r = n.attributes.position.array.slice();
      for (let i = 0; i < r.length; i += 3)
        n.attributes.position.array.set([e, t, Fe - 0.022], i);
      return q(n, W.head, {
        heat: 0.9,
        def2: (e) => [r[e * 3] * ki, r[e * 3 + 1] * ki, 0, 0],
      });
    }),
    !0,
  );
}
var ji = { friend: [10354612, 4063096], foe: [16753571, 16727357] };
async function Mi(
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
  if (((_i = ct[o] ? o : null), typeof r != `function`))
    throw TypeError(`Cubie construction requires a task scheduler`);
  let s = Ni(e, t, n),
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
