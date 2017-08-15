const express = require('express');

var app = express();

//allows us to set up a handler for our http request
app.get('/', (req, res) => { //req will contain our headers, res will be what we send back
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Daniel',
        likes: [
            'Chips',
            'Hiking',
            'Coding'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// bad - send back json with errorMessage 
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
})
//this binds our application to a port on our machine
app.listen(3000);