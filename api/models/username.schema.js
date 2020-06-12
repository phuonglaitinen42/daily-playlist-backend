const mongoose = require('mongoose');

const UsernameSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Username", UsernameSchema);