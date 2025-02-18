const express = require('express');
const { createRide, getAvailableRides, bookRide } = require('../controllers/ride.controller.js');

const router = express.Router();

router.post('/', createRide);
router.get('/', getAvailableRides);
router.post('/book', bookRide);

module.exports = router;