const Ride = require('../models/ride.model.js');
const User = require('../models/user.model.js');

// Create a new ride
const createRide = async (req, res) => {
  const { driverId, pickupLocation, dropLocation, seatsAvailable, fare, dateTime } = req.body;
  try {
    const driver = await User.findById(driverId);
    if (!driver || driver.role !== 'driver') {
      return res.status(400).json({ error: 'Invalid driver ID or role' });
    }

    const ride = new Ride({ driverId, pickupLocation, dropLocation, seatsAvailable, fare, dateTime });
    await ride.save();
    res.status(201).json({ message: 'Ride created successfully', ride });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all available rides
const getAvailableRides = async (req, res) => {
  try {
    const rides = await Ride.find({ seatsAvailable: { $gt: 0 } }).populate('driverId', 'name phone');
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Book a ride
const bookRide = async (req, res) => {
  const { rideId, passengerId } = req.body;
  try {
    const ride = await Ride.findById(rideId);
    const passenger = await User.findById(passengerId);

    if (!ride || !passenger) {
      return res.status(404).json({ error: 'Ride or passenger not found' });
    }

    if (ride.seatsAvailable <= 0) {
      return res.status(400).json({ error: 'No seats available' });
    }

    ride.passengers.push({ userId: passengerId, name: passenger.name, phone: passenger.phone });
    ride.seatsAvailable -= 1;
    await ride.save();

    res.json({ message: 'Ride booked successfully', ride });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRide, getAvailableRides, bookRide };