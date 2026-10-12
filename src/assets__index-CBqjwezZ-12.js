// assets__index-CBqjwezZ 12 — math
// Lines 4562-4896 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
function Nn(e, t, n) {
  let i = t.attributes,
    a = new E();
  if (i.POSITION !== void 0) {
    let e = n.json.accessors[i.POSITION],
      t = e.min,
      r = e.max;
    if (t !== void 0 && r !== void 0) {
      if (
        (a.set(new z(t[0], t[1], t[2]), new z(r[0], r[1], r[2])), e.normalized)
      ) {
        let t = kn(Y[e.componentType]);
        (a.min.multiplyScalar(t), a.max.multiplyScalar(t));
      }
    } else {
      console.warn(
        `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
      );
      return;
    }
  } else return;
  let o = t.targets;
  if (o !== void 0) {
    let e = new z(),
      t = new z();
    for (let r = 0, i = o.length; r < i; r++) {
      let i = o[r];
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max;
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = kn(Y[r.componentType]);
            t.multiplyScalar(e);
          }
          e.max(t);
        } else
          console.warn(
            `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
          );
      }
    }
    a.expandByVector(e);
  }
  e.boundingBox = a;
  let s = new r();
  (a.getCenter(s.center),
    (s.radius = a.min.distanceTo(a.max) / 2),
    (e.boundingSphere = s));
}
function Pn(e, t, n) {
  let r = t.attributes,
    i = [];
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t);
    });
  }
  for (let t in r) {
    let n = xn[t] || t.toLowerCase();
    n in e.attributes || i.push(a(r[t], n));
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t);
    });
    i.push(r);
  }
  return (
    ne.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ne.workingColorSpace}" not supported.`,
      ),
    Q(e, t),
    Nn(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : Tn(e, t.targets, n);
    })
  );
}
function Fn(e) {
  let t = new Set(),
    n = (e) => {
      e?.isTexture && t.add(e);
    };
  (e?.traverse?.((e) => {
    e.geometry && t.add(e.geometry);
    for (let r of Array.isArray(e.material) ? e.material : [e.material])
      if (r) {
        (t.add(r), Object.values(r).forEach(n));
        for (let e of Object.values(r.uniforms ?? {})) n(e?.value);
      }
    e.shadow && t.add(e.shadow);
  }),
    n(e?.background),
    n(e?.environment));
  let r = [];
  for (let e of t)
    try {
      e.dispose?.();
    } catch (e) {
      r.push(e);
    }
  if ((e?.clear?.(), r.length))
    throw AggregateError(r, `Scene resource cleanup failed`);
}
function In(e, n = {}) {
  let r = new Map(),
    i = n.texture ?? new t(),
    a = n.gltf ?? new Vt(),
    o = n.audio ?? new Ce(),
    s = new Set(),
    c = !1,
    l = (e) => {
      e?.isTexture ? e.dispose() : e?.scene && Fn(e.scene);
    },
    u = (e, t) => {
      if (c) return Promise.reject(Error(`Asset store is disposed`));
      if (!r.has(e)) {
        let n = Promise.resolve()
          .then(t)
          .then((e) => {
            if (c) throw (l(e), Error(`Asset finished after disposal`));
            return (s.add(e), e);
          })
          .catch((t) => {
            throw (r.get(e) === n && r.delete(e), t);
          });
        r.set(e, n);
      }
      return r.get(e);
    };
  return {
    loadTexture: (t, n = {}) =>
      u(
        `tex:${t}`,
        () =>
          new Promise((r, a) =>
            i.load(
              t,
              (t) => {
                ((t.colorSpace = n.linear ? L : R),
                  (t.anisotropy = Math.min(
                    8,
                    e.capabilities.getMaxAnisotropy(),
                  )),
                  n.repeat && (t.wrapS = t.wrapT = ge),
                  r(t));
              },
              void 0,
              a,
            ),
          ),
      ),
    loadGLTF: (e) =>
      u(`gltf:${e}`, () => new Promise((t, n) => a.load(e, t, void 0, n))),
    loadAudio: (e) =>
      u(`audio:${e}`, () => new Promise((t, n) => o.load(e, t, void 0, n))),
    cache: r,
    dispose() {
      if (c) return;
      c = !0;
      let e = [];
      for (let t of s)
        try {
          l(t);
        } catch (t) {
          e.push(t);
        }
      if ((s.clear(), r.clear(), e.length))
        throw AggregateError(e, `Asset cleanup failed`);
    },
  };
}
var Ln = F({
  createLoopbackPair: () => Rn,
  createWebSocketTransport: () => zn,
});
function Rn() {
  let e = () => {
      let e = {
        _peer: null,
        _onMsg: null,
        _onClose: null,
        _open: !0,
        _queue: [],
        _flushing: !1,
      };
      return (
        (e.send = (t) => {
          if (!e._open || !e._peer) return;
          let n = t instanceof Uint8Array ? t.slice() : new Uint8Array(t),
            r = e._peer;
          (r._queue.push(n),
            r._flushing ||
              ((r._flushing = !0),
              queueMicrotask(() => {
                r._flushing = !1;
                let e = r._queue;
                r._queue = [];
                for (let t of e) r._open && r._onMsg && r._onMsg(t);
              })));
        }),
        (e.onMessage = (t) => {
          e._onMsg = t;
        }),
        (e.onClose = (t) => {
          e._onClose = t;
        }),
        (e.isOpen = () => e._open),
        (e.close = () => {
          if (!e._open) return;
          ((e._open = !1), e._onClose?.());
          let t = e._peer;
          t && t._open && t.close();
        }),
        e
      );
    },
    t = e(),
    n = e();
  return ((t._peer = n), (n._peer = t), [t, n]);
}
function zn(e, { timeoutMs: t = 2e3 } = {}) {
  return new Promise((n, r) => {
    let i;
    try {
      i = new WebSocket(e);
    } catch (e) {
      r(e);
      return;
    }
    i.binaryType = `arraybuffer`;
    let a = null,
      o = null,
      s = !1,
      c = !1,
      l = (e) => {
        if (!c) {
          ((c = !0), clearTimeout(u));
          try {
            i.close();
          } catch {}
          r(Error(e));
        }
      },
      u = setTimeout(() => l(`Connection timed out`), t);
    ((i.onopen = () => {
      if (c) {
        i.close();
        return;
      }
      ((c = !0),
        (s = !0),
        clearTimeout(u),
        n({
          send: (e) => {
            i.readyState === 1 && i.send(e);
          },
          onMessage: (e) => {
            a = e;
          },
          onClose: (e) => {
            o = e;
          },
          isOpen: () => i.readyState === 1,
          close: () => i.close(),
          url: e,
        }));
    }),
      (i.onmessage = (e) => {
        a && a(new Uint8Array(e.data));
      }),
      (i.onclose = (e) => {
        ((s = !1),
          c
            ? o?.({ code: e.code, reason: e.reason })
            : l(`Connection closed before joining`));
      }),
      (i.onerror = () => {
        s || l(`Connection failed`);
      }));
  });
}
function Bn(e = () => {}) {
  let t = !1,
    n = 0,
    r = [],
    i = (t) => {
      try {
        t()?.catch?.(e);
      } catch (t) {
        e(t);
      }
    },
    a = () => {
      if (t && !n) for (; r.length;) i(r.pop());
    };
  return {
    get closed() {
      return t;
    },
    own(e) {
      (r.push(e), a());
    },
    async hold(e) {
      n++;
      try {
        return await e;
      } finally {
        (n--, a());
      }
    },
    dispose() {
      ((t = !0), a());
    },
  };
}
function Vn(e, t) {
  if (!t || typeof t != `object`) return;
  let n = Object.getOwnPropertyDescriptors(t);
  e.own(() => {
    for (let e of Reflect.ownKeys(t)) Object.hasOwn(n, e) || delete t[e];
    Object.defineProperties(t, n);
  });
}
var Hn = Object.freeze([30, 60, 90, 120, 144, 165, 240, 0]),
  Un = `salient.graphics.frames`;
