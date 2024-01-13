// ChatDBRouter.js
const express = require('express');
const router = express.Router();
const { storeMessage, getChatHistory } = require('../controller/ChatDBController');

// Define routes
router.post('/store-message', storeMessage);
router.get('/get-chat-history/:sender/:receiver', getChatHistory);

module.exports = router;
