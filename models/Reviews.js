const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  comment: String,
  earringRating: Number,
  reviews: { type: mongoose.Schema.Types.ObjectId, ref: "reviews" },
});

const Reviews = mongoose.model("reviews", reviewsSchema);

module.exports = Reviews;
