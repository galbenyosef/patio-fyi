// assets__index-CBqjwezZ 07 — vite__mapdeps
// Lines 1980-2276 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
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
  Mt = F({
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
        () => import(`./animation-DTvaGqA-.js`),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
      ),
    "../audio/index.js": () =>
      G(
        () => import(`./audio-BO2SJEp_.js`),
        __vite__mapDeps([14, 1, 3, 4, 6, 13, 15, 16, 17, 18, 19]),
      ),
    "../demo/index.js": () =>
      G(
        () => import(`./demo-CYaenSpr.js`),
        __vite__mapDeps([20, 1, 4, 3, 21, 22, 23, 24, 25, 26, 27]),
      ),
    "../destruction/index.js": () =>
      G(
        () => import(`./destruction-BbHyhMIq.js`),
        __vite__mapDeps([28, 1, 26, 27, 29, 4]),
      ),
    "../effects/index.js": () =>
      G(() => import(`./effects-BZzGHRRU.js`), __vite__mapDeps([30, 7, 31])),
    "../environment/index.js": () =>
      G(
        () => import(`./environment-CVWKhKHP.js`),
        __vite__mapDeps([32, 1, 33]),
      ),
    "../gamemodes/index.js": () =>
      G(
        () => import(`./gamemodes-Lk9D-0V6.js`),
        __vite__mapDeps([34, 1, 35, 3, 4]),
      ),
    "../netcode/index.js": () =>
      G(
        () => import(`./netcode-BOGEP_um.js`),
        __vite__mapDeps([36, 1, 37, 38, 39, 6]),
      ),
    "../player/index.js": () =>
      G(
        () => import(`./player-vyh7zp35.js`),
        __vite__mapDeps([40, 1, 3, 4, 6, 22, 41, 42, 43]),
      ),
    "../terrain/index.js": () =>
      G(
        () => import(`./terrain-C3lt_eD1.js`),
        __vite__mapDeps([44, 1, 24, 23, 45, 46, 47, 48, 49, 50]),
      ),
    "../ui/index.js": () =>
      G(
        () => import(`./ui-D46k2G3Q.js`),
        __vite__mapDeps([
          51, 1, 2, 3, 4, 5, 52, 6, 7, 8, 11, 9, 10, 13, 17, 18, 53, 22, 54, 55,
          35, 31, 56, 57, 42, 43, 58, 59, 47, 48, 33, 60, 61, 62,
        ]),
      ),
    "../vehicles/index.js": () =>
      G(
        () => import(`./vehicles-CqLF20DK.js`),
        __vite__mapDeps([63, 1, 6, 19, 64, 4, 22, 3, 54, 65, 39]),
      ),
    "../voice/index.js": () =>
      G(
        () => import(`./voice-CiumGhKs.js`),
        __vite__mapDeps([66, 1, 3, 4, 15, 38]),
      ),
    "../weapons/index.js": () =>
      G(
        () => import(`./weapons-D4QomYwC.js`),
        __vite__mapDeps([
          67, 1, 2, 3, 4, 5, 7, 8, 10, 11, 9, 12, 53, 22, 55, 6, 68, 17, 18, 25,
          56, 69, 41, 42, 58, 59, 47, 48, 33, 70,
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
async function Lt(e) {
  if (!(await It()).client.includes(e)) return { name: e, status: `missing` };
  try {
    let t = Ft[`../${e}/index.js`];
    if (!t) return { name: e, status: `missing` };
    let n = (await t()).default;
    return !n || n.name !== e
      ? {
          name: e,
          status: `failed`,
          error: Error(
            `module '${e}' must default-export a descriptor with name '${e}'`,
          ),
        }
      : { name: e, status: `loaded`, desc: n };
  } catch (t) {
    return { name: e, status: `failed`, error: t };
  }
}
