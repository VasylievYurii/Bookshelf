function addClassForBookList (){
    let oneBook = null;
    if(document.querySelector('.category-block')){
        oneBook = "element-books-list"
            } else {
        oneBook = "element-books-list-all"
    }
    return oneBook;
}

export {addClassForBookList};