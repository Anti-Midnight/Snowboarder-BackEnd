const InstructorModel = require('../models/Instructor')

const get = async (req, res) => {
  const instructor = await InstructorModel.findOne({ _id: req.params.id })
  res.send(instructor)
}

const getAll = async (req, res) => {
  const instructor = await InstructorModel.find({})
  res.send(instructor)
}

const add = async (req, res) => {
  try {
    const instructor = new InstructorModel(req.body)
    await instructor.save()
    res.status(201).send({ success: 'Instructor was added successfully' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

const update = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const update = req.body
    await InstructorModel.findOneAndUpdate(filter, update)
    res.status(201).send({ success: 'Instructor was updated successfully' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

const del = async (req, res) => {
  try {
    await InstructorModel.deleteByID(req.params.id)
    res.status(201).send({ success: 'Instructor was deleted successfully' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  get,
  getAll,
  add,
  update,
  del
}
