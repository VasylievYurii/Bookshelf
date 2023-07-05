const themeSelectorRef = document.querySelector('#toggle-theme');
      themeSelectorRef.addEventListener('click', getChangeHomeStoreColor);
      const STORAGE_KEY = 'isDark';
      let theme = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? false;

export function getChangeHomeStoreColor(){
    let amazonStoreSlRef = null;
    theme = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? false;
    if(theme && document.querySelector('.amazon-logo')){
        amazonStoreSlRef = document.querySelector('.amazon-logo');
        amazonStoreSlRef.classList.add('js-dark-mode-amazon');
          } else {
          }
    if(!theme && document.querySelector('.amazon-logo')){
        amazonStoreSlRef = document.querySelector('.amazon-logo');
        amazonStoreSlRef.classList.remove('js-dark-mode-amazon');
          }
}