const mongoose = require('mongoose');

const UsernameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Username", UsernameSchema);