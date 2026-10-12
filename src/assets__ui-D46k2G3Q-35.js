// assets__ui-D46k2G3Q 35 — textcontent
// Lines 16048-16350 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Xa(e) {
  let t = document.createElement(`div`);
  ((t.className = `spot-layer`),
    (t.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:4;overflow:hidden`));
  let n = document.createElement(`style`);
  ((n.textContent = `.spot-marker{--r:0deg;position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 2px #090b0dcc);will-change:transform;color:#ff694f;transition:opacity .15s}.spot-marker[hidden]{display:none}.spot-marker i{width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:15px solid currentColor;animation:spot-pulse .72s ease-in-out infinite alternate}.spot-marker.vehicle i{border-left-width:12px;border-right-width:12px;border-top-width:13px}.spot-marker span{margin-top:3px;padding:2px 5px;border:1px solid #ff694faa;background:#11171ddd;color:#ffe4dc;font:700 10px/1.1 system-ui;letter-spacing:.1em;white-space:nowrap}.spot-marker.edge i{border-left-width:8px;border-right-width:8px;border-top-width:13px}.spot-marker.edge span{margin-top:1px;padding:1px 4px;font-size:9px}.spot-marker.near{opacity:.45}.spot-marker.expiring{animation:spot-blink .5s steps(1,end) infinite}.spot-feedback{position:absolute;left:50%;top:58%;transform:translate(-50%,0);color:#ff927d;text-shadow:0 2px 3px #000;font:700 12px system-ui;letter-spacing:.14em;transition:opacity .12s}.spot-feedback[hidden]{display:none}@keyframes spot-pulse{from{transform:rotate(var(--r)) translateY(0);opacity:.78}to{transform:rotate(var(--r)) translateY(3px);opacity:1}}@keyframes spot-blink{50%{opacity:.25}}`),
    t.append(n));
  let r = document.createElement(`div`);
  ((r.className = `spot-feedback`),
    (r.hidden = !0),
    t.append(r),
    e.ui.append(t));
  let a = new Map(),
    o = new L(),
    s = new L(),
    c = 0,
    l = 0,
    u = 0,
    d = -1,
    f = !1,
    p = 0,
    m = 0,
    h = -1,
    g = (e, t = 0.7) => {
      (r.textContent !== e && (r.textContent = e), Ha(r, !1), (l = c + t));
    },
    _ = (e) => {
      let n = a.get(e);
      if (n) return n;
      let r = document.createElement(`div`);
      return (
        (r.className = `spot-marker`),
        (r.dataset.entity = String(e)),
        r.append(document.createElement(`i`), document.createElement(`span`)),
        t.append(r),
        (n = { el: r, until: 0, cls: ``, label: ``, angle: null }),
        a.set(e, n),
        n
      );
    },
    v = e.events.on(`spot:target`, (t) => {
      if (!Number.isInteger(t?.targetId)) return;
      let n = Math.max(0.1, (+t.durationTicks || 900) / Va),
        r = _(t.targetId);
      r.until = Math.max(r.until, c + n);
      let i = e.modules.get(`player`)?.getLocalEntity?.();
      if (t.spotterId === i?.owner && !t.carried) {
        ((d = -1), (u = Math.max(u, c + 75 / Va)));
        let n = e.world.get(t.targetId);
        (g(
          f
            ? `MARK REFRESHED`
            : n?.type === `vehicle`
              ? V[n.weapon]?.air
                ? `AIRCRAFT SPOTTED`
                : `VEHICLE SPOTTED`
              : `ENEMY SPOTTED`,
          0.85,
        ),
          (f = !1));
      }
    }),
    y = () => {
      for (let e of a.values()) e.el.remove();
      (a.clear(), (d = -1));
    },
    b = e.events.on(`player:local`, y),
    x = e.events.on(`net:disconnected`, y);
  function S(t) {
    if (
      t.code !== `KeyT` ||
      t.repeat ||
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`)
    )
      return;
    let n = e.modules.get(`player`);
    if (!n?.isInputActive?.()) return;
    let r = n.getLocalEntity?.();
    if ((t.preventDefault(), t.stopImmediatePropagation(), c < u)) {
      g(`SPOT COOLDOWN · ${Math.ceil((u - c) * 10) / 10}s`, 0.45);
      return;
    }
    let i = Ga(e, r);
    if (!i) {
      g(`NO ENEMY IN SIGHT`, 0.55);
      return;
    }
    ((d = i.id),
      (f = (a.get(i.id)?.until ?? 0) > c),
      (u = c + 0.4),
      e.modules.get(`netcode`)?.sendRpc?.(`spot`, { targetId: i.id }),
      g(`SPOTTING…`, 0.65));
  }
  return (
    window.addEventListener(`keydown`, S),
    {
      update(n) {
        ((c += Math.max(0, +n || 0)),
          c >= l && Ha(r, !0),
          d >= 0 &&
            c >= u + 0.35 &&
            ((d = -1), (f = !1), g(`SPOT FAILED`, 0.55)));
        let _ = e.modules.get(`player`)?.getLocalEntity?.();
        if (
          (Ha(
            t,
            !_ ||
              _.hp <= 0 ||
              !!(_.state & i.DEAD) ||
              e.modules.get(`ui`)?.isVisible?.(`spawn`),
          ),
          !_)
        ) {
          for (let e of a.values()) Ha(e.el, !0);
          return;
        }
        (c - h >= 0.5 || !p) &&
          ((h = c), (p = t.clientWidth), (m = t.clientHeight));
        let v = e.world.match.mode === `ffa`;
        for (let [n, r] of a) {
          let l = e.world.get(n);
          if (
            c >= r.until ||
            !l ||
            l.hp <= 0 ||
            l.state & i.DEAD ||
            (l.team === _?.team && !v)
          ) {
            (r.el.remove(), a.delete(n));
            continue;
          }
          if (
            l.type === `soldier` &&
            l.state & i.IN_VEHICLE &&
            (a.get(l.seat)?.until ?? 0) > c
          ) {
            Ha(r.el, !0);
            continue;
          }
          (o.set(l.pos[0], l.pos[1] + Ka(l), l.pos[2]),
            s.copy(o).applyMatrix4(e.camera.matrixWorldInverse),
            o.project(e.camera));
          let u = Ja(o, s, p, m),
            d = Math.round(
              Math.hypot(l.pos[0] - _.pos[0], l.pos[2] - _.pos[2]),
            ),
            f = `spot-marker${l.type === `vehicle` ? ` vehicle` : ``}${u.edge ? ` edge` : ``}${!u.edge && d < 10 ? ` near` : ``}${r.until - c <= 3 ? ` expiring` : ``}`;
          f !== r.cls && ((r.cls = f), (r.el.className = f));
          let h = u.edge ? Math.round((u.angle * 180) / Math.PI) : 0;
          h !== r.angle &&
            ((r.angle = h), r.el.style.setProperty(`--r`, `${h}deg`));
          let g = l.type === `vehicle` ? `${Ya(l)} · ${d} M` : `${d} M`;
          (g !== r.label &&
            ((r.label = g), (r.el.lastElementChild.textContent = g)),
            Ha(r.el, t.hidden),
            (r.el.style.transform = `translate3d(${Math.round(u.x)}px,${Math.round(u.y)}px,0) translate(-50%,${u.edge ? `-50%` : `-100%`})`));
        }
      },
      dispose() {
        (v(),
          b(),
          x(),
          window.removeEventListener(`keydown`, S),
          t.remove(),
          a.clear());
      },
    }
  );
}
var Za = {
    1: [`#c98a55`, `Bronze`],
    2: [`#c9d1da`, `Silver`],
    3: [`#e3b54a`, `Gold`],
  },
  Qa = 6200,
  $a = `
.ach-wrap{position:fixed;inset:0;pointer-events:none;z-index:60;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
.ach-banner{position:absolute;left:28px;bottom:290px;transform:translateX(-14px);opacity:0;min-width:240px;max-width:min(340px,70vw);
 padding:8px 14px 9px 12px;border-radius:3px;background:linear-gradient(90deg,rgba(10,12,15,.82),rgba(10,12,15,.66));border-left:3px solid var(--ach-a);
 box-shadow:0 4px 16px rgba(0,0,0,.3);transition:transform .3s ease-out,opacity .3s ease-out}
.ach-banner.in{transform:none;opacity:1}
.ach-banner.out{transform:translateX(-10px);opacity:0;transition:transform .4s ease-in,opacity .4s ease-in}
.ach-banner small{display:block;font-size:10.5px;letter-spacing:.16em;font-weight:600;color:#8f96a0;text-transform:uppercase}
.ach-banner small b{color:var(--ach-a);font-weight:600}
.ach-banner small i{font-style:normal;color:#c3c8cf;margin-left:6px;letter-spacing:.06em}
.ach-banner strong{display:block;margin-top:2px;font-size:16px;line-height:1.2;font-weight:650;letter-spacing:.01em;color:#eef0f3}
.ach-banner .ach-desc{display:block;margin-top:1px;font-size:12.5px;color:#aab0b8}
.ach-banner.camo{display:flex;align-items:center;gap:12px}
.ach-swatch{flex:none;width:56px;height:34px;border-radius:2px;border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 0 1px rgba(0,0,0,.4)}
@media (max-width:700px){.ach-banner{min-width:0}.ach-banner strong{font-size:15px}}
`;
function eo(e) {
  if (!document.getElementById(`ach-style`)) {
    let e = document.createElement(`style`);
    ((e.id = `ach-style`), (e.textContent = $a), document.head.appendChild(e));
  }
  let t = document.body.appendChild(
      Object.assign(document.createElement(`div`), { className: `ach-wrap` }),
    ),
    n = [],
    r = !1,
    i = !1;
  function a(e) {
    let t = document.querySelector(`.sl-map`)?.getBoundingClientRect();
    !t ||
      t.width < 8 ||
      ((e.style.left = `${Math.round(t.left)}px`),
      (e.style.bottom = `${Math.round(innerHeight - t.top + 14)}px`));
  }
  function o() {
    if (r || !n.length || i) return;
    r = !0;
    let e = n.shift(),
      s = t.appendChild(
        Object.assign(document.createElement(`div`), {
          className: `ach-banner`,
        }),
      );
    if (e.camo) {
      (s.classList.add(`camo`),
        s.style.setProperty(`--ach-a`, `#9aa1ab`),
        (s.innerHTML = `<span class="ach-swatch"></span><span><small>Camo unlocked</small><strong></strong><span class="ach-desc"></span></span>`));
      try {
        s.querySelector(`.ach-swatch`).style.background = nt(e.camo);
      } catch {
        s.querySelector(`.ach-swatch`).style.background = `#555`;
      }
      ((s.querySelector(`strong`).textContent = e.camo.name),
        (s.querySelector(`.ach-desc`).textContent =
          e.weapon ?? `Every weapon`));
    } else {
      let [t, n] = Za[e.tier] ?? Za[2];
      if (
        (s.style.setProperty(`--ach-a`, t),
        (s.innerHTML = `<small>Achievement · <b></b></small><strong></strong><span class="ach-desc"></span>`),
        (s.querySelector(`b`).textContent = n),
        e.count > 1)
      ) {
        let t = s
          .querySelector(`small`)
          .appendChild(document.createElement(`i`));
        t.textContent = `×${e.count}`;
      }
      ((s.querySelector(`strong`).textContent = e.name),
        (s.querySelector(`.ach-desc`).textContent = e.desc));
    }
    (a(s),
      requestAnimationFrame(() => s.classList.add(`in`)),
      setTimeout(() => {
        (s.classList.add(`out`),
          setTimeout(() => {
            (s.remove(), (r = !1), o());
          }, 420));
      }, Qa));
  }
  function s(e, t) {
    let r = K[e];
    r && Wt.has(e) && (n.push({ ...r, count: t | 0 }), o());
  }
  let c = [
    e.events.on(`achievement:earned`, (e) => {
      e?.entityId ?? s(e?.id, e?.count);
    }),
    e.events.on(`ui:camo-unlocked`, (e) => {
      e?.camo && (n.push({ camo: e.camo, weapon: e.weapon ?? null }), o());
    }),
  ];
  return {
    show: (e, t = 1) => s(e, t),
    dispose() {
      ((i = !0), c.forEach((e) => e?.()), t.remove());
    },
  };
}
var to = null,
  no = null,
  ro = null,
  io = null,
  ao = null,
  oo = null,
  so = null,
  co = null,
  lo = null,
  uo = null,
  fo = null,
  po = null,
  mo = null,
  ho = null,
  go = null,
  _o = null,
  vo = null;
function yo() {
  (go && go.isConnected) ||
    ((go = document.getElementById(dn)),
    go ||
      ((go = document.createElement(`style`)),
      (go.id = dn),
      (go.textContent = fn),
      document.head.appendChild(go)));
}
