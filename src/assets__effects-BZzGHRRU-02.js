// assets__effects-BZzGHRRU 02 — mesh
// Lines 221-733 of readable/assets__effects-BZzGHRRU.pretty.js (statement-aligned).
var f = class {
    constructor(
      e,
      t,
      { additive: n = !1, renderOrder: r = 10, name: o = `sprites` } = {},
    ) {
      ((this.THREE = e),
        (this.max = t),
        (this.additive = n),
        (this.s = new l(t, {
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
      let s = new e.PlaneGeometry(2, 2, 1, 1),
        c = new e.InstancedBufferGeometry();
      (c.setIndex(s.index),
        c.setAttribute(`position`, s.attributes.position),
        c.setAttribute(`uv`, s.attributes.uv));
      let u = (n, r) => {
        let i = new e.InstancedBufferAttribute(new Float32Array(t * r), r);
        return (i.setUsage(e.DynamicDrawUsage), c.setAttribute(n, i), i);
      };
      ((this.aPos = u(`iPos`, 3)),
        (this.aAxis = u(`iAxis`, 3)),
        (this.aSize = u(`iSize`, 4)),
        (this.aColor = u(`iColor`, 4)),
        (c.instanceCount = 0),
        (c.boundingSphere = new e.Sphere(new e.Vector3(), 1e6)),
        (this.geo = c),
        (this.material = new e.ShaderMaterial({
          uniforms: e.UniformsUtils.merge([
            e.UniformsLib.fog,
            { uMinWidth: { value: 0.0022 }, uAdditive: { value: +!!n } },
          ]),
          vertexShader: i,
          fragmentShader: a,
          transparent: !0,
          depthWrite: !1,
          depthTest: !0,
          fog: !0,
          blending: n ? e.AdditiveBlending : e.NormalBlending,
          side: e.DoubleSide,
        })),
        (this.mesh = new e.Mesh(c, this.material)),
        (this.mesh.visible = !1),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = r),
        (this.mesh.name = `fx:` + o),
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
        (n.life.a[t] = Math.max(e.life, c)),
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
        a = n.axis.a,
        o = n.age.a,
        s = n.life.a,
        l = n.size0.a,
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
        T = e * c;
      for (let e = 0; e < t; e++) {
        let t = e * 3,
          n = e * 2,
          c = e * 4;
        ((x[t] = r[t] + i[t] * T),
          (x[t + 1] = r[t + 1] + i[t + 1] * T),
          (x[t + 2] = r[t + 2] + i[t + 2] * T),
          (S[t] = a[t]),
          (S[t + 1] = a[t + 1]),
          (S[t + 2] = a[t + 2]));
        let d = Math.min(1, (o[e] + T) / s[e]);
        ((C[c] = l[n] + (f[n] - l[n]) * d),
          (C[c + 1] = l[n + 1] + (f[n + 1] - l[n + 1]) * d),
          (C[c + 2] = p[e]),
          (C[c + 3] = m[e] + h[e] * o[e]));
        let E = b[e],
          D = E === 1 ? d : d ** +E;
        ((w[c] = g[t] + (_[t] - g[t]) * D),
          (w[c + 1] = g[t + 1] + (_[t + 1] - g[t + 1]) * D),
          (w[c + 2] = g[t + 2] + (_[t + 2] - g[t + 2]) * D),
          (w[c + 3] = v[e] * u(y[e], d)));
      }
      (d(this.aPos, t * 3),
        d(this.aAxis, t * 3),
        d(this.aSize, t * 4),
        d(this.aColor, t * 4));
    }
    dispose() {
      (this.geo.dispose(), this.material.dispose());
    }
  },
  p = class {
    constructor(
      e,
      t,
      n,
      r,
      {
        alpha: i = !1,
        shadow: a = !1,
        renderOrder: o = 0,
        name: s = `mesh`,
        fadeInjected: c = !1,
      } = {},
    ) {
      if (
        ((this.THREE = e),
        (this.max = r),
        (this.hasAlpha = i),
        (this.s = new l(r, {
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
          c || m(n));
      }
      let u = new e.InstancedMesh(t, n, r);
      ((u.count = 0),
        (u.visible = !1),
        (u.frustumCulled = !1),
        (u.renderOrder = o),
        (u.name = `fx:` + s),
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
        (this.onRest = null));
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
      let a = e.c2 ?? e.c1;
      return (
        (n.tri.a[t] = +!!e.c2),
        (n.c2.a[r] = a[0]),
        (n.c2.a[r + 1] = a[1]),
        (n.c2.a[r + 2] = a[2]),
        (n.age.a[t] = 0),
        (n.life.a[t] = Math.max(e.life, c)),
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
              ((i[m + 1] = -i[m + 1] * d[n]),
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
        a = n.quat.a,
        o = n.age.a,
        s = n.life.a,
        l = n.s0.a,
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
        T = e * c;
      for (let e = 0; e < t; e++) {
        let t = e * 3,
          n = e * 4,
          c = e * 16,
          d = Math.min(1, (o[e] + T) / s[e]),
          E = 1;
        b[e] > 0 && d > 0.8 && (E = 1 - (d - 0.8) / 0.2);
        let D = (l[t] + (f[t] - l[t]) * d) * E,
          O = (l[t + 1] + (f[t + 1] - l[t + 1]) * d) * E,
          k = (l[t + 2] + (f[t + 2] - l[t + 2]) * d) * E,
          A = a[n],
          j = a[n + 1],
          M = a[n + 2],
          N = a[n + 3],
          ee = A + A,
          te = j + j,
          P = M + M,
          F = A * ee,
          I = A * te,
          L = A * P,
          R = j * te,
          z = j * P,
          B = M * P,
          V = N * ee,
          H = N * te,
          U = N * P;
        ((S[c] = (1 - (R + B)) * D),
          (S[c + 1] = (I + U) * D),
          (S[c + 2] = (L - H) * D),
          (S[c + 3] = 0),
          (S[c + 4] = (I - U) * O),
          (S[c + 5] = (1 - (F + B)) * O),
          (S[c + 6] = (z + V) * O),
          (S[c + 7] = 0),
          (S[c + 8] = (L + H) * k),
          (S[c + 9] = (z - V) * k),
          (S[c + 10] = (1 - (F + R)) * k),
          (S[c + 11] = 0));
        let W = x[e] > 0 ? 0 : T;
        ((S[c + 12] = r[t] + i[t] * W),
          (S[c + 13] = r[t + 1] + i[t + 1] * W),
          (S[c + 14] = r[t + 2] + i[t + 2] * W),
          (S[c + 15] = 1));
        let G = y[e],
          K = G === 1 ? d : d ** +G;
        if (g[e] === 0)
          ((C[t] = p[t] + (m[t] - p[t]) * K),
            (C[t + 1] = p[t + 1] + (m[t + 1] - p[t + 1]) * K),
            (C[t + 2] = p[t + 2] + (m[t + 2] - p[t + 2]) * K));
        else if (K < 0.5) {
          let e = K * 2;
          ((C[t] = p[t] + (m[t] - p[t]) * e),
            (C[t + 1] = p[t + 1] + (m[t + 1] - p[t + 1]) * e),
            (C[t + 2] = p[t + 2] + (m[t + 2] - p[t + 2]) * e));
        } else {
          let e = (K - 0.5) * 2;
          ((C[t] = m[t] + (h[t] - m[t]) * e),
            (C[t + 1] = m[t + 1] + (h[t + 1] - m[t + 1]) * e),
            (C[t + 2] = m[t + 2] + (h[t + 2] - m[t + 2]) * e));
        }
        w && (w[e] = v[e] * u(_[e], d));
      }
      (d(this.mesh.instanceMatrix, t * 16),
        d(this.mesh.instanceColor, t * 3),
        this.aAlpha && d(this.aAlpha, t));
    }
    dispose() {
      (this.geo.dispose(), this.material.dispose());
    }
  };
