const express = require('express');
const router = express.Router();
const artistsCtrl = require('../../controllers/api/artists');
//const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', artistsCtrl.index);
router.post('/', artistsCtrl.create);
router.get('/:id', artistsCtrl.show);

module.exports = router;