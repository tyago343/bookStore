//import dependencies
const Sequelize = require ('sequelize')
const crypto = require ('crypto')

//import our database
const db = require ('../index.js')

//import other models for association
const Book = require ('./Book.js')
//define the User model
const User = db.define('user', {
    firstName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    lastName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true,
        validate :{
            isEmail : true
        }
    },
    userName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    salt : {
        type : Sequelize.STRING
    },
    admin : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
})
//add the association between Books and Users, because Users can have many favourites books
Book.belongsToMany(User, { through : "favourite"})
User.belongsToMany(Book, { through : "favourite"})

//we define hash functions for password encryption
User.passwordSalt = () => (
    crypto.randomBytes(20).toString('hex')
)
User.prototype.passwordHash = (password, salt) => (
    crypto.createHmac('sha1', salt).update(password).digest('hex')
)
//this hook use the hash functions before create the user for password encryption
User.hook('beforeCreate', user => {
    user.salt = User.passwordSalt()
    let { password, salt } = user
    user.password = user.passwordHash(password, salt)
})
module.exports = User