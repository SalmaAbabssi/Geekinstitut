const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const filePath = "users.json";

function readUsers() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// POST /register
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!username || !password) return res.send("erreur 1");

  const users = readUsers();
  const exists = users.find(u => u.username === username);
  if (exists) return res.send("erreur 1");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  try {
    writeUsers(users);
    res.send("registre");
  } catch (err) {
    res.status(500).send("Erreur lors de l'enregistrement");
  }
});

// POST /login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.send("erreur 2");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.send("erreur 2");

  res.send("se connecter");
});

// GET /users
router.get("/users", (req, res) => {
  const users = readUsers().map(({ password, ...rest }) => rest);
  res.json(users);
});

// GET /users/:id
router.get("/users/:id", (req, res) => {
  const user = readUsers().find(u => u.id === req.params.id);
  if (!user) return res.status(404).send("Utilisateur non trouvé");
  const { password, ...userData } = user;
  res.json(userData);
});

// PUT /users/:id
router.put("/users/:id", (req, res) => {
  let users = readUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).send("Utilisateur non trouvé");

  users[index] = { ...users[index], ...req.body };
  try {
    writeUsers(users);
    res.send("Utilisateur mis à jour");
  } catch (err) {
    res.status(500).send("Erreur de mise à jour");
  }
});

module.exports = router;
