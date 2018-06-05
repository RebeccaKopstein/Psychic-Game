var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var YourGuesses = [];
var counter = 9;



var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (computerChoices.indexOf(userGuess) >= 0) {

        YourGuesses.push(userGuess)

        if (userGuess === computerGuess) {
            wins++;
            counter = 9; 
            YourGuesses = [];
            alert("BAZINGA! You guessed it, the correct letter was " + computerGuess);
        }
        else if (userGuess !== computerGuess) {
            counter--;
            losses++;
        }

        if(counter === 0) {
            counter = 9;
            losses++;
            YourGuesses = [];
        }

    

        var html =
            "" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + (counter) +
            "<p>Your Guesses so far: " + YourGuesses + "</p>"


        document.querySelector("#game").innerHTML = html;
    } else {
        alert("Tsk Tsk, choose a letter!");
    }
};