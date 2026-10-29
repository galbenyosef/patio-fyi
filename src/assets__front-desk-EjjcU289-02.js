// assets__front-desk-EjjcU289 02 — filltext
// Lines 122-408 of readable/assets__front-desk-EjjcU289.pretty.js (statement-aligned).
function pe(e) {
  let t = document.createElement(`canvas`);
  ((t.width = W), (t.height = G));
  let n = t.getContext(`2d`),
    r = new x(t);
  ((r.colorSpace = p), (r.anisotropy = 8));
  let i = document.createElement(`canvas`);
  ((i.width = W), (i.height = G), l(i.getContext(`2d`)));
  let a = {
      guests: [],
      name: ``,
      shown: 0,
      welcome: !1,
      stamp: null,
      room: null,
      dirty: !0,
      date: new Date(),
    },
    o = [],
    s = [];
  for (let e = 372; e < 1036; e += K) o.push(e);
  for (let e = 212; e < 1036; e += K) s.push(e);
  let c = () => {
    let e = a.guests.slice(0, o.length + 2).reverse(),
      t = e.slice(0, Math.max(0, e.length - 2)),
      n = e.slice(t.length);
    return { left: t, right: n, mine: s[n.length] };
  };
  function l(t) {
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
  let u = (e) => {
    let t = new Date(e);
    return `${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`;
  };
  function d(e, t, r, i, a = 40) {
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
  function f(e, t, r) {
    n.font = `${r}px ${V}`;
    let i = r;
    for (; i > 26 && n.measureText(e).width > t;)
      ((i -= 2), (n.font = `${i}px ${V}`));
    return i;
  }
  function m() {
    n.drawImage(i, 0, 0);
    let e = c(),
      t = (e, t, r, i) => {
        (d(e.name, t + 62, r, i, f(e.name, W / 2 - 330, 56)),
          (n.fillStyle = `#3a3026`),
          (n.font = `italic 30px ${H}`),
          n.fillText(u(e.at), t + W / 2 - 236, r - 14),
          e.live &&
            ((n.fillStyle = `#7a1f1a`),
            n.fillText(`in`, t + W / 2 - 100, r - 14)));
      };
    (e.left.forEach((e, n) => t(e, 0, o[n], n)),
      e.right.forEach((n, r) => t(n, W / 2, s[r], r + e.left.length)));
    let l = e.mine;
    if (l) {
      let e = a.name.trim();
      if (!e)
        ((n.fillStyle = `rgba(60,60,64,.6)`),
          (n.font = `italic 34px ${H}`),
          n.fillText(`✕  sign here`, 864, l - 14));
      else {
        let t = f(e, W / 2 - 330, 64);
        (n.save(), (n.font = `${t}px ${V}`));
        let r = n.measureText(e).width,
          i = n.measureText(e.slice(0, Math.floor(a.shown))).width,
          o = a.shown % 1,
          s = n.measureText(e.slice(0, Math.ceil(a.shown))).width;
        (n.beginPath(),
          n.rect(854, l - 70, i + (s - i) * o + 4, 90),
          n.clip(),
          n.translate(862, l - 10),
          n.rotate(-0.012),
          (n.fillStyle = `#101a33`),
          n.fillText(e, 0, 0),
          n.restore(),
          r > 0 &&
            ((n.fillStyle = `#3a3026`),
            (n.font = `italic 30px ${H}`),
            n.fillText(u(Date.now()), 1364, l - 14)));
      }
      (a.welcome &&
        e &&
        ((n.fillStyle = `rgba(70,64,58,.75)`),
        (n.font = `italic 30px ${H}`),
        n.fillText(`welcome back`, 1130, l + 32)),
        a.room != null && d(String(a.room), 1496, l, 3, 50),
        a.side &&
          ((n.fillStyle = `rgba(70,64,58,.8)`),
          (n.font = `italic 28px ${H}`),
          (n.textAlign = `left`),
          n.fillText(a.side, 1364, l + 32)),
        a.stamp && h(1400, l + 10, a.stamp));
    }
    ((r.needsUpdate = !0), (a.dirty = !1));
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
    st: a,
    mineUV() {
      let e = c().mine ?? s[2];
      return { u: 1400 / W, v: (e + 10) / G };
    },
    setGuests(e) {
      ((a.guests = e), (a.dirty = !0));
    },
    setHotel(t) {
      t && t !== e && ((e = t), l(i.getContext(`2d`)), (a.dirty = !0));
    },
    setSide(e) {
      ((a.side = e), (a.dirty = !0));
    },
    setName(e, t) {
      (e !== a.name &&
        (e.startsWith(a.name.slice(0, Math.floor(a.shown))) ||
          (a.shown = Math.min(a.shown, e.length)),
        (a.name = e),
        (a.dirty = !0)),
        t !== a.welcome && ((a.welcome = t), (a.dirty = !0)));
    },
    stamp(e) {
      let t = new Date();
      ((a.stamp = {
        angle: (Math.random() - 0.5) * 0.5,
        time: `${t.getDate()} ${t.toLocaleString(`en`, { month: `short` }).toUpperCase()} · ${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`,
      }),
        (a.room = e),
        (a.dirty = !0));
    },
    reset() {
      ((a.stamp = null), (a.room = null), (a.side = null), (a.dirty = !0));
    },
    update(e) {
      let t = a.name.trim().length;
      return (
        a.shown < t
          ? ((a.shown = Math.min(t, a.shown + e * 16)), (a.dirty = !0))
          : a.shown > t && ((a.shown = t), (a.dirty = !0)),
        a.dirty && m(),
        a.shown < t
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
