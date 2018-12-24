//import dependencies
const Sequelize = require ('sequelize')

//import our db
const db = require ('../index.js')

//we get the models to associations
const Book = require ('./Book.js')

//define the Book model
const Category = db.define('category', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    }
})
Category.belongsToMany(Book, { through : "bookscategories" })
Book.belongsToMany(Category, { through : "bookscategories" })
module.exports = Category