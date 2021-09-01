require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

/// App Configuration
// Routes
const auth = require('./controllers/Auth')
app.use("/auth", auth)

const post = require('./controllers/Post')
app.use('/post', post)

// Sync DB *with all route needed models*
require("./db").sequelize.sync()

// Stand up the app on a port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})