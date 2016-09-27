'use strict'
const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beerController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.route('/beers')
	.get(authController.isAthenticated, beerController.getBeers)
	.post(authController.isAthenticated, beerController.postBeers);

//
router.route('/beers/:beer_id')
	.get(authController.isAthenticated, beerController.getBeer)
	.put(authController.isAthenticated, beerController.putBeer)
	.delete(authController.isAthenticated, beerController.deleteBeer);

router.route('/users')
	.get(authController.isAthenticated, userController.getUsers)
	.post(authController.isAthenticated, userController.postUser);

module.exports = router;