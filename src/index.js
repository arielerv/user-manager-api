const express = require('express')
const app = express()
const logger = require('morgan')
const mongoose = require('./config/mongoose')
const errorHandler = require('./routes/errorHandler')
const cors = require('cors')
require('dotenv').config()

//https://mongoosejs.com/docs/index.html

// Config
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)
mongoose.configure(process.env.DATABASE_URL)

// Middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(errorHandler)

// Routes
app.use('/', require('./routes/status'))
app.use('/user', require('./routes/user'))
app.use('/role', require('./routes/role'))

// Start server
app.listen(app.get('port'), () => {
    console.info(`Server listening on port ${app.get('port')}`)
})
