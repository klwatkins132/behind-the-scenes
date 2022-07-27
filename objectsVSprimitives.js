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
console.log("*****OBJECTS VS PRIMITIVES*****")
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
const myself = {
    name: 'Kelsy',
    age: 30,
};
const friend = myself;
friend.age = 27;
console.log('Friend:', friend); // 27
console.log('Me', myself);  // 27



///////////////////////////////////////
// Primitives vs. Objects

console.log("*****PRIMITIVES VS OBJECTS*****")
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