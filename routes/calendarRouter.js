const express = require('express');

const calendarRouter = express.Router();

calendarRouter.route('/')
.get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('respond with a resource for calendar page');
})
.post((req, res) =>{
  res.statusCode = 403;
  res.end('POST operation not supported for /calendar');
})
.put((req, res) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported for /calendar');
})
.delete((req, res) =>{
  res.statusCode = 403;
  res.end('DELETE operation not supported for /calendar');
});

module.exports = calendarRouter;
