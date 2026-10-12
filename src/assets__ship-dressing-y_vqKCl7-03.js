// assets__ship-dressing-y_vqKCl7 03 — quad
// Lines 559-897 of readable/assets__ship-dressing-y_vqKCl7.pretty.js (statement-aligned).
function q(e = `dry40`) {
  if (K.has(e)) return K.get(e);
  let t = ne(),
    n = e.endsWith(`20`) ? F.L20 : F.L40,
    r = F.W,
    i = F.H,
    a = n / 2,
    o = r / 2,
    s = 0.16,
    c = 0.14,
    l = (e) => (t) => {
      let r = (t + a) / n,
        i = n < 10 ? 0.25 + r * 0.5 : r;
      return e > 0 ? i : 1 - i;
    };
  for (let e of [-1, 1])
    G(t, {
      along: `x`,
      a0: -a + s,
      a1: a - s,
      y0: c,
      y1: i - c,
      plane: e * o,
      out: e,
      pitch: 0.278,
      depth: 0.036,
      k: `side`,
      uMap: l(e),
    });
  if (
    (e === `reefer40`
      ? (t.quad(
          [-a + 0.08, c, -o + s],
          [-a + 0.08, c, o - s],
          [-a + 0.08, i - c, o - s],
          [-a + 0.08, i - c, -o + s],
          [-1, 0, 0],
          `front`,
          [
            [1, 0],
            [0, 0],
            [0, 1],
            [1, 1],
          ],
        ),
        t.boxPart(-a + 0.2, 0.3, 0.55, 0.12, 0.5, 0.6, `galv`))
      : G(t, {
          along: `z`,
          a0: -o + s,
          a1: o - s,
          y0: c,
          y1: i - c,
          plane: -a,
          out: -1,
          pitch: 0.29,
          depth: 0.03,
          k: `front`,
          uMap: (e) => (e + o) / r,
        }),
    e !== `doorsOpen20`)
  ) {
    t.quad(
      [a - 0.02, c, o - s],
      [a - 0.02, c, -o + s],
      [a - 0.02, i - c, -o + s],
      [a - 0.02, i - c, o - s],
      [1, 0, 0],
      `door`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
    for (let e of [-0.86, -0.42, 0.42, 0.86]) {
      t.boxPart(a + 0.015, 0.2, e, 0.035, i - 2 * c - 0.12, 0.035, `galv`);
      for (let n of [0.16, i - c - 0.12])
        t.boxPart(a + 0.02, n, e, 0.06, 0.1, 0.09, `galv`);
      t.boxPart(
        a + 0.05,
        i * 0.42,
        e + (e > 0 ? -0.09 : 0.09),
        0.05,
        0.05,
        0.2,
        `galv`,
      );
    }
    for (let e of [-1, 1])
      for (let n of [0.45, 1.25, 2.05])
        t.boxPart(a + 0.01, n, e * (o - s - 0.03), 0.06, 0.16, 0.08, `galv`);
  } else {
    for (let e of [-1, 1]) {
      let n = a + 0.02,
        r = e * (o + 0.06);
      (t.quad(
        [n - 1.2, c, r],
        [n, c, r],
        [n, i - c, r],
        [n - 1.2, i - c, r],
        [0, 0, e],
        `door`,
        e > 0
          ? [
              [0.5, 0],
              [0, 0],
              [0, 1],
              [0.5, 1],
            ]
          : [
              [0.5, 0],
              [1, 0],
              [1, 1],
              [0.5, 1],
            ],
      ),
        t.quad(
          [n, c, r - e * 0.03],
          [n - 1.2, c, r - e * 0.03],
          [n - 1.2, i - c, r - e * 0.03],
          [n, i - c, r - e * 0.03],
          [0, 0, -e],
          `door`,
          [
            [0, 0],
            [0.5, 0],
            [0.5, 1],
            [0, 1],
          ],
        ));
      for (let a of [0.3, 0.75])
        t.boxPart(
          n - a,
          0.2,
          r + e * 0.03,
          0.035,
          i - 2 * c - 0.12,
          0.035,
          `galv`,
        );
    }
    t.quad(
      [-a + 0.05, 0.1, o - 0.05],
      [-a + 0.05, 0.1, -o + 0.05],
      [-a + 0.05, i - 0.05, -o + 0.05],
      [-a + 0.05, i - 0.05, o - 0.05],
      [1, 0, 0],
      `frame`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
    for (let e of [-1, 1])
      t.quad(
        [a, 0.1, e * (o - 0.05)],
        [-a, 0.1, e * (o - 0.05)],
        [-a, i - 0.05, e * (o - 0.05)],
        [a, i - 0.05, e * (o - 0.05)].map((e) => e),
        [0, 0, -e],
        `frame`,
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ],
      );
    t.quad(
      [-a, 0.12, o - 0.05],
      [a, 0.12, o - 0.05],
      [a, 0.12, -o + 0.05],
      [-a, 0.12, -o + 0.05],
      [0, 1, 0],
      `roof`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
  }
  if (e === `open40`) {
    let e = (e, t) =>
      i -
      0.05 +
      0.12 * Math.sin((e / 10) * Math.PI) * Math.sin((t / 3) * Math.PI) -
      0.05 * ((e % 2) ^ (t % 2));
    for (let i = 0; i < 10; i++)
      for (let s = 0; s < 3; s++) {
        let c = -a + (i / 10) * n,
          l = -a + ((i + 1) / 10) * n,
          u = -o + (s / 3) * r,
          d = -o + ((s + 1) / 3) * r;
        t.quad(
          [c, e(i, s + 1), d],
          [l, e(i + 1, s + 1), d],
          [l, e(i + 1, s), u],
          [c, e(i, s), u],
          [0, 1, 0],
          `tarp`,
          [
            [i / 10, (s + 1) / 3],
            [(i + 1) / 10, (s + 1) / 3],
            [(i + 1) / 10, s / 3],
            [i / 10, s / 3],
          ],
        );
      }
  } else
    t.quad(
      [-a + 0.05, i - 0.02, o - 0.05],
      [a - 0.05, i - 0.02, o - 0.05],
      [a - 0.05, i - 0.02, -o + 0.05],
      [-a + 0.05, i - 0.02, -o + 0.05],
      [0, 1, 0],
      `roof`,
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    );
  t.quad(
    [-a, 0.005, -o],
    [a, 0.005, -o],
    [a, 0.005, o],
    [-a, 0.005, o],
    [0, -1, 0],
    `frame`,
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  );
  for (let e of [-1, 1])
    for (let n of [-1, 1])
      t.boxPart(e * (a - s / 2), 0, n * (o - s / 2), s, i, s, `frame`);
  for (let e of [-1, 1])
    for (let r of [0, i - c])
      t.boxPart(0, r, e * (o - 0.05), n - 2 * s, c, 0.1, `frame`);
  for (let e of [-1, 1])
    for (let n of [0, i - c - 0.04])
      t.boxPart(
        e * (a - 0.06),
        n,
        0,
        0.12,
        0.18000000000000002,
        r - 2 * s,
        `frame`,
      );
  for (let e of [-1, 1])
    for (let n of [-1, 1])
      for (let r of [0, i - 0.12])
        t.boxPart(e * (a - 0.09), r, n * (o - 0.08), 0.18, 0.12, 0.165, `galv`);
  if (n < 10)
    for (let e of [-1, 1])
      for (let n of [-1.03, 1.03])
        t.quad(
          [n - 0.18, 0.02, e * (o + 0.002)],
          [n + 0.18, 0.02, e * (o + 0.002)],
          [n + 0.18, 0.12, e * (o + 0.002)],
          [n - 0.18, 0.12, e * (o + 0.002)],
          [0, 0, e],
          `frame`,
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
          ],
        );
  let u = t.geometry();
  return (K.set(e, u), u);
}
function re() {
  let e = new l({ map: W(), roughness: 0.62, metalness: 0.28 });
  return (
    (e.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute vec2 aLiv;`,
        )
        .replace(
          `#include <uv_vertex>`,
          `#include <uv_vertex>\n#ifdef USE_MAP\n vMapUv = (vec2(aLiv.x, 3.0 - aLiv.y) + vMapUv) * ${(1 / R).toFixed(4)};\n#endif`,
        );
    }),
    (e.customProgramCacheKey = () => `ship-container-v1`),
    e
  );
}
function ie(e, t = re()) {
  let n = new _();
  n.name = `ship-containers`;
  let r = new Map();
  for (let t of e) (r.has(t.kind) || r.set(t.kind, []), r.get(t.kind).push(t));
  let i = new a(),
    o = new f(),
    s = new C(),
    l = new C(1, 1, 1),
    u = new C(0, 1, 0),
    d = new c();
  for (let [e, a] of r) {
    let r = q(e).clone(),
      c = new Float32Array(a.length * 2);
    (a.forEach((e, t) => {
      ((c[t * 2] = e.liv % R), (c[t * 2 + 1] = Math.floor(e.liv / R)));
    }),
      r.setAttribute(`aLiv`, new v(c, 2)));
    let f = new h(r, t, a.length);
    ((f.name = `ship-containers-${e}`),
      a.forEach((e, t) => {
        (o.setFromAxisAngle(u, e.ry ?? 0),
          s.set(e.x, e.y, e.z),
          i.compose(s, o, l),
          f.setMatrixAt(t, i));
        let n = k(Math.floor(e.x * 31 + e.z * 977 + e.y * 13))();
        f.setColorAt(t, d.setScalar(0.82 + n * 0.22));
      }),
      (f.instanceMatrix.needsUpdate = !0),
      (f.instanceColor.needsUpdate = !0),
      (f.castShadow = !1),
      (f.receiveShadow = !0),
      f.computeBoundingSphere(),
      n.add(f));
  }
  return n;
}
