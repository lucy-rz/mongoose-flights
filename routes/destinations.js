const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

module.exports = router;

router.post('/flights/:id/destinations', destinationsCtrl.create);