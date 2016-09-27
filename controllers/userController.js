'use strict'
const User = require('../models/user');
const helper = require('../config/helperFunctions');

// Endpoint Post users
module.exports.postUser = (req, res, next) => {
	// Instance user
	let user = new User()

	user.username = req.body.username;
	user.password = req.body.password;

	user.save((err) => {
		if (err) return helper.error(res, next, 'Error saving user to database: '+ err, 500);

		return helper.success(res, next, user, 201);
	});
};

// Endpoint to get users
module.exports.getUsers = (req, res, next) => {
	User.find((err, users) => {
		if (err) return helper.error(res, next, 'Error to get users of database: '+ err, 404);

		return helper.success(res, next, beers, 200);
	});
};