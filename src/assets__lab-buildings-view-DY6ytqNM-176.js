// assets__lab-buildings-view-DY6ytqNM 176 — math
// Lines 55510-55837 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Jh() {
  return {
    key: `pnYachtClub`,
    name: `Driftpoint Yacht Club`,
    plain: 10776389,
    desc: `Mid-century yacht club: cedar-clad box under a butterfly roof with a glazed clerestory and rain chains, glass curtain wall onto a big deck with glass rails, porthole, flagmast with yard and gaff, gangway to a float.`,
    W: 20,
    D: 12,
    style: {
      wall: `pnCladCedar`,
      t: 0.25,
      bay: 2.5,
      floors: [3.8],
      win: {
        w: 1.6,
        h: 1,
        sill: 1.5,
        type: `grid`,
        lites: [2, 1],
        frame: `pnAnod`,
        rec: 0.06,
        curtains: 0.3,
      },
      curtain: {
        glass: `glassGrey`,
        spandrel: `pnCladCedar`,
        mullion: `pnAnod`,
        module: 1.25,
        sill: 0.15,
        head: 0.3,
        fin: 0.05,
      },
      door: {
        w: 1.8,
        h: 2.4,
        transom: 0,
        frame: `pnAnod`,
        glazed: !0,
        mat: `pnAnod`,
        rec: 0.15,
      },
      base: { mat: `concrete`, h: 0.3, out: 0.02 },
      roof: om,
    },
    front: {
      kinds: (e, t) =>
        [
          `solid`,
          `curtain`,
          `curtain`,
          `curtain`,
          `door`,
          `curtain`,
          `curtain`,
          `solid`,
        ][t],
      signs: [
        { mat: `pnSignYacht`, rect: [17.8, 19.8, 1.4, 2.6], z0: 0, z1: 0.01 },
      ],
      extra: Kh,
    },
    right: { kinds: (e, t) => (t % 2 ? `window` : `solid`) },
    left: { kinds: (e, t) => (t === 2 ? `door` : t % 2 ? `window` : `solid`) },
    back: { kinds: (e, t) => (t === 3 ? `door` : t % 2 ? `window` : `solid`) },
    extra: qh,
  };
}
function Yh() {
  return (
    Wp(),
    Jp(),
    [
      jm(),
      Fm(),
      Rm(),
      Vm(),
      Um(),
      Gm(),
      Jm(),
      Zm(),
      eh(),
      rh(),
      oh(),
      lh(),
      ph(),
      hh(),
      yh(),
      Sh(),
      Eh(),
      Oh(),
      jh(),
      Ph(),
      Lh(),
      zh(),
      Hh(),
      Gh(),
      Jh(),
    ]
  );
}
var Xh = Math.PI / 180,
  J = `ironDark`,
  Zh = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  Qh = (e, t = 1, n = 1) =>
    `rgba(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)},${n})`;
