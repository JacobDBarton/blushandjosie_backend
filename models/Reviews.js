const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  comment: String,
  earringRating: Number,
});

const Reviews = mongoose.model("reviews", reviewsSchema);

module.exports = Reviews;