// Exercise 7: Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretName = names.map(name => name[0]).sort().join("");
console.log("Secret society name:", secretName);
