//We require some dependencies
const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const path = require ('path')

//import our files, db, models, routers
const db = require ('./db/index.js')
const userRoutes = require('./routes/api/userRoutes.js')
const commentRoutes = require ('./routes/api/commentRoutes.js')

//Use the body-parser middleware to extract the entire body portion of an incoming request stream and exposes it on req.body
app.use('/*', bodyParser.urlencoded({
    extended:true
}))
app.use('/*', bodyParser.json())

app.use(express.static('public'))
app.use(express.static('dist'))
db.sync({ force : true })

//For any path, we send index.html for view
app.use('/api/user/', userRoutes)
app.use('/api/comment/', commentRoutes)
app.use('/api/book/', bookRoutes)
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'))
})


//Set up the server
app.listen(8000, ()=>{
    console.log('Listening at port 8000')
})