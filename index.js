// Were using Index.js as a project management folder.
// Just like we did with Login-app in Node-course.
var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library

var server = require("server"); // require server.js
app.use(server); // mount server.js as a sub-app.
var app = require("app");// require app.js
app.use(app); // mount app.js as a sub-app
var call = require("call"); // require call,js
app.use(call); // mount call.js as sub-app.
var index = require("index"); // require index.js
app.use(index); // mount index.js

var cors = require("cors");
var querystring = require("querystring");
var cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001

// Request .env details from Team-chat.
var client_id = process.env.SPOTIFY_CLIENT_ID
var client_secret = process.env.SPOTIFY_CLIENT_SECRET
var redirect_uri = process.env.SPOTIFY_REDIRECT_URI

var app = express();

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());


app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});