// Simulated function to send a notification to the user
function sendNotification(userId, overpassData) {
    console.log(`Sending notification to user ${userId}: Landsat is flying over at ${overpassData.time}`);
    // Use third-party service like Twilio or SendGrid here
  }
  
  module.exports = {
    sendNotification
  };
  