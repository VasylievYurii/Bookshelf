// import { setTheme } from './js/themes';
import { insertModalBook } from './js/pop-up-book';
import {handleOnPress} from './js/fetch-categories';

const modalBook = insertModalBook();
handleOnPress();

//встановити тему//
// const themeBody = document.querySelector('body');

// setTheme(themeBody);

// Это проверка работоспособности функции renderBooks

import { renderBooks } from './js/renderBooksByCategories';

const categoryContainerRef = document.querySelector('.category-container');

renderBooks('Paperback Nonfiction', categoryContainerRef);