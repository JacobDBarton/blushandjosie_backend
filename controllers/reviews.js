const express = require("express");
const { Reviews } = require('../models');
const router = express.Router();

// for user reviews and ratings
router.get("/:earringId", async (req, res) => {
  try {
    res.json(await Reviews.findOne({ earring: req.params.earringId }));
  } catch (error) {
    res.status(400).json(error);
  }
});

// for user reviews and ratings
router.post("/:earringId", async (req, res) => {
  try {
    await Reviews.updateOne(
      {
        earring: req.params.earringId, 
      },
      {
        comment: req.body.comment,
        earringRating: req.body.earringRating,
        earring: req.params.earringId, 
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
router.delete("/:earringId", async (req, res) => {
  try {
    res.json(
      await Reviews.findOneAndDelete({
        earring: req.params.earringId, 
      })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
