let text = " John Peter";
console.log(text);

// lenght of string
let result = text.length;
console.log(result);

// convert to lower case
console.log(text.toLocaleLowerCase());

// convert to upper case
console.log(text.toUpperCase());

console.log(result);

// character at specific index
console.log(text.charAt(0));

// index of character
console.log(text.indexOf("P"));

// remove the begining whitespace
console.log(text.trim());

// slice the string by index range
console.log(text.slice(0, 4));

// does it contain the string specifieced it return true or false
console.log(text.includes("er"));
