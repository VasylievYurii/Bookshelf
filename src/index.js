// Это проверка работоспособности функции renderBooks

import { renderBooks } from './js/renderBooksByCategories';

const categoryContainerRef = document.querySelector('.category-container');

renderBooks('Paperback Nonfiction', categoryContainerRef);
