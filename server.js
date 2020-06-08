// All relevant packages.
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const mongoose = require('mongoose');
const usernameRouter = require('./api/usernames/username.router');
const FRONTEND_ORIGIN = "http://localhost:3000";
// storing MongoDB username and password
require('dotenv').config();
var URL = process.env.MONGOLAB_URI
// Connection to our Database
mongoose.connect(URL,
// will make code into json
{ useNewUrlParser: true }, () =>
console.log('Connected to DB!')
);
// making sure MongoDB is active.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.on('open', console.log.bind(console, 'Connected to MongoDB!'));


// Chrome does ajax calls.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

//parse json bodies.
app.use(express.json());
//set Username router to use default route.
app.use('/usernames', usernameRouter);

app.get('/api', (req, res, next) => {
    res.send('API status: Running')
});


module.exports = server