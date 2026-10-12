// assets__terrain-C3lt_eD1 28 — scatter
// Lines 9718-10045 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function gi(e) {
  let t = e.size / Q,
    { n, heights: r } = e,
    { maxHeights: i, receiverHeight: o } = pi(e, Q),
    l = new Float32Array(Q * Q),
    u = new Float32Array(Q * Q),
    d = new Uint8Array(Q * Q),
    f = new c(d, Q, Q, w, s);
  ((f.minFilter = p),
    (f.magFilter = p),
    (f.wrapS = a),
    (f.wrapT = a),
    (f.generateMipmaps = !1),
    (f.needsUpdate = !0));
  let m = [];
  {
    let e = 9;
    for (; e < 1150;) (m.push(e), (e *= 1.235));
  }
  let h = NaN;
  function g(e, t) {
    if (e < 0 || t < 0 || e > 766.999 || t > 766.999) return -1e9;
    let n = e,
      r = t,
      a = n | 0,
      o = r | 0,
      s = n - a,
      c = r - o,
      l = o * Q + a,
      u = i[l] + (i[l + 1] - i[l]) * s;
    return u + (i[l + Q] + (i[l + Q + 1] - i[l + Q]) * s - u) * c;
  }
  function _(e) {
    if (
      Number.isFinite(h) &&
      Math.abs(Math.atan2(Math.sin(e - h), Math.cos(e - h))) < 0.035
    )
      return !1;
    h = e;
    let n = Math.cos(e) / t,
      r = Math.sin(e) / t;
    for (let e = 0; e < Q; e++)
      for (let t = 0; t < Q; t++) {
        let i = e * Q + t,
          a = o(t, e) + 1.8,
          s = -20;
        for (let i = 0; i < m.length; i++) {
          let o = m[i],
            c = g(t + n * o, e + r * o);
          if (c < -1e8) break;
          let l = (c - a) / o;
          l > s && (s = l);
        }
        l[i] = Math.atan(s) * 57.29578;
      }
    for (let e = 0; e < 4; e++) {
      for (let e = 0; e < Q; e++)
        for (let t = 0; t < Q; t++) {
          let n = t > 0 ? t - 1 : t,
            r = t < 767 ? t + 1 : t;
          u[e * Q + t] = (l[e * Q + n] + l[e * Q + t] + l[e * Q + r]) / 3;
        }
      for (let e = 0; e < Q; e++)
        for (let t = 0; t < Q; t++) {
          let n = t > 0 ? t - 1 : t,
            r = t < 767 ? t + 1 : t;
          l[t * Q + e] = (u[n * Q + e] + u[t * Q + e] + u[r * Q + e]) / 3;
        }
    }
    for (let e = 0; e < Q * Q; e++) d[e] = I((l[e] - mi) / hi, 0, 1) * 255;
    return ((f.needsUpdate = !0), !0);
  }
  let v = (e) => I((e - mi) / hi, 0, 1),
    y = n - 1,
    b = new Uint8Array(y * y);
  for (let t = 0; t < y; t++)
    for (let i = 0; i < y; i++)
      b[t * y + i] = I((e.waterLevel - r[t * n + i]) / 14, 0, 1) * 255;
  let x = new c(b, y, y, w, s);
  return (
    (x.minFilter = p),
    (x.magFilter = p),
    (x.wrapS = x.wrapT = a),
    (x.generateMipmaps = !1),
    (x.needsUpdate = !0),
    _(0.7),
    {
      sunVis: f,
      bedTex: x,
      bedRange: 14,
      setAzimuth: _,
      encodeElev: v,
      resolution: Q,
      horizonAt(n, r) {
        let i = I(Math.floor((n + e.half) / t), 0, 767),
          a = I(Math.floor((r + e.half) / t), 0, 767);
        return l[a * Q + i];
      },
      dispose() {
        (f.dispose(), x.dispose());
      },
    }
  );
}
var $ = {
    ctx: null,
    hf: null,
    seed: 1,
    opts: Ve,
    root: null,
    terrain: null,
    water: null,
    scatter: null,
    surround: null,
    lighting: null,
    U: null,
    mapData: null,
    scenic: null,
    offTod: null,
    built: !1,
    builds: 0,
  },
  _i = 0;
