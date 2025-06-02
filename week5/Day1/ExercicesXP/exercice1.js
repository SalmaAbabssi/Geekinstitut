function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

// Test 1 : devrait rejeter
compareToTen(15)
  .then(result => console.log(" Résolu :", result))
  .catch(error => console.log(" Rejeté :", error));

// Test 2 : devrait résoudre
compareToTen(8)
  .then(result => console.log(" Résolu :", result))
  .catch(error => console.log(" Rejeté :", error));