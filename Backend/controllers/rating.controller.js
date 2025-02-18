const Rating = require('../models/rating.model.js');
const User = require('../models/user.model');

// Add a rating
const addRating = async (req, res) => {
  const { ratedUserId, rating, review } = req.body;
  try {
    const ratedUser = await User.findById(ratedUserId);
    if (!ratedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newRating = new Rating({ ratedUserId, rating, review });
    await newRating.save();
    res.status(201).json({ message: 'Rating added successfully', newRating });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get ratings for a user
const getUserRatings = async (req, res) => {
  const { userId } = req.params;
  try {
    const ratings = await Rating.find({ ratedUserId: userId });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addRating, getUserRatings };