function vi(e) {
  let t = e.river,
    n = { score: 1 / 0, p: null },
    r = Math.floor(t.length * 0.3),
    i = Math.floor(t.length * 0.8),
    a = [0, 1, 0],
    o = e.waterLevel,
    s = (t, n, r, i) => {
      let s = e.cellIndex(t, n);
      if (e.noScatter[s] || e.material[s] !== 0) return !1;
      let c = e.getHeight(t, n);
      return c < o + 1 || c > r ? !1 : (e.getNormal(t, n, a), a[1] >= i);
    };
  for (let a = r; a < i; a++) {
    let r = t[a - 1],
      i = t[a + 1],
      c = i[0] - r[0],
      l = i[1] - r[1],
      u = Math.hypot(c, l) || 1,
      d = l / u,
      f = -c / u;
    d < 0 && ((d = -d), (f = -f));
    let p = e.riverWidthAt(a) + e.bankWidthAt(a) * 0.9 + 3;
    for (let r = 0; r <= 12; r += 4) {
      let i = t[a][0] + d * (p + r),
        c = t[a][1] + f * (p + r);
      if (
        !s(i, c, o + 6.5, 0.95) ||
        !s(i + 1.71, c + 4.7, o + 7, 0.93) ||
        !s(i + 0.9, c + 2.4, o + 7, 0.93) ||
        e.roadDist[e.cellIndex(i, c)] < 30
      )
        continue;
      let l = e.getHeight(i, c),
        u = Math.abs(c - 110) + Math.abs(i) * 0.15 + r * 2;
      u < n.score && ((n.score = u), (n.p = [i, l + 1, c]));
    }
  }
  return n.p || [0, e.getHeight(0, 0) + 1, 0];
}
function yi(e, t) {
  (e.world.map.setHeightfield({
    getHeight: t.getHeight,
    getNormal: t.getNormal,
    raycast: t.raycast,
    waterLevel: t.waterLevel,
  }),
    (e.world.map.waterLevel = t.waterLevel),
    (e.world.map.size = t.size),
    (e.world.map.bounds = t.bounds.slice()));
}
function bi() {
  let { ctx: e } = $;
  ($.root && e && e.scene.remove($.root),
    $.terrain && $.terrain.dispose(),
    $.water && $.water.dispose(),
    $.scatter && $.scatter.dispose(),
    $.surround && $.surround.dispose(),
    $.mapData && $.mapData.dispose(),
    ($.terrain = $.water = $.scatter = $.surround = $.root = $.mapData = null));
}
function xi(e, t) {
  (($.lighting = fi(e, $.hf, $.U, $.mapData, {
    onNight: (e) => {
      ($.scatter && $.scatter.setNight(e), $.water && $.water.setNight(e));
    },
  })),
    $.lighting.setTimeOfDay(t),
    $.lighting.update());
}
function Si(e, t, n) {
  let r = wi(e, t, n),
    i;
  do i = r.next();
  while (!i.done);
  return i.value;
}
async function Ci(
  e,
  t,
  n,
  { yieldTask: r, budgetMs: i = 40, now: a = () => performance.now() },
) {
  let o = wi(e, t, n),
    s = a();
  try {
    for (;;) {
      let e = o.next();
      if (e.done) return e.value;
      a() - s >= i && (await r(), (s = a()));
    }
  } finally {
    o.return();
  }
}
function* wi(e, t, n) {
  let r = ++_i,
    i = $.lighting ? $.lighting.getTimeOfDay() : null;
  (($.lighting &&= ($.lighting.dispose(), null)), ($.built = !1), bi());
  let a = {},
    o = !1;
  try {
    let s = performance.now(),
      c = de(t, n),
      l = performance.now();
    yield;
    let u = vi(c),
      d = _e(c),
      f = (a.mapData = gi(c));
    ((d.uSunVis.value = f.sunVis), yield);
    let p = new te();
    ((p.name = `terrainRoot`), (a.root = p));
    let m = (a.terrain = bt(c, t, d));
    (p.add(m.group), yield);
    let h = (a.surround = xt(c, t, d, m.colors));
    (p.add(h.mesh), yield);
    let g = (a.water = Pt(c, d, f));
    (p.add(g.mesh), yield);
    let _ = (a.scatter = yield* ni(c, m.colors, t, u, d, m.hAt, m.micro));
    if (
      (p.add(_.group), yield, (p.visible = !n?.hidden), r !== _i || $.ctx !== e)
    )
      throw Error(`Terrain construction superseded`);
    return (
      Object.assign($, { hf: c, seed: t, opts: n, scenic: u, U: d, ...a }),
      yi(e, c),
      e.scene.add(p),
      m.update(e.camera),
      _.update(e.camera),
      g.update(e.camera),
      i != null && xi(e, i),
      e.log(
        `generated seed=${t} in ${(l - s).toFixed(0)} ms (+${(performance.now() - l).toFixed(0)} ms render prep); h=[${c.minHeight.toFixed(1)}, ${c.maxHeight.toFixed(1)}] water=${c.waterLevel} trees=${$.scatter.counts.trees} rocks=${$.scatter.counts.rocks}`,
      ),
      ($.built = !0),
      $.builds++,
      (o = !0),
      c
    );
  } finally {
    if (!o) {
      a.root?.removeFromParent();
      for (let e of [`terrain`, `water`, `scatter`, `surround`, `mapData`])
        a[e]?.dispose();
      $.root === a.root &&
        (($.terrain =
          $.water =
          $.scatter =
          $.surround =
          $.root =
          $.mapData =
            null),
        ($.built = !1));
    }
  }
}
var Ti = {
  getHeight: (e, t) => ($.hf ? $.hf.getHeight(e, t) : 0),
  getNormal: (e, t, n) =>
    $.hf
      ? $.hf.getNormal(e, t, n)
      : n
        ? ((n[0] = 0), (n[1] = 1), (n[2] = 0), n)
        : [0, 1, 0],
  raycast: (e, t, n) => ($.hf ? $.hf.raycast(e, t, n) : null),
  getMaterialAt: (e, t) => ($.hf ? $.hf.getMaterialAt(e, t) : `grass`),
  generate(e, t) {
    return $.ctx ? Si($.ctx, e ?? $.seed, t ?? Ve) : null;
  },
  get bounds() {
    return $.hf ? $.hf.bounds.slice() : [-1024, -1024, 1024, 1024];
  },
  get waterLevel() {
    return $.hf ? $.hf.waterLevel : 0;
  },
  getHeightfield: () => $.hf,
  getWater: () => $.water,
  getSurfaceUniforms: () => $.U,
  surroundHeight: (e, t) =>
    $.surround?.heightAt
      ? $.surround.heightAt(e, t)
      : $.hf
        ? $.hf.getHeight(e, t)
        : 0,
  surroundFloor: () => $.surround?.floor ?? 0,
  usesDefinition: (e, t) => $.built && $.seed === e && $.opts === t,
  getBuildCount: () => $.builds,
  getScenicPoint: () => ($.scenic ? $.scenic.slice() : null),
  getScatter: () =>
    $.scatter ? { trees: $.scatter.trees, rocks: $.scatter.rocks } : null,
  plantDecorTrees: (e) => !!$.scatter?.plantDecor?.(e),
  setDecorTreeVisible: (e, t) => !!$.scatter?.setDecorVisible?.(e, t),
  addTownStreets: (e) => !!$.scatter?.addTownStreets?.(e),
  setScatterExclusions(e) {
    ($.scatter?.setExclusions(e),
      $.scatter && $.ctx && $.scatter.update($.ctx.camera));
  },
  sunVisibility(e, t) {
    if (!$.mapData || !$.U) return 1;
    let n = $.mapData.horizonAt(e, t),
      r = $.U.uSunElev.value * 80 - 10;
    return I((r - n) / 6 + 0.5, 0, 1);
  },
  defaultMap: Ve,
};
