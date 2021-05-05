const express = require('express');
const router = express.Router();
const artistsCtrl = require('../../controllers/api/artists');
//const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', artistsCtrl.index);
router.post('/', artistsCtrl.create);
router.get('/:id', artistsCtrl.show);
router.put('/:id', artistsCtrl.update);
router.delete('/:id', artistsCtrl.delete);

module.exports = router;