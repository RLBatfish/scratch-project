const express = require('express');
const router = express.Router();


//front end should call router at api endpoint to populate
//grid with days

//front end should call router at api/event to populate db
//receives response back from db and sends in response back to front end

router.get('/', (req, res) => {
    console.log('we have a res.body = ', res.body)
    return res.status(200).json(res.body)
    })

router.post('/event', (req, res) => {
  return res.status(200).send('Hello from post request');
})

module.exports = router;