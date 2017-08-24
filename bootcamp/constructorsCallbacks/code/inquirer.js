const inquirer = require('inquirer');

var questions = [
    {
        name: 'username',
        type: 'input',
        message: 'Please enter your username',
        default: 'anon',
        validate: value => {
            if(value.trim().length>=4){
                return true;
            }
            return 'Please enter a username that is atleast 5 characters long';
        }
    },{
        name: 'location',
        type: 'input',
        message: 'Where are you?',
        validate: value => {
            if(value){
                return true;
            }
            return 'Please enter a location';
        }
    }];
var prompt = inquirer.prompt(questions).then((answers) => {
    console.log(answers);
}, (err) => {
    console.log('Could not load answers');
});

module.exports = {prompt}