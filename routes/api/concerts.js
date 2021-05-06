const express = require('express');
const router = express.Router();
const concertsCtrl = require('../../controllers/api/concerts');

router.get('/artists/concerts', concertsCtrl.index);
router.post('/artists/:id/concerts', concertsCtrl.create);

module.exports = router;