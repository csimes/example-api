const { DataTypes } = require('sequelize');
const { sequelize } = require("../db")

const Post = sequelize.define("Post", {
        content: {
            type: DataTypes.STRING
        }
})

module.exports = {
    Post
}