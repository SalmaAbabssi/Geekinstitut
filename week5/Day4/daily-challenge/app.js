// app.js
// Import du module greeting.js
const greet = require('./greeting.js');

// Utilisation de la fonction greet pour saluer un utilisateur
const nomUtilisateur = 'anis';
const messageAccueil = greet(nomUtilisateur);

// Affichage du message d'accueil
console.log(messageAccueil);

// Exemple avec un autre utilisateur
console.log(greet('salma'));
console.log(greet('meriem'));