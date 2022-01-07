const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true },
    type: String,
    genre: String,
    content: Array,
    },{ timestamps: true }
);

module.exports = mongoose.model('List',listSchema);