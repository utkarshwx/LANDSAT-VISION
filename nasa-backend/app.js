const express = require('express');
const dotenv = require('dotenv');
const landsatRoutes = require('./routes/landsat');
const notificationRoutes = require('./routes/notifications');

// Load environment variables
dotenv.config();

// Create express app
const app = express();
app.use(express.json());

// Define routes
app.use('/api/landsat', landsatRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
