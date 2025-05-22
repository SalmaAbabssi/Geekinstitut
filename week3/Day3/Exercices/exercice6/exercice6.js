// 1. Change the id from navBar to socialNetworkNavigation
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// 2. Add a new <li> with "Logout"
const ul = navDiv.querySelector("ul");
const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);
ul.appendChild(newLi);

// 3. Display the first and last <li> text
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First item:", firstLi.textContent);   // "Profile"
console.log("Last item:", lastLi.textContent);     // "Logout"
