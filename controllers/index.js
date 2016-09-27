'use strict'
const Beer = require('../models/beer');
const helper = require('../config/helperFunctions');

module.exports.postBeers = (req, res, next) => {
	// Instance of Beer model
	let beer = new Beer();

	beer.name = req.body.name;
	beer.type = req.body.name;
	beer.quantity = req.body.quantity;

	beer.save((err) => {
		if (err) {
			return helper.error(res, next, 'Error saving user to database: '+ err, 500);
		}
		return helper.success(res, next, beer, 201);
	});
};

module.exports.getBeers = (req, res, next) => {
	// Use the beer model to find all
	Beer.find((err, beers) => {
		if (err) {
			return helper.error(res, next, 'Error to get beers of database: '+ err, 404);
		}
		return helper.success(res, next, beers, 200);
	});
};

module.exports.getBeer = (req, res, next) => {
	let beerId = req.params.beer_id;
	Beer.findById(beerId, (err, beer) => {
		if (err) {
			return helper.error(res, next, 'Error to get beer of database: '+ err, 404);
		}
		return helper.success(res, next, beer, 200);
	});
};
	
module.exports.putBeer = (req, res, next) => {
	let beerId = req.params.beer_id;
	Beer.findById(beerId, (err, beer) => {
		if (err) {
			return helper.error(res, next, 'Error to get beer of database: '+ err, 404);
		}
		beer.name = req.body.name;
		beer.type = req.body.name;
		beer.quantity = req.body.quantity;

		beer.save((err) => {
			if (err) return helper.error(res, next, 'Error updating user to database: '+ err, 500);

			return helper.success(res, next, beer, 202);
		});
	});
};

module.exports.deleteBeer = (req, res, next) => {
	let beerId = req.params.beer_id;
	Beer.findByIdAndRemove(beerId, (err) => {
		if (err) return helper.error(res, next, 'Error to delete beer of database: '+ err, 404);

		return helper.success(res, next, 'Beer removed from the locker', 202);
	});
};
