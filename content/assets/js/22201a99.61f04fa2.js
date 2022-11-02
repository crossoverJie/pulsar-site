"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3770],{82030:e=>{e.exports=JSON.parse('{"pluginId":"release-notes","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"All Releases","href":"/release-notes/","docId":"all"},{"type":"link","label":"Timeline","href":"/release-notes/timeline","docId":"timeline"}]},"docs":{"all":{"id":"all","title":"All Releases","description":"Pulsar Release Notes","sidebar":"docs"},"legacy":{"id":"legacy","title":"Apache Pulsar Release Notes (Legacy)","description":"2.4.2"},"timeline":{"id":"timeline","title":"Timeline","description":"coming soon...","sidebar":"docs"},"versioned/client-cpp-2.10.0":{"id":"versioned/client-cpp-2.10.0","title":"Client CPP 2.10.0","description":"- C++] Add Wireshark cmake and fix build with latest Wireshark [#13236"},"versioned/client-cpp-2.10.1":{"id":"versioned/client-cpp-2.10.1","title":"Client CPP 2.10.1","description":"- fix avoid race condition causing double callback on close 15508"},"versioned/client-cpp-2.10.2":{"id":"versioned/client-cpp-2.10.2","title":"Client CPP 2.10.2","description":"- fix Rename function name: pulsarproducerconfigurationsetcryptofailureaction #16031"},"versioned/client-cpp-2.5.0":{"id":"versioned/client-cpp-2.5.0","title":"Client CPP 2.5.0","description":"* C++] Windows CMake corrections [#6336"},"versioned/client-cpp-2.5.1":{"id":"versioned/client-cpp-2.5.1","title":"Client CPP 2.5.1","description":"* C++] Windows CMake corrections [#6336"},"versioned/client-cpp-2.5.2":{"id":"versioned/client-cpp-2.5.2","title":"Client CPP 2.5.2","description":"* CPP Client] Auto update topic partitions [#6732"},"versioned/client-cpp-2.6.0":{"id":"versioned/client-cpp-2.6.0","title":"Client CPP 2.6.0","description":"* CPP Client] Support seek by time on partitioned topic [#7198"},"versioned/client-cpp-2.6.1":{"id":"versioned/client-cpp-2.6.1","title":"Client CPP 2.6.1","description":"- CPP Client] Fix partition index error in closing callback [#7282"},"versioned/client-cpp-2.6.2":{"id":"versioned/client-cpp-2.6.2","title":"Client CPP 2.6.2","description":"- CPP Client] Wait for all seek operations completed [7216"},"versioned/client-cpp-2.6.3":{"id":"versioned/client-cpp-2.6.3","title":"Client CPP 2.6.3","description":"- Catch the exception thrown by the remote_endpoint #8486"},"versioned/client-cpp-2.6.4":{"id":"versioned/client-cpp-2.6.4","title":"Client CPP 2.6.4","description":"- C++] Remove namespace check for MultiTopicsConsumerImpl [#9520"},"versioned/client-cpp-2.7.0":{"id":"versioned/client-cpp-2.7.0","title":"Client CPP 2.7.0","description":"- C++] Allow to configure KeyShared with out of order delivery [#7842"},"versioned/client-cpp-2.7.1":{"id":"versioned/client-cpp-2.7.1","title":"Client CPP 2.7.1","description":"- C++] Add \'encrypted\' option in commands.newproducer() [#9542"},"versioned/client-cpp-2.7.2":{"id":"versioned/client-cpp-2.7.2","title":"Client CPP 2.7.2","description":"- C++,Python] [PIP-60] Add TLS SNI support for cpp and python clients [#8957"},"versioned/client-cpp-2.7.3":{"id":"versioned/client-cpp-2.7.3","title":"Client CPP 2.7.3","description":"- C++] Avoid sending flow requests with zero permits [#10506"},"versioned/client-cpp-2.7.4":{"id":"versioned/client-cpp-2.7.4","title":"Client CPP 2.7.4","description":"- C++] Remove usages of boost::regex. [#9533"},"versioned/client-cpp-2.7.5":{"id":"versioned/client-cpp-2.7.5","title":"Client CPP 2.7.5","description":"- cleanup Clean up C++ client curl configuration #16064"},"versioned/client-cpp-2.8.0":{"id":"versioned/client-cpp-2.8.0","title":"Client CPP 2.8.0","description":"- Fix dangling reference bug in getRandomName #8596"},"versioned/client-cpp-2.8.1":{"id":"versioned/client-cpp-2.8.1","title":"Client CPP 2.8.1","description":"- Use same regex code at ZTSClient #11323"},"versioned/client-cpp-2.8.2":{"id":"versioned/client-cpp-2.8.2","title":"Client CPP 2.8.2","description":"- Fix libcurl miss auth header when broker return 307 #13112"},"versioned/client-cpp-2.8.3":{"id":"versioned/client-cpp-2.8.3","title":"Client CPP 2.8.3","description":"- Fix GCC compilation failure caused by warning macro 14402"},"versioned/client-cpp-2.8.4":{"id":"versioned/client-cpp-2.8.4","title":"Client CPP 2.8.4","description":"- improve Expose getLastMessageId in the Reader API 11723"},"versioned/client-cpp-2.9.0":{"id":"versioned/client-cpp-2.9.0","title":"Client CPP 2.9.0","description":"- Support configuring optional scope field for OAuth2 authentication. 12305"},"versioned/client-cpp-2.9.2":{"id":"versioned/client-cpp-2.9.2","title":"Client CPP 2.9.2","description":"- C++] Fix wrong unit of Access Token Response\'s expires_in field [#14554"},"versioned/client-cpp-2.9.3":{"id":"versioned/client-cpp-2.9.3","title":"Client CPP 2.9.3","description":"- fix Fix UnknownError might be returned for a partitioned producer #15161"},"versioned/client-java-2.10.0":{"id":"versioned/client-java-2.10.0","title":"Client Java 2.10.0","description":"- Java] Support creating a consumer in the paused state [#11974"},"versioned/client-java-2.10.1":{"id":"versioned/client-java-2.10.1","title":"Client Java 2.10.1","description":"- fix Fixes NPE when TableView handles null value message 15951"},"versioned/client-java-2.10.2":{"id":"versioned/client-java-2.10.2","title":"Client Java 2.10.2","description":"- fix Fix PatternTopicsChangedListener blocked when topic removed #16842"},"versioned/client-java-2.5.0":{"id":"versioned/client-java-2.5.0","title":"Client Java 2.5.0","description":"- Change state_ to closed when resultOk is returned #5446"},"versioned/client-java-2.5.1":{"id":"versioned/client-java-2.5.1","title":"Client Java 2.5.1","description":"* Client] Start reader inside batch result in read first message in batch. [#6345"},"versioned/client-java-2.5.2":{"id":"versioned/client-java-2.5.2","title":"Client Java 2.5.2","description":"- Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296"},"versioned/client-java-2.6.0":{"id":"versioned/client-java-2.6.0","title":"Client Java 2.6.0","description":"* Java Client] Use pure-java Air-Compressor instead of JNI based libraries [#5390"},"versioned/client-java-2.6.1":{"id":"versioned/client-java-2.6.1","title":"Client Java 2.6.1","description":"- Java Client] Fix the issue that the HTTP header used in Athenz authentication can not be renamed [#7311"},"versioned/client-java-2.6.2":{"id":"versioned/client-java-2.6.2","title":"Client Java 2.6.2","description":"- Java Client] Support input-stream for trustStore cert [7442"},"versioned/client-java-2.6.3":{"id":"versioned/client-java-2.6.3","title":"Client Java 2.6.3","description":"- Fix the connection leak #6524"},"versioned/client-java-2.6.4":{"id":"versioned/client-java-2.6.4","title":"Client Java 2.6.4","description":"- Compression must be applied during deferred schema preparation and enableBatching is enabled #9396"},"versioned/client-java-2.7.0":{"id":"versioned/client-java-2.7.0","title":"Client Java 2.7.0","description":"- Java] Support acknowledging a list of messages [#7688"},"versioned/client-java-2.7.1":{"id":"versioned/client-java-2.7.1","title":"Client Java 2.7.1","description":"- Java] Add original info when publishing message to dead letter topic [#9655"},"versioned/client-java-2.7.2":{"id":"versioned/client-java-2.7.2","title":"Client Java 2.7.2","description":"- Java] Fix: seemingly equal ClientConfigurationData\'s objects end up not being equal [#10091"},"versioned/client-java-2.7.3":{"id":"versioned/client-java-2.7.3","title":"Client Java 2.7.3","description":"- Java] Cleaned some code in GenericJsonRecord [#10527"},"versioned/client-java-2.7.4":{"id":"versioned/client-java-2.7.4","title":"Client Java 2.7.4","description":"- Java] Refactor seek to reuse common logic. [#9670"},"versioned/client-java-2.7.5":{"id":"versioned/client-java-2.7.5","title":"Client Java 2.7.5","description":"- fix Fix semaphore release duplicated in ProducerImpl #16972"},"versioned/client-java-2.8.0":{"id":"versioned/client-java-2.8.0","title":"Client Java 2.8.0","description":"- Fix warn log on the producer side when duplicated messages have been dropped #8729"},"versioned/client-java-2.8.1":{"id":"versioned/client-java-2.8.1","title":"Client Java 2.8.1","description":"- Fixed accessing MessageImpl after it was enqueued on user queue #11824"},"versioned/client-java-2.8.2":{"id":"versioned/client-java-2.8.2","title":"Client Java 2.8.2","description":"- Remove the uncorrected VisableTesting annotation in pulsar-client #11784"},"versioned/client-java-2.8.3":{"id":"versioned/client-java-2.8.3","title":"Client Java 2.8.3","description":"- Fix adding message to list potential issue 14377"},"versioned/client-java-2.8.4":{"id":"versioned/client-java-2.8.4","title":"Client Java 2.8.4","description":"- improve Improve consumer listener logic 13273"},"versioned/client-java-2.9.0":{"id":"versioned/client-java-2.9.0","title":"Client Java 2.9.0","description":"- Add partition-change API for producer or consumer interceptors. 12287"},"versioned/client-java-2.9.1":{"id":"versioned/client-java-2.9.1","title":"Client Java 2.9.1","description":"- Fixed a data race on the Producer to get a Connection #13176"},"versioned/client-java-2.9.2":{"id":"versioned/client-java-2.9.2","title":"Client Java 2.9.2","description":"- Java] Fix ConsumerBuilderImpl#subscribeAsync blocks calling thread. [#14433"},"versioned/client-java-2.9.3":{"id":"versioned/client-java-2.9.3","title":"Client Java 2.9.3","description":"- fix Fix ConsumerBuilderImpl can not set null to deadLetterPolicy #14980"},"versioned/client-python-2.10.0":{"id":"versioned/client-python-2.10.0","title":"Client Python 2.10.0","description":"- Python] Provide str operator for BytesSchema [#12593"},"versioned/client-python-2.10.1":{"id":"versioned/client-python-2.10.1","title":"Client Python 2.10.1","description":"- fix Fixes reserved keys are not removed when JsonSchema is being encoded 15947"},"versioned/client-python-2.5.1":{"id":"versioned/client-python-2.5.1","title":"Client Python 2.5.1","description":"* Python Client] Support generate pulsar-client for python3.8[#6741"},"versioned/client-python-2.5.2":{"id":"versioned/client-python-2.5.2","title":"Client Python 2.5.2","description":"* Python Client] Fix Python function protobuf missing field[#6641"},"versioned/client-python-2.6.0":{"id":"versioned/client-python-2.6.0","title":"Client Python 2.6.0","description":"* Python Client] Add deliverat and deliverafter for the producer [#6737"},"versioned/client-python-2.6.2":{"id":"versioned/client-python-2.6.2","title":"Client Python 2.6.2","description":"- Python Client] Add python schema field default value [8122"},"versioned/client-python-2.6.3":{"id":"versioned/client-python-2.6.3","title":"Client Python 2.6.3","description":"- Add Oauth2 client wrapper for the python client #7813"},"versioned/client-python-2.7.1":{"id":"versioned/client-python-2.7.1","title":"Client Python 2.7.1","description":"- Python] Support python end to end encryption [#9588"},"versioned/client-python-2.7.2":{"id":"versioned/client-python-2.7.2","title":"Client Python 2.7.2","description":"- Python] Support Python Avro schema set default value. [#10265"},"versioned/client-python-2.7.4":{"id":"versioned/client-python-2.7.4","title":"Client Python 2.7.4","description":"- Python] Fix fields that are ignoring the required key argument. [#11508"},"versioned/client-python-2.7.5":{"id":"versioned/client-python-2.7.5","title":"Client Python 2.7.5","description":"- fix Fix generated Python protobuf code not compatible with the latest protobuf package #15846"},"versioned/client-python-2.8.0":{"id":"versioned/client-python-2.8.0","title":"Client Python 2.8.0","description":"- Replace Exceptions with PulsarExceptions #7600"},"versioned/client-python-2.8.1":{"id":"versioned/client-python-2.8.1","title":"Client Python 2.8.1","description":"- Fix redefined Record or Enum in Python schema #11595"},"versioned/client-python-2.8.2":{"id":"versioned/client-python-2.8.2","title":"Client Python 2.8.2","description":"- Python schema support custom Avro configurations for Enum type #12642"},"versioned/client-python-2.8.3":{"id":"versioned/client-python-2.8.3","title":"Client Python 2.8.3","description":"- Apply clang-format check for python wrapper 13418"},"versioned/client-python-2.8.4":{"id":"versioned/client-python-2.8.4","title":"Client Python 2.8.4","description":"- fix Fix generated Python protobuf code not compatible with latest protobuf package 15846"},"versioned/client-python-2.9.0":{"id":"versioned/client-python-2.9.0","title":"Client Python 2.9.0","description":"- Do not sort schema fields by default. 12232"},"versioned/client-python-2.9.2":{"id":"versioned/client-python-2.9.2","title":"Client Python 2.9.2","description":"- Python] Apply clang-format check for python wrapper [#13418"},"versioned/client-python-2.9.3":{"id":"versioned/client-python-2.9.3","title":"Client Python 2.9.3","description":"- fix Fix generated Python protobuf code not compatible with the latest protobuf package #15846"},"versioned/client-websocket-2.10.1":{"id":"versioned/client-websocket-2.10.1","title":"Client Websocket 2.10.1","description":"- fix Fix MultiTopicReader#getConsumer ClassCastException 15534"},"versioned/client-websocket-2.5.1":{"id":"versioned/client-websocket-2.5.1","title":"Client Websocket 2.5.1","description":"Websocket] Websocket doesn\'t set the correct cluster data [#6102"},"versioned/client-websocket-2.6.0":{"id":"versioned/client-websocket-2.6.0","title":"Client Websocket 2.6.0","description":"Fix incorrect topic URL parse #6630"},"versioned/client-websocket-2.6.2":{"id":"versioned/client-websocket-2.6.2","title":"Client Websocket 2.6.2","description":"Websocket interface decode URL encoding #8072"},"versioned/client-websocket-2.6.3":{"id":"versioned/client-websocket-2.6.3","title":"Client Websocket 2.6.3","description":"Broker] add if-branch for SubscriptionBusyException [#9017"},"versioned/client-websocket-2.7.1":{"id":"versioned/client-websocket-2.7.1","title":"Client Websocket 2.7.1","description":"- Websocket] Fix the initial sequence id error [#8724"},"versioned/client-websocket-2.7.2":{"id":"versioned/client-websocket-2.7.2","title":"Client Websocket 2.7.2","description":"- WebSocket Client] WebSocket url token param value optimization [#10187"},"versioned/client-websocket-2.7.3":{"id":"versioned/client-websocket-2.7.3","title":"Client Websocket 2.7.3","description":"Fix webscoket TLS bug #11243"},"versioned/client-websocket-2.8.0":{"id":"versioned/client-websocket-2.8.0","title":"Client Websocket 2.8.0","description":"- Negative acknowledge support #8249"},"versioned/client-websocket-2.8.1":{"id":"versioned/client-websocket-2.8.1","title":"Client Websocket 2.8.1","description":"- [websocket] Query parameter \\"negativeAckRedeliveryDelay\\" should be effective even if"},"versioned/client-websocket-2.8.2":{"id":"versioned/client-websocket-2.8.2","title":"Client Websocket 2.8.2","description":"- Fix the batch message ack for WebSocket proxy. #12530"},"versioned/client-websocket-2.8.3":{"id":"versioned/client-websocket-2.8.3","title":"Client Websocket 2.8.3","description":"- Fix `ClassCastException when user create MultiTopicReader`. 14316"},"versioned/client-websocket-2.8.4":{"id":"versioned/client-websocket-2.8.4","title":"Client Websocket 2.8.4","description":"- fix Fix MultiTopicReader#getConsumer ClassCastException 15534"},"versioned/client-websocket-2.9.2":{"id":"versioned/client-websocket-2.9.2","title":"Client Websocket 2.9.2","description":"- WebSocket] Fix `ClassCastException when user create MultiTopicReader`. [#14316"},"versioned/client-websocket-2.9.3":{"id":"versioned/client-websocket-2.9.3","title":"Client Websocket 2.9.3","description":"- fix Fix MultiTopicReader#getConsumer ClassCastException #15534"},"versioned/pulsar-2.10.0":{"id":"versioned/pulsar-2.10.0","title":"Apache Pulsar 2.10.0","description":"2022-04-13"},"versioned/pulsar-2.10.1":{"id":"versioned/pulsar-2.10.1","title":"Apache Pulsar 2.10.1","description":"2022-07-05"},"versioned/pulsar-2.10.2":{"id":"versioned/pulsar-2.10.2","title":"Apache Pulsar 2.10.2","description":"2022-10-24"},"versioned/pulsar-2.5.0":{"id":"versioned/pulsar-2.5.0","title":"Apache Pulsar 2.5.0","description":"2019-12-06"},"versioned/pulsar-2.5.1":{"id":"versioned/pulsar-2.5.1","title":"Apache Pulsar 2.5.1","description":"2020-04-20"},"versioned/pulsar-2.5.2":{"id":"versioned/pulsar-2.5.2","title":"Apache Pulsar 2.5.2","description":"2020-05-19"},"versioned/pulsar-2.6.0":{"id":"versioned/pulsar-2.6.0","title":"Apache Pulsar 2.6.0","description":"2020-06-17"},"versioned/pulsar-2.6.1":{"id":"versioned/pulsar-2.6.1","title":"Apache Pulsar 2.6.1","description":"2020-08-21"},"versioned/pulsar-2.6.2":{"id":"versioned/pulsar-2.6.2","title":"Apache Pulsar 2.6.2","description":"2020-11-09"},"versioned/pulsar-2.6.3":{"id":"versioned/pulsar-2.6.3","title":"Apache Pulsar 2.6.3","description":"2021-01-26"},"versioned/pulsar-2.6.4":{"id":"versioned/pulsar-2.6.4","title":"Apache Pulsar 2.6.4","description":"2021-06-02"},"versioned/pulsar-2.7.0":{"id":"versioned/pulsar-2.7.0","title":"Apache Pulsar 2.7.0","description":"2020-11-25"},"versioned/pulsar-2.7.1":{"id":"versioned/pulsar-2.7.1","title":"Apache Pulsar 2.7.1","description":"2021-03-18"},"versioned/pulsar-2.7.2":{"id":"versioned/pulsar-2.7.2","title":"Apache Pulsar 2.7.2","description":"2021-05-11"},"versioned/pulsar-2.7.3":{"id":"versioned/pulsar-2.7.3","title":"Apache Pulsar 2.7.3","description":"2021-07-27"},"versioned/pulsar-2.7.4":{"id":"versioned/pulsar-2.7.4","title":"Apache Pulsar 2.7.4","description":"2021-12-14"},"versioned/pulsar-2.7.5":{"id":"versioned/pulsar-2.7.5","title":"Apache Pulsar 2.7.5","description":"2022-09-03"},"versioned/pulsar-2.8.0":{"id":"versioned/pulsar-2.8.0","title":"Apache Pulsar 2.8.0","description":"2021-06-12"},"versioned/pulsar-2.8.1":{"id":"versioned/pulsar-2.8.1","title":"Apache Pulsar 2.8.1","description":"2021-09-10"},"versioned/pulsar-2.8.2":{"id":"versioned/pulsar-2.8.2","title":"Apache Pulsar 2.8.2","description":"2021-12-20"},"versioned/pulsar-2.8.3":{"id":"versioned/pulsar-2.8.3","title":"Apache Pulsar 2.8.3","description":"2022-03-21"},"versioned/pulsar-2.8.4":{"id":"versioned/pulsar-2.8.4","title":"Apache Pulsar 2.8.4","description":"Broker"},"versioned/pulsar-2.9.0":{"id":"versioned/pulsar-2.9.0","title":"Apache Pulsar 2.9.0","description":"2021-11-25"},"versioned/pulsar-2.9.1":{"id":"versioned/pulsar-2.9.1","title":"Apache Pulsar 2.9.1","description":"2021-12-20"},"versioned/pulsar-2.9.2":{"id":"versioned/pulsar-2.9.2","title":"Apache Pulsar 2.9.2","description":"2022-04-08"},"versioned/pulsar-2.9.3":{"id":"versioned/pulsar-2.9.3","title":"Apache Pulsar 2.9.3","description":"2022-07-19"},"versioned/pulsar-client-go-0.1.0":{"id":"versioned/pulsar-client-go-0.1.0","title":"Pulsar Client Go","description":"Client"},"versioned/pulsar-client-go-0.1.1":{"id":"versioned/pulsar-client-go-0.1.1","title":"Pulsar Client Go","description":"Improve"},"versioned/pulsar-client-go-0.2.0":{"id":"versioned/pulsar-client-go-0.2.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.3.0":{"id":"versioned/pulsar-client-go-0.3.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.4.0":{"id":"versioned/pulsar-client-go-0.4.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.5.0":{"id":"versioned/pulsar-client-go-0.5.0","title":"Pulsar Client Go","description":"Fixes"},"versioned/pulsar-client-go-0.6.0":{"id":"versioned/pulsar-client-go-0.6.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.7.0":{"id":"versioned/pulsar-client-go-0.7.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.8.0":{"id":"versioned/pulsar-client-go-0.8.0","title":"Pulsar Client Go","description":"What\'s Changed"},"versioned/pulsar-client-go-0.8.1":{"id":"versioned/pulsar-client-go-0.8.1","title":"Pulsar Client Go","description":"What\'s Changed"},"versioned/pulsar-client-go-0.9.0":{"id":"versioned/pulsar-client-go-0.9.0","title":"Pulsar Client Go","description":"What\'s Changed"},"versioned/pulsar-client-node-1.0.0":{"id":"versioned/pulsar-client-node-1.0.0","title":"Pulsar Client Node","description":"1.0.0 &mdash; 2019-09-03"},"versioned/pulsar-client-node-1.1.0":{"id":"versioned/pulsar-client-node-1.1.0","title":"Pulsar Client Node","description":"1.1.0 &mdash; 2020-02-18"},"versioned/pulsar-client-node-1.2.0":{"id":"versioned/pulsar-client-node-1.2.0","title":"Pulsar Client Node","description":"1.2.0 &mdash; 2020-08-12"},"versioned/pulsar-client-node-1.3.0":{"id":"versioned/pulsar-client-node-1.3.0","title":"Pulsar Client Node","description":"1.3.0 &mdash; 2021-03-18"},"versioned/pulsar-client-node-1.3.1":{"id":"versioned/pulsar-client-node-1.3.1","title":"Pulsar Client Node","description":"1.3.1 &mdash; 2021-09-17"},"versioned/pulsar-client-node-1.3.2":{"id":"versioned/pulsar-client-node-1.3.2","title":"Pulsar Client Node","description":"1.3.2 &mdash; 2021-10-19"},"versioned/pulsar-client-node-1.4.0":{"id":"versioned/pulsar-client-node-1.4.0","title":"Pulsar Client Node","description":"1.4.0 &mdash; 2021-08-03"},"versioned/pulsar-client-node-1.4.1":{"id":"versioned/pulsar-client-node-1.4.1","title":"Pulsar Client Node","description":"1.4.1 &mdash; 2021-10-19"},"versioned/pulsar-client-node-1.5.0":{"id":"versioned/pulsar-client-node-1.5.0","title":"Pulsar Client Node","description":"1.5.0 &mdash; 2021-12-20"},"versioned/pulsar-client-node-1.6.2":{"id":"versioned/pulsar-client-node-1.6.2","title":"Pulsar Client Node","description":"1.6.2 &mdash; 2022-03-10"},"versioned/pulsar-cs-0.10.0":{"id":"versioned/pulsar-cs-0.10.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-0.10.1":{"id":"versioned/pulsar-cs-0.10.1","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-0.11.0":{"id":"versioned/pulsar-cs-0.11.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-0.9.6":{"id":"versioned/pulsar-cs-0.9.6","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-0.9.7":{"id":"versioned/pulsar-cs-0.9.7","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-1.0.0":{"id":"versioned/pulsar-cs-1.0.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-1.0.1":{"id":"versioned/pulsar-cs-1.0.1","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-1.0.2":{"id":"versioned/pulsar-cs-1.0.2","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-1.1.0":{"id":"versioned/pulsar-cs-1.1.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-1.1.1":{"id":"versioned/pulsar-cs-1.1.1","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-1.1.2":{"id":"versioned/pulsar-cs-1.1.2","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-2.0.0":{"id":"versioned/pulsar-cs-2.0.0","title":"Pulsar DotPulsar","description":""},"versioned/pulsar-cs-2.0.1":{"id":"versioned/pulsar-cs-2.0.1","title":"Pulsar DotPulsar","description":"Changed"},"versioned/pulsar-cs-2.1.0":{"id":"versioned/pulsar-cs-2.1.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-2.2.0":{"id":"versioned/pulsar-cs-2.2.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-2.3.0":{"id":"versioned/pulsar-cs-2.3.0","title":"Pulsar DotPulsar","description":"Changed"},"versioned/pulsar-cs-2.3.1":{"id":"versioned/pulsar-cs-2.3.1","title":"Pulsar DotPulsar","description":"Changed"},"versioned/pulsar-cs-2.4.0":{"id":"versioned/pulsar-cs-2.4.0","title":"Pulsar DotPulsar","description":"Added"}}}')}}]);