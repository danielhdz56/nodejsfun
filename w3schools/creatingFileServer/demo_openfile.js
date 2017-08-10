var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
	//what does it mean to throw an error?
	//The throw statement throws a user-defined exception. Execution of the current function will stop
	//(the statements after throw wont be executed), and control will be passed to the first catch block in the call stack. 
	//If no catch block exists among caller functions, the program will terminate.
	//If there is an error here it will just terminate because there is no catch block
	//I can see where it might be applicable to jump some block of code whenever there is an error but you still want stuff to happen so you catch it after that "jump" 
	if (err) throw err;
	console.log('Saved!');
});