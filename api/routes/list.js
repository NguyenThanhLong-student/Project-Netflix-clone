const express = require('express');
const { updateList,getList, deleteList, createList } = require('../controllers/List');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();


//Create List
router.post('/create',verifyToken,createList);
//Get List
router.get('/get',getList);
//Update List
router.put('/update/:id',verifyToken,updateList);
//Delete List
router.delete('/delete/:id',verifyToken,deleteList);

module.exports = router;
