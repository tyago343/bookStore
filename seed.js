const Book = require ('./db/models/Book.js')
const Genre = require ('./db/models/Genre.js')

const createGenre = function(n){
    Genre.create({
        name : `Genre ${n}`
    })
}
const createBook = function(n){
    Book.create({
        title : 'book title '+n,
        synopsis : 'laborum cillum. Proident laboris proident  est. Mollit nostrud mollit incididunt pariatur voluptate ullamco deserunt minim pariatur.',
        year : '190'+n 
    })
}
const createCatalog = function(n) {
    let booksArray = []
    for(let i=0; i<n; i++){
        booksArray.push( createBook(i))
    }
    return Promise.all(booksArray)
}
const createGenres = function(n) {
    let genreArray = []
    for(let i=0; i<n; i++){
       genreArray.push(createGenre(i))
    }
    return Promise.all(genreArray)
}
createCatalog(25)
.then(()=>createGenres(25))