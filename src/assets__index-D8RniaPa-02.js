// assets__index-D8RniaPa 02 — math
// Lines 331-542 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
function et(e, { post: t = !0, loop: n = null, framePolicy: r = null } = {}) {
  let i = e.renderer,
    a = i?.getContext?.();
  if (!i || !a || typeof requestAnimationFrame != `function`) return null;
  let o = (window.__stalls = {
    build:
      document
        .querySelector(`script[type=module][src]`)
        ?.src.split(`/`)
        .pop() ?? ``,
    ua: navigator.userAgent,
    gpu: ``,
    size: [innerWidth, innerHeight, devicePixelRatio],
    cores: navigator.hardwareConcurrency,
    spawnAt: null,
    gaps: [],
    gl: [],
    hidden: [],
    profiler: `off`,
    stacks: [],
  });
  try {
    let e = a.getExtension(`WEBGL_debug_renderer_info`);
    o.gpu = e ? a.getParameter(e.UNMASKED_RENDERER_WEBGL) : ``;
  } catch {}
  let s = 2e4,
    c = new Float32Array(s),
    l = 0,
    u = null,
    d = [],
    f = !1,
    p = performance.now(),
    m = 0,
    h = null,
    g = () => ({
      p: i.info.programs?.length ?? 0,
      t: i.info.memory.textures,
      g: i.info.memory.geometries,
      h: Math.round((performance.memory?.usedJSHeapSize ?? 0) / 1048576),
    }),
    v = g();
  for (let e of $e) {
    let t = a[e];
    typeof t == `function` &&
      ((a[e] = function (...n) {
        let r = performance.now();
        try {
          return t.apply(this, n);
        } finally {
          let t = performance.now() - r;
          t > Qe &&
            o.gl.length < 200 &&
            o.gl.push({ at: Math.round(r), ms: Math.round(t), key: e });
        }
      }),
      d.push(() => {
        a[e] = t;
      }));
  }
  let y = () =>
    o.hidden.push({
      at: Math.round(performance.now()),
      hidden: document.hidden,
    });
  (document.addEventListener(`visibilitychange`, y),
    d.push(() => document.removeEventListener(`visibilitychange`, y)));
  try {
    typeof window.Profiler == `function` &&
      ((h = new window.Profiler({ sampleInterval: 10, maxBufferSize: 3e4 })),
      (o.profiler = `on`));
  } catch (e) {
    o.profiler = String(e?.message ?? e).slice(0, 80);
  }
  let b = () => {
      let t = e.modules.get(`player`)?.getLocalEntity?.();
      return t && !(t.state & _.DEAD) ? t : null;
    },
    x = () => {
      if (f) return;
      let e = performance.now(),
        t = e - p;
      if (
        (o.spawnAt == null && b()
          ? ((o.spawnAt = Math.round(e)), (u = n?.hist() ?? null))
          : o.spawnAt != null && !document.hidden && l < s && (c[l++] = t),
        t > Xe && !document.hidden && o.gaps.length < 300)
      ) {
        let e = g();
        o.gaps.push({
          at: Math.round(p),
          ms: Math.round(t),
          programs: e.p - v.p,
          textures: e.t - v.t,
          geometries: e.g - v.g,
          heap: e.h - v.h,
        });
      }
      if (((v = g()), (p = e), o.spawnAt != null && e - o.spawnAt > Ze * 1e3))
        return w();
      m = requestAnimationFrame(x);
    };
  async function S() {
    if (!h) return;
    let e = await h.stop();
    h = null;
    let t = o.gaps.filter((e) => o.spawnAt != null && e.at >= o.spawnAt - 2e3);
    if (!t.length) return;
    let n = (t) => {
      let n = e.frames[t];
      return n
        ? `${n.name || `(anon)`} ${(e.resources[n.resourceId] ?? ``).split(`/`).pop()}:${n.line ?? 0}:${n.column ?? 0}`
        : `?`;
    };
    for (let r of t.slice(0, 12)) {
      let t = new Map(),
        i = new Map(),
        a = 0;
      for (let o of e.samples) {
        if (o.timestamp < r.at || o.timestamp > r.at + r.ms) continue;
        if ((a++, o.stackId == null)) {
          t.set(`(native/idle)`, (t.get(`(native/idle)`) ?? 0) + 1);
          continue;
        }
        let s = o.stackId,
          c = !0,
          l = new Set();
        for (; s != null;) {
          let r = e.stacks[s],
            a = n(r.frameId);
          ((c &&= (t.set(a, (t.get(a) ?? 0) + 1), !1)),
            l.has(a) || (l.add(a), i.set(a, (i.get(a) ?? 0) + 1)),
            (s = r.parentId));
        }
      }
      let s = (e) =>
        [...e]
          .sort((e, t) => t[1] - e[1])
          .slice(0, 8)
          .map(([e, t]) => `${Math.round((t / Math.max(1, a)) * 100)}% ${e}`);
      o.stacks.push({
        at: r.at,
        ms: r.ms,
        samples: a,
        self: s(t),
        inclusive: s(i),
      });
    }
  }
  function C() {
    if (o.spawnAt == null) return null;
    let e = (e, t) =>
        e.length
          ? +e[Math.min(e.length - 1, Math.floor(t * e.length))].toFixed(1)
          : null,
      t = c.slice(0, l).sort(),
      i = {
        limit: r?.get?.().limit ?? null,
        raf: {
          n: l,
          p50: e(t, 0.5),
          p95: e(t, 0.95),
          p99: e(t, 0.99),
          max: e(t, 1),
        },
      };
    if (n && u) {
      let e = n.hist().map((e, t) => e - u[t]),
        t = e.reduce((e, t) => e + t, 0),
        r = (n) => {
          let r = 0;
          for (let i = 0; i < e.length; i++)
            if (((r += e[i]), r >= n * t)) return H[i] ?? 999;
          return null;
        };
      i.rendered = {
        n: t,
        p50: r(0.5),
        p95: r(0.95),
        p99: r(0.99),
        edges: H,
        hist: e,
        fps: Math.round(n.fps),
        lowFps: Math.round(n.lowFps),
      };
    }
    return i;
  }
  async function w() {
    if (!f) {
      ((f = !0), cancelAnimationFrame(m));
      for (let e of d.splice(0)) e();
      try {
        o.pacing = C();
      } catch {}
      try {
        await S();
      } catch (e) {
        o.profiler = `failed: ` + String(e?.message ?? e).slice(0, 80);
      }
      if (((o.done = !0), console.log(`[stalls]`, o), t))
        try {
          await fetch(`/diag`, {
            method: `POST`,
            headers: { "Content-Type": `application/json` },
            body: JSON.stringify(o).slice(0, 6e4),
            keepalive: !0,
          });
        } catch {}
    }
  }
  return ((m = requestAnimationFrame(x)), { finish: w, report: o });
}
