'use strict';
///////////////////////////////////////
// Hoisting

console.log("*****HOISTING VARIABLES*****")
// Variables
const myName = 'Kelsy';
if (myName === 'Kelsy') {
    const job = 'teacher'; // this nees to be the first line in the block
    console.log(`Kelsy is a ${job}`);
    const age = 2022 - 1991;
    console.log(age);
    // const job = 'teacher'; // this nees to be the first line in the block
    // console.log(x); // error this doesnt exist
}
console.log(me); // undefined
//console.log(job); // *Reference error*
// console.log(birthYear); // *Reference error*

var me = 'Kelsy'; // will get hoisted but it's undefined
let job = 'teacher'; // *Reference error* cannot access 'job' befoer initilization its in temperal dead zone
const birthYear = 1991; // *Reference error* cannot access 'job' beofer initilization its in temperal dead zone

console.log("*****HOISTING FUNCTIONS*****")
// Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3)); // *Reference error* cannot access
//console.log(addArrow(2, 3));  // *Reference error* cannot access

// you can call function declaration before it's defined through hoisting
function addDecl(a, b) {
    return a + b;
}

// because function is assigned to const vairable, const cannot be hoisted
// if its var, remember it hoists undefined, so error occurs saying not a function **undefined(2,3)
const addExpr = function (a, b) {
    return a + b;
}

// because function is assigned to const vairable, const cannot be hoisted
const addArrow = (a, b) => a + b;

console.log("*****HOISTING WRONG EXAMPLE*****")
// Example -- suppose you write this code thinking numProducts will be 10 and if it's 0 than deleteShopping cart
// undefined is a falsey value
// below numProducts is NOT 10 it's undefined becuase of how hoisting works with var variables
// the entire cart gets accidently deleted :(
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

console.log("*****HOISTING WITH VAR*****")
// Another example of why not to use var
var x = 1; // shows the property of x=1 on the window object
let y = 2;
const z = 3;

// the window object in the console is the global object of Javascript in the browser
console.log(x === window.x);  // is x a property of the window object? true
console.log(y === window.y);  // is x a property of the window object? false
console.log(z === window.z);  // is x a property of the window object? false
