// import { setTheme } from './js/themes';
import { insertModalBook } from './js/pop-up-book';
import { handleOnPress } from './js/fetch-categories';
import { getTopBooksByCategories } from './js/top-books';

const modalBook = insertModalBook();
handleOnPress();
getTopBooksByCategories();
//встановити тему//
// const themeBody = document.querySelector('body');

// setTheme(themeBody);
