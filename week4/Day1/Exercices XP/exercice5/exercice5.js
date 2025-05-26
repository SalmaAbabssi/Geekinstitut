// 1. Déclaration de fonction

function convertKgToGrams(weightKg) {
    return weightKg * 1000;
}
console.log(convertKgToGrams(2)); // 2000

//"EXPRESSION" 
const convert = function(weightKg) {
    return weightKg * 1000;
}
// Fonction fléchée
console.log(convert(1.5)); // 1500const convertArrow = kg => kg * 1000;
console.log(convertArrow(5)); // 5000
