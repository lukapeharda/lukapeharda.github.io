(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(166),i=a(178),l=a(160);var s=function(){var e=["red","blue","green","yellow"],t=i.data;return o.a.createElement("div",{className:"flex flex-wrap -mx-4"},t.allBooksJson.edges.map(function(t,a){return o.a.createElement("div",{className:"w-full py-2 px-4",key:t.node.title},o.a.createElement("h3",null,o.a.createElement(l.OutboundLink,{className:"text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-"+e[a%4]+" hover:bg-e6n-"+e[a%4],href:t.node.url,title:t.node.title,target:"_blank"},t.node.title," ",o.a.createElement("span",{className:"text-sm text-gray-500"},"by ",t.node.author))),o.a.createElement("p",{className:"text-gray-100 light-mode:text-gray-600 mt-2"},t.node.description))}))},c=a(179);var d=function(){var e=["red","blue","green","yellow"],t=c.data;return o.a.createElement("div",{className:"flex flex-wrap -mx-4"},t.allPodcastsJson.edges.map(function(t,a){return o.a.createElement("div",{className:"w-full py-2 px-4",key:t.node.title},o.a.createElement("h3",null,o.a.createElement(l.OutboundLink,{className:"text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-"+e[a%4]+" hover:bg-e6n-"+e[a%4],href:t.node.url,title:t.node.title,target:"_blank"},t.node.title)),o.a.createElement("p",{className:"text-gray-100 light-mode:text-gray-600 mt-2"},t.node.description))}))},h=a(164);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(h.a,{title:"Recommendations",keywords:["luka","peharda","lukapeharda","lukapeharda.com","recommendations","books","podcasts"]}),o.a.createElement("div",{className:"h-full w-full p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white flex flex-wrap"},o.a.createElement("div",{className:"w-full md:w-1/2 md:pr-3"},o.a.createElement("h1",{className:"text-white light-mode:text-gray-800 text-4xl italic mb-4"},"Book recommendations"),o.a.createElement(s,null)),o.a.createElement("div",{className:"w-full md:w-1/2 md:pl-3"},o.a.createElement("h1",{className:"text-white light-mode:text-gray-800 text-4xl italic mb-4"},"Podcast recommendations"),o.a.createElement(d,null))))}},158:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(159);var c=o.a.createContext({}),d=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},161:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("svg",{className:"logo-container",width:e.width,height:e.height,viewBox:"0 0 90 100"},o.a.createElement("line",{x1:"10",y1:"34",x2:"10",y2:"95",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"9",y1:"95",x2:"55",y2:"95",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"55",y1:"96",x2:"55",y2:"80",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"56",y1:"80",x2:"25",y2:"80",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"25",y1:"81",x2:"25",y2:"35",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"26",y1:"35",x2:"11",y2:"35",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"40",y1:"4",x2:"40",y2:"65",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"39",y1:"65",x2:"55",y2:"65",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"55",y1:"66",x2:"55",y2:"45",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"54",y1:"45",x2:"80",y2:"45",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"80",y1:"46",x2:"80",y2:"5",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"81",y1:"5",x2:"41",y2:"5",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"55",y1:"19",x2:"55",y2:"30",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"54",y1:"30",x2:"65",y2:"30",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"65",y1:"31",x2:"65",y2:"20",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),o.a.createElement("line",{x1:"66",y1:"20",x2:"56",y2:"20",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}))}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"lukapeharda.com"}}}}},163:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){"use strict";var n=a(165),o=a(0),r=a.n(o),i=a(4),l=a.n(i),s=a(167),c=a.n(s),d=a(158);function h(e){var t=e.description,a=e.lang,o=e.meta,i=e.keywords,l=e.title;return r.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=h;var m="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"lukapeharda.com",description:"PHP & JS developer",author:"@lukapeharda"}}}}},166:function(e,t,a){"use strict";var n=a(162),o=a(0),r=a.n(o),i=a(4),l=a.n(i),s=a(158),c=a(161);function d(e){var t=Array.prototype.map.call(e.children,function(e){return e}),a=Object(o.useState)(t),n=a[0],i=a[1],l=Object(o.useState)(null),s=l[0],c=l[1],d=["text-e6n-red","text-e6n-blue","text-e6n-green","text-e6n-yellow"],h=function(e,t){void 0===t&&(t=4);for(var a=[];a.length<t;){var n=Math.floor(Math.random()*e);-1===a.indexOf(n)&&11!==n&&a.push(n)}return a};return r.a.createElement("span",{onMouseEnter:function(){c(setInterval(function(){var a=h(e.children.length,4);i(t.map(function(e,t){var n=a.indexOf(t);return-1!==n?r.a.createElement("span",{className:d[n],key:t},e):e}))},500))},onMouseLeave:function(e){clearInterval(s),i(t)}},n)}function h(e){var t=e.siteTitle,a=e.showLogo,n=Object(o.useState)(!1),i=n[0],l=n[1];return r.a.createElement("nav",{className:"bg-e6n-black light-mode:bg-white"},r.a.createElement("div",{className:"flex flex-wrap items-center justify-between p-4 md:p-8"},r.a.createElement(s.a,{to:"/",className:"flex items-center no-underline text-gray-500 light-mode:text-gray-800"},a?r.a.createElement("div",{className:"mr-6"},r.a.createElement(c.a,{width:"30",height:"30"})):null,r.a.createElement("span",{className:"text-xl tracking-tighter"},r.a.createElement(d,null,t))),r.a.createElement("button",{className:"block md:hidden flex items-center px-3 py-2 rounded text-white light-mode:text-gray-800 focus:outline-none",onClick:function(){return l(!i)}},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),r.a.createElement("div",{className:(i?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},r.a.createElement("nav",{className:"text-md",role:"menubar"},r.a.createElement(s.a,{to:"/",role:"menuitem",title:"Home",className:"block mt-4 p-2 md:inline-block md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"home"),r.a.createElement(s.a,{to:"/now/",role:"menuitem",title:"Now",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-blue hover:bg-e6n-blue hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"now"),r.a.createElement(s.a,{to:"/projects/",role:"menuitem",title:"Projects",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-yellow hover:bg-e6n-yellow hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"projects"),r.a.createElement(s.a,{to:"/articles/",role:"menuitem",title:"Articles",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-green hover:bg-e6n-green hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"articles"),r.a.createElement(s.a,{to:"/about/",role:"menuitem",title:"About",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"about")))))}h.propTypes={siteTitle:l.a.string,showLogo:l.a.bool},h.defaultProps={siteTitle:"",showLogo:!1};var m=h,u=a(160);var g=function(){return r.a.createElement("footer",{className:"flex justify-around md:justify-end p-5 bg-white"},r.a.createElement(u.OutboundLink,{href:"https://github.com/lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-red",target:"_blank"},r.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},r.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),r.a.createElement(u.OutboundLink,{href:"https://stackoverflow.com/users/1272781/luka-peharda",className:"md:px-4 block text-e6n-black hover:text-e6n-blue",target:"_blank"},r.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},r.a.createElement("path",{d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"}))),r.a.createElement(u.OutboundLink,{href:"https://medium.com/@lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-yellow",target:"_blank"},r.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"}))),r.a.createElement(u.OutboundLink,{href:"https://www.instagram.com/lukapeharda/",className:"md:px-4 block text-e6n-black hover:text-e6n-green",target:"_blank"},r.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),r.a.createElement(u.OutboundLink,{href:"https://twitter.com/lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-red",target:"_blank"},r.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),r.a.createElement(u.OutboundLink,{href:"https://www.linkedin.com/in/lukapeharda/",className:"md:px-4 block text-e6n-black hover:text-e6n-blue",target:"_blank"},r.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))))};function p(e){var t=e.children,a=e.showHeaderLogo;return r.a.createElement(s.b,{query:"2994927498",render:function(e){return r.a.createElement("div",{className:"flex h-screen flex-col bg-e6n-black light-mode:bg-white"},r.a.createElement(m,{siteTitle:"lukapeharda.com",showLogo:a}),r.a.createElement("div",{className:"flex-grow bg-e6n-black light-mode:bg-white"},t),r.a.createElement(g,null))},data:n})}p.propTypes={children:l.a.node.isRequired,showHeaderLogo:l.a.bool},p.defaultProps={showHeaderLogo:!1};t.a=p},178:function(e){e.exports={data:{allBooksJson:{edges:[{node:{url:"https://www.goodreads.com/book/show/58188742-how-to-live/",title:"How to Live: 27 conflicting answers and one weird conclusion",author:"Derek Sivers",description:'Extremely short book that you\'ll gulp down in one sitting. Each chapter/answer contradicts with one another which forces you to think really hard how to process it and adjust the ideas to fit within your context. And this is what it makes this book so amazing! My favourite chapter is definitely "Make a million mistakes".',recommendationYear:2021}},{node:{url:"https://www.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202",title:"Flow: The Psychology of Optimal Experience",author:"Mihaly Csikszentmihalyi",description:"The book was highly recommended by a lot of people and after reading it failed to grasp why. Maybe I couldn't get in its flow and couldn't appreciate it? :-) The book isn't bad, but I didn't find anything new that I haven't learned already. Perhaps it was such a big and worthy idea that many authors were inspired by. Maybe I've just started reading it too late.",recommendationYear:2021}},{node:{url:"https://www.goodreads.com/book/show/23168817-the-dark-forest",title:"The Dark Forest",author:"Liu Cixin",description:'The whole Three-Body triology is amazing and definitely worth reading and one of the better SF series in my opinion. "The Dark Forest" (second book in the series) contains one of the most memorable definition of love: "For the majority of people, what they love exists only in the imagination. The object of their love is not the man or woman of reality, but what he or she is like in their imagination. The person in reality is just a template used for the creation of this dream lover. Eventually, they find out the differences between their dream lover and the template. If they can get used to those differences, then they can be together. If not, they split up. It\'s as simple as that."',recommendationYear:2021}},{node:{url:"https://amzn.to/33XzwWk",title:"Radical Candor: Be a Kick-ass Boss Without Losing Your Humanity",author:"Kim Scott",description:"Whether you are a boss, or have one you need to read this book. Its simple framework of challenging directly and caring personally is really powerful. I've thought I was being radically candor when I was obnoxuiously aggressive and by reading this amazing book I now know the difference and how to progress from undesired behaviour to desired one.",recommendationYear:2020}},{node:{url:"https://amzn.to/3fFlNZe",title:"Anything You Want: 40 Lessons for a New Kind of Entrepreneur",author:"Derek Sivers",description:"This short book (which if you put your mind to it can be read in a couple of hours) is so filled with great advice that I implore you to read it multiple times. Derek Sivers, the creator of CD Baby is describing his success and his failures in a series of short lessons where each one has a great takeaway. Some of the best quotes for me are \"Success comes from persistently improving and inventing, not from persistently doing what's not working\" and \"No 'yes'. Either 'Hell yeah!' or 'no.'\"",recommendationYear:2020}},{node:{url:"https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805",title:"Never Split The Difference: Negotiating As If Your Life Depended On It",author:"Chris Voss",description:"One of the best books on the subject of negotiation with a lot of examples of how to use the knowledge in your daily life. Not just for negotiating hostage situations. I've been using some of the tips when I'm 'negotiating' dinner plans with my girlfriend and so far I've been 100% successful :-)",recommendationYear:2020}},{node:{url:"https://www.amazon.com/Tiny-Habits-Changes-Change-Everything/dp/0358003326",title:"Tiny Habits: The Small Changes That Change Everything",author:"BJ Fogg",description:"As I've read the Atomic Habits by James Clear earlier, I was aware of the importance of starting small but, I just wasn't aware how small (or tiny) can you go. The principle of B = MAP (behavior = motivation * ability * prompt) is explained in several ways in the book and the methods accompanying it are brilliant. There are 300 tiny habits and the end of the book to get inspired with and, they are very useful.",recommendationYear:2020}},{node:{url:"https://amzn.to/2C93VYd",title:"Influence: The Psychology of Persuassion",author:"Robert B. Cialdini",description:"I'd recommend it to anyone interested in influencing and persuading people to say yes. Principles explained in the book are not that unknown but are explained in detail. Explained how and why they work and are accompanied with great examples.",recommendationYear:2020}},{node:{url:"https://www.amazon.com/gp/product/1501135910/",title:"Shoe Dog: A Memoir by the Creator of NIKE",author:"Phil Knight",description:"Everybody and their grandma keep recommending this book. Both friends and influencers whose recommendation I usually like so I felt compelled to read it. To be frank I don't get what the fuss with this book is all about. There are definitely better biography / memoir books out there. Almost no mentioning of Jordan, Kobe or Tiger. Most of the book is focused on 'ancient' history when they were only re-selling other brands. I don't regret reading the book but nothing more than that.",recommendationYear:2020}},{node:{url:"https://amzn.to/35YJ9DS",title:"Atomic Habits",author:"James Clear",description:"Excellent book for those who want to learn how to form good habits easily or break bad ones. Also, its 1% compounding effect  description is amazing, inspirational and motivational.",recommendationYear:2019}},{node:{url:"https://amzn.to/2FVWcLt",title:"Why We Sleep",author:"Matthew Walker",description:"Highly recommended book to gain insights into sleep and its value. You'll re-think late night alcohol beverages, Netflix binges and staring at screens :) Somewhat disturbing facts which some articles already disproved so take everything with a grain of salt (or two).",recommendationYear:2019}},{node:{url:"https://amzn.to/38etG3V",title:"Sapiens: A brief history of humankind",author:"Yuval Noah Harari",description:"Interesting take on history of the world in which history and philosophy mix to create tantalizing read.",recommendationYear:2019}},{node:{url:"https://www.goodreads.com/book/show/43306206-the-courage-to-be-disliked",title:"The Courage to Be Disliked: How to Free Yourself, Change your Life and Achieve Real Happiness",author:"Ichiro Kishimi and Fumitake Koga",description:'This book is being called "Marie Condo for your brain" and I find this comparison very suitable :-) Two thoughts really resonated with me. The first one is "freedom is being disliked by other people" and the other is "happines is the feeling of contribution". So simple yet so deep.',recommendationYear:2019}}]}}}},179:function(e){e.exports={data:{allPodcastsJson:{edges:[{node:{url:"https://fs.blog/knowledge-project/matt-mullenweg/",title:"The Knowledge Project Podcast #100 with Matt Mullenweg",description:'Most Farnam Street (The Knowledge Project) podcast episodes are awesome but the one with Matt Mullenweg from WordPress stands out for me. They discuss remote work (Matt rather calls it distributed) and different levels of it. Matt\'s saying "Words create reality" was something that moved me unexpectedly and was real food for thought. And I can not get over how soothing Matt Mullenweg voice sounds :-)',recommendationYear:2021}},{node:{url:"https://fs.blog/knowledge-project/derek-sivers/",title:"The Knowledge Project Podcast #88 with Derek Sivers",description:'Derek Sivers is the bomb! He gives so many great nuggets here you\'ll have to listen to it at least twice. From his life philosophy, through book recommendations, to some intimate life details in a calm and rational matter. And all of this filled with jokes - he became minimalist because "he had to move houses couple of times" :-D',recommendationYear:2021}},{node:{url:"https://tim.blog/2021/11/15/balaji-srinivasan-2/",title:"The Tim Ferriss Show #547 with Balaji Srinivasan",description:"Definitely the episode with the highest ratio of wisdom per minute :-) My mind was blown when I heard the idea of using Bitcoin mining as energy storage for wind and solar! And after you listen to this episode, make sure to check the previous Tim Ferris episode with Balaji.",recommendationYear:2021}},{node:{url:"http://podcasts.joerogan.net/podcasts/naval-ravikant",title:"The Joe Rogan Experience #1309 with Naval Ravikant",description:"If you're not familiar with Naval Ravikant stop with what you're doing immediately and go listen to him being interviewed by a Joe Rogan on his podcast. It's 2 hours long but well worth it. Too many wisdom bits from Naval too summarise here.",recommendationYear:2019}},{node:{url:"https://www.npr.org/2017/10/03/545635014/live-episode-reddit-alexis-ohanian-steve-huffman",title:"How I Built This with Alexis Ohanian and Steve Huffman (of Reddit fame)",description:"Most of the HIBT episods are great but this one is special. Chemistry between Alexis and Steve exudes through headphones.",recommendationYear:2019}},{node:{url:"https://tim.blog/2015/12/14/derek-sivers-on-developing-confidence-finding-happiness-and-saying-no-to-millions/",title:"The Tim Ferriss Show with Derek Sivers (of CD Baby fame)",description:"Tim Ferris is an amazing host and almost every episode is worth listening to but the one with Derek Sivers is pure gold.",recommendationYear:2019}},{node:{url:"http://www.fullstackradio.com/",title:"Full Stack Radio",description:"Amazing podcasts for web developers where host Adam Wathan has awesome guests and asks all the right questions. I just can't single out any episode because all of them are interesing.",recommendationYear:2019}}]}}}}}]);
//# sourceMappingURL=component---src-pages-recommendations-js-76a7204de503f006743e.js.map