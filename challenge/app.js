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
