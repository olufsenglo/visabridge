const express = require('express');
const router = express.Router();
const { createInterest, showInterest } = require('../controllers/interestController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

//blog routes
router.post('/interest/create', createInterest);
router.get('/interests/show', showInterest);

module.exports = router;