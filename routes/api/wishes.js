const express = require('express');
const router = express.Router();
const wishesCtrl = require('../../controllers/api/wishes');

// GET to /api/wishes/search
router.get('/search', wishesCtrl.search);

//POST to /api/wishes/:id
router.post('/', wishesCtrl.create);


module.exports = router; 