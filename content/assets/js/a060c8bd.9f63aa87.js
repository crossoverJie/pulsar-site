"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[875],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>m});var l=a(67294);function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,l,p=function(t,e){if(null==t)return{};var a,l,p={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(p[a]=t[a]);return p}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(p[a]=t[a])}return p}var u=l.createContext({}),c=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},o=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var a=t.components,p=t.mdxType,i=t.originalType,u=t.parentName,o=r(t,["components","mdxType","originalType","parentName"]),s=c(a),m=p,g=s["".concat(u,".").concat(m)]||s[m]||h[m]||i;return a?l.createElement(g,n(n({ref:e},o),{},{components:a})):l.createElement(g,n({ref:e},o))}));function m(t,e){var a=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var i=a.length,n=new Array(i);n[0]=s;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r.mdxType="string"==typeof t?t:p,n[1]=r;for(var c=2;c<i;c++)n[c]=a[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},13766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=a(87462),p=(a(67294),a(3905));const i={id:"pulsar-client-go-0.9.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},n=void 0,r={unversionedId:"versioned/pulsar-client-go-0.9.0",id:"versioned/pulsar-client-go-0.9.0",title:"Pulsar Client Go",description:"What's Changed",source:"@site/release-notes/versioned/pulsar-client-go-0.9.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.9.0",permalink:"/release-notes/versioned/pulsar-client-go-0.9.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.9.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},u={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],o={toc:c};function h(t){let{components:e,...a}=t;return(0,p.kt)("wrapper",(0,l.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"add 0.8.0 changelog for repo by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/727"},"https://github.com/apache/pulsar-client-go/pull/727")),(0,p.kt)("li",{parentName:"ul"},"[Issue 729]","stop ticker when create producer failed by @NaraLuwan in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/730"},"https://github.com/apache/pulsar-client-go/pull/730")),(0,p.kt)("li",{parentName:"ul"},"Update version file to 0.8.0 by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/728"},"https://github.com/apache/pulsar-client-go/pull/728")),(0,p.kt)("li",{parentName:"ul"},"[Issue 725][Dependencies]"," Upgrade beefsack/go-rate by @shubham1172 in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/735"},"https://github.com/apache/pulsar-client-go/pull/735")),(0,p.kt)("li",{parentName:"ul"},"Upgrade klauspost/compress to v1.14.4 by @dferstay in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/740"},"https://github.com/apache/pulsar-client-go/pull/740")),(0,p.kt)("li",{parentName:"ul"},"Upgrade prometheus client to 1.11.1 by @nicoloboschi in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/738"},"https://github.com/apache/pulsar-client-go/pull/738")),(0,p.kt)("li",{parentName:"ul"},"add 0.8.1 changelog by @freeznet in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-"},"https://github.com/apache/pulsar-"),"\nclient-go/pull/742"),(0,p.kt)("li",{parentName:"ul"},"Temporarily point ci to pulsar 2.8.2 by @Shoothzj in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/747"},"https://github.com/apache/pulsar-client-go/pull/747")),(0,p.kt)("li",{parentName:"ul"},"[build]"," make go version consistent by @Shoothzj in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/751"},"https://github.com/apache/pulsar-client-go/pull/751")),(0,p.kt)("li",{parentName:"ul"},"Exposing broker metadata by @Shoothzj in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-"},"https://github.com/apache/pulsar-"),"\nclient-go/pull/745"),(0,p.kt)("li",{parentName:"ul"},"Add schema support to Reader by @ZiyaoWei in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/741"},"https://github.com/apache/pulsar-client-go/pull/741")),(0,p.kt)("li",{parentName:"ul"},"allow config reader subscription name by @Shoothzj in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/754"},"https://github.com/apache/pulsar-client-go/pull/754")),(0,p.kt)("li",{parentName:"ul"},"Cleanup topics after unit tests by @ZiyaoWei in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/755"},"https://github.com/apache/pulsar-client-go/pull/755")),(0,p.kt)("li",{parentName:"ul"},"Add TableView support by @ZiyaoWei in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-"},"https://github.com/apache/pulsar-"),"\nclient-go/pull/743"),(0,p.kt)("li",{parentName:"ul"},"Fix ack timeout cause reconnect by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/756"},"https://github.com/apache/pulsar-client-go/pull/756")),(0,p.kt)("li",{parentName:"ul"},"fix: add service not ready check by @nodece in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/757"},"https://github.com/apache/pulsar-client-go/pull/757")),(0,p.kt)("li",{parentName:"ul"},"Dlq producer on topic with schema by @GPrabhudas in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/723"},"https://github.com/apache/pulsar-client-go/pull/723")),(0,p.kt)("li",{parentName:"ul"},"fix annotation typo in consumer.go by @Shoothzj in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/758"},"https://github.com/apache/pulsar-client-go/pull/758")),(0,p.kt)("li",{parentName:"ul"},"Fix producer unable register when cnx closed by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/761"},"https://github.com/apache/pulsar-client-go/pull/761")),(0,p.kt)("li",{parentName:"ul"},"Add -c/--max-connections parameter to pulsar-perf-go and set it to 1 by default\nby @lhotari in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/765"},"https://github.com/apache/pulsar-client-go/pull/765")),(0,p.kt)("li",{parentName:"ul"},"[Issue 763][producer]"," Fix deadlock in Producer Send when message fails to\nencode. by @samuelhewitt in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-"},"https://github.com/apache/pulsar-client-"),"\ngo/pull/762"),(0,p.kt)("li",{parentName:"ul"},"[Issue 749]","Fix panic caused by flushing current batch with an incorrect\ninternal function. by @shileiyu in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-"},"https://github.com/apache/pulsar-client-"),"\ngo/pull/750"),(0,p.kt)("li",{parentName:"ul"},"Add consumer state check when request commands by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/772"},"https://github.com/apache/pulsar-client-go/pull/772")),(0,p.kt)("li",{parentName:"ul"},"Fix sequenceID is not equal to cause the connection to be closed\nincorrectly by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-"},"https://github.com/apache/pulsar-client-"),"\ngo/pull/774"),(0,p.kt)("li",{parentName:"ul"},"Add error response for Ack func by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/775"},"https://github.com/apache/pulsar-client-go/pull/775")),(0,p.kt)("li",{parentName:"ul"},'Revert "Fix stuck when reconnect broker (#703)" by @lhotari in\n',(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/767"},"https://github.com/apache/pulsar-client-go/pull/767")),(0,p.kt)("li",{parentName:"ul"},"[Issue 718]"," Fix nil pointer dereference in TopicNameWithoutPartitionPart\nby @hantmac in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/734"},"https://github.com/apache/pulsar-client-go/pull/734")),(0,p.kt)("li",{parentName:"ul"},"Support ack response for Go SDK by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/776"},"https://github.com/apache/pulsar-client-go/pull/776")),(0,p.kt)("li",{parentName:"ul"},"[Issue 779]","Fix ack request not set requestId when enable AckWithResponse\noption by @liushengzhong0927 in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-"},"https://github.com/apache/pulsar-client-"),"\ngo/pull/780"),(0,p.kt)("li",{parentName:"ul"},"[issue 791]"," allow to add at least one message on batch builder by\n@zzzming in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/792"},"https://github.com/apache/pulsar-client-go/pull/792")),(0,p.kt)("li",{parentName:"ul"},"schema creation and validation functions without panicing by @zzzming in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/794"},"https://github.com/apache/pulsar-client-go/pull/794")),(0,p.kt)("li",{parentName:"ul"},"[github ci]"," add go 1.18 to the test matrix by @pgier in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/790"},"https://github.com/apache/pulsar-client-go/pull/790")),(0,p.kt)("li",{parentName:"ul"},"Fix using closed connection in consumer by @hrsakai in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/785"},"https://github.com/apache/pulsar-client-go/pull/785")),(0,p.kt)("li",{parentName:"ul"},"feat: add basic authentication by @nodece in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/778"},"https://github.com/apache/pulsar-client-go/pull/778")),(0,p.kt)("li",{parentName:"ul"},"[Issue 781][add consumer seek by time on partitioned topic]","  by\n@GPrabhudas in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/782"},"https://github.com/apache/pulsar-client-go/pull/782")),(0,p.kt)("li",{parentName:"ul"},"[ci]"," update and simplify GitHub workflow by @pgier in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/796"},"https://github.com/apache/pulsar-client-go/pull/796")),(0,p.kt)("li",{parentName:"ul"},"feat: support multiple schema version for producer and consumer by @oryx2\nin ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/611"},"https://github.com/apache/pulsar-client-go/pull/611")),(0,p.kt)("li",{parentName:"ul"},"[issue #752]"," replace go-rate rate limiter with a buffered channel\nimplementation by @zzzming in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-"},"https://github.com/apache/pulsar-client-"),"\ngo/pull/799"),(0,p.kt)("li",{parentName:"ul"},"[issue 814]"," consumer and producer reconnect failure metrics counter by\n@zzzming in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/815"},"https://github.com/apache/pulsar-client-go/pull/815")),(0,p.kt)("li",{parentName:"ul"},"[cleanup]"," Fix to follow lint error (File is not  goimports -ed\n(goimports)) by @equanz in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/824"},"https://github.com/apache/pulsar-client-go/pull/824")),(0,p.kt)("li",{parentName:"ul"},"[oauth2]"," Remove oauth2 go.mod and go.sum by @pgier in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/802"},"https://github.com/apache/pulsar-client-go/pull/802")),(0,p.kt)("li",{parentName:"ul"},"[client]"," Rename  test_helper.go  to follow the test code naming\nconvention by @equanz in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/822"},"https://github.com/apache/pulsar-client-go/pull/822")),(0,p.kt)("li",{parentName:"ul"},"[security]"," Bump github.com/stretchr/testify to update gopkg.in/yaml.v3 by\n@massakam in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/813"},"https://github.com/apache/pulsar-client-go/pull/813")),(0,p.kt)("li",{parentName:"ul"},"[client]"," Add MetricsRegisterer to ClientOptions by @pragkent in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/826"},"https://github.com/apache/pulsar-client-go/pull/826")),(0,p.kt)("li",{parentName:"ul"},"NackBackoffPolicy.Next return time.Duration by @h-hy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/825"},"https://github.com/apache/pulsar-client-go/pull/825")),(0,p.kt)("li",{parentName:"ul"},"Add golang 1.19 in test matrix by @Shoothzj in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/832"},"https://github.com/apache/pulsar-client-go/pull/832")),(0,p.kt)("li",{parentName:"ul"},"ci: add makefile by @pgier in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-"},"https://github.com/apache/pulsar-client-"),"\ngo/pull/800"),(0,p.kt)("li",{parentName:"ul"},"Make keepalive interval configurable by @nodece in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/838"},"https://github.com/apache/pulsar-client-go/pull/838")),(0,p.kt)("li",{parentName:"ul"},"[issue #807]"," dlq topic producer options by @zzzming in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/809"},"https://github.com/apache/pulsar-client-go/pull/809")),(0,p.kt)("li",{parentName:"ul"},"[log-format]",' remove redundant "[]" pair in the head and tail of log\ncontent by @shenqianjin in ',(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/831"},"https://github.com/apache/pulsar-client-go/pull/831")),(0,p.kt)("li",{parentName:"ul"},"Update proto file latest by @liangyuanpeng in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/841"},"https://github.com/apache/pulsar-client-go/pull/841")),(0,p.kt)("li",{parentName:"ul"},"[bugfix]"," Fix wrong check eventime by default by @liangyuanpeng in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/843"},"https://github.com/apache/pulsar-client-go/pull/843")),(0,p.kt)("li",{parentName:"ul"},"Fixs : NackBackoffPolicy.Next return time.Duration by @h-hy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/834"},"https://github.com/apache/pulsar-client-go/pull/834")),(0,p.kt)("li",{parentName:"ul"},"Introduce doneCh for ack error by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/777"},"https://github.com/apache/pulsar-client-go/pull/777")),(0,p.kt)("li",{parentName:"ul"},"Parameterize the reconnection option by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/853"},"https://github.com/apache/pulsar-client-go/pull/853")),(0,p.kt)("li",{parentName:"ul"},"add 0.9.0 release changelog by @freeznet in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/804"},"https://github.com/apache/pulsar-client-go/pull/804")),(0,p.kt)("li",{parentName:"ul"},"Embed Go SDK version to 0.9.0 by @wolfstudy in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/854"},"https://github.com/apache/pulsar-client-go/pull/854"))),(0,p.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"@NaraLuwan made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/730"},"https://github.com/apache/pulsar-client-go/pull/730")),(0,p.kt)("li",{parentName:"ul"},"@shubham1172 made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/735"},"https://github.com/apache/pulsar-client-go/pull/735")),(0,p.kt)("li",{parentName:"ul"},"@nicoloboschi made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/738"},"https://github.com/apache/pulsar-client-go/pull/738")),(0,p.kt)("li",{parentName:"ul"},"@ZiyaoWei made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/741"},"https://github.com/apache/pulsar-client-go/pull/741")),(0,p.kt)("li",{parentName:"ul"},"@lhotari made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/765"},"https://github.com/apache/pulsar-client-go/pull/765")),(0,p.kt)("li",{parentName:"ul"},"@samuelhewitt made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/762"},"https://github.com/apache/pulsar-client-go/pull/762")),(0,p.kt)("li",{parentName:"ul"},"@shileiyu made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/750"},"https://github.com/apache/pulsar-client-go/pull/750")),(0,p.kt)("li",{parentName:"ul"},"@hantmac made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/734"},"https://github.com/apache/pulsar-client-go/pull/734")),(0,p.kt)("li",{parentName:"ul"},"@liushengzhong0927 made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/780"},"https://github.com/apache/pulsar-client-go/pull/780")),(0,p.kt)("li",{parentName:"ul"},"@oryx2 made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-"},"https://github.com/apache/pulsar-"),"\nclient-go/pull/611"),(0,p.kt)("li",{parentName:"ul"},"@massakam made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/813"},"https://github.com/apache/pulsar-client-go/pull/813")),(0,p.kt)("li",{parentName:"ul"},"@pragkent made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/826"},"https://github.com/apache/pulsar-client-go/pull/826")),(0,p.kt)("li",{parentName:"ul"},"@h-hy made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-"},"https://github.com/apache/pulsar-"),"\nclient-go/pull/825"),(0,p.kt)("li",{parentName:"ul"},"@shenqianjin made their first contribution in\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/831"},"https://github.com/apache/pulsar-client-go/pull/831"))),(0,p.kt)("p",null,"Full Changelog: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-go/compare/v0.8.0...v0.9.0"},"https://github.com/apache/pulsar-client-go/compare/v0.8.0...v0.9.0")))}h.isMDXComponent=!0}}]);