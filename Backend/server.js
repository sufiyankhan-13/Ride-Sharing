const express = require('express');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/user.routes.js');
const rideRoutes = require('./routes/ride.routes.js');
const bookingRoutes = require('./routes/booking.routes.js');
const ratingRoutes = require('./routes/rating.routes.js');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/ratings', ratingRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});