const express = require('express');
const userRouter = require('./routes/userRoute');

const app = express();
const cors = require('cors');
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: true }));
app.use('/api/v1/users', userRouter);
// module.exports = app;

module.exports = app;
