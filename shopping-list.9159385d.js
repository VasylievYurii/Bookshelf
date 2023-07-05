function e(e,o,t,s){Object.defineProperty(e,o,{get:t,set:s,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in s)return s[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return s[e]=t,o.call(t.exports,t,t.exports),t.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){r[e]=o},t.parcelRequired7c6=l),l.register("4L0hS",function(o,t){e(o.exports,"getChangeStoreColor",function(){return i}),e(o.exports,"getStartThemeColor",function(){return a});let s=document.querySelector("body"),r="isDark",l=document.querySelector("#toggle-theme");l.addEventListener("click",i);let n=JSON.parse(localStorage.getItem(r))??!1;function a(){let e=s.dataset.pageTheme;if("dark"===e){let e=document.querySelectorAll(".amazon-store");e.forEach(e=>{e.classList.add("js-dark-mode-amazon")})}else{let e=document.querySelectorAll(".amazon-store");e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")});return}}function i(){n=JSON.parse(localStorage.getItem(r))??!1;let e=document.querySelectorAll(".amazon-store"),o=document.querySelectorAll(".apple-store");if(n){if(!n)return;e.forEach(e=>{e.classList.remove("js-dark-mode-amazon")})}else e.forEach(e=>{e.classList.add("js-dark-mode-amazon")});o.forEach(e=>{e.classList.toggle("book-modal")})}setTimeout(()=>{a()},0)}),l("kyEFX").register(JSON.parse('{"nNIo9":"shopping-list.9159385d.js","97tcT":"amazon.586f8e53.png","k7kCw":"amazon@2x.7e47b8dc.png","f4hA8":"book.652b354e.png","9LXPn":"book@2x.6f9bb191.png","jHBX8":"book-shop.2cbe462c.png","aAS4V":"book-shop@2x.3aa004fc.png","lp5u4":"sprite.e7cc5e1a.svg","B3clM":"index.01c73e05.js"}'));var n={};n=new URL(l("kyEFX").resolve("97tcT"),import.meta.url).toString();var a={};a=new URL(l("kyEFX").resolve("k7kCw"),import.meta.url).toString();var i={};i=new URL(l("kyEFX").resolve("f4hA8"),import.meta.url).toString();var c={};c=new URL(l("kyEFX").resolve("9LXPn"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("jHBX8"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("aAS4V"),import.meta.url).toString();var g={};g=new URL(l("kyEFX").resolve("lp5u4"),import.meta.url).toString();var u=l("7Y9D8"),m=l("a4dqv"),h=l("4L0hS");const f={clickToClose:!0},k={shoppingListEl:document.querySelector(".shopping-list"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},S="shopping-list",b=JSON.parse(localStorage.getItem(S))??[];function y(e){if(!e.length){k.emptyShoppinglistEl.style.display="block",(0,u.Notify).info("This page is empty, add some books and proceed to order.",f);return}!function(e){let t=e.map(({_id:e,book_image:t,title:s,list_name:r,description:l,author:u,buy_links:m})=>`
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
         <p class="sh-book-author">${u}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${m[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(n)} 1x, ${o(a)} 2x"
            src="${o(n)}" class="amazon-store"
            alt="Amazon Store ${m[0].name}"
            loading="lazy"
            />
            
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${m[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${o(i)} 1x, ${o(c)} 2x"
                            src="${o(i)}" class="apple-store"
                            alt="Apple Store ${m[1].name}"
                            loading="lazy"
                            />
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${m[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${o(p)} 1x, ${o(d)} 2x"
            src="${o(p)}" class="book-shop"
            alt="Book Shop ${m[4].name}"
            loading="lazy"
            />
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
          <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18">
                    <use href="${o(g)}#trash"></use>
                    </svg>
                  </button>
              </li>
           `).join("\n");k.shoppingListEl.insertAdjacentHTML("beforeend",t),(0,h.getStartThemeColor)(),(0,h.getChangeStoreColor)()}(e)}y(b);const v=document.querySelector(".shopping-list");v.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"use"===e.target.nodeName){let o=b.findIndex(o=>o._id===e.target.closest(".shopping-list-item").getAttribute("id"));-1!==o&&(b.splice(o,1),localStorage.setItem(S,JSON.stringify(b))),k.shoppingListEl.innerHTML="",y(b),(0,m.shopingListCounter)()}});
//# sourceMappingURL=shopping-list.9159385d.js.map
