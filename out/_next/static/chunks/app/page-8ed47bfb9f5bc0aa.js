(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{24418:function(e,t,n){Promise.resolve().then(n.bind(n,70990)),Promise.resolve().then(n.bind(n,19721))},70990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s=n(57437),r=n(21270),a=n(82670),i=n(30248),l=n(54222),o=n(47788),c=n(59549),u=n(88e3),d=n(56093),p=n(1657),m=n(26696),x=n(73430);function f(){let e=(0,d._)(["\n            radial-gradient(\n              200px circle at ","px ","px,\n              black 0%,\n              transparent 100%\n            )\n          "]);return f=function(){return e},e}function h(){let e=(0,d._)(["\n            radial-gradient(\n              200px circle at ","px ","px,\n              black 0%,\n              transparent 100%\n            )\n          "]);return h=function(){return e},e}n(2265);let g=e=>{let{children:t,className:n,containerClassName:r}=e,a=(0,m.c)(0),i=(0,m.c)(0);return(0,s.jsxs)("div",{className:(0,p.cn)("relative h-[100vh] flex items-center justify-left w-full group"),onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:s}=e;if(!t)return;let{left:r,top:l}=t.getBoundingClientRect();a.set(n-r),i.set(s-l)},children:[(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none"}),(0,s.jsx)(l.E.div,{className:"pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:(0,x.Y)(f(),a,i),maskImage:(0,x.Y)(h(),a,i)}}),(0,s.jsx)("div",{className:(0,p.cn)("relative px-7 z-20",n),children:t})]})},v=e=>{let{children:t,className:n}=e;return(0,s.jsx)(l.E.span,{animate:{color:["#FF0000","#00FF00"]},transition:{duration:5,ease:"linear",repeat:1/0},style:{display:"inline-block"},className:(0,p.cn)("relative pb-1 rounded-lg",n),children:t})};var b=n(24232),S=n(43089),_=n(8792);n(21472);var j=e=>{let{content:t,onclick:n}=e;return(0,s.jsx)("button",{className:"button-40",role:"button",onClick:n,children:(0,s.jsx)("span",{className:"text",children:t})})};let y=i.z.object({to:i.z.coerce.string({required_error:"Address is required",invalid_type_error:"Address must be a string"}),uri:i.z.coerce.string({required_error:"uri is required",invalid_type_error:"uri must be a number"})});function T(){let{toast:e}=(0,o.pm)();(0,S.x)();let{data:t,error:n,isPending:i,writeContract:d}=(0,c.S)();(0,a.cI)({resolver:(0,r.F)(y)});let{isLoading:p,isSuccess:m}=(0,u.A)({hash:t});return(0,s.jsx)("div",{className:"w-full ",children:(0,s.jsxs)(g,{className:"w-full flex items-center justify-center py-36px-10 gap-10",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(l.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:[20,-5,0]},transition:{duration:.5,ease:[.4,0,.2,1]},className:"text-sm  md:text-xl lg:text-xl font-semibold  text-justify dark:text-zinc-400 max-w-4xl leading-relaxed lg:leading-snug lg:text-left",children:[(0,s.jsx)(v,{className:"mb-2.5 text-5xl lg:text-7xl -top-9 font-bold",children:"Meme Pump on SuperPump"})," ",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-[#28FF28]",children:"SuperPump"})," ",(0,s.jsx)("span",{className:"text-[#28FF28]",style:{WebkitTextStroke:"0.1px black"},children:"is a meme launchpad and game marketplace platform \uD83D\uDE80. Users can launch their own meme tokens and trade game assets in a fun and engaging environment."})]}),(0,s.jsx)(_.default,{href:"/pump",children:(0,s.jsx)("div",{className:"w-[240px] mt-10",children:(0,s.jsx)(j,{content:"Pump now",onclick:()=>{}})})})]}),(0,s.jsx)("div",{className:"w-[30%] hidden lg:block"})]})})}var k=(0,b.default)(()=>Promise.resolve(T),{ssr:!1})},47788:function(e,t,n){"use strict";n.d(t,{pm:function(){return p}});var s=n(2265);let r=0,a=new Map,i=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?i(n):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function u(e){c=l(c,e),o.forEach(e=>{e(c)})}function d(e){let{...t}=e,n=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>u({type:"DISMISS_TOAST",toastId:n});return u({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||s()}}}),{id:n,dismiss:s,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function p(){let[e,t]=s.useState(c);return s.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},1657:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var s=n(75504),r=n(51367);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,s.W)(t))}},21472:function(){}},function(e){e.O(0,[4544,9803,8763,2971,8069,1744],function(){return e(e.s=24418)}),_N_E=e.O()}]);