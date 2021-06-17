const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    lang: [String],
    desc: String,
    url: String,
    repo: String,
    img: String,
    thumbImg: String,
    logo: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('projects', projectSchema);
