const express = require("express");

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello, World!' });
});

app.post('/echo', (req, res) => {
    const { message } = req.body;
    res.status(200).send({ message });
});

module.exports = app;