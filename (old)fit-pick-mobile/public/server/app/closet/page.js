(()=>{var e={};e.id=242,e.ids=[242],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},852:e=>{"use strict";e.exports=require("async_hooks")},4300:e=>{"use strict";e.exports=require("buffer")},6206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},7643:e=>{"use strict";e.exports=require("diagnostics_channel")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},5673:e=>{"use strict";e.exports=require("node:events")},4492:e=>{"use strict";e.exports=require("node:stream")},7261:e=>{"use strict";e.exports=require("node:util")},1017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},3477:e=>{"use strict";e.exports=require("querystring")},2781:e=>{"use strict";e.exports=require("stream")},5356:e=>{"use strict";e.exports=require("stream/web")},1576:e=>{"use strict";e.exports=require("string_decoder")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9830:e=>{"use strict";e.exports=require("util/types")},1267:e=>{"use strict";e.exports=require("worker_threads")},9796:e=>{"use strict";e.exports=require("zlib")},3918:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>l,pages:()=>p,routeModule:()=>x,tree:()=>c});var s=r(482),i=r(9108),o=r(2563),n=r.n(o),a=r(8300),u={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>a[e]);r.d(t,u);let c=["",{children:["closet",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5212)),"/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/closet/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5380)),"/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/closet/page.tsx"],l="/closet/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/closet/page",pathname:"/closet",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6774:(e,t,r)=>{Promise.resolve().then(r.bind(r,3648))},3648:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(5344),i=r(3729),o=r(4679),n=r(5889),a=r(8394),u=r.n(a);let c=()=>{let[e,t]=(0,i.useState)([]),[r,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{(0,n.w)().then(e=>{t(e)}).catch(e=>{console.error("Error fetching closet:",e)})},[]),(0,i.useEffect)(()=>{Promise.all(Array.from(document.querySelectorAll(".outfit-image")).map(e=>new Promise(t=>{null==e||e.addEventListener("load",t)}))).then(()=>{a(!0)})},[e]),s.jsx("main",{className:u().main,children:(0,s.jsxs)("div",{children:[s.jsx("h1",{className:u().AppName,children:"Closet"}),s.jsx("div",{className:`${u().MainClosetFrame} ${r?u().fadeIn:""}`,children:e.map((e,t)=>s.jsx(o.Z,{ImageSource:e},t))})]})})}},5212:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});let s=(0,r(6843).createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/closet/page.tsx`),{__esModule:i,$$typeof:o}=s,n=s.default}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,739,421,642],()=>r(3918));module.exports=s})();