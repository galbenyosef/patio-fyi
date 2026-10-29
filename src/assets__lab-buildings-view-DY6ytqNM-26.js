// assets__lab-buildings-view-DY6ytqNM 26 — aspect
// Lines 8925-9232 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function sr() {
  return Be(
    512,
    512,
    (e) => {
      ((e.fillStyle = `#f2ead2`),
        e.beginPath(),
        e.arc(256, 256, 252, 0, Math.PI * 2),
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
        ].forEach((t, n) => {
          let r = (n / 12) * Math.PI * 2;
          (e.fillText(
            t,
            256 + Math.sin(r) * 256 * 0.72,
            256 - Math.cos(r) * 256 * 0.72,
          ),
            e.fillRect(
              256 + Math.sin(r) * 256 * 0.9 - 5,
              256 - Math.cos(r) * 256 * 0.9 - 5,
              10,
              10,
            ));
        }));
    },
    !1,
  );
}
var cr = `"Arial Black", Impact, sans-serif`,
  lr = `"Helvetica Neue", Arial, sans-serif`;
function ur() {
  O.cClockFace = { tex: sr(), rough: 0.5, glow: 0.35 };
  let e = { bg: 14077368, fg: 5129786, spacing: 0.3 };
  (D(
    `signCvSchool`,
    `ALDER CREEK SCHOOL
DIST. No 4 · 1894`,
    {
      bg: 15920866,
      fg: 2307402,
      border: 2307402,
      aspect: 0.6 / 3.2,
      size: 0.62,
      spacing: 0.06,
    },
  ),
    D(`signCvHigh`, `GREYWATER  HIGH  SCHOOL`, {
      ...e,
      aspect: 1 / 5.4,
      size: 0.62,
      spacing: 0.12,
    }),
    D(`signCvCourt`, `GREYWATER  COUNTY  COURTHOUSE`, {
      ...e,
      aspect: 0.5 / 12,
      size: 0.74,
    }),
    D(`signCvLibrary`, `PUBLIC  LIBRARY`, {
      ...e,
      aspect: 0.46 / 4,
      size: 0.7,
      spacing: 0.25,
    }),
    D(`signCvChurch`, `FIRST CHURCH · EST. 1871`, {
      bg: 2307402,
      fg: 15787720,
      border: 15787720,
      aspect: 0.6 / 2.4,
      size: 0.52,
      spacing: 0.04,
    }),
    D(`signCvEmergency`, `EMERGENCY`, {
      bg: 11545122,
      fg: 16777215,
      aspect: 0.46 / 7.3,
      size: 0.8,
      font: cr,
      weight: 900,
      spacing: 0.3,
    }),
    D(`signCvHospital`, `ST. BRENDAN HOSPITAL`, {
      fg: 2051722,
      aspect: 1.7 / 16,
      size: 0.8,
      font: lr,
      weight: 700,
      spacing: 0.08,
    }),
    D(`signCvIronwood`, `IRONWOOD  JUNCTION`, {
      bg: 1911354,
      fg: 15919308,
      border: 15919308,
      aspect: 0.6 / 7,
      size: 0.66,
      spacing: 0.22,
    }),
    D(
      `signCvIronwoodGable`,
      `IRONWOOD JCT.
ELEV. 1402 FT`,
      {
        bg: 15855074,
        fg: 1776411,
        border: 1776411,
        aspect: 1.1 / 5.9,
        size: 0.62,
        spacing: 0.1,
      },
    ),
    D(`signCvCoastGuard`, `U.S.  COAST  GUARD  ·  GANNET HEAD`, {
      bg: 16052972,
      fg: 2046570,
      border: 11740702,
      aspect: 0.5 / 7.6,
      size: 0.62,
      spacing: 0.1,
      font: cr,
      weight: 900,
    }),
    D(`signCvRathaus`, `RATHAUS`, {
      bg: 3100474,
      fg: 15255660,
      border: 15255660,
      aspect: 0.45 / 3.6,
      size: 0.66,
      spacing: 0.4,
    }),
    D(
      `signCvGrain`,
      `GREYWATER
GRAIN
CO-OP`,
      {
        fg: 9054756,
        aspect: 6.8 / 8,
        size: 0.8,
        font: cr,
        weight: 900,
        spacing: 0.04,
        fade: 0.25,
      },
    ),
    D(`signCvIronWorks`, `GREYWATER  IRON  WORKS`, {
      bg: 15129796,
      fg: 2761760,
      border: 2761760,
      aspect: 0.8 / 15.6,
      size: 0.7,
      spacing: 0.3,
    }),
    D(`signCvQuonset`, `HUT 7 · MOTOR POOL`, {
      bg: 3885618,
      fg: 15788754,
      aspect: 0.7 / 3.2,
      size: 0.6,
      font: cr,
      weight: 900,
      spacing: 0.06,
    }),
    D(`signCvPower`, `GREYWATER  LIGHT  &  POWER  CO.`, {
      bg: 14077368,
      fg: 3812900,
      aspect: 0.95 / 19,
      size: 0.7,
      spacing: 0.25,
    }),
    D(`signCvLumber`, `CASCADE LUMBER CO.`, {
      bg: 2760470,
      fg: 15784096,
      aspect: 0.85 / 10,
      size: 0.68,
      font: cr,
      weight: 900,
      spacing: 0.12,
    }),
    D(`signCvEngine`, `IRONWOOD  ENGINE  HOUSE`, {
      bg: 1911354,
      fg: 15919308,
      border: 15919308,
      aspect: 0.8 / 15,
      size: 0.62,
      spacing: 0.3,
    }),
    D(
      `signCvFish`,
      `GANNET HEAD
FISH CO.
FRESH · SALT · SMOKED`,
      {
        fg: 15788760,
        aspect: 3.7 / 14,
        size: 0.74,
        font: cr,
        weight: 900,
        spacing: 0.04,
        fade: 0.35,
      },
    ),
    D(
      `signCvBlock`,
      `LC-2
AUTHORIZED
PERSONNEL ONLY`,
      {
        bg: 15921384,
        fg: 11018266,
        border: 11018266,
        aspect: 1 / 2.2,
        width: 1024,
        size: 0.66,
        font: cr,
        weight: 900,
        spacing: 0.02,
      },
    ),
    D(`signCvDeco`, `CASCADIA  BELL  BUILDING`, {
      fg: 13214794,
      aspect: 0.65 / 12,
      size: 0.78,
      spacing: 0.35,
    }),
    D(`signCvBrutal`, `HARBOR COMMERCE`, {
      fg: 15790314,
      aspect: 1.5 / 13,
      size: 0.85,
      font: lr,
      weight: 700,
      spacing: 0.1,
    }),
    D(`signCvBrutalBand`, `HARBOR  COMMERCE  TOWER`, {
      bg: 10460050,
      fg: 3025444,
      aspect: 0.55 / 11,
      size: 0.72,
      font: lr,
      weight: 700,
      spacing: 0.3,
    }),
    D(`signCvCondo`, `ALDER POINT`, {
      fg: 2767428,
      aspect: 0.6 / 9,
      size: 0.8,
      font: lr,
      weight: 300,
      spacing: 0.5,
    }),
    D(`signCvResort`, `Hotel Sentinel Cay`, {
      fg: 16740272,
      glow: 1.4,
      aspect: 2.2 / 18,
      size: 0.9,
      font: `"Brush Script MT", "Segoe Script", cursive`,
      weight: 400,
      spacing: 0.02,
    }),
    D(`signCvMetro`, `MÉTROPOLITAIN`, {
      bg: 15326382,
      fg: 2902586,
      aspect: 0.45 / 1.7,
      width: 1024,
      size: 0.6,
      spacing: 0.04,
    }));
}
function dr() {
  return (ur(), [...hn(), ...jn(), ...Xn(), ...or()]);
}
var fr = `ironDark`,
  pr = (e, t) => Array(e).fill(t),
  mr = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  hr = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  gr = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function _r(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var vr = (e, t, n, r) => ({
  planar: (i, a) => [(i - e) / (t - e), (a - n) / (r - n)],
});
function yr(e, t, n) {
  return Be(e, t, n);
}
