const delayPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("succès");
  }, 4000); // délai de 4000ms = 4 secondes
});
delayPromise.then(result => console.log("✅ Résolu après 4 secondes :", result));
delayPromise.catch(error => console.log("❌ Rejeté :", error));