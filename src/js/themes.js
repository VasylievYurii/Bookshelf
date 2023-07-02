export { setTheme, activateThemeSwitch };
const storedTheme = 'isDark'
const switchClass = 'js-theme-switch';

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

  function changeTheme(themeBody) {
    if (checkboxBtn.checked) {
      localStorage.setItem(storedTheme, 'true');
      setTheme(themeBody, checkboxBtn);
    }
    if (!checkboxBtn.checked) {
      localStorage.removeItem(storedTheme);
      setTheme(themeBody, checkboxBtn);
    }
  }

  //функція активація перемикання теми//
  function activateThemeSwitch(event, themeBody) {
    const isInput = event.target.classList.contains(switchClass);
    if (isInput) {
      const checkboxBtn = event.target;
      changeTheme(themeBody, checkboxBtn);
    }
  }

//встановити тему//
const themeBody = document.querySelector('body');

setTheme(themeBody);

//активація перемикання теми//
themeBody.addEventListener('click', event => {
  activateThemeSwitch(event, themeBody);
});

