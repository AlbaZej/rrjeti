// backend/routes/network.js
const express = require('express');
const router = express.Router();
const { generateNetwork } = require('../controllers/networkController');

router.post('/generate', generateNetwork);

module.exports = router;
