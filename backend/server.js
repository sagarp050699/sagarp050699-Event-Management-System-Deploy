// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const mongo_url = process.env.MONGO_CONN;

// Connect to MongoDB
mongoose.connect(mongo_url)
    .then(()=>{
        console.log("mongo db connected");
    }).catch((err)=>{
        console.log("mongo Connection Error" , err);
    })

// Routes
app.use('/api/events', eventRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//   69LPGk1jjxGyX6va