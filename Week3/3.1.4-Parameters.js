// Named Parameters
// write a function that takes two named parameters:
function parameterfun(param1, param2){
// print each named parameter,
console.log(param1);
console.log(param2);
// then return the parameters added together
return param1 + param2}
// invoke the function and pass in two numbers
parameterfun(1,5);
// invoke the function and pass in more than two numbers
parameterfun(1,6,7);
// invoke the function and pass in only one number
parameterfun(2);
// change the function to set default values for the parameters
function parameterfuntwo(param1 = 4, param2 = 7){
    // print each named parameter,
    console.log(param1, param2);
    // then return the parameters added together
    return param1 + param2}
// again, invoke the function and pass in only one number
parameterfuntwo(3);
// Rest Operator
// add a rest operator to the function's parameters
function parameterfunrest(param1, param2, ...param3){
    //print each named parameter,
    console.log(param1, param2);
    //then return the parameters added together
    return param1 + param2};
parameterfunrest(1,3,5,6,7,8,)
// add a line to the function's body to print the value of the rest operator
function parameterfunrestagain(param1, param2, ...param3){
    // print each named parameter,
    console.log(param1);
    console.log(param2);
    console.log(param3);
    // then return the parameters added together
    return param1 + param2 + param3}
// again, invoke the function and pass in more than two numbers
parameterfunrestagain(1,3,5,7,8,9,4);
