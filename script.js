'use strict';
///////////////////////////////////////
// Objects vs. primitives
/*
Identifier points to the address and not the value itself 
So, age variable is equal to memory address 0001 which holds the value of 30
oldAge points to same memory address as age variable
--the value at a certain memory address cannot be changed, a new piece of memory is allocated
When setting age to 31 memory address 0002 is created and age identifier points to that
*/
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); //30
/*
1.	When a new object is created it is stored in the heap with memory address then value itself
2.	Me identifier points to new piece of memory in the stack
3.	Memory in the stack points to the object in the heap by using memory address as its value
The piece of memory in the call stack has a reference to the piece of memory in the heap which hold(me) object which is why their called reference types! 
We do this because an object may be to large to be stored in the stack.
Friend can be const because you’re not changing the value in the call stack your changing the value in the heap.
Primitive const values cannot be changed but reference values can be.
 */
const me = {
    name: 'Kelsy',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // 27
console.log('Me', me);  // 27



///////////////////////////////////////
// Primitives vs. Objects

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
//-- this is shallow copy a deep copy needs libray like lodash
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

// //object.assign is a shallow copy not a deep clone, only copies properties in first level if theres an object in an object changes to cloned and original object will be affected the same way
const jessicaCopy = Object.assign({}, jessica2); // use .assign to merge empty new object with jessica2, this creates really new object with copied properties
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2); // array is an object so .assign will not work here
console.log('After marriage: ', jessicaCopy); // array object is at the same memory address on the heap so jessica2 and jessicaCopy will both be changed



///////////////////////////////////////
// Regular Functions vs. Arrow Functions
/*
var firstName = 'jeff';  // will print jeff with the greet function because 'this' and 'var' are on the global window object
const kelsy = {
    firstName: 'Kelsy',
    year: 1991,
    calcAge: function () {
        return 2022 - this.year;
    },
    //This is an object literal, not a code block
// never use an aarrow function as a method
greet: () => console.log(`hey ${this.firstName}`), // prints hey undefined,  'this keyword' is on the window object and there is no firstName on the window object
    // parent scope of the greet method is the global scope
    // becomes window.firstName
};
kelsy.greet();


const kelsy2 = {
    firstName: 'Kelsy',
    year: 1991,
    calcAge: function () {
        return 2022 - this.year;
    },

    greet: function () {
        console.log(`hey ${this.firstName} you're ${this.calcAge()} years old`);

        //'this' equals the global object which is window and below code will not work
        // const isMillenial = function () {
        //     if (this.year >= 1981 && this.year <= 1996) {
        //         console.log('...and you are a millenial');
        //     }
        // };

        // use self to make the above function work
        // const self = this;

        // const isMillenial = function () {
        //     if (self.year >= 1981 && self.year <= 1996) {
        //         console.log('...and you are a millenial');
        //     }
        // };

        // With arrow functions the this keyword always represents the object that defined the arrow function.
        const isMillenial = () => {
            if (this.year >= 1981 && this.year <= 1996) {
                console.log('...and you are a millenial');
            }
        };
        isMillenial();
    }
};
kelsy2.greet();

//solution to 'this' undefined in regular function call
const kelsy3 = {
    firstName: 'kelsy',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996); // in scope chain 'self' will be equal to 'this' so when refrenced in self.year it will go up the scope to calcAge
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);  // this line is an object literal not a code block so it refrences the global scope not the object kelsy
    },
};
kelsy3.greet();  // prints hey undefined
kelsy3.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    // console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);
*/


///////////////////////////////////////
// The this Keyword Introduction
/*
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
//kelsy2.calcAge(1991); // 'this' keyword helps not having to repeat this information inside the object

const matt = {
    year: 2017,
}

matt.calcAge = kelsy2.calcAge; // method borrowing, do not have to write calcAge out, need to do this before you call another object to the method
matt.calcAge(); // this keyword now points to matt...matt called the method

const f = kelsy2.calcAge; // copying method into variable, f becomes calcAge function
f(); // *Type error* because f becomes a regular function call, not attahced to any object so this keyword doenst know where to point to
*/


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