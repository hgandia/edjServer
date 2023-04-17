const express = require('express');
const Visitor = require('../models/visitor');
const contactusRouter = express.Router();
const authenticate = require('../authenticate');

contactusRouter.route('/')
.get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for the contactus page');
})
.post((req, res, next) =>{
  Visitor.create(req.body)
  .then(visitor => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(visitor);
  })
  .catch(err => next(err));
})
.put((req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /contactus');
})
.delete((req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /contactus');
});

contactusRouter.route('/visitors')
.get(authenticate.verifyUser, (req, res, next) => {
  if(!req.user.admin){
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end('You are not authorized to access records.');
  } else if(req.user.admin){
      Visitor.find()
      .then(visitors =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(visitors);
      })
      .catch(err => next(err));
  }
})
.post((req, res) =>{
  res.statusCode = 403;
  res.end('POST operation is not supported on /contactus/visitors');
})
.put((req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation is not supported on /contactus/visitors');
})
.delete(authenticate.verifyUser, (req, res, next) =>{
  if(!req.user.admin){
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end('You are not authorized to delete records.');
  } else if(req.user.admin){
      Visitor.deleteMany()
      .then(response => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(response);
      })
      .catch(err =>next(err));
    }
  });

  contactusRouter.route('/visitors/:visitorId')
  .get(authenticate.verifyUser, (req, res, next) => {
    if(!req.user.admin){
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.end('You are not authorized to access this record.');
    } else if(req.user.admin){
        Visitor.findById(req.params.visitorId)
        .then(visitor =>{
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(visitor);
        })
        .catch(err => next(err));
      }
        
  })
  .post((req, res) =>{
    res.statusCode = 403;
    res.end(`POST operation is not supported on /contactus/visitors/${req.params.visitorId}/`);
  })
  .put((req, res) =>{
    res.statusCode = 403;
    res.end(`PUT operation is not supported on /contactus/visitors/${req.params.visitorId}/`);
  })
  .delete(authenticate.verifyUser, (req, res, next) =>{
    if(!req.user.admin){
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.end('You are not authorized to delete record.');
    } else if(req.user.admin){
        Visitor.findByIdAndDelete(req.params.visitorId)
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err =>next(err));
      }
    });

module.exports = contactusRouter;
