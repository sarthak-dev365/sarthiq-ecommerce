const express = require("express");
const router = express.Router();

const cart = require("../models/cartModel");

// Add to Cart API
router.post("/add", async (req, res) =>{
  try {
    res.status(200).json({
      message: "Add to Cart API is working",
    });
  } catch (error) {
    res.status(500).json({
      message:"Server Error",
      error: error.message,
    });
  }
});

module.exports = router;