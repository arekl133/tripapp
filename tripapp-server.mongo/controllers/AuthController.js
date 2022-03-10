const jwt = require('jsonwebtoken');
const User = require('../models/User');
const catchAsync = require('../utilis/catchAsync');
const AppError = require('../utilis/appError')
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.singup = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);

    const token = signToken(newUser._id)
    

    res.status(201).json({
        status:'success',
        token,
        data: {
            user: newUser
        }
    });
});

exports.login = catchAsync (async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        next(new AppError('Please provide email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');
    

    if(!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401))
    }

    console.log(user)

    const token = signToken(user._id);
    res.status(200).json({
        status: 'succes',
        token
    })

});