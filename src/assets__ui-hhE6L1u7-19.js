// assets__ui-hhE6L1u7 19 — appendchild
// Lines 7139-8486 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Si(
  e,
  t,
  {
    getLoadout: n,
    getProgress: r,
    getTeam: i,
    selectClass: a,
    save: o,
    back: s,
    deploy: c,
  },
) {
  let l = t.appendChild(J(`section`, `equipment-workbench`));
  (l.setAttribute(`aria-label`, `Class and weapon customization`),
    (l.hidden = !0));
  let u = l.appendChild(
      vi(`loadout-crumb`, ``, () => {
        U === `attach` ? ((U = `weapons`), (G = null), Pt(), K()) : s();
      }),
    ),
    d = J(`span`, ``);
  u.append(J(`i`, `crumb-arrow`, `‹`), d);
  let f = l.appendChild(J(`section`, `equipment-soldier`)),
    p = f.appendChild(J(`div`, `soldier-stage`)),
    m = p.appendChild(J(`canvas`, `soldier-preview`));
  m.setAttribute(`role`, `img`);
  let h = f.appendChild(J(`h2`, `portrait-title`)),
    g = f.appendChild(J(`p`, `equipment-role`)),
    _ = l.appendChild(J(`section`, `equipment-center`)),
    v = _.appendChild(J(`div`, `equipment-classes`)),
    y = _.appendChild(J(`div`, `equipment-weapons`)),
    b = _.appendChild(J(`div`, `equipment-tabbar`)).appendChild(
      J(`div`, `weapon-types`),
    );
  b.setAttribute(`role`, `tablist`);
  let x = _.appendChild(J(`div`, `weapon-stage`)),
    S = x.appendChild(J(`canvas`, `weapon-preview`));
  (S.setAttribute(`role`, `img`), (S.tabIndex = 0));
  let C = x.appendChild(J(`div`, `weapon-stage-head weapon-hero`)),
    w = C.appendChild(J(`h2`, `equipment-title`)),
    T = C.appendChild(J(`p`, `equipment-facts`)),
    E = x.appendChild(J(`div`, `weapon-preview-badge`, `EQUIPPED`));
  x.append(
    J(
      `div`,
      `weapon-gesture-hint`,
      `Drag to rotate · scroll to zoom · double-click to reset`,
    ),
  );
  let D = C.appendChild(J(`div`, `hero-actions`)),
    O = D.appendChild(J(`span`, `equipped-pill`, `EQUIPPED`)),
    k = () => {
      (U === `attach`
        ? ((U = `weapons`), (G = null), Pt())
        : ((U = `attach`),
          (W =
            Object.keys(oi).find((e) => ye(n().weapons[ht], e).length > 1) ??
            `camo`),
          (G = null),
          Ft()),
        K());
    };
  D.append(y);
  let A = J(`div`, `attachment-slots`);
  A.setAttribute(`aria-label`, `Attachment slots`);
  let j = _.appendChild(J(`div`, `equipment-choices`)),
    M = j.appendChild(J(`div`, `weapon-picker`));
  M.setAttribute(`role`, `radiogroup`);
  let N = _.appendChild(J(`div`, `equipment-attachrow`)),
    P = N.appendChild(J(`span`, `attachrow-label`)),
    F = _.appendChild(J(`div`, `equipment-bottom`)),
    ee = F.appendChild(J(`div`, `equipment-gadgets`)),
    te = F.appendChild(J(`div`, `equipment-footer`)),
    I = te.appendChild(
      J(`span`, `equipment-save`, `Saved per class · applied on deploy`),
    );
  (I.setAttribute(`role`, `status`),
    te.append(vi(`equipment-back`, `Deploy`, c ?? s)));
  let ne = l.appendChild(J(`section`, `equipment-options`)),
    L = ne.appendChild(J(`figure`, `equipment-aim`)),
    R = L.appendChild(J(`figcaption`, `aim-head`));
  R.append(J(`span`, `eyebrow`, `DOWN SIGHT`));
  let z = R.appendChild(J(`strong`, `aim-name`)),
    re = R.appendChild(J(`span`, `aim-zoom`)),
    ie = L.appendChild(J(`canvas`, `aim-preview`));
  (ie.setAttribute(`role`, `img`),
    L.append(J(`span`, `aim-note`, `Centre target 40 m`)));
  let ae = ne.appendChild(J(`div`, `options-heading`));
  ae.append(J(`div`, `eyebrow`, `WEAPON SETUP`));
  let oe = ae.appendChild(J(`h3`)),
    se = ne.appendChild(J(`div`, `equipment-options-scroll`)),
    ce = j.appendChild(J(`div`, `attachment-options`)),
    B = se.appendChild(J(`canvas`, `panel-thumb`));
  B.setAttribute(`aria-hidden`, `true`);
  let le = se.appendChild(J(`h4`, `attachment-name`)),
    V = se.appendChild(J(`p`, `attachment-description`)),
    ue = se.appendChild(J(`dl`, `setup-facts`)),
    de = l.appendChild(J(`div`, `rail-setting`));
  de.style.cssText = `display:none;position:fixed;left:54%;top:68px;transform:translateX(-50%);width:min(460px,46vw);z-index:6;flex-wrap:wrap;gap:6px 10px;align-items:center;padding:10px 14px;border-radius:8px;background:rgba(10,13,16,.8);box-shadow:0 2px 12px rgba(0,0,0,.4);font-size:13px;color:#e6eef2;pointer-events:auto`;
  let fe = de.appendChild(J(`span`, `rail-text`));
  fe.style.flex = `1`;
  let pe = (e, t = !0) => {
      let r = n(),
        i = r.weapons[ht],
        a = (r.attachments.weapons[i] ??= {
          optic: `standard`,
          muzzle: `standard`,
          grip: `standard`,
        });
      (e == null ? delete a.rail : (a.rail = e), t && o());
    },
    me = 0,
    he = ``,
    H = de.appendChild(
      vi(`rail-reset`, `Default`, () => {
        (pe(null),
          (I.textContent = `Sight back to its default spot · saved`),
          K());
      }),
    );
  H.style.cssText = `font:600 11px/1 inherit;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border:1px solid rgba(255,255,255,.25);border-radius:4px;background:rgba(255,255,255,.08);color:#e6eef2;cursor:pointer`;
  let ge = de.appendChild(document.createElement(`input`));
  ((ge.type = `range`),
    (ge.min = String(-De * 100)),
    (ge.max = String(De * 100)),
    (ge.step = `.5`),
    (ge.style.width = `100%`),
    ge.setAttribute(`aria-label`, `Sight position on the rail`));
  let _e = (e, t) =>
    `Position on rail · ${e > 0 ? `+` : ``}${e.toFixed(1)} cm${e > 0 ? ` toward you` : e < 0 ? ` forward` : ``}${t ? `` : ` (default)`}`;
  ((ge.oninput = () => {
    ((fe.textContent = _e(+ge.value, !0)),
      pe(Math.round(ge.value * 2) / 200, !1),
      (me ||= requestAnimationFrame(() => {
        ((me = 0), K());
      })));
  }),
    (ge.onchange = () => {
      (pe(Math.round(ge.value * 2) / 200),
        (I.textContent = `Sight position saved · applied on deploy`),
        K());
    }));
  let xe = se.appendChild(J(`div`, `reticle-preview`));
  xe.hidden = !0;
  let Ce = xe.appendChild(J(`canvas`, `reticle-view`));
  ((Ce.width = Ce.height = 200),
    Ce.setAttribute(`role`, `img`),
    Ce.setAttribute(`aria-label`, `Reticle preview`));
  let we = se.appendChild(J(`div`, `comparison-title`)),
    Te = se.appendChild(J(`div`, `attachment-stats`));
  Te.setAttribute(`aria-live`, `polite`);
  let Ee = se.appendChild(J(`section`, `range-details`));
  ((Ee.hidden = !0),
    se.append(
      J(
        `p`,
        `stats-key`,
        `Longer bar = better, scaled across the guns of this class. The colored section shows the change; the tick marks the equipped value.`,
      ),
    ));
  let Oe = ne.appendChild(J(`div`, `equipment-actions`)),
    Ae = Oe.appendChild(J(`span`, `selection-note`)),
    Me = Oe.appendChild(
      vi(`equip-attachment`, `Equip attachment`, () => {
        if (!G) return;
        if (W === `camo`) {
          let e = n().weapons[ht],
            t = G === `factory` ? null : G;
          (Ze(e, t),
            (I.textContent = `${t ? Le[t].name + ` camo` : `Factory finish`} equipped · saved`),
            (G = null),
            (wt = !1),
            K());
          return;
        }
        let e = n();
        ((e.attachments.weapons[e.weapons[ht]][W] = G),
          W === `optic` && delete e.attachments.weapons[e.weapons[ht]].rail,
          o(),
          (I.textContent = `${oi[W][G].name} equipped · saved`),
          (G = null),
          (wt = !1),
          K());
      }),
    ),
    ze = qt(e),
    He = 0,
    Je = ``,
    nt = (e, t) =>
      (t
        ? 75 / e
        : Math.tan((27.5 * Math.PI) / 180) / Math.tan((e * Math.PI) / 360)
      )
        .toFixed(1)
        .replace(/\.0$/, ``);
  function rt() {
    (clearTimeout(He),
      (He = setTimeout(() => {
        He = 0;
        let e = wt ? Et : Tt;
        if (!vt || yt || !e || !ie.clientWidth) return;
        let t = et(e).optic,
          n = t
            ? (ve[e.attachments?.optic]?.name ?? `Factory sight`)
            : `Iron sights`,
          r =
            e.id +
            JSON.stringify(e.attachments) +
            (e.camo ?? ``) +
            JSON.stringify(ke()) +
            ie.clientWidth +
            `x` +
            ie.clientHeight;
        z.textContent = n;
        let i = t?.type === `scope`;
        ((re.textContent = `${nt(t?.fov ?? 55, i)}×${t?.fovs ? ` · variable ${nt(Math.max(...t.fovs), i)}–${nt(Math.min(...t.fovs), i)}×` : ``}${t?.thermal ? ` · thermal in play` : ``}`),
          ie.setAttribute(`aria-label`, `Aiming down the ${e.name} with ${n}`),
          r !== Je &&
            ((Je = r),
            ze.aim(ie, e).catch((e) => {
              ((Je = ``), Ut(e));
            })));
      }, 70)));
  }
  let it = Ur() ? ai(e, t, { stage: S }) : null;
  it?.live && x.classList.add(`armory-live`);
  let at = new Map(),
    ot = Promise.resolve();
  function st(e, t) {
    if (!e.clientWidth || !e.clientHeight) return;
    let n =
        t.id +
        JSON.stringify(t.attachments) +
        (t.camo ?? ``) +
        `:` +
        e.clientWidth +
        `x` +
        e.clientHeight,
      r = at.get(n);
    if (r) {
      ((e.width = r.width),
        (e.height = r.height),
        e.getContext(`2d`).drawImage(r, 0, 0),
        (e.dataset.ready = `true`));
      return;
    }
    ot = ot
      .then(async () => {
        if (!yt && e.isConnected && e.clientWidth) {
          if (at.has(n)) st(e, t);
          else {
            await ze.thumb(e, t);
            let r = document.createElement(`canvas`);
            ((r.width = e.width),
              (r.height = e.height),
              r.getContext(`2d`).drawImage(e, 0, 0),
              at.set(n, r));
          }
        }
      })
      .catch(() => {});
  }
  let ct = !1,
    lt = null,
    ut = null,
    U = `weapons`,
    ht = 0,
    W = `optic`,
    G = null,
    gt = null,
    _t = ``,
    vt = !1,
    yt = !1,
    St = 0,
    Ct = { yaw: 0, pitch: 0 },
    wt = !1,
    Tt,
    Et,
    Dt = 0,
    Ot = null,
    kt = 0,
    At = 1,
    jt = null,
    Mt = 0,
    Nt = 0;
  function Pt() {
    ((Ct = { yaw: 0, pitch: 0 }), (At = 1), (jt = null), (Mt = Nt = 0));
  }
  function Ft() {
    if (W === `camo`) {
      (Pt(), (Ct = { yaw: 0.35, pitch: 0 }));
      return;
    }
    ((jt = W === `reticle` ? `optic` : W),
      (At = W === `optic` || W === `reticle` ? 1.6 : 1.3),
      (Mt = Nt = 0),
      (Ct = { yaw: 0.55, pitch: 0 }));
  }
  function It(e) {
    ((At = Math.max(it?.live ? 0.5 : 1, Math.min(it?.live ? 16 : 8, e))),
      At > 1 && !jt && (jt = W),
      Rt());
  }
  function Lt() {
    E.textContent =
      (G || gt != null) && !wt ? `PREVIEW · NOT EQUIPPED` : `EQUIPPED`;
  }
  function Rt() {
    if (vt && !yt && Tt) {
      if (
        ((S.dataset.zoom = At), (S.dataset.focus = jt ?? `weapon`), it?.live)
      ) {
        (it.setGun(wt ? Et : Tt, { preview: !wt && (G != null || gt != null) }),
          it.setView({
            ...Ct,
            zoom: At,
            focus: jt,
            drag: !!Ot,
            rear: U === `attach` && W === `reticle`,
          }),
          (S.dataset.ready = `true`));
        return;
      }
      (++Dt,
        (S.dataset.ready = `false`),
        ze
          .weapon(S, wt ? Et : Tt, {
            ...Ct,
            zoom: At,
            focus: jt,
            panX: Mt,
            panY: Nt,
            frame: 0.6,
          })
          .then((e) => {})
          .catch(Ut));
    }
  }
  (S.addEventListener(
    `wheel`,
    (e) => {
      (e.preventDefault(), It(At * Math.exp(-Math.sign(e.deltaY) * 0.12)));
    },
    { passive: !1 },
  ),
    S.addEventListener(`keydown`, (e) => {
      [`+`, `=`, `-`, `0`].includes(e.key) &&
        (e.preventDefault(),
        e.key === `0` ? (Pt(), Rt()) : It(At + (e.key === `-` ? -0.5 : 0.5)));
    }),
    S.addEventListener(`pointerdown`, (e) => {
      e.button === 0 &&
        ((Ot = {
          x: e.clientX,
          y: e.clientY,
          yaw: Ct.yaw,
          pitch: Ct.pitch,
          pan: e.shiftKey,
          panX: Mt,
          panY: Nt,
        }),
        S.setPointerCapture(e.pointerId));
    }),
    S.addEventListener(`pointermove`, (e) => {
      Ot &&
        (Ot.pan
          ? ((Mt = Ot.panX - (e.clientX - Ot.x) / S.clientWidth),
            (Nt = Ot.panY + (e.clientY - Ot.y) / S.clientWidth))
          : (Ct = {
              yaw: Ot.yaw + (e.clientX - Ot.x) * 0.008,
              pitch: Math.max(
                -0.6,
                Math.min(0.6, Ot.pitch + (e.clientY - Ot.y) * 0.004),
              ),
            }),
        (kt ||= requestAnimationFrame(() => {
          ((kt = 0), Rt());
        })));
    }),
    S.addEventListener(`dblclick`, () => {
      (Pt(), Rt());
    }),
    S.addEventListener(`pointerup`, () => {
      Ot = null;
    }),
    S.addEventListener(`lostpointercapture`, () => {
      Ot = null;
    }));
  function zt(e) {
    if (
      !vt ||
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      e.repeat ||
      e.target?.closest?.(`input,textarea,select,[contenteditable]`)
    )
      return;
    let t = e.key.toLowerCase();
    if ((t === `q` || t === `e`) && lt)
      (e.preventDefault(), lt(t === `q` ? -1 : 1));
    else if (
      (t === `1` || t === `2` || t === `3`) &&
      +t <= n().weapons.length
    ) {
      let n = t - 1;
      (n !== ht || U !== `weapons`) &&
        (e.preventDefault(),
        (ht = n),
        (U = `weapons`),
        (ut = null),
        (G = null),
        Pt(),
        K());
    } else t === `c` && (e.preventDefault(), k());
  }
  window.addEventListener(`keydown`, zt);
  function Bt(e) {
    if (e.pointerType === `touch`) return;
    let t =
      e.type === `pointerleave`
        ? null
        : (e.target.closest?.(`[data-hover]`)?.dataset.hover ?? null);
    if (e.currentTarget === M) {
      let e = t != null && /^\d+$/.test(t) ? +t : t;
      e !== gt && ((gt = e), K(!0));
    } else t !== G && ((G = t), (wt = !1), K(!0));
  }
  for (let e of [M, ce])
    (e.addEventListener(`pointerover`, Bt),
      e.addEventListener(`pointerleave`, Bt));
  function Vt(e) {
    let t = Ge(e, ke()),
      n = Ce.getContext(`2d`);
    if (!n) return;
    let r = n.createLinearGradient(0, 0, 0, 200);
    (r.addColorStop(0, `#8fb3cf`),
      r.addColorStop(0.52, `#c9d8df`),
      r.addColorStop(0.52, `#6b7f55`),
      r.addColorStop(1, `#4d5c3d`),
      (n.fillStyle = r),
      n.fillRect(0, 0, 200, 200),
      (n.fillStyle = `#2a3440`),
      n.fillRect(93, 86, 14, 40));
    let i = Math.max(2, Math.round(((200 * Pe) / 0.16) * t.scale)),
      a = document.createElement(`canvas`);
    a.width = a.height = i;
    let o = a.getContext(`2d`);
    o && (Fe(o, i, t), n.drawImage(a, 100 - i / 2, 100 - i / 2));
  }
  function Ht(e, t) {
    let n = ke(),
      r = ce.appendChild(J(`div`, `reticle-bar`)),
      i = r.appendChild(J(`div`, `reticle-colours`));
    i.append(J(`span`, `reticle-heading`, `Colour`));
    for (let [e, t] of Object.entries(Ne)) {
      let r = n.color === e,
        a = vi(`reticle-swatch${r ? ` selected` : ``}`, ``, () => {
          (r ||
            (We({ color: e }),
            (I.textContent = `Reticle saved · applies to every sight`)),
            K());
        });
      (a.style.setProperty(
        `--sw`,
        t.css ?? `conic-gradient(#ff3b2f 0 50%,#ffb640 0)`,
      ),
        t.css || a.classList.add(`auto`),
        (a.title = t.name),
        a.setAttribute(`aria-label`, `Reticle colour ${t.name}`),
        a.setAttribute(`aria-pressed`, String(r)),
        (a.dataset.focusKey = `reticle-color-` + e),
        i.append(a));
    }
    let a = r.appendChild(J(`label`, `reticle-size`));
    a.append(J(`span`, `reticle-heading`, `Size`));
    let o = a.appendChild(document.createElement(`input`));
    ((o.type = `range`),
      (o.min = String(Ie.min)),
      (o.max = String(Ie.max)),
      (o.step = String(Ie.step)),
      (o.value = String(n.size)),
      o.setAttribute(`aria-label`, `Reticle size`),
      (o.dataset.focusKey = `reticle-size`));
    let s = a.appendChild(
      J(`strong`, `reticle-size-value`, `${Math.round(n.size * 100)}%`),
    );
    ((o.oninput = () => {
      (We({ size: +o.value }),
        (s.textContent = `${Math.round(o.value * 100)}%`),
        Vt(e),
        K(!0));
    }),
      (o.onchange = () => {
        ((I.textContent = `Reticle size saved · applies to every sight`),
          K(!0));
      }),
      ce.append(J(`span`, `reticle-heading`, `Shape`)));
    for (let [r, i] of Object.entries(Be)) {
      let a = n.shape === r,
        o = a || je(r, t) ? null : `Level ${i.level}`,
        s = vi(
          `reticle-option${a ? ` selected` : ``}${o ? ` locked` : ``}`,
          ``,
          () => {
            if (o) {
              I.textContent = `${i.name} is locked · ${o}`;
              return;
            }
            (a ||
              (We({ shape: r }),
              (I.textContent = `Reticle saved · applies to every sight`)),
              K());
          },
        ),
        c = s.appendChild(J(`canvas`, `reticle-icon`));
      c.width = c.height = 40;
      let l = c.getContext(`2d`);
      (l &&
        Fe(l, 40, {
          ...Ge(e, { ...n, shape: r }),
          ...(e === `scope` && n.color === "default"
            ? { css: Ne.white.css }
            : {}),
          scale: 1.35,
        }),
        s.append(J(`strong`, ``, i.name)),
        o && s.append(J(`small`, ``, o)),
        (s.title = i.name),
        s.setAttribute(`aria-pressed`, String(a)),
        (s.dataset.focusKey = `reticle-shape-` + r),
        ce.append(s));
    }
  }
  function Ut(t) {
    yt ||
      ((I.textContent = `Preview unavailable. Equipment choices still work.`),
      e.warn(`Equipment preview`, String(t)));
  }
  function Wt(e, t) {
    let n = fr(e),
      r = Math.max(...n.map((e) => e.damage), 1),
      i = Math.max(...n.map((e) => e.hits), 1),
      a = { l: 24, r: 10, t: 10, b: 20 },
      o = (e) => a.l + (e / 100) * (320 - a.l - a.r),
      s = (e) => a.t + (1 - e / r) * (108 - a.t - a.b),
      c = (e) => a.t + (1 - e / i) * (108 - a.t - a.b),
      l = (e, t = {}) => {
        let n = document.createElementNS(`http://www.w3.org/2000/svg`, e);
        for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
        return n;
      },
      u = J(`h4`, ``, `Range · ${t ? `preview setup` : `equipped setup`}`),
      d = J(`figure`, `range-figure`),
      f = l(`svg`, {
        viewBox: `0 0 320 108`,
        role: `img`,
        "aria-label": `${e.name} torso damage and ideal body hits from 0 to 100 metres`,
      });
    f.append(
      l(`line`, {
        x1: a.l,
        y1: 108 - a.b,
        x2: 320 - a.r,
        y2: 108 - a.b,
        class: `range-axis`,
      }),
    );
    for (let e of [0, 25, 50, 75, 100]) {
      let t = o(e);
      f.append(
        l(`line`, {
          x1: t,
          y1: 108 - a.b,
          x2: t,
          y2: 108 - a.b + 4,
          class: `range-axis`,
        }),
      );
      let n = l(`text`, {
        x: t,
        y: 105,
        class: `range-tick`,
        "text-anchor": `middle`,
      });
      ((n.textContent = e), f.append(n));
    }
    f.append(
      l(`polyline`, {
        points: n.map((e) => `${o(e.distance)},${s(e.damage)}`).join(` `),
        class: `range-damage`,
      }),
      l(`polyline`, {
        points: n.map((e) => `${o(e.distance)},${c(e.hits)}`).join(` `),
        class: `range-hits`,
      }),
    );
    let p = J(`figcaption`, `range-key`);
    (p.append(
      J(`span`, `damage`, `Damage`),
      J(`span`, `hits`, `Body hits`),
      J(`span`, `distance`, `Distance (m)`),
    ),
      d.append(f, p));
    let m = J(`table`, `range-table`);
    m.appendChild(J(`caption`, ``, `Ideal torso results for ${e.name}`));
    let h = m
      .appendChild(document.createElement(`thead`))
      .appendChild(document.createElement(`tr`));
    for (let e of [`Distance`, `Damage`, `Hits`, `Ideal TTK`])
      h.appendChild(J(`th`, ``, e));
    let g = m.appendChild(document.createElement(`tbody`));
    for (let e of n) {
      let t = g.appendChild(document.createElement(`tr`));
      for (let n of [
        `${e.distance} m`,
        e.damage.toFixed(1),
        String(e.hits),
        `${Math.round(e.ttk)} ms`,
      ])
        t.appendChild(J(`td`, ``, n));
    }
    let _ = J(
      `p`,
      `range-assumptions`,
      `Ideal TTK assumes torso hits on a fresh soldier, a full magazine and the first bullet at time zero. It excludes aiming, weapon-ready time, misses, reload, travel and latency.`,
    );
    Ee.replaceChildren(u, d, m, _);
  }
  function K(e = !1) {
    if (!vt || yt) return;
    let t = document.activeElement?.dataset.focusKey,
      s = ++St,
      c = n(),
      f = mt.find((e) => e.id === c.classId),
      p = r?.() ?? null,
      _ = (e) => Ue(p, e),
      x =
        !!p?.admin ||
        /^(localhost|127\.0\.0\.1|\[::1\])$/.test(
          globalThis.location?.hostname ?? ``,
        );
    ht >= c.weapons.length && (ht = 0);
    let C = c.weapons[ht],
      E = c.attachments.weapons[C] ?? {
        optic: `standard`,
        muzzle: `standard`,
        grip: `standard`,
        mag: `standard`,
      },
      D = p?.weapons?.[C]?.camos ?? null,
      j = (e, t) =>
        !p || Ve(p, e, W, t)
          ? null
          : (p.weapons[e].attachments.find((e) => e.slot === W && e.id === t) ??
            null);
    W === `camo` && !D && ((W = `optic`), (G = null));
    let F = be(C, c.attachments)?.optic?.type,
      te = Re.includes(F);
    (W === `reticle` && !te && ((W = `optic`), (G = null)),
      p && !je(ke().shape, p) && We({ shape: `default` }),
      W !== `camo` &&
        W !== `reticle` &&
        ye(C, W).length < 2 &&
        ((W = Object.keys(oi).find((e) => ye(C, e).length > 1) ?? `optic`),
        (G = null)),
      v.replaceChildren());
    for (let e of mt) {
      let t = vi(e.id === f.id ? `selected` : ``, e.name, () => {
        (a(e.id), (U = `weapons`), (ut = null), (G = null), Pt(), K());
      });
      ((t.dataset.focusKey = `class-` + e.id),
        t.setAttribute(`aria-pressed`, String(e.id === f.id)),
        (t.title = e.role),
        v.append(t));
    }
    ((I.textContent = `${f.name} loadout · saved on this device`),
      m.setAttribute(`aria-label`, `${f.name} soldier`),
      (h.textContent = f.name),
      g.replaceChildren(J(`strong`, ``, _i[f.id]), J(`span`, ``, f.role)));
    let ne = Qe(be(c.weapons[0], c.attachments)),
      L = f.id + i() + JSON.stringify(ne.attachments) + ne.id + (ne.camo ?? ``);
    (L !== _t && ((_t = L), ze.soldier(m, f.id, i(), ne).catch(Ut)),
      y.replaceChildren(),
      c.weapons.forEach((e, t) => {
        let n = vi(t === ht ? `selected` : ``, ``, () => {
          ((ht = t), (U = `weapons`), (ut = null), (G = null), Pt(), K());
        });
        (n.append(yi(String(t + 1)), J(`strong`, ``, dt[t])),
          (n.title = Se[e].name),
          (n.dataset.focusKey = `weapon-` + t),
          n.setAttribute(`aria-pressed`, String(t === ht)),
          y.append(n));
      }),
      ht >= c.weapons.length && (ht = 0));
    let R = f.weapons[ht].filter(
      (e) => !c.weapons.some((t, n) => n !== ht && t === e),
    );
    (U !== `weapons` || !R.includes(gt) || gt === C) && (gt = null);
    let z = gt ?? C;
    w.textContent = Se[z].name;
    {
      let e = ui[Se[z].class] ?? Se[z].class;
      T.textContent = [e, e === f.name.toUpperCase() ? null : f.name, dt[ht]]
        .filter(Boolean)
        .join(` · `);
    }
    let re = [];
    (e ||
      M.replaceChildren(
        J(`span`, `weapon-picker-label`, `${dt[ht].toUpperCase()} OPTIONS`),
      ),
      M.setAttribute(`aria-label`, `Choose ${dt[ht].toLowerCase()} weapon`));
    let ie = (e) => li[Se[e].class] ?? `Other`,
      ae = [...new Set(R.map(ie))];
    ae.includes(ut) || (ut = ie(C));
    let se = R.length > 6 && ae.length > 1;
    if ((b.replaceChildren(), (lt = null), se)) {
      let e = U === `weapons`;
      e && b.append(yi(`Q`));
      for (let t of ae) {
        let n = e && t === ut,
          r = vi(n ? `selected` : ``, t, () => {
            (U !== `weapons` && ((U = `weapons`), (G = null), Pt()),
              (ut = t),
              K());
          });
        (r.setAttribute(`role`, `tab`),
          r.setAttribute(`aria-selected`, String(n)),
          (r.dataset.focusKey = `type-` + t),
          b.append(r));
      }
      e &&
        (b.append(yi(`E`)),
        (lt = (e) => {
          ((ut = ae[(ae.indexOf(ut) + e + ae.length) % ae.length]), K());
        }));
    }
    let pe = se ? R.filter((e) => ie(e) === ut) : R,
      me = pe.filter((e) => !_(e)),
      H = Math.min(
        ...me.map((e) => p?.arsenal?.find((t) => t.id === e)?.level ?? 1 / 0),
      ),
      ve =
        me.find(
          (e) => (p?.arsenal?.find((t) => t.id === e)?.level ?? 1 / 0) === H,
        ) ?? me[0],
      Ce = me.length - (ve == null ? 0 : 1),
      De = pe.filter((e) => _(e) || e === ve),
      Pe = gi();
    for (let e of De) ze.load(Qe(be(e, c.attachments)));
    if (!e)
      for (let e of De) {
        let t = Se[e],
          n = !_(e),
          r = J(`canvas`, `weapon-thumb`),
          i = vi(
            `${e === C ? `selected ` : ``}${n ? `locked` : ``}`,
            ``,
            () => {
              n ||
                (e !== C && ((c.weapons[ht] = e), o()),
                (G = null),
                (gt = null),
                Pt(),
                (U = `weapons`),
                k());
            },
          );
        if (
          (i.append(r),
          re.push([r, Qe(be(e, c.attachments))]),
          i.append(J(`strong`, ``, t.name)),
          i.classList.add(`weapon-row`),
          x)
        ) {
          let e = qn(t);
          if (e) {
            let t = i.appendChild(J(`span`, `audio-tag ${e.status}`, `Audio`));
            t.title = Jn[e.status] + (e.note ? ` · ${e.note}` : ``);
          }
        }
        if (n) {
          let t = p?.arsenal?.find((t) => t.id === e);
          i.append(J(`small`, ``, `LOCKED`));
          let n = xi(
            t?.requirement ?? `Rank up to unlock`,
            t?.have ?? 0,
            t?.need ?? 1,
            !1,
            ` XP`,
          );
          (n.classList.add(`row-goal`), i.append(n));
        } else {
          let n = xt[bt[e]?.calibre]?.label;
          i.append(
            J(
              `small`,
              ``,
              [ui[t.class] ?? t.class, n].filter(Boolean).join(` · `),
            ),
          );
          let r = Pe.get(e);
          i.append(J(`p`, `card-line`, r?.line ?? ``));
          let a = i.appendChild(J(`div`, `card-stats`));
          for (let e of fi) {
            let t = r?.[e] ?? 1,
              n = J(`span`, `card-stat`),
              i = J(`b`, ``);
            n.title = `${e[0] + e.slice(1).toLowerCase()} ${t} / 10 · rated against every gun`;
            for (let e = 0; e < 10; e++) i.append(J(`i`, e < t ? `on` : ``));
            (n.append(J(`small`, ``, e), i, J(`em`, ``, String(t))),
              a.append(n));
          }
        }
        (i.setAttribute(`role`, `radio`),
          i.setAttribute(`aria-checked`, String(e === C)),
          i.setAttribute(`aria-disabled`, String(n)),
          (i.dataset.focusKey = `pick-` + e),
          e !== C && (i.dataset.hover = e),
          M.append(i));
      }
    (Ce > 0 &&
      !e &&
      M.append(
        J(`p`, `weapon-more`, `${Ce} more unlock as you rank up · see Career`),
      ),
      A.replaceChildren());
    for (let e of Object.keys(oi)) {
      if (ye(C, e).length < 2 && (e === `mag` || Se[C].class === `sniper`))
        continue;
      let t = vi(
          `slot-${e}${U === `attach` && W === e ? ` selected` : ``}`,
          ``,
          () => {
            ((U = `attach`), (W = e), (G = null), Ft(), K());
          },
        ),
        n = e === `grip` && Se[C].class === `sniper` ? `Support` : si[e];
      (t.append(J(`span`, ``, n), J(`strong`, ``, oi[e][E[e]].name)),
        t.setAttribute(`aria-label`, `Customize ${si[e].toLowerCase()}`),
        t.setAttribute(`aria-pressed`, String(U === `attach` && W === e)),
        A.append(t),
        (t.dataset.focusKey = `slot-` + e),
        G &&
          W === e &&
          ((t.querySelector(`strong`).textContent = oi[e][G].name),
          t.classList.add(`previewing`)),
        ye(C, e).length < 2 &&
          ((t.disabled = !0), (t.title = `Fixed on this weapon`)));
    }
    if (D) {
      let e = vi(
          `slot-camo${U === `attach` && W === `camo` ? ` selected` : ``}`,
          ``,
          () => {
            ((U = `attach`), (W = `camo`), (G = null), Ft(), K());
          },
        ),
        t = W === `camo` && G ? G : tt(C);
      (e.append(
        J(`span`, ``, `Camo`),
        J(
          `strong`,
          ``,
          `${Le[t]?.name ?? `Factory finish`} · ${D.filter((e) => e.done).length}/${D.length}`,
        ),
      ),
        e.setAttribute(`aria-label`, `Customize camo`),
        e.setAttribute(`aria-pressed`, String(U === `attach` && W === `camo`)),
        (e.dataset.focusKey = `slot-camo`),
        W === `camo` && G && e.classList.add(`previewing`),
        A.append(e));
    }
    if (te) {
      let e = ke(),
        t = vi(
          `slot-reticle${U === `attach` && W === `reticle` ? ` selected` : ``}`,
          ``,
          () => {
            ((U = `attach`), (W = `reticle`), (G = null), Ft(), K());
          },
        );
      (t.append(
        J(`span`, ``, `Reticle`),
        J(
          `strong`,
          ``,
          e.shape === "default" && e.color === "default"
            ? `Sight default`
            : `${Be[Ge(F, e).shape].name} · ${Ne[e.color].name}`,
        ),
      ),
        t.setAttribute(`aria-label`, `Customize reticle`),
        t.setAttribute(
          `aria-pressed`,
          String(U === `attach` && W === `reticle`),
        ),
        (t.dataset.focusKey = `slot-reticle`),
        A.append(t));
    }
    if (((N.hidden = U === `attach`), U !== `attach`))
      ((P.textContent = `Customize ${Se[C].name}`), N.append(A));
    else {
      let e = [...A.children]
        .filter((e) => !e.disabled)
        .map((e) => e.dataset.focusKey.slice(5));
      (b.append(yi(`Q`), A, yi(`E`)),
        (lt = (t) => {
          let n = e[(e.indexOf(W) + t + e.length) % e.length];
          n && ((W = n), (G = null), Ft(), K());
        }));
    }
    let Fe = W === `camo` || W === `reticle` ? W : si[W].toLowerCase();
    d.textContent = u.title =
      U === `attach` ? `Back to weapons` : `Back to deploy`;
    let Ie = !!G || gt != null;
    ((O.textContent = Ie ? `PREVIEW` : `EQUIPPED`),
      O.classList.toggle(`preview`, Ie),
      ee.replaceChildren(),
      c.gadgets.forEach((e, t) => {
        let n = J(`div`, `gadget-group`);
        n.append(J(`small`, ``, t === 0 ? `GRENADE` : `FIELD GADGET`));
        for (let r of ft(f.id)[t]) {
          let i = vi(r === e ? `selected` : ``, pt[r], () => {
            r !== c.gadgets[t] && ((c.gadgets[t] = r), o(), K());
          });
          (i.setAttribute(`aria-pressed`, String(r === e)),
            (i.dataset.focusKey = `gadget-${t}-${r}`),
            n.append(i));
        }
        ee.append(n);
      }),
      (ce.dataset.slot = W),
      (xe.hidden = U !== `attach` || W !== `reticle`),
      (M.hidden = U !== `weapons`),
      (ce.hidden = U === `weapons`),
      (Oe.hidden = U === `weapons`),
      (le.hidden = V.hidden = !1),
      (l.dataset.mode = U),
      (oe.textContent = U === `weapons` ? `Weapon stats` : `Choose ${Fe}`));
    let He = tt(C) ?? `factory`;
    if (
      (e ||
        ce.replaceChildren(
          J(`span`, `weapon-picker-label`, `${Fe.toUpperCase()} OPTIONS`),
        ),
      !e && W === `camo` && Ke.includes(C))
    ) {
      let e = Ye(C) ?? `factory`,
        t = {
          factory: `Clean from the armoury`,
          used: `Rubbed edges, dust, hand polish`,
          worn: `Chipped, scratched, grimy`,
        };
      for (let n of qe) {
        let r = vi(
          `camo-option wear-option${e === n.id ? ` selected` : ``}`,
          ``,
          () => {
            ((wt = !1),
              (G = null),
              n.id !== e &&
                ($e(C, n.id),
                (I.textContent = `${n.name} wear equipped · saved`)),
              K());
          },
        );
        (r
          .appendChild(J(`span`, `option-copy`))
          .append(
            J(`strong`, ``, n.id === `factory` ? `No wear` : n.name),
            J(`span`, ``, t[n.id]),
          ),
          (r.dataset.focusKey = `wear-` + n.id),
          r.setAttribute(`aria-pressed`, String(e === n.id)),
          e === n.id && r.append(J(`small`, ``, `Equipped`)),
          ce.append(r));
      }
      ce.append(J(`span`, `weapon-picker-label`, `CAMO`));
    }
    if (!e && W === `camo`)
      for (let e of [
        {
          id: `factory`,
          name: `Factory finish`,
          done: !0,
          pattern: `solid`,
          colors: [Se[C].color],
        },
        ...D,
      ]) {
        let t = He === e.id,
          n = vi(
            `camo-option${t ? ` selected` : ``}${e.done ? `` : ` locked`}`,
            ``,
            () => {
              if (((wt = !1), !e.done)) {
                ((G = e.id === He ? null : e.id),
                  K(),
                  (I.textContent = `${e.name} is locked · ${e.requirement} · ${Math.floor(e.have).toLocaleString()} / ${e.need.toLocaleString()}`));
                return;
              }
              ((G = null),
                e.id !== He &&
                  (Ze(C, e.id === `factory` ? null : e.id),
                  (I.textContent = `${e.name} equipped · saved`)),
                K());
            },
          ),
          r = n.appendChild(J(`i`, `camo-swatch`));
        r.style.background = Xe(e);
        let i = n.appendChild(J(`span`, `option-copy`));
        (i.append(J(`strong`, ``, e.name)),
          e.id === `factory`
            ? i.append(J(`span`, ``, `Original finish`))
            : i.append(xi(e.requirement, e.have, e.need, e.done)),
          (n.dataset.focusKey = `camo-` + e.id),
          (n.dataset.camo = e.id),
          e.id !== He && (n.dataset.hover = e.id),
          n.setAttribute(`aria-pressed`, String(t)),
          He === e.id
            ? n.append(J(`small`, ``, `Equipped`))
            : e.done || n.append(J(`small`, ``, `Locked`)),
          ce.append(n));
      }
    else !e && W === `reticle` && Ht(F, p);
    if (W === `reticle` && U === `attach`) Vt(F);
    else if (!e)
      for (let e of ye(C, W)) {
        let t = E[W] === e,
          n = j(C, e),
          r = vi(`${t ? `selected` : ``}${n ? ` locked` : ``}`, ``, () => {
            if (((wt = !1), n)) {
              ((G = e),
                K(),
                (I.textContent = `${oi[W][e].name} is locked · ${n.requirement} · ${n.have} / ${n.need}`));
              return;
            }
            ((G = null),
              e !== E[W] &&
                (((c.attachments.weapons[C] ??= { ...E })[W] = e),
                W === `optic` && delete c.attachments.weapons[C].rail,
                o(),
                (I.textContent = `${oi[W][e].name} equipped · saved`)),
              At === 1 && Ft(),
              K());
          }),
          i = J(`span`, `option-copy`);
        i.append(J(`strong`, ``, oi[W][e].name));
        let a =
          W === `optic`
            ? (() => {
                let t = structuredClone(c.attachments);
                return (
                  ((t.weapons[C] ??= { ...E }).optic = e),
                  ` · ${Math.round(be(C, t).ads * 1e3)} ms aim`
                );
              })()
            : ``;
        (i.append(
          n
            ? xi(n.requirement, n.have, n.need, !1)
            : J(
                `span`,
                ``,
                (W === `optic` && e === `standard` && Se[C].optic?.fixed
                  ? `Fixed ${Se[C].optic.label} scope`
                  : ci[W][e]) + a,
              ),
        ),
          r.append(i),
          (r.dataset.focusKey = `attachment-` + e),
          r.setAttribute(`aria-pressed`, String(t)),
          (r.dataset.attachment = e),
          e !== E[W] && (r.dataset.hover = e),
          E[W] === e
            ? r.append(J(`small`, ``, `Equipped`))
            : n && r.append(J(`small`, ``, `Locked`)),
          ce.append(r));
      }
    let Je = structuredClone(c.attachments);
    G && W !== `camo` && (Je.weapons[C][W] = G);
    let nt = gt == null ? null : Qe(be(gt, c.attachments)),
      at = Qe(be(C, c.attachments)),
      ot =
        nt ??
        (W === `camo` && G
          ? Qe(be(C, Je), G === `factory` ? null : G)
          : Qe(be(C, Je))),
      Ct = !!(G || nt),
      Dt = W === `camo` ? (D.find((e) => e.id === (G ?? He)) ?? null) : null;
    {
      let e =
        U === `attach` && W === `optic` && !G
          ? et(be(C, c.attachments)).optic
          : null;
      if (
        ((de.style.display = e?.kit ? `flex` : `none`),
        e?.kit && document.activeElement !== ge)
      ) {
        let t = C + `:` + e.kit,
          n = () => {
            let t =
              Math.round(
                Math.max(+ge.min, Math.min(+ge.max, (e.rail ?? 0) * 100)) * 10,
              ) / 10;
            ((ge.value = String(t)), (fe.textContent = _e(t, E.rail != null)));
          };
        (he !== t &&
          ((he = t),
          ze
            .railSpan(be(C, c.attachments))
            .then((e) => {
              he === t &&
                e &&
                ((ge.min = String(Math.floor(e[0] * 200) / 2)),
                (ge.max = String(Math.ceil(e[1] * 200) / 2)),
                n());
            })
            .catch(() => {})),
          n());
      }
    }
    if (
      ((B.hidden = U !== `weapons`),
      U === `weapons` && re.push([B, Qe(be(z, c.attachments))]),
      U === `weapons`)
    ) {
      let e = Se[z];
      ((le.textContent = e.name),
        (V.textContent = e.role
          ? `${e.role.replace(/[.!?]+$/, ``)}.`
          : `${ui[e.class] ?? e.class} for this loadout.`));
    } else if (W === `reticle`) {
      let e = ke(),
        t = Ge(F, e);
      ((le.textContent = `${Be[t.shape].name} · ${Ne[e.color].name} · ${Math.round(e.size * 100)}%`),
        (V.textContent = `Your reticle for red dots, holographics and ACOGs (scopes keep their own crosshair). Cosmetic: saved on this device, changes no weapon stats. Sight default keeps the sight’s own reticle.`));
    } else
      le.textContent =
        W === `camo` ? (Dt?.name ?? `Factory finish`) : oi[W][G ?? E[W]].name;
    let Ot = W !== `camo` && W !== `reticle` && G ? j(C, G) : null;
    U === `weapons` ||
      (Ot
        ? (V.textContent = `Locked · ${Ot.requirement} (${Ot.have} / ${Ot.need}). ${oi[W][G].description}`)
        : W !== `reticle` &&
          (V.textContent =
            W === `camo`
              ? Dt
                ? `${Dt.requirement}. ${Dt.done ? `Unlocked.` : `Progress ${Math.floor(Dt.have).toLocaleString()} / ${Dt.need.toLocaleString()}.`} Camos are cosmetic and change no weapon stats.`
                : `The original finish. Earn camos with kills and headshots on this weapon.`
              : oi[W][G ?? E[W]].description));
    let kt = nt ?? ot,
      jt = !!(G || nt),
      Mt = p?.arsenal?.find((e) => e.id === kt.id),
      Nt = Mt ? mr(Mt, { admin: p?.admin }) : null,
      It = (e, t) => {
        let n = e(at),
          r = e(kt),
          i = t(r);
        return jt && n !== r ? `${t(n)} → ${i}` : i;
      };
    ue.replaceChildren();
    for (let [e, t] of [
      ...(kt.role ? [[`Role`, kt.role]] : []),
      [
        `Access`,
        Nt?.note ??
          (kt.unlockLevel > 1
            ? `Unlocks at level ${kt.unlockLevel}`
            : `Available from level 1`),
      ],
      [
        `Aim`,
        It(
          (e) => Math.round((e.ads ?? 0) * 1e3),
          (e) => `${e} ms`,
        ),
      ],
      [
        `Reload`,
        It(
          (e) => e.reload ?? 0,
          (e) => `${e.toFixed(2)} s`,
        ),
      ],
      [
        `Ammunition`,
        It(
          (e) => `${e.mag}/${e.reserve}`,
          (e) => {
            let [t, n] = e.split(`/`);
            return `${t} magazine · ${n} reserve`;
          },
        ),
      ],
    ])
      ue.appendChild(document.createElement(`div`)).append(
        J(`dt`, ``, e),
        J(`dd`, ``, t),
      );
    let zt = at,
      Bt = jt ? ot : at;
    ((we.textContent = nt
      ? `${nt.name.toUpperCase()} vs EQUIPPED`
      : W === `camo` || W === `reticle`
        ? ``
        : G
          ? `PREVIEW vs EQUIPPED`
          : `EQUIPPED`),
      Te.replaceChildren());
    let Gt = !1;
    for (let e of cr(zt, Bt)) {
      if (e.from === 0 && e.to === 0) continue;
      if (e.detail && !Gt) {
        Gt = !0;
        let e = vi(`stat-details-toggle`, `${ct ? `▾` : `▸`} Details`, () => {
          ((ct = !ct), K(!0));
        });
        (e.setAttribute(`aria-expanded`, String(ct)), Te.append(e));
      }
      if (e.detail && !ct) continue;
      let t = J(
          `div`,
          `attachment-stat ${e.change ? (e.better ? `better` : `worse`) : `same`}`,
        ),
        n = t.appendChild(J(`div`, `stat-label`)),
        r = (t, n) => n ?? `${t.toFixed(e.precision)}${e.unit}`;
      n.append(
        J(`span`, ``, e.name),
        J(
          `strong`,
          ``,
          e.change || e.fromText !== e.toText
            ? `${r(e.from, e.fromText)} → ${r(e.to, e.toText)}`
            : r(e.to, e.toText),
        ),
      );
      let i = t.appendChild(J(`div`, `stat-track`)),
        a = ur(e),
        o = i.appendChild(J(`i`, `stat-fill`));
      o.style.width = `${a.start}%`;
      let s = i.appendChild(J(`i`, `stat-change`));
      ((s.style.left = `${a.start}%`), (s.style.width = `${a.delta}%`));
      let c = i.appendChild(J(`i`, `stat-marker`));
      c.style.left = `${a.before}%`;
      let l = t.appendChild(
        J(
          `span`,
          `stat-delta`,
          e.change
            ? `${e.change > 0 ? `+` : `−`}${Math.abs(e.change).toFixed(e.precision)}${e.unit} (${e.percent > 0 ? `+` : ``}${e.percent.toFixed(0)}%) · ${e.better ? `better` : `worse`} than equipped`
            : Ct
              ? `No change`
              : `\xA0`,
        ),
      );
      ((l.title = `Compared with ${e.from.toFixed(e.precision)}${e.unit}`),
        Te.append(t));
    }
    if (ot.class === `smg` && !Gt) {
      Gt = !0;
      let e = vi(`stat-details-toggle`, `${ct ? `▾` : `▸`} Details`, () => {
        ((ct = !ct), K(!0));
      });
      (e.setAttribute(`aria-expanded`, String(ct)), Te.append(e));
    }
    ((Ee.hidden = ot.class !== `smg` || !ct),
      Ee.hidden ? Ee.replaceChildren() : Wt(ot, jt));
    let Kt =
      (W === `camo` && !!G && !!Dt && !Dt.done) ||
      (W !== `camo` && W !== `reticle` && !!G && !!j(C, G));
    ((Ae.textContent = Kt
      ? `Preview only · not unlocked yet`
      : `Click an option to equip it · saved for deployment`),
      (Me.hidden = !0),
      (Me.disabled = !G || Kt),
      (Me.textContent = Kt
        ? `Locked`
        : G
          ? `Equip ${W === `camo` ? (Dt?.name ?? `Factory finish`) : oi[W][G].name}`
          : `Equipped`),
      S.setAttribute(
        `aria-label`,
        `${ot.name} with ${Object.keys(oi)
          .map((e) => oi[e][(Je.weapons[C] ?? E)[e]].name)
          .join(`, `)}`,
      ),
      (Et = at),
      (Tt = ot),
      G || (wt = !1),
      Lt(),
      Promise.resolve().then(() => {
        if (!(s !== St || yt)) {
          (Rt(), rt());
          for (let [e, t] of re) st(e, t);
          it?.prewarm?.([at, ...re.map(([, e]) => e)]);
        }
      }),
      t &&
        l
          .querySelector(`[data-focus-key="${CSS.escape(t)}"]`)
          ?.focus({ preventScroll: !0 }));
  }
  let Gt = !1,
    Kt = new ResizeObserver(() => {
      vt && ((_t = ``), K());
    });
  return (
    Kt.observe(x),
    Kt.observe(p),
    {
      root: l,
      preview: ze,
      thumb: st,
      preload(e) {
        if ((it?.preload?.(e), e && !Gt)) {
          Gt = !0;
          let e = () => {
            if (yt) return;
            let e = n();
            ze.warmAim(Qe(be(e.weapons[0], e.attachments))).catch(() => {});
          };
          window.requestIdleCallback
            ? requestIdleCallback(e, { timeout: 3e3 })
            : setTimeout(e, 500);
        }
      },
      show(e) {
        ((vt = e), (l.hidden = !e), it?.show(e), e && ((G = gt = null), K()));
      },
      refresh() {
        ((G = gt = null), K());
      },
      dispose() {
        ((yt = !0),
          window.removeEventListener(`keydown`, zt),
          cancelAnimationFrame(kt),
          clearTimeout(He),
          Kt.disconnect(),
          ze.dispose(),
          it?.dispose());
      },
    }
  );
}
