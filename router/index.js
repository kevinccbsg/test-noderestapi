'use strict'
const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beerController');
const userController = require('../controllers/userController');

router.route('/beers')
  /**
   * GET /beers
   * @summary Beer list
   * @tags Beers - Everything about Beers
   * @return {array<object>} 200 - Beer list
   * @return {string} default - Error request
   */
	.get(beerController.getBeers)
  /**
   * POST /beers
   * @summary Create beer endpoint
   * @tags Beers - Everything about Beers
   * @param {object} request.body.required - Create beer
   * @return {object} 201 - Beer created
   * @return {string} default - Error request
   */
	.post(beerController.postBeers);


router.route('/beers/:beer_id')
  /**
   * GET /beers/{beer_id}
   * @summary Beer Item
   * @tags Beers - Everything about Beers
   * @return {object} 200 - Beer item
   * @return {string} 404 - Error to get beer of database
   * @return {string} default - Error request
   */
	.get(beerController.getBeer)
  /**
   * PUT /beers/{beer_id}
   * @summary Beer Item
   * @tags Beers - Everything about Beers
   * @return {object} 200 - Beer item
   * @return {string} 404 - Error to get beer of database
   * @return {string} default - Error request
   */
	.put(beerController.putBeer)
  /**
   * DELETE /beers/{beer_id}
   * @summary Delete beer
   * @tags Beers - Everything about Beers
   * @return {string} 202 - Beer removed from the locker
   * @return {string} 404 - Error to get beer of database
   * @return {string} default - Error request
   */
	.delete(beerController.deleteBeer);

router.route('/users')
  /**
   * GET /users
   * @summary Beer list
   * @tags Users - Everything about Users
   * @return {array<object>} 200 - Beer list
   * @return {string} default - Error request
   */
	.get(userController.getUsers)
  /**
   * POST /users
   * @summary Create beer endpoint
   * @tags Users - Everything about Users
   * @param {object} request.body.required - Create user
   * @return {object} 201 - User created
   * @return {string} default - Error request
   */
	.post(userController.postUser);

module.exports = router;