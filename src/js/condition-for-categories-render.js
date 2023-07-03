function addClassForBookList (e){
    let oneBook = null;

    if(!e){
        console.log('first document.querySelector(.category-block)', document.querySelector('.category-block'));
        oneBook = "element-books-list"
            console.log("oneBook if:", oneBook)
            } else {
                console.log('second document.querySelector(.category-block)', document.querySelector('.category-block'));
        oneBook = "element-books-list-all"
        console.log("oneBook else:", oneBook)



    
        
    }
    return oneBook;
}

export {addClassForBookList};