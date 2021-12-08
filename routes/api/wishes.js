const express = require('express');
const router = express.Router();
const wishesCtrl = require('../../controllers/api/wishes');

// GET to /api/wishes/search
router.get('/', wishesCtrl.getAll);

//POST to /api/wishes/:id
router.post('/create', wishesCtrl.create);

router.delete('/:id', wishesCtrl.deleteWish);

router.put('/:id', wishesCtrl.updateWish);


module.exports = router; 