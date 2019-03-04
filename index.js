var one = document.getElementById("one");
var two = document.getElementById("two");
var thee = document.getElementById("three");
var choices = ["rock", "paper", "scissors"]
var rps = ""
var choice = ""
var result = document.getElementById("result")
var score = document.getElementById("score")


var wins = 0;
var losses = 0;
var ties = 0;

one.addEventListener("click", function() {
  choice = "rock";
  winner(choice)
  
});
two.addEventListener("click", function() {
  choice = "paper";
  winner(choice)
  
});
three.addEventListener("click", function() {
  choice = "scissors";
  winner(choice)
});


function winner(choice) {
  rps = choices[Math.floor(Math.random()*3)]
  if (choice === rps) {
    result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You tied." 
    ties += 1 
  } else if (choice !== rps) {
    switch (choice) {
      case "rock": 
      if (rps === "paper") {
        losses += 1 
        result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You lost." 
      } else if (rps === "scissors") {
        wins += 1
        result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You Won."  
      } else {}
      break;
      case "paper":
      if (rps === "scissors") {
        losses += 1  
        result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You lost."
      } else if (rps === "rock") {
        wins += 1  
        result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You Won."
      } else {}
      break;
      case "scissors":
      if (rps === "rock") {
        losses += 1  
        result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You lost."
      } else if (rps === "paper") {
        wins += 1
        result.innerHTML = "You chose " + choice + ". The computer chose " + rps + ". You Won."  
      } else {}
      break;
    }
  } else {}
  score.innerHTML = "Wins: " + wins + " Losses: " + losses + " Ties: " + ties
}
