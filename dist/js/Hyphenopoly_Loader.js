/*! For license information please see Hyphenopoly_Loader.js.LICENSE.txt */
!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(r,o,a,i){"use strict";var s,l,c,f,u=function(e){return new Map(e)},d=function(t,n){return t?(i.entries(n).forEach((function(n){var r=e(n,2),o=r[0],a=r[1];t[o]=t[o]||a})),t):n},h=sessionStorage,p="Hyphenopoly_Loader.js",y=u(),m="createTextNode";a.cacheFeatureTests&&h.getItem(p)?(a.cf=JSON.parse(h.getItem(p)),a.cf.langs=u(a.cf.langs)):a.cf={langs:u(),pf:!1},c=(l=(s=o.currentScript.src).slice(0,s.lastIndexOf("/")+1))+"patterns/",a.paths=d(a.paths,{maindir:l,patterndir:c}),a.s=d(a.setup,{CORScredentials:"include",hide:"all",selectors:{".hyphenate":{}},timeout:1e3}),a.s.hide=["all","element","text"].indexOf(a.s.hide),f=u(i.entries(a.fallbacks||{})),i.entries(a.require).forEach((function(t){var n=e(t,2),r=n[0],o=n[1];y.set(r.toLowerCase(),{fn:f.get(r)||r,wo:o})}));var v=function(){var e=null,t=null,n=new Promise((function(n,r){e=n,t=r}));return n.resolve=e,n.reject=t,n},g=null;a.hide=function(e,t){if(0===e)g&&g.remove();else{var n="{visibility:hidden!important}";g=o.createElement("style");var r="";0===t?r="html"+n:i.keys(a.s.selectors).forEach((function(e){r+=1===t?e+n:e+"{color:transparent!important}"})),g.appendChild(o[m](r)),o.head.appendChild(g)}};var b,w=(b=null,{ap:function(){return b?(o.documentElement.appendChild(b),b):null},cl:function(){b&&b.remove()},cr:function(e){if(!a.cf.langs.has(e)){b=b||o.createElement("body");var t=o.createElement("div"),n="hyphens:auto";t.lang=e,t.style.cssText="visibility:hidden;-webkit-".concat(n,";-ms-").concat(n,";").concat(n,";width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal"),t.appendChild(o[m](y.get(e).wo.toLowerCase())),b.appendChild(t)}}});a.res={he:u()};var S=u(),O=function(e){var t=y.get(e).fn+".wasm";if(a.cf.pf=!0,a.cf.langs.set(e,"H9Y"),S.has(t)){var n=a.res.he.get(S.get(t));n.c=!0,a.res.he.set(e,n)}else a.res.he.set(e,{w:r.fetch(a.paths.patterndir+t,{credentials:a.s.CORScredentials})}),S.set(t,e)};y.forEach((function(e,t){"FORCEHYPHENOPOLY"===e.wo||"H9Y"===a.cf.langs.get(t)?O(t):w.cr(t)}));var E=w.ap();E&&(E.querySelectorAll("div").forEach((function(e){var t;"auto"===((t=e.style).hyphens||t.webkitHyphens||t.msHyphens)&&e.offsetHeight>12?a.cf.langs.set(e.lang,"CSS"):O(e.lang)})),w.cl());var C,H=a.handleEvent;if(a.cf.pf){a.res.DOM=new Promise((function(e){"loading"===o.readyState?o.addEventListener("DOMContentLoaded",e,{once:!0,passive:!0}):e()}));var j=a.s.hide;0===j&&a.hide(1,0),-1!==j&&(a.timeOutHandler=r.setTimeout((function(){a.hide(0,null),console.info(p+" timed out.")}),a.s.timeout)),a.res.DOM.then((function(){j>0&&a.hide(1,j)}));var x=o.createElement("script");x.src=a.paths.maindir+"Hyphenopoly.js",o.head.appendChild(x),a.hy6ors=u(),a.cf.langs.forEach((function(e,t){"H9Y"===e&&a.hy6ors.set(t,v())})),a.hy6ors.set("HTML",v()),a.hyphenators=new Proxy(a.hy6ors,{get:function(e,t){return e.get(t)},set:function(){return!0}}),H&&H.polyfill&&H.polyfill()}else H&&H.tearDown&&H.tearDown(),r.Hyphenopoly=null;a.cacheFeatureTests&&h.setItem(p,JSON.stringify({langs:(C=a.cf.langs.entries(),function(e){if(Array.isArray(e))return n(e)}(C)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(C)||t(C)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),pf:a.cf.pf}))}(window,document,Hyphenopoly,Object)}();