// Get element by id

var eltid = document.getElementById("world");
console.log(eltid);

// Get parent node
console.log(eltid.parentElement);

// get previous sibling
var nxtsib = eltid.previousElementSibling;
console.log(nxtsib);

var par = eltid.parentNode;
console.log(par.children);

var tagn = document.getElementsByTagName("p");
console.log(tagn);
