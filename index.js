//We require some dependencies
const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const path = require ('path')

//import our files, db, models, routers
const db = require ('./db/index.js')
const Book = require ('./db/models/Book.js')
const userRoutes = require('./routes/api/userRoutes.js')
const commentRoutes = require ('./routes/api/commentRoutes.js')
const bookRoutes = require ('./routes/api/bookRoutes.js')
const genreRoutes = require ('./routes/api/genreRoutes.js')

//Use the body-parser middleware to extract the entire body portion of an incoming request stream and exposes it on req.body
app.use('/*', bodyParser.urlencoded({
    extended:true
}))
app.use('/*', bodyParser.json())

app.use(express.static('public'))
app.use(express.static('dist'))
db.sync({ force : false })

//For any path, we send index.html for view
app.use('/creador', ()=>{
    Book.create({
        title : 'book title '+n,
        synopsis : 'In exercitation aliquip esse nulla pariatur. Tempor sit tempor eu excepteur enim commodo occaecat duis adipisicing nisi quis laborum cillum. Proident laboris proident duis enim laboris excepteur minim dolor in reprehenderit. Qui reprehenderit eu fugiat aliquip est. Mollit nostrud mollit incididunt pariatur voluptate ullamco deserunt minim pariatur.',
        year : '190'+n 
    })
})
app.use('/api/user/', userRoutes)
app.use('/api/comment/', commentRoutes)
app.use('/api/book/', bookRoutes)
app.use('/api/genre/', genreRoutes)
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'))
})


//Set up the server
app.listen(8000, ()=>{
    console.log('Listening at port 8000')
})