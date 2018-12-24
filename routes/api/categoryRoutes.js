const router = require ('express').Router()
const Category = require ('../../db/models/Category.js')

//we return an array with all categories
router.get('/', (req, res) => {
    Category.findAll()
    .then(categories => {
        res.send(categories)
    })
})
//we create a new Category
router.post('/', (req, res) => {
    Category.create(req.body)
})
//we return an especific Category
router.get('/:id', (req, res) => {
    Category.findByPk(req.params.id)
    .then(category=>{
        res.send(category)
    })
})
//modify an especific category
router.put('/:id', (req, res) => {
    Category.findByPk(req.params.id)
    .then(category=>{
        category.update(req.body)
        res.sendStatus(200)
    })
})
//delete an especific category
router.delete('/:id', (req, res) => {
    Category.findByPk(req.params.id)
    .then(category=>{
        category.destroy()
        res.sendStatus(200)
    })
})
module.exports = router