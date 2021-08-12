const mongoose = require('mongoose')

const snowboardSchema = mongoose.Schema({
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
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  imgURL: [{
    type: String,
    required: true
  }],
  flex: { type: Number, min: 0, max: 10 },
  length: Number,
  camberProfile: String,
  terrain: String,
  shape: String,
  setbackStance: Number,
  updated: { type: Date, default: Date.now },
  sellerInfo: String

})

snowboardSchema.pre('save', async function (next) {
  // const exist = await SnowboardModel.findOne({ name: this.name })
  // if (exist) {
  //   throw new Error('Duplicate snowboard name')
  // }
  next()
})

snowboardSchema.statics.deleteByID = async (id) => {
  // Search for a user by email and password.
  const snowboard = await SnowboardModel.findOne({ _id: id })
  if (!snowboard) {
    throw new Error('Delete failed! Snowboard not found')
  }
  await SnowboardModel.deleteOne({ _id: id })
}

const SnowboardModel = mongoose.model('Snowboard', snowboardSchema)

module.exports = SnowboardModel
