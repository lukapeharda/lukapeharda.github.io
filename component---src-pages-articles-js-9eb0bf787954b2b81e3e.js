(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(160),o=a(158),s=a(168),i=a(157);var c=function(){var e=["red","blue","green","yellow"],t=Object(r.useState)(0),a=t[0],l=t[1],o=s.data,c=Math.ceil(o.allArticlesJson.edges.length/6),d=o.allArticlesJson.edges.slice(6*a,6*a+6);return n.a.createElement("div",{className:"h-full w-full relative p-4 md:p-8"},n.a.createElement("h1",{className:"text-white text-4xl italic"},"Articles"),n.a.createElement("div",{className:"flex flex-wrap -mx-4 mb-12 pb-8"},d.map(function(t,a){return n.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/3 py-2 px-4",key:t.node.id},n.a.createElement("h3",null,n.a.createElement(i.OutboundLink,{className:"text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-"+e[a%4]+" hover:bg-e6n-"+e[a%4],href:t.node.url,title:t.node.title,target:"_blank"},t.node.title)),n.a.createElement("div",{className:"text-gray-500 light-mode:text-gray-800 text-xs mt-2"},new Date(t.node.date).toDateString()),n.a.createElement("p",{className:"text-gray-100 light-mode:text-gray-600 mt-2"},t.node.excerpt))})),n.a.createElement("div",{className:"absolute bottom-0 left-0 m-4 md:m-8"},n.a.createElement("span",{className:"text-gray-500 light-mode:text-gray-800"},"Page "+(a+1)+" of "+c)),n.a.createElement("div",{className:"absolute bg-white flex justify-around bottom-0 right-0"},n.a.createElement("button",{type:"button",className:"inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none",onClick:function(){l(a>0?a-1:c-1)}},n.a.createElement("svg",{className:"fill-current",width:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"}))),n.a.createElement("button",{type:"button",className:"inline-block p-6 text-e6n-black hover:text-e6n-blue focus:outline-none",onClick:function(){l(a<c-1?a+1:0)}},n.a.createElement("svg",{className:"fill-current",width:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"})))))};t.default=function(){return n.a.createElement(l.a,null,n.a.createElement(o.a,{title:"Articles",keywords:["lukapeharda","lukapeharda.com","articles"]}),n.a.createElement(c,null))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),l=a(4),o=a.n(l),s=a(33),i=a.n(s);a.d(t,"a",function(){return i.a});a(153);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},154:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("svg",{className:"logo-container",width:e.width,height:e.height,viewBox:"0 0 90 100"},n.a.createElement("line",{x1:"10",y1:"34",x2:"10",y2:"95",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"9",y1:"95",x2:"55",y2:"95",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"55",y1:"96",x2:"55",y2:"80",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"56",y1:"80",x2:"25",y2:"80",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"25",y1:"81",x2:"25",y2:"35",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"26",y1:"35",x2:"11",y2:"35",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"40",y1:"4",x2:"40",y2:"65",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"39",y1:"65",x2:"55",y2:"65",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"55",y1:"66",x2:"55",y2:"45",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"54",y1:"45",x2:"80",y2:"45",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"80",y1:"46",x2:"80",y2:"5",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"81",y1:"5",x2:"41",y2:"5",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"55",y1:"19",x2:"55",y2:"30",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"54",y1:"30",x2:"65",y2:"30",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"65",y1:"31",x2:"65",y2:"20",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),n.a.createElement("line",{x1:"66",y1:"20",x2:"56",y2:"20",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}))}},155:function(e){e.exports={data:{site:{siteMetadata:{title:"lukapeharda.com"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),l=a(4),o=a.n(l),s=a(55),i=a(2),c=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";var r=a(159),n=a(0),l=a.n(n),o=a(4),s=a.n(o),i=a(161),c=a.n(i),d=a(152);function m(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return l.a.createElement(d.b,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var u="1025518380"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"lukapeharda.com",description:"PHP & JS developer",author:"@lukapeharda"}}}}},160:function(e,t,a){"use strict";var r=a(155),n=a(0),l=a.n(n),o=a(4),s=a.n(o),i=a(152),c=a(154);function d(e){var t=Array.prototype.map.call(e.children,function(e){return e}),a=Object(n.useState)(t),r=a[0],o=a[1],s=Object(n.useState)(null),i=s[0],c=s[1],d=["text-e6n-red","text-e6n-blue","text-e6n-green","text-e6n-yellow"],m=function(e,t){void 0===t&&(t=4);for(var a=[];a.length<t;){var r=Math.floor(Math.random()*e);-1===a.indexOf(r)&&11!==r&&a.push(r)}return a};return l.a.createElement("span",{onMouseEnter:function(){c(setInterval(function(){var a=m(e.children.length,4);o(t.map(function(e,t){var r=a.indexOf(t);return-1!==r?l.a.createElement("span",{className:d[r],key:t},e):e}))},500))},onMouseLeave:function(e){clearInterval(i),o(t)}},r)}function m(e){var t=e.siteTitle,a=e.showLogo,r=Object(n.useState)(!1),o=r[0],s=r[1];return l.a.createElement("nav",{className:"bg-e6n-black light-mode:bg-white"},l.a.createElement("div",{className:"flex flex-wrap items-center justify-between p-4 md:p-8"},l.a.createElement(i.a,{to:"/",className:"flex items-center no-underline text-gray-500 light-mode:text-gray-800"},a?l.a.createElement("div",{className:"mr-6"},l.a.createElement(c.a,{width:"30",height:"30"})):null,l.a.createElement("span",{className:"text-xl tracking-tighter"},l.a.createElement(d,null,t))),l.a.createElement("button",{className:"block md:hidden flex items-center px-3 py-2 rounded text-white light-mode:text-gray-800 focus:outline-none",onClick:function(){return s(!o)}},l.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),l.a.createElement("div",{className:(o?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},l.a.createElement("div",{className:"text-md"},l.a.createElement(i.a,{to:"/",className:"block mt-4 p-2 md:inline-block md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"home"),l.a.createElement(i.a,{to:"/now/",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-blue hover:bg-e6n-blue hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"now"),l.a.createElement(i.a,{to:"/projects/",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-yellow hover:bg-e6n-yellow hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"projects"),l.a.createElement(i.a,{to:"/articles/",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-green hover:bg-e6n-green hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"articles"),l.a.createElement(i.a,{to:"/about/",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"about")))))}m.propTypes={siteTitle:s.a.string,showLogo:s.a.bool},m.defaultProps={siteTitle:"",showLogo:!1};var u=m,h=a(157);var p=function(){return l.a.createElement("footer",{className:"flex justify-around md:justify-end p-5 bg-white"},l.a.createElement(h.OutboundLink,{href:"https://github.com/lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-red",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},l.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),l.a.createElement(h.OutboundLink,{href:"https://stackoverflow.com/users/1272781/luka-peharda",className:"md:px-4 block text-e6n-black hover:text-e6n-blue",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},l.a.createElement("path",{d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"}))),l.a.createElement(h.OutboundLink,{href:"https://medium.com/@lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-yellow",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"}))),l.a.createElement(h.OutboundLink,{href:"https://www.instagram.com/lukapeharda/",className:"md:px-4 block text-e6n-black hover:text-e6n-green",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),l.a.createElement(h.OutboundLink,{href:"https://twitter.com/lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-red",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),l.a.createElement(h.OutboundLink,{href:"https://www.linkedin.com/in/lukapeharda/",className:"md:px-4 block text-e6n-black hover:text-e6n-blue",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))))};function g(e){var t=e.children,a=e.showHeaderLogo;return l.a.createElement(i.b,{query:"2994927498",render:function(e){return l.a.createElement("div",{className:"flex h-screen flex-col bg-e6n-black light-mode:bg-white"},l.a.createElement(u,{siteTitle:"lukapeharda.com",showLogo:a}),l.a.createElement("div",{className:"flex-grow bg-e6n-black light-mode:bg-white"},t),l.a.createElement(p,null))},data:r})}g.propTypes={children:s.a.node.isRequired,showHeaderLogo:s.a.bool},g.defaultProps={showHeaderLogo:!1};t.a=g},168:function(e){e.exports={data:{allArticlesJson:{edges:[{node:{id:"interesting-reads-volume-9",url:"https://medium.com/@lukapeharda/interesting-reads-volume-9-3a39fda84274",title:"Interesting reads — volume #9",excerpt:"I know you’ve been impatiently waiting for this month’s installment of Interesting Reads. Again, a collection of mostly PHP, Laravel, WordPress and JavaScript links but there should be something for everybody to enjoy.",date:"2020-03-30"}},{node:{id:"interesting-reads-volume-8",url:"https://medium.com/@lukapeharda/interesting-reads-volume-8-4a6f7a5cbfa1",title:"Interesting reads — volume #8",excerpt:"A lot of WordPress, Laravel and JavaScript articles and tips this month. Even though they are showcased in some framework or an app (what would you call a WordPress, a framework, or an app, or maybe both?) most of its principles are universal and can be applied to different programming languages and frameworks.",date:"2020-02-27"}},{node:{id:"interesting-reads-volume-7",url:"https://medium.com/@lukapeharda/interesting-reads-volume-7-f2f5299febb0",title:"Interesting reads — volume #7",excerpt:"Good news, by popular demand (wink wink Zvonko) I’m continuing with Interesting reads. I know what you’re thinking — your year could not have started with better news than this :D",date:"2020-01-31"}},{node:{id:"interesting-reads-volume-6",url:"https://medium.com/@lukapeharda/interesting-reads-volume-6-fa97b98a8a3",title:"Interesting reads — volume #6",excerpt:"In this volume, there are a couple of interesting articles related to WordPress and Laravel as well as JavaScript ones (plus few goodies and scare pieces).",date:"2018-01-17"}},{node:{id:"interesting-reads-volume-5",url:"https://medium.com/@lukapeharda/interesting-reads-volume-5-702049027fdc",title:"Interesting reads — volume #5",excerpt:"In this volume we have a few WordPress articles, a bit of CSS, Go, PHP, React, SVG and a lot of boilerplates and starter kits, seasoned with some AI (ML and CV). FTW :)",date:"2017-05-19"}},{node:{id:"interesting-reads-volume-4",url:"https://medium.com/@lukapeharda/interesting-reads-volume-4-427d0ca245c4",title:"Interesting reads — volume #4",excerpt:"Ahoy, dear reads. It seems that time of the month has come again! Yes, you are correct — it is time for the new edition of Interesting reads. Although I’m trying to write one on a weekly basis, days just keep slipping away from me.",date:"2017-04-03"}},{node:{id:"interesting-reads-volume-3",url:"https://medium.com/@lukapeharda/interesting-reads-volume-3-3335cdfac70b",title:"Interesting reads — volume #3",excerpt:"Greeting readers! Volume 3 has been in the making for the last month or so. Not because there wasn’t something to report home about, but due to my busy schedule and the snowboarding trip that I went to :)",date:"2017-03-17"}},{node:{id:"interesting-reads-volume-2",url:"https://medium.com/@lukapeharda/interesting-reads-volume-2-f11c147badee",title:"Interesting reads — volume #2",excerpt:"Another issue of interesting links & reads. Removed 'weekly' from email because it seems I'm unable to stay on schedule.",date:"2017-02-10"}},{node:{id:"my-first-wordpress-website",url:"https://medium.com/@lukapeharda/my-first-wordpress-website-9a1387402015",title:"My first WordPress website",excerpt:"T'was the summer of 2009. when I got approached to create a WordPress based website for a small company. That ended up being my first WordPress project.",date:"2017-01-27"}},{node:{id:"interesting-reads-week-1",url:"https://medium.com/@lukapeharda/interesting-reads-week-1-5195e56d54a8",title:"Interesting reads - week #1",excerpt:"Soooooo, I‘m thinking of doing some sort of weekly compilation of interesting articles and contents found on the web from web developers perspective.",date:"2017-01-12"}},{node:{id:"wordpress-menu-disappeared-saving",url:"https://www.codeforest.net/wordpress-menu-disappeared-saving",title:"WordPress issue: menu disappeared after saving",excerpt:'Recently I\'ve ran into a serious pickle - WordPress menu disappeared on me after adding new items and clicking on "Save menu" button.',date:"2015-07-29"}},{node:{id:"wordpress-tip-show-posts-no-category-term",url:"https://www.codeforest.net/wordpress-tip-show-posts-no-category-term",title:"WordPress tip: Show posts without any category or even custom term",excerpt:"Recently I needed to show posts that weren't in any of the categories (for my custom archive page). It is a very common problem that you encounter when adding new custom post types to WordPress.",date:"2015-01-30"}},{node:{id:"catch-callbacks-wordpress-admin",url:"https://www.codeforest.net/catch-callbacks-wordpress-admin",title:"WordPress tip: Catching callbacks in admin",excerpt:"Useful WordPress hook that allows you to catch callbacks in WordPress admin.",date:"2013-08-06"}},{node:{id:"creating-simple-tasks-app-with-backbone-js-and-slim-micro-framework",url:"https://www.codeforest.net/creating-simple-tasks-app-with-backbone-js-and-slim-micro-framework-part-1",title:"Creating simple tasks app with Backbone.js and Slim micro framework",excerpt:"In a series of articles I’ll create simple task management web application based on Backbone.js. To save data and persist it to database I’ll use Slim PHP micro RESTful server.",date:"2013-04-16"}},{node:{id:"android-json-rpc-client-and-php-zend-framework-server",url:"https://www.codeforest.net/android-json-rpc-client-and-php-zend-framework-server",title:"Android JSON-RPC client and PHP Zend Framework server",excerpt:"XML-RPC rules, but the amount of data it generates is its big disadvantage. This is where JSON-RPC steps in. Data it generates is significally smaller, this isn’t suprising as JSON is known as fat free XML.",date:"2011-06-11"}},{node:{id:"how-to-build-php-xml-rpc-server-client-and-android-app",url:"https://www.codeforest.net/how-to-build-php-xml-rpc-server-client-and-android-app",title:"How to build PHP XML-RPC server, client and Android application",excerpt:"This article will show how to build PHP XML RPC server and how to consume provided services with PHP and an Android application as a client. PHP side of things will be built on top of Zend Framework and for Android will be using very thin XML RPC library android-xmlrpc.",date:"2011-03-23"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-articles-js-9eb0bf787954b2b81e3e.js.map