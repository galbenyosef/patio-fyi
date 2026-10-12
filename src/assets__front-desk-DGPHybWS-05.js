// assets__front-desk-DGPHybWS 05 — math
// Lines 976-1257 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
function Ce(e) {
  let t = document.createElement(`canvas`);
  t.width = t.height = J;
  let n = t.getContext(`2d`),
    r = new a(t);
  ((r.colorSpace = ee), (r.anisotropy = 4));
  let i = Se(e, L.x, L.y, L.size, L.size, r, 0.7),
    o = -1,
    s = null,
    c = null,
    l = ``,
    u = null,
    d = null,
    f = () => {
      (te(), d?.());
    };
  (fetch(`/assets/maps/deployment/manifest-v4.json`)
    .then((e) => (e.ok ? e.json() : null))
    .then((e) => {
      ((s = e?.maps ?? e), p());
    })
    .catch(() => {}),
    fetch(`/api/battlefield`, { cache: `no-store` })
      .then((e) => (e.ok ? e.json() : null))
      .then((e) => {
        e?.map && ((u = e), p(), f());
      })
      .catch(() => {}));
  function p() {
    if (!s || !u?.map || l === u.map) return;
    let e = (l = u.map),
      t = s[e] ?? s.compact;
    if (!t?.image) return;
    let n = new Image();
    ((n.onload = () => {
      l === e && ((c = { image: n, bounds: t.bounds }), f());
    }),
      (n.src = t.image));
  }
  let m = (e) =>
    e < 0
      ? `#cfd3d6`
      : u?.teams?.[e]?.color || (e === 0 ? `#e0a030` : `#d23a32`);
  function h() {
    let e = [...(u.objectives ?? []), ...(u.bases ?? [])],
      t = u.bounds ?? c?.bounds ?? [-256, -256, 256, 256];
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
  function te() {
    if (((n.fillStyle = `#0d0b09`), n.fillRect(0, 0, J, J), !u?.map)) {
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
      a = (n) => J / 2 + (n - e.cz) * t;
    if (c) {
      let e = c.bounds;
      (n.drawImage(
        c.image,
        i(e[0]),
        a(e[1]),
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
    let s = n.createRadialGradient(
      J / 2,
      J / 2,
      J * 0.3,
      J / 2,
      J / 2,
      J * 0.75,
    );
    (s.addColorStop(0, `rgba(0,0,0,0)`),
      s.addColorStop(1, `rgba(0,0,0,.55)`),
      (n.fillStyle = s),
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
    for (let e of u.bases ?? []) {
      let t = i(e.x),
        r = a(e.z),
        o = g(m(e.team));
      ((n.strokeStyle = o),
        (n.lineWidth = 2),
        n.strokeRect(t - 30, r - 19, 60, 38),
        (n.fillStyle = o),
        (n.font = `600 22px ${H}`),
        y(`HQ`, t, r + 1, `center`, 4));
    }
    if (o >= 0) {
      let e = (u.bases ?? []).find((e) => e.team === o);
      if (e) {
        let t = i(e.x),
          r = a(e.z);
        ((n.strokeStyle = g(m(o))),
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
    for (let e of u.objectives ?? []) {
      let t = i(e.x),
        r = a(e.z);
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
      y(String(u.name || ``).toUpperCase(), J / 2, 66, `center`, 7));
    let l = u.teams ?? [];
    if (l.length >= 2 && u.mode !== `ffa`) {
      n.font = v;
      for (let [e, t, r] of [
        [0, `left`, 58],
        [1, `right`, 966],
      ])
        ((n.fillStyle = g(m(e))),
          y(String(l[e]?.name ?? ``).toUpperCase(), r, 960, t, 5));
    }
    r.needsUpdate = !0;
  }
  return (
    te(),
    {
      group: i,
      onChange(e) {
        d = e;
      },
      get snapshot() {
        return u;
      },
      setYou(e) {
        o !== e && ((o = e), f());
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
  let i = new p(),
    a = new x(),
    o = new x(),
    s = new x(),
    c = new x(),
    l = { R: new x(), L: new x() };
  n.handContact = () => {
    let e = n.sk;
    e.torso.updateWorldMatrix(!0, !1);
    for (let [t, n, r, s] of [
      [e.armR, e.foreR, a, l.R],
      [e.armL, e.foreL, o, l.L],
    ])
      (s.copy(r),
        e.torso.worldToLocal(c.copy(r)),
        i.position.set(0, 0, 0),
        i.updateMatrix(),
        S(t, n, c, i, 0.15));
  };
  let u = 0,
    d = 0,
    f = 0;
  return {
    root: n.root,
    hands: l,
    update(
      e,
      { right: t, left: i, lookAt: c, lean: l = 0, shake: p = 0, nod: m = 0 },
    ) {
      ((f += e), a.copy(t), o.copy(i));
      let h = { ...r },
        g = Math.sin(f * 1.2);
      ((h.torsoTilt = (r.torsoTilt ?? 0) + l + 0.008 * g),
        (h.torsoYaw = 0),
        (h.torsoRoll = 0),
        (h.hipYaw = 0),
        n.root.updateWorldMatrix(!0, !1),
        n.root.worldToLocal(s.copy(c)));
      let _ = new x(0, 1.7, 0),
        v = s.x - _.x,
        y = s.y - _.y,
        ee = s.z - _.z,
        te = Math.max(-0.9, Math.min(0.9, Math.atan2(-v, -ee))),
        ne = Math.max(-0.45, Math.min(0.45, Math.atan2(-y, Math.hypot(v, ee))));
      ((u += (te - u) * Math.min(1, e * 4)),
        (d += (ne - d) * Math.min(1, e * 4)),
        (h.headYaw = u + Math.sin(f * 14) * 0.22 * p),
        (h.headPitch = d + 0.25 * m),
        n.apply(h));
    },
    dispose: t.dispose,
  };
}
function Te() {
  document.body.classList.remove(`desk-on`, `desk-pending`);
}
