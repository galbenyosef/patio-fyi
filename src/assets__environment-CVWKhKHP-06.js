// assets__environment-CVWKhKHP 06 — push
// Lines 1341-1647 of readable/assets__environment-CVWKhKHP.pretty.js (statement-aligned).
function jt(e, t, n, { reversedDepth: r = !1 } = {}) {
  let i = e.shadowMap,
    a = i.render,
    o = At(n, { reversedDepth: r, name: `sunLight.staticShadow` });
  (e.initRenderTarget(o), t.shadow.map && e.initRenderTarget(t.shadow.map));
  let s = [],
    c = new M(),
    l = [],
    u = [],
    f = !1,
    p = ``,
    m = -1,
    g = 0,
    _ = -1,
    v = 0,
    y = [t];
  function b() {
    ((l = []), (u = []));
    let e = (t) => {
      if (t.userData.dynamicShadow) {
        u.push(t);
        return;
      }
      t.castShadow && (t.isMesh || t.isLine || t.isPoints) && l.push(t);
      for (let n of t.children) e(n);
    };
    for (let t of s) e(t);
  }
  function x(n, r) {
    b();
    for (let e of u)
      ((e.userData.shadowCacheVisible = e.visible), (e.visible = !1));
    c.children = s;
    try {
      a.call(i, n, c, r);
    } finally {
      c.children = [];
      for (let e of u) e.visible = e.userData.shadowCacheVisible;
    }
    (e.copyTextureToTexture(t.shadow.map.depthTexture, o.depthTexture),
      (f = !0),
      (m = -1),
      v++);
  }
  let S = new k(),
    C = new Map();
  function w() {
    for (let [e, t] of C) {
      let n = e;
      for (; n.parent;) n = n.parent;
      if (!n.isScene) {
        for (let e of t) e.proxy.visible = !1;
        continue;
      }
      for (let e of t) {
        let t = !0;
        for (let n = e.node; n; n = n.parent)
          if (!n.visible) {
            t = !1;
            break;
          }
        ((e.proxy.visible = t),
          t && e.proxy.matrixWorld.copy(e.node.matrixWorld));
      }
    }
  }
  let T = (t) => {
    let n = e.clear;
    e.clear = () => {};
    try {
      t();
    } finally {
      e.clear = n;
    }
  };
  return (
    (i.render = function (n, r, c) {
      if (!n.includes(t) || !t.shadow.map) return a.call(i, n, r, c);
      if (!s.length) {
        (a.call(i, n, r, c), C.size && (w(), T(() => a.call(i, n, S, c))));
        return;
      }
      if (_ === g) return;
      ((_ = g),
        (!f || (m >= 0 && performance.now() - m > 250)) && x(y, c),
        e.copyTextureToTexture(o.depthTexture, t.shadow.map.depthTexture));
      let u = l.map((e) => e.castShadow);
      for (let e of l) e.castShadow = !1;
      try {
        T(() => a.call(i, n, r, c));
      } finally {
        l.forEach((e, t) => {
          e.castShadow = u[t];
        });
      }
      C.size && (w(), T(() => a.call(i, n, S, c)));
    }),
    {
      addRoot(e) {
        (s.includes(e) || s.push(e), (f = !1));
      },
      setKey(e) {
        e !== p && ((p = e), (f = !1));
      },
      invalidate() {
        m < 0 && (m = performance.now());
      },
      nextFrame() {
        g++;
      },
      addProxy(e) {
        if (C.has(e)) return;
        e.updateMatrixWorld(!0);
        let t = new Map();
        e.traverse((e) => {
          let n = e.material;
          if (
            !e.isMesh ||
            !e.castShadow ||
            e.isInstancedMesh ||
            e.isSkinnedMesh ||
            e.customDepthMaterial ||
            Array.isArray(n) ||
            !n ||
            n.alphaTest > 0 ||
            n.transparent ||
            Object.keys(e.geometry.morphAttributes ?? {}).length
          )
            return;
          let r = n.shadowSide ?? null,
            i = e.parent.uuid + `|` + n.side + `|` + r,
            a = t.get(i);
          (a ||
            t.set(
              i,
              (a = { node: e.parent, side: n.side, shadowSide: r, list: [] }),
            ),
            a.list.push(e));
        });
        let n = [];
        for (let e of t.values()) {
          if (e.list.length < 2) continue;
          let t = e.list.map((e) => {
              let t = new d();
              if (
                (t.setAttribute(
                  `position`,
                  e.geometry.attributes.position.clone(),
                ),
                t.setIndex(
                  e.geometry.index
                    ? [...e.geometry.index.array]
                    : [...Array(t.attributes.position.count).keys()],
                ),
                t.applyMatrix4(e.matrix),
                e.matrix.determinant() < 0)
              ) {
                let e = t.index.array;
                for (let t = 0; t < e.length; t += 3) {
                  let n = e[t + 1];
                  ((e[t + 1] = e[t + 2]), (e[t + 2] = n));
                }
              }
              return t;
            }),
            r = ie(t, !1);
          if ((t.forEach((e) => e.dispose()), !r)) continue;
          r.computeBoundingSphere();
          let i = new oe({ side: e.side });
          i.shadowSide = e.shadowSide;
          let a = new h(r, i);
          ((a.castShadow = !0),
            (a.matrixAutoUpdate = !1),
            (a.matrixWorldAutoUpdate = !1),
            (a.name = `shadow-proxy`));
          for (let t of e.list) t.castShadow = !1;
          (S.add(a), n.push({ node: e.node, proxy: a, sources: e.list }));
        }
        C.set(e, n);
      },
      removeProxy(e) {
        let t = C.get(e);
        if (t) {
          for (let e of t)
            (e.proxy.removeFromParent(),
              e.proxy.geometry.dispose(),
              e.proxy.material.dispose());
          C.delete(e);
        }
      },
      get active() {
        return s.length > 0;
      },
      stats: () => ({
        roots: s.length,
        statics: l.length,
        dynamics: u.length,
        builds: v,
        valid: f,
      }),
      dispose() {
        for (let e of [...C.keys()]) this.removeProxy(e);
        ((i.render = a),
          o.depthTexture?.dispose(),
          o.dispose(),
          (s.length = 0));
      },
    }
  );
}
var H = 46,
  Mt = 34,
  Nt = 13,
  Pt = 6,
  Ft = 35.5,
  It = Ft / 2,
  Lt = 0.18,
  Rt = 0.06,
  zt = 293.75,
  Bt = [2.05, 0, 5.64],
  Vt = [
    [0.9806, 0.1961],
    [-0.9806, 0.1961],
  ],
  Ht = 0.281;
