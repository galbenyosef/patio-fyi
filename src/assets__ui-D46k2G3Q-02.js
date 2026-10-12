// assets__ui-D46k2G3Q 02 — classname
// Lines 334-605 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var Yt = `
.sl-spawn [hidden]{display:none!important}
.sl-spawn button:focus-visible,.sl-spawn select:focus-visible,.sl-spawn summary:focus-visible{outline:2px solid #edc77f;outline-offset:3px}
.map-readout{position:absolute;left:12px;right:12px;bottom:10px;text-align:center;padding:10px;background:#101a23eb;color:#c3d1d9;font-size:12px;pointer-events:none}
.map-tools{position:absolute;left:14px;top:14px;display:flex;gap:8px;z-index:1}
.map-tools button{font:600 11px system-ui;color:#c3d1d9;border:1px solid #516571;background:#15212ded;padding:9px 12px;cursor:pointer}
.map-tools button[aria-pressed=true]{color:#ffe1a6;border-color:#bb975c;background:#393328}
.equipment-workbench{grid-column:1/-1;min-height:0;display:grid;grid-template-columns:minmax(200px,.8fr) minmax(360px,2fr) minmax(310px,1.05fr);gap:22px;color:#edece6;line-height:1.45;font-size:13px;overflow:hidden}
.equipment-workbench button,.equipment-workbench select{font:inherit;color:inherit;cursor:pointer;transition:background .12s,border-color .12s}
.equipment-workbench button:hover:not(:disabled){background:#34434a;border-color:#8da4b3}
.equipment-workbench select{background:#1b2a34;border:1px solid #435967;padding:10px;width:100%;min-width:0}
.equipment-soldier{display:flex;flex-direction:column;min-height:0;background:radial-gradient(ellipse at 50% 46%,#34434a 0%,#1a2832 45%,#14202a 85%);border:1px solid #35444e;padding:18px;overflow:hidden}
.eyebrow,.comparison-title{font-size:10px;letter-spacing:.15em;color:#aebfc8;font-weight:700}
.equipment-classes{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:14px}
.equipment-classes button,.equipment-weapons button,.attachment-options button{border:1px solid #3a505e;background:#182732;text-align:left;padding:12px}
.equipment-workbench button.selected,.equipment-workbench button.selected:hover{border-color:#d9b672;background:#383429;color:#fff0d1}
.equipment-classes small{display:block;font-size:9px;margin-top:4px;font-weight:400;color:#a6bac6}
.sl-spawn button.team,.sl-spawn button.oi,.sl-spawn button.kit{border:0;text-align:left;color:inherit;font-family:inherit;width:100%}
.soldier-stage{position:relative;flex:1;min-height:120px;margin:12px -10px 0}
.soldier-stage:after{content:'';position:absolute;bottom:7%;left:10%;right:10%;height:12%;border-radius:50%;background:#07101766;filter:blur(9px)}
.soldier-preview{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;z-index:1}
.portrait-title{font-size:28px;font-weight:500;letter-spacing:.02em;margin:8px 0}
.equipment-role{color:#aabecb;font-size:12px;margin:0;line-height:1.6}
.equipment-role strong{display:block;color:#efddba;font-size:14px;font-weight:500;margin-bottom:5px}
.equipment-role span{display:block}
.equipment-center{display:flex;flex-direction:column;min-width:0;min-height:0;gap:12px}
.equipment-weapons{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.equipment-weapons button small{display:block;font-size:9px;letter-spacing:.12em;color:#a7bac6;margin-bottom:5px}
.equipment-weapons button strong{display:block;font-size:13px;font-weight:500}
.equipment-title{font-size:clamp(23px,2vw,36px);letter-spacing:.025em;margin:7px 0 0;font-weight:500}
.equipment-facts{color:#a7bac7;margin:0;font-size:12px}
.weapon-stage{position:relative;flex:1;min-height:230px;isolation:isolate;background:radial-gradient(ellipse at 50% 48%,#394953,#1b2934 65%,#13212b);border:1px solid #3b4d58;overflow:hidden}
.weapon-stage:before{content:'';position:absolute;inset:0;background-image:linear-gradient(#b8d2df06 1px,transparent 1px),linear-gradient(90deg,#b8d2df06 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
.weapon-preview{display:block;position:absolute;left:0;top:18%;width:100%;height:62%;object-fit:contain;cursor:grab;touch-action:none}
.weapon-preview:active{cursor:grabbing}
.weapon-preview-badge{position:absolute;top:16px;left:16px;font-size:9px;letter-spacing:.15em;color:#b9c6cf;pointer-events:none}
.attachment-wires{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:hidden}
.attachment-wires line{stroke:#849ca97a;stroke-width:1}.attachment-wires circle{fill:#15232c;stroke:#8aa6b6;stroke-width:1}
.attachment-wires .selected{stroke:#e9c47f;stroke-width:1.5}
.attachment-slots button{position:absolute;border:1px solid #647e8e;background:#14222cef;padding:10px 14px;max-width:43%;text-align:left}
.attachment-slots span{display:block;text-transform:uppercase;letter-spacing:.12em;color:#abc0cd;font-size:9px}
.attachment-slots strong{display:block;font-size:12px;font-weight:500;margin-top:4px}
.attachment-slots button.previewing{border-style:dashed}
.attachment-slots button:disabled{display:none}
.slot-optic{top:14px;left:40%}.slot-camo{top:14px;right:4%}.slot-muzzle{bottom:52px;right:4%}.slot-grip{bottom:52px;left:27%}
.weapon-inspect{position:absolute;left:12px;right:12px;bottom:10px;display:flex;align-items:center;gap:6px;font-size:10px;color:#91a8b6}
.weapon-inspect span{margin-right:auto}
.weapon-inspect button{border:1px solid #465e6b;background:#16232dcc;padding:5px 8px;font-size:10px;white-space:nowrap}
.weapon-inspect .compare-equipped{border-color:#c2a269;color:#f2d499}
.weapon-picker{display:flex;flex-wrap:wrap;gap:6px;align-items:center}.weapon-picker-label{flex-basis:100%;font-size:9px;letter-spacing:.12em;color:#a7bac6}.weapon-picker button{border:1px solid #3a505e;background:#182732;color:#dfe8ec;padding:8px 12px;font-size:12px;cursor:pointer}.weapon-picker button:hover{border-color:#8fa8b6}.weapon-picker button.selected{border-color:#e0b35a;background:#3a3226;color:#fff}
.equipment-gadgets{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.equipment-gadgets label{font-size:9px;letter-spacing:.12em;color:#aebbc2}.equipment-gadgets select{margin-top:6px;font-size:12px;letter-spacing:0;color:#edece6}
.equipment-footer{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-top:4px}
.equipment-save{color:#b2c5b6;font-size:10px;max-width:220px}
.equipment-options{min-width:0;min-height:0;display:flex;flex-direction:column;background:#16222c;border:1px solid #354854}
.options-heading{padding:17px 18px 12px;border-bottom:1px solid #34434e}
.equipment-options h3{font-size:22px;margin:4px 0 0;font-weight:500}
.equipment-options-scroll{flex:1;min-height:0;overflow:auto;padding:14px 18px;scrollbar-width:thin;scrollbar-color:#5b7281 #16222c}
.attachment-options{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.attachment-options button{position:relative;padding:10px;min-height:62px;display:flex;flex-direction:column;align-items:flex-start;gap:4px}
.option-copy strong{display:block;font-weight:500;font-size:12px;line-height:1.4}
.option-copy span{display:block;font-size:10px;color:#9fb2bf;margin-top:3px}
.attachment-options small{font-size:9px;color:#f2d397}
.attachment-name{margin:18px 0 6px;font-weight:500;font-size:16px;color:#f4deba}
.attachment-description{color:#b5c6d1;margin:0 0 16px;font-size:12px;line-height:1.6}
.comparison-title{margin:16px 0 12px;padding-top:14px;border-top:1px solid #354854}
.stat-details-toggle{grid-column:1/-1;justify-self:start;background:none;border:0;padding:0 0 8px;cursor:pointer;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#abc0cd}.stat-details-toggle:hover{color:#e1e6e8}.attachment-stat{margin-bottom:13px}.stat-label{display:flex;justify-content:space-between;font-size:12px;gap:8px}.stat-label strong{font-weight:400;color:#e1e6e8;font-size:11px}
.stat-track{position:relative;height:8px;background:#0c1821;margin:7px 0 5px;border-radius:1px}.stat-track i{position:absolute;height:100%;top:0}
.stat-fill{left:0;background:#8a9fab}.stat-change{background:#8a9fab}.better .stat-change{background:#70d2a3}.worse .stat-change{background:#eb827c}
.stat-track .stat-marker{width:2px;height:12px;top:-2px;background:#f6eedd}
.stat-delta{font-size:10px;color:#90a5b4}.better .stat-delta{color:#7ce2b2}.worse .stat-delta{color:#f39d92}
.more-stats summary{font-size:11px;color:#b4c8d5;cursor:pointer;padding:9px 0}.attachment-extra-stats{padding-top:8px}
.stats-key{font-size:10px;color:#829caa;line-height:1.6;margin:10px 0 0}
.equipment-actions{flex-shrink:0;padding:12px 18px 16px;border-top:1px solid #344854;background:#1b2b35}
.selection-note{display:block;font-size:10px;color:#afc0cb;margin-bottom:9px}
.equip-attachment{border:1px solid #e9c98b;background:#e9c98b;color:#172027!important;font-weight:700!important;padding:12px 10px;width:100%}.equipment-workbench .equip-attachment:hover:not(:disabled){background:#ffe0a6;border-color:#ffe0a6}.equip-attachment:disabled{background:#30453f;border-color:#466158;color:#b9d2c3!important;cursor:default}
@media(max-width:1400px){.equipment-workbench{gap:14px;grid-template-columns:190px minmax(300px,1.7fr) minmax(280px,1fr)}.equipment-soldier{padding:12px}.equipment-classes button{padding:10px;font-size:12px}.options-heading{padding:12px}.equipment-options-scroll{padding:12px}.equipment-actions{padding:10px 12px}.equipment-title{font-size:25px}.equipment-weapons button strong{font-size:11px}}
@media(min-width:951px) and (max-height:800px){.equipment-workbench{gap:12px}.equipment-center{gap:8px}.weapon-stage{min-height:180px}.equipment-weapons button{padding:8px}.equipment-title{font-size:23px;margin:0}.equipment-workbench select{padding:7px}.equipment-back{padding:9px 12px}.equipment-footer{padding:0}.portrait-title{font-size:24px;margin:4px 0}.equipment-role span{display:none}.equipment-classes{margin-top:8px}.attachment-slots button{padding:7px 9px}.attachment-slots strong{font-size:10px}.slot-optic,.slot-camo{top:25px}.slot-muzzle,.slot-grip{bottom:44px}.weapon-preview-badge{top:8px;font-size:8px}.weapon-inspect span{display:none}.weapon-inspect{justify-content:flex-end;left:6px;right:6px}.weapon-inspect button{padding:5px;font-size:9px}.equipment-options h3{font-size:20px}.attachment-options button{min-height:52px;padding:8px}.attachment-name{margin-top:12px}.attachment-stat{margin-bottom:10px}.stat-label{font-size:11px}.stat-label strong{font-size:10px}}
@media(max-width:950px){.equipment-workbench{grid-template-columns:150px minmax(250px,1fr);overflow:auto}.equipment-options{grid-column:1/-1;min-height:550px}.equipment-center,.equipment-soldier{min-height:520px}.equipment-soldier{padding:10px}.equipment-classes{grid-template-columns:1fr}.sl-spawn .in{gap:12px;padding:16px}.deployment-tabs:after{display:none}}
.equipment-workbench .equipment-center{overflow-y:auto;padding-right:2px}
.equipment-workbench .weapon-stage{flex:1 0 230px;min-height:230px}
.equipment-workbench .weapon-preview{top:0;height:100%;width:100%}
.equipment-workbench .weapon-inspect{position:static;display:flex;justify-content:flex-start;gap:6px;flex-wrap:wrap;flex-shrink:0;padding:0}
.equipment-workbench .weapon-inspect button{padding:7px 9px;font-size:10px;min-height:30px}
.equipment-workbench .weapon-inspect .weapon-zoom{width:76px;min-width:50px;accent-color:#e9c47f;cursor:pointer}
.equipment-workbench .zoom-value{font-size:10px;color:#e9c47f;min-width:30px}
.equipment-workbench .weapon-inspect button[aria-pressed=true]{border-color:#e9c47f;background:#423b29;color:#ffe3aa}
.equipment-workbench .attachment-slots{display:flex;gap:8px;flex-shrink:0}
.equipment-workbench .attachment-slots button{position:static;flex:1;max-width:none;min-width:0;padding:8px 10px}
.equipment-workbench .attachment-slots strong{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px}
.equipment-workbench .weapon-gesture-hint{font-size:10px;line-height:1.4;color:#a7bdc9;flex-shrink:0}
@media(max-height:800px){.equipment-workbench .weapon-stage{flex-basis:215px;min-height:215px}.equipment-workbench .weapon-inspect button{padding:5px 7px}.equipment-workbench .weapon-zoom{width:60px}}

/* ---- deploy screen layout: header with two main tabs, map top-left in both views, class deck across the bottom half */
.sl-spawn{align-items:flex-end;padding-bottom:1.5vh}
.sl-spawn .in{--mapw:min(40vh,34vw);width:96vw;max-width:none;height:calc(98.5vh - 76px);max-height:none;gap:var(--g16);padding:var(--g20);
  grid-template-columns:var(--mapw) minmax(0,1fr) minmax(0,1fr);grid-template-rows:auto var(--mapw) minmax(0,1fr)}
.spawn-head{padding-right:200px;grid-column:1/-1;display:flex;align-items:stretch;gap:var(--g24);min-width:0}
.deployment-tabs{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;flex:0 1 900px;min-width:0}
.deployment-tabs button{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:3px;padding:10px 22px;border:1px solid #2f3a42;border-bottom:3px solid #3b4851;background:#141b21;color:#93a3ad;cursor:pointer;font-family:inherit;text-align:left;transition:background .12s,color .12s}
.deployment-tabs button strong{font-size:22px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1}
.deployment-tabs button small{font-size:11px;letter-spacing:.04em;color:#7c8c96}
.deployment-tabs button:hover{background:#1c262e;color:#dfe6ea}
.deployment-tabs button.selected{background:linear-gradient(180deg,#3a3323,#2a2619);border-color:#8a7445;border-bottom-color:#efc877;color:#fff1d2}
.deployment-tabs button.selected small{color:#d9c08c}
.sl-spawn .spawn-head .teams{flex:1;min-width:0;max-width:720px;margin-left:auto;align-self:center}
.sl-spawn .mapw{grid-column:1;grid-row:2;z-index:1;border:1px solid #2a353d}
.sl-spawn .spawn-column{grid-column:2;grid-row:2}
.sl-spawn .ol{flex:1 1 0;max-height:none;min-height:0}
.sl-spawn .squad-quick{grid-column:3;grid-row:2;display:flex;flex-direction:column;gap:var(--g10);min-width:0;min-height:0;padding:var(--g12) var(--g14);background:linear-gradient(180deg,#12261e,#101c19);border:1px solid #2f5744;border-left:3px solid #80dfa6}
.sq-head{display:flex;align-items:baseline;gap:var(--g10);flex-wrap:wrap}.sq-head .sec{margin:0;color:#7ddaa3}
.sq-head strong{font-size:17px;font-weight:600;color:#d9ffe6}
.sl-spawn .sq-manage{margin-left:auto;font:600 11px system-ui;color:#c9f5d8;background:#1c3a2d;border:1px solid #4d8567;padding:7px 12px;cursor:pointer}
.sl-spawn .sq-manage:hover,.sl-spawn .sq-join button:hover:not(:disabled),.sl-spawn .sq-create:hover{background:#2c5742;border-color:#9bf0bb}
.sq-list{display:flex;flex-direction:column;gap:var(--g6);flex:1;min-height:0;overflow-y:auto}
.sl-spawn .oi.sq{grid-template-columns:var(--g34) minmax(0,1fr) 46px auto;height:auto;min-height:var(--g48);flex-shrink:0;background:#183024;--selc:#8fe9b0}
.sl-spawn .oi.sq:hover:not(.na){background:#22442f}
.sl-spawn .oi.sq.sel{background:#2a5239;box-shadow:inset 3px 0 0 #8fe9b0,inset 0 0 0 1px #5fae81}
.sl-spawn .oi.sq.na{opacity:.6}.sl-spawn .oi.sq.me{opacity:.8}
.sl-spawn .oi.sq .l{background:#163c2e;border:1px solid #91e9b3;border-radius:50%;color:#dcffe8}.sl-spawn .oi.sq .l:after{display:none}
.sl-spawn .oi.sq .nm{text-transform:none;color:#e1f7e8;overflow:hidden}.oi.sq .nm span{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.oi.sq .nm small,.sq-join .nm small{display:block;font-size:10px;color:#8fb5a0;margin-top:2px}

.sl-spawn .oi.sq .stt{color:#8aa397}.sl-spawn .oi.sq .stt.go{color:#0f2419;background:#8fe9b0;padding:5px 9px}
.sq-open{flex-shrink:0;padding:9px 12px;border:1px dashed #33574598;color:#6f9281;font-size:10px;letter-spacing:.12em;text-transform:uppercase}
.sq-join{display:grid;grid-template-columns:var(--g34) minmax(0,1fr) auto;align-items:center;column-gap:var(--g12);padding:6px var(--g12) 6px var(--g8);background:#183024;flex-shrink:0}
.sq-join .l{width:var(--g26);height:var(--g26);display:grid;place-items:center;color:#87e7b0;border:1px solid #456b59;font-weight:700}
.sq-join .nm span{font-size:var(--fs-body);color:#e1f7e8}
.sl-spawn .sq-join button,.sl-spawn .sq-create{font:700 11px system-ui;letter-spacing:.08em;text-transform:uppercase;color:#0f2419;background:#8fe9b0;border:1px solid #8fe9b0;padding:8px 16px;cursor:pointer}
.sl-spawn .sq-join button:hover:not(:disabled){color:#eafff1}.sl-spawn .sq-join button:disabled{background:#26382f;border-color:#3d5548;color:#89a596;cursor:default}
.sl-spawn .sq-create{background:#1c3a2d;color:#c9f5d8;border-color:#4d8567;border-style:dashed;padding:11px;flex-shrink:0}
.sq-note{font-size:11px;color:#86a897;margin:2px 0 0;line-height:1.5}
/* class deck */
.sl-spawn .class-deck{grid-column:1/-1;grid-row:3;display:flex;flex-direction:column;gap:var(--g8);min-height:0}.class-deck .sec{margin:0}
.sl-spawn .oi .stt.ok{color:#8fe9b0}.sl-spawn .oi .stt.foe{color:#f0a097}
/* loadout view: the map keeps its top-left cell; the soldier fills the panel beneath it and the workbench takes everything else */
.sl-spawn .in .equipment-workbench{grid-column:1/-1;grid-row:2/4;gap:var(--g16);grid-template-columns:var(--mapw) minmax(0,2fr) minmax(300px,1.05fr)}
.sl-spawn .in .equipment-soldier{position:relative;margin-top:calc(var(--mapw) + var(--g16));padding:0;display:block}
.sl-spawn .in .soldier-stage{position:absolute;inset:0;margin:0;min-height:0}
.sl-spawn .in .portrait-title{position:absolute;left:14px;bottom:30px;margin:0;font-size:22px;z-index:2}
.sl-spawn .in .equipment-role{position:absolute;left:14px;right:14px;bottom:10px;font-size:11px;z-index:2}
.sl-spawn .in .equipment-role strong{display:inline;font-size:12px;margin:0}.sl-spawn .in .equipment-role span{display:none}
.sl-spawn .in .equipment-center{gap:10px;overflow:hidden}
.sl-spawn .in .equipment-classes{grid-template-columns:repeat(5,1fr);margin:0;flex-shrink:0}
.sl-spawn .in .equipment-classes button{padding:9px 12px;font-size:14px;border-left:3px solid color-mix(in srgb,var(--cc) 50%,transparent)}
.sl-spawn .in .equipment-classes button small{color:var(--cc)}
.sl-spawn .in .equipment-classes button.selected{border-color:var(--cc);background:color-mix(in srgb,var(--cc) 18%,#182732)}
.sl-spawn .in .equipment-weapons{flex-shrink:0}.sl-spawn .in .equipment-weapons button{padding:8px 12px}
/* the weapon is long, so its stage is wide: about 3:1, never a tall box */
.sl-spawn .in .weapon-stage{flex:0 0 auto;min-height:0;height:clamp(170px,30vh,340px)}
.weapon-stage-head{position:absolute;top:12px;left:16px;z-index:1;pointer-events:none}
.weapon-stage-head .equipment-title{margin:0;font-size:clamp(20px,1.7vw,30px)}
.sl-spawn .in .weapon-preview-badge{left:auto;right:16px}
.sl-spawn .in .weapon-gesture-hint{position:absolute;left:16px;bottom:10px;font-size:10px;color:#8299a6;pointer-events:none}
.weapon-stage .compare-equipped{position:absolute;right:12px;bottom:10px;border:1px solid #c2a269;background:#16232dcc;color:#f2d499;padding:7px 12px;font-size:11px}
.sl-spawn .in .attachment-slots button{padding:10px 12px}
.sl-spawn .in .attachment-slots button.selected{box-shadow:inset 0 -3px 0 #e0b35a}
.sl-spawn .in .weapon-picker{flex:1 1 0;min-height:64px;display:grid;grid-template-columns:repeat(5,minmax(0,210px));justify-content:start;grid-auto-rows:min-content;gap:6px;align-content:start;overflow-y:auto;padding-right:2px;scrollbar-width:thin;scrollbar-color:#5b7281 transparent}
.sl-spawn .in .weapon-picker-label{grid-column:1/-1}
.sl-spawn .in .weapon-picker button{text-align:left;padding:7px 10px}
.weapon-picker button small{display:block;font-size:9px;letter-spacing:.12em;color:#8fa6b3}
.weapon-picker button strong{display:block;font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.weapon-picker button span{display:block;font-size:10px;color:#a7bac7;margin-top:2px}
.weapon-picker button.locked{background:#12191f;border-color:#384751;color:#9baab2;cursor:not-allowed;opacity:.78}
.weapon-picker button.locked:hover{background:#12191f;border-color:#58636b}
.weapon-picker button.locked small{color:#d4a866}.weapon-picker button.locked span{color:#a8b1b7}
.equipment-bottom{display:flex;align-items:flex-end;gap:16px;flex-shrink:0}
.sl-spawn .in .equipment-gadgets{display:flex;gap:16px;flex:1;min-width:0}
.gadget-group{display:flex;flex-wrap:wrap;gap:6px;align-items:center}.gadget-group small{flex-basis:100%;font-size:9px;letter-spacing:.12em;color:#aebbc2}
.gadget-group button{border:1px solid #3a505e;background:#182732;padding:8px 12px;font-size:12px}
.sl-spawn .in .equipment-back{border:1px solid #647e8e;background:#1b2a34;color:#edece6;padding:9px 16px;font-size:12px}
@media(max-height:800px){.sl-spawn .in .equipment-center{gap:6px}.sl-spawn .in .weapon-stage{height:clamp(120px,25vh,200px)}.sl-spawn .in .equipment-classes button,.sl-spawn .in .equipment-weapons button,.sl-spawn .in .attachment-slots button{padding:5px 10px}.sl-spawn .in .equipment-classes button small,.sl-spawn .in .weapon-gesture-hint,.weapon-picker button span{display:none}.weapon-stage-head{top:8px}.gadget-group button,.sl-spawn .in .equipment-back{padding:5px 10px}.sl-spawn .in .equipment-save{display:none}}
.sl-spawn .in .equipment-footer{flex-direction:column;align-items:flex-end;gap:4px;padding:0}.sl-spawn .in .equipment-save{text-align:right}
.sl-spawn .squad-panel{grid-row:2/4}

/* Class cards size their own type from the card (container units), so they fill the deck at 768p and at 1440p alike. */
.sl-spawn .kits{flex:1;min-height:0;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--g12)}
.sl-spawn .kit{container-type:size;height:auto;min-height:0;padding:0;overflow:hidden;display:block;border-top:3px solid color-mix(in srgb,var(--cc) 40%,transparent);background:linear-gradient(180deg,color-mix(in srgb,var(--cc) 9%,transparent),rgba(236,234,227,.035) 60%);transition:background .12s}
.sl-spawn .kit:hover{background:linear-gradient(180deg,color-mix(in srgb,var(--cc) 17%,transparent),rgba(236,234,227,.06) 70%)}
.sl-spawn .kit.sel{border-top-color:var(--cc);box-shadow:inset 0 0 0 1px var(--cc),0 0 26px color-mix(in srgb,var(--cc) 22%,transparent);background:linear-gradient(180deg,color-mix(in srgb,var(--cc) 24%,transparent),color-mix(in srgb,var(--cc) 5%,transparent) 75%)}
.kit .kbody{height:100%;display:flex;flex-direction:column;justify-content:space-between;gap:.5em;padding:1em 1.15em;font-size:clamp(10px,min(3.1cqh,3.5cqw),30px);line-height:1.25}
.kit .kh{display:flex;align-items:center;gap:.7em}
.kit .kk{display:grid;place-items:center;width:2.1em;height:2.1em;flex-shrink:0;font-size:1.15em;font-weight:700;color:var(--cc);border:1px solid color-mix(in srgb,var(--cc) 55%,transparent)}
.kit.sel .kk{background:var(--cc);color:#11161a}
.sl-spawn .kit .kn{font-size:1.75em;letter-spacing:.1em;line-height:1}
.kit .kt{font-size:1.05em;font-weight:600;color:var(--cc);margin-top:.25em}
.kit .kgun{flex:1 1 0;min-height:0;display:flex;flex-direction:column;align-items:center;gap:.3em}
.kit .kgun canvas{flex:1 1 0;min-height:0;width:100%;display:block;filter:drop-shadow(0 .5em .7em #0009)}
.kit .kgl{font-size:.8em;letter-spacing:.08em;text-transform:uppercase;color:#a9b7c0;text-align:center}
.kit .kr{display:grid;gap:.42em}
.kit .krow{display:grid;grid-template-columns:8.2em 1fr;align-items:center;gap:.8em;font-size:.82em;letter-spacing:.1em;text-transform:uppercase;color:#a9b7c0}
.kit .pips{display:flex;gap:.3em}.kit .pips i{flex:1;height:.6em;background:#2f3a42}.kit .pips i.on{background:var(--cc)}
.kit .kw{display:grid;gap:.6em;padding-top:.7em;border-top:1px solid #2b363d}
.kit .kwhead{display:flex;align-items:baseline;gap:.6em;flex-wrap:wrap}
.kit .kwhead strong{font-size:1.2em;font-weight:700;color:#f4f1e9}
.kit .kwhead small{font-size:.8em;letter-spacing:.1em;text-transform:uppercase;color:#93a3ad}
.kit .kstats{display:flex;flex-wrap:wrap;gap:.2em 1.2em;margin-top:.2em;font-size:.8em;letter-spacing:.1em;text-transform:uppercase;color:#93a3ad}
.kit .kstats b{font-size:1.4em;font-weight:700;letter-spacing:0;color:#e6ebee;margin-right:.3em}
.kit .kg{display:flex;flex-wrap:wrap;gap:.4em}.kit .kg span{font-size:.92em;padding:.25em .7em;color:#e9dfc6;background:#2a2a22;border:1px solid #57503a}
/* deploy button lives under the spawn list it acts on; no footer row */
.sl-spawn .spawn-column .foot{flex-direction:column;align-items:stretch;gap:var(--g6);margin:0;padding:var(--g10) 0 0}
.sl-spawn .spawn-column .foot .btn{width:100%;height:var(--g56,56px);font-size:16px}
.sl-spawn .spawn-column .foot .hint{text-align:center}
@media(max-height:820px){.kit .kg{display:none}.sl-spawn .in{gap:var(--g10);padding:var(--g12)}.sl-spawn .spawn-column .foot .btn{height:var(--g44)}}
@media(max-width:1500px){.sl-spawn .team .ti span:last-child{display:none}}
@media(min-height:1300px){.sl-spawn .spawn-head,.sl-spawn .spawn-column,.sl-spawn .squad-quick,.class-deck>.sec{zoom:1.3}.spawn-head{padding-right:160px}}
.sl-spawn .in .unlocks-panel{grid-column:1/-1;grid-row:2/4;min-height:0;display:grid;grid-template-rows:auto auto minmax(0,1fr);gap:12px;color:#edece6;font-size:13px;line-height:1.4}
.unlocks-summary{display:flex;align-items:center;gap:18px;background:#14222c;border:1px solid #2f3a42;padding:12px 18px}
.rank-art svg{display:block;width:100%;height:100%}.rank-art.big{flex:0 0 72px;height:72px}
.unlocks-rank{flex:0 1 360px;min-width:220px}.unlocks-rank small{display:block;color:#e1ae55;letter-spacing:.18em;font-size:11px}.unlocks-rank strong{display:block;font-size:26px;line-height:1.1;text-transform:uppercase;letter-spacing:.06em}.unlocks-rank span{display:block;color:#abc0cd;font-size:12px;margin-top:5px}
.unlock-bar{display:block;height:5px;background:#2c3e4a;margin-top:7px}.unlock-bar u{display:block;height:100%;background:#e1ae55}
.career-tiles{flex:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:6px}.career-tiles div{background:#182732;padding:7px 10px}.career-tiles small{display:block;color:#abc0cd;font-size:10px;text-transform:uppercase;letter-spacing:.1em}.career-tiles strong{font-size:19px;font-weight:600}
.unlocks-nav{display:flex;gap:6px}.unlocks-nav button,.unlocks-weapons button{border:1px solid #3a505e;background:#182732;color:#c9d5dc;font:inherit;cursor:pointer;text-align:left;padding:8px 16px}
.unlocks-nav button strong{display:block;font-size:14px;letter-spacing:.1em;text-transform:uppercase}.unlocks-nav small,.unlocks-weapons small{display:block;color:#8fa3af;font-size:11px}
.unlocks-nav button.selected,.unlocks-weapons button.selected{border-color:#e1ae55;background:#3a3323;color:#fff1d2}
.unlocks-body{min-height:0;overflow:auto;padding-right:6px;display:grid;gap:10px;align-content:start}
.unlocks-body[data-section=weapons]{display:block}
.unlocks-body[data-section=camos]{grid-template-columns:minmax(200px,260px) minmax(0,1fr)}
.unlocks-weapons{grid-column:1;grid-row:1/span 5;display:grid;gap:5px;align-content:start}.unlocks-weapons button{padding:8px 12px}.unlocks-weapons strong{display:block;font-size:13px}
.unlocks-body[data-section=camos]>h3,.unlocks-body[data-section=camos]>.unlocks-grid,.unlocks-stage{grid-column:2}
.unlocks-stage{position:relative;height:clamp(140px,21vh,280px);background:radial-gradient(ellipse at center,#22384a,#0f1820);border:1px solid #2f3a42}
.unlocks-stage canvas{width:100%;height:100%;display:block}
.unlocks-caption{position:absolute;left:14px;bottom:10px;right:14px;display:grid;grid-template-columns:1fr auto;gap:0 12px;align-items:end;pointer-events:none}.unlocks-caption small{color:#e1ae55;letter-spacing:.16em;font-size:10px;grid-column:1}.unlocks-caption strong{font-size:17px;grid-column:1}.unlocks-caption span{color:#abc0cd;font-size:12px;grid-column:1}
.unlocks-equip{grid-column:2;grid-row:1/4;pointer-events:auto;border:1px solid #e1ae55;background:#3a3323;color:#fff1d2;font:inherit;cursor:pointer;padding:9px 16px}
.unlocks-body h3{margin:6px 0 0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#abc0cd;font-weight:500}
.unlocks-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(158px,1fr));gap:8px}
.unlock-card{display:flex;flex-direction:column;gap:3px;border:1px solid #2f3a42;background:#141d24;color:inherit;font:inherit;text-align:left;padding:8px;min-width:0}
button.unlock-card{cursor:pointer}button.unlock-card:hover{border-color:#647e8e}.unlock-card.selected{border-color:#e1ae55;box-shadow:inset 0 0 0 1px #e1ae55}
.unlock-card.done{background:#1a2a24;border-color:#3d6a55}.unlock-card.done.selected{border-color:#e1ae55}
.unlock-art{position:relative;height:84px;display:grid;place-items:center;background:#0e151b;overflow:hidden;margin-bottom:4px}
.unlock-card:not(.done) .unlock-art>:first-child{filter:saturate(.55) brightness(.62)}
.unlock-state{position:absolute;top:5px;right:5px;background:#0b1116d9;color:#abc0cd;font-size:9px;letter-spacing:.12em;padding:2px 6px}.unlock-card.done .unlock-state{color:#8fe0b0}
.camo-art{width:100%;height:100%}.unlock-art .rank-art{width:70px;height:70px}
.arsenal-art{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;background:linear-gradient(135deg,#253844,#10191f)}
.arsenal-art small,.arsenal-art span{font-size:9px;letter-spacing:.15em;color:#a9bdc8}.arsenal-art strong{font-size:18px;letter-spacing:.1em;color:#e3d09c}
.arsenal-grid{margin-top:10px}
.title-art{padding:8px 10px;border:1px solid var(--k);border-left-width:5px;background:linear-gradient(90deg,color-mix(in srgb,var(--k) 38%,#10181f),#10181f);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;max-width:96%;box-sizing:border-box}
.kind-kills{--k:#d8553f}.kind-headshots{--k:#e9bd55}.kind-time{--k:#58a6d8}.kind-wins{--k:#63c486}.kind-streak{--k:#a97be0}
.unlock-card strong{font-size:13px}.unlock-card p{margin:0;color:#abc0cd;font-size:11.5px;min-height:2.8em}.unlock-card small{color:#c9d5dc;font-size:11px}.unlock-card.done small{color:#8fe0b0}
@media(max-width:950px){.unlocks-body[data-section=camos]{grid-template-columns:1fr}.unlocks-weapons,.unlocks-body[data-section=camos]>*{grid-column:1;grid-row:auto}.unlocks-weapons{grid-template-columns:1fr 1fr}.unlocks-summary{flex-wrap:wrap}}
.career-banners{position:absolute;z-index:7;top:16vh;left:50%;transform:translateX(-50%);display:grid;gap:6px;pointer-events:none}
.career-banner{background:#101a22ee;border:1px solid #e1ae55;padding:10px 28px;text-align:center;animation:career-in .35s ease-out}.career-banner small{display:block;color:#e1ae55;letter-spacing:.2em;font-size:11px}.career-banner strong{font-size:18px}
@keyframes career-in{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
.attachment-options button.camo-option{flex-direction:row;align-items:center;gap:10px;min-height:46px;padding:6px 8px}.camo-swatch{flex:0 0 28px;height:28px;outline:1px solid #0009}.camo-option.locked .camo-swatch{opacity:.35}.camo-option.locked strong{color:#abc0cd}
@media(min-height:1300px){.sl-spawn .in .unlocks-panel{zoom:1.3}}
@media(min-height:1900px){.sl-spawn .in .unlocks-panel{zoom:1.9}}
@media(min-height:1900px){.sl-spawn .spawn-head,.sl-spawn .spawn-column,.sl-spawn .squad-quick,.class-deck>.sec{zoom:1.9}}
`,
  Xt = `
.squad-aim-hint{position:absolute;right:calc(50% + 56px * var(--ui,1));top:calc(50% + 40px * var(--ui,1));display:flex;align-items:center;gap:7px;padding:3px 26px 3px 3px;border-radius:5px;background:linear-gradient(270deg,rgba(6,12,10,0),rgba(6,12,10,.42) 40%,rgba(6,12,10,.5));color:#eafff1;font:700 13px system-ui;white-space:nowrap;pointer-events:none;text-shadow:0 0 1px #000,0 1px 2px #000;animation:squad-tip .35s ease-out}.squad-aim-hint kbd{font:800 11px system-ui;color:#0f221a;background:#9fe8bb;border-radius:4px;padding:2px 6px;text-shadow:none}.squad-aim-hint small{font:600 11px system-ui;color:rgba(234,255,241,.88)}@keyframes squad-tip{from{opacity:0;transform:translateX(6px)}}.sl-mk.squad-target{outline:3px solid #ceffb3;background:#224b38;box-shadow:0 0 15px #8fffba65}.squad-position-marker{position:absolute;transform:translate(-50%,-50%);background:#143526e8;color:#baffcf;border:1px solid #81e7aa;padding:6px 10px;font:600 12px system-ui;pointer-events:none}.sl .squad-command-wheel{position:absolute;z-index:35;left:50%;top:50%;transform:translate(-50%,-50%);width:344px;max-width:90vw;box-sizing:border-box;background:#0e201bf5;border:1px solid #81dca3;box-shadow:0 15px 80px #000b;padding:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;pointer-events:auto;border-radius:16px;cursor:default}.squad-command-wheel strong,.squad-command-wheel small{grid-column:1/-1;text-align:left;color:#b6f1cd;font-size:11px;letter-spacing:.12em}.squad-command-wheel small{color:#a4b9b0;letter-spacing:0;margin:-4px 0 4px}.sl .squad-command-wheel button{position:relative;min-height:58px;padding:8px 10px 8px 30px;border:1px solid #5a9672;color:#dbffe6;background:#203d2e;font:600 13px system-ui;text-align:left;cursor:pointer;border-radius:10px}.sl .squad-command-wheel button kbd{position:absolute;left:9px;top:8px;font:700 10px system-ui;color:#0f221a;background:#8fe6b0;border-radius:4px;padding:1px 5px}.sl .squad-command-wheel button:hover,.sl .squad-command-wheel button:focus-visible,.sl .squad-command-wheel button.armed{background:#386647;outline:2px solid #b4f8bb}.sl .squad-command-wheel button:disabled{opacity:.35;cursor:default}.sl .squad-command-wheel .command-dismiss{grid-column:1/-1;min-height:28px;padding:4px;text-align:center;background:transparent;border:0;color:#a4b9b0}

.squad-map-targets{position:absolute;inset:0;pointer-events:none;z-index:2}.squad-map-targets svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}.squad-map-targets line{stroke:#86e9ac;stroke-width:1;pointer-events:none}.sl .squad-map-targets button{position:absolute;width:44px;height:44px;pointer-events:auto;cursor:pointer;background:transparent;border:0;padding:9px;color:#dcffe8;display:grid;place-items:center;border-radius:50%}.squad-map-targets strong,.squad-map-targets small{display:none}.squad-map-targets b{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#163c2ef0;border:1px solid #91e9b3;font:700 12px system-ui;box-shadow:0 1px 4px #000b}.sl .squad-map-targets button[aria-pressed=true] b,.sl .squad-map-targets button:hover b,.sl .squad-map-targets button:focus-visible b{background:#9ce8b5;color:#10251b;outline:2px solid #e3ffe9;outline-offset:2px}.sl .squad-map-targets button[aria-disabled=true] b{background:#28332e;color:#a3b0a9;border-color:#76847b}.squad-map-detail{position:absolute;box-sizing:border-box;padding:10px 12px;border-left:2px solid #91e9b3;background:#10231ff0;color:#c6f5d6;font:12px system-ui;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.sl .map-tools{z-index:3}.mapw:has(.squad-map-detail:not([hidden])) .map-readout{visibility:hidden}
.squad-key-hint{display:block;color:#9dafb7;font-size:9px;padding-top:8px}
.squad-footer{display:flex;align-items:center;justify-content:space-between;gap:20px}.squad-status{font-size:12px;color:#99e6b5;line-height:1.5}.squad-back{margin-left:auto;flex-shrink:0}
.sl .squad-panel{grid-column:1/-1;min-height:0;overflow:auto;color:#dbe6e9;padding:12px 0;display:flex;flex-direction:column;gap:20px}
.squad-heading h1{font-size:34px;font-weight:650;margin:7px 0}.squad-heading p{font-size:13px;color:#99b0b9}.squad-kicker{font-size:10px;letter-spacing:.2em;color:#79d9a5;font-weight:700}
.squad-layout{display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:24px;min-height:0;flex:1}.squad-layout>section{background:#14212bec;border:1px solid #344953;padding:22px;overflow:auto;min-width:0}
.squad-layout h2{font-size:22px;margin:5px 0 20px}.squad-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0}.squad-toolbar h2{margin:0 auto 0 0}
.sl .squad-panel button{font:600 12px system-ui;color:#c9e2d5;background:#1a332c;border:1px solid #456b59;padding:11px 13px;cursor:pointer}.sl .squad-panel button:hover{background:#2a4b3a;border-color:#8de4ad}.sl .squad-panel button:disabled{opacity:.45;cursor:default}
.sl .squad-panel .squad-card{display:grid;grid-template-columns:40px 1fr auto;gap:9px;width:100%;text-align:left;background:#192a34;border-color:#344953;margin:9px 0;padding:15px}.sl .squad-panel .squad-card.own{border-left:4px solid #7ee3a6}.sl .squad-panel .squad-card.inspecting{background:#264136;border-color:#7ee3a6}.squad-card small{grid-column:2/-1;color:#a9bbc3;font-size:11px}.squad-emblem{grid-row:1/4;color:#87e7b0;font-size:26px;border:1px solid #456b59;text-align:center;align-self:center;padding:4px}.squad-capacity{color:#8ae6ac}.squad-seats{display:flex;gap:5px}.squad-seats i{width:18px;height:4px;background:#4b5f66}.squad-seats i.filled{background:#83dba7}
.squad-member{display:flex;align-items:center;gap:12px;padding:15px 0;border-bottom:1px solid #33434b}.squad-number{font-size:18px;color:#82e4aa;width:22px;text-align:center}.squad-member-info{flex:1;min-width:0}.squad-member-info strong{display:block;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.squad-member-info small{display:block;color:#8da6af;font-size:10px;margin-top:5px}.squad-member-actions{display:flex;flex-direction:column;gap:5px}.sl .squad-member-actions button{padding:6px 9px;font-size:10px}.squad-order-summary{font-size:18px;color:#9bf0bb;line-height:1.5;margin:12px 0}.squad-help{font-size:12px;color:#99b0b9;line-height:1.65;margin:12px 0}.squad-orders>button{display:block;width:100%;text-align:left;margin:8px 0}.squad-earned{font-size:10px;letter-spacing:.12em;color:#7ddaa3;margin-top:24px}.squad-request{display:flex;gap:6px;flex-wrap:wrap;padding:15px 0;font-size:12px}.squad-request span{width:100%}.squad-back{align-self:flex-end}
.sl .squad-hud{position:absolute;left:var(--safe);bottom:calc(var(--safe) + 245px * var(--ui));width:calc(260px * var(--ui));padding:0;pointer-events:none;text-shadow:0 1px 2px #000,0 0 6px #000a}.squad-hud-list{display:grid;grid-template-columns:1fr 1fr;column-gap:10px}.squad-hud-row{display:flex;min-width:0;align-items:baseline;gap:6px;padding:1px 0;color:#eef4f1;font-size:11px;line-height:1.35;white-space:nowrap}.squad-hud-row strong{font-weight:600;overflow:hidden;text-overflow:ellipsis;min-width:0}.squad-hud-row small{color:#a9bcc0;font-size:9px;text-transform:uppercase;letter-spacing:.04em}.squad-hud-row.down strong{opacity:.55}.squad-hud .squad-hud-heading{margin-bottom:3px}.squad-hud-heading{display:flex;justify-content:space-between;gap:8px;color:#89e5ac;font-size:11px}.squad-hud-heading small{font-size:9px;color:#afc4c8}.squad-hud .squad-member{padding:7px 0;gap:6px}.squad-hud .squad-member-info strong{font-size:11px}.squad-hud .squad-member-info small{font-size:9px;margin-top:2px}.squad-hud .squad-number{font-size:11px;width:12px}.squad-hud .squad-key-hint{padding-top:3px}.squad-hud .squad-hud-order{font-size:10px;color:#8de9b0;padding:4px 0 0;line-height:1.3}.squad-markers{position:absolute;inset:0;pointer-events:none}.squad-world-marker{position:absolute;transform:translate(-50%,-100%);color:#92efb8;font:600 11px system-ui;text-shadow:0 1px 3px #000;background:#101e19a8;padding:3px 6px;border-bottom:2px solid #83dba7}.sl-score .tr.squadmate{color:#91e9b3}.sl-spawn .oi[data-kind=teammate] .l{color:#91e9b3}.sl-mk.squad-order{outline:2px solid #91e9b3}
@media(max-height:800px){.squad-heading h1{font-size:25px}.sl .squad-panel{gap:12px;padding:0}.squad-layout{gap:12px}.squad-layout>section{padding:14px}.squad-member{padding:10px 0}.sl .squad-panel .squad-card{padding:10px}.squad-hud .squad-member{padding:4px 0}.squad-hud .squad-member-info small{display:none}}
@media(max-width:1000px){.squad-layout{grid-template-columns:1fr 1fr}.squad-orders{grid-column:1/-1}.squad-layout>section{overflow:visible}.squad-layout{min-height:auto}.deployment-tabs:after{display:none}}
`,
  Zt = 8,
  Qt = 12,
  $t = 120,
  en = (e, t, n) => {
    let r = document.createElement(e);
    return ((r.className = t), n != null && (r.textContent = n), r);
  };
