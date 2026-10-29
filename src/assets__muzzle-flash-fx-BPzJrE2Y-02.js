// assets__muzzle-flash-fx-BPzJrE2Y 02 — mesh
// Lines 259-784 of readable/assets__muzzle-flash-fx-BPzJrE2Y.pretty.js (statement-aligned).
var l = class {
    constructor(
      e,
      r,
      {
        additive: i = !1,
        renderOrder: a = 10,
        name: s = `sprites`,
        clearCenter: c = !1,
      } = {},
    ) {
      ((this.THREE = e),
        (this.max = r),
        (this.additive = i),
        (this.s = new o(r, {
          pos: 3,
          vel: 3,
          axis: 3,
          size0: 2,
          size1: 2,
          kind: 1,
          rot: 1,
          rotVel: 1,
          c0: 3,
          c1: 3,
          alpha: 1,
          age: 1,
          life: 1,
          grav: 1,
          drag: 1,
          amode: 1,
          stretch: 1,
          bounce: 1,
          ramp: 1,
        })));
      let l = new e.PlaneGeometry(2, 2, 1, 1),
        u = new e.InstancedBufferGeometry();
      (u.setIndex(l.index),
        u.setAttribute(`position`, l.attributes.position),
        u.setAttribute(`uv`, l.attributes.uv));
      let d = (t, n) => {
        let i = new e.InstancedBufferAttribute(new Float32Array(r * n), n);
        return (i.setUsage(e.DynamicDrawUsage), u.setAttribute(t, i), i);
      };
      ((this.aPos = d(`iPos`, 3)),
        (this.aAxis = d(`iAxis`, 3)),
        (this.aSize = d(`iSize`, 4)),
        (this.aColor = d(`iColor`, 4)),
        (u.instanceCount = 0),
        (u.boundingSphere = new e.Sphere(new e.Vector3(), 1e6)),
        (this.geo = u),
        (this.material = new e.ShaderMaterial({
          uniforms: e.UniformsUtils.merge([
            e.UniformsLib.fog,
            {
              uMinWidth: { value: 0.0022 },
              uAdditive: { value: +!!i },
              uClear: { value: new e.Vector3(1, 0, 0) },
            },
          ]),
          defines: c ? { CLEAR_CENTER: `` } : {},
          vertexShader: t,
          fragmentShader: n,
          transparent: !0,
          depthWrite: !1,
          depthTest: !0,
          fog: !0,
          blending: i ? e.AdditiveBlending : e.NormalBlending,
          side: e.DoubleSide,
        })),
        (this.mesh = new e.Mesh(u, this.material)),
        (this.mesh.visible = !1),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = a),
        (this.mesh.name = `fx:` + s),
        (this.mesh.matrixAutoUpdate = !1),
        (this.spawned = 0));
    }
    get count() {
      return this.s.n;
    }
    emit(e) {
      let t = this.s.alloc(),
        n = this.s.f;
      this.spawned++;
      let r = t * 3,
        i = t * 2;
      return (
        (n.pos.a[r] = e.x),
        (n.pos.a[r + 1] = e.y),
        (n.pos.a[r + 2] = e.z),
        (n.vel.a[r] = e.vx),
        (n.vel.a[r + 1] = e.vy),
        (n.vel.a[r + 2] = e.vz),
        (n.axis.a[r] = e.ax),
        (n.axis.a[r + 1] = e.ay),
        (n.axis.a[r + 2] = e.az),
        (n.size0.a[i] = e.w0),
        (n.size0.a[i + 1] = e.l0),
        (n.size1.a[i] = e.w1),
        (n.size1.a[i + 1] = e.l1),
        (n.kind.a[t] = e.kind),
        (n.rot.a[t] = e.rot),
        (n.rotVel.a[t] = e.rotVel),
        (n.c0.a[r] = e.c0[0]),
        (n.c0.a[r + 1] = e.c0[1]),
        (n.c0.a[r + 2] = e.c0[2]),
        (n.c1.a[r] = e.c1[0]),
        (n.c1.a[r + 1] = e.c1[1]),
        (n.c1.a[r + 2] = e.c1[2]),
        (n.alpha.a[t] = e.alpha),
        (n.age.a[t] = 0),
        (n.life.a[t] = Math.max(e.life, a)),
        (n.grav.a[t] = e.grav),
        (n.drag.a[t] = e.drag),
        (n.amode.a[t] = e.amode),
        (n.stretch.a[t] = e.stretch),
        (n.bounce.a[t] = e.bounce),
        (n.ramp.a[t] = e.ramp),
        t
      );
    }
    tick(e, t) {
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        a = n.axis.a,
        o = n.age.a,
        s = n.life.a,
        c = n.grav.a,
        l = n.drag.a,
        u = n.stretch.a,
        d = n.bounce.a;
      for (let n = 0; n < this.s.n; n++) {
        if (((o[n] += e), o[n] >= s[n])) {
          (this.s.remove(n), n--);
          continue;
        }
        let f = n * 3,
          p = c[n],
          m = l[n];
        if ((p !== 0 && (i[f + 1] -= p * e), m !== 0)) {
          let t = Math.max(0, 1 - m * e);
          ((i[f] *= t), (i[f + 1] *= t), (i[f + 2] *= t));
        }
        if (
          ((r[f] += i[f] * e),
          (r[f + 1] += i[f + 1] * e),
          (r[f + 2] += i[f + 2] * e),
          d[n] !== 0 || p > 0)
        ) {
          let e = t(r[f], r[f + 2]);
          if (r[f + 1] < e + 0.02) {
            if (d[n] < 0) {
              (this.s.remove(n), n--);
              continue;
            }
            ((r[f + 1] = e + 0.02),
              i[f + 1] < 0 &&
                ((i[f + 1] = -i[f + 1] * d[n]),
                (i[f] *= 0.6),
                (i[f + 2] *= 0.6)));
          }
        }
        if (u[n] > 0) {
          let e = i[f],
            t = i[f + 1],
            n = i[f + 2],
            r = Math.hypot(e, t, n);
          r > 1e-4 && ((a[f] = e / r), (a[f + 1] = t / r), (a[f + 2] = n / r));
        }
      }
    }
    update(e) {
      let t = this.s.n;
      if (((this.geo.instanceCount = t), (this.mesh.visible = t > 0), t === 0))
        return;
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        o = n.axis.a,
        l = n.age.a,
        u = n.life.a,
        d = n.size0.a,
        f = n.size1.a,
        p = n.kind.a,
        m = n.rot.a,
        h = n.rotVel.a,
        g = n.c0.a,
        _ = n.c1.a,
        v = n.alpha.a,
        y = n.amode.a,
        b = n.ramp.a,
        x = this.aPos.array,
        S = this.aAxis.array,
        C = this.aSize.array,
        w = this.aColor.array,
        T = e * a;
      for (let e = 0; e < t; e++) {
        let t = e * 3,
          n = e * 2,
          a = e * 4;
        ((x[t] = r[t] + i[t] * T),
          (x[t + 1] = r[t + 1] + i[t + 1] * T),
          (x[t + 2] = r[t + 2] + i[t + 2] * T),
          (S[t] = o[t]),
          (S[t + 1] = o[t + 1]),
          (S[t + 2] = o[t + 2]));
        let c = Math.min(1, (l[e] + T) / u[e]);
        ((C[a] = d[n] + (f[n] - d[n]) * c),
          (C[a + 1] = d[n + 1] + (f[n + 1] - d[n + 1]) * c),
          (C[a + 2] = p[e]),
          (C[a + 3] = m[e] + h[e] * l[e]));
        let E = b[e],
          D = E === 1 ? c : c ** +E;
        ((w[a] = g[t] + (_[t] - g[t]) * D),
          (w[a + 1] = g[t + 1] + (_[t + 1] - g[t + 1]) * D),
          (w[a + 2] = g[t + 2] + (_[t + 2] - g[t + 2]) * D),
          (w[a + 3] = v[e] * s(y[e], c)));
      }
      (c(this.aPos, t * 3),
        c(this.aAxis, t * 3),
        c(this.aSize, t * 4),
        c(this.aColor, t * 4));
    }
    dispose() {
      (this.geo.dispose(), this.material.dispose());
    }
  },
  u = class {
    constructor(
      e,
      t,
      n,
      r,
      {
        alpha: i = !1,
        shadow: a = !1,
        renderOrder: s = 0,
        name: c = `mesh`,
        fadeInjected: l = !1,
      } = {},
    ) {
      if (
        ((this.THREE = e),
        (this.max = r),
        (this.hasAlpha = i),
        (this.s = new o(r, {
          pos: 3,
          vel: 3,
          quat: 4,
          ang: 3,
          s0: 3,
          s1: 3,
          c0: 3,
          c1: 3,
          c2: 3,
          tri: 1,
          age: 1,
          life: 1,
          grav: 1,
          drag: 1,
          bounce: 1,
          amode: 1,
          alpha: 1,
          rest: 1,
          ramp: 1,
          radius: 1,
          shrink: 1,
        })),
        (this.geo = t),
        (this.aAlpha = null),
        i)
      ) {
        let i = new e.InstancedBufferAttribute(new Float32Array(r), 1);
        (i.setUsage(e.DynamicDrawUsage),
          t.setAttribute(`aAlpha`, i),
          (this.aAlpha = i),
          l || d(n));
      }
      let u = new e.InstancedMesh(t, n, r);
      ((u.count = 0),
        (u.visible = !1),
        (u.frustumCulled = !1),
        (u.renderOrder = s),
        (u.name = `fx:` + c),
        (u.castShadow = a),
        (u.receiveShadow = !1),
        (u.matrixAutoUpdate = !1),
        u.instanceMatrix.setUsage(e.DynamicDrawUsage),
        (u.instanceColor = new e.InstancedBufferAttribute(
          new Float32Array(r * 3),
          3,
        )),
        u.instanceColor.setUsage(e.DynamicDrawUsage),
        (this.mesh = u),
        (this.material = n),
        (this.spawned = 0),
        (this.onRest = null),
        (this.onBounce = null));
    }
    get count() {
      return this.s.n;
    }
    emit(e) {
      let t = this.s.alloc(),
        n = this.s.f;
      this.spawned++;
      let r = t * 3,
        i = t * 4;
      ((n.pos.a[r] = e.x),
        (n.pos.a[r + 1] = e.y),
        (n.pos.a[r + 2] = e.z),
        (n.vel.a[r] = e.vx),
        (n.vel.a[r + 1] = e.vy),
        (n.vel.a[r + 2] = e.vz),
        (n.quat.a[i] = e.qx),
        (n.quat.a[i + 1] = e.qy),
        (n.quat.a[i + 2] = e.qz),
        (n.quat.a[i + 3] = e.qw),
        (n.ang.a[r] = e.ax),
        (n.ang.a[r + 1] = e.ay),
        (n.ang.a[r + 2] = e.az),
        (n.s0.a[r] = e.sx0),
        (n.s0.a[r + 1] = e.sy0),
        (n.s0.a[r + 2] = e.sz0),
        (n.s1.a[r] = e.sx1),
        (n.s1.a[r + 1] = e.sy1),
        (n.s1.a[r + 2] = e.sz1),
        (n.c0.a[r] = e.c0[0]),
        (n.c0.a[r + 1] = e.c0[1]),
        (n.c0.a[r + 2] = e.c0[2]),
        (n.c1.a[r] = e.c1[0]),
        (n.c1.a[r + 1] = e.c1[1]),
        (n.c1.a[r + 2] = e.c1[2]));
      let o = e.c2 ?? e.c1;
      return (
        (n.tri.a[t] = +!!e.c2),
        (n.c2.a[r] = o[0]),
        (n.c2.a[r + 1] = o[1]),
        (n.c2.a[r + 2] = o[2]),
        (n.age.a[t] = 0),
        (n.life.a[t] = Math.max(e.life, a)),
        (n.grav.a[t] = e.grav),
        (n.drag.a[t] = e.drag),
        (n.bounce.a[t] = e.bounce),
        (n.amode.a[t] = e.amode),
        (n.alpha.a[t] = e.alpha),
        (n.rest.a[t] = 0),
        (n.ramp.a[t] = e.ramp),
        (n.radius.a[t] = e.radius),
        (n.shrink.a[t] = e.shrink),
        t
      );
    }
    tick(e, t) {
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        a = n.quat.a,
        o = n.ang.a,
        s = n.age.a,
        c = n.life.a,
        l = n.grav.a,
        u = n.drag.a,
        d = n.bounce.a,
        f = n.rest.a,
        p = n.radius.a;
      for (let n = 0; n < this.s.n; n++) {
        if (((s[n] += e), s[n] >= c[n])) {
          (this.s.remove(n), n--);
          continue;
        }
        if (f[n] > 0) continue;
        let m = n * 3,
          h = n * 4,
          g = l[n],
          _ = u[n];
        if ((g !== 0 && (i[m + 1] -= g * e), _ !== 0)) {
          let t = Math.max(0, 1 - _ * e);
          ((i[m] *= t), (i[m + 1] *= t), (i[m + 2] *= t));
        }
        if (
          ((r[m] += i[m] * e),
          (r[m + 1] += i[m + 1] * e),
          (r[m + 2] += i[m + 2] * e),
          g > 0)
        ) {
          let e = t(r[m], r[m + 2]) + p[n];
          r[m + 1] < e &&
            ((r[m + 1] = e),
            i[m + 1] < 0 &&
              (this.onBounce &&
                this.onBounce(r[m], e - p[n], r[m + 2], -i[m + 1]),
              (i[m + 1] = -i[m + 1] * d[n]),
              (i[m] *= 0.65),
              (i[m + 2] *= 0.65),
              (o[m] *= 0.5),
              (o[m + 1] *= 0.5),
              (o[m + 2] *= 0.5),
              i[m + 1] < 0.6 &&
                ((i[m] = 0),
                (i[m + 1] = 0),
                (i[m + 2] = 0),
                (o[m] = 0),
                (o[m + 1] = 0),
                (o[m + 2] = 0),
                (f[n] = 1),
                this.onRest &&
                  this.onRest(r[m], e - p[n], r[m + 2], c[n] - s[n]))));
        }
        let v = o[m],
          y = o[m + 1],
          b = o[m + 2];
        if (v !== 0 || y !== 0 || b !== 0) {
          let t = a[h],
            n = a[h + 1],
            r = a[h + 2],
            i = a[h + 3],
            o = 0.5 * e,
            s = t + o * (v * i + y * r - b * n),
            c = n + o * (y * i + b * t - v * r),
            l = r + o * (b * i + v * n - y * t),
            u = i + o * (-v * t - y * n - b * r),
            d = 1 / Math.hypot(s, c, l, u);
          ((a[h] = s * d),
            (a[h + 1] = c * d),
            (a[h + 2] = l * d),
            (a[h + 3] = u * d));
        }
      }
    }
    update(e) {
      let t = this.s.n;
      if (((this.mesh.count = t), (this.mesh.visible = t > 0), t === 0)) return;
      let n = this.s.f,
        r = n.pos.a,
        i = n.vel.a,
        o = n.quat.a,
        l = n.age.a,
        u = n.life.a,
        d = n.s0.a,
        f = n.s1.a,
        p = n.c0.a,
        m = n.c1.a,
        h = n.c2.a,
        g = n.tri.a,
        _ = n.amode.a,
        v = n.alpha.a,
        y = n.ramp.a,
        b = n.shrink.a,
        x = n.rest.a,
        S = this.mesh.instanceMatrix.array,
        C = this.mesh.instanceColor.array,
        w = this.aAlpha ? this.aAlpha.array : null,
        T = e * a;
      for (let e = 0; e < t; e++) {
        let t = e * 3,
          n = e * 4,
          a = e * 16,
          c = Math.min(1, (l[e] + T) / u[e]),
          E = 1;
        b[e] > 0 && c > 0.8 && (E = 1 - (c - 0.8) / 0.2);
        let D = (d[t] + (f[t] - d[t]) * c) * E,
          O = (d[t + 1] + (f[t + 1] - d[t + 1]) * c) * E,
          k = (d[t + 2] + (f[t + 2] - d[t + 2]) * c) * E,
          A = o[n],
          j = o[n + 1],
          M = o[n + 2],
          N = o[n + 3],
          P = A + A,
          F = j + j,
          I = M + M,
          L = A * P,
          R = A * F,
          z = A * I,
          B = j * F,
          V = j * I,
          H = M * I,
          U = N * P,
          W = N * F,
          G = N * I;
        ((S[a] = (1 - (B + H)) * D),
          (S[a + 1] = (R + G) * D),
          (S[a + 2] = (z - W) * D),
          (S[a + 3] = 0),
          (S[a + 4] = (R - G) * O),
          (S[a + 5] = (1 - (L + H)) * O),
          (S[a + 6] = (V + U) * O),
          (S[a + 7] = 0),
          (S[a + 8] = (z + W) * k),
          (S[a + 9] = (V - U) * k),
          (S[a + 10] = (1 - (L + B)) * k),
          (S[a + 11] = 0));
        let K = x[e] > 0 ? 0 : T;
        ((S[a + 12] = r[t] + i[t] * K),
          (S[a + 13] = r[t + 1] + i[t + 1] * K),
          (S[a + 14] = r[t + 2] + i[t + 2] * K),
          (S[a + 15] = 1));
        let q = y[e],
          J = q === 1 ? c : c ** +q;
        if (g[e] === 0)
          ((C[t] = p[t] + (m[t] - p[t]) * J),
            (C[t + 1] = p[t + 1] + (m[t + 1] - p[t + 1]) * J),
            (C[t + 2] = p[t + 2] + (m[t + 2] - p[t + 2]) * J));
        else if (J < 0.5) {
          let e = J * 2;
          ((C[t] = p[t] + (m[t] - p[t]) * e),
            (C[t + 1] = p[t + 1] + (m[t + 1] - p[t + 1]) * e),
            (C[t + 2] = p[t + 2] + (m[t + 2] - p[t + 2]) * e));
        } else {
          let e = (J - 0.5) * 2;
          ((C[t] = m[t] + (h[t] - m[t]) * e),
            (C[t + 1] = m[t + 1] + (h[t + 1] - m[t + 1]) * e),
            (C[t + 2] = m[t + 2] + (h[t + 2] - m[t + 2]) * e));
        }
        w && (w[e] = v[e] * s(_[e], c));
      }
      (c(this.mesh.instanceMatrix, t * 16),
        c(this.mesh.instanceColor, t * 3),
        this.aAlpha && c(this.aAlpha, t));
    }
    dispose() {
      (this.geo.dispose(), this.material.dispose());
    }
  };
