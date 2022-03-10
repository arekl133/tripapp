const User = require('../models/User');
const catchAsync = require('../utilis/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        results: User.length,
        data: {
            users
        }
    });
});