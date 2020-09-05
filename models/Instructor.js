const mongoose = require('mongoose')

const instructorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  imgURL: {
    type: String,
    required: true
  }
})

instructorSchema.pre('save', async function (next) {
  const exist = await InstructorModel.findOne({ name: this.name })
  if (exist) {
    throw new Error('Duplicate instructor name')
  }
  next()
})

instructorSchema.statics.deleteByID = async (id) => {
  // Search for a user by email and password.
  const instructor = await InstructorModel.findOne({ _id: id })
  if (!instructor) {
    throw new Error('Delete failed! Instructor not found')
  }
  await InstructorModel.deleteOne({ _id: id })
}

const InstructorModel = mongoose.model('Instructor', instructorSchema)

module.exports = InstructorModel
