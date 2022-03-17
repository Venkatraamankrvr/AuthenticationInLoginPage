const jwt = require('jsonwebtoken');

const User = require("../models/User")
const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/AppError")

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

exports.signup = catchAsync((async (req, res, next) => {
  console.log('SIGNUP...')
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    type: req.body.type,
  });
  // const newUser = await User.create(req.body)

  const token = signToken(newUser._id);


  res.status(201).json({
    status: "SUCCESS",
    token,
    data: {
      user: newUser
    }
  });
  console.log("SIGNUP SUCCESS")

  // res.send('hi')
}))

exports.login = catchAsync(async (req, res, next) => {
  console.log("LOGGING...");
  const { email, password, type } = req.body

  // const req1 = req.body;
  // 1. checking the email and password
  if (!email || !password) {

    res.status(401).json({
      status: 'FAILURE',
      message: "Invalid Input",
    })
    return next(new AppError("Plsease provide valid Credentials", 400))
    // next()
  }
  console.log('====================================');
  console.log(email, password);
  console.log('====================================');
  // 2.Checking the user credentials is correct.
  const user = await User.findOne({ email }).select("+password")
  console.log('====================================');
  console.log(user.type);
  console.log('====================================');

  // correctpassword is instance method
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("InCorrect Password or Email", 401))
  }



  // 3/if all okay send ok to client
  const token = signToken(user._id)
  if (user.type === "admin") {
    return res.status(200).json({
      status: "SUCESS",
      message: "admin",
      email, password,
      token
    })
  } else {
    res.status(200).json({
      status: "SUCESS",
      message: "user",
      email, password,
      token
    })
  }


  console.log("LOGIN SUCCESS")
  // console.log(req1);
})


