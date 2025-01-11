const User = require("../Models/user.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token; // Ensure cookie-parser is used in your app
  if (!token) {
    return res.redirect("/login"); // Redirect if no token
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY); // Verify token
    const user = await User.findById(decoded.id); // Fetch user based on token payload

    if (user) {
      req.user = { id: user._id, username: user.username }; // Attach user details to `req`
      next(); // Proceed to the next middleware or route
    } else {
      return res.redirect("/login"); // Redirect if user not found
    }
  } catch (error) {
    console.error("userVerification Error:", error);
    return res.redirect("/login"); // Redirect on any error
  }
};
