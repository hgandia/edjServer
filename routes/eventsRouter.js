const express = require('express');

const eventsRouter = express.Router();

eventsRouter.route('/')
.get((req, res) => {
  console.log('req: ', req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for events page');
})
.post((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('POST operation not supported for /events');
})
.put((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('PUT operation not supported for /events');
})
.delete((req, res) =>{
  console.log('req: ', req)
  res.statusCode = 403;
  res.end('DELETE operation not supported for /events');
});

module.exports = eventsRouter;
