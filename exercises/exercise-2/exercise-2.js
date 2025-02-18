let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

let [ gryff1, gryff2, gryff3, , , , , , gryff4, gryff5 ] = hogwarts;

function houseGryffindor(house) {  
  house.forEach(person => {
    if(person.house === "Gryffindor") console.log(`${person.firstName} ${person.lastName}`);
  });
}
houseGryffindor(hogwarts);

function teacherHasPet(house) {
  house.forEach(person => {
    if(person.occupation === "Teacher" && person.pet !== null) {
      console.log(`${person.firstName} ${person.lastName}`);
    }
  }); 
}
teacherHasPet(hogwarts);


// console.log(`
// ${gryff1.firstName} ${gryff1.lastName}
// ${gryff2.firstName} ${gryff2.lastName}
// ${gryff3.firstName} ${gryff3.lastName}
// ${gryff4.firstName} ${gryff4.lastName}
// ${gryff5.firstName} ${gryff5.lastName}
// `);