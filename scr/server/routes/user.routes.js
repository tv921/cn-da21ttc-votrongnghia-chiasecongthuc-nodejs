const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserInfo, updateUserInfo, getAllUsers, deleteUser} = require('../controllers/user.controller');
const authenticateUser = require('../middlewares/authenticateUser');


router.post('/register', registerUser);


router.post('/login', loginUser);


router.get('/logout', logoutUser);


router.get('/me', authenticateUser, getUserInfo);

router.put("/update", authenticateUser, updateUserInfo);

router.get("/", authenticateUser, getAllUsers);

router.delete("/:id", authenticateUser, deleteUser);


module.exports = router;


