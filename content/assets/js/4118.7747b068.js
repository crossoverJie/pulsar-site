"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4118],{90244:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(63366),n=a(87462),o=a(67294),i=a(86010),s=a(94780),l=a(21109),c=a(51650),d=a(81719),f=a(1588),p=a(34867);function u(e){return(0,p.Z)("MuiTable",e)}(0,f.Z)("MuiTable",["root","stickyHeader"]);var g=a(85893);const h=["className","component","padding","size","stickyHeader"],m=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),b="table",y=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:f=b,padding:p="normal",size:y="medium",stickyHeader:v=!1}=a,Z=(0,r.Z)(a,h),x=(0,n.Z)({},a,{component:f,padding:p,size:y,stickyHeader:v}),k=(e=>{const{classes:t,stickyHeader:a}=e,r={root:["root",a&&"stickyHeader"]};return(0,s.Z)(r,u,t)})(x),w=o.useMemo((()=>({padding:p,size:y,stickyHeader:v})),[p,y,v]);return(0,g.jsx)(l.Z.Provider,{value:w,children:(0,g.jsx)(m,(0,n.Z)({as:f,role:f===b?null:"table",ref:t,className:(0,i.Z)(k.root,d),ownerState:x},Z))})}))},21109:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(67294).createContext()},80858:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(67294).createContext()},39807:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),n=a(63366),o=a(67294),i=a(86010),s=a(94780),l=a(80858),c=a(51650),d=a(81719),f=a(1588),p=a(34867);function u(e){return(0,p.Z)("MuiTableBody",e)}(0,f.Z)("MuiTableBody",["root"]);var g=a(85893);const h=["className","component"],m=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),b={variant:"body"},y="tbody",v=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:o,component:d=y}=a,f=(0,n.Z)(a,h),p=(0,r.Z)({},a,{component:d}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(p);return(0,g.jsx)(l.Z.Provider,{value:b,children:(0,g.jsx)(m,(0,r.Z)({className:(0,i.Z)(v.root,o),as:d,ref:t,role:d===y?null:"rowgroup",ownerState:p},f))})}))},5605:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(63366),n=a(87462),o=a(67294),i=a(86010),s=a(94780),l=a(41796),c=a(36622),d=a(21109),f=a(80858),p=a(51650),u=a(81719),g=a(1588),h=a(34867);function m(e){return(0,h.Z)("MuiTableCell",e)}const b=(0,g.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var y=a(85893);const v=["align","className","component","padding","scope","size","sortDirection","variant"],Z=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,c.Z)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,c.Z)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,c.Z)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${b.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),x=o.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:u,component:g,padding:h,scope:b,size:x,sortDirection:k,variant:w}=a,$=(0,r.Z)(a,v),A=o.useContext(d.Z),O=o.useContext(f.Z),M=O&&"head"===O.variant;let S;S=g||(M?"th":"td");let T=b;!T&&M&&(T="col");const z=w||O&&O.variant,R=(0,n.Z)({},a,{align:l,component:S,padding:h||(A&&A.padding?A.padding:"normal"),size:x||(A&&A.size?A.size:"medium"),sortDirection:k,stickyHeader:"head"===z&&A&&A.stickyHeader,variant:z}),C=(e=>{const{classes:t,variant:a,align:r,padding:n,size:o,stickyHeader:i}=e,l={root:["root",a,i&&"stickyHeader","inherit"!==r&&`align${(0,c.Z)(r)}`,"normal"!==n&&`padding${(0,c.Z)(n)}`,`size${(0,c.Z)(o)}`]};return(0,s.Z)(l,m,t)})(R);let H=null;return k&&(H="asc"===k?"ascending":"descending"),(0,y.jsx)(Z,(0,n.Z)({as:S,ref:t,className:(0,i.Z)(C.root,u),"aria-sort":H,scope:T,ownerState:R},$))}))},69417:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(87462),n=a(63366),o=a(67294),i=a(86010),s=a(94780),l=a(41796),c=a(80858),d=a(51650),f=a(81719),p=a(1588),u=a(34867);function g(e){return(0,u.Z)("MuiTableRow",e)}const h=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]);var m=a(85893);const b=["className","component","hover","selected"],y=(0,f.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${h.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),v="tr",Z=o.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:l,component:f=v,hover:p=!1,selected:u=!1}=a,h=(0,n.Z)(a,b),Z=o.useContext(c.Z),x=(0,r.Z)({},a,{component:f,hover:p,selected:u,head:Z&&"head"===Z.variant,footer:Z&&"footer"===Z.variant}),k=(e=>{const{classes:t,selected:a,hover:r,head:n,footer:o}=e,i={root:["root",a&&"selected",r&&"hover",n&&"head",o&&"footer"]};return(0,s.Z)(i,g,t)})(x);return(0,m.jsx)(y,(0,r.Z)({as:f,ref:t,className:(0,i.Z)(k.root,l),role:f===v?null:"row",ownerState:x},h))}))},67962:(e,t,a)=>{a.d(t,{Z:()=>W});var r=a(87462),n=a(63366),o=a(71387),i=a(59766),s=a(66500);var l=a(41796);const c={black:"#000",white:"#fff"},d={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},f={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},u={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},g={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},h={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},m={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},b=["mode","contrastThreshold","tonalOffset"],y={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:c.white,default:c.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},v={text:{primary:c.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:c.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Z(e,t,a,r){const n=r.light||r,o=r.dark||1.5*r;e[t]||(e.hasOwnProperty(a)?e[t]=e[a]:"light"===t?e.light=(0,l.$n)(e.main,n):"dark"===t&&(e.dark=(0,l._j)(e.main,o)))}function x(e){const{mode:t="light",contrastThreshold:a=3,tonalOffset:s=.2}=e,x=(0,n.Z)(e,b),k=e.primary||function(e="light"){return"dark"===e?{main:g[200],light:g[50],dark:g[400]}:{main:g[700],light:g[400],dark:g[800]}}(t),w=e.secondary||function(e="light"){return"dark"===e?{main:f[200],light:f[50],dark:f[400]}:{main:f[500],light:f[300],dark:f[700]}}(t),$=e.error||function(e="light"){return"dark"===e?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}(t),A=e.info||function(e="light"){return"dark"===e?{main:h[400],light:h[300],dark:h[700]}:{main:h[700],light:h[500],dark:h[900]}}(t),O=e.success||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:m[800],light:m[500],dark:m[900]}}(t),M=e.warning||function(e="light"){return"dark"===e?{main:u[400],light:u[300],dark:u[700]}:{main:"#ed6c02",light:u[500],dark:u[900]}}(t);function S(e){return(0,l.mi)(e,v.text.primary)>=a?v.text.primary:y.text.primary}const T=({color:e,name:t,mainShade:a=500,lightShade:n=300,darkShade:i=700})=>{if(!(e=(0,r.Z)({},e)).main&&e[a]&&(e.main=e[a]),!e.hasOwnProperty("main"))throw new Error((0,o.Z)(11,t?` (${t})`:"",a));if("string"!=typeof e.main)throw new Error((0,o.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return Z(e,"light",n,s),Z(e,"dark",i,s),e.contrastText||(e.contrastText=S(e.main)),e},z={dark:v,light:y};return(0,i.Z)((0,r.Z)({common:(0,r.Z)({},c),mode:t,primary:T({color:k,name:"primary"}),secondary:T({color:w,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:T({color:$,name:"error"}),warning:T({color:M,name:"warning"}),info:T({color:A,name:"info"}),success:T({color:O,name:"success"}),grey:d,contrastThreshold:a,getContrastText:S,augmentColor:T,tonalOffset:s},z[t]),x)}const k=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const w={textTransform:"uppercase"},$='"Roboto", "Helvetica", "Arial", sans-serif';function A(e,t){const a="function"==typeof t?t(e):t,{fontFamily:o=$,fontSize:s=14,fontWeightLight:l=300,fontWeightRegular:c=400,fontWeightMedium:d=500,fontWeightBold:f=700,htmlFontSize:p=16,allVariants:u,pxToRem:g}=a,h=(0,n.Z)(a,k);const m=s/14,b=g||(e=>e/p*m+"rem"),y=(e,t,a,n,i)=>{return(0,r.Z)({fontFamily:o,fontWeight:e,fontSize:b(t),lineHeight:a},o===$?{letterSpacing:(s=n/t,Math.round(1e5*s)/1e5)+"em"}:{},i,u);var s},v={h1:y(l,96,1.167,-1.5),h2:y(l,60,1.2,-.5),h3:y(c,48,1.167,0),h4:y(c,34,1.235,.25),h5:y(c,24,1.334,0),h6:y(d,20,1.6,.15),subtitle1:y(c,16,1.75,.15),subtitle2:y(d,14,1.57,.1),body1:y(c,16,1.5,.15),body2:y(c,14,1.43,.15),button:y(d,14,1.75,.4,w),caption:y(c,12,1.66,.4),overline:y(c,12,2.66,1,w)};return(0,i.Z)((0,r.Z)({htmlFontSize:p,pxToRem:b,fontFamily:o,fontSize:s,fontWeightLight:l,fontWeightRegular:c,fontWeightMedium:d,fontWeightBold:f},v),h,{clone:!1})}function O(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}const M=["none",O(0,2,1,-1,0,1,1,0,0,1,3,0),O(0,3,1,-2,0,2,2,0,0,1,5,0),O(0,3,3,-2,0,3,4,0,0,1,8,0),O(0,2,4,-1,0,4,5,0,0,1,10,0),O(0,3,5,-1,0,5,8,0,0,1,14,0),O(0,3,5,-1,0,6,10,0,0,1,18,0),O(0,4,5,-2,0,7,10,1,0,2,16,1),O(0,5,5,-3,0,8,10,1,0,3,14,2),O(0,5,6,-3,0,9,12,1,0,3,16,2),O(0,6,6,-3,0,10,14,1,0,4,18,3),O(0,6,7,-4,0,11,15,1,0,4,20,3),O(0,7,8,-4,0,12,17,2,0,5,22,4),O(0,7,8,-4,0,13,19,2,0,5,24,4),O(0,7,9,-4,0,14,21,2,0,5,26,4),O(0,8,9,-5,0,15,22,2,0,6,28,5),O(0,8,10,-5,0,16,24,2,0,6,30,5),O(0,8,11,-5,0,17,26,2,0,6,32,5),O(0,9,11,-5,0,18,28,2,0,7,34,6),O(0,9,12,-6,0,19,29,2,0,7,36,6),O(0,10,13,-6,0,20,31,3,0,8,38,7),O(0,10,13,-6,0,21,33,3,0,8,40,7),O(0,10,14,-6,0,22,35,3,0,8,42,7),O(0,11,14,-7,0,23,36,3,0,9,44,8),O(0,11,15,-7,0,24,38,3,0,9,46,8)],S=["duration","easing","delay"],T={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},z={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function R(e){return`${Math.round(e)}ms`}function C(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function H(e){const t=(0,r.Z)({},T,e.easing),a=(0,r.Z)({},z,e.duration);return(0,r.Z)({getAutoHeightDuration:C,create:(e=["all"],r={})=>{const{duration:o=a.standard,easing:i=t.easeInOut,delay:s=0}=r;(0,n.Z)(r,S);return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"==typeof o?o:R(o)} ${i} ${"string"==typeof s?s:R(s)}`)).join(",")}},e,{easing:t,duration:a})}const j={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},F=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function N(e={},...t){const{mixins:a={},palette:l={},transitions:c={},typography:d={}}=e,f=(0,n.Z)(e,F);if(e.vars)throw new Error((0,o.Z)(18));const p=x(l),u=(0,s.Z)(e);let g=(0,i.Z)(u,{mixins:(h=u.breakpoints,m=a,(0,r.Z)({toolbar:{minHeight:56,[h.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[h.up("sm")]:{minHeight:64}}},m)),palette:p,shadows:M.slice(),typography:A(p,d),transitions:H(c),zIndex:(0,r.Z)({},j)});var h,m;return g=(0,i.Z)(g,f),g=t.reduce(((e,t)=>(0,i.Z)(e,t)),g),g}const W=N()},81719:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(6192),n=a(67962);const o=(0,r.ZP)({defaultTheme:n.Z,rootShouldForwardProp:e=>(0,r.x9)(e)&&"classes"!==e})},51650:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462);function n(e){const{theme:t,name:a,props:n}=e;return t&&t.components&&t.components[a]&&t.components[a].defaultProps?function(e,t){const a=(0,r.Z)({},t);return Object.keys(e).forEach((t=>{void 0===a[t]&&(a[t]=e[t])})),a}(t.components[a].defaultProps,n):n}var o=a(66500),i=a(67294);const s=i.createContext(null);const l=function(e=null){const t=i.useContext(s);return t&&(a=t,0!==Object.keys(a).length)?t:e;var a},c=(0,o.Z)();const d=function(e=c){return l(e)};var f=a(67962);function p({props:e,name:t}){return function({props:e,name:t,defaultTheme:a}){return n({theme:d(a),name:t,props:e})}({props:e,name:t,defaultTheme:f.Z})}},36622:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(28320).Z},41796:(e,t,a)=>{a.d(t,{$n:()=>f,Fq:()=>c,_j:()=>d,mi:()=>l});var r=a(71387);function n(e,t=0,a=1){return Math.min(Math.max(t,e),a)}function o(e){if(e.type)return e;if("#"===e.charAt(0))return o(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let a=e.match(t);return a&&1===a[0].length&&(a=a.map((e=>e+e))),a?`rgb${4===a.length?"a":""}(${a.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),a=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(a))throw new Error((0,r.Z)(9,e));let n,i=e.substring(t+1,e.length-1);if("color"===a){if(i=i.split(" "),n=i.shift(),4===i.length&&"/"===i[3].charAt(0)&&(i[3]=i[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n))throw new Error((0,r.Z)(10,n))}else i=i.split(",");return i=i.map((e=>parseFloat(e))),{type:a,values:i,colorSpace:n}}function i(e){const{type:t,colorSpace:a}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${a} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function s(e){let t="hsl"===(e=o(e)).type||"hsla"===e.type?o(function(e){e=o(e);const{values:t}=e,a=t[0],r=t[1]/100,n=t[2]/100,s=r*Math.min(n,1-n),l=(e,t=(e+a/30)%12)=>n-s*Math.max(Math.min(t-3,9-t,1),-1);let c="rgb";const d=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(c+="a",d.push(t[3])),i({type:c,values:d})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){const a=s(e),r=s(t);return(Math.max(a,r)+.05)/(Math.min(a,r)+.05)}function c(e,t){return e=o(e),t=n(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,i(e)}function d(e,t){if(e=o(e),t=n(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let a=0;a<3;a+=1)e.values[a]*=1-t;return i(e)}function f(e,t){if(e=o(e),t=n(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let a=0;a<3;a+=1)e.values[a]+=(255-e.values[a])*t;else if(-1!==e.type.indexOf("color"))for(let a=0;a<3;a+=1)e.values[a]+=(1-e.values[a])*t;return i(e)}}}]);