const { Pool } = require('pg');
// const uri = require('./ted');
// // v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
// const myURI = uri;

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: 'postgres://aljglwxy:LEvBn3e1MJuWlmNJjd4o67PoFElwsoq_@chunee.db.elephantsql.com/aljglwxy'
});

// export standard query format
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
