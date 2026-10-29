// assets__player-BLC8lD2a 08 — math
// Lines 2400-2694 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
var Ze = (e) => {
    if (e.disabled || e.closest(`[hidden],[inert]`)) return !1;
    let t = e.getBoundingClientRect();
    return t.width < 2 || t.height < 2
      ? !1
      : e.checkVisibility
        ? e.checkVisibility({ visibilityProperty: !0, opacityProperty: !0 })
        : !!e.offsetParent;
  },
  Qe = (e) => {
    let t = e.getBoundingClientRect();
    return [t.left + t.width / 2, t.top + t.height / 2];
  },
  $e = (e, t, n = window) =>
    n.dispatchEvent(
      new KeyboardEvent(`keydown`, {
        code: e,
        key: t,
        bubbles: !0,
        cancelable: !0,
      }),
    ),
  et = (e, t = document) => [...t.querySelectorAll(e)].find(Ze);
function tt() {
  let e = document.querySelector(`.squad-command-wheel:not([hidden])`);
  if (e) return e;
  let t = [...document.querySelectorAll(`dialog[open]`)];
  if (t.length) return t[t.length - 1];
  let n = document.querySelector(`.sl-spawn`);
  return n && !n.hidden && Ze(n) ? n : document.body;
}
function nt() {
  let e = [],
    t = null,
    n = null,
    r = 0,
    i = 0;
  function a(e) {
    if (t !== e && (t?.classList.remove(`pad-focus`), (t = e), e)) {
      (Xe(), e.classList.add(`pad-focus`));
      try {
        e.focus({ preventScroll: !0 });
      } catch {}
      e.scrollIntoView?.({ block: `nearest`, inline: `nearest` });
    }
  }
  function o(e) {
    return [...e.querySelectorAll(We)].filter(Ze);
  }
  function s(e, t) {
    let n = t.filter((e) => /^deploy$/i.test(e.textContent.trim())).pop();
    if (n) return n;
    let r = document.activeElement;
    return r && r !== document.body && e.contains(r) && t.includes(r)
      ? r
      : (t.slice().sort((e, t) => {
          let [n, r] = Qe(e),
            [i, a] = Qe(t);
          return r - a || n - i;
        })[0] ?? null);
  }
  function c(e, n, r) {
    let i = o(r);
    if (!i.length) return;
    if (!t || !i.includes(t)) {
      a(s(r, i));
      return;
    }
    let [c, l] = Qe(t),
      u = null,
      d = 1 / 0;
    for (let r of i) {
      if (r === t || r.contains(t) || t.contains(r)) continue;
      let [i, a] = Qe(r),
        o = i - c,
        s = a - l,
        f = o * e + s * n,
        p = Math.abs(o * n - s * e);
      if (f <= 4) continue;
      let m = f + p * 2.5;
      m < d && ((d = m), (u = r));
    }
    u && a(u);
  }
  function l(e, t) {
    if (e?.tagName === `INPUT` && e.type === `range`) {
      let n = +e.step || 1,
        r = Math.min(+e.max || 100, Math.max(+e.min || 0, +e.value + t * n));
      return (
        (e.value = String(r)),
        e.dispatchEvent(new Event(`input`, { bubbles: !0 })),
        e.dispatchEvent(new Event(`change`, { bubbles: !0 })),
        !0
      );
    }
    if (e?.tagName === `SELECT`) {
      let n = e.options.length;
      return (
        !n ||
        ((e.selectedIndex = (e.selectedIndex + t + n) % n),
        e.dispatchEvent(new Event(`change`, { bubbles: !0 })),
        !0)
      );
    }
    return !1;
  }
  function u(e) {
    let n = o(e);
    (!t || !n.includes(t)) && a(s(e, n));
    let r = t;
    if (r) {
      if (r.tagName === `SELECT`) {
        l(r, 1);
        return;
      }
      if (
        r.tagName === `INPUT` &&
        /^(text|search|email|number|password|)$/.test(r.type)
      ) {
        r.focus();
        return;
      }
      r.click();
    }
  }
  function d(e) {
    if (e.tagName === `DIALOG`) {
      let t = [...e.querySelectorAll(`button`)]
        .filter(Ze)
        .find((e) =>
          /^(back to game|close|done|cancel|back|×|✕)$/i.test(
            e.textContent.trim(),
          ),
        );
      (t ? t.click() : e.close(), a(null));
      return;
    }
    let t = et(`.loadout-crumb`) ?? et(`.deploy-return`);
    if (t) {
      t.click();
      return;
    }
    $e(
      `Escape`,
      `Escape`,
      document.activeElement && document.activeElement !== document.body
        ? document.activeElement
        : window,
    );
  }
  function f(o, s) {
    ((i += o), de() && (s = !1));
    let f = he(me());
    if (!f) return ((e = []), (n = null), !1);
    let p = f.buttons,
      m = (t) => p[t] && !e[t],
      h = !1,
      g = f.axes[0],
      _ = f.axes[1],
      v =
        p[12] || _ < -0.55
          ? `u`
          : p[13] || _ > qe
            ? `d`
            : p[14] || g < -0.55
              ? `l`
              : p[15] || g > qe
                ? `r`
                : null;
    if (s) {
      let e = tt();
      if ((t && !e.contains(t) && a(null), v && (v !== n || i >= r))) {
        r = i + (v === n ? Ke : Ge);
        let a = { u: [0, -1], d: [0, 1], l: [-1, 0], r: [1, 0] }[v];
        ((a[0] && l(t, a[0])) || c(a[0], a[1], e), (h = !0));
      }
      ((n = v),
        m(0) && (u(e), (h = !0)),
        m(1) && (d(e), (h = !0)),
        m(9) &&
          (e.tagName === `DIALOG`
            ? d(e)
            : document.getElementById(`game-settings`)?.click?.(),
          (h = !0)),
        e.classList.contains(`sl-spawn`) &&
          (m(4) && $e(`KeyQ`, `q`), m(5) && $e(`KeyE`, `e`)));
      let s = Math.abs(f.axes[3]) > 0.2 ? f.axes[3] : 0;
      if (s) {
        let n = t ?? e;
        for (
          ;
          n &&
          n !== document.body &&
          !(
            n.scrollHeight > n.clientHeight + 2 &&
            /(auto|scroll)/.test(getComputedStyle(n).overflowY)
          );
        )
          n = n.parentElement;
        ((n && n !== document.body ? n : document.scrollingElement)?.scrollBy?.(
          0,
          s * Je * o,
        ),
          (h = !0));
      }
    } else ((n = v), (r = 1 / 0), t && a(null));
    return ((e = p), h);
  }
  return { update: f, clear: () => a(null) };
}
var rt = 90,
  it = 0.1,
  at = 0.5,
  ot = 0.12,
  st = (e) => Math.atan2(Math.sin(e), Math.cos(e));
