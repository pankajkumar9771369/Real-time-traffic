const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");
const cors = require('cors');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
dotenv.config();
const jwt = require("jsonwebtoken");
const app = express();
const path = require('path');
const http = require('http');
const server=http.createServer(app)
const alertRoutes = require('./Routes/alertRoutes');
const User = require("./Models/user.js");
const userRouter = require("./Routes/user.js");

// Middleware
app.use(cors({ origin: 'http://localhost:4000', credentials: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));


const {userVerification}=require("./middlewares/auth.js");
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));




  app.use('/alerts',userVerification, alertRoutes);
  app.use("/",userRouter);

  // Set up template engine
  app.engine('ejs', ejsMate);
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
app.get("/", (req, res) =>{
  res.render('home.ejs');
})

app.get('/dashboard', userVerification, (req, res) => {
  const { username } = req.user; 
  const user = req.user;
  console.log(user)
  res.render('dashboard', { username,user });
});
  app.get("/traffic/flow", userVerification, (req, res) =>{
    
    res.render('dashboards.ejs');
  })
// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






