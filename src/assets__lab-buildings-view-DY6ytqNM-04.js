// assets__lab-buildings-view-DY6ytqNM 04 — base
// Lines 931-1227 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var lt = Math.PI / 180,
  M = `ironDark`,
  ut = (e, t) => Array(e).fill(t),
  dt = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t];
function ft(e, t, n, r = !0) {
  return Be(e, t, n, r);
}
var pt = () =>
    ft(256, 256, (e, t) => {
      ((e.strokeStyle = `#1c1e21`),
        (e.fillStyle = `#1c1e21`),
        (e.lineCap = `round`),
        e.fillRect(0, 0, t, 14),
        e.fillRect(0, t - 14, t, 14),
        (e.lineWidth = 9));
      for (let n of [4, t / 2])
        (e.beginPath(), e.moveTo(n, 0), e.lineTo(n, t), e.stroke());
      e.lineWidth = 7;
      for (let n of [t / 4, (3 * t) / 4]) {
        (e.beginPath(),
          e.arc(n, t / 2, t * 0.13, 0, Math.PI * 2),
          e.stroke(),
          e.beginPath(),
          e.arc(n, t / 2, t * 0.04, 0, Math.PI * 2),
          e.fill());
        for (let r of [-1, 1])
          (e.beginPath(),
            e.arc(
              n - t * 0.07,
              t / 2 + r * t * 0.26,
              t * 0.07,
              0,
              Math.PI * 2 * 0.75,
            ),
            e.stroke(),
            e.beginPath(),
            e.arc(
              n + t * 0.07,
              t / 2 + r * t * 0.26,
              t * 0.07,
              Math.PI,
              Math.PI * 1.75 + Math.PI,
            ),
            e.stroke());
      }
    }),
  mt = () =>
    ft(
      512,
      512,
      (e, t) => {
        let n = t / 2;
        ((e.fillStyle = `#f2ead2`),
          e.beginPath(),
          e.arc(n, n, n - 4, 0, Math.PI * 2),
          e.fill(),
          (e.strokeStyle = `#2a241c`),
          (e.lineWidth = 14),
          e.stroke(),
          (e.fillStyle = `#2a241c`),
          (e.font = `bold 54px Georgia, serif`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          [
            `XII`,
            `I`,
            `II`,
            `III`,
            `IIII`,
            `V`,
            `VI`,
            `VII`,
            `VIII`,
            `IX`,
            `X`,
            `XI`,
          ].forEach((t, r) => {
            let i = (r / 12) * Math.PI * 2;
            (e.fillText(
              t,
              n + Math.sin(i) * n * 0.72,
              n - Math.cos(i) * n * 0.72,
            ),
              e.fillRect(
                n + Math.sin(i) * n * 0.9 - 5,
                n - Math.cos(i) * n * 0.9 - 5,
                10,
                10,
              ));
          }));
      },
      !1,
    ),
  ht = () =>
    ft(64, 256, (e, t, n) => {
      let r = [`#c8201c`, `#f4f1ea`, `#1f3f8a`, `#f4f1ea`];
      for (let n = -8; n < 16; n++)
        ((e.fillStyle = r[((n % 4) + 4) % 4]),
          e.beginPath(),
          e.moveTo(0, n * 32),
          e.lineTo(t, n * 32 - 64),
          e.lineTo(t, n * 32 - 32),
          e.lineTo(0, n * 32 + 32),
          e.fill());
    });
Object.assign(O, {
  brickRust: {
    pat: `brick`,
    p: { base: 8272424, mortar: 9404528, vary: 0.38, burnt: 0.18, seed: 60 },
    scale: 1.2,
    rough: 0.93,
    bump: 1.7,
    grime: 0.4,
  },
  brickOrange: {
    pat: `brick`,
    p: { base: 11756863, mortar: 12101775, vary: 0.22, burnt: 0.06, seed: 61 },
    scale: 1.2,
    rough: 0.9,
    bump: 1.6,
    grime: 0.3,
  },
  brickDeco: {
    pat: `brick`,
    p: { base: 5913134, mortar: 9208436, vary: 0.2, burnt: 0.12, seed: 62 },
    scale: 1.2,
    rough: 0.9,
    bump: 1.5,
    grime: 0.25,
  },
  terracotta: {
    pat: `ashlar`,
    p: { base: 13605740, rows: 4, joint: 3, seed: 63 },
    scale: 1.4,
    rough: 0.85,
    bump: 0.8,
    grime: 0.28,
  },
  whiteTerra: {
    pat: `ashlar`,
    p: { base: 15328211, rows: 5, joint: 2, jointK: 0.8, seed: 64 },
    scale: 1.6,
    rough: 0.6,
    bump: 0.6,
    grime: 0.22,
  },
  brownstone: {
    pat: `ashlar`,
    p: { base: 7228219, rows: 4, joint: 2, jointK: 0.75, seed: 65 },
    scale: 1.8,
    rough: 0.92,
    bump: 1,
    grime: 0.25,
  },
  copperGreen: {
    pat: `stucco`,
    p: { base: 6132353, seed: 66, blotch: 30 },
    scale: 1.5,
    rough: 0.6,
    metal: 0.25,
    bump: 0.4,
  },
  stuccoPink: {
    pat: `stucco`,
    p: { base: 14263447, seed: 67 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.3,
  },
  stuccoSand: {
    pat: `stucco`,
    p: { base: 13351064, seed: 68 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.34,
  },
  stuccoMint: {
    pat: `stucco`,
    p: { base: 10470061, seed: 69 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.3,
  },
  stuccoPeach: {
    pat: `stucco`,
    p: { base: 14464398, seed: 70 },
    scale: 2.2,
    rough: 0.93,
    bump: 0.8,
    grime: 0.32,
  },
  lacquer: {
    pat: `paint`,
    p: { base: 1513243 },
    size: 128,
    scale: 1,
    rough: 0.3,
    metal: 0.2,
  },
  enamelTeal: {
    pat: `paint`,
    p: { base: 3112838 },
    size: 128,
    scale: 1,
    rough: 0.3,
    metal: 0.1,
  },
  steel: {
    pat: `paint`,
    p: { base: 5922659 },
    size: 128,
    scale: 1,
    rough: 0.45,
    metal: 0.6,
  },
  glassVault: { glass: !0, color: 6265996 },
  awningWine: {
    pat: `stripes`,
    p: { base: 6166560, alt: 7020584 },
    size: 256,
    scale: 1,
    rough: 0.95,
  },
  awningBlack: {
    pat: `stripes`,
    p: { base: 1907999, alt: 14274484 },
    size: 256,
    scale: 1,
    rough: 0.95,
  },
  awningMustard: {
    pat: `stripes`,
    p: { base: 12092970, alt: 15260864 },
    size: 256,
    scale: 1,
    rough: 0.95,
  },
  neonRed: {
    pat: `paint`,
    p: { base: 16734792 },
    size: 64,
    scale: 1,
    rough: 0.4,
    emissive: 16722458,
  },
  neonPink: {
    pat: `paint`,
    p: { base: 16743096 },
    size: 64,
    scale: 1,
    rough: 0.4,
    emissive: 16727190,
  },
  neonBlue: {
    pat: `paint`,
    p: { base: 8445183 },
    size: 64,
    scale: 1,
    rough: 0.4,
    emissive: 2799359,
  },
  neonGreen: {
    pat: `paint`,
    p: { base: 9306024 },
    size: 64,
    scale: 1,
    rough: 0.4,
    emissive: 2817898,
  },
  neonGold: {
    pat: `paint`,
    p: { base: 16768122 },
    size: 64,
    scale: 1,
    rough: 0.4,
    emissive: 16756784,
  },
  glassBlock: {
    pat: `brick`,
    p: { base: 13623523, mortar: 10923952, vary: 0.06, burnt: 0, seed: 71 },
    scale: 0.9,
    rough: 0.15,
    metal: 0.1,
    emissive: 1976878,
  },
  lampGreen: {
    pat: `paint`,
    p: { base: 7329942 },
    size: 64,
    scale: 1,
    rough: 0.3,
    emissive: 2664540,
  },
});
