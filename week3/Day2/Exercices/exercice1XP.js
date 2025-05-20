// Exercise 1: List of people
const people = ["Greg", "Mary", "Devon", "James"];

// Part I
people.shift(); // Remove "Greg"
people[people.indexOf("James")] = "Jason"; // Replace "James" with "Jason"
people.push("Salma"); // Add your name
console.log(people.indexOf("Mary")); // Mary's index
const peopleCopy = people.slice(1, -1); // Copy without Mary and your name
console.log(people.indexOf("Foo")); // Index of "Foo" -> -1 because it doesn't exist
const last = people[people.length - 1];
console.log("Last person:", last);

// Part II
for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}


