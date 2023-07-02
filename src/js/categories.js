import { getTopBooksByCategories } from "./top-books";
import { renderBooks } from "./renderBooksByCategories";

const categoryAll = document.querySelector('.category-link');


const categoryLinksElements = document.querySelectorAll('.category-link');

export function getCategoryElements() {

    categoryLinksElements.forEach((link) => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            categoryLinksElements.forEach((el) => el.classList.remove('active'));
            link.classList.add('active');
        })
    });
}
categoryAll.addEventListener('click', () => {
    getTopBooksByCategories();

})
// categoryLinksElements.addEventListener('click', () => {
//     renderBooks(category);

// })
// для отримання списку книг по одній категорії

// function showBooks(category) {
//     const bookList = document.getElementById('bookList');

//     // Очищаємо список книг
//     bookList.innerHTML = '';

//     // Фільтруємо книги за вибраною категорією
//     const filteredBooks = books.filter(book => book.category === category);

//     if (filteredBooks.length === 0) {
//         // Якщо книг у вибраній категорії немає, показуємо повідомлення
//         const message = document.createElement('li');
//         message.textContent = 'Книг у цій категорії не знайдено.';
//         bookList.appendChild(message);
//     } else {
//         // Якщо є книги у вибраній категорії, відмальовуємо їх
//         filteredBooks.forEach(book => {
//             const listItem = document.createElement('li');
//             listItem.textContent = book.title;
//             bookList.appendChild(listItem);
//         });
//     }
// }
