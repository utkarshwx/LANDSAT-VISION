const express = require('express');
const { scheduleNotification } = require('../services/notificationService');
const router = express.Router();

// Route to schedule notifications for users
router.post('/schedule', async (req, res) => {
  const { userId, lat, long } = req.body;
  try {
    await scheduleNotification(userId, lat, long);
    res.status(200).json({ message: 'Notification scheduled successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error scheduling notification' });
  }
});

module.exports = router;
