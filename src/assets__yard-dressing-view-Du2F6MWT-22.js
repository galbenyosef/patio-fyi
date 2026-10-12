// assets__yard-dressing-view-Du2F6MWT 22 — math
// Lines 6251-6591 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
var Cr = [
    {
      key: `fencePicket`,
      name: `White picket fence`,
      cat: `fences`,
      desc: `Painted picket fence ~1 m, pointed / dog-ear / gothic pickets, rails behind, optional scalloped runs; gate with strap hinges and gravity latch.`,
      build: Rn,
    },
    {
      key: `fencePrivacy`,
      name: `Dog-ear privacy fence`,
      cat: `fences`,
      desc: `1.8 m dog-ear board fence in cedar, treated, weathered, redwood or brown stain; three 2x4 rails and posts on the back side; braced gate.`,
      build: zn,
    },
    {
      key: `fenceShadowbox`,
      name: `Shadowbox fence`,
      cat: `fences`,
      desc: `Board-on-board 1.8 m fence, good both sides, 2x6 top cap with 1x4 trim, optional kickboards; gate with hinges and latch.`,
      build: Bn,
    },
    {
      key: `fenceHorizontal`,
      name: `Horizontal slat fence`,
      cat: `fences`,
      desc: `Modern horizontal cedar slat fence on black steel or wood posts, tight or gapped 1x4/1x6 slats, steel-framed gate.`,
      build: Vn,
    },
    {
      key: `fenceSplitRail`,
      name: `Split rail fence`,
      cat: `fences`,
      desc: `Rustic 2 or 3 rail split rail on rough-hewn mortised posts, sometimes with welded wire mesh behind; rustic braced gate.`,
      build: Hn,
    },
    {
      key: `gateArbor`,
      name: `Arbor gate`,
      cat: `fences`,
      desc: `Garden gate under a flat-top or arched arbor with shaped tails, ladder / lattice / slat sides, optional picket wings and climbing rose.`,
      build: Kn,
    },
    {
      key: `deckBack`,
      name: `Raised back deck`,
      cat: `decks`,
      desc: `Raised deck 0.6-1.5 m on footings, 6x6 posts, doubled beams, joists; picture-perfect decking, stairs with notched stringers, balustrade, bench or planter.`,
      build: rr,
    },
    {
      key: `deckFront`,
      name: `Front porch deck`,
      cat: `decks`,
      desc: `Low porch / stoop deck, 2-4 risers, handrails, lattice or board skirting; guard rails when over 0.6 m.`,
      build: ir,
    },
    {
      key: `deckSide`,
      name: `Side walkway deck`,
      cat: `decks`,
      desc: `Narrow deck running along a wall, 1.2-1.6 m deep, steps at one end, optional guard and planters.`,
      build: ar,
    },
    {
      key: `deckGround`,
      name: `Ground-level deck`,
      cat: `decks`,
      desc: `Floating ground-level deck on pier blocks with a picture-frame border, no railing.`,
      build: or,
    },
    {
      key: `patioPavers`,
      name: `Paver patio`,
      cat: `decks`,
      desc: `Brick or concrete paver patio in herringbone, basketweave or running bond with a soldier-course border.`,
      build: cr,
    },
    {
      key: `poolHouse`,
      name: `Pool house`,
      cat: `pool`,
      desc: `Cabana ~4 x 3.5 m: lap or board-and-batten siding, shingle or metal roof, French doors or roll-up bar window, porch with ceiling fan, towel hooks, outdoor shower.`,
      build: vr,
    },
    {
      key: `pergola`,
      name: `Pergola`,
      cat: `leisure`,
      desc: `Freestanding post-and-beam pergola over a patio: doubled beams and rafters with shaped tails, knee braces, shade cloth, vine or string lights.`,
      build: br,
    },
    {
      key: `gazebo`,
      name: `Gazebo`,
      cat: `leisure`,
      desc: `Octagonal gazebo on a raised deck: railings, bracketed frieze, shingle roof with hip caps, louvred cupola and finial, entry steps.`,
      build: xr,
    },
    {
      key: `shed`,
      name: `Garden shed`,
      cat: `utility`,
      desc: `Gable or gambrel garden shed ~3 x 2.5 m on skids: T1-11, board-and-batten or lap siding, braced double doors with hardware, window with flower box, ramp.`,
      build: Sr,
    },
  ],
  X = (e = 0, t = 0, n = 0) => new A(e, t, n),
  wr = X(0, 1, 0),
  Tr = 2,
  Er = Math.PI * 2,
  Dr = () => H(13214026, 0.32, 0.9),
  Or = () => H(12896460, 0.22, 0.95),
  kr = [3112242, 3836458, 2039583, 2779706, 4885050, 3112242, 2039583],
  Ar = (e) => ((e = Math.min(1, Math.max(0, e))), e * e * (3 - 2 * e)),
  jr = (e) => e - Math.floor(e),
  Mr = 0.018;
