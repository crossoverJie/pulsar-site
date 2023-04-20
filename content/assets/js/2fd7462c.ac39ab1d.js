"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),r=n(86010),s=n(72389),o=n(67392),i=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:d,className:h}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,i.U)(),[w,N]=(0,l.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=d){const e=k[d];null!=e&&e!==w&&y.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==w&&(x(t),N(a),null!=d&&g(d,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:P},s,{className:(0,r.Z)("tabs__item",p,s?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,l.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},12047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),r=n(65488),s=n(85162);const o={id:"administration-pulsar-shell",title:"Pulsar Shell",sidebar_label:"Pulsar Shell"},i=void 0,u={unversionedId:"administration-pulsar-shell",id:"administration-pulsar-shell",title:"Pulsar Shell",description:"Pulsar shell is a fast and flexible shell for Pulsar cluster management, messaging, and more.",source:"@site/docs/administration-pulsar-shell.md",sourceDirName:".",slug:"/administration-pulsar-shell",permalink:"/docs/next/administration-pulsar-shell",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-pulsar-shell.md",tags:[],version:"current",frontMatter:{id:"administration-pulsar-shell",title:"Pulsar Shell",sidebar_label:"Pulsar Shell"},sidebar:"docsSidebar",previous:{title:"Pulsar Manager",permalink:"/docs/next/administration-pulsar-manager"},next:{title:"Load balance",permalink:"/docs/next/administration-load-balance"}},c={},p=[{value:"Use case",id:"use-case",level:2},{value:"Install Pulsar Shell",id:"install-pulsar-shell",level:2},{value:"Connect to your cluster",id:"connect-to-your-cluster",level:2},{value:"Run commands sequentially",id:"run-commands-sequentially",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar shell is a fast and flexible shell for Pulsar cluster management, messaging, and more.\nIt's great for quickly switching between different clusters, and can modify cluster or tenant configurations in an instant."),(0,l.kt)("h2",{id:"use-case"},"Use case"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Administration: find all the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/admin-api-overview"},"Admin API")," features under the ",(0,l.kt)("inlineCode",{parentName:"li"},"admin")," command."),(0,l.kt)("li",{parentName:"ul"},"Client: find all the ",(0,l.kt)("a",{parentName:"li",href:"pathname:///reference/#/next/pulsar-client/"},"pulsar-client")," features under the ",(0,l.kt)("inlineCode",{parentName:"li"},"client")," command.")),(0,l.kt)("h2",{id:"install-pulsar-shell"},"Install Pulsar Shell"),(0,l.kt)("p",null,"Download the tarball from the ",(0,l.kt)("a",{parentName:"p",href:"pathname:///download"},"download page")," and extract it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.11.1/apache-pulsar-shell-2.11.1-bin.tar.gz\ntar xzvf apache-pulsar-shell-2.11.1-bin.tar.gz\ncd apache-pulsar-shell-2.11.1-bin.tar.gz\n")),(0,l.kt)("p",null,"Now you can enter Pulsar shell's interactive mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/pulsar-shell\nWelcome to Pulsar shell!\n  Service URL: pulsar://localhost:6650/\n  Admin URL: http://localhost:8080/\n\nType help to get started or try the autocompletion (TAB button).\nType exit or quit to end the shell session.\n\ndefault(localhost)>\n")),(0,l.kt)("h2",{id:"connect-to-your-cluster"},"Connect to your cluster"),(0,l.kt)("p",null,"By default, the shell tries to connect to a local Pulsar instance.\nTo connect to a different cluster, you have to register the cluster with Pulsar shell. You can do this in a few different ways depending on where your config file is located:"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The configuration file must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"client.conf")," file, the same one you use for ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," and other client tools.")),(0,l.kt)(r.Z,{groupId:"shell-config-modes",defaultValue:"url",values:[{label:"Remote URL",value:"url"},{label:"File",value:"file"},{label:"Inline",value:"inline"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"url",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--url")," value must point to a valid remote file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"default(localhost)> config create --url https://<url_to_my_client.conf> mycluster\n"))),(0,l.kt)(s.Z,{value:"file",mdxType:"TabItem"},(0,l.kt)("p",null,"If the file is on your local machine, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--file")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"default(localhost)> config create --file ./my-cluster-my-client.conf mycluster\n"))),(0,l.kt)(s.Z,{value:"inline",mdxType:"TabItem"},(0,l.kt)("p",null,"You can encode the content of the config to base64 and specify it with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--value")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'default(localhost)> config create --value "base64:<client.conf_base64_encoded>" mycluster\n')))),(0,l.kt)("p",null,"Once you've configured your cluster, set it as current:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"default(localhost)> config use mycluster\nWelcome to Pulsar shell!\n  Service URL: pulsar+ssl://mycluster:6651/\n  Admin URL: https://mycluster:8443/\n\nType help to get started or try the autocompletion (TAB button).\nType exit or quit to end the shell session.\n\nmy-cluster(mycluster)>\n")),(0,l.kt)("h2",{id:"run-commands-sequentially"},"Run commands sequentially"),(0,l.kt)("p",null,"To run a bunch of admin commands sequentially, you can use Pulsar shell's non-interactive mode.\nFor example, to set up a new tenant with policies, you would normally need to run multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," commands."),(0,l.kt)("p",null,"Let's say you want to create a new tenant ",(0,l.kt)("inlineCode",{parentName:"p"},"new-tenant")," with a namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"new-namespace")," in it.\nThere are multiple ways to do this with Pulsar shell non-interactive mode:"),(0,l.kt)(r.Z,{groupId:"shell-noninteractive-modes",defaultValue:"single-command",values:[{label:"Single command",value:"single-command"},{label:"File",value:"file"},{label:"Unix pipe",value:"pipe"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"single-command",mdxType:"TabItem"},(0,l.kt)("p",null,"Specify a multi-line command with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'./bin/pulsar-shell -e "\nconfig use my-cluster\nadmin tenants create new-tenant\nadmin namespaces create new-tenant/new-namespace\n" --fail-on-error\n'))),(0,l.kt)(s.Z,{value:"file",mdxType:"TabItem"},(0,l.kt)("p",null,"Specify a file command with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "\n# First use my-cluster config\nconfig use my-cluster\n# Now it creates a new tenant\nadmin tenants create new-tenant\n# And then it creates a new namespace inside the tenant\nadmin namespaces create new-tenant/new-namespace\n" > setup-shell.txt\n\n./bin/pulsar-shell -f ./setup-shell.txt --fail-on-error\n'))),(0,l.kt)(s.Z,{value:"pipe",mdxType:"TabItem"},(0,l.kt)("p",null,"Make the shell read from the standard input ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\necho "\n# First use my-cluster config\nconfig use my-cluster\n# Now it creates a new tenant\nadmin tenants create new-tenant\n# And then it creates a new namespace inside the tenant\nadmin namespaces create new-tenant/new-namespace\n" > ./bin/pulsar-shell --fail-on-error -\n\n')))))}d.isMDXComponent=!0}}]);