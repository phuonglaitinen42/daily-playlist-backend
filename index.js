// Were using Index.js as a project management folder.
// Just like we did with Login-app in Node-course.
var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
const PORT = process.env.PORT || 3001

var server = require("server"); // require server.js
app.use(server); // mount server.js as a sub-app.
var app = require("app");// require app.js
app.use(app); // mount app.js as a sub-app
var call = require("call"); // require call,js
app.use(call); // mount call.js as sub-app.
var index = require("index"); // require index.js
app.use(index); // mount index.js


app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});