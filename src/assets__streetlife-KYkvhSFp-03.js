// assets__streetlife-KYkvhSFp 03 — math
// Lines 405-756 of readable/assets__streetlife-KYkvhSFp.pretty.js (statement-aligned).
function _(e, t, n = 7) {
  let {
      rnd: r,
      chance: i,
      pick: u,
      range: d,
      H: m,
      clear: _,
      lampPost: v,
      shortPost: y,
      signal: b,
      car: x,
      shelter: S,
      quad: C,
      pool: w,
      smoke: T,
      box: E,
      boxAt: D,
      prop: O,
      sign: k,
      stringLights: A,
    } = g(e, t, n),
    j = [-102, 0, 102],
    M = [-140, 140];
  for (let e of j)
    for (let t = -132; t <= 132; t += 24)
      for (let n of [-1, 1]) {
        let r = t + (n > 0 ? 12 : 0),
          i = e + n * 8.9;
        Math.abs(Math.abs(r) - 140) < 9 ||
          (e === 0 && Math.abs(r) < 38) ||
          !_(r, i, 1) ||
          v(`lamp-a${e}-${r}-${n}`, r, i, [0, -n]);
      }
  for (let e of M)
    for (let t = -90; t <= 90; t += 24)
      if (!(Math.abs(t) < 9))
        for (let n of [-1, 1]) {
          let r = e + n * 8.9,
            i = t + (n > 0 ? 12 : 0);
          Math.abs(i) > 96 ||
            !_(r, i, 1) ||
            v(`lamp-c${e}-${i}-${n}`, r, i, [-n, 0]);
        }
  for (let e of M)
    for (let t of j)
      for (let [n, r] of [
        [-1, -1],
        [1, 1],
      ])
        b(`signal-${e}-${t}-${n}`, e + n * 7.4, t + r * 7.4, n, r);
  let N = 0;
  for (let e of j)
    for (let t = -128; t <= 128; t += 11) {
      if (!i(0.7)) continue;
      let n = i(0.5) ? -1 : 1,
        r = t + d(-3, 3),
        a = e + n * 4.2;
      Math.abs(Math.abs(r) - 140) < 12 ||
        (e === 0 && Math.abs(r) < 40) ||
        !_(r, a, 3.2) ||
        x(`car-${N++}`, r, a, !0, null, !1, i(0.12));
    }
  for (let e of M)
    for (let t = -84; t <= 84; t += 11) {
      if (Math.abs(t) < 10 || !i(0.65)) continue;
      let n = e + (i(0.5) ? -1 : 1) * 4.2,
        r = t + d(-3, 3);
      _(n, r, 3.2) && x(`car-${N++}`, n, r, !1, null, !1, i(0.12));
    }
  let P = 0;
  for (let [e, t] of [
    [-128, -96],
    [128, 96],
    [-128, 10],
    [128, -10],
  ]) {
    let n = Math.abs(t) >= 20;
    _(e, t, 3.2) && (m(e, t), x(`police-` + P, e, t, n, `car_police`), P++);
  }
  for (let t of e.urbanBuildings) {
    let { x: e, z: n, floors: i } = t,
      s = t.y,
      c = 3.2;
    t.mirror;
    for (let e = 0; e < 4; e++) r();
    for (let l = 0; l < i; l++) {
      let i = s + l * c,
        u = `${t.id}-f${l}`;
      for (let t of [-6.5, 0, 6.5])
        for (let r of [-4.5, 4.5])
          C(e + t, i + c - 0.24, n + r, 1.4, 0.6, l % 3 == 1 ? o : a, {
            rx: Math.PI / 2,
            gain: 0.95,
            group: u,
          });
      r();
    }
    if (i >= 3) {
      let a = s + i * c + 0.1;
      for (let [r, i, o, s] of [
        [-9, -7, 9, -7],
        [-9, 7, 9, 7],
        [-9, -7, -9, 7],
        [9, -7, 9, 7],
      ])
        A(
          `roof-string-${t.id}-${r}-${i}`,
          e + r,
          a + 2.4,
          n + i,
          e + o,
          a + 2.4,
          n + s,
          0.3,
        );
      for (let [i, o] of [
        [-9, -7],
        [9, -7],
        [-9, 7],
        [9, 7],
      ])
        O(
          `roof-pole-${t.id}-${i}-${o}`,
          `mh_parklight1`,
          e + i,
          n + o,
          r() * Math.PI * 2,
          { y: a - 0.1, scale: 1.15, solid: !1 },
        );
      (r(), r());
    }
  }
  let F = 0;
  for (let t of e.infill) {
    let e =
      j.find(
        (e) => Math.abs(Math.abs(t.z) - Math.abs(e)) < 24 && Math.abs(t.z) > 0,
      ) ?? (Math.abs(t.z) < 24 ? 0 : null);
    if (e == null) continue;
    let n = t.z > e ? -1 : 1,
      r = t.z + n * (t.d / 2 + 0.14),
      o = m(t.x, t.z),
      s = n > 0 ? 0 : Math.PI,
      d = u(p),
      h = Math.min(t.w - 2, Math.max(4, d.length * 1.1 + 1.5));
    k(
      `fascia-${t.id}`,
      d,
      t.x,
      o + 3.62,
      r + n * 0.02,
      s,
      h,
      0.8,
      u([a, 16765578, l, c, 16777215]),
      `fascia`,
      F % 3,
    );
    let g = F++ % 3;
    if (g === 0) {
      let e = Math.max(2.4, d.length * 0.62),
        a = t.x + (i(0.5) ? -1 : 1) * Math.min(t.w / 2 - 2, 4),
        c = o + 4.9 + (t.floors >= 3 && i(0.5) ? 3.2 : 0);
      (D(
        `blade-${t.id}-arm`,
        a,
        c - 0.05,
        r + n * 0.5,
        0.08,
        0.08,
        1,
        `metalDark`,
      ),
        k(
          `blade-${t.id}`,
          u(p),
          a,
          c,
          r + n * (e / 2 + 0.25),
          s + Math.PI / 2,
          e,
          0.9,
          u(f),
          `neon`,
          F % 3,
        ));
    } else if (g === 1) {
      let e = t.x + (i(0.5) ? -1 : 1) * Math.min(t.w / 2 - 2, 4);
      (O(
        `shopsign-${t.id}`,
        u([`mh_shopsign1`, `mh_shopsign2`, `mh_shopsign3`]),
        e,
        r + n * 0.6,
        n > 0 ? 0 : Math.PI,
        { y: o + 4.6, solid: !1 },
      ),
        O(
          `cafesign-${t.id}`,
          `mh_cafesign`,
          t.x - 2,
          r + n * 0.6,
          n > 0 ? 0 : Math.PI,
          { solid: !1 },
        ));
    }
  }
  for (let t of e.highrises.filter((e) => e.roof >= 88)) {
    let e = t.roof + 0.3,
      n = t.z < 0 ? 0 : Math.PI,
      r = t.z + (t.z < 0 ? 1 : -1) * (t.depth / 2 - 1);
    for (let n of [-5.4, 5.4])
      D(
        `roofsign-${t.x}-${t.z}-post${n}`,
        t.x + n,
        e,
        r,
        0.3,
        6.6,
        0.3,
        `metalDark`,
      );
    (D(
      `roofsign-${t.x}-${t.z}-frame`,
      t.x,
      e + 6.6,
      r,
      12.4,
      0.3,
      0.3,
      `metalDark`,
    ),
      k(
        `roof-${t.x}-${t.z}`,
        `PATIO`,
        t.x,
        e + 3.7,
        r + (t.z < 0 ? 0.25 : -0.25),
        n,
        11.4,
        4.6,
        s,
        `roof`,
      ));
  }
  let I = 0;
  for (let t of e.highrises) {
    let e = t.roof;
    O(`beacon-mast-${I}`, `mh_parklight1`, t.x, t.z, 0, {
      y: e,
      scale: 1.58,
      solid: !1,
    });
    for (let [n, r] of [
      [0, 0],
      [-t.width / 2 + 0.6, -t.depth / 2 + 0.6],
      [t.width / 2 - 0.6, -t.depth / 2 + 0.6],
      [-t.width / 2 + 0.6, t.depth / 2 - 0.6],
      [t.width / 2 - 0.6, t.depth / 2 - 0.6],
    ]) {
      let i = e + (n === 0 && r === 0 ? 3.3 : 0.35);
      for (let e of [0, Math.PI / 2])
        C(t.x + n, i + 0.22, t.z + r, 0.3, 0.34, s, {
          ry: e,
          gain: 4.5,
          mode: `beacon`,
          phase: I * 0.9,
        });
    }
    I++;
  }
  let L = 0;
  for (let e of j)
    for (let t = -126; t <= 126; t += 12)
      for (let n of [-1, 1]) {
        let a = t + n * 3,
          o = e + n * 9.3;
        if (Math.abs(Math.abs(a) - 140) < 10 || !_(a, o, 0.6)) continue;
        let s = L++ % 7,
          c = n > 0 ? 0 : Math.PI;
        s === 0
          ? O(
              `bin-` + L,
              u([
                `cp_trash_small`,
                `cp_trash_commercial`,
                `mh_bin1`,
                `mh_bin3`,
                `mh_bin4`,
              ]),
              a,
              o,
              c,
            )
          : s === 1
            ? O(`post-` + L, L % 3 == 1 ? `cp_postbox` : `cp_meter`, a, o, c)
            : s === 2
              ? O(`utility-` + L, i(0.5) ? `cp_meter` : `mh_post2`, a, o, c)
              : s === 3
                ? O(`hydrant-` + L, `cp_hydrant`, a, o, c)
                : s === 4
                  ? O(`cafe-${L}`, `mh_coffeetable`, a, o, c + r() * 0.3)
                  : s === 5
                    ? O(
                        `bench-` + L,
                        u([`cp_bench_long`, `cp_bench_short`, `mh_bench1`]),
                        a,
                        o,
                        c + Math.PI / 2,
                      )
                    : O(`manhole-` + L, `cp_manhole`, a + n * 2, o - n * 5, 0, {
                        solid: !1,
                      });
      }
  for (let [e, t] of [
    [-60, -114],
    [60, 114],
    [-100, -90],
    [100, 90],
    [-30, 12],
    [30, -12],
  ])
    _(e, t, 2) &&
      O(
        `sign-${e}-${t}`,
        u([`mh_roadsign`, `mh_stop`, `mh_post`]),
        e,
        t,
        r() * Math.PI * 2,
      );
  for (let [e, t, n] of [
    [-80, -113, !0],
    [80, 113, !0],
  ])
    _(e, t, 3.5) && S(`busstop-${e}`, e, t, n);
  for (let t of e.highrises.filter((e) => e.roof < 70).slice(0, 3))
    O(
      `billboard-${t.x}-${t.z}`,
      `mh_billboard`,
      t.x,
      t.z + (t.z < 0 ? 1 : -1) * (t.depth / 2 - 1.2),
      t.z < 0 ? 0 : Math.PI,
      { y: t.roof, solid: !1 },
    );
  for (let [e, t] of [
    [-20, -110],
    [20, 110],
  ])
    _(e, t, 1.2) &&
      O(`covered-${e}`, `car_coupe`, e, t, Math.PI / 2, { tint: u(h) });
  return e;
}
