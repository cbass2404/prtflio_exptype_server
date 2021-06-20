const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    email: String,
    name: String,
    message: String,
    viewed: { type: Boolean, default: false },
    _user: { type: Schema.Types.ObjectId, default: '60cbc5c17ebcb83fc0c8a935' },
});

mongoose.model('messages', messageSchema);
