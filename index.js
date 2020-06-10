// Were using Index.js as a project management folder.
// Just like we did with Login-app in Node-course.
var express = require("express"); // Express web server framework
const app = express();
var request = require("request"); // "Request" library
const genreRouter = require("./api/genre/genre.router");
const PORT = process.env.PORT || 3001;
const FRONTEND_ORIGIN = process.env.FPORT || "http://localhost:3000";

// .env required
require("dotenv").config();
const mongoose = require("mongoose");
var URL = process.env.MONGOLAB_URI;
// Connection to our Database
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to DB")
);

// making sure MongoDB is active.
var db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error: "));
db.on("open", console.log.bind(console, "Connected to MongoDB!"));

// Chrome does ajax calls.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

//parse json bodies.
app.use(express.json());

app.use("/result", genreRouter);

app.get("/api", (req, res, next) => {
  res.send("API status: Running");
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
