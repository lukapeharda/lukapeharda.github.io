(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(160),o=a(172),c=a.n(o),i=a(168),s=a(166),m=a(170);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Why wrapping 3rd-party calls to external services is always a good idea | by Luka Peharda",keywords:["refactoring","php","wrapping","api","external","facade","design","pattern","luka","peharda"],description:"When using a 3rd-party package that makes calls (or API requests) to an external service it is always a good idea to wrap 3rd-party service with a thin wrapper (Facade)."}),r.a.createElement("div",{className:"relative h-full w-full bg-e6n-black light-mode:bg-white"},r.a.createElement("div",{className:"xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0"},r.a.createElement("h1",{className:"text-white light-mode:text-gray-800 text-4xl italic mb-0"},"Why wrapping 3rd-party calls to external services is always a good idea"),r.a.createElement("div",{className:"text-gray-500 light-mode:text-gray-800 text-xs mb-4"},new Date("2022-03-31").toDateString()),r.a.createElement(m.d,null,"When using a 3rd-party package that makes calls (or API requests) to an external service it is always a good idea to wrap 3rd-party service with a thin wrapper (Facade). Why?"),r.a.createElement(m.d,null,"Wrapping it avoids vendor lock-in and tight coupling. Imagine that the API the 3rd-party is using stops working. Now you need to change service calls across your whole project. If wrapped, you only need to modify your code once."),r.a.createElement(m.d,null,"Another reason is that you can then build and setup the 3rd-party service (or the client) according to your requirements."),r.a.createElement(m.d,null,"Let me give you an example:"),r.a.createElement(c.a,{className:"language-php my-6"},"...\n\nuse Kourses\\Website;\nuse Mpociot\\VatCalculator\\VatCalculator;\n\n...\n\nclass VatHelper\n{\n    protected $calculator;\n\n    public function __construct(Website $website)\n    {\n        $calculator = new VatCalculator();\n        $calculator->setBusinessCountryCode($website->user->country);\n\n        $this->calculator = $calculator;\n    }\n\n    ...\n}"),r.a.createElement(m.d,null,"In my project, I'm using ",r.a.createElement("code",{className:"hljs-literal"},"driesvints/vat-calculator")," package to calculate VAT (value-added tax) rate and to validate the EU VAT number. EU VAT number validation is being done by calling an external API."),r.a.createElement(m.d,null,"As VAT rate calculation needs to take into account your business location, I need to provide the business country code when setting up the calculator. As a product I'm working on is a SaaS, I need to specify this param on each request and can't do it through configuration files (which this package supports). So I'm \"building\" up the VatCalculator according to my requirements."),r.a.createElement(m.d,null,"If I did not wrap this service, I would have to configure it each time I call it. Not a big deal I know, but this is a simple example."),r.a.createElement(m.b,null),r.a.createElement(m.d,null,'Besides doing a simple "wrapping" I\'ve added a couple of methods that slightly modify 3rd-party service behavior.'),r.a.createElement(c.a,{className:"language-php my-6"},'...\n\nuse KoursesMember;\nuse KoursesErrorsVatValidationException;\n\nuse Exception;\n\nclass VatHelper\n{\n    ...\n\n    public function isValidVatId(string $vatNumber): bool\n    {\n        try {\n            return $this->calculator->isValidVATNumber($vatNumber);\n        } catch (Exception $exception) {\n            throw new VatValidationException("VAT validation failed.", 500);\n        }\n    }\n\n    public function getTaxRate(string $countryCode, string $postalCode = null, string $vatNumber = null): float\n    {\n        $isCompany = $this->isValidVatId($vatNumber);\n\n        return $this->calculator->getTaxRateForLocation($countryCode, $postalCode, $isCompany);\n    }\n\n    public function getTaxRateForMember(Member $member): float\n    {\n        return $this->getTaxRate($member->country, $member->zip, $member->vat_id);\n    }\n}'),r.a.createElement(m.d,null,"In method ",r.a.createElement("code",{className:"hljs-literal"},"isValidVatId")," I'm catching a 3rd-party service exception and re-throwing it using a message (and code) that is in sync with my app. Now I don't need to catch 3rd-party package exceptions in my controllers."),r.a.createElement(m.d,null,"If I decide to change this 3rd-party package I wouldn't have to go through my code and change all mentions of this package."),r.a.createElement(m.d,null,"In ",r.a.createElement("code",{className:"hljs-literal"},"getTaxRate")," method, I've also slightly altered behavior which suits my flow better. I'm validating the VAT number before getting the tax rate for the user's location (as it is dependent on your business location as well as your customers' location)."),r.a.createElement(m.d,null,"Method ",r.a.createElement("code",{className:"hljs-literal"},"getTaxRateForMember")," is a simple helper which allows me to easily pass my ",r.a.createElement("code",{className:"hljs-literal"},"$member"),' object and get its current VAT rate without needing to "spread" required params.'),r.a.createElement(m.b,null),r.a.createElement(m.d,null,"Using this technique you could easily implement caching in front of external service calls if need be. Here, as the VAT number checked should be different each time I'm not doing that."),r.a.createElement(m.d,null,"This wrapper borrows from a Facade design pattern, a Proxy, and even a Decorator. If you wish to learn more about design patterns be sure to check out ",r.a.createElement(m.c,{href:"https://www.mrlacey.com/2020/07/youve-only-added-two-lines-why-did-that.html",color:"red"},"https://refactoring.guru/design-patterns")," as they have a nice overview of basic patterns as well as real-world examples."),r.a.createElement(m.b,null),r.a.createElement(m.d,null,"If you like this article consider ",r.a.createElement(m.f,{className:"border-b border-e6n-blue hover:bg-e6n-blue",text:"Why wrapping 3rd-party calls to external services is always a good idea on https://lukapeharda.com/article/why-wrapping-3rd-party-calls-to-external-service-is-always-a-good-idea by @lukapeharda"},"tweeting")," or check out my other ",r.a.createElement(l.a,{to:"/articles",className:"border-b border-e6n-red hover:bg-e6n-red"},"articles"),".")),r.a.createElement("div",{className:"absolute bg-white flex justify-around bottom-0 right-0"},r.a.createElement(l.a,{to:"/article/refactoring-optional-method-params/",className:"inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none",title:"How to Refactor a Method With Optional Params"},r.a.createElement("svg",{className:"fill-current",width:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"}))),r.a.createElement("a",{className:"inline-block p-6 text-e6n-black focus:outline-none cursor-not-allowed"},r.a.createElement("svg",{className:"fill-current",width:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"}))))))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(161);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("svg",{className:"logo-container",width:e.width,height:e.height,viewBox:"0 0 90 100"},r.a.createElement("line",{x1:"10",y1:"34",x2:"10",y2:"95",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"9",y1:"95",x2:"55",y2:"95",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"55",y1:"96",x2:"55",y2:"80",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"56",y1:"80",x2:"25",y2:"80",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"25",y1:"81",x2:"25",y2:"35",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"26",y1:"35",x2:"11",y2:"35",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"40",y1:"4",x2:"40",y2:"65",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"39",y1:"65",x2:"55",y2:"65",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"55",y1:"66",x2:"55",y2:"45",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"54",y1:"45",x2:"80",y2:"45",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"80",y1:"46",x2:"80",y2:"5",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"81",y1:"5",x2:"41",y2:"5",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"55",y1:"19",x2:"55",y2:"30",className:"line line--red",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"54",y1:"30",x2:"65",y2:"30",className:"line line--yellow",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"65",y1:"31",x2:"65",y2:"20",className:"line line--green",stroke:"currentColor",strokeWidth:"2"}),r.a.createElement("line",{x1:"66",y1:"20",x2:"56",y2:"20",className:"line line--blue",stroke:"currentColor",strokeWidth:"2"}))}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Luka Peharda - PHP & JS developer"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},166:function(e,t,a){"use strict";var n=a(167),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(169),s=a.n(i),m=a(160);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return l.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var u="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Luka Peharda - PHP & JS developer",description:"Web developer specializing in PHP & JS (JavaScript)",author:"@lukapeharda"}}}}},168:function(e,t,a){"use strict";var n=a(164),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(160),s=a(162);function m(e){var t=Array.prototype.map.call(e.children,function(e){return e}),a=Object(r.useState)(t),n=a[0],o=a[1],c=Object(r.useState)(null),i=c[0],s=c[1],m=["text-e6n-red","text-e6n-blue","text-e6n-green","text-e6n-yellow"],d=function(e,t){void 0===t&&(t=4);for(var a=[];a.length<t;){var n=Math.floor(Math.random()*e);-1===a.indexOf(n)&&11!==n&&a.push(n)}return a};return l.a.createElement("span",{onMouseEnter:function(){s(setInterval(function(){var a=d(e.children.length,4);o(t.map(function(e,t){var n=a.indexOf(t);return-1!==n?l.a.createElement("span",{className:m[n],key:t},e):e}))},500))},onMouseLeave:function(e){clearInterval(i),o(t)}},n)}function d(e){var t=e.siteTitle,a=e.showLogo,n=Object(r.useState)(!1),o=n[0],c=n[1];return l.a.createElement("nav",{className:"bg-e6n-black light-mode:bg-white"},l.a.createElement("div",{className:"flex flex-wrap items-center justify-between p-4 md:p-8"},l.a.createElement(i.a,{to:"/",className:"flex items-center no-underline text-gray-500 light-mode:text-gray-800"},a?l.a.createElement("div",{className:"mr-6"},l.a.createElement(s.a,{width:"30",height:"30"})):null,l.a.createElement("span",{className:"text-xl tracking-tighter"},l.a.createElement(m,null,t))),l.a.createElement("button",{className:"block md:hidden flex items-center px-3 py-2 rounded text-white light-mode:text-gray-800 focus:outline-none",onClick:function(){return c(!o)}},l.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),l.a.createElement("div",{className:(o?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},l.a.createElement("nav",{className:"text-md",role:"menubar"},l.a.createElement(i.a,{to:"/",role:"menuitem",title:"Home",className:"block mt-4 p-2 md:inline-block md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"home"),l.a.createElement(i.a,{to:"/now/",role:"menuitem",title:"Now",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-blue hover:bg-e6n-blue hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"now"),l.a.createElement(i.a,{to:"/projects/",role:"menuitem",title:"Projects",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-yellow hover:bg-e6n-yellow hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"projects"),l.a.createElement(i.a,{to:"/articles/",role:"menuitem",title:"Articles",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-green hover:bg-e6n-green hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"articles"),l.a.createElement(i.a,{to:"/about/",role:"menuitem",title:"About",className:"block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800",activeClassName:"nav-link--active"},"about")))))}d.propTypes={siteTitle:c.a.string,showLogo:c.a.bool},d.defaultProps={siteTitle:"",showLogo:!1};var u=d,h=a(163);var p=function(){return l.a.createElement("footer",{className:"flex justify-around md:justify-end p-5 bg-white"},l.a.createElement(h.OutboundLink,{href:"https://github.com/lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-red",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},l.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),l.a.createElement(h.OutboundLink,{href:"https://stackoverflow.com/users/1272781/luka-peharda",className:"md:px-4 block text-e6n-black hover:text-e6n-blue",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},l.a.createElement("path",{d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"}))),l.a.createElement(h.OutboundLink,{href:"https://medium.com/@lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-yellow",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"}))),l.a.createElement(h.OutboundLink,{href:"https://www.instagram.com/lukapeharda/",className:"md:px-4 block text-e6n-black hover:text-e6n-green",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),l.a.createElement(h.OutboundLink,{href:"https://twitter.com/lukapeharda",className:"md:px-4 block text-e6n-black hover:text-e6n-red",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),l.a.createElement(h.OutboundLink,{href:"https://www.linkedin.com/in/lukapeharda/",className:"md:px-4 block text-e6n-black hover:text-e6n-blue",target:"_blank"},l.a.createElement("svg",{className:"fill-current",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))))};function g(e){var t=e.children,a=e.showHeaderLogo;return l.a.createElement(i.b,{query:"2994927498",render:function(e){return l.a.createElement("div",{className:"flex h-screen flex-col bg-e6n-black light-mode:bg-white"},l.a.createElement(u,{siteTitle:"lukapeharda.com",showLogo:a}),l.a.createElement("div",{className:"flex-grow bg-e6n-black light-mode:bg-white"},t),l.a.createElement(p,null))},data:n})}g.propTypes={children:c.a.node.isRequired,showHeaderLogo:c.a.bool},g.defaultProps={showHeaderLogo:!1};t.a=g},170:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"a",function(){return u}),a.d(t,"e",function(){return s}),a.d(t,"b",function(){return m}),a.d(t,"f",function(){return d}),a.d(t,"c",function(){return h});a(34);var n=a(74),r=a.n(n),l=a(163),o=a(0),c=a.n(o);function i(e){var t=e.children;return c.a.createElement("p",{className:"text-gray-400 light-mode:text-gray-800 text-xl"},t)}function s(e){var t=e.children;return c.a.createElement("h2",{className:"text-white light-mode:text-gray-800 text-2xl italic mb-4"},t)}function m(){return c.a.createElement("div",{className:"text-white light-mode:text-gray-800 text-xl text-center my-4"},c.a.createElement("span",{className:"px-1"},"•"),c.a.createElement("span",{className:"px-1"},"•"),c.a.createElement("span",{className:"px-1"},"•"))}function d(e){var t=e.text,a=e.children,n=r()(e,["text","children"]);return c.a.createElement(l.OutboundLink,Object.assign({href:"https://twitter.com/intent/tweet?text="+encodeURI(t)},n,{target:"_blank"}),a)}function u(e){var t=e.children;return c.a.createElement("strong",{className:"bg-gray-700 light-mode:bg-gray-200"},t)}function h(e){var t=e.children,a=e.href,n=e.color;return c.a.createElement(l.OutboundLink,{href:a,target:"_blank",className:"border-b border-e6n-"+n+" hover:bg-e6n-"+n},t)}}}]);
//# sourceMappingURL=component---src-pages-article-why-wrapping-3rd-party-calls-to-external-service-is-always-a-good-idea-js-d0a3fbf6d26d8672aa10.js.map