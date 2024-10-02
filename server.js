// server.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();


connectDB();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello shanvi..');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
