var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("2wbaf"),n("4dIBK");var l=n("d5eID"),i=n("fMzCF");const a=(0,l.useBooksApi)(),s=document.querySelector(".section-categories"),c=document.querySelector(".section-books"),r=document.querySelector(".section-books-title"),d=document.querySelector(".section-books-list");function u(e){let t=e.map(({book_image:e,title:t,author:o,_id:n})=>`<li class="element-books-list">
    <a href='#' class='book-item' data-value="${n}">
      <div class='thumb'>
        <img src='${e}' alt='Book cover' />
        <div class='overlay'>
          <p class='overlay-text'>quick view </p>
        </div>
      </div>
      <h3 class='book-title'>${t}</h3>
      <p class='book-author'>${o}</p>
    </a>
  </li>`).join("\n");return t}async function f(e){try{let t=await a.getBooksByCategory(e);d.innerHTML=u(t),r.innerHTML=function(e){let t=e.split(" ");if(t.length<2)return`${e}`;let o=t.pop();return`${t.join(" ")} <span class="accent">${o}</span>`}(e),function(e){e.classList.add("hidden")}(s),function(e){e.classList.remove("hidden")}(c),d.addEventListener("click",g)}catch(e){console.log(e)}}function g(e){let t=e.target.closest(".book-item");if(!t)return;let o=t.getAttribute("data-value");a.getBookById(o).then(i.insertModalBook).catch(e=>console.log(e)),(0,i.onModalOpen)()}var l=n("d5eID");const y=(0,l.useBooksApi)(),k=document.querySelector(".section-categories-list");async function p(){try{let e=await y.getCategoryList(),t=[...new Set(e.map(({list_name:e})=>e))].sort();k.innerHTML=function(e){let t=e.map(e=>`<li class='category-block'>
      <h3 class='category-block-title'>${e}</h3>
      <ul class='books-list' data-category="${e}"></ul>
      <button type='button' class='btn'>See more</button>
      </li>`).join("\n");return t}(t);let o=k.querySelectorAll(".books-list"),n=await y.getTopBooks();o.forEach(e=>{let t=e.dataset.category,o=n.find(e=>e.list_name===t).books;e.innerHTML=u(o)}),k.addEventListener("click",g),k.addEventListener("click",b)}catch(e){console.log(e)}}function b(e){e.target.nodeName;let t=e.target.closest(".books-list").getAttribute("data-category");console.log(t),f(t)}p(),p();var l=n("d5eID");const m=(0,l.useBooksApi)(),v=document.querySelector(".category-list"),h=document.querySelector(".category-link"),L=document.querySelectorAll(".category-link"),q=e=>{let t=[...new Set(e.map(({list_name:e})=>e))].sort(),o=t.map(e=>{if(null!=e)return`<li class="category-item list"><a class="category-link link" href="">${e}</a></li>`}).join("");v.insertAdjacentHTML("beforeend",o),L.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),L.forEach(e=>e.classList.remove("active")),e.classList.add("active")})})};h.addEventListener("click",()=>{p()}),m.getCategoryList().then(e=>{q(e)}).catch(e=>{console.log(e)}).finally(()=>{}),n("ld1e2"),n("dTazW"),n("4EhXu"),n("fMzCF"),n("74Aiq"),n("epHO8");
//# sourceMappingURL=index.784a6888.js.map
