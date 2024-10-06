// Simulated function to extract reflectance from Landsat data
function getReflectanceFromData(landsatData, lat, long) {
    // Simulated reflectance data extraction
    const reflectanceData = {
      lat,
      long,
      reflectance: {
        blue: 0.12,
        green: 0.15,
        red: 0.18,
        nir: 0.22
      }
    };
    return reflectanceData;
  }
  
  module.exports = {
    getReflectanceFromData
  };
  