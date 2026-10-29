// assets__gain-pop-BO3NCiqK 08 — opacity
// Lines 1683-1731 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
function ft(e, { color: t = `#ffd27a`, suffix: n = ``, style: r = `` } = {}) {
  let i = null,
    a = 0,
    o = -1 / 0,
    s = null;
  return {
    pop(c) {
      if (!(c > 0) || !e) return;
      let l = performance.now() / 1e3;
      ((!i || l - o > ut) &&
        (i?.remove(),
        (a = 0),
        (i = document.createElement(`div`)),
        (i.className = `sl-gain`),
        (i.style.cssText = `position:absolute;pointer-events:none;white-space:nowrap;font:800 15px/1 system-ui;letter-spacing:.04em;color:${t};text-shadow:0 1px 3px #000,0 0 8px ${t}66;${r}`),
        e.appendChild(i)),
        (a += Math.round(c)),
        (o = l),
        (i.textContent = `+${a}${n}`),
        s?.cancel?.(),
        (s =
          i.animate?.(
            [
              { transform: `translateY(4px) scale(1.25)`, opacity: 0 },
              {
                transform: `translateY(-4px) scale(1)`,
                opacity: 1,
                offset: 0.15,
              },
              {
                transform: `translateY(-10px) scale(1)`,
                opacity: 1,
                offset: 0.65,
              },
              { transform: `translateY(-22px) scale(.95)`, opacity: 0 },
            ],
            { duration: dt * 1e3, easing: `ease-out`, fill: `forwards` },
          ) ?? null));
      let u = i;
      s &&
        (s.onfinish = () => {
          i === u && (u.remove(), (i = null));
        });
    },
    dispose() {
      (s?.cancel?.(), i?.remove(), (i = null));
    },
  };
}
