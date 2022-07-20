// let of the array
let names = ["John", "Jane", "Mary", "Mark", "Bob"];

console.log(names.length);

// reverse
let car = ["kir", "mik", "fili"];

console.log(car.reverse());

// concat it use to combine to string
let men = ["kir", "mik", "fili"];
let boys = ["ikls", "mik", "fili"];

let combine = men.concat(boys);
console.log(combine);

// and somthing to the front with unshift
let toys = ["iphone", "blackberry", "jaguar"];
toys.unshift("matina");
console.log(toys);

// shift it remove from from frot of the array
toys.shift();
console.log(toys);

// push it add something to end of the array
toys.push("steven");
console.log(toys);

// pop remove from end og the array
toys.pop();
console.log(toys);

// splice mutate the orginal array the first value is position and last is how many value to mutate
const mutate = toys.splice(0, 2);
console.log(mutate);
