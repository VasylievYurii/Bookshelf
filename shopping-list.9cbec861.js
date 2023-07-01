var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},l=s.parcelRequired7c6;null==l&&((l=function(s){if(s in e)return e[s].exports;if(s in i){var l=i[s];delete i[s];var o={id:s,exports:{}};return e[s]=o,l.call(o.exports,o,o.exports),o.exports}var t=Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(s,e){i[s]=e},s.parcelRequired7c6=l),(0,l("d5eID").useBooksApi)();const o={shoppingListEl:document.querySelector(".sh-list-container"),shoppingListLink:document.querySelector(".header-sh-list-link"),emptyShoppinglistEl:document.querySelector(".empty-sh-list")},t=JSON.parse(localStorage.getItem("shopping-list"))??[];!function(s){s||(o.shoppingListEl.innerHTML="",o.emptyShoppinglistEl.style.visibility="visible",alert("This page is empty, add some books and proceed to order.")),o.shoppingListEl.innerHTML=function(s){let e=s.map(({_id:s,book_image:e,title:i,list_name:l,description:o,author:t,buy_links:n})=>`<ul class="shopping-list">
      <li id="${s}" class="shopping-item">
        <img class="sh-book-img" src="${e}" alt="" width="330" height="485"></img>
        <h2 class="sh-book-title">${i}</h2>
        <p class="sh-book-category">${l}</p>
        <p class="sh-book-description">${o}</p>
        <p class="sh-book-author">${t}</p>
        <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${n.url}">
                                <svg class="sh-soc-icon">
                                  <use href=""></use>
                                </svg>
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${n.url}">
                                <svg class="sh-soc-icon">
                                  <use href=""></use>
                                </svg>
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${n.url}">
                            <svg class="sh-soc-icon">
                              <use href=""></use>
                         </svg>
                         </a>
                       </li>
                      </ul>
              </li>
            </ul>`).join("\n");return e}(s)}(t);
//# sourceMappingURL=shopping-list.9cbec861.js.map
