// querySelector select a single element and can use the forEach method
// querySelectorAll select a all  element and can use the forEach method

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

console.log(result);

const item = document.querySelector(".special");
console.log(item);

const lastItems = document.querySelector("li:last-child");
console.log(lastItems);

const list = document.querySelectorAll(".special");
console.log(list);

list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
