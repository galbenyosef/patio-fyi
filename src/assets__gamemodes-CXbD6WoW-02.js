// assets__gamemodes-CXbD6WoW 02 — color
// Lines 338-610 of readable/assets__gamemodes-CXbD6WoW.pretty.js (statement-aligned).
function V(e, t) {
  if (t) {
    if (
      ((e.match.ticketCapacity =
        Number.isFinite(t.ticketCapacity) && t.ticketCapacity > 0
          ? t.ticketCapacity
          : null),
      t.mode && (e.match.mode = t.mode),
      t.phase && (e.match.phase = t.phase),
      Number.isFinite(+t.timeLeft) &&
        (e.match.timeLeft = Math.max(0, +t.timeLeft)),
      (t.winner === -1 || t.winner === 0 || t.winner === 1) &&
        (e.match.winner = t.winner),
      Array.isArray(t.tickets))
    )
      for (let n = 0; n < 2; n++)
        e.teams[n] &&
          Number.isFinite(+t.tickets[n]) &&
          (e.teams[n].tickets = Math.max(0, +t.tickets[n]));
    Array.isArray(t.objectives) &&
      (e.match.objectives = t.objectives.map((e) => ({
        ...e,
        pos: [...e.pos],
      })));
    for (let n of [
      `attackers`,
      `zone`,
      `zones`,
      `zoneName`,
      `killLimit`,
      `winnerPlayer`,
      `leader`,
    ])
      t[n] != null && (e.match[n] = t[n]);
    Array.isArray(t.homeBases) &&
      t.homeBases.length === 2 &&
      (e.map.homeBases = e.match.homeBases =
        t.homeBases.map((e) => ({ ...e, pos: [...e.pos] })));
  }
}
function H(e, t) {
  if (!t) return;
  let n = e.match.objectives.find((e) => e.id === t.objectiveId);
  if (n)
    for (let e of [
      `team`,
      `progress`,
      `progressTeam`,
      `contested`,
      `spawnable`,
      `state`,
    ])
      t[e] != null && (n[e] = t[e]);
}
function U(e, t) {
  let n = e.modules.get(`demo`)?.getDefinition?.(),
    r = n?.objectives?.find?.((e) => e?.id === t.id);
  return {
    flag: n?.objectiveStyle === `flag`,
    mapDrawn: (t.visual ?? r?.visual) === `map`,
  };
}
function W(e, t) {
  let n = e.world.match.objectives ?? [],
    r = n.map((t) => U(e, t)),
    i = n
      .map(
        (e, t) =>
          `${e.id}:${e.pos?.join(`,`)}:${e.radius}:${r[t].flag ? `f` : ``}${r[t].mapDrawn ? `m` : ``}`,
      )
      .join(`|`);
  if (i === t.objectiveKey) return;
  t.objectiveKey = i;
  let a = new Map(n.map((e, t) => [e.id, r[t]]));
  for (let [e, n] of t.visuals) {
    let r = a.get(e);
    (!r || r.mapDrawn || r.flag !== n.flagStyle) && (Y(n), t.visuals.delete(e));
  }
  n.forEach((e, n) => {
    if (r[n].mapDrawn || e.kind !== `mcom`) return;
    let i = t.visuals.get(e.id);
    (i || ((i = K(e, r[n])), t.visuals.set(e.id, i), t.root.add(i.group)),
      i.group.position.set(e.pos[0], e.pos[1], e.pos[2]));
  });
}
var G = 1.2;
function K(e, t = {}) {
  let s = new g();
  s.name = `objective-${e.id}`;
  let c = !!t.flag,
    l = null,
    d = null,
    f = null,
    p = null;
  c ||
    ((f = new u({
      color: I,
      transparent: !0,
      opacity: 0.08,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      side: 2,
    })),
    (l = new n(new o(e.radius, 48), f)),
    (l.rotation.x = -Math.PI / 2),
    (l.position.y = 0.09),
    s.add(l),
    (p = new a({
      color: I,
      emissive: 1446669,
      emissiveIntensity: 0.25,
      roughness: 0.65,
      metalness: 0.12,
    })),
    (d = new n(new i(e.radius, 0.16, 5, 64), p)),
    (d.rotation.x = Math.PI / 2),
    (d.position.y = 0.08),
    (d.castShadow = !0),
    s.add(d));
  let m = new n(
    new S(0.72, 0.92, 0.24, 8),
    new a({ color: 5659216, roughness: 0.92, flatShading: !0 }),
  );
  ((m.position.y = 0.12), (m.castShadow = m.receiveShadow = !0), s.add(m));
  let h = new n(
    new S(0.055, 0.075, 7.2, 8),
    new a({
      color: 5066829,
      roughness: 0.42,
      metalness: 0.55,
      flatShading: !0,
    }),
  );
  ((h.position.y = 3.72), (h.castShadow = !0), s.add(h));
  let _ = new b(2.8, 1.35, 8, 2);
  _.translate(1.4, 0, 0);
  let v = new a({ color: I, side: 2, roughness: 0.88, flatShading: !0 }),
    y = new n(_, v);
  (y.position.set(0.08, 6.25, 0), (y.castShadow = !0), s.add(y));
  let x = q(e.letter, e.name);
  (x.position.set(0, 7.85, 0), s.add(x));
  let C = null,
    w = null;
  if (e.kind === `mcom`) {
    ((h.visible = y.visible = m.visible = !1), (x.position.y = 2.7));
    let e = new a({
      color: 3884598,
      roughness: 0.7,
      metalness: 0.3,
      flatShading: !0,
    });
    ((C = new n(new r(0.9, 1.25, 0.55), e)),
      (C.position.y = 0.62),
      (C.castShadow = C.receiveShadow = !0),
      s.add(C));
    let t = new u({ color: 4198416 });
    ((w = new n(new r(0.22, 0.12, 0.22), t)), (w.position.y = 1.31), s.add(w));
  }
  return {
    group: s,
    zone: l,
    ring: d,
    base: m,
    pole: h,
    flag: y,
    label: x,
    mcom: C,
    lamp: w,
    flagStyle: c,
    flagBase: _.attributes.position.array.slice(),
    geometries: [
      l?.geometry,
      d?.geometry,
      m.geometry,
      h.geometry,
      y.geometry,
    ].filter(Boolean),
    materials: [f, p, m.material, h.material, v].filter(Boolean),
    texture: x.material.map,
  };
}
function q(t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = 512), (r.height = 256));
  let i = r.getContext(`2d`);
  (i.clearRect(0, 0, 512, 256),
    (i.fillStyle = `rgba(12,16,18,.82)`),
    i.fillRect(72, 18, 368, 188),
    (i.strokeStyle = `#e7dfc8`),
    (i.lineWidth = 6),
    i.strokeRect(72, 18, 368, 188),
    (i.fillStyle = `#f1ead8`),
    (i.font = `bold 112px Arial`),
    (i.textAlign = `center`),
    i.fillText(t, 256, 126),
    (i.font = `600 29px Arial`),
    (i.fillStyle = `#c8c1ad`),
    i.fillText(String(n).toUpperCase(), 256, 176));
  let a = new w(r);
  a.colorSpace = f;
  let o = new v(new e({ map: a, transparent: !0, depthTest: !0 }));
  return (o.scale.set(3.2, 1.6, 1), o);
}
function J(e, t) {
  for (let n of e.world.match.objectives ?? []) {
    let e = t.visuals.get(n.id);
    if (!e) continue;
    if (e.flagStyle) {
      let t = L(+n.progress || 0),
        r =
          n.team === 0 ||
          n.team === 1 ||
          n.progressTeam === 0 ||
          n.progressTeam === 1
            ? t
            : 0;
      ((e.flag.position.y = G + 5.05 * r),
        e.flag.material.color.setHex(
          n.team === 0 || n.team === 1
            ? F[n.team]
            : r > 0
              ? R(n.progressTeam)
              : I,
        ));
    } else {
      let r = se.setHex(R(n.team)),
        i = Q.setHex(R(n.progressTeam));
      (n.contested
        ? e.ring.material.color.setHex(14070362)
        : e.ring.material.color.copy(r),
        e.ring.material.emissive
          .copy(i)
          .multiplyScalar(n.contested ? 0.22 : 0.08),
        e.zone.material.color.copy(i),
        (e.zone.material.opacity = n.contested
          ? 0.16 + Math.sin(t.elapsed * 7) * 0.04
          : 0.055 + L(n.progress) * 0.09));
      let a = n.contested ? 1 + Math.sin(t.elapsed * 6) * 0.012 : 1;
      (e.ring.scale.setScalar(a), e.flag.material.color.copy(r));
    }
    let r = e.flag.geometry.attributes.position,
      i = e.flagBase;
    for (let e = 0; e < r.count; e++) {
      let n = i[e * 3],
        a = i[e * 3 + 1];
      r.setXYZ(
        e,
        n,
        a + Math.sin(t.elapsed * 3.2 + n * 2.1) * 0.06 * (n / 2.8),
        Math.sin(t.elapsed * 4 + n * 1.65) * 0.12 * (n / 2.8),
      );
    }
    ((r.needsUpdate = !0),
      e.flag.geometry.computeVertexNormals(),
      e.mcom &&
        ((e.mcom.visible = e.lamp.visible = n.state !== `destroyed`),
        e.lamp.material.color.setHex(
          n.state === `armed` && Math.sin(t.elapsed * 14) > 0
            ? 16722458
            : 4198416,
        )));
  }
}
function Y(e) {
  e.group.parent?.remove(e.group);
  for (let t of e.geometries) t.dispose();
  for (let t of e.materials) t.dispose();
  for (let t of [e.mcom, e.lamp])
    t && (t.geometry.dispose(), t.material.dispose());
  (e.texture?.dispose(), e.label.material.dispose());
}
