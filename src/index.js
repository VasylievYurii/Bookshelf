import { setTheme } from './js/themes';
import { insertModalBook } from './js/pop-up-book';
import {handleOnPress} from './js/fetch-categories';

const modalBook = insertModalBook();
handleOnPress();

//встановити тему//
const themeBody = document.querySelector('body');

setTheme(themeBody);