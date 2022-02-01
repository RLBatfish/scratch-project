const db = require('../../sql/dbConnection.js');

const dateController = {

  getEvents: function(req, res, next) {
    db.query('SELECT * FROM EVENTS;')
      .then(resp => {
          res.locals.events = resp.rows;
          return next();
        })
      .catch(err => next({
        log: `dateController newEvent ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        err: {err: 'Error at dateController newEvent. Check server logs for more information.'}
    }))
  },

  newEvent: function (req, res, next) {
    const { nameF, startF, endF, descriptionF, locationF, participantsF } = req.body;

    db.query(`INSERT INTO events (calendar_id, description, name, start_date, end_date, location, participants)
      VALUES ('2', '${descriptionF}', '${nameF}', '${startF}', '${endF}', '${locationF}', '${participantsF}')
      RETURNING *;`)
      .then(resp => {
          res.locals.newEvent = resp.rows;
          return next();
        })
      .catch(err => next({
          log: `dateController newEvent ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
          err: {err: 'Error at dateController newEvent. Check server logs for more information.'}
      }));
  }

};

module.exports = dateController;