"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||p;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const p={id:"client-cpp-2.7.1",title:"Client CPP 2.7.1",sidebar_label:"Client CPP 2.7.1"},l=void 0,i={unversionedId:"versioned/client-cpp-2.7.1",id:"versioned/client-cpp-2.7.1",title:"Client CPP 2.7.1",description:"- C++] Add 'encrypted' option in commands.newproducer() [#9542",source:"@site/release-notes/versioned/client-cpp-2.7.1.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.7.1",permalink:"/release-notes/versioned/client-cpp-2.7.1",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.7.1",title:"Client CPP 2.7.1",sidebar_label:"Client CPP 2.7.1"}},o={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[C++]"," Add 'encrypted' option in commands.newproducer() ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9542"},"#9542")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Remove namespace check for MultiTopicsConsumerImpl ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9520"},"#9520")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Fix broken replication msg to specific cluster ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9372"},"#9372")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Fix compilation issue caused by non-virtual destructor ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9106"},"#9106")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Expose cpp end to end encryption interface ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9074"},"#9074")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Fix Consumer send redeliverMessages repeatedly ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9072"},"#9072")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Add consumer's configs for reader ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8905"},"#8905")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Add reader internal subscription name setter ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8823"},"#8823")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Fix race condition in BlockingQueue ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8765"},"#8765")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Fix cpp client do AcknowledgeCumulative not clean up previous message ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8606"},"#8606")),(0,a.kt)("li",{parentName:"ul"},"[C++]"," Implement batch aware producer router ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8395"},"#8395"))))}s.isMDXComponent=!0}}]);