const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, PM222333444!'));
module.exports = app;