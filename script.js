'use strict';
///////////////////////////////////////
// The this Keyword Introduction

const kelsy1 = {    // object kelsy
    name: 'Kelsy',
    year: 1991,
    calcAge: function () {     // calcAge is the method
        return 2022 - this.year; //same as kelsy.year which in turn would be kelsy.1991
    }
};
console.log(kelsy1.calcAge());



console.log(this); // this keyword of parent scope which is window object

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);  // undefined because of strict mode, gets its own this keyword
};
calcAge(1991); // regular function call, call of the function without function being attached to any object or 'owner'


const calcAgeArrow = birthYear => {
    console.log(2022 - birthYear);
    console.log(this); // this keyword of parent scope which is window object
};
calcAgeArrow(1980);

// calcAge method is written inside kelsy object, this is not why 'this' keyword points to kelsy,
// it points to the object becuase the kelsy was the object calling the method -- kelsy.calcAge() --
const kelsy2 = {    // object kelsy
    year: 1991,
    calcAge: function () {
        console.log(2022 - this.year);

        // inside of calcAge 'this' is kelsy
        console.log(this); // 'this' object, will print contents of kelsy
        // when there is a method call the 'this' keyword inside of the method will be the object that is calling the method..the kelsy object
    }
};
kelsy2.calcAge();
// kelsy.calcAge(1991); // 'this' keyword helps not having to repeat this information inside the object




///////////////////////////////////////
// Hoisting
/*

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


// Example -- suppose you write this code thinking numProducts will be 10 and if it's 0 than deleteShopping cart
// undefined is a falsey value
// below numProducts is NOT 10 it's undefined becuase of how hoisting works with var variables
// the entire cart gets accidently deleted :(
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

// Another example of why not to use var
var x = 1; // shows the property of x=1 on the window object
let y = 2;
const z = 3;

// the window object in the console is the global object of Javascript in the browser
console.log(x === window.x);  // is x a property of the window object? true
console.log(y === window.y);  // is x a property of the window object? false
console.log(z === window.z);  // is x a property of the window object? false
*/


///////////////////////////////////////
// Scoping pt2
/*
function calcAge(birthYear) {
    const age = 2022 - birthYear;

    //print age scope
    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);  // prints 'Kelsy, You are 31, born in 1991'

        // if block scope
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            //creating NEW variable with same name as outer scopes variable
            const firstName = 'Steven';  // this will print 'Steven' becuase javascript looks upwards in the scope and will see this first

            // Reassagning outer scopes variable
            output = 'NEW OUTPUT'; // this will print 'NEW OUTPUT' because child scope redefines from outser parent scope

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);  // prints 'Oh, and you're a millenial, Steven'

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(add(2, 3)); // *Reference error*
        // console.log(str); // *Reference error*
        console.log(millenial); // prints true
        console.log(output); // prints'NEW OUTPUT'
    }
    printAge();
    return age;
}
const firstName = 'Kelsy'; // global variable
calcAge(1991);
*/


///////////////////////////////////////
// Scoping pt1
/*
function calcAge(birthYear) {  // global scope
    const age = 2022 - birthYear;

    // through scope chain this function has access to global variable (firstName)
    console.log(firstName); // prints 'Kelsy'

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output); // prints 'Kelsy, You are 31, born in 1991'

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // always use const or let dont use var
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str); // prints 'Oh, and you're a millenial, Kelsy'
        }
        // console.log(str); // *Reference error* const and let variables are block scoped, only the if block has access to this
        console.log(millenial); // this will print true because var variables are function scoped
    }
    printAge();
    return age;
}

const firstName = 'Kelsy'; // global variable
calcAge(1991);
//console.log(age); // *Reference error* you don't have access to 'age'
//printAge(); //*Reference error* only allowed in calcAge scope
//console.log(millenial); // *Reference error* var is function scoped
*/