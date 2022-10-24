"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[628],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7579),o=(n(9496),n(9613));const l={sidebar_position:2},a="D\xe9veloppement",i={unversionedId:"DoluMappingTool/development",id:"DoluMappingTool/development",title:"D\xe9veloppement",description:"Les \xe9tapes suivante vous demanderont certaines connaissances mais vous aurez toute les options r\xe9centes et exp\xe9rimentales.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/DoluMappingTool/development.md",sourceDirName:"DoluMappingTool",slug:"/DoluMappingTool/development",permalink:"/fr/docs/DoluMappingTool/development",draft:!1,editUrl:"https://github.com/dolu/dolu.github.io/tree/main/docs/DoluMappingTool/development.md",tags:[],version:"current",lastUpdatedAt:1666621522,formattedLastUpdatedAt:"24 oct. 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/fr/docs/DoluMappingTool/installation"},next:{title:"Credits",permalink:"/fr/docs/DoluMappingTool/credits"}},p={},s=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"Installation des d\xe9pendences &amp; Mise en place",id:"installation-des-d\xe9pendences--mise-en-place",level:3},{value:"Compiler le NUI",id:"compiler-le-nui",level:3},{value:"Ecouter les fichiers",id:"ecouter-les-fichiers",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d\xe9veloppement"},"D\xe9veloppement"),(0,o.kt)("p",null,"Les \xe9tapes suivante vous demanderont certaines connaissances mais vous aurez toute les options r\xe9centes et exp\xe9rimentales."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vous aurez tout de m\xeame besoin de la d\xe9pendance ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_lib/releases/latest"},"ox_lib")," !")),(0,o.kt)("h3",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://git-scm.com/"},"Git")),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/"},"Node"))," (LTS),"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pnpm.io/installation"},"pnpm")))),(0,o.kt)("h3",{id:"installation-des-d\xe9pendences--mise-en-place"},"Installation des d\xe9pendences & Mise en place"),(0,o.kt)("p",null,"Clonez le d\xe9pot dans votre dossier resources sous le nom ",(0,o.kt)("inlineCode",{parentName:"p"},"DoluMappingTool"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/dolutattoo/DoluMappingTool.git\n")),(0,o.kt)("p",null,"Naviguez vers le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"DoluMappingTool/web")," et installez les d\xe9pendances pour le NUI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ./web\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm i\n")),(0,o.kt)("h3",{id:"compiler-le-nui"},"Compiler le NUI"),(0,o.kt)("p",null,"Pour compiler le NUI, executer cette commande depuis le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"DoluMappingTool/web"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm build\n")),(0,o.kt)("h3",{id:"ecouter-les-fichiers"},"Ecouter les fichiers"),(0,o.kt)("p",null,"Si vous ne souhaitez pas recompiler \xe0 chaque changements, vous pouvez \xe9galement \xe9couter les fichiers d\xe8s qu'ils sont sauvegard\xe9s apr\xe8s modification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm start:game\n")))}c.isMDXComponent=!0}}]);