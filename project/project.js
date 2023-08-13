//Deposit money
//Determine number of lines to bet on
//collect a bet amount
//spin the slot machine
//check if the user won
//give the user their winnings
//play again

//import the packaged installed using require
const prompt = require("prompt-sync")();

//first way to create a function 
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); //convert the string input into a float datatype

        //Nan = not a number
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("invalid deposit amount, try again");
        } else {
            return numberDepositAmount;
        }
    }//end while loop
};

const getNumLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numLines = parseFloat(lines);

        //Nan = not a number
        if (isNaN(numLines) || numLines <= 0 || numLines > 3) {
            console.log("invalid number of lines, try again");
        } else {
            return numLines;
        }
    }//end while loop
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numBet = parseFloat(bet);

        //Nan = not a number
        if (isNaN(numBet) || numBet <= 0 || numBet > (balance/lines)) {
            console.log("invalid number of lines, try again");
        } else {
            return numBet;
        }
    }//end while loop
};

let balance = deposit(); // let allows us to change the value of a variable
const numLines = getNumLines(); //const doesn't allow us to change the value of the variable once its set
const bet = getBet(balance, numLines);








//second way to create a function
/*
function deposit() {
    return 1
}
*/
