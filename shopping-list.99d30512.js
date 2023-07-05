function e(e,o,t,r){Object.defineProperty(e,o,{get:t,set:r,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in s){var o=s[e];delete s[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){s[e]=o},t.parcelRequired7c6=l),l.register("4L0hS",function(o,t){e(o.exports,"getChangeStoreColor",function(){return i}),e(o.exports,"getStartThemeColor",function(){return n});let r=document.querySelector("body"),s="isDark",l=document.querySelector("#toggle-theme");l.addEventListener("click",i);let a=JSON.parse(localStorage.getItem(s))??!1;function n(){let e=r.dataset.pageTheme;if("dark"===e){let e=document.querySelectorAll(".amazon-store");e.forEach(e=>{e.classList.add("js-dark-mode-amazon")})}else{let e=document.querySelectorAll(".amazon-store");e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")});return}}function i(){a=JSON.parse(localStorage.getItem(s))??!1;let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");if(a){if(!a)return;e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")})}else e.forEach(e=>{e.classList.add("js-dark-mode-amazon")});o.forEach(e=>{e.classList.toggle("book-modal")})}setTimeout(()=>{n()},0)}),l("kyEFX").register(JSON.parse('{"nNIo9":"shopping-list.99d30512.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png","lp5u4":"sprite.e7cc5e1a.svg","eRVU4":"index.ac7262cc.js"}'));var a={};a=new URL(l("kyEFX").resolve("97tcT"),import.meta.url).toString();var n={};n=new URL(l("kyEFX").resolve("k7kCw"),import.meta.url).toString();var i={};i=new URL(l("kyEFX").resolve("f4hA8"),import.meta.url).toString();var c={};c=new URL(l("kyEFX").resolve("9LXPn"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("jHBX8"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("aAS4V"),import.meta.url).toString();var m={};m=new URL(l("kyEFX").resolve("lp5u4"),import.meta.url).toString();var g=l("7Y9D8"),u=l("4L0hS");const h={timeout:3e3,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.3)",width:"500px",position:"center-center",borderRadius:"20px",opacity:.7,fontSize:"22px",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"zoom"},f={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},k="shopping-list",S=JSON.parse(localStorage.getItem(k))??[];function b(e){if(!e.length){f.emptyShoppinglistEl.style.display="block",(0,g.Notify).info("This page is empty, add some books and proceed to order.",h);return}!function(e){let t=e.map(({_id:e,book_image:t,title:r,list_name:s,description:l,author:g,buy_links:u})=>`
      <li id="${e}" class="shopping-list-item">
          <img class="sh-book-img" src="${t}" alt="Boook image" loading="lazy"></img>
          <div class="sh-wrap">
              <div class="sh-book-info-wrap">
               <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18">
                    <use href="${o(m)}#trash"></use>
                    </svg>
                  </button>
                <h2 class="sh-book-title">${r}</h2>
                <p class="sh-book-category">${s}</p>
                <div class="div-text-container">
                <p class="sh-book-description">${""===l?`<p class="sh-book-description">Unfortunately,
      there is no description for this book</p>`:l}</p>
                </div>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${g}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${u[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(a)} 1x, ${o(n)} 2x"
            src="${o(a)}" class="amazon-store"
            alt="Amazon Store ${u[0].name}"
            loading="lazy"
            />
            
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${u[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${o(i)} 1x, ${o(c)} 2x"
                            src="${o(i)}" class="apple-store"
                            alt="Apple Store ${u[1].name}"
                            loading="lazy"
                            />
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${u[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(p)} 1x, ${o(d)} 2x"
            src="${o(p)}" class="book-shop"
            alt="Book Shop ${u[4].name}"
            loading="lazy"
            />
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
              </li>
           `).join("\n");f.shoppingListEl.insertAdjacentHTML("beforeend",t),(0,u.getStartThemeColor)(),(0,u.getChangeStoreColor)()}(e)}b(S);const y=document.querySelector(".shopping-list");y.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"use"===e.target.nodeName){let o=S.findIndex(o=>o._id===e.target.closest(".shopping-list-item").getAttribute("id"));-1!==o&&(S.splice(o,1),localStorage.setItem(k,JSON.stringify(S))),f.shoppingListEl.innerHTML="",b(S)}});
//# sourceMappingURL=shopping-list.99d30512.js.map
