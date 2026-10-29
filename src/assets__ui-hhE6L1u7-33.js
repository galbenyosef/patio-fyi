// assets__ui-hhE6L1u7 33 — hidden
// Lines 15163-15561 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function So(e, t) {
  let n = ro(`tips`),
    r = $a(),
    i = n === !1 || r.tipsOff,
    a = 0,
    o = () => (i ? !1 : n === !0 || ((a ||= to()), a > 0 && a <= 3)),
    s = new Set(r.seen),
    c = io(),
    u = document.createElement(`style`);
  ((u.textContent = _o), document.head.append(u));
  let d = document.createElement(`div`);
  ((d.id = `sl-tip`), (d.hidden = !0), d.setAttribute(`role`, `status`));
  let f = document.createElement(`div`);
  ((f.className = `sl-tip-ring`), (f.hidden = !0));
  let p = document.createElement(`div`);
  ((p.className = `sl-tip-dim`),
    (p.hidden = !0),
    document.body.append(p, f, d));
  let m = null,
    h = 0,
    g = -99,
    _ = -99,
    v = 0,
    y = -99,
    b = -99,
    x = -99,
    S = -99,
    C = !1,
    w = 0,
    T = 0,
    E = null,
    D = !1,
    O = !1,
    k = [],
    A = (e) => {
      (s.add(e), eo({ seen: [...s] }));
    },
    j = (e) => {
      let t = typeof e == `string` ? (yo[e] ?? e) : e;
      if (!t) return null;
      if (typeof t == `function`) return t();
      let n = document.querySelector(t);
      if (!n || n.hidden) return null;
      let r = n.getBoundingClientRect();
      return r.width && r.height && r.bottom > 0 && r.top < innerHeight
        ? { left: r.left, top: r.top, width: r.width, height: r.height }
        : null;
    },
    M = () => {
      let e = m?.target ? j(m.target) : null;
      if (!e) {
        ((f.hidden = !0),
          (p.hidden = !0),
          (d.dataset.side = `none`),
          (d.style.left =
            Math.round(innerWidth / 2 - d.offsetWidth / 2) + `px`),
          (d.style.top = `132px`));
        return;
      }
      ((f.hidden = !1),
        xo(
          d,
          f,
          { ...e, right: e.left + e.width, bottom: e.top + e.height },
          { round: !!e.round },
        ));
      let t = !e.moving && w - y >= 2;
      if (((p.hidden = !t), t)) {
        let t = `${Math.round(e.left)},${Math.round(e.top)},${Math.round(e.width)},${Math.round(e.height)},${!!e.round},${!P()}`;
        p.dataset.k !== t &&
          ((p.dataset.k = t),
          p.classList.toggle(`round`, !!e.round),
          p.classList.toggle(`light`, !P()),
          (p.style.left = e.left - 6 + `px`),
          (p.style.top = e.top - 6 + `px`),
          (p.style.width = e.width + 12 + `px`),
          (p.style.height = e.height + 12 + `px`));
      }
    },
    N = (e, t, { label: n = `Tip`, ttl: r = 7, target: i = null } = {}) =>
      !o() || s.has(e) || !t
        ? !1
        : m
          ? (k.some((t) => t.id === e) ||
              k.push({ id: e, html: t, label: n, ttl: r, target: i, at: w }),
            !1)
          : (A(e),
            (m = { id: e, target: i }),
            (h = w + r),
            (g = w),
            (d.innerHTML = `<span class="k">${n}</span>${t}`),
            (d.dataset.tip = e),
            d.classList.remove(`out`),
            (d.hidden = !1),
            M(),
            !0),
    P = () => e.modules.get(`player`)?.getLocalEntity?.(),
    F = t.state,
    ee = () => t.objectives?.() ?? [],
    te = () => {
      let e = P();
      if (!e?.pos) return null;
      let t = null,
        n = 1 / 0;
      for (let r of ee()) {
        if (!r.pos || (r.team === F.spawn.team && !r.contested)) continue;
        let i = (r.pos[0] - e.pos[0]) ** 2 + (r.pos[2] - e.pos[2]) ** 2;
        i < n && ((n = i), (t = r));
      }
      return t;
    },
    I = () => {
      let t = e.world?.match?.mode;
      return t !== `tdm` && t !== `ffa` && ee().length > 0;
    },
    ne = (t, n) => e.events?.on?.(t, n);
  (ne(`player:damage`, (e) => {
    e && e.targetId === F.localId && e.amount > 0 && (y = w);
  }),
    ne(`weapon:fire`, (e) => {
      e?.entityId === F.localId && (b = w);
    }),
    ne(`player:death`, (e) => {
      !e ||
        F.localId < 0 ||
        (e.victimId === F.localId && e.weapon !== `Redeploy`
          ? (T++,
            T === 1 &&
              N(
                `death1`,
                `Down! Pick where to spawn on the map: a flag your team holds, or a squadmate. You can change class here too.`,
                { label: `Respawn`, ttl: 9, target: `map` },
              ),
            T === 3 &&
              N(
                `classes`,
                `Try another class: <b>Support</b> has an LMG and an ammo box, <b>Medic</b> an SMG with medkits and revive paddles, <b>Recon</b> a sniper rifle.`,
                { label: `Respawn`, ttl: 9, target: `deck` },
              ))
          : e.killerId === F.localId &&
            e.victimId !== F.localId &&
            ((x = w),
            N(
              `kill`,
              c
                ? `Nice shot! Keep moving between kills.`
                : `Nice shot! Hold ${vo(`Tab`)} to see the scores.`,
              { label: `Kill`, ttl: 6, target: `score` },
            )));
    }),
    ne(`score:award`, (e) => {
      /^Captured /.test(e?.reason ?? ``) &&
        !D &&
        ((D = !0),
        t.setTipObjective?.(null),
        (E = null),
        N(
          `captured`,
          `Flag captured! It now drains the enemy’s tickets. Head for the next one.`,
          { label: `Flag`, ttl: 7, target: `score` },
        ));
    }));
  let L = null;
  function R() {
    if (!o()) return;
    z();
    let e = [
        {
          sel: `.sl-spawn .class-deck`,
          also: [],
          keys: [`Digit1`, `Digit2`, `Digit3`, `Digit4`],
          text: `Pick a class. <b>Assault</b>: assault rifle or SMG, rocket launcher, frag grenades. <b>Support</b>: LMG, rocket launcher, ammo box, repair torch. <b>Medic</b>: SMG, medkits, revive paddles, smoke. <b>Recon</b>: sniper rifle, frag grenades.`,
        },
        {
          sel: `.sl-spawn .edit-loadout`,
          also: [`.sl-spawn .deploy-kit-row`],
          keys: [`KeyL`],
          text: `Edit loadout (L) changes the weapons, scopes and attachments for this class. The tour waits until you come back.`,
        },
        {
          sel: `.sl-spawn .mapw`,
          also: [`.sl-spawn .spawn-column .side`, `.sl-spawn .squad-quick`],
          keys: [],
          text: `Click a flag your team holds, or a squadmate, to spawn there. Closest to the fight is usually best.`,
        },
        {
          sel: `.sl-spawn .spawn-column .foot .btn`,
          also: [],
          keys: [`Space`, `Enter`],
          text: `Deploy when you are ready (Space). You can change all of this every time you respawn.`,
        },
      ],
      n = document.createElement(`div`);
    n.id = `sl-tour`;
    let r = document.createElement(`div`);
    r.className = `sl-tip-ring sl-tour-ring dim`;
    for (let e of [`keydown`, `mousedown`, `pointerdown`, `click`, `wheel`])
      n.addEventListener(e, (e) => e.stopPropagation());
    document.body.append(r, n);
    let i = -1,
      a = (e) => {
        let r = e?.getBoundingClientRect();
        if (
          !r?.width ||
          !r.height ||
          r.bottom < 0 ||
          r.right < 0 ||
          r.top > innerHeight ||
          r.left > innerWidth ||
          (t.spawnTab && t.spawnTab() !== `deploy`)
        )
          return null;
        let i = Math.min(innerWidth - 1, Math.max(0, r.left + r.width / 2)),
          a = Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2)),
          o = document.elementFromPoint(i, a);
        return o &&
          o !== e &&
          !e.contains(o) &&
          !n.contains(o) &&
          !d.contains(o)
          ? null
          : r;
      },
      s = (e) => {
        ((n.hidden = !e), (r.hidden = !e));
      },
      c = () => {
        let t = e[i],
          o = t && a(document.querySelector(t.sel));
        return o ? (s(!0), xo(n, r, o), !0) : (s(!1), !1);
      },
      l = () => {
        for (i++; i < e.length && !document.querySelector(e[i].sel);) i++;
        if (i >= e.length) {
          z();
          return;
        }
        ((n.dataset.step = String(i + 1)),
          (n.innerHTML = `<span class="n">${i + 1} of ${e.length}</span>${e[i].text}<div class="row"><button type="button" class="skip">Skip tour</button><button type="button" class="next">${i === e.length - 1 ? `Got it` : `Next`}</button></div>`),
          (n.querySelector(`.skip`).onclick = z),
          (n.querySelector(`.next`).onclick = l),
          c());
      },
      u = (t) => {
        if (!L || i < 0 || i >= e.length) return;
        let n = e[i];
        (t.type === `keydown`
          ? n.keys.includes(t.code) &&
            !t.target?.closest?.(
              `input,textarea,select,[contenteditable="true"]`,
            )
          : [n.sel, ...n.also].some((e) => t.target?.closest?.(e))) &&
          setTimeout(() => {
            L && e[i] === n && l();
          }, 0);
      };
    (document.addEventListener(`click`, u, !0),
      document.addEventListener(`keydown`, u, !0),
      (L = {
        box: n,
        ring: r,
        place: c,
        age: 0,
        off: () => {
          (document.removeEventListener(`click`, u, !0),
            document.removeEventListener(`keydown`, u, !0));
        },
      }),
      l());
  }
  function z() {
    L &&= (L.off(), L.box.remove(), L.ring.remove(), null);
  }
  let re = () => {
    ((d.hidden = !0), (f.hidden = !0), (p.hidden = !0), (m = null));
  };
  return {
    deployTour: R,
    stop() {
      ((i = !0), z(), t.setTipObjective?.(null), re());
    },
    update(n = 0) {
      if (
        ((w += n),
        L &&
          (!t.isVisible?.(`spawn`) || P()
            ? z()
            : (L.age += n) > 0.25 && ((L.age = 0), L.place())),
        m &&
          (w >= h
            ? (d.classList.add(`out`),
              (f.hidden = !0),
              (p.hidden = !0),
              w >= h + 0.35 && re())
            : M()),
        !o())
      )
        return;
      let r = P(),
        i = !!r && !(r.state & l.DEAD);
      if (
        (i && !C && (S = w),
        (C = i),
        i && (v += n),
        !m && k.length && w - g > 1.2)
      ) {
        let e = k.shift();
        w - e.at < 12 && N(e.id, e.html, e);
      }
      if (!i) return;
      if (!D && I()) {
        if (!E || Math.floor(w * 2) % 4 == 0) {
          let e = te();
          e && e.id !== E?.id && ((E = e), t.setTipObjective?.(e.id));
        }
        if (E && w - S > 1) {
          N(
            `goal`,
            `Capture flag <b>${E.letter}</b>: follow this pulsing <b>${E.letter}</b> marker.`,
            { label: `Your goal`, ttl: 8, target: `goal` },
          );
          let e = ee().find((e) => e.id === E.id);
          e?.pos &&
            !O &&
            Math.hypot(e.pos[0] - r.pos[0], e.pos[2] - r.pos[2]) < 18 &&
            ((O = !0),
            N(
              `capture`,
              `Stay near flag ${e.letter} to capture it. More teammates on the flag capture faster.`,
              { label: `Your goal`, ttl: 8, target: `score` },
            ));
        }
        v > 240 && ((D = !0), t.setTipObjective?.(null));
      } else
        !I() &&
          w - S > 1 &&
          N(
            `goal-` + (e.world?.match?.mode ?? `tdm`),
            e.world?.match?.mode === `ffa`
              ? `Everyone is an enemy here. Most kills wins.`
              : `Find the enemy: every kill drains their team’s tickets.`,
            { label: `Your goal`, ttl: 8, target: `score` },
          );
      let a = F.ammo?.override ?? F.ammo;
      if (
        (a &&
          a.magSize >= 8 &&
          !a.reloading &&
          a.mag > 0 &&
          a.mag <= a.magSize * 0.3 &&
          !c &&
          N(
            `reload`,
            `Low on ammo: press ${vo(`R`)} to reload before you run dry.`,
            { label: `Ammo`, ttl: 6, target: `ammo` },
          ),
        !(m || w - g < 10 || v - _ < 15 || r.state & l.IN_VEHICLE) &&
          !(
            !(
              (w - S > 0.8 && w - S < 5) ||
              (w - x > 0.8 && w - x < 6) ||
              a?.reloading ||
              (w - y > 5 && w - b > 1.5) ||
              v - _ > 30
            ) || w - y < 1.5
          ))
      ) {
        if (mt[F.spawn?.kit]?.id === `medic` && !s.has(`revive`) && v > 40) {
          N(
            `revive`,
            c
              ? `As Medic, REVIVE brings back downed teammates nearby.`
              : `As Medic, ${vo(`G`)} near a downed teammate revives them.`,
            { ttl: 8, target: `grenade` },
          ) && (_ = v);
          return;
        }
        for (let [e, t, n, r, i] of bo) {
          if (s.has(e) || v < t) continue;
          let a = c ? r : n;
          if (!a) {
            A(e);
            continue;
          }
          N(e, a, { ttl: 7, target: i }) && (_ = v);
          return;
        }
      }
    },
    dispose() {
      (z(),
        d.remove(),
        f.remove(),
        p.remove(),
        u.remove(),
        t.setTipObjective?.(null));
    },
  };
}
