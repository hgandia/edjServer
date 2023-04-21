const express = require('express');
const cors = require('./cors');

const eventsRouter = express.Router();

eventsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('respond with a resource for events page');
})
.post(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('POST operation not supported for /events');
})
.put(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /events');
})
.delete(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /events');
});

module.exports = eventsRouter;
