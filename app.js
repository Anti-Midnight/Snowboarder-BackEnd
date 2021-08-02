const express = require('express')
const cors = require('cors')
const path = require('path')

// const bodyParser = require('body-parser')

require('dotenv').config()
require('./utils/db')

const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(cors())

// static public
app.use(express.static(path.join(__dirname, 'public')))
app.use('/photos', express.static(path.join(__dirname, 'public')))

app.use('/admin', require('./routes/admin'))
app.use('/users', require('./routes/users'))
app.use('/snowboards', require('./routes/snowboards'))
app.use('/instructors', require('./routes/instructors'))
app.use('/images', require('./routes/images'))
app.use('/orders', require('./routes/orders'))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
