const Alert = require('../Models/alertModel');


module.exports.addAlert = async (req, res) => {
  try {

    const alert = new Alert(req.body);
    const newAddalert=await alert.save();
    console.log(newAddalert);
    console.log("Alert added successfully")
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).json({ error: 'Failed to add alert' });
  }
};
module.exports.addalert = async (req, res) => {
  res.render("addalert.ejs")
}
module.exports.region = async (req, res) => {
  const { region } = req.user; 
  console.log("Region:", region);
  res.render("region.ejs",{region})
}

module.exports.getAlerts = async (req, res) => {
  console.log(req.body);

  let { region } = req.body;
  console.log("Region:", region);

  try {
    
    if (!region) {
      return res.status(400).json({ error: "Region is required" });
    }

    
    const alerts = await Alert.find({ region });
    console.log("Fetched Alerts:", alerts);

    
    if (alerts.length === 0) {
      return res.status(404).json({ error: "No alerts found for this region" });
    }

    
    res.render("alerts", { alerts });
  } catch (error) {
    console.error("getAlerts Error:", error);
    res.status(500).json({ error: "Failed to fetch alerts" });
  }
};
