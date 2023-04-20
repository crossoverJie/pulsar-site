"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45596],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>f});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),r=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=r(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=r(n),d=i,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?t.createElement(f,s(s({ref:a},p),{},{components:n})):t.createElement(f,s({ref:a},p))}));function f(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=d;var u={};for(var o in a)hasOwnProperty.call(a,o)&&(u[o]=a[o]);u.originalType=e,u[m]="string"==typeof e?e:i,s[1]=u;for(var r=2;r<l;r++)s[r]=n[r];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(67294),i=n(86010);const l="tabItem_Ymn6";function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,s),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(87462),i=n(67294),l=n(86010),s=n(72389),u=n(67392),o=n(7094),r=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:a,block:n,defaultValue:s,values:c,groupId:d,className:f}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??v.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),I=(0,u.l)(k,((e,a)=>e.value===a.value));if(I.length>0)throw new Error(`Docusaurus error: Duplicate values "${I.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const A=null===s?s:s??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==A&&!k.some((e=>e.value===A)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,o.U)(),[T,b]=(0,i.useState)(A),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,r.o5)();if(null!=d){const e=g[d];null!=e&&e!==T&&k.some((a=>a.value===e))&&b(e)}const C=e=>{const a=e.currentTarget,n=N.indexOf(a),t=k[n].value;t!==T&&(P(a),b(t),null!=d&&h(d,String(t)))},y=e=>{let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;a=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;a=N[n]??N[N.length-1];break}}a?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},k.map((e=>{let{value:a,label:n,attributes:s}=e;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>N.push(e),onKeyDown:y,onClick:C},s,{className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":T===a})}),n??a)}))),a?(0,i.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function d(e){const a=(0,s.Z)();return i.createElement(c,(0,t.Z)({key:String(a)},e))}},61021:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>m});var t=n(87462),i=(n(67294),n(3905)),l=n(65488),s=n(85162);const u={id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions"},o=void 0,r={unversionedId:"admin-api-functions",id:"version-2.11.x/admin-api-functions",title:"Manage Functions",description:"This page only shows some frequently used operations.",source:"@site/versioned_docs/version-2.11.x/admin-api-functions.md",sourceDirName:".",slug:"/admin-api-functions",permalink:"/docs/2.11.x/admin-api-functions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/admin-api-functions.md",tags:[],version:"2.11.x",frontMatter:{id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions"},sidebar:"docsSidebar",previous:{title:"Topics",permalink:"/docs/2.11.x/admin-api-topics"},next:{title:"Packages",permalink:"/docs/2.11.x/admin-api-packages"}},p={},m=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Update a function",id:"update-a-function",level:3},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"List all functions",id:"list-all-functions",level:3},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3}],c={toc:m};function d(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"}," This page only shows ",(0,i.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,i.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API doc"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,i.kt)("p",null,"Functions can be managed via the following methods."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Admin CLI")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," command of the ",(0,i.kt)("a",{parentName:"td",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"REST API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"/admin/v3/functions")," endpoint of the admin ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Java Admin API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," method of the ",(0,i.kt)("inlineCode",{parentName:"td"},"PulsarAdmin")," object in the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-java"},"Java API"),".")))),(0,i.kt)("h2",{id:"function-resources"},"Function resources"),(0,i.kt)("p",null,"You can perform the following operations on functions."),(0,i.kt)("h3",{id:"create-a-function"},"Create a function"),(0,i.kt)("p",null,"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=create"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions create \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --inputs test-input-topic \\\n    --output persistent://public/default/test-output-topic \\\n    --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n    --jar /examples/api-examples.jar\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/registerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'FunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n')))),(0,i.kt)("h3",{id:"update-a-function"},"Update a function"),(0,i.kt)("p",null,"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=update"},(0,i.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions update \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --output persistent://public/default/update-output-topic \\\n    # other options\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/updateFunction"},"PUT /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'FunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n')))),(0,i.kt)("h3",{id:"start-an-instance-of-a-function"},"Start an instance of a function"),(0,i.kt)("p",null,"You can start a stopped function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions start \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"start-all-instances-of-a-function"},"Start all instances of a function"),(0,i.kt)("p",null,"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions start \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/start"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().startFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"stop-an-instance-of-a-function"},"Stop an instance of a function"),(0,i.kt)("p",null,"You can stop a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stop \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"stop-all-instances-of-a-function"},"Stop all instances of a function"),(0,i.kt)("p",null,"You can stop all function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stop \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().stopFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"restart-an-instance-of-a-function"},"Restart an instance of a function"),(0,i.kt)("p",null,"Restart a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions restart \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"restart-all-instances-of-a-function"},"Restart all instances of a function"),(0,i.kt)("p",null,"You can restart all function instances using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions restart \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().restartFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,i.kt)("p",null,"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=list"},(0,i.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/listFunctions"},"GET /admin/v3/functions/:tenant/:namespace"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctions(tenant, namespace);\n")))),(0,i.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,i.kt)("p",null,"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=delete"},(0,i.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions delete \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/deregisterFunction"},"DELETE /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().deleteFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"get-info-about-a-function"},"Get info about a function"),(0,i.kt)("p",null,"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=get"},(0,i.kt)("inlineCode",{parentName:"a"},"get"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/getFunctionInfo"},"GET /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"get-status-of-an-instance-of-a-function"},"Get status of an instance of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/getFunctionInstanceStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"get-status-of-all-instances-of-a-function"},"Get status of all instances of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/getFunctionStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStatus(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"get-stats-of-an-instance-of-a-function"},"Get stats of an instance of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar Function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/getFunctionInstanceStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"get-stats-of-all-instances-of-a-function"},"Get stats of all instances of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/getFunctionStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStats(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"trigger-a-function"},"Trigger a function"),(0,i.kt)("p",null,"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"trigger"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --topic (the name of input topic) \\\n    --trigger-value \\"hello pulsar\\"\n    # or --trigger-file (the path of trigger file)\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/triggerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/trigger"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n")))),(0,i.kt)("h3",{id:"put-state-associated-with-a-function"},"Put state associated with a function"),(0,i.kt)("p",null,"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=putstate"},(0,i.kt)("inlineCode",{parentName:"a"},"putstate"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'pulsar-admin functions putstate \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/putFunctionState"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n")))),(0,i.kt)("h3",{id:"fetch-state-associated-with-a-function"},"Fetch state associated with a function"),(0,i.kt)("p",null,"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/functions?id=querystate"},(0,i.kt)("inlineCode",{parentName:"a"},"querystate"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions querystate \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --key (the key of state)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.11.1&apiversion=v3#operation/getFunctionState"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionState(tenant, namespace, functionName, key);\n")))))}d.isMDXComponent=!0}}]);