const express = require('express');
const router = express.Router();
const trafficController = require('../Controllers/trafficController');

// Define routes
router.get('/data', trafficController.getTrafficData); // Live Traffic Data
router.get('/route', trafficController.getOptimizedRoute); // Optimized Route
router.get('/ale', trafficController.getTrafficAlerts); // Traffic Alerts

module.exports = router;
