function e(e,o,t,s){Object.defineProperty(e,o,{get:t,set:s,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return s[e]=t,o.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){r[e]=o},t.parcelRequired7c6=n),n.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return s},function(e){return s=e}),e(o.exports,"resolve",function(){return r},function(e){return r=e});var s,r,n={};s=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)n[o[t]]=e[o[t]]},r=function(e){var o=n[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),n("kyEFX").register(JSON.parse('{"66xiC":"shopping-list.751f15a7.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png","lp5u4":"sprite.e7cc5e1a.svg","lDQYA":"index.3c63ce73.css","anZRM":"index.a7898fa6.js","9bqMc":"index.4857a981.js"}')),n("2wbaf"),n("4dIBK"),n("gBkxD"),n("dTazW"),n("4EhXu");var l={};l=new URL(n("kyEFX").resolve("97tcT"),import.meta.url).toString();var i={};i=new URL(n("kyEFX").resolve("k7kCw"),import.meta.url).toString();var a={};a=new URL(n("kyEFX").resolve("f4hA8"),import.meta.url).toString();var c={};c=new URL(n("kyEFX").resolve("9LXPn"),import.meta.url).toString();var d={};d=new URL(n("kyEFX").resolve("jHBX8"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("aAS4V"),import.meta.url).toString();var p={};p=new URL(n("kyEFX").resolve("lp5u4"),import.meta.url).toString();var m=n("a4dqv");const f=document.querySelector("body"),h="isDark",g=document.querySelector("#toggle-theme");g.addEventListener("click",function(){k=JSON.parse(localStorage.getItem(h))??!1;let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");if(k){if(!k)return;e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")})}else e.forEach(e=>{e.classList.add("js-dark-mode-amazon")});if(k){if(!k)return;o.forEach(e=>{e.classList.remove("book-modal")})}else o.forEach(e=>{e.classList.add("book-modal")})});let k=JSON.parse(localStorage.getItem(h))??!1;function b(){let e=f.dataset.pageTheme;if("dark"===e){let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");o.forEach(e=>{e.classList.remove("book-modal")}),e.forEach(e=>{e.classList.add("js-dark-mode-amazon")})}if("light"===e){let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")}),o.forEach(e=>{e.classList.remove("book-modal")});return}}setTimeout(()=>{b()},0);const v={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},S="shopping-list",y=JSON.parse(localStorage.getItem(S))??[];function E(e){if(!e.length){v.emptyShoppinglistEl.style.display="block";return}!function(e){let t=e.map(({_id:e,book_image:t,title:s,list_name:r,description:n,author:m,buy_links:f})=>`
      <li id="${e}" class="shopping-list-item">
          <img class="sh-book-img" src="${t}" alt="Boook image" loading="lazy"></img>
          <div class="sh-wrap">
              <div class="sh-book-info-wrap">
               
                <h2 class="sh-book-title">${s}</h2>
                <p class="sh-book-category">${r}</p>
                <div class="div-text-container">
                <p class="sh-book-description">${""===n?`<p class="sh-book-description">Unfortunately,
      there is no description for this book</p>`:n}</p>
                </div>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${m}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item js-dark-mode-apple">
                              <a class="sh-soc-link" href="${f[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(l)} 1x, ${o(i)} 2x"
            src="${o(l)}" class="book-stores amazon-store"
            alt="Amazon Store ${f[0].name}"
            loading="lazy"
            />
                              </a>
                            </li>
                            <li class="sh-soc-item ">
                              <a class="sh-soc-link" href="${f[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${o(a)} 1x, ${o(c)} 2x"
                            src="${o(a)}" class="book-stores apple-store"
                            alt="Apple Store ${f[1].name}"
                            loading="lazy"
                            />
                             </a>
                            </li>
                           <li class="sh-soc-item ">
                          <a class="sh-soc-link" href="${f[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(d)} 1x, ${o(u)} 2x"
            src="${o(d)}" class="book-stores book-shop"
            alt="Book Shop ${f[4].name}"
            loading="lazy"
            />
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
          <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18">
                    <use href="${o(p)}#trash"></use>
                    </svg>
                  </button>
              </li>
           `).join("\n");v.shoppingListEl.innerHTML=t,setTimeout(()=>{b()},0)}(e)}E(y);const _=document.querySelector(".shopping-list");_.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"use"===e.target.nodeName){let o=y.findIndex(o=>o._id===e.target.closest(".shopping-list-item").getAttribute("id"));-1!==o&&(y.splice(o,1),localStorage.setItem(S,JSON.stringify(y))),v.shoppingListEl.innerHTML="",E(y),(0,m.shopingListCounter)()}}),n("fMzCF"),n("74Aiq"),n("epHO8");var L=n("9OeKo");function w(){let e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return{width:e}}function H(){let e=w(),o=document.querySelector(".sidebar");e.width<1440?o.classList.add("visually-hidden"):o.classList.remove("visually-hidden")}w(),H(),window.addEventListener("resize",o(L)(H,500));const A=document.querySelector(".header-shopping-link");A.classList.add("current");
//# sourceMappingURL=shopping-list.751f15a7.js.map
