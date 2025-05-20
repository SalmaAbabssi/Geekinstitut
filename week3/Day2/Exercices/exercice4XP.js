//
//  Exercise 4: Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log("Number of floors:", building.numberOfFloors);
console.log("Apartments on 1st and 3rd floors:", building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log("Second tenant name:", building.nameOfTenants[1]);
console.log("Rooms:", building.numberOfRoomsAndRent.dan[0]);

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent increased to 1200");
}