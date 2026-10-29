/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  Bt as t,
  Dn as n,
  Dt as r,
  Et as i,
  F as a,
  Fn as o,
  Gt as s,
  H as c,
  Hn as l,
  I as u,
  K as d,
  L as f,
  Lt as p,
  Tt as m,
  U as h,
  Ut as g,
  V as _,
  Vn as v,
  Vt as y,
  W as b,
  Zt as x,
  _n as S,
  an as C,
  at as w,
  bn as T,
  cn as E,
  dt as ee,
  gn as te,
  gt as ne,
  hn as D,
  in as re,
  kn as ie,
  mt as ae,
  nn as oe,
  nt as O,
  q as k,
  tt as A,
  v as se,
  vt as ce,
  z as le,
  zt as j,
} from "./graphics-quality-CrL3qbU3.js";
import {
  ANT as ue,
  C as M,
  S as de,
  a as N,
  arrayState as P,
  b as fe,
  c as F,
  d as I,
  domeState as pe,
  g as me,
  i as he,
  l as L,
  laserOn as ge,
  m as R,
  n as z,
  p as _e,
  paneBroken as ve,
  r as B,
  s as ye,
  t as V,
  u as be,
  v as xe,
  x as H,
  y as Se,
} from "./observatory-sim-BDUGU5NF.js";
import { r as U } from "./observatory-rXFc5NOP.js";
var Ce = 60,
  we = (e, t, n) => e + (t - e) * n,
  Te = [1.6, 0, 0.8],
  Ee = class {
    constructor(e, t, n) {
      ((this.n = e),
        (this.i = 0),
        (this.live = 0),
        (this.pos = new Float32Array(e * 3)),
        (this.col = new Float32Array(e * 3)),
        (this.alpha = new Float32Array(e)),
        (this.size = new Float32Array(e)),
        (this.vel = new Float32Array(e * 3)),
        (this.age = new Float32Array(e).fill(1e9)),
        (this.life = new Float32Array(e).fill(1)),
        (this.s0 = new Float32Array(e)),
        (this.s1 = new Float32Array(e)),
        (this.c0 = new Float32Array(e * 3)),
        (this.c1 = new Float32Array(e * 3)),
        (this.a0 = new Float32Array(e)),
        (this.drag = new Float32Array(e)),
        (this.grav = new Float32Array(e)),
        (this.wind = new Float32Array(e)));
      let r = (this.g = new f());
      for (let [e, t, n] of [
        [`position`, this.pos, 3],
        [`aColor`, this.col, 3],
        [`aAlpha`, this.alpha, 1],
        [`aSize`, this.size, 1],
      ])
        r.setAttribute(e, new u(t, n).setUsage(A));
      ((this.points = new re(
        r,
        new T({
          uniforms: { uScale: n },
          transparent: !0,
          depthWrite: !1,
          blending: t ? 2 : 1,
          vertexShader: `attribute vec3 aColor;attribute float aAlpha,aSize;uniform float uScale;varying vec3 vC;varying float vA;
    void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mv;gl_PointSize=aSize*uScale/max(-mv.z,.1);vC=aColor;vA=aAlpha;}`,
          fragmentShader: `varying vec3 vC;varying float vA;void main(){vec2 c=gl_PointCoord*2.0-1.0;float r=dot(c,c);if(r>1.0)discard;float a=1.0-r;gl_FragColor=vec4(vC,vA*a*a);}`,
        }),
      )),
        (this.points.frustumCulled = !1),
        (this.points.visible = !1));
    }
    clear() {
      (this.age.fill(1e9),
        this.alpha.fill(0),
        this.size.fill(0),
        (this.live = 0),
        (this.points.visible = !1));
    }
    spawn(e, t, n, r, i, a, o, s, c, l, u, d, f = 0, p = 0, m = 0) {
      let h = this.i;
      this.i = (h + 1) % this.n;
      let g = h * 3;
      ((this.pos[g] = e),
        (this.pos[g + 1] = t),
        (this.pos[g + 2] = n),
        (this.vel[g] = r),
        (this.vel[g + 1] = i),
        (this.vel[g + 2] = a),
        (this.age[h] = 0),
        (this.life[h] = o),
        (this.s0[h] = s),
        (this.s1[h] = c),
        (this.a0[h] = d),
        (this.drag[h] = f),
        (this.grav[h] = p),
        (this.wind[h] = m));
      for (let e = 0; e < 3; e++)
        ((this.c0[g + e] = l[e]), (this.c1[g + e] = u[e]));
      this.live = 1;
    }
    update(e, t) {
      if (!this.live) return;
      let n = 0;
      for (let r = 0; r < this.n; r++) {
        if (this.age[r] >= this.life[r]) {
          this.alpha[r] !== 0 && ((this.alpha[r] = 0), (this.size[r] = 0));
          continue;
        }
        n = 1;
        let i = (this.age[r] += e),
          a = Math.min(1, i / this.life[r]),
          o = r * 3,
          s = Math.max(0, 1 - this.drag[r] * e);
        ((this.vel[o] *= s),
          (this.vel[o + 1] = this.vel[o + 1] * s + this.grav[r] * e),
          (this.vel[o + 2] *= s));
        let c = this.wind[r] * a;
        ((this.pos[o] += (this.vel[o] + Te[0] * c) * e),
          (this.pos[o + 1] += this.vel[o + 1] * e),
          (this.pos[o + 2] += (this.vel[o + 2] + Te[2] * c) * e),
          this.grav[r] < 0 &&
            this.pos[o + 1] < t + 0.05 &&
            ((this.pos[o + 1] = t + 0.05),
            (this.vel[o + 1] *= -0.3),
            (this.vel[o] *= 0.6),
            (this.vel[o + 2] *= 0.6)),
          (this.size[r] = we(this.s0[r], this.s1[r], 1 - (1 - a) * (1 - a))));
        for (let e = 0; e < 3; e++)
          this.col[o + e] = we(this.c0[o + e], this.c1[o + e], a);
        this.alpha[r] = this.a0[r] * Math.min(1, a / 0.06) * (1 - a) ** 1.4;
      }
      ((this.live = n), (this.points.visible = !!n));
      for (let e of [`position`, `aColor`, `aAlpha`, `aSize`])
        this.g.attributes[e].needsUpdate = !0;
    }
  };
