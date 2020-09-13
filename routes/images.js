const express = require('express')
const multer = require('multer')

const auth = require('../middleware/auth')
const imageRouter = express.Router()
const imageController = require('../controllers/imageController')

// const crypto = require('crypto')
// let random = crypto.randomBytes(10).toString('hex')
// i.image.jpeg => 52a3b253f84c9dced545.jpeg

const storage = multer.diskStorage({
  // Save photos
  destination: function (req, file, cb) {
    cb(null, './public/photos')
  },
  // random name
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
})
const multerUpload = multer({
  storage: storage
})

imageRouter.post('/', auth.admin, multerUpload.single('image'), imageController.upload)

module.exports = imageRouter
