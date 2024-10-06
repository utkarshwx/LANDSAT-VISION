const axios = require('axios');
const { getReflectanceFromData } = require('./reflectanceService');

// Function to get upcoming Landsat overpasses based on lat/long
async function getLandsatOverpass(lat, long) {
  // Simulate an API call to NASA or other service
  const response = await axios.get(`https://api.landsat.com/overpass?lat=${lat}&long=${long}`);
  return response.data;
}

// Function to get surface reflectance for a specific pixel
async function getSurfaceReflectance(lat, long, date) {
  // Call a service to download Landsat data
  const landsatData = await downloadLandsatData(lat, long, date);
  
  // Extract surface reflectance from the downloaded data
  const reflectance = getReflectanceFromData(landsatData, lat, long);
  return reflectance;
}

// Function to download Landsat data (simulated)
async function downloadLandsatData(lat, long, date) {
  // Simulated downloading of Landsat data
  const landsatFile = `landsat_${lat}_${long}_${date}.tiff`;
  return landsatFile;
}

module.exports = {
  getLandsatOverpass,
  getSurfaceReflectance
};
