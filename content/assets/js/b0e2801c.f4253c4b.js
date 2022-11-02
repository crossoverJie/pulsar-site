"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,d=h["".concat(o,".").concat(m)]||h[m]||s[m]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"},i=void 0,p={unversionedId:"versioned/client-java-2.8.2",id:"versioned/client-java-2.8.2",title:"Client Java 2.8.2",description:"- Remove the uncorrected VisableTesting annotation in pulsar-client #11784",source:"@site/release-notes/versioned/client-java-2.8.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.2",permalink:"/release-notes/versioned/client-java-2.8.2",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"}},o={},u=[],c={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove the uncorrected ",(0,n.kt)("inlineCode",{parentName:"li"},"VisableTesting")," annotation in pulsar-client ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11784"},"#11784")),(0,n.kt)("li",{parentName:"ul"},"Fix packages tool parameter desc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11809"},"#11809")),(0,n.kt)("li",{parentName:"ul"},"Add an optional params scope for pulsar oauth2 client ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11931"},"#11931")),(0,n.kt)("li",{parentName:"ul"},"Fix producer data race to get cnx ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13176"},"#13176")),(0,n.kt)("li",{parentName:"ul"},"Send CloseProducer on timeout ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13161"},"#13161")),(0,n.kt)("li",{parentName:"ul"},"Let producer reconnect for state RegisteringSchema ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12781"},"#12781")),(0,n.kt)("li",{parentName:"ul"},"Use epoch to version producer's cnx to prevent early de\u2026 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12779"},"#12779")),(0,n.kt)("li",{parentName:"ul"},"Pulsar Client: restore SchemaInfo.builder() API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12673"},"#12673")),(0,n.kt)("li",{parentName:"ul"},"Remove invalid call to Thread.currentThread().interrupt(); ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12652"},"#12652")),(0,n.kt)("li",{parentName:"ul"},"Add additional error handling in auto partition update task MultiTopicsConsumerImpl ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12620"},"#12620")),(0,n.kt)("li",{parentName:"ul"},"Fix invalid firstSentAt in log message when timeout first time ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12588"},"#12588")),(0,n.kt)("li",{parentName:"ul"},"Update producer stats when producer close ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12500"},"#12500")),(0,n.kt)("li",{parentName:"ul"},"'StartMessageId' and 'RollbackDuration' not working in MultiTopicsReader for non-partitioned topics ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12308"},"#12308")),(0,n.kt)("li",{parentName:"ul"},"Use failPendingMessages to ensure proper cleanup ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12259"},"#12259")),(0,n.kt)("li",{parentName:"ul"},"Auto-recovery after exception like out of direct memory ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12170"},"#12170")),(0,n.kt)("li",{parentName:"ul"},"Fix endless receiveAsync loop in MultiTopicsConsumer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12044"},"#12044")),(0,n.kt)("li",{parentName:"ul"},"Make Audience Field Optional in OAuth2 Client Credentials ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11988"},"#11988")),(0,n.kt)("li",{parentName:"ul"},"Forget to update memory usage on producer close ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11906"},"#11906")),(0,n.kt)("li",{parentName:"ul"},"Fix ConcurrentModificationException in sendAsync ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11884"},"#11884")),(0,n.kt)("li",{parentName:"ul"},"Hide option -s and substitute -ss(0) for it ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11828"},"#11828")),(0,n.kt)("li",{parentName:"ul"},"Fix seek at batchIndex level receive duplicated messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11826"},"#11826")),(0,n.kt)("li",{parentName:"ul"},"Reduce redundant FLOW requests for non-durable multi-topics consumer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11802"},"#11802")),(0,n.kt)("li",{parentName:"ul"},"Add close method in the class of NegativeAcksTracker ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12469"},"#12469")),(0,n.kt)("li",{parentName:"ul"},"Fix a typo in UnAckedMessageTracker ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12467"},"#12467")),(0,n.kt)("li",{parentName:"ul"},"Fix message being ignored when the non-persistent topic reader reconnect. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12348"},"#12348")),(0,n.kt)("li",{parentName:"ul"},"Fix deadLetterPolicy is not working with key shared subscription under partitioned topic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12148"},"#12148")),(0,n.kt)("li",{parentName:"ul"},"Forget to call SendCallback on producer close ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11939"},"#11939"))))}s.isMDXComponent=!0}}]);