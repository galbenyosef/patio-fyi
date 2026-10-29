// assets__ui-hhE6L1u7 07 — math
// Lines 1659-2413 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Rn(e, { size: t = 232, dpr: n = 1 } = {}) {
  let r = t,
    i = t,
    a = Math.max(1, Math.min(2, n || 1)),
    o = e.getContext(`2d`, { alpha: !0 }),
    s = null,
    c = null,
    l = null,
    u = [],
    d = new Map(),
    f = null,
    p = null;
  function m(t, n, o = a) {
    ((r = t),
      (i = n),
      (a = Math.max(1, Math.min(2, o || 1))),
      (e.width = Math.round(r * a)),
      (e.height = Math.round(i * a)),
      (e.style.width = `${r}px`),
      (e.style.height = `${i}px`));
  }
  m(r, i, a);
  let h = 0;
  function g(e, t) {
    (h++, (s = e || null), (c = e ? t : null));
  }
  function _(e, t = null) {
    ((s = null), (c = null));
    let n = ++h;
    if (!e || typeof e.getHeight != `function`) {
      t?.(null, null);
      return;
    }
    let r = e.bounds || [-1024, -1024, 1024, 1024];
    try {
      let e = i(256);
      e && ((s = e), (c = r), t?.(e, r));
    } catch {}
    function i(t) {
      let n = document.createElement(`canvas`);
      ((n.width = t), (n.height = t));
      let i = n.getContext(`2d`),
        a = i.createImageData(t, t),
        o = a.data,
        s = (r[2] - r[0]) / t,
        c = (r[3] - r[1]) / t,
        l = new Float32Array(t * t),
        u = 1 / 0,
        d = -1 / 0;
      for (let n = 0; n < t; n++)
        for (let i = 0; i < t; i++) {
          let a = +e.getHeight(r[0] + (i + 0.5) * s, r[1] + (n + 0.5) * c) || 0;
          ((l[n * t + i] = a), a < u && (u = a), a > d && (d = a));
        }
      let f = Math.max(1, d - u);
      for (let n = 0; n < t; n++)
        for (let i = 0; i < t; i++) {
          let a = l[n * t + i],
            d = l[n * t + Math.max(0, i - 1)],
            p = l[n * t + Math.min(t - 1, i + 1)],
            m = l[Math.max(0, n - 1) * t + i],
            h = l[Math.min(t - 1, n + 1) * t + i],
            g = ((d - p) / (2 * s)) * 0.6 + ((m - h) / (2 * c)) * 0.8,
            _ =
              0.72 +
              Math.max(-0.35, Math.min(0.35, g * 2.2)) +
              ((a - u) / f) * 0.22,
            v = e.getMaterialAt
              ? e.getMaterialAt(r[0] + (i + 0.5) * s, r[1] + (n + 0.5) * c)
              : null,
            y = (a - u) / f,
            b =
              (v && Pn[v]) ||
              (y < 0.02
                ? Pn.water
                : y < 0.45
                  ? Pn.grass
                  : y < 0.8
                    ? Pn.dirt
                    : Pn.rock),
            x = Math.floor(a / 25),
            S =
              _ *
              (x !== Math.floor(d / 25) || x !== Math.floor(m / 25) ? 0.7 : 1),
            C = (n * t + i) * 4;
          ((o[C] = Math.min(255, b[0] * S)),
            (o[C + 1] = Math.min(255, b[1] * S)),
            (o[C + 2] = Math.min(255, b[2] * S)),
            (o[C + 3] = 255));
        }
      return (i.putImageData(a, 0, 0), n);
    }
    let a = (r[2] - r[0]) / 640,
      o = (r[3] - r[1]) / 640,
      l,
      u,
      d,
      f,
      p;
    try {
      ((l = document.createElement(`canvas`)),
        (l.width = 640),
        (l.height = 640),
        (u = l.getContext(`2d`)),
        (d = u.createImageData(640, 640)),
        (f = d.data),
        (p = new Float32Array(409600)));
    } catch {
      return;
    }
    let m = 1 / 0,
      g = -1 / 0,
      _ = 1,
      v = 0,
      y = 0,
      b = (t) => {
        let n = r[1] + (t + 0.5) * o;
        for (let i = 0; i < 640; i++) {
          let o = +e.getHeight(r[0] + (i + 0.5) * a, n) || 0;
          ((p[t * 640 + i] = o), o < m && (m = o), o > g && (g = o));
        }
      },
      x = (t) => {
        let n = r[1] + (t + 0.5) * o;
        for (let i = 0; i < 640; i++) {
          let s = p[t * 640 + i],
            c = p[t * 640 + Math.max(0, i - 1)],
            l = p[t * 640 + Math.min(639, i + 1)],
            u = p[Math.max(0, t - 1) * 640 + i],
            d = p[Math.min(639, t + 1) * 640 + i],
            h = ((c - l) / (2 * a)) * 0.6 + ((u - d) / (2 * o)) * 0.8,
            g =
              0.72 +
              Math.max(-0.35, Math.min(0.35, h * 2.2)) +
              ((s - m) / _) * 0.22,
            v,
            y = e.getMaterialAt
              ? e.getMaterialAt(r[0] + (i + 0.5) * a, n)
              : null;
          if (y && Pn[y]) v = Pn[y];
          else {
            let e = (s - m) / _;
            v =
              e < 0.02
                ? Pn.water
                : e < 0.45
                  ? Pn.grass
                  : e < 0.8
                    ? Pn.dirt
                    : Pn.rock;
          }
          let b = Math.floor(s / 25),
            x =
              g *
              (b !== Math.floor(c / 25) || b !== Math.floor(u / 25) ? 0.7 : 1),
            S = (t * 640 + i) * 4;
          ((f[S] = Math.min(255, v[0] * x)),
            (f[S + 1] = Math.min(255, v[1] * x)),
            (f[S + 2] = Math.min(255, v[2] * x)),
            (f[S + 3] = 255));
        }
      },
      S = () => {
        if (n !== h) return;
        let e = typeof performance < `u` ? performance.now() : Date.now();
        try {
          for (
            ;
            (typeof performance < `u` ? performance.now() : Date.now()) - e < 4;
          )
            if (v === 0)
              (b(y++),
                y >= 640 && ((_ = Math.max(1, g - m)), (v = 1), (y = 0)));
            else if ((x(y++), y >= 640)) {
              (u.putImageData(d, 0, 0), (s = l), (c = r), t?.(l, r));
              return;
            }
        } catch {
          return;
        }
        (typeof requestAnimationFrame == `function`
          ? requestAnimationFrame
          : setTimeout)(S);
      };
    (typeof requestAnimationFrame == `function`
      ? requestAnimationFrame
      : setTimeout)(S);
  }
  function v(t) {
    let n = o;
    (e.width,
      e.height,
      n.setTransform(a, 0, 0, a, 0, 0),
      n.clearRect(0, 0, r, i));
    let m = r / 2,
      h = i / 2,
      g = Math.max(10, t.range || 150),
      _ = r / 2 / g,
      v = Array.isArray(t.entities)
        ? t.entities
        : t.entities
          ? Array.from(t.entities)
          : [],
      y = t.center ? t.center[0] : 0,
      b = t.center ? t.center[1] : 0,
      x = !t.big && Number.isFinite(t.heading),
      S = x ? t.heading : 0,
      C = Math.cos(S),
      w = Math.sin(S),
      T = (e) => m + (e - y) * _,
      E = (e) => h + (e - b) * _,
      D = (e, t) => {
        let n = e - y,
          r = t - b;
        return x
          ? { x: m + (n * C - r * w) * _, y: h + (n * w + r * C) * _ }
          : { x: m + n * _, y: h + r * _ };
      },
      O = T,
      k = E,
      A = (e) => {
        (n.save(),
          x && (n.translate(m, h), n.rotate(S), n.translate(-m, -h)),
          e(),
          n.restore());
      };
    t.clear || ((n.fillStyle = `rgba(9,11,13,0.55)`), n.fillRect(0, 0, r, i));
    let j = t.big && t.aerial?.image?.complete ? t.aerial : null;
    if (j) {
      let e = j.bounds;
      if (((n.imageSmoothingEnabled = !0), t.clear)) {
        let t = T(e[0]),
          r = E(e[1]),
          i = (e[2] - e[0]) * _,
          a = (e[3] - e[1]) * _;
        (n.save(),
          (n.shadowColor = `rgba(0,0,0,.65)`),
          (n.shadowBlur = 24),
          (n.fillStyle = `#0b0c0d`),
          n.fillRect(t - 4, r - 4, i + 8, a + 8),
          n.restore(),
          (n.strokeStyle = `rgba(236,234,227,.28)`),
          (n.lineWidth = 1),
          n.strokeRect(t - 4.5, r - 4.5, i + 9, a + 9));
      }
      n.drawImage(
        j.image,
        T(e[0]),
        E(e[1]),
        (e[2] - e[0]) * _,
        (e[3] - e[1]) * _,
      );
    } else if (s && c) {
      let e = c,
        r = T(e[0]),
        i = E(e[1]),
        a = T(e[2]),
        o = E(e[3]);
      A(() => {
        ((n.globalAlpha = t.big ? 0.32 : 0.92),
          (n.imageSmoothingEnabled = !0),
          n.drawImage(s, r, i, a - r, o - i));
      });
    }
    let M = t.layout;
    if (
      (M !== l &&
        ((l = M),
        (u = (M?.objects ?? []).filter(
          (e) =>
            /^(avenue-|cross-street-)/.test(e.id) &&
            !e.id.includes(`dash`) &&
            !e.id.includes(`edge`),
        )),
        (d = new Map((M?.highrises ?? []).map((e) => [e.id, e])))),
      j ||
        A(() => {
          n.fillStyle = `#272e32`;
          for (let e of u)
            Math.hypot(e.x - y, e.z - b) - Math.hypot(e.sx, e.sz) * 0.5 >
              g * 1.55 ||
              n.fillRect(
                T(e.x - e.sx / 2),
                E(e.z - e.sz / 2),
                e.sx * _,
                e.sz * _,
              );
          for (let e of M?.buildings ?? []) {
            let r = d.get(e.id),
              i = r?.width ?? e.w,
              a = r?.depth ?? e.d;
            if (
              ![e.x, e.z, i, a].every(Number.isFinite) ||
              Math.hypot(e.x - y, e.z - b) - Math.hypot(i, a) * 0.5 > g * 1.55
            )
              continue;
            let o = T(e.x - i / 2),
              s = E(e.z - a / 2);
            ((n.fillStyle = t.big
              ? r
                ? `#536977`
                : `#354a57`
              : r
                ? `#91968f`
                : `#6f787b`),
              (n.strokeStyle = t.big ? `#708794` : `#ccd0c5`),
              (n.lineWidth = r ? 1.5 : 1),
              n.fillRect(o, s, i * _, a * _),
              n.strokeRect(o, s, i * _, a * _));
          }
          t.big &&
            M?.plan?.length &&
            (f !== M &&
              ((f = M),
              (p = M.plan.reduce(
                (e, t) => [
                  Math.min(e[0], t.x - t.w / 2),
                  Math.min(e[1], t.z - t.d / 2),
                  Math.max(e[2], t.x + t.w / 2),
                  Math.max(e[3], t.z + t.d / 2),
                ],
                [1e9, 1e9, -1e9, -1e9],
              ))),
            (n.fillStyle = `rgba(12,14,16,.86)`),
            n.fillRect(
              T(p[0] - 1),
              E(p[1] - 1),
              (p[2] - p[0] + 2) * _,
              (p[3] - p[1] + 2) * _,
            ));
          for (let e of M?.plan ?? []) {
            if (
              Math.hypot(e.x - y, e.z - b) - Math.hypot(e.w, e.d) * 0.5 >
              g * 1.55
            )
              continue;
            let r = Math.min(1, e.h / 8);
            ((n.fillStyle = t.big
              ? `rgb(${(38 + r * 52) | 0},${(48 + r * 66) | 0},${(54 + r * 72) | 0})`
              : `rgb(${(80 + r * 90) | 0},${(88 + r * 96) | 0},${(90 + r * 92) | 0})`),
              n.fillRect(T(e.x - e.w / 2), E(e.z - e.d / 2), e.w * _, e.d * _),
              t.big &&
                e.w * _ > 3 &&
                ((n.strokeStyle = `rgba(9,11,13,.55)`),
                (n.lineWidth = 1),
                n.strokeRect(
                  T(e.x - e.w / 2),
                  E(e.z - e.d / 2),
                  e.w * _,
                  e.d * _,
                )));
          }
        }),
      t.big)
    )
      for (let e of t.towers ?? []) {
        let r = O(e.pos[0]),
          i = k(e.pos[2]),
          a = e.available ? 8 : 6,
          o = t.selectedId === `tower:${e.id}`;
        (n.beginPath(),
          n.moveTo(r, i - a),
          n.lineTo(r + a, i),
          n.lineTo(r, i + a),
          n.lineTo(r - a, i),
          n.closePath(),
          (n.fillStyle = e.available ? `#ECEAE3` : `rgba(236,234,227,0.28)`),
          n.fill(),
          (n.lineWidth = o ? 2.5 : 1.2),
          (n.strokeStyle = o
            ? `#ECEAE3`
            : e.available
              ? `#e5b85c`
              : `rgba(236,234,227,0.35)`),
          n.stroke(),
          o && (n.beginPath(), n.arc(r, i, a + 7, 0, Math.PI * 2), n.stroke()));
      }
    if (t.showGrid !== !1) {
      let e = g >= 600 ? 250 : g >= 300 ? 100 : 50;
      ((n.lineWidth = 1),
        (n.strokeStyle = s ? `rgba(9,11,13,0.28)` : `rgba(236,234,227,0.10)`),
        A(() => {
          n.beginPath();
          let t = Math.floor((y - g) / e) * e,
            a = y + g;
          for (let r = t; r <= a; r += e) {
            let e = Math.round(T(r)) + 0.5;
            (n.moveTo(e, 0), n.lineTo(e, i));
          }
          let o = Math.floor((b - g) / e) * e,
            s = b + g;
          for (let t = o; t <= s; t += e) {
            let e = Math.round(E(t)) + 0.5;
            (n.moveTo(0, e), n.lineTo(r, e));
          }
          n.stroke();
        }));
    }
    if (t.bounds) {
      let e = t.bounds;
      (n.save(),
        (n.strokeStyle = `rgba(236,234,227,0.34)`),
        (n.lineWidth = 1),
        n.setLineDash([6, 5]),
        A(() =>
          n.strokeRect(
            Math.round(T(e[0])) + 0.5,
            Math.round(E(e[1])) + 0.5,
            Math.round((e[2] - e[0]) * _),
            Math.round((e[3] - e[1]) * _),
          ),
        ),
        n.restore());
    }
    let N = (e) =>
      e < 0 ? `#ECEAE3` : e === t.allyTeam ? kn().ally : kn().enemy;
    if (t.heading != null && !t.big) {
      let e = ((t.fovDeg || 70) * Math.PI) / 180,
        i = -Math.PI / 2;
      (n.save(),
        n.beginPath(),
        n.moveTo(m, h),
        n.arc(m, h, r * 0.42, i - e / 2, i + e / 2),
        n.closePath(),
        (n.fillStyle = `rgba(236,234,227,0.07)`),
        n.fill(),
        n.restore());
    }
    if (!t.big) {
      (n.save(),
        (n.strokeStyle = `rgba(236,234,227,.20)`),
        (n.fillStyle = `rgba(236,234,227,.72)`),
        (n.lineWidth = 1),
        (n.font = `700 9px system-ui`),
        (n.textAlign = `left`),
        (n.textBaseline = `middle`));
      for (let e of [15, 30]) {
        let t = e * _;
        t < r * 0.49 &&
          (n.beginPath(),
          n.arc(m, h, t, 0, Math.PI * 2),
          n.stroke(),
          n.fillText(`${e}m`, m + 3, h - t - 4));
      }
      (n.translate(r - 17, 17),
        n.rotate(t.heading || 0),
        n.beginPath(),
        n.moveTo(0, -8),
        n.lineTo(4, 5),
        n.lineTo(0, 2),
        n.lineTo(-4, 5),
        n.closePath(),
        n.fill(),
        n.restore(),
        (n.fillStyle = `rgba(236,234,227,.86)`),
        (n.font = `700 10px system-ui`),
        (n.textAlign = `center`),
        (n.textBaseline = `top`),
        n.fillText(`N`, r - 17, 26));
    }
    if (t.objectives) {
      let e = t.big ? 15 : 10,
        a = t.layout?.objectiveStyle === `flag`;
      for (let o of t.objectives) {
        if (!o || !o.pos) continue;
        let s = D(o.pos[0], o.pos[2]),
          c = s.x,
          l = s.y;
        if (c < -e || l < -e || c > r + e || l > i + e) continue;
        let u = o.team != null && o.team >= 0;
        if (o.kind === `beacon`) {
          In(
            n,
            c,
            l,
            u ? N(o.team) : `#ECEAE3`,
            t.big,
            t.selectedId != null && o.id === t.selectedId,
          );
          continue;
        }
        if (a && o.id !== `hq`) {
          Ln(
            n,
            o,
            c,
            l,
            u ? N(o.team) : `#D9D6CD`,
            t.big,
            t.selectedId != null && o.id === t.selectedId,
            t.orderId === o.id,
          );
          continue;
        }
        let d = u ? N(o.team) : `rgba(236,234,227,0.45)`;
        (n.beginPath(),
          n.arc(c, l, e, 0, Math.PI * 2),
          (n.fillStyle = `rgba(10,12,14,0.86)`),
          n.fill(),
          (n.lineWidth = t.big ? 3 : 2),
          (n.strokeStyle = d),
          n.stroke(),
          o.contested &&
            (n.beginPath(),
            n.arc(c, l, e + 4, 0, Math.PI * 2),
            (n.strokeStyle = `#E2553F`),
            (n.lineWidth = 1.5),
            n.stroke()),
          o.progress > 0 &&
            o.progress < 1 &&
            (n.beginPath(),
            n.arc(
              c,
              l,
              e + 4,
              -Math.PI / 2,
              -Math.PI / 2 + o.progress * Math.PI * 2,
            ),
            (n.strokeStyle = `#ECEAE3`),
            (n.lineWidth = 2),
            n.stroke()),
          (n.fillStyle = `#ECEAE3`),
          (n.font = `700 ${t.big ? 13 : 10}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`),
          (n.textAlign = `center`),
          (n.textBaseline = `middle`),
          n.fillText(o.letter || `?`, c, l + 0.5),
          t.selectedId != null &&
            o.id === t.selectedId &&
            (n.beginPath(),
            n.arc(c, l, e + 7, 0, Math.PI * 2),
            (n.strokeStyle = `#ECEAE3`),
            (n.lineWidth = 2),
            n.stroke()),
          t.orderId === o.id &&
            ((n.strokeStyle = `#89edac`),
            (n.lineWidth = 2),
            n.strokeRect(c - e - 8, l - e - 8, 2 * e + 16, 2 * e + 16)));
      }
    }
    for (let e of v) {
      if (
        !e?.pos ||
        e.id === t.localId ||
        (e.type !== `soldier` && e.type !== `vehicle`) ||
        e.state & 64
      )
        continue;
      let a = D(e.pos[0], e.pos[2]),
        o = a.x,
        s = a.y;
      if (o < -6 || s < -6 || o > r + 6 || s > i + 6) continue;
      let c = t.squadMembers?.includes(e.owner),
        l = c ? kn().squad : N(e.team),
        u = e.team !== t.allyTeam,
        d =
          u && e.radarPing ? Math.max(0.25, Math.min(1, e.radarAlpha ?? 1)) : 1;
      (n.save(),
        (n.globalAlpha = d),
        (n.fillStyle = l),
        e.type === `vehicle` && !e.radarPing
          ? (n.save(),
            n.translate(o, s),
            n.rotate(-((e.yaw || 0) - S)),
            n.fillRect(-3.5, -4.5, 7, 9),
            n.restore(),
            (n.strokeStyle = `rgba(9,11,13,.7)`),
            (n.lineWidth = 1),
            n.save(),
            n.translate(o, s),
            n.rotate(-((e.yaw || 0) - S)),
            n.strokeRect(-3.5, -4.5, 7, 9),
            n.restore())
          : e.spotted
            ? (n.save(),
              n.translate(o, s),
              n.rotate(Math.PI / 4),
              n.fillRect(-4.5, -4.5, 9, 9),
              (n.strokeStyle = `rgba(9,11,13,.95)`),
              (n.lineWidth = 1.4),
              n.strokeRect(-4.5, -4.5, 9, 9),
              n.restore(),
              (n.strokeStyle = l),
              (n.globalAlpha *= 0.55),
              (n.lineWidth = 1),
              n.beginPath(),
              n.arc(o, s, 7, 0, Math.PI * 2),
              n.stroke())
            : (u && !t.big) || e.radarPing
              ? (n.beginPath(),
                n.arc(o, s, 4.6, 0, Math.PI * 2),
                n.fill(),
                (n.strokeStyle = `rgba(9,11,13,.9)`),
                (n.lineWidth = 1.4),
                n.stroke())
              : (n.save(),
                n.translate(o, s),
                n.rotate(-((e.yaw || 0) - S)),
                n.beginPath(),
                n.moveTo(0, -6),
                n.lineTo(4, 4),
                n.lineTo(0, 2),
                n.lineTo(-4, 4),
                n.closePath(),
                n.fill(),
                (n.strokeStyle = `rgba(9,11,13,.65)`),
                (n.lineWidth = 1),
                n.stroke(),
                n.restore(),
                c &&
                  ((n.strokeStyle = `#89edac`),
                  (n.lineWidth = 1.5),
                  n.beginPath(),
                  n.arc(o, s, 9, 0, Math.PI * 2),
                  n.stroke())));
      let f = Fn(e.pos[1], t.localPos?.[1]);
      (!t.big &&
        f &&
        ((n.fillStyle = l),
        (n.font = `700 10px system-ui`),
        (n.textAlign = `center`),
        (n.textBaseline = `middle`),
        n.fillText(f, o, s + 11)),
        n.restore());
    }
    let P = [];
    if (t.big) {
      let e = [
        ...(t.objectives ?? [])
          .filter((e) => e.pos)
          .map((e) => ({
            x: O(e.pos[0]) - 25,
            y: k(e.pos[2]) - 25,
            w: 50,
            h: 50,
          })),
        ...(t.towers ?? []).map((e) => ({
          x: O(e.pos[0]) - 14,
          y: k(e.pos[2]) - 14,
          w: 28,
          h: 28,
        })),
        ...v
          .filter((e) => e.pos && !(e.state & 64))
          .map((e) => ({
            x: O(e.pos[0]) - 8,
            y: k(e.pos[2]) - 8,
            w: 16,
            h: 16,
          })),
      ];
      for (let a of M?.landmarks ?? []) {
        if (!t.showPlaceNames && a.label !== t.hoverPlace) continue;
        let o = O(a.x),
          s = k(a.z);
        if (o < 0 || s < 0 || o > r || s > i) continue;
        (n.save(),
          (n.strokeStyle = `#efd7a1`),
          (n.lineWidth = 2),
          n.strokeRect(
            O(a.x - a.w / 2) - 2,
            k(a.z - a.d / 2) - 2,
            a.w * _ + 4,
            a.d * _ + 4,
          ),
          (n.font = `700 11px system-ui`));
        let c = n.measureText(a.label).width,
          l = Nn(o, s, c + 12, 22, e, r, i);
        if (!l) {
          n.restore();
          continue;
        }
        let u = l.x + 6,
          d = l.y + 11;
        (P.push({ ...l, label: a.label }),
          n.beginPath(),
          n.moveTo(o, s - 4),
          n.lineTo(u - 4, d + 5),
          n.stroke(),
          (n.font = `700 11px system-ui`),
          (n.textAlign = `left`),
          (n.textBaseline = `middle`),
          (n.fillStyle = `rgba(10,12,14,.94)`),
          n.fillRect(u - 5, d - 10, c + 10, 20),
          (n.fillStyle = `#efd7a1`),
          n.fillText(a.label, u, d),
          n.restore());
      }
    }
    if (t.localPos) {
      let e = D(t.localPos[0], t.localPos[2]),
        r = e.x,
        i = e.y;
      (n.save(), n.translate(r, i), n.rotate(x ? 0 : -(t.heading || 0)));
      let a = t.big ? 1.4 : 1.15;
      (n.beginPath(),
        n.moveTo(0, -7 * a),
        n.lineTo(5 * a, 5 * a),
        n.lineTo(0, 2.5 * a),
        n.lineTo(-5 * a, 5 * a),
        n.closePath(),
        (n.fillStyle = `#ECEAE3`),
        n.fill(),
        (n.strokeStyle = `rgba(9,11,13,0.8)`),
        (n.lineWidth = 1),
        n.stroke(),
        n.restore());
    }
    if (
      ((n.strokeStyle = `rgba(236,234,227,0.22)`),
      (n.lineWidth = 1),
      n.strokeRect(0.5, 0.5, r - 1, i - 1),
      !t.clear)
    ) {
      let e =
          !t.big && g <= 60
            ? 20
            : g >= 600
              ? 500
              : g >= 300
                ? 200
                : g >= 120
                  ? 100
                  : 50,
        a = Math.round(e * _),
        o = i - (t.big ? 16 : 10),
        s = Math.round(r / 2 - a / 2);
      ((n.fillStyle = `rgba(236,234,227,0.7)`),
        n.fillRect(s, o, a, 1),
        n.fillRect(s, o - 3, 1, 4),
        n.fillRect(s + a, o - 3, 1, 4),
        (t.big || (!t.big && g <= 60)) &&
          ((n.fillStyle = `rgba(236,234,227,0.7)`),
          (n.font = `700 10px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`),
          (n.textAlign = `center`),
          (n.textBaseline = `bottom`),
          n.fillText(`${e} M`, s + a / 2, o - 5)));
    }
    return { toX: O, toY: k, scale: _, placeLabels: P };
  }
  return {
    draw: v,
    resize: m,
    setTerrain: _,
    adoptTerrain: g,
    get hasTerrain() {
      return !!s;
    },
    get width() {
      return r;
    },
    get height() {
      return i;
    },
  };
}
