var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("2wbaf"),n("4dIBK");var l=n("d5eID"),a=n("fMzCF");const c=(0,l.useBooksApi)(),i=document.querySelector(".section-categories"),s=document.querySelector(".section-books"),r=document.querySelector(".section-books-title"),d=document.querySelector(".section-books-list");function u(e,t){let o=t?"element-books-list-all":"element-books-list",n=e.map(({book_image:e,title:t,author:n,_id:l})=>`<li class="${o}">
    <a class='book-item' data-value="${l}">
      <div class='thumb'>
        <img src='${e}' alt='Book cover' />
        <div class='overlay'>
          <p class='overlay-text'>quick view </p>
        </div>
      </div>
      <h3 class='book-title'>${t}</h3>
      <p class='book-author'>${n}</p>
    </a>
  </li>`).join("\n");return n}async function f(e){try{let t=await c.getBooksByCategory(e);d.innerHTML=u(t,!0),r.innerHTML=function(e){let t=e.split(" ");if(t.length<2)return`${e}`;let o=t.pop();return`${t.join(" ")} <span class="accent">${o}</span>`}(e),function(e){e.classList.add("hidden")}(i),function(e){e.classList.remove("hidden")}(s),d.addEventListener("click",g)}catch(e){console.log(e)}}function g(e){let t=e.target.closest(".book-item");if(!t)return;let o=t.getAttribute("data-value");c.getBookById(o).then(a.insertModalBook).catch(e=>console.log(e)),(0,a.onModalOpen)()}var l=n("d5eID");const y=(0,l.useBooksApi)(),k=document.querySelector(".section-categories-list");function m(e){if(e.preventDefault(),"BUTTON"===e.target.nodeName){let t=e.target.closest(".category-block").getAttribute("data-category");f(t);return}}!async function(){try{let e=await y.getCategoryList(),t=[...new Set(e.map(({list_name:e})=>e))].sort();k.innerHTML=function(e){let t=e.map(e=>`<li class='category-block' data-category="${e}">
      <h3 class='category-block-title'>${e}</h3>
      <ul class='books-list' data-category="${e}"></ul>
      <button type='button' class='btn' >See more</button>
      </li>`).join("\n");return t}(t);let o=k.querySelectorAll(".books-list"),n=await y.getTopBooks();o.forEach(e=>{let t=e.dataset.category,o=n.find(e=>e.list_name===t).books;e.innerHTML=u(o)}),k.addEventListener("click",g),k.addEventListener("click",m)}catch(e){console.log(e)}}();var l=n("d5eID");const p=(0,l.useBooksApi)(),b=document.querySelector(".category-list"),v=document.querySelectorAll(".category-link");document.querySelector(".category-item");const h=e=>{let t=[...new Set(e.map(({list_name:e})=>e))].sort(),o=t.map(e=>{if(null!=e)return`
      <li class="category-item list">
      <a class="category-link link" href="#">${e}</a>
      </li>`}).join("");b.insertAdjacentHTML("beforeend",o),v.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),v.forEach(e=>e.classList.remove("active")),e.classList.add("active")})})};p.getCategoryList().then(e=>{h(e)}).catch(e=>{console.log(e)}).finally(()=>{}),b.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".category-link");if(!t)return;let o=t.textContent.trim();if("All categories"===o){let e=document.querySelector(".section-books");e.classList.add("hidden");let t=document.querySelector(".section-categories");t.classList.remove("hidden")}else f(o)}),n("ld1e2"),n("dTazW"),n("4EhXu"),n("fMzCF"),n("74Aiq"),n("epHO8");const L=document.querySelector(".header-link-home");L.classList.add("current");
//# sourceMappingURL=index.865e04de.js.map
