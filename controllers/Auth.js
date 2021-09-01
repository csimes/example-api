let express = require('express')
let router = express.Router()
const { User } = require('../models/User')

router.get("", (req, res) => {
    res.send("Hello World!@#!@#")
})

router.post("/create/:name", async (req, res) => {
    let message 
    try {
        const user = await User.create({
            username: req.params.name
        })
        message = {
            msg:'User Created', 
            user
        }
    } catch (err){
        console.log(err)
        message = 'Failed to Create User'
    }
    res.send(JSON.stringify(message))
})

module.exports = router