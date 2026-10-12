// assets__ui-D46k2G3Q 30 — audio
// Lines 14408-14535 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var wa = `sl-settings-style`,
  Ta = `
#game-settings{position:absolute;top:28px;right:28px;z-index:60;pointer-events:auto;display:flex;align-items:center;gap:8px;padding:9px 14px 9px 11px;
 background:#101820e8;color:#edf2f4;border:1px solid #3c5260;border-radius:8px;font:600 13px system-ui;letter-spacing:.04em;cursor:pointer;transition:border-color .15s,background .15s}
#game-settings[hidden],.sl-set [hidden]{display:none!important}
#game-settings:hover{border-color:#4ee3df;background:#15222be8}
#game-settings svg{width:16px;height:16px}
.sl-set{--bg:#0c1319;--panel:#121c24;--raise:#18252f;--line:#26374380;--line2:#2f4453;--ink:#edf2f4;--mute:#93a8b5;--acc:#4ee3df;--acc2:#4ee3df26;--warn:#ffb35c;
 color:var(--ink);background:var(--bg);border:1px solid var(--line2);border-radius:14px;padding:0;width:min(980px,calc(100vw - 32px));height:min(720px,calc(100dvh - 32px));
 max-width:none;max-height:none;overflow:hidden;font:15px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;pointer-events:auto;box-shadow:0 30px 80px #000a}
.sl-set[open]{display:grid;grid-template:auto 1fr auto/210px 1fr;grid-template-areas:"head head" "nav main" "foot foot"}
.sl-set::backdrop{background:#03070acc;backdrop-filter:blur(3px)}
.sl-set *{box-sizing:border-box}
.sl-set-head{grid-area:head;display:flex;align-items:center;gap:14px;padding:18px 22px;border-bottom:1px solid var(--line2);background:linear-gradient(90deg,#4ee3df14,transparent 60%)}
.sl-set-head h2{margin:0;font-size:22px;letter-spacing:.02em}
.sl-set-head .sub{color:var(--mute);font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-top:2px}
.sl-set-x{margin-left:auto;width:36px;height:36px;border-radius:8px;border:1px solid var(--line2);background:transparent;color:var(--ink);font-size:20px;line-height:1;cursor:pointer}
.sl-set-x:hover{border-color:var(--acc)}
.sl-set-nav{grid-area:nav;display:flex;flex-direction:column;gap:3px;padding:14px 10px;border-right:1px solid var(--line2);background:#0a1015;overflow:auto}
.sl-set-tab{display:flex;align-items:center;gap:11px;width:100%;padding:10px 12px;border:0;border-radius:8px;background:transparent;color:var(--mute);font:600 14px system-ui;text-align:left;cursor:pointer;position:relative}
.sl-set-tab svg{width:18px;height:18px;flex:none;opacity:.8}
.sl-set-tab:hover{color:var(--ink);background:#ffffff08}
.sl-set-tab[aria-selected=true]{color:var(--ink);background:var(--acc2)}
.sl-set-tab[aria-selected=true]::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--acc)}
.sl-set-tab[aria-selected=true] svg{opacity:1;color:var(--acc)}
.sl-set-navhint{margin-top:auto;padding:10px 12px 2px;color:#6d818d;font-size:11px;line-height:1.5}
.sl-set-main{grid-area:main;overflow:auto;padding:6px 26px 26px;scrollbar-color:#2f4453 transparent}
.sl-set-panel h3{margin:18px 0 2px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--acc)}
.sl-set-panel h3+p.lead{margin:0 0 8px;color:var(--mute);font-size:13px}
.sl-set-group{background:var(--panel);border:1px solid var(--line2);border-radius:10px;margin:10px 0 4px;overflow:hidden}
.sl-set-row{display:flex;align-items:center;gap:16px;padding:13px 16px;border-top:1px solid var(--line);min-height:58px}
.sl-set-row:first-child{border-top:0}
.sl-set-row>.txt{flex:1;min-width:0}
.sl-set-row .name{font-weight:600}
.sl-set-row .desc{color:var(--mute);font-size:13px;margin-top:1px}
.sl-set-row>.ctl{flex:none;display:flex;align-items:center;gap:10px}
.sl-set-row.stack{flex-wrap:wrap}.sl-set-row.stack>.ctl{flex-basis:100%}
.sl-set select{font:inherit;font-size:14px;color:var(--ink);background:#0b1117;border:1px solid var(--line2);border-radius:7px;padding:7px 30px 7px 10px;max-width:100%;cursor:pointer;
 appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--mute) 50%),linear-gradient(135deg,var(--mute) 50%,transparent 50%);background-position:calc(100% - 15px) 52%,calc(100% - 10px) 52%;background-size:5px 5px;background-repeat:no-repeat}
.sl-set select:hover{border-color:var(--acc)}
.sl-set input[type=range]{width:220px;accent-color:var(--acc);cursor:pointer}
.sl-set output{min-width:48px;text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:var(--acc)}
.sl-set input.sw{appearance:none;-webkit-appearance:none;margin:0;width:46px;height:26px;border-radius:13px;background:#26343e;border:1px solid var(--line2);position:relative;cursor:pointer;transition:background .15s}
.sl-set input.sw::before{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#c9d4da;transition:transform .15s,background .15s}
.sl-set input.sw:checked{background:var(--acc);border-color:var(--acc)}
.sl-set input.sw:checked::before{transform:translateX(20px);background:#0c1319}
.sl-set .seg{display:inline-flex;flex-wrap:wrap;background:#0b1117;border:1px solid var(--line2);border-radius:8px;padding:3px;gap:2px}
.sl-set .seg button{border:0;background:transparent;color:var(--mute);font:600 13px system-ui;padding:7px 13px;border-radius:6px;cursor:pointer}
.sl-set .seg button[aria-checked=true]{background:var(--acc);color:#0c1319}
.sl-set .btn{font:600 14px system-ui;padding:9px 16px;border-radius:8px;border:1px solid var(--line2);background:var(--raise);color:var(--ink);cursor:pointer}
.sl-set .btn:hover{border-color:var(--acc)}
.sl-set .btn.primary{background:var(--acc);border-color:var(--acc);color:#0c1319}
.sl-set .btn:disabled{opacity:.45;cursor:default}
.sl-set .note{color:var(--mute);font-size:13px;margin:8px 2px}
.sl-set :focus{outline:none}
.sl-set :focus-visible{outline:2px solid var(--acc);outline-offset:2px}
.sl-set-foot{grid-area:foot;display:flex;align-items:center;gap:12px;padding:12px 22px;border-top:1px solid var(--line2);background:#0a1015}
.sl-set-foot .note{margin:0;flex:1}
.sl-set-keys{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:1px;background:var(--line);}
.sl-set-keys>div{display:flex;justify-content:space-between;align-items:center;gap:8px;background:var(--panel);padding:10px 14px;font-size:14px}
kbd.k,.sl-set .chip{display:inline-block;min-width:30px;text-align:center;padding:4px 9px;border-radius:6px;border:1px solid #3d5566;border-bottom-width:3px;background:#0b1117;font:700 13px system-ui;color:var(--ink);white-space:nowrap}
.sl-set-pad{display:flex;align-items:center;gap:16px;padding:16px;background:var(--panel);border:1px solid var(--line2);border-radius:10px;margin-top:12px}
.sl-set-pad svg{width:54px;height:54px;flex:none;color:var(--mute)}
.sl-set-pad.on svg{color:var(--acc)}
.sl-set-pad .name{font-weight:700}.sl-set-pad .desc{color:var(--mute);font-size:13px}
.sl-set-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#5b6b75;margin-right:6px;vertical-align:1px}
.sl-set-pad.on .sl-set-dot{background:#6ee7a0;box-shadow:0 0 8px #6ee7a0}
.sl-set-bind{min-height:50px;padding-top:9px;padding-bottom:9px;cursor:pointer;transition:background .1s}
.sl-set-bind:hover{background:#ffffff06}
.sl-set-bind .hold{color:var(--mute);font-size:12px;margin-left:8px;font-weight:400}
.sl-set-bind.live{background:var(--acc2)}
.sl-set-bind.live .chip{border-color:var(--acc);color:var(--acc)}
.sl-set-bind.moved .chip{border-color:var(--warn)}
.sl-set-bind.listen{background:#4ee3df1f}
.sl-set-bind.listen .chip{border-color:var(--acc);color:var(--acc);animation:sl-set-pulse 1s infinite}
@keyframes sl-set-pulse{50%{opacity:.35}}
.sl-set-panel fieldset{border:0!important;padding:0!important;margin:10px 0!important}
.sl-set-panel fieldset>legend{display:none}
.sl-set-panel fieldset h3{margin-top:22px}
.sl-set-panel fieldset label{display:flex!important;align-items:center;justify-content:space-between;gap:12px;background:var(--panel);border:1px solid var(--line2);border-radius:8px;padding:9px 14px;margin:6px 0 2px!important;font-weight:600}
.sl-set-panel fieldset select{padding:7px 30px 7px 10px!important}
.sl-set-panel fieldset label+p{margin:2px 4px 8px!important;color:var(--mute)!important}
.sl-set-panel fieldset>p[role=status]{color:var(--mute)}
.sl-set textarea{width:100%;height:200px;font:12px/1.4 ui-monospace,Consolas,monospace;background:#070b0e;color:#cfe0e8;border:1px solid var(--line2);border-radius:8px;padding:10px}
@media (max-width:720px){
 .sl-set{width:100vw;height:100dvh;border-radius:0;border:0}
 .sl-set[open]{grid-template:auto auto 1fr auto/1fr;grid-template-areas:"head" "nav" "main" "foot"}
 .sl-set-nav{flex-direction:row;padding:6px 8px;border-right:0;border-bottom:1px solid var(--line2);overflow-x:auto}
 .sl-set-tab{width:auto;white-space:nowrap;padding:8px 10px}
 .sl-set-tab[aria-selected=true]::before{left:8px;right:8px;top:auto;bottom:-6px;width:auto;height:3px;border-radius:3px 3px 0 0}
 .sl-set-navhint{display:none}
 .sl-set-main{padding:4px 14px 20px}
 .sl-set-row.wide{flex-wrap:wrap}.sl-set-row.wide>.ctl{flex-basis:100%;justify-content:flex-start}
 .sl-set input[type=range]{flex:1;width:auto}
 .sl-set-foot .note{display:none}.sl-set-foot .btn{flex:1}
}`,
  Ea = (e, t = ``) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${t}>${e}</svg>`,
  Da = {
    gear: Ea(
      `<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`,
    ),
    graphics: Ea(
      `<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>`,
    ),
    audio: Ea(
      `<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>`,
    ),
    mouse: Ea(
      `<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>`,
    ),
    pad: Ea(
      `<path d="M6.5 7h11a4 4 0 0 1 4 4.3l-.5 5a2.8 2.8 0 0 1-5 1.4L14.5 16h-5L8 17.7a2.8 2.8 0 0 1-5-1.4l-.5-5A4 4 0 0 1 6.5 7z"/><path d="M7.5 10.5v3M6 12h3"/><circle cx="16" cy="11" r=".6" fill="currentColor"/><circle cx="17.6" cy="13" r=".6" fill="currentColor"/>`,
    ),
    hud: Ea(
      `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>`,
    ),
    loadout: Ea(
      `<path d="M3 13h13l2-2h3v3h-3l-1 1H9l-1 4H5l1-4H3z"/><path d="M8 9h7"/>`,
    ),
    support: Ea(
      `<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.6 2.6 0 0 1 5 .8c0 1.7-2.5 2.2-2.5 3.8M12 17h.01"/>`,
    ),
  },
  $ = (e, t, n) => {
    let r = document.createElement(e);
    return (t && (r.className = t), n != null && (r.textContent = n), r);
  };
