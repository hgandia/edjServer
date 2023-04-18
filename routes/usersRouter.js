const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.route('/')
.get(authenticate.verifyUser, authenticate.verifyAdmin, function(req, res, next) {
      User.find()
      .then(users => {
        if(!users){
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.end('There are no users!');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(users);
        }
      })
      .catch(err => next(err));
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
      User.deleteMany()
      .then(response => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(response);
      
      })
      .catch(err => next(err));
});

usersRouter.post('/signup', (req, res) => {
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      (err, user) => {
        if(err){
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
        } else {
          if(req.body.firstname){
            user.firstname = req.body.firstname;
          }
          if(req.body.lastname){
            user.lastname = req.body.lastname;
          }
          if(req.body.admin){
            user.admin = req.body.admin; 
          }          
          user.save(err => {
            if(err){
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({err: err});
              return;
            }
            passport.authenticate('local')(req, res, () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({ success: true, status: 'Registration Successful!' });
            });
          });
        }
      }
    );
});

usersRouter.post('/login', passport.authenticate('local'), (req, res) => {
      const token = authenticate.getToken({ _id: req.user._id });
      console.log('req.user: ', req.user);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: true, token: token, status: 'You are succesfully logged in!' });
});

usersRouter.get('/logout', (req, res, next) => {
    if(req.session){
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
    } else {
      const err = new Error('You are not logged in!');
      err.status = 401;
      return next(err);
}
});

module.exports = usersRouter;
