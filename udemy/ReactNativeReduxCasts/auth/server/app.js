const connection = require('./models/connection')
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const app = express();
connection()

app.use(cors())
app.use(logger('dev'));
app.use(express.json());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
