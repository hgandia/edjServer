const express = require('express');

const ninosRouter = express.Router();

ninosRouter.route('/')
.get((req, res) => {
  console.log('req: ', req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for niños page');
})
.post((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('POST operation not supported for /ninos');
})
.put((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('PUT operation not supported for /ninos');
})
.delete((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('DELETE operation not supported for /ninos');
});

module.exports = ninosRouter;
