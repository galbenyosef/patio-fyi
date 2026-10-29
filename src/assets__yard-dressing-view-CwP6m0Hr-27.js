// assets__yard-dressing-view-CwP6m0Hr 27 — fillrect
// Lines 7876-7946 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
var gi = (e) =>
    je(
      `agwall` + e,
      (t, n, r) => {
        let i = U(40 + e);
        if (
          ((t.fillStyle = [
            `#e8e6e0`,
            `#8a8e92`,
            `#6a5a48`,
            `#3a4a5a`,
            `#b8a888`,
          ][e]),
          t.fillRect(0, 0, n, r),
          e === 2)
        )
          for (let e = 0; e < 16; e++) {
            ((t.fillStyle = `rgba(40,25,15,${0.15 + i() * 0.2})`),
              t.fillRect((e * n) / 16, 0, 2, r));
            for (let a = 0; a < 30; a++)
              ((t.fillStyle = `rgba(30,20,10,0.12)`),
                t.fillRect(
                  (e * n) / 16 + (i() * n) / 16,
                  i() * r,
                  1,
                  20 + i() * 40,
                ));
          }
        else if (e === 4)
          for (let e = 0; e < 300; e++)
            ((t.fillStyle = `rgba(${i() < 0.5 ? `90,70,50` : `220,210,190`},0.35)`),
              t.fillRect(i() * n, i() * r, 10 + i() * 30, 6 + i() * 14));
        else
          for (let e = 0; e < 32; e++)
            ((t.fillStyle = `rgba(0,0,0,0.12)`),
              t.fillRect((e * n) / 32, 0, 3, r),
              (t.fillStyle = `rgba(255,255,255,0.12)`),
              t.fillRect((e * n) / 32 + 4, 0, 2, r));
      },
      { rough: 0.55, metal: 0.2, extra: { side: Tr } },
    ),
  _i = (e) =>
    je(
      `liner` + e,
      (t, n, r) => {
        let i = U(50 + e),
          a = [`#3a8ac8`, `#2a70b0`, `#4a9ab8`][e],
          o = [`#6ab0e0`, `#4a90d0`, `#7ac0d0`][e];
        ((t.fillStyle = a), t.fillRect(0, 0, n, r));
        for (let e = 0; e < 400; e++) {
          ((t.strokeStyle = o),
            (t.globalAlpha = 0.25 + i() * 0.3),
            (t.lineWidth = 2 + i() * 4),
            t.beginPath());
          let e = i() * n,
            a = i() * r;
          (t.moveTo(e, a),
            t.bezierCurveTo(
              e + i() * 40,
              a + i() * 40,
              e - i() * 40,
              a + i() * 40,
              e + i() * 30,
              a + 60 * i(),
            ),
            t.stroke());
        }
        t.globalAlpha = 1;
      },
      { rough: 0.45, extra: { side: Tr } },
    );
