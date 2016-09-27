'use strict'
const express = require('express');
const router = express.Router();
const beerController = require('../controllers');

router.route('/beers')
	.get(beerController.getBeers)
	.post(beerController.postBeers);

//
router.route('beers/:beer_id')
	.get(beerController.getBeer)
	.put(beerController.putBeer)
	.delete(beerController.deleteBeer);
