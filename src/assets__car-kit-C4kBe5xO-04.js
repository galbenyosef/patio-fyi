// assets__car-kit-C4kBe5xO 04 — fillstyle
// Lines 944-996 of readable/assets__car-kit-C4kBe5xO.pretty.js (statement-aligned).
function R() {
  return (I ??= new r({
    roughness: 0.6,
    map: g(256, 64, (e, t, n) => {
      ((e.fillStyle = `#6a4326`), e.fillRect(0, 0, t, n));
      let r = h(9);
      for (let i = 0; i < 60; i++) {
        ((e.strokeStyle = `rgba(${r() < 0.5 ? `40,22,10` : `140,96,58`},${0.3 + r() * 0.4})`),
          (e.lineWidth = 1 + r() * 2),
          e.beginPath());
        let i = r() * n;
        (e.moveTo(0, i),
          e.bezierCurveTo(
            t * 0.3,
            i + (r() - 0.5) * 10,
            t * 0.6,
            i + (r() - 0.5) * 10,
            t,
            i,
          ),
          e.stroke());
      }
      ((e.strokeStyle = `#d8c9a8`),
        (e.lineWidth = 4),
        e.strokeRect(2, 2, t - 4, n - 4));
    }),
  }));
}
function z() {
  return (L ??= new r({
    roughness: 0.4,
    map: g(128, 128, (e, t) => {
      ((e.fillStyle = `#f0efea`),
        e.fillRect(0, 0, t, t),
        (e.fillStyle = `#c7a23a`),
        e.beginPath());
      for (let t = 0; t < 10; t++) {
        let n = (t / 10) * Math.PI * 2 - Math.PI / 2,
          r = t % 2 ? 26 : 56;
        e.lineTo(64 + Math.cos(n) * r, 64 + Math.sin(n) * r);
      }
      (e.fill(),
        (e.fillStyle = `#1a2a4a`),
        (e.font = `700 18px Arial`),
        (e.textAlign = `center`),
        e.fillText(`GREYWATER`, 64, 122));
    }),
  }));
}
var B = [
  16777215, 14080218, 3421754, 3821432, 9316906, 4020805, 12101768, 8159888,
  2763824, 7311270, 13203246, 5978706,
];
