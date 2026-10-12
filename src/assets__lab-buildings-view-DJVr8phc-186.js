// assets__lab-buildings-view-DJVr8phc 186 — math
// Lines 58730-59034 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function S_() {
  lg();
  let e = { font: `"Arial Black", Impact, sans-serif`, weight: 900 },
    t = { font: `Georgia, "Times New Roman", serif`, weight: 700 };
  return (
    T(`lmSignHollins`, `HOLLINS  JUNCTION`, {
      bg: 5905950,
      fg: 15788244,
      border: 15788244,
      aspect: 0.58 / 7.2,
      size: 0.62,
      spacing: 0.2,
      ...t,
    }),
    T(`lmSignCoal`, `No 2  COALING  PLANT`, {
      fg: 15921126,
      aspect: 1.6 / 11.1,
      size: 0.72,
      spacing: 0.1,
      fade: 0.4,
      ...e,
    }),
    T(
      `lmSignRound`,
      `MARLOW VALE
ENGINE SHED`,
      {
        bg: 1911354,
        fg: 15919308,
        border: 15919308,
        aspect: 0.9 / 7.2,
        size: 0.66,
        spacing: 0.12,
        ...t,
      },
    ),
    T(`lmSignGoods`, `GOODS  DEPARTMENT`, {
      bg: 15129012,
      fg: 6168351,
      aspect: 0.48 / 16,
      size: 0.7,
      spacing: 0.3,
      ...t,
    }),
    T(
      `lmSignGoodsGable`,
      `MARLOW VALE
GOODS`,
      {
        fg: 15921126,
        aspect: 1.2 / 6.5,
        size: 0.72,
        spacing: 0.08,
        fade: 0.3,
        ...e,
      },
    ),
    T(`lmSignTerminus`, `KINGSMERE  CENTRAL`, {
      fg: 3812376,
      aspect: 0.65 / 11.2,
      size: 0.8,
      spacing: 0.3,
      ...t,
    }),
    T(`lmSignDepart`, `DEPARTURES`, {
      bg: 1911354,
      fg: 15919308,
      border: 13149776,
      aspect: 0.55 / 3,
      size: 0.6,
      spacing: 0.15,
      ...t,
    }),
    T(`lmSignArrive`, `ARRIVALS`, {
      bg: 1911354,
      fg: 15919308,
      border: 13149776,
      aspect: 0.55 / 3,
      size: 0.6,
      spacing: 0.15,
      ...t,
    }),
    T(`lmSignHarbour`, `HARBOUR  MASTER`, {
      bg: 15129012,
      fg: 2043466,
      border: 2043466,
      aspect: 0.5 / 11.6,
      size: 0.62,
      spacing: 0.4,
      ...t,
    }),
    T(`lmSignPortGate`, `ALDEN QUAY CONTAINER TERMINAL  -  GATE 3`, {
      bg: 2043466,
      fg: 16777215,
      aspect: 0.66 / 17.6,
      size: 0.62,
      spacing: 0.12,
      font: `Arial, Helvetica, sans-serif`,
      weight: 700,
    }),
    T(
      `lmSignPump`,
      `GRAVING DOCK No 1
PUMPING STATION  1896`,
      {
        bg: 14075812,
        fg: 3812376,
        border: 6969920,
        aspect: 1.2 / 4.6,
        size: 0.5,
        spacing: 0.06,
        ...t,
      },
    ),
    T(`lmSignBonded`, `ALDEN QUAY BONDED WAREHOUSE`, {
      fg: 15722712,
      fade: 0.45,
      aspect: 2.5 / 13.4,
      size: 0.5,
      spacing: 0.06,
      ...e,
    }),
    T(`lmSign1874`, `1874`, {
      fg: 3812376,
      aspect: 0.6 / 1.6,
      size: 0.8,
      spacing: 0.2,
      ...t,
    }),
    [Gg(), Jg(), Qg(), t_(), r_(), u_(), m_(), g_(), y_(), x_()]
  );
}
var C_ = Math.PI / 180,
  w_ = `ironDark`,
  T_ = (e, t) => {
    let n = 0;
    for (; n < e.top && e.ys[n + 1] <= t + 1e-6;) n++;
    return n;
  },
  E_ = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Y = (e, t, n) =>
    n >= e.H - 0.001 && e.gableCell ? e.gableCell : e.grid[T_(e, n)][E_(e, t)],
  D_ = (e, t, n, r) =>
    e
      .clone()
      .multiply(new l().makeTranslation(t, 0, n))
      .multiply(new l().makeRotationY(r)),
  O_ = (e, t) => {
    e.roofTop = Math.max(e.roofTop, t);
  },
  k_ = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  A_ = (e) => e.map(([e, t]) => new h(e, t));
