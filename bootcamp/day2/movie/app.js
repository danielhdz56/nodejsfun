const yargs = require('yargs');

const movie = require('./movie.js');

const argv = yargs
    .options({
        t: {
            demand: true,
            alias: 'title',
            describe: 'Title of movie to fetch',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

movie.movieQuery(argv.title);