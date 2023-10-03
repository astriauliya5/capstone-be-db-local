const express = require('express');
const cartController = require('../controllers/cartController');
const cartRoutes = express.Router();

// get cart
cartRoutes.get('/', cartController.getCart);

// add product to cart
// cartRoutes.post('/', cartController.addToCart);

module.exports = { cartRoutes };