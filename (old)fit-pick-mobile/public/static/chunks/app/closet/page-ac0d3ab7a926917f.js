(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{5854:function(e,t,a){Promise.resolve().then(a.bind(a,8960))},3831:function(e,t,a){"use strict";a.d(t,{I:function(){return l},l:function(){return n}});var r=a(6142),o=a(2730);a(9079).env.Wjdn34fehvbgrwjn2dh;let n=(0,r.ZF)({apiKey:"AIzaSyDb07qS1E9NZdY8jaHUTICbjq2h7c1bI_E",authDomain:"fitpick-411706.firebaseapp.com",projectId:"fitpick-411706",storageBucket:"fitpick-411706.appspot.com",messagingSenderId:"10784791395",appId:"1:10784791395:web:0f6c81a2a06259b0121156",measurementId:"G-7RPGRCSX2Z"}),l=(0,o.v0)(n)},8960:function(e,t,a){"use strict";a.r(t);var r=a(3827),o=a(4090),n=a(6480),l=a(6397),i=a(345),c=a.n(i);t.default=()=>{let[e,t]=(0,o.useState)([]),[a,i]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{(0,l.w)().then(e=>{t(e)}).catch(e=>{console.error("Error fetching closet:",e)})},[]),(0,o.useEffect)(()=>{Promise.all(Array.from(document.querySelectorAll(".outfit-image")).map(e=>new Promise(t=>{null==e||e.addEventListener("load",t)}))).then(()=>{i(!0)})},[e]),(0,r.jsx)("main",{className:c().main,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:c().AppName,children:"Closet"}),(0,r.jsx)("div",{className:"".concat(c().MainClosetFrame," ").concat(a?c().fadeIn:""),children:e.map((e,t)=>(0,r.jsx)(n.Z,{ImageSource:e},t))})]})})}},6397:function(e,t,a){"use strict";a.d(t,{w:function(){return l}});var r=a(2730),o=a(3831),n=a(4905);let l=()=>new Promise((e,t)=>{let a=[];(0,r.Aj)(o.I,r=>{if(r){let l=(r.uid+r.displayName).replaceAll(" ","");console.log(l);let i=(0,n.cF)(o.l),c=(0,n.iH)(i,l);(0,n.aF)(c).then(t=>{let r=[];t.items.forEach(e=>{let t=(0,n.Jt)(e).then(e=>{a.push(e)}).catch(t=>{switch(t.code){case"storage/object-not-found":console.error("File not found:",e.name);break;case"storage/unauthorized":console.error("Unauthorized to access file:",e.name);break;case"storage/unknown":console.error("Unknown error occurred for file:",e.name);break;default:console.error("Error fetching download URL for file:",e.name,t)}});r.push(t)}),Promise.all(r).then(()=>{e(a)})}).catch(e=>{console.error("Error listing items in folder:",e),t(e)})}})})},6480:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(3827),o=a(4852),n=a.n(o),l=a(703),i=a(4905),c=a(3831),s=a(2730);let u=e=>{(0,s.Aj)(c.I,t=>{if(t){console.log((t.uid+t.displayName).replaceAll(" ",""));let a=(0,i.cF)(c.l);alert(e);let r=(0,i.iH)(a,e);(0,i.oq)(r).then(()=>{console.log("File deleted :))"),window.location.reload()}).catch(e=>{console.error("Sorry, Error deleting image, Error:",e),window.location.reload()})}})};var d=e=>{let{ImageSource:t="default.png"}=e,a=e=>{u(e)};return(0,r.jsxs)("div",{id:"smallCard",className:n().PrimaryCard,children:[(0,r.jsx)(l.default,{src:t,width:5013,height:5013,alt:"Your amazing outfit",className:n().OutfitImageStyle,id:"SmallCardImage",title:"Chosen outfit",loading:"eager",onError:e=>{e.currentTarget.remove()}}),(0,r.jsx)("button",{className:n().DeleteButton,onClick:()=>a(t),children:"Delete"})]})}},4852:function(e){e.exports={PrimaryCard:"SmallOutfitCard_PrimaryCard__5_F2C",CardPop:"SmallOutfitCard_CardPop__Ws4eG",OutfitImageStyle:"SmallOutfitCard_OutfitImageStyle__ezwCm",DeleteButton:"SmallOutfitCard_DeleteButton__NYcQU",CardPopMobile:"SmallOutfitCard_CardPopMobile__iPU9D"}},345:function(e){e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",AppName:"page_AppName__WeIWZ",introPop:"page_introPop__9bfPR",MainClosetFrame:"page_MainClosetFrame__aDh3Q",menu:"page_menu__71kMP",uploadButtonMain:"page_uploadButtonMain__kqKpe",uploadButton:"page_uploadButton__b2HuV",uploadButtonContainer:"page_uploadButtonContainer__GR655",centerMenu:"page_centerMenu__McuE5",listItemText:"page_listItemText__ROMil",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u"}}},function(e){e.O(0,[380,924,703,971,69,744],function(){return e(e.s=5854)}),_N_E=e.O()}]);