function Ut(e, t, n, r) {
  let i = 1 / 0,
    a = Math.max(n, r);
  for (let [n, r] of Vt) {
    let o = e - Bt[0],
      s = t - Bt[2],
      c = o * n + s * r;
    c < 8 ||
      Math.abs(-o * r + s * n) > 7 + a ||
      (i = Math.min(i, Math.max(3, (c - a) * Ht - 1.5)));
  }
  return i;
}
var Wt = [
    {
      walls: [13218954, 12098412, 14206882, 11046502, 14734004],
      roofs: [10120010, 8215110, 11304024, 7164744],
    },
    {
      walls: [9279910, 7306636, 10990527, 6122362, 12174542],
      roofs: [5596015, 4543327, 6253944, 4938084],
    },
    {
      walls: [10838090, 9195325, 12155740, 7620154, 12881006],
      roofs: [6248786, 11051156, 5393480, 7563874],
    },
    {
      walls: [5925694, 7043653, 5069878, 7635021, 4148270],
      roofs: [4016683, 5595450, 3095074, 6713674],
    },
  ],
  Gt = new _(),
  Kt = new _(),
  U = [1, 1],
  W = [0, 1],
  G = [1, 0.74],
  qt = [0, 0.74],
  K = [1, 1.2],
  Jt = [0, 1.16],
  Yt = [1, 0.56];
function Xt(e, t, n, r = 0.5) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = e.attributes.normal;
  for (let e = 0; e < i; e++) {
    let i = Math.abs(o.getY(e)) > r ? n : t;
    ((a[e * 3] = i[0]), (a[e * 3 + 1] = i[1]), (a[e * 3 + 2] = 1));
  }
  return (e.setAttribute(`color`, new s(a, 3)), e);
}
function q(e, t, n, i, a, o, s, c, l = 0) {
  let u = new r(e, t, n).toNonIndexed();
  return (
    u.translate(0, t / 2, 0),
    l && u.rotateY(l),
    u.translate(i, a, o),
    Xt(u, s, c)
  );
}
function J(e, t, n, r, i, a, o, s, c, l = 0) {
  let d = new u(e, t, n, r, 1, !1).toNonIndexed();
  return (
    d.translate(0, n / 2, 0),
    l && d.rotateY(l),
    d.translate(i, a, o),
    Xt(d, s, c, 0.7)
  );
}
function Zt(e, t, n, r, i, a) {
  let o = e + 0.02,
    s = t + 0.02;
  (a.push(q(o, i, r, 0, n, -s / 2 + r / 2, U, K)),
    a.push(q(o, i, r, 0, n, s / 2 - r / 2, U, K)),
    a.push(q(r, i, s - 2 * r, -o / 2 + r / 2, n, 0, U, K)),
    a.push(q(r, i, s - 2 * r, o / 2 - r / 2, n, 0, U, K)));
}
function Qt(e, t, n) {
  n.push(q(e + 0.05, 0.34, e + 0.05, 0, t - 0.34, 0, G, G));
}
function $t(e, t, n, r, i) {
  i.push(q(e, t, n, 0, r, 0, U, W));
}
