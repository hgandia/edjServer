const express = require('express');
const cors = require('./cors');

const calendarRouter = express.Router();

calendarRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.statusCode(200))
.get(cors.cors, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('respond with a resource for calendar page');
})
.post(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('POST operation not supported for /calendar');
})
.put(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /calendar');
})
.delete(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /calendar');
});

module.exports = calendarRouter;
