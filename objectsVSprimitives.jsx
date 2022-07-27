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
1.When a new object is created it is stored in the heap with memory address then value itself
2.Me identifier points to new piece of memory in the stack
3.Memory in the stack points to the object in the heap by using memory address as its value
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
