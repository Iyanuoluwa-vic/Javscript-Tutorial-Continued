const name1 = "james";
const name2 = name1;

console.log(`${name1} ${name2}`);

// object
// when we reference object to another object and make change to one object we make changes to both
const name3 = {
  name: "peter",
};

let name4 = name3;

console.log(`${name3.name} ${name4.name}`);

name4.name = "kiki";
console.log(`${name3.name} ${name4.name}`);
