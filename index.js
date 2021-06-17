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
require('./routes/authRoutes')(app);
require('./routes/portfolioRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    // main.js or main.css
    app.use(express.static('client/build'));

    // express wil serve up index.html
    // if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
