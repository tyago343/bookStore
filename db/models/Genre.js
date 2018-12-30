//import dependencies
const Sequelize = require ('sequelize')

//import our db
const db = require ('../index.js')

//we get the models to associations
const Book = require ('./Book.js')

//define the Book model
const Genre = db.define('genre', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    }
})
Genre.belongsToMany(Book, { through : "booksgenres" })
Book.belongsToMany(Genre, { through : "booksgenres" })
module.exports = Genre