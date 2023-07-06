export function findBookFromLocStorage(id) {
  const arrayBooks = localStorage.getItem('shopping-list');
  const parsedArray = JSON.parse(arrayBooks);
  return parsedArray.find(book => book._id === id);
}

isBookAdded('643282b1e85766588626a0dc');
