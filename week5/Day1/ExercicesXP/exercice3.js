const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(value => {
  console.log(" Résolu :", value); // Affiche : 3
});

const rejectedPromise = Promise.reject("Bouh !");

rejectedPromise.catch(error => {
  console.log(" Rejeté :", error); // Affiche : Bouh !
});