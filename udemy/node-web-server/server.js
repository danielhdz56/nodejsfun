const express = require('express');
const hbs = require('hbs'); //espress view engine for handlebars
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

//This lets use reuse code from handlebars
hbs.registerPartials(__dirname + '/views/partials');

//This lets us set up some various express related configurations
//we pass a key value pair
//the key is view engine
//the value is hbs
//this tells express that you want to use the hbs for the view engine
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log');
            console.log('hello');
        }
    });
    next();
});

//because i didn't call next it will not move on
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

//Adding middleware to use express in a different way
//It is like a third party add on
//This basically sets us a static directory 
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

//allows us to set up a handler for our http request
app.get('/', (req, res) => { //req will contain our headers, res will be what we send back
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Handlebars are awesome',
    });
});

app.get('/about', (req, res) => {
    //this allows us to render any of the templates i have set up with my current view engine
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

// bad - send back json with errorMessage 
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
})
//this binds our application to a port on our machine
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});