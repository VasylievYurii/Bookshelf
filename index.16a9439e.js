!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("gGcLX"),i("bNmPK"),i("c3I2r"),i("9ujcy");var o=i("aYXpI"),r=i("eJu0s"),c=i("9ujcy"),u=(0,r.useBooksApi)(),l=document.querySelector(".category-list"),a=document.querySelector(".category-link"),f=document.querySelectorAll(".category-link"),s=function(e){var t=(0,o._)(new Set(e.map(function(e){return e.list_name}))).sort().map(function(e){if(null!=e)return'<li class="category-item list"><a class="category-link link" href="">'.concat(e,"</a></li>")}).join("");l.insertAdjacentHTML("beforeend",t),f.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),f.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})})};a.addEventListener("click",function(){(0,c.parceCategoriesBlocks)()}),u.getCategoryList().then(function(e){s(e)}).catch(function(e){console.log(e)}).finally(function(){}),i("jjftE"),i("xpKCW"),i("aISXF"),i("9v0r1");var d={},v=i("6aBn7"),p="Expected a function",y=0/0,m=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,b=/^0o[0-7]+$/i,j=parseInt,w="object"==typeof e&&e&&e.Object===Object&&e,L="object"==typeof self&&self&&self.Object===Object&&self,x=w||L||Function("return this")(),E=Object.prototype.toString,T=Math.max,O=Math.min,k=function(){return x.Date.now()};function S(e){var t=void 0===e?"undefined":(0,v._)(e);return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":(0,v._)(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==E.call(t))return y;if(S(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var i=h.test(e);return i||b.test(e)?j(e.slice(2),i?2:8):g.test(e)?y:+e}d=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(p);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,r,c,u,l,a=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw TypeError(p);function v(t){var n=i,r=o;return i=o=void 0,a=t,c=e.apply(r,n)}function y(e){var n=e-l,i=e-a;return void 0===l||n>=t||n<0||s&&i>=r}function m(){var e,n,i,o=k();if(y(o))return g(o);u=setTimeout(m,(e=o-l,n=o-a,i=t-e,s?O(i,r-n):i))}function g(e){return(u=void 0,d&&i)?v(e):(i=o=void 0,c)}function h(){var e,n=k(),r=y(n);if(i=arguments,o=this,l=n,r){if(void 0===u)return a=e=l,u=setTimeout(m,t),f?v(e):c;if(s)return u=setTimeout(m,t),v(l)}return void 0===u&&(u=setTimeout(m,t)),c}return t=_(t)||0,S(n)&&(f=!!n.leading,r=(s="maxWait"in n)?T(_(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==u&&clearTimeout(u),a=0,i=l=o=u=void 0},h.flush=function(){return void 0===u?c:g(k())},h}(e,t,{leading:i,maxWait:t,trailing:o})},({el:document.querySelector(".js-sroll-up"),show:function(){this.el.classList.remove("visually-hidden")},hide:function(){this.el.classList.add("visually-hidden")},scrollListener:function(){var e,t=this;window.addEventListener("scroll",((e=d)&&e.__esModule?e.default:e)(function(){500>(window.scrollY||document.documentElement.scrollTop)?t.hide():t.show()},300))}}).scrollListener(),i("7hKzD")}();
//# sourceMappingURL=index.16a9439e.js.map
