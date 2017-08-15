const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const bank = require('./bank.js');

const argv = yargs
    .command('total', 'Request total in bank account')
    .command('deposit', 'Deposite amount to account')
    .command('withdraw', 'Request amount to withdraw from account')
    .command('lotto', 'Randomly play the lotto')
    .help()
    .argv;

var command = argv._[0];

if(command === 'total'){
    var totalBalance = bank.totalAmount();
    console.log(totalBalance);
} else if(command ==='deposit'){
    var addToBalance = Number(bank.addAmount(argv));
    console.log(addToBalance);
} else if(command ==='withdraw'){
    var subtractFromBalance = bank.withdrawAmount(argv);
    console.log(subtractFromBalance);
} else if(command ==='lotto'){
    var lottoGenerator = bank.lotto();
    console.log(lottoGenerator);
} else {
    console.log('Command not recognized');
}