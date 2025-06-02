const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("succès");
  }, 4000); // 4000 millisecondes = 4 secondes
});

promise.then(result => console.log(" Résolu :", result));
promise.catch(error => console.log(" Rejeté :", error));
