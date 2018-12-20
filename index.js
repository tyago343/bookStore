//We require some dependencies
const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const path = require ('path')


app.use(express.static('public'))
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'))
})
//Use the body-parser middleware to extract the entire body portion of an incoming request stream and exposes it on req.body
app.use('/*', bodyParser.urlencoded({
    extended:true
}))
//Set up the server
app.listen(8000, ()=>{
    console.log('Listening at port 8000')
})