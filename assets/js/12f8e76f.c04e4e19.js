"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9145],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7579),r=(n(9496),n(9613));const a={sidebar_position:1},l="Installation",i={unversionedId:"DoluMappingTool/installation",id:"DoluMappingTool/installation",title:"Installation",description:"If you want to build the project yourself, you can refer to Development",source:"@site/docs/DoluMappingTool/installation.md",sourceDirName:"DoluMappingTool",slug:"/DoluMappingTool/installation",permalink:"/docs/DoluMappingTool/installation",draft:!1,editUrl:"https://github.com/dolu/dolu.github.io/tree/main/docs/DoluMappingTool/installation.md",tags:[],version:"current",lastUpdatedAt:1666799891,formattedLastUpdatedAt:"Oct 26, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DoluMappingTool",permalink:"/docs/category/dolumappingtool"},next:{title:"Configuration",permalink:"/docs/DoluMappingTool/configuration"}},p={},u=[{value:"Downloads",id:"downloads",level:2},{value:"Install",id:"install",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"If you want to build the project yourself, you can refer to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://dolutattoo.github.io/docs/DoluMappingTool/development"},"Development"))),(0,r.kt)("h2",{id:"downloads"},"Downloads"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_lib/releases/latest"},"ox_lib"))," (required dependency!)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/dolutattoo/DoluMappingTool/releases/latest"},"DoluMappingTool")))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unzip ",(0,r.kt)("inlineCode",{parentName:"li"},"ox_lib.zip")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DoluMappingTool.zip")," files,"),(0,r.kt)("li",{parentName:"ul"},"Put ",(0,r.kt)("inlineCode",{parentName:"li"},"ox_lib")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DoluMappingTool")," folders into your ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," folder,"),(0,r.kt)("li",{parentName:"ul"},"Add this to your ",(0,r.kt)("inlineCode",{parentName:"li"},"server.cfg")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  ensure ox_lib\n  ensure DoluMappingTool\n")),(0,r.kt)("p",null,"You can now go to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://dolutattoo.github.io/docs/DoluMappingTool/configuration"},"configuration"))))}c.isMDXComponent=!0}}]);