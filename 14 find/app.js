// return sinlge instance(in this case object)
// return just first match
// great for getting unique value
const people = [
  { name: "victor", age: 12, position: "sof ", id: 1 },
  { name: "james", age: 122, position: "sd", id: 1 },
  { name: "mic", age: 13, position: "rre", id: 3 },
];

// return a single instance which is object
const person = people.find(function (people) {
  return people.id == 3;
});

// return all the array
console.log(person);

console.log(person.age);
