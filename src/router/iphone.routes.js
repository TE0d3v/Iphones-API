const express = require('express');
const router = express.Router();
const { createIphone, updateIphone, getAllIphones } = require('../controllers/iphone.controller');

router.get('/iphones', getAllIphones);
router.post('/iphones', createIphone);
router.put('/iphones/:id', updateIphone);

module.exports = router;