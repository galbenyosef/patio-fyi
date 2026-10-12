// assets__shared-DPd8kRBt 01 — bytelength
// Lines 1-41 of readable/assets__shared-DPd8kRBt.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
var e = Object.freeze({
  range: 50,
  refDistance: 3,
  maxSpeakers: 6,
  speakerHold: 0.4,
  sampleRate: 48e3,
  frameMs: 20,
  bitrate: 2e4,
  maxFrameBytes: 400,
  packetsPerSecond: 50,
  burst: 25,
});
function t(e, t) {
  let n = new Uint8Array(2 + t.byteLength);
  return ((n[0] = 8), (n[1] = e & 255), n.set(t, 2), n);
}
function n(t) {
  return !t ||
    t.byteLength < 3 ||
    t[0] !== 8 ||
    t.byteLength - 2 > e.maxFrameBytes
    ? null
    : { seq: t[1], frame: t.subarray(2) };
}
function r(e, t, n) {
  let r = new Uint8Array(4 + n.byteLength);
  return (
    (r[0] = 8),
    (r[1] = e & 255),
    (r[2] = (e >> 8) & 255),
    (r[3] = t & 255),
    r.set(n, 4),
    r
  );
}
function i(e) {
  return !e || e.byteLength < 5 || e[0] !== 8
    ? null
    : { entityId: e[1] | (e[2] << 8), seq: e[3], frame: e.subarray(4) };
}
