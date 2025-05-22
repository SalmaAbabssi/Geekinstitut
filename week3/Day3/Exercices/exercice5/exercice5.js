// 1. Retrieve the div and log it
const container = document.getElementById("container");
console.log(container);

// 2. Change “Pete” to “Richard”
const firstList = document.querySelectorAll(".list")[0];
firstList.children[1].textContent = "Richard";

// 3. Delete the second <li> of the second <ul>
const secondList = document.querySelectorAll(".list")[1];
secondList.removeChild(secondList.children[1]); // removes "Sarah"

// 4. Change the first <li> of each <ul> to your name
const allLists = document.querySelectorAll(".list");
allLists.forEach(list => {
  list.children[0].textContent = "Salma";
});

// 5. Add a class called student_list to both <ul>
allLists.forEach(list => {
  list.classList.add("student_list");
});

// 6. Add the classes university and attendance to the first <ul>
firstList.classList.add("university", "attendance");

// 7. Style the <div>: light blue background and padding
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 8. Do not display the <li> that contains “Dan”
const allLis = document.querySelectorAll("li");
allLis.forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

// 9. Add a border to the <li> that contains “Richard”
allLis.forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
});

// 10. Change font size of the whole body
document.body.style.fontSize = "18px";

// 11. Bonus: alert if background color is lightblue
if (container.style.backgroundColor === "lightblue") {
  const names = firstList.querySelectorAll("li");
  if (names.length >= 2) {
    alert(`Hello ${names[0].textContent} and ${names[1].textContent}`);
  }
}
