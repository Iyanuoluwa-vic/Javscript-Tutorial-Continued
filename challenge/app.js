// ## Strings #8

// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

function fullName(firstName, lastName) {
  let together = firstName.concat(lastName).toUpperCase();
  return together;
}

console.log(fullName("John", "Doe"));
console.log(fullName("Doe", "John"));

console.log("\n");
console.log(" refactor to object parameter");

// 7. refactor to object parameter  this allows us to pass in an object with the properties we want to use by calling the property name

function fullName1({ firstName, lastName }) {
  let together = firstName.concat(lastName).toUpperCase();
  return together;
}
console.log(fullName1({ lastName: "Mayer", firstName: "John" }));

console.log("\n");
console.log("Arrays and for loop");

// arrays and for loop
// create name and lastname combine the each name in the array with the lastname

// name["james" "faith"]
// lastname "mik"

// solution-"james mik" "faith mik"

const name = ["Iyanu", "Victor", "James", "sarah"];
const lastName = "Adeyeri";

let newArray = [];

for (let i = 0; i < name.length; i++) {
  let fullName = `${name[i]} ${lastName}`;

  newArray.push(fullName);
}

console.log(newArray);

const gas = [100, 20, 34, 24];
const food = [1, 5, 3, 5, 34];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (total > 100) {
    console.log("wHOA spending too much");
    return total;
  } else {
    console.log("you are good spend more but be carful");
    return total;
  }
}

let total = calculateTotal(gas);
console.log(total);

total = calculateTotal(food);
console.log(total);

// #### Create Students Array

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'peter',
//    score: 80,
//    favoriteSubject: 'math',
//    },

const students = [
  { id: 1, name: "peter", score: 80, favoriteSubject: "math" },
  { id: 2, name: "james", score: 60, favoriteSubject: "physics" },
  { id: 3, name: "sarah", score: 20, favoriteSubject: "weaving" },
  { id: 4, name: "lil", score: 30, favoriteSubject: "chemsitry" },
  { id: 5, name: "mat", score: 110, favoriteSubject: "bio" },
];

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

const newStudent = students.map(function (students) {
  students.role = "student";
  return students;
});

console.log(newStudent);

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const scoreGreater = students.filter(function (students) {
  return students.score >= 80;
  // or
  // if(students.score >= 80){
  //   return students
  // }
});

console.log(scoreGreater);

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specficId = students.find(function (students) {
  return students.id == 1;
});

console.log(specficId);

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log
const averageScore =
  students.reduce(function (cumTotaL, curr) {
    cumTotaL += curr.score;
    return cumTotaL;
  }, 0) / students.length;

console.log(averageScore);

// square bracket notation
//a way to add value to object
const subject = "art";
const totals = {};
totals[subject] = "some value;";

console.log(totals);

// or
totals.art = "some values";
console.log(totals);
