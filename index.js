const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

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

console.log(process.env.NODE_ENV);
app.get('/', (req, res) => {
    res.send('Well done!');
});

const PORT = process.env.Port || 5000;

app.listen(PORT);
