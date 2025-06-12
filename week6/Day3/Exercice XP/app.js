const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Route racine
app.get('/', (req, res) => {
  res.send('API Gestion des tâches avec stockage JSON est en ligne 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
