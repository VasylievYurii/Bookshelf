var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequired7c6=l),l("2wbaf"),l("4dIBK");var n=l("d5eID"),c=l("fMzCF");const a=(0,n.useBooksApi)(),r=document.querySelector(".section-categories"),s=document.querySelector(".section-books"),i=document.querySelector(".section-books-title"),d=document.querySelector(".section-books-list");function u(e,t){let o;let l=(o=null,t?(console.log("second document.querySelector(.category-block)",document.querySelector(".category-block")),console.log("oneBook else:",o="element-books-list-all")):(console.log("first document.querySelector(.category-block)",document.querySelector(".category-block")),console.log("oneBook if:",o="element-books-list")),o),n=e.map(({book_image:e,title:t,author:o,_id:n})=>`<li class="${l}">
    <a class='book-item' data-value="${n}">
      <div class='thumb'>
        <img src='${e}' alt='Book cover' />
        <div class='overlay'>
          <p class='overlay-text'>quick view </p>
        </div>
      </div>
      <h3 class='book-title'>${t}</h3>
      <p class='book-author'>${o}</p>
    </a>
  </li>`).join("\n");return n}async function g(e){try{let t=await a.getBooksByCategory(e);d.innerHTML=u(t,!0),i.innerHTML=function(e){let t=e.split(" ");if(t.length<2)return`${e}`;let o=t.pop();return`${t.join(" ")} <span class="accent">${o}</span>`}(e),console.log("elem add class:",r),r.classList.add("hidden"),console.log("elem hide class:",s),s.classList.remove("hidden"),d.addEventListener("click",y)}catch(e){console.log(e)}}function y(e){let t=e.target.closest(".book-item");if(!t)return;let o=t.getAttribute("data-value");a.getBookById(o).then(c.insertModalBook).catch(e=>console.log(e)),(0,c.onModalOpen)()}var n=l("d5eID");const f=(0,n.useBooksApi)(),k=document.querySelector(".section-categories-list");async function m(){try{let e=await f.getCategoryList(),t=[...new Set(e.map(({list_name:e})=>e))].sort();k.innerHTML=function(e){let t=e.map(e=>`<li class='category-block' data-category="${e}">
      <h3 class='category-block-title'>${e}</h3>
      <ul class='books-list' data-category="${e}"></ul>
      <button type='button' class='btn' >See more</button>
      </li>`).join("\n");return t}(t);let o=k.querySelectorAll(".books-list"),l=await f.getTopBooks();o.forEach(e=>{let t=e.dataset.category,o=l.find(e=>e.list_name===t).books;e.innerHTML=u(o)}),k.addEventListener("click",y),k.addEventListener("click",p)}catch(e){console.log(e)}}function p(e){if(e.preventDefault(),console.log("function onButtonClick:",e),console.log("evt.target.nodeName",e.target.nodeName),"BUTTON"===e.target.nodeName){console.log("evt.target",e.target);let t=e.target.closest(".category-block").getAttribute("data-category");console.log("category",t),g(t);return}console.log("function onButtonClick return")}m();var n=l("d5eID");const b=(0,n.useBooksApi)(),v=document.querySelector(".category-list"),h=document.querySelector(".category-link"),q=document.querySelectorAll(".category-link"),L=e=>{let t=[...new Set(e.map(({list_name:e})=>e))].sort(),o=t.map(e=>{if(null!=e)return`<li class="category-item list"><a class="category-link link" href="">${e}</a></li>`}).join("");v.insertAdjacentHTML("beforeend",o),q.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),q.forEach(e=>e.classList.remove("active")),e.classList.add("active")})})};h.addEventListener("click",()=>{m()}),b.getCategoryList().then(e=>{L(e)}).catch(e=>{console.log(e)}).finally(()=>{}),l("ld1e2"),l("dTazW"),l("4EhXu"),l("fMzCF"),l("74Aiq"),l("epHO8");
//# sourceMappingURL=index.5efa610f.js.map
