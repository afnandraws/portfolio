(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1128:function(e,t,n){Promise.resolve().then(n.bind(n,4518)),Promise.resolve().then(n.bind(n,6716)),Promise.resolve().then(n.bind(n,6655)),Promise.resolve().then(n.t.bind(n,2471,23))},4518:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7437),o=n(2265),s=n(3249),c=n.n(s),i=n(6716),u=n(6691),l=n.n(u),a={src:"/_next/static/media/menu.942f85a3.svg",height:24,width:24,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/cross.1310de2a.svg",height:24,width:24,blurWidth:0,blurHeight:0},h=()=>{let{state:e,dispatch:t}=(0,o.useContext)(i.SelectionContext),[n,s]=(0,o.useState)(!1);function u(e){console.log(e.currentTarget.id),t({type:e.currentTarget.id})}return(0,r.jsxs)("footer",{className:c().footer,children:[(0,r.jsx)("button",{className:c().toggle,onClick:function(){s(e=>!e)},children:n?(0,r.jsx)(l(),{alt:"close",src:d,height:15}):(0,r.jsx)(l(),{alt:"menu",src:a,height:15})}),(0,r.jsxs)("div",{className:n?c().open:"",children:[" ",(0,r.jsx)("button",{className:"Projects"===e.page?c().selected:c().unselected,onClick:u,id:"Projects",children:"Projects"}),(0,r.jsx)("button",{className:"Experience"===e.page?c().selected:c().unselected,onClick:u,id:"Experience",children:"Experience"}),(0,r.jsx)("button",{className:"About"===e.page?c().selected:c().unselected,onClick:u,id:"About",children:"About"})]})]})}},6655:function(e,t,n){"use strict";n.r(t);var r=n(7437),o=n(2265),s=n(5992),c=n.n(s);t.default=()=>{let[e,t]=(0,o.useState)(!1);return(0,r.jsx)("header",{className:c().header,children:(0,r.jsx)("div",{className:c().buttongroup,children:(0,r.jsx)("button",{children:"Resume"})})})}},6716:function(e,t,n){"use strict";n.r(t),n.d(t,{SelectionContext:function(){return i},SelectionContextProvider:function(){return u}});var r=n(7437),o=n(2265);let s={page:"Projects"},c=(e,t)=>{switch(t.type){case"Projects":return{...e,page:"Projects"};case"Experience":return{...e,page:"Experience"};case"About":return{...e,page:"About"};case"Socials":return{...e,page:"Socials"};default:return e}},i=(0,o.createContext)({state:s,dispatch:()=>null}),u=e=>{let{children:t}=e,[n,u]=(0,o.useReducer)(c,s);return(0,r.jsx)(i.Provider,{value:{state:n,dispatch:u},children:t})}},2471:function(){},3249:function(e){e.exports={footer:"Footer_footer__pQtti",toggle:"Footer_toggle__6E_bj",unselected:"Footer_unselected__3QX24",selected:"Footer_selected__NnoXX",open:"Footer_open__zA_UJ"}},5992:function(e){e.exports={header:"Header_header__KwdYD",buttongroup:"Header_buttongroup__RQ9_w"}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=1128)}),_N_E=e.O()}]);