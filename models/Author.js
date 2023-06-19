const mongoose = require("mongoose");

const Author = mongoose.model("Author", new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    bio: {
      type: String
    },
    website: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

module.exports = Author;

