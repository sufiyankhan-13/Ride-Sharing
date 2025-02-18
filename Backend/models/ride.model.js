const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  driverId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true 
    },
  pickupLocation: { 
    type: String, 
    required: true 
    },
  dropLocation: { 
    type: String, 
    required: true 
    },
  seatsAvailable: { 
    type: Number, 
    required: true 
    },
  fare: { 
    type: Number, 
    required: true 
    },
  dateTime: { 
    type: Date, 
    required: true 
    },
  passengers: [{
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    name: {
        type: String
    },
    phone: {
        type: Number
    }
  }],
  
},
{ timestamps: true}
);

module.exports = mongoose.model('Ride', rideSchema);