const resolved = Promise.resolve(3);
resolved.then(value => console.log(" Résolu :", value));
const rejected = Promise.reject("Bouh !");
rejected.catch(error => console.log(" Rejeté :", error));
