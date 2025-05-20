// Exercise 5: Family
const family = {
  father: "Ali",
  mother: "Nadia",
  daughter: "Lina",
};

for (let key in family) {
  console.log("Key:", key);
}

for (let key in family) {
  console.log("Value:", family[key]);
}