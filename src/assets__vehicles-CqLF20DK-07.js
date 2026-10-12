// assets__vehicles-CqLF20DK 07 — math
// Lines 1731-2084 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
function Me(e) {
  let t = new C();
  ((t.name = `helicopter-cockpit`), (t.visible = !1), e.scene.add(t));
  let n = new C();
  (n.position.set(0, -0.3, 0.5), t.add(n));
  let i = [
      new g({
        color: 6508601,
        roughness: 0.72,
        metalness: 0.38,
        emissive: 2169360,
        emissiveIntensity: 0.45,
      }),
      new g({
        color: 1383451,
        roughness: 0.86,
        metalness: 0.15,
        emissive: 790800,
        emissiveIntensity: 0.5,
      }),
      new g({ color: 9145722, roughness: 0.45, metalness: 0.65 }),
      new A({ color: 10926483, toneMapped: !1 }),
    ],
    a = i.map(() => []),
    o = new c(),
    s = new v(),
    u = new k(0, 1, 0);
  function f(e, t, n, r) {
    (o.compose(new k(...n), r ?? new v(), new k(1, 1, 1)), e.applyMatrix4(o));
    let i = e.index ? e.toNonIndexed() : e;
    (i !== e && e.dispose(), a[t].push(i));
  }
  function m(e, t, n = 1) {
    f(new r(...e), n, t);
  }
  function h(e, t, n, i, a = 0) {
    let o = new k(...e),
      c = new k(...t),
      l = c.clone().sub(o);
    f(
      new r(n, l.length(), i),
      a,
      o.add(c).multiplyScalar(0.5).toArray(),
      s.setFromUnitVectors(u, l.normalize()).clone(),
    );
  }
  for (let e of [-1, 1]) {
    (h([e * 1.02, -0.9, -1.55], [e * 1.08, 0.93, -0.97], 0.075, 0.105),
      h([e * 1.08, 0.93, -0.97], [e * 1.1, 0.93, 1.92], 0.075, 0.085),
      h([e * 1.1, -1, 0.65], [e * 1.1, 0.93, 0.65], 0.065, 0.08),
      h([e * 1.02, -0.9, -1.55], [e * 1.1, -1, 1.95], 0.08, 0.09),
      m([0.09, 0.52, 3.4], [e * 1.12, -1.3, 0.28]),
      h([e * 1.06, -1.03, 0.05], [e * 1.06, -1.03, 0.35], 0.025, 0.025, 2));
    for (let t = 0; t < 5; t++)
      m([0.012, 0.019, 0.021], [e * 1.063, -0.7 + t * 0.3, -1.46 + t * 0.1], 2);
  }
  (h([-1.08, 0.93, -0.97], [1.08, 0.93, -0.97], 0.1, 0.1),
    m([2.2, 0.08, 3.1], [0, 1.03, 0.48]),
    h([0, -1.5, -1.5], [0, -1.5, 2], 0.09, 0.06));
  for (let e of [-1, 1])
    h([e * 0.7, -1.5, -1.5], [e * 0.7, -1.5, 2], 0.05, 0.05);
  m([2.2, 1.9, 0.08], [0, -0.04, 2.05]);
  let _ = new D();
  (_.moveTo(-1.04, -1.14),
    _.lineTo(-1.04, -0.71),
    _.lineTo(-0.88, -0.61),
    _.lineTo(0.83, -0.61),
    _.lineTo(1.04, -0.75),
    _.lineTo(1.04, -1.14),
    _.closePath(),
    f(
      new T(_, {
        depth: 0.22,
        bevelEnabled: !0,
        bevelSegments: 1,
        steps: 1,
        bevelSize: 0.035,
        bevelThickness: 0.025,
      }),
      0,
      [0, 0, -1.64],
    ),
    m([1.83, 0.045, 0.2], [-0.02, -0.615, -1.53]),
    h([-0.48, -1.45, -0.12], [-0.48, -1.1, -0.22], 0.035, 0.035, 2),
    m([0.075, 0.12, 0.07], [-0.48, -1.06, -0.22]));
  for (let e = 0; e < 9; e++)
    (m([0.032, 0.013, 0.064], [0.48 + e * 0.049, -0.68, -1.385], 2),
      m([0.015, 0.013, 0.014], [0.48 + e * 0.049, -0.655, -1.382], 3));
  let b = new A({
      color: 6127480,
      transparent: !0,
      opacity: 0.28,
      depthWrite: !1,
      side: 2,
    }),
    x = new p(new y(2.1, 3.5), b);
  ((x.rotation.x = -Math.PI / 2),
    x.position.set(0, -1.53, 0.25),
    (x.frustumCulled = !1),
    (x.renderOrder = 2),
    n.add(x));
  for (let e = 0; e < a.length; e++) {
    let t = E(a[e]);
    for (let t of a[e]) t.dispose();
    let r = new p(t, i[e]);
    ((r.frustumCulled = !1), n.add(r));
  }
  let S = document.createElement(`canvas`);
  ((S.width = 1536), (S.height = 384));
  let O = S.getContext(`2d`),
    M = new d(S);
  ((M.colorSpace = w),
    (M.generateMipmaps = !1),
    (M.minFilter = l),
    (M.anisotropy = Math.min(4, e.renderer.capabilities.getMaxAnisotropy())));
  let N = new A({ map: M, toneMapped: !1 }),
    P = new p(new y(1.96, 0.49), N);
  (P.position.set(0, -0.8, -1.37),
    n.add(P),
    e.renderer.compile(t, e.camera, e.scene));
  let I = document.createElement(`div`);
  ((I.dataset.helicopterCockpit = ``),
    (I.hidden = !0),
    (I.style.cssText = `position:absolute;inset:0;z-index:2;pointer-events:none;color:#8df577;text-shadow:0 0 3px #173c12;font:12px monospace`),
    (I.innerHTML = `<svg viewBox="0 0 1000 600" preserveAspectRatio="none" style="position:absolute;left:25%;top:24%;width:50%;height:42%;overflow:hidden" aria-label="Helicopter flight instruments"><g fill="none" stroke="currentColor" stroke-width="1.1" opacity=".75"><path d="M290 48H710M495 51L500 58L505 51M190 164V402H212M810 164V402H788"/><g data-compass></g><g data-ladder></g></g><g fill="currentColor" font-family="monospace" font-size="15"><text data-heading x="500" y="30" text-anchor="middle"/><text x="176" y="147" text-anchor="end">KM/H</text><text data-speed x="176" y="287" text-anchor="end"/><text x="824" y="147">AGL M</text><text data-alt x="824" y="287"/><text data-climb x="824" y="315" font-size="12"/><text data-role x="500" y="490" text-anchor="middle" font-size="12"/></g><g data-heat font-family="monospace" style="display:none"><text data-heatlabel x="340" y="452" fill="currentColor" font-size="15" text-anchor="end">GUN</text><rect x="350" y="439" width="300" height="16" fill="#0b1a10aa" stroke="currentColor" stroke-width="1.4"/><rect data-heatfill x="352" y="441" width="0" height="12" fill="currentColor"/><text data-ammo x="662" y="452" fill="currentColor" font-size="15"/></g></svg>`),
    e.ui.append(I));
  let L = Object.fromEntries(
      [
        `heading`,
        `speed`,
        `alt`,
        `climb`,
        `role`,
        `compass`,
        `ladder`,
        `heat`,
        `heatfill`,
        `heatlabel`,
        `ammo`,
      ].map((e) => [e, I.querySelector(`[data-` + e + `]`)]),
    ),
    R = 1,
    z,
    B,
    V;
  function H(e, t, n, r, i, a, o, s = 0) {
    let c = O;
    ((c.fillStyle = `#1b211e`),
      c.fillRect(0, 0, 1536, 384),
      (c.fillStyle = `#ffffff05`));
    for (let e = 0; e < 1536; e += 7) c.fillRect(e, 0, 1, 384);
    let l = `#89ef77`,
      u = `#376842`;
    function d(e, t, n, r = 18, i = l) {
      ((c.font = `${r}px monospace`), (c.fillStyle = i), c.fillText(e, t, n));
    }
    function f(e, t, n, r, i = l) {
      ((c.strokeStyle = i),
        (c.lineWidth = 2),
        c.beginPath(),
        c.moveTo(e, t),
        c.lineTo(n, r),
        c.stroke());
    }
    function p(e, t, n) {
      ((c.fillStyle = `#0b100f`),
        c.fillRect(e, 37, t, 282),
        (c.strokeStyle = `#536151`),
        (c.lineWidth = 4),
        c.strokeRect(e + 3, 40, t - 6, 276),
        (c.fillStyle = `#061b13`),
        c.fillRect(e + 17, 54, t - 34, 247),
        d(n, e + 29, 80, 17));
      for (let n = 98; n < 295; n += 4)
        ((c.fillStyle = `#9eff7706`), c.fillRect(e + 20, n, t - 40, 1));
      for (let n of [9, t - 9])
        for (let t of [46, 310])
          ((c.fillStyle = `#899181`),
            c.beginPath(),
            c.arc(e + n, t, 3, 0, Math.PI * 2),
            c.fill());
    }
    (p(45, 408, `FLIGHT / ATTITUDE`),
      p(495, 340, `NAV / TERRAIN`),
      p(879, 300, `SYSTEMS`),
      c.save(),
      c.beginPath(),
      c.rect(68, 94, 361, 192),
      c.clip(),
      c.translate(248, 181),
      c.rotate(-s));
    let m = a * 140;
    ((c.fillStyle = `#163528`),
      c.fillRect(-300, -300, 600, m + 300),
      f(-300, m, 300, m));
    for (let e = -3; e <= 3; e++) {
      let t = m + e * 26;
      (f(-33, t, -10, t, u),
        f(26, t, 49, t, u),
        d(String(Math.abs(e * 10)), 62, t + 5, 13, u));
    }
    (c.setTransform(1, 0, 0, 1, 0, 0),
      f(174, 181, 230, 181),
      f(230, 181, 248, 193),
      f(248, 193, 266, 181),
      f(266, 181, 322, 181),
      c.restore(),
      d(`${n} KM/H`, 76, 282, 21),
      d(`${i.toString().padStart(3, `0`)} DEG`, 286, 282, 21),
      d(`${r}`, 531, 157, 43),
      d(`METRES AGL`, 531, 187, 16),
      f(526, 205, 802, 205, u),
      d(
        `V/S ${e.vel[1] >= 0 ? `+` : ``}${e.vel[1].toFixed(1)} M/S`,
        531,
        239,
        20,
      ),
      d(`HDG ` + i.toString().padStart(3, `0`), 531, 275, 20));
    let h = Math.min(1, Math.max(0, e.hp / F[e.weapon].hp)),
      g = t?.vehicleId === e.id && performance.now() - t.received < 1e3;
    (d(`HULL ` + Math.ceil(h * 100) + `%`, 910, 124, 22),
      (c.fillStyle = u),
      c.fillRect(910, 143, 233, 10),
      (c.fillStyle = l),
      c.fillRect(910, 143, 233 * h, 10),
      d(o ? `PILOT` : `CREW`, 910, 191, 21),
      d(
        g && t.heat?.[0]?.locked
          ? `GUN COOLING`
          : o
            ? `FLIGHT READY`
            : `OBSERVATION`,
        910,
        231,
        17,
      ),
      d(F[e.weapon].name.split(` · `)[0], 910, 277, 23));
    for (let t = 0; t < 2; t++) {
      let n = 1302,
        r = 108 + t * 153;
      ((c.fillStyle = `#080e0c`),
        c.beginPath(),
        c.arc(n, r, 58, 0, Math.PI * 2),
        c.fill(),
        (c.strokeStyle = `#697466`),
        (c.lineWidth = 3),
        c.stroke());
      for (let e = -2.3; e <= 2.3; e += 0.46)
        f(
          n + Math.sin(e) * 45,
          r - Math.cos(e) * 45,
          n + Math.sin(e) * 51,
          r - Math.cos(e) * 51,
          u,
        );
      let i = t ? Math.max(-2.3, Math.min(2.3, e.vel[1] / 6)) : h * 4.6 - 2.3;
      (f(n, r, n + Math.sin(i) * 40, r - Math.cos(i) * 40),
        d(t ? `CLIMB` : `HULL`, 1274, r + 31, 12));
    }
    (d(`FLIGHT SYSTEMS  /  AVIONICS`, 47, 357, 15, `#abb3a0`),
      d(`T SPOT     SHIFT FOCUS`, 894, 357, 15, `#abb3a0`),
      (M.needsUpdate = !0));
  }
  return {
    hide() {
      ((t.visible = !1), (I.hidden ||= !0));
    },
    update(n, r, i, a, o, s, c = s) {
      ((t.visible = !0), (I.hidden &&= !1));
      let l = j(n, ee(n, r.pos)),
        u = Math.cos(n.yaw),
        d = Math.sin(n.yaw);
      (t.position.set(
        n.pos[0] + d * l[2],
        n.pos[1] + l[1] + te,
        n.pos[2] + u * l[2],
      ),
        c
          ? t.rotation.set(c.pitch, n.yaw, -c.roll, `YXZ`)
          : t.rotation.set(0, n.yaw, 0));
      let f =
        a?.vehicleId === n.id &&
        performance.now() - a.received < 1e3 &&
        n.owner === r.owner
          ? a.heat?.[0]
          : null;
      if (((L.heat.style.display = f ? `` : `none`), f)) {
        let e = Math.min(1, Math.max(0, f.value || 0)),
          t = f.locked ? `#ff6a4d` : e >= 0.75 ? `#ffd24d` : `#8df577`,
          n = f.locked && performance.now() % 500 < 250;
        (je(L.heatfill, `width`, (296 * e).toFixed(1)),
          t !== z && ((L.heat.style.color = t), (z = t)),
          X(L.heatlabel, f.locked ? (n ? `OVERHEAT` : ``) : `GUN`),
          X(
            L.ammo,
            a.unlimited
              ? ``
              : `${a.ammo ?? ``}${a.capacity ? `/` + a.capacity : ``}`,
          ));
      }
      if (((R += o), R < 0.1)) return;
      R = 0;
      let p = Math.round(Math.hypot(n.vel[0], n.vel[2]) * 3.6),
        m = Math.max(
          0,
          Math.round(
            n.pos[1] -
              Math.max(
                e.world.map.waterLevel ?? -1 / 0,
                e.world.map.getHeight(n.pos[0], n.pos[2]),
              ),
          ),
        ),
        h = ((Math.round((-n.yaw * 180) / Math.PI) % 360) + 360) % 360,
        g = n.owner === r.owner;
      H(n, a, p, m, h, s ? s.pitch : 0, g, s ? s.roll : 0);
      let _ = ((Math.round((-i.yaw * 180) / Math.PI) % 360) + 360) % 360;
      (X(L.heading, String(_).padStart(3, `0`)),
        X(L.speed, p),
        X(L.alt, m),
        X(L.climb, `${n.vel[1] >= 0 ? `+` : ``}${n.vel[1].toFixed(1)} M/S`),
        X(L.role, g ? `` : `CREW  /  T SPOT`));
      let v = ``;
      for (let e = -3; e <= 3; e++) {
        let t = 500 + e * 58,
          n = (_ + e * 10 + 360) % 360;
        v += `<path d="M${t} 42v6"/><text x="${t}" y="78" fill="currentColor" stroke="none" font-size="13" text-anchor="middle">${n}</text>`;
      }
      v !== B && ((L.compass.innerHTML = v), (B = v));
      let y = 600 / (0.84 * Math.tan((e.camera.fov * Math.PI) / 360)),
        b = ``;
      for (let e = -30; e <= 30; e += 10) {
        let t = (e * Math.PI) / 180 - i.pitch;
        if (Math.abs(t) > 1.2) continue;
        let n = (0.26 / 0.42) * 600 - Math.tan(t) * y;
        n < 115 ||
          n > 425 ||
          (b += `<path d="M400 ${n}h70m60 0h70"${e < 0 ? ` stroke-dasharray="6 5"` : ``}/><text x="385" y="${n + 4}" fill="currentColor" stroke="none" font-size="12" text-anchor="end">${e}</text>`);
      }
      (b !== V && ((L.ladder.innerHTML = b), (V = b)),
        je(
          L.ladder,
          `transform`,
          `rotate(${((-(c?.roll ?? 0) * Math.cos(i.yaw - n.yaw) * 180) / Math.PI).toFixed(1)} 500 270)`,
        ));
    },
    dispose() {
      (e.scene.remove(t), t.traverse((e) => e.geometry?.dispose()));
      for (let e of i) e.dispose();
      (N.dispose(), b.dispose(), M.dispose(), I.remove());
    },
  };
}
