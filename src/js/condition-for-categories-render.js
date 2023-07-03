function addClassForBookList (){
    let oneBook = null;
    
    if(document.querySelector('.category-block')){
        oneBook = "element-books-list"
            console.log("oneBook if:", oneBook)
            } else {
        oneBook = "element-books-list-all"
        console.log("oneBook else:", oneBook)
        
    }
    return oneBook;
}

export {addClassForBookList};