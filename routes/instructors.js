const express = require('express')
const auth = require('../middleware/auth')
const instructorController = require('../controllers/instructorController')

const instructorRouter = express.Router()

instructorRouter.get('/', instructorController.getAll)
instructorRouter.post('/', auth.admin, instructorController.add)
instructorRouter.get('/:id', instructorController.get)
instructorRouter.put('/:id', auth.admin, instructorController.update)
instructorRouter.delete('/:id', auth.admin, instructorController.del)

module.exports = instructorRouter
 