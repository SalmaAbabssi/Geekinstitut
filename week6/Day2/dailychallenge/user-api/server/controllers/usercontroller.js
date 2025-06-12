const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

// POST /register
async function register(req, res) {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    // Vérifier si tous les champs sont fournis
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'email, username et password sont obligatoires' });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Enregistrer l'utilisateur
    await userModel.createUser({ email, username, first_name, last_name }, hashedPassword);

    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  } catch (err) {
    console.error('Erreur register:', err);
    res.status(500).json({ error: 'Erreur serveur lors de l’inscription' });
  }
}

// POST /login
async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Vérifier si username et password sont fournis
    if (!username || !password) {
      return res.status(400).json({ error: 'username et password requis' });
    }

    // Récupérer l’utilisateur dans hashpwd
    const user = await userModel.getHashedPassword(username);

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    res.json({ message: 'Connexion réussie' });
  } catch (err) {
    console.error('Erreur login:', err);
    res.status(500).json({ error: 'Erreur serveur lors de la connexion' });
  }
}

// GET /users
async function getUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des utilisateurs' });
  }
}

// GET /users/:id
async function getUserById(req, res) {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur lors de la récupération de l’utilisateur' });
  }
}

// PUT /users/:id
async function updateUser(req, res) {
  try {
    const updated = await userModel.updateUser(req.params.id, req.body);
    if (updated === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.json({ message: 'Utilisateur mis à jour' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur lors de la mise à jour' });
  }
}

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  updateUser
};
