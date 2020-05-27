const express = require('express');
const router = express.Router();
const Username = require('../../models/username.schema');

// Get all usernames.
router.get("/", async (req, res) => {
try {
    const usernames = await Username.find();
    res.json(usernames);
} catch (err) {
    res.json({message: err});
}
});

// get a specific username

// post a username to database.
router.post("/", async (req, res) => {
    const name = new Username({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
    });
// Save the username and catch possible errors.
try {
    const savedUsername = await name.save();
    res.status(201).json(savedUsername);
} catch (err) {
    res.status(404).json({ message: err});
}
});


module.exports = router;