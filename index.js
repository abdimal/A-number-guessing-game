// // Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;

// // Initialize a counter for guesses
// let guessCount = 0;

// // Start the game loop
// while (true) {
//   // Get the user's guess
//   const guess = parseInt(prompt("Guess a number between 1 and 100:"));

//   // Check if the guess is valid
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     alert("Invalid guess. Please enter a number between 1 and 100.");
//     continue; // Skip to the next iteration of the loop
//   }

//   guessCount++;

//   // Check if the guess is correct
//   if (guess === randomNumber) {
//     alert(`Congratulations! You guessed the number in ${guessCount} guesses!`);
//     break; // Exit the loop
//   } else if (guess < randomNumber) {
//     alert("Too low! Guess again.");
//   } else {
//     alert("Too high! Guess again.");
//   }
// }

const randomNumber = 4;
let counter = 0;

while (true) {
    const guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if(guess == isNaN){
        alert("invalid guess");
    }
    else if(guess<1 || guess>10){
        alert("Guess a number between 1 and 10");
           continue;
    }

 


counter++;

if(counter == randomNumber){
alert('Congratulations!')
break;
}
else if(guess < randomNumber){
    alert("Too low");
}
else(guess > randomNumber)
{
    alert("Too high");
}
    

}

