function addClassForBookList(e) {
  let oneBook = null;
  if (!e) {
    oneBook = 'element-books-list';
  } else {
    oneBook = 'element-books-list-all';
  }
  return oneBook;
}

export { addClassForBookList };
