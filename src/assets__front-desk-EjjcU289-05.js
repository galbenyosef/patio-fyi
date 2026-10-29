// assets__front-desk-EjjcU289 05 — math
// Lines 976-1260 of readable/assets__front-desk-EjjcU289.pretty.js (statement-aligned).
function Ce(e) {
  let t = document.createElement(`canvas`);
  t.width = t.height = J;
  let n = t.getContext(`2d`),
    r = new x(t);
  ((r.colorSpace = p), (r.anisotropy = 4));
  let i = Se(e, L.x, L.y, L.size, L.size, r, 0.7),
    a = -1,
    o = null,
    s = null,
    c = ``,
    l = null,
    u = null,
    d = () => {
      (ee(), u?.());
    };
  (fetch(`/assets/maps/deployment/manifest-v4.json`)
    .then((e) => (e.ok ? e.json() : null))
    .then((e) => {
      ((o = e?.maps ?? e), f());
    })
    .catch(() => {}),
    fetch(`/api/battlefield`, { cache: `no-store` })
      .then((e) => (e.ok ? e.json() : null))
      .then((e) => {
        e?.map && ((l = e), f(), d());
      })
      .catch(() => {}));
  function f() {
    if (!o || !l?.map || c === l.map) return;
    let e = (c = l.map),
      t = o[e] ?? o.compact;
    if (!t?.image) return;
    let n = new Image();
    ((n.onload = () => {
      c === e && ((s = { image: n, bounds: t.bounds }), d());
    }),
      (n.src = t.image));
  }
  let m = (e) =>
    e < 0
      ? `#cfd3d6`
      : l?.teams?.[e]?.color || (e === 0 ? `#e0a030` : `#d23a32`);
  function h() {
    let e = [...(l.objectives ?? []), ...(l.bases ?? [])],
      t = l.bounds ?? s?.bounds ?? [-256, -256, 256, 256];
    if (!e.length)
      return {
        cx: (t[0] + t[2]) / 2,
        cz: (t[1] + t[3]) / 2,
        half: Math.max(t[2] - t[0], t[3] - t[1]) / 2,
      };
    let n = e.map((e) => e.x),
      r = e.map((e) => e.z);
    return {
      cx: (Math.min(...n) + Math.max(...n)) / 2,
      cz: (Math.min(...r) + Math.max(...r)) / 2,
      half: Math.min(
        Math.max(t[2] - t[0], t[3] - t[1]) / 2,
        Math.max(
          Math.max(...n) - Math.min(...n),
          Math.max(...r) - Math.min(...r),
        ) /
          2 +
          45,
      ),
    };
  }
  let g = (e) => {
      let t = parseInt(String(e).slice(1), 16);
      if (!(t >= 0)) return e;
      let n = (t >> 16) & 255,
        r = (t >> 8) & 255,
        i = t & 255,
        a = (n + r + i) / 3,
        o = 0.3;
      return `rgb(${Math.round(n + (a - n) * o)},${Math.round(r + (a - r) * o)},${Math.round(i + (a - i) * o)})`;
    },
    _ = `#ece3cf`,
    v = `500 26px ${H}`,
    y = (e, t, r, i = `left`, a = 6) => {
      n.textAlign = `left`;
      let o = [...e],
        s = o.reduce((e, t) => e + n.measureText(t).width + a, 0) - a,
        c = i === `right` ? t - s : i === `center` ? t - s / 2 : t;
      for (let e of o) (n.fillText(e, c, r), (c += n.measureText(e).width + a));
    };
  function ee() {
    if (((n.fillStyle = `#0d0b09`), n.fillRect(0, 0, J, J), !l?.map)) {
      ((n.fillStyle = `rgba(236,227,207,.45)`),
        (n.font = `italic 38px ${H}`),
        (n.textAlign = `center`),
        (n.textBaseline = `middle`),
        n.fillText(`Awaiting dispatches`, J / 2, J / 2),
        (r.needsUpdate = !0));
      return;
    }
    let e = h(),
      t = J / (2 * e.half),
      i = (n) => J / 2 + (n - e.cx) * t,
      o = (n) => J / 2 + (n - e.cz) * t;
    if (s) {
      let e = s.bounds;
      (n.drawImage(
        s.image,
        i(e[0]),
        o(e[1]),
        (e[2] - e[0]) * t,
        (e[3] - e[1]) * t,
      ),
        (n.globalCompositeOperation = `saturation`),
        (n.fillStyle = `rgba(128,128,128,.85)`),
        n.fillRect(0, 0, J, J),
        (n.globalCompositeOperation = `multiply`),
        (n.fillStyle = `#b39a74`),
        n.fillRect(0, 0, J, J),
        (n.globalCompositeOperation = `source-over`));
    }
    ((n.fillStyle = `rgba(12,9,6,.22)`), n.fillRect(0, 0, J, J));
    let c = n.createRadialGradient(
      J / 2,
      J / 2,
      J * 0.3,
      J / 2,
      J / 2,
      J * 0.75,
    );
    (c.addColorStop(0, `rgba(0,0,0,0)`),
      c.addColorStop(1, `rgba(0,0,0,.55)`),
      (n.fillStyle = c),
      n.fillRect(0, 0, J, J),
      (n.strokeStyle = `rgba(236,227,207,.07)`),
      (n.lineWidth = 1),
      n.beginPath());
    for (let e = 1; e < 6; e++)
      (n.moveTo((e * J) / 6, 0),
        n.lineTo((e * J) / 6, J),
        n.moveTo(0, (e * J) / 6),
        n.lineTo(J, (e * J) / 6));
    (n.stroke(),
      (n.strokeStyle = `rgba(236,230,220,.18)`),
      (n.lineWidth = 1),
      n.strokeRect(26, 26, 972, 972),
      (n.textBaseline = `middle`));
    for (let e of l.bases ?? []) {
      let t = i(e.x),
        r = o(e.z),
        a = g(m(e.team));
      ((n.strokeStyle = a),
        (n.lineWidth = 2),
        n.strokeRect(t - 30, r - 19, 60, 38),
        (n.fillStyle = a),
        (n.font = `600 22px ${H}`),
        y(`HQ`, t, r + 1, `center`, 4));
    }
    if (a >= 0) {
      let e = (l.bases ?? []).find((e) => e.team === a);
      if (e) {
        let t = i(e.x),
          r = o(e.z);
        ((n.strokeStyle = g(m(a))),
          (n.globalAlpha = 0.8),
          (n.lineWidth = 2),
          n.beginPath(),
          n.arc(t, r, 52, 0, Math.PI * 2),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = _),
          (n.font = `500 20px ${H}`),
          y(`YOU`, t, r + 68, `center`, 5));
      }
    }
    for (let e of l.objectives ?? []) {
      let t = i(e.x),
        r = o(e.z);
      ((n.fillStyle = `rgba(12,9,6,.72)`),
        n.beginPath(),
        n.arc(t, r, 30, 0, Math.PI * 2),
        n.fill(),
        (n.strokeStyle = `rgba(236,227,207,.75)`),
        (n.lineWidth = 3),
        n.beginPath(),
        n.arc(t, r, 30, 0, Math.PI * 2),
        n.stroke(),
        (n.fillStyle = _),
        (n.font = `400 34px ${H}`),
        (n.textAlign = `center`),
        n.fillText(e.letter, t, r + 2));
    }
    ((n.font = v),
      (n.fillStyle = `rgba(236,227,207,.8)`),
      y(String(l.name || ``).toUpperCase(), J / 2, 66, `center`, 7));
    let u = l.teams ?? [];
    if (u.length >= 2 && l.mode !== `ffa`) {
      n.font = v;
      for (let [e, t, r] of [
        [0, `left`, 58],
        [1, `right`, 966],
      ])
        ((n.fillStyle = g(m(e))),
          y(String(u[e]?.name ?? ``).toUpperCase(), r, 960, t, 5));
    }
    r.needsUpdate = !0;
  }
  return (
    ee(),
    {
      group: i,
      onChange(e) {
        u = e;
      },
      get snapshot() {
        return l;
      },
      setYou(e) {
        a !== e && ((a = e), d());
      },
    }
  );
}
function we(e) {
  let t = C({ jacket: 2040883 }),
    { s: n, base: r } = t;
  (n.root.position.set(I.x, 0, I.z),
    (n.root.rotation.y = Math.PI),
    e.add(n.root));
  let i = new f(),
    a = new s(),
    o = new s(),
    c = new s(),
    l = new s(),
    u = { R: new s(), L: new s() };
  n.handContact = () => {
    let e = n.sk;
    e.torso.updateWorldMatrix(!0, !1);
    for (let [t, n, r, s] of [
      [e.armR, e.foreR, a, u.R],
      [e.armL, e.foreL, o, u.L],
    ])
      (s.copy(r),
        e.torso.worldToLocal(l.copy(r)),
        i.position.set(0, 0, 0),
        i.updateMatrix(),
        S(t, n, l, i, 0.15));
  };
  let d = 0,
    p = 0,
    m = 0;
  return {
    root: n.root,
    hands: u,
    update(
      e,
      { right: t, left: i, lookAt: l, lean: u = 0, shake: f = 0, nod: h = 0 },
    ) {
      ((m += e), a.copy(t), o.copy(i));
      let g = { ...r },
        _ = Math.sin(m * 1.2);
      ((g.torsoTilt = (r.torsoTilt ?? 0) + u + 0.008 * _),
        (g.torsoYaw = 0),
        (g.torsoRoll = 0),
        (g.hipYaw = 0),
        n.root.updateWorldMatrix(!0, !1),
        n.root.worldToLocal(c.copy(l)));
      let v = new s(0, 1.7, 0),
        y = c.x - v.x,
        ee = c.y - v.y,
        te = c.z - v.z,
        ne = Math.max(-0.9, Math.min(0.9, Math.atan2(-y, -te))),
        re = Math.max(
          -0.45,
          Math.min(0.45, Math.atan2(-ee, Math.hypot(y, te))),
        );
      ((d += (ne - d) * Math.min(1, e * 4)),
        (p += (re - p) * Math.min(1, e * 4)),
        (g.headYaw = d + Math.sin(m * 14) * 0.22 * f),
        (g.headPitch = p + 0.25 * h),
        n.apply(g));
    },
    dispose: t.dispose,
  };
}
function Te() {
  document.body.classList.remove(`desk-on`, `desk-pending`);
}
