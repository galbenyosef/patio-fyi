// assets__ui-D46k2G3Q 31 — append
// Lines 14536-15346 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Oa(e) {
  let t = `salient.audio.levels`,
    n = null,
    r = null,
    i = { master: 0.85, sfx: 1, ui: 0.8 };
  try {
    let e = JSON.parse(localStorage.getItem(t));
    for (let t of Object.keys(i))
      Number.isFinite(e?.[t]) && (i[t] = Math.max(0, Math.min(1, e[t])));
  } catch {}
  if (!document.getElementById(wa)) {
    let e = $(`style`);
    ((e.id = wa), (e.textContent = Ta), document.head.append(e));
  }
  let a = $(`button`);
  ((a.type = `button`),
    (a.id = `game-settings`),
    (a.innerHTML = Da.gear),
    a.append(`Settings`));
  let o = $(`dialog`, `sl-set`);
  o.setAttribute(`aria-label`, `Game settings`);
  let s = $(`header`, `sl-set-head`),
    c = $(`div`),
    l = $(`h2`, null, `Settings`);
  ((l.id = `sl-set-title`), c.append(l, $(`div`, `sub`, ba)));
  let u = $(`button`, `sl-set-x`, `×`);
  ((u.type = `button`),
    u.setAttribute(`aria-label`, `Close settings`),
    (u.onclick = () => o.close()),
    s.append(c, u));
  let d = $(`nav`, `sl-set-nav`);
  (d.setAttribute(`role`, `tablist`),
    d.setAttribute(`aria-orientation`, `vertical`));
  let f = $(`div`, `sl-set-main`),
    p = $(`footer`, `sl-set-foot`);
  p.append(
    $(
      `p`,
      `note`,
      `Changes save on this device. Graphics changes show when a reload is needed. The match keeps running.`,
    ),
  );
  let m = $(`button`, `btn primary`, `Back to game`);
  ((m.type = `button`),
    (m.onclick = () => o.close()),
    p.append(m),
    o.append(s, d, f, p));
  let h = [],
    g = 0;
  function _(e, t) {
    let n = $(`button`, `sl-set-tab`);
    ((n.type = `button`),
      n.setAttribute(`role`, `tab`),
      (n.id = `sl-set-tab-` + e),
      (n.innerHTML = Da[e]),
      n.append(t));
    let r = $(`section`, `sl-set-panel`);
    (r.setAttribute(`role`, `tabpanel`),
      r.setAttribute(`aria-labelledby`, n.id),
      (r.hidden = !0));
    let i = h.length;
    return (
      (n.onclick = () => v(i)),
      d.append(n),
      f.append(r),
      h.push({ id: e, b: n, panel: r }),
      r
    );
  }
  function v(e) {
    ((g = (e + h.length) % h.length),
      h.forEach((e, t) => {
        (e.b.setAttribute(`aria-selected`, String(t === g)),
          (e.b.tabIndex = t === g ? 0 : -1),
          (e.panel.hidden = t !== g));
      }),
      (f.scrollTop = 0));
    try {
      localStorage.setItem(`salient.settings.tab`, h[g].id);
    } catch {}
    h[g].id === `support` && !Re.value && Ue();
  }
  d.addEventListener(`keydown`, (e) => {
    (e.key === `ArrowDown` || e.key === `ArrowUp`) &&
      (e.preventDefault(),
      v(g + (e.key === `ArrowDown` ? 1 : -1)),
      h[g].b.focus());
  });
  let y = (e, t, n) => {
      (e.append($(`h3`, null, t)), n && e.append($(`p`, `lead`, n)));
    },
    b = (e) => {
      let t = $(`div`, `sl-set-group`);
      return (e.append(t), t);
    };
  function x(e, t, n, ...r) {
    let i = $(`div`, `sl-set-row`),
      a = $(`div`, `txt`),
      o = $(`div`, `ctl`);
    a.append($(`div`, `name`, t));
    let s = $(`div`, `desc`, n ?? ``);
    return (
      n || (s.hidden = !0),
      a.append(s),
      o.append(...r),
      i.append(a, o),
      e.append(i),
      { row: i, desc: s }
    );
  }
  function S(e, t, n, r, i) {
    let a = $(`input`, `sw`);
    ((a.type = `checkbox`),
      a.setAttribute(`role`, `switch`),
      a.setAttribute(`aria-label`, t),
      (a.checked = !!r),
      a.addEventListener(`change`, () => i(a.checked, a)));
    let o = x(e, t, n, a);
    return (
      o.row.addEventListener(`click`, (e) => {
        (e.target === o.row ||
          o.row.querySelector(`.txt`).contains(e.target)) &&
          a.click();
      }),
      (o.row.style.cursor = `pointer`),
      Object.assign(o, { input: a })
    );
  }
  function C(e, t, n, r, i, a) {
    let o = $(`select`);
    o.setAttribute(`aria-label`, t);
    for (let [e, t] of r) {
      let n = $(`option`, null, t);
      ((n.value = e), o.append(n));
    }
    ((o.value = i), (o.onchange = () => a(o.value)));
    let s = x(e, t, n, o);
    return (s.row.classList.add(`wide`), Object.assign(s, { select: o }));
  }
  function T(e, t, n, r, i, a, o, s, c) {
    let l = $(`input`);
    ((l.type = `range`),
      (l.min = r),
      (l.max = i),
      (l.step = a),
      (l.value = o),
      l.setAttribute(`aria-label`, t));
    let u = $(`output`),
      d = () => {
        u.textContent = s(Number(l.value));
      };
    (l.addEventListener(`input`, () => {
      (d(), c(Number(l.value)));
    }),
      d());
    let f = x(e, t, n, l, u);
    return (
      f.row.classList.add(`wide`),
      Object.assign(f, {
        input: l,
        set(e) {
          ((l.value = e), d());
        },
      })
    );
  }
  function E(e, t, n, r, i, a) {
    let o = $(`div`, `seg`);
    (o.setAttribute(`role`, `radiogroup`), o.setAttribute(`aria-label`, t));
    let s = [],
      c = {
        get value() {
          return i;
        },
        set value(e) {
          i = e;
          for (let t of s)
            t.setAttribute(`aria-checked`, String(t.dataset.v === e));
        },
      };
    for (let [e, t] of r) {
      let n = $(`button`, null, t);
      ((n.type = `button`),
        (n.dataset.v = e),
        n.setAttribute(`role`, `radio`),
        (n.onclick = () => {
          ((c.value = e), a(e));
        }),
        o.append(n),
        s.push(n));
    }
    c.value = i;
    let l = x(e, t, n, o);
    return (l.row.classList.add(`wide`), Object.assign(l, { seg: c, box: o }));
  }
  let D = _(`graphics`, `Graphics`);
  y(
    D,
    `Quality`,
    `Resolution and street props apply immediately. Lighting, shadows, map detail and bloom apply when the game reloads.`,
  );
  let O = b(D),
    k = E(
      O,
      `Graphics quality`,
      ``,
      [[`auto`, `Auto`], ...Object.entries(P)],
      F(),
      (t) => {
        (w(e, t),
          (ne.input.checked = te(e.config.quality, e.config.bloom)),
          (ne.input.disabled = e.config.quality !== `high`));
        let n = null;
        try {
          n = localStorage.getItem(`salient.detail`);
        } catch {}
        ((ie.input.checked = e.config.quality !== `high` || n === `reduced`),
          ee());
      },
    ),
    A = {
      "slow-frames": ` because the game ran slowly here`,
      software: ` because this browser is drawing without a graphics card`,
      phone: ` on this phone`,
      "hidden-gpu": ` because this browser hides its graphics chip`,
      gpu: e.config.quality === `high` ? `` : ` for this graphics chip`,
    },
    M = {
      high: `High: sharpest picture, full shadows, bloom and street props.`,
      low: `Low: softer shadows, no bloom, fewer street props.`,
      verylow: `Very low: 3/4 resolution, no shadows, shorter view in haze, simpler distant buildings, sparse grass.`,
      maxlow: `Max low: half resolution, no antialiasing or shadows, short view, no grass, fewer trees. For very weak or software graphics.`,
    },
    ee = () => {
      let t = e.config.graphics ?? {},
        n = P[e.config.quality] ?? e.config.quality,
        r = j(e);
      ((k.desc.hidden = !1),
        (k.desc.textContent =
          (r
            ? `Selected ${n}; reload to finish applying it.`
            : t.reason === `url`
              ? `Using ${n} (set by the page address).`
              : t.auto
                ? `Auto is using ${n}${A[t.reason] ?? ``}.`
                : `Using ${n}.`) +
          ` ` +
          (M[e.config.quality] ?? ``)),
        (I.row.hidden = !r));
    },
    N = $(`button`, `btn primary`, `Reload now`);
  ((N.type = `button`), (N.onclick = () => location.reload()));
  let I = x(
    O,
    `Reload to finish`,
    `Lighting, shadows, map detail or bloom were built for another setting. Reloading rejoins the match.`,
    N,
  );
  ee();
  let ne = S(
    O,
    `Bloom`,
    `Glow on city lights, fires and muzzle flashes. Applies after reload.`,
    te(e.config.quality, e.config.bloom),
    (e) => {
      try {
        localStorage.setItem(`salient.bloom`, e ? `1` : `0`);
      } catch {}
      ee();
    },
  );
  ne.input.disabled = e.config.quality !== `high`;
  let re = !1;
  try {
    re = localStorage.getItem(`salient.detail`) === `reduced`;
  } catch {}
  let ie = S(
    O,
    `Reduced city detail`,
    `Hides small street props and their shadows now; turns bloom off after reload.`,
    re,
    (t) => {
      (e.modules.get(`demo`)?.setDetail?.(t ? `reduced` : `full`),
        t && (ne.input.checked = !1));
      try {
        (localStorage.setItem(`salient.detail`, t ? `reduced` : `full`),
          t && localStorage.setItem(`salient.bloom`, `0`));
      } catch {}
      ee();
    },
  );
  y(
    D,
    `Frame rate`,
    `Lower limits reduce GPU load. They never pause multiplayer or change the simulation rate.`,
  );
  let ae = b(D),
    oe = C(
      ae,
      `Frame-rate limit`,
      ``,
      le.map((e) => [String(e), e ? e + ` FPS` : `Display refresh rate`]),
      String(e.framePolicy?.get().limit ?? 120),
      (t) => e.framePolicy?.set({ limit: Number(t) }),
    );
  S(
    ae,
    `Limit to 30 FPS when unfocused`,
    `Saves power while you are in another window.`,
    e.framePolicy?.get().background ?? !0,
    (t) => e.framePolicy?.set({ background: t }),
  );
  let L = _(`audio`, `Audio`);
  y(L, `Volume`);
  let se = b(L),
    ce = {};
  for (let [e, r, a] of [
    [`master`, `Master volume`, `Everything you hear.`],
    [`sfx`, `Combat volume`, `Gunfire, explosions, vehicles and footsteps.`],
    [`ui`, `Interface volume`, `Hit markers, menus and notifications.`],
  ])
    ce[e] = T(
      se,
      r,
      a,
      0,
      100,
      1,
      Math.round(i[e] * 100),
      (e) => e + `%`,
      (r) => {
        ((i[e] = r / 100), (n = null), at());
        try {
          localStorage.setItem(t, JSON.stringify(i));
        } catch {}
      },
    );
  let ue = _(`mouse`, `Mouse & keys`);
  y(ue, `Mouse`);
  let de = b(ue),
    R = T(
      de,
      `Mouse sensitivity`,
      `Also scales controller look speed.`,
      1,
      100,
      1,
      11,
      (e) => String(e),
      (t) => e.modules.get(`player`)?.setSensitivity(t * 2e-4),
    ),
    z = [],
    fe = (t) => {
      e.modules.get(`player`)?.setInvertY(t);
      for (let e of z) e.input.checked = t;
    };
  (z.push(
    S(
      de,
      `Invert vertical aim`,
      `Push forward to look down. Shared with the controller.`,
      !1,
      fe,
    ),
  ),
    y(ue, `Keyboard`, `Fixed layout for now.`));
  let pe = $(`div`, `sl-set-group sl-set-keys`);
  for (let [e, t] of [
    ...ua,
    [`Lean`, `Q · E`],
    [`Change vehicle seat`, `Q · E`],
    [`Medic call`, `J`],
    [`Redeploy`, `Hold U`],
    [`Controls card`, `F1`],
  ]) {
    let n = $(`div`),
      r = $(`kbd`, `k`, t);
    (n.append($(`span`, null, e), r), pe.append(n));
  }
  ue.append(pe);
  let me = _(`pad`, `Controller`),
    he = $(`div`, `sl-set-pad`);
  he.innerHTML = Da.pad;
  let ge = $(`div`),
    _e = $(`div`, `name`),
    B = $(`div`, `desc`);
  (ge.append(_e, B), he.append(ge), me.append(he), y(me, `Sticks & aiming`));
  let V = b(me),
    ve = T(
      V,
      `Look speed`,
      `How fast the right stick turns you.`,
      25,
      300,
      5,
      100,
      (e) => e + `%`,
      (t) => e.modules.get(`player`)?.setThumbSetting?.(`padLook`, t / 100),
    ),
    ye = S(
      V,
      `Southpaw`,
      `Swap the sticks: look with the left, move with the right.`,
      Mt().southpaw,
      (e) => Ct(`southpaw`, e),
    );
  z.push(S(V, `Invert vertical aim`, ``, !1, fe));
  let be = {};
  ((be.assist = S(
    V,
    `Aim assist`,
    `Slows and nudges your aim onto visible enemies.`,
    !0,
    (t) => e.modules.get(`player`)?.setThumbSetting?.(`assist`, t),
  )),
    y(
      me,
      `Button mapping`,
      `Select an action, then press the controller button you want for it. Taking a button from another action swaps the two. Vehicle controls and on-screen prompts follow the same buttons; menus keep A to select and B to go back.`,
    ));
  let xe = b(me),
    Se = [],
    Ce = null;
  for (let e of Pt) {
    if (e.group !== Ce) {
      Ce = e.group;
      let t = $(`div`, `sl-set-row`);
      ((t.style.cssText = `min-height:0;padding:9px 16px 5px;color:var(--mute);font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:700`),
        (t.textContent = e.group),
        xe.append(t));
    }
    let t = $(`span`, `chip`),
      n = $(`button`, `btn`, ` Rebind`);
    ((n.type = `button`), n.setAttribute(`aria-label`, `Rebind ` + e.name));
    let r = x(xe, e.name, ``, t, n);
    if ((r.row.classList.add(`sl-set-bind`), e.hold)) {
      let t = $(`span`, `hold`, `hold: ` + e.hold);
      r.row.querySelector(`.name`).append(t);
    }
    let i = () => $e(e.slot);
    ((n.onclick = (e) => {
      (e.stopPropagation(), i());
    }),
      r.row.addEventListener(`click`, i),
      Se.push({ action: e, row: r.row, chip: t, button: n, desc: r.desc }));
  }
  let we = $(`div`);
  we.style.cssText = `display:flex;gap:10px;align-items:center;margin-top:12px`;
  let Te = $(`button`, `btn`, `Reset controller to defaults`);
  Te.type = `button`;
  let Ee = $(`span`, `note`);
  (Ee.setAttribute(`role`, `status`),
    (Te.onclick = () => {
      (Ot(),
        et(),
        (ye.input.checked = !1),
        Qe(),
        (Ee.textContent = `Default buttons restored.`));
    }),
    we.append(Te, Ee),
    me.append(we));
  let De = $(`div`);
  y(De, `Touch`);
  let Oe = b(De);
  (me.append(De),
    (be.autoFire = S(
      Oe,
      `Auto-fire`,
      `Fires when the sight is on an enemy.`,
      !0,
      (t) => e.modules.get(`player`)?.setThumbSetting?.(`autoFire`, t),
    )),
    (be.gyro = S(
      Oe,
      `Gyro aim`,
      `Tilt the phone to fine-tune aim.`,
      !1,
      async (t, n) => {
        let r = await e.modules.get(`player`)?.setThumbSetting?.(`gyro`, t);
        t &&
          r === !1 &&
          ((n.checked = !1),
          (be.gyro.desc.textContent = `Motion access was refused, so gyro aim stays off.`));
      },
    )));
  let ke = $(`button`, `btn`, `Move`);
  ((ke.type = `button`),
    (ke.onclick = () => {
      (o.close(), e.modules.get(`player`)?.editTouchLayout?.());
    }),
    x(
      Oe,
      `Touch button layout`,
      `Drag the on-screen buttons where your thumbs want them.`,
      ke,
    ));
  let Ae = _(`hud`, `Interface`);
  y(
    Ae,
    `Team markers`,
    `The icons over allies, squadmates and spotted enemies.`,
  );
  let je = b(Ae),
    Me = _n();
  (T(
    je,
    `Team marker size`,
    ``,
    75,
    175,
    5,
    Math.round(Me.scale * 100),
    (e) => e + `%`,
    (e) => vn({ scale: e / 100 }),
  ),
    T(
      je,
      `Team marker opacity`,
      ``,
      50,
      100,
      5,
      Math.round(Me.opacity * 100),
      (e) => e + `%`,
      (e) => vn({ opacity: e / 100 }),
    ));
  let Ne = $(`span`);
  Ne.style.cssText = `display:inline-flex;gap:4px`;
  let Pe = (e) => {
    Ne.replaceChildren(
      ...Object.values(pn[e]).map((e) => {
        let t = $(`span`);
        return (
          (t.style.cssText = `width:14px;height:14px;border-radius:3px;background:${e}`),
          t
        );
      }),
    );
  };
  (C(
    je,
    `Identification colors`,
    `Ally / squad / enemy. The accessible set is easier to tell apart with colour-blindness.`,
    [
      [`standard`, `Blue / green / orange`],
      [`accessible`, `Cyan / yellow / magenta`],
    ],
    Me.palette,
    (e) => {
      (vn({ palette: e }), Pe(e));
    },
  )
    .row.querySelector(`.ctl`)
    .prepend(Ne),
    Pe(Me.palette));
  let Fe = _(`loadout`, `Loadout`);
  y(
    Fe,
    `Weapon attachments`,
    `Warmup: applies now. Live match: applies on your next spawn. Damage and ammunition stay the same.`,
  );
  let Ie = Ca(e, Fe);
  Fe.querySelector(`fieldset>p`)?.remove();
  for (let e of Fe.querySelectorAll(`fieldset>button`))
    e.className = `btn primary`;
  let Le = _(`support`, `Support`);
  y(
    Le,
    `Playtest diagnostics`,
    `If something breaks, capture this report before refreshing. It includes movement and water state, but no session code or player name.`,
  );
  let Re = $(`textarea`);
  ((Re.readOnly = !0),
    Re.setAttribute(`aria-label`, `Playtest report`),
    Le.append(Re));
  let ze = $(`div`);
  ze.style.cssText = `display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap`;
  let Be = $(`button`, `btn`, `Capture report`),
    Ve = $(`button`, `btn primary`, `Copy report`);
  Be.type = Ve.type = `button`;
  let He = $(`span`, `note`);
  (He.setAttribute(`role`, `status`), ze.append(Be, Ve, He), Le.append(ze));
  let Ue = () => {
    ((Re.value = JSON.stringify(Sa(e), null, 2)),
      (He.textContent = `Report captured. Share it with your bug description.`));
  };
  ((Be.onclick = Ue),
    (Ve.onclick = async () => {
      Re.value || Ue();
      try {
        (await navigator.clipboard.writeText(Re.value),
          (He.textContent = `Copied.`));
      } catch {
        (Re.focus(),
          Re.select(),
          (He.textContent = `Select and copy the report manually; clipboard access was unavailable.`));
      }
    }),
    Le.append($(`p`, `note`, ba)));
  let We = $(`div`, `sl-set-navhint`);
  d.append(We);
  let Ge = `xbox`,
    Ke = null,
    qe = 0,
    Je = [],
    Ye = [],
    Xe = null,
    Ze = () => {
      let e = Lt();
      return e ? { gp: e, raw: Rt(e).buttons } : null;
    };
  function Qe() {
    for (let e of Se) {
      let t = At(e.action.slot);
      ((e.chip.textContent = It(t, Ge)),
        e.row.classList.toggle(`moved`, t !== e.action.slot),
        e.row.classList.toggle(`listen`, Ke?.slot === e.action.slot),
        (e.button.textContent =
          Ke?.slot === e.action.slot ? `Cancel` : `Rebind`),
        (e.desc.hidden = Ke?.slot !== e.action.slot),
        e.desc.hidden ||
          (e.desc.textContent = Ke.noPad
            ? `Connect a controller and press any button on it first.`
            : `Press the button you want… (Esc to cancel)`));
    }
    Te.disabled = Et();
  }
  function $e(e) {
    if (Ke?.slot === e) {
      et();
      return;
    }
    let t = Ze();
    ((Ke = {
      slot: e,
      until: performance.now() + 8e3,
      noPad: !t,
      mask: t ? t.raw.slice() : [],
    }),
      Dt(!0),
      (Ee.textContent = ``),
      Qe());
  }
  function et() {
    Ke && ((Ke = null), (Xe = Ze()?.raw ?? []), Qe());
  }
  function tt(e) {
    (he.classList.toggle(`on`, !!e), _e.replaceChildren());
    let t = $(`span`, `sl-set-dot`);
    (_e.append(
      t,
      e
        ? e.gp.id.replace(/\s*\(.*?\)\s*/g, ` `).trim() || `Controller`
        : `No controller detected`,
    ),
      (B.textContent = e
        ? `Connected. Press any button to see which action it performs.`
        : `Plug in or pair an Xbox, PlayStation or phone-grip controller, then press any button.`),
      (We.textContent = e
        ? `${It(4, Ge)} / ${It(5, Ge)} switch tabs · D-pad moves · ${It(0, Ge)} selects · ${It(1, Ge)} closes`
        : ``));
  }
  function nt() {
    qe = requestAnimationFrame(nt);
    let e = Ze();
    if (
      (e && (Ge = Ft(e.gp.id)),
      (!!e != !!Ye.connected || (e && e.gp.id !== Ye.id)) && (tt(e), Qe()),
      !e)
    ) {
      ((Ye = []),
        Xe && ((Xe = null), Dt(!1)),
        Ke && !Ke.noPad && ((Ke.noPad = !0), Qe()));
      return;
    }
    let t = e.raw;
    ((t.connected = !0), (t.id = e.gp.id), (Je = Je.map((e, n) => e && t[n])));
    let n = (e) => t[e] && !Ye[e] && !Je[e];
    for (let e of Se)
      e.row.classList.toggle(`live`, !Ke && !!t[At(e.action.slot)]);
    if (Ke) {
      (Ke.noPad && ((Ke.noPad = !1), (Ke.mask = t.slice()), Qe()),
        (Ke.mask = Ke.mask.map((e, n) => e && t[n])));
      let e = t.findIndex((e, t) => e && !Ke.mask[t]);
      if (e >= 0) {
        let n = Pt.find((e) => e.slot === Ke.slot),
          r = At(Ke.slot),
          i = Pt.find((t) => At(t.slot) === e);
        (Tt(Ke.slot, e),
          (Ke = null),
          (Xe = t.slice()),
          (Ee.textContent =
            `${n.name} → ${It(e, Ge)}` +
            (i && i !== n ? ` · ${i.name} moved to ${It(r, Ge)}` : ``)),
          Qe());
      } else performance.now() > Ke.until && et();
      Ye = t;
      return;
    }
    (Xe && !Xe.some((e, n) => e && t[n]) && ((Xe = null), Dt(!1)),
      n(4) && (v(g - 1), h[g].b.focus()),
      n(5) && (v(g + 1), h[g].b.focus()),
      (Ye = t));
  }
  let rt = () => {
    let t = e.modules.get(`player`),
      n = !!t?.hasTouchControls?.();
    De.hidden = !n;
    let r = t?.getThumbSettings?.();
    if (r) for (let [e, t] of Object.entries(be)) t.input.checked = !!r[e];
    ((be.assist.row.hidden = !r),
      r && ve.set(Math.round((r.padLook ?? 1) * 100)));
  };
  ((a.onclick = () => {
    (e.modules.get(`player`)?.setPointerLock(!1),
      (k.seg.value = F()),
      ee(),
      (ne.input.checked = te(e.config.quality, e.config.bloom)),
      (ne.input.disabled = e.config.quality !== `high`),
      (oe.select.value = String(e.framePolicy?.get().limit ?? 120)),
      rt(),
      Ie.update());
    let t = Ze();
    ((Ye = []),
      (Je = t ? t.raw.slice() : []),
      t && (Ge = Ft(t.gp.id)),
      tt(t),
      Qe());
    let n = null;
    try {
      n = localStorage.getItem(`salient.settings.tab`);
    } catch {}
    (v(
      Math.max(
        0,
        h.findIndex((e) => e.id === n),
      ),
    ),
      o.showModal(),
      cancelAnimationFrame(qe),
      (qe = requestAnimationFrame(nt)));
  }),
    o.addEventListener(`keydown`, (e) => {
      (e.stopPropagation(),
        e.key === `Escape` && Ke && (e.preventDefault(), et()));
    }),
    o.addEventListener(`keyup`, (e) => e.stopPropagation()),
    o.addEventListener(`cancel`, (e) => {
      Ke && (e.preventDefault(), et());
    }),
    o.addEventListener(`close`, () => {
      (cancelAnimationFrame(qe),
        (qe = 0),
        (Ke = null),
        (Xe = null),
        Dt(!1),
        a.focus());
    }),
    o.addEventListener(`mousedown`, (e) => {
      if (e.target === o) {
        let t = o.getBoundingClientRect();
        (e.clientX < t.left ||
          e.clientX > t.right ||
          e.clientY < t.top ||
          e.clientY > t.bottom) &&
          o.close();
      }
    }));
  let it = () => {
    ((a.hidden = !!document.pointerLockElement),
      e.ui.style.setProperty(
        `--salient-settings-clearance`,
        a.hidden ? `0px` : `52px`,
      ),
      a.hidden && o.open && o.close());
  };
  (document.addEventListener(`pointerlockchange`, it),
    e.ui.append(a, o),
    v(0),
    Qe());
  function at() {
    o.open && Ie.update();
    let t = e.modules.get(`audio`);
    t &&
      t !== n &&
      Object.entries(i)
        .map(([e, n]) => t.setBus(e, n))
        .every(Boolean) &&
      (n = t);
    let a = e.modules.get(`player`);
    if (a && a !== r) {
      R.set(Math.round(a.getSensitivity() / 2e-4));
      for (let e of z) e.input.checked = a.getInvertY();
      r = a;
    }
  }
  return (
    it(),
    at(),
    {
      update: at,
      dispose() {
        (document.removeEventListener(`pointerlockchange`, it),
          cancelAnimationFrame(qe),
          o.remove(),
          a.remove(),
          e.ui.style.removeProperty(`--salient-settings-clearance`));
      },
    }
  );
}
