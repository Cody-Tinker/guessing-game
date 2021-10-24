// KNOWN BUGS
//
// can continue to submit guesses after game finishes if using "enter" key
// game will display game over message even if the 5th guess was correct, temporarily fixing this with a "you win" alert
//
//
// IMPROVEMENTS
//
// too many else if statements, must be a simpler way
// css responsiveness could be better
//

let feedbackMsg = document.getElementById("info1");
let guessesRemaining = document.getElementById("info2");
let prevGuesses = document.getElementById("info3");

let winningNumber = Math.floor(Math.random() * 100);
let numOfGuesses = 6;
let guesses = [];

let input = document.getElementById("user-input");
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    submitGuess();
  }
});

// game function //
function submitGuess() {
  let playerGuess = document.getElementById("user-input").value;

  // if guess is not within our specified range of 1-100 //
  if (playerGuess < 1 || playerGuess > 100 || isNaN(playerGuess)) {
    alert("Invalid Guess. Please Enter a Number Between 1 - 100");
  } else {
    guesses.push(" " + playerGuess);
    numOfGuesses--;

    // establish a distance between the player's guess and the winning number
    let distance = Math.abs(playerGuess - winningNumber);

    // if guess is too high and way off //
    if (playerGuess < winningNumber && distance >= 20) {
      feedbackMsg.textContent = "Too Low, you're ice cold 🥶 Try Again!";

      guessesRemaining.textContent = "Guesses Left: " + numOfGuesses;

      prevGuesses.textContent = "Previous Guesses: " + guesses;

      // if guess is too low and way off //
    } else if (playerGuess < winningNumber && distance >= 20) {
      feedbackMsg.textContent = "Too High, you're ice cold 🥶 Try Again!";

      guessesRemaining.textContent = "Guesses Left: " + numOfGuesses;

      prevGuesses.textContent = "Previous Guesses: " + guesses;

      // if guess is too high and within 9 //
    } else if (playerGuess < winningNumber && distance <= 10) {
      feedbackMsg.textContent = "Too Low, you're on fire!! 🥵 Try Again!";

      guessesRemaining.textContent = "Guesses Left: " + numOfGuesses;

      prevGuesses.textContent = "Previous Guesses: " + guesses;

      // if guess is too low and within 9 //
    } else if (playerGuess > winningNumber && distance <= 10) {
      feedbackMsg.textContent = "Too High, you're on fire!! 🥵 Try Again!";

      guessesRemaining.textContent = "Guesses Left: " + numOfGuesses;

      prevGuesses.textContent = "Previous Guesses: " + guesses;

      // if guess is too high and within 20 //
    } else if (playerGuess < winningNumber && distance <= 19) {
      feedbackMsg.textContent = "Too Low, you're getting warm ☀️ Try Again!";

      guessesRemaining.textContent = "Guesses Left: " + numOfGuesses;

      prevGuesses.textContent = "Previous Guesses: " + guesses;

      // if guess is too low and within 20 //
    } else if (playerGuess > winningNumber && distance <= 19) {
      feedbackMsg.textContent = "Too High, you're getting warm ☀️ Try Again!";

      guessesRemaining.textContent = "Guesses Left: " + numOfGuesses;

      prevGuesses.textContent = "Previous Guesses: " + guesses;
    } else {
      alert("You win!");
      feedbackMsg.textContent =
        "You Won! 🥳🥳🥳 The winning number was " + winningNumber;
      guessesRemaining.textContent =
        "You guessed it in " + guesses.length + " guesses";
      document.getElementById("submit-btn").disabled = true;
    }
  }
  // game over :(
  if (numOfGuesses === 0 && playerGuess !== winningNumber) {
    feedbackMsg.textContent = "Game Over! You are out of guesses :(";
    document.getElementById("submit-btn").disabled = true;
  }
}

console.log("The winning number is " + winningNumber);
