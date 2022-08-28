// To naviaget to dom node to the children node we have to use the

// childrenNode-return all childNodes including the white space which treated as a text node
// children -return just the child node no whitespace included
// firstChild - return the first child node undertstading there could be whitespace
// lastChild - return the last child node undertstading there could be whitespace

// childrenNode
const result = document.querySelector("#result");
const allChildren = result.childNodes;
console.log(allChildren);

const children = result.children;
console.log(children);
