const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

// Routes liées aux utilisateurs
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);

module.exports = router;
