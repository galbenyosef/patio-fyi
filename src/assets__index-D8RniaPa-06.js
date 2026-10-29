// assets__index-D8RniaPa 06 — mask
// Lines 1645-1951 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
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
    d = null,
    f = [],
    p = null,
    m = !1,
    h = () => n.userData.viewmodelStage ?? null,
    g = () => t.userData.smokeVolume;
  function _() {
    let t = h();
    if (!t) return;
    t.sync();
    let r = e.autoClear;
    e.autoClear = !1;
    try {
      (e.clearDepth(), e.render(t.scene, n));
    } finally {
      e.autoClear = r;
    }
  }
  function v() {
    let r = g();
    if (r?.active()) return r.renderScene(() => e.render(t, n), _);
    (e.render(t, n), _());
  }
  let y = null,
    b = !1,
    x = 0,
    S = !0;
  function C() {
    if (c || m) return;
    let r = e.getSize(new F());
    ((c = new ct(e)),
      c.addPass(new lt(t, n)),
      (d = new U()),
      (d.needsSwap = !1),
      (d.enabled = !1),
      (d.render = (e, t, n) => g()?.composite(e, n)),
      c.addPass(d),
      (u = new U()),
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
    let p = new at({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(256.0)), c.a); }`,
    });
    (c.addPass(p), (l = new dt(r, i, a, o)), c.addPass(l));
    let h = new pt();
    (c.addPass(h), (f = [p, l, h]), T(s));
  }
  function w() {
    if (!c) return;
    let e = c;
    ((c = null),
      (l = null),
      (u = null),
      (d = null),
      (f = []),
      (p = null),
      bt(e));
  }
  function T(e) {
    if (c)
      for (let t of [c.renderTarget1, c.renderTarget2])
        t && t.samples !== e && ((t.samples = e), t.dispose());
  }
  r && C();
  let E = (t) => {
      let n = e.getRenderTarget();
      try {
        return (e.setRenderTarget(c ? c.readBuffer : null), t());
      } finally {
        e.setRenderTarget(n);
      }
    },
    D = [],
    O = new WeakSet(),
    k = new Map(),
    A = new me(),
    j = z.prototype.add;
  ((A.traverse = (e) => {
    e(A);
    for (let t of A.children) e(t);
  }),
    (A.traverseVisible = (e) => {
      A.visible && e(A);
    }));
  let M = !1;
  z.prototype.add = function (...e) {
    if (M)
      for (let t of e) t && t.isObject3D && !O.has(t) && (O.add(t), D.push(t));
    return j.apply(this, e);
  };
  let N = [],
    P = He.prototype.setColorAt;
  He.prototype.setColorAt = function (...e) {
    return (M && this.instanceColor === null && N.push(this), P.apply(this, e));
  };
  let ee = (e) => {
      for (; e.parent;) e = e.parent;
      return e;
    },
    te = (e) => {
      let r = ee(e);
      return r === t || r === n ? t : r === h()?.scene ? r : null;
    },
    ne = (e) => !!te(e),
    I = (e) => (Array.isArray(e.material) ? e.material : [e.material]),
    re = vt(e);
  async function R(t) {
    let n = c,
      r = f.slice();
    if (!n || p === n) return;
    let i = () => m || t() || c !== n,
      a = n.readBuffer,
      o = n.writeBuffer;
    for (let t = 0; t < r.length; t++) {
      if (i()) return;
      let n = r[t],
        s = n.renderToScreen,
        c = e.getRenderTarget(),
        l = e.getActiveCubeFace(),
        u = e.getActiveMipmapLevel(),
        d = e.getClearColor(new L()),
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
          (await (gt() ?? new Promise((e) => setTimeout(e, 0)))));
    }
    i() || (p = n);
  }
  let ie = (e, t, n) => {
    for (let r of e)
      !t.has(r) || re.has(r)
        ? e.delete(r)
        : n.remaining && re.prepare(r) && (n.remaining--, e.delete(r));
    return e.size === 0;
  };
  function ae() {
    let t = { remaining: 1 };
    if (D.length || N.length) {
      let r = (e) => e.material && ne(e) && (e.layers.mask !== 0 || k.has(e)),
        i = new Set(N.splice(0).filter(r));
      for (let e of D.splice(0)) {
        if (!ne(e)) {
          O.delete(e);
          continue;
        }
        e.traverse((e) => {
          r(e) && i.add(e);
        });
      }
      let a = new Map();
      for (let e of i) {
        let t = te(e);
        (a.has(t) || a.set(t, []), a.get(t).push(e));
      }
      for (let [r, i] of a) {
        A.children = i;
        try {
          E(() => e.compile(A, n, r));
        } catch {
        } finally {
          A.children = [];
        }
        let a = new Map(),
          o = new Set(e.info.programs),
          s = performance.now() + 1e4;
        for (let n of i)
          for (let r of I(n))
            if (r && !a.has(r)) {
              let n = new Set(e.properties.get(r).programs?.values() ?? []);
              a.set(r, ie(n, o, t) ? null : { programs: n, until: s });
            }
        for (let e of i) {
          let t = new Set(
            I(e)
              .map((e) => a.get(e))
              .filter(Boolean),
          );
          if (!t.size) continue;
          let n = e.layers.mask || k.get(e)?.mask;
          (k.set(e, { mask: n, tickets: t }), (e.layers.mask = 0));
        }
      }
    }
    if (k.size) {
      let n = new Set(e.info.programs),
        r = new Map(),
        i = performance.now();
      for (let [e, a] of k) {
        for (let e of a.tickets)
          (r.has(e) || r.set(e, i >= e.until || ie(e.programs, n, t)),
            r.get(e) && a.tickets.delete(e));
        a.tickets.size ||
          (e.layers.mask === 0 && (e.layers.mask = a.mask), k.delete(e));
      }
    }
  }
  return {
    get enabled() {
      return !!c;
    },
    async prepare(r = () => !1) {
      if (m || r()) return;
      E(() => e.compile(t, n));
      let i = h();
      (i && (i.sync(), E(() => e.compile(i.scene, n))),
        await re.wait(e.info.programs.slice(), () => m || r()),
        !m && !r() && (await R(r)),
        !m && !r() && (M = !0));
    },
    warming: () => k.size,
    setThermal(r, i = 0, a = !0) {
      m || ((b = r), (x = i), (S = a), r && !y && (y = yt(e, t, n)));
    },
    render() {
      ae();
      let e = g(),
        t = !!e?.active();
      if (b) {
        let n = () => y.render(performance.now() / 1e3, x, S);
        t ? e.renderScene(n, null, !0) : n();
      } else if (c) {
        ((d.enabled = t),
          t &&
            (e.prepareTarget(c.renderTarget1),
            e.prepareTarget(c.renderTarget2)));
        let n = h();
        ((u.enabled = !!n), n && (n.sync(), (u.scene = n.scene)), c.render());
      } else v();
    },
    setSize(t, n) {
      xt(c, e, t, n);
    },
    setSamples(e) {
      T(Math.max(e, s));
    },
    setEnabled(e) {
      m || (e && !c ? C() : e || w());
    },
    setBloom(e) {
      l &&
        ((l.strength = e.strength ?? l.strength),
        (l.radius = e.radius ?? l.radius),
        (l.threshold = e.threshold ?? l.threshold));
    },
    dispose() {
      if (m) return;
      m = !0;
      let e = null;
      try {
        y?.dispose();
      } catch (t) {
        e ??= t;
      }
      ((y = null), (b = !1));
      try {
        w();
      } catch (t) {
        e ??= t;
      }
      ((M = !1), (z.prototype.add = j), (He.prototype.setColorAt = P));
      for (let [e, t] of k) e.layers.mask === 0 && (e.layers.mask = t.mask);
      if ((k.clear(), (D.length = N.length = 0), (A.children = []), e)) throw e;
    },
  };
}