function Nr(e, t, n, r = !0) {
  let i = new v(t, n);
  return ((i.castShadow = r), (i.receiveShadow = !0), e.add(i), i);
}
function Pr(e, t, n) {
  let r = new l();
  return (
    r.setAttribute(`position`, new ne(e, 3)),
    n && r.setAttribute(`uv`, new ne(n, 2)),
    r.setIndex(t),
    r.computeVertexNormals(),
    r
  );
}
function Fr(e, t, n, r = !0, i = 1) {
  let a = r ? [...e, e[0]] : e,
    o = [],
    s = [],
    c = [],
    l = 0;
  return (
    a.forEach(([e, r], u) => {
      u && (l += Math.hypot(e - a[u - 1][0], r - a[u - 1][1]));
      let d = t(e, r),
        f = n(e, r);
      if ((o.push(e, d, r, e, f, r), s.push(l / i, d / i, l / i, f / i), u)) {
        let e = u * 2;
        c.push(e - 2, e - 1, e, e - 1, e + 1, e);
      }
    }),
    Pr(o, c, s)
  );
}
function Ir(e, t, n = 8, r = 1, i = 0, a = 0) {
  let o = e.length,
    s = [i, t(i, a, 0), a],
    c = [i / r, a / r],
    l = [];
  for (let o = 1; o <= n; o++) {
    let l = o / n;
    for (let [n, o] of e) {
      let e = i + (n - i) * l,
        u = a + (o - a) * l;
      (s.push(e, t(e, u, l), u), c.push(e / r, u / r));
    }
  }
  for (let e = 0; e < o; e++) l.push(0, 1 + ((e + 1) % o), 1 + e);
  for (let e = 1; e < n; e++) {
    let t = 1 + (e - 1) * o,
      n = 1 + e * o;
    for (let e = 0; e < o; e++) {
      let r = (e + 1) % o;
      l.push(t + e, n + r, n + e, t + e, t + r, n + r);
    }
  }
  return Pr(s, l, c);
}
function Lr(e, t, n, r, i = 0, a = [], o = 1) {
  let s = new k(t.map(([e, t]) => new _(e, -t)));
  for (let e of a) s.holes.push(new h(e.map(([e, t]) => new _(e, -t))));
  let c = new re(s, { depth: n, bevelEnabled: !1, curveSegments: 4 });
  return (c.rotateX(-Math.PI / 2), c.translate(0, i, 0), Me(c, o), Nr(e, c, r));
}
function Rr(t, n, r = 64, i = !1, a = !1) {
  let o = t.getPointAt
      ? t
      : new e(
          t.map((e) => (e.isVector3 ? e : X(...e))),
          i,
        ),
    s = [],
    c = [],
    l = [],
    u = n.length,
    d = o.getLength(),
    f = X(),
    p = X(),
    m = X(),
    h = 1;
  for (let e = 0; e <= r; e++) {
    let t = e / r,
      i = o.getPointAt(Math.min(t, 1));
    if (
      (o.getTangentAt(Math.min(t, 1), f),
      p.crossVectors(f, wr),
      p.lengthSq() < 1e-6 && p.set(1, 0, 0),
      p.normalize(),
      m.crossVectors(p, f).normalize(),
      e === 0 && a && p.x * i.x + p.z * i.z < 0 && (h = -1),
      n.forEach(([e, n], r) => {
        (s.push(
          i.x + p.x * e * h + m.x * n,
          i.y + p.y * e * h + m.y * n,
          i.z + p.z * e * h + m.z * n,
        ),
          c.push(t * d, r / (u - 1)));
      }),
      e)
    )
      for (let t = 0; t < u - 1; t++) {
        let n = (e - 1) * u + t,
          r = e * u + t;
        l.push(n, r, n + 1, r, r + 1, n + 1);
      }
  }
  return Pr(s, l, c);
}
function Z(e, t, n, r, i, a, o, s = 12) {
  let l = (o.isVector3 ? o.clone() : X(...o)).normalize(),
    u = new v(new c(n, t, r, s), i);
  return (
    u.quaternion.setFromUnitVectors(wr, l),
    u.position.copy(a.isVector3 ? a : X(...a)).addScaledVector(l, r / 2),
    (u.castShadow = u.receiveShadow = !0),
    e.add(u),
    u
  );
}
function zr(e) {
  return e.map((t, n) => {
    let r = e[(n - 1 + e.length) % e.length],
      i = e[(n + 1) % e.length],
      a = i[1] - r[1],
      o = -(i[0] - r[0]),
      s = Math.hypot(a, o) || 1;
    return (
      (a /= s),
      (o /= s),
      a * t[0] + o * t[1] < 0 && ((a = -a), (o = -o)),
      [a, o]
    );
  });
}
var Br = (e, t, n = zr(e)) =>
  e.map((e, r) => [e[0] + n[r][0] * t, e[1] + n[r][1] * t]);
