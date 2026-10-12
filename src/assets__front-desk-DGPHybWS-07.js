// assets__front-desk-DGPHybWS 07 — getelementbyid
// Lines 1949-1966 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
if (typeof document < `u` && document.getElementById(`backdrop`) && !A()) Te();
else if (typeof document < `u` && document.getElementById(`backdrop`)) {
  let e = () => {
      try {
        window.frontDesk = Ee();
      } catch (e) {
        (console.warn(`Front desk`, e), Te());
      }
    },
    t = () =>
      window.requestIdleCallback
        ? requestIdleCallback(e, { timeout: 1500 })
        : setTimeout(e, 200);
  document.readyState === `complete`
    ? t()
    : addEventListener(`load`, t, { once: !0 });
}
//# sourceMappingURL=front-desk-DGPHybWS.js.map
