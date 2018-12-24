const router = require ('express').Router()
const Book = require ('../../db/models/Book.js')

//we return an array with all books
router.get('/', (req, res) => {
    Book.findAll()
    .then(books => {
        res.send(books)
    })
})
//we create a new book
router.post('/', (req, res) => {
    Book.create(req.body)
})
//we return an especific book
router.get('/:id', (req, res) => {
    Book.findByPk(req.params.id)
    .then(book=>{
        res.send(book)
    })
})
//modify an especific book
router.put('/:id', (req, res) => {
    Book.findByPk(req.params.id)
    .then(book=>{
        book.update(req.body)
        res.sendStatus(200)
    })
})
//delete an especific book
router.delete('/:id', (req, res) => {
    Book.findByPk(req.params.id)
    .then(book=>{
        book.destroy()
        res.sendStatus(200)
    })
})
module.exports = router