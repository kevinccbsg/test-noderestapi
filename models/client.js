'use strict'
const mongoose = require('mongoose');

// Define client schema
const ClientSchema = new mongoose.Schema({
	name: { type: String, unique: true, required: true},
	id: { type: String, required: true },
	secret: { type: String, required: true },
	userId: { type: String, required: true }
});

// Export moongose model
module.exports = mongoose.model('Clients', ClientSchema);