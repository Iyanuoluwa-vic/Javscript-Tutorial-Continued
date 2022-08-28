// reduce to a single value
// iterate callback fuction
// 1st parameter ("acc")=total of all caulculation
// 2st parameter ("curr")=current iteration/value
const people = [
  { name: "victor", age: 12, position: "sof ", id: 1, salary: 200 },
  { name: "james", age: 122, position: "sd", id: 1, salary: 200 },
  { name: "mic", age: 13, position: "rre", id: 3, salary: 200 },
];

const total = people.reduce(function (acc, curr) {
  // console.log(`total ${acc}`);
  // console.log(`current money: ${curr.salary}`);
  acc += curr.salary;
  return acc;
}, 0);

console.log(total);
