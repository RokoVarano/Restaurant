(()=>{"use strict";var n={192:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(15),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Dancing+Script&display=swap);"]),a.push([n.id,':root{font-family:"Dancing Script",cursive}p{font-family:"Amatic SC",cursive}h1{margin:0}h3{margin:0}.flex-mid-col{display:flex;justify-content:center;align-items:center;flex-direction:column}.divider{height:1.5em}body{margin:0;background-position:top right;background-size:cover}#main{padding:1.5em;width:90%}#main #header{height:20em;background-color:#cdb14086}#main #header h1{height:60%;font-size:1000%;margin:0;background-color:rgba(255,255,255,.616);width:100%}#main #header h3{height:40%;font-size:300%}#main #services{background:rgba(255,255,255,.616)}#main #services article{height:30em;margin:0 1.5em;justify-content:start;background-position:top right;background-size:cover;border:10px solid #cdb14086}#main #services article h3{height:40%;background-color:rgba(255,255,255,.616);font-size:260%;padding:.5em}#main #services article #dishes_h3{font-size:220%}#footer{background-color:#00000077;width:100%;bottom:0;left:0;font-family:"Amatic SC",cursive;font-size:200%;color:#fff}#footer #address{background-color:#00000077}#footer #address img{width:100%}#footer #contact{padding:0 1.5em;background-color:#00000077;list-style-type:none;margin-top:0}@media only screen and (min-width: 721px){#main #header h3{font-size:500%}#main #services article{flex-direction:row}#main #services article h3{height:70%;width:40%;background-color:rgba(255,255,255,.616);padding:1em;margin-left:5%}#main #services article #dishes_h3{font-size:220%}}',"",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAYA,MACE,oCARO,CAWT,EACE,+BAXO,CAcT,GACE,QAAA,CAGF,GACE,QAAA,CAGF,cACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA,CAGF,SACE,YAAA,CAGF,KACE,QAAA,CACA,6BAAA,CACA,qBAAA,CAGF,MACE,aAAA,CACA,SAAA,CAEA,cACE,WAAA,CACA,0BA3CS,CA6CT,iBACE,UAAA,CACA,eAAA,CACA,QAAA,CACA,uCAhDQ,CAiDR,UAAA,CAGF,iBACE,UAAA,CACA,cAAA,CAIJ,gBACE,iCA3DU,CA6DV,wBACE,WAAA,CACA,cAAA,CACA,qBAAA,CACA,6BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,2BACE,UAAA,CACA,uCAvEM,CAwEN,cAAA,CACA,YAAA,CAGF,mCACE,cAAA,CAMR,QACE,0BAnFkB,CAoFlB,UAAA,CACA,QAAA,CACA,MAAA,CACA,+BA3FO,CA4FP,cAAA,CACA,UAAA,CAEA,iBACE,0BA5FgB,CA8FhB,qBACE,UAAA,CAIJ,iBACE,eAAA,CACA,0BArGgB,CAsGhB,oBAAA,CACA,YAAA,CAMJ,0CAIM,iBACE,cAAA,CAKF,wBACE,kBAAA,CAEA,2BACE,UAAA,CACA,SAAA,CACA,uCA9HI,CA+HJ,WAAA,CACA,cAAA,CAGF,mCACE,cAAA,CAAA",sourcesContent:["@import 'styles/custom.scss';\n@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Dancing+Script&display=swap');\n\n//mobile\n\n$h-font: 'Dancing Script', cursive;\n$p-font: 'Amatic SC', cursive;\n\n$wood-color: #cdb14086;\n$milky-color: rgba(255, 255, 255, 0.616);\n$black-smoke-color: #00000077;\n\n:root {\n  font-family: $h-font;\n}\n\np {\n  font-family: $p-font;\n}\n\nh1 {\n  margin: 0;\n}\n\nh3 {\n  margin: 0;\n}\n\n.flex-mid-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.divider {\n  height: 1.5em;\n}\n\nbody {\n  margin: 0;\n  background-position: top right;\n  background-size: cover;\n}\n\n#main {\n  padding: 1.5em;\n  width: 90%;\n\n  #header {\n    height: 20em;\n    background-color: $wood-color;\n\n    h1 {\n      height: 60%;\n      font-size: 1000%;\n      margin: 0;\n      background-color: $milky-color;\n      width: 100%;\n    }\n\n    h3 {\n      height: 40%;\n      font-size: 300%;\n    }\n  }\n\n  #services {\n    background: $milky-color;\n\n    article {\n      height: 30em;\n      margin: 0 1.5em;\n      justify-content: start;\n      background-position: top right;\n      background-size: cover;\n      border: 10px solid $wood-color;\n\n      h3 {\n        height: 40%;\n        background-color: $milky-color;\n        font-size: 260%;\n        padding: 0.5em;\n      }\n\n      #dishes_h3 {\n        font-size: 220%;\n      }\n    }\n  }\n}\n\n#footer {\n  background-color: $black-smoke-color;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  font-family: $p-font;\n  font-size: 200%;\n  color: white;\n\n  #address {\n    background-color: $black-smoke-color;\n\n    img {\n      width: 100%;\n    }\n  }\n\n  #contact {\n    padding: 0 1.5em;\n    background-color: $black-smoke-color;\n    list-style-type: none;\n    margin-top: 0;\n  }\n}\n\n//full screen\n\n@media only screen and (min-width: 721px) {\n\n  #main{\n    #header {\n      h3 {\n        font-size: 500%;\n      }\n    }\n\n    #services {\n      article {\n        flex-direction: row;\n\n        h3 {\n          height: 70%;\n          width: 40%;\n          background-color: $milky-color;\n          padding: 1em;;\n          margin-left: 5%;\n        }\n\n        #dishes_h3 {\n          font-size: 220%;\n        }\n      }\n    }\n  }\n\n}"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var t,o,i=(o=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var o,i,r=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(n){c=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return r}}(t,o)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=i[1],a=i[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),d="/*# ".concat(s," */"),A=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[r].concat(A).concat([d]).join("\n")}return[r].join("\n")}},379:(n,e,t)=>{var o,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],i=0;i<n.length;i++){var c=n[i],s=e.base?c[0]+e.base:c[0],d=t[s]||0,A="".concat(s," ").concat(d);t[s]=d+1;var l=a(A),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(r[l].references++,r[l].updater(u)):r.push({identifier:A,updater:h(u,e),references:1}),o.push(A)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,A=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function l(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=A(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(n,e){var t,o,i;if(e.singleton){var r=f++;t=m||(m=s(e)),o=l.bind(null,t,r,!1),i=l.bind(null,t,r,!0)}else t=s(e),o=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=a(t[o]);r[i].references--}for(var s=c(n,e),d=0;d<t.length;d++){var A=a(t[d]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}t=s}}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(192);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=document,r=n=>{const e=i.createElement("div");e.classList.add("divider"),n.appendChild(e)},a=i.querySelector("body");a.style.backgroundImage="url(/pictures/a21a94dda48d30dd11e2d49c9a237632-jungle.jpg)",a.classList.add("flex-mid-col");const c=i.createElement("div");c.id="main",a.appendChild(c);const s=i.createElement("section");s.id="header",s.classList.add("flex-mid-col"),c.appendChild(s);const d=i.createElement("h1");d.id="header_h1",d.classList.add("flex-mid-col"),d.textContent="Aracne",s.appendChild(d);const A=i.createElement("h3");A.id="header_h3",A.classList.add("flex-mid-col"),A.textContent="Exotic arthropod cuisine",s.appendChild(A),r(c);const l=i.createElement("section");l.id="services",c.appendChild(l),r(l);const u=i.createElement("article");u.id="venues",u.classList.add("flex-mid-col"),u.style.backgroundImage="url(/pictures/964474da16cb496a4afee85a94ef610c-restaurant-dinner.jpg)",l.appendChild(u);const m=i.createElement("h3");m.id="venues_h3",m.textContent='"Ample, yet intimate dining rooms for couples and family groups."',u.appendChild(m),r(l);const f=i.createElement("article");f.id="dishes",f.classList.add("flex-mid-col"),f.style.backgroundImage="url(/pictures/9ef91bf57b3b55baab79c9caae98b30b-bugs.jpg)",l.appendChild(f);const h=i.createElement("h3");h.id="dishes_h3",h.textContent='"Exotic dishes featuring organicly grown insects and bugs, delicately served by international native chefs"',f.appendChild(h),r(l);const p=i.createElement("footer");p.id="footer",p.classList.add("flex-mid-col"),a.appendChild(p);const C=i.createElement("figure");C.id="address",C.classList.add("flex-mid-col"),p.appendChild(C);const g=i.createElement("img");g.id="add_map",g.src="/pictures/4dada955cae6fc13238e42d8cb345abf-map.png",C.appendChild(g);const b=i.createElement("figcaption");b.id="add_caption",b.textContent="Imaginary Street 123, NoWhere City",C.appendChild(b);const v=i.createElement("ul");v.id="contact",p.appendChild(v);const y=i.createElement("li");y.id="phone",y.textContent="Phone: +1 7893 8765",v.appendChild(y);const E=i.createElement("li");E.id="email",E.textContent="Email: aracne@jokemail.com",v.appendChild(E)})()})();
//# sourceMappingURL=index.js.map