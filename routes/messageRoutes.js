const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const isAdmin = require('../middlewares/isAdmin');

const Messages = mongoose.model('messages');

module.exports = (app) => {
    app.get('/api/messages', requireLogin, async (req, res) => {
        try {
            const messages = await Messages.find();

            res.send(messages);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    app.post('/api/messages', async (req, res) => {
        console.log(req.body);
        const { email, name, message } = req.body;

        const newMessage = new Messages({
            email,
            name,
            message,
        });
        try {
            const response = await newMessage.save();

            res.send(response);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};
