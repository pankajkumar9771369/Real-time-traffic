const express = require("express");
const router = express.Router();
const { signUp,login } = require("../Controllers/users.js");
const userController = require("../Controllers/users.js");
router
.route("/signup")
.get(userController.renderSignUpForm)
.post(userController.signup);


router 
.route("/login")
.get(userController.renderloginForm)
.post( userController.login,
);

router.post("/logout",userController.logout);

module.exports = router;