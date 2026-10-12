// assets__lab-buildings-view-DJVr8phc 100 — fillstyle
// Lines 31409-31452 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function zl(e, t, n, r, i = !0) {
  if (E[e]) return e;
  let a = 2048,
    o = Math.max(64, Math.round((a * r) / n));
  return (
    (E[e] = {
      tex: Jc(a, o, (e) => {
        ((e.fillStyle = `#f7f5ef`), e.fillRect(0, 0, a, o));
        let n = o * 0.12;
        if (
          ([14168186, 15909402, 2792026].forEach((t, r) => {
            ((e.fillStyle = Gc(t)), e.fillRect(0, o - n * (3 - r), a, n * 0.9));
          }),
          (e.font = `900 ${o * 0.34}px "Arial Black", Impact, sans-serif`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          (e.fillStyle = `#d8307a`),
          e.fillText(t, a / 2 + (i ? o * 0.3 : 0), o * 0.34, a * 0.8),
          i)
        ) {
          let n = Math.min(a * 0.8, e.measureText(t).width),
            r = a / 2 - n / 2 - o * 0.12,
            i = o * 0.34,
            s = o * 0.2;
          ((e.fillStyle = `#f2c21a`),
            e.beginPath(),
            e.arc(r, i, s, 0, Math.PI * 2),
            e.fill(),
            (e.fillStyle = `#d8307a`),
            e.beginPath(),
            e.arc(r - s * 0.1, i + s * 0.1, s * 0.6, 0, Math.PI * 2),
            e.fill(),
            (e.fillStyle = `#fff`),
            e.beginPath(),
            e.arc(r + s * 0.15, i - s * 0.15, s * 0.14, 0, Math.PI * 2),
            e.fill());
        }
      }),
      rough: 0.45,
      glow: 0.45,
    }),
    e
  );
}
