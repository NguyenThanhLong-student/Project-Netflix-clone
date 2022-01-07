const express = require('express');
const { updateMovie,getMovie, deleteMovie, getAllMovie, createMovie, getRandomMovie } = require('../controllers/movie');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();


//Create Movie
router.post('/create',verifyToken,createMovie);
//Get All Movie
router.get('/get',getAllMovie);
//Get Movie
router.get('/get/:id',getMovie);
//Get Ramdom Movie
router.get('/getrandom',getRandomMovie);
//Update Movie
router.put('/update/:id',verifyToken,updateMovie);
//Delete Movie
router.delete('/delete/:id',verifyToken,deleteMovie);

module.exports = router;
