const axios = require('axios');
require('dotenv').config();

// 1. Live Traffic Visualization
exports.getTrafficData = async (req, res) => {
  try {
    const { TOMTOM_API_KEY } = process.env;
    const location = "37.7749,-122.4194"; // San Francisco coordinates
    const trafficUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${TOMTOM_API_KEY}&point=${location}`;

    const response = await axios.get(trafficUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Route Optimization
exports.getOptimizedRoute = async (req, res) => {
  try {
    const { TOMTOM_API_KEY } = process.env;
    const coordinates = "-122.4194,37.7749:-122.4144,37.7849"; // Example coordinates
    const routeUrl = `https://api.tomtom.com/routing/1/calculateRoute/${coordinates}/json?key=${TOMTOM_API_KEY}&travelMode=car`;

    const response = await axios.get(routeUrl);
    res.status(200).json({ route: response.data.routes[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Traffic Alerts
exports.getTrafficAlerts = async (req, res) => {
  try {
    const alerts = [
      { location: "Main St", issue: "Accident", severity: "High" },
      { location: "5th Ave", issue: "Road Closure", severity: "Medium" },
    ];
    res.status(200).json({ alerts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
