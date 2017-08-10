var url = require('url');
// this is setting up a variable with the address
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//this is setting the url.parse to the variable q
var q = url.parse(adr, true);

//This is very useful when finding out what you can PARSE!
console.log(q);

//This will return 'localhost:8080'
console.log(q.host);
//this will return '/default.htm'
console.log(q.pathname);
//This will return '/?year=2017&month=february'
console.log(q.search);

//If you want to find out what more you can do: console.log(q)
//return an object: {year: 2017, month: 'february'}
var qdata = q.query; 
//returns 'february'
//this makes sense because this how you would normally would call an object
console.log(qdata.month);
