const express = require("express");
const { Reviews } = require('../models');
const router = express.Router();

// for user reviews and ratings
router.get("/:reviewsId", async (req, res) => {
  try {
    res.json(await Reviews.findOne({ reviews: req.params.reviewsId }));
  } catch (error) {
    res.status(400).json(error);
  }
});

// for user reviews and ratings
router.post("/:reviewsId", async (req, res) => {
  try {
    await Reviews.updateOne(
      {
        reviews: req.params.reviewsId, 
      },
      {
        comment: req.body.comment,
        earringRating: req.body.earringRating,
        reviews: req.params.reviewsId,
      },
      {
        upsert: true,
      }
    );
    // review update is successful
    res.status(200).send("ok");
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete route
router.delete("/:reviewsId", async (req, res) => {
  try {
    res.json(
      await Reviews.findOneAndDelete({
        reviews: req.params.reviewsId, 
      })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;