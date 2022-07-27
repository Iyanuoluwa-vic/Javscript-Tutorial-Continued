// doesnt change size of orgignal array
// map is uses value from the orginal array to make new array

const people = [
  { name: "bob", age: 20, position: "devloper" },
  { name: "alica", age: 22, position: "devloper" },
];

const age = people.map(function (person) {
  return person.name;
});

console.log(age);

const car = [
  { name: "chevfy", year: 2001 },
  { name: "toyota", year: 2022 },
];

const nameAndYear = car.map(function (car) {
  return {
    name: car.name,
    year: car.year + 120,
  };
});

console.log(nameAndYear);

// place new create array in the document;
const carNames = car.map(function (cars) {
  return `<h1> ${cars.name} </h1>`;
});

document.body.innerHTML = carNames.join("");
console.log(carNames);
