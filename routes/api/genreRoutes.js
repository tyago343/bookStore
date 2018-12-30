const router = require ('express').Router()
const Genre = require ('../../db/models/Genre.js')

//we return an array with all genres
router.get('/', (req, res) => {
    Genre.findAll()
    .then(genres => {
        res.send(genres)
    })
})
//we create a new Genre
router.post('/', (req, res) => {
    Genre.create(req.body)
})
//we return an especific Genre
router.get('/:id', (req, res) => {
    Genre.findByPk(req.params.id)
    .then(genre=>{
        res.send(genre)
    })
})
//modify an especific genre
router.put('/:id', (req, res) => {
    Genre.findByPk(req.params.id)
    .then(genre=>{
        genre.update(req.body)
        res.sendStatus(200)
    })
})
//delete an especific genre
router.delete('/:id', (req, res) => {
    Genre.findByPk(req.params.id)
    .then(genre=>{
        genre.destroy()
        res.sendStatus(200)
    })
})
module.exports = router