// assets__greywater-setpieces-view-CS3dCOa6 13 — fillrect
// Lines 4817-4936 of readable/assets__greywater-setpieces-view-CS3dCOa6.pretty.js (statement-aligned).
var Pt = {
    key: `parkade`,
    name: `Multi-storey car park`,
    desc: `Open-deck helix garage: sloped bays, column grid, glass stair cores, lift, parked cars`,
    build: Nt,
  },
  Z = 4.8,
  Ft = 8.6,
  It = 3.8,
  Lt = 12.399999999999999,
  Rt = 9,
  zt = -11.6,
  Bt = 4;
function Vt(e, t, n, i, a) {
  let o = new r(e, t, n),
    s = o.attributes.uv,
    c = [
      [n, t],
      [n, t],
      [e, n],
      [e, n],
      [e, t],
      [e, t],
    ];
  for (let e = 0; e < 6; e++)
    for (let t = 0; t < 4; t++) {
      let n = e * 4 + t;
      s.setXY(n, (s.getX(n) * c[e][0]) / i, (s.getY(n) * c[e][1]) / a);
    }
  return o;
}
var Ht = (e, t, n, r, i, a, o, s) =>
  U(e, Math.abs(r - t), o - a, Math.abs(i - n), s, (t + r) / 2, a, (n + i) / 2);
function Ut(e, t) {
  let n = V(t),
    r = [];
  for (let e = 0; e < 16; e++) r.push(n() < 0.35);
  let i = (t, i) => {
      if (((t.fillStyle = `#000`), t.fillRect(0, 0, 512, 512), !i)) {
        if (e === `brick`) {
          ((t.fillStyle = `#8b4a36`), t.fillRect(0, 0, 512, 512));
          for (let e = 0; e < 64; e++)
            for (let r = 0; r < 17; r++) {
              let i = n();
              ((t.fillStyle = `rgba(${60 + i * 60},${20 + i * 20},10,0.25)`),
                t.fillRect(r * 32 - (e % 2) * 16, e * 8, 30, 6));
            }
        } else if (e === `glass`)
          ((t.fillStyle = `#3d5563`), t.fillRect(0, 0, 512, 512));
        else if (e === `precast`) {
          ((t.fillStyle = `#b3aea4`), t.fillRect(0, 0, 512, 512));
          for (let e = 0; e < 2500; e++)
            ((t.fillStyle = `rgba(80,76,70,${n() * 0.15})`),
              t.fillRect(n() * 512, n() * 512, 2, 2));
        } else ((t.fillStyle = `#d9d4c7`), t.fillRect(0, 0, 512, 512));
      }
      for (let n = 0; n < 4; n++)
        for (let a = 0; a < 4; a++) {
          let o = a * 128,
            s = n * 128,
            c = r[n * 4 + a],
            l = (n, r, a, o) => {
              if (i) {
                c &&
                  ((t.fillStyle = e === `glass` ? `#dfe9f0` : `#ffd79c`),
                  t.fillRect(n, r, a, o));
                return;
              }
              let s = t.createLinearGradient(n, r, n + a, r + o);
              (s.addColorStop(0, c ? `#c8b89a` : `#2c3a42`),
                s.addColorStop(1, c ? `#a08c6a` : `#4c5e68`),
                (t.fillStyle = s),
                t.fillRect(n, r, a, o));
            };
          e === `brick`
            ? (l(o + 34, s + 22, 60, 82),
              i ||
                ((t.fillStyle = `#d4c9b0`),
                t.fillRect(o + 28, s + 104, 72, 8),
                t.fillRect(o + 30, s + 14, 68, 9),
                (t.fillStyle = `#e8e2d4`),
                t.fillRect(o + 34, s + 60, 60, 4),
                t.fillRect(o + 62, s + 22, 4, 82)))
            : e === `glass`
              ? (l(o + 3, s + 3, 122, 94),
                i ||
                  ((t.fillStyle = `#26323a`),
                  t.fillRect(o, s + 128 - 30, 128, 30),
                  (t.fillStyle = `#8b9aa3`),
                  t.fillRect(o, s, 3, 128),
                  t.fillRect(o, s + 128 - 31, 128, 3)))
              : e === `precast`
                ? (l(o + 22, s + 26, 84, 72),
                  i ||
                    ((t.fillStyle = `rgba(0,0,0,0.25)`),
                    t.fillRect(o + 18, s + 22, 92, 6),
                    t.fillRect(o + 18, s + 22, 6, 80),
                    (t.fillStyle = `#9b968c`),
                    t.fillRect(o, s, 128, 3),
                    t.fillRect(o, s, 3, 128)))
                : (l(o, s + 10, 128, 76),
                  i ||
                    ((t.fillStyle = a % 2 ? `#4d7c84` : `#5a8a90`),
                    t.fillRect(o, s + 128 - 42, 128, 42),
                    (t.fillStyle = `#5c5a55`),
                    t.fillRect(o, s + 10, 3, 76)));
        }
    },
    o = z(512, 512, (e) => i(e, !1), !0),
    s = z(512, 512, (e) => i(e, !0), !0),
    c = new a({
      map: o,
      emissiveMap: s,
      emissive: 16777215,
      emissiveIntensity: 0,
      roughness: e === `glass` ? 0.25 : 0.85,
      metalness: e === `glass` ? 0.3 : 0,
    });
  return ((c.userData.nightGlow = 0.9), c);
}
