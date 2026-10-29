// assets__observatory-view-BtP2mjUr 01 — float32array
// Lines 1-183 of readable/assets__observatory-view-BtP2mjUr.pretty.js (statement-aligned).
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
