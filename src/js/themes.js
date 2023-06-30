export { setTheme };
const storedTheme = 'isDark'
const switchClass = '//class themes//';

const checkboxBtn = document.querySelector(`.${switchClass}`);


//фунція встановлення теми//
function setTheme(themeBody) {
    if (localStorage.getItem(storedTheme)) {
      themeBody.setAttribute('data-page-theme', 'dark');
      checkboxBtn.checked = true;
    } else {
      themeBody.setAttribute('data-page-theme', 'light');
      checkboxBtn.checked = false;
    }
  }

  //встановити тему//
// const themeBody = document.querySelector('body');

// setTheme(themeBody);

// Это проверка работоспособности функции renderBooks