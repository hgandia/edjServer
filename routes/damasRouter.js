const express = require('express');

const damasRouter = express.Router();

damasRouter.route('/')
.get((req, res) => {
  console.log('req: ', req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for damas page');
})
.post((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('POST operation not supported for /damas');
})
.put((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('PUT operation not supported for /damas');
})
.delete((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('DELETE operation not supported for /damas');
});

module.exports = damasRouter;
