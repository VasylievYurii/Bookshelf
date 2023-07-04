export { setTheme, activateThemeSwitch };
const storedTheme = 'isDark';
const switchClass = 'js-theme-switch';

const checkboxBtn = document.querySelector(`.${switchClass}`);
const checkboxBtnList = document.querySelectorAll(`.${switchClass}`);

//фунція встановлення теми//
function setTheme(themeBody) {
  if (localStorage.getItem(storedTheme)) {
    themeBody.setAttribute('data-page-theme', 'dark');
    checkboxBtnList.forEach(elem => (elem.checked = true));
  } else {
    themeBody.setAttribute('data-page-theme', 'light');
    checkboxBtnList.forEach(elem => (elem.checked = false));
  }
}

function changeTheme(themeBody) {
  if (checkboxBtn.checked) {
    localStorage.setItem(storedTheme, 'true');
    setTheme(themeBody);
  }
  if (!checkboxBtn.checked) {
    localStorage.removeItem(storedTheme);
    setTheme(themeBody);
  }
}

//функція активація перемикання теми//
function activateThemeSwitch(event, themeBody) {
  const isInput = event.target.classList.contains(switchClass);
  if (isInput) {
    // const checkboxBtn = event.target;
    changeTheme(themeBody);
  }
}

//встановити тему//
const themeBody = document.querySelector('body');

setTheme(themeBody);

//активація перемикання теми//
themeBody.addEventListener('click', event => {
  activateThemeSwitch(event, themeBody);
});
