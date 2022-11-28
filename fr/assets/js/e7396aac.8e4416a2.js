"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[1226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},l="Emplacement du menu",c={unversionedId:"category-uploading/category-textuploads/uploading",id:"category-uploading/category-textuploads/uploading",title:"Emplacement du menu",description:"Pour t\xe9l\xe9charger un message texte, cliquez sur l'ic\xf4ne de la plumesymbol  \xe0 c\xf4t\xe9 de la barre de recherche en haut de l'\xe9cran.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/category-uploading/category-textuploads/uploading.mdx",sourceDirName:"category-uploading/category-textuploads",slug:"/category-uploading/category-textuploads/uploading",permalink:"/fr/category-uploading/category-textuploads/uploading",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/category-uploading/category-textuploads/uploading.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"T\xe9l\xe9charger des messages texte",permalink:"/fr/category-uploading/category-textuploads/"},next:{title:"Param\xe8tres et personnalisation",permalink:"/fr/category-uploading/category-textuploads/settings"}},u={},i=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=p("Tabs"),d=p("TabItem"),m=p("OdyseeButtonRound"),g=p("OdyseeIcon"),y=p("Image"),b={toc:i};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"emplacement-du-menu"},"Emplacement du menu"),(0,o.kt)(s,{mdxType:"Tabs"},(0,o.kt)(d,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},"Pour t\xe9l\xe9charger un message texte, cliquez sur l'ic\xf4ne de la plumesymbol ",(0,o.kt)(m,{url:"https://odysee.com/$/post",mdxType:"OdyseeButtonRound"},(0,o.kt)(g,{type:"Post",mdxType:"OdyseeIcon"}))," \xe0 c\xf4t\xe9 de la barre de recherche en haut de l'\xe9cran.",(0,o.kt)(y,{img:"/img/fr/Plume.png",mdxType:"Image"})),(0,o.kt)(d,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Sur les appareils portables, le bouton ",(0,o.kt)("a",{href:"https://odysee.com/$/post"},(0,o.kt)(g,{type:"Post",mdxType:"OdyseeIcon"})," Post")," se trouve en bas de la barre lat\xe9rale d\xe9velopp\xe9e.  am unteren Rand der erweiterten Seitenleiste.",(0,o.kt)(y,{img:"/img/fr/Mpost.png",mdxType:"Image"}))),(0,o.kt)("p",null,"Pour t\xe9l\xe9charger un message texte, cliquez sur l'ic\xf4ne de la plume \xe0 c\xf4t\xe9 de la barre de recherche en haut de l'\xe9cran."),(0,o.kt)("p",null,"Sur les mobiles, ce bouton se trouve en bas de la barre lat\xe9rale \xe9tendue."))}f.isMDXComponent=!0}}]);