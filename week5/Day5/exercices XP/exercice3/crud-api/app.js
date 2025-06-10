// data/dataService.js
const axios = require('axios');

// URL de base pour l'API JSONPlaceholder
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fonction pour récupérer tous les posts depuis JSONPlaceholder
 * @returns {Promise} - Promesse qui résout avec les données des posts
 */
async function fetchPosts() {
    try {
        console.log('📡 Récupération des posts depuis JSONPlaceholder...');
        
        // Effectuer la requête GET vers l'API JSONPlaceholder
        const response = await axios.get(`${BASE_URL}/posts`);
        
        console.log(`✅ ${response.data.length} posts récupérés avec succès !`);
        
        // Retourner les données des posts
        return response.data;
        
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des posts:', error.message);
        throw new Error('Impossible de récupérer les posts depuis l\'API externe');
    }
}

/**
 * Fonction pour récupérer un post spécifique par son ID
 * @param {number} id - ID du post à récupérer
 * @returns {Promise} - Promesse qui résout avec les données du post
 */
async function fetchPostById(id) {
    try {
        console.log(`📡 Récupération du post avec l'ID ${id}...`);
        
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        
        console.log(`✅ Post ${id} récupéré avec succès !`);
        
        return response.data;
        
    } catch (error) {
        console.error(`❌ Erreur lors de la récupération du post ${id}:`, error.message);
        throw new Error(`Impossible de récupérer le post avec l'ID ${id}`);
    }
}

// Exporter les fonctions
module.exports = {
    fetchPosts,
    fetchPostById
};const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// part 3
const { fetchPosts } = require('./data/dataService');

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('posts fetched successfully');
        res.json(posts);
    } catch (error) {
        console.error('error fetching posts:', error.message);
        res.status(500).json({ error: 'failed to fetch posts' });
    }
})