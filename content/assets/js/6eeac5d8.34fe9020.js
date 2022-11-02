"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,k=c["".concat(o,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(k,p(p({ref:t},s),{},{components:a})):r.createElement(k,p({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=c;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:l,p[1]=n;for(var u=2;u<i;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const i={id:"pulsar-2.10.1",title:"Apache Pulsar 2.10.1",sidebar_label:"Apache Pulsar 2.10.1"},p=void 0,n={unversionedId:"versioned/pulsar-2.10.1",id:"versioned/pulsar-2.10.1",title:"Apache Pulsar 2.10.1",description:"2022-07-05",source:"@site/release-notes/versioned/pulsar-2.10.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.10.1",permalink:"/release-notes/versioned/pulsar-2.10.1",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.10.1",title:"Apache Pulsar 2.10.1",sidebar_label:"Apache Pulsar 2.10.1"}},o={},u=[{value:"2022-07-05",id:"2022-07-05",level:4},{value:"Important notice",id:"important-notice",level:3},{value:"Broker",id:"broker",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"Tiered Storage",id:"tiered-storage",level:3},{value:"Pulsar SQL",id:"pulsar-sql",level:3},{value:"Pulsar Proxy",id:"pulsar-proxy",level:3},{value:"Observability",id:"observability",level:3},{value:"CLI",id:"cli",level:3},{value:"Security",id:"security",level:3},{value:"Others",id:"others",level:3},{value:"Library updates",id:"library-updates",level:3}],s={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2022-07-05"},"2022-07-05"),(0,l.kt)("h3",{id:"important-notice"},"Important notice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix broker LoadBalance uneffective ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15314"},"15314")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix producer/consume permission can\u2019t get schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15956"},"15956"))),(0,l.kt)("h3",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix race condition in getManagedLedgerInternalStats when includeLedgerMetadata=true ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15918"},"15918")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Avoid contended synchronized block on topic load ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15883"},"15883")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE in MessageDeduplication ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15820"},"15820")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Add timeout to closing CoordinationServiceImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15777"},"15777")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Store Subscription properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15757"},"15757")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support for updating the Subscription properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15751"},"15751")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Disable memory limit controller for broker client and replication clients ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15723"},"15723")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when put value to ",(0,l.kt)("inlineCode",{parentName:"li"},"RangeCache"),". ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15707"},"15707")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fast return if ack cumulative illegal ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15695"},"15695")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix creating producer failure when set backlog quota. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15663"},"15663")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Expose configurationMetadataStore and localMetadataStore ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15661"},"15661")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when set ",(0,l.kt)("inlineCode",{parentName:"li"},"AutoTopicCreationOverride")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15653"},"15653")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MetadataStoreException$NotFoundException while doing topic lookup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15633"},"15633")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix calculation in getNumberOfEntriesInStorage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15627"},"15627")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Use dispatchRateLimiterLock to update dispatchRateLimiter ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15601"},"15601")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Sync topicPublishRateLimiter update ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15599"},"15599")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix deadlock in broker after race condition in topic creation failure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15570"},"15570")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Override close method to avoid caching exception. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15529"},"15529")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Close publishLimiter when disable it ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15520"},"15520")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix to avoid TopicStatsImpl NPE even if producerName is null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15502"},"15502")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix key-shared delivery of messages with interleaved delays ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15409"},"15409")),(0,l.kt)("li",{parentName:"ul"},"[fix][Broker]"," Fix bug in contructor of RocksdbMetadataStore ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15405"},"15405")),(0,l.kt)("li",{parentName:"ul"},"[feature][broker]"," EntryFilter (PIP-105) - support per-Consumer filtering ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15391"},"15391")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker/client]"," Close connection if a ping or pong message cannot be sent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15382"},"15382")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink for ConcurrentSortedLongPairSet  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15354"},"15354")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support properties on NonDurable subscriptions (PIP-105) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15345"},"15345")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Use shrink map for message redelivery. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15342"},"15342")),(0,l.kt)("li",{parentName:"ul"},"[fix][Broker]"," Fix error on recycled SubscriptionPropertiesList ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15335"},"15335")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix problem at RateLimiter#tryAcquire ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15306"},"15306")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix totalEntries calculation problem in AbstractBaseDispatcher#filterEntriesForConsumere ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15298"},"15298")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix resource group does not report usage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15292"},"15292")),(0,l.kt)("li",{parentName:"ul"},"[fix][Broker]"," Fix race condition between timeout and completion  in ",(0,l.kt)("inlineCode",{parentName:"li"},"OpAddEntry"),"  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15233"},"15233")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MessageDeduplication#inactiveProducers may not be persistence correctly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15206"},"15206")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Cancel ",(0,l.kt)("inlineCode",{parentName:"li"},"fencedTopicMonitoringTask")," when topic closed normally ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15202"},"15202")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix parameter saslJaasBrokerSectionName in broker.conf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15110"},"15110")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Remove useless code to avoid confusion in OpReadEntry#checkReadCompletion ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15104"},"15104")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Ensure NamespaceEphemeralData has equals() operator ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15092"},"15092")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix potential to add duplicated consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15051"},"15051")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix rewind failed when ",(0,l.kt)("inlineCode",{parentName:"li"},"redeliverUnacknowledgedMessages")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15046"},"15046")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]","Fix race condition in updating lastMarkDeleteEntry field ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15031"},"15031")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Avoid using blocking calls for the async method ",(0,l.kt)("inlineCode",{parentName:"li"},"checkTopicOwnership")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15023"},"15023")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Avoid heartbeat topic to offload. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15008"},"15008")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Return if reset in progress ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14978"},"14978")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix topic policy reader close bug ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14897"},"14897")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix getPendingAckInternalStats redirect issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14876"},"14876")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong state for non-durable cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14869"},"14869")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Add log when update namespace policies with error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14850"},"14850")),(0,l.kt)("li",{parentName:"ul"},"[feature][broker]"," Support advertised listeners for HTTP and HTTPS services ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14839"},"14839")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Filter the virtual NIC with relative path ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14829"},"14829")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fixed duplicated delayed messages when all consumers disconnect ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14740"},"14740")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix cannot delete namespace with system topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14730"},"14730")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fixed 404 error msg not being returned correctly using http lookup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14677"},"14677")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix normal topic named ends with ",(0,l.kt)("inlineCode",{parentName:"li"},"healthcheck"),"  becomes system topic issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14671"},"14671")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink for map or set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14663"},"14663")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Changing the topic creation flow and optimize heartbeat topic not trigger compaction ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14643"},"14643")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong prompt exception when getting the non-persistent topic list without GET_BUDNLE permission ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14638"},"14638")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix inconsistent prompt message when schema version is empty using AVRO. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14626"},"14626")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix update replication cluster but not update replicator ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14570"},"14570")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Reduce unnecessary expansions for ConcurrentLong map and set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14562"},"14562")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support ManagedCursorInfo compression ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14542"},"14542")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize memory usage: support to  shrink for pendingAcks map ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14515"},"14515")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink in ConcurrentLongHashMap ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14497"},"14497")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize RawReader#create when using Compactor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14447"},"14447")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when subscription is already removed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14363"},"14363")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize load manager find nics process ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14340"},"14340")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Make revokePermissionsOnTopic method async ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14149"},"14149")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix when nextValidLedger is null caused NPE ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13975"},"13975"))),(0,l.kt)("h3",{id:"transaction"},"Transaction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transasction ack batch message ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15875"},"15875")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix NPE of TransactionMetaStoreHandler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15840"},"15840")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Optimize transaction lowWaterMark to clean useless data faster ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15592"},"15592")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction PendingAck lowWaterMark ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15530"},"15530")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Make transaction stats consistent at end txn ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15472"},"15472")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Add lowWaterMark check before appending entry to TB ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15424"},"15424")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction component recover fillQueue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15418"},"15418")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Topic transaction buffer recover don't close reader when throw RuntimeException ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15361"},"15361")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix potentially unfinishable future ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15208"},"15208")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Optimize metadataPositions in MLPendingAckStore ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15137"},"15137")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," TransactionMetadataService don't connect again if store exist ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15114"},"15114")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Avoid creating the multiple future and exception handler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15089"},"15089")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction REST API redirect issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15017"},"15017")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," support configurable ",(0,l.kt)("inlineCode",{parentName:"li"},"transactionBufferClientOperationTimeoutInMills")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15011"},"15011")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Optimize topic lookup when TC end tx ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14991"},"14991")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix potential NPE in TransactionBufferDisable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14979"},"14979")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction pendingAckStore asyncMarkDelete ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14974"},"14974")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix potentially unfinished CompletableFuture ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14973"},"14973")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction admin redirect get 500 due to getCause ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14965"},"14965")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Properly close transaction-buffer-sub non durable cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14900"},"14900")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Close the transaction buffer when deleting topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14895"},"14895")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Avoid too many ServiceUnitNotReadyException for transaction buffer handler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14894"},"14894")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer no snapshot close recover reader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14830"},"14830")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction log recover throw cursor already close ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14810"},"14810")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix cannot enable transaction when is allow auto update schema enabled=fasle ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14809"},"14809")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix some exception handle in transaction buffer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14808"},"14808")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer recover throw cursor already close ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14807"},"14807")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer recover reader and writer fail ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14801"},"14801")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix pending ack is recovering throw CursorAlreadyClosedxception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14781"},"14781")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix cursor readPosition is bigger than maxPosition in OpReadEntry ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14667"},"14667"))),(0,l.kt)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][connector]"," KCA sinks: fix offset mapping when sanitizeTopicName=true ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15950"},"15950")),(0,l.kt)("li",{parentName:"ul"},"[improve][function]"," provide default error handler for function log appender ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15728"},"15728")),(0,l.kt)("li",{parentName:"ul"},"[fix][connector]"," KCA Sink: org.apache.kafka.connect.errors.DataException: Invalid Java object for schema with type .. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15598"},"15598")),(0,l.kt)("li",{parentName:"ul"},"[improve][function]"," Refine file io connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15250"},"15250")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Check executor null when close the FileSource ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15247"},"15247")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Handle NPE when ",(0,l.kt)("inlineCode",{parentName:"li"},"getLeader")," returns null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15058"},"15058")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Allow a Function<GenericObject,?> to access the original Schema of the Message and use it ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14847"},"14847")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Fix pulsar-managed runtimes failed start function with package URL from package management service  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14814"},"14814")),(0,l.kt)("li",{parentName:"ul"},"[improve][connector]"," Handle Kafka sinks that return immutable maps as configs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14780"},"14780")),(0,l.kt)("li",{parentName:"ul"},"[improve][connector]"," Support event-time-based index name in ES Sink ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14383"},"14383"))),(0,l.kt)("h3",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[feature][tiered-storage]"," Add pure S3 provider for the offloader ","[15710]","(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15710"},"https://github.com/apache/pulsar/pull/15710")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Upgrade JClouds to 2.5.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15649"},"15649")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Reduce CPU usage when offloading the ledger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15063"},"15063")),(0,l.kt)("li",{parentName:"ul"},"[fix][tiered-storage]"," Fix potential NPE in MockManagedLedger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15006"},"15006")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Add debug information ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14907"},"14907"))),(0,l.kt)("h3",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][sql]"," Fix the decimal type error convert in json schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15687"},"15687")),(0,l.kt)("li",{parentName:"ul"},"[fix][sql]"," Add Java version trim agent for presto 332 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15236"},"15236")),(0,l.kt)("li",{parentName:"ul"},"[improve][sql]"," Pulsar SQL support for Decimal data type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15153"},"15153"))),(0,l.kt)("h3",{id:"pulsar-proxy"},"Pulsar Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[cleanup][proxy]"," Remove unnecessary blocking DNS lookup in LookupProxyHandler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15415"},"15415")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix DNS server denial-of-service issue when DNS entry expires ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15403"},"15403")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy/client]"," Configure Netty DNS resolver to match JDK DNS caching setting, share DNS resolver instance in Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15219"},"15219")),(0,l.kt)("li",{parentName:"ul"},"[refactor][proxy]"," Refactor Proxy code and fix connection stalling by switching to auto read mode ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14713"},"14713")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Log warning when opening connection to broker fails ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14710"},"14710")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Add support of PrometheusRawMetricsProvider for the Pulsar-Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14681"},"14681"))),(0,l.kt)("h3",{id:"observability"},"Observability"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][metrics]"," Add message ack rate metric for consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15674"},"15674")),(0,l.kt)("li",{parentName:"ul"},"[improve][metrics]"," Add metrics for pulsar web service thread pool ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14742"},"14742")),(0,l.kt)("li",{parentName:"ul"},"[improve][metrics]"," Add non-persistent topic subscription metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13827"},"13827"))),(0,l.kt)("h3",{id:"cli"},"CLI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][admin]"," Support to get topic properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15944"},"15944")),(0,l.kt)("li",{parentName:"ul"},"[improve][admin]"," Pulsar Admin: create subscripion with Properties (PIP-105) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15503"},"15503")),(0,l.kt)("li",{parentName:"ul"},"[improve][admin]"," Put ",(0,l.kt)("inlineCode",{parentName:"li"},"validateTopicOwnershipAsync")," before ",(0,l.kt)("inlineCode",{parentName:"li"},"validateTopicOperationAsync")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15265"},"15265")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix inconsistent parameter of TopicPolicies.getSubscriptionDispatchRate ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15293"},"15293")),(0,l.kt)("li",{parentName:"ul"},"[fix]","admin] Fix pulsar-admin not prompting message when there is a 500 error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14856"},"14856")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix NPE in PulsarAdminBuilder when the service is not set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14769"},"14769")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Remove the trust certs check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14764"},"14764")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Provide an accurate error message when set ",(0,l.kt)("inlineCode",{parentName:"li"},"autoTopicCreation")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14684"},"14684"))),(0,l.kt)("h3",{id:"security"},"Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][authn]"," Generate correct well-known OpenID configuration URL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15928"},"15928")),(0,l.kt)("li",{parentName:"ul"},"[fix][authn]"," Switch to rely on Netty for Hostname Verification ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15824"},"15824")),(0,l.kt)("li",{parentName:"ul"},"[fix][authz]"," Add timeout of sync methods and avoid call sync method for AuthoriationService ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15694"},"15694")),(0,l.kt)("li",{parentName:"ul"},"[fix][authz]"," Fix grant all permissions but can't list topic. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15501"},"15501")),(0,l.kt)("li",{parentName:"ul"},"[fix][authz]"," Fix MultiRolesTokenAuthorizationProvider ",(0,l.kt)("inlineCode",{parentName:"li"},"authorize")," issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15454"},"15454")),(0,l.kt)("li",{parentName:"ul"},"[fix][authn]"," Fix typo checkPermissionsAsync method typo ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15273"},"15273")),(0,l.kt)("li",{parentName:"ul"},"[improve][authn]"," Improve skipping of DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15228"},"15228")),(0,l.kt)("li",{parentName:"ul"},"[improve][authn]"," Skip unnecessary DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15221"},"15221")),(0,l.kt)("li",{parentName:"ul"},"[fix][security]"," Remove log4j for CVE-2022-23307 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15109"},"15109")),(0,l.kt)("li",{parentName:"ul"},"[improve][authn]"," Use tlsCertRefreshCheckDurationSec instead of 0 for refresh value ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15075"},"15075")),(0,l.kt)("li",{parentName:"ul"},"[fix][security]"," Upgrade Spring Context in Pulsar IO batch-data-generator ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14975"},"14975")),(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Athenz: do not use uber-jar and bump to 1.10.50 to remove jackson-databind shaded dependency ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14884"},"14884")),(0,l.kt)("li",{parentName:"ul"},"[fix][authz]"," Fix handling single role and non-jwt-token in MultiRolesTokenAuthorizationProvider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14857"},"14857")),(0,l.kt)("li",{parentName:"ul"},"[improve][authn]"," Full-support SSL provider, ciphers and protocols for broker service and proxy service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14569"},"14569")),(0,l.kt)("li",{parentName:"ul"},"[fix][authz]"," Role with namespace produce authz can also get topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13773"},"13773")),(0,l.kt)("li",{parentName:"ul"},"[improve][authn]"," Full-support set SSL provider, ciphers and protocols for broker-web&websocket/proxy/function-worker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13740"},"13740"))),(0,l.kt)("h3",{id:"others"},"Others"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve]"," Enable TCP/IP keepalive for all ZK client connections in all components starting with bin/pulsar ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15908"},"15908")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Allow pulsar_tool_env.sh PULSAR_MEM to be Overridden ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15868"},"15868")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Configure DLog Bookie, Pulsar, and Admin clients via pass-through config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15818"},"15818")),(0,l.kt)("li",{parentName:"ul"},"[fix][docker]"," Add write permissions to /pulsar subdirectories to enable running as non-root user ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15769"},"15769")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Disable memory limit controller in internal Pulsar clients ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15752"},"15752")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Disable Pulsar client memory limit by default ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15748"},"15748")),(0,l.kt)("li",{parentName:"ul"},"[fix][owasp]"," Fix false positive google-http-client-gson-1.41.0.jar ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15651"},"15651")),(0,l.kt)("li",{parentName:"ul"},"[fix][package-management]"," Fix the new path ",(0,l.kt)("inlineCode",{parentName:"li"},"/data")," introduced regression ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15367"},"15367")),(0,l.kt)("li",{parentName:"ul"},"[improve][common]"," Use ",(0,l.kt)("inlineCode",{parentName:"li"},"Collection")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," for FutureUtil. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15329"},"15329")),(0,l.kt)("li",{parentName:"ul"},"[fix][tools]"," Only apply maxPendingMessagesAcrossPartitions if it presents ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15283"},"15283")),(0,l.kt)("li",{parentName:"ul"},"[fix][owasp]"," Suppress MariaDB false positives ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15243"},"15243")),(0,l.kt)("li",{parentName:"ul"},"[fix][scripts]"," Ignore case when obfuscating passwords in configuration scripts ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15077"},"15077")),(0,l.kt)("li",{parentName:"ul"},"[improve][tool]"," Improve transaction perf logs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14816"},"14816")),(0,l.kt)("li",{parentName:"ul"},"[fix][deploy]"," Fix the pid occupied check when using pulsar-daemon start or stop process ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14701"},"14701"))),(0,l.kt)("h3",{id:"library-updates"},"Library updates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bump PyYAML from 5.3.1 to 5.4.1 to solve CVE-2020-14343 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15989"},"15989")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Netty to 4.1.76.Final, Netty Tcnative, grpc and protobuf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15212"},"15212")),(0,l.kt)("li",{parentName:"ul"},"Update spring library to fix CVE-2022-22965 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15065"},"15065")),(0,l.kt)("li",{parentName:"ul"},"Upgrade MySQL client to 8.0.28 to get rid of CVE-2021-3711 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14998"},"14998")),(0,l.kt)("li",{parentName:"ul"},"Upgrade jackson and jackson-databind (2.13.2.1) to get rid of CVE-2020-36518 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14871"},"14871")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Guice to 5.1.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14300"},"14300"))))}h.isMDXComponent=!0}}]);