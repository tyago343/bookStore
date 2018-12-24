const router = require ('express').Router()
const Comment = require ('../../db/models/Comment.js')

//we return an array with all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(comments => {
        res.send(comments)
    })
})
//we create a new Comment
router.post('/', (req, res) => {
    Comment.create(req.body)
})
//we return an especific Comment
router.get('/:id', (req, res) => {
    Comment.findByPk(req.params.id)
    .then(comment=>{
        res.send(comment)
    })
})
//modify an especific comment
router.put('/:id', (req, res) => {
    Comment.findByPk(req.params.id)
    .then(comment=>{
        comment.update(req.body)
        res.sendStatus(200)
    })
})
//delete an especific comment
router.delete('/:id', (req, res) => {
    Comment.findByPk(req.params.id)
    .then(comment=>{
        comment.destroy()
        res.sendStatus(200)
    })
})
module.exports = router