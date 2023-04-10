const express = require('express');

const jovenesRouter = express.Router();

jovenessRouter.route('/')
.get((req, res) => {
  console.log('req: ', req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for jovenes page');
})
.post((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('POST operation not supported for /jovenes');
})
.put((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('PUT operation not supported for /jovenes');
})
.delete((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('DELETE operation not supported for /jovenes');
});

module.exports = jovenesRouter;
