//import dependencies
const Sequelize = require ('sequelize')

//import our db
const db = require ('../index.js')

//we get the models to associations
const User = require ('./User.js')

//define the Book model
const Book = db.define('book', {
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },
    synopsis : {
        type : Sequelize.STRING,
        allowNull : false
    },
    author : {
        type : Sequelize.STRING,
        allowNull : false,
        defaultValue : 'anonymous'
    },
    image : {
        type : Sequelize.STRING,
        defaultValue : 'https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg'
    },
    linkToBuy : {
        type : Sequelize.STRING
    }
})
Book.belongsTo(User)
module.exports = Book