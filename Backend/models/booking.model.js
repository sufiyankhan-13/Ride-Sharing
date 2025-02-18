const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  rideId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ride'
  },
  passengerId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled'], 
    default: 'booked',
  } 
},
{timestamps: true}
);

module.exports = mongoose.model('Booking', bookingSchema);