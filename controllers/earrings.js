const express = require("express");
const { Earrings } = require('../models');
const router = express.Router();


// for a single product
router.get("/:id", async (req, res) => {
  try {
    res.json(await Earrings.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
