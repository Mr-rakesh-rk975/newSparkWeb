// CareerRouter.js
const express = require('express');
const router = express.Router();
const careerData = require('../controller/careerController');

router.post('/', careerData.postCareer)

exports.router = router;


