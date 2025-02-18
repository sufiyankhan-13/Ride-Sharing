const express = require('express');
const { addRating, getUserRatings } = require('../controllers/rating.controller.js');

const router = express.Router();

router.post('/ratings', addRating);
router.get('/ratings/:userId', getUserRatings);

module.exports = router;