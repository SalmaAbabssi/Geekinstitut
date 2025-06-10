// app.js - Avec dynamic import
(async () => {
    const chalk = (await import('chalk')).default;
    
    console.log(chalk.blue('🔵 Bonjour le monde en bleu !'));
    console.log(chalk.red('🔴 Texte rouge pour les erreurs'));
    // ... reste du code
})();