function Vr(e, t, n) {
  let r = (e - t) / 2,
    i = t / 2,
    a = 4 * r + Er * i,
    o = [];
  for (let e = 0; e < n; e++) {
    let t = (e / n) * a;
    if (t < Math.PI * i) {
      let e = -Math.PI / 2 + t / i;
      o.push([r + i * Math.cos(e), i * Math.sin(e)]);
      continue;
    }
    if (((t -= Math.PI * i), t < 2 * r)) {
      o.push([r - t, i]);
      continue;
    }
    if (((t -= 2 * r), t < Math.PI * i)) {
      let e = Math.PI / 2 + t / i;
      o.push([-r + i * Math.cos(e), i * Math.sin(e)]);
      continue;
    }
    ((t -= Math.PI * i), o.push([-r + t, -i]));
  }
  return o;
}
function Hr(e, t, n) {
  let r = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    let [o, s] = e[i],
      [c, l] = e[a];
    s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
  }
  return r;
}
function Ur(e, t) {
  let n = new u();
  for (let r = 0; r < e.count; r++) {
    e.getMatrixAt(r, n);
    let i = n.elements;
    ((i[13] = t(i[12], i[14])), e.setMatrixAt(r, n));
  }
  e.instanceMatrix.needsUpdate = !0;
}
function Wr(e, t = 0) {
  e.updateMatrixWorld(!0);
  let n = new p().setFromObject(e);
  return ((e.position.y += t - n.min.y), n);
}
function Gr(e, t, n, r, i, a = 4872780) {
  let o = [];
  for (let e = 0; e < 28; e++) {
    let a = (e / 28) * Er,
      s = Math.cos(a),
      c = Math.sin(a),
      l = 0.03;
    for (; l < 2.5 && t(n + s * l, r + c * l) < i;) l += 0.03;
    o.push([n + s * l, r + c * l]);
  }
  return (
    Qe(
      e,
      Ir(o, () => 0, 3, 1, n, r),
      0,
      i,
      Ze(a, { opacity: 0.82, scale: 0.7, speed: 0.35 }),
    ),
    o
  );
}
function Kr(e, t, n, r, i, a, o) {
  let s = new T(1, 1),
    c = s.attributes.position,
    l = new Map();
  for (let e = 0; e < c.count; e++) {
    let n = `${c.getX(e).toFixed(3)},${c.getY(e).toFixed(3)},${c.getZ(e).toFixed(3)}`;
    l.has(n) || l.set(n, 0.8 + t() * 0.35);
    let r = l.get(n);
    c.setXYZ(e, c.getX(e) * r, c.getY(e) * r, c.getZ(e) * r);
  }
  return (
    s.scale(
      n * t.range(0.9, 1.3),
      n * t.range(0.55, 0.8),
      n * t.range(0.8, 1.1),
    ),
    s.computeVertexNormals(),
    I(e, s, r, i, a, o, 0, t() * Er, 0)
  );
}
