// All relevant packages.
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const mongoose = require('mongoose');
const usernameRouter = require('./api/usernames/username.router');
const FRONTEND_ORIGIN = "http://localhost:3000";
// storing MongoDB username and password
require('dotenv').config();
var url = process.env.MONGOLAB_URI;
// Connection to our Database
mongoose.connect(url,
// will make code into json
{ useNewUrlParser: true }, () =>
console.log('Connected to DB!')
);


// Chrome does ajax calls.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

//parse json bodies.
app.use(express.json());
//set Username router to use default route.
app.use('/usernames', usernameRouter);

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});