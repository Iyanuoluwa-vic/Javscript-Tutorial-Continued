// the .nextSibling.nextSibling return the next element after the specfic elemtn
const first = document.querySelector(".first");
const nextElement = first.nextSibling.nextSibling;
console.log(nextElement);

// the .previousSibling.previousSibling return the previous element
const last = document.querySelector(".last");
const previousElement = last.previousSibling.previousSibling;
console.log(previousElement);
