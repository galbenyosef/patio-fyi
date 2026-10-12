// assets__ui-D46k2G3Q 22 — math
// Lines 9348-9540 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function hi(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `squad-map-targets`), e.append(n));
  let r = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
  n.append(r);
  let i = new Map(),
    a = document.createElement(`div`);
  ((a.className = `squad-map-detail`), (a.hidden = !0), n.append(a));
  let o = null,
    s = null,
    c = null,
    l = { width: 0, height: 0, left: 0, top: 0 };
  function u() {
    let e = o ?? s ?? c,
      t = i.get(e);
    if (((a.hidden = !t), t)) {
      a.textContent = t.name.textContent + ` · ` + t.status.textContent;
      let e = Math.min(330, Math.max(0, l.width - 16));
      ((a.style.width = `${e}px`),
        (a.style.left = `${l.left + Math.max(8, Math.min(l.width - e - 8, t.box.x + 22 - e / 2))}px`));
      let n = a.offsetHeight || 36,
        r = t.box.y - n - 6;
      a.style.top = `${l.top + Math.max(8, Math.min(l.height - n - 8, r >= 8 ? r : t.box.y + 50))}px`;
    }
    for (let [t, n] of i)
      n.line.style.opacity = t === e ? `0.72` : n.displaced ? `0.42` : `0`;
  }
  function d(e) {
    return Array.isArray(e)
      ? { x: e[0] - 24, y: e[1] - 24, w: 48, h: 48 }
      : e && Number.isFinite(e.x) && Number.isFinite(e.y)
        ? { x: e.x, y: e.y, w: e.w ?? 48, h: e.h ?? 48 }
        : null;
  }
  function f(e, t) {
    return (
      e.x < t.x + t.w + 4 &&
      e.x + e.w + 4 > t.x &&
      e.y < t.y + t.h + 4 &&
      e.y + e.h + 4 > t.y
    );
  }
  function p(e, t, n, r, i) {
    let a = [[0, 0]];
    for (let e of [52, 68])
      for (let t = 0; t < 8; t++) {
        let n = (t * Math.PI) / 4;
        a.push([Math.round(Math.cos(n) * e), Math.round(Math.sin(n) * e)]);
      }
    for (let [o, s] of a) {
      let a = { x: e + o - 22, y: t + s - 22, w: 44, h: 44 };
      if (
        !(a.x < 0 || a.y < 0 || a.x + a.w > n || a.y + a.h > r) &&
        !i.some((e) => f(a, e))
      )
        return { box: a, dx: o, dy: s };
    }
    return null;
  }
  return {
    update(
      e,
      { width: a, height: f, left: m, top: h, selected: g, obstacles: _ = [] },
    ) {
      ((l = { width: a, height: f, left: m, top: h }),
        (c = e.find((e) => g === `teammate:${e.playerId}`)?.playerId ?? null));
      let v = e.filter(
          (e) =>
            Number.isFinite(e.screen?.[0]) &&
            Number.isFinite(e.screen?.[1]) &&
            e.screen[0] >= 0 &&
            e.screen[0] <= a &&
            e.screen[1] >= 0 &&
            e.screen[1] <= f,
        ),
        y = (e) => {
          let t = i.get(e);
          t &&
            (t.button.remove(),
            t.line.remove(),
            i.delete(e),
            o === e && (o = null),
            s === e && (s = null));
        },
        b = new Set(v.map((e) => e.playerId));
      for (let e of i.keys()) b.has(e) || y(e);
      let x = _.map(d).filter(Boolean);
      for (let [c, l] of e.entries()) {
        if (!b.has(l.playerId)) continue;
        let e = l.screen[0],
          d = l.screen[1],
          _ = p(e, d, a, f, x);
        if (!_) {
          y(l.playerId);
          continue;
        }
        let v = i.get(l.playerId);
        if (!v) {
          let e = document.createElement(`button`);
          ((e.type = `button`), (e.dataset.squadSpawn = l.playerId));
          let a = document.createElement(`strong`),
            c = document.createElement(`small`);
          e.append(a, c);
          let d = document.createElementNS(r.namespaceURI, `line`);
          (r.append(d),
            n.append(e),
            (e.onclick = () => {
              e.getAttribute(`aria-disabled`) !== `true` && t(l.playerId);
            }),
            (e.onmouseenter = () => {
              ((o = l.playerId), u());
            }),
            (e.onmouseleave = () => {
              ((o = null), u());
            }),
            (e.onfocus = () => {
              ((s = l.playerId), u());
            }),
            (e.onblur = () => {
              ((s = null), u());
            }));
          let f = document.createElement(`b`);
          (e.append(f),
            (v = {
              button: e,
              line: d,
              name: a,
              status: c,
              badge: f,
              displaced: !1,
            }),
            i.set(l.playerId, v));
        }
        let { box: S, dx: C, dy: w } = _,
          T = C !== 0 || w !== 0;
        ((v.box = S),
          (v.displaced = T),
          (v.badge.textContent = String(l.number ?? c + 1)),
          (v.button.style.left = `${m + S.x}px`),
          (v.button.style.top = `${h + S.y}px`),
          (v.button.style.width = `44px`),
          (v.button.style.height = `44px`),
          (v.button.dataset.displaced = String(T)),
          T
            ? (v.button.dataset.offset = `${C},${w}`)
            : delete v.button.dataset.offset,
          v.button.setAttribute(`aria-disabled`, String(!l.eligible)),
          v.button.setAttribute(
            `aria-pressed`,
            String(g === `teammate:${l.playerId}`),
          ),
          (v.name.textContent = l.name),
          (v.status.textContent = l.eligible
            ? l.vehicle
              ? `${l.vehicle.free} seats · ${l.vehicle.name.split(` · `)[0]}`
              : `Deploy on squadmate`
            : l.reason || `Unavailable`),
          v.button.setAttribute(
            `aria-label`,
            `${l.name} · ${v.status.textContent}`,
          ));
        for (let [t, n] of Object.entries({
          x1: m + e,
          y1: h + d,
          x2: m + S.x + 22,
          y2: h + S.y + 22,
        }))
          v.line.setAttribute(t, n);
        ((v.line.dataset.displaced = String(T)),
          v.line.setAttribute(`class`, l.eligible ? `` : `unavailable`),
          x.push(S));
      }
      u();
    },
    dispose() {
      (n.remove(), i.clear());
    },
  };
}
var gi = (e, t) => {
    e.hidden !== t && (e.hidden = t);
  },
  _i = (e, t) => {
    e.textContent !== t && (e.textContent = t);
  };
function vi(e, t, n, r, i = 8) {
  let a = n[0] - (t.left - e.left) - t.width / 2,
    o = n[1] - (t.top - e.top) - t.height / 2;
  return [
    Math.round(Math.max(i, Math.min(r[0] - e.width - i, a))),
    Math.round(Math.max(i, Math.min(r[1] - e.height - i, o))),
  ];
}
