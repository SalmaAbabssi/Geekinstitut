const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware pour parser le JSON dans le corps des requêtes
app.use(express.json());

// Routes utilisateurs
app.use('/api', userRoutes);

// Route racine simple
app.get('/', (req, res) => {
  res.send('API gestion des utilisateurs est en ligne 🚀');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
