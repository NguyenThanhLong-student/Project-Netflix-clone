const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const logger = require('../helper/logger');
const loggerInfo = logger('Info');
const loggerError = logger('Error');


//Register

const register = async (req, res, next) => {
    try {
        const {
            email,
            name,
            age,
            numberPhone,
            password,
            avatar,
        } = req.body;
        const existedUser = await User.findOne({ email: email });
        if (existedUser)
            res.status(401).send("Email was used !");
        else {
            let newUser = new User({
                email: email,
                name: name,
                age: age,
                numberPhone: numberPhone,
                isAdmin: false,
                isVIP: false,
                password: await bcrypt.hash(password, 12),
                avatar: avatar,
            });
            loggerInfo('Save to databse....');
            let user = await newUser.save();
            loggerInfo(user);
            res.status(201).json(user);
        }
    }
    catch (err) {
        loggerError(err);
        res.status(500).json(err);
    }
}

//Login

const login = async (req, res, next) => {
    try {
        const {
            email,
            password,
        } = req.body;
        loggerInfo('Find your email from databse....');
        const existedUser = await User.findOne({ email: email });
        if (!existedUser)
            res.status(401).send('Not found your user')
        else {
            loggerInfo('Find your password from databse....');
            let isUser = await bcrypt.compare(password, existedUser.password);

            if (!isUser)
                res.status(401).send('Wrong Password')
            else {
                let { password, ...info } = existedUser._doc;
                const accessToken = jwt.sign({id: existedUser._id, isAdmin: existedUser.isAdmin},process.env.secretKey,{expiresIn: "3d"})
                loggerInfo(info.email)
                res.status(200).json({...info,accessToken: accessToken});
            }
        }
    }
    catch (err) {
        loggerError(err);
        res.status(500).json(err);
    }
}

module.exports = { register, login }