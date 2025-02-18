const express = require('express');
const { createBooking, getBookings } = require('../controllers/booking.controller.js');

const router = express.Router();

router.post('/bookings', createBooking);
router.get('/bookings', getBookings);

module.exports = router;