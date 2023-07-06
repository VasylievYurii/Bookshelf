function e(e,o,t,s){Object.defineProperty(e,o,{get:t,set:s,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in s)return s[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return s[e]=t,o.call(t.exports,t,t.exports),t.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){r[e]=o},t.parcelRequired7c6=l),l.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return s},function(e){return s=e}),e(o.exports,"resolve",function(){return r},function(e){return r=e});var s,r,l={};s=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)l[o[t]]=e[o[t]]},r=function(e){var o=l[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),l("kyEFX").register(JSON.parse('{"66xiC":"shopping-list.eb3c9400.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png","lp5u4":"sprite.e7cc5e1a.svg","lDQYA":"index.3c63ce73.css","A8TfY":"index.d71c119f.js","4Gpcy":"index.3a631804.js"}')),l("2wbaf"),l("4dIBK"),l("gBkxD"),l("dTazW"),l("4EhXu");var n={};n=new URL(l("kyEFX").resolve("97tcT"),import.meta.url).toString();var i={};i=new URL(l("kyEFX").resolve("k7kCw"),import.meta.url).toString();var a={};a=new URL(l("kyEFX").resolve("f4hA8"),import.meta.url).toString();var c={};c=new URL(l("kyEFX").resolve("9LXPn"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("jHBX8"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("aAS4V"),import.meta.url).toString();var u={};u=new URL(l("kyEFX").resolve("lp5u4"),import.meta.url).toString();var m=l("7Y9D8"),f=l("a4dqv");const h=document.querySelector("body"),g="isDark",k=document.querySelector("#toggle-theme");k.addEventListener("click",function(){b=JSON.parse(localStorage.getItem(g))??!1;let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");if(b){if(!b)return;e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")})}else e.forEach(e=>{e.classList.add("js-dark-mode-amazon")});if(b){if(!b)return;o.forEach(e=>{e.classList.remove("book-modal")})}else o.forEach(e=>{e.classList.add("book-modal")})});let b=JSON.parse(localStorage.getItem(g))??!1;function v(){let e=h.dataset.pageTheme;if("dark"===e){let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");o.forEach(e=>{e.classList.remove("book-modal")}),e.forEach(e=>{e.classList.add("js-dark-mode-amazon")})}if("light"===e){let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")}),o.forEach(e=>{e.classList.remove("book-modal")});return}}setTimeout(()=>{v()},0);const y={clickToClose:!0},S={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},E="shopping-list",_=JSON.parse(localStorage.getItem(E))??[];function L(e){if(!e.length){S.emptyShoppinglistEl.style.display="block",(0,m.Notify).info("This page is empty, add some books and proceed to order.",y);return}!function(e){let t=e.map(({_id:e,book_image:t,title:s,list_name:r,description:l,author:m,buy_links:f})=>`
      <li id="${e}" class="shopping-list-item">
          <img class="sh-book-img" src="${t}" alt="Boook image" loading="lazy"></img>
          <div class="sh-wrap">
              <div class="sh-book-info-wrap">
               
                <h2 class="sh-book-title">${s}</h2>
                <p class="sh-book-category">${r}</p>
                <div class="div-text-container">
                <p class="sh-book-description">${""===l?`<p class="sh-book-description">Unfortunately,
      there is no description for this book</p>`:l}</p>
                </div>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${m}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item js-dark-mode-apple">
                              <a class="sh-soc-link" href="${f[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(n)} 1x, ${o(i)} 2x"
            src="${o(n)}" class="book-stores amazon-store"
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
            <img srcset="${o(d)} 1x, ${o(p)} 2x"
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
                    <use href="${o(u)}#trash"></use>
                    </svg>
                  </button>
              </li>
           `).join("\n");S.shoppingListEl.innerHTML=t,setTimeout(()=>{v()},0)}(e)}L(_);const w=document.querySelector(".shopping-list");w.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"use"===e.target.nodeName){let o=_.findIndex(o=>o._id===e.target.closest(".shopping-list-item").getAttribute("id"));-1!==o&&(_.splice(o,1),localStorage.setItem(E,JSON.stringify(_))),S.shoppingListEl.innerHTML="",L(_),(0,f.shopingListCounter)()}}),l("fMzCF"),l("74Aiq"),l("epHO8");var A=l("9OeKo");function H(){let e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return{width:e}}function x(){let e=H(),o=document.querySelector(".sidebar");e.width<1440?o.classList.add("visually-hidden"):o.classList.remove("visually-hidden")}H(),x(),window.addEventListener("resize",o(A)(x,500));const F=document.querySelector(".header-shopping-link");F.classList.add("current");
//# sourceMappingURL=shopping-list.eb3c9400.js.map
