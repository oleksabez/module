const express = require('express');
const path = require('path');
const port = process.env.PORT || 7000;
const app = express();
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/module.js');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});