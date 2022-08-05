// getElementsByTagName
// index and legnth can be used but array ,ethods cannot be used like(forEach)
const heading = document.getElementsByTagName("h1");

heading[0].style.backgroundColor = "red";

const items = document.getElementsByTagName("li");
console.log(items);

// turning them to an array -with spreeadoperator[...]
const betterItems = [...items];

// calling them invidually with the forEach
betterItems.forEach(function (item) {
  console.log(item);
});

// return the all the array
console.log(betterItems);
