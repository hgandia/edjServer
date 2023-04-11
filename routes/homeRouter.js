const express = require('express');

const homeRouter = express.Router();

homeRouter.route('/')
.get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for home page');
})
.post((req, res) =>{
  res.statusCode = 403;
  res.end('POST operation not supported for /home');
})
.put((req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /home');
})
.delete((req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /home');
});

module.exports = homeRouter;
