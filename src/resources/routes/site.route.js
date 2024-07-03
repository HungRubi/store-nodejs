const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/site.controller');

router.get('/search', siteController.search);
router.post('/create', siteController.create);
router.get('/:slug', siteController.deltailItems);
router.get('/', siteController.index);

module.exports = router;
