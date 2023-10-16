var express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const { handleError } = require('./public/javascripts/handleError')
const { serverStart } = require('./public/javascripts/user.service');

var app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

const mongodbParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = 'fullstack-test-db';
const mon = `mongodb://${'localhost'}:27017/${dbName}`


// view engine setup
app.use(express.json());

app.use('/users', require('./public/javascripts/user.router') )

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  throw new Error('Not found')
});

app.use(handleError)

app.listen(4000,()=>{
  console.log(`Listening on ${4000}`)
  mongoose
  .connect(mon, mongodbParams) 
  .then(() => {
    serverStart();
    console.log("Connected to MongoDB")
  })
  .catch((err) => console.log(err));
})

module.exports = app;