function $h(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
function eg(e, t, n, r = !0) {
  return Be(e, t, n, r);
}
var tg = () =>
    eg(
      512,
      512,
      (e, t) => {
        let n = t / 2;
        ((e.fillStyle = `#f3ecd6`),
          e.beginPath(),
          e.arc(n, n, n - 4, 0, Math.PI * 2),
          e.fill(),
          (e.strokeStyle = `#1e1b16`),
          (e.lineWidth = 16),
          e.stroke(),
          (e.lineWidth = 4),
          e.beginPath(),
          e.arc(n, n, n * 0.82, 0, Math.PI * 2),
          e.stroke(),
          (e.fillStyle = `#1e1b16`),
          (e.font = `bold 56px Georgia, serif`),
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
            e.fillText(
              t,
              n + Math.sin(i) * n * 0.66,
              n - Math.cos(i) * n * 0.66,
            );
          }));
        for (let t = 0; t < 60; t++) {
          let r = (t / 60) * Math.PI * 2,
            i = n * (t % 5 ? 0.86 : 0.83);
          ((e.lineWidth = t % 5 ? 3 : 8),
            e.beginPath(),
            e.moveTo(n + Math.sin(r) * i, n - Math.cos(r) * i),
            e.lineTo(n + Math.sin(r) * n * 0.9, n - Math.cos(r) * n * 0.9),
            e.stroke());
        }
      },
      !1,
    ),
  ng = () =>
    eg(
      512,
      512,
      (e, t) => {
        let n = t / 2,
          r = $h(71),
          i = [
            `#2a4a9a`,
            `#9a2222`,
            `#c89a2a`,
            `#2a6a4a`,
            `#5a2a7a`,
            `#1e3a7a`,
          ];
        ((e.fillStyle = `#6c6250`), e.fillRect(0, 0, t, t));
        for (let t = 0; t < 1400; t++) {
          e.fillStyle = i[Math.floor(r() * i.length)];
          let t = r() * Math.PI * 2,
            a = r() * n * 0.95;
          e.fillRect(n + Math.cos(t) * a - 7, n + Math.sin(t) * a - 7, 14, 14);
        }
        ((e.strokeStyle = `#8c826c`),
          (e.lineCap = `round`),
          (e.lineWidth = 16),
          e.beginPath(),
          e.arc(n, n, n - 8, 0, Math.PI * 2),
          e.stroke(),
          (e.lineWidth = 12),
          e.beginPath(),
          e.arc(n, n, n * 0.3, 0, Math.PI * 2),
          e.stroke());
        for (let t = 0; t < 12; t++) {
          let r = (t / 12) * Math.PI * 2;
          ((e.lineWidth = 10),
            e.beginPath(),
            e.moveTo(n + Math.cos(r) * n * 0.3, n + Math.sin(r) * n * 0.3),
            e.lineTo(n + Math.cos(r) * n * 0.97, n + Math.sin(r) * n * 0.97),
            e.stroke());
          let i = r + Math.PI / 12;
          ((e.lineWidth = 7),
            e.beginPath(),
            e.arc(
              n + Math.cos(i) * n * 0.72,
              n + Math.sin(i) * n * 0.72,
              n * 0.13,
              0,
              Math.PI * 2,
            ),
            e.stroke());
        }
        ((e.lineWidth = 7),
          e.beginPath(),
          e.arc(n, n, n * 0.12, 0, Math.PI * 2),
          e.stroke());
      },
      !1,
    ),
  rg = () =>
    eg(128, 128, (e, t) => {
      e.fillStyle = `#e9e2d0`;
      for (let n of [0, t / 2 - 5, t - 10]) e.fillRect(n, 0, 10, t);
      for (let n of [0, t / 2]) e.fillRect(0, n, t, 9);
    }),
  ig = () =>
    eg(256, 256, (e, t) => {
      let n = $h(81);
      for (let r = 0; r < 900; r++) {
        let r = n() * t,
          i = n() * t,
          a = Math.hypot(r - t / 2, i - t / 2) / (t / 2);
        n() < a * 0.9 ||
          ((e.fillStyle = `hsl(${95 + n() * 30},${35 + n() * 20}%,${14 + n() * 18}%)`),
          e.beginPath(),
          e.ellipse(r, i, 4 + n() * 7, 3 + n() * 5, n() * 3, 0, Math.PI * 2),
          e.fill());
      }
    }),
  ag = () =>
    eg(
      256,
      256,
      (e, t) => {
        let n = $h(91),
          r = e.createRadialGradient(
            t / 2,
            t / 2,
            t * 0.05,
            t / 2,
            t / 2,
            t / 2,
          );
        (r.addColorStop(0, `rgba(12,10,8,.92)`),
          r.addColorStop(0.45, `rgba(22,18,14,.6)`),
          r.addColorStop(1, `rgba(30,26,20,0)`),
          (e.fillStyle = r),
          e.fillRect(0, 0, t, t),
          (e.globalCompositeOperation = `destination-out`));
        for (let r = 0; r < 500; r++) {
          let r = n() * Math.PI * 2,
            i = t * (0.28 + n() * 0.24);
          ((e.fillStyle = `rgba(0,0,0,${n() * 0.7})`),
            e.beginPath(),
            e.arc(
              t / 2 + Math.cos(r) * i,
              t / 2 + Math.sin(r) * i,
              3 + n() * 12,
              0,
              Math.PI * 2,
            ),
            e.fill());
        }
        e.globalCompositeOperation = `source-over`;
      },
      !1,
    ),
  og = (e) =>
    eg(256, 256, (t, n) => {
      ((t.fillStyle = Qh(e)), t.fillRect(0, 0, n, n));
      let r = $h(101);
      for (let e = 0; e < 40; e++) {
        let e = r() * n,
          i = 20 + r() * 80,
          a = t.createLinearGradient(0, e, 0, e + i);
        (a.addColorStop(0, `rgba(110,60,30,.25)`),
          a.addColorStop(1, `rgba(110,60,30,0)`),
          (t.fillStyle = a),
          t.fillRect(r() * n, e, 3 + r() * 8, i));
      }
      ((t.fillStyle = Qh(e, 0.62)),
        t.fillRect(0, 0, n, 4),
        t.fillRect(0, 0, 4, n),
        (t.fillStyle = Qh(e, 1.3)));
      for (let e = 8; e < n; e += 16)
        (t.beginPath(), t.arc(e, 10, 2.6, 0, Math.PI * 2), t.fill());
      for (let e = 18; e < n; e += 16)
        (t.beginPath(), t.arc(10, e, 2.6, 0, Math.PI * 2), t.fill());
    }),
  sg = () =>
    eg(
      128,
      512,
      (e, t, n) => {
        ((e.fillStyle = `#f0ece0`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#1b1b1b`));
        for (let t = 0; t <= 20; t++) {
          let r = n - 16 - t * ((n - 32) / 20);
          (e.fillRect(8, r - 2, t % 5 ? 30 : 60, 4),
            t % 5 == 0 &&
              ((e.font = `bold 30px Arial`),
              e.fillText(String(t / 5), 76, r + 10)));
        }
      },
      !1,
    );