function j_(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
function M_(e, t, n) {
  return He(e, t, n);
}
var N_ = () =>
    M_(128, 128, (e, t) => {
      ((e.fillStyle = `#dcae1e`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#1c1c1c`));
      for (let n = -3; n < 4; n++) {
        let r = (n * t) / 2;
        (e.beginPath(),
          e.moveTo(r, 0),
          e.lineTo(r + t / 4, 0),
          e.lineTo(r + t / 4 + t, t),
          e.lineTo(r + t, t),
          e.fill());
      }
      let n = j_(3);
      for (let r = 0; r < 400; r++)
        ((e.fillStyle = `rgba(0,0,0,${n() * 0.12})`),
          e.fillRect(n() * t, n() * t, 2, 2));
    }),
  P_ = () =>
    M_(256, 32, (e, t, n) => {
      for (let r = 0; r < 8; r++)
        ((e.fillStyle = r % 2 ? `#f2efe8` : `#c8281e`),
          e.fillRect((r * t) / 8, 0, t / 8, n));
    }),
  F_ = () =>
    M_(256, 128, (e, t, n) => {
      let r = j_(7),
        i = n / 4;
      ((e.fillStyle = `#4a4230`), e.fillRect(0, 0, t, n));
      for (let t = 0; t < 4; t++)
        for (let n = -1; n < 5; n++) {
          let a = n * 64 + (t % 2) * 32,
            o = 0.85 + r() * 0.25,
            s = e.createLinearGradient(0, t * i, 0, (t + 1) * i);
          (s.addColorStop(
            0,
            `rgb(${(170 * o) | 0},${(152 * o) | 0},${(108 * o) | 0})`,
          ),
            s.addColorStop(
              1,
              `rgb(${(112 * o) | 0},${(98 * o) | 0},${(66 * o) | 0})`,
            ),
            (e.fillStyle = s),
            e.beginPath(),
            e.roundRect(a + 2, t * i + 2, 60, i - 4, 10),
            e.fill(),
            (e.strokeStyle = `rgba(40,32,18,.5)`),
            (e.lineWidth = 1.5),
            e.beginPath(),
            e.moveTo(a + 10, t * i + i / 2),
            e.lineTo(a + 52, t * i + i / 2 + (r() - 0.5) * 4),
            e.stroke());
        }
    }),
  I_ = () =>
    M_(256, 256, (e, t) => {
      let n = j_(11),
        r = [`#4c5a2e`, `#65703a`, `#7a6a42`, `#3a4424`, `#5a5236`];
      ((e.strokeStyle = `rgba(40,40,30,.9)`), (e.lineWidth = 2));
      for (let n = 0; n <= t; n += 16)
        (e.beginPath(),
          e.moveTo(n, 0),
          e.lineTo(n, t),
          e.stroke(),
          e.beginPath(),
          e.moveTo(0, n),
          e.lineTo(t, n),
          e.stroke());
      for (let i = 0; i < 260; i++) {
        let i = n() * t,
          a = n() * t,
          o = 6 + n() * 12;
        e.fillStyle = r[(n() * r.length) | 0];
        for (let r of [-t, 0, t])
          for (let s of [-t, 0, t])
            (e.beginPath(),
              e.ellipse(i + r, a + s, o, o * 0.55, n() * 3, 0, Math.PI * 2),
              e.fill());
      }
    }),
  L_ = () =>
    M_(256, 256, (e, t) => {
      let n = j_(19),
        r = [`#5b6340`, `#7b6d4a`, `#3e4630`, `#2c2f25`];
      ((e.fillStyle = r[0]), e.fillRect(0, 0, t, t));
      for (let i = 0; i < 70; i++) {
        let i = n() * t,
          a = n() * t,
          o = 14 + n() * 30;
        e.fillStyle = r[1 + ((n() * 3) | 0)];
        for (let r of [-t, 0, t])
          for (let s of [-t, 0, t]) {
            e.beginPath();
            for (let t = 0; t < 7; t++) {
              let c = (t / 7) * Math.PI * 2,
                l = o * (0.6 + n() * 0.5);
              e.lineTo(i + r + Math.cos(c) * l, a + s + Math.sin(c) * l * 0.6);
            }
            e.fill();
          }
      }
    }),
  R_ = (e) =>
    M_(512, 512, (t, n) => {
      ((t.fillStyle = `#f4f2ec`),
        e
          ? (t.beginPath(),
            t.arc(n / 2, n / 2, n * 0.48, 0, Math.PI * 2),
            t.fill())
          : t.fillRect(0, 0, n, n),
        (t.fillStyle = `#c21d1d`));
      let r = n * 0.13,
        i = n * 0.36;
      (t.fillRect(n / 2 - r, n / 2 - i, 2 * r, 2 * i),
        t.fillRect(n / 2 - i, n / 2 - r, 2 * i, 2 * r));
    }),
  z_ = () =>
    M_(256, 256, (e, t) => {
      (e.translate(t / 2, t / 2),
        e.rotate(Math.PI / 4),
        (e.fillStyle = `#e8741e`),
        e.fillRect(-t * 0.33, -t * 0.33, t * 0.66, t * 0.66),
        (e.strokeStyle = `#1b1b1b`),
        (e.lineWidth = 6),
        e.strokeRect(-t * 0.3, -t * 0.3, t * 0.6, t * 0.6),
        e.rotate(-Math.PI / 4),
        (e.fillStyle = `#1b1b1b`),
        (e.font = `900 ${t * 0.2}px "Arial Black", Impact, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(`1.1`, 0, t * 0.12),
        e.beginPath());
      for (let n = 0; n < 12; n++) {
        let r = (n / 12) * Math.PI * 2,
          i = n % 2 ? t * 0.05 : t * 0.1;
        e.lineTo(Math.cos(r) * i, -t * 0.12 + Math.sin(r) * i);
      }
      e.fill();
    });
