const express = require('express');
const { sendEmail } = require('../controllers/send-email.controller');
const router = express.Router();


router.post('/email', sendEmail);

module.exports = router;