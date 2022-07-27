'use strict';
///////////////////////////////////////
// The this Keyword Introduction

console.log("*****THE 'this' KEYWORD PT1*****")
const kelsy1 = {    // object kelsy
    name: 'Kelsy',
    year: 1991,
    calcAge1: function () {     // calcAge1 is the method
        return 2022 - this.year; //same as kelsy1.year which in turn would be kelsy1.1991
    }
};
console.log(kelsy1.calcAge1());
console.log(this); // this keyword of parent scope which is window object

const calcAge1 = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);  // undefined because of strict mode, gets its own this keyword
};
calcAge1(1991); // regular function call, call of the function without function being attached to any object or 'owner'

console.log("*****THE 'this' KEYWORD PT2*****")
const calcAgeArrow = birthYear => {
    console.log(2022 - birthYear);
    console.log(this); // this keyword of parent scope which is window object
};
calcAgeArrow(1980);

console.log("*****THE 'this' KEYWORD PT3*****")
// calcAge2 method is written inside kelsy object, this is not why 'this' keyword points to kelsy,
// it points to the object becuase the kelsy was the object calling the method -- kelsy2.calcAge() --
const kelsy2 = {    // object kelsy2
    year: 1991,
    calcAge2: function () {
        console.log(2022 - this.year);

        // inside of calcAge2 'this' is kelsy2
        console.log(this); // 'this' object, will print contents of kelsy2
        // when there is a method call the 'this' keyword inside of the method will be the object that is calling the method..the kelsy object
    }
};
kelsy2.calcAge2();
//kelsy2.calcAge(1991); // 'this' keyword helps not having to repeat this information inside the object

const matt = {
    year: 2017,
}

matt.calcAge2 = kelsy2.calcAge2; // method borrowing, do not have to write calcAge2 out, need to do this before you call another object to the method
matt.calcAge2(); // this keyword now points to matt...matt called the method

const f = kelsy2.calcAge2; // copying method into variable, f becomes calcAge function
//f(); // *Type error* because f becomes a regular function call, not attahced to any object so this keyword doenst know where to point to