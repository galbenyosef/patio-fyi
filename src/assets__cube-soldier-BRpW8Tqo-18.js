// assets__cube-soldier-BRpW8Tqo 18 — math
// Lines 5001-5522 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
var $ = (e, t, n) => (e < t ? t : e > n ? n : e),
  Pa = (e, t, n) => e + (t - e) * n,
  Fa = class {
    constructor(e = {}) {
      ((this.sk = sa()),
        (this.root = this.sk.root),
        (this.pose = lt()),
        (this.target = lt()),
        (this.vel = lt()),
        (this.springs = {
          h: [1.8, 0],
          aimW: [0, 0],
          sprintW: [0, 0],
          hspeed: [0, 0],
        }),
        (this.blink = 2 + Math.random() * 3),
        (this.glance = { t: 1, yaw: 0, cur: 0 }),
        (this.time = Math.random() * 10),
        (this.meshes = []),
        (this.first = !0),
        (this.carry = { ...ba }),
        this.build(e));
    }
    build({
      faction: e = 0,
      cls: t = `assault`,
      face: n = 0,
      headgear: r = 0,
      kit: i = 0,
      winter: a = !1,
      finish: o = `textured`,
      body: s = `seamless`,
    } = {}) {
      for (let e of this.meshes) (e.parent.remove(e), e.geometry.dispose());
      for (let e of this.glow ?? []) e.parent.remove(e);
      (this.material?.dispose(),
        this.smoothMaterial?.dispose(),
        this.limbMaterial?.dispose(),
        this.shellMaterial?.dispose());
      for (let e of this.paintMats ?? []) e.dispose();
      ((this.meshes = []),
        (this.paintMats = []),
        (this.opts = {
          faction: e,
          cls: t,
          face: n,
          headgear: r,
          kit: i,
          winter: a,
          finish: o,
          body: s,
        }));
      let c = s === `seamless`;
      ((this.limbs = []), (this.pants = null), (this.veil = null));
      let l = si[e],
        u = Gt[n % Gt.length],
        d = ai[e][r % ai[e].length],
        p = a ? { ...l, ...ui[e] } : l;
      ((this.material = ta(l, a)),
        (this.smoothMaterial = ta(l, a, !0)),
        (this.limbMaterial = ta(l, a, !0)),
        (this.limbMaterial.roughness = 0.86),
        (this.shellMaterial = ta(l, a, !0, Nn(o))));
      let m = (
          e,
          t,
          n = t.userData.smoothLimb ? this.limbMaterial : this.material,
        ) => {
          let r = new f(t, n);
          return (
            (r.castShadow = r.receiveShadow = !0),
            e.add(r),
            this.meshes.push(r),
            r
          );
        },
        h = $i(t),
        g = this.sk,
        _ = (n, r, i, o, s, c) => {
          let u = {
              part: i,
              side: o,
              cls: t,
              pal: t === `sniper` && i !== `chest` ? { ...p, cloth: ci[e] } : p,
              base: c,
            },
            d = rr([i, o, t, e, a].join(`:`), r, u, s);
          ir(r);
          let f = ta(l, a, !0, d);
          return ((f.roughness = 0.86), this.paintMats.push(f), m(n, r, f));
        },
        v = (e) => e;
      if (c) {
        let e = _(
          g.hips,
          Si({
            top: 0.3,
            bottom: Vi.top,
            a: [0.22, 0.12],
            b: [Vi.X, Vi.D],
            joints: [{ y: 0, c: 0.19, band: 0.07, below: !1 }],
            colour: () => [Q, Pt.cloth, 0.82],
          }),
          `waist`,
          0,
          v,
          0.82,
        );
        (this.limbs.push({ g: e.geometry, bones: [g.torso] }),
          (this.pants = _(g.hips, Hi(), `pants`, 0, v, 0.82).geometry),
          _(g.torso, hi(), `chest`, 0, (e) => e.multiplyScalar(be), 1));
      }
      m(
        g.torso,
        zt([
          ...mi(c),
          ...bi(t, p),
          ...(c && t !== `sniper` ? Qi(t, e) : []),
          ...(t === `sniper` && [`scarf`, `bedroll`, `heavy`].includes(oi[i])
            ? []
            : xi(oi[i])),
        ]),
      );
      let y = pi(u, p, d, t, o);
      (y.shell && m(g.head, y.shell, this.shellMaterial),
        t !== `sniper` && m(g.head, y.hard),
        y.soft && m(g.head, y.soft, this.smoothMaterial),
        (this.glow = t !== `sniper` && d.endsWith(`down`) ? ia(g.head) : []),
        (this.faceGeo = Bt(
          W.w - 0.03,
          W.h - 0.03,
          0,
          W.y,
          Zt - 0.0015,
          Yt(n, 0),
          Math.PI,
        )),
        (this.faceIndex = n % Gt.length),
        (this.expr = -1));
      let b = m(g.head, this.faceGeo, oa());
      if (((b.castShadow = !1), t === `sniper`)) {
        b.visible = !1;
        let t = Ir(a, u.index, e);
        for (let e of t.meshes)
          ((e.castShadow = e.receiveShadow = !0),
            g.torso.add(e),
            this.meshes.push(e));
        for (let e of t.eyes) (g.head.add(e), this.glow.push(e));
        this.veil = t;
      }
      if (t === `sniper`)
        for (let [t, n] of ei(u.index, e).entries())
          ((n.castShadow = !0),
            (n.receiveShadow = t === 0),
            g.torso.add(n),
            this.meshes.push(n));
      for (let n of [`L`, `R`]) {
        if (c) {
          let r = n === `L` ? -1 : 1,
            i = _(
              g[`arm` + n],
              Si({
                top: 0.05,
                bottom: -0.52,
                a: [0.066, 0.066],
                b: [0.058, 0.058],
                round: 0.05,
                joints: [{ y: -ve, band: 0.1, below: !0 }],
                colour: () => [Q, Pt.cloth, 0.9],
              }),
              `arm`,
              r,
              (e) => e.add(new M(r * he, me, 0)).multiplyScalar(be),
              0.9,
            );
          if (
            (this.limbs.push({ g: i.geometry, bones: [g[`fore` + n]] }),
            t === `sniper`)
          )
            for (let [t, r, i, a, o] of [
              [`arm`, 0.02, -0.22, 0.066, 1],
              [`fore`, -0.07, -0.21, 0.06, 2],
            ]) {
              let s = ni(r, i, a, o + (n === `L` ? 0 : 5), 70, e);
              ((s.castShadow = !0), g[t + n].add(s), this.meshes.push(s));
            }
          m(g[`fore` + n], zt(h.fore.slice(2).map((e) => e.clone())));
        } else
          (m(g[`arm` + n], zt(h.upper.map((e) => e.clone()))),
            m(g[`fore` + n], zt(h.fore.map((e) => e.clone()))));
        if (c) {
          let r = _(
            g[`leg` + n],
            Si({
              top: Vi.bottom,
              bottom: -(fe + pe) - 0.06,
              a: [Bi.half, 0.106],
              b: [0.07, 0.076],
              shift: (n === `L` ? 1 : -1) * Bi.shift,
              joints: [{ y: -fe, band: 0.11, below: !0 }],
              colour: () => [Q, Pt.cloth, 0.82],
            }),
            `leg`,
            n === `L` ? -1 : 1,
            (e) => e.add(new M((n === `L` ? -1 : 1) * ge, 0, 0)),
            0.82,
          );
          this.limbs.push({ g: r.geometry, bones: [g[`shin` + n]] });
          let [i, a] =
            t === `sniper` ? [ci[e], { shade: 0.6232 }] : [Q, X(0.6232)];
          m(
            g[`shin` + n],
            J(0.14, 0.1, 0.271, 0, -pe - 0.01, -0.0595, i, {
              ...a,
              bevel: 0.01,
            }),
          );
          let o = n === `L` ? -1 : 1;
          m(
            g[`arm` + n],
            zt([
              J(0.006, 0.05, 0.062, o * 0.066, -0.075, 0, 2763559),
              ...Zi(Yi[e], 0.054, 0.04, o * 0.066, -0.075, 0, `x`, o),
            ]),
          );
        } else
          (m(g[`leg` + n], zt(h.thigh.map((e) => e.clone()))),
            m(g[`shin` + n], zt(h.shin.map((e) => e.clone()))));
        c || m(g[`foot` + n], zt(h.foot.map((e) => e.clone())));
      }
      for (let e of Object.values(h)) for (let t of e) t.dispose();
      ((this.weaponMesh = m(g.weapon, ea())),
        (this.knife = At()),
        (this.knife.visible = !1),
        (this.knife.castShadow = !0),
        this.knife.position.copy(Ma.pos),
        this.knife.scale.setScalar(Ma.scale),
        g.foreR.add(this.knife),
        (this.tris = this.meshes.reduce((e, t) => e + Vt(t.geometry), 0)));
    }
    setExpression(e) {
      if (e === this.expr) return;
      this.expr = e;
      let t = Yt(this.faceIndex, e),
        n = this.faceGeo.attributes.uv;
      (n.setXY(0, t[0], t[3]),
        n.setXY(1, t[2], t[3]),
        n.setXY(2, t[0], t[1]),
        n.setXY(3, t[2], t[1]),
        (n.needsUpdate = !0));
    }
    animate(e, t) {
      ((e = Math.min(e, 0.05)), (this.time += e));
      let n = this.springs,
        r = this.first,
        i = (t, i, a, o) => {
          let s = n[t];
          if (r) return ((s[0] = i), (s[1] = 0), s[0]);
          let c = 2 * Math.sqrt(a) * o;
          return (
            (s[1] += (a * (i - s[0]) - c * s[1]) * e),
            (s[0] += s[1] * e),
            s[0]
          );
        },
        a = {
          ...t,
          h: i(`h`, t.h, 70, 0.62),
          aimW: $(i(`aimW`, t.aimW, 160, 0.7), 0, 1.08),
          sprintW: $(i(`sprintW`, t.sprintW, 60, 0.9), 0, 1),
          hspeed: Math.max(0, i(`hspeed`, t.hspeed, 40, 1)),
        },
        o = yt(a, this.target),
        s = $(a.hspeed / 3.2, 0, 1),
        c = a.h >= 1.3 ? 1 : 0.3,
        l = +(t.deadT < 0),
        u = (1 - $(a.aimW, 0, 1)) * $((a.h - 0.7) / 0.5, 0, 1) * l,
        d = this.carry,
        f = va;
      if (u > 0)
        for (let e in d)
          o[e] += (d[e] - Pa(f[e], ya[e], $(a.sprintW, 0, 1))) * u;
      this.carryW = u;
      let p = s * c * l,
        m = $(a.sprintW, 0, 1),
        h = 1 - $(a.aimW, 0, 1) * 0.85,
        g = Math.sin(a.phase),
        _ = Math.cos(2 * a.phase),
        v = -g * (0.1 + 0.08 * m) * p,
        y = g * (0.16 + 0.14 * m) * p * h,
        b = -((0.08 + 0.12 * m) * p + 0.035 * (0.5 - 0.5 * _) * p);
      ((o.hipYaw += v),
        (o.torsoYaw += y - v),
        (o.torsoTilt += b),
        (o.hipY -= 0.012 * (0.5 - 0.5 * _) * p),
        (o.headYaw -= y * 0.6),
        (o.headPitch -= b * 0.8),
        (o.wpnY += 0.018 * p * h * Math.cos(2 * a.phase + 0.8)),
        (o.wpnPitch += 0.035 * p * h * Math.sin(2 * a.phase + 0.8)),
        (o.wpnYaw += 0.07 * g * p * h),
        (o.wpnRoll += 0.06 * g * p * h),
        (this.pump = m * p),
        this.pump > 0 &&
          ((o.armLx = Pa(o.armLx, 0.35 - g * 0.85, this.pump)),
          (o.armLy = Pa(o.armLy, 0, this.pump)),
          (o.armLz = Pa(o.armLz, 0.14, this.pump)),
          (o.foreL = Pa(o.foreL, 1.35 + 0.2 * g, this.pump))));
      let x = a.aimW * (a.h >= 1.3 ? 1 : 0.4) * l;
      if (
        ((o.wpnY += 0.13 * x),
        (o.wpnX -= 0.035 * x),
        (o.headPitch += 0.08 * x),
        t.deadT >= 0)
      ) {
        let e = $(t.deadT / 0.8, 0, 1),
          n = e * e * (3 - 2 * e),
          r = {
            armLx: 0.25,
            armLy: 0,
            armLz: 1.15,
            foreL: 0.35,
            armRx: 0.1,
            armRy: 0,
            armRz: -1.3,
            foreR: 0.5,
            wpnX: 0.5,
            wpnY: 0.2,
            wpnZ: 0.16 * (t.deadDir > 0 ? 1 : -1),
            wpnPitch: Math.PI / 2,
            wpnYaw: 0.3,
            wpnRoll: 1.5,
          };
        for (let e in r) o[e] = Pa(o[e], r[e], n);
      }
      let S = (1 - s) * l * (a.h > 1.2 ? 1 : 0.4) * (1 - a.aimW);
      ((this.glance.t -= e),
        this.glance.t < 0 &&
          ((this.glance.t = 2 + Math.random() * 4),
          (this.glance.yaw =
            Math.random() < 0.5 ? 0 : (Math.random() - 0.5) * 1.1)),
        (this.glance.cur = Pa(
          this.glance.cur,
          this.glance.yaw * S,
          1 - Math.exp(-e * 3),
        )),
        (o.headYaw += this.glance.cur),
        (o.torsoYaw += this.glance.cur * 0.15));
      let C = Math.sin(this.time * 0.7) * S;
      ((o.torsoRoll += C * 0.035),
        (o.headPitch += Math.sin(this.time * 0.43) * 0.03 * S),
        (o.foreL += 0.05 * S),
        (o.foreR += 0.04 * S));
      let w = Math.sin(a.phase),
        T = Math.cos(a.phase);
      ((this.hipRoll = (T * 0.075 * s * c + C * 0.03) * l),
        (this.hipShift = (T * 0.03 * s * c + C * 0.02) * l),
        (o.torsoRoll -= this.hipRoll * 0.8),
        (o.headYaw -= o.torsoYaw * 0.4));
      let E = o.hipPitch + o.legLx + o.shinL,
        D = o.hipPitch + o.legRx + o.shinR,
        O = $(1 - Math.abs(o.hipPitch) / 1.1, 0, 1) * l;
      if (
        ((this.target.footL = Pa(
          0.45,
          $(-E, -0.9, 0.9) + Math.max(0, -w) * 0.35 * s,
          O,
        )),
        (this.target.footR = Pa(
          0.45,
          $(-D, -0.9, 0.9) + Math.max(0, w) * 0.35 * s,
          O,
        )),
        t.fireT >= 0 && t.fireT < 0.2)
      ) {
        let e = Math.sin(Math.PI * $(t.fireT / 0.2, 0, 1));
        ((o.torsoTilt -= 0.05 * e),
          (o.headPitch += 0.03 * e),
          (o.torsoYaw += 0.03 * e));
      }
      let k = this.pose,
        A = this.vel,
        j = t.deadT >= 0 ? 260 : 700,
        ee = t.deadT >= 0 ? 0.42 : 0.62,
        te = 2 * Math.sqrt(j) * ee;
      for (let t of [...ot, `footL`, `footR`]) {
        let n = o[t] ?? 0;
        if (r || k[t] === void 0) {
          ((k[t] = n), (A[t] = 0));
          continue;
        }
        ((A[t] += (j * (n - k[t]) - te * A[t]) * e), (k[t] += A[t] * e));
      }
      this.first = !1;
      let M = +(t.deadT < 0),
        ne = +(t.throwT >= 0 && t.throwT < 0.72),
        re = (this.knifeState = ie(t.knifeT, (this._kn ??= {}))),
        ae = 1 - Math.exp(-e * 12);
      ((this.contactR = r
        ? M * (1 - ne)
        : Pa(this.contactR, M * (1 - ne) * (re ? 1 - re.w : 1), ae)),
        (this.contactL = r
          ? M
          : Pa(
              this.contactL,
              M *
                (1 - (this.pump ?? 0)) *
                (1 - (qe(t.gesture, t.gestureT, (this._gs ??= {}))?.w ?? 0)),
              ae,
            )),
        (this.reloadP =
          t.reloadT >= 0 && t.reloadT < 1.8 ? t.reloadT / Xe : -1),
        this.apply(k),
        (this.blink -= e),
        this.blink < -0.12 && (this.blink = 2.5 + Math.random() * 3.5));
      let oe =
        t.deadT >= 0.3
          ? 1
          : (t.hitT >= 0 && t.hitT < 0.5) || t.deadT >= 0
            ? 3
            : this.blink < 0
              ? 1
              : a.aimW > 0.6
                ? 2
                : 0;
      this.setExpression(oe);
      for (let [e, t] of this.glow.entries())
        t.isSprite
          ? (t.material.opacity =
              oe === 1
                ? 0.35
                : 0.78 +
                  Math.sin(this.time * 23 + e) * 0.04 +
                  Math.sin(this.time * 7.3) * 0.05)
          : (t.visible = oe !== 1);
    }
    apply(e) {
      let t = this.sk;
      (t.hips.position.set(this.hipShift || 0, e.hipY, 0),
        t.hips.rotation.set(e.hipPitch, e.hipYaw, this.hipRoll || 0),
        t.torso.rotation.set(e.torsoTilt, e.torsoYaw, e.torsoRoll),
        t.head.rotation.set(e.headPitch, e.headYaw, -(this.hipRoll || 0) * 0.3),
        t.legL.rotation.set(e.legLx, 0, e.legLz),
        t.legR.rotation.set(e.legRx, 0, e.legRz),
        t.shinL.rotation.set(e.shinL, 0, 0),
        t.shinR.rotation.set(e.shinR, 0, 0),
        t.footL.rotation.set(e.footL || 0, 0, 0),
        t.footR.rotation.set(e.footR || 0, 0, 0),
        t.armL.rotation.set(e.armLx, e.armLy, e.armLz),
        t.armR.rotation.set(e.armRx, e.armRy, e.armRz),
        t.foreL.rotation.set(e.foreL, 0, 0),
        t.foreR.rotation.set(e.foreR, 0, 0),
        t.weapon.position.set(e.wpnX, e.wpnY, e.wpnZ),
        t.weapon.rotation.set(e.wpnPitch, e.wpnYaw, e.wpnRoll),
        this.handContact());
      let n = this.knifeState;
      ((this.knife.visible = !!n?.knife),
        n && (Aa(t, n), this.knife.quaternion.copy(ja(t, Da))),
        this.pants && qi(this.pants, t.legL, t.legR),
        this.veil?.update(t.head));
      for (let e of this.limbs)
        zi(
          e.g,
          e.bones.map((t, n) =>
            e.invertFirst && n === 0
              ? t.quaternion.clone().invert()
              : t.quaternion,
          ),
        );
    }
    handContact() {
      let e = this.sk,
        t = this.contactR ?? 1,
        n = this.contactL ?? 1;
      if (t < 0.001 && n < 0.001) return;
      let r = this.reloadP ?? -1;
      if ((fa.copy(la), r >= 0)) {
        let e = (e, t) => $((r - e) / (t - e), 0, 1),
          t = (e) => e * e * (3 - 2 * e);
        (fa.lerp(ua, t(e(0.05, 0.25))),
          fa.lerp(da, t(e(0.3, 0.5)) * (1 - t(e(0.55, 0.72)))),
          fa.lerp(la, t(e(0.82, 0.98))));
      }
      (e.weapon.updateMatrix(), pa.set(0, 0, 0));
      let i = (t, n) => {
        (ma.copy(n).applyMatrix4(e.weapon.matrix).add(pa),
          ha.subVectors(ma, t.position));
        let r = ha.length();
        r > 0.585 && pa.addScaledVector(ha, (0.585 - r) / r);
      };
      for (let t = 0; t < 6; t++) (i(e.armR, ca), i(e.armL, fa));
      (e.weapon.position.addScaledVector(pa, Math.max(t, n)),
        e.weapon.updateMatrix());
      for (let [r, i, a, o] of [
        [e.armR, e.foreR, ca, t],
        [e.armL, e.foreL, fa, n],
      ])
        o < 0.001 ||
          (ga.copy(r.quaternion),
          _a.copy(i.quaternion),
          Na(r, i, a, e.weapon, r === e.armR ? (this.carryW ?? 0) : 0),
          o < 0.999 &&
            (r.quaternion.slerpQuaternions(ga, r.quaternion.clone(), o),
            i.quaternion.slerpQuaternions(_a, i.quaternion.clone(), o)));
    }
    static hitboxes() {
      return {
        head: `${W.w.toFixed(2)} x ${W.h.toFixed(2)} x ${W.d.toFixed(2)} m cube (was 0.14 m radius capsule)`,
        torso: `${(0.42 * be).toFixed(2)} x ${(0.62 * be).toFixed(2)} x ${(0.25 * be).toFixed(2)} m`,
        top: (ye + W.neck * be + Xt).toFixed(2),
      };
    }
    dispose() {
      for (let e of this.meshes) e.geometry.dispose();
      for (let e of this.glow)
        (e.isSprite || e.geometry.dispose(), e.material.dispose());
      (this.material.dispose(),
        this.smoothMaterial.dispose(),
        this.limbMaterial.dispose(),
        this.shellMaterial.dispose());
      for (let e of this.paintMats) e.dispose();
    }
  };
