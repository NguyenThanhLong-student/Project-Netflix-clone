const logger = require('../helper/logger');
const Movie = require('../models/Movie');
const bcrypt = require('bcrypt');

let loggerInfo = logger('Info');
let loggerError = logger('Error');
//Create
const createMovie = async (req, res, next) => {
    loggerInfo('Creating movie...');
    if (req.user.isAdmin) {
        const movie = new Movie(req.body);
        try {
            let newmovie = await movie.save();
            res.status(201).json(newmovie);
        } catch (error) {
            loggerError(error)
            res.status(500).json(error)
        }
    }
    else {
        loggerError("Not access!")
        res.status(403).json('You are not admin!')
    }
}



//Get
const getMovie = async (req, res, next) => {
    loggerInfo('Getting movie...');
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(201).json(movie);
    } catch (error) {
        loggerError(error)
        res.status(500).json(error)
    }
}

//Get random
const getRandomMovie = async (req, res, next) => {
    loggerInfo('Getting random movie...');
    const type = req.query.type;
    let movies;
    try {
        if(type==="series")
        {   
            movies = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}},
                {$sort: { updatedAt: -1 }}
            ])
        }
        else
        {
            movies = await Movie.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}},
                {$sort: { updatedAt: -1 }}
            ])
        }
        res.status(200).json(movies)
    } catch (error) {
        loggerError(error)
        res.status(500).json(error)
    }
}

//Get All Movie
const getAllMovie = async (req, res, next) => {
    loggerInfo('Get all movie....')
    try {
        const movie = await Movie.find().sort({ updatedAt: 1 });
        res.status(201).json(movie.reverse());
    } catch (error) {
        loggerError(error)
        res.status(500).json(error)
    }
}


//Update

const updateMovie = async (req, res, next) => {
    loggerInfo('Updating Movie....');
    if (req.user.isAdmin) {
        try {
            const movieUpdate = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(movieUpdate);
        } catch (error) {
            loggerError(error)
            res.status(500).json(error)
        }
    }
    else {
        loggerError("Not access!")
        res.status(403).json('You are not admin!')
    }
}

// Delete

const deleteMovie = async (req, res, next) => {
    loggerInfo('Deleting Movie....')
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted!");
        } catch (error) {
            loggerError(error)
            res.status(500).json(error)
        }
    }
    else {
        loggerError("Not access!")
        res.status(403).json('You are not admin!')
    }
}


module.exports = { updateMovie, getMovie, deleteMovie, getAllMovie, createMovie,getRandomMovie };