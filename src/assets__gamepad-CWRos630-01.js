// assets__gamepad-CWRos630 01 — push
// Lines 1-181 of readable/assets__gamepad-CWRos630.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { m as e, t } from "./input-glyphs-CoM_yJmy.js";
var n = 0.14,
  r = 3.1,
  i = 2.2,
  a = 0.4,
  o = 0.3,
  s = (e) => (Math.abs(e) < n ? 0 : (e - Math.sign(e) * n) / 0.86),
  c = (e) => !!e?.pressed || (e?.value ?? 0) > 0.35;
function l(e) {
  let t = e.buttons,
    n = e.axes,
    r = n[9] ?? 2,
    i = r > 1.1 ? -1 : Math.round((r + 1) * 3.5) % 8;
  return {
    buttons: [
      c(t[1]),
      c(t[2]),
      c(t[0]),
      c(t[3]),
      c(t[4]),
      c(t[5]),
      c(t[6]),
      c(t[7]),
      c(t[8]),
      c(t[9]),
      c(t[10]),
      c(t[11]),
      i === 7 || i === 0 || i === 1,
      i >= 3 && i <= 5,
      i >= 5 && i <= 7,
      i >= 1 && i <= 3,
      c(t[12]),
      c(t[13]),
    ],
    axes: [n[0] ?? 0, n[1] ?? 0, n[2] ?? 0, n[5] ?? 0],
  };
}
function u() {
  let e = [];
  try {
    e = [...(navigator.getGamepads?.() ?? [])].filter((e) => e && e.connected);
  } catch {}
  return e.find((e) => e.mapping === `standard`) ?? e[0] ?? null;
}
function d(e) {
  return e
    ? e.mapping !== `standard` && t(e.id) === `ps` && e.axes.length >= 6
      ? l(e)
      : {
          buttons: e.buttons.map(c),
          axes: [
            e.axes[0] ?? 0,
            e.axes[1] ?? 0,
            e.axes[2] ?? 0,
            e.axes[3] ?? 0,
          ],
        }
    : null;
}
function f() {
  let n = {
      mx: 0,
      mz: 0,
      sprint: !1,
      fire: !1,
      ads: !1,
      jump: !1,
      use: !1,
      descend: !1,
      focus: !1,
      active: !1,
      fresh: !1,
      lookX: 0,
      lookY: 0,
      brand: `xbox`,
    },
    c = [],
    l = 0,
    f = 0,
    p = !1,
    m = 0,
    h = null,
    g = !1,
    _ = [],
    v = () => {
      ((n.mx = n.mz = n.lookX = n.lookY = 0),
        (n.fire =
          n.ads =
          n.jump =
          n.use =
          n.sprint =
          n.descend =
          n.focus =
            !1));
    };
  function y(y, b, x = {}) {
    let S = u();
    h = S;
    let C = [];
    if (!S) return ((n.active = n.fresh = !1), v(), (c = []), C);
    n.brand = t(S.id);
    let w = d(S),
      { buttons: T, axes: E } = e(w.buttons, w.axes);
    (b && !g && (_ = T.slice()), (g = b), (_ = _.map((e, t) => e && T[t])));
    let D = T.map((e, t) => e && !_[t]),
      O = (e) => D[e] && !c[e],
      k = (e) => !D[e] && c[e],
      A = s(E[0]),
      j = s(E[1]),
      M = s(E[2]),
      N = s(E[3]),
      P =
        T.some(Boolean) ||
        Math.abs(A) + Math.abs(j) + Math.abs(M) + Math.abs(N) > 0;
    (P && (m = performance.now()),
      (n.fresh = P),
      (n.active = performance.now() - m < 3e4 && m > 0),
      (n.mx = A),
      (n.mz = -j));
    let F = (e) => Math.sign(e) * Math.abs(e) ** +i;
    ((n.lookX = F(M) * r * y),
      (n.lookY = F(N) * r * y),
      O(10) && (p = !p),
      Math.hypot(A, j) < 0.3 && (p = !1));
    let I = !!x.vehicle;
    return (
      (n.sprint = !I && p),
      (n.fire = D[7]),
      (n.ads = D[6]),
      (n.jump = D[0]),
      (n.focus = I && D[6]),
      (n.descend = I && D[1]),
      b
        ? (I
            ? (l = 0)
            : D[1]
              ? ((l += y), l >= a && l - y < a && C.push(`prone`))
              : (c[1] && l < a && C.push(`crouch`), (l = 0)),
          D[2]
            ? ((f += y), (n.use = f >= o))
            : (c[2] && f < o && !I && C.push(`reload`), (f = 0), (n.use = !1)),
          O(3) && C.push(`swap`),
          I
            ? O(4) && x.air && C.push(`flares`)
            : (O(4) && C.push(x.medic && D[6] ? `smoke` : `grenade`),
              k(4) && (C.push(`grenadeRelease`), C.push(`smokeRelease`))),
          O(5) && C.push(`spot`),
          O(11) && !I && C.push(`melee`),
          I || (O(12) && C.push(`slotPrev`), O(13) && C.push(`slotNext`)),
          O(14) && C.push(`medic`),
          O(15) && C.push(`orderDown`),
          k(15) && C.push(`orderUp`),
          (O(8) || O(17)) && C.push(`scoreDown`),
          ((k(8) && !D[17]) || (k(17) && !D[8])) && C.push(`scoreUp`),
          O(9) && C.push(`menu`),
          (c = D),
          C)
        : ((c = D), (l = f = 0), (n.use = !1), C)
    );
  }
  function b(e, t, n) {
    let r = h?.vibrationActuator;
    if (r?.playEffect)
      try {
        r.playEffect(
          r.type === `dual-rumble` || !r.type ? `dual-rumble` : r.type,
          { duration: n, strongMagnitude: e, weakMagnitude: t },
        ).catch(() => {});
      } catch {}
  }
  return {
    pad: n,
    poll: y,
    rumble: b,
    touch: () => {
      m = performance.now();
    },
    connected: () => !!u(),
  };
}
