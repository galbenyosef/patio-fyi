// assets__environment-DS2NM-G_ 06 — push
// Lines 1341-1671 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
function Mt(
  e,
  t,
  n,
  {
    reversedDepth: i = !1,
    proxyRange: a = () => 0,
    dynamic: o = () => !0,
  } = {},
) {
  let s = e.shadowMap,
    l = s.render,
    u = jt(n, { reversedDepth: i, name: `sunLight.staticShadow` });
  (e.initRenderTarget(u), t.shadow.map && e.initRenderTarget(t.shadow.map));
  let f = [],
    p = new T(),
    m = [],
    h = [],
    _ = !1,
    v = ``,
    y = -1,
    b = 0,
    x = -1,
    S = 0,
    C = [t];
  function w() {
    ((m = []), (h = []));
    let e = (t) => {
      if (t.userData.dynamicShadow) {
        h.push(t);
        return;
      }
      t.castShadow && (t.isMesh || t.isLine || t.isPoints) && m.push(t);
      for (let n of t.children) e(n);
    };
    for (let t of f) e(t);
  }
  function E(n, r) {
    w();
    for (let e of h)
      ((e.userData.shadowCacheVisible = e.visible), (e.visible = !1));
    p.children = f;
    try {
      l.call(s, n, p, r);
    } finally {
      p.children = [];
      for (let e of h) e.visible = e.userData.shadowCacheVisible;
    }
    (e.copyTextureToTexture(t.shadow.map.depthTexture, u.depthTexture),
      (_ = !0),
      (y = -1),
      S++);
  }
  let D = new ae(),
    O = new Map(),
    k = new ae(),
    A = new c();
  function j(e) {
    let t = a() || 0;
    for (let [n, r] of O) {
      let i = n;
      for (; i.parent;) i = i.parent;
      if (
        !i.isScene ||
        (t > 0 &&
          e &&
          A.setFromMatrixPosition(n.matrixWorld).distanceToSquared(e.position) >
            t * t)
      ) {
        for (let e of r) e.proxy.visible = !1;
        continue;
      }
      for (let e of r) {
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
  let M = (t) => {
    let n = e.clear;
    e.clear = () => {};
    try {
      t();
    } finally {
      e.clear = n;
    }
  };
  return (
    (s.render = function (n, r, i) {
      if (!n.includes(t) || !t.shadow.map) return l.call(s, n, r, i);
      if (!f.length) {
        (l.call(s, n, r, i), O.size && (j(i), M(() => l.call(s, n, D, i))));
        return;
      }
      if (x === b) return;
      if (
        ((x = b),
        (!_ || (y >= 0 && performance.now() - y > 250)) && E(C, i),
        e.copyTextureToTexture(u.depthTexture, t.shadow.map.depthTexture),
        !o())
      ) {
        M(() => l.call(s, n, k, i));
        return;
      }
      let a = m.map((e) => e.castShadow);
      for (let e of m) e.castShadow = !1;
      try {
        M(() => l.call(s, n, r, i));
      } finally {
        m.forEach((e, t) => {
          e.castShadow = a[t];
        });
      }
      O.size && (j(i), M(() => l.call(s, n, D, i)));
    }),
    {
      addRoot(e) {
        (f.includes(e) || f.push(e), (_ = !1));
      },
      setKey(e) {
        e !== v && ((v = e), (_ = !1));
      },
      invalidate(e = !1) {
        e ? (_ = !1) : y < 0 && (y = performance.now());
      },
      nextFrame() {
        b++;
      },
      addProxy(e) {
        if (O.has(e)) return;
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
            i = ne(t, !1);
          if ((t.forEach((e) => e.dispose()), !i)) continue;
          i.computeBoundingSphere();
          let a = new g({ side: e.side });
          a.shadowSide = e.shadowSide;
          let o = new r(i, a);
          ((o.castShadow = !0),
            (o.matrixAutoUpdate = !1),
            (o.matrixWorldAutoUpdate = !1),
            (o.name = `shadow-proxy`));
          for (let t of e.list) t.castShadow = !1;
          (D.add(o), n.push({ node: e.node, proxy: o, sources: e.list }));
        }
        O.set(e, n);
      },
      removeProxy(e) {
        let t = O.get(e);
        if (t) {
          for (let e of t)
            (e.proxy.removeFromParent(),
              e.proxy.geometry.dispose(),
              e.proxy.material.dispose());
          O.delete(e);
        }
      },
      get active() {
        return f.length > 0;
      },
      stats: () => ({
        roots: f.length,
        statics: m.length,
        dynamics: h.length,
        builds: S,
        valid: _,
      }),
      dispose() {
        for (let e of [...O.keys()]) this.removeProxy(e);
        ((s.render = l),
          u.depthTexture?.dispose(),
          u.dispose(),
          (f.length = 0));
      },
    }
  );
}
var V = 46,
  Nt = 34,
  Pt = 13,
  Ft = 6,
  It = 35.5,
  Lt = It / 2,
  Rt = 0.18,
  zt = 0.06,
  Bt = 293.75,
  Vt = [2.05, 0, 5.64],
  Ht = [
    [0.9806, 0.1961],
    [-0.9806, 0.1961],
  ],
  Ut = 0.281;
function Wt(e, t, n, r) {
  let i = 1 / 0,
    a = Math.max(n, r);
  for (let [n, r] of Ht) {
    let o = e - Vt[0],
      s = t - Vt[2],
      c = o * n + s * r;
    c < 8 ||
      Math.abs(-o * r + s * n) > 7 + a ||
      (i = Math.min(i, Math.max(3, (c - a) * Ut - 1.5)));
  }
  return i;
}
var Gt = [
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
  Kt = new _(),
  qt = new _(),
  H = [1, 1],
  U = [0, 1],
  W = [1, 0.74],
  Jt = [0, 0.74],
  G = [1, 1.2],
  Yt = [0, 1.16],
  K = [1, 0.56];
function Xt(e, t, n, r = 0.5) {
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = e.attributes.normal;
  for (let e = 0; e < i; e++) {
    let i = Math.abs(o.getY(e)) > r ? n : t;
    ((a[e * 3] = i[0]), (a[e * 3 + 1] = i[1]), (a[e * 3 + 2] = 1));
  }
  return (e.setAttribute(`color`, new l(a, 3)), e);
}
function q(e, t, n, r, i, o, s, c, l = 0) {
  let u = new a(e, t, n).toNonIndexed();
  return (
    u.translate(0, t / 2, 0),
    l && u.rotateY(l),
    u.translate(r, i, o),
    Xt(u, s, c)
  );
}
function J(e, t, n, r, i, a, o, s, c, l = 0) {
  let u = new N(e, t, n, r, 1, !1).toNonIndexed();
  return (
    u.translate(0, n / 2, 0),
    l && u.rotateY(l),
    u.translate(i, a, o),
    Xt(u, s, c, 0.7)
  );
}
function Zt(e, t, n, r, i, a) {
  let o = e + 0.02,
    s = t + 0.02;
  (a.push(q(o, i, r, 0, n, -s / 2 + r / 2, H, G)),
    a.push(q(o, i, r, 0, n, s / 2 - r / 2, H, G)),
    a.push(q(r, i, s - 2 * r, -o / 2 + r / 2, n, 0, H, G)),
    a.push(q(r, i, s - 2 * r, o / 2 - r / 2, n, 0, H, G)));
}
function Qt(e, t, n) {
  n.push(q(e + 0.05, 0.34, e + 0.05, 0, t - 0.34, 0, W, W));
}
function $t(e, t, n, r, i) {
  i.push(q(e, t, n, 0, r, 0, H, U));
}
