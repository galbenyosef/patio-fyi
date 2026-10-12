/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e({ now: e = Date.now, baseMs: t = 5e3, maxMs: n = 3e4 } = {}) {
  let r = new Map();
  return {
    allows(t) {
      return !r.has(t) || e() >= r.get(t).retryAt;
    },
    success(e) {
      r.delete(e);
    },
    fail(i) {
      let a = (r.get(i)?.attempts ?? 0) + 1,
        o = e() + Math.min(n, t * 2 ** (a - 1));
      return (r.set(i, { attempts: a, retryAt: o }), o);
    },
    clear() {
      r.clear();
    },
    status(e) {
      return r.get(e) ?? null;
    },
  };
}
export { e as t };
//# sourceMappingURL=load-backoff-Cpa3_Evg.js.map
