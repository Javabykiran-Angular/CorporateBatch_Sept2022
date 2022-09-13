//Anonymous Function
// function does not have any name
var temp1 = function () {
    console.log("Anonymous function is called.");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(8, 4);
// console.log("Result is "+res)
// Fat arrow function/Arrow function
var temp3 = function () {
    console.log("fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`Addition is ${temp4(7,7)} `)
// optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
//  add1(4);
// add1(4,6);
function add2(a, b) {
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
// add2();
// add2(9,2)
// default parameter function
function add3(a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
// add3(5);
// add3(10,3);
function add4(a, b) {
    if (a === void 0) { a = 7; }
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
// add4(6,5);
function add5(a, b) {
    if (a === void 0) { a = 7; }
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
add5();
