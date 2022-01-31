const db = require('../../sql/dbConnection.js');

const dateController = {

  getEvents: async function(req, res, next) {
    const response = await db.query('SELECT * FROM EVENTS;');
    res.locals.events = response.rows;
    next();
  },

  newEvent: async function (req, res, next) {
    console.log('this is in the controller')
    await db.query(`INSERT INTO events (calendar_id, description, name, start_date, end_date, location, participants)
      VALUES ('2', 'Wow router workerd', 'Test Event', '2022-01-01 04:30:00', '2022-01-01 08:30:00', 'test area', 'all of us');`);
    const response = await db.query(`SELECT * FROM events WHERE name = 'Test Event'`);
    res.locals.newEvent = response.rows;
    next();
  }

};

module.exports = dateController;