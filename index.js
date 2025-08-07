const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, PM2!'));
module.exports = app;