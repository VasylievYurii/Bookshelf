const bodyRef = document.querySelector('body');

const STORAGE_KEY = 'isDark';
const themeSelectorRef = document.querySelector('#toggle-theme');

themeSelectorRef.addEventListener('click', getChangeStoreColor);
let theme = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? false;

export function getStartThemeColor() {
  const pageTheme = bodyRef.dataset.pageTheme;

  if (pageTheme === 'dark') {
    console.log("pageTheme === 'dark'")
    
    const amazonStoreElements = document.querySelectorAll('.amazon-store');
    const bookModalElements = document.querySelectorAll('.apple-store');
    bookModalElements.forEach(element => {
        element.classList.remove('book-modal');
      });
    amazonStoreElements.forEach(element => {
      element.classList.add('js-dark-mode-amazon');
    });

  

  } 
  if(pageTheme === 'light') {
    const amazonStoreElements = document.querySelectorAll('.amazon-store');
    const bookModalElements = document.querySelectorAll('.apple-store');

    amazonStoreElements.forEach(element => {
      element.classList.remove('js-dark-mode-amazon');
    });

    bookModalElements.forEach(element => {
      element.classList.remove('book-modal');
    });

    return;
  }
}

setTimeout(() => {
  getStartThemeColor();
}, 0);

export function getChangeStoreColor() {
  theme = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? false;
  const amazonStoreElements = document.querySelectorAll('.amazon-store');
  const bookModalElements = document.querySelectorAll('.apple-store');

  if (!theme) {
    amazonStoreElements.forEach(element => {
      element.classList.add('js-dark-mode-amazon');
    });
  } else if (theme) {
    amazonStoreElements.forEach(element => {
      element.classList.remove('js-dark-mode-amazon');
    });
  } else {
    return;
  }

  // bookModalElements.forEach(element => {
  // element.classList.toggle('book-modal');
  // });

  if (!theme) {
    bookModalElements.forEach(element => {
      element.classList.add('book-modal');
    });
  } else if (theme) {
    bookModalElements.forEach(element => {
      element.classList.remove('book-modal');
    });
  } else {
    return;
  }
}
