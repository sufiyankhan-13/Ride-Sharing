const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  ratedUserId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: {
    required: true,
    type: Number,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    trim: true,
  },
},
{timestamps: true}
);

module.exports = mongoose.model('Rating', ratingSchema);