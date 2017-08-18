// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
const inquirer = require('inquirer');

var questions = [{
        name: 'firstName',
        message: 'What is your first name?'
    }, {
        type: "password",
        message: "Set your password",
        name: "password"
    }, {
        name: 'food',
        message: 'Which one is your favorite food?',
        type: 'list',
        choices: [
            'Pizza', 'Hamburgers', 'Chili',
            new inquirer.Separator(), //separating the orangy things from the bluish things
            'Salads', 'Toffu', 'Fruit Salad'
        ],
        filter: function (str) {
            return str.toLowerCase();
        }
    }, {
        name: 'extras',
        message: 'Pick out things to add.',
        type: 'checkbox',
        choices: ['cheese', 'salt', 'pepper', 'hot sauce'],
        when: function (answers) {
            return answers.food === 'pizza';
        }
    }, {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }


];

inquirer.prompt(questions).then(function (answers) {
    // Use user feedback for... whatever!! 
    if(answers.confirm){
        console.log(answers)
    }
});