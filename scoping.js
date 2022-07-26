'use strict';
///////////////////////////////////////
// Scoping pt1

console.log("*****SCOPING PT1*****")
function calcAge(birthYear) {  // global scope
    const age = 2022 - birthYear;

    // through scope chain this function has access to global variable (fName)
    console.log(fName); // prints 'Kelsy'

    function printAge() {
        const output = `${fName}, You are ${age}, born in ${birthYear}`;
        console.log(output); // prints 'Kelsy, You are 31, born in 1991'

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // always use const or let dont use var
            const str = `Oh, and you're a millenial, ${fName}`;
            console.log(str); // prints 'Oh, and you're a millenial, Kelsy'
        }
        // console.log(str); // *Reference error* const and let variables are block scoped, only the if block has access to this
        console.log(millenial); // this will print true because var variables are function scoped
    }
    printAge();
    return age;
}

const fName = 'Kelsy'; // global variable
calcAge(1991);
//console.log(age); // *Reference error* you don't have access to 'age'
//printAge(); //*Reference error* only allowed in calcAge scope
//console.log(millenial); // *Reference error* var is function scoped



///////////////////////////////////////
// Scoping pt2

console.log("*****SCOPING PT2*****")
function calcAge2(birthYear) {
    const age = 2022 - birthYear;

    //print age scope
    function printAge2() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);  // prints 'Kelsy, You are 31, born in 1991'

        // if block scope
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            //creating NEW variable with same name as outer scopes variable
            const fName = 'Steven';  // this will print 'Steven' becuase javascript looks upwards in the scope and will see this first

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
    printAge2();
    return age;
}
const firstName = 'Kelsy'; // global variable
calcAge2(1991);
