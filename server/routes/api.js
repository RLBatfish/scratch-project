const express = require('express');
const router = express.Router();
const dateController = require('../controllers/dateController.js');

//front end should call router at api endpoint to populate
//grid with days

//front end should call router at api/event to populate db
//receives response back from db and sends in response back to front end

router.get('/', dateController.getEvents, (req, res) => {
  // console.log('req.body', req.body)
  // console.log('we have a res.body = ', res.locals.events)
  return res.status(200) //.send(res.locals.events);
});

router.post('/event', dateController.newEvent, (req, res) => {
  console.log('after middlewear', res.locals.newEvent);
  return res.status(200) //.send(res.locals.nwEvent);
});

module.exports = router;