// assets__front-desk-DGPHybWS 06 — math
// Lines 1258-1948 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
function Ee({
  host: n = document.body,
  form: r = document.querySelector(`form`),
} = {}) {
  let i = y() || matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    a = document.createElement(`canvas`);
  ((a.id = `desk`), a.setAttribute(`aria-hidden`, `true`));
  let s = a.getContext(`webgl2`, {
    antialias: !0,
    alpha: !1,
    depth: !0,
    stencil: !1,
    powerPreference: `high-performance`,
    failIfMajorPerformanceCaveat: !0,
  });
  if (!s || te(se(s), navigator.userAgent))
    return (s?.getExtension(`WEBGL_lose_context`)?.loseContext(), Te(), null);
  let f = document.createElement(`div`);
  f.id = `desk-shade`;
  let p = document.createElement(`div`);
  p.id = `desk-grade`;
  let g = document.createElement(`div`);
  ((g.id = `desk-fade`), n.prepend(a, p, f), n.append(g));
  let v = r?.querySelector(`[name=name]`),
    re = r?.querySelector(`[name=code]`),
    ie = document.getElementById(`code-field`),
    S,
    C,
    w,
    E,
    D = {},
    O,
    k,
    A = null,
    N,
    I,
    R = 0,
    B = 0,
    V = 0,
    H = !1,
    W = !1,
    G = !1,
    K = he(),
    me = new Map(),
    q = { pos: new x(), look: new x(), focus: 0, wantFocus: 0 },
    Se = { pos: new x(0.42, 1.7, 4.7), look: new x(0.3, 1.86, -1.4) },
    J = { pos: new x(0.02, 2.3, 1.75), look: new x(-0.02, P, -0.02) },
    Ee = { pos: new x(0.35, 2.02, 2.45), look: new x(0.35, 2.3, M.z0) },
    De = { pos: new x(L.x, L.y, M.z0 + 0.62), look: new x(L.x, L.y, M.z0) },
    Y = {
      coin: 0,
      coinWant: 0,
      coinFrom: new x(),
      join: -1,
      refuse: -1,
      stamped: !1,
      keyed: !1,
      resolve: null,
      full: !1,
      frame: null,
      release: -1,
      stage: ``,
      stageAt: 0,
      watchAt: -9,
      subscribed: !1,
      team: -1,
      assignedAt: 0,
      outcome: null,
      mapW: 0,
      mapWant: 0,
      offW: 0,
    },
    Oe = () =>
      (
        document.querySelector(`meta[name=hotel]`)?.content || `The Patio`
      ).trim();
  async function ke(n) {
    ((S = new t({
      canvas: a,
      context: n,
      antialias: !0,
      powerPreference: `high-performance`,
    })),
      (S.debug.checkShaderErrors = !1),
      S.setPixelRatio(Math.min(devicePixelRatio, i ? 1.5 : 1.25)),
      (S.outputColorSpace = ee),
      (S.toneMapping = 4),
      (S.toneMappingExposure = 1.02),
      (S.shadowMap.enabled = !0),
      (S.shadowMap.type = 1),
      (C = new _()),
      (C.background = new u(526086)),
      (C.fog = new m(526086, 8, 16)),
      await j());
    let r = new c(S);
    ((C.environment = r.fromScene(new ae(), 0.04).texture),
      (C.environmentIntensity = 0.16),
      r.dispose(),
      await j(),
      (w = new e(40, 1, 0.05, 40)),
      (E = oe()),
      (D.stone = new d({
        map: T(512, 512, (e, t) => _e(e, t), [1, 1]),
        roughness: 0.32,
        metalness: 0.05,
      })),
      (D.plaster = new d({ map: T(512, 512, ge, [1, 1]), roughness: 0.95 })),
      (D.ceiling = new d({ color: 1184016, roughness: 0.95 })),
      (D.rug = new d({ map: T(512, 320, ve), roughness: 1 })),
      (D.coin = T(128, 128, (e, t) => fe(e, t))),
      (O = pe(Oe())),
      (D.register = O),
      await j(),
      C.add(new h(16766630, 1705990, 0.24)),
      ye(C, D),
      be(C, E),
      (I = xe(C, E, D)),
      await j(),
      (k = Ce(C)));
    let o = new ne(11452372, 4, 7, 2);
    (o.position.set(0.6, 1.5, M.z0 + 1.8), C.add(o));
    for (let e of [-1.7, 2.3]) {
      let t = new l(16769208, 9, 6, 0.5, 0.8, 2);
      (t.position.set(e, M.h - 0.05, 2.6),
        t.target.position.set(e, 0, 2.4),
        C.add(t, t.target));
    }
    let s = new l(16770756, 22, 7, 0.4, 0.8, 2);
    (s.position.set(0.2, 3.6, 1.3),
      s.target.position.set(0, P, -0.1),
      (s.castShadow = !0),
      s.shadow.mapSize.set(1024, 1024),
      (s.shadow.bias = -4e-4),
      (s.shadow.normalBias = 0.01),
      (s.shadow.camera.near = 1),
      (s.shadow.camera.far = 5),
      C.add(s, s.target),
      await j(),
      (N = we(C)));
    for (let e = 0; e < 5; e++) Be(1 / 30);
  }
  function Ae() {
    Y.join < 0 ||
      (Object.assign(Y, {
        join: -1,
        frame: null,
        release: -1,
        resolve: null,
        settle: null,
        quiet: !1,
        booted: !1,
        stamped: !1,
        keyed: !1,
        doorSound: !1,
        mapWant: 0,
        refuse: V,
      }),
      X?.remove(),
      (X = null),
      (I.key.visible = !1),
      O.reset(),
      k.setYou(-1),
      (g.style.opacity = `0`),
      document.body.classList.remove(`checkin`),
      Ze(),
      Q(2500));
  }
  let je = [`download`, `build`, `connect`, `graphics`, `ready`],
    Me = [
      `First load takes 20–60 seconds. The next maps load faster.`,
      `Pressing Deploy captures your mouse. Esc frees it again.`,
      `Press F1 in the field to see the controls. Hold Tab for the scores.`,
      `Stuttering? Settings → Graphics → Low. Auto picks it for most laptops.`,
      `Capture the lettered flags. Holding more flags drains the enemy’s tickets.`,
      `F enters vehicles. Engineers repair them with the class tool (3).`,
    ],
    X = null;
  function Ne() {
    let e = document.createElement(`div`);
    ((e.id = `desk-caption`), e.setAttribute(`role`, `status`));
    let t = document.createElement(`div`),
      n = document.createElement(`div`),
      r = document.createElement(`div`),
      i = document.createElement(`i`),
      a = document.createElement(`div`);
    ((t.className = `dc-head`),
      (n.className = `dc-stage`),
      (r.className = `dc-bar`),
      (a.className = `dc-tip`),
      r.append(i),
      e.append(t, n, r, a),
      document.body.append(e));
    let o = {
        download: `Fetching the game`,
        build: `Setting up ${(document.getElementById(`map-name`)?.textContent ?? ``).trim() || `the battlefield`}`,
        connect: `Taking your seat on the server`,
        graphics: `Preparing your view`,
        ready: `Your room is ready`,
        failed: `The game could not start`,
      },
      s = -99,
      c = Math.floor(Math.random() * Me.length);
    return (
      (t.textContent = `Preparing your room`),
      requestAnimationFrame(() => e.classList.add(`on`)),
      {
        stage(e) {
          n.textContent = o[e] ?? ``;
        },
        side(e) {
          e && (t.textContent = `Your side · ${e}`);
        },
        update() {
          let e = Math.max(0, je.indexOf(Y.stage)),
            t =
              Y.stage === `ready`
                ? 1
                : 0.85 * (1 - Math.exp(-(V - Y.stageAt) / 9));
          ((i.style.transform = `scaleX(${Math.min(1, (e + t) / (je.length - 1)).toFixed(3)})`),
            V - s > 7 &&
              ((s = V), (c = (c + 1) % Me.length), (a.textContent = Me[c])));
        },
        leave() {
          e.classList.remove(`on`);
        },
        remove() {
          e.remove();
        },
      }
    );
  }
  function Pe(e) {
    if (Y.team === e) return;
    ((Y.team = e), (Y.assignedAt = V), k.setYou(e));
    let t = k.snapshot?.teams?.[e]?.name ?? (e === 0 ? `Amber` : `Crimson`);
    (O.setSide(t), X?.side(t));
  }
  function Fe() {
    if (!Y.frame || V - Y.watchAt < 0.25) return;
    Y.watchAt = V;
    let e = null,
      t = null;
    try {
      ((e = Y.frame.contentWindow?.__game ?? null),
        (t = Y.frame.contentDocument));
    } catch {}
    let n = !1;
    try {
      n = !!e?.ctx?.modules?.get?.(`netcode`)?.isConnected?.();
    } catch {}
    if (e?.ctx?.events && !Y.subscribed) {
      Y.subscribed = !0;
      try {
        e.ctx.events.on(`net:connected`, (e) => {
          Number.isInteger(e?.team) && Pe(e.team);
        });
      } catch {}
    }
    let r = !!t && t.getElementById(`sl-join-reload`)?.hidden === !1,
      i =
        e?.bootFailed || r
          ? `failed`
          : e?.ready && n
            ? `ready`
            : n
              ? `graphics`
              : (e?.bootStage ?? `download`);
    (i !== Y.stage && ((Y.stage = i), (Y.stageAt = V), X?.stage(i)),
      Y.release < 0 &&
        (i === `ready` || i === `failed` || V - Y.join > 150) &&
        ((Y.outcome = i),
        (Y.release = Math.max(V, Y.join + (i === `ready` ? le : ce)))));
  }
  let Ie = new x(),
    Le = new x(),
    Z = new x(),
    Re = new x();
  function ze(e, t, n) {
    return n.set(F.x + (e - 0.5) * F.w, P + 0.06, F.z + (t - 0.5) * F.d);
  }
  function Be(e) {
    V += e;
    let t = (Y.typing = O.update(e));
    q.focus += (q.wantFocus - q.focus) * Math.min(1, e * 2.2);
    let n = de(q.focus);
    if (
      (q.pos.lerpVectors(Se.pos, J.pos, n),
      q.look.lerpVectors(Se.look, J.look, n),
      (Y.mapW +=
        (Y.mapWant - Y.mapW) * Math.min(1, e * (Y.mapWant ? 2.4 : 1.4))),
      (Y.offW += (+(Y.join >= 0) - Y.offW) * Math.min(1, e * 1.5)),
      Y.mapW > 0.001)
    ) {
      let e = de(Y.mapW);
      (q.pos.lerp(Ee.pos, e), q.look.lerp(Ee.look, e));
    }
    X?.update();
    let r = Re.copy(ue).setY(P + 0.1);
    (Ie.copy(r), Le.set(z.x, P + 0.03, z.z));
    let i = 0.05,
      a = 0,
      o = 0;
    if (
      (Z.copy(w ? w.position : Se.pos),
      (t || (q.wantFocus && O.st.name)) && Z.copy(ze(0.62, 0.4, Re.clone())),
      Y.refuse >= 0)
    ) {
      let e = V - Y.refuse;
      e < 1.4
        ? (a = Math.sin(Math.min(1, e / 1.4) * Math.PI))
        : (Y.refuse = -1);
    }
    let s = null,
      c = null,
      l = 0;
    if (((Y.quiet = !1), Y.join >= 0)) {
      Fe();
      let e = Y.release >= 0 && V >= Y.release,
        t = e ? ce + (V - Y.release) : Math.min(V - Y.join, ce),
        n = O.mineUV(),
        r = ze(n.u, n.v, new x()),
        a = U(t, 0.1, 0.4) * (1 - U(t, 0.72, 0.95)),
        u =
          0.14 * U(t, 0, 0.3) * (1 - U(t, 0.42, 0.5)) +
          0.14 * U(t, 0.6, 0.75) * (1 - U(t, 0.8, 0.95));
      ((s = new x().lerpVectors(ue, r, a)),
        (s.y = P + 0.016 + 0.034 * a + u),
        t >= 0.5 &&
          !Y.stamped &&
          ((Y.stamped = !0), O.stamp(Y.room), K.stamp()),
        Ie.copy(s).setY(s.y + 0.1),
        (i = 0.05 + 0.22 * a),
        Z.copy(r));
      let d = !e && V - Y.join > ce;
      Y.mapWant = +!!d;
      let f = d && Y.mapW > 0.95;
      if ((f && (Y.booted = !0), f && Y.settle)) {
        let e = Y.settle;
        ((Y.settle = null), e());
      }
      if (
        ((Y.quiet =
          f && Y.mapW > 0.995 && !(Y.assignedAt > 0 && V - Y.assignedAt < 1.8)),
        d && (Z.set(L.x, L.y, M.z0), Y.assignedAt > 0))
      ) {
        let e = V - Y.assignedAt;
        e < 1.6 &&
          (Z.copy(w.position),
          (o = Math.sin(Math.min(1, e / 1.2) * Math.PI) * 0.7));
      }
      let p = U(t, 1, 1.45),
        m = U(t, 1.3, 1.65);
      if (
        ((c = new x(z.x - 0.04 * p, P + 0.003, z.z + 0.3 * p + 0.22 * m)),
        t >= 1 &&
          e &&
          !Y.keyed &&
          ((Y.keyed = !0), (I.key.visible = !0), K.key()),
        Le.set(c.x, P + 0.03, Math.min(c.z, z.z + 0.3)).lerp(
          new x(z.x, P + 0.03, z.z),
          U(t, 1.45, 1.85),
        ),
        (i += 0.18 * p * (1 - U(t, 1.45, 1.85))),
        e &&
          (t > 1.15 && Z.copy(w.position),
          t > 1.45 &&
            (Z.set(L.x, L.y, M.z0),
            (o = Math.sin(U(t, 1.45, 1.85) * Math.PI) * 0.8)),
          t > 1.4 && !Y.doorSound && ((Y.doorSound = !0), K.door(), X?.leave()),
          (l = U(t, 1.55, 2.85)),
          (g.style.opacity = String(U(t, 2.15, 2.7))),
          t >= 2.75 && Y.resolve))
      ) {
        let e = Y.resolve;
        ((Y.resolve = null), e(Y.outcome));
      }
      Y.keyed || (c = null);
    }
    if (
      (s ? I.stamp.position.copy(s) : I.stamp.position.copy(ue).setY(P + 0.016),
      c && (I.key.position.copy(c), (I.key.rotation.y = 0.4)),
      (Y.coin += (Y.coinWant - Y.coin) * Math.min(1, e * 5)),
      (I.coin.visible = Y.coin > 0.01),
      I.coin.visible)
    ) {
      let e = de(Y.coin);
      (I.coin.position.set(1 + -0.14 * e, P + 0.012, 0.4 + (0.16 - 0.4) * e),
        I.coin.rotation.set(0, e * 2.2, 0));
    }
    (l > 0 && (q.pos.lerp(De.pos, l), q.look.lerp(De.look, l)),
      N.update(e, {
        right: Ie,
        left: Le,
        lookAt: Z,
        lean: i,
        shake: a,
        nod: o,
      }));
    let u = I.bell,
      d = Math.max(0, 1 - (V - (Y.bellT ?? -9)) * 8);
    ((u.plunger.position.y = 0.086 - 0.01 * d),
      (u.knob.position.y = 0.1 - 0.01 * d));
  }
  function Ve() {
    let e = innerWidth,
      t = innerHeight;
    ((a.width !== Math.round(e * S.getPixelRatio()) ||
      a.height !== Math.round(t * S.getPixelRatio())) &&
      S.setSize(e, t, !1),
      (w.aspect = e / t),
      (w.fov = e / t < 1 ? 52 : 30),
      e >= 900
        ? w.setViewOffset(e, t, -e * 0.14 * (1 - de(Y.offW)), 0, e, t)
        : w.clearViewOffset(),
      w.updateProjectionMatrix());
  }
  let He = 0,
    Ue = 0,
    We = 0,
    Ge = 0,
    Ke = !1;
  function qe(e) {
    if (((R = 0), H)) return;
    let t = !i && !G && (Y.join >= 0 || Y.typing || e < Ge);
    if (
      (t && (R = requestAnimationFrame(qe)),
      t && B && e - B < (Y.booted ? 31 : 15.5) && (Y.join < 0 || Y.booted))
    )
      return;
    let n = Math.min(0.1, (e - (B || e)) / 1e3);
    B = e;
    let r = performance.now();
    (Be(n),
      w.position.copy(q.pos),
      w.lookAt(q.look),
      !(Y.quiet && Ke) &&
        ((Ke = Y.quiet),
        Ve(),
        S.render(C, w),
        t &&
          Y.join < 0 &&
          ++He > 3 &&
          We < 40 &&
          (We++,
          (n > 0.07 || performance.now() - r > 30) && Ue++,
          Ue >= 8 && ((G = !0), cancelAnimationFrame(R), (R = 0))),
        t || (B = 0)));
  }
  let Q = (e = 0) => {
      !H &&
        W &&
        ((Ge = Math.max(Ge, performance.now() + e)),
        (R ||= requestAnimationFrame(qe)));
    },
    Je = (e) => me.has(e.trim().toLowerCase()),
    Ye = () => {
      if (!O) return;
      let e = v?.value ?? ``;
      (O.setName(e.replace(/[\x00-\x1f<>]/g, ``).slice(0, 24), Je(e)), Q(400));
    },
    Xe = () => ie && !ie.hidden,
    Ze = () => {
      Y.coinWant = Xe() && re?.value ? 1 : +(Y.join >= 0);
    },
    Qe = 0;
  (v?.addEventListener(`input`, () => {
    let e = v.value.length;
    (e > Qe && K.scratch(), (Qe = e), Ye());
  }),
    v?.addEventListener(`focus`, () => {
      ((q.wantFocus = i || G ? 0 : 1), Q(2600));
    }),
    v?.addEventListener(`blur`, () => {
      ((q.wantFocus = 0), Q(2600));
    }),
    re?.addEventListener(`input`, () => {
      let e = Y.coinWant;
      (Ze(), Y.coinWant && !e && K.coin(), Q(1200));
    }));
  let $e = () => {
    (K.start(),
      removeEventListener(`pointerdown`, $e, !0),
      removeEventListener(`keydown`, $e, !0));
  };
  (addEventListener(`pointerdown`, $e, !0),
    addEventListener(`keydown`, $e, !0));
  let et = new b(),
    tt = new o();
  (a.addEventListener(`pointerdown`, (e) => {
    if (!W) return;
    let t = a.getBoundingClientRect();
    (tt.set(
      ((e.clientX - t.left) / t.width) * 2 - 1,
      -((e.clientY - t.top) / t.height) * 2 + 1,
    ),
      et.setFromCamera(tt, w),
      et.intersectObject(I.bell.group, !0).length &&
        ((Y.bellT = V), K.start(), K.bell(), Q(500)));
  }),
    document.addEventListener(`visibilitychange`, () => {
      document.hidden
        ? (cancelAnimationFrame(R), (R = 0), K.stop())
        : ((B = 0), Q());
    }),
    addEventListener(`resize`, () => Q()));
  let nt = (e) => {
    if (!e) return;
    (typeof e.hotel == `string` && O?.setHotel(e.hotel),
      (A = Math.min(64, Math.max(1, (e.players | 0) + 1))));
    let t = Number.isInteger(e.capacity) && e.players >= e.capacity;
    (t && !Y.full && (Y.refuse = V), (Y.full = t), Q(t ? 1600 : 0));
  };
  (addEventListener(`lobby:health`, (e) => nt(e.detail)),
    addEventListener(`pageshow`, (e) => {
      e.persisted &&
        W &&
        (Ae(),
        (Y.join = -1),
        (Y.stamped = Y.keyed = Y.doorSound = !1),
        (I.key.visible = !1),
        O.reset(),
        (g.style.opacity = `0`),
        document.body.classList.remove(`checkin`),
        Ze(),
        (B = 0),
        Q());
    }));
  async function rt() {
    try {
      let e = await fetch(`/api/register`, { cache: `no-store` });
      if (!e.ok) return;
      let t = await e.json(),
        n = (Array.isArray(t?.guests) ? t.guests : [])
          .filter((e) => typeof e?.name == `string` && Number.isFinite(e.at))
          .slice(0, 20)
          .map((e) => ({
            name: e.name.replace(/[\x00-\x1f]/g, ``).slice(0, 24),
            at: e.at,
            live: !!e.live,
          }));
      for (let e of n) me.set(e.name.trim().toLowerCase(), e);
      (O.setGuests(n), Ye(), Q());
    } catch {}
  }
  let $ = null;
  return (
    (async () => {
      try {
        await ke(s);
      } catch (e) {
        (console.warn(`Front desk`, e),
          a.remove(),
          f.remove(),
          p.remove(),
          g.remove(),
          (window.frontDesk = null),
          Te());
        return;
      }
      if (!H) {
        if (
          (Ye(), Ze(), nt(window.lobbyHealth), rt(), k.onChange(() => Q()), !i)
        ) {
          let e = document.querySelector(`.footer`);
          if (e) {
            (($ = document.createElement(`button`)),
              ($.type = `button`),
              ($.className = `desk-sound`));
            let t = () => {
              (($.textContent = K.on ? `Sound on` : `Sound off`),
                $.setAttribute(`aria-pressed`, String(K.on)));
            };
            (t(),
              $.addEventListener(`click`, () => {
                (K.set(!K.on), t());
              }),
              e.insertBefore($, e.lastElementChild));
          }
        }
        (Ve(),
          w.position.copy(q.pos),
          w.lookAt(q.look),
          await Promise.resolve(S.compileAsync?.(C, w)).catch(() => {}),
          await j(),
          !H &&
            (Be(0),
            w.position.copy(q.pos),
            w.lookAt(q.look),
            S.render(C, w),
            (W = !0),
            requestAnimationFrame(() => {
              (a.classList.add(`on`),
                f.classList.add(`on`),
                p.classList.add(`on`),
                document.body.classList.add(`desk-on`),
                document.body.classList.remove(`desk-pending`));
            }),
            Q()));
      }
    })(),
    {
      get ready() {
        return W && !i && !G;
      },
      checkIn(e) {
        return !W || i || G
          ? Promise.resolve(`ready`)
          : new Promise((t) => {
              (Object.assign(Y, {
                booted: !1,
                quiet: !1,
                join: V,
                stamped: !1,
                keyed: !1,
                doorSound: !1,
                resolve: t,
                room: A,
                frame: e,
                release: -1,
                stage: ``,
                stageAt: V,
                watchAt: -9,
                subscribed: !1,
                team: -1,
                assignedAt: 0,
                outcome: null,
              }),
                Y.coinWant || ((Y.coinWant = 1), K.coin()),
                (X = Ne()),
                X.stage(`download`),
                (q.wantFocus = 0),
                document.body.classList.add(`checkin`),
                K.start(),
                (B = 0),
                Q());
            });
      },
      whenSettled() {
        return Y.join < 0 || Y.booted || Y.release >= 0
          ? Promise.resolve()
          : new Promise((e) => {
              let t = Y.settle;
              ((Y.settle = () => {
                (t?.(), e());
              }),
                setTimeout(e, 4e3));
            });
      },
      abort: Ae,
      dispose() {
        ((H = !0),
          X?.remove(),
          cancelAnimationFrame(R),
          K.stop(),
          $?.remove(),
          N?.dispose(),
          C?.traverse((e) => e.geometry?.dispose?.()),
          S?.dispose(),
          a.remove(),
          f.remove(),
          p.remove(),
          g.remove(),
          document.body.classList.remove(`desk-on`));
      },
      qa: {
        state: Y,
        cam: q,
        reset() {
          ((Y.join = -1),
            (Y.resolve = null),
            (Y.stamped = Y.keyed = Y.doorSound = !1),
            (I.key.visible = !1),
            O.reset(),
            (g.style.opacity = `0`),
            document.body.classList.remove(`checkin`),
            Ze());
        },
        get t() {
          return V;
        },
        render() {
          (Be(0),
            w.position.copy(q.pos),
            w.lookAt(q.look),
            Ve(),
            S.render(C, w));
        },
      },
    }
  );
}