function De(n, r, i, u) {
  if (!i?.meteor) return null;
  let d = i.y,
    m = [],
    h = (...e) => {
      for (let t of e) t && m.push(t);
      return e[0];
    },
    g = new ee();
  ((g.name = `observatory-meteor`), r.add(g));
  let _ = 11,
    v = () => (_ = (Math.imul(_, 1664525) + 1013904223) >>> 0) / 4294967296,
    b = { value: 600 },
    D = new Ee(1600, !0, b),
    oe = new Ee(700, !0, b),
    k = new Ee(420, !1, b),
    se = new Ee(320, !1, b),
    ue = new Ee(520, !1, b),
    M = [D, oe, k, se, ue];
  for (let e of M) (h(e.g, e.points.material), g.add(e.points));
  oe.points.renderOrder = D.points.renderOrder = 3;
  let de = (e, t) => {
      let n = document.createElement(`canvas`);
      n.width = n.height = 128;
      let r = n.getContext(`2d`),
        i = r.createRadialGradient(64, 64, 0, 64, 64, 64);
      (i.addColorStop(0, e),
        i.addColorStop(0.18, e),
        i.addColorStop(0.45, t),
        i.addColorStop(1, `rgba(0,0,0,0)`),
        (r.fillStyle = i),
        r.fillRect(0, 0, 128, 128));
      let a = new le(n);
      return ((a.colorSpace = S), h(a));
    },
    N = (t) => {
      let n = new ie(
        h(new e({ map: t, blending: 2, depthWrite: !1, fog: !1 })),
      );
      return ((n.visible = !1), (n.frustumCulled = !1), g.add(n), n);
    },
    P = N(de(`rgba(255,255,250,1)`, `rgba(170,255,210,.45)`)),
    fe = N(de(`rgba(150,255,200,.6)`, `rgba(60,160,120,.18)`)),
    I = N(de(`rgba(255,250,235,1)`, `rgba(255,200,140,.4)`)),
    pe = new t(
      h(new te(0.92, 1, 96)),
      h(
        new y({
          color: 14207152,
          transparent: !0,
          opacity: 0,
          blending: 2,
          depthWrite: !1,
          side: 2,
        }),
      ),
    );
  ((pe.rotation.x = -Math.PI / 2), (pe.visible = !1), g.add(pe));
  let me = V.MAX_STRIKES,
    ge = new j().makeScale(0, 0, 0),
    R = new ne(new Float32Array(me), 1);
  R.setUsage(A);
  let _e = h(new c(V.RIM_R * 0.95, 64).rotateX(-Math.PI / 2));
  _e.setAttribute(`aHeat`, R);
  let ve = new ce(
    _e,
    h(
      new T({
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
        vertexShader:
          `attribute float aHeat;varying vec2 vU;varying float vH;void main(){vU=vec2(position.x,-position.z)/` +
          (V.RIM_R * 0.95).toFixed(3) +
          `;vH=aHeat;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);}`,
        fragmentShader: `varying vec2 vU;varying float vH;float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
   void main(){float r=length(vU),a=atan(vU.y,vU.x);float edge=.8+.15*n(vec2(a*3.0,1.0))+.08*n(vU*9.0);float sc=smoothstep(edge,edge*.45,r);
    float cr=smoothstep(.45,.6,n(vU*7.0))*smoothstep(.75,0.0,r);vec3 col=mix(vec3(.07,.06,.05),vec3(.02,.016,.012),smoothstep(.6,0.0,r));
    col+=vec3(1.6,.45,.08)*vH*cr;gl_FragColor=vec4(col,sc*.95);}`,
      }),
    ),
    me,
  );
  ((ve.frustumCulled = !1), g.add(ve));
  let be = h(
      (() => {
        let e = new o(V.RIM_R, 0.6, 10, 48);
        (e.rotateX(Math.PI / 2), e.scale(1, V.RIM_H / 0.6, 1));
        let t = e.attributes.position;
        for (let e = 0; e < t.count; e++) {
          let n = Math.atan2(t.getX(e), t.getZ(e)),
            r = 1 + 0.12 * Math.sin(n * 5 + 1);
          t.setXYZ(e, t.getX(e) * r, Math.max(0, t.getY(e)), t.getZ(e) * r);
        }
        return (e.computeVertexNormals(), e);
      })(),
    ),
    xe = new ce(be, h(new s({ color: 4864562, roughness: 1 })), me);
  ((xe.castShadow = xe.receiveShadow = !0), (xe.frustumCulled = !1), g.add(xe));
  let H = new ce(
    h(new ae(0.42, 1).scale(1, 0.8, 1.1)),
    h(new s({ color: 1841172, roughness: 0.9 })),
    me,
  );
  ((H.castShadow = !0), (H.frustumCulled = !1), g.add(H));
  let Se = () => {
      for (let e = 0; e < me; e++)
        (ve.setMatrixAt(e, ge),
          xe.setMatrixAt(e, ge),
          H.setMatrixAt(e, ge),
          R.setX(e, 0));
      for (let e of [ve, xe, H]) e.instanceMatrix.needsUpdate = !0;
      R.needsUpdate = !0;
    },
    U = new x(),
    we = new O(),
    Te = new E(),
    De = (e) => {
      (U.position.set(e.x, d + 0.03, e.z),
        U.rotation.set(0, (e.k * 2.4) % 6.28, 0),
        U.scale.set(1, 1, 1),
        U.updateMatrix(),
        ve.setMatrixAt(e.k, U.matrix),
        (U.position.y = d),
        U.updateMatrix(),
        xe.setMatrixAt(e.k, U.matrix),
        U.position.set(e.x + 0.3, d + 0.15, e.z - 0.2),
        U.updateMatrix(),
        H.setMatrixAt(e.k, U.matrix));
      for (let e of [ve, xe, H]) e.instanceMatrix.needsUpdate = !0;
    };
  Se();
  let W = {
    mesh: new ce(
      h(new a(1, 1, 1)),
      h(new s({ color: 16777215, roughness: 0.85, metalness: 0.15 })),
      600,
    ),
    n: 0,
    i: 0,
    p: [],
    v: [],
    q: [],
    w: [],
    s: [],
    rest: [],
  };
  ((W.mesh.instanceColor = new ne(new Float32Array(1800), 3)),
    (W.mesh.castShadow = !0),
    (W.mesh.count = 0),
    (W.mesh.frustumCulled = !1),
    g.add(W.mesh));
  let Oe = (e, t, n, r, i, a, o, s, c, u, d = !1) => {
      let f = W.i;
      ((W.i = (f + 1) % 600),
        (W.n = Math.max(W.n, f + 1)),
        (W.p[f] = new l(e, t, n)),
        (W.v[f] = new l(r, i, a)),
        (W.q[f] = new E().setFromEuler(we.set(v() * 6, v() * 6, v() * 6))),
        (W.w[f] = new l(v() - 0.5, v() - 0.5, v() - 0.5).multiplyScalar(14)),
        (W.s[f] = new l(o, s, c)),
        (W.rest[f] = d),
        W.mesh.instanceColor.setXYZ(f, ...u),
        (W.dirty = !0));
    },
    ke = (e) => {
      let t = !1;
      for (let n = 0; n < W.n; n++) {
        if (W.rest[n]) continue;
        t = !0;
        let r = W.p[n],
          i = W.v[n];
        ((i.y -= 9.81 * e),
          r.addScaledVector(i, e),
          we.set(W.w[n].x * e, W.w[n].y * e, W.w[n].z * e),
          W.q[n].premultiply(Te.setFromEuler(we)));
        let a = d + Math.min(W.s[n].x, W.s[n].y, W.s[n].z) * 0.5;
        r.y < a &&
          ((r.y = a),
          (i.y *= -0.28),
          (i.x *= 0.55),
          (i.z *= 0.55),
          W.w[n].multiplyScalar(0.5),
          Math.abs(i.y) < 0.8 &&
            i.x * i.x + i.z * i.z < 0.6 &&
            ((W.rest[n] = !0),
            W.q[n].setFromEuler(we.set(0, v() * 6, (v() - 0.5) * 0.3))));
      }
      if (t || W.dirty) {
        W.dirty = !1;
        for (let e = 0; e < W.n; e++)
          (U.position.copy(W.p[e]),
            U.quaternion.copy(W.q[e]),
            U.scale.copy(W.s[e]),
            U.updateMatrix(),
            W.mesh.setMatrixAt(e, U.matrix));
        ((W.mesh.count = W.n),
          (W.mesh.instanceMatrix.needsUpdate = !0),
          (W.mesh.instanceColor.needsUpdate = !0));
      }
    },
    Ae = [0.3, 0.25, 0.23],
    je = [0.12, 0.1, 0.09],
    Me = [0.86, 0.87, 0.89],
    G = () => n.modules.get(`audio`),
    Ne = null,
    Pe = new Map(),
    K = new l(),
    q = new l(),
    Fe = new l(),
    Ie = new l(),
    Le = new l(),
    J = (e, t, n) => {
      let r = Math.min(1, Math.max(0, (t + V.INBOUND) / V.INBOUND)),
        i = V.SPEED * V.INBOUND * (1 - r);
      return n.set(e.x + z[0] * i, e.y + z[1] * i, e.z + z[2] * i);
    },
    Re = () => {
      for (let e of M) e.clear();
      ((W.n = W.i = 0), (W.mesh.count = 0), Pe.clear(), Se(), (_ = 11));
    },
    ze = (e) => {
      let t = Pe.get(e.k);
      return (
        t ||
          Pe.set(
            e.k,
            (t = { landed: !1, fire: [], last: null, prev: null, sndFire: 0 }),
          ),
        t
      );
    };
  function Be(e, t, n) {
    ((t.landed = !0), (_ = (e.impact * 13 + e.k) >>> 0 || 11), De(e));
    for (let n = 0; n < 6; n++) {
      let n = v() * 6.28,
        r = v() * 1.4;
      t.fire.push([e.x + Math.cos(n) * r, d + 0.1, e.z + Math.sin(n) * r]);
    }
    for (let t = 0; t < (n ? 40 : 80); t++) {
      let t = v() * 6.283,
        r = 4 + v() * 14,
        i = 0.1 + v() * v() * 0.6;
      if (n) {
        let n = V.RIM_R + 1 + v() * v() * 24;
        Oe(
          e.x + Math.cos(t) * n,
          d + i * 0.3,
          e.z + Math.sin(t) * n,
          0,
          0,
          0,
          i,
          i * 0.7,
          i,
          v() < 0.4 ? je : Ae,
          !0,
        );
      } else
        Oe(
          e.x + Math.cos(t) * v() * 2,
          d + 0.3,
          e.z + Math.sin(t) * v() * 2,
          Math.cos(t) * r,
          4 + v() * 12,
          Math.sin(t) * r,
          i,
          i * 0.7,
          i,
          v() < 0.4 ? je : Ae,
        );
    }
    if (e.dish)
      for (let t = 0; t < 30; t++) {
        let t = e.dish.x + (v() - 0.5) * 6,
          r = e.dish.z + (v() - 0.5) * 6;
        n
          ? Oe(
              t + (v() - 0.5) * 8,
              d + 0.03,
              r + (v() - 0.5) * 8,
              0,
              0,
              0,
              0.3 + v() * 0.9,
              0.04,
              0.3 + v() * 0.7,
              Me,
              !0,
            )
          : Oe(
              t,
              d + 6 + v() * 4,
              r,
              (v() - 0.5) * 10,
              2 + v() * 6,
              (v() - 0.5) * 10,
              0.3 + v() * 0.9,
              0.04,
              0.3 + v() * 0.7,
              Me,
            );
      }
    if (n) return;
    let r = e.x,
      i = d + 1,
      a = e.z;
    for (let e = 0; e < 200; e++) {
      let e = Ie.set(v() - 0.5, v() * 0.9 + 0.1, v() - 0.5)
        .normalize()
        .multiplyScalar(6 + v() * 22);
      D.spawn(
        r,
        i,
        a,
        e.x,
        e.y,
        e.z,
        0.8 + v() * 1.8,
        0.3,
        0.12,
        [2.2, 1.6, 0.8],
        [0.8, 0.15, 0.02],
        1,
        0.6,
        -9.81,
      );
    }
    for (let e = 0; e < 120; e++) {
      let e = Ie.set(v() - 0.5, v() * 0.7, v() - 0.5)
        .normalize()
        .multiplyScalar(3 + v() * 12);
      se.spawn(
        r,
        i - v(),
        a,
        e.x,
        e.y,
        e.z,
        4 + v() * 6,
        2,
        10 + v() * 6,
        [0.42, 0.36, 0.3],
        [0.24, 0.21, 0.19],
        0.55,
        0.9,
        0.3,
        1,
      );
    }
    for (let e = 0; e < 60; e++) {
      let e = v() * 6.28,
        t = 10 + v() * 10;
      se.spawn(
        r + Math.cos(e) * 6,
        d + 0.6,
        a + Math.sin(e) * 6,
        Math.cos(e) * t,
        0.6,
        Math.sin(e) * t,
        3 + v() * 3,
        1.5,
        7,
        [0.36, 0.3, 0.26],
        [0.2, 0.18, 0.16],
        0.4,
        1.2,
        0,
        1,
      );
    }
    G()?.play(`meteor_impact`, { pos: [r, i, a], volume: 1, priority: 10 });
  }
  let Ve = [
      [-12, d + 5.2, -21],
      [33, d + 9, 14],
    ],
    He = [];
  for (let e of i.array?.antennas ?? [])
    e.fixed || He.push(e.x + 1.9, e.y0 + 3.2, e.z);
  for (let [e, t, n] of Ve) He.push(e, t + 0.6, n);
  let Y = h(new f());
  Y.setAttribute(`position`, new w(He, 3));
  let Ue = new re(
    Y,
    h(
      new C({
        color: 16722456,
        size: 2.2,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: 0,
        blending: 2,
        depthWrite: !1,
        map: P.material.map,
      }),
    ),
  );
  ((Ue.frustumCulled = !1), (Ue.visible = !1), g.add(Ue));
  let X = new t(
    h(new c(1, 48).rotateX(-Math.PI / 2)),
    h(
      new y({
        color: 16756848,
        transparent: !0,
        opacity: 0,
        blending: 2,
        depthWrite: !1,
        map: P.material.map,
      }),
    ),
  );
  ((X.visible = !1), g.add(X));
  let We = 0,
    Ge = -1e9,
    Z = null;
  return {
    update(e) {
      ((e = Math.min(e || 0, 0.1)), (We += e));
      let t = u(),
        r = n.camera,
        a = ye(i);
      if ((a !== Ne && ((Ne = a), Re()), !a.length)) {
        g.visible = !1;
        return;
      }
      ((g.visible = !0),
        r &&
          (b.value =
            (window.innerHeight * Math.min(2, window.devicePixelRatio || 1)) /
            (2 * Math.tan(p.degToRad(r.fov || 60) / 2))));
      for (let e of a) {
        if (t < e.impact) break;
        let n = ze(e);
        if (!n.landed) {
          let r = L(e, t);
          (Be(e, n, n.last == null || r > 0.6),
            n.last == null || r > 0.6 || ((Ge = We), (Z = e)));
        }
      }
      let o = !1,
        s = null;
      for (let n of he(i, t)) {
        let i = ze(n),
          a = L(n, t),
          c = i.last;
        i.last = a;
        for (let t of B) {
          let n = (t.t + a) / t.d;
          if (n < 0 || n > 1) continue;
          let i = Math.sin(Math.PI * n);
          (Ie.fromArray(t.a).multiplyScalar(3200),
            Le.fromArray(t.b).multiplyScalar(3200),
            Fe.lerpVectors(Ie, Le, n),
            r && Fe.add(r.position),
            D.spawn(
              Fe.x,
              Fe.y,
              Fe.z,
              0,
              0,
              0,
              0.12,
              70 * i + 20,
              30,
              [1.3, 1.7, 1.4],
              [1, 0.5, 0.2],
              0.9,
            ),
            v() < e * 40 &&
              ue.spawn(
                Fe.x,
                Fe.y,
                Fe.z,
                (v() - 0.5) * 3,
                (v() - 0.5) * 3,
                (v() - 0.5) * 3,
                16 + v() * 10,
                30,
                110,
                [0.95, 0.85, 0.75],
                [0.78, 0.78, 0.83],
                0.5 * i + 0.1,
                0.05,
                0,
                4,
              ));
        }
        if (a >= -V.INBOUND && a < 0) {
          if (((s = { S: n, s: a }), J(n, a, K), i.prev)) {
            let e = Math.min(40, Math.ceil(K.distanceTo(i.prev) / 8));
            for (let t = 0; t < e; t++)
              (q.lerpVectors(i.prev, K, t / e),
                D.spawn(
                  q.x,
                  q.y,
                  q.z,
                  (v() - 0.5) * 4,
                  (v() - 0.5) * 4,
                  (v() - 0.5) * 4,
                  0.4 + v() * 0.5,
                  9,
                  2,
                  [1.2, 1.7, 1.4],
                  [0.8, 0.22, 0.04],
                  0.3,
                  0.5,
                ),
                t % 2 == 0 &&
                  ue.spawn(
                    q.x,
                    q.y,
                    q.z,
                    (v() - 0.5) * 3,
                    (v() - 0.5) * 3,
                    (v() - 0.5) * 3,
                    26 + v() * 12,
                    14,
                    60,
                    [0.42, 0.38, 0.36],
                    [0.34, 0.34, 0.37],
                    0.55,
                    0.05,
                    0,
                    3,
                  ));
          }
          i.prev = (i.prev ?? new l()).copy(K);
          {
            let e = G()?.hasSample?.(`meteor_roar`) ? -V.INBOUND : -7;
            c != null &&
              c < e &&
              a >= e &&
              G()?.play(`meteor_roar`, { volume: 1, priority: 9 });
          }
          c != null &&
            c < -4.6 &&
            a >= -4.6 &&
            G()?.play(`meteor_boom`, { volume: 1, priority: 10 });
        } else i.prev = null;
        if (a >= 0) {
          let e = Math.exp(-a / 40);
          (R.setX(n.k, e), (o = !0));
        }
        let u = F(n, t);
        if (u > 0 && i.landed) {
          for (let t of i.fire) {
            for (let n = 0; n < 2; n++)
              v() < u * e * 20 &&
                oe.spawn(
                  t[0] + (v() - 0.5) * 0.8,
                  t[1],
                  t[2] + (v() - 0.5) * 0.8,
                  (v() - 0.5) * 0.6,
                  1.5 + v() * 1.5,
                  (v() - 0.5) * 0.6,
                  0.45 + v() * 0.6,
                  0.45 + v() * 0.35,
                  0.12,
                  [1.9, 1, 0.32],
                  [0.6, 0.1, 0.02],
                  0.7,
                  0.5,
                  2.6,
                  0.5,
                );
            v() < e * 2 &&
              D.spawn(
                t[0] + (v() - 0.5),
                t[1] + 0.1,
                t[2] + (v() - 0.5),
                v() - 0.5,
                1 + v() * 2,
                v() - 0.5,
                1.5 + v(),
                0.08,
                0.05,
                [2, 0.8, 0.2],
                [0.6, 0.1, 0],
                1,
                0.3,
                0.8,
                1,
              );
          }
          r &&
            Math.hypot(r.position.x - n.x, r.position.z - n.z) < 70 &&
            We > i.sndFire &&
            ((i.sndFire = We + (G()?.hasSample?.(`meteor_fire`) ? 9.4 : 5.6)),
            G()?.play(`meteor_fire`, {
              pos: [n.x, d + 0.5, n.z],
              volume: u,
              priority: 4,
            }));
        }
        let f =
          a < 0
            ? 0
            : a < V.BURN
              ? Math.min(1, a / 2)
              : 1 - 0.85 * Math.min(1, (a - V.BURN) / (V.SMOKE - V.BURN));
        if (a >= 0 && i.fire.length && v() < f * e * 16) {
          let e = i.fire[(v() * i.fire.length) | 0];
          k.spawn(
            e[0],
            e[1] + 0.5,
            e[2],
            (v() - 0.5) * 0.6,
            2 + v() * 1.4,
            (v() - 0.5) * 0.6,
            11 + v() * 5,
            1.8,
            17 + v() * 6,
            [0.18, 0.14, 0.12],
            [0.32, 0.31, 0.32],
            0.6,
            0.05,
            0.12,
            1,
          );
        }
      }
      o && (R.needsUpdate = !0);
      {
        let e = null;
        for (let n of he(i, t)) {
          let r = L(n, t),
            i = ze(n),
            a = i.lastA;
          if (
            ((i.lastA = r),
            r >= -V.ALARM && r < 1.5 && (e = { S: n, s: r }),
            a != null && a < -V.ALARM && r >= -V.ALARM)
          )
            for (let e of Ve)
              G()?.play(`meteor_alarm`, { pos: e, volume: 1, priority: 8 });
        }
        ((Ue.visible = !!e),
          e &&
            (Ue.material.opacity = Math.sin(We * Math.PI * 4) > 0 ? 1 : 0.08));
        let n = e && e.s > -4 && e.s < 0 ? (e.s + 4) / 4 : 0;
        ((X.visible = n > 0),
          n > 0 &&
            (X.position.set(e.S.x, d + 0.06, e.S.z),
            X.scale.setScalar(3 + n * 9),
            (X.material.opacity =
              Math.min(1, 0.5 + n * 1.2) * (0.85 + 0.15 * Math.sin(We * 40)))));
      }
      if (((P.visible = fe.visible = !!s), s)) {
        let { S: e, s: t } = s,
          n = (t + V.INBOUND) / V.INBOUND,
          i =
            Math.min(1, n / 0.35) *
            (0.6 + 0.4 * n) *
            (0.9 + 0.1 * Math.sin(We * 61));
        J(e, t, K);
        let a = r ? K.distanceTo(r.position) * 0.024 + 8 : 30;
        (P.position.copy(K),
          fe.position.copy(K),
          P.scale.setScalar(a * (0.8 + 0.3 * i)),
          fe.scale.setScalar(a * 4 * (0.6 + 0.5 * i)));
      }
      let c = We - Ge,
        f = c >= 0 ? Math.exp(-c / 0.22) : 0;
      ((I.visible = !!Z && f > 0.02),
        I.visible &&
          (I.position.set(Z.x, d + 3, Z.z),
          I.scale.setScalar(40 + 60 * (1 - f)),
          (I.material.opacity = f)),
        (pe.visible = !!Z && c < 1.6),
        pe.visible &&
          (pe.position.set(Z.x, d + 0.15, Z.z),
          pe.scale.setScalar(4 + c * 70),
          (pe.material.opacity = 0.12 * (1 - c / 1.6))));
      for (let t of M) t.update(e, d);
      ke(e);
    },
    stats() {
      let e = u(),
        t = ye(i),
        n = t.find((t) => t.impact > e),
        r = [...t].reverse().find((t) => t.impact <= e);
      return t.length
        ? {
            landed: t.filter((t) => t.impact <= e).length,
            impactIn: n ? +((n.impact - e) / Ce).toFixed(1) : null,
            next: n ? [n.x, n.z] : null,
            last: r ? [r.x, r.z] : null,
            burning: t.filter((t) => F(t, e) > 0).length,
            dishes: t
              .filter((t) => t.dish && t.impact <= e)
              .map((e) => e.dish.id),
            debris: W.n,
          }
        : null;
    },
    dispose() {
      (r.remove(g), W.mesh.dispose(), ve.dispose(), xe.dispose(), H.dispose());
      for (let e of m) e.dispose?.();
    },
  };
}
var W = (1 + Math.sqrt(5)) / 2,
  Oe = [
    -1,
    W,
    0,
    1,
    W,
    0,
    -1,
    -W,
    0,
    1,
    -W,
    0,
    0,
    -1,
    W,
    0,
    1,
    W,
    0,
    -1,
    -W,
    0,
    1,
    -W,
    W,
    0,
    -1,
    W,
    0,
    1,
    -W,
    0,
    -1,
    -W,
    0,
    1,
  ],
  ke = [
    0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10,
    2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5,
    2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
  ],
  Ae = (() => {
    let e = [],
      t = (e, t, n) => [
        e[0] + (t[0] - e[0]) * n,
        e[1] + (t[1] - e[1]) * n,
        e[2] + (t[2] - e[2]) * n,
      ];
    for (let n = 0; n < ke.length; n += 3) {
      let r = Oe.slice(ke[n] * 3, ke[n] * 3 + 3),
        i = Oe.slice(ke[n + 1] * 3, ke[n + 1] * 3 + 3),
        a = Oe.slice(ke[n + 2] * 3, ke[n + 2] * 3 + 3),
        o = [];
      for (let e = 0; e <= 2; e++) {
        o[e] = [];
        let n = t(r, a, e / 2),
          s = t(i, a, e / 2),
          c = 2 - e;
        for (let r = 0; r <= c; r++)
          o[e][r] = r === 0 && e === 2 ? n : t(n, s, r / c);
      }
      for (let t = 0; t < 2; t++)
        for (let n = 0; n < 2 * (2 - t) - 1; n++) {
          let r = Math.floor(n / 2);
          n % 2 == 0
            ? e.push(o[t][r + 1], o[t + 1][r], o[t][r])
            : e.push(o[t][r + 1], o[t + 1][r + 1], o[t + 1][r]);
        }
    }
    let n = new Float32Array(e.length * 3);
    return (
      e.forEach((e, t) => {
        let r = 1 / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]),
          i = Math.fround(e[0] * r),
          a = Math.fround(e[1] * r),
          o = Math.fround(e[2] * r),
          s =
            0.78 +
            0.42 * Math.abs(Math.sin(i * 3.1 + a * 2.3) * Math.cos(o * 2.7));
        ((n[t * 3] = i * s), (n[t * 3 + 1] = a * s), (n[t * 3 + 2] = o * s));
      }),
      n
    );
  })(),
  je = (e) => ({
    x: e.x,
    y: e.y + e.h * 0.42,
    z: e.z,
    sx: e.w / 2,
    sy: e.h / 2,
    sz: e.d / 2,
    ry: e.ry,
  }),
  Me = (e, t, n) => Math.max(t, Math.min(n, e)),
  G = (e, t, n) => {
    let r = Me((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  };
function Ne() {
  try {
    let e = new URLSearchParams(location.search),
      t = (t) => (e.has(t) ? parseFloat(e.get(t)) : void 0);
    return {
      SIZE: t(`ufoSize`),
      DISTANCE: t(`ufoDist`),
      LIFT: t(`ufoLift`),
      SHADOW: t(`ufoShadow`),
      BEAMS: e.has(`ufoBeams`) ? e.get(`ufoBeams`) !== `0` : null,
    };
  } catch {
    return null;
  }
}
function Pe(r, i, d, p) {
  let h = xe(Ne()),
    g = d.y,
    _ = [],
    b = (...e) => {
      for (let t of e) t && _.push(t);
      return e[0];
    },
    S = r.modules.get(`environment`),
    C = new ee();
  ((C.name = `observatory-ufo`), (C.visible = !1), i.add(C));
  let w = 0.92 * (r.camera?.far || 4e3),
    D = Math.min(h.DISTANCE, w / (1 + (806 * h.SIZE) / 2500)),
    ae = (h.SIZE * D) / 2500,
    O = new ee(),
    j = new ee();
  (O.add(j), C.add(O));
  let ue = new l(...I);
  (O.quaternion.setFromAxisAngle(ue, -0.22), O.scale.setScalar(ae));
  let N = b(
    new s({ color: 1381915, roughness: 0.5, metalness: 0.75, fog: !1 }),
  );
  {
    let e = [],
      n = [
        [0, -55],
        [120, -60],
        [300, -52],
        [520, -40],
        [700, -22],
        [800, -6],
        [806, 0],
        [792, 6],
        [650, 22],
        [420, 42],
        [200, 60],
        [60, 76],
        [0, 80],
      ].map(([e, t]) => new v(e, t));
    e.push(new m(n, 128));
    for (let [t, n] of [
      [300, -53],
      [520, -41],
      [680, -25],
    ]) {
      let r = new o(t, 7, 8, 128);
      (r.rotateX(Math.PI / 2), r.translate(0, n, 0), e.push(r));
    }
    for (let t = 0; t < 24; t++) {
      let n = (t / 24) * Math.PI * 2,
        r = new a(380, 8, 14);
      (r.rotateY(-n),
        r.translate(Math.cos(n) * 470, -46, Math.sin(n) * 470),
        e.push(r));
    }
    let r = b(se(e.map((e) => (e.index ? e.toNonIndexed() : e))));
    e.forEach((e) => e.dispose());
    let i = new t(r, N);
    ((i.frustumCulled = !1), j.add(i));
  }
  let P = [];
  for (let e = 0; e < 120; e++) {
    let t = (e / 120) * Math.PI * 2;
    P.push({ p: [Math.cos(t) * 803, 0, Math.sin(t) * 803], ring: 0, a: t });
  }
  for (let e = 0; e < 48; e++) {
    let t = (e / 48) * Math.PI * 2;
    P.push({ p: [Math.cos(t) * 560, -40, Math.sin(t) * 560], ring: 1, a: t });
  }
  for (let e = 0; e < 16; e++) {
    let t = (e / 16) * Math.PI * 2;
    P.push({ p: [Math.cos(t) * 200, -60, Math.sin(t) * 200], ring: 2, a: t });
  }
  let F = new ce(
    b(new n(5, 8, 6)),
    b(new y({ color: 16777215, fog: !1 })),
    P.length,
  );
  ((F.instanceColor = new ne(new Float32Array(P.length * 3), 3)),
    (F.frustumCulled = !1));
  {
    let e = new x();
    P.forEach((t, n) => {
      (e.position.set(...t.p), e.updateMatrix(), F.setMatrixAt(n, e.matrix));
    });
  }
  j.add(F);
  let pe = { uT: { value: 0 }, uOn: { value: 0 } };
  {
    let e = new t(
      b(new c(150, 64)),
      b(
        new T({
          uniforms: pe,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
          side: 2,
          vertexShader: `varying vec2 vU;void main(){vU=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
          fragmentShader: `varying vec2 vU;uniform float uT,uOn;void main(){float r=length(vU);float ring=exp(-pow((r-.55-.05*sin(uT*.7))/.06,2.0));
    float a=(smoothstep(1.0,0.0,r)*.25+ring*.7)*uOn*(.8+.2*sin(uT*1.9));gl_FragColor=vec4(vec3(.55,.75,1.0),a);}`,
        }),
      ),
    );
    ((e.rotation.x = Math.PI / 2),
      (e.position.y = -61),
      (e.frustumCulled = !1),
      j.add(e));
  }
  let he = {
      uC: { value: new l() },
      uSun: { value: new l(..._e) },
      uN: { value: new l(0, 1, 0) },
      uR: { value: 806 * ae },
      uAmt: { value: 0 },
    },
    L = new t(
      b(new oe(U[2] - U[0], U[3] - U[1]).rotateX(-Math.PI / 2)),
      b(
        new T({
          uniforms: he,
          transparent: !0,
          depthWrite: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -6,
          fog: !1,
          vertexShader: `varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
          fragmentShader: `varying vec3 vW;uniform vec3 uC,uSun,uN;uniform float uR,uAmt;
   void main(){float nd=dot(uSun,uN);if(abs(nd)<1e-3)discard;float t=dot(uC-vW,uN)/nd;if(t<=0.0)discard;vec3 h=vW+uSun*t;
    float e=1.0-smoothstep(uR*.82,uR,length(h-uC));gl_FragColor=vec4(.02,.025,.04,e*uAmt);}`,
        }),
      ),
    );
  (L.position.set((U[0] + U[2]) / 2, g + 0.05, (U[1] + U[3]) / 2),
    (L.renderOrder = 2),
    (L.visible = !1),
    i.add(L));
  let ge = b(new k(0.02, 1, 1, 32, 1, !0));
  ge.translate(0, -0.5, 0);
  let z = [];
  for (let e = 0; e < 4; e++) {
    let n = (e / 4) * Math.PI * 2 + 0.4,
      r = b(
        new T({
          uniforms: { uA: { value: 0 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec2 vUv;varying vec3 vN,vV;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.0);vN=normalize(normalMatrix*normal);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}`,
          fragmentShader: `varying vec2 vUv;varying vec3 vN,vV;uniform float uA;void main(){float f=pow(abs(dot(normalize(vN),normalize(vV))),2.0);gl_FragColor=vec4(vec3(.85,.9,1.0),uA*f*(.3+.7*vUv.y));}`,
        }),
      ),
      i = new t(ge, r);
    ((i.frustumCulled = !1),
      (i.visible = !1),
      C.add(i),
      z.push({
        cone: i,
        a: n,
        ph: e * 1.7,
        on: R.BEAM_ON + e * 2.5,
        emit: new l(Math.cos(n) * 300, -58, Math.sin(n) * 300),
      }));
  }
  let ve = b(
      (() => {
        let e = document.createElement(`canvas`);
        e.width = e.height = 64;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
        return (
          n.addColorStop(0, `rgba(255,255,255,1)`),
          n.addColorStop(0.6, `rgba(255,255,255,.55)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 64, 64),
          new le(e)
        );
      })(),
    ),
    B = new ce(
      b(new oe(1, 1).rotateX(-Math.PI / 2)),
      b(
        new y({
          map: ve,
          color: 12110079,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -8,
        }),
      ),
      4,
    );
  ((B.instanceColor = new ne(new Float32Array(12), 3)),
    (B.frustumCulled = !1),
    (B.visible = !1),
    i.add(B));
  let ye = S?.skyDome?.material?.uniforms ?? null,
    V = [`uZenith`, `uHorizon`, `uHaze`],
    be = {},
    Ce = {},
    we = (e) => {
      if (ye)
        for (let t of V) {
          let n = ye[t]?.value;
          n?.isColor &&
            ((!Ce[t] || !n.equals(Ce[t])) && (be[t] = n.clone()),
            n.copy(be[t]).multiplyScalar(1 - e),
            (Ce[t] = n.clone()));
        }
    },
    Te = [`uSunDisc`, `uSunGlow`],
    Ee = {},
    De = {},
    W = new E(),
    Oe = (e) => {
      if (ye)
        for (let t of Te) {
          let n = ye[t];
          n &&
            typeof n.value == `number` &&
            ((De[t] === void 0 || Math.abs(n.value - De[t]) > 1e-6) &&
              (Ee[t] = n.value),
            (De[t] = n.value = Ee[t] * (1 - Math.min(1, e * 1.1))));
        }
    },
    ke = { uA: { value: 0 }, uSun: { value: new v(1, 0) } },
    Ae = new t(
      b(new te(806 * 0.99, 1249.3, 192, 1).rotateX(-Math.PI / 2)),
      b(
        new T({
          uniforms: ke,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec2 vP;void main(){vP=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
          fragmentShader: `varying vec2 vP;uniform float uA;uniform vec2 uSun;void main(){float r=length(vP)/806.0;float a=smoothstep(.99,1.0,r)*pow(1.0-smoothstep(1.0,1.55,r),2.2);float s=.5+.5*max(0.0,dot(vP/max(length(vP),1.0),uSun));vec3 c=mix(vec3(1.0,.62,.38),vec3(1.0,.95,.86),1.0-smoothstep(1.0,1.18,r));gl_FragColor=vec4(c,uA*a*(.35+.65*s));}`,
        }),
      ),
    );
  ((Ae.frustumCulled = !1), (Ae.visible = !1), O.add(Ae));
  let je = new t(
    b(new k(1, 0.15, 1, 24, 1, !0).translate(0, 0.5, 0)),
    b(
      new T({
        uniforms: { uA: { value: 0 } },
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2,
        fog: !1,
        vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
        fragmentShader: `varying vec2 vUv;uniform float uA;void main(){gl_FragColor=vec4(vec3(.8,.9,1.0),uA*pow(1.0-vUv.y,1.5));}`,
      }),
    ),
  );
  ((je.frustumCulled = !1), (je.visible = !1), C.add(je));
  let Me = new ie(
    b(
      new e({
        map: ve,
        color: 15660287,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
  );
  ((Me.frustumCulled = !1), (Me.visible = !1), C.add(Me));
  let Pe = new l(30, g, 12),
    K = new t(
      b(new k(1, 1, 1, 48, 1, !0).translate(0, -0.5, 0)),
      b(
        new T({
          uniforms: { uA: { value: 0 }, uT: { value: 0 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec2 vUv;varying vec3 vN,vV;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.0);vN=normalize(normalMatrix*normal);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}`,
          fragmentShader: `varying vec2 vUv;varying vec3 vN,vV;uniform float uA,uT;void main(){float f=pow(abs(dot(normalize(vN),normalize(vV))),1.5);float band=.75+.25*sin(vUv.y*60.0+uT*3.0);
   gl_FragColor=vec4(vec3(.7,.85,1.0),uA*f*band*(.25+.75*smoothstep(1.0,0.0,vUv.y)));}`,
        }),
      ),
    );
  ((K.frustumCulled = !1), (K.visible = !1), C.add(K));
  let q = new Float32Array(2100),
    Fe = new Float32Array(700);
  for (let e = 0; e < 700; e++) {
    let t = e * 2.399,
      n = Math.sqrt((e % 97) / 97) * 9;
    ((q[e * 3] = Math.cos(t) * n * 0.6),
      (q[e * 3 + 1] = ((e * 37) % 400) / 400),
      (q[e * 3 + 2] = Math.sin(t) * n * 0.6),
      (Fe[e] = 2 + ((e * 13) % 10) / 3));
  }
  let Ie = new f();
  (Ie.setAttribute(`position`, new u(q, 3).setUsage(A)), b(Ie));
  let Le = {
      uScale: { value: 450 },
      uA: { value: 0 },
      uT: { value: 0 },
      uWide: { value: 0 },
    },
    J = new re(
      Ie,
      b(
        new T({
          uniforms: Le,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
          vertexShader: `uniform float uScale,uT,uWide;varying float vTw;void main(){vec3 p=position;p.y*=p.y;p.xz*=1.0+uWide*p.y;vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;float ph=fract(sin(float(gl_VertexID)*12.9898)*43758.5);vTw=.15+.85*pow(.5+.5*sin(uT*(3.0+5.0*ph)+ph*40.0),3.0);gl_PointSize=.7*uScale/max(-mv.z,.1);}`,
          fragmentShader: `uniform float uA;varying float vTw;void main(){vec2 c=gl_PointCoord*2.0-1.0;float r=dot(c,c);if(r>1.0)discard;float a=(1.0-r);a*=a;gl_FragColor=vec4(vec3(.75,.88,1.0)+vec3(.5)*a,.85*uA*vTw*a);}`,
        }),
      ),
    );
  ((J.frustumCulled = !1), (J.visible = !1), i.add(J));
  let Re = null,
    ze = -1,
    Be = h.GLOW ?? 160,
    Ve = (e, t, n, i) => {
      $ - ze < 0.03 ||
        ((ze = $),
        r.modules.get(`effects`)?.light?.(e, t, n, 12572927, i, 70, 0.045, 0));
    },
    He = 0,
    Y = 7,
    Ue = () => (Y = (Math.imul(Y, 1664525) + 1013904223) >>> 0) / 4294967296,
    X = () => r.modules.get(`audio`),
    We = null,
    Ge = null,
    Z = null,
    Ke = -1e9,
    qe = 0,
    Je = null,
    Ye = null,
    Xe = null,
    Ze = null,
    Q = 0,
    Qe = (e) => {
      let t = S?.sunLight,
        n = S?.hemiLight;
      (t &&
        ((Ye === null || Math.abs(t.intensity - Ye) > 1e-6) &&
          (Je = t.intensity),
        (Ye = t.intensity = Je * (1 - h.SHADOW * e))),
        n &&
          ((Ze === null || Math.abs(n.intensity - Ze) > 1e-6) &&
            (Xe = n.intensity),
          (Ze = n.intensity = Xe * (1 - 0.75 * h.SHADOW * e))));
    },
    $e = new l(..._e),
    et = new l(0, 1, 0),
    tt = new l(),
    nt = 0,
    rt = (e) => {
      if (nt <= 0) return 0;
      let t = $e.dot(et);
      if (Math.abs(t) < 0.001) return 0;
      let n = tt.copy(O.position).sub(e).dot(et) / t;
      return n <= 0
        ? 0
        : (tt.copy(e).addScaledVector($e, n).sub(O.position),
          1 - G(nt * 0.82, nt, tt.length()));
    },
    it = new l(),
    at = new l(),
    ot = new E(),
    st = new l(),
    ct = () => st.set(0, -61, 0).applyMatrix4(j.matrixWorld),
    lt = 0,
    ut = 1,
    dt = -1,
    ft = new l(0, 1, 0),
    pt = [0, 0, 0],
    mt = new x(),
    ht = new l(),
    gt = new l(0, -1, 0),
    $ = 0;
  return {
    update(e) {
      ((e = Math.min(e || 0, 0.1)), ($ += e));
      let t = p(),
        n = r.camera;
      if (lt < 4) {
        lt++;
        let e = lt < 4;
        C.visible = L.visible = B.visible = J.visible = e;
        for (let t of z) t.cone.visible = e;
        ((K.visible = Ae.visible = e),
          e && (O.scale.setScalar(0.001), O.position.set(0, g - 500, 0)));
        return;
      }
      let i = fe(d, t, h),
        a = !!i && M(i.T);
      C.visible = a;
      {
        let e = $ - Ke,
          t = r.camera,
          n = r.modules.get(`effects`);
        if (e >= 0 && e < 3 && t && n?.spawn && $ - He >= 0.05) {
          He = $;
          let r = 5 + e * 55,
            i = Math.atan2(t.position.x, t.position.z);
          for (let a = 0; a < 4; a++) {
            let a = i + (Ue() - 0.5) * 1.4,
              o = Math.sin(a) * r,
              s = Math.cos(a) * r;
            Math.hypot(o - t.position.x, s - t.position.z) > 70 ||
              n.spawn(
                `trainGust`,
                [o, g + 0.15, s],
                [Math.sin(a), 0, Math.cos(a)],
                { count: 7, speed: 16 * (1 - e / 4), scale: 2, flakes: 2 },
              );
          }
        }
      }
      if (!a) {
        (Q > 0 && ((Q = Math.max(0, Q - e * 0.5)), Qe(Q)),
          (L.visible = B.visible = J.visible = !1),
          we(0.8 * h.SHADOW * Q),
          Oe(Q),
          (Ge = null),
          (We = null));
        return;
      }
      let o = i.T;
      O.visible = o < R.GONE;
      {
        let e = o - 0.6,
          t = o - R.JUMP,
          n = e >= 0 && e < 2.5 ? e : t >= 0 && t < 2.5 ? t : -1;
        ((Me.visible = n >= 0),
          Me.visible && (Me.material.opacity = Math.max(0, 1 - n / 2.5) * 1.2),
          (dt = n));
      }
      H(o, h, D, pt);
      {
        let e = Math.hypot(...pt),
          t = Math.min(1, (w - 806 * ae) / e);
        ((pt[0] *= t), (pt[1] *= t), (pt[2] *= t), (ut = t));
      }
      (O.position.set(pt[0], g + pt[1], pt[2]),
        Me.visible &&
          (Me.position.copy(O.position),
          Me.scale.setScalar(806 * ae * ut * (1.4 + 1.6 * dt))));
      {
        let e = de(o, h);
        if (((je.visible = !!e), e)) {
          let t = 806 * ae * ut * (3 + 10 * e.k);
          (je.position.copy(O.position),
            je.quaternion.setFromUnitVectors(
              ft,
              tt.set(-e.dir[0], -e.dir[1], -e.dir[2]),
            ),
            je.scale.set(806 * ae * ut * 0.55, t, 806 * ae * ut * 0.55),
            (je.material.uniforms.uA.value = 0.9 * Math.min(1, e.k * 3 + 0.2)));
        }
      }
      (O.scale.setScalar(ae * ut),
        (j.rotation.y = o * 0.006),
        O.updateMatrixWorld(),
        et.set(0, 1, 0).applyQuaternion(O.quaternion),
        (nt = O.visible ? 806 * O.scale.x : 0));
      let s = n ? rt(n.position) : 0;
      ((Q += (s - Q) * Math.min(1, e * 4)),
        Qe(Q),
        he.uC.value.copy(O.position),
        he.uN.value.copy(et),
        (he.uR.value = nt),
        (he.uAmt.value = 0.7 * h.SHADOW),
        (L.visible = nt > 0));
      for (let e = 0; e < P.length; e++) {
        let t = P[e],
          n,
          r,
          i;
        if (t.ring === 0) {
          let e = Math.max(0, Math.cos(t.a * 6 - o * 0.9)) ** 8;
          ((n = 0.6 + 2.4 * e), (r = 0.38 + 1.5 * e), (i = 0.15 + 0.4 * e));
        } else if (t.ring === 1) {
          let e = 0.5 + 0.5 * Math.sin(o * 1.3 + t.a * 2);
          ((n = 0.3 * e), (r = 0.7 * e), (i = 2 * e));
        } else
          n =
            r =
            i =
              0.4 +
              2.4 *
                (G(R.BEAM_ON - 10, R.BEAM_ON, o) *
                  (1 - G(R.BEAM_OFF, R.BEAM_OFF + 8, o)));
        F.instanceColor.setXYZ(e, n, r, i);
      }
      ((F.instanceColor.needsUpdate = !0),
        (pe.uT.value = o),
        (pe.uOn.value =
          G(R.STOP - 12, R.STOP, o) * (1 - G(R.LEAVE, R.JUMP, o))),
        Z === i.k &&
          Ge != null &&
          Ge < R.RISE &&
          o >= R.RISE &&
          ((Ke = $),
          X()?.play(`ufo_arrive`, { volume: 1, priority: 10 }),
          r.modules.get(`player`)?.shakeView?.(1.3)),
        Z === i.k &&
          Ge != null &&
          Ge < R.LEAVE &&
          o >= R.LEAVE &&
          X()?.play(`ufo_depart`, { volume: 1, priority: 9 }),
        Z === i.k &&
          Ge != null &&
          Ge < R.JUMP &&
          o >= R.JUMP &&
          (X()?.play(`ufo_arrive`, { volume: 0.9, priority: 10 }),
          r.modules.get(`player`)?.shakeView?.(0.9),
          (Ke = $)),
        (Ge = o),
        (Z = i.k));
      let c = G(0, R.RISE + 6, o) * (1 - G(R.JUMP - 4, R.JUMP, o));
      (c > 0.05 &&
        $ >= qe &&
        ((qe = $ + (X()?.hasSample?.(`ufo_hum`) ? 16.5 : 7)),
        X()?.play(`ufo_hum`, { volume: 0.35 + 0.65 * c, priority: 7 })),
        we(0.8 * h.SHADOW * Q),
        (Ae.visible = Q > 0.02),
        Ae.visible &&
          ((ke.uA.value = Math.min(1, Q * 1.3)),
          ht.set(..._e).applyQuaternion(W.copy(O.quaternion).invert()),
          ke.uSun.value.set(ht.x, ht.z).normalize()),
        Oe(Q));
      {
        let t = me(d, i.k, o),
          a = t ? t.on : 0;
        if (
          ((K.visible = J.visible = a > 0.01),
          t &&
            (Pe.set(t.x, g, t.z),
            J.position.set(t.x, g, t.z),
            t.i !== We &&
              a > 0.5 &&
              ((We = t.i),
              X()?.play(`ufo_tractor`, {
                pos: [t.x, g + 8, t.z],
                volume: 1,
                priority: 6,
              }),
              n &&
                Math.hypot(n.position.x - t.x, n.position.z - t.z) < 45 &&
                r.modules.get(`player`)?.shakeView?.(0.6))),
          (K.visible = !1),
          J.visible)
        ) {
          let t = ct(),
            i = Math.max(5, tt.copy(t).sub(Pe).length());
          (J.quaternion.setFromUnitVectors(ft, tt.normalize()),
            J.scale.set(1, i, 1),
            J.matrixWorld.compose(J.position, J.quaternion, J.scale));
          for (let t = 0; t < 700; t++)
            ((q[t * 3 + 1] += (Fe[t] * e * 7) / i),
              q[t * 3 + 1] > 1 && --q[t * 3 + 1]);
          ((Ie.attributes.position.needsUpdate = !0),
            (Le.uA.value = a),
            (Le.uT.value = $),
            (Le.uWide.value = 3),
            (Le.uScale.value =
              ((r.renderer?.domElement?.clientHeight || innerHeight) * 0.5) /
              Math.tan(((n?.fov || 70) * Math.PI) / 360)));
        }
        let s = Re && $ - Re.t < 0.25 ? Re : null;
        t &&
          a > 0.01 &&
          (s ? Ve(s.x, s.y, s.z, Be * a) : Ve(t.x, g + 8, t.z, Be * a));
      }
      let u = !1;
      (z.forEach((t, n) => {
        let i = h.BEAMS
          ? G(t.on, t.on + 0.6, o) *
            (1 - G(R.BEAM_OFF - 4 + t.ph, R.BEAM_OFF + t.ph, o))
          : 0;
        if (((t.cone.visible = i > 0.001), !t.cone.visible)) {
          (mt.scale.set(0, 0, 0),
            mt.updateMatrix(),
            B.setMatrixAt(n, mt.matrix));
          return;
        }
        u = !0;
        let a =
            o < t.on + 1.2 ? (Math.sin(o * 60 + t.ph) > -0.2 ? 1 : 0.15) : 1,
          s = ht.copy(t.emit).applyMatrix4(j.matrixWorld),
          c = o * 0.05 + t.ph,
          d = Math.sin(c * 1.3) * 80 + Math.sin(c * 0.37) * 20 - 15,
          f = Math.sin(c * 2.1 + 0.6) * 40 - 2;
        if ($ >= (t.until ?? 0)) {
          t.until = $ + 4 + ((n * 7 + Math.floor($)) % 5);
          let e = (r.world?.byType?.(`soldier`) ?? []).filter(
            (e) =>
              e.hp > 0 &&
              Math.abs(e.pos[1] - g) < 20 &&
              Math.abs(e.pos[0]) < 100 &&
              Math.abs(e.pos[2]) < 60,
          );
          (e.sort(
            (e, t) =>
              Math.hypot(e.pos[0] - d, e.pos[2] - f) -
              Math.hypot(t.pos[0] - d, t.pos[2] - f),
          ),
            (t.prey = e[n % Math.max(1, Math.min(3, e.length))]?.id ?? null));
        }
        let p = t.prey == null ? null : r.world?.get?.(t.prey),
          m = p && p.hp > 0 ? [p.pos[0], p.pos[2]] : [d, f];
        ((t.tx = t.tx ?? m[0]), (t.tz = t.tz ?? m[1]));
        let _ = Math.min(1, e * 1.6);
        ((t.tx += (m[0] - t.tx) * _), (t.tz += (m[1] - t.tz) * _));
        let v = t.tx,
          y = t.tz,
          b = new l(v, g, y).clone().sub(s),
          x = b.length();
        b.divideScalar(x);
        let S = x * Math.tan(0.014) * 1.05;
        (t.cone.position.copy(s),
          t.cone.quaternion.setFromUnitVectors(gt, b),
          t.cone.scale.set(S, x, S),
          (t.cone.material.uniforms.uA.value = 0.22 * i * a * (0.4 + 0.6 * Q)),
          mt.position.set(v, g + 0.06, y),
          mt.rotation.set(0, 0, 0),
          mt.scale.set(Math.min(S, 14) * 2, 1, Math.min(S, 14) * 2),
          mt.updateMatrix(),
          B.setMatrixAt(n, mt.matrix));
        let C = 0.16 * i * a * (0.25 + 0.75 * Q);
        B.instanceColor.setXYZ(n, C, C, C);
      }),
        (B.visible = u),
        (B.instanceMatrix.needsUpdate = !0),
        (B.instanceColor.needsUpdate = !0));
    },
    liftFrame(e, t) {
      let n = Se(d, e, t, h);
      if (n <= 0) return null;
      if (n >= 1 || !O.visible) return { gone: !0 };
      let r = ct(),
        i = n ** 3.2,
        a = it.copy(r).sub(at.set(e.x, e.y0, e.z)),
        o = a.length();
      a.multiplyScalar(1 / o);
      let s = new E().slerp(ot.setFromUnitVectors(ft, a), G(0, 0.45, n)),
        c = {
          x: e.x + a.x * o * i,
          y0: e.y0 + a.y * o * i,
          z: e.z + a.z * o * i,
          q: s,
          az: n * 2.5,
          el: Math.PI / 2 - Math.sin(n * 3) * 0.35,
          k: n,
        };
      return (
        at.set(0, 8.4, 0).applyQuaternion(s),
        (Re = { x: c.x + at.x, y: c.y0 + at.y, z: c.z + at.z, t: $ }),
        c
      );
    },
    stats() {
      let e = fe(d, p(), h);
      return {
        pass: e?.k ?? null,
        T: e ? +e.T.toFixed(1) : null,
        up: !!e && M(e.T),
        eclipse: +Q.toFixed(2),
        sparkles: {
          on: J.visible,
          at: [
            Math.round(J.position.x),
            Math.round(J.position.y),
            Math.round(J.position.z),
          ],
          opacity: +Le.uA.value.toFixed(2),
        },
        distance: Math.round(D),
        knobs: {
          SIZE: h.SIZE,
          DISTANCE: h.DISTANCE,
          LIFT: h.LIFT,
          SHADOW: h.SHADOW,
          BEAMS: h.BEAMS,
        },
      };
    },
    dispose() {
      (we(0),
        Oe(0),
        Je != null && S?.sunLight && (S.sunLight.intensity = Je),
        Xe != null && S?.hemiLight && (S.hemiLight.intensity = Xe),
        i.remove(C),
        i.remove(L),
        i.remove(B),
        i.remove(J),
        F.dispose(),
        B.dispose());
      for (let e of _) e.dispose?.();
    },
  };
}
function K(
  e,
  n,
  {
    inner: r = 40,
    outer: i = 7200,
    rings: a = 56,
    spokes: o = 144,
    seed: s = 4242,
  } = {},
) {
  let c = s >>> 0,
    l = () => (c = (Math.imul(c, 1664525) + 1013904223) >>> 0) / 4294967296,
    u = new Float32Array(4096).map(() => l()),
    d = (e, t) => {
      let n = Math.floor(e),
        r = Math.floor(t),
        i = e - n,
        a = t - r,
        o = (e, t) => u[(t & 63) * 64 + (e & 63)],
        s = i * i * (3 - 2 * i),
        c = a * a * (3 - 2 * a);
      return (
        (o(n, r) * (1 - s) + o(n + 1, r) * s) * (1 - c) +
        (o(n, r + 1) * (1 - s) + o(n + 1, r + 1) * s) * c
      );
    },
    p = (e, t, n) => {
      let r = d(e / 420, t / 420),
        i = d(e / 150 + 17, t / 150 - 9),
        a = d(e / 55 - 31, t / 55 + 5);
      return (
        (r * r * 80 + i * i * 38 + a * 9) * (0.75 + 0.5 * Math.min(1, n / 2500))
      );
    },
    m = n - 125,
    h = [],
    _ = [],
    v = [],
    y = new b(),
    x = new b(9607342),
    S = new b(16512236);
  for (let e = 0; e <= a; e++) {
    let t = r * (i / r) ** +(e / a);
    for (let n = 0; n < o; n++) {
      let r = (n / o) * Math.PI * 2 + (e * 0.37) / o,
        i = Math.cos(r) * t,
        a = Math.sin(r) * t,
        s = p(i, a, t);
      if (
        (h.push(i, m + s - Math.max(0, (t - 5600) / 1600) * 260, a),
        y.copy(x).lerp(S, Math.min(1, 0.1 + s / 70)),
        _.push(y.r, y.g, y.b),
        e)
      ) {
        let t = e * o + n,
          r = e * o + ((n + 1) % o);
        v.push(t - o, r - o, t, r - o, r, t);
      }
    }
  }
  let C = new f();
  (C.setAttribute(`position`, new w(h, 3)),
    C.setAttribute(`color`, new w(_, 3)),
    C.setIndex(v),
    C.computeVertexNormals());
  let T = new g({ vertexColors: !0 }),
    E = new t(C, T);
  return (
    (E.name = `obs-cloud-sea`),
    (E.receiveShadow = !1),
    (E.castShadow = !1),
    (E.frustumCulled = !1),
    (E.renderOrder = -6),
    e.add(E),
    {
      mesh: E,
      dispose() {
        (e.remove(E), C.dispose(), T.dispose());
      },
    }
  );
}
var q = (e, t, n, r = [1, 1]) => {
  let i = document.createElement(`canvas`);
  ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
  let a = new le(i);
  return (
    (a.wrapS = a.wrapT = D),
    a.repeat.set(...r),
    (a.colorSpace = S),
    (a.anisotropy = 8),
    a
  );
};
function Fe(p, g, S, ne) {
  let D = S.observatory,
    ae = [],
    O = (...e) => {
      for (let t of e) t && ae.push(t);
      return e[0];
    },
    A = (S.climate?.tod ?? 1.5) < 5,
    le = 21,
    M = () => (le = (Math.imul(le, 1664525) + 1013904223) >>> 0) / 4294967296,
    de = p.modules.get(`terrain`),
    fe = (e, t) => de?.getHeight?.(e, t) ?? D.y,
    F = new ee();
  ((F.name = `observatory`), g.add(F));
  let I = new ee();
  ((I.name = `observatory-live`), (I.userData.dynamicShadow = !0), g.add(I));
  let me = O(
      q(1024, 512, (e, t, n) => {
        ((e.fillStyle = `#e9ecef`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < 2500; r++)
          ((e.fillStyle = `rgba(${M() < 0.5 ? `120,125,130` : `255,255,255`},${M() * 0.08})`),
            e.fillRect(M() * t, M() * n, 2 + M() * 6, 1 + M() * 3));
        ((e.strokeStyle = `rgba(90,96,104,.55)`), (e.lineWidth = 2));
        for (let r = 0; r <= 48; r++) {
          let i = (r / 48) * t;
          (e.beginPath(), e.moveTo(i, 0), e.lineTo(i, n), e.stroke());
        }
        for (let r = 0; r <= 6; r++) {
          let i = (r / 6) * n;
          (e.beginPath(), e.moveTo(0, i), e.lineTo(t, i), e.stroke());
        }
        for (let r = 0; r < 60; r++) {
          let r = M() * t,
            i = M() * n * 0.6,
            a = e.createLinearGradient(0, i, 0, i + 80);
          (a.addColorStop(0, `rgba(110,100,90,.18)`),
            a.addColorStop(1, `rgba(110,100,90,0)`),
            (e.fillStyle = a),
            e.fillRect(r, i, 3, 80));
        }
      }),
    ),
    he = O(
      q(
        1024,
        256,
        (e, t, n) => {
          ((e.fillStyle = `#dde0e4`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `rgba(80,86,94,.35)`));
          for (let r = 0; r < t; r += 16) e.fillRect(r, 0, 2, n);
          ((e.fillStyle = `#4a5058`),
            e.fillRect(0, 22, t, 34),
            (e.fillStyle = `rgba(200,205,210,.8)`));
          for (let n = 24; n < 56; n += 5) e.fillRect(0, n, t, 1.5);
          e.fillStyle = `rgba(70,60,50,.18)`;
          for (let n = 0; n < 40; n++)
            e.fillRect(M() * t, 60, 2, 40 + M() * 140);
        },
        [3, 1],
      ),
    ),
    L = O(
      q(64, 64, (e) => {
        let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
        (t.addColorStop(0, `rgba(255,255,255,1)`),
          t.addColorStop(0.3, `rgba(255,255,255,.45)`),
          t.addColorStop(1, `rgba(255,255,255,0)`),
          (e.fillStyle = t),
          e.fillRect(0, 0, 64, 64));
      }),
    );
  L.wrapS = L.wrapT = h;
  let R = {
      dome: O(new s({ map: me, roughness: 0.42, metalness: 0.2, side: 0 })),
      domeInner: O(
        new s({
          map: me,
          color: 6975096,
          roughness: 0.75,
          metalness: 0.35,
          side: 1,
        }),
      ),
      drum: O(new s({ map: he, roughness: 0.6, metalness: 0.15, side: 2 })),
      steel: O(new s({ color: 6975608, roughness: 0.45, metalness: 0.8 })),
      dark: O(new s({ color: 2303531, roughness: 0.5, metalness: 0.6 })),
      mirror: O(new s({ color: 13161702, roughness: 0.08, metalness: 1 })),
      tube: O(new s({ color: 3822978, roughness: 0.38, metalness: 0.5 })),
      fork: O(new s({ color: 7110560, roughness: 0.45, metalness: 0.45 })),
      concrete: O(new s({ color: 9341830, roughness: 0.9 })),
      rock: O(new s({ color: 6049349, roughness: 0.95, flatShading: !0 })),
      white: O(new s({ color: 15264494, roughness: 0.4, side: 2 })),
      wood: O(new s({ color: 4864556, roughness: 0.9 })),
      glass: O(
        new s({
          color: 9416904,
          roughness: 0.05,
          metalness: 0.3,
          transparent: !0,
          opacity: 0.18,
          depthWrite: !1,
        }),
      ),
      gravel: O(new s({ color: 9076338, roughness: 1, side: 2 })),
    },
    z = (e) => ((e.castShadow = !0), (e.receiveShadow = !0), e),
    _e = [],
    B = (t, n, r = 1) => {
      let i = new ie(
        O(
          new e({
            map: L,
            color: t,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            opacity: r,
            fog: !1,
          }),
        ),
      );
      return (i.scale.setScalar(n), i);
    },
    V = [],
    xe = [],
    H = [],
    Se = [];
  for (let e of D.domes) {
    let { x: t, z: n, r, drumH: i } = e,
      s = e.y0;
    Math.min(0.9, 1.25 / r);
    let c = Math.max(48, Math.round(r * 6)),
      l = D.buildings.find((t) => t.id === e.id)?.panelH ?? i;
    if (i > l)
      for (let e of [r + 0.15, r - 0.15]) {
        let r = new k(e, e, i - l, c, 1, !0);
        (r.translate(t, s + l + (i - l) / 2, n), V.push(r));
      }
    (Se.push(
      new k(r + 0.6, r + 0.9, 0.8, 48, 1, !0).translate(t, s + 0.1, n),
      new te(r, r + 0.6, 48).rotateX(-Math.PI / 2).translate(t, s + 0.5, n),
    ),
      xe.push(
        new te(r, r + 1.6, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i + 0.01, n),
        new te(r, r + 1.6, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i - 0.2, n),
      ),
      H.push(
        new o(r + 1.55, 0.05, 6, 72)
          .rotateX(Math.PI / 2)
          .translate(t, s + i + 1.03, n),
        new o(r + 1.55, 0.04, 6, 72)
          .rotateX(Math.PI / 2)
          .translate(t, s + i + 0.54, n),
      ));
    for (let e = 0; e < 6.283; e += 0.35)
      H.push(
        new a(0.05, 1, 0.05).translate(
          t + Math.sin(e) * (r + 1.55),
          s + i + 0.5,
          n + Math.cos(e) * (r + 1.55),
        ),
      );
    if (
      (xe.push(
        new k(r + 1.6, r + 1.6, 0.21, 64, 1, !0).translate(t, s + i - 0.095, n),
      ),
      e.laser)
    ) {
      xe.push(
        new te(e.r - 1.6, e.r - 0.2, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i - 0.39, n),
        new te(e.r - 1.6, e.r - 0.2, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i - 0.6, n),
        new k(e.r - 1.6, e.r - 1.6, 0.21, 64, 1, !0).translate(
          t,
          s + i - 0.495,
          n,
        ),
      );
      for (let r = 0; r < 40; r++) {
        let o = (r / 40) * Math.PI * 2,
          c = ((r + 0.5) / 40) * Math.PI * 2;
        Math.abs(Math.atan2(Math.sin(c - Math.PI), Math.cos(c - Math.PI))) <
          0.12 ||
          H.push(
            new a(0.05, 1, 0.05).translate(
              t + Math.sin(o) * (e.r - 1.6),
              s + i - 0.4 + 0.5,
              n + Math.cos(o) * (e.r - 1.6),
            ),
          );
      }
      H.push(
        new o(e.r - 1.6, 0.04, 6, 64)
          .rotateX(Math.PI / 2)
          .translate(t, s + i + 0.63, n),
      );
    }
    let u = Math.PI * 0.78,
      d = t + Math.sin(u) * (r + 0.25),
      f = n + Math.cos(u) * (r + 0.25);
    for (let e of [-0.22, 0.22])
      H.push(
        new a(0.05, i + 1, 0.05).translate(
          d + Math.cos(u) * e,
          s + (i + 1) / 2,
          f - Math.sin(u) * e,
        ),
      );
    for (let e = 0.3; e < i; e += 0.3)
      H.push(
        new a(0.5, 0.03, 0.03).rotateY(-u + Math.PI / 2).translate(d, s + e, f),
      );
  }
  let U = (e, n, r) => {
    let i = O(se(e.map((e) => (e.index ? e.toNonIndexed() : e))));
    e.forEach((e) => e.dispose());
    let a = z(new t(i, n));
    return ((a.name = r), F.add(a), a);
  };
  if (
    (U(V, R.drum, `obs-drums`),
    U(Se, R.concrete, `obs-plinths`),
    U(
      xe,
      O(new s({ color: 9080726, roughness: 0.6, metalness: 0.6, side: 2 })),
      `obs-decks`,
    ),
    U(H, O(new s({ color: 13214247, roughness: 0.6 })), `obs-rails`),
    D.obsFloors?.length)
  ) {
    let e = [];
    for (let t of D.obsFloors) {
      let n = D.domes.find((e) => e.id === t.id);
      if (n)
        for (let r of [-0.015, -0.19])
          e.push(
            new te(t.ri, t.ro, 96)
              .rotateX(-Math.PI / 2)
              .translate(n.x, t.y + r, n.z),
          );
    }
    e.length &&
      U(
        e,
        O(
          new s({
            color: 3949120,
            roughness: 0.85,
            metalness: 0.2,
            flatShading: !0,
            side: 2,
          }),
        ),
        `obs-floor-edge`,
      );
  }
  function Ce(e, t) {
    let r = new n(e, 72, 24, 0, Math.PI * 2, 0, Math.PI / 2).toNonIndexed(),
      i = r.attributes.position,
      a = r.attributes.uv,
      o = { shell: [[], []], shut: [[], []], wind: [[], []] };
    for (let n = 0; n < i.count; n += 3) {
      let r = (i.getX(n) + i.getX(n + 1) + i.getX(n + 2)) / 3,
        s = (i.getY(n) + i.getY(n + 1) + i.getY(n + 2)) / 3,
        c = (i.getZ(n) + i.getZ(n + 1) + i.getZ(n + 2)) / 3,
        l =
          Math.abs(r) < t / 2 && c > -e * 0.28
            ? s < e * Math.sin(Math.PI / 8) && c > 0
              ? `wind`
              : `shut`
            : `shell`;
      for (let e = 0; e < 3; e++)
        (o[l][0].push(i.getX(n + e), i.getY(n + e), i.getZ(n + e)),
          o[l][1].push(a.getX(n + e), a.getY(n + e)));
    }
    r.dispose();
    let s = ([e, t]) => {
      let n = new f();
      return (
        n.setAttribute(`position`, new w(e, 3)),
        n.setAttribute(`uv`, new w(t, 2)),
        n.computeVertexNormals(),
        O(n)
      );
    };
    return { shell: s(o.shell), shut: s(o.shut), wind: s(o.wind) };
  }
  let we = D.domes.map((e) => {
    let n = new ee();
    (n.position.set(e.x, e.y0 + e.drumH, e.z), I.add(n));
    let r = Ce(e.r, e.slotW),
      i = (e) => {
        let n = new t(e, R.domeInner);
        return ((n.receiveShadow = !0), n);
      };
    n.add(
      z(new t(r.shell, R.dome)),
      z(new t(r.wind, R.dome)),
      i(r.shell),
      i(r.wind),
    );
    let s = z(new t(r.shut, R.dome));
    (s.add(i(r.shut)), n.add(s));
    for (let r of [-1, 1])
      n.add(
        new t(
          O(
            new o(e.r * 1.003, 0.14, 6, 60, Math.PI * 0.62)
              .rotateY(-Math.PI / 2)
              .translate((r * e.slotW) / 2, 0, 0),
          ),
          R.steel,
        ),
      );
    n.add(
      new t(O(new o(e.r * 1.002, 0.18, 6, 96).rotateX(Math.PI / 2)), R.steel),
    );
    let l = (e.floorY || 0) + 0.6,
      u = z(
        new t(
          O(new k(Math.max(0.9, e.r * 0.15), Math.max(1.1, e.r * 0.18), l, 16)),
          R.concrete,
        ),
      );
    (u.position.set(e.x, e.y0 + l / 2, e.z), F.add(u));
    let d = new ee();
    (d.position.set(e.x, e.y0 + l, e.z),
      I.add(d),
      d.add(z(new t(O(new k(e.r * 0.22, e.r * 0.22, 0.6, 24)), R.steel))));
    for (let n of [-1, 1]) {
      let r = e.r * 0.06 + 0.2,
        i = e.r * 0.38,
        o = e.r * 0.14,
        s = new ee();
      (s.position.set(n * e.r * 0.25, e.r * 0.19, 0),
        d.add(s),
        s.add(z(new t(O(new a(r, i, o)), R.fork))));
      for (let e of [-1, 1]) {
        let n = new t(O(new a(0.02, i * 0.6, o * 0.55)), R.dark);
        (n.position.set(e * (r / 2 + 0.005), -i * 0.05, 0), s.add(n));
      }
      for (let e of [-i / 2, i / 2 - 0.06]) {
        let n = new t(O(new a(r * 1.08, 0.08, o * 1.06)), R.steel);
        ((n.position.y = e + 0.04), s.add(n));
      }
      let c = new t(
        O(new k(o * 0.32, o * 0.32, r * 1.3, 20).rotateZ(Math.PI / 2)),
        R.steel,
      );
      ((c.position.y = e.r * 0.13), s.add(c));
    }
    let f = new ee();
    ((f.position.y = e.r * 0.32), d.add(f));
    let p = e.r * 0.95,
      m = e.r * 0.17,
      h = z(new t(O(new k(m * 1.1, m, p * 0.18, 24)), R.tube));
    ((h.position.y = -p * 0.3), f.add(h));
    let g = new t(O(new c(m * 0.92, 32).rotateX(-Math.PI / 2)), R.mirror);
    ((g.position.y = -p * 0.3 + p * 0.09 + 0.01), f.add(g));
    for (let e of [-p * 0.2, p * 0.25]) {
      let n = new t(O(new o(m, m * 0.08, 8, 28).rotateX(Math.PI / 2)), R.tube);
      ((n.position.y = e), f.add(n));
    }
    let _ = z(new t(O(new k(m * 1.02, m * 1.02, p * 0.08, 24, 1, !0)), R.tube));
    ((_.position.y = p * 0.72), f.add(_));
    let v = O(new k(m * 0.035, m * 0.035, p * 0.95, 5));
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2,
        r = new t(v, R.dark);
      (r.position.set(Math.cos(n) * m, p * 0.25, Math.sin(n) * m), f.add(r));
    }
    for (let e of [0, 1]) {
      let n = new t(O(new a(e ? 0.03 : m * 2, 0.03, e ? m * 2 : 0.03)), R.dark);
      ((n.position.y = p * 0.72), f.add(n));
    }
    let y = new t(O(new k(m * 0.25, m * 0.25, p * 0.12, 12)), R.dark);
    ((y.position.y = p * 0.72), f.add(y));
    let b = null,
      x = null,
      S = null;
    if (e.laser && A) {
      let e = O(new k(3.2, 0.3, 3600, 16, 1, !0));
      e.translate(0, 1800 + p * 0.8, 0);
      let n = O(
        new T({
          uniforms: { amp: { value: 1 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec3 vN; varying vec3 vV; varying float vH; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vH = uv.y; gl_Position = projectionMatrix * viewMatrix * wp; }`,
          fragmentShader: `uniform float amp; varying vec3 vN; varying vec3 vV; varying float vH;
     void main(){ float c = pow(abs(dot(normalize(vN), normalize(vV))), 2.5); float fall = mix(1.0, 0.15, smoothstep(0.0, 0.7, vH));
      gl_FragColor = vec4(vec3(1.0, 0.55, 0.12) * c * fall * amp * 0.55, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
     }`,
        }),
      );
      ((b = new t(e, n)),
        (b.frustumCulled = !1),
        f.add(b),
        (x = B(16752688, 4)),
        (x.position.y = p * 0.8),
        f.add(x),
        (S = B(16760928, 90)),
        (S.position.y = 3600),
        f.add(S));
    }
    if (e.floorY) {
      let t =
        (D.obsFloors?.find((t) => t.id === e.id)?.y ?? e.y0 + e.floorY) + 0.04;
      for (let [n, r, i, a] of [
        [-0.3, 0.2, 16723992, 0.55],
        [0.4, -0.3, 16763024, 0.4],
      ]) {
        let o = 8 / Math.hypot(n, r);
        _e.push({
          x: e.x + n * o,
          y: t,
          z: e.z + r * o,
          r: 4,
          col: i,
          gain: a,
        });
      }
    }
    return {
      D: e,
      rot: n,
      shutter: s,
      fork: d,
      tube: f,
      laser: b,
      launch: x,
      star: S,
    };
  });
  {
    let e = S.landmarks.find((e) => e.id === `control`);
    if (e)
      for (let t of [-8, 6])
        _e.push({
          x: e.x + t,
          y: D.y + 0.14,
          z: e.z + 1.5,
          r: 5,
          col: 8035024,
          gain: 0.3,
        });
  }
  let Te = [];
  for (let [e, r] of (D.dishes ?? []).entries()) {
    let i = new ee();
    (i.position.set(r.x, r.y + r.s * 0.8, r.z),
      F.add(i),
      Te.push({ g: i, base: 0.6 + e * 1.7, rate: 0.05 + e * 0.03 }));
    let a = z(
      new t(
        O(new n(r.s, 32, 12, 0, Math.PI * 2, Math.PI * 0.62, Math.PI * 0.38)),
        R.white,
      ),
    );
    (a.rotation.set(Math.PI + 0.75, 0, 0), i.add(a));
    let o = new t(O(new k(0.06, 0.06, r.s * 0.9, 5)), R.steel);
    (o.position.set(0, -r.s * 0.55, 0), a.add(o));
  }
  let Ee = O(new a(1, 1, 1)),
    W = new ce(Ee, R.glass, Math.max(1, D.panes.length));
  W.name = `obs-glass`;
  let Oe = new j(),
    ke = new E(),
    Me = new l(),
    G = new l(),
    Ne = new j().makeScale(0, 0, 0),
    Fe = (e, t) =>
      W.setMatrixAt(
        e,
        Oe.compose(
          Me.set((t[0] + t[3]) / 2, (t[1] + t[4]) / 2, (t[2] + t[5]) / 2),
          ke,
          G.set(t[3] - t[0], t[4] - t[1], t[5] - t[2]),
        ),
      );
  (D.panes.forEach((e, t) => Fe(t, e.box)),
    (W.count = D.panes.length),
    (W.instanceMatrix.needsUpdate = !0),
    W.computeBoundingSphere(),
    g.add(W));
  let Ie = -1,
    Le = () => {
      let e = D.broken?.size ?? 0;
      e !== Ie &&
        ((Ie = e),
        D.panes.forEach((e, t) =>
          ve(D, e.id) ? W.setMatrixAt(t, Ne) : Fe(t, e.box),
        ),
        (W.instanceMatrix.needsUpdate = !0));
    },
    J = O(
      (() => {
        let e = new f();
        return (
          e.setAttribute(`position`, new u(Ae.slice(), 3)),
          e.computeVertexNormals(),
          e
        );
      })(),
    );
  {
    let e = [
        ...D.rocks.map(je),
        ...(D.cliffRocks ?? []).map((e) => ({
          x: e.x,
          y: fe(e.x, e.z) - e.s * 0.15,
          z: e.z,
          sx: e.s * 0.6,
          sy: e.s * 0.4,
          sz: e.s * 0.55,
          ry: e.ry,
        })),
      ],
      t = new ce(J, R.rock, e.length),
      n = new x();
    (e.forEach((e, r) => {
      (n.position.set(e.x, e.y, e.z),
        n.rotation.set(0, e.ry, 0),
        n.scale.set(e.sx, e.sy, e.sz),
        n.updateMatrix(),
        t.setMatrixAt(r, n.matrix));
    }),
      (t.castShadow = t.receiveShadow = !0),
      (t.name = `obs-rocks`),
      F.add(t));
  }
  {
    let e = (e, t) =>
        !D.domes.some((n) => Math.hypot(e - n.x, t - n.z) < n.r + 1.8) &&
        !D.buildings.some(
          (n) =>
            e > n.box[0] - 0.6 &&
            e < n.box[2] + 0.6 &&
            t > n.box[1] - 0.6 &&
            t < n.box[3] + 0.6,
        ),
      t = [];
    for (let n = 0; n < 4200 && t.length < 1800; n++) {
      let n = -90 + M() * 180,
        r = -43 + M() * 86;
      if (!e(n, r)) continue;
      let i = 0.05 + M() ** 3 * 0.14;
      t.push([n, D.y + i * 0.25, r, i]);
    }
    let n = new ce(J, R.rock, t.length),
      r = new x();
    (t.forEach(([e, t, i, a], o) => {
      (r.position.set(e, t, i),
        r.rotation.set(M(), M() * 6.28, M()),
        r.scale.set(a * (0.8 + M() * 0.5), a * 0.6, a * (0.8 + M() * 0.5)),
        r.updateMatrix(),
        n.setMatrixAt(o, r.matrix));
    }),
      (n.receiveShadow = !0),
      (n.name = `obs-pebbles`),
      F.add(n));
  }
  let Re = new t(
    O(new n(3400, 48, 24)),
    O(
      new T({
        side: 1,
        depthWrite: !1,
        depthTest: !0,
        transparent: !0,
        blending: 2,
        fog: !1,
        vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `varying vec3 vD;
   float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
   float noise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z); }
   float fbm(vec3 p){ float a = 0.0, s = 0.5; for (int i = 0; i < 6; i++){ a += noise(p) * s; p *= 2.07; s *= 0.5; } return a; }
   void main(){ vec3 d = normalize(vD); float h = d.y; if (h < -0.02) discard;
    vec3 N = normalize(vec3(0.42, 0.30, 0.86)), C = normalize(vec3(0.35, 0.22, -0.91));
    float b = dot(d, N), band = exp(-b * b / 0.022), wide = exp(-b * b / 0.09), core = exp(-pow(distance(d, C), 2.0) / 0.2);
    float cloud = fbm(d * 7.0), fine = fbm(d * 30.0), knots = smoothstep(0.55, 0.85, fbm(d * 14.0 + 7.0));
    float dust = smoothstep(0.40, 0.66, fbm(d * 10.0 + 3.0)) * exp(-b * b / 0.004);
    float mw = band * (0.15 + 1.7 * cloud * cloud + 0.5 * fine + 0.8 * knots) * (1.0 + 3.2 * core) * (1.0 - 0.9 * dust);
    vec3 col = wide * vec3(0.012, 0.013, 0.018) + mw * vec3(0.62, 0.66, 0.82) * 0.11 + core * band * vec3(0.55, 0.40, 0.22) * 0.12 * (1.0 - dust);
    col *= smoothstep(-0.02, 0.12, h);
    gl_FragColor = vec4(col, 1.0);
   }`,
      }),
    ),
  );
  ((Re.renderOrder = -10),
    (Re.frustumCulled = !1),
    (Re.name = `obs-milky-way`),
    (Re.visible = A),
    g.add(Re));
  let ze = (() => {
      let e = [],
        t = [];
      for (let n = 0; n < 5500; n++) {
        let n = M() * 2 - 1,
          r = M() * Math.PI * 2,
          i = Math.sqrt(1 - n * n),
          a = [Math.cos(r) * i, Math.abs(n), Math.sin(r) * i];
        if (a[1] < 0.02) continue;
        e.push(a[0] * 3300, a[1] * 3300, a[2] * 3300);
        let o = 0.12 + M() ** 4 * 0.5,
          s = M();
        t.push(o * (s < 0.2 ? 1 : 0.9), o * 0.93, o * (s > 0.7 ? 1 : 0.85));
      }
      let n = O(new f());
      (n.setAttribute(`position`, new w(e, 3)),
        n.setAttribute(`color`, new w(t, 3)));
      let r = new re(
        n,
        O(
          new C({
            size: 1.1,
            opacity: 0.6,
            sizeAttenuation: !1,
            vertexColors: !0,
            fog: !1,
            depthWrite: !1,
            transparent: !0,
          }),
        ),
      );
      return (
        (r.frustumCulled = !1),
        (r.renderOrder = -9),
        (r.visible = A),
        g.add(r),
        r
      );
    })(),
    Be = O(
      q(256, 256, (e) => {
        let t = e.createRadialGradient(128, 128, 30, 128, 128, 128);
        (t.addColorStop(0, `rgba(255,240,210,.35)`),
          t.addColorStop(1, `rgba(255,240,210,0)`),
          (e.fillStyle = t),
          e.fillRect(0, 0, 256, 256),
          e.save(),
          e.beginPath(),
          e.arc(128, 128, 40, 0, 7),
          e.clip(),
          (e.fillStyle = `#fff4dc`),
          e.fill(),
          (e.globalCompositeOperation = `destination-out`),
          e.beginPath(),
          e.arc(146, 120, 38, 0, 7),
          e.fill(),
          e.restore());
      }),
    );
  Be.wrapS = Be.wrapT = h;
  let Ve = new l(-0.85, 0.12, -0.3).normalize(),
    He = new ie(
      O(new e({ map: Be, fog: !1, depthWrite: !1, transparent: !0 })),
    );
  (He.scale.setScalar(300), (He.renderOrder = -8), (He.visible = A), g.add(He));
  let Y = new t(
    O(new oe(1, 1)),
    O(
      new y({
        color: 14674175,
        transparent: !0,
        opacity: 0,
        blending: 2,
        depthWrite: !1,
        fog: !1,
        side: 2,
      }),
    ),
  );
  (Y.scale.set(260, 5, 1),
    (Y.renderOrder = -8),
    (Y.frustumCulled = !1),
    (Y.visible = A),
    g.add(Y));
  let Ue = -1,
    X = new l(),
    We = new l(),
    Ge = [0, 1, 2, 3].map(() => {
      let e = B(16777215, 9);
      return (
        (e.renderOrder = -8),
        (e.visible = A),
        g.add(e),
        {
          s: e,
          a: M() * 6.28,
          b: M() * 6.28,
          v: 0.004 + M() * 0.004,
          k: 0.6 + M() * 0.3,
        }
      );
    }),
    Z = [];
  {
    let e = -48,
      t = 1;
    Z.push(new l(-40, 0, -46));
    for (let n = 0; n < 4; n++) {
      let n = e,
        r = e - 28;
      for (let e = 1; e <= 30; e++) {
        let i = e / 30;
        Z.push(new l(-95 + 190 * (t > 0 ? i : 1 - i), 0, n + (r - n) * i));
      }
      ((e = r), (t = -t));
    }
    for (let e of Z) e.y = fe(e.x, e.z) + 0.35;
  }
  {
    let e = [],
      n = [];
    for (let t = 0; t < Z.length; t++) {
      let r = Z[Math.max(0, t - 1)],
        i = Z[Math.min(Z.length - 1, t + 1)],
        a = i.x - r.x,
        o = i.z - r.z,
        s = Math.hypot(a, o) || 1,
        c = ((-o / s) * 6) / 2,
        l = ((a / s) * 6) / 2;
      for (let n of [-1, 1]) {
        let r = Z[t].x + c * n,
          i = Z[t].z + l * n;
        e.push(r, fe(r, i) + 0.3, i);
      }
      if (t) {
        let e = t * 2;
        n.push(e - 2, e - 1, e, e - 1, e + 1, e);
      }
    }
    let r = O(new f());
    (r.setAttribute(`position`, new w(e, 3)),
      r.setIndex(n),
      r.computeVertexNormals());
    let i = new t(r, R.gravel);
    ((i.receiveShadow = !0), (i.name = `obs-road`), F.add(i));
  }
  let Ke = new _(Z.slice().reverse()),
    qe = new ee();
  F.add(qe);
  {
    let e = new t(O(new a(4, 1.6, 1.9)), R.dark);
    ((e.position.y = 1.1), qe.add(e));
    for (let e of [-0.7, 0.7]) {
      let t = B(16773328, 3.4);
      (t.position.set(2.05, 1, e), qe.add(t));
      let n = B(16719888, 1.3);
      (n.position.set(-2.05, 1, e), qe.add(n));
    }
  }
  for (let e of D.domes) {
    let n = D.buildings.find((t) => t.id === e.id)?.panelH;
    if (!n || n > e.drumH - 2) continue;
    let r = O(
      q(1024, 128, (t, n, r) => {
        (t.clearRect(0, 0, n, r),
          (t.fillStyle = `rgba(28,58,110,.95)`),
          (t.font = `bold 92px sans-serif`),
          (t.textAlign = `center`),
          t.fillText(e.name.toUpperCase(), n / 2, 100));
      }),
    );
    r.wrapS = r.wrapT = h;
    let i = Math.min(14, e.r * 0.9),
      a = i / (e.r + 0.06),
      o = Math.atan2(-e.x, -e.z),
      c = O(new k(e.r + 0.06, e.r + 0.06, i / 8, 24, 1, !0, o - a / 2, a)),
      l = new t(
        c,
        O(new s({ map: r, transparent: !0, roughness: 0.6, side: 0 })),
      );
    (l.position.set(e.x, e.y0 + (n + e.drumH) / 2 + 0.3, e.z), F.add(l));
  }
  {
    let e = [
        [-40, -48],
        [-58, -56],
        [-76, -66],
        [-92, -80],
        [-70, -100],
        [-40, -112],
        [-10, -122],
        [20, -130],
      ],
      n = [];
    for (let [r, i] of e) {
      let e = fe(r, i),
        o = new t(O(new k(0.12, 0.16, 9, 6)), R.wood ?? R.dark);
      (o.position.set(r, e + 4.5, i), F.add(o));
      let s = new t(O(new a(2.2, 0.12, 0.12)), R.dark);
      (s.position.set(r, e + 8.6, i), F.add(s), n.push(new l(r, e + 8.6, i)));
    }
    let o = O(new r({ color: 1316378 }));
    for (let e of [-1, 1]) {
      let t = [];
      for (let r = 0; r < n.length - 1; r++) {
        let i = n[r],
          a = n[r + 1];
        for (let n = 0; n <= 8; n++) {
          let r = n / 8;
          t.push(
            new l(
              i.x + (a.x - i.x) * r + e * 0.9,
              i.y + (a.y - i.y) * r - Math.sin(r * Math.PI) * 1.2,
              i.z + (a.z - i.z) * r,
            ),
          );
        }
      }
      let r = new i(O(new f().setFromPoints(t)), o);
      F.add(r);
    }
  }
  let Je = new ee();
  (Je.position.set(2.8, D.y + 11.6, 32), F.add(Je));
  for (let e = 0; e < 3; e++) {
    let r = (e / 3) * Math.PI * 2,
      i = new t(O(new a(0.5, 0.02, 0.02)), R.steel);
    (i.position.set(Math.cos(r) * 0.25, 0, Math.sin(r) * 0.25),
      (i.rotation.y = -r),
      Je.add(i));
    let o = new t(O(new n(0.07, 8, 6)), R.white);
    (o.position.set(Math.cos(r) * 0.5, 0, Math.sin(r) * 0.5), Je.add(o));
  }
  {
    let e = S.landmarks.find((e) => e.id === `dorm`);
    if (e)
      for (let t of [0.14, 3.85])
        _e.push({
          x: e.x,
          y: D.y + t,
          z: e.z,
          r: 5.5,
          col: 16763024,
          gain: 0.55,
        });
  }
  {
    let e = [],
      n = [],
      r = [],
      i = [],
      a = new b();
    if (
      (_e.forEach((t, o) => {
        a.setHex(t.col).multiplyScalar(t.gain);
        for (let [i, o] of [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ])
          (e.push(t.x + (i * 2 - 1) * t.r, t.y, t.z + (o * 2 - 1) * t.r),
            n.push(i, o),
            r.push(a.r, a.g, a.b));
        i.push(o * 4, o * 4 + 2, o * 4 + 1, o * 4, o * 4 + 3, o * 4 + 2);
      }),
      _e.length)
    ) {
      let a = O(new f());
      (a.setAttribute(`position`, new w(e, 3)),
        a.setAttribute(`uv`, new w(n, 2)),
        a.setAttribute(`color`, new w(r, 3)),
        a.setIndex(i));
      let o = new t(
        a,
        O(
          new y({
            map: L,
            vertexColors: !0,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            side: 2,
          }),
        ),
      );
      ((o.renderOrder = 2), (o.name = `obs-light-pools`), F.add(o));
    }
  }
  for (let [e, n, r, i, a] of A
    ? [
        [6800, -300, 520, 724500, 3],
        [11500, -400, 900, 1251621, 7],
      ]
    : [
        [6800, -300, 520, 8224654, 3],
        [11500, -400, 900, 10463420, 7],
      ]) {
    let o = [],
      s = [];
    for (let t = 0; t <= 480; t++) {
      let i = (t / 480) * Math.PI * 2,
        c =
          n +
          r *
            (0.35 +
              (Math.abs(Math.sin(i * a * 2.3 + 1)) * 0.45 +
                Math.abs(Math.sin(i * a * 7.1 + 2)) * 0.3 +
                Math.abs(Math.sin(i * a * 19.7)) * 0.15 +
                Math.sin(i * 61 + a) * 0.05)),
        l = e * (1 + 0.04 * Math.sin(i * 5 + a));
      if (
        (o.push(
          Math.cos(i) * l,
          n - 600,
          Math.sin(i) * l,
          Math.cos(i) * l,
          c,
          Math.sin(i) * l,
        ),
        t)
      ) {
        let e = t * 2;
        s.push(e - 2, e, e - 1, e - 1, e, e + 1);
      }
    }
    let c = O(new f());
    (c.setAttribute(`position`, new w(o, 3)), c.setIndex(s));
    let l = new t(c, O(new y({ color: i, side: 2, fog: !1 })));
    ((l.renderOrder = -7),
      (l.frustumCulled = !1),
      (l.name = `obs-ranges`),
      F.add(l));
  }
  for (let [e, n, r, i] of [
    [-900, -1400, 320, 160],
    [700, -1900, 420, 210],
    [1500, -900, 260, 120],
  ]) {
    let a = O(new d(r, i, 40, 6, !0)),
      o = new t(a, O(new s({ color: 4861476, roughness: 1 })));
    (o.position.set(e, fe(e, n) + i / 2 - 20, n), F.add(o));
  }
  {
    let e = [];
    for (let [t, n, r] of [
      [600, -2600, 600],
      [-1800, -2900, 450],
      [1900, -3e3, 380],
      [-600, -3300, 700],
    ])
      for (let i = 0; i < 900; i++) {
        let i = M() * 6.283,
          a = M() ** 0.6 * r,
          o = t + Math.cos(i) * a * 1.4,
          s = n + Math.sin(i) * a;
        e.push(o, fe(o, s) + 8, s);
      }
    for (let t = 0; t < 600; t++) {
      let t = M(),
        n = -3e3 + 6e3 * t,
        r = -2700 + Math.sin(t * 6) * 700;
      e.push(n, fe(n, r) + 8, r);
    }
    let t = O(new f());
    t.setAttribute(`position`, new w(e, 3));
    let n = new re(
      t,
      O(
        new C({
          color: 16757610,
          size: 1.6,
          sizeAttenuation: !1,
          fog: !1,
          transparent: !0,
          opacity: 0.9,
        }),
      ),
    );
    ((n.frustumCulled = !1), (n.name = `obs-towns`), (n.visible = A), F.add(n));
  }
  let Ye = D.array ?? { antennas: [], pads: [] },
    Xe = [];
  if (Ye.antennas.length) {
    let e = O(
        q(512, 512, (e, t, n) => {
          ((e.fillStyle = `#eef0f2`),
            e.fillRect(0, 0, t, n),
            (e.strokeStyle = `rgba(120,128,138,.45)`),
            (e.lineWidth = 1.5));
          for (let r = 0; r <= 32; r++) {
            let i = (r / 32) * t;
            (e.beginPath(), e.moveTo(i, 0), e.lineTo(i, n), e.stroke());
          }
          for (let r = 0; r <= 8; r++) {
            let i = (r / 8) * n;
            (e.beginPath(), e.moveTo(0, i), e.lineTo(t, i), e.stroke());
          }
          for (let r = 0; r < 800; r++)
            ((e.fillStyle = `rgba(${M() < 0.5 ? `150,155,160` : `255,255,255`},${M() * 0.08})`),
              e.fillRect(M() * t, M() * n, 2 + M() * 8, 2 + M() * 8));
        }),
      ),
      t = {
        white: O(new s({ color: 15527922, roughness: 0.5, metalness: 0.1 })),
        dish: O(new s({ map: e, roughness: 0.38, metalness: 0.25, side: 2 })),
        back: O(
          new s({ color: 10199980, roughness: 0.6, metalness: 0.5, side: 2 }),
        ),
        tyre: O(new s({ color: 1776412, roughness: 0.95 })),
      },
      n = (e, t, n, r) => e.translate(t, n, r),
      r = (e, t, r, i = 0, o = 0, s = 0) => n(new a(e, t, r), i, o, s),
      i = (e, t, r, i = 0, a = 0, o = 0, s = 24) =>
        n(new k(e, t, r, s), i, a, o),
      c = (e, t, n) => {
        let r = new l(...e),
          i = new l(...t),
          a = r.distanceTo(i),
          o = new k(n, n, a, 6);
        return (
          o.translate(0, a / 2, 0),
          o.applyQuaternion(
            new E().setFromUnitVectors(
              new l(0, 1, 0),
              i.clone().sub(r).normalize(),
            ),
          ),
          o.translate(...e)
        );
      },
      u = (e) => {
        let t = O(se(e.map((e) => (e.index ? e.toNonIndexed() : e))));
        return (e.forEach((e) => e.dispose()), t);
      },
      { azY: d, elY: f, F: p, R: h, v0: g } = ue,
      _ = O(i(1.45, 1.775, d, 0, d / 2, 0, 28)),
      y = u([
        i(1.85, 1.85, 0.25, 0, 0.42, 0, 28),
        i(1.6, 1.6, 0.3, 0, d - 0.1, 0, 28),
      ]),
      b = u([
        r(6, 1, 2.2, 0, 0.55, 0),
        r(0.8, f - d, 1.4, -2.55, (f - d) / 2 + 0.5, 0),
        r(0.8, f - d, 1.4, 2.55, (f - d) / 2 + 0.5, 0),
      ]),
      S = u([
        r(6.4, 0.08, 2.6, 0, 1.1, 0),
        n(new k(0.7, 0.7, 0.5, 16).rotateZ(Math.PI / 2), -2.85, f - d, 0),
        n(new k(0.7, 0.7, 0.5, 16).rotateZ(Math.PI / 2), 2.85, f - d, 0),
      ]),
      C = [];
    for (let e = 0; e <= 16; e++) {
      let t = (h * e) / 16;
      C.push(new v(Math.max(t, 0.01), g + (t * t) / (4 * p)));
    }
    let w = O(new m(C, 64)),
      T = [];
    for (let e = 0; e <= 10; e++) {
      let t = (h * 0.98 * e) / 10;
      T.push(
        new v(
          Math.max(t, 0.01),
          g - 0.3 + (t * t) / (4 * p) - 0.55 * (1 - e / 10),
        ),
      );
    }
    let ee = O(new m(T, 24)),
      te = g + (h * h) / (4 * p),
      ne = g + p,
      re = u([
        r(3, 3.2, 3, 0, -0.75, 0),
        i(0.5, 0.5, 0.35, 0, ne + 0.05, 0, 20),
        n(new o(h, 0.08, 6, 64).rotateX(Math.PI / 2), 0, te, 0),
      ]),
      ie = [
        n(new k(0.42, 0.42, 5.3, 16).rotateZ(Math.PI / 2), 0, 0, 0),
        i(0.15, 0.3, 0.4, 0, ne - 0.3, 0, 12),
        r(3.06, 0.12, 3.06, 0, -2, 0),
        r(0.06, 1.8, 1, 1.53, -1, 0.6),
      ];
    for (let e of [0.785, 2.356, 3.927, 5.498]) {
      let t = h * 0.86;
      ie.push(
        c(
          [Math.cos(e) * t, g + (t * t) / (4 * p), Math.sin(e) * t],
          [Math.cos(e) * 0.3, ne - 0.1, Math.sin(e) * 0.3],
          0.07,
        ),
      );
    }
    let ae = u(ie),
      oe = Ye.antennas.length,
      A = (e, t, n) => {
        let r = new ce(e, t, oe);
        return (
          (r.castShadow = r.receiveShadow = !0),
          (r.name = n),
          (r.frustumCulled = !1),
          I.add(r),
          r
        );
      },
      le = [
        A(_, t.white, `obs-array-pedestals`),
        A(y, R.steel, `obs-array-bearings`),
      ],
      j = [
        A(b, t.white, `obs-array-yokes`),
        A(S, R.steel, `obs-array-yoke-steel`),
      ],
      de = [
        A(re, t.white, `obs-array-cabins`),
        A(ae, R.steel, `obs-array-legs`),
        A(w, t.dish, `obs-array-dishes`),
        A(ee, t.back, `obs-array-backs`),
      ];
    Xe.push({ A: Ye, IB: le, IA: j, IE: de, last: `` });
    let N = Ye.transporter;
    if (N) {
      let e = O(new k(0.78, 0.78, 0.55, 18).rotateX(Math.PI / 2)),
        n = new ce(e, t.tyre, 28),
        r = new x(),
        i = 0;
      for (let e of [-1, 1])
        for (let t = 0; t < 7; t++)
          for (let a of [-1, 1])
            (r.position.set(
              N.x - 8.4 + t * 2.8,
              D.y + 0.78,
              N.z + e * (N.half + a * (N.beam + 0.12)),
            ),
              r.updateMatrix(),
              n.setMatrixAt(i++, r.matrix));
      ((n.castShadow = !0), (n.name = `obs-transporter-tyres`), F.add(n));
      for (let e of [-1, 1]) {
        let t = B(16752672, 0.7, 0.8);
        (t.position.set(N.x + N.len / 2 - 0.4, D.y + 7.15, N.z + e * 2),
          F.add(t));
      }
    }
  }
  let Ze = new j(),
    Q = new j(),
    Qe = new j(),
    $e = new j(),
    et = new j();
  function tt(e) {
    for (let t of Xe) {
      let n = P(D, e),
        r = ye(D).filter((t) => t.dish && e > t.impact),
        i = at ? t.A.antennas.map((t) => at.liftFrame(t, e)) : null,
        a =
          `/` +
          r.map((t) => t.k + `:` + N(D, t.dish, e).toFixed(3)).join(`,`) +
          `/` +
          D.epoch +
          `/` +
          (i
            ? i.map((e) => (e ? (e.gone ? `g` : e.k.toFixed(3)) : ``)).join(``)
            : ``),
        o = n.az.toFixed(4) + `/` + n.el.toFixed(4) + a;
      if (
        ((t.coarse = n.az.toFixed(2) + `/` + n.el.toFixed(2) + a), o !== t.last)
      ) {
        ((t.last = o),
          t.A.antennas.forEach((a, o) => {
            let s = a.fixed ?? n,
              c = a.x,
              l = a.y0,
              u = a.z,
              d = r.find((e) => e.dish === a),
              f = i?.[o];
            if (
              (et.makeTranslation(a.x, a.y0, a.z),
              f &&
                (f.gone
                  ? ((l = -1e4), et.makeTranslation(a.x, -1e4, a.z))
                  : ((s = { az: f.az, el: f.el }),
                    et
                      .makeTranslation(f.x, f.y0, f.z)
                      .multiply($e.makeRotationFromQuaternion(f.q)))),
              d)
            ) {
              let t = N(D, a, e),
                n = P(D, d.impact),
                r = d.fall,
                i = Math.atan2(Math.sin(r.az - n.az), Math.cos(r.az - n.az));
              ((s = { az: n.az + i * t, el: n.el + (r.el - n.el) * t }),
                (c = a.x + (r.x - a.x) * t),
                (l = a.y0 + (r.y0 - a.y0) * t),
                (u = a.z + (r.z - a.z) * t));
            }
            (f && !f.gone
              ? Q.copy(et)
                  .multiply(Ze.makeTranslation(0, ue.azY, 0))
                  .multiply($e.makeRotationY(s.az))
              : Q.makeTranslation(c, l + ue.azY, u).multiply(
                  $e.makeRotationY(s.az),
                ),
              Qe.copy(Q)
                .multiply(Ze.makeTranslation(0, ue.elY - ue.azY, 0))
                .multiply($e.makeRotationX(Math.PI / 2 - s.el)));
            for (let e of t.IB) e.setMatrixAt(o, et);
            for (let e of t.IA) e.setMatrixAt(o, Q);
            for (let e of t.IE) e.setMatrixAt(o, Qe);
          }));
        for (let e of [...t.IB, ...t.IA, ...t.IE])
          e.instanceMatrix.needsUpdate = !0;
      }
    }
  }
  if (!A) {
    let e = [
        [5200, -7800, 3600, 1700],
        [2400, -6900, 2500, 1050],
        [-6400, -5200, 4200, 1350],
        [8800, 1800, 4600, 1300],
      ],
      n = [];
    for (let [t, r, i, a] of e) {
      let e = new d(i, a, 72, 10, !0),
        o = e.attributes.position,
        s = [];
      for (let e = 0; e < o.count; e++) {
        let t = Math.atan2(o.getZ(e), o.getX(e)),
          n = o.getY(e) / a + 0.5,
          r = 1 + 0.05 * Math.sin(t * 7) + 0.03 * Math.sin(t * 19);
        (o.setX(e, o.getX(e) * r), o.setZ(e, o.getZ(e) * r));
        let i = +(n > 0.72 + 0.06 * Math.sin(t * 9)),
          c = [0.62, 0.5, 0.47],
          l = [0.95, 0.86, 0.86];
        s.push(...c.map((e, t) => e + (l[t] - e) * i));
      }
      (e.setAttribute(`color`, new w(s, 3)),
        e.translate(t, a / 2 - 260, r),
        n.push(e));
    }
    let r = new t(
      O(se(n.map((e) => e.toNonIndexed()))),
      O(new y({ vertexColors: !0, fog: !1 })),
    );
    (n.forEach((e) => e.dispose()),
      (r.renderOrder = -7),
      (r.frustumCulled = !1),
      (r.name = `obs-volcanoes`),
      F.add(r));
  }
  if (D.fences?.length) {
    let e = O(
        q(128, 128, (e, t, n) => {
          (e.clearRect(0, 0, t, n),
            (e.strokeStyle = `rgba(150,156,162,.95)`),
            (e.lineWidth = 3));
          for (let r = -t; r <= t * 2; r += 32)
            (e.beginPath(),
              e.moveTo(r, 0),
              e.lineTo(r + n, n),
              e.stroke(),
              e.beginPath(),
              e.moveTo(r, n),
              e.lineTo(r + n, 0),
              e.stroke());
        }),
      ),
      n = [];
    for (let e of D.fences) {
      let t = e.box,
        r = t[3] - t[0] > t[5] - t[2],
        i = r ? t[3] - t[0] : t[5] - t[2],
        a = t[4] - t[1] - 0.05,
        o = new oe(i, a),
        s = o.attributes.uv;
      for (let e = 0; e < s.count; e++)
        s.setXY(e, (s.getX(e) * i) / 0.9, (s.getY(e) * a) / 0.9);
      (r || o.rotateY(Math.PI / 2),
        o.translate((t[0] + t[3]) / 2, t[1] + a / 2, (t[2] + t[5]) / 2),
        n.push(o));
    }
    let r = new t(
      O(se(n)),
      O(
        new s({
          map: e,
          transparent: !0,
          alphaTest: 0.3,
          side: 2,
          roughness: 0.6,
          metalness: 0.5,
        }),
      ),
    );
    (n.forEach((e) => e.dispose()), (r.name = `obs-chainlink`), F.add(r));
  }
  let nt = 0,
    rt = new l(),
    it = null;
  try {
    it = De(p, g, D, ne);
  } catch (e) {
    p.warn?.(`meteor view failed: ` + e.message);
  }
  let at = null;
  if (be.ENABLED)
    try {
      at = Pe(p, g, D, ne);
    } catch (e) {
      p.warn?.(`ufo view failed: ` + e.message);
    }
  let ot = A ? null : K(g, D.y),
    st = p.modules.get(`environment`),
    ct = null,
    lt = 9;
  function ut(e, t) {
    let n = ct !== null && t !== ct,
      r = lt;
    if (((ct = t), (lt = n ? 0 : lt + e), I.userData.dynamicShadow)) {
      lt > 1.5 &&
        ((I.userData.dynamicShadow = !1), st?.invalidateStaticShadows?.(!0));
      return;
    }
    n &&
      (r < 1.5 && (I.userData.dynamicShadow = !0),
      st?.invalidateStaticShadows?.(!0));
  }
  return {
    update(e) {
      nt += Math.min(e || 0, 0.1);
      let t = ne(),
        n = p.camera;
      for (let e of Te)
        e.g.rotation.y = e.base + Math.sin((t / 60) * e.rate) * 1.1;
      ((Je.rotation.y = nt * 4.5), tt(t), it?.update(e), at?.update(e));
      let r = ``;
      for (let e of Xe) r += e.coarse;
      for (let e of we) {
        let n = pe(D, e.D, t);
        if (
          ((e.rot.rotation.y = n.az),
          (e.fork.rotation.y = n.az),
          (e.shutter.rotation.x = -1.9 * n.open),
          (e.tube.rotation.x = Math.PI / 2 - n.alt),
          (r +=
            `|` +
            n.az.toFixed(2) +
            `,` +
            n.open.toFixed(2) +
            `,` +
            n.alt.toFixed(2)),
          e.laser)
        ) {
          let n = ge(D, t);
          ((e.laser.visible = e.star.visible = e.launch.visible = n > 0.01),
            (e.laser.material.uniforms.amp.value = n),
            (e.star.material.opacity = n),
            (e.launch.material.opacity = n * (0.8 + 0.2 * Math.sin(nt * 9))));
        }
      }
      if ((ut(Math.min(e || 0, 0.1), r), Le(), n)) {
        (Re.position.copy(n.position),
          ze.position.copy(n.position),
          He.position.copy(n.position).addScaledVector(Ve, 3e3));
        {
          let e = Math.floor(nt / 23),
            t = nt - e * 23;
          if (e !== Ue && t < 0.8) {
            Ue = e;
            let t = (e * 2.399) % 6.283;
            (We.set(
              Math.cos(t) * 2600,
              1500 + ((e * 37) % 9) * 90,
              Math.sin(t) * 2600,
            ),
              X.set(-Math.sin(t) * 0.8, -0.6, Math.cos(t) * 0.8).normalize());
          }
          t < 0.8 && e === Ue
            ? (Y.position
                .copy(n.position)
                .add(We)
                .addScaledVector(X, t * 900),
              Y.lookAt(n.position),
              (Y.rotation.z = Math.atan2(X.y, Math.hypot(X.x, X.z)) + 0.3),
              (Y.material.opacity = Math.sin((t / 0.8) * Math.PI) * 0.8))
            : (Y.material.opacity = 0);
        }
        for (let e of Ge) {
          let t = e.a + nt * e.v;
          e.s.position.set(
            n.position.x + Math.cos(t) * 3e3,
            n.position.y + Math.abs(Math.sin(t)) * 1800 * e.k + 300,
            n.position.z + Math.sin(t + e.b) * 2400,
          );
        }
      }
      let i = ((t / 60) % 240) / 240;
      (Ke.getPointAt(i, qe.position),
        Ke.getTangentAt(i, rt),
        (qe.rotation.y = Math.atan2(-rt.z, rt.x)));
    },
    stats() {
      let e = ne();
      return {
        domes: D.domes.map((t) => {
          let n = pe(D, t, e);
          return {
            name: t.name,
            az: +n.az.toFixed(2),
            open: +n.open.toFixed(2),
            slewing: n.slewing,
          };
        }),
        laser: +ge(D, e).toFixed(2),
        array: (() => {
          let t = P(D, e);
          return {
            source: t.source,
            az: +t.az.toFixed(2),
            el: +t.el.toFixed(2),
            slewing: t.slewing,
          };
        })(),
        broken: D.broken?.size ?? 0,
        meteor: it?.stats() ?? null,
        ufo: at?.stats() ?? null,
      };
    },
    dispose() {
      (it?.dispose(),
        at?.dispose(),
        ot?.dispose(),
        g.remove(F),
        g.remove(I),
        g.remove(W),
        g.remove(Re),
        g.remove(Y),
        g.remove(ze),
        g.remove(He));
      for (let e of Ge) g.remove(e.s);
      W.dispose();
      for (let e of ae) e.dispose?.();
      F.traverse((e) => {
        e.isMesh && !ae.includes(e.geometry) && e.geometry?.dispose?.();
      });
    },
  };
}
export { Fe as createObservatoryView };
//# sourceMappingURL=observatory-view-BtP2mjUr.js.map
