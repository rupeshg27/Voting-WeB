const mongoose = require('mongoose');
require('dotenv').config();

//Define the Mongodb connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL; // Update 'mydatabase' to your database name
//const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to DB');
});

db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = db;
