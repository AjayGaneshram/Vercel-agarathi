import{r as e,u as t,b as r}from"./vendor.CwRf1_r9.js";import{D as o,a as s,j as n}from"../main.xkGysGJo.js";const l=()=>{const[l,a]=e.useState([]),{wordName:i}=t(),c=decodeURIComponent(i),d=r(),m=()=>{d("/home")},{outputJson:h}=e.useContext(o);e.useEffect((()=>{(async()=>{null!=h&&a(h.eachWord[c])})()}),[h,c]);return s("div",{className:"bg-red-50",children:n("div",{className:"p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen",children:[s("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-6 right-6 w-8 h-8 bg-red-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-900 transition-all",title:"Scroll to Top",children:"↑"}),s("div",{className:"mb-4",children:n("button",{className:"text-red-500 hover:text-orange-700 transition text-lg flex items-center",children:[s("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:m,children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),s("span",{className:"cursor-pointer",onClick:m,children:"முகப்புப்பக்கம்"})]})}),0!=l.length&&s("div",{children:n("div",{className:"mb-8",children:[s("h1",{className:"text-4xl font-extrabold text-primary text-center",children:l.word}),n("p",{className:"text-gray-700 mt-4 text-lg",children:[s("b",{className:"text-primary",children:"பொருள் :"})," ",s("span",{children:l.detail})]})]})})]})})};export{l as default};
