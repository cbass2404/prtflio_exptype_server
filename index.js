const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./models/Project');
require('./services/passport');

mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.COOKIE_KEY],
    })
);

app.use(passport.initialize());
app.use(passport.session());

// routes

app.get('/', (req, res) => {
    res.send('Well done!');
});

const PORT = process.env.Port || 5000;

app.listen(PORT);
