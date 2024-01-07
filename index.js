
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

