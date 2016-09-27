'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router');
const passport = require('passport');
let port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/beerlocker', (err) => {
	if (err) { throw err; }
});
// Use the body-parser package in our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
// Use passport in our app
app.use(passport.initialize());

app.use('/api/1.0', router);

app.listen(port, () => {
	console.log(`Listen on Port ${port}`);
});