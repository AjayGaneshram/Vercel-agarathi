import{r as e,b as t}from"./vendor.CwRf1_r9.js";import{_ as n,a as r}from"../main.xkGysGJo.js";!function(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:o,onRegistered:i,onRegisteredSW:s,onRegisterError:a}=e;let d,l;l=async function(){if("serviceWorker"in navigator){if(d=await n((async()=>{const{Workbox:e}=await import("./vendor.CwRf1_r9.js").then((e=>e.w));return{Workbox:e}}),[]).then((({Workbox:e})=>new e("/sw.js",{scope:"/",type:"classic"}))).catch((e=>{null==a||a(e)})),!d)return;d.addEventListener("activated",(e=>{(e.isUpdate||e.isExternal)&&window.location.reload()})),d.addEventListener("installed",(e=>{e.isUpdate||null==o||o()})),d.register({immediate:t}).then((e=>{s?s("/sw.js",e):null==i||i(e)})).catch((e=>{null==a||a(e)}))}}()}({immediate:!0,onNeedRefresh(){location.reload()}});const o=()=>{const[n,o]=e.useState(!1),i=t(),s=e.useRef(null);e.useEffect((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return n&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[n]);return r("div",{className:"bg-primary h-16 w-full relative",children:r("div",{className:"flex justify-between items-center h-full px-4 md:px-8 border-b-2 border-white-200 border-b-white-500",children:r("h1",{className:"text-white font-bold text-lg md:text-2xl cursor-pointer",children:r("a",{onClick:()=>(i("/home"),void o(!1)),children:"செம்மை சொல்லகராதி"})})})})};export{o as default};
