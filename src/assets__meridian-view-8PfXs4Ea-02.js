// assets__meridian-view-8PfXs4Ea 02 — math
// Lines 90-410 of readable/assets__meridian-view-8PfXs4Ea.pretty.js (statement-aligned).
function le(e, t, n) {
  let r = n.decor ?? [];
  if (!r.length) return null;
  let i = performance.now(),
    a = new Map(),
    l = new Map(),
    d = (e) => e.k + `:` + e.s + (e.o ? `:` + JSON.stringify(e.o) : ``),
    f = (e) =>
      !!e.emissiveMap ||
      (e.emissiveIntensity >= 0.3 &&
        e.emissive &&
        e.emissive.r + e.emissive.g + e.emissive.b > 0.05),
    p = new Map();
  for (let t of r) {
    let n = d(t);
    if (a.has(n)) continue;
    let r;
    try {
      r = E(t.k, t.s, t.o);
    } catch (t) {
      (e.warn?.(`meridian decor ${n}: ${t.message}`), a.set(n, []));
      continue;
    }
    r.updateMatrixWorld(!0);
    let i = [],
      o = new Map(),
      s = /^exit/.test(t.k);
    (r.traverse((e) => {
      if (!e.isMesh || !e.visible) return;
      let t = (Array.isArray(e.material) ? e.material : [e.material])[0];
      if (t.alphaMap) return;
      if (s && f(t)) {
        let n = e.geometry.clone();
        (n.applyMatrix4(e.matrixWorld),
          (o.get(t) ?? o.set(t, []).get(t)).push(n));
        return;
      }
      let n = se(t),
        r = B(e.geometry);
      if (
        (r.applyMatrix4(e.matrixWorld),
        ce(r, t.color, n === `glass` ? t.opacity : 1),
        n === `tex`)
      ) {
        let e = t.map;
        if (!p.has(e)) {
          r.computeBoundingBox();
          let t = r.boundingBox.getSize(new C()),
            n = Math.max(t.x, t.y, t.z);
          p.set(e, {
            img: e.image,
            repeat: [e.repeat.x, e.repeat.y],
            want: Math.max(R, Math.min(oe, n * L)),
          });
        }
        i.push({ cls: n, geo: r, tex: e });
      } else i.push({ cls: n, geo: r });
    }),
      a.set(n, i),
      o.size &&
        l.set(
          n,
          [...o].map(([e, t]) => {
            let n = t.length > 1 ? x(t.map(B), !1) : t[0];
            return (
              t.length > 1 && t.forEach((e) => e.dispose()),
              { mat: e, geo: n }
            );
          }),
        ),
      r.traverse((e) => {
        e.isMesh && e.geometry.dispose();
      }));
  }
  let h = [...p.values()],
    g = 1;
  {
    let e = h.reduce((e, t) => {
      let n = t.img.width / t.img.height,
        r = n >= 1 ? t.want : t.want * n,
        i = n >= 1 ? t.want / n : t.want;
      return e + (r + 8) * (i + 8);
    }, 0);
    e > F * F * 0.82 && (g = Math.sqrt((F * F * 0.82) / e));
  }
  let ee = (e) => {
      let t = 0,
        n = 0,
        r = 0,
        i = [];
      for (let a of [...h].sort((e, t) => t.want - e.want)) {
        let o = a.img.width / a.img.height,
          s = Math.max(8, Math.round((o >= 1 ? a.want : a.want * o) * e)),
          c = Math.max(8, Math.round((o >= 1 ? a.want / o : a.want) * e));
        if ((t + s + 8 > F && ((t = 0), (n += r), (r = 0)), n + c + 8 > F))
          return null;
        (i.push([a, t + I, n + I, s, c]),
          (t += s + 8),
          (r = Math.max(r, c + 8)));
      }
      return i;
    },
    te = null;
  for (let e = 0; e < 8 && !(te = ee(g)); e++) g *= 0.9;
  let ne = document.createElement(`canvas`);
  ne.width = ne.height = F;
  let S = ne.getContext(`2d`);
  ((S.fillStyle = `#808080`), S.fillRect(0, 0, F, F));
  for (let [e, t, n, r, i] of te ?? []) {
    let a = (t, n, r, i) => {
      if (e.repeat[0] === 1 && e.repeat[1] === 1) {
        S.drawImage(e.img, t, n, r, i);
        return;
      }
      let a = r / e.repeat[0],
        o = i / e.repeat[1];
      for (let r = 0; r < Math.ceil(e.repeat[0]); r++)
        for (let i = 0; i < Math.ceil(e.repeat[1]); i++)
          S.drawImage(e.img, t + r * a, n + i * o, a, o);
    };
    (S.save(),
      S.beginPath(),
      S.rect(t - I, n - I, r + 8, i + 8),
      S.clip(),
      a(t - I, n - I, r + 8, i + 8),
      S.restore(),
      a(t, n, r, i),
      (e.rect = [
        (t + 0.5) / F,
        1 - (n + i - 0.5) / F,
        (r - 1) / F,
        (i - 1) / F,
      ]));
  }
  let w = new s(ne);
  ((w.colorSpace = b),
    (w.anisotropy = 8),
    (w.generateMipmaps = !0),
    (w.minFilter = v));
  for (let e of a.values())
    for (let t of e) {
      if (t.cls !== `tex`) continue;
      let e = p.get(t.tex).rect;
      if (!e) {
        t.cls = `matte`;
        continue;
      }
      let n = t.geo.attributes.uv;
      for (let t = 0; t < n.count; t++) {
        let r = Math.min(1, Math.max(0, n.getX(t))),
          i = Math.min(1, Math.max(0, n.getY(t)));
        n.setXY(t, e[0] + r * e[2], e[1] + i * e[3]);
      }
      delete t.tex;
    }
  let T = new Map(),
    D = new o(),
    re = new m(),
    ie = new C(0, 1, 0),
    O = new C(1, 1, 1),
    k = new C(),
    A = new C(),
    j = 0,
    M = new Map();
  for (let e of r) {
    let t = d(e),
      n = a.get(t);
    if (!n?.length && !l.has(t)) continue;
    (j++,
      D.compose(
        A.set(e.x, e.y, e.z),
        re.setFromAxisAngle(ie, e.r ?? 0),
        e.sc ? k.setScalar(e.sc) : O,
      ));
    let r = e.g ? `g:` + e.g : z(e.x, e.z);
    l.has(t) && (M.get(t) ?? M.set(t, []).get(t)).push(D.clone());
    for (let e of n) {
      let t = e.cls + `|` + r,
        n = T.get(t);
      n || ((n = []), T.set(t, n));
      let i = e.geo.clone();
      (i.applyMatrix4(D), n.push(i));
    }
  }
  let ae = e.modules?.get?.(`environment`),
    N = {
      matte: new u({ vertexColors: !0, roughness: 0.82, metalness: 0 }),
      shiny: new u({ vertexColors: !0, roughness: 0.32, metalness: 0.75 }),
      double: new u({
        vertexColors: !0,
        roughness: 0.7,
        metalness: 0,
        side: 2,
      }),
      tex: new u({ vertexColors: !0, map: w, roughness: 0.6, metalness: 0 }),
      glass: new u({
        vertexColors: !0,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.08,
        metalness: 0.1,
      }),
    };
  for (let e of Object.values(N)) ae?.configureCaster?.(e);
  let P = new y();
  ((P.name = `m34-decor`), t.add(P));
  let le = [],
    ue = 0,
    de = new Map();
  for (let e of r) {
    if (!e.g) continue;
    let t = de.get(e.g);
    (t ||
      ((t = { node: new y(), x0: 1e9, z0: 1e9, x1: -1e9, z1: -1e9 }),
      (t.node.name = `m34-decor-` + e.g),
      P.add(t.node),
      de.set(e.g, t)),
      (t.x0 = Math.min(t.x0, e.x)),
      (t.x1 = Math.max(t.x1, e.x)),
      (t.z0 = Math.min(t.z0, e.z)),
      (t.z1 = Math.max(t.z1, e.z)));
  }
  for (let e of de.values())
    ((e.cx = (e.x0 + e.x1) / 2),
      (e.cz = (e.z0 + e.z1) / 2),
      (e.r = Math.hypot(e.x1 - e.x0, e.z1 - e.z0) / 2));
  for (let [e, t] of T) {
    let [n] = e.split(`|`),
      r = x(t, !1);
    if ((t.forEach((e) => e.dispose()), !r)) continue;
    (r.computeBoundingSphere(),
      le.push(r),
      (ue += r.attributes.position.count / 3));
    let i = new c(r, N[n]);
    ((i.name = `m34-decor-${e}`),
      (i.castShadow = n === `matte` || n === `shiny`),
      (i.receiveShadow = n !== `glass`));
    let a = e.split(`|`)[1];
    (a.startsWith(`g:`) ? de.get(a.slice(2)).node : P).add(i);
  }
  let fe = new y();
  ((fe.name = `m34-decor-lit`), P.add(fe));
  let V = 0;
  for (let [e, t] of l) {
    let n = M.get(e);
    if (n)
      for (let { mat: r, geo: i } of t) {
        let t = new _(i, r, n.length);
        (n.forEach((e, n) => t.setMatrixAt(n, e)),
          (t.instanceMatrix.needsUpdate = !0),
          t.computeBoundingSphere
            ? t.computeBoundingSphere()
            : (t.frustumCulled = !1),
          (t.name = `m34-decor-lit-` + e),
          fe.add(t),
          le.push(i),
          (ue +=
            (n.length *
              (i.index ? i.index.count : i.attributes.position.count)) /
            3),
          V++);
      }
  }
  for (let e of a.values()) for (let t of e) t.geo.dispose();
  return {
    root: P,
    lit: fe,
    stats: {
      pieces: j,
      variants: a.size,
      textures: p.size,
      atlasScale: +g.toFixed(2),
      draws: le.length,
      litDraws: V,
      groups: de.size,
      tris: Math.round(ue),
      ms: Math.round(performance.now() - i),
    },
    groups: de,
    dispose() {
      t.remove(P);
      for (let e of le) e.dispose();
      for (let e of Object.values(N)) e.dispose();
      w.dispose();
    },
  };
}
var ue = 60,
  de = [
    {
      name: `police`,
      body: 1911364,
      trim: 15265007,
      period: 115,
      phase: 0,
      pts: [
        [28, -47],
        [-34, -46],
        [-50, -40],
        [-56, -30],
        [-56, -5],
      ],
    },
    {
      name: `news`,
      body: 15328991,
      trim: 11740702,
      period: 105,
      phase: 0.4,
      pts: [
        [-56, 15],
        [-56, 34],
        [-49, 41],
        [-30, 42],
        [32, 42],
        [45, 39],
        [49, 31],
        [49, 21],
      ],
    },
  ];
