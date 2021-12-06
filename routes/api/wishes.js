const express = require('express');
const router = express.Router();
const wishesCtrl = require('../../controllers/api/wishes');

// GET to /api/movies/search
router.get('/search', wishesCtrl.search);

module.exports = router; 