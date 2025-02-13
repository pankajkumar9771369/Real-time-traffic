# Real-time-traffic

## 🚀 Project Overview
Traffic Visualiser is a real-time traffic monitoring web application that integrates **TomTom Developer API** to provide live traffic updates. The application is built using **Node.js, Express.js, MongoDB**, and **Socket.io** for real-time data streaming.

## 🔧 Technologies Used
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Real-Time Communication:** Socket.io
- **Authentication:** JWT (JSON Web Token), bcrypt
- **API Integration:** TomTom Developer API
- **Deployment:** Render ([Live Link](https://real-time-traffic.onrender.com))

## 📦 Dependencies
```json
{
    "axios": "^1.7.9",
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "ejs": "^3.1.10",
    "ejs-mate": "^4.0.0",
    "express": "^4.21.2",
    "http": "^0.0.1-security",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.3",
    "nodemon": "^3.1.9",
    "socket-io": "^1.0.0",
    "socket.io": "^4.8.1",
    "uuid": "^11.0.4"
}
```

## 🚀 How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/KunwarAryan-design/Traffic-Visualiser.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Traffic-Visualiser
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
5. Start the application:
   ```sh
   npm start
   ```

## 🌐 Deployment
The application is deployed on **Render** and accessible at:  
🔗 **[Live Demo](https://real-time-traffic.onrender.com)**

## 📌 Features
- 🚦 Real-time traffic visualization using **TomTom Developer API**
- 🔐 Secure authentication with JWT and bcrypt
- 🔄 WebSocket integration for live traffic updates
- 📍 Interactive traffic maps with congestion data
- 📡 API-driven traffic analytics

## 🤝 Contributing
Feel free to fork the repository and submit **pull requests**!

## 📜 License
This project is licensed under the **MIT License**.

