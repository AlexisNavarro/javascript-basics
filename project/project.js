//Deposit money (done)
//Determine number of lines to bet on (done)
//collect a bet amount (done)
//spin the slot machine
//check if the user won
//give the user their winnings
//play again

//import the packaged installed using require
const prompt = require("prompt-sync")();

//Creating the slot machine
const ROWS = 3;
const COLS = 3;

//Object
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

//multiplier of each symbol
const SYMBOLS_VALUES ={
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

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

const spin = () =>{
    const symbols = []; //will be adding elements, not changing values

    //to loop an object, use object.entries
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i<count; i++){
            symbols.push(symbol); //insert a new element into the array
        }
    }//end first for

    const reels = [[],[],[]];

    for(let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols]; //copy each available symbol into a reel
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1); //remove a symbol so its not selected again
        }
    }
    
    return reels;
};

const reels = spin();
console.log(reels);
let balance = deposit(); // let allows us to change the value of a variable
const numLines = getNumLines(); //const doesn't allow us to change the value of the variable once its set
const bet = getBet(balance, numLines);








//second way to create a function
/*
function deposit() {
    return 1
}
*/
