const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fName: String,
    lName: String,
    profileImage: String,
    email: String,
    verified: Boolean,
    admin: false,
});

mongoose.model('users', userSchema);
