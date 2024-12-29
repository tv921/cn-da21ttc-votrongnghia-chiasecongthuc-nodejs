const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/authenticateUser');
const { addComment, getComments, getAllComments, deleteComment } = require('../controllers/comment.controller');

router.post('/:recipeId', authenticateUser, addComment); 
router.get('/:recipeId', getComments); 

router.get("/", authenticateUser, getAllComments);
router.delete("/:id", authenticateUser, deleteComment);

module.exports = router;


