// cache data for the things that do not change much
// calling an external api
// after TTL automatically deleted from the cache.
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const {errorHandler}=require('backend/middlewares/errorHandler');
const config = require('./config');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send("Welcome to the nodejs Cache app");
})

// error 404 
app.use((req, res, next) => {
  const err = new Error('Not Found');
  console.log(err);
  err.status = 404;
  res.send('Route Not Found');
  next(err);
});

// error handler middleware
// app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`${config.name} listening on port ${config.port}`)
})

