const express = require('express')
const auth = require('../middleware/auth')
const snowboardController = require('../controllers/snowboardController')

const snowboardRouter = express.Router()

snowboardRouter.get('/', snowboardController.getAll)
snowboardRouter.post('/', auth.admin, snowboardController.add)
snowboardRouter.get('/:id', snowboardController.get)
snowboardRouter.put('/:id', auth.admin, snowboardController.update)
snowboardRouter.delete('/:id', auth.admin, snowboardController.del)

module.exports = snowboardRouter
 