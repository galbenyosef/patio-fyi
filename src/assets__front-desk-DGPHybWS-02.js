// assets__front-desk-DGPHybWS 02 — filltext
// Lines 122-408 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
function pe(e) {
  let t = document.createElement(`canvas`);
  ((t.width = W), (t.height = G));
  let n = t.getContext(`2d`),
    r = new a(t);
  ((r.colorSpace = ee), (r.anisotropy = 8));
  let i = document.createElement(`canvas`);
  ((i.width = W), (i.height = G), u(i.getContext(`2d`)));
  let o = {
      guests: [],
      name: ``,
      shown: 0,
      welcome: !1,
      stamp: null,
      room: null,
      dirty: !0,
      date: new Date(),
    },
    s = [],
    c = [];
  for (let e = 372; e < 1036; e += K) s.push(e);
  for (let e = 212; e < 1036; e += K) c.push(e);
  let l = () => {
    let e = o.guests.slice(0, s.length + 2).reverse(),
      t = e.slice(0, Math.max(0, e.length - 2)),
      n = e.slice(t.length);
    return { left: t, right: n, mine: c[n.length] };
  };
  function u(t) {
    for (let [e, n] of [
      [0, 1],
      [W / 2, -1],
    ]) {
      let r = t.createLinearGradient(e, 0, e + W / 2, 0),
        i = `#cdbb92`,
        a = `#e8dcc0`,
        o = `#a8936a`;
      (n > 0
        ? (r.addColorStop(0, i),
          r.addColorStop(0.08, a),
          r.addColorStop(0.88, a),
          r.addColorStop(1, o))
        : (r.addColorStop(0, o),
          r.addColorStop(0.12, a),
          r.addColorStop(0.92, a),
          r.addColorStop(1, i)),
        (t.fillStyle = r),
        t.fillRect(e, 0, W / 2, G));
    }
    let n = E(31);
    for (let e = 0; e < 9e3; e++)
      ((t.fillStyle = `rgba(120,90,40,${n() * 0.05})`),
        t.fillRect(n() * W, n() * G, 1 + n() * 2, 1 + n() * 2));
    ((t.strokeStyle = `rgba(70,95,130,.35)`), (t.lineWidth = 1.5));
    for (let [e, n] of [
      [0, 372],
      [W / 2, 212],
    ])
      for (let r = n; r < 1036; r += K)
        (t.beginPath(),
          t.moveTo(e + 50, r),
          t.lineTo(e + W / 2 - 50, r),
          t.stroke());
    t.strokeStyle = `rgba(170,40,40,.45)`;
    for (let e of [0, W / 2])
      for (let n of [250, 120])
        (t.beginPath(),
          t.moveTo(e + W / 2 - n, e ? 112 : 272),
          t.lineTo(e + W / 2 - n, 1026),
          t.stroke());
    ((t.fillStyle = `#2b2014`),
      (t.textAlign = `center`),
      (t.textBaseline = `alphabetic`),
      (t.font = `700 58px ${H}`));
    let r = 58,
      i = e.toUpperCase().split(` `).join(`  `);
    for (; r > 30 && t.measureText(i).width > W / 2 - 120;)
      ((r -= 2), (t.font = `700 ${r}px ${H}`));
    (t.fillText(i, W / 4, 110),
      (t.font = `italic 30px ${H}`),
      t.fillText(`Register of Guests`, W / 4, 158),
      (t.strokeStyle = `#2b2014`),
      (t.lineWidth = 2),
      t.beginPath(),
      t.moveTo(W / 4 - 180, 178),
      t.lineTo(580, 178),
      t.stroke(),
      (t.font = `600 19px ${H}`),
      (t.textAlign = `left`));
    for (let [e, n] of [
      [0, 318],
      [W / 2, 158],
    ])
      (t.fillText(`GUEST`, e + 60, n),
        t.fillText(`ARRIVED`, e + W / 2 - 240, n),
        t.fillText(`ROOM`, e + W / 2 - 112, n));
  }
  let d = (e) => {
    let t = new Date(e);
    return `${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`;
  };
  function f(e, t, r, i, a = 40) {
    let o = E(1 + i * 7);
    (n.save(),
      n.translate(t, r - 10),
      n.rotate((o() - 0.5) * 0.03),
      (n.fillStyle = B[i % B.length]),
      (n.font = `${a}px ${V}`),
      (n.textAlign = `left`),
      n.fillText(e, 0, 0),
      n.restore());
  }
  function p(e, t, r) {
    n.font = `${r}px ${V}`;
    let i = r;
    for (; i > 26 && n.measureText(e).width > t;)
      ((i -= 2), (n.font = `${i}px ${V}`));
    return i;
  }
  function m() {
    n.drawImage(i, 0, 0);
    let e = l(),
      t = (e, t, r, i) => {
        (f(e.name, t + 62, r, i, p(e.name, W / 2 - 330, 56)),
          (n.fillStyle = `#3a3026`),
          (n.font = `italic 30px ${H}`),
          n.fillText(d(e.at), t + W / 2 - 236, r - 14),
          e.live &&
            ((n.fillStyle = `#7a1f1a`),
            n.fillText(`in`, t + W / 2 - 100, r - 14)));
      };
    (e.left.forEach((e, n) => t(e, 0, s[n], n)),
      e.right.forEach((n, r) => t(n, W / 2, c[r], r + e.left.length)));
    let a = e.mine;
    if (a) {
      let e = o.name.trim();
      if (!e)
        ((n.fillStyle = `rgba(60,60,64,.6)`),
          (n.font = `italic 34px ${H}`),
          n.fillText(`✕  sign here`, 864, a - 14));
      else {
        let t = p(e, W / 2 - 330, 64);
        (n.save(), (n.font = `${t}px ${V}`));
        let r = n.measureText(e).width,
          i = n.measureText(e.slice(0, Math.floor(o.shown))).width,
          s = o.shown % 1,
          c = n.measureText(e.slice(0, Math.ceil(o.shown))).width;
        (n.beginPath(),
          n.rect(854, a - 70, i + (c - i) * s + 4, 90),
          n.clip(),
          n.translate(862, a - 10),
          n.rotate(-0.012),
          (n.fillStyle = `#101a33`),
          n.fillText(e, 0, 0),
          n.restore(),
          r > 0 &&
            ((n.fillStyle = `#3a3026`),
            (n.font = `italic 30px ${H}`),
            n.fillText(d(Date.now()), 1364, a - 14)));
      }
      (o.welcome &&
        e &&
        ((n.fillStyle = `rgba(70,64,58,.75)`),
        (n.font = `italic 30px ${H}`),
        n.fillText(`welcome back`, 1130, a + 32)),
        o.room != null && f(String(o.room), 1496, a, 3, 50),
        o.side &&
          ((n.fillStyle = `rgba(70,64,58,.8)`),
          (n.font = `italic 28px ${H}`),
          (n.textAlign = `left`),
          n.fillText(o.side, 1364, a + 32)),
        o.stamp && h(1400, a + 10, o.stamp));
    }
    ((r.needsUpdate = !0), (o.dirty = !1));
  }
  function h(t, r, { angle: i, time: a }) {
    (n.save(),
      n.translate(t, r),
      n.rotate(i),
      (n.globalAlpha = 0.82),
      (n.strokeStyle = n.fillStyle = `#a3161e`),
      n.scale(1.25, 1.25),
      (n.lineWidth = 5),
      n.beginPath(),
      n.arc(0, 0, 78, 0, Math.PI * 2),
      n.stroke(),
      (n.lineWidth = 2),
      n.beginPath(),
      n.arc(0, 0, 66, 0, Math.PI * 2),
      n.stroke(),
      (n.font = `700 15px ${H}`),
      (n.textAlign = `center`),
      (n.textBaseline = `middle`));
    let o = `${e.toUpperCase()} · CHECKED IN · `;
    for (let e = 0; e < o.length; e++) {
      let t = (e / o.length) * Math.PI * 2;
      (n.save(),
        n.rotate(t),
        n.translate(0, -70),
        n.fillText(o[e], 0, 0),
        n.restore());
    }
    ((n.font = `800 22px ${H}`),
      n.fillText(`CHECKED`, 0, -12),
      n.fillText(`IN`, 0, 12),
      (n.font = `600 16px ${H}`),
      n.fillText(a, 0, 38),
      (n.globalCompositeOperation = `destination-out`));
    let s = E(77);
    for (let e = 0; e < 160; e++)
      ((n.globalAlpha = s() * 0.6),
        n.beginPath(),
        n.arc(
          (s() - 0.5) * 160,
          (s() - 0.5) * 160,
          1 + s() * 3,
          0,
          Math.PI * 2,
        ),
        n.fill());
    n.restore();
  }
  return {
    tex: r,
    st: o,
    mineUV() {
      let e = l().mine ?? c[2];
      return { u: 1400 / W, v: (e + 10) / G };
    },
    setGuests(e) {
      ((o.guests = e), (o.dirty = !0));
    },
    setHotel(t) {
      t && t !== e && ((e = t), u(i.getContext(`2d`)), (o.dirty = !0));
    },
    setSide(e) {
      ((o.side = e), (o.dirty = !0));
    },
    setName(e, t) {
      (e !== o.name &&
        (e.startsWith(o.name.slice(0, Math.floor(o.shown))) ||
          (o.shown = Math.min(o.shown, e.length)),
        (o.name = e),
        (o.dirty = !0)),
        t !== o.welcome && ((o.welcome = t), (o.dirty = !0)));
    },
    stamp(e) {
      let t = new Date();
      ((o.stamp = {
        angle: (Math.random() - 0.5) * 0.5,
        time: `${t.getDate()} ${t.toLocaleString(`en`, { month: `short` }).toUpperCase()} · ${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`,
      }),
        (o.room = e),
        (o.dirty = !0));
    },
    reset() {
      ((o.stamp = null), (o.room = null), (o.side = null), (o.dirty = !0));
    },
    update(e) {
      let t = o.name.trim().length;
      return (
        o.shown < t
          ? ((o.shown = Math.min(t, o.shown + e * 16)), (o.dirty = !0))
          : o.shown > t && ((o.shown = t), (o.dirty = !0)),
        o.dirty && m(),
        o.shown < t
      );
    },
    draw: m,
  };
}
function me(e, t) {
  let n = new g(e, t, 64, 1);
  n.rotateX(-Math.PI / 2);
  let r = n.attributes.position;
  for (let t = 0; t < r.count; t++) {
    let n = Math.abs(r.getX(t)) / (e / 2),
      i =
        0.004 +
        0.03 *
          Math.sin(Math.PI * Math.min(1, n * 1.05)) ** 0.55 *
          (1 - 0.45 * n) *
          Math.min(1, n * 12);
    r.setY(t, i);
  }
  return (n.computeVertexNormals(), n);
}
