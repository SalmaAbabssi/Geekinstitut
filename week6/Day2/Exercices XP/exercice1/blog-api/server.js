const pool = require('./config/db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur connexion DB', err);
  } else {
    console.log('Connexion DB OK :', res.rows[0]);
  }
});

const express = require('express');

const app = express();

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Route simple de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Blog');
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
