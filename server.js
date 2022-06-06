///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
// const { earrings, reviews } = require('./controllers');

///////////////////////////////
// DATABASE CONNECTION
///////////////////////////////
mongoose.connect(MONGODB_URL);

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ///////////////////////////////
// // REGISTER CONTROLLERS
// ////////////////////////////////
// app.use('/earrings', earrings);
// app.use('/reviews', reviews);

///////////////////////////////
// ROUTES
////////////////////////////////

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving collection of earrings
app.get("/collections", (req, res) => {
  res.json(collections);
});

// route for retrieving one product from collection
app.get("/show", (req, res) => {
  res.json(show);
});

// route for cart page
app.get("/cart", (req, res) => {
  res.json(cart);
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
