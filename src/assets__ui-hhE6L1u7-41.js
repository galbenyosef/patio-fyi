// assets__ui-hhE6L1u7 41 — dispose
// Lines 18078-18357 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function hs(e) {
  if (!document.getElementById(`ach-style`)) {
    let e = document.createElement(`style`);
    ((e.id = `ach-style`), (e.textContent = ms), document.head.appendChild(e));
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
        s.querySelector(`.ach-swatch`).style.background = Xe(e.camo);
      } catch {
        s.querySelector(`.ach-swatch`).style.background = `#555`;
      }
      ((s.querySelector(`strong`).textContent = e.camo.name),
        (s.querySelector(`.ach-desc`).textContent =
          e.weapon ?? `Every weapon`));
    } else {
      let [t, n] = fs[e.tier] ?? fs[2];
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
      }, ps));
  }
  function s(e, t) {
    let r = en[e];
    r && $t.has(e) && (n.push({ ...r, count: t | 0 }), o());
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
var gs = null,
  _s = null,
  vs = null,
  ys = null,
  bs = null,
  xs = null,
  Ss = null,
  Cs = null,
  ws = null,
  Ts = null,
  Es = null,
  Ds = null,
  Os = null,
  ks = null,
  As = null,
  js = null,
  Ms = null,
  Ns = null,
  Ps = null;
function Fs() {
  (Ms && Ms.isConnected) ||
    ((Ms = document.getElementById(xn)),
    Ms ||
      ((Ms = document.createElement(`style`)),
      (Ms.id = xn),
      (Ms.textContent = Sn),
      document.head.appendChild(Ms)));
}
var Is = {
  name: `ui`,
  deps: [],
  async init(e) {
    (Fs(),
      (As = La(e)),
      (xs = ns(e, As)),
      (bs = ds(e)),
      (Ns = Ka(e)),
      (Cs = zo(e)),
      (Ss = Jo(e, As)),
      (Ps = an(e, As)),
      (Ds = ho(e)),
      (_s = So(e, As)),
      (vs = Do(e, As, { tips: _s })),
      (Os = Ot(e)),
      (ws = Oo(e)),
      (Ts = ko(e)),
      (Es = Ao(e)),
      (gs = fn(e, As.root)),
      (ys = hs(e)));
    let t = () => {
      let t = e.modules?.get?.(`terrain`);
      return t && typeof t.getHeight == `function`
        ? (As.setTerrain({
            getHeight: t.getHeight,
            getMaterialAt: t.getMaterialAt,
            bounds: t.bounds ?? e.world?.map?.bounds,
          }),
          !0)
        : !1;
    };
    if (!t()) {
      let e = 0;
      ks = setInterval(() => {
        (t() || ++e > 20) && (clearInterval(ks), (ks = null));
      }, 500);
    }
  },
  tick(e, t) {
    js?.tick(t);
  },
  lateUpdate(e, t) {
    (e.camera?.updateMatrixWorld?.(),
      As?.update(t),
      xs?.update(t),
      bs?.update(t),
      Ns?.update(),
      Ps?.update(),
      Cs?.update(),
      Ds?.update(t),
      vs?.update(),
      _s?.update(t),
      Os?.update(t),
      Ss?.update(),
      Es?.update(t),
      gs?.update(t));
  },
  dispose() {
    (vs?.dispose(),
      (vs = null),
      _s?.dispose(),
      (_s = null),
      ys?.dispose(),
      (ys = null),
      Os?.dispose(),
      (Os = null),
      gs?.dispose(),
      (gs = null),
      bs?.dispose(),
      (bs = null),
      xs?.dispose(),
      (xs = null),
      clearInterval(ks),
      (ks = null),
      Ss?.dispose(),
      (Ss = null),
      Cs?.dispose(),
      (Cs = null),
      ws?.dispose(),
      (ws = null),
      Ts?.dispose(),
      (Ts = null),
      Es?.dispose(),
      (Es = null),
      Ds?.dispose(),
      (Ds = null),
      Ps?.dispose(),
      (Ps = null),
      Ns?.dispose(),
      (Ns = null),
      js?.dispose(),
      (js = null),
      As?.dispose(),
      (As = null));
  },
  async showcase(e, t) {
    let { createShowcase: n } = await oe(
      async () => {
        let { createShowcase: e } = await import(`./showcase-CzK4P-G7.js`);
        return { createShowcase: e };
      },
      __vite__mapDeps([0, 1]),
    );
    js = n(e, As, t || {});
  },
  api: {
    show(e) {
      return As ? As.show(e) : !1;
    },
    hide(e) {
      return As ? As.hide(e) : !1;
    },
    toggle(e) {
      return As ? As.toggle(e) : !1;
    },
    isVisible(e) {
      return As ? As.isVisible(e) : !1;
    },
    message(e, t, n) {
      As?.message(e, t, n);
    },
    setLocalEntity(e) {
      As?.setLocalEntity(e);
    },
    hitmarker(e = !1, t = !1) {
      As?.hitmarker(e, t);
    },
    setSpread(e) {
      As?.setSpread(e);
    },
    setAmmo(e) {
      As?.setAmmo(e);
    },
    setMinimapRange(e) {
      As?.setMinimapRange(e);
    },
    setTerrainSampler(e) {
      As?.setTerrain(e);
    },
    getRoot() {
      return As?.root ?? null;
    },
    acceptProgress(e, t) {
      As?.progression.accept(e, t);
    },
    getProgress() {
      return As?.progression.get() ?? null;
    },
    showAchievement(e, t = 1) {
      ys?.show(e, t);
    },
    widgets: [
      `crosshair`,
      `health`,
      `ammo`,
      `compass`,
      `match`,
      `minimap`,
      `markers`,
      `killfeed`,
      `messages`,
      `scoreboard`,
      `spawn`,
      `netstats`,
      `modules`,
    ],
  },
};
