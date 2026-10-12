// assets__lab-buildings-view-DJVr8phc 28 — rough
// Lines 9410-9753 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Mr() {
  if (E.moCable) return;
  let e = (e, t = {}) => ({
      pat: `paint`,
      p: { base: e },
      size: 128,
      scale: 1,
      rough: t.rough ?? 0.45,
      metal: t.metal ?? 0,
      emissive: t.emissive,
      grime: t.grime,
    }),
    t = (e, t, n = {}) => ({
      pat: `stucco`,
      p: {
        base: e,
        seed: t,
        blotch: n.blotch,
        joints: n.joints,
        lines: n.lines,
      },
      scale: n.scale ?? 2.4,
      rough: n.rough ?? 0.93,
      bump: n.bump ?? 0.7,
      grime: n.grime ?? 0.28,
    });
  (Object.assign(E, {
    moConcLight: t(12236461, 401, { scale: 2.6 }),
    moConcWarm: {
      pat: `boardform`,
      p: { base: 11116946, n: 8, seed: 402 },
      scale: 2.4,
      rough: 0.95,
      bump: 1,
      grime: 0.35,
      swap: !0,
    },
    moPrecast: t(13881027, 403, { joints: !0, scale: 3.2, blotch: 14 }),
    moPanelWhite: t(15526886, 404, {
      joints: !0,
      scale: 1.6,
      blotch: 6,
      bump: 0.4,
      grime: 0.15,
    }),
    moPanelGrey: t(9080724, 405, {
      joints: !0,
      scale: 1.6,
      blotch: 6,
      bump: 0.4,
      grime: 0.12,
    }),
    moZinc: {
      pat: `batten`,
      p: { base: 5264986, seed: 406 },
      scale: 0.9,
      rough: 0.5,
      metal: 0.45,
      bump: 1.5,
      grime: 0.1,
    },
    moZincLight: {
      pat: `batten`,
      p: { base: 10660012, seed: 407 },
      scale: 0.9,
      rough: 0.45,
      metal: 0.5,
      bump: 1.5,
      grime: 0.1,
    },
    moTerracotta: {
      pat: `ashlar`,
      p: { base: 12414022, rows: 8, joint: 3, jointK: 0.6, seed: 408 },
      scale: 2.4,
      rough: 0.8,
      bump: 0.6,
      grime: 0.2,
    },
    moBrickGrey: {
      pat: `brick`,
      p: { base: 7828333, mortar: 5723215, vary: 0.18, burnt: 0.05, seed: 409 },
      scale: 1.2,
      rough: 0.92,
      bump: 1.6,
      grime: 0.3,
    },
    moBrickBlack: {
      pat: `brick`,
      p: { base: 3552049, mortar: 7104351, vary: 0.2, burnt: 0, seed: 410 },
      scale: 1.2,
      rough: 0.9,
      bump: 1.6,
      grime: 0.2,
    },
    moCorten: t(9194022, 411, {
      blotch: 50,
      scale: 1.6,
      bump: 1,
      rough: 0.85,
      grime: 0.1,
    }),
    moTimber: {
      pat: `planks`,
      p: { base: 11894090, n: 12, seed: 412 },
      scale: 2.4,
      rough: 0.75,
      bump: 1,
      grime: 0.15,
    },
    moRed: e(12789290, { rough: 0.35 }),
    moYellow: e(15905792, { rough: 0.35 }),
    moBlue: e(2056112, { rough: 0.35 }),
    moTeal: e(1476234, { rough: 0.35 }),
    moGreen: e(3115580, { rough: 0.35 }),
    moLime: e(9881660, { rough: 0.35 }),
    moOrange: e(15233066, { rough: 0.35 }),
    moPurple: e(6044816, { rough: 0.35 }),
    moNavy: e(1780293, { rough: 0.4 }),
    moCharcoal: e(2829874, { rough: 0.4, metal: 0.35 }),
    moWhite: e(15724522, { rough: 0.4 }),
    moBlack: e(1184532, { rough: 0.6 }),
    moSilver: e(12436167, { rough: 0.25, metal: 0.85 }),
    moRubber: e(1776411, { rough: 0.9 }),
    moWater: e(3842756, { rough: 0.05, metal: 0.3 }),
    moLed: e(16054783, { rough: 0.3, emissive: 12573951 }),
    moLedWarm: e(16773590, { rough: 0.3, emissive: 16761466 }),
    moLedBlue: e(7321343, { rough: 0.3, emissive: 2785279 }),
    moLedRed: e(16734794, { rough: 0.3, emissive: 16722458 }),
    moLedLime: e(13041530, { rough: 0.3, emissive: 7000362 }),
    moLedAmber: e(16760928, { rough: 0.3, emissive: 16751130 }),
    moGlassGreen: { glass: !0, color: 8300186 },
    moGlassDark: { glass: !0, color: 5003364 },
    moGlassTeal: { glass: !0, color: 7317680 },
    moGlassClear: { glass: !0, color: 10467006 },
  }),
    (E.moRibbed = {
      tex: Cr(14277595),
      scale: 1.6,
      rough: 0.45,
      metal: 0.4,
      grime: 0.12,
    }),
    (E.moRibbedBlue = {
      tex: Cr(3432588),
      scale: 1.6,
      rough: 0.45,
      metal: 0.4,
      grime: 0.12,
    }),
    (E.moRibbedDark = {
      tex: Cr(3487805),
      scale: 1.6,
      rough: 0.45,
      metal: 0.4,
      grime: 0.1,
    }),
    (E.moRibbedGreen = {
      tex: Cr(3111493),
      scale: 1.6,
      rough: 0.45,
      metal: 0.4,
    }),
    (E.moFoliage = { tex: wr(), scale: 1.2, rough: 0.95 }),
    (E.moDeck = { tex: Dr(), scale: 5, rough: 0.95 }),
    (E.moSolar = { tex: Er(), rough: 0.2, metal: 0.5 }),
    (E.moHelipad = { tex: Or(), rough: 0.8 }),
    (E.moHazard = { tex: kr(), rough: 0.6 }),
    (E.moBoom = { tex: Ar(), rough: 0.5 }),
    (E.moClock = { tex: jr(), rough: 0.4, glow: 0.3 }),
    (E.moCable = {
      tex: xr(),
      scale: 0.64,
      rough: 0.4,
      metal: 0.7,
      cutout: !0,
      noShadow: !0,
    }),
    (E.moVoid = { tex: Sr(), cutout: !0, noShadow: !0 }),
    (E.moSlats = {
      tex: Tr(),
      scale: 0.9,
      rough: 0.8,
      cutout: !0,
      noShadow: !0,
    }));
}
function Nr(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][hr(e, t)];
}
function P(e, t, n, r, i, a, o, s, c, l, u) {
  let d = [i];
  for (let e = 1; e < r.nb; e++) {
    let t = e * r.bw;
    t > i + 0.001 && t < a - 0.001 && d.push(t);
  }
  d.push(a);
  let f = [o];
  for (let e of [...r.ys.slice(1), r.H])
    e > o + 0.001 && e < s - 0.001 && f.push(e);
  f.push(s);
  for (let i = 0; i < d.length - 1; i++)
    for (let a = 0; a < f.length - 1; a++)
      e.box(
        t,
        n,
        Nr(r, (d[i] + d[i + 1]) / 2, (f[a] + f[a + 1]) / 2),
        d[i],
        d[i + 1],
        f[a],
        f[a + 1],
        c,
        l,
        u,
      );
}
var Pr = (e, t) => (t < e.top ? e.ys[t + 1] : e.H),
  Fr = (e) => (t, n, r) => {
    let i = e.a0 ?? 0,
      a = e.a1 ?? r.L,
      o = e.y,
      s = e.d,
      c = e.th ?? 0.3;
    if (
      (P(t, e.mat, n, r, i, a, o, o + c, 0, s),
      e.soffit &&
        P(t, e.soffit, n, r, i + 0.05, a - 0.05, o - 0.03, o, 0.05, s - 0.05),
      e.edge &&
        P(
          t,
          e.edge,
          n,
          r,
          i - 0.03,
          a + 0.03,
          o - 0.06,
          o + c + 0.06,
          s,
          s + 0.06,
        ),
      e.lights)
    )
      for (let c = i + e.lights / 2; c < a - 0.2; c += e.lights)
        t.box(
          `moLed`,
          n,
          Nr(r, c, o + 0.1),
          c - 0.3,
          c + 0.3,
          o - 0.05,
          o - 0.02,
          s * 0.5 - 0.1,
          s * 0.5 + 0.1,
        );
    for (let i of e.posts || [])
      P(
        t,
        e.postMat || `moCharcoal`,
        n,
        r,
        i - 0.1,
        i + 0.1,
        0,
        o,
        s - 0.45,
        s - 0.25,
      );
    for (let i of e.rods || [])
      D(
        t,
        e.postMat || `moCharcoal`,
        n,
        Nr(r, i, o + 1),
        [i, o + c + 2, -0.05],
        [i, o + c, s - 0.3],
        0.05,
      );
    e.sign &&
      P(
        t,
        e.sign,
        n,
        r,
        e.sa,
        e.sb,
        o - 0.04,
        o + c + 0.04,
        s + 0.065,
        s + 0.08,
        yr(e.sa, e.sb, o - 0.04, o + c + 0.04),
      );
  },
  Ir = (e) => (t, n, r) => {
    let i = e.a0 ?? 0,
      a = e.a1 ?? r.L,
      o = 0;
    for (let s = i + (e.off ?? e.step / 2); s < a - 0.001; s += e.step, o++)
      e.skip?.(s, o) ||
        P(
          t,
          e.accent && o % e.accent.n === 0 ? e.accent.mat : e.mat,
          n,
          r,
          s - e.w / 2,
          s + e.w / 2,
          e.y0 ?? 0,
          e.y1 ?? r.H,
          e.z0 ?? 0,
          e.d,
        );
  },
  Lr = (e, t, n, r, i, a) => (o, s, c) => {
    let l = i ? c.t + r : 0;
    P(o, e, s, c, -l, c.L + l, t, n, a ?? -c.t, r);
  },
  Rr = (e) => (t, n, r) => {
    for (let i of e.floors)
      for (let a = 0; a < (e.n || 1); a++) {
        let o = r.ys[i] + e.at + a * (e.gap || 0.3);
        P(
          t,
          e.mat,
          n,
          r,
          e.a0 ?? 0,
          e.a1 ?? r.L,
          o,
          o + (e.th ?? 0.06),
          e.z0 ?? 0,
          e.d,
        );
      }
  };
function zr(e, t, n, r, i, a = `moCharcoal`, o = 0.95) {
  (e.add(a, new s(0.11, 0.11, o, 8).translate(r, o / 2, i), t, n),
    e.add(
      `moSilver`,
      new s(0.115, 0.115, 0.06, 8).translate(r, o - 0.12, i),
      t,
      n,
    ));
}
