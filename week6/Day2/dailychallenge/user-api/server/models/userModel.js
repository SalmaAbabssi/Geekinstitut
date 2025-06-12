const db = require('../config/db');

// Ajouter un utilisateur dans les deux tables avec une transaction
async function createUser(userData, hashedPassword) {
  return db.transaction(async trx => {
    const { email, username, first_name, last_name } = userData;

    await trx('users').insert({
      email,
      username,
      first_name,
      last_name
    });

    await trx('hashpwd').insert({
      username,
      password: hashedPassword
    });

    return { message: 'Utilisateur ajouté avec succès' };
  });
}

// Récupérer tous les utilisateurs
function getAllUsers() {
  return db('users').select('*');
}

// Récupérer un utilisateur par ID
function getUserById(id) {
  return db('users').where({ id }).first();
}

// Mettre à jour un utilisateur par ID
function updateUser(id, updates) {
  return db('users').where({ id }).update(updates);
}

// Récupérer le mot de passe haché par username
function getHashedPassword(username) {
  return db('hashpwd').where({ username }).first();
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getHashedPassword
};
