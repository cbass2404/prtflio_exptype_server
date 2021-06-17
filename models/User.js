const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    profileImage: String,
    email: String,
    verified: Boolean,
    admin: Boolean,
});

mongoose.model('users', userSchema);
