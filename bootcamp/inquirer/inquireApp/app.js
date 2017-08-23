const inquirer = require('inquirer');

var questions = [{
    name: 'firstName',
    message: 'What is your first name?'
  }, {
    name: 'operatingSystem',
    message: 'What is your operating System?',
    default: 'Windows'
  }, {
    name: 'favoriteColor',
    message: 'What is your favorite rainbow Color?',
    type: 'list',
    choices: [
        'Red', 'Orange', 'Yellow',
        new inquirer.Separator(),   //separating the orangy things from the bluish things
        'Green', 'Blue', 'Indigo', 'Violet'
    ],
    filter: function (str){
      return str.toLowerCase();
    }
  }];

// var questions = [{
//     name: 'pizzaOrTaco',
//     message: 'You want to eat pizza or taco?',
//     type: 'list',
//     choices: ['Pizza', 'Taco']
//   }, {
//     name: 'pizzaIngredients',
//     message: 'OK, so what goes on your pizza?',
//     type: 'checkbox',
//     choices: ['peperonni', 'extra cheese', 'sausage', 'mushroom', 'sugar cubes'],
//     when: function(answers){
//       return answers.pizzaOrTaco === 'Pizza';
//     }
//   }, {
//     name: 'tacoIngredients',
//     message: 'Pick out the things that go in your taco.',
//     type: 'checkbox',
//     choices: ['chicken', 'rice', 'beef', 'pico', 'hawt sauce', 'zazzle'],
//     when: function(answers){
//       return answers.pizzaOrTaco === 'Taco';
//     }
//   }]
  
//   var Rx = require('rx-lite');
  
//   var declarativeQuestions = [{
//     name: 'firstName',
//     message: 'What is your first name?'
//   }];
  
//   var rxQuestions = Rx.Observable.create(function( obs ) {
//     obs.onNext({
//       name: 'firstName',
//       message: 'What is your first name?'
//     });
//   })

inquirer.prompt(questions).then(function (answers) {
    // Use user feedback for... whatever!! 
    console.log(answers)
});

