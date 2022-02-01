const express = require('express');
const router = express.Router();
const dateController = require('../controllers/dateController.js');

//front end should call router at api endpoint to populate
//grid with days

//front end should call router at api/event to populate db
//receives response back from db and sends in response back to front end

router.get('/', dateController.getEvents, (req, res) => {
  return res.status(200).send(res.locals.events);
});

router.post('/event', dateController.newEvent, (req, res) => {
  console.log(res.locals.newEvent);
  return res.status(200).send(res.locals.newEvent);
});




router.use((req, res, err) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.send(errorObj);
});

module.exports = router;