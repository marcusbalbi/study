const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql')
const schema = require('./src/graphql')
// setup mongoose
mongoose.Promise = Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/myrentals', { useMongoClient: true });
}

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
