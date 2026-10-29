// assets__ui-hhE6L1u7 32 — math
// Lines 15122-15162 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function xo(e, t, n, { round: r = !1 } = {}) {
  t &&
    (t.classList.toggle(`round`, r),
    (t.style.left = n.left - 6 + `px`),
    (t.style.top = n.top - 6 + `px`),
    (t.style.width = n.width + 12 + `px`),
    (t.style.height = n.height + 12 + `px`));
  let i = innerWidth,
    a = innerHeight,
    o = e.offsetWidth || 300,
    s = e.offsetHeight || 110,
    c,
    l,
    u;
  (n.right + 20 + o < i - 8
    ? ((c = `left`),
      (l = n.right + 20),
      (u = Math.min(a - s - 8, Math.max(8, n.top + n.height / 2 - s / 2))))
    : n.left - 20 - o > 8
      ? ((c = `right`),
        (l = n.left - 20 - o),
        (u = Math.min(a - s - 8, Math.max(8, n.top + n.height / 2 - s / 2))))
      : n.top - 20 - s > 8
        ? ((c = `above`),
          (u = n.top - 20 - s),
          (l = Math.min(i - o - 8, Math.max(8, n.left + n.width / 2 - o / 2))))
        : ((c = `below`),
          (u = Math.min(a - s - 8, n.top + n.height + 20)),
          (l = Math.min(i - o - 8, Math.max(8, n.left + n.width / 2 - o / 2)))),
    (e.dataset.side = c),
    (e.style.left = Math.round(l) + `px`),
    (e.style.top = Math.round(u) + `px`),
    e.style.setProperty(
      `--y`,
      Math.max(14, Math.min(s - 14, n.top + n.height / 2 - u)) + `px`,
    ),
    e.style.setProperty(
      `--x`,
      Math.max(14, Math.min(o - 14, n.left + n.width / 2 - l)) + `px`,
    ));
}
