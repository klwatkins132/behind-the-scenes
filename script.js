'use strict';
///////////////////////////////////////
// Scoping pt1

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
