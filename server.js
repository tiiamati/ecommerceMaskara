const express = require('express');
const path = require('path');
const app = express();

app.get('*', function (req, res) {
    res.sendFile('index.html');
});

app.listen(process.env.PORT || 8080);