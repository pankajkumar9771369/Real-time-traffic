exports.predictTraffic = (historicalData) => {
    
    const rushHourMultiplier = 1.5;
    const weatherImpactMultiplier = 1.3;
  
    return historicalData.map(data => {
      let prediction = data.congestionLevel; 
  
    
      if (data.time >= 8 && data.time <= 10 || data.time >= 17 && data.time <= 19) {
        prediction *= rushHourMultiplier;
      }
  
     
      if (data.weatherImpact > 0.5) {
        prediction *= weatherImpactMultiplier;
      }
  
      
      prediction = Math.min(prediction, 100);
  
      return {
        region: data.region,
        prediction: prediction.toFixed(2), 
      };
    });
  };
  