const fs = require('fs');

var fetchBalance = () => {
    try {
        var balanceString = fs.readFileSync('bank_account.txt');
        return JSON.parse(balanceString);
    } catch(e) {
        return ['Initial Amount', 0];
    }
}

var saveBalance = balance => {
    fs.writeFileSync('bank_account.txt', JSON.stringify(balance));
}

var addAmount = (amount) => {
    var balance = fetchBalance();
    var deposit = amount._[1];
    var updatedBalance = balance + deposit;
    balance.push(updatedBalance);
    console.log(balance);
    saveBalance(balance)
    return updatedBalance;
}

var totalAmount = () => {
    return fetchBalance();
}

var withdrawAmount = (amount) => {
    var balance = fetchBalance();
    var withdraw = amount._[1];
    var updatedBalance = balance - withdraw;
    saveBalance(updatedBalance);
    return updatedBalance;
}

// var 
// console.log('You are playing the lottery');
// var rNumber = Math.random()*10
// console.log(rNumber);
// if(rNumber === 6){

// }


module.exports = {
    addAmount,
    totalAmount,
    withdrawAmount
}