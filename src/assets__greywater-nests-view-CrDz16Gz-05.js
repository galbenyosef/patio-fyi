// assets__greywater-nests-view-CrDz16Gz 05 — deco
// Lines 1420-1652 of readable/assets__greywater-nests-view-CrDz16Gz.pretty.js (statement-aligned).
function ue() {
  let e = H(),
    t = I(13220256, { amount: 0.1, seed: 22 }),
    n = k(3817282, 0.5, 0.7),
    r = k(2961716, 0.6, 0.6);
  (e.solid(10, 7, 8, t, 0, 0, 0, { tile: 2 }),
    e.deco(8.6, 2.6, 0.06, j(4019552, 0.7), 0, 0.4, 4.01),
    e.deco(9.4, 0.7, 0.12, k(3103302, 0.5), 0, 3.05, 4.05),
    e.sheet(
      [
        [-4.6, 3, 4.1],
        [4.6, 3, 4.1],
        [4.6, 2.4, 5.4],
        [-4.6, 2.4, 5.4],
      ],
      V(11024946),
      { sag: 0.05 },
    ));
  for (let n of [-3, 0, 3]) Y(e, `x`, 4, 1, n, 4.3, 1.3, 1.5, t);
  for (let n of [-2, 1.5]) Y(e, `z`, 5, 1, n, 4.3, 1.3, 1.5, t);
  (e.deco(10.3, 0.25, 8.3, k(11773068, 0.8), 0, 6.75, 0),
    e.wall(`x`, 3.875, -5, 5, 7, 7.6, 0.25, t, [], { material: `concrete` }),
    e.wall(`x`, -3.875, -5, 5, 7, 7.6, 0.25, t, [[2.6, 3.4, 7, 7.6]], {
      material: `concrete`,
    }),
    e.wall(`z`, 4.875, -3.75, 3.75, 7, 7.6, 0.25, t, [], {
      material: `concrete`,
    }),
    e.wall(`z`, -4.875, -3.75, 3.75, 7, 7.6, 0.25, t, [], {
      material: `concrete`,
    }),
    e.ladder(3, -4.3, 0, 7, 0, n, { cage: !0 }),
    e.solid(1.6, 1, 1.2, k(10265251, 0.5, 0.5), -3.2, 7, -2.5),
    e.cyl(0.15, 0.15, 1.2, n, -1.8, 7, -3.1));
  for (let t of [-4, 0, 4])
    e.solid(0.3, 7.2, 0.3, n, t, 7, -1.2, { surface: `metal` });
  for (let t of [-4, 0, 4])
    for (let r of [-1, 1])
      e.strut([t, 7.1, -1.2 + r * 1.6], [t, 11, -1.2], 0.05, n);
  let i = E
      ? (() => {
          let e = document.createElement(`canvas`);
          ((e.width = 1024), (e.height = 342));
          let t = e.getContext(`2d`),
            n = t.createLinearGradient(0, 0, 0, 342);
          (n.addColorStop(0, `#2a7fc0`),
            n.addColorStop(1, `#ffd38a`),
            (t.fillStyle = n),
            t.fillRect(0, 0, 1024, 342),
            (t.fillStyle = `#ffdf6b`),
            t.beginPath(),
            t.arc(760, 150, 70, 0, 7),
            t.fill(),
            (t.fillStyle = `#1f5e8a`),
            t.fillRect(0, 230, 1024, 112),
            (t.fillStyle = `#e9d6a6`),
            t.beginPath(),
            t.moveTo(0, 342),
            t.quadraticCurveTo(400, 250, 1024, 300),
            t.lineTo(1024, 342),
            t.fill(),
            (t.fillStyle = `#ffffff`),
            t.fillRect(60, 60, 380, 46),
            t.fillRect(60, 124, 260, 28),
            (t.fillStyle = `#d23a2c`),
            t.fillRect(60, 180, 160, 50));
          let r = new b(e);
          return (
            (r.colorSpace = p),
            (r.wrapS = r.wrapT = _),
            r.repeat.set(1, 3),
            r.offset.set(0.5, 0.5),
            r
          );
        })()
      : null,
    o = new a({ map: i, color: 16777215, roughness: 0.7 });
  for (let t of [-4, 0, 4])
    e.panel(4, 4, 0.1, o, t, 10, -0.85, { material: `metal`, tile: 12 });
  (e.deco(12.3, 0.15, 0.25, n, 0, 14, -0.85),
    e.deco(12.3, 0.15, 0.25, n, 0, 9.85, -0.85));
  for (let t = -6; t < 6; t += 2)
    e.strut([t, 10, -1], [t + 2, 14, -1], 0.04, n);
  e.solid(12, 0.2, 1.1, r, 0, 9.4, -0.2, { surface: `metal` });
  for (let t of [-4, 0, 4]) e.strut([t, 8.2, -1.05], [t, 9.4, 0.3], 0.05, n);
  (e.rail(-6, 0.35, 4.1, 0.35, 9.6, n),
    e.rail(4.9, 0.35, 6, 0.35, 9.6, n),
    e.rail(-6, -0.75, -6, 0.35, 9.6, n),
    e.rail(6, -0.75, 6, 0.35, 9.6, n));
  for (let t of [-4.5, -1.5, 1.5, 4.5])
    (e.strut([t, 9.6, 0.35], [t, 10.2, 1], 0.03, n),
      e.deco(0.4, 0.25, 0.3, k(2763306, 0.5, 0.5), t, 10.1, 1.05),
      e.deco(0.34, 0.03, 0.24, A(16773584, 3), t, 10.36, 1));
  return (
    e.ladder(4.5, 0.75, 7, 9.6, Math.PI, n),
    e.deco(0.45, 0.32, 0.25, k(2833706, 0.8), -5.3, 9.6, -0.4),
    e.deco(0.35, 0.25, 0.18, k(4015664, 0.7), 5.4, 7, 3.2),
    (e.g.userData.stairs = !1),
    e.perch(-2, 9.6, 0, 0, `prone`),
    e.perch(2, 9.6, 0, 0, `crouch`),
    e.perch(-2, 7, 3.3, 0, `crouch`),
    e.perch(4.3, 7, 0.5, Math.PI / 2, `crouch`),
    e.finish({ name: `billboard` })
  );
}
function de() {
  let e = H(),
    t = K(),
    n = I(14208948, { amount: 0.06, seed: 31 }),
    r = k(3033654, 0.6),
    i = L(6112304, { boards: 4, seed: 4 }),
    a = I(4212300, { amount: 0.1, seed: 12 }),
    o = 3.6;
  e.solid(10, 3.4, 4, t, 0, 0, 0, { tile: 2 });
  for (let n of [-3.2, 0, 3.2])
    (e.deco(1.1, 1.3, 0.05, q(), n, 1, 2.01),
      e.deco(1.1, 1.1, 0.05, t, n, 2.3, 2.01, {
        geo: new v(0.62, 0.62, 0.05, 16, 1, !1, 0, Math.PI)
          .rotateX(Math.PI / 2)
          .rotateZ(Math.PI / 2),
      }));
  (e.deco(1, 2, 0.05, r, 4, 0, 2.01),
    e.solid(10.4, 0.2, 4.4, i, 0, 3.4, 0, { surface: `wood`, tile: 2 }),
    e.wall(
      `x`,
      2.1,
      -5.2,
      5.2,
      o,
      6.4,
      0.15,
      n,
      [
        [-2.6, 4.9, 4.6, 6],
        [-3.8, -2.9, o, 5.7],
      ],
      { material: `timber` },
    ),
    e.wall(
      `x`,
      -2.1,
      -5.2,
      5.2,
      o,
      6.4,
      0.15,
      n,
      [
        [-3.5, -1.5, 4.7, 5.9],
        [1.5, 3.5, 4.7, 5.9],
      ],
      { material: `timber` },
    ),
    e.wall(`z`, 5.125, -2.025, 2.025, o, 6.4, 0.15, n, [[-1.5, 1.5, 4.6, 6]], {
      material: `timber`,
    }),
    e.wall(`z`, -5.125, -2.025, 2.025, o, 6.4, 0.15, n, [[-1, 1, 4.6, 6]], {
      material: `timber`,
    }));
  for (let [t, n] of [
    [-2.6, 0.9],
    [0.9, 4.9],
  ])
    e.panel(n - t, 1.4, 0.04, j(7178384, 0.35), (t + n) / 2, 4.6, 2.1, {
      material: `glass`,
    });
  e.panel(3, 1.4, 0.04, j(7178384, 0.35), 5.125, 4.6, 0, {
    ry: Math.PI / 2,
    material: `glass`,
  });
  for (let t = -2.6; t <= 4.95; t += 0.75)
    e.deco(0.06, 1.4, 0.08, r, t, 4.6, 2.13);
  (e.deco(10.5, 0.25, 4.5, r, 0, 6.35, 0),
    e.deco(1, 1.6, 1, a, 0, 6.6, 0, {
      geo: new v(1, 4.2, 1.6, 4, 1).rotateY(Math.PI / 4).scale(1.95, 1, 0.9),
    }),
    e.collider([-5.4, 6.4, -2.4, 5.4, 6.6, 2.4], `wood`),
    e.cyl(0.1, 0.1, 1.6, k(2236962, 0.6, 0.5), -3.8, 6.800000000000001, -1.2),
    e.stair(0.9, 3, 2.75, 0, o, `-x`, i, {
      railMat: r,
      surface: `wood`,
      railSides: [1],
    }),
    e.solid(2.6, 0.2, 1, i, -3.16, 3.4, 2.75, { surface: `wood` }),
    e.rail(-4.46, 3.25, -1.86, 3.25, o, r, { surface: `wood` }),
    e.rail(-4.46, 2.25, -4.46, 3.25, o, r, { surface: `wood` }));
  for (let t of [-4.4, -1.9]) e.strut([t, 0, 3.2], [t, o, 3.2], 0.06, i);
  (e.deco(8, 0.35, 0.5, k(2829099, 0.6, 0.5), 0, o, -1.6),
    [
      11740191, 11740191, 2047882, 14267678, 1118481, 11740191, 11740191,
      2047882, 11740191, 14267678, 11740191, 1118481, 11740191, 2047882,
      11740191, 11740191,
    ].forEach((t, n) =>
      e.strut(
        [-3.75 + n * 0.5, 3.95, -1.6],
        [-3.75 + n * 0.5, 5.05, -1.45 + (n % 3 ? 0 : 0.35)],
        0.025,
        k(t, 0.4, 0.6),
      ),
    ),
    e.deco(8, 0.06, 0.35, i, 0, 5.5, -1.85));
  for (let t = 0; t < 6; t++)
    e.deco(
      0.3,
      0.45,
      0.25,
      k(5913122, 0.4),
      -3 + t * 1.2,
      5.5600000000000005,
      -1.85,
    );
  (e.deco(1, 0.75, 0.6, i, 4.3, o, 0.9),
    e.deco(0.32, 0.03, 0.24, k(15525590, 0.8), 4.2, 4.35, 0.9),
    e.cyl(0.25, 0.25, 0.7, k(2039583, 0.5, 0.6), -4.4, o, -1.2),
    e.cyl(0.08, 0.1, 0.18, k(10133408, 0.3, 0.8), -4.4, 4.3, -1.2),
    e.deco(0.4, 0.45, 0.4, i, 3.4, o, 0.9));
  let s = k(7236196, 0.4, 0.8),
    c = k(3812900, 0.9),
    l = I(9077366, { amount: 0.2, seed: 40 });
  for (let t of [5.5, 9]) {
    e.deco(16, 0.2, 2.8, l, 0, 0, t, { tile: 2 });
    for (let n = -7.7; n < 8; n += 0.65) e.deco(0.24, 0.12, 2.5, c, n, 0.15, t);
    for (let n of [-0.72, 0.72]) e.deco(16, 0.14, 0.07, s, 0, 0.27, t + n);
  }
  return (
    e.strut([-7, 0, 7.4], [-7, 6, 7.4], 0.08, k(14210248, 0.6)),
    e.deco(1.2, 0.22, 0.05, k(11740191, 0.5), -6.4, 5.2, 7.45, { ry: 0 }),
    e.perch(0, o, 1.6, 0, `stand`),
    e.perch(3, o, 1.6, 0, `stand`),
    e.perch(4.6, o, 0, Math.PI / 2, `stand`),
    e.finish({ name: `signalbox` })
  );
}
