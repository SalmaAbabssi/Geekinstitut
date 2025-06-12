const { Pool } = require('pg');

const pool = new Pool({
  user: 'salma',      // ex: 'postgres'
  host: 'localhost',
  database: 'blog',                      // le nom de ta base créée
  password: 'S@lma2000',          // ton mdp postgres
  port: 5432,
});

module.exports = pool;
