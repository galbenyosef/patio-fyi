// assets__index-CBqjwezZ 06 — mask
// Lines 1640-1979 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
function St(
  e,
  t,
  n,
  {
    enabled: r = !0,
    strength: i = 0.42,
    radius: a = 0.3,
    threshold: o = 1.05,
    samples: s = 4,
  } = {},
) {
  let c = null,
    l = null,
    u = null,
    d = [],
    f = null,
    p = !1,
    m = () => n.userData.viewmodelStage ?? null;
  function h() {
    e.render(t, n);
    let r = m();
    if (!r) return;
    r.sync();
    let i = e.autoClear;
    e.autoClear = !1;
    try {
      (e.clearDepth(), e.render(r.scene, n));
    } finally {
      e.autoClear = i;
    }
  }
  let g = null,
    _ = !1,
    v = 0,
    y = !0;
  function b() {
    if (c || p) return;
    let r = e.getSize(new O());
    ((c = new lt(e)),
      c.addPass(new ut(t, n)),
      (u = new H()),
      (u.needsSwap = !1),
      (u.enabled = !1),
      (u.scene = null),
      (u.render = (e, t, r) => {
        e.setRenderTarget(r);
        let i = e.autoClear;
        e.autoClear = !1;
        try {
          (e.clearDepth(), e.render(u.scene, n));
        } finally {
          e.autoClear = i;
        }
      }),
      c.addPass(u));
    let f = new ot({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(256.0)), c.a); }`,
    });
    (c.addPass(f), (l = new ft(r, i, a, o)), c.addPass(l));
    let m = new mt();
    (c.addPass(m), (d = [f, l, m]), S(s));
  }
  function x() {
    if (!c) return;
    let e = c;
    ((c = null), (l = null), (u = null), (d = []), (f = null), bt(e));
  }
  function S(e) {
    if (c)
      for (let t of [c.renderTarget1, c.renderTarget2])
        t && t.samples !== e && ((t.samples = e), t.dispose());
  }
  r && b();
  let C = (t) => {
      let n = e.getRenderTarget();
      try {
        return (e.setRenderTarget(c ? c.readBuffer : null), t());
      } finally {
        e.setRenderTarget(n);
      }
    },
    w = [],
    T = new WeakSet(),
    E = new Map(),
    D = new ke(),
    k = ie.prototype.add;
  ((D.traverse = (e) => {
    e(D);
    for (let t of D.children) e(t);
  }),
    (D.traverseVisible = (e) => {
      D.visible && e(D);
    }));
  let A = !1;
  ie.prototype.add = function (...e) {
    if (A)
      for (let t of e) t && t.isObject3D && !T.has(t) && (T.add(t), w.push(t));
    return k.apply(this, e);
  };
  let j = [],
    M = ye.prototype.setColorAt;
  ye.prototype.setColorAt = function (...e) {
    return (A && this.instanceColor === null && j.push(this), M.apply(this, e));
  };
  let ee = (e) => {
      for (; e.parent;) e = e.parent;
      return e;
    },
    P = (e) => {
      let r = ee(e);
      return r === t || r === n ? t : r === m()?.scene ? r : null;
    },
    te = (e) => !!P(e),
    ne = (e) => (Array.isArray(e.material) ? e.material : [e.material]),
    re = vt(e);
  async function ae(t) {
    let n = c,
      r = d.slice();
    if (!n || f === n) return;
    let i = () => p || t() || c !== n,
      a = n.readBuffer,
      o = n.writeBuffer;
    for (let t = 0; t < r.length; t++) {
      if (i()) return;
      let n = r[t],
        s = n.renderToScreen,
        c = e.getRenderTarget(),
        l = e.getActiveCubeFace(),
        u = e.getActiveMipmapLevel(),
        d = e.getClearColor(new N()),
        f = e.getClearAlpha(),
        p = e.autoClear;
      try {
        if (t === 0) {
          e.setClearColor(0, 0);
          for (let t of [a, o]) (e.setRenderTarget(t), e.clear(!0, !0, !0));
        }
        ((n.renderToScreen = !1), n.render(e, o, a, 0, !1));
      } finally {
        ((n.renderToScreen = s),
          e.setClearColor(d, f),
          (e.autoClear = p),
          e.setRenderTarget(c, l, u));
      }
      (n.needsSwap && ([a, o] = [o, a]),
        t + 1 < r.length &&
          (await (W() ?? new Promise((e) => setTimeout(e, 0)))));
    }
    i() || (f = n);
  }
  let F = (e, t, n) => {
    for (let r of e)
      !t.has(r) || re.has(r)
        ? e.delete(r)
        : n.remaining && re.prepare(r) && (n.remaining--, e.delete(r));
    return e.size === 0;
  };
  function oe() {
    let t = { remaining: 1 };
    if (w.length || j.length) {
      let r = (e) => e.material && te(e) && (e.layers.mask !== 0 || E.has(e)),
        i = new Set(j.splice(0).filter(r));
      for (let e of w.splice(0)) {
        if (!te(e)) {
          T.delete(e);
          continue;
        }
        e.traverse((e) => {
          r(e) && i.add(e);
        });
      }
      let a = new Map();
      for (let e of i) {
        let t = P(e);
        (a.has(t) || a.set(t, []), a.get(t).push(e));
      }
      for (let [r, i] of a) {
        D.children = i;
        try {
          C(() => e.compile(D, n, r));
        } catch {
        } finally {
          D.children = [];
        }
        let a = new Map(),
          o = new Set(e.info.programs),
          s = performance.now() + 1e4;
        for (let n of i)
          for (let r of ne(n))
            if (r && !a.has(r)) {
              let n = new Set(e.properties.get(r).programs?.values() ?? []);
              a.set(r, F(n, o, t) ? null : { programs: n, until: s });
            }
        for (let e of i) {
          let t = new Set(
            ne(e)
              .map((e) => a.get(e))
              .filter(Boolean),
          );
          if (!t.size) continue;
          let n = e.layers.mask || E.get(e)?.mask;
          (E.set(e, { mask: n, tickets: t }), (e.layers.mask = 0));
        }
      }
    }
    if (E.size) {
      let n = new Set(e.info.programs),
        r = new Map(),
        i = performance.now();
      for (let [e, a] of E) {
        for (let e of a.tickets)
          (r.has(e) || r.set(e, i >= e.until || F(e.programs, n, t)),
            r.get(e) && a.tickets.delete(e));
        a.tickets.size ||
          (e.layers.mask === 0 && (e.layers.mask = a.mask), E.delete(e));
      }
    }
  }
  return {
    get enabled() {
      return !!c;
    },
    async prepare(r = () => !1) {
      if (p || r()) return;
      C(() => e.compile(t, n));
      let i = m();
      (i && (i.sync(), C(() => e.compile(i.scene, n))),
        await re.wait(e.info.programs.slice(), () => p || r()),
        !p && !r() && (await ae(r)),
        !p && !r() && (A = !0));
    },
    warming: () => E.size,
    setThermal(r, i = 0, a = !0) {
      p || ((_ = r), (v = i), (y = a), r && !g && (g = yt(e, t, n)));
    },
    render() {
      if ((oe(), _)) g.render(performance.now() / 1e3, v, y);
      else if (c) {
        let e = m();
        ((u.enabled = !!e), e && (e.sync(), (u.scene = e.scene)), c.render());
      } else h();
    },
    setSize(t, n) {
      xt(c, e, t, n);
    },
    setSamples(e) {
      S(Math.max(e, s));
    },
    setEnabled(e) {
      p || (e && !c ? b() : e || x());
    },
    setBloom(e) {
      l &&
        ((l.strength = e.strength ?? l.strength),
        (l.radius = e.radius ?? l.radius),
        (l.threshold = e.threshold ?? l.threshold));
    },
    dispose() {
      if (p) return;
      p = !0;
      let e = null;
      try {
        g?.dispose();
      } catch (t) {
        e ??= t;
      }
      ((g = null), (_ = !1));
      try {
        x();
      } catch (t) {
        e ??= t;
      }
      ((A = !1), (ie.prototype.add = k), (ye.prototype.setColorAt = M));
      for (let [e, t] of E) e.layers.mask === 0 && (e.layers.mask = t.mask);
      if ((E.clear(), (w.length = j.length = 0), (D.children = []), e)) throw e;
    },
  };
}
function Ct() {
  let e = [],
    t = (t, n, r) => {
      e.length < 500 &&
        e.push({
          module: t,
          message: String(n).slice(0, 2e3),
          stack: r ? String(r).slice(0, 4e3) : ``,
          time: performance.now(),
        });
    },
    n = console.error.bind(console);
  ((console.error = (...e) => {
    let r = e
        .map((e) =>
          e instanceof Error ? e.message : typeof e == `string` ? e : Tt(e),
        )
        .join(` `),
      i = e.find((e) => e instanceof Error);
    (t(wt(r), r, i?.stack), n(...e));
  }),
    window.addEventListener(`error`, (e) =>
      t(wt(e.filename || ``), e.message, e.error?.stack),
    ),
    window.addEventListener(`unhandledrejection`, (e) =>
      t(`promise`, e.reason?.message ?? String(e.reason), e.reason?.stack),
    ));
  let r = {
    ready: !1,
    errors: e,
    modules: {},
    version: `0.1.0`,
    _resolvers: [],
    setCamera: () => !1,
    setTimeOfDay: () => !1,
    getStats: () => ({}),
    step: () => {},
    input: () => {},
    nextFrame: () => new Promise((e) => r._resolvers.push(e)),
    _frame() {
      let e = r._resolvers;
      r._resolvers = [];
      for (let t of e) t();
    },
    pushError: t,
  };
  return ((window.__game = r), r);
}
function wt(e) {
  let t = /\/src\/([a-z]+)\//.exec(e) || /\[module:([a-z]+)\]/.exec(e);
  return t ? t[1] : `core`;
}
function Tt(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}
