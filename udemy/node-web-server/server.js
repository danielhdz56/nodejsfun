const express = require('express');
const hbs = require('hbs'); //espress view engine for handlebars

var app = express();

//This lets us set up some various express related configurations
//we pass a key value pair
//the key is view engine
//the value is hbs
//this tells express that you want to use the hbs for the view engine
app.set('view engine', 'hbs');
//Adding middleware to use express in a different way
//It is like a third party add on
//This basically sets us a static directory 
app.use(express.static(__dirname + '/public'));

//allows us to set up a handler for our http request
app.get('/', (req, res) => { //req will contain our headers, res will be what we send back
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Handlebars are awesome',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //this allows us to render any of the templates i have set up with my current view engine
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

// bad - send back json with errorMessage 
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
})
//this binds our application to a port on our machine
app.listen(3000, () => {
    console.log('Server is up on port 3000')
});