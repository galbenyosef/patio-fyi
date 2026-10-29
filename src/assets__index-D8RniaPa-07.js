// assets__index-D8RniaPa 07 — vite__mapdeps
// Lines 1952-2294 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
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
function Et(e = (e, t, n) => console.error(`[events:${e}] ${n}:`, t)) {
  let t = new Map(),
    n = {
      on(e, n, r = `core`) {
        t.has(e) || t.set(e, new Set());
        let i = { fn: n, owner: r, disabled: !1 };
        return (t.get(e).add(i), () => t.get(e)?.delete(i));
      },
      once(e, t, r = `core`) {
        let i = n.on(
          e,
          (e) => {
            (i(), t(e));
          },
          r,
        );
        return i;
      },
      off(e, n) {
        let r = t.get(e);
        if (r) for (let e of r) e.fn === n && r.delete(e);
      },
      emit(n, r) {
        let i = t.get(n);
        if (!i || i.size === 0) return 0;
        let a = 0;
        for (let t of Array.from(i))
          if (!t.disabled)
            try {
              (t.fn(r, n), a++);
            } catch (r) {
              e(t.owner, r, n);
            }
        return a;
      },
      disableOwner(e) {
        for (let n of t.values())
          for (let t of n) t.owner === e && (t.disabled = !0);
      },
      removeOwner(e) {
        for (let n of t.values())
          for (let t of Array.from(n)) t.owner === e && n.delete(t);
      },
      forOwner(e) {
        return {
          on: (t, r) => n.on(t, r, e),
          once: (t, r) => n.once(t, r, e),
          off: n.off,
          emit: n.emit,
        };
      },
      listenerCount(e) {
        return t.get(e)?.size ?? 0;
      },
      clear() {
        t.clear();
      },
    };
  return n;
}
function Dt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619) >>> 0));
  return t >>> 0;
}
function Ot(e = 1) {
  let t = (typeof e == `string` ? Dt(e) : e >>> 0) || 2654435769,
    n = {
      seed: t,
      next() {
        t = (t + 1831565813) >>> 0;
        let e = t;
        return (
          (e = Math.imul(e ^ (e >>> 15), e | 1)),
          (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
          ((e ^ (e >>> 14)) >>> 0) / 4294967296
        );
      },
      range(e, t) {
        return e + (t - e) * n.next();
      },
      int(e, t) {
        return e + Math.floor(n.next() * (t - e + 1));
      },
      pick(e) {
        return e[Math.floor(n.next() * e.length)];
      },
      chance(e) {
        return n.next() < e;
      },
      gauss() {
        let e = 0,
          t = 0;
        for (; e === 0;) e = n.next();
        for (; t === 0;) t = n.next();
        return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * t);
      },
      fork(e) {
        return Ot((t ^ Dt(String(e))) >>> 0 || 1);
      },
      state() {
        return t;
      },
    };
  return n;
}
var kt = `modulepreload`,
  At = function (e) {
    return `/` + e;
  },
  jt = {},
  G = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = At(t, n)), (t = s(t)), t in jt)) return;
          jt[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : kt),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Mt = he({
    MODULE_NAMES: () => Nt,
    getModuleManifest: () => It,
    loadClientModule: () => Lt,
  }),
  Nt = [
    `terrain`,
    `environment`,
    `player`,
    `weapons`,
    `animation`,
    `destruction`,
    `vehicles`,
    `netcode`,
    `bots`,
    `gamemodes`,
    `ui`,
    `audio`,
    `voice`,
    `effects`,
    `demo`,
  ],
  Pt = null,
  Ft = Object.assign({
    "../animation/index.js": () =>
      G(
        () => import(`./animation-Bs1XLGoh.js`),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        ]),
      ),
    "../audio/index.js": () =>
      G(
        () => import(`./audio-D3RxdFdK.js`),
        __vite__mapDeps([18, 1, 3, 4, 6, 14, 16, 19, 20, 21, 22, 23]),
      ),
    "../demo/index.js": () =>
      G(
        () => import(`./demo-BF8qQ4c6.js`),
        __vite__mapDeps([24, 1, 4, 3, 25, 26, 14, 27, 28, 29, 30, 31]),
      ),
    "../destruction/index.js": () =>
      G(
        () => import(`./destruction-Dzcch1V2.js`),
        __vite__mapDeps([32, 1, 30, 31, 33, 4]),
      ),
    "../effects/index.js": () =>
      G(
        () => import(`./effects---y_dmg-.js`),
        __vite__mapDeps([34, 7, 11, 35, 36]),
      ),
    "../environment/index.js": () =>
      G(
        () => import(`./environment-DS2NM-G_.js`),
        __vite__mapDeps([37, 1, 38]),
      ),
    "../gamemodes/index.js": () =>
      G(
        () => import(`./gamemodes-CXbD6WoW.js`),
        __vite__mapDeps([39, 1, 40, 3, 4]),
      ),
    "../netcode/index.js": () =>
      G(
        () => import(`./netcode-BAIwcaWS.js`),
        __vite__mapDeps([41, 1, 42, 43, 44, 6]),
      ),
    "../player/index.js": () =>
      G(
        () => import(`./player-BLC8lD2a.js`),
        __vite__mapDeps([45, 1, 3, 4, 6, 17, 26, 14, 46, 47, 48]),
      ),
    "../terrain/index.js": () =>
      G(
        () => import(`./terrain-D4VU5r38.js`),
        __vite__mapDeps([49, 1, 28, 27, 50, 51, 52, 53, 54, 55]),
      ),
    "../ui/index.js": () =>
      G(
        () => import(`./ui-hhE6L1u7.js`),
        __vite__mapDeps([
          56, 1, 2, 3, 4, 5, 57, 6, 7, 10, 8, 9, 11, 14, 16, 17, 21, 22, 58, 26,
          59, 60, 40, 35, 36, 61, 15, 62, 47, 48, 63, 64, 52, 53, 38, 65, 66,
          67,
        ]),
      ),
    "../vehicles/index.js": () =>
      G(
        () => import(`./vehicles-HlJi7hcV.js`),
        __vite__mapDeps([68, 1, 6, 23, 69, 4, 26, 3, 14, 59, 29, 70, 44]),
      ),
    "../voice/index.js": () =>
      G(
        () => import(`./voice-DdE4VFHL.js`),
        __vite__mapDeps([71, 1, 3, 4, 19, 43]),
      ),
    "../weapons/index.js": () =>
      G(
        () => import(`./weapons-l6nEMnye.js`),
        __vite__mapDeps([
          72, 1, 2, 3, 4, 5, 7, 9, 10, 8, 11, 12, 14, 15, 13, 26, 60, 6, 73, 22,
          29, 36, 61, 16, 74, 46, 47, 63, 17, 64, 52, 53, 38, 75, 58,
        ]),
      ),
  });
function It() {
  return (
    (Pt ||= fetch(`/__modules.json`, { cache: `no-store` })
      .then((e) => (e.ok ? e.json() : null))
      .catch(() => null)
      .then((e) => e ?? { client: Nt, server: Nt })),
    Pt
  );
}
