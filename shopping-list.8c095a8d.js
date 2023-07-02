function e(e,o,t,r){Object.defineProperty(e,o,{get:t,set:r,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in s){var o=s[e];delete s[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){s[e]=o},t.parcelRequired7c6=n),n.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return r},function(e){return r=e}),e(o.exports,"resolve",function(){return s},function(e){return s=e});var r,s,n={};r=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)n[o[t]]=e[o[t]]},s=function(e){var o=n[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),n("kyEFX").register(JSON.parse('{"nNIo9":"shopping-list.8c095a8d.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png"}'));var i=n("d5eID"),l={};l=new URL(n("kyEFX").resolve("97tcT"),import.meta.url).toString();var a={};a=new URL(n("kyEFX").resolve("k7kCw"),import.meta.url).toString();var c={};c=new URL(n("kyEFX").resolve("f4hA8"),import.meta.url).toString();var p={};p=new URL(n("kyEFX").resolve("9LXPn"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("jHBX8"),import.meta.url).toString();var h={};h=new URL(n("kyEFX").resolve("aAS4V"),import.meta.url).toString();var f=n("7Y9D8");const d={width:"300px",position:"center-top",borderRadius:"25px"};(0,i.useBooksApi)();const g={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},k=JSON.parse(localStorage.getItem("shopping-list"))??[];!function(e){if(!e.length){g.emptyShoppinglistEl.style.display="block",(0,f.Notify).info("This page is empty, add some books and proceed to order.",d);return}!function(e){let t=e.map(({_id:e,book_image:t,title:r,list_name:s,description:n,author:i,buy_links:f})=>`
      <li id="${e}" class="shopping-list-item">
          <img class="sh-book-img" src="${t}" alt="" width="330" height="485"></img>
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
                <p class="sh-book-description">${n}</p>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${i}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${f[0].url}" rel="noopener noreferrer nofollow"
            target="_blank"> 
            <img srcset="${o(l)} 1x, ${o(a)} 2x" 
            src="${o(l)}" class="amazon-store"
            alt="Amazon Store ${f[0].name}"/>
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${f[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${o(c)} 1x, ${o(p)} 2x" 
                            src="${o(c)}" class="apple-store"
                            alt="Apple Store ${f[1].name}"/>
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${f[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(u)} 1x, ${o(h)} 2x" 
            src="${o(u)}" class="book-shop"
            alt="Book Shop ${f[4].name}"/>
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
    
      
              </li>
           `).join("\n");g.shoppingListEl.insertAdjacentHTML("beforeend",t)}(e)}(k);
//# sourceMappingURL=shopping-list.8c095a8d.js.map
