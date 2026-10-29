// assets__cube-soldier-DMHrHkZL 19 — math
// Lines 5443-5965 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
var $ = (e, t, n) => (e < t ? t : e > n ? n : e),
  ko = (e, t, n) => e + (t - e) * n,
  Ao = class {
    constructor(e = {}) {
      ((this.sk = to()),
        (this.root = this.sk.root),
        (this.pose = qt()),
        (this.target = qt()),
        (this.vel = qt()),
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
        (this.carry = { ...ho }),
        this.build(e));
    }
    build({
      faction: e = 0,
      cls: n = `assault`,
      face: r = 0,
      headgear: i = 0,
      kit: a = 0,
      winter: s = !1,
      finish: c = `textured`,
      body: l = `seamless`,
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
          cls: n,
          face: r,
          headgear: i,
          kit: a,
          winter: s,
          finish: c,
          body: l,
        }));
      let u = l === `seamless`;
      ((this.limbs = []), (this.pants = null), (this.veil = null));
      let d = ea[e],
        f = zn[r % zn.length],
        p = Qi[e][i % Qi[e].length],
        m = s ? { ...d, ...ra[e] } : d;
      ((this.material = Ya(d, s)),
        (this.smoothMaterial = Ya(d, s, !0)),
        (this.limbMaterial = Ya(d, s, !0)),
        (this.limbMaterial.roughness = 0.86),
        (this.shellMaterial = Ya(d, s, !0, Er(c))));
      let h = (
          e,
          n,
          r = n.userData.smoothLimb ? this.limbMaterial : this.material,
        ) => {
          let i = new t(n, r);
          return (
            (i.castShadow = i.receiveShadow = !0),
            e.add(i),
            this.meshes.push(i),
            i
          );
        },
        g = qa(n),
        _ = this.sk,
        v = (t, r, i, a, o, c) => {
          let l = {
              part: i,
              side: a,
              cls: n,
              pal: n === `sniper` && i !== `chest` ? { ...m, cloth: ta[e] } : m,
              base: c,
            },
            u = Xr([i, a, n, e, s].join(`:`), r, l, o);
          Zr(r);
          let f = Ya(d, s, !0, u);
          return ((f.roughness = 0.86), this.paintMats.push(f), h(t, r, f));
        },
        y = (e) => e;
      if (u) {
        let e = v(
          _.hips,
          ga({
            top: 0.3,
            bottom: Fa.top,
            a: [0.22, 0.12],
            b: [Fa.X, Fa.D],
            joints: [{ y: 0, c: 0.19, band: 0.07, below: !1 }],
            colour: () => [Q, On.cloth, 0.82],
          }),
          `waist`,
          0,
          y,
          0.82,
        );
        (this.limbs.push({ g: e.geometry, bones: [_.torso] }),
          (this.pants = v(_.hips, Ia(), `pants`, 0, y, 0.82).geometry),
          v(_.torso, la(), `chest`, 0, (e) => e.multiplyScalar(be), 1));
      }
      h(
        _.torso,
        Nn([
          ...ca(u),
          ...ma(n, m),
          ...(u && n !== `sniper` ? Ka(n, e) : []),
          ...(n === `sniper` && [`scarf`, `bedroll`, `heavy`].includes($i[a])
            ? []
            : ha($i[a])),
        ]),
      );
      let b = sa(f, m, p, n, c);
      (b.shell && h(_.head, b.shell, this.shellMaterial),
        n !== `sniper` && h(_.head, b.hard),
        b.soft && h(_.head, b.soft, this.smoothMaterial),
        (this.glow = n !== `sniper` && p.endsWith(`down`) ? Qa(_.head) : []),
        (this.faceGeo = Pn(
          G.w - 0.03,
          G.h - 0.03,
          0,
          G.y,
          Gn - 0.0015,
          Un(r, 0),
          Math.PI,
        )),
        (this.faceIndex = r % zn.length),
        (this.expr = -1));
      let x = h(_.head, this.faceGeo, eo());
      if (((x.castShadow = !1), n === `sniper`)) {
        x.visible = !1;
        let t = ki(s, f.index, e);
        for (let e of t.meshes)
          ((e.castShadow = e.receiveShadow = !0),
            _.torso.add(e),
            this.meshes.push(e));
        for (let e of t.eyes) (_.head.add(e), this.glow.push(e));
        this.veil = t;
      }
      if (n === `sniper`)
        for (let [t, n] of qi(f.index, e).entries())
          ((n.castShadow = !0),
            (n.receiveShadow = t === 0),
            _.torso.add(n),
            this.meshes.push(n));
      for (let t of [`L`, `R`]) {
        if (u) {
          let r = t === `L` ? -1 : 1,
            i = v(
              _[`arm` + t],
              ga({
                top: 0.05,
                bottom: -0.52,
                a: [0.066, 0.066],
                b: [0.058, 0.058],
                round: 0.05,
                joints: [{ y: -ve, band: 0.1, below: !0 }],
                colour: () => [Q, On.cloth, 0.9],
              }),
              `arm`,
              r,
              (e) => e.add(new o(r * he, me, 0)).multiplyScalar(be),
              0.9,
            );
          if (
            (this.limbs.push({ g: i.geometry, bones: [_[`fore` + t]] }),
            n === `sniper`)
          )
            for (let [n, r, i, a, o] of [
              [`arm`, 0.02, -0.22, 0.066, 1],
              [`fore`, -0.07, -0.21, 0.06, 2],
            ]) {
              let s = Yi(r, i, a, o + (t === `L` ? 0 : 5), 70, e);
              ((s.castShadow = !0), _[n + t].add(s), this.meshes.push(s));
            }
          h(_[`fore` + t], Nn(g.fore.slice(2).map((e) => e.clone())));
        } else
          (h(_[`arm` + t], Nn(g.upper.map((e) => e.clone()))),
            h(_[`fore` + t], Nn(g.fore.map((e) => e.clone()))));
        if (u) {
          let r = v(
            _[`leg` + t],
            ga({
              top: Fa.bottom,
              bottom: -(fe + pe) - 0.06,
              a: [Pa.half, 0.106],
              b: [0.07, 0.076],
              shift: (t === `L` ? 1 : -1) * Pa.shift,
              joints: [{ y: -fe, band: 0.11, below: !0 }],
              colour: () => [Q, On.cloth, 0.82],
            }),
            `leg`,
            t === `L` ? -1 : 1,
            (e) => e.add(new o((t === `L` ? -1 : 1) * ge, 0, 0)),
            0.82,
          );
          this.limbs.push({ g: r.geometry, bones: [_[`shin` + t]] });
          let [i, a] =
            n === `sniper` ? [ta[e], { shade: 0.6232 }] : [Q, ia(0.6232)];
          h(
            _[`shin` + t],
            Y(0.14, 0.1, 0.271, 0, -pe - 0.01, -0.0595, i, {
              ...a,
              bevel: 0.01,
            }),
          );
          let s = t === `L` ? -1 : 1;
          h(
            _[`arm` + t],
            Nn([
              Y(0.006, 0.05, 0.062, s * 0.066, -0.075, 0, 2763559),
              ...Ga(Ua[e], 0.054, 0.04, s * 0.066, -0.075, 0, `x`, s),
            ]),
          );
        } else
          (h(_[`leg` + t], Nn(g.thigh.map((e) => e.clone()))),
            h(_[`shin` + t], Nn(g.shin.map((e) => e.clone()))));
        u || h(_[`foot` + t], Nn(g.foot.map((e) => e.clone())));
      }
      for (let e of Object.values(g)) for (let t of e) t.dispose();
      ((this.weaponMesh = h(_.weapon, Ja())),
        (this.knife = wn()),
        (this.knife.visible = !1),
        (this.knife.castShadow = !0),
        this.knife.position.copy(Do.pos),
        this.knife.scale.setScalar(Do.scale),
        _.foreR.add(this.knife),
        (this.tris = this.meshes.reduce((e, t) => e + Fn(t.geometry), 0)));
    }
    setExpression(e) {
      if (e === this.expr) return;
      this.expr = e;
      let t = Un(this.faceIndex, e),
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
        o = pn(a, this.target),
        s = $(a.hspeed / 3.2, 0, 1),
        c = a.h >= 1.3 ? 1 : 0.3,
        l = +(t.deadT < 0),
        u = (1 - $(a.aimW, 0, 1)) * $((a.h - 0.7) / 0.5, 0, 1) * l,
        d = this.carry,
        f = po;
      if (u > 0)
        for (let e in d)
          o[e] += (d[e] - ko(f[e], mo[e], $(a.sprintW, 0, 1))) * u;
      this.carryW = u;
      let p = 1 - $(a.slideW || 0, 0, 1),
        m = s * c * l * p,
        h = $(a.sprintW, 0, 1),
        g = 1 - $(a.aimW, 0, 1) * 0.85,
        _ = Math.sin(a.phase),
        v = Math.cos(2 * a.phase),
        y = -_ * (0.1 + 0.08 * h) * m,
        b = _ * (0.16 + 0.14 * h) * m * g,
        x = -((0.08 + 0.12 * h) * m + 0.035 * (0.5 - 0.5 * v) * m);
      ((o.hipYaw += y),
        (o.torsoYaw += b - y),
        (o.torsoTilt += x),
        (o.hipY -= 0.012 * (0.5 - 0.5 * v) * m),
        (o.headYaw -= b * 0.6),
        (o.headPitch -= x * 0.8),
        (o.wpnY += 0.018 * m * g * Math.cos(2 * a.phase + 0.8)),
        (o.wpnPitch += 0.035 * m * g * Math.sin(2 * a.phase + 0.8)),
        (o.wpnYaw += 0.07 * _ * m * g),
        (o.wpnRoll += 0.06 * _ * m * g),
        (this.pump = h * m),
        this.pump > 0 &&
          ((o.armLx = ko(o.armLx, 0.35 - _ * 0.85, this.pump)),
          (o.armLy = ko(o.armLy, 0, this.pump)),
          (o.armLz = ko(o.armLz, 0.14, this.pump)),
          (o.foreL = ko(o.foreL, 1.35 + 0.2 * _, this.pump))));
      let S = a.aimW * (a.h >= 1.3 ? 1 : 0.4) * l;
      if (
        ((o.wpnY += 0.13 * S),
        (o.wpnX -= 0.035 * S),
        (o.headPitch += 0.08 * S),
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
        for (let e in r) o[e] = ko(o[e], r[e], n);
      }
      let C = (1 - s) * l * (a.h > 1.2 ? 1 : 0.4) * (1 - a.aimW);
      ((this.glance.t -= e),
        this.glance.t < 0 &&
          ((this.glance.t = 2 + Math.random() * 4),
          (this.glance.yaw =
            Math.random() < 0.5 ? 0 : (Math.random() - 0.5) * 1.1)),
        (this.glance.cur = ko(
          this.glance.cur,
          this.glance.yaw * C,
          1 - Math.exp(-e * 3),
        )),
        (o.headYaw += this.glance.cur),
        (o.torsoYaw += this.glance.cur * 0.15));
      let w = Math.sin(this.time * 0.7) * C;
      ((o.torsoRoll += w * 0.035),
        (o.headPitch += Math.sin(this.time * 0.43) * 0.03 * C),
        (o.foreL += 0.05 * C),
        (o.foreR += 0.04 * C));
      let T = Math.sin(a.phase),
        E = Math.cos(a.phase);
      ((this.hipRoll = (E * 0.075 * s * c * p + w * 0.03) * l),
        (this.hipShift = (E * 0.03 * s * c + w * 0.02) * l),
        (o.torsoRoll -= this.hipRoll * 0.8),
        (o.headYaw -= o.torsoYaw * 0.4));
      let D = o.hipPitch + o.legLx + o.shinL,
        ee = o.hipPitch + o.legRx + o.shinR,
        te = $(1 - Math.abs(o.hipPitch) / 1.1, 0, 1) * l;
      if (
        ((this.target.footL = ko(
          0.45,
          $(-D, -0.9, 0.9) + Math.max(0, -T) * 0.35 * s,
          te,
        )),
        (this.target.footR = ko(
          0.45,
          $(-ee, -0.9, 0.9) + Math.max(0, T) * 0.35 * s,
          te,
        )),
        t.fireT >= 0 && t.fireT < 0.2)
      ) {
        let e = Math.sin(Math.PI * $(t.fireT / 0.2, 0, 1));
        ((o.torsoTilt -= 0.05 * e),
          (o.headPitch += 0.03 * e),
          (o.torsoYaw += 0.03 * e));
      }
      let O = this.pose,
        k = this.vel,
        A = t.deadT >= 0 ? 260 : 700,
        ne = t.deadT >= 0 ? 0.42 : 0.62,
        j = 2 * Math.sqrt(A) * ne;
      for (let t of [...Rt, `footL`, `footR`]) {
        let n = o[t] ?? 0;
        if (r || O[t] === void 0) {
          ((O[t] = n), (k[t] = 0));
          continue;
        }
        ((k[t] += (A * (n - O[t]) - j * k[t]) * e), (O[t] += k[t] * e));
      }
      this.first = !1;
      let M = +(t.deadT < 0),
        re = +(t.throwT >= 0 && t.throwT < 0.72),
        ie = (this.knifeState = ae(t.knifeT, (this._kn ??= {}))),
        oe = 1 - Math.exp(-e * 12);
      ((this.contactR = r
        ? M * (1 - re)
        : ko(this.contactR, M * (1 - re) * (ie ? 1 - ie.w : 1), oe)),
        (this.contactL = r
          ? M
          : ko(
              this.contactL,
              M *
                (1 - (this.pump ?? 0)) *
                (1 - (Xe(t.gesture, t.gestureT, (this._gs ??= {}))?.w ?? 0)),
              oe,
            )),
        (this.reloadP =
          t.reloadT >= 0 && t.reloadT < 1.8 ? t.reloadT / At : -1),
        this.apply(O),
        (this.blink -= e),
        this.blink < -0.12 && (this.blink = 2.5 + Math.random() * 3.5));
      let se =
        t.deadT >= 0.3
          ? 1
          : (t.hitT >= 0 && t.hitT < 0.5) || t.deadT >= 0
            ? 3
            : this.blink < 0
              ? 1
              : a.aimW > 0.6
                ? 2
                : 0;
      this.setExpression(se);
      for (let [e, t] of this.glow.entries())
        t.isSprite
          ? (t.material.opacity =
              se === 1
                ? 0.35
                : 0.78 +
                  Math.sin(this.time * 23 + e) * 0.04 +
                  Math.sin(this.time * 7.3) * 0.05)
          : (t.visible = se !== 1);
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
        n && (To(t, n), this.knife.quaternion.copy(Eo(t, So))),
        this.pants && Va(this.pants, t.legL, t.legR),
        this.veil?.update(t.head));
      for (let e of this.limbs)
        Na(
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
      if ((oo.copy(ro), r >= 0)) {
        let e = (e, t) => $((r - e) / (t - e), 0, 1),
          t = (e) => e * e * (3 - 2 * e);
        (oo.lerp(io, t(e(0.05, 0.25))),
          oo.lerp(ao, t(e(0.3, 0.5)) * (1 - t(e(0.55, 0.72)))),
          oo.lerp(ro, t(e(0.82, 0.98))));
      }
      (e.weapon.updateMatrix(), so.set(0, 0, 0));
      let i = (t, n) => {
        (co.copy(n).applyMatrix4(e.weapon.matrix).add(so),
          lo.subVectors(co, t.position));
        let r = lo.length();
        r > 0.585 && so.addScaledVector(lo, (0.585 - r) / r);
      };
      for (let t = 0; t < 6; t++) (i(e.armR, no), i(e.armL, oo));
      (e.weapon.position.addScaledVector(so, Math.max(t, n)),
        e.weapon.updateMatrix());
      for (let [r, i, a, o] of [
        [e.armR, e.foreR, no, t],
        [e.armL, e.foreL, oo, n],
      ])
        o < 0.001 ||
          (uo.copy(r.quaternion),
          fo.copy(i.quaternion),
          Oo(r, i, a, e.weapon, r === e.armR ? (this.carryW ?? 0) : 0),
          o < 0.999 &&
            (r.quaternion.slerpQuaternions(uo, r.quaternion.clone(), o),
            i.quaternion.slerpQuaternions(fo, i.quaternion.clone(), o)));
    }
    static hitboxes() {
      return {
        head: `${G.w.toFixed(2)} x ${G.h.toFixed(2)} x ${G.d.toFixed(2)} m cube (was 0.14 m radius capsule)`,
        torso: `${(0.42 * be).toFixed(2)} x ${(0.62 * be).toFixed(2)} x ${(0.25 * be).toFixed(2)} m`,
        top: (ye + G.neck * be + Wn).toFixed(2),
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
