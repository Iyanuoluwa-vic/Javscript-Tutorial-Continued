// truthy and falsy

// this are all falsy "", '', ``, 0, -0 ,undefined, null, false

const text = "";

if (text) {
  console.log("it is truthy");
} else {
  console.log("it is falsy");
}

const bool1 = true;
if (bool1) {
  console.log("it is truthy");
} else {
  console.log("it is falsy");
}
