// local scope can not be access from code utside the block({})
// if not VAR

function calculateTotal() {
  const name = "vICTOR"; //can not be accessed out the fuction because it local

  becomeGlobal = "ss"; //it is global when the function is called because it has no keyword let or const
}

calculateTotal();
console.log(becomeGlobal);
