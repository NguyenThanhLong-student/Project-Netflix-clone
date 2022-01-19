const logger = require('../helper/logger');
const User = require('../models/User');
const bcrypt = require('bcrypt');

let loggerInfo = logger('Info');
let loggerError = logger('Error');

//Update

const updateUser = async (req, res, next) => {
    loggerInfo('Updating user....')
    if (req.params.id === req.user.id || req.user.isAdmin) {
        if (req.body.oldPassword) {
            const user = await User.findById(req.params.id);
            console.log(req.body.oldPassword, user.password);
            let isUser = await bcrypt.compare(req.body.oldPassword, user.password);
            if (isUser) {
                req.body.Password = await bcrypt.hash(req.body.Password, 12)
                try {
                    const updateUser = await User.findByIdAndUpdate(req.params.id, {
                        $set: { "password": req.body.Password }
                    }, { new: true })
                    res.status(200).json(updateUser);
                } catch (error) {
                    loggerError(error);
                    res.status(500).json(err);
                }
            }
            else
            {
                res.status(403).json("Wrong password");
            }
        }
        else {
            try {
                const updateUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updateUser);
            } catch (error) {
                loggerError(error);
                res.status(500).json(err);
            }
        }
    }
    else {
        loggerError("Not accessed!");
        res.status(403).json("You only update your account");
    }

}
// Delete

const deleteUser = async (req, res, next) => {
    loggerInfo('Deleting user....')
    if (req.params.id === req.user.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch (error) {
            loggerError(error);
            res.status(500).json(err);
        }
    }
    else {
        loggerError("Not accessed!");
        res.status(403).json("You only detele your accout");
    }
}

//Read
const getUser = async (req, res, next) => {
    loggerInfo('Getting user...');
    if (req.params.id === req.user.id || req.user.isAdmin) {
        try {
            let user = await User.findById(req.params.id);
            let { password, ...info } = user._doc;
            res.status(200).json(info);
        } catch (error) {
            loggerError(error);
            res.status(500).json(err);
        }
    }
    else {
        loggerError("Not accessed!");
        res.status(403).json("You not authorized");
    }

}

//Read All user
const getAllUser = async (req, res, next) => {
    loggerInfo('Get all user....')
    let query = req.query.new;
    if (req.user.isAdmin) {
        try {
            let user = query ? await User.find().sort({ id: -1 }).limit(6) : await User.find();
            info = user.map(userInfo => {
                let { password, ...info } = userInfo._doc;
                return info;
            })
            res.status(200).json(info);
        } catch (error) {
            loggerError(error);
            res.status(500).json(err);
        }
    }
    else {
        loggerError("Not accessed!");
        res.status(403).json("You can't get all user");
    }
}

//Count User

const statsUser = async (req, res, next) => {
    loggerInfo('Get stats....')
    if (req.user.isAdmin) {
        try {
            const data = await User.aggregate([
                {
                    $project: {
                        month: { $month: "$createdAt" },
                    }
                },
                {
                    $group: {
                        _id: "$month", total: { $sum: 1 },
                    },
                },
            ])
            res.status(200).json(data);
        } catch (error) {
            loggerError(error);
            res.status(403).json(error);
        }
    }
    else {
        loggerError("Not accessed!");
        res.status(403).json("You not authorized");
    }

}


module.exports = { updateUser, getUser, deleteUser, getAllUser, statsUser };