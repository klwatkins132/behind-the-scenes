'use strict';
///////////////////////////////////////
// Regular Functions vs. Arrow Functions

console.log("*****REG VS ARR FUNCTS PT1*****")
var frstName = 'jeff';
const bob = {
    frstName: 'Bob',
    year: 1991,
    calcAge: function () {
        return 2022 - this.year;
    },
    //This is an object literal, not a code block
    // never use an aarrow function as a method
    greet: () => console.log(`hey ${this.frstName}`), // will print jeff with the greet function because 'this' and 'var' are on the global window object
    // parent scope of the greet method is the global scope
    // becomes window.firstName
};
bob.greet();

console.log("*****REG VS ARR FUNCTS PT2*****")
const bobby = {
    firstName: 'Bobby',
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
bobby.greet();

console.log("*****REG VS ARR FUNCTS PT3*****")
//solution to 'this' undefined in regular function call
const bobert = {
    firstName: 'Bobert',
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
bobert.greet();  // prints hey undefined
bobert.calcAge();

console.log("*****REG VS ARR FUNCTS PT4*****")
// arguments keyword
const addExp = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExp(2, 5);
addExp(2, 5, 8, 12);

var addArr = (a, b) => {
    // console.log(arguments);
    return a + b;
};
addArr(2, 5, 8);

