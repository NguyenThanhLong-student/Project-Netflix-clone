const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true },
    desc: String,
    image: String,
    imageTitle: String,
    imageSmall: String,
    trailer: String,
    video: String,
    year: String,
    limit: String,
    genre: String,
    isSeries: {type: Boolean, default: false}
    },{ timestamps: true }
);

module.exports = mongoose.model('Movie',movieSchema);