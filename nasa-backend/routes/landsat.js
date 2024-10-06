const express = require('express');
const { getLandsatOverpass, getSurfaceReflectance } = require('../services/landsatService');
const router = express.Router();

// Route to get Landsat overpass data
router.post('/overpass', async (req, res) => {
  const { lat, long } = req.body;
  try {
    const overpassData = await getLandsatOverpass(lat, long);
    res.status(200).json(overpassData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching overpass data' });
  }
});

// Route to get surface reflectance for a pixel
router.post('/reflectance', async (req, res) => {
  const { lat, long, date } = req.body;
  try {
    const reflectanceData = await getSurfaceReflectance(lat, long, date);
    res.status(200).json(reflectanceData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching surface reflectance data' });
  }
});

module.exports = router;
