// assets__meridian-skyline-EYiBRcN5 03 — color
// Lines 1443-1569 of readable/assets__meridian-skyline-EYiBRcN5.pretty.js (statement-aligned).
function ge(e, t, i, a, o) {
  let s = i.floor,
    c = s - 40,
    d = s + 16,
    f = t(new n(1, 1, 1)),
    p = new x(),
    m = t(new r({ color: 4861476, roughness: 0.7, metalness: 0.4 })),
    h = t(new r({ color: 3816767, roughness: 0.85, metalness: 0.2 })),
    g = t(new r({ color: 5591887, roughness: 0.95 })),
    v = t(
      new r({
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
    S = [],
    C = [a.x0, a.x0 + 7.5, a.x0 + 15, a.x0 + 22.5, a.x1],
    w = [a.z0, a.z0 + 9, a.z0 + 18, a.z0 + 27, a.z1];
  for (let e of C) for (let t of w) y.push([e, c, t, 0.5, d - c, 0.5]);
  for (let e = c; e <= d; e += 4.05) {
    for (let t of w)
      y.push([(a.x0 + a.x1) / 2, e - 0.45, t, a.x1 - a.x0, 0.45, 0.3]);
    for (let t of C)
      y.push([t, e - 0.45, (a.z0 + a.z1) / 2, 0.3, 0.45, a.z1 - a.z0]);
    e < d - 8 &&
      S.push([
        (a.x0 + a.x1) / 2,
        e - 0.05,
        (a.z0 + a.z1) / 2,
        a.x1 - a.x0,
        0.12,
        a.z1 - a.z0,
      ]);
  }
  let T = (t, n, r) => {
    let i = new b(f, n, t.length);
    return (
      t.forEach(([e, t, n, r, a, o], s) => {
        (p.makeScale(r, a, o).setPosition(e, t + a / 2, n),
          i.setMatrixAt(s, p));
      }),
      (i.instanceMatrix.needsUpdate = !0),
      (i.name = r),
      (i.castShadow = !0),
      e.add(i),
      i
    );
  };
  (T(y, m, `m34-site-steel`),
    T(S, h, `m34-site-decks`),
    T([[a.x0 + 13, c, -1.5, 11, d + 8 - c, 9]], g, `m34-site-core`),
    T(
      [
        [a.x0 - 0.1, d - 20, 0, 0.05, 20, a.z1 - a.z0],
        [(a.x0 + a.x1) / 2, d - 20, a.z0 - 0.1, a.x1 - a.x0, 20, 0.05],
        [(a.x0 + a.x1) / 2, d - 20, a.z1 + 0.1, a.x1 - a.x0, 20, 0.05],
      ],
      v,
      `m34-site-net`,
    ),
    T(
      [[a.x0 - 2.2, 0, 8, 2.4, d + 4, 2.4]],
      t(
        new r({
          color: 12883484,
          roughness: 0.6,
          metalness: 0.3,
          wireframe: !0,
        }),
      ),
      `m34-site-hoist`,
    ));
  let E = [],
    D = 0;
  for (let e = c + 4; e < d; e += 4.05, D++)
    for (let t = 0; t < 6; t++)
      (D * 3 + t) % 4 < 2 &&
        (E.push([a.x0 + 0.3, e + 2.6, a.z0 + 3 + t * 6]),
        E.push([a.x0 + 7.5 + t * 3.7, e + 2.6, a.z0 + 0.3]));
  let te = t(new n(0.5, 0.2, 0.5)),
    O = t(new l({ color: new u(16054527).multiplyScalar(2.2) })),
    k = new b(te, O, E.length);
  (E.forEach(([e, t, n], r) => {
    (p.makeTranslation(e, t, n), k.setMatrixAt(r, p));
  }),
    (k.instanceMatrix.needsUpdate = !0),
    e.add(k));
  let A = document.createElement(`canvas`);
  A.width = A.height = 64;
  let j = A.getContext(`2d`),
    M = j.createRadialGradient(32, 32, 0, 32, 32, 32);
  (M.addColorStop(0, `rgba(255,255,255,1)`),
    M.addColorStop(1, `rgba(0,0,0,0)`),
    (j.fillStyle = M),
    j.fillRect(0, 0, 64, 64));
  let ne = t(new ee(A)),
    N = t(new _(1, 1).rotateX(-Math.PI / 2)),
    re = t(
      new l({
        map: ne,
        color: new u(14673648).multiplyScalar(0.55),
        transparent: !0,
        blending: 2,
        depthWrite: !1,
      }),
    ),
    P = new b(N, re, E.length);
  (E.forEach(([e, t, n], r) => {
    (p
      .makeScale(9, 1, 9)
      .setPosition(
        e + (e < a.x0 + 1 ? 3 : 0),
        t - 2.5,
        n + (n < a.z0 + 1 ? 3 : 0),
      ),
      P.setMatrixAt(r, p));
  }),
    (P.instanceMatrix.needsUpdate = !0),
    (P.renderOrder = 3),
    e.add(P));
}
