// Set up user input
const readLine = require('readline-sync');
let userInput;
let inputVal = -1;

// Reads in user input until it is a valid integer
do {
    userInput = readLine.prompt("Enter an integer value: ");

    // Checks if it is a number
    if (!isNaN(userInput)) {
        inputNum = Number(userInput);
        
        // Checks if it is an integer
        if (Number.isInteger(inputNum)) {
            inputVal = inputNum;
        } else {
            console.log("Not a valid integer. Try again");
        }
    } else {
        console.log("Not a valid number. Try again");
    }
} while (inputVal == -1);

for (let i = 1; i <= inputVal; i++) {
    isPhrase = true;
    output = [];

    if (i % 11 == 0) {
        output.push("Bong");
    } else if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
        if (i % 15 == 0) {
            output.push("Fizz");
            output.push("Buzz");
        } else if (i % 5 == 0) {
            output.push("Buzz");
        } else if (i % 3 == 0) {
            output.push("Fizz");
        }

        // Append 7 to the end of current output
        if (i % 7 == 0) {
            output.push("Bang");
        }
    } else if (i % 13 != 0) {
        isPhrase = false;
        output = [i];
    }

    // If divisible by 13, add 'Fezz' before the first phrase
    // beginning with 'B'. Otherwise add to the end of the array
    if (i % 13 == 0) {
        containsB = false;
        for (let j = 0; j < output.length; j++) {
            if (output[j].charAt(0) == "B") {
                containsB = true;
                if (j == 0) {
                    // Adds to start of array
                    output.unshift("Fezz");
                } else {
                    // Adds just before first 'B'
                    output.splice(j, 0, "Fezz");
                }
            }
        }

        if (!containsB) { output.push("Fezz"); }
    }

    if (i % 17 == 0 && isPhrase) {
        output.reverse();
    }

    // Maps array to a string
    console.log(output.toString().replace(",", ""));
}