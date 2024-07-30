"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{3363:function(e,t,n){var r=n(5893);n(7294);var i=n(4440),l=n(5934),o=n(4466),s=n(4246),c=n(9123);t.Z=e=>{let{src:t="",title:n="",subtitle:d="",sx:a={main:{},title:{},subtitle:{}}}=e,h=(0,c.V)(t);return(0,r.jsxs)(i.Z,{sx:{height:"65vh",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textAlign:"center",overflow:"hidden",backgroundColor:"#00000080",...a.main||{}},children:[(0,r.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,style:{position:"absolute",top:"50%",left:"50%",width:"100%",height:"100%",objectFit:"cover",transform:"translate(-50%, -50%)",zIndex:-1},children:[(0,r.jsx)("source",{src:h,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:(0,r.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,r.jsx)(s.Z,{variant:"h3",component:"h1",gutterBottom:!0,sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:4,overflow:"hidden",textOverflow:"ellipsis",...a.title||{}},children:n}),(0,r.jsx)(s.Z,{variant:"h6",sx:{...a.subtitle||{}},children:d})]})})})]})}},5818:function(e,t,n){n.d(t,{Qs:function(){return o},SD:function(){return s},Yu:function(){return c},mo:function(){return d}}),n(4865);let r=(e,t)=>{let n="jsonp_callback_"+Math.round(1e5*Math.random());window[n]=function(e){delete window[n],document.head.removeChild(i),t(e)};let r=e+(e.indexOf("?")>=0?"&":"?")+"callback="+n,i=document.createElement("script");i.src=r,document.head.appendChild(i)},i=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{id:r,title:i,updated:l,published:o,category:s,link:c,content:d}=e;return{id:null==r?void 0:r.$t.split("-")[2],title:null==i?void 0:i.$t,published:null==o?void 0:o.$t,updated:null==l?void 0:l.$t,content:(e=>{let t=document.createElement("div");t.innerHTML=e;let n=t.getElementsByTagName("script");for(;n.length>0;)n[0].parentNode.removeChild(n[0]);let r=t.getElementsByClassName("hidden");for(;r.length>0;)r[0].parentNode.removeChild(r[0]);let i=t.getElementsByClassName("script");for(;i.length>0;)i[0].parentNode.removeChild(i[0]);return t.innerHTML})(null==d?void 0:d.$t),category:null!==(t=null==s?void 0:s.map(e=>e.term))&&void 0!==t?t:[],link:c[c.length-1].href,cover:(e=>{var t="";if("media$thumbnail"in e)t=e.media$thumbnail.url.replace("s72-c",n?"s450":"s150");else{var r=e.content.$t,i=r.indexOf("<img"),l=r.indexOf('src="',i),o=r.indexOf('"',l+5),s=r.substr(l+5,o-l-5);t=-1!=i&&-1!=l&&-1!=o&&""!=s?s:"https://i.imgur.com/vT2qWM7.png"}return t})(e),subtitle:(e=>{let t=document.createElement("div");t.innerHTML=e;let n=t.getElementsByClassName("hidden");return n.length?n[0].innerText:t.innerText.substring(0,300).trim()})(null==d?void 0:d.$t),settings:(e=>{try{var t;let n=document.createElement("div");n.innerHTML=e;let[r]=n.getElementsByClassName("script");if(r)return JSON.parse(null!==(t=r.getAttribute("data"))&&void 0!==t?t:"{}")}catch(e){console.log("parseSettings",e.message)}return{}})(null==d?void 0:d.$t)}},l=e=>new Promise(t=>{r(e,t)}),o=async e=>{try{let{feed:{entry:t}}=await l(e);return t.map(e=>i(e))}catch(e){return console.log("fetchNewsSections",e.message),[]}},s=async e=>{try{let{entry:t}=await l(e);return i(t)}catch(e){return console.log("fetchPost",e.message),{}}},c=e=>new Promise(t=>{fetch(e).then(e=>e.text()).then(e=>{var n=e.match(/id='post-body-(\d+)'/);return n?t(n[1]):t("")}).catch(e=>{console.log("getPostIdBlogspot",e.message),t("")})}),d=e=>{let{postId:t="",label:n=null,blogId:r,type:i="posts",query:l={}}=e;var o=new URL("https://www.blogger.com/feeds/".concat(r,"/").concat(i,"/default/").concat(t));return o.searchParams.append("alt","json-in-script"),Object.keys(l).forEach(e=>o.searchParams.append(e,l[e])),o.toString()}},2901:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(5893),i=n(7294),l=n(4440),o=n(4934),s=n(5934),c=n(4246),d=n(9360),a=n(9008),h=n.n(a),u=n(3363),x=n(442),m=n(9404),p=n(6529),f=n(7969),g=n(2744),j=n(9520),v=n(4965),Z=n(4792),y=n(2997),b=e=>{let{post:t}=e,[n,l]=(0,i.useState)([]),{mode:o}=(0,Z.F)();(0,i.useEffect)(()=>{t&&t.content&&l(Array.from(new DOMParser().parseFromString(t.content,"text/html").querySelectorAll("h2, h3, h4, h5, h6")).map(e=>({text:e.textContent,level:parseInt(e.tagName.charAt(1))-1,id:e.id})))},[t]);let s=(e,t)=>{e.preventDefault();let n=document.querySelector("#post-content").querySelectorAll("h2, h3, h4, h5, h6");if(n.length>t){let e=n[t].getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:e-75,behavior:"smooth"})}};return n.length?(0,r.jsx)("div",{children:(0,r.jsxs)(x.Z,{defaultExpanded:!1,sx:{backgroundColor:"dark"==o?"#1c1e2154":"#fef6ec"},children:[(0,r.jsx)(m.Z,{expandIcon:(0,r.jsx)(y.Z,{fontSize:"1.25rem",icon:"KeyboardArrowDownOutlined"}),children:(0,r.jsx)(c.Z,{variant:"h4",sx:{fontWeight:"700!important"},children:"Mục lục"})}),(0,r.jsx)(p.Z,{sx:{px:0},children:(0,r.jsx)(f.Z,{component:"ul",children:n.map((e,t)=>(0,r.jsx)(v.ZP,{disablePadding:!0,onClick:e=>s(e,t),sx:{pl:2*e.level},children:(0,r.jsx)(j.Z,{children:(0,r.jsx)(g.Z,{primary:e.text,sx:{fontWeight:1===e.level||2==e.level?"700!important":"normal",fontStyle:2===e.level?"italic":3===e.level?"italic":"normal"},disableTypography:!0})})},t))})})]})}):null},w=n(9996),C=n(3367),k=e=>{let{targetId:t}=e,{mode:n,toggleTheme:o}=(0,Z.F)(),[s,c]=(0,i.useState)(16),[d,a]=(0,i.useState)(!1),h=()=>{c(e=>e<30?e+2:e)},u=()=>{c(e=>e>12?e-2:e)},x=()=>{c(16)};return((0,i.useEffect)(()=>{let e=()=>{a(document.getElementById(t).getBoundingClientRect().top<0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),d)?(0,r.jsxs)(l.Z,{sx:{position:"fixed",top:"35%",right:15,background:"red",borderRadius:5,display:"flex",flexDirection:"column",color:"#fff",transition:"opacity 0.3s, visibility 0.3s",zIndex:1300},className:"toolbar-right-"+n,children:[(0,r.jsx)(w.Z,{title:"Chuyển sang "+("dark"===n?"s\xe1ng":"tối"),placement:"left",arrow:!0,children:(0,r.jsx)(C.Z,{color:"inherit",onClick:o,children:"light"===n?(0,r.jsx)(y.Z,{icon:"DarkMode"}):(0,r.jsx)(y.Z,{icon:"LightMode"})})}),(0,r.jsx)(w.Z,{title:"Tăng cỡ chữ",placement:"left",arrow:!0,children:(0,r.jsx)(C.Z,{color:"inherit",onClick:h,children:(0,r.jsx)(y.Z,{icon:"Add"})})}),(0,r.jsx)(w.Z,{title:"B\xecnh thường",placement:"left",arrow:!0,children:(0,r.jsx)(C.Z,{color:"inherit",onClick:x,children:(0,r.jsx)(y.Z,{icon:"Refresh"})})}),(0,r.jsx)(w.Z,{title:"Giảm cỡ chữ",placement:"left",arrow:!0,children:(0,r.jsx)(C.Z,{color:"inherit",onClick:u,children:(0,r.jsx)(y.Z,{icon:"Remove"})})}),(0,r.jsx)("style",{children:"\n          #".concat(t," {\n            font-size: ").concat(s,"px;\n          }\n        ")})]}):(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",mb:2,background:"red",borderRadius:10,color:"#fff"},className:"toolbar-right-"+n,children:[(0,r.jsx)(w.Z,{title:"Giảm cỡ chữ",children:(0,r.jsx)(C.Z,{onClick:u,color:"inherit",children:(0,r.jsx)(y.Z,{icon:"Remove"})})}),(0,r.jsx)(w.Z,{title:"B\xecnh thường",children:(0,r.jsx)(C.Z,{onClick:x,color:"inherit",children:(0,r.jsx)(y.Z,{icon:"Refresh"})})}),(0,r.jsx)(w.Z,{title:"Tăng cỡ chữ",children:(0,r.jsx)(C.Z,{onClick:h,color:"inherit",children:(0,r.jsx)(y.Z,{icon:"Add"})})}),(0,r.jsx)("style",{children:"\n          #".concat(t," {\n            font-size: ").concat(s,"px;\n          }\n        ")})]})};let E=e=>{let{sx:t={},icon:n="",text:i=""}=e;return i?(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",...t},children:[(0,r.jsx)(y.Z,{icon:n,sx:{mr:1}}),i]}):null};var S=e=>{let{author:t,date:n,views:i,targetId:o}=e;return(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",py:2},children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(E,{icon:"PersonOutlineRounded",text:t}),(0,r.jsx)(E,{icon:"ScheduleRounded",text:n,sx:{mx:2}}),(0,r.jsx)(E,{icon:"VisibilityRounded",text:i})]}),(0,r.jsx)(k,{targetId:o})]})},I=n(7484),L=n.n(I),N=e=>{var t;let{news:n,loading:a=!0}=e,x=(0,d.Z)();return((0,i.useEffect)(()=>{let e=e=>e.preventDefault(),t=e=>e.preventDefault();return document.addEventListener("copy",e),document.addEventListener("cut",e),document.addEventListener("contextmenu",t),()=>{document.removeEventListener("copy",e),document.removeEventListener("cut",e),document.removeEventListener("contextmenu",t)}},[]),a)?(0,r.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:(0,r.jsx)(o.Z,{})}):n?(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:n.title})}),(0,r.jsx)(u.Z,{src:"/videos/background-title.mp4",sx:{main:{height:"45vh"},title:{fontSize:"2.5rem"}},title:n.title}),(0,r.jsx)(l.Z,{sx:{background:x.palette.secondary.main,pb:4,pt:2},children:(0,r.jsxs)(s.Z,{maxWidth:"md",children:[(0,r.jsx)(S,{author:null!==(t=n.author)&&void 0!==t?t:"Phạm Quốc Đ\xf4ng",date:L()(n.updated).format("HH:mm DD/MM/YYYY"),targetId:"post-content"}),(0,r.jsx)(b,{post:n}),(0,r.jsx)(l.Z,{dangerouslySetInnerHTML:{__html:n.content},id:"post-content",sx:{mt:3,textIndent:"1.27cm"}})]})})]}):(0,r.jsx)(s.Z,{children:(0,r.jsx)(c.Z,{variant:"h4",component:"h1",children:"B\xe0i viết kh\xf4ng tồn tại"})})}}}]);