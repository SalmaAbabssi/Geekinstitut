const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// Étudiants qui ont réussi
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// Bonus : félicitations
passedStudents.forEach(student => {
  console.log(`Bon travail ${student.name}, tu as réussi le cours en ${student.course}.`);
});
