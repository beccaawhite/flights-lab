var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id', destinationsCtrl.add)

module.exports = router;