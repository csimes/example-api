const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db")

const User = db.define("User", {
        username: {
            type: DataTypes.STRING
        }
})

module.exports = {
    User
}