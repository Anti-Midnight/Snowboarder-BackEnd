const SnowboardModel = require('../models/Snowboard')

const get = async (req, res) => {
  const snowboard = await SnowboardModel.findOne({ _id: req.params.id })
  res.send(snowboard)
}

const getAll = async (req, res) => {
  const snowboard = await SnowboardModel.find({})
  res.send(snowboard)
}

const add = async (req, res) => {
  try {
    const snowboard = new SnowboardModel(req.body)
    await snowboard.save()
    res.status(201).send({ success: 'Snowboard was added successfully' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

const update = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const opts = { runValidators: true }
    const update = req.body
    await SnowboardModel.findOneAndUpdate(filter, update)
    res.status(201).send({ success: 'Snowboard was updated successfully' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

const del = async (req, res) => {
  try {
    await SnowboardModel.deleteByID(req.params.id)
    res.status(201).send({ success: 'Snowboard was deleted successfully' })
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
