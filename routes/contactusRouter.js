const express = require('express');
const Visitor = require('../models/visitor');
const contactusRouter = express.Router();

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

module.exports = contactusRouter;
