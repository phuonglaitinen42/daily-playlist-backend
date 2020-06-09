const express = require("express");
const router = express.Router();
const Genre = require("../model/genre.schema");

router.get("/", async (req, res) => {
  try {
    const results = await Genre.find();
    res.json(results);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Genre.findById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const result = new Genre({
    genre: req.body.genre,
  });

  try {
    const savedResult = await result.save();
    res.status(201).json(savedResult);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

module.exports = router;
