const express = require('express');

const app = express();
const port = 3000;


app.get('/', async(req, res)=> {
    res.json("hello world")
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});