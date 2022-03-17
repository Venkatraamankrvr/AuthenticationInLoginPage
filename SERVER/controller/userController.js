const User = require("../models/User")
const catchAsync = require("../utils/catchAsync")

exports.getAllUser = catchAsync(async (req, res, next) => {
  const user = await User.find()

  console.log('====================================');
  console.log('Getting All Users List...');
  console.log('====================================');


  res.status(200).json({
    status: 'sucess',
    results: user.length,
    data: { user }
  })
})