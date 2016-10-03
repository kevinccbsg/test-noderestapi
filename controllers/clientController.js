'use strict'
const Client = require('../models/client');
const helper = require('../config/helperFunctions');

module.exports.postClient = (req, res, next) => {
	// instance of client
	let clien = new Client();

	// Set params of post
	client.name = req.body.name;
	client.id = req.body.id;
	client.secret = req.body.secret;
	client.userId = req.user._id;

	// Save client
	client.save((err) => {
		if (err) return helper.error(res, next, 'Error saving user to database: '+ err, 500);

		return helper.success(res, next, beer, 201);
	});
};

module.exports.getClients = (req, res, next) => {
	// Use client to find all clients
	Client.find({ userId: req.user_id }, (err, clients) => {
		if (err) return helper.error(res, next, 'Error to get beers of database: '+ err, 404);
		return helper.success(res, next, beers, 200);
	});
};