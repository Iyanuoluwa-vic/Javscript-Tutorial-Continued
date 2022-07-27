const people = [
  { name: "John", age: 20 },
  { name: "Peter", age: 30 },
  { name: "Mary", age: 25 },
];

function showPerson(person) {
  console.log(person);
  console.log(person.name.toUpperCase());
}

// The forEach() method calls a function for each element in an array.
people.forEach(showPerson);

const car = [
  { name: "jaguar", year: 1956 },
  { name: "toyota", year: 1922 },
];

// The forEach() method calls a function for each element in an array.
car.forEach(function (cars) {
  console.log(cars);
});
