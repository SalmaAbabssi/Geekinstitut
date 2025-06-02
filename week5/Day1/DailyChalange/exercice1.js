function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} est inférieur ou égal à 10`);
    } else {
      reject(`${num} est supérieur à 10`);
    }
  });
}
compareToTen(15) // devrait rejeter
  .then(result => console.log(" Résolu :", result))
  .catch(error => console.log(" Rejeté :", error));
