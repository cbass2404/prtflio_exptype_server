const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./models/User');

mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.COOKIE_KEY],
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Well done!');
});

const PORT = process.env.Port || 5000;

app.listen(PORT);
