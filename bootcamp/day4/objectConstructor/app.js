const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs

    .argv;



// var userFunction = (firstName, lastName, email) => {
//     return {
//         firstName,
//         lastName,
//         email
//     }
// }
// console.log(userFunction('daniel', 'hernandez', 'daniel56hdz@gmail.com'));

function User(firstName, lastName, email){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email
};

var daniel = new User('daniel', 'hernandez', 'daniel56hdz@gmail.com');
console.log(daniel)


