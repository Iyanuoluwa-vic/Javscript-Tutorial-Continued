// getAttributes is ued to get the attribute name for it
const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
console.log(classValue);
console.log(classValue);

// getAttributes  is ued to attribute of class and id
const link = document.querySelector("#link");
const last = link.nextElementSibling;
last.setAttribute("class", "third");
last.textContent = "I have attributes know";
console.log(last);
