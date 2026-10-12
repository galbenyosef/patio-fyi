// assets__pointer-lock-policy-DsB7e7Fn 01 — all
// Lines 1-40 of readable/assets__pointer-lock-policy-DsB7e7Fn.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e() {
  let e = 0;
  return {
    press(t) {
      e |= t;
    },
    consume(t) {
      let n = t | e;
      return ((e = 0), n);
    },
    clear() {
      e = 0;
    },
  };
}
function t(e, t) {
  let n = /^(?:Digit|Numpad)([1-8])$/.exec(e),
    r = n ? Number(n[1]) - 1 : -1;
  return r >= 0 && r < t ? r : -1;
}
function n(e) {
  return (
    !!e &&
    (e.isContentEditable ||
      !!e.closest?.(
        `input, textarea, select, button, a[href], [role="textbox"], [role="slider"], [contenteditable="true"]`,
      ))
  );
}
var r = () => {
  try {
    let e = new URLSearchParams(location.search);
    return (
      e.has(`nolock`) || (navigator.webdriver === !0 && !e.has(`pointerlock`))
    );
  } catch {
    return !1;
  }
};
