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
        synopsis : 'Commodo id elit sint sit. Qui cupidatat proident quis labore. Ipsum ad dolore excepteur cillum laborum velit velit non incididunt excepteur fugiat cillum dolore incididunt. Occaecat duis ipsum adipisicing enim cupidatat tempor nisi consequat elit enim aliqua tempor. Est sunt nisi tempor id. Ipsum aliqua excepteur proident officia dolor dolor irure nisi ex est esse aliqua sint adipisicing. Ullamco reprehenderit fugiat cupidatat aliquip nulla mollit labore.',
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