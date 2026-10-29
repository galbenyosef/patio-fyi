// assets__index-D8RniaPa 04 — status
// Lines 1192-1522 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
((dt.BlurDirectionX = new F(1, 0)), (dt.BlurDirectionY = new F(0, 1)));
var ft = {
    name: `OutputShader`,
    uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } },
    vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`,
  },
  pt = class extends U {
    constructor() {
      (super(),
        (this.isOutputPass = !0),
        (this.uniforms = P.clone(ft.uniforms)),
        (this.material = new _e({
          name: ft.name,
          uniforms: this.uniforms,
          vertexShader: ft.vertexShader,
          fragmentShader: ft.fragmentShader,
        })),
        (this._fsQuad = new it(this.material)),
        (this._outputColorSpace = null),
        (this._toneMapping = null));
    }
    render(e, t, n) {
      ((this.uniforms.tDiffuse.value = n.texture),
        (this.uniforms.toneMappingExposure.value = e.toneMappingExposure),
        (this._outputColorSpace !== e.outputColorSpace ||
          this._toneMapping !== e.toneMapping) &&
          ((this._outputColorSpace = e.outputColorSpace),
          (this._toneMapping = e.toneMapping),
          (this.material.defines = {}),
          d.getTransfer(this._outputColorSpace) === `srgb` &&
            (this.material.defines.SRGB_TRANSFER = ``),
          this._toneMapping === 1
            ? (this.material.defines.LINEAR_TONE_MAPPING = ``)
            : this._toneMapping === 2
              ? (this.material.defines.REINHARD_TONE_MAPPING = ``)
              : this._toneMapping === 3
                ? (this.material.defines.CINEON_TONE_MAPPING = ``)
                : this._toneMapping === 4
                  ? (this.material.defines.ACES_FILMIC_TONE_MAPPING = ``)
                  : this._toneMapping === 6
                    ? (this.material.defines.AGX_TONE_MAPPING = ``)
                    : this._toneMapping === 7
                      ? (this.material.defines.NEUTRAL_TONE_MAPPING = ``)
                      : this._toneMapping === 5 &&
                        (this.material.defines.CUSTOM_TONE_MAPPING = ``),
          (this.material.needsUpdate = !0)),
        this.renderToScreen === !0
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  mt = he({ createRegistry: () => _t, yieldToBrowser: () => gt }),
  W =
    typeof document < `u` && typeof MessageChannel == `function`
      ? new MessageChannel()
      : null,
  ht = [];
W && (W.port1.onmessage = () => ht.shift()?.());
var gt = () =>
  W
    ? new Promise((e) => {
        (ht.push(e), W.port2.postMessage(0));
      })
    : null;
function _t({ events: e, log: t = console, onError: n = () => {} } = {}) {
  let r = new Map(),
    i = [],
    a = null,
    o = () => {
      a = null;
    },
    s = {
      add(e, t = `loaded`) {
        if (!e || !e.name) throw Error(`module descriptor needs a name`);
        (r.set(e.name, { desc: e, status: t, error: null, api: e.api ?? {} }),
          o());
      },
      markMissing(e) {
        (r.set(e, {
          desc: { name: e, deps: [] },
          status: `missing`,
          error: null,
          api: null,
        }),
          o());
      },
      markFailed(i, a) {
        let s = r.get(i) ?? { desc: { name: i, deps: [] }, api: null };
        ((s.status = `failed`),
          (s.error = a),
          (s.api = null),
          r.set(i, s),
          o(),
          e?.disableOwner(i),
          t.error?.(`[module:${i}] disabled: ${a?.stack || a}`),
          n(i, a),
          e?.emit(`module:failed`, { name: i, error: a }));
      },
      has(e) {
        let t = r.get(e);
        return !!t && t.status === `ok`;
      },
      get(e) {
        let t = r.get(e);
        return t && t.status === `ok` ? t.api : null;
      },
      status() {
        let e = {};
        for (let [t, n] of r) e[t] = n.status;
        return e;
      },
      errors() {
        let e = {};
        for (let [t, n] of r)
          n.error && (e[t] = String(n.error?.message ?? n.error));
        return e;
      },
      names() {
        return Array.from(r.keys());
      },
      descriptor(e) {
        return r.get(e)?.desc ?? null;
      },
      order(e = null) {
        let t = new Set(),
          n = (e, i = []) => {
            if (t.has(e)) return;
            let a = r.get(e);
            if (!(!a || (a.status !== `loaded` && a.status !== `ok`))) {
              if (i.includes(e))
                throw Error(
                  `module dependency cycle: ${[...i, e].join(` -> `)}`,
                );
              for (let t of a.desc.deps ?? []) n(t, [...i, e]);
              t.add(e);
            }
          };
        for (let t of e ?? r.keys()) n(t);
        return Array.from(t);
      },
      invoke(e, t, ...n) {
        let i = r.get(e);
        if (
          !i ||
          (i.status !== `ok` && (i.status !== `loaded` || t !== `init`))
        )
          return;
        let a = i.desc[t];
        if (typeof a == `function`)
          try {
            let t = a.call(i.desc, ...n);
            return t && typeof t.then == `function`
              ? t.catch((t) => {
                  s.markFailed(e, t);
                })
              : t;
          } catch (t) {
            s.markFailed(e, t);
            return;
          }
      },
      invokeAll(e, ...t) {
        let n = (a ??= s.order());
        for (let i of n) r.get(i).status === `ok` && s.invoke(i, e, ...t);
      },
      async initAll(e, a = null, { shouldStop: c = () => !1 } = {}) {
        let l;
        try {
          l = s.order(a);
        } catch (e) {
          return (t.error?.(String(e)), n(`core`, e), []);
        }
        let u = [];
        for (let t of l) {
          if (c()) break;
          let n = r.get(t);
          if (n.status !== `loaded`) continue;
          let a = (n.desc.deps ?? []).find(
            (e) => !r.get(e) || r.get(e).status !== `ok`,
          );
          if (a) {
            s.markFailed(
              t,
              Error(`dependency '${a}' is ${r.get(a)?.status ?? `missing`}`),
            );
            continue;
          }
          if (W && (await gt(), c())) break;
          ((n.status = `ok`), i.push(t));
          try {
            (await n.desc.init?.(e), u.push(t));
          } catch (e) {
            s.markFailed(t, e);
          }
        }
        if (a)
          for (let [e, t] of r) t.status === `loaded` && (t.status = `skipped`);
        return (o(), u);
      },
      disposeAll(t) {
        o();
        for (let a of i.splice(0).reverse()) {
          let i = r.get(a);
          if (i) {
            try {
              i.desc.dispose?.call(i.desc, t)?.catch?.((e) => n(a, e));
            } catch (e) {
              n(a, e);
            }
            (e?.removeOwner(a), (i.api = null), (i.status = `skipped`));
          }
        }
        o();
      },
    };
  return s;
}
function vt(
  e,
  { yieldTask: t = () => gt() ?? new Promise((e) => setTimeout(e, 0)) } = {},
) {
  let n = new WeakSet(),
    r = (e) =>
      n.has(e)
        ? !0
        : e.isReady()
          ? (e.getUniforms(), e.getAttributes(), n.add(e), !0)
          : !1;
  return {
    has: (e) => n.has(e),
    prepare: r,
    async wait(i, a = () => !1) {
      let o = new Set(i);
      for (; o.size && !a();) {
        let i = new Set(e.info.programs),
          s = !1;
        for (let e of o) {
          if (!i.has(e) || n.has(e)) {
            o.delete(e);
            continue;
          }
          if (r(e)) {
            (o.delete(e), (s = !0));
            break;
          }
        }
        o.size &&
          !a() &&
          (s ? await t() : await new Promise((e) => setTimeout(e, 10)));
      }
    },
  };
}
