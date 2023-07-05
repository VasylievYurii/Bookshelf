export function getChangeStoreColor() {
    const amazonStoreElements = document.querySelectorAll('.amazon-store');
    const bookModalElements = document.querySelectorAll('.apple-store');
  
    amazonStoreElements.forEach(element => {
      element.classList.toggle('js-dark-mode-amazon');
    });
  
    bookModalElements.forEach(element => {
      element.classList.toggle('book-modal');
    });
  }
  
  const themeSelectorRef = document.querySelector('#toggle-theme');
  themeSelectorRef.addEventListener('click', getChangeStoreColor);