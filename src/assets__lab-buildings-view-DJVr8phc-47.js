// assets__lab-buildings-view-DJVr8phc 47 — aspect
// Lines 14490-15089 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function xi() {
  let e = { font: `"Arial Black", Impact, sans-serif`, weight: 900 },
    t = { font: `"Helvetica Neue", Arial, sans-serif`, weight: 700 },
    n = { font: `"Helvetica Neue", Arial, sans-serif`, weight: 300 };
  (T(
    `moSignP`,
    `P
A
R
K`,
    {
      bg: 2056112,
      fg: 16777215,
      glow: 0.5,
      aspect: 7.4 / 1.1,
      width: 256,
      size: 0.8,
      ...e,
    },
  ),
    T(`moSignParkade`, `CIVIC  CENTRE  PARKING  ·  OPEN 24 HRS`, {
      bg: 12236461,
      fg: 2056112,
      aspect: 0.75 / 27,
      size: 0.72,
      spacing: 0.2,
      ...t,
    }),
    T(`moSignClear`, `MAX HEADROOM 2.1 m`, {
      bg: 1776411,
      fg: 15909424,
      aspect: 0.38 / 2.2,
      width: 1024,
      size: 0.66,
      ...e,
    }),
    T(`moSignRamp`, `UP ▲ LEVEL 2`, {
      bg: 2056112,
      fg: 16777215,
      aspect: 0.9 / 2.4,
      width: 1024,
      size: 0.5,
      ...e,
    }),
    T(`moSignLumen`, `lumen ●`, {
      fg: 12120160,
      glow: 1.2,
      aspect: 0.8 / 8.6,
      size: 0.95,
      spacing: 0.02,
      ...n,
    }),
    T(`moSignKestrel`, `KESTREL  STACK`, {
      fg: 15724522,
      aspect: 0.7 / 11.6,
      size: 0.7,
      spacing: 0.5,
      ...n,
    }),
    T(`moSignLibrary`, `EASTGATE  PUBLIC  LIBRARY`, {
      fg: 3814700,
      aspect: 1.05 / 28,
      size: 0.8,
      spacing: 0.35,
      ...t,
    }),
    T(`moSignReturn`, `BOOK RETURN`, {
      bg: 1780293,
      fg: 16777215,
      aspect: 0.3 / 0.8,
      width: 512,
      size: 0.55,
      ...t,
    }),
    T(
      `moSignHalvorsen`,
      `HALVORSEN
MUSEUM OF ART`,
      { fg: 1776411, aspect: 1.6 / 14.3, size: 0.8, spacing: 0.25, ...t },
    ),
    [
      [
        `FORM
&
VOID`,
        12789290,
      ],
      [
        `NEW
NORDIC
LIGHT`,
        1780293,
      ],
      [
        `COLOUR
FIELD
1950–70`,
        15233066,
      ],
    ].forEach(([t, n], r) =>
      T(`moSignBan${r}`, t, {
        bg: n,
        fg: 16777215,
        aspect: 6.9 / 2,
        width: 512,
        size: 0.5,
        spacing: 0.04,
        ...e,
      }),
    ),
    T(`moSignFreshway`, `FreshWay`, {
      fg: 3115580,
      glow: 0.8,
      aspect: 2.1 / 19,
      size: 0.92,
      spacing: 0.02,
      font: `"Trebuchet MS", "Segoe UI", sans-serif`,
      weight: 900,
    }),
    T(`moSignProduce`, `FRESH PRODUCE  ·  BAKERY  ·  DELI  ·  PHARMACY`, {
      bg: 3115580,
      fg: 16777215,
      aspect: 2.7 / 15.4,
      size: 0.4,
      spacing: 0.04,
      ...e,
    }),
    T(`moSignGalleria`, `RIVERSIDE  GALLERIA`, {
      bg: 2829874,
      fg: 15786680,
      glow: 0.4,
      aspect: 1.2 / 8.9,
      size: 0.62,
      spacing: 0.18,
      ...t,
    }),
    T(`moSignModa`, `MODA`, {
      fg: 1776411,
      aspect: 2.4 / 11,
      size: 0.85,
      spacing: 0.5,
      font: `Didot, "Bodoni MT", Georgia, serif`,
      weight: 400,
    }),
    T(`moSignHomeplus`, `HOME+`, {
      fg: 15233066,
      glow: 0.4,
      aspect: 2.4 / 11,
      size: 0.85,
      spacing: 0.1,
      ...e,
    }),
    [`THE LAST ORBIT`, `NIGHT HARBOR`, `PAPER TIGERS`, `SUMMER OF 29`].forEach(
      (t, n) =>
        T(
          `moSignPoster${n}`,
          t.replace(
            ` `,
            `
`,
          ),
          {
            bg: [1780293, 6035994, 15233066, 1476234][n],
            fg: 16777215,
            glow: 0.4,
            aspect: 2.24 / 1.44,
            width: 512,
            size: 0.36,
            ...e,
          },
        ),
    ),
    T(
      `moSignStarlineV`,
      `S
T
A
R
L
I
N
E`,
      {
        bg: 1776411,
        fg: 16767050,
        glow: 1.2,
        aspect: 11.4 / 1.55,
        width: 256,
        size: 0.82,
        ...e,
      },
    ),
    T(
      `moSignNowShowing`,
      `NOW SHOWING  ★  12 SCREENS  ★  IMAX  ★  RECLINER SEATS`,
      {
        bg: 1052692,
        fg: 16760928,
        glow: 1.2,
        aspect: 1.2 / 33.8,
        size: 0.62,
        spacing: 0.1,
        ...e,
      },
    ),
    T(`moSignAurelia`, `AURELIA`, {
      fg: 16046496,
      glow: 1.2,
      aspect: 2.2 / 11,
      size: 0.8,
      spacing: 0.35,
      font: `Didot, "Bodoni MT", Georgia, serif`,
      weight: 400,
    }),
    T(`moSignAureliaBand`, `AURELIA  HOTEL`, {
      bg: 6047280,
      fg: 16046496,
      aspect: 0.41 / 8.2,
      size: 0.7,
      spacing: 0.4,
      font: `Didot, "Bodoni MT", Georgia, serif`,
      weight: 400,
    }),
    T(`moSignH`, `H`, {
      bg: 2056112,
      fg: 16777215,
      glow: 0.6,
      aspect: 2.8 / 2.4,
      width: 512,
      size: 0.8,
      ...e,
    }),
    T(`moSignEmergency`, `EMERGENCY`, {
      bg: 12789290,
      fg: 16777215,
      glow: 0.6,
      aspect: 0.37 / 12,
      size: 0.8,
      spacing: 0.4,
      ...e,
    }),
    T(`moSignNorthgate`, `NORTHGATE  MEDICAL  PAVILION`, {
      fg: 1476234,
      aspect: 1 / 24,
      size: 0.7,
      spacing: 0.2,
      ...t,
    }),
    T(`moSignPolice`, `POLICE`, {
      bg: 13881027,
      fg: 1780293,
      aspect: 0.7 / 6.2,
      width: 1024,
      size: 0.8,
      spacing: 0.4,
      ...t,
    }),
    T(`moSignFire`, `FIRE STATION 14`, {
      bg: 12789290,
      fg: 16777215,
      aspect: 0.75 / 19,
      size: 0.75,
      spacing: 0.25,
      ...e,
    }),
    T(`moSign14`, `14`, {
      bg: 12236461,
      fg: 12789290,
      aspect: 1.7 / 3.2,
      width: 512,
      size: 0.9,
      ...e,
    }),
    T(`moSignMaxwell`, `MAXWELL  SCIENCE  BUILDING`, {
      bg: 2829874,
      fg: 15790314,
      aspect: 0.38 / 11,
      size: 0.66,
      spacing: 0.25,
      ...t,
    }),
    T(`moSignSportsplex`, `HARBOR  SPORTSPLEX`, {
      fg: 15905792,
      glow: 0.5,
      aspect: 2 / 24,
      size: 0.85,
      spacing: 0.1,
      ...e,
    }),
    T(
      `moSignHawks`,
      `HOME OF THE
HARBOR
HAWKS`,
      {
        bg: 1780293,
        fg: 15905792,
        aspect: 4.8 / 8.8,
        width: 1024,
        size: 0.6,
        ...e,
      },
    ),
    T(
      `moSignHawks2`,
      `SWIM · COURT
CLIMB · GYM
OPEN 6–22`,
      {
        bg: 15905792,
        fg: 1780293,
        aspect: 4.8 / 8.8,
        width: 1024,
        size: 0.5,
        ...e,
      },
    ),
    T(`moSignInterchange`, `CENTRAL  BUS  INTERCHANGE`, {
      bg: 2829874,
      fg: 15905792,
      aspect: 0.9 / 30,
      size: 0.72,
      spacing: 0.25,
      ...t,
    }),
    T(
      `moSignDepart`,
      `12  CITY LOOP  2 min   ·   40  AIRPORT  6 min   ·   7  HARBOR  9 min`,
      {
        bg: 789518,
        fg: 16756784,
        glow: 1.2,
        aspect: 0.9 / 11.6,
        size: 0.36,
        spacing: 0.02,
        font: `"Courier New", monospace`,
        weight: 700,
      },
    ),
    [`A1`, `A2`, `A3`, `A4`].forEach((t, n) =>
      T(`moSignBay${n}`, t, {
        bg: 15905792,
        fg: 1776411,
        aspect: 1.1 / 1.2,
        width: 256,
        size: 0.7,
        ...e,
      }),
    ),
    T(`moSignM`, `M`, {
      bg: 12789290,
      fg: 16777215,
      glow: 0.8,
      aspect: 1,
      width: 512,
      size: 0.85,
      ...e,
    }),
    T(`moSignLine3`, `3`, {
      bg: 3115580,
      fg: 16777215,
      glow: 0.6,
      aspect: 1,
      width: 256,
      size: 0.8,
      ...e,
    }),
    T(`moSignMetroBand`, `METRO  ·  LINE 3  ·  CENTRAL`, {
      bg: 2829874,
      fg: 16777215,
      aspect: 0.22 / 13,
      size: 0.75,
      spacing: 0.3,
      ...t,
    }),
    T(`moSignNorthpeak`, `NORTHPEAK  ·  DC-2`, {
      bg: 2829874,
      fg: 7321343,
      aspect: 0.6 / 5,
      width: 1024,
      size: 0.6,
      spacing: 0.2,
      ...t,
    }),
    T(`moSignVantage`, `V A N T A G E`, {
      fg: 16054783,
      glow: 1,
      aspect: 0.95 / 27,
      size: 0.8,
      spacing: 0.3,
      ...n,
    }),
    T(`moSignFoundry`, `FOUNDRY WORKS`, {
      bg: 2829874,
      fg: 15251562,
      aspect: 0.33 / 6.8,
      size: 0.75,
      spacing: 0.3,
      ...t,
    }),
    T(
      `moSignGhost`,
      `FOUNDRY WORKS
MACHINE SHOP
EST. 1911`,
      {
        fg: 15261896,
        aspect: 5.6 / 14.5,
        size: 0.8,
        spacing: 0.04,
        fade: 0.55,
        ...e,
      },
    ),
    T(`moSignGreenline`, `GREENLINE`, {
      bg: 11894090,
      fg: 16777215,
      aspect: 0.55 / 5,
      width: 1024,
      size: 0.66,
      spacing: 0.3,
      ...t,
    }),
    T(`moSignCampus`, `CAMPUS  COMMONS`, {
      bg: 2829874,
      fg: 13041530,
      glow: 0.9,
      aspect: 1.6 / 14,
      size: 0.62,
      spacing: 0.12,
      ...e,
    }),
    T(`moSignAtm`, `ATM`, {
      bg: 1780293,
      fg: 16777215,
      glow: 0.4,
      aspect: 0.35,
      width: 256,
      size: 0.7,
      ...e,
    }),
    T(`moSignDeposit`, `NIGHT DEPOSIT`, {
      bg: 1780293,
      fg: 14070634,
      aspect: 0.3 / 1.2,
      width: 512,
      size: 0.5,
      ...t,
    }),
    T(
      `moSignSummit`,
      `▲
SUMMIT
FEDERAL`,
      {
        bg: 1780293,
        fg: 16777215,
        aspect: 1.4 / 2.6,
        width: 512,
        size: 0.62,
        ...t,
      },
    ),
    T(`moSignSummitBand`, `SUMMIT  FEDERAL  BANK`, {
      fg: 14672872,
      aspect: 0.8 / 16,
      size: 0.75,
      spacing: 0.3,
      ...t,
    }),
    T(`moSignDrive`, `DRIVE-UP BANKING  ·  24 HR ATM`, {
      bg: 1780293,
      fg: 16777215,
      aspect: 0.37 / 11,
      size: 0.75,
      spacing: 0.15,
      ...t,
    }),
    T(`moSignApex`, `APEX`, {
      bg: 12789290,
      fg: 16777215,
      glow: 0.4,
      aspect: 1.2 / 9.6,
      size: 0.9,
      spacing: 0.5,
      ...e,
    }),
    T(`moSignApexRoof`, `APEX MOTORS`, {
      fg: 16777215,
      glow: 1,
      aspect: 2 / 12,
      size: 0.8,
      spacing: 0.15,
      ...e,
    }),
    T(`moSignService`, `SERVICE  ·  PARTS`, {
      bg: 2829874,
      fg: 16777215,
      aspect: 1 / 13,
      size: 0.65,
      spacing: 0.3,
      ...e,
    }),
    T(
      `moSignBlazin`,
      `BLAZIN’
BUN`,
      {
        bg: 12789290,
        fg: 16765498,
        glow: 0.6,
        aspect: 2.8 / 3.2,
        width: 1024,
        size: 0.8,
        ...e,
      },
    ),
    T(
      `moSignBlazinPylon`,
      `BLAZIN’ BUN
★ BURGERS ★`,
      {
        bg: 12789290,
        fg: 16765498,
        glow: 0.8,
        aspect: 1.6 / 2.4,
        width: 1024,
        size: 0.52,
        ...e,
      },
    ),
    T(`moSignDriveThru`, `DRIVE THRU`, {
      bg: 15905792,
      fg: 12789290,
      aspect: 0.5 / 1.7,
      width: 512,
      size: 0.62,
      ...e,
    }),
    T(
      `moSignMenu`,
      `BLAZIN’ STACK   6.49
DOUBLE BUN      7.99
FIRE FRIES      2.99
SHAKES          3.49`,
      {
        bg: 1184532,
        fg: 16765498,
        glow: 0.9,
        aspect: 1.4 / 2,
        width: 1024,
        size: 0.6,
        font: `"Courier New", monospace`,
        weight: 700,
        spacing: 0,
      },
    ),
    T(`moSignVoltra`, `VOLTRA  FUEL & GO`, {
      fg: 16777215,
      aspect: 0.9 / 22,
      size: 0.75,
      spacing: 0.3,
      ...e,
    }),
    T(`moSignVoltraBand`, `VOLTRA  ⚡  EV CHARGING`, {
      bg: 15724522,
      fg: 1476234,
      aspect: 0.5 / 16,
      size: 0.75,
      spacing: 0.25,
      ...e,
    }),
    T(
      `moSignPrices`,
      `VOLTRA

REG 1.89
PREM 2.09
DIESEL 1.95
EV 0.39/kWh`,
      {
        bg: 1184532,
        fg: 10416250,
        glow: 0.9,
        aspect: 4.6 / 1.1,
        width: 256,
        size: 0.62,
        spacing: 0,
        ...e,
      },
    ),
    T(`moSignIce`, `ICE`, {
      bg: 2056112,
      fg: 16777215,
      aspect: 0.3,
      width: 256,
      size: 0.7,
      ...e,
    }));
}
