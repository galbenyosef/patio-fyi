// assets__index-CBqjwezZ 08 — register
// Lines 2277-2602 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
function Rt(e) {
  let t = new Map(),
    n = null,
    r = `mid50`,
    i = !1,
    a = new z();
  function o() {
    if (n) return n;
    let t = e.modules.get(`player`)?.getLocalEntity?.();
    return t
      ? [t.pos[0], t.pos[1] + 1, t.pos[2]]
      : [0, e.world.map.getHeight(0, 0), 0];
  }
  function s(t, n, r, i, s = 70) {
    let c = o(),
      l = e.world.map.getHeight(c[0] + n[0], c[2] + n[2]),
      u = Math.max(c[1] + r, l + 1.5);
    (t.position.set(c[0] + n[0], u, c[2] + n[2]),
      t.lookAt(i ? a.set(...i) : a.set(c[0], c[1], c[2])),
      (t.fov = s),
      t.updateProjectionMatrix());
  }
  let c = (e, t) => [
    Math.sin((t * Math.PI) / 180) * e,
    0,
    Math.cos((t * Math.PI) / 180) * e,
  ];
  return (
    t.set(`fps`, (t) => {
      let n = e.modules.get(`player`),
        r = n?.getLocalEntity?.();
      r && n.eyeHeight
        ? (t.position.set(r.pos[0], r.pos[1] + n.eyeHeight(r), r.pos[2]),
          t.rotation.set(r.pitch, r.yaw, 0, `YXZ`),
          (t.fov = 75),
          t.updateProjectionMatrix())
        : s(t, c(120, 35), 70, null, 60);
    }),
    t.set(`close5`, (e) => s(e, c(5, 20), 1.6, null, 60)),
    t.set(`mid50`, (e) => s(e, c(50, 30), 12, null, 60)),
    t.set(`far300`, (e) => s(e, c(300, 35), 60, null, 55)),
    t.set(`overview`, (e) => s(e, [0, 0, 800], 800, null, 50)),
    {
      get current() {
        return r;
      },
      setFocus(e) {
        i || (n = e ? [e[0], e[1], e[2]] : null);
      },
      register(e, n) {
        i || t.set(e, n);
      },
      names() {
        return Array.from(t.keys());
      },
      apply(n) {
        if (i) return !1;
        let o = e.camera;
        if (n && typeof n == `object`)
          return (
            n.pos && o.position.set(...n.pos),
            n.look && o.lookAt(a.set(...n.look)),
            n.fov && ((o.fov = n.fov), o.updateProjectionMatrix()),
            (r = `custom`),
            !0
          );
        let l = String(n || `mid50`);
        if (l.startsWith(`orbit:`)) {
          let e = parseFloat(l.slice(6)) || 0;
          return (s(o, c(50, e), 12, null, 60), (r = l), !0);
        }
        let u = t.get(l);
        return u ? (u(o), (r = l), !0) : !1;
      },
      dispose() {
        i || ((i = !0), t.clear(), (n = null), (r = `disposed`), (e = null));
      },
    }
  );
}
function zt(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    Bt(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function Bt(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    Bt(e.children[r], t.children[r], n);
}
var Vt = class extends x {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new Kt(e);
      }),
      this.register(function (e) {
        return new qt(e);
      }),
      this.register(function (e) {
        return new nn(e);
      }),
      this.register(function (e) {
        return new rn(e);
      }),
      this.register(function (e) {
        return new an(e);
      }),
      this.register(function (e) {
        return new Yt(e);
      }),
      this.register(function (e) {
        return new Xt(e);
      }),
      this.register(function (e) {
        return new Zt(e);
      }),
      this.register(function (e) {
        return new Qt(e);
      }),
      this.register(function (e) {
        return new Gt(e);
      }),
      this.register(function (e) {
        return new $t(e);
      }),
      this.register(function (e) {
        return new Jt(e);
      }),
      this.register(function (e) {
        return new tn(e);
      }),
      this.register(function (e) {
        return new en(e);
      }),
      this.register(function (e) {
        return new Ut(e);
      }),
      this.register(function (e) {
        return new on(e, q.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new on(e, q.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new sn(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = C.extractUrlBase(e);
      a = C.resolveURL(t, this.path);
    } else a = C.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new Ne(this.manager);
    (s.setPath(this.path),
      s.setResponseType(`arraybuffer`),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (n) {
          try {
            i.parse(
              n,
              a,
              function (n) {
                (t(n), i.manager.itemEnd(e));
              },
              o,
            );
          } catch (e) {
            o(e);
          }
        },
        n,
        o,
      ));
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this);
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this);
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this);
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, r) {
    let i,
      a = {},
      o = {},
      s = new TextDecoder();
    if (typeof e == `string`) i = JSON.parse(e);
    else if (e instanceof ArrayBuffer) {
      if (s.decode(new Uint8Array(e, 0, 4)) === cn) {
        try {
          a[q.KHR_BINARY_GLTF] = new dn(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[q.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(s.decode(e));
    } else i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      r &&
        r(
          Error(
            `THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`,
          ),
        );
      return;
    }
    let c = new Mn(i, {
      path: t || this.resourcePath || ``,
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      let t = this.pluginCallbacks[e](c);
      (t.name ||
        console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
        (o[t.name] = t),
        (a[t.name] = !0));
    }
    if (i.extensionsUsed)
      for (let e = 0; e < i.extensionsUsed.length; ++e) {
        let t = i.extensionsUsed[e],
          n = i.extensionsRequired || [];
        switch (t) {
          case q.KHR_MATERIALS_UNLIT:
            a[t] = new Wt();
            break;
          case q.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new fn(i, this.dracoLoader);
            break;
          case q.KHR_TEXTURE_TRANSFORM:
            a[t] = new pn();
            break;
          case q.KHR_MESH_QUANTIZATION:
            a[t] = new mn();
            break;
          default:
            n.indexOf(t) >= 0 &&
              o[t] === void 0 &&
              console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`);
        }
      }
    (c.setExtensions(a), c.setPlugins(o), c.parse(n, r));
  }
  parseAsync(e, t) {
    let n = this;
    return new Promise(function (r, i) {
      n.parse(e, t, r, i);
    });
  }
};
function Ht() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, n) {
      e[t] = n;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
function K(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
