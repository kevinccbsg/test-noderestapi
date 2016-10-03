'use strict'
const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beerController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const clientController = require('../controllers/clientController');

router.route('/beers')
	.get(authController.isAthenticated, beerController.getBeers)
	.post(authController.isAthenticated, beerController.postBeers);

//
router.route('/beers/:beer_id')
	.get(authController.isAthenticated, beerController.getBeer)
	.put(authController.isAthenticated, beerController.putBeer)
	.delete(authController.isAthenticated, beerController.deleteBeer);

// users
router.route('/users')
	.get(authController.isAthenticated, userController.getUsers)
	.post(authController.isAthenticated, userController.postUser);

// clients
router.route('/clients')
	.get(authController.isAthenticated, clientController.postClient)
	.post(authController.isAthenticated, clientController.getClients);

module.exports = router;