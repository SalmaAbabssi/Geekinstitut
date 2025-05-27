const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let suffix = ordinal[index + 1] || "th";
  console.log(`Le ${index + 1}${suffix} choix est le ${color.toLowerCase()}.`);
});
