// Request allows us to make http calls
const request = require('request');

var movieQuery = (title) => {
    var encondedMovieQuery = encodeURIComponent(title);
    request({
        url: `http://www.omdbapi.com/?t= ${title} &y=&plot=short&apikey=40e9cece`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to OMDB Server');
        } else if(body.Response==='False'){
            console.log(body.Error)
        } else if(body.Response==='True'){
            console.log(`Year: ${body.Year}`)
        }
    })
};

module.exports.movieQuery = movieQuery;