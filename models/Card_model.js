const mongoose = require('mongoose');
const uuid = require('uuid');

const cardSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  postedAt: {
    type: Date,
    required: true,
  },
  contract: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  apply: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    content: String,
    items: [String],
  },
  role: {
    content: String,
    items: [String],
  },
});

module.exports = mongoose.model('Card', cardSchema)

