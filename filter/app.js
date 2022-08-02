// create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method
const people = [
  { name: "victor", age: 12, position: "sof " },
  { name: "james", age: 122, position: "sd" },
  { name: "mic", age: 13, position: "rre" },
];

const ageGreater = people.filter(function (people) {
  return people.age >= 13;
});

console.log(ageGreater);
