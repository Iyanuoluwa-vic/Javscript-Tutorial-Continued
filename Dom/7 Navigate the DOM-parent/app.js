// parentElement is used to return the parent node of the element
const heading = document.querySelector("h2");
const parent = heading.parentElement;
console.log(parent);

// this traver twice to the parent
const mainParent = heading.parentElement.parentElement;
console.log(mainParent);
