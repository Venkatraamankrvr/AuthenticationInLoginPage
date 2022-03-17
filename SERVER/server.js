// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// // dotenv.config({ path: './config.env' });
// require('dotenv').config();


// const app = require('./app');
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));

// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
// // process.on('uncaughtException', function (err) {
// //   console.log(err, "jsdkjsnkjskdjmskdjncmksjdncksjndckjsndkcjskdcjnskdcnskjdk");
// //   server.close()
// // });



const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: true }));

const userRouter = require('./routes/userRoute');

app.use('/api/v1/users', userRouter);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));
// dotenv.config({ path: "./config.env" });

app.get('/', function (req, res) {
  console.log('====================================');
  console.log("EXpress");
  res.send('EXpress Here');
  console.log('====================================');
})

app.post("/test", (req, res) => {
  res.status(200).send("hi");
});

app.listen(2222, () => {
  console.log(`App running on port 2222...`);
});