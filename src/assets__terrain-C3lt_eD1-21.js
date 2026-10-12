// assets__terrain-C3lt_eD1 21 — math
// Lines 7514-7749 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function Er(e, t = 1) {
  let n = e.leaves,
    r = e.wood,
    a = [],
    o = n.attributes.position,
    s = n.attributes.color,
    c = 0,
    u = 0;
  if (r) {
    let e = r.attributes.position;
    for (let t = 0; t < e.count; t++) {
      let n = e.getY(t);
      n > 0.6 && n < 1.4 && ((c += Math.hypot(e.getX(t), e.getZ(t))), u++);
    }
  }
  n.computeBoundingBox();
  let d = n.boundingBox,
    f = u ? Math.min(0.9, (c / u) * 0.8) : 0.25,
    p = d.min.y + (d.max.y - d.min.y) * 0.45,
    m = new l(f * 0.7, f, p, 5, 1, !0).toNonIndexed();
  m.translate(0, p / 2, 0);
  let h = new v(5917758);
  if (r) {
    let e = r.attributes.color,
      t = 0,
      n = 0,
      i = 0;
    for (let r = 0; r < e.count; r++)
      ((t += e.getX(r)), (n += e.getY(r)), (i += e.getZ(r)));
    h.setRGB(t / e.count, n / e.count, i / e.count);
  }
  a.push(Dr(m, () => h));
  let g = Math.max(1, Math.floor(o.count / 1500)),
    _ = [];
  for (let e = 0; e < o.count; e += g) _.push(e);
  let y = Array.from({ length: 4 }, (e, t) => {
      let n = _[Math.floor(((t + 0.5) / 4) * _.length)];
      return [o.getX(n), o.getY(n), o.getZ(n)];
    }),
    b = new Int32Array(_.length);
  for (let e = 0; e < 6; e++)
    (_.forEach((e, t) => {
      let n = 0,
        r = 1 / 0;
      (y.forEach((t, i) => {
        let a =
          (o.getX(e) - t[0]) ** 2 +
          (o.getY(e) - t[1]) ** 2 +
          (o.getZ(e) - t[2]) ** 2;
        a < r && ((r = a), (n = i));
      }),
        (b[t] = n));
    }),
      (y = y.map((e, t) => {
        let n = 0,
          r = 0,
          i = 0,
          a = 0;
        return (
          _.forEach((e, s) => {
            b[s] === t &&
              ((n += o.getX(e)), (r += o.getY(e)), (i += o.getZ(e)), a++);
          }),
          a ? [n / a, r / a, i / a] : e
        );
      })));
  y.forEach((e, t) => {
    let n = 0,
      r = 0,
      c = 0,
      l = 0,
      u = 0,
      d = 0,
      f = 0;
    if (
      (_.forEach((i, a) => {
        b[a] === t &&
          (n++,
          (r += (o.getX(i) - e[0]) ** 2),
          (c += (o.getY(i) - e[1]) ** 2),
          (l += (o.getZ(i) - e[2]) ** 2),
          (u += s.getX(i)),
          (d += s.getY(i)),
          (f += s.getZ(i)));
      }),
      n < 8)
    )
      return;
    let p = new O(1, 1);
    (p.scale(
      Math.sqrt(r / n) * 1.75,
      Math.sqrt(c / n) * 1.75,
      Math.sqrt(l / n) * 1.75,
    ),
      p.translate(e[0], e[1], e[2]));
    let m = new v(u / n, d / n, f / n).multiplyScalar(Cr),
      h = new v();
    a.push(
      Dr(p, (t) =>
        h
          .copy(m)
          .multiplyScalar(
            0.72 +
              0.4 * i.clamp((t - e[1]) / (Math.sqrt(c / n) * 3) + 0.5, 0, 1),
          ),
      ),
    );
  });
  let x = ie(
    a.map((e) => (e.deleteAttribute(`uv`), e)),
    !1,
  );
  for (let e of a) e.dispose();
  return (
    x.computeBoundingSphere(),
    x.computeBoundingBox(),
    { wood: x, leaves: null }
  );
}
function Dr(e, t) {
  let n = e.attributes.position,
    r = new Float32Array(n.count * 3);
  for (let e = 0; e < n.count; e++) {
    let i = t(n.getY(e));
    ((r[e * 3] = i.r), (r[e * 3 + 1] = i.g), (r[e * 3 + 2] = i.b));
  }
  return (e.setAttribute(`color`, new o(r, 3)), e);
}
function Or() {
  let e = (e, t, n, r) => {
    let i = t.map(([e, t, , r]) => {
      let i = Sr(e),
        a = [0, 1, 2].map((e) => ({ ...i.build(t, e), cat: !0 }));
      a[1].leaves &&
        Tr(a[2].wood) + Tr(a[2].leaves) > wr &&
        (a[2] = { ...Er(a[1], t), cat: !0 });
      let o = new m();
      for (let e of [a[0].wood, a[0].leaves])
        e && (e.computeBoundingBox(), o.union(e.boundingBox));
      let s = Math.max(-o.min.x, o.max.x, -o.min.z, o.max.z),
        c = Math.min((r ?? n[0]) / o.max.y, n[1] / s, 1.2);
      for (let t of a)
        for (let n of [t.wood, t.leaves])
          if (n) {
            for (let [t, r] of Object.entries(n.attributes))
              if (r.array.some((e) => !Number.isFinite(e)))
                throw Error(`tropical ${e}: non-finite ${t}`);
          }
      for (let e of a)
        for (let t of [e.wood, e.leaves])
          t &&
            (t.scale(c, c, c),
            t.computeBoundingSphere(),
            t.computeBoundingBox());
      return a;
    });
    return {
      name: e,
      near: i.map((e) => e[0]),
      mid: i.map((e) => e[1]),
      far: i.map((e) => e[2]),
      height: r,
      weights: { forest: t.map((e) => e[2]), town: t.map(() => 0) },
      litter: t.map(() => null),
    };
  };
  return [
    e(
      `upland`,
      [
        [`cecropia`, 7741, 0.35],
        [`royal`, 7742, 0.7],
        [`foxtail`, 7743, 0.7],
        [`sabal`, 7744, 0.8],
        [`monstera`, 7745, 0.6],
        [`rubber`, 7746, 0.4],
      ],
      [10.4, 4.2],
      10.2,
    ),
    e(
      `grove`,
      [
        [`mango`, 7751, 1],
        [`breadfruit`, 7752, 1],
        [`mahogany`, 7753, 0.6],
        [`teak`, 7754, 0.5],
        [`seagrape`, 7755, 0.7],
        [`frangipani`, 7756, 0.5],
        [`papaya`, 7757, 0.6],
        [`flame`, 7758, 0.12],
        [`cacao`, 7759, 0.4],
      ],
      [8.6, 5.2],
      8,
    ),
    e(
      `palm`,
      [
        [`coconut`, 7761, 1.4],
        [`coconut`, 7762, 1.4],
        [`coconut`, 7763, 1.2],
        [`date`, 7764, 0.5],
        [`oilpalm`, 7765, 0.5],
        [`royal`, 7766, 0.35],
        [`bismarck`, 7767, 0.3],
        [`fishtail`, 7768, 0.3],
        [`sabal`, 7769, 0.4],
      ],
      [10.3, 6],
      10.1,
    ),
    e(
      `under`,
      [
        [`banana`, 7771, 1, 3.6],
        [`heliconia`, 7772, 1],
        [`taro`, 7773, 1.1],
        [`birdpara`, 7774, 0.7],
        [`palmetto`, 7775, 1],
        [`sago`, 7776, 0.6],
        [`pygmy`, 7777, 0.5, 2.6],
        [`sprout`, 7778, 0.5],
        [`treefern`, 7779, 0.5, 3.4],
      ],
      [2.2, 3],
      2,
    ),
  ];
}
var kr = 240,
  Ar = 46,
  jr = 36e3,
  Mr = 7,
  Nr = 110,
  Pr = [0, 4, 2.3];
