const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',        // ou ton nom d'utilisateur PostgreSQL
    password: 'your_password', // mets ici ton mot de passe
    database: 'userdb'
  }
});

// Créer les tables si elles n'existent pas
async function createTables() {
  const usersExists = await db.schema.hasTable('users');
  if (!usersExists) {
    await db.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('email').unique();
      table.string('username').unique();
      table.string('first_name');
      table.string('last_name');
    });
  }

  const hashpwdExists = await db.schema.hasTable('hashpwd');
  if (!hashpwdExists) {
    await db.schema.createTable('hashpwd', table => {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
    });
  }
}

createTables();

module.exports = db;
