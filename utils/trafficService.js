const axios = require('axios');

const fetchTrafficData = async (region) => {
  try {
    const API_URL = `https://api.mapbox.com/traffic/v1/mapbox/driving/${region}.json`;
    const response = await axios.get(API_URL, {
      params: {
        access_token: process.env.MAP_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching traffic data:', error.message);
    throw new Error('Failed to fetch traffic data');
  }
};

module.exports = { fetchTrafficData };
