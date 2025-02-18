const Booking = require('../models/booking.model.js');
const Ride = require('../models/ride.model.js');
const User = require('../models/user.model.js');

// Create a booking
const createBooking = async (req, res) => {
  const { rideId, passengerId } = req.body;
  try {
    const ride = await Ride.findById(rideId);
    const passenger = await User.findById(passengerId);

    if (!ride || !passenger) {
      return res.status(404).json({ error: 'Ride or passenger not found' });
    }

    const booking = new Booking({ rideId, passengerId });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('rideId passengerId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBooking, getBookings };