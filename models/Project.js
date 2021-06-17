const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    languages: [String],
    description: String,
    url: String,
    repo: String,
    img: String,
    thumbnail: String,
    logo: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('projects', projectSchema);
