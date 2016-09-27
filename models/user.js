'use strict'
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define use Schema
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// Execute before each user save() call

UserSchema.pre('save', (callback) => {
	let user = this;

	// stop if password hasn't changed
	if (!user.isModified('password')) return callback();

	// password change and we need to hash it
	bcrypt.genSalt(5, (err, salt) => {
		if (err) return callback(err);

		bcrypt.hash(user.password, salt, null, (err, hash)=> {
			if (err) return callback(err)

			user.password = hash;
			callback();
		})
	});
});
