//Required middleware needed
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
const homeRouter = require('./routes/homeRouter');
const caballerosRouter = require('./routes/caballerosRouter');
const damasRouter = require('./routes/damasRouter');
const jovenesRouter = require('./routes/jovenesRouter');
const ninosRouter = require('./routes/ninosRouter');
const aboutusRouter = require('./routes/aboutusRouter');
const eventsRouter = require('./routes/eventsRouter');
const calendarRouter = require('./routes/calendarRouter');
const contactusRouter = require('./routes/contactusRouter');

const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');

//Connecting to MongoDB Server via Mongoose
const url = config.mongoUrl;
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log('Connected to MongoDB Server Correctly.'), err => console.log(err);
});

const app = express();

//secure traffic only
app.all('*', (req, res, next) => {
    if(req.secure){
      return next();
    } else {
        console.log(`Redirecting to: https://${req.hostname}:${app.get('secPort')}${req.url}`);
        res.redirect(301, `https://${req.hostname}:${app.get('secPort')}${req.url}`);
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));


app.use('/home', homeRouter);
app.use('/caballeros', caballerosRouter);
app.use('/damas', damasRouter);
app.use('/jovenes', jovenesRouter);
app.use('/ninos', ninosRouter);
app.use('/aboutus', aboutusRouter);
app.use('/events', eventsRouter);
app.use('/calendar', calendarRouter);
app.use('/contactus', contactusRouter);


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
