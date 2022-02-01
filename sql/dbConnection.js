const { Pool } = require('pg');

const PG_URI = 'postgres://riiakhon:N9mtw3SBbVx5cbLzqj0VrGcvJR-NkgKO@kashin.db.elephantsql.com/riiakhon';

const fishPool = new Pool ({
    connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return fishPool.query(text, params, callback);
  }
};