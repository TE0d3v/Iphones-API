const express = require('express');
const router = express.Router();
const { createIphone, getAllIphones } = require('../controllers/iphone.controller');


router.post('/iphones', createIphone);
router.get('/iphones', getAllIphones);

module.exports = router;