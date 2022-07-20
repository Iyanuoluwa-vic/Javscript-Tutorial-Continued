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

// 7. refactor to object parameter  this allows us to pass in an object with the properties we want to use by calling the property name

function fullName1({ firstName, lastName }) {
  let together = firstName.concat(lastName).toUpperCase();
  return together;
}
console.log(fullName1({ lastName: "Mayer", firstName: "John" }));
