import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
});

const PORT = process.env.Port || 5000;

app.listen(PORT, () => {
    return console.log('Connected to Mongo Instance');
});
