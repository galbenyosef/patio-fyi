// assets__lab-buildings-view-DJVr8phc 30 — box
// Lines 10012-10440 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Yr() {
  let e = [`moRed`, `moYellow`, `moGreen`, `moBlue`, `moPurple`],
    t =
      (t = {}) =>
      (n, r, i) => {
        let a = (e, t, i, a, o) =>
          n.box(`moConcLight`, r, e, t, i, a, o, -0.5, 0.05);
        for (let o = 0; o <= i.top; o++) {
          let s = i.ys[o],
            c = Pr(i, o);
          for (let l = 0; l < i.nb; l++) {
            if (t.core && l === 0) continue;
            let u = i.grid[o][l],
              d = l * i.bw,
              f = d + i.bw,
              p = o === i.top ? c + 1.05 : c;
            (a(u, l === 0 ? d : d - 0.22, l === 0 ? d + 0.45 : d + 0.22, s, p),
              l === i.nb - 1 && a(u, f - 0.45, f, s, p));
            let m = d + (l === 0 ? 0.45 : 0.22),
              h = f - (l === i.nb - 1 ? 0.45 : 0.22);
            if (o > 0) {
              if (t.gapAt?.(o, l)) {
                n.box(`moConcLight`, r, u, d, f, s - 0.35, s + 0.05, -0.3, 0);
                continue;
              }
              (n.box(`moConcLight`, r, u, d, f, s - 0.35, s + 1, -0.3, 0),
                n.box(e[o % 5], r, u, m, h, s + 0.55, s + 0.75, 0, 0.02));
            } else
              t.entries?.includes(l) ||
                (n.box(`moConcLight`, r, u, d, f, 0, 0.5, -0.3, 0),
                n.box(`moCable`, r, u, m, h, 0.5, 1.45, -0.13, -0.11));
          }
          if (o === i.top)
            for (let a = 0; a < i.nb; a++) {
              if (t.core && a === 0) continue;
              let s = i.grid[o][a],
                c = a * i.bw,
                l = c + i.bw;
              (n.box(
                `moConcLight`,
                r,
                s,
                c,
                l,
                i.H - 0.35,
                i.H + 1.05,
                -0.3,
                0,
              ),
                t.sign ||
                  n.box(
                    e[(o + 1) % 5],
                    r,
                    s,
                    c + 0.22,
                    l - 0.22,
                    i.H + 0.4,
                    i.H + 0.6,
                    0,
                    0.02,
                  ));
            }
        }
      },
    n = (e, t, n) => {
      let r = n.bw,
        i = n.H + 3.3;
      for (let a = 0; a <= n.top; a++) {
        let o = n.grid[a][0],
          s = n.ys[a],
          c = a < n.top ? n.ys[a + 1] : i,
          l = Pr(n, a),
          u = l - s;
        e.box(`moGlassTeal`, t, o, 0.6, r - 0.3, s, c, -0.12, -0.1);
        for (let n = 0; n <= 3; n++) {
          let i = 0.6 + (n * (r - 0 - 0.9)) / 3;
          e.box(`aluminum`, t, o, i - 0.04, i + 0.04, s, c, -0.14, 0.02);
        }
        (e.box(
          `moConcLight`,
          t,
          o,
          0.6,
          r - 0.3,
          s - 0.12,
          s + 0.12,
          -0.14,
          0.03,
        ),
          e.box(`moConcLight`, t, o, 0.35, 0.6, s, c, -3.8, 0.05),
          e.box(`moConcLight`, t, o, r - 0.3, r, s, c, -3.8, 0.05),
          e.box(`moConcLight`, t, o, 0.6, r - 0.3, s, c, -3.8, -3.6),
          O(
            e,
            `moConcLight`,
            t,
            o,
            1,
            s + 0.15,
            r - 1.6,
            s + u / 2,
            0.28,
            -1.6,
            -0.5,
          ),
          e.box(
            `moConcLight`,
            t,
            o,
            r - 1.6,
            r - 0.4,
            s + u / 2 - 0.25,
            s + u / 2,
            -3,
            -0.5,
          ),
          O(e, `moConcLight`, t, o, r - 1.6, s + u / 2, 1, l, 0.28, -3, -1.9),
          e.box(
            pr,
            t,
            o,
            1,
            r - 1.6,
            s + u / 2 + 0.9,
            s + u / 2 + 0.95,
            -1.62,
            -1.58,
          ),
          a === n.top &&
            (e.box(`moConcLight`, t, o, 0.3, r + 0.05, i, i + 0.35, -3.9, 0.15),
            e.box(
              `moLedBlue`,
              t,
              o,
              0.8,
              r - 0.6,
              i - 0.15,
              i - 0.02,
              0,
              0.15,
            )));
      }
      (e.box(`moLedWarm`, t, n.grid[0][0], 1.2, 3, 2.6, 2.7, 0, 0.6),
        e.box(`moCharcoal`, t, n.grid[0][0], 1, 3.2, 2.7, 2.85, -0.1, 0.8),
        e.box(`glass`, t, n.grid[0][0], 1.3, 2.9, 0.02, 2.4, -0.08, -0.06),
        Re(
          e,
          t,
          Nr(n, 6.1, 6),
          `moSignP`,
          n.bw + 0.1,
          4,
          11.6,
          0.2,
          1.5,
          `moBlue`,
        ));
    },
    r = (e) => (t, n, r) => {
      for (let i of e) {
        let a = r.grid[0][i],
          o = i * r.bw,
          s = o + r.bw,
          c = (o + s) / 2;
        (t.box(
          `moHazard`,
          n,
          a,
          o + 0.3,
          s - 0.3,
          2.3,
          2.5,
          0.2,
          0.3,
          yr(o, o + 1, 2.3, 2.5),
        ),
          t.box(
            `moSignClear`,
            n,
            a,
            c - 1.1,
            c + 1.1,
            2.52,
            2.9,
            0.22,
            0.28,
            yr(c - 1.1, c + 1.1, 2.52, 2.9),
          ));
        for (let e of [-1, 1]) {
          let r = c + e * 1.4;
          (t.box(`moYellow`, n, a, r - 0.15, r + 0.15, 0, 1.1, -1.8, -1.5),
            t.box(
              `moBoom`,
              n,
              a,
              e < 0 ? r + 0.1 : c + 0.15,
              e < 0 ? c - 0.15 : r - 0.1,
              0.95,
              1.03,
              -1.7,
              -1.6,
              yr(c - 3, c + 3, 0.95, 1.03),
            ),
            t.box(
              `moSilver`,
              n,
              a,
              r - e * 0.2 - 0.25,
              r - e * 0.2 + 0.25,
              0,
              1.35,
              -1,
              -0.6,
            ),
            t.box(
              `moLedBlue`,
              n,
              a,
              r - e * 0.2 - 0.15,
              r - e * 0.2 + 0.15,
              1,
              1.25,
              -0.59,
              -0.58,
            ));
        }
        (t.box(`moConcLight`, n, a, c - 0.3, c + 0.3, 0, 0.18, -3, 0.2),
          t.box(
            i === e[0] ? `moLedLime` : `moLedRed`,
            n,
            a,
            c - 0.5,
            c + 0.5,
            3,
            3.25,
            0.22,
            0.26,
          ));
      }
    };
  return {
    key: `moParkade`,
    name: `Civic Centre Parkade`,
    plain: 12236461,
    desc: `Precast multi-storey car park: open decks behind colour-coded spandrels, cable-guarded ground floor with barrier entries, glass stair core, external up-ramp, blue PARK blade and cars on every level.`,
    W: 36,
    D: 28,
    style: {
      wall: `moVoid`,
      t: 0.3,
      bay: 6,
      floors: [3.4, 3, 3, 3],
      parapet: 0,
    },
    front: {
      kinds: () => `solid`,
      extra: k(t({ core: !0, entries: [2, 3], sign: !0 }), n, r([2, 3])),
      signs: [
        {
          mat: `moSignParkade`,
          rect: [7.5, 34.5, 12.55, 13.3],
          z0: 0.06,
          z1: 0.09,
        },
      ],
    },
    right: {
      kinds: () => `solid`,
      extra: k(t({ gapAt: (e, t) => e === 1 && t === 4 }), (t, n, r) => {
        let i = 3.6,
          a = 1.2,
          o = r.L - 0.4,
          s = (r.ys[1] - 0.05) / (o - a),
          c = (e) => Math.max(0, (e - a) * s);
        for (let s = 0; s < r.nb; s++) {
          let l = Math.max(a, s * r.bw),
            u = Math.min(o, (s + 1) * r.bw);
          if (u <= l) continue;
          let d = Nr(r, (l + u) / 2, (c(l) + c(u)) / 2);
          (O(
            t,
            `moConcLight`,
            n,
            d,
            l,
            c(l) - 0.15,
            u,
            c(u) - 0.15,
            0.3,
            0.1,
            i,
          ),
            O(
              t,
              `moConcLight`,
              n,
              d,
              l,
              c(l) + 0.45,
              u,
              c(u) + 0.45,
              0.9,
              3.35,
              i,
            ),
            O(t, e[1], n, d, l, c(l) + 0.55, u, c(u) + 0.55, 0.18, i, 3.62));
          let f = u - 0.3;
          c(f) > 0.9 &&
            t.box(
              `moConcLight`,
              n,
              d,
              f - 0.25,
              f + 0.25,
              0,
              c(f) - 0.25,
              i / 2 - 0.25,
              2.05,
            );
        }
        t.box(
          `moSignRamp`,
          n,
          r.grid[0][0],
          0.2,
          2.6,
          0.8,
          1.7,
          3.5,
          3.5500000000000003,
          yr(0.2, 2.6, 0.8, 1.7),
        );
      }),
    },
    left: { kinds: () => `solid`, extra: t() },
    back: { kinds: () => `solid`, extra: k(t({ entries: [3] }), r([3])) },
    extra: (e, t, n) => {
      let r = vr(17),
        i = n.W,
        a = n.D,
        o = [0, 3.4, 6.4, 9.4];
      for (let n of o)
        e.box(
          `moDeck`,
          t,
          0,
          -i / 2 + 0.32,
          i / 2 - 0.32,
          n + 0.03,
          n + 0.07,
          -a / 2 + 0.32,
          a / 2 - 0.32,
        );
      (e.box(
        `moDeck`,
        t,
        0,
        -i / 2 + 0.32,
        i / 2 - 0.32,
        n.H + 0.02,
        n.H + 0.05,
        -a / 2 + 0.32,
        a / 2 - 0.32,
      ),
        o.forEach((n, o) => {
          for (let s = -i / 2 + 7.6; s < i / 2 - 1.5; s += 2.6)
            r() < 0.3 ||
              (o === 0 && Math.abs(s) < 6.5) ||
              Hr(
                e,
                t,
                0,
                s,
                n + 0.07,
                a / 2 - 3.1,
                Math.PI / 2 + (r() - 0.5) * 0.06,
                Ur[Math.floor(r() * Ur.length)],
              );
        }));
      for (let o of [a / 2 - 3.1, -a / 2 + 3.1, 3.1, -3.1])
        for (let a = -i / 2 + 7.6; a < i / 2 - 1.5; a += 2.6)
          r() < 0.55 ||
            Hr(
              e,
              t,
              0,
              a,
              n.H + 0.05,
              o,
              ((o > 0 ? 1 : -1) * Math.PI) / 2 + (r() - 0.5) * 0.06,
              Ur[Math.floor(r() * Ur.length)],
            );
      for (let [r, i] of [
        [-8, 0],
        [8, 0],
        [0, 9],
        [0, -9],
      ])
        (e.add(
          `moCharcoal`,
          new s(0.07, 0.1, 6, 8).translate(r, n.H + 3, i),
          t,
          0,
        ),
          e.box(
            `moCharcoal`,
            t,
            0,
            r - 0.6,
            r + 0.6,
            n.H + 6,
            n.H + 6.12,
            i - 0.2,
            i + 0.2,
          ),
          e.box(
            `moLed`,
            t,
            0,
            r - 0.55,
            r + 0.55,
            n.H + 5.97,
            n.H + 6,
            i - 0.15,
            i + 0.15,
          ));
    },
  };
}