function ct() {
  let e = null,
    t = !1,
    n = 1,
    r = !1,
    i = [0, 0],
    a = [0, 0, 0],
    o = [0, 0, 0];
  function c(e, t) {
    let n = t[0] - e[0],
      r = t[1] - e[1],
      i = t[2] - e[2],
      a = Math.hypot(n, i);
    return [Math.atan2(-n, -i), Math.atan2(r, a), Math.hypot(a, r)];
  }
  function l(e, t) {
    let n = t.eyeHeight?.(e) ?? 1.6;
    return [e.pos[0], e.pos[1] + n * 0.72, e.pos[2]];
  }
  function u(e, t, n, r, i, a) {
    if (ae(e.world, n, r)) return !1;
    ((o[0] = (r[0] - n[0]) / i),
      (o[1] = (r[1] - n[1]) / i),
      (o[2] = (r[2] - n[2]) / i));
    let s = e.world.map.raycast(n, o, i, null, null);
    if (s && s.entityId !== a && s.dist < i - 0.3) return !1;
    let c = oe(n, o, e.world, i, t.id);
    return !c || c.entityId === a || c.dist >= i - 0.4;
  }
  return {
    update(o, d, f, p, m, { engaged: h }) {
      if (((r = !1), !f || f.state & s.DEAD || f.state & s.IN_VEHICLE))
        return ((e = null), { friction: 1, fire: !1 });
      let g = d.eyePosition
          ? d.eyePosition(f, a)
          : [f.pos[0], f.pos[1] + 1.6, f.pos[2]],
        _ = o.world.match?.mode === `ffa`,
        v = (e) =>
          e &&
          e.type === `soldier` &&
          e.hp > 0 &&
          !(e.state & s.DEAD) &&
          !(e.state & s.IN_VEHICLE) &&
          e.id !== f.id &&
          (_ || e.team !== f.team);
      e && !v(o.world.get(e)) && (e = null);
      let y = null,
        b = 1 / 0;
      for (let t of o.world.sorted()) {
        if (!v(t)) continue;
        let [n, r, i] = c(g, l(t, d));
        if (i > rt || i < 0.8) continue;
        let a = st(n - p.yaw),
          o = r - p.pitch,
          s = Math.hypot(a, o);
        if (s > Math.max(it, Math.atan(1.2 / i))) continue;
        let u = s + (t.id === e ? -0.03 : 0);
        u < b && ((b = u), (y = { e: t, ey: a, ep: o, dist: i, a: s }));
      }
      if (!y) return ((e = null), { friction: 1, fire: !1 });
      if (
        (y.e.id !== e && ((e = y.e.id), (n = ot)),
        (n += m),
        n >= ot && ((n = 0), (t = u(o, f, g, l(y.e, d), y.dist, y.e.id))),
        !t)
      )
        return { friction: 1, fire: !1 };
      if (
        ((i = [y.ey, y.ep]), (r = y.a < Math.atan(0.28 / y.dist) + 0.004), h)
      ) {
        let e = 1 - Math.exp(-3.2 * m);
        d.setLook(p.yaw + i[0] * e, p.pitch + i[1] * e);
      }
      return { friction: at, fire: r };
    },
    clear() {
      ((e = null), (r = !1));
    },
  };
}
