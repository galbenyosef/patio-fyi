// assets__ui-D46k2G3Q 17 — appendchild
// Lines 6879-8196 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Zr(
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
      qr(`loadout-crumb`, ``, () => {
        H === `attach` ? ((H = `weapons`), (G = null), Nt(), K()) : s();
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
      (H === `attach`
        ? ((H = `weapons`), (G = null), Nt())
        : ((H = `attach`),
          (W =
            Object.keys(Vr).find((e) => De(n().weapons[U], e).length > 1) ??
            `camo`),
          (G = null),
          Pt()),
        K());
    };
  D.append(y);
  let A = J(`div`, `attachment-slots`);
  A.setAttribute(`aria-label`, `Attachment slots`);
  let j = _.appendChild(J(`div`, `equipment-choices`)),
    M = j.appendChild(J(`div`, `weapon-picker`));
  M.setAttribute(`role`, `radiogroup`);
  let ee = _.appendChild(J(`div`, `equipment-attachrow`)),
    N = ee.appendChild(J(`span`, `attachrow-label`)),
    P = _.appendChild(J(`div`, `equipment-bottom`)),
    F = P.appendChild(J(`div`, `equipment-gadgets`)),
    te = P.appendChild(J(`div`, `equipment-footer`)),
    I = te.appendChild(
      J(`span`, `equipment-save`, `Saved per class · applied on deploy`),
    );
  (I.setAttribute(`role`, `status`),
    te.append(qr(`equipment-back`, `Deploy`, c ?? s)));
  let ne = l.appendChild(J(`section`, `equipment-options`)),
    re = ne.appendChild(J(`figure`, `equipment-aim`)),
    ie = re.appendChild(J(`figcaption`, `aim-head`));
  ie.append(J(`span`, `eyebrow`, `DOWN SIGHT`));
  let ae = ie.appendChild(J(`strong`, `aim-name`)),
    oe = ie.appendChild(J(`span`, `aim-zoom`)),
    L = re.appendChild(J(`canvas`, `aim-preview`));
  (L.setAttribute(`role`, `img`),
    re.append(J(`span`, `aim-note`, `Centre target 40 m`)));
  let se = ne.appendChild(J(`div`, `options-heading`));
  se.append(J(`div`, `eyebrow`, `WEAPON SETUP`));
  let ce = se.appendChild(J(`h3`)),
    le = ne.appendChild(J(`div`, `equipment-options-scroll`)),
    ue = j.appendChild(J(`div`, `attachment-options`)),
    de = le.appendChild(J(`canvas`, `panel-thumb`));
  de.setAttribute(`aria-hidden`, `true`);
  let R = le.appendChild(J(`h4`, `attachment-name`)),
    z = le.appendChild(J(`p`, `attachment-description`)),
    fe = le.appendChild(J(`dl`, `setup-facts`)),
    pe = l.appendChild(J(`div`, `rail-setting`));
  pe.style.cssText = `display:none;position:fixed;left:54%;top:68px;transform:translateX(-50%);width:min(460px,46vw);z-index:6;flex-wrap:wrap;gap:6px 10px;align-items:center;padding:10px 14px;border-radius:8px;background:rgba(10,13,16,.8);box-shadow:0 2px 12px rgba(0,0,0,.4);font-size:13px;color:#e6eef2;pointer-events:auto`;
  let me = pe.appendChild(J(`span`, `rail-text`));
  me.style.flex = `1`;
  let he = (e, t = !0) => {
      let r = n(),
        i = r.weapons[U],
        a = (r.attachments.weapons[i] ??= {
          optic: `standard`,
          muzzle: `standard`,
          grip: `standard`,
        });
      (e == null ? delete a.rail : (a.rail = e), t && o());
    },
    ge = 0,
    _e = ``,
    B = pe.appendChild(
      qr(`rail-reset`, `Default`, () => {
        (he(null),
          (I.textContent = `Sight back to its default spot · saved`),
          K());
      }),
    );
  B.style.cssText = `font:600 11px/1 inherit;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border:1px solid rgba(255,255,255,.25);border-radius:4px;background:rgba(255,255,255,.08);color:#e6eef2;cursor:pointer`;
  let V = pe.appendChild(document.createElement(`input`));
  ((V.type = `range`),
    (V.min = String(-Te * 100)),
    (V.max = String(Te * 100)),
    (V.step = `.5`),
    (V.style.width = `100%`),
    V.setAttribute(`aria-label`, `Sight position on the rail`));
  let ve = (e, t) =>
    `Position on rail · ${e > 0 ? `+` : ``}${e.toFixed(1)} cm${e > 0 ? ` toward you` : e < 0 ? ` forward` : ``}${t ? `` : ` (default)`}`;
  ((V.oninput = () => {
    ((me.textContent = ve(+V.value, !0)),
      he(Math.round(V.value * 2) / 200, !1),
      (ge ||= requestAnimationFrame(() => {
        ((ge = 0), K());
      })));
  }),
    (V.onchange = () => {
      (he(Math.round(V.value * 2) / 200),
        (I.textContent = `Sight position saved · applied on deploy`),
        K());
    }));
  let be = le.appendChild(J(`div`, `reticle-preview`));
  be.hidden = !0;
  let Ce = be.appendChild(J(`canvas`, `reticle-view`));
  ((Ce.width = Ce.height = 200),
    Ce.setAttribute(`role`, `img`),
    Ce.setAttribute(`aria-label`, `Reticle preview`));
  let we = le.appendChild(J(`div`, `comparison-title`)),
    Ee = le.appendChild(J(`div`, `attachment-stats`));
  Ee.setAttribute(`aria-live`, `polite`);
  let Oe = le.appendChild(J(`section`, `range-details`));
  ((Oe.hidden = !0),
    le.append(
      J(
        `p`,
        `stats-key`,
        `Longer bar = better, scaled across the guns of this class. The colored section shows the change; the tick marks the equipped value.`,
      ),
    ));
  let je = ne.appendChild(J(`div`, `equipment-actions`)),
    Ne = je.appendChild(J(`span`, `selection-note`)),
    Be = je.appendChild(
      qr(`equip-attachment`, `Equip attachment`, () => {
        if (!G) return;
        if (W === `camo`) {
          let e = n().weapons[U],
            t = G === `factory` ? null : G;
          (Qe(e, t),
            (I.textContent = `${t ? Re[t].name + ` camo` : `Factory finish`} equipped · saved`),
            (G = null),
            (Ct = !1),
            K());
          return;
        }
        let e = n();
        ((e.attachments.weapons[e.weapons[U]][W] = G),
          W === `optic` && delete e.attachments.weapons[e.weapons[U]].rail,
          o(),
          (I.textContent = `${Vr[W][G].name} equipped · saved`),
          (G = null),
          (Ct = !1),
          K());
      }),
    ),
    Ue = Bt(e),
    Ye = 0,
    Xe = ``,
    it = (e, t) =>
      (t
        ? 75 / e
        : Math.tan((27.5 * Math.PI) / 180) / Math.tan((e * Math.PI) / 360)
      )
        .toFixed(1)
        .replace(/\.0$/, ``);
  function at() {
    (clearTimeout(Ye),
      (Ye = setTimeout(() => {
        Ye = 0;
        let e = Ct ? Tt : wt;
        if (!yt || bt || !e || !L.clientWidth) return;
        let t = rt(e).optic,
          n = t
            ? (xe[e.attachments?.optic]?.name ?? `Factory sight`)
            : `Iron sights`,
          r =
            e.id +
            JSON.stringify(e.attachments) +
            (e.camo ?? ``) +
            JSON.stringify(Ae()) +
            L.clientWidth +
            `x` +
            L.clientHeight;
        ae.textContent = n;
        let i = t?.type === `scope`;
        ((oe.textContent = `${it(t?.fov ?? 55, i)}×${t?.fovs ? ` · variable ${it(Math.max(...t.fovs), i)}–${it(Math.min(...t.fovs), i)}×` : ``}${t?.thermal ? ` · thermal in play` : ``}`),
          L.setAttribute(`aria-label`, `Aiming down the ${e.name} with ${n}`),
          r !== Xe &&
            ((Xe = r),
            Ue.aim(L, e).catch((e) => {
              ((Xe = ``), Ut(e));
            })));
      }, 70)));
  }
  let ot = wr() ? Br(e, t, { stage: S }) : null;
  ot?.live && x.classList.add(`armory-live`);
  let st = new Map(),
    ct = Promise.resolve();
  function lt(e, t) {
    let r = n().weapons.includes(t.id),
      i =
        t.id +
        JSON.stringify(t.attachments) +
        (t.camo ?? ``) +
        `:` +
        e.clientWidth +
        `x` +
        e.clientHeight +
        (r ? `:exact` : `:card`),
      a = st.get(i);
    if (a) {
      ((e.width = a.width),
        (e.height = a.height),
        e.getContext(`2d`).drawImage(a, 0, 0),
        (e.dataset.ready = `true`));
      return;
    }
    ct = ct
      .then(async () => {
        if (!bt && e.isConnected && e.clientWidth) {
          if (st.has(i)) lt(e, t);
          else {
            await Ue.thumb(e, t, { exact: r });
            let n = document.createElement(`canvas`);
            ((n.width = e.width),
              (n.height = e.height),
              n.getContext(`2d`).drawImage(e, 0, 0),
              st.set(i, n));
          }
        }
      })
      .catch(() => {});
  }
  let ft = !1,
    ht = null,
    gt = null,
    H = `weapons`,
    U = 0,
    W = `optic`,
    G = null,
    _t = null,
    vt = ``,
    yt = !1,
    bt = !1,
    xt = 0,
    St = { yaw: 0, pitch: 0 },
    Ct = !1,
    wt,
    Tt,
    Et = 0,
    Dt = null,
    Ot = 0,
    kt = 1,
    At = null,
    jt = 0,
    Mt = 0;
  function Nt() {
    ((St = { yaw: 0, pitch: 0 }), (kt = 1), (At = null), (jt = Mt = 0));
  }
  function Pt() {
    if (W === `camo`) {
      (Nt(), (St = { yaw: 0.35, pitch: 0 }));
      return;
    }
    ((At = W === `reticle` ? `optic` : W),
      (kt = W === `optic` || W === `reticle` ? 1.6 : 1.3),
      (jt = Mt = 0),
      (St = { yaw: 0.55, pitch: 0 }));
  }
  function Ft(e) {
    ((kt = Math.max(ot?.live ? 0.5 : 1, Math.min(ot?.live ? 16 : 8, e))),
      kt > 1 && !At && (At = W),
      Lt());
  }
  function It() {
    E.textContent =
      (G || _t != null) && !Ct ? `PREVIEW · NOT EQUIPPED` : `EQUIPPED`;
  }
  function Lt() {
    if (yt && !bt && wt) {
      if (
        ((S.dataset.zoom = kt), (S.dataset.focus = At ?? `weapon`), ot?.live)
      ) {
        (ot.setGun(Ct ? Tt : wt, { preview: !Ct && (G != null || _t != null) }),
          ot.setView({
            ...St,
            zoom: kt,
            focus: At,
            drag: !!Dt,
            rear: H === `attach` && W === `reticle`,
          }),
          (S.dataset.ready = `true`));
        return;
      }
      (++Et,
        (S.dataset.ready = `false`),
        Ue.weapon(S, Ct ? Tt : wt, {
          ...St,
          zoom: kt,
          focus: At,
          panX: jt,
          panY: Mt,
          frame: 0.6,
        })
          .then((e) => {})
          .catch(Ut));
    }
  }
  (S.addEventListener(
    `wheel`,
    (e) => {
      (e.preventDefault(), Ft(kt * Math.exp(-Math.sign(e.deltaY) * 0.12)));
    },
    { passive: !1 },
  ),
    S.addEventListener(`keydown`, (e) => {
      [`+`, `=`, `-`, `0`].includes(e.key) &&
        (e.preventDefault(),
        e.key === `0` ? (Nt(), Lt()) : Ft(kt + (e.key === `-` ? -0.5 : 0.5)));
    }),
    S.addEventListener(`pointerdown`, (e) => {
      e.button === 0 &&
        ((Dt = {
          x: e.clientX,
          y: e.clientY,
          yaw: St.yaw,
          pitch: St.pitch,
          pan: e.shiftKey,
          panX: jt,
          panY: Mt,
        }),
        S.setPointerCapture(e.pointerId));
    }),
    S.addEventListener(`pointermove`, (e) => {
      Dt &&
        (Dt.pan
          ? ((jt = Dt.panX - (e.clientX - Dt.x) / S.clientWidth),
            (Mt = Dt.panY + (e.clientY - Dt.y) / S.clientWidth))
          : (St = {
              yaw: Dt.yaw + (e.clientX - Dt.x) * 0.008,
              pitch: Math.max(
                -0.6,
                Math.min(0.6, Dt.pitch + (e.clientY - Dt.y) * 0.004),
              ),
            }),
        (Ot ||= requestAnimationFrame(() => {
          ((Ot = 0), Lt());
        })));
    }),
    S.addEventListener(`dblclick`, () => {
      (Nt(), Lt());
    }),
    S.addEventListener(`pointerup`, () => {
      Dt = null;
    }),
    S.addEventListener(`lostpointercapture`, () => {
      Dt = null;
    }));
  function Rt(e) {
    if (
      !yt ||
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      e.repeat ||
      e.target?.closest?.(`input,textarea,select,[contenteditable]`)
    )
      return;
    let t = e.key.toLowerCase();
    if ((t === `q` || t === `e`) && ht)
      (e.preventDefault(), ht(t === `q` ? -1 : 1));
    else if (
      (t === `1` || t === `2` || t === `3`) &&
      +t <= n().weapons.length
    ) {
      let n = t - 1;
      (n !== U || H !== `weapons`) &&
        (e.preventDefault(),
        (U = n),
        (H = `weapons`),
        (gt = null),
        (G = null),
        Nt(),
        K());
    } else t === `c` && (e.preventDefault(), k());
  }
  window.addEventListener(`keydown`, Rt);
  function zt(e) {
    if (e.pointerType === `touch`) return;
    let t =
      e.type === `pointerleave`
        ? null
        : (e.target.closest?.(`[data-hover]`)?.dataset.hover ?? null);
    if (e.currentTarget === M) {
      let e = t != null && /^\d+$/.test(t) ? +t : t;
      e !== _t && ((_t = e), K(!0));
    } else t !== G && ((G = t), (Ct = !1), K(!0));
  }
  for (let e of [M, ue])
    (e.addEventListener(`pointerover`, zt),
      e.addEventListener(`pointerleave`, zt));
  function Vt(e) {
    let t = Ke(e, Ae()),
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
    let i = Math.max(2, Math.round(((200 * Fe) / 0.16) * t.scale)),
      a = document.createElement(`canvas`);
    a.width = a.height = i;
    let o = a.getContext(`2d`);
    o && (Ie(o, i, t), n.drawImage(a, 100 - i / 2, 100 - i / 2));
  }
  function Ht(e, t) {
    let n = Ae(),
      r = ue.appendChild(J(`div`, `reticle-bar`)),
      i = r.appendChild(J(`div`, `reticle-colours`));
    i.append(J(`span`, `reticle-heading`, `Colour`));
    for (let [e, t] of Object.entries(Pe)) {
      let r = n.color === e,
        a = qr(`reticle-swatch${r ? ` selected` : ``}`, ``, () => {
          (r ||
            (Ge({ color: e }),
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
      (o.min = String(Le.min)),
      (o.max = String(Le.max)),
      (o.step = String(Le.step)),
      (o.value = String(n.size)),
      o.setAttribute(`aria-label`, `Reticle size`),
      (o.dataset.focusKey = `reticle-size`));
    let s = a.appendChild(
      J(`strong`, `reticle-size-value`, `${Math.round(n.size * 100)}%`),
    );
    ((o.oninput = () => {
      (Ge({ size: +o.value }),
        (s.textContent = `${Math.round(o.value * 100)}%`),
        Vt(e),
        K(!0));
    }),
      (o.onchange = () => {
        ((I.textContent = `Reticle size saved · applies to every sight`),
          K(!0));
      }),
      ue.append(J(`span`, `reticle-heading`, `Shape`)));
    for (let [r, i] of Object.entries(Ve)) {
      let a = n.shape === r,
        o = a || Me(r, t) ? null : `Level ${i.level}`,
        s = qr(
          `reticle-option${a ? ` selected` : ``}${o ? ` locked` : ``}`,
          ``,
          () => {
            if (o) {
              I.textContent = `${i.name} is locked · ${o}`;
              return;
            }
            (a ||
              (Ge({ shape: r }),
              (I.textContent = `Reticle saved · applies to every sight`)),
              K());
          },
        ),
        c = s.appendChild(J(`canvas`, `reticle-icon`));
      c.width = c.height = 40;
      let l = c.getContext(`2d`);
      (l &&
        Ie(l, 40, {
          ...Ke(e, { ...n, shape: r }),
          ...(e === `scope` && n.color === "default"
            ? { css: Pe.white.css }
            : {}),
          scale: 1.35,
        }),
        s.append(J(`strong`, ``, i.name)),
        o && s.append(J(`small`, ``, o)),
        (s.title = i.name),
        s.setAttribute(`aria-pressed`, String(a)),
        (s.dataset.focusKey = `reticle-shape-` + r),
        ue.append(s));
    }
  }
  function Ut(t) {
    bt ||
      ((I.textContent = `Preview unavailable. Equipment choices still work.`),
      e.warn(`Equipment preview`, String(t)));
  }
  function Wt(e, t) {
    let n = qn(e),
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
    Oe.replaceChildren(u, d, m, _);
  }
  function K(e = !1) {
    if (!yt || bt) return;
    let t = document.activeElement?.dataset.focusKey,
      s = ++xt,
      c = n(),
      f = pt.find((e) => e.id === c.classId),
      p = r?.() ?? null,
      _ = (e) => We(p, e);
    U >= c.weapons.length && (U = 0);
    let x = c.weapons[U],
      C = c.attachments.weapons[x] ?? {
        optic: `standard`,
        muzzle: `standard`,
        grip: `standard`,
        mag: `standard`,
      },
      E = p?.weapons?.[x]?.camos ?? null,
      D = (e, t) =>
        !p || He(p, e, W, t)
          ? null
          : (p.weapons[e].attachments.find((e) => e.slot === W && e.id === t) ??
            null);
    W === `camo` && !E && ((W = `optic`), (G = null));
    let j = ke(x, c.attachments)?.optic?.type,
      P = ze.includes(j);
    (W === `reticle` && !P && ((W = `optic`), (G = null)),
      p && !Me(Ae().shape, p) && Ge({ shape: `default` }),
      W !== `camo` &&
        W !== `reticle` &&
        De(x, W).length < 2 &&
        ((W = Object.keys(Vr).find((e) => De(x, e).length > 1) ?? `optic`),
        (G = null)),
      v.replaceChildren());
    for (let e of pt) {
      let t = qr(e.id === f.id ? `selected` : ``, e.name, () => {
        (a(e.id), (H = `weapons`), (gt = null), (G = null), Nt(), K());
      });
      ((t.dataset.focusKey = `class-` + e.id),
        t.setAttribute(`aria-pressed`, String(e.id === f.id)),
        (t.title = e.role),
        v.append(t));
    }
    ((I.textContent = `${f.name} loadout · saved on this device`),
      m.setAttribute(`aria-label`, `${f.name} soldier`),
      (h.textContent = f.name),
      g.replaceChildren(J(`strong`, ``, Kr[f.id]), J(`span`, ``, f.role)));
    let te = $e(ke(c.weapons[0], c.attachments)),
      ne =
        f.id + i() + JSON.stringify(te.attachments) + te.id + (te.camo ?? ``);
    (ne !== vt && ((vt = ne), Ue.soldier(m, f.id, i(), te).catch(Ut)),
      y.replaceChildren(),
      c.weapons.forEach((e, t) => {
        let n = qr(t === U ? `selected` : ``, ``, () => {
          ((U = t), (H = `weapons`), (gt = null), (G = null), Nt(), K());
        });
        (n.append(Jr(String(t + 1)), J(`strong`, ``, ut[t])),
          (n.title = ye[e].name),
          (n.dataset.focusKey = `weapon-` + t),
          n.setAttribute(`aria-pressed`, String(t === U)),
          y.append(n));
      }),
      U >= c.weapons.length && (U = 0));
    let re = f.weapons[U].filter(
      (e) => !c.weapons.some((t, n) => n !== U && t === e),
    );
    (H !== `weapons` || !re.includes(_t) || _t === x) && (_t = null);
    let ie = _t ?? x;
    w.textContent = ye[ie].name;
    {
      let e = Gr[ye[ie].class] ?? ye[ie].class;
      T.textContent = [e, e === f.name.toUpperCase() ? null : f.name, ut[U]]
        .filter(Boolean)
        .join(` · `);
    }
    let ae = [];
    (e ||
      M.replaceChildren(
        J(`span`, `weapon-picker-label`, `${ut[U].toUpperCase()} OPTIONS`),
      ),
      M.setAttribute(`aria-label`, `Choose ${ut[U].toLowerCase()} weapon`));
    let oe = (e) => Wr[ye[e].class] ?? `Other`,
      L = [...new Set(re.map(oe))];
    L.includes(gt) || (gt = oe(x));
    let se = re.length > 6 && L.length > 1;
    if ((b.replaceChildren(), (ht = null), se)) {
      let e = H === `weapons`;
      e && b.append(Jr(`Q`));
      for (let t of L) {
        let n = e && t === gt,
          r = qr(n ? `selected` : ``, t, () => {
            (H !== `weapons` && ((H = `weapons`), (G = null), Nt()),
              (gt = t),
              K());
          });
        (r.setAttribute(`role`, `tab`),
          r.setAttribute(`aria-selected`, String(n)),
          (r.dataset.focusKey = `type-` + t),
          b.append(r));
      }
      e &&
        (b.append(Jr(`E`)),
        (ht = (e) => {
          ((gt = L[(L.indexOf(gt) + e + L.length) % L.length]), K());
        }));
    }
    let le = se ? re.filter((e) => oe(e) === gt) : re,
      he = le.filter((e) => !_(e)),
      ge = Math.min(
        ...he.map((e) => p?.arsenal?.find((t) => t.id === e)?.level ?? 1 / 0),
      ),
      B =
        he.find(
          (e) => (p?.arsenal?.find((t) => t.id === e)?.level ?? 1 / 0) === ge,
        ) ?? he[0],
      xe = he.length - (B == null ? 0 : 1),
      Ce = le.filter((e) => _(e) || e === B),
      Te = new Set(Ce.map((e) => ye[e].class)).size > 1,
      Fe = (e, t) => {
        let n = re.map((t) => e(ye[t])),
          r = Math.min(...n),
          i = Math.max(...n);
        return (n) => {
          let a = i > r ? (e(n) - r) / (i - r) : 1;
          return t ? 1 - a : a;
        };
      },
      Ie = Fe((e) => e.ads ?? 0, !0),
      Le = Fe((e) => e.recoil?.[1] ?? 0, !0),
      Ye = [
        [`DMG`, Fe((e) => e.damage)],
        [`RATE`, Fe(Fn)],
        [`HANDLING`, (e) => (Ie(e) + Le(e)) / 2],
      ];
    if (!e)
      for (let e of Ce) {
        let t = ye[e],
          n = !_(e),
          r = J(`canvas`, `weapon-thumb`),
          i = qr(
            `${e === x ? `selected ` : ``}${n ? `locked` : ``}`,
            ``,
            () => {
              n ||
                (e !== x && ((c.weapons[U] = e), o()),
                (G = null),
                (_t = null),
                Nt(),
                (H = `weapons`),
                k());
            },
          );
        if (
          (i.append(r),
          ae.push([r, $e(ke(e, c.attachments))]),
          i.append(J(`strong`, ``, t.name)),
          i.classList.add(`weapon-row`),
          n)
        ) {
          let t = p?.arsenal?.find((t) => t.id === e);
          i.append(J(`small`, ``, `LOCKED`));
          let n = Xr(
            t?.requirement ?? `Rank up to unlock`,
            t?.have ?? 0,
            t?.need ?? 1,
            !1,
            ` XP`,
          );
          (n.classList.add(`row-goal`), i.append(n));
        } else {
          Te && i.append(J(`small`, ``, Gr[t.class] ?? t.class));
          let e = i.appendChild(J(`div`, `card-stats`));
          for (let [n, r] of Ye) {
            let i = J(`i`, ``);
            i.style.width = `${Math.round(15 + 85 * r(t))}%`;
            let a = J(`span`, `card-stat`);
            ((a.title = n), a.append(J(`small`, ``, n)));
            let o = J(`b`, ``);
            (o.append(i), a.append(o), e.append(a));
          }
        }
        (i.setAttribute(`role`, `radio`),
          i.setAttribute(`aria-checked`, String(e === x)),
          i.setAttribute(`aria-disabled`, String(n)),
          (i.dataset.focusKey = `pick-` + e),
          e !== x && (i.dataset.hover = e),
          M.append(i));
      }
    (xe > 0 &&
      !e &&
      M.append(
        J(`p`, `weapon-more`, `${xe} more unlock as you rank up · see Career`),
      ),
      A.replaceChildren());
    for (let e of Object.keys(Vr)) {
      if (De(x, e).length < 2 && (e === `mag` || ye[x].class === `sniper`))
        continue;
      let t = qr(
          `slot-${e}${H === `attach` && W === e ? ` selected` : ``}`,
          ``,
          () => {
            ((H = `attach`), (W = e), (G = null), Pt(), K());
          },
        ),
        n = e === `grip` && ye[x].class === `sniper` ? `Support` : Hr[e];
      (t.append(J(`span`, ``, n), J(`strong`, ``, Vr[e][C[e]].name)),
        t.setAttribute(`aria-label`, `Customize ${Hr[e].toLowerCase()}`),
        t.setAttribute(`aria-pressed`, String(H === `attach` && W === e)),
        A.append(t),
        (t.dataset.focusKey = `slot-` + e),
        G &&
          W === e &&
          ((t.querySelector(`strong`).textContent = Vr[e][G].name),
          t.classList.add(`previewing`)),
        De(x, e).length < 2 &&
          ((t.disabled = !0), (t.title = `Fixed on this weapon`)));
    }
    if (E) {
      let e = qr(
          `slot-camo${H === `attach` && W === `camo` ? ` selected` : ``}`,
          ``,
          () => {
            ((H = `attach`), (W = `camo`), (G = null), Pt(), K());
          },
        ),
        t = W === `camo` && G ? G : et(x);
      (e.append(
        J(`span`, ``, `Camo`),
        J(
          `strong`,
          ``,
          `${Re[t]?.name ?? `Factory finish`} · ${E.filter((e) => e.done).length}/${E.length}`,
        ),
      ),
        e.setAttribute(`aria-label`, `Customize camo`),
        e.setAttribute(`aria-pressed`, String(H === `attach` && W === `camo`)),
        (e.dataset.focusKey = `slot-camo`),
        W === `camo` && G && e.classList.add(`previewing`),
        A.append(e));
    }
    if (P) {
      let e = Ae(),
        t = qr(
          `slot-reticle${H === `attach` && W === `reticle` ? ` selected` : ``}`,
          ``,
          () => {
            ((H = `attach`), (W = `reticle`), (G = null), Pt(), K());
          },
        );
      (t.append(
        J(`span`, ``, `Reticle`),
        J(
          `strong`,
          ``,
          e.shape === "default" && e.color === "default"
            ? `Sight default`
            : `${Ve[Ke(j, e).shape].name} · ${Pe[e.color].name}`,
        ),
      ),
        t.setAttribute(`aria-label`, `Customize reticle`),
        t.setAttribute(
          `aria-pressed`,
          String(H === `attach` && W === `reticle`),
        ),
        (t.dataset.focusKey = `slot-reticle`),
        A.append(t));
    }
    if (((ee.hidden = H === `attach`), H !== `attach`))
      ((N.textContent = `Customize ${ye[x].name}`), ee.append(A));
    else {
      let e = [...A.children]
        .filter((e) => !e.disabled)
        .map((e) => e.dataset.focusKey.slice(5));
      (b.append(Jr(`Q`), A, Jr(`E`)),
        (ht = (t) => {
          let n = e[(e.indexOf(W) + t + e.length) % e.length];
          n && ((W = n), (G = null), Pt(), K());
        }));
    }
    let Xe = W === `camo` || W === `reticle` ? W : Hr[W].toLowerCase();
    d.textContent = u.title =
      H === `attach` ? `Back to weapons` : `Back to deploy`;
    let it = !!G || _t != null;
    ((O.textContent = it ? `PREVIEW` : `EQUIPPED`),
      O.classList.toggle(`preview`, it),
      F.replaceChildren(),
      c.gadgets.forEach((e, t) => {
        let n = J(`div`, `gadget-group`);
        n.append(J(`small`, ``, t === 0 ? `GRENADE` : `FIELD GADGET`));
        for (let r of mt(f.id)[t]) {
          let i = qr(r === e ? `selected` : ``, dt[r], () => {
            r !== c.gadgets[t] && ((c.gadgets[t] = r), o(), K());
          });
          (i.setAttribute(`aria-pressed`, String(r === e)),
            (i.dataset.focusKey = `gadget-${t}-${r}`),
            n.append(i));
        }
        F.append(n);
      }),
      (ue.dataset.slot = W),
      (be.hidden = H !== `attach` || W !== `reticle`),
      (M.hidden = H !== `weapons`),
      (ue.hidden = H === `weapons`),
      (je.hidden = H === `weapons`),
      (R.hidden = z.hidden = !1),
      (l.dataset.mode = H),
      (ce.textContent = H === `weapons` ? `Weapon stats` : `Choose ${Xe}`));
    let st = et(x) ?? `factory`;
    if (
      (e ||
        ue.replaceChildren(
          J(`span`, `weapon-picker-label`, `${Xe.toUpperCase()} OPTIONS`),
        ),
      !e && W === `camo` && qe.includes(x))
    ) {
      let e = Ze(x) ?? `factory`,
        t = {
          factory: `Clean from the armoury`,
          used: `Rubbed edges, dust, hand polish`,
          worn: `Chipped, scratched, grimy`,
        };
      for (let n of Je) {
        let r = qr(
          `camo-option wear-option${e === n.id ? ` selected` : ``}`,
          ``,
          () => {
            ((Ct = !1),
              (G = null),
              n.id !== e &&
                (tt(x, n.id),
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
          ue.append(r));
      }
      ue.append(J(`span`, `weapon-picker-label`, `CAMO`));
    }
    if (!e && W === `camo`)
      for (let e of [
        {
          id: `factory`,
          name: `Factory finish`,
          done: !0,
          pattern: `solid`,
          colors: [ye[x].color],
        },
        ...E,
      ]) {
        let t = st === e.id,
          n = qr(
            `camo-option${t ? ` selected` : ``}${e.done ? `` : ` locked`}`,
            ``,
            () => {
              if (((Ct = !1), !e.done)) {
                ((G = e.id === st ? null : e.id),
                  K(),
                  (I.textContent = `${e.name} is locked · ${e.requirement} · ${Math.floor(e.have).toLocaleString()} / ${e.need.toLocaleString()}`));
                return;
              }
              ((G = null),
                e.id !== st &&
                  (Qe(x, e.id === `factory` ? null : e.id),
                  (I.textContent = `${e.name} equipped · saved`)),
                K());
            },
          ),
          r = n.appendChild(J(`i`, `camo-swatch`));
        r.style.background = nt(e);
        let i = n.appendChild(J(`span`, `option-copy`));
        (i.append(J(`strong`, ``, e.name)),
          e.id === `factory`
            ? i.append(J(`span`, ``, `Original finish`))
            : i.append(Xr(e.requirement, e.have, e.need, e.done)),
          (n.dataset.focusKey = `camo-` + e.id),
          (n.dataset.camo = e.id),
          e.id !== st && (n.dataset.hover = e.id),
          n.setAttribute(`aria-pressed`, String(t)),
          st === e.id
            ? n.append(J(`small`, ``, `Equipped`))
            : e.done || n.append(J(`small`, ``, `Locked`)),
          ue.append(n));
      }
    else !e && W === `reticle` && Ht(j, p);
    if (W === `reticle` && H === `attach`) Vt(j);
    else if (!e)
      for (let e of De(x, W)) {
        let t = C[W] === e,
          n = D(x, e),
          r = qr(`${t ? `selected` : ``}${n ? ` locked` : ``}`, ``, () => {
            if (((Ct = !1), n)) {
              ((G = e),
                K(),
                (I.textContent = `${Vr[W][e].name} is locked · ${n.requirement} · ${n.have} / ${n.need}`));
              return;
            }
            ((G = null),
              e !== C[W] &&
                (((c.attachments.weapons[x] ??= { ...C })[W] = e),
                W === `optic` && delete c.attachments.weapons[x].rail,
                o(),
                (I.textContent = `${Vr[W][e].name} equipped · saved`)),
              kt === 1 && Pt(),
              K());
          }),
          i = J(`span`, `option-copy`);
        (i.append(J(`strong`, ``, Vr[W][e].name)),
          i.append(
            n
              ? Xr(n.requirement, n.have, n.need, !1)
              : J(
                  `span`,
                  ``,
                  W === `optic` && e === `standard` && ye[x].optic?.fixed
                    ? `Fixed ${ye[x].optic.label} scope`
                    : Ur[W][e],
                ),
          ),
          r.append(i),
          (r.dataset.focusKey = `attachment-` + e),
          r.setAttribute(`aria-pressed`, String(t)),
          (r.dataset.attachment = e),
          e !== C[W] && (r.dataset.hover = e),
          C[W] === e
            ? r.append(J(`small`, ``, `Equipped`))
            : n && r.append(J(`small`, ``, `Locked`)),
          ue.append(r));
      }
    let ct = structuredClone(c.attachments);
    G && W !== `camo` && (ct.weapons[x][W] = G);
    let St = _t == null ? null : $e(ke(_t, c.attachments)),
      Et = $e(ke(x, c.attachments)),
      Dt =
        St ??
        (W === `camo` && G
          ? $e(ke(x, ct), G === `factory` ? null : G)
          : $e(ke(x, ct))),
      Ot = !!(G || St),
      At = W === `camo` ? (E.find((e) => e.id === (G ?? st)) ?? null) : null;
    {
      let e =
        H === `attach` && W === `optic` && !G
          ? rt(ke(x, c.attachments)).optic
          : null;
      if (
        ((pe.style.display = e?.kit ? `flex` : `none`),
        e?.kit && document.activeElement !== V)
      ) {
        let t = x + `:` + e.kit,
          n = () => {
            let t =
              Math.round(
                Math.max(+V.min, Math.min(+V.max, (e.rail ?? 0) * 100)) * 10,
              ) / 10;
            ((V.value = String(t)), (me.textContent = ve(t, C.rail != null)));
          };
        (_e !== t &&
          ((_e = t),
          Ue.railSpan(ke(x, c.attachments))
            .then((e) => {
              _e === t &&
                e &&
                ((V.min = String(Math.floor(e[0] * 200) / 2)),
                (V.max = String(Math.ceil(e[1] * 200) / 2)),
                n());
            })
            .catch(() => {})),
          n());
      }
    }
    if (
      ((de.hidden = H !== `weapons`),
      H === `weapons` && ae.push([de, $e(ke(ie, c.attachments))]),
      H === `weapons`)
    ) {
      let e = ye[ie];
      ((R.textContent = e.name),
        (z.textContent = e.role
          ? `${e.role.replace(/[.!?]+$/, ``)}.`
          : `${Gr[e.class] ?? e.class} for this loadout.`));
    } else if (W === `reticle`) {
      let e = Ae(),
        t = Ke(j, e);
      ((R.textContent = `${Ve[t.shape].name} · ${Pe[e.color].name} · ${Math.round(e.size * 100)}%`),
        (z.textContent = `Your reticle for every sight: red dots, holographics, ACOGs and scopes. Cosmetic: saved on this device, changes no weapon stats. Sight default keeps the sight’s own reticle.`));
    } else
      R.textContent =
        W === `camo` ? (At?.name ?? `Factory finish`) : Vr[W][G ?? C[W]].name;
    let jt = W !== `camo` && W !== `reticle` && G ? D(x, G) : null;
    H === `weapons` ||
      (jt
        ? (z.textContent = `Locked · ${jt.requirement} (${jt.have} / ${jt.need}). ${Vr[W][G].description}`)
        : W !== `reticle` &&
          (z.textContent =
            W === `camo`
              ? At
                ? `${At.requirement}. ${At.done ? `Unlocked.` : `Progress ${Math.floor(At.have).toLocaleString()} / ${At.need.toLocaleString()}.`} Camos are cosmetic and change no weapon stats.`
                : `The original finish. Earn camos with kills and headshots on this weapon.`
              : Vr[W][G ?? C[W]].description));
    let Mt = St ?? Dt,
      Ft = !!(G || St),
      Rt = p?.arsenal?.find((e) => e.id === Mt.id),
      zt = Rt ? Yn(Rt, { admin: p?.admin }) : null,
      Bt = (e, t) => {
        let n = e(Et),
          r = e(Mt),
          i = t(r);
        return Ft && n !== r ? `${t(n)} → ${i}` : i;
      };
    fe.replaceChildren();
    for (let [e, t] of [
      ...(Mt.role ? [[`Role`, Mt.role]] : []),
      [
        `Access`,
        zt?.note ??
          (Mt.unlockLevel > 1
            ? `Unlocks at level ${Mt.unlockLevel}`
            : `Available from level 1`),
      ],
      [
        `Aim`,
        Bt(
          (e) => Math.round((e.ads ?? 0) * 1e3),
          (e) => `${e} ms`,
        ),
      ],
      [
        `Reload`,
        Bt(
          (e) => e.reload ?? 0,
          (e) => `${e.toFixed(2)} s`,
        ),
      ],
      [
        `Ammunition`,
        Bt(
          (e) => `${e.mag}/${e.reserve}`,
          (e) => {
            let [t, n] = e.split(`/`);
            return `${t} magazine · ${n} reserve`;
          },
        ),
      ],
    ])
      fe.appendChild(document.createElement(`div`)).append(
        J(`dt`, ``, e),
        J(`dd`, ``, t),
      );
    let Gt = $e(ke(x, Se(null))),
      Kt = Ft ? Et : Gt,
      qt = Ft ? Dt : Et;
    ((we.textContent = St
      ? `${St.name.toUpperCase()} vs EQUIPPED`
      : W === `camo` || W === `reticle`
        ? ``
        : G
          ? `PREVIEW vs EQUIPPED`
          : `EQUIPPED vs FACTORY`),
      Ee.replaceChildren());
    let Jt = !1;
    for (let e of Wn(Kt, qt)) {
      if (e.from === 0 && e.to === 0) continue;
      if (e.detail && !Jt) {
        Jt = !0;
        let e = qr(`stat-details-toggle`, `${ft ? `▾` : `▸`} Details`, () => {
          ((ft = !ft), K(!0));
        });
        (e.setAttribute(`aria-expanded`, String(ft)), Ee.append(e));
      }
      if (e.detail && !ft) continue;
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
        a = Kn(e),
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
            ? `${e.change > 0 ? `+` : `−`}${Math.abs(e.change).toFixed(e.precision)}${e.unit} (${e.percent > 0 ? `+` : ``}${e.percent.toFixed(0)}%) · ${e.better ? `better` : `worse`}`
            : Ot
              ? `No change`
              : `\xA0`,
        ),
      );
      ((l.title = `Compared with ${e.from.toFixed(e.precision)}${e.unit}`),
        Ee.append(t));
    }
    if (Dt.class === `smg` && !Jt) {
      Jt = !0;
      let e = qr(`stat-details-toggle`, `${ft ? `▾` : `▸`} Details`, () => {
        ((ft = !ft), K(!0));
      });
      (e.setAttribute(`aria-expanded`, String(ft)), Ee.append(e));
    }
    ((Oe.hidden = Dt.class !== `smg` || !ft),
      Oe.hidden ? Oe.replaceChildren() : Wt(Dt, Ft));
    let Yt =
      (W === `camo` && !!G && !!At && !At.done) ||
      (W !== `camo` && W !== `reticle` && !!G && !!D(x, G));
    ((Ne.textContent = Yt
      ? `Preview only · not unlocked yet`
      : `Click an option to equip it · saved for deployment`),
      (Be.hidden = !0),
      (Be.disabled = !G || Yt),
      (Be.textContent = Yt
        ? `Locked`
        : G
          ? `Equip ${W === `camo` ? (At?.name ?? `Factory finish`) : Vr[W][G].name}`
          : `Equipped`),
      S.setAttribute(
        `aria-label`,
        `${Dt.name} with ${Object.keys(Vr)
          .map((e) => Vr[e][(ct.weapons[x] ?? C)[e]].name)
          .join(`, `)}`,
      ),
      (Tt = Et),
      (wt = Dt),
      G || (Ct = !1),
      It(),
      Promise.resolve().then(() => {
        if (!(s !== xt || bt)) {
          (Lt(), at());
          for (let [e, t] of ae) lt(e, t);
          ot?.prewarm?.([Et, ...ae.map(([, e]) => e)]);
        }
      }),
      t &&
        l
          .querySelector(`[data-focus-key="${CSS.escape(t)}"]`)
          ?.focus({ preventScroll: !0 }));
  }
  let Gt = new ResizeObserver(() => {
    yt && ((vt = ``), K());
  });
  return (
    Gt.observe(x),
    Gt.observe(p),
    {
      root: l,
      preview: Ue,
      thumb: lt,
      show(e) {
        ((yt = e), (l.hidden = !e), ot?.show(e), e && ((G = _t = null), K()));
      },
      refresh() {
        ((G = _t = null), K());
      },
      dispose() {
        ((bt = !0),
          window.removeEventListener(`keydown`, Rt),
          cancelAnimationFrame(Ot),
          clearTimeout(Ye),
          Gt.disconnect(),
          Ue.dispose(),
          ot?.dispose());
      },
    }
  );
}
