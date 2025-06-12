const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../tasks.json');

// Fonction pour lire le fichier JSON
async function readTasksFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Erreur lecture fichier');
  }
}

// Fonction pour écrire dans le fichier JSON
async function writeTasksFile(tasks) {
  try {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    throw new Error('Erreur écriture fichier');
  }
}

// GET /tasks - Récupérer toutes les tâches
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await readTasksFile();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /tasks/:id - Récupérer une tâche par ID
router.get('/tasks/:id', async (req, res) => {
  try {
    const tasks = await readTasksFile();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /tasks - Créer une nouvelle tâche
router.post('/tasks', async (req, res) => {
  try {
    const { title, description, status } = req.body;

    // Validation simple
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Le champ title est requis et doit être une chaîne' });
    }

    const tasks = await readTasksFile();

    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description: description || '',
      status: status || 'pending' // statut par défaut
    };

    tasks.push(newTask);
    await writeTasksFile(tasks);

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /tasks/:id - Mettre à jour une tâche par ID
router.put('/tasks/:id', async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const tasks = await readTasksFile();

    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }

    // Validation simple
    if (title && typeof title !== 'string') {
      return res.status(400).json({ error: 'Le champ title doit être une chaîne' });
    }

    // Mise à jour des champs
    if (title) tasks[index].title = title;
    if (description) tasks[index].description = description;
    if (status) tasks[index].status = status;

    await writeTasksFile(tasks);

    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /tasks/:id - Supprimer une tâche par ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const tasks = await readTasksFile();

    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }

    tasks.splice(index, 1);
    await writeTasksFile(tasks);

    res.json({ message: 'Tâche supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
