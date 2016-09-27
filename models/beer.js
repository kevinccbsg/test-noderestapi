'use strict'
const mongoose = require('mongoose');

// Define our Schema
let BeerSchema = new mongoose.Schema({
	name: String,
	type: String,
	quantity: Number
});

// Exports the model
module.exports = mongoose.model('Beers', BeerSchema);