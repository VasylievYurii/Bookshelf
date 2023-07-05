const STORAGE_KEY = 'shopping-list';

const counterValue = document.querySelector('.counter-value');

export function shopingListCounter() {
  const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  counterValue.textContent = shoppingListArray.length || '';
}

shopingListCounter();
