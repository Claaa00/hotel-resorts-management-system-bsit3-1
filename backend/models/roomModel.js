const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  roomType: {
    type: String,
    required: [true, 'Please add a room type'],
    unique: true,
  },
})

module.exports = mongoose.model('Room', roomSchema)
