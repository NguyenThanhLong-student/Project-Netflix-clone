const logger = require('../helper/logger');
const List = require('../models/List');
const bcrypt = require('bcrypt');

let loggerInfo = logger('Info');
let loggerError = logger('Error');
//Create
const createList = async (req, res, next) => {
    loggerInfo('Creating List...');
    if (req.user.isAdmin) {
        const list = new List(req.body);
        try {
            let newList = await list.save();
            res.status(201).json(newList);
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
const getList = async (req, res, next) => {
    loggerInfo('Getting List...');
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = []
    try {
        if(typeQuery)
        {
            if(genreQuery)
            {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}},
                    {$sort: { updatedAt: -1 }}
                ])
            }
            else
            {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}},
                    {$sort: { updatedAt: -1 }}
                ])
            }
        }
        else
        {   
            list = await List.aggregate([
                {$sample: {size: 10}},
                {$sort: { updatedAt: -1 }}
            ])
        }
        res.status(201).json(list);
    } catch (error) {
        loggerError(error)
        res.status(500).json(error)
    }
}

//Update

const updateList = async (req, res, next) => {
    loggerInfo('Updating List....');
    if (req.user.isAdmin) {
        try {
            const ListUpdate = await List.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(ListUpdate);
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

const deleteList = async (req, res, next) => {
    loggerInfo('Deleting List....')
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List has been deleted!");
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


module.exports = { updateList, getList, deleteList, createList };