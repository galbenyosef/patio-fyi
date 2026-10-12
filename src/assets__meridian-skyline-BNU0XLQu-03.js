// assets__meridian-skyline-BNU0XLQu 03 — color
// Lines 1443-1569 of readable/assets__meridian-skyline-BNU0XLQu.pretty.js (statement-aligned).
function ve(e, n, r, i, a) {
  let c = r.floor,
    d = c - 40,
    f = c + 16,
    m = n(new t(1, 1, 1)),
    g = new o(),
    _ = n(new u({ color: 4861476, roughness: 0.7, metalness: 0.4 })),
    v = n(new u({ color: 3816767, roughness: 0.85, metalness: 0.2 })),
    ee = n(new u({ color: 5591887, roughness: 0.95 })),
    te = n(
      new u({
        color: 8012824,
        emissive: 1707012,
        roughness: 1,
        transparent: !0,
        opacity: 0.32,
        side: 2,
        depthWrite: !1,
      }),
    ),
    y = [],
    b = [],
    x = [i.x0, i.x0 + 7.5, i.x0 + 15, i.x0 + 22.5, i.x1],
    S = [i.z0, i.z0 + 9, i.z0 + 18, i.z0 + 27, i.z1];
  for (let e of x) for (let t of S) y.push([e, d, t, 0.5, f - d, 0.5]);
  for (let e = d; e <= f; e += 4.05) {
    for (let t of S)
      y.push([(i.x0 + i.x1) / 2, e - 0.45, t, i.x1 - i.x0, 0.45, 0.3]);
    for (let t of x)
      y.push([t, e - 0.45, (i.z0 + i.z1) / 2, 0.3, 0.45, i.z1 - i.z0]);
    e < f - 8 &&
      b.push([
        (i.x0 + i.x1) / 2,
        e - 0.05,
        (i.z0 + i.z1) / 2,
        i.x1 - i.x0,
        0.12,
        i.z1 - i.z0,
      ]);
  }
  let C = (t, n, r) => {
    let i = new h(m, n, t.length);
    return (
      t.forEach(([e, t, n, r, a, o], s) => {
        (g.makeScale(r, a, o).setPosition(e, t + a / 2, n),
          i.setMatrixAt(s, g));
      }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.name = r),
      (i.castShadow = !0),
      e.add(i),
      i
    );
  };
  (C(y, _, `m34-site-steel`),
    C(b, v, `m34-site-decks`),
    C([[i.x0 + 13, d, -1.5, 11, f + 8 - d, 9]], ee, `m34-site-core`),
    C(
      [
        [i.x0 - 0.1, f - 20, 0, 0.05, 20, i.z1 - i.z0],
        [(i.x0 + i.x1) / 2, f - 20, i.z0 - 0.1, i.x1 - i.x0, 20, 0.05],
        [(i.x0 + i.x1) / 2, f - 20, i.z1 + 0.1, i.x1 - i.x0, 20, 0.05],
      ],
      te,
      `m34-site-net`,
    ),
    C(
      [[i.x0 - 2.2, 0, 8, 2.4, f + 4, 2.4]],
      n(
        new u({
          color: 12883484,
          roughness: 0.6,
          metalness: 0.3,
          wireframe: !0,
        }),
      ),
      `m34-site-hoist`,
    ));
  let w = [],
    T = 0;
  for (let e = d + 4; e < f; e += 4.05, T++)
    for (let t = 0; t < 6; t++)
      (T * 3 + t) % 4 < 2 &&
        (w.push([i.x0 + 0.3, e + 2.6, i.z0 + 3 + t * 6]),
        w.push([i.x0 + 7.5 + t * 3.7, e + 2.6, i.z0 + 0.3]));
  let re = n(new t(0.5, 0.2, 0.5)),
    E = n(new ne({ color: new l(16054527).multiplyScalar(2.2) })),
    D = new h(re, E, w.length);
  (w.forEach(([e, t, n], r) => {
    (g.makeTranslation(e, t, n), D.setMatrixAt(r, g));
  }),
    (D.instanceMatrix.needsUpdate = !0),
    e.add(D));
  let O = document.createElement(`canvas`);
  O.width = O.height = 64;
  let k = O.getContext(`2d`),
    A = k.createRadialGradient(32, 32, 0, 32, 32, 32);
  (A.addColorStop(0, `rgba(255,255,255,1)`),
    A.addColorStop(1, `rgba(0,0,0,0)`),
    (k.fillStyle = A),
    k.fillRect(0, 0, 64, 64));
  let ie = n(new s(O)),
    j = n(new p(1, 1).rotateX(-Math.PI / 2)),
    ae = n(
      new ne({
        map: ie,
        color: new l(14673648).multiplyScalar(0.55),
        transparent: !0,
        blending: 2,
        depthWrite: !1,
      }),
    ),
    M = new h(j, ae, w.length);
  (w.forEach(([e, t, n], r) => {
    (g
      .makeScale(9, 1, 9)
      .setPosition(
        e + (e < i.x0 + 1 ? 3 : 0),
        t - 2.5,
        n + (n < i.z0 + 1 ? 3 : 0),
      ),
      M.setMatrixAt(r, g));
  }),
    (M.instanceMatrix.needsUpdate = !0),
    (M.renderOrder = 3),
    e.add(M));
}
