const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello CI/CD This is for testing again again!'));
module.exports = app;