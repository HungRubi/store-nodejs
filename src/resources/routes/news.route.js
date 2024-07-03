const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/news.controller');

router.get('/:slug', newsController.details);
router.get('/', newsController.index);

module.exports = router;
