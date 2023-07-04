function e(e,o,t,r){Object.defineProperty(e,o,{get:t,set:r,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var o=s[e];delete s[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){s[e]=o},t.parcelRequired7c6=i),i.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return r},function(e){return r=e}),e(o.exports,"resolve",function(){return s},function(e){return s=e});var r,s,i={};r=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)i[o[t]]=e[o[t]]},s=function(e){var o=i[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),i("kyEFX").register(JSON.parse('{"nNIo9":"shopping-list.23ac4ce7.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png","lp5u4":"sprite.0f698750.svg"}'));var n={};n=new URL(i("kyEFX").resolve("97tcT"),import.meta.url).toString();var l={};l=new URL(i("kyEFX").resolve("k7kCw"),import.meta.url).toString();var a={};a=new URL(i("kyEFX").resolve("f4hA8"),import.meta.url).toString();var p={};p=new URL(i("kyEFX").resolve("9LXPn"),import.meta.url).toString();var c={};c=new URL(i("kyEFX").resolve("jHBX8"),import.meta.url).toString();var u={};u=new URL(i("kyEFX").resolve("aAS4V"),import.meta.url).toString();var d={};new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();var f=i("7Y9D8");const h={width:"300px",position:"center-top",borderRadius:"25px"},g={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},m="shopping-list",k=JSON.parse(localStorage.getItem(m))??[];function b(e){if(!e.length){g.emptyShoppinglistEl.style.display="block",(0,f.Notify).info("This page is empty, add some books and proceed to order.",h);return}!function(e){let t=e.map(({_id:e,book_image:t,title:r,list_name:s,description:i,author:d,buy_links:f})=>`
      <li id="${e}" class="shopping-list-item">
          <img class="sh-book-img" src="${t}" alt="Boook image"></img>
          <div class="sh-wrap">
              <div class="sh-book-info-wrap">
               <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18"<symbol id="icon-trash" viewBox="0 0 32 32">
                    <path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2" d="M12 4h8M4 8h24M25.334 8l-0.936 14.026c-0.14 2.104-0.21 3.156-0.664 3.954-0.406 0.703-0.997 1.259-1.709 1.61l-0.023 0.010c-0.826 0.4-1.88 0.4-3.99 0.4h-4.024c-2.11 0-3.164 0-3.99-0.4-0.735-0.361-1.326-0.917-1.722-1.601l-0.010-0.019c-0.454-0.798-0.524-1.85-0.664-3.954l-0.936-14.026M13.334 14v6.666M18.666 14v6.666"></path>
                    </symbol>
                    </svg>
                  </button>
                <h2 class="sh-book-title">${r}</h2>
                <p class="sh-book-category">${s}</p>
                <p class="sh-book-description">${""===i?`<p class="sh-book-description">Unfortunately,
      there is no description for this book</p>`:`<p class="sh-book-description">${i}</p>`}</p>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${d}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${f[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(n)} 1x, ${o(l)} 2x"
            src="${o(n)}" class="amazon-store"
            alt="Amazon Store ${f[0].name}"/>
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${f[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${o(a)} 1x, ${o(p)} 2x"
                            src="${o(a)}" class="apple-store"
                            alt="Apple Store ${f[1].name}"/>
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${f[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(c)} 1x, ${o(u)} 2x"
            src="${o(c)}" class="book-shop"
            alt="Book Shop ${f[4].name}"/>
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
              </li>
           `).join("\n");g.shoppingListEl.insertAdjacentHTML("beforeend",t)}(e)}b(k);const v=document.querySelector(".shopping-list");v.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName){let o=k.findIndex(o=>o._id===e.target.closest(".shopping-list-item").getAttribute("id"));console.log(o),-1!==o&&(k.splice(o,1),localStorage.setItem(m,JSON.stringify(k))),g.shoppingListEl.innerHTML="",b(k)}});
//# sourceMappingURL=shopping-list.23ac4ce7.js.map
