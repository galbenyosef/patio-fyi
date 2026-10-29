// assets__grenade-model-r0cg2Gb_ 24 — scale
// Lines 29946-30282 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function _i(e) {
  let t = Jr(e),
    {
      run: n,
      rbox: r,
      tube: i,
      ring: a,
      slab: o,
      pin: s,
      side: c,
      rr: l,
      S: u,
    } = t,
    d = 0.032,
    f = 0.03;
  (n(
    `parker`,
    0,
    0.255,
    (e) => l(-0.004 + e, f - e, d - 2 * e, 0.003, 0.002),
    0.002,
  ),
    n(
      `satin`,
      0.002,
      0.253,
      (e) => l(-0.03 + e, -0.004, 0.031 - 2 * e, 0.002, 0.003),
      0.002,
    ),
    r(`inset`, 0.13, 0.030199999999999998, 0, 0.12, 8e-4, 0.005, 0),
    c((e) => {
      let t = e * 0.0162;
      r(`inset`, 0.128, -0.004, t, 0.25, 8e-4, 8e-4, 0);
      for (let e of [0.014, 0.24]) s(e, 0.012, t, 0.0024, `satin`);
      for (let e of [0.03, 0.22]) s(e, -0.018, t, 0.0022, `satin`);
    }),
    r(`inset`, 0.17, 0.01, d / 2 - 4e-4, 0.045, 0.012, 0.002, 0.001),
    i(`barrel`, 0.27, 0, 0, 0.0095, 0.03, `x`, 0.0095, 16));
  for (let e = 0; e < 7; e++)
    a(`barrel`, 0.262 + e * 0.004, 0, 0, 0.0095, 7e-4, `x`);
  (mi(t).slab(
    `satin`,
    [
      [0.22, -0.03],
      [0.25, -0.03],
      [0.25, -0.044],
      [0.22, -0.044],
    ],
    0.006,
    0,
    0.001,
    [
      [
        [0.226, -0.032],
        [0.244, -0.032],
        [0.244, -0.04],
        [0.226, -0.04],
      ],
    ],
  ),
    o(
      `satin`,
      [
        [0.04, -0.03],
        [0.11, -0.03],
        [0.112, -0.13],
        [0.104, -0.136],
        [0.05, -0.136],
        [0.044, -0.13],
      ],
      0.028,
      0,
      0.002,
    ),
    c((e) => {
      for (let t = 0; t < 9; t++)
        r(
          `inset`,
          0.077,
          -0.04 - t * 0.01,
          e * (d / 2 - 0.0018),
          0.05,
          0.0014,
          0.001,
          0,
        );
    }),
    t.tguard(`satin`, 0.11, 0.17, -0.03, 0.026, 0.004, 0.009),
    r(`satin`, 0.107, -0.13, 0, 0.006, 0.01, 0.02, 0.001),
    c((e) => {
      r(`parker`, 0.046, -0.022, e * 0.017, 0.014, 0.004, 0.0016, 6e-4);
    }),
    (u.magwell = { pos: [0.077, -0.03, 0], kind: `sm-mac` }),
    (u.hands = { trigger: [0.08, -0.072, 0], support: [0.2, -0.03, 0] }));
  let p = t.group(`bolt`);
  (p.tube(
    `satin`,
    0.18,
    0.032799999999999996,
    0,
    0.006,
    0.0056,
    `y`,
    0.006,
    16,
  ),
    p.rbox(`inset`, 0.18, 0.0356, 0, 0.012, 0.0012, 0.002, 0),
    (u.charging = [0.18, 0.032799999999999996, 0]),
    (u.authoredBolt = !0),
    oi(t, 0.02, 0.245, f, 0.0405),
    c((e) =>
      n(
        `bright`,
        -0.18,
        0.06,
        (t) => Yr(qr(-0.008, 0.0028 - t * 0.4), e * 0.019),
        0.001,
      ),
    ),
    o(
      `satin`,
      [
        [-0.176, 0.016],
        [-0.188, 0.016],
        [-0.19, -0.06],
        [-0.178, -0.064],
      ],
      0.042,
      0,
      0.0016,
      [
        [
          [-0.18, 0.004],
          [-0.186, 0.004],
          [-0.187, -0.05],
          [-0.181, -0.052],
        ],
      ],
    ),
    (u.stockEnd = -0.19),
    (u.barrel = {
      pos: [0.285, 0, 0],
      radius: 0.0095,
      length: 0.065,
      straight: !0,
    }),
    (u.underbarrel = { pos: [0.2, -0.03, 0], span: [0.17, 0.25] }),
    t.opticMount(0.07, 0.165, f, 0.042499999999999996, 0.03, `satin`));
}
var vi = {
  "sm-mp5a3": ui,
  "sm-mp5k": di,
  "sm-mp5tan": fi,
  "sm-ump45": pi,
  "sm-mp7": hi,
  "sm-uzi": gi,
  "sm-mac10": _i,
  ...Vr({
    kit: Jr,
    hkReceiver: Xr,
    hkTrilug: si,
    hkCocker: ci,
    hkSights: ni,
    umpSights: ri,
    mp7Sights: ii,
  }),
};
Object.fromEntries(
  Object.entries(vi).map(([e, t]) => [
    e,
    (e) => {
      (t(e), (e.S.authored = !0));
    },
  ]),
);
function yi(
  e,
  t,
  {
    L: n,
    c: r,
    D: i,
    W: a,
    mat: o,
    ribs: s = !1,
    floor: c = 0.008,
    scale: l = 1,
    lean: u = 0,
  },
) {
  ((n *= l), (r *= l));
  let d = (e) => r * e * e + u * n * e,
    f = [];
  for (let e = 0; e <= 10; e++) {
    let t = e / 10;
    f.push([i / 2 + d(t), -n * t]);
  }
  for (let e = 10; e >= 0; e--) {
    let t = e / 10;
    f.push([-i / 2 + d(t), -n * t]);
  }
  if (
    (e.slab(t[o], f, a, 0, 0.0016),
    (e.rbox(
      t[o.startsWith(`poly`) ? o : `satin`],
      d(1) + 0.001,
      -n - c / 2 + 0.002,
      0,
      i + 0.005,
      c,
      a + 0.002,
      0.002,
    ).rotation.z = Math.atan2(r * 2 + u * n, n) * 0.8),
    s)
  )
    for (let r of [-1, 1])
      for (let s of [-i * 0.25, i * 0.2]) {
        let i = [];
        for (let e = 1; e <= 8; e++) {
          let t = 0.08 + e * 0.1;
          i.push([d(t) + s + 0.0018, -n * t]);
        }
        for (let e = 8; e >= 1; e--) {
          let t = 0.08 + e * 0.1;
          i.push([d(t) + s - 0.0018, -n * t]);
        }
        e.slab(t[o], i, 0.0016, (r * a) / 2, 5e-4);
      }
  return d;
}
var bi = {
  "sm-mp5": (e, t, n) => {
    let r = yi(e, t, {
      L: 0.165,
      c: 0.05,
      D: 0.028,
      W: 0.02,
      mat: `satin`,
      ribs: !0,
      scale: n,
    });
    for (let i of [-1, 1])
      for (let a of [0.3, 0.55, 0.8])
        e.tube(
          t.inset,
          r(a) - 0.006,
          -0.165 * n * a,
          i * 0.0102,
          0.0014,
          6e-4,
          `z`,
          0.0014,
          8,
        );
  },
};
function xi(e, t, n) {
  let r = yi(e, t, n),
    i = n.L * (n.scale ?? 1);
  for (let a of [-1, 1])
    for (let o = 0; o < 4; o++) {
      let s = 0.18 + o * 0.2;
      e.tube(
        t.inset,
        r(s) - n.D * 0.25,
        -i * s,
        a * (n.W / 2 + 2e-4),
        0.0013,
        6e-4,
        `z`,
        0.0013,
        8,
      );
    }
  return r;
}
Object.assign(bi, {
  ...Hr(yi),
  "sm-ump": (e, t, n) => {
    let r = yi(e, t, {
      L: 0.17,
      c: 0.004,
      D: 0.042,
      W: 0.024,
      mat: `polyg`,
      scale: n,
    });
    for (let i of [-1, 1])
      for (let a of [-0.01, 0.008])
        e.rbox(
          t.polyg,
          a + r(0.5),
          -0.085 * n,
          i * 0.0122,
          0.004,
          0.14 * n,
          0.0016,
          6e-4,
        );
  },
  "sm-mp7": (e, t, n) =>
    xi(e, t, {
      L: 0.135,
      c: 0,
      lean: -0.03,
      D: 0.03,
      W: 0.022,
      mat: `poly`,
      scale: n,
    }),
  "sm-uzi": (e, t, n) =>
    xi(e, t, {
      L: 0.2,
      c: 0,
      lean: -0.02,
      D: 0.03,
      W: 0.02,
      mat: `parker`,
      scale: n,
    }),
  "sm-mac": (e, t, n) =>
    xi(e, t, { L: 0.175, c: 0, D: 0.03, W: 0.021, mat: `satin`, scale: n }),
});
function Si(e, t, n, r) {
  let i = bi[t.kind];
  if (!i) return !1;
  let a = Wr();
  for (let t of r ? [0, 0.03] : [0]) {
    if (!t || !e.group) {
      i(e, a, n);
      continue;
    }
    let r = new j();
    ((r.position.z = t), e.group.add(r), i(tr(r, a), a, n));
  }
  return !0;
}
