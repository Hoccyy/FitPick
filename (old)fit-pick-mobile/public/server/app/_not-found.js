(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},852:e=>{"use strict";e.exports=require("async_hooks")},4300:e=>{"use strict";e.exports=require("buffer")},6206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},7643:e=>{"use strict";e.exports=require("diagnostics_channel")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},5673:e=>{"use strict";e.exports=require("node:events")},4492:e=>{"use strict";e.exports=require("node:stream")},7261:e=>{"use strict";e.exports=require("node:util")},4074:e=>{"use strict";e.exports=require("perf_hooks")},3477:e=>{"use strict";e.exports=require("querystring")},2781:e=>{"use strict";e.exports=require("stream")},5356:e=>{"use strict";e.exports=require("stream/web")},1576:e=>{"use strict";e.exports=require("string_decoder")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9830:e=>{"use strict";e.exports=require("util/types")},1267:e=>{"use strict";e.exports=require("worker_threads")},9796:e=>{"use strict";e.exports=require("zlib")},1055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>_,tree:()=>l});var s=r(482),n=r(9108),o=r(2563),i=r.n(o),a=r(8300),u={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>a[e]);r.d(t,u);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,5380)),"/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],c=[],d="/_not-found",p={require:r,loadChunk:()=>Promise.resolve()},_=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6559:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},1723:(e,t,r)=>{Promise.resolve().then(r.bind(r,5927)),Promise.resolve().then(r.bind(r,2170)),Promise.resolve().then(r.bind(r,807)),Promise.resolve().then(r.bind(r,5300))},9817:(e,t,r)=>{"use strict";r.d(t,{I:()=>i,l:()=>o});var s=r(6041),n=r(3913);process.env.Wjdn34fehvbgrwjn2dh;let o=(0,s.ZF)({apiKey:"AIzaSyDb07qS1E9NZdY8jaHUTICbjq2h7c1bI_E",authDomain:"fitpick-411706.firebaseapp.com",projectId:"fitpick-411706",storageBucket:"fitpick-411706.appspot.com",messagingSenderId:"10784791395",appId:"1:10784791395:web:0f6c81a2a06259b0121156",measurementId:"G-7RPGRCSX2Z"}),i=(0,n.v0)(o)},2170:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5344);r(3729);var n=r(8394),o=r.n(n),i=r(6506);let a=({title:e="",path:t="",desc:r=""})=>s.jsx("li",{id:"menuItems",children:s.jsx("h3",{id:"navButtons",className:o().listItemText,children:s.jsx(i.default,{href:t,title:r,passHref:!0,children:e})})})},5927:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5344),n=r(4948),o=r.n(n),i=r(5300);let a=()=>{let{user:e,googleSignIn:t,logOut:r}=(0,i.UserAuth)(),n=async()=>{try{await t()}catch(e){console.log(e.message)}},a=async()=>{try{await r()}catch(e){console.log(e.message)}};return s.jsx("div",{className:o().holder,children:(0,s.jsxs)("div",{className:o().menuBg,children:[s.jsx("h1",{className:o().LogoutButton,children:"≡ "}),s.jsx("h1",{className:o().Username,children:{user:e}.user?.displayName}),s.jsx("h1",{className:o().Username,children:{user:e}.user?.displayName?"Hi "+({user:e}).user?.displayName:"Start your catalog!"}),s.jsx("h1",{className:o().LoginButton,onClick:n,children:"Login"}),s.jsx("h1",{className:o().SignupButton,onClick:n,children:"Sign\xa0up"}),s.jsx("h1",{className:o().LogoutButton,onClick:a,children:"Logout"})]})})}},807:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5344);r(3729);var n=r(8394),o=r.n(n),i=r(6506),a=r(3424),u=r(9817),l=r(3913);let c=e=>{(0,l.Aj)(u.I,t=>{if(t){let r=(t.uid+t.displayName).replaceAll(" ","");console.log(r);let s=(0,a.cF)(u.l),n=e.target.files?.[0],o=(0,a.iH)(s,r+"/"+n.name);if(n){let e=new FileReader;e.onload=function(e){let t=new Blob([e.target?.result??""],{type:n.type});(0,a.KV)(o,t).then(e=>{console.log("Image Uploaded! :))"),window.location.reload()}).catch(e=>{console.error("Sorry, Error uploading image, Error:",e),window.location.reload()})},e.readAsArrayBuffer(n)}}})},d=({title:e="",path:t="",desc:r="",linkExist:n=!0,user:a=null})=>n?s.jsx("li",{id:"menuItems",children:s.jsx("h3",{id:"navButtons",className:o().listItemText,children:s.jsx(i.default,{href:t,title:r,passHref:!0,children:e})})}):s.jsx("li",{id:"menuItems",children:s.jsx("h3",{id:"navButtons",className:o().listItemText,children:s.jsx("input",{className:o().uploadButtonMain,type:"file",onChange:c})})})},5300:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AuthContextProvider:()=>u,UserAuth:()=>l});var s=r(5344),n=r(3729),o=r(3913),i=r(9817);let a=(0,n.createContext)(),u=({children:e})=>{let t;let[r,u]=(0,n.useState)(null);return t=navigator.userAgent.toLowerCase().includes("safari")?()=>{let e=new o.hJ;(0,o.rh)(i.I,e)}:()=>{let e=new o.hJ;(0,o.F6)(i.I,e)},(0,n.useEffect)(()=>{let e=(0,o.Aj)(i.I,e=>{u(e)});return()=>e()},[r]),s.jsx(a.Provider,{value:{user:r,googleSignIn:t,logOut:()=>{(0,o.w7)(i.I)}},children:e})},l=()=>(0,n.useContext)(a)},4948:e=>{e.exports={holder:"menuStyles_holder__7tkYe",menuBg:"menuStyles_menuBg__o88sd",centerMenu:"menuStyles_centerMenu__KYf8g",LoginButton:"menuStyles_LoginButton__mB2DW",LogoutButton:"menuStyles_LogoutButton__kqK8r",Username:"menuStyles_Username__Iz6MT",SignupButton:"menuStyles_SignupButton___gkhO"}},2471:e=>{e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",AppName:"page_AppName__WeIWZ",introPop:"page_introPop__9bfPR",MainClosetFrame:"page_MainClosetFrame__aDh3Q",menu:"page_menu__71kMP",uploadButtonMain:"page_uploadButtonMain__kqKpe",uploadButton:"page_uploadButton__b2HuV",uploadButtonContainer:"page_uploadButtonContainer__GR655",centerMenu:"page_centerMenu__McuE5",listItemText:"page_listItemText__ROMil",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u"}},8394:e=>{e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",AppName:"page_AppName__WeIWZ",introPop:"page_introPop__9bfPR",MainClosetFrame:"page_MainClosetFrame__aDh3Q",menu:"page_menu__71kMP",uploadButtonMain:"page_uploadButtonMain__kqKpe",uploadButton:"page_uploadButton__b2HuV",uploadButtonContainer:"page_uploadButtonContainer__GR655",centerMenu:"page_centerMenu__McuE5",listItemText:"page_listItemText__ROMil",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u"}},5380:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B,metadata:()=>q});var s=r(5036),n=r(2195),o=r.n(n);r(5023);var i=r(2471),a=r.n(i),u=r(6843);let l=(0,u.createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/components/NavItem.tsx`),{__esModule:c,$$typeof:d}=l,p=l.default,_=(0,u.createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/components/Navbar.tsx`),{__esModule:m,$$typeof:x}=_,g=_.default,h=(0,u.createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/components/UploadButton.tsx`),{__esModule:f,$$typeof:v}=h,y=h.default,P=(0,u.createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/context/AuthContext.js`),{__esModule:j,$$typeof:b}=P;P.default;let k=(0,u.createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/context/AuthContext.js#AuthContextProvider`);(0,u.createProxy)(String.raw`/Users/hocianwade/Documents/GitHub/RandomOutfitPicker/fit-pick/src/app/context/AuthContext.js#UserAuth`);let q={title:"FitPick | Seamless Outfit Picker",description:"Need to decide on an outfit? Let FitPick choose for you! Store your closet seamlessly and make your choice easier."};function B({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:o().className,children:(0,s.jsxs)(k,{children:[(0,s.jsxs)("div",{className:a().centerMenu,children:[s.jsx(g,{}),(0,s.jsxs)("nav",{id:"menu",className:a().menu,children:[s.jsx(p,{title:"Main",path:"/"}),s.jsx(p,{title:"Closet",path:"/closet"})]}),s.jsx("nav",{id:"menu",className:a().uploadButton,children:s.jsx("div",{className:a().uploadButtonContainer,children:s.jsx(y,{title:"Upload",path:"",linkExist:!1})})})]}),e]})})})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,739],()=>r(1055));module.exports=s})();