const express = require('express');
const {userVerification}=require("../middlewares/auth.js");
const { addAlert, getAlerts } = require('../Controllers/alertController');
const addAlertController = require('../Controllers/alertController');
const router = express.Router();
router.get('/add',addAlertController.addalert);
router.post('/add', addAlertController.addAlert);
router.post('/region',userVerification,addAlertController.getAlerts);
router.get('/region',userVerification,addAlertController.region);

module.exports = router;

