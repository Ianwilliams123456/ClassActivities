// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let varstring = 'number';
let varnum = 4;
let varbool = true;
let varundef;
let varnull = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof varstring);
console.log(typeof varnum);
console.log(typeof varbool);
console.log(varundef);
console.log(varnull);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let favnum = `"My favorite ${varstring} is ${varnum}"`;
// reassign the value of the variable that references "null"
varnull = "narwhal";
// print the value and its type
console.log(varnull);
console.log(typeof varnull);
// print a variable that causes a ReferenceError
console.log(varerror);
// alter the previous line to no longer cause a ReferenceError
console.log(varstring);
