// this is to return the value in the element
const item = document.getElementById("special");

// this can be used to access the value
// const value = item.nodeValue;

const value = item.firstChild.nodeValue;
console.log(value);

// another easy way to get value without the childrenNode called with it
const value2 = item.textContent;
console.log(value2);
