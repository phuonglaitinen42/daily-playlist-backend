const express = require("express");
const router = express.Router();
const Username = require("../models/username.schema");

// get a specific username
router.get("/:id", async (req, res) => {
    try {
        const username = await Username.findById(req.body.id);
        res.json(username);
    } catch (err) {
        res.status(404).json({ message: err })
    }
});


// post a username to the database.
router.post("/", async (req, res) => {
    const name = new Username({
        username: req.body.username,
    });
    // Save the username and catch possible errors.
    try {
        const savedUsername = await name.save();
        res.status(201).json(savedUsername);
        console.log(savedUsername);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

// Get all usernames.
router.get("/", async (req, res) => {
    try {
        const usernames = await Username.find();
        res.json(usernames);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;