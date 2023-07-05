const themeSelectorRef = document.querySelector('#toggle-theme');
      themeSelectorRef.addEventListener('click', getChangeStoreColor);

export function getChangeStoreColor(){
    const amazonStoreSlRef = document.querySelector('.amazon-store');
    const appleStoreSlRef = document.querySelector('.apple-store');
    amazonStoreSlRef.classList.toggle('js-dark-mode-amazon');
    appleStoreSlRef.classList.toggle('book-modal');
}
