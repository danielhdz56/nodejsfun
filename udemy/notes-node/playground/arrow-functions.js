//This is known as the statement syntax for the arrow function
//-------------------------------------------------------------------------------
// var square = (x) => {
//     var result = x * x;
//     return result;
// };
// console.log(square(9));

//This is known as the expression syntax for the arrow function
//The expression syntax lets us simplify arrow functions
//when you're just going to be returning some expression
//You don't need to use the return keyword because when we use the arrow function
//without curly braces it is implicitly provided for you
//-------------------------------------------------------------------------------
// var square = (x) => x * x;
// console.log(square(9));

//You don't have to use parentheses when you only have one argument
var square = x => x * x;
console.log(square(9));

//Arrow functions do not bind a 'this' keyword
//you also do not get the arguments keyword
//example
var user = {
    name: 'Daniel',
    sayHi: () => {
        console.log(arguments) 
        console.log(`Hi ${this.name}`);
    },
    //no colon necessary even if it is a regular function (this is not an arrow function)
    //this syntax is great when defining an object literals (like user)
    //remember that an object literal is a comma seperated list of name value pairs wrapped in curly braces
    sayHiAlt () {
        console.log(arguments); 
        console.log(`Hi ${this.name}`);
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);

//To conclude: arrow functions do not bind the 'this' keyword, and do not get the 'arguments' keyword
//that you would expect from a regular function
//Alas, When creating methods on an object stick to the sayHiAlt syntax