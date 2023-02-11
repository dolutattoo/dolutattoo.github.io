"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7358],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7579),o=(n(9496),n(9613));const a={sidebar_position:3},i="Configuration",l={unversionedId:"dolu_hud/configuration",id:"dolu_hud/configuration",title:"Configuration",description:"Configuration file is config.json.",source:"@site/docs/dolu_hud/configuration.md",sourceDirName:"dolu_hud",slug:"/dolu_hud/configuration",permalink:"/fr/docs/dolu_hud/configuration",draft:!1,editUrl:"https://github.com/dolu/dolu.github.io/tree/main/docs/dolu_hud/configuration.md",tags:[],version:"current",lastUpdatedAt:1676158218,formattedLastUpdatedAt:"11 f\xe9vr. 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/fr/docs/dolu_hud/installation"},next:{title:"Development",permalink:"/fr/docs/dolu_hud/development"}},s={},u=[],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuration file is ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," does not allow comments, here is the config description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "debug": false, // Set 1 for basic print debugs, or 2 for all print debugs\n  "speedo": true, // Enable or disable Hud while in car\n  "hideRadarOnFoot": true, // Enable or disable minimap while not in a vehicle\n  "speedoMetrics": "kmh", // kmh or mph ?\n  "seatbeltKey": "K", // Toggle the seatbelt while in vehicle. Prevent player to fly trough windscreen.\n  "setMaxHealth": true, // Force max player health to 200. Female and most of peds have less than 200 by default\n  "colors": { // Colors can be found here: https://mantine.dev/theming/colors/#default-colors\n    "health": "teal",\n    "armour": "blue",\n    "voice": "gray.2",\n    "oxygen": "cyan",\n    "speedo": "teal",\n    "hunger": "yellow",\n    "thirst": "cyan.4",\n    "stress": "orange",\n    "drunk": "grape"\n  }\n}\n{\n  "debug": false, // Set 1 for basic print debugs, or 2 for all print debugs\n  "speedo": true, // Enable or disable Hud while in car\n  "topScreenInfo": true, // Enable/disable top right informations\n  "hideRadarOnFoot": true, // Enable or disable minimap while not in a vehicle\n  "speedoMetrics": "kmh", // kmh or mph ?\n  "seatbeltKey": "B", // Toggle the seatbelt while in vehicle. Prevent player to fly trough windscreen\n  "setMaxHealth": true, // Force max player health to 200. Female and most of peds have less than 200 by default\n  "damagePedIfLowStatuses": { // Apply damages to ped if low statuses (< 5%)\n    "enabled": true,\n    "rate": 1500, // How often player should be damaged in miliseconds\n    "amount": 1 // How much damage should applied each time\n  },\n  "setStatusesAfterDeath": { // Set the status after player death\n    "enabled": true,\n    "hunger": 50,\n    "thirst": 50,\n    "stress": 0,\n    "drunk": 0\n  }\n}\n')))}c.isMDXComponent=!0}}]);