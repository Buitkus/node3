const mongoose = require("mongoose");

const Course = mongoose.model("Course", new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

module.exports = Course;