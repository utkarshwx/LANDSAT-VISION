const cron = require('node-cron');
const { getLandsatOverpass } = require('./landsatService');
const { sendNotification } = require('./notificationUtils');

// Function to schedule a notification for an upcoming Landsat overpass
async function scheduleNotification(userId, lat, long) {
  // Fetch the upcoming overpass for the user's location
  const overpassData = await getLandsatOverpass(lat, long);
  
  // Schedule a notification using cron
  const overpassTime = new Date(overpassData.time);
  const task = cron.schedule(overpassTime, () => {
    sendNotification(userId, overpassData);
  });
  
  return task;
}

module.exports = {
  scheduleNotification
};
