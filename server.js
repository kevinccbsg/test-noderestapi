'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressJSDocSwagger = require('express-jsdoc-swagger');

const router = require('./router');
const port = process.env.PORT || 3000;

const swaggerOptions = {
  info: {
    description: 'Documentation for Node REST API',
    title: 'NodeRESTAPI',
    version: '1.0.0',
    contact: {
      name: 'Kevin Martínez',
      email: 'kevinccbsg@gmail.com',
    },
  },
  servers: [],
  baseDir: __dirname,
  filesPattern: './router/**.js',
};

mongoose.connect('mongodb://localhost:27017/beerlocker', (err) => {
	if (err) { throw err; }
});
// Use the body-parser package in our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

expressJSDocSwagger(app)(swaggerOptions);

app.use('/api/1.0', router);

app.listen(port, () => {
	console.log(`Listen on Port ${port}`);
});
