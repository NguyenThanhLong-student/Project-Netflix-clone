const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    name: String,
    age: Number,
    numberPhone: String,
    password: { type: String, require: true },
    avatar: String,
    isAdmin: {type: Boolean, default: false},
    },{ timestamps: true }
);

module.exports = mongoose.model('User',userSchema);