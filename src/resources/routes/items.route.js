const express = require('express');
const route = express.Router();

const itemsController = require('../app/controllers/items.controller');

// route.get('/:slug', itemsController.details)
route.get('/', itemsController.index);

module.exports = route;
