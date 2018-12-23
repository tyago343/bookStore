const router = require ('express').Router()
const User = require ('../../db/models/User.js')

//we return an array with all users
router.get('/', (req, res) => {
    User.findAll()
    .then(users => {
        res.send(users)
    })
})
//we create a new user
router.post('/', (req, res) => {
    User.create(req.body)
})
//we return an especific user
router.get('/:id', (req, res) => {
    User.findByPk(req.param.id)
    .then(user=>{
        res.send(user)
    })
})
//modify an especific user
router.put('/:id', (req, res) => {

})
//delete an especific user
router.delete('/:id', (req, res) => {

})

module.exports = router