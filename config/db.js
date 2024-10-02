// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(db);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
