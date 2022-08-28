let number = 8;

function add(num1, num2) {
  // if a name for a variable is been lookup it search the blcok first before it goes out to do.
  let number = 10; //this is the local variable it is used because it in the function

  return num1 * num2 * number;
}

console.log(add(2, 4));
