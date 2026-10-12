// assets__player-vyh7zp35 07 — hidden
// Lines 2059-2393 of readable/assets__player-vyh7zp35.pretty.js (statement-aligned).
function Ve({ onLook: e, onTap: t, onHold: n, onMenu: r, onMouse: i }) {
  let a = {
      mx: 0,
      mz: 0,
      sprint: !1,
      fire: !1,
      ads: !1,
      jump: !1,
      use: !1,
      crouchHeld: !1,
    },
    o = document.createElement(`style`);
  ((o.textContent = Be), document.head.append(o));
  let s = document.createElement(`div`);
  ((s.id = `sl-touch`), (s.hidden = !0));
  let c = document.createElement(`div`);
  ((c.className = `stick`), (c.hidden = !0));
  let l = document.createElement(`i`);
  c.append(l);
  let u = document.createElement(`div`);
  ((u.className = `hint`),
    (u.textContent = `Drag here to move · push up to sprint`));
  let d = document.createElement(`button`);
  ((d.type = `button`), (d.className = `menu`), (d.textContent = `☰ Menu`));
  let f = document.createElement(`div`);
  ((f.className = `editbar`), (f.hidden = !0));
  let p = document.createElement(`span`);
  p.textContent = `Drag the buttons where your thumbs want them`;
  let m = document.createElement(`button`);
  ((m.type = `button`), (m.textContent = `Reset`));
  let h = document.createElement(`button`);
  ((h.type = `button`),
    (h.textContent = `Done`),
    f.append(p, m, h),
    s.append(c, u, d, f));
  let g = {};
  try {
    g = JSON.parse(localStorage.getItem(ze) || `{}`) || {};
  } catch {
    g = {};
  }
  let _ = !1,
    v = !0,
    y = {};
  for (let [e, t, n, r, i] of Re) {
    let a = document.createElement(`div`);
    ((a.className = `tb ${e}`),
      (a.textContent = t),
      (a.dataset.act = e),
      (a.dataset.geo = JSON.stringify([
        ...(Array.isArray(g[e]) ? g[e] : [n, r]),
        i,
      ])),
      (a.dataset.home = JSON.stringify([n, r, i])),
      s.append(a),
      (y[e] = a));
  }
  document.body.append(s);
  function b() {
    let e = Math.max(
      0.72,
      Math.min(
        1.15,
        Math.min(window.innerWidth / 900, window.innerHeight / 430),
      ),
    );
    s.style.setProperty(`--ts`, String(e));
    for (let t of Object.values(y)) {
      let [n, r, i] = JSON.parse(t.dataset.geo);
      Object.assign(t.style, {
        width: `${i * e}px`,
        height: `${i * e}px`,
        right: `calc(${n * e}px + env(safe-area-inset-right))`,
        bottom: `calc(${r * e}px + env(safe-area-inset-bottom))`,
      });
    }
  }
  (b(), window.addEventListener(`resize`, b));
  let x = new Map(),
    S = 0,
    C = !1,
    w = (e, t) => y[e]?.classList.toggle(`on`, !!t);
  function T(e, t, n) {
    let r = t - e.ox,
      i = n - e.oy,
      o = Math.hypot(r, i);
    (o > q && ((r *= q / o), (i *= q / o)),
      (l.style.transform = `translate(${r}px,${i}px)`));
    let s = r / q,
      d = -i / q,
      f = Math.hypot(s, d),
      p = 0.18;
    ((a.mx = f < p ? 0 : s),
      (a.mz = f < p ? 0 : d),
      (a.sprint = f > 0.92 && d > 0.75),
      c.classList.toggle(`sprint`, a.sprint),
      f > 0.3 && !C && ((C = !0), (u.hidden = !0)));
  }
  function E(e) {
    if (_) {
      k(e);
      return;
    }
    if (e.pointerType === `mouse`) {
      i?.();
      return;
    }
    e.preventDefault();
    try {
      s.setPointerCapture(e.pointerId);
    } catch {}
    let r = e.target?.dataset?.act,
      o = {
        role: `look`,
        x: e.clientX,
        y: e.clientY,
        ox: e.clientX,
        oy: e.clientY,
        id: r,
      };
    (r
      ? ((o.role = r === `fire` ? `fire` : `btn`),
        w(r, !0),
        r === `fire`
          ? (a.fire = !0)
          : r === `jump`
            ? (a.jump = !0)
            : r === `use`
              ? (a.use = !0)
              : r === `ads`
                ? ((a.ads = !a.ads), w(`ads`, a.ads))
                : r === `crouch`
                  ? ((a.crouchHeld = !0),
                    (S = setTimeout(() => {
                      ((S = 0), n?.(`prone`));
                    }, 450)))
                  : r === `grenade`
                    ? n?.(`grenade`)
                    : t?.(r))
      : e.clientX < window.innerWidth * 0.42 &&
        ((o.role = `stick`),
        (c.hidden = !1),
        (c.style.left = `${e.clientX}px`),
        (c.style.top = `${e.clientY}px`),
        (l.style.transform = ``),
        T(o, e.clientX, e.clientY)),
      x.set(e.pointerId, o));
  }
  function D(t) {
    if (_) {
      A(t);
      return;
    }
    let n = x.get(t.pointerId);
    if (n) {
      if ((t.preventDefault(), n.role === `stick`)) {
        T(n, t.clientX, t.clientY);
        return;
      }
      if (n.role === `look` || n.role === `fire`) {
        let r = t.clientX - n.x,
          i = t.clientY - n.y;
        ((n.x = t.clientX),
          (n.y = t.clientY),
          Math.abs(r) < 300 && Math.abs(i) < 300 && e?.(r * Le, i * Le));
      }
    }
  }
  let O = null;
  function k(e) {
    let t = e.target?.closest?.(`.tb`);
    if (!t) return;
    e.preventDefault();
    try {
      s.setPointerCapture(e.pointerId);
    } catch {}
    let [n, r, i] = JSON.parse(t.dataset.geo);
    O = {
      el: t,
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      r: n,
      b: r,
      s: i,
    };
  }
  function A(e) {
    if (!O || e.pointerId !== O.id) return;
    e.preventDefault();
    let t = +s.style.getPropertyValue(`--ts`) || 1,
      n = O,
      r = Math.max(
        0,
        Math.min(window.innerWidth / t - n.s, n.r - (e.clientX - n.x) / t),
      ),
      i = Math.max(
        0,
        Math.min(window.innerHeight / t - n.s, n.b - (e.clientY - n.y) / t),
      );
    ((n.el.dataset.geo = JSON.stringify([Math.round(r), Math.round(i), n.s])),
      b());
  }
  function j() {
    let e = {};
    for (let [t, n] of Object.entries(y)) {
      let [r, i] = JSON.parse(n.dataset.geo),
        [a, o] = JSON.parse(n.dataset.home);
      (r !== a || i !== o) && (e[t] = [r, i]);
    }
    try {
      localStorage.setItem(ze, JSON.stringify(e));
    } catch {}
  }
  (m.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
    h.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
    m.addEventListener(`click`, () => {
      for (let e of Object.values(y)) e.dataset.geo = e.dataset.home;
      (b(), j());
    }),
    h.addEventListener(`click`, () => {
      (j(),
        (_ = !1),
        (O = null),
        s.classList.remove(`editing`),
        (f.hidden = !0),
        (d.hidden = !1),
        (u.hidden = C),
        (s.hidden = v));
    }));
  function M(e) {
    if (_) {
      O && e.pointerId === O.id && ((O = null), j());
      return;
    }
    let n = x.get(e.pointerId);
    if (!n) return;
    if ((x.delete(e.pointerId), n.role === `stick`)) {
      ((a.mx = a.mz = 0),
        (a.sprint = !1),
        (c.hidden = !0),
        c.classList.remove(`sprint`));
      return;
    }
    let r = n.id;
    r &&
      (r !== `ads` && w(r, !1),
      r === `fire`
        ? (a.fire = !1)
        : r === `jump`
          ? (a.jump = !1)
          : r === `use`
            ? (a.use = !1)
            : r === `crouch`
              ? ((a.crouchHeld = !1),
                S && (clearTimeout(S), (S = 0), t?.(`crouch`)))
              : r === `grenade` && t?.(`grenadeRelease`));
  }
  (s.addEventListener(`pointerdown`, E, { passive: !1 }),
    s.addEventListener(`pointermove`, D, { passive: !1 }),
    s.addEventListener(`pointerup`, M),
    s.addEventListener(`pointercancel`, M),
    s.addEventListener(`contextmenu`, (e) => e.preventDefault()),
    d.addEventListener(`pointerdown`, (e) => {
      e.stopPropagation();
    }),
    d.addEventListener(`click`, (e) => {
      (e.preventDefault(), r?.());
    }));
  function N() {
    for (let [e, t] of x) M({ pointerId: e });
    (x.clear(),
      Object.assign(a, {
        mx: 0,
        mz: 0,
        sprint: !1,
        fire: !1,
        ads: !1,
        jump: !1,
        use: !1,
        crouchHeld: !1,
      }));
    for (let e of Object.values(y)) e.classList.remove(`on`);
    c.hidden = !0;
  }
  return {
    pad: a,
    setVisible(e) {
      if (_) {
        v = !e;
        return;
      }
      s.hidden !== !e &&
        ((s.hidden = !e),
        document.documentElement.classList.toggle(`sl-touch-play`, !!e),
        e || N());
    },
    editLayout() {
      (N(),
        (v = s.hidden),
        (_ = !0),
        (s.hidden = !1),
        s.classList.add(`editing`),
        (f.hidden = !1),
        (d.hidden = !0),
        (u.hidden = !0));
    },
    isEditing: () => _,
    visible: () => !s.hidden,
    setAds(e) {
      ((a.ads = !!e), w(`ads`, a.ads));
    },
    clear: N,
    dispose() {
      (N(),
        document.documentElement.classList.remove(`sl-touch-play`),
        window.removeEventListener(`resize`, b),
        s.remove(),
        o.remove());
    },
  };
}
var He = `button,a[href],input:not([type=hidden]),select,summary,[role=button],[role=tab],[tabindex]:not([tabindex="-1"])`,
  Ue = 0.34,
  We = 0.11,
  Ge = 0.55,
  Ke = 1100,
  qe = !1;
function Je() {
  if (qe) return;
  qe = !0;
  let e = document.createElement(`style`);
  ((e.textContent = `.pad-focus{outline:3px solid #ffd24a!important;outline-offset:2px!important;box-shadow:0 0 0 6px rgba(255,210,74,.25)!important}`),
    document.head.appendChild(e));
}
