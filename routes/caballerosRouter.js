const express = require('express');

const caballerosRouter = express.Router();

caballerosRouter.route('/')
.get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for caballeros page');
})
.post((req, res) =>{
  res.statusCode = 403;
  res.end('POST operation not supported for /caballeros');
})
.put((req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /caballeros');
})
.delete((req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /caballeros');
});

module.exports = caballerosRouter;
