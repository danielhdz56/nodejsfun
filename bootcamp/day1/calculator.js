const argOperator = process.argv[2];
var argFirstNum;
var argSecondNum = Number(process.argv[4]);

if (argOperator === 'algebra') {
    argFirstNum = process.argv[3];
    console.log(`I am going to do some algebra for: ${argFirstNum}`)
} else if (argOperator === 'remainder') {
    argFirstNum = Number(process.argv[3]);
    console.log(`I am going to find the remainder when ${argFirstNum} is divided by ${argSecondNum}`)
} else {
    argFirstNum = Number(process.argv[3]);
    console.log(`I am going to ${argOperator} ${argFirstNum} and ${argSecondNum}`);
}

if (argOperator === 'add') {
    console.log(argFirstNum + argSecondNum);
} else if (argOperator === 'subtract') {
    console.log(argFirstNum - argSecondNum);
} else if (argOperator === 'multiply') {
    console.log(argFirstNum * argSecondNum);
} else if (argOperator === 'divide') {
    console.log(argFirstNum / argSecondNum);
} else if (argOperator === 'remainder') {
    console.log(argFirstNum % argSecondNum);
} else if (argOperator === 'exp') {
    console.log(Math.pow(argFirstNum, argSecondNum));
} else if (argOperator === 'algebra') {
    var beforeX = Number(argFirstNum.split('x')[0]);
    var afterPlus = argFirstNum.split('+')[1];
    afterPlus = Number(afterPlus.split('=')[0]);
    var afterEqual = Number(argFirstNum.split('=')[1]);
    console.log((afterEqual - afterPlus) / beforeX);
}