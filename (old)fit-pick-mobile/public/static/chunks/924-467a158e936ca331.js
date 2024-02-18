"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{8954:function(e,t,r){r.d(t,{BH:function(){return v},L:function(){return c},LL:function(){return D},P0:function(){return m},Pz:function(){return b},Sg:function(){return w},ZR:function(){return C},aH:function(){return _},b$:function(){return T},eu:function(){return R},hl:function(){return O},m9:function(){return F},ne:function(){return B},pd:function(){return U},q4:function(){return g},ru:function(){return I},tV:function(){return u},uI:function(){return E},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let o of n){if(!i.includes(o))return!1;let n=t[o],s=r[o];if(N(n)&&N(s)){if(!e(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return A},xO:function(){return L},xb:function(){return k},z$:function(){return y},zd:function(){return x}});var n=r(9079);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},o=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){let o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{let o=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|s>>4,h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),n.push(r[c],r[u],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],o=t<e.length?r[e.charAt(t)]:0,s=++t<e.length?r[e.charAt(t)]:64,l=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==l)throw new a;let c=i<<2|o>>4;if(n.push(c),64!==s){let e=o<<4&240|s>>2;if(n.push(e),64!==l){let e=s<<6&192|l;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return s.encodeByteArray(t,!0)},c=function(e){return l(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>("undefined"!=typeof self?self:window).__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));return}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=e=>{let t=g(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error("Invalid host ".concat(t," with no separate hostname and port!"));let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},_=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},b=e=>{var t;return null===(t=p())||void 0===t?void 0:t["_".concat(e)]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:"https://securetoken.google.com/".concat(r),aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){let e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){try{return"object"==typeof indexedDB}catch(e){return!1}}function R(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class C extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{create(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let i=r[0]||{},o="".concat(this.service,"/").concat(e),s=this.errors[e],a=s?s.replace(S,(e,t)=>{let r=i[t];return null!=r?String(r):"<".concat(t,"?>")}):"Error",l="".concat(this.serviceName,": ").concat(a," (").concat(o,").");return new C(o,l,i)}constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}}let S=/\{\$([^}]+)}/g;function k(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function x(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function U(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function B(e,t){let r=new P(e,t);return r.subscribe.bind(r)}class P{next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=M),void 0===n.error&&(n.error=M),void 0===n.complete&&(n.complete=M);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}}function M(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return e&&e._delegate?e._delegate:e}},9079:function(e,t,r){var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(3127)},3127:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],c=!1,u=-1;function h(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=a(h);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},6993:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(6921)._(r(4090)).default.createContext(null)},5723:function(e,t,r){let n,i;r.d(t,{Jn:function(){return x},qX:function(){return k},Xd:function(){return S},Mq:function(){return B},ZF:function(){return U},KN:function(){return P}});var o,s=r(6574),a=r(9858),l=r(8954);let c=(e,t)=>t.some(t=>e instanceof t),u=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return m(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(m(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(_(this),r),m(u.get(this))}:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return m(t.apply(_(this),r))}:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=t.call(_(this),e,...n);return d.set(o,e.sort?e.sort():[e]),m(o)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});h.set(e,t)}(t),c(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let _=e=>p.get(e),b=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],w=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=v.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||b.includes(r)))return;let o=async function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];let a=this.transaction(e,i?"readwrite":"readonly"),l=a.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[r](...o),i&&a.done]))[0]};return w.set(t,o),o}g={...o=g,get:(e,t,r)=>y(e,t)||o.get(e,t,r),has:(e,t)=>!!y(e,t)||o.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}}).filter(e=>e).join(" ")}constructor(e){this.container=e}}let I="@firebase/app",T="0.9.27",A=new a.Yd("@firebase/app"),O="[DEFAULT]",R={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,D=new Map;function S(e){let t=e.name;if(D.has(t))return A.debug("There were multiple attempts to register component ".concat(t,".")),!1;for(let r of(D.set(t,e),C.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){A.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}(r,e);return!0}function k(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let N=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s.wA("app",()=>this,"PUBLIC"))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x="10.8.0";function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:O,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw N.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw N.create("no-options");let o=C.get(i);if(o){if((0,l.vZ)(r,o.options)&&(0,l.vZ)(n,o.config))return o;throw N.create("duplicate-app",{appName:i})}let a=new s.H0(i);for(let e of D.values())a.addComponent(e);let c=new L(r,n,a);return C.set(i,c),c}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=C.get(e);if(!t&&e===O&&(0,l.aH)())return U();if(!t)throw N.create("no-app",{appName:e});return t}function P(e,t,r){var n;let i=null!==(n=R[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));let o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];o&&e.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&e.push("and"),a&&e.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),A.warn(e.join(" "));return}S(new s.wA("".concat(i,"-version"),()=>({library:i,version:t}),"VERSION"))}let M="firebase-heartbeat-store",F=null;function j(){return F||(F=(function(e,t){let{blocked:r,upgrade:n,blocking:i,terminated:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=indexedDB.open(e,1),a=m(s);return n&&s.addEventListener("upgradeneeded",e=>{n(m(s.result),e.oldVersion,e.newVersion,m(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(M)}catch(e){console.warn(e)}}}).catch(e=>{throw N.create("idb-open",{originalErrorMessage:e.message})})),F}async function H(e){try{let t=(await j()).transaction(M),r=await t.objectStore(M).get(z(e));return await t.done,r}catch(e){if(e instanceof l.ZR)A.warn(e.message);else{let t=N.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});A.warn(t.message)}}}async function V(e,t){try{let r=(await j()).transaction(M,"readwrite"),n=r.objectStore(M);await n.put(t,z(e)),await r.done}catch(e){if(e instanceof l.ZR)A.warn(e.message);else{let t=N.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});A.warn(t.message)}}}function z(e){return"".concat(e.name,"!").concat(e.options.appId)}class W{async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=q();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=q(),{heartbeatsToSend:r,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Z(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Z(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,l.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}}function q(){return new Date().toISOString().substring(0,10)}class K{async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await H(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return V(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return V(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Z(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}S(new s.wA("platform-logger",e=>new E(e),"PRIVATE")),S(new s.wA("heartbeat",e=>new W(e),"PRIVATE")),P(I,T,""),P(I,T,"esm2017"),P("fire-js","")},6574:function(e,t,r){r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(8954);class i{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService(e){let{instanceIdentifier:t,options:r={}}=e,n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===o?void 0:t,options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(e){}return n||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}},9858:function(e,t,r){var n,i;r.d(t,{Yd:function(){return u},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let s={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},c=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];if(t<e.logLevel)return;let o=new Date().toISOString(),s=l[t];if(s)console[s]("[".concat(o,"]  ").concat(e.name,":"),...n);else throw Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...t),this._logHandler(this,n.DEBUG,...t)}log(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...t),this._logHandler(this,n.VERBOSE,...t)}info(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.INFO,...t),this._logHandler(this,n.INFO,...t)}warn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.WARN,...t),this._logHandler(this,n.WARN,...t)}error(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.ERROR,...t),this._logHandler(this,n.ERROR,...t)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,o.push(this)}}},6142:function(e,t,r){r.d(t,{ZF:function(){return n.ZF}});var n=r(5723);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.8.0","app")},2730:function(e,t,r){r.d(t,{hJ:function(){return n.X},v0:function(){return n.o},Aj:function(){return n.y},rh:function(){return n.c},F6:function(){return n.f},w7:function(){return n.C}});var n=r(5554);r(8954),r(5723),r(9858),r(6574)},4905:function(e,t,r){r.d(t,{oq:function(){return el},Jt:function(){return ea},cF:function(){return eu},aF:function(){return es},iH:function(){return ec},KV:function(){return eo}});var n,i,o,s,a=r(5723),l=r(8954),c=r(6574);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="firebasestorage.googleapis.com",h="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends l.ZR{get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}constructor(e,t,r=0){super(f(e),"Firebase Storage: ".concat(t," (").concat(f(e),")")),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}}function f(e){return"storage/"+e}function p(){return new d(o.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(e){return new d(o.INVALID_ARGUMENT,e)}function m(){return new d(o.APP_DELETED,"The Firebase app was deleted.")}function _(e,t){return new d(o.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function b(e){throw new d(o.INTERNAL_ERROR,"Internal error: "+e)}(n=o||(o={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=v.makeFromUrl(e,t)}catch(t){return new v(e,"")}if(""===r.path)return r;throw new d(o.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp("^https?://".concat(a,"/").concat("v[A-Za-z0-9_]+","/b/").concat(n,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:s},{regex:RegExp("^https?://".concat(t===u?"(?:storage.googleapis.com|storage.cloud.google.com)":t,"/").concat(n,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<l.length;t++){let n=l[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new v(e,t),n.postModify(r);break}}if(null==r)throw new d(o.INVALID_URL,"Invalid URL '"+e+"'.");return r}constructor(e,t){this.bucket=e,this.path_=t}}class w{getPromise(){return this.promise_}cancel(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}constructor(e){this.promise_=Promise.reject(e)}}function y(e){return"string"==typeof e||e instanceof String}function E(e){return I()&&e instanceof Blob}function I(){return"undefined"!=typeof Blob}function T(e,t,r,n){if(n<t)throw g("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(n>r)throw g("Invalid value for '".concat(e,"'. Expected ").concat(r," or less."))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t,r){let n=t;return null==r&&(n="https://".concat(t)),"".concat(r,"://").concat(n,"/v0").concat(e)}function O(e){let t=encodeURIComponent,r="?";for(let n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}(i=s||(s={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=p();e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else n(t.canceled?this.appDelete_?m():new d(o.CANCELED,"User canceled the upload/download."):new d(o.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))};this.canceled_?e(!1,new C(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let n=1,i=null,o=null,s=!1,a=0,l=!1;function c(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];l||(l=!0,t.apply(null,r))}function u(t){i=setTimeout(()=>{i=null,e(d,2===a)},t)}function h(){o&&clearTimeout(o)}function d(e){let t;for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(l){h();return}if(e||2===a||s){h(),c.call(null,e,...i);return}n<64&&(n*=2),1===a?(a=2,t=0):t=(n+Math.random())*1e3,u(t)}let f=!1;function p(e){!f&&(f=!0,h(),!l&&(null!==i?(e||(a=2),clearTimeout(i),u(0)):e||(a=1)))}return u(0),o=setTimeout(()=>{s=!0,p(!0)},r),p}((e,t)=>{if(t){e(!1,new C(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===s.NO_ERROR,i=r.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i,this.additionalRetryCodes_)&&this.retry){e(!1,new C(!1,null,r.getErrorCode()===s.ABORT));return}e(!0,new C(-1!==this.successCodes_.indexOf(i),r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}constructor(e,t,r,n,i,o,s,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}}class C{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function D(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==n){let e=new n;for(let r=0;r<t.length;r++)e.append(t[r]);return e.getBlob()}if(I())return new Blob(t);throw new d(o.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class k{constructor(e,t){this.data=e,this.contentType=t||null}}function N(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):(64512&n)==55296?r<e.length-1&&(64512&e.charCodeAt(r+1))==56320?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function L(e,t){let r;switch(e){case S.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw _(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case S.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw _(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new d(o.UNSUPPORTED_ENVIRONMENT,"".concat("base-64"," is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information."));return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw _(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}class x{constructor(e){var t;this.base64=!1,this.contentType=null;let r=e.match(/^data:([^,]+)?,/);if(null===r)throw _(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=r[1]||null;null!=n&&(this.base64=(t=";base64",n.length>=t.length&&n.substring(n.length-t.length)===t),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{size(){return this.size_}type(){return this.type_}slice(e,t){if(!E(this.data_))return new U(new Uint8Array(this.data_.buffer,e,t-e),!0);{var r;let n=(r=this.data_).webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new U(n)}}static getBlob(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(I()){let e=t.map(e=>e instanceof U?e.data_:e);return new U(D.apply(null,e))}{let e=t.map(e=>y(e)?function(e,t){switch(e){case S.RAW:return new k(N(t));case S.BASE64:case S.BASE64URL:return new k(L(e,t));case S.DATA_URL:return new k(function(e){let t=new x(e);return t.base64?L(S.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw _(S.DATA_URL,"Malformed data URL.")}return N(t)}(t.rest)}(t),new x(t).contentType)}throw p()}(S.RAW,e).data:e.data_),r=0;e.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),i=0;return e.forEach(e=>{for(let t=0;t<e.length;t++)n[i++]=e[t]}),new U(n,!0)}}uploadData(){return this.data_}constructor(e,t){let r=0,n="";E(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function P(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){return t}class F{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||M}}let j=null;function H(){if(j)return j;let e=[];e.push(new F("bucket")),e.push(new F("generation")),e.push(new F("metageneration")),e.push(new F("name","fullPath",!0));let t=new F("name");t.xform=function(e,t){return!y(t)||t.length<2?t:P(t)},e.push(t);let r=new F("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new F("timeCreated")),e.push(new F("updated")),e.push(new F("md5Hash",null,!0)),e.push(new F("cacheControl",null,!0)),e.push(new F("contentDisposition",null,!0)),e.push(new F("contentEncoding",null,!0)),e.push(new F("contentLanguage",null,!0)),e.push(new F("contentType",null,!0)),e.push(new F("metadata","customMetadata",!0)),j=e}function V(e,t,r){let n=B(t);return null===n?null:function(e,t,r){let n={};n.type="file";let i=r.length;for(let e=0;e<i;e++){let i=r[e];n[i.local]=i.xform(n,t[i.server])}return Object.defineProperty(n,"ref",{get:function(){let t=new v(n.bucket,n.fullPath);return e._makeStorageReference(t)}}),n}(e,n,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z="prefixes",W="items";class q{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(!e)throw p()}function Z(e){return function(t,r){var n,i;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new d(o.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(o.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,s=new d(o.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,s=new d(o.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}}function X(e){let t=Z(e);return function(r,n){let i=t(r,n);if(404===r.getStatus()){var s;s=e.path,i=new d(o.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}class G{send(e,t,r,n){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw b("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw b("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}}class J extends G{initXhr(){this.xhr_.responseType="text"}}function $(){return new J}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Y(e,t)}get root(){let e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new v(this._location.bucket,e);return new Y(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(o.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}constructor(e,t){this._service=e,t instanceof v?this._location=t:this._location=v.makeFromUrl(t,e.host)}}async function Q(e,t,r){let n=await function(e,t){null!=t&&"number"==typeof t.maxResults&&T("options.maxResults",1,1e3,t.maxResults);let r=t||{},n=function(e,t,r,n,i){var o;let s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",r&&r.length>0&&(s.delimiter=r),n&&(s.pageToken=n),i&&(s.maxResults=i);let a=A(t.bucketOnlyServerUrl(),e.host,e._protocol),l=e.maxOperationRetryTime,c=new q(a,"GET",(o=t.bucket,function(t,r){let n=function(e,t,r){let n=B(r);return null===n?null:function(e,t,r){let n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[z])for(let i of r[z]){let r=i.replace(/\/$/,""),o=e._makeStorageReference(new v(t,r));n.prefixes.push(o)}if(r[W])for(let i of r[W]){let r=e._makeStorageReference(new v(t,i.name));n.items.push(r)}return n}(e,t,n)}(e,o,r);return K(null!==n),n}),l);return c.urlParams=s,c.errorHandler=Z(t),c}(e.storage,e._location,"/",r.pageToken,r.maxResults);return e.storage.makeRequestWithTokens(n,$)}(e,{pageToken:r});t.prefixes.push(...n.prefixes),t.items.push(...n.items),null!=n.nextPageToken&&await Q(e,t,n.nextPageToken)}function ee(e,t){let r=null==t?void 0:t[h];return null==r?null:v.makeFromBucketSpec(r,e)}class et{get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=ee(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){T("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){T("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Y(this,e)}_makeRequest(e,t,r,n){let i=!(arguments.length>4)||void 0===arguments[4]||arguments[4];if(this._deleted)return new w(m());{let o=function(e,t,r,n,i,o){let s=!(arguments.length>6)||void 0===arguments[6]||arguments[6],a=O(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return t&&(c["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(c.Authorization="Firebase "+r),c["X-Firebase-Storage-Version"]="webjs/"+(null!=o?o:"AppManager"),null!==n&&(c["X-Firebase-AppCheck"]=n),new R(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=v.makeFromBucketSpec(n,this._host):this._bucket=ee(this._host,this.app.options)}}let er="@firebase/storage",en="0.12.1",ei="storage";function eo(e,t,r){return function(e,t,r){e._throwIfRoot("uploadBytes");let n=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},l=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+l;let c=function(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}(t,n,i),u="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){let r={},n=t.length;for(let i=0;i<n;i++){let n=t[i];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}(c,r)+"\r\n--"+l+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h=U.getBlob(u,n,"\r\n--"+l+"--");if(null===h)throw new d(o.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let f={name:c.fullPath},p=new q(A(s,e.host,e._protocol),"POST",function(t,n){let i=V(e,n,r);return K(null!==i),i},e.maxUploadRetryTime);return p.urlParams=f,p.headers=a,p.body=h.uploadData(),p.errorHandler=Z(t),p}(e.storage,e._location,H(),new U(t,!0),r);return e.storage.makeRequestWithTokens(n,$).then(t=>({metadata:t,ref:e}))}(e=(0,l.m9)(e),t,r)}function es(e){return function(e){let t={prefixes:[],items:[]};return Q(e,t).then(()=>t)}(e=(0,l.m9)(e))}function ea(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=new q(A(t.fullServerUrl(),e.host,e._protocol),"GET",function(t,n){let i=V(e,n,r);return K(null!==i),function(e,t,r,n){let i=B(t);if(null===i||!y(i.downloadTokens))return null;let o=i.downloadTokens;if(0===o.length)return null;let s=encodeURIComponent;return o.split(",").map(t=>{let i=e.bucket,o=e.fullPath;return A("/b/"+s(i)+"/o/"+s(o),r,n)+O({alt:"media",token:t})})[0]}(i,n,e.host,e._protocol)},e.maxOperationRetryTime);return n.errorHandler=X(t),n}(e.storage,e._location,H());return e.storage.makeRequestWithTokens(t,$).then(e=>{if(null===e)throw new d(o.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function el(e){return function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let r=new q(A(t.fullServerUrl(),e.host,e._protocol),"DELETE",function(e,t){},e.maxOperationRetryTime);return r.successCodes=[200,204],r.errorHandler=X(t),r}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,$)}(e=(0,l.m9)(e))}function ec(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof et){if(null==t._bucket)throw new d(o.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let n=new Y(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new v(e._location.bucket,r);return new Y(e.storage,n)}(t,r):t}(e,t);if(e instanceof et)return new Y(e,t);throw g("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function eu(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,a.Mq)(),t=arguments.length>1?arguments[1]:void 0;e=(0,l.m9)(e);let r=(0,a.qX)(e,ei).getImmediate({identifier:t}),n=(0,l.P0)("storage");return n&&function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.host="".concat(t,":").concat(r),e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(r,...n),r}(0,a.Xd)(new c.wA(ei,function(e,t){let{instanceIdentifier:r}=t;return new et(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),r,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(er,en,""),(0,a.KN)(er,en,"esm2017")},9703:function(e,t,r){function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}r.d(t,{_T:function(){return n}}),"function"==typeof SuppressedError&&SuppressedError}}]);