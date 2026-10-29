// assets__ui-hhE6L1u7 27 — math
// Lines 10957-11297 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
var Qi = 0.72,
  $i = 46,
  ea = 14;
function ta(e) {
  let t = !1,
    n = 0,
    r = 0,
    i = null,
    a = ``,
    s = null,
    c = new o(),
    l = new o(),
    u = new o(),
    d = new o(),
    f = (e, t) => 1 - Math.exp(-e * t);
  function p(r) {
    r !== t &&
      ((t = r),
      (n = 0),
      e.postfx?.setSamples?.(t ? 4 : 0),
      e.modules.get?.(`environment`)?.setDeployLook?.(t),
      t ||
        ((i = null),
        (a = ``),
        s != null &&
          e.camera &&
          ((e.camera.near = s), e.camera.updateProjectionMatrix()),
        (s = null),
        e.setCamera(`fps`)));
  }
  function m({
    center: t,
    extent: o,
    home: u,
    selected: p,
    pitch: m,
    yaw: h = 0,
  }) {
    let g = Number.isFinite(m) ? m : Qi,
      _ = performance.now() / 1e3,
      v = n ? Math.min(0.1, _ - n) : 0;
    ((n = _), (r += v));
    let y = `${t[0] | 0},${t[2] | 0},${u?.[0] | 0},${u?.[2] | 0}`;
    (i === null || y !== a) &&
      ((a = y),
      (i = (u ? Math.atan2(u[0] - t[0], u[2] - t[2]) : Math.PI * 0.8) + h),
      c.set(t[0], t[1], t[2]));
    let b = p ?? t;
    (l.set(t[0] * 0.62 + b[0] * 0.38, t[1], t[2] * 0.62 + b[2] * 0.38),
      c.lerp(l, v ? f(1.6, v) : 1));
    let x = i + Math.sin(r * 0.045) * 0.22,
      S = Math.max(140, o * 1.72),
      C = e.camera;
    (C && ((s ??= C.near), (C.near = Math.max(s, S * 0.08))),
      d.set(
        c.x + Math.sin(x) * Math.cos(g) * S,
        c.y + Math.sin(g) * S,
        c.z + Math.cos(x) * Math.cos(g) * S,
      ),
      e.setCamera({ pos: [d.x, d.y, d.z], look: [c.x, c.y, c.z], fov: $i }));
  }
  function h(t, n, r = 0) {
    let i = e.camera,
      a = e.renderer?.domElement?.getBoundingClientRect?.();
    return !i || !a || (u.set(t[0], t[1] + r, t[2]).project(i), u.z > 1)
      ? null
      : [
          a.left + ((u.x + 1) / 2) * a.width - n.left,
          a.top + ((1 - u.y) / 2) * a.height - n.top,
        ];
  }
  function g(
    e,
    t,
    { teamColor: n, selectedId: r, allowed: i, letterOnly: a = !1 },
  ) {
    let o = e.getBoundingClientRect(),
      s = Math.min(2, window.devicePixelRatio || 1),
      c = Math.round(o.width * s),
      l = Math.round(o.height * s);
    (e.width !== c || e.height !== l) && ((e.width = c), (e.height = l));
    let d = e.getContext(`2d`);
    (d.setTransform(s, 0, 0, s, 0, 0), d.clearRect(0, 0, o.width, o.height));
    let f = [];
    for (let e of t) {
      if (!e.pos) {
        e.screen = null;
        continue;
      }
      let t = h(e.pos, o),
        n = h(e.pos, o, ea);
      ((e.screen = n), t && n && f.push({ o: e, ground: t, top: n, d: u.z }));
    }
    (f.sort((e, t) => t.d - e.d),
      (d.font = `600 14px 'Barlow Condensed','Bahnschrift',sans-serif`),
      (d.textAlign = `center`),
      (d.textBaseline = `middle`));
    for (let { o: e, ground: t, top: o } of f) {
      let s = e.id === r,
        c = i(e),
        l = e.id === `hq`,
        u = e.team >= 0 ? n(e.team) : `#c9ccce`,
        f = l ? 17 : 15;
      if (
        ((d.globalAlpha = c || s ? 1 : 0.55),
        (d.strokeStyle = s ? `#d4eaf8` : `#ffffff66`),
        (d.lineWidth = s ? 2 : 1),
        d.beginPath(),
        d.moveTo(t[0], t[1]),
        d.lineTo(o[0], o[1] + f),
        d.stroke(),
        (d.fillStyle = s ? `#d4eaf8` : `#ffffffaa`),
        d.beginPath(),
        d.ellipse(t[0], t[1], s ? 7 : 4, s ? 3.5 : 2, 0, 0, Math.PI * 2),
        d.fill(),
        a && !l)
      ) {
        (Ln(d, e, o[0], o[1], e.team >= 0 ? u : `#ecebe7`, !0, s),
          (d.font = `600 14px 'Barlow Condensed','Bahnschrift',sans-serif`),
          (d.textAlign = `center`),
          (d.textBaseline = `middle`));
        continue;
      }
      (s &&
        ((d.strokeStyle = `#d4eaf8`),
        (d.lineWidth = 2),
        d.beginPath(),
        d.arc(o[0], o[1], f + 6, 0, Math.PI * 2),
        d.stroke()),
        (d.fillStyle = `#0b0c0de6`),
        (d.strokeStyle = u),
        (d.lineWidth = 2.5),
        d.beginPath(),
        l
          ? d.rect(o[0] - f, o[1] - f, f * 2, f * 2)
          : d.arc(o[0], o[1], f, 0, Math.PI * 2),
        d.fill(),
        d.stroke(),
        !l &&
          e.progress > 0 &&
          e.progress < 1 &&
          ((d.strokeStyle = e.contested ? `#dd6b5c` : `#ecebe7`),
          (d.lineWidth = 3),
          d.beginPath(),
          d.arc(
            o[0],
            o[1],
            f + 2.5,
            -Math.PI / 2,
            -Math.PI / 2 + Math.PI * 2 * e.progress,
          ),
          d.stroke()),
        (d.fillStyle = e.team >= 0 ? u : `#ecebe7`),
        d.fillText(String(e.letter ?? ``), o[0], o[1] + 1));
    }
    d.globalAlpha = 1;
  }
  return {
    sync: p,
    frame: m,
    project: h,
    draw: g,
    get active() {
      return t;
    },
  };
}
var na = 0.6,
  ra = 4.05,
  ia = 58,
  aa = -0.1,
  oa = -40,
  sa = 120;
function ca(t) {
  let n = !1,
    i = 0,
    s = 0,
    c = oa,
    l = null,
    u = [],
    d = null,
    f = [],
    p = null,
    m = new o(),
    h = new o();
  function _() {
    ((l = new w()), (l.name = `elevator-ride`));
    let n = new a({ color: 2830390, roughness: 0.62, metalness: 0.25 }),
      i = new a({ color: 1382427, roughness: 0.5, metalness: 0.3 }),
      o = new g({ color: 16769712 }),
      s = new g({
        color: 10470620,
        transparent: !0,
        opacity: 0.04,
        depthWrite: !1,
      }),
      c = new r(1, 1, 1);
    f = [n, i, o, s, c];
    let d = (t, n, r, i, a, o, s, u = l) => {
      let d = new e(c, t);
      return (
        d.scale.set(n, r, i),
        d.position.set(a, o, s),
        (d.frustumCulled = !1),
        u.add(d),
        d
      );
    };
    (d(i, 0.05, 3.4, 0.05, -1.08, 0.2, -1.3),
      d(i, 0.05, 3.4, 0.05, 1.08, 0.2, -1.3),
      d(n, 2.2, 0.03, 0.03, 0, -0.62, -1.18),
      d(i, 2.3, 0.06, 0.08, 0, 1.9, -1.3),
      d(s, 2.2, 3.4, 0.01, 0, 0.2, -1.3));
    let p = 2.4,
      m = -3.2;
    (d(n, 0.2, 400, 0.2, -2.4, 0, m), d(n, 0.2, 400, 0.2, p, 0, m));
    let h = Math.ceil(90 / ra);
    for (let e = 0; e < h; e++) {
      let e = new w();
      (l.add(e),
        u.push(e),
        d(n, 5, 0.2, 0.14, 0, 0, m, e),
        d(n, 0.14, 0.2, 3.8, -2.4, 0, -1.3, e),
        d(n, 0.14, 0.2, 3.8, p, 0, -1.3, e));
      let t = d(n, 0.07, ra * 1.15, 0.07, -2.4, ra / 2, -1.3, e);
      t.rotation.x = 0.72;
      let r = d(n, 0.07, ra * 1.15, 0.07, p, ra / 2, -1.3, e);
      ((r.rotation.x = -0.72),
        d(o, 0.16, 0.04, 0.05, -2.05, -0.12, -3.18, e),
        d(o, 0.16, 0.04, 0.05, 2.05, -0.12, -3.18, e));
    }
    t.scene?.add(l);
  }
  function v(e, r) {
    e !== n &&
      ((n = e),
      (i = 0),
      t.postfx?.setSamples?.(n ? 4 : 0),
      n
        ? ((p = r?.elevatorDeploy ? null : (r?.vistaDeploy ?? null)),
          (d = r?.elevatorDeploy),
          c > sa && (c = oa),
          p || (l || _(), (l.visible = !0)))
        : (l && (l.visible = !1), t.setCamera(`fps`)));
  }
  function y() {
    if (!n) return;
    let e = performance.now() / 1e3,
      r = i ? Math.min(0.1, e - i) : 0;
    if (((i = e), (s += r), p)) {
      let [e, n, r] = p.pos,
        [i, a, o] = p.look,
        c = i - e,
        l = o - r,
        u = Math.hypot(c, l) || 1,
        d = Math.sin((s * 2 * Math.PI) / 90) * (p.drift ?? 0);
      t.setCamera({
        pos: [e - (l / u) * d, n + Math.sin(s * 0.21) * 0.6, r + (c / u) * d],
        look: [i, a, o],
        fov: p.fov ?? 55,
      });
      return;
    }
    if (!d) return;
    c += na * r;
    let a = d.floor + c,
      [o, f] = d.pos,
      g = d.yaw ?? 0,
      _ = Math.sin(s * 0.7) * 0.01 + Math.sin(s * 1.9) * 0.003;
    m.set(o, a + Math.sin(s * 1.3) * 0.008, f);
    let v = -Math.sin(g + _),
      y = -Math.cos(g + _);
    (h.set(
      o + v * 10 * Math.cos(aa),
      m.y + Math.sin(aa) * 10,
      f + y * 10 * Math.cos(aa),
    ),
      t.setCamera({ pos: [m.x, m.y, m.z], look: [h.x, h.y, h.z], fov: ia }),
      l.position.set(o, a, f),
      l.rotation.set(0, g, 0));
    let b = ((a % ra) + ra) % ra;
    u.forEach((e, t) => {
      e.position.y = (t - Math.floor(u.length * 0.35)) * ra - b + ra * 0.5;
    });
  }
  function b() {
    l &&= (t.scene?.remove(l), null);
    for (let e of f) e.dispose?.();
    ((f = []), (u = []));
  }
  return {
    sync: v,
    frame: y,
    dispose: b,
    get active() {
      return n;
    },
  };
}
function la(e, t) {
  let n = document.createElement(`div`);
  ((n.hidden = !0),
    n.setAttribute(`aria-label`, `Thermal monocular`),
    (n.style.cssText = `position:fixed;inset:0;z-index:20;pointer-events:none;background:radial-gradient(circle closest-side,transparent 79%,#020304 94%);color:#bcc5c5;font:12px monospace;letter-spacing:2px;text-align:center`));
  let r = document.createElement(`div`);
  ((r.style.cssText = `position:absolute;bottom:9%;width:100%`),
    (r.textContent = `THERMAL  /  WHITE HOT  /  2×    •    H LOWER`),
    n.append(r),
    t.append(n));
  let i = e.events.on(`ui:thermal`, ({ active: e }) => {
      ((n.hidden = !e), (t.dataset.thermal = String(e)));
    }),
    a = document.createElement(`style`);
  return (
    (a.textContent = `[data-thermal="true"] .sl-xh{visibility:hidden!important}`),
    t.append(a),
    {
      dispose() {
        (i?.(), n.remove(), a.remove());
      },
    }
  );
}
var ua = {
    flashPerFrac: 3.2,
    flashMin: 0.32,
    flashFade: 1.15,
    bias: 7,
    rollMin: 0.16,
    rollPerFrac: 1.5,
    rollMax: 0.75,
    headRoll: 1.35,
    pushMin: 0.004,
    pushPerFrac: 0.028,
    pushMax: 0.022,
    omega: 27,
    zeta: 0.38,
    pushFade: 0.07,
  },
  da = (e, t, n) => (e < t ? t : e > n ? n : e),
  fa = Math.PI / 180;
