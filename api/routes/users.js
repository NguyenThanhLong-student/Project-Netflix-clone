const express = require('express');
const { updateUser,getUser, deleteUser, getAllUser, statsUser } = require('../controllers/user');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

//Update User
router.put('/update/:id',verifyToken,updateUser);
//Delete User
router.delete('/delete/:id',verifyToken,deleteUser);
//Get All User
router.get('/get',verifyToken,getAllUser);
//Get User
router.get('/get/:id',verifyToken,getUser);

//Get Stats
router.get('/stats',verifyToken,statsUser);

module.exports = router;
