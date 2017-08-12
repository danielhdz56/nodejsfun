//Check if the two paramaters are equal
const firstArg = process.argv[2];
const secondArg = process.argv[3];

console.log(`First Argument: ${firstArg}`);
console.log(`Second Argument: ${secondArg}`);
if(firstArg === secondArg){
    console.log('Same arguments');
} else {
    console.log('They are different arguments');
}