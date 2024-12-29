const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/authenticateUser');
const { addRating, getRatings } = require('../controllers/rating.controller');

router.post('/:recipeId', authenticateUser, addRating); 
router.get('/:recipeId', getRatings); 

module.exports = router;

