const express = require('express');
const cors = require('./cors');

const ninosRouter = express.Router();

ninosRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.statusCode(200))
.get(cors.cors, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('respond with a resource for niños page');
})
.post(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('POST operation not supported for /ninos');
})
.put(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /ninos');
})
.delete(cors.corsWithOptions, (req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /ninos');
});

module.exports = ninosRouter;
