function e(e,o,t,r){Object.defineProperty(e,o,{get:t,set:r,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in s){var o=s[e];delete s[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){s[e]=o},t.parcelRequired7c6=n),n.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return r},function(e){return r=e}),e(o.exports,"resolve",function(){return s},function(e){return s=e});var r,s,n={};r=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)n[o[t]]=e[o[t]]},s=function(e){var o=n[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),n("kyEFX").register(JSON.parse('{"nNIo9":"shopping-list.164cb28b.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png","lp5u4":"sprite.e7cc5e1a.svg"}'));var i={};i=new URL(n("kyEFX").resolve("97tcT"),import.meta.url).toString();var l={};l=new URL(n("kyEFX").resolve("k7kCw"),import.meta.url).toString();var a={};a=new URL(n("kyEFX").resolve("f4hA8"),import.meta.url).toString();var c={};c=new URL(n("kyEFX").resolve("9LXPn"),import.meta.url).toString();var p={};p=new URL(n("kyEFX").resolve("jHBX8"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("aAS4V"),import.meta.url).toString();var d={};d=new URL(n("kyEFX").resolve("lp5u4"),import.meta.url).toString();var g=n("7Y9D8");const f={timeout:3e3,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.3)",width:"500px",position:"center-center",borderRadius:"20px",opacity:.7,fontSize:"22px",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"zoom"},h={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},m="shopping-list",b=JSON.parse(localStorage.getItem(m))??[];function k(e){if(!e.length){h.emptyShoppinglistEl.style.display="block",(0,g.Notify).info("This page is empty, add some books and proceed to order.",f);return}!function(e){let t=e.map(({_id:e,book_image:t,title:r,list_name:s,description:n,author:g,buy_links:f})=>`
      <li id="${e}" class="shopping-list-item">
          <img class="sh-book-img" src="${t}" alt="Boook image" loading="lazy"></img>
          <div class="sh-wrap">
              <div class="sh-book-info-wrap">
               <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18">
                    <use href="${o(d)}#trash"></use>
                    </svg>
                  </button>
                <h2 class="sh-book-title">${r}</h2>
                <p class="sh-book-category">${s}</p>
                <div class="div-text-container">
                <p class="sh-book-description">${""===n?`<p class="sh-book-description">Unfortunately,
      there is no description for this book</p>`:n}</p>
                </div>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${g}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${f[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(i)} 1x, ${o(l)} 2x"
            src="${o(i)}" class="amazon-store"
            alt="Amazon Store ${f[0].name}"
            loading="lazy"
            />
            
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${f[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${o(a)} 1x, ${o(c)} 2x"
                            src="${o(a)}" class="apple-store"
                            alt="Apple Store ${f[1].name}"
                            loading="lazy"
                            />
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${f[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(p)} 1x, ${o(u)} 2x"
            src="${o(p)}" class="book-shop"
            alt="Book Shop ${f[4].name}"
            loading="lazy"
            />
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
              </li>
           `).join("\n");h.shoppingListEl.insertAdjacentHTML("beforeend",t)}(e)}k(b);const v=document.querySelector(".shopping-list");v.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"use"===e.target.nodeName){let o=b.findIndex(o=>o._id===e.target.closest(".shopping-list-item").getAttribute("id"));-1!==o&&(b.splice(o,1),localStorage.setItem(m,JSON.stringify(b))),h.shoppingListEl.innerHTML="",k(b)}});
//# sourceMappingURL=shopping-list.164cb28b.js.map
