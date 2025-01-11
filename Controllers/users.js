const User = require("../Models/user.js");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");
module.exports.renderSignUpForm = (req,res) => {
    res.render("signup.ejs");
};

module.exports.signup = async (req, res, next) => {
    try {
      const { email, password, username, createdAt } = req.body;
      console.log(req.body);
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const user = await User.create({ email, password, username, createdAt });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      
        res.redirect("/dashboard");
      next();
    } catch (error) {
      console.error(error);
    }
  };

  module.exports.renderloginForm = (req,res) => {
    res.render("login.ejs");
};
  module.exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Invalid credentials' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Invalid credentials' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });

       res.redirect("/dashboard")
       next()
    } catch (error) {
      console.error(error);
    }
  }

  module.exports.logout = (req, res) => {
    res.cookie("token", '', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 1
    });
    res.redirect("/");
};


