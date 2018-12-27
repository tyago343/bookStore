//import dependencies
const Sequelize = require ('sequelize')

//import our db
const db = require ('../index.js')

//we get the models to associations
const User = require ('./User.js')
const Book = require ('./Book.js')

//define the Comment model
const Comment = db.define('comment', {
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },
    body : {
        type : Sequelize.STRING,
        allowNull : false
    },
    vote : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
})
Comment.belongsTo(User)
Comment.belongsTo(Book)
module.exports = Comment