'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./router');
let port = process.env.PORT || 3000;
// Use the body-parser package in our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/api/1.0', router);

app.listen(port, () => {
	console.log(`Listen on Port ${port}`);
});