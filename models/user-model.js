const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    firstName: String,
    googleId: String,
    email: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
