"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"pulsar-client-go-0.5.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},a=void 0,l={unversionedId:"versioned/pulsar-client-go-0.5.0",id:"versioned/pulsar-client-go-0.5.0",title:"Pulsar Client Go",description:"Fixes",source:"@site/release-notes/versioned/pulsar-client-go-0.5.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.5.0",permalink:"/release-notes/versioned/pulsar-client-go-0.5.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.5.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},u={},s=[{value:"Fixes",id:"fixes",level:3},{value:"Improvements",id:"improvements",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"fixes"},"Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"#465 Reverted datadog to DataDog"),(0,o.kt)("li",{parentName:"ul"},"#499 Fix range channel deadlock error"),(0,o.kt)("li",{parentName:"ul"},"#509 Add sentAt when put item into pendingQueue"),(0,o.kt)("li",{parentName:"ul"},"#474 Fix race condition/goroutine leak in partition discovery goroutine"),(0,o.kt)("li",{parentName:"ul"},"#494 Close cnxPool when closing a Client "),(0,o.kt)("li",{parentName:"ul"},"#478 Move GetPartitionedTopicMetadata to lookup service"),(0,o.kt)("li",{parentName:"ul"},"#470 Fix unexpected nil pointer when reading item from keyring"),(0,o.kt)("li",{parentName:"ul"},"#467 Fix reader with start latest message id inclusive ")),(0,o.kt)("h3",{id:"improvements"},"Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"#510 Added http lookup service support"),(0,o.kt)("li",{parentName:"ul"},"#502 Support listener name for go client"),(0,o.kt)("li",{parentName:"ul"},"#484 Add multiple hosts support "),(0,o.kt)("li",{parentName:"ul"},"#471 Use newError to build return error"),(0,o.kt)("li",{parentName:"ul"},"#459 Improve error log for frame size too big and maxMessageSize")))}c.isMDXComponent=!0}}]);