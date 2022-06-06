const mongoose = require("mongoose");

const earringSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
  earringRating: String,
});

const Earrings = mongoose.model("earrings", earringSchema);

module.exports = Earrings;
