const express = require('express');
const router = express.Router();
const { createIphone } = require('../controllers/iphone.controller');

router.post('/iphones', createIphone);

module.exports = router;