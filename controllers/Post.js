let express = require('express')
let router = express.Router()
const { Post } = require('../models/Post')

router.get("", (req, res) => {
    res.send("Hello from the posts route")
})

router.post("/create/:content", async(req, res) => {
    let message
    try{
        let post = await Post.create({
            content: req.params.content
        })
        message = {
            message: "Post made!",
            data: post
        }    
    } catch(err) {
        message = {
            message: "Post Create Failed"
        }
        console.log(err)
    }
    res.send(JSON.stringify(message))
})

module.exports = router