const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ["bread", "carrot", "potato", "chicken", "apple", "orange"]
//question 

const country = "USA";
console.log([...country]); // ["U", "S", "A"]
//bonus

let newArray = [...[,,]];
console.log(newArray); // [undefined, undefined]
