// assets__meridian-view-BtYJSXLi 02 — math
// Lines 90-410 of readable/assets__meridian-view-BtYJSXLi.pretty.js (statement-aligned).
function ce(e, n, r) {
  let a = r.decor ?? [];
  if (!a.length) return null;
  let s = performance.now(),
    c = new Map(),
    l = new Map(),
    u = (e) => e.k + `:` + e.s + (e.o ? `:` + JSON.stringify(e.o) : ``),
    d = (e) =>
      !!e.emissiveMap ||
      (e.emissiveIntensity >= 0.3 &&
        e.emissive &&
        e.emissive.r + e.emissive.g + e.emissive.b > 0.05),
    p = new Map();
  for (let t of a) {
    let n = u(t);
    if (c.has(n)) continue;
    let r;
    try {
      r = D(t.k, t.s, t.o);
    } catch (t) {
      (e.warn?.(`meridian decor ${n}: ${t.message}`), c.set(n, []));
      continue;
    }
    r.updateMatrixWorld(!0);
    let i = [],
      a = new Map(),
      s = /^exit/.test(t.k);
    (r.traverse((e) => {
      if (!e.isMesh || !e.visible) return;
      let t = (Array.isArray(e.material) ? e.material : [e.material])[0];
      if (t.alphaMap) return;
      if (s && d(t)) {
        let n = e.geometry.clone();
        (n.applyMatrix4(e.matrixWorld),
          (a.get(t) ?? a.set(t, []).get(t)).push(n));
        return;
      }
      let n = oe(t),
        r = V(e.geometry);
      if (
        (r.applyMatrix4(e.matrixWorld),
        se(r, t.color, n === `glass` ? t.opacity : 1),
        n === `tex`)
      ) {
        let e = t.map;
        if (!p.has(e)) {
          r.computeBoundingBox();
          let t = r.boundingBox.getSize(new o()),
            n = Math.max(t.x, t.y, t.z);
          p.set(e, {
            img: e.image,
            repeat: [e.repeat.x, e.repeat.y],
            want: Math.max(z, Math.min(ae, n * R)),
          });
        }
        i.push({ cls: n, geo: r, tex: e });
      } else i.push({ cls: n, geo: r });
    }),
      c.set(n, i),
      a.size &&
        l.set(
          n,
          [...a].map(([e, t]) => {
            let n = t.length > 1 ? C(t.map(V), !1) : t[0];
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
  let m = [...p.values()],
    _ = 1;
  {
    let e = m.reduce((e, t) => {
      let n = t.img.width / t.img.height,
        r = n >= 1 ? t.want : t.want * n,
        i = n >= 1 ? t.want / n : t.want;
      return e + (r + 8) * (i + 8);
    }, 0);
    e > I * I * 0.82 && (_ = Math.sqrt((I * I * 0.82) / e));
  }
  let y = (e) => {
      let t = 0,
        n = 0,
        r = 0,
        i = [];
      for (let a of [...m].sort((e, t) => t.want - e.want)) {
        let o = a.img.width / a.img.height,
          s = Math.max(8, Math.round((o >= 1 ? a.want : a.want * o) * e)),
          c = Math.max(8, Math.round((o >= 1 ? a.want / o : a.want) * e));
        if ((t + s + 8 > I && ((t = 0), (n += r), (r = 0)), n + c + 8 > I))
          return null;
        (i.push([a, t + L, n + L, s, c]),
          (t += s + 8),
          (r = Math.max(r, c + 8)));
      }
      return i;
    },
    ee = null;
  for (let e = 0; e < 8 && !(ee = y(_)); e++) _ *= 0.9;
  let b = document.createElement(`canvas`);
  b.width = b.height = I;
  let x = b.getContext(`2d`);
  ((x.fillStyle = `#808080`), x.fillRect(0, 0, I, I));
  for (let [e, t, n, r, i] of ee ?? []) {
    let a = (t, n, r, i) => {
      if (e.repeat[0] === 1 && e.repeat[1] === 1) {
        x.drawImage(e.img, t, n, r, i);
        return;
      }
      let a = r / e.repeat[0],
        o = i / e.repeat[1];
      for (let r = 0; r < Math.ceil(e.repeat[0]); r++)
        for (let i = 0; i < Math.ceil(e.repeat[1]); i++)
          x.drawImage(e.img, t + r * a, n + i * o, a, o);
    };
    (x.save(),
      x.beginPath(),
      x.rect(t - L, n - L, r + 8, i + 8),
      x.clip(),
      a(t - L, n - L, r + 8, i + 8),
      x.restore(),
      a(t, n, r, i),
      (e.rect = [
        (t + 0.5) / I,
        1 - (n + i - 0.5) / I,
        (r - 1) / I,
        (i - 1) / I,
      ]));
  }
  let S = new T(b);
  ((S.colorSpace = f),
    (S.anisotropy = 8),
    (S.generateMipmaps = !0),
    (S.minFilter = v));
  for (let e of c.values())
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
  let E = new Map(),
    O = new te(),
    ne = new h(),
    re = new o(0, 1, 0),
    k = new o(1, 1, 1),
    A = new o(),
    j = new o(),
    M = 0,
    N = new Map();
  for (let e of a) {
    let t = u(e),
      n = c.get(t);
    if (!n?.length && !l.has(t)) continue;
    (M++,
      O.compose(
        j.set(e.x, e.y, e.z),
        ne.setFromAxisAngle(re, e.r ?? 0),
        e.sc ? A.setScalar(e.sc) : k,
      ));
    let r = e.g ? `g:` + e.g : B(e.x, e.z);
    l.has(t) && (N.get(t) ?? N.set(t, []).get(t)).push(O.clone());
    for (let e of n) {
      let t = e.cls + `|` + r,
        n = E.get(t);
      n || ((n = []), E.set(t, n));
      let i = e.geo.clone();
      (i.applyMatrix4(O), n.push(i));
    }
  }
  let ie = e.modules?.get?.(`environment`),
    P = {
      matte: new i({ vertexColors: !0, roughness: 0.82, metalness: 0 }),
      shiny: new i({ vertexColors: !0, roughness: 0.32, metalness: 0.75 }),
      double: new i({
        vertexColors: !0,
        roughness: 0.7,
        metalness: 0,
        side: 2,
      }),
      tex: new i({ vertexColors: !0, map: S, roughness: 0.6, metalness: 0 }),
      glass: new i({
        vertexColors: !0,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.08,
        metalness: 0.1,
      }),
    };
  for (let e of Object.values(P)) ie?.configureCaster?.(e);
  let F = new g();
  ((F.name = `m34-decor`), n.add(F));
  let ce = [],
    le = 0,
    ue = new Map();
  for (let e of a) {
    if (!e.g) continue;
    let t = ue.get(e.g);
    (t ||
      ((t = { node: new g(), x0: 1e9, z0: 1e9, x1: -1e9, z1: -1e9 }),
      (t.node.name = `m34-decor-` + e.g),
      F.add(t.node),
      ue.set(e.g, t)),
      (t.x0 = Math.min(t.x0, e.x)),
      (t.x1 = Math.max(t.x1, e.x)),
      (t.z0 = Math.min(t.z0, e.z)),
      (t.z1 = Math.max(t.z1, e.z)));
  }
  for (let e of ue.values())
    ((e.cx = (e.x0 + e.x1) / 2),
      (e.cz = (e.z0 + e.z1) / 2),
      (e.r = Math.hypot(e.x1 - e.x0, e.z1 - e.z0) / 2));
  for (let [e, n] of E) {
    let [r] = e.split(`|`),
      i = C(n, !1);
    if ((n.forEach((e) => e.dispose()), !i)) continue;
    (i.computeBoundingSphere(),
      ce.push(i),
      (le += i.attributes.position.count / 3));
    let a = new t(i, P[r]);
    ((a.name = `m34-decor-${e}`),
      (a.castShadow = r === `matte` || r === `shiny`),
      (a.receiveShadow = r !== `glass`));
    let o = e.split(`|`)[1];
    (o.startsWith(`g:`) ? ue.get(o.slice(2)).node : F).add(a);
  }
  let de = new g();
  ((de.name = `m34-decor-lit`), F.add(de));
  let H = 0;
  for (let [e, t] of l) {
    let n = N.get(e);
    if (n)
      for (let { mat: r, geo: i } of t) {
        let t = new w(i, r, n.length);
        (n.forEach((e, n) => t.setMatrixAt(n, e)),
          (t.instanceMatrix.needsUpdate = !0),
          t.computeBoundingSphere
            ? t.computeBoundingSphere()
            : (t.frustumCulled = !1),
          (t.name = `m34-decor-lit-` + e),
          de.add(t),
          ce.push(i),
          (le +=
            (n.length *
              (i.index ? i.index.count : i.attributes.position.count)) /
            3),
          H++);
      }
  }
  for (let e of c.values()) for (let t of e) t.geo.dispose();
  return {
    root: F,
    lit: de,
    stats: {
      pieces: M,
      variants: c.size,
      textures: p.size,
      atlasScale: +_.toFixed(2),
      draws: ce.length,
      litDraws: H,
      groups: ue.size,
      tris: Math.round(le),
      ms: Math.round(performance.now() - s),
    },
    groups: ue,
    dispose() {
      n.remove(F);
      for (let e of ce) e.dispose();
      for (let e of Object.values(P)) e.dispose();
      S.dispose();
    },
  };
}
var le = 60,
  ue = [
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
