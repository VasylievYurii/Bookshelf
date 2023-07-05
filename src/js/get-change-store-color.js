const bodyRef = document.querySelector('body');

const STORAGE_KEY = 'isDark';
const themeSelectorRef = document.querySelector('#toggle-theme');

themeSelectorRef.addEventListener('click', getChangeStoreColor);
let theme = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? false;

export function getStartThemeColor(){
    const pageTheme = bodyRef.dataset.pageTheme;
    if (pageTheme === 'dark'){
        const amazonStoreElements = document.querySelectorAll('.amazon-store');
        amazonStoreElements.forEach(element => {
            element.classList.add('js-dark-mode-amazon');
            });
    } else {
        const amazonStoreElements = document.querySelectorAll('.amazon-store');
        amazonStoreElements.forEach(element => {
            element.classList.remove('js-dark-mode-amazon');
            });
        return
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
} else if (theme){
amazonStoreElements.forEach(element => {
element.classList.remove('js-dark-mode-amazon');
});
} else {
    return
}

bookModalElements.forEach(element => {
element.classList.toggle('book-modal');
});
}