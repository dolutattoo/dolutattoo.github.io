"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[416],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(7579),o=(n(9496),n(9613));const l={sidebar_position:3},i="Development",a={unversionedId:"DoluMappingTool/development",id:"DoluMappingTool/development",title:"Development",description:"The next steps will require some knowledges but provides you all latest and experimental features.",source:"@site/docs/DoluMappingTool/development.md",sourceDirName:"DoluMappingTool",slug:"/DoluMappingTool/development",permalink:"/docs/DoluMappingTool/development",draft:!1,editUrl:"https://github.com/dolu/dolu.github.io/tree/main/docs/DoluMappingTool/development.md",tags:[],version:"current",lastUpdatedAt:1666624581,formattedLastUpdatedAt:"Oct 24, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/DoluMappingTool/features"},next:{title:"Credits",permalink:"/docs/DoluMappingTool/credits"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Dependencies &amp; Setup",id:"installing-dependencies--setup",level:3},{value:"Building NUI",id:"building-nui",level:3},{value:"Watching files",id:"watching-files",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("p",null,"The next steps will require some knowledges but provides you all latest and experimental features."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You still need to install ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_lib/releases/latest"},"ox_lib")," dependency!")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://git-scm.com/"},"Git")),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/"},"Node"))," (LTS),"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pnpm.io/installation"},"pnpm")))),(0,o.kt)("h3",{id:"installing-dependencies--setup"},"Installing Dependencies & Setup"),(0,o.kt)("p",null,"Clone the repository into your resources folder with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"DoluMappingTool"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/dolutattoo/DoluMappingTool.git\n")),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"DoluMappingTool/web")," folder and install dependencies for NUI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ./web\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm i\n")),(0,o.kt)("h3",{id:"building-nui"},"Building NUI"),(0,o.kt)("p",null,"To build the NUI, run this from ",(0,o.kt)("inlineCode",{parentName:"p"},"DoluMappingTool/web")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm build\n")),(0,o.kt)("h3",{id:"watching-files"},"Watching files"),(0,o.kt)("p",null,"If you don't want to rebuild all the time, you can also watch files which will write to disk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm start:game\n")))}d.isMDXComponent=!0}}]);