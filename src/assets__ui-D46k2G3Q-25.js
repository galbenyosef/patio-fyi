// assets__ui-D46k2G3Q 25 — math
// Lines 10615-10930 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var Ti = 0.72,
  Ei = 46,
  Di = 14;
function Oi(e) {
  let t = !1,
    n = 0,
    r = 0,
    i = null,
    a = ``,
    o = null,
    s = new L(),
    c = new L(),
    l = new L(),
    u = new L(),
    d = (e, t) => 1 - Math.exp(-e * t);
  function f(r) {
    r !== t &&
      ((t = r),
      (n = 0),
      e.postfx?.setSamples?.(t ? 4 : 0),
      e.modules.get?.(`environment`)?.setDeployLook?.(t),
      t ||
        ((i = null),
        (a = ``),
        o != null &&
          e.camera &&
          ((e.camera.near = o), e.camera.updateProjectionMatrix()),
        (o = null),
        e.setCamera(`fps`)));
  }
  function p({ center: t, extent: l, home: f, selected: p, pitch: m }) {
    let h = Number.isFinite(m) ? m : Ti,
      g = performance.now() / 1e3,
      _ = n ? Math.min(0.1, g - n) : 0;
    ((n = g), (r += _));
    let v = `${t[0] | 0},${t[2] | 0},${f?.[0] | 0},${f?.[2] | 0}`;
    (i === null || v !== a) &&
      ((a = v),
      (i = f ? Math.atan2(f[0] - t[0], f[2] - t[2]) : Math.PI * 0.8),
      s.set(t[0], t[1], t[2]));
    let y = p ?? t;
    (c.set(t[0] * 0.62 + y[0] * 0.38, t[1], t[2] * 0.62 + y[2] * 0.38),
      s.lerp(c, _ ? d(1.6, _) : 1));
    let b = i + Math.sin(r * 0.045) * 0.22,
      x = Math.max(140, l * 1.72),
      S = e.camera;
    (S && ((o ??= S.near), (S.near = Math.max(o, x * 0.08))),
      u.set(
        s.x + Math.sin(b) * Math.cos(h) * x,
        s.y + Math.sin(h) * x,
        s.z + Math.cos(b) * Math.cos(h) * x,
      ),
      e.setCamera({ pos: [u.x, u.y, u.z], look: [s.x, s.y, s.z], fov: Ei }));
  }
  function m(t, n, r = 0) {
    let i = e.camera,
      a = e.renderer?.domElement?.getBoundingClientRect?.();
    return !i || !a || (l.set(t[0], t[1] + r, t[2]).project(i), l.z > 1)
      ? null
      : [
          a.left + ((l.x + 1) / 2) * a.width - n.left,
          a.top + ((1 - l.y) / 2) * a.height - n.top,
        ];
  }
  function h(
    e,
    t,
    { teamColor: n, selectedId: r, allowed: i, letterOnly: a = !1 },
  ) {
    let o = e.getBoundingClientRect(),
      s = Math.min(2, window.devicePixelRatio || 1),
      c = Math.round(o.width * s),
      u = Math.round(o.height * s);
    (e.width !== c || e.height !== u) && ((e.width = c), (e.height = u));
    let d = e.getContext(`2d`);
    (d.setTransform(s, 0, 0, s, 0, 0), d.clearRect(0, 0, o.width, o.height));
    let f = [];
    for (let e of t) {
      if (!e.pos) {
        e.screen = null;
        continue;
      }
      let t = m(e.pos, o),
        n = m(e.pos, o, Di);
      ((e.screen = n), t && n && f.push({ o: e, ground: t, top: n, d: l.z }));
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
        (Dn(d, e, o[0], o[1], e.team >= 0 ? u : `#ecebe7`, !0, s),
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
    sync: f,
    frame: p,
    project: m,
    draw: h,
    get active() {
      return t;
    },
  };
}
var ki = 0.6,
  Ai = 4.05,
  ji = 58,
  Mi = -0.1,
  Ni = -40,
  Pi = 120;
function Fi(e) {
  let t = !1,
    n = 0,
    i = 0,
    a = Ni,
    o = null,
    s = [],
    c = null,
    l = [],
    u = null,
    d = new L(),
    f = new L();
  function p() {
    ((o = new M()), (o.name = `elevator-ride`));
    let t = new y({ color: 2830390, roughness: 0.62, metalness: 0.25 }),
      n = new y({ color: 1382427, roughness: 0.5, metalness: 0.3 }),
      i = new se({ color: 16769712 }),
      a = new se({
        color: 10470620,
        transparent: !0,
        opacity: 0.04,
        depthWrite: !1,
      }),
      c = new r(1, 1, 1);
    l = [t, n, i, a, c];
    let u = (e, t, n, r, i, a, s, l = o) => {
      let u = new h(c, e);
      return (
        u.scale.set(t, n, r),
        u.position.set(i, a, s),
        (u.frustumCulled = !1),
        l.add(u),
        u
      );
    };
    (u(n, 0.05, 3.4, 0.05, -1.08, 0.2, -1.3),
      u(n, 0.05, 3.4, 0.05, 1.08, 0.2, -1.3),
      u(t, 2.2, 0.03, 0.03, 0, -0.62, -1.18),
      u(n, 2.3, 0.06, 0.08, 0, 1.9, -1.3),
      u(a, 2.2, 3.4, 0.01, 0, 0.2, -1.3));
    let d = 2.4,
      f = -3.2;
    (u(t, 0.2, 400, 0.2, -2.4, 0, f), u(t, 0.2, 400, 0.2, d, 0, f));
    let p = Math.ceil(90 / Ai);
    for (let e = 0; e < p; e++) {
      let e = new M();
      (o.add(e),
        s.push(e),
        u(t, 5, 0.2, 0.14, 0, 0, f, e),
        u(t, 0.14, 0.2, 3.8, -2.4, 0, -1.3, e),
        u(t, 0.14, 0.2, 3.8, d, 0, -1.3, e));
      let n = u(t, 0.07, Ai * 1.15, 0.07, -2.4, Ai / 2, -1.3, e);
      n.rotation.x = 0.72;
      let r = u(t, 0.07, Ai * 1.15, 0.07, d, Ai / 2, -1.3, e);
      ((r.rotation.x = -0.72),
        u(i, 0.16, 0.04, 0.05, -2.05, -0.12, -3.18, e),
        u(i, 0.16, 0.04, 0.05, 2.05, -0.12, -3.18, e));
    }
    e.scene?.add(o);
  }
  function m(r, i) {
    r !== t &&
      ((t = r),
      (n = 0),
      e.postfx?.setSamples?.(t ? 4 : 0),
      t
        ? ((u = i?.elevatorDeploy ? null : (i?.vistaDeploy ?? null)),
          (c = i?.elevatorDeploy),
          a > Pi && (a = Ni),
          u || (o || p(), (o.visible = !0)))
        : (o && (o.visible = !1), e.setCamera(`fps`)));
  }
  function g() {
    if (!t) return;
    let r = performance.now() / 1e3,
      l = n ? Math.min(0.1, r - n) : 0;
    if (((n = r), (i += l), u)) {
      let [t, n, r] = u.pos,
        [a, o, s] = u.look,
        c = a - t,
        l = s - r,
        d = Math.hypot(c, l) || 1,
        f = Math.sin((i * 2 * Math.PI) / 90) * (u.drift ?? 0);
      e.setCamera({
        pos: [t - (l / d) * f, n + Math.sin(i * 0.21) * 0.6, r + (c / d) * f],
        look: [a, o, s],
        fov: u.fov ?? 55,
      });
      return;
    }
    if (!c) return;
    a += ki * l;
    let p = c.floor + a,
      [m, h] = c.pos,
      g = c.yaw ?? 0,
      _ = Math.sin(i * 0.7) * 0.01 + Math.sin(i * 1.9) * 0.003;
    d.set(m, p + Math.sin(i * 1.3) * 0.008, h);
    let v = -Math.sin(g + _),
      y = -Math.cos(g + _);
    (f.set(
      m + v * 10 * Math.cos(Mi),
      d.y + Math.sin(Mi) * 10,
      h + y * 10 * Math.cos(Mi),
    ),
      e.setCamera({ pos: [d.x, d.y, d.z], look: [f.x, f.y, f.z], fov: ji }),
      o.position.set(m, p, h),
      o.rotation.set(0, g, 0));
    let b = ((p % Ai) + Ai) % Ai;
    s.forEach((e, t) => {
      e.position.y = (t - Math.floor(s.length * 0.35)) * Ai - b + Ai * 0.5;
    });
  }
  function _() {
    o &&= (e.scene?.remove(o), null);
    for (let e of l) e.dispose?.();
    ((l = []), (s = []));
  }
  return {
    sync: m,
    frame: g,
    dispose: _,
    get active() {
      return t;
    },
  };
}
function Ii(e, t) {
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
