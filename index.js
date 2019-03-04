var one = document.getElementById("one");
var two = document.getElementById("two");
var thee = document.getElementById("three");
var choices = ["rock", "paper", "scissors"]
var rps = ""
var choice = ""
var result = document.getElementById("result")

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
  rps = choices[Math.floor(Math.random()*4)]
  if (choice === rps) {
    result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You tied."  
  } else {
    switch (choice) {
      case "rock": 
        if (rps == "paper") {
          result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You lost."  
        } else {
          result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You Won."  
        }
      case "paper":
        if (rps == "scissors") {
          result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You lost."  
        } else {
          result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You Won."  
        }
      case "scissors":
        if (rps == "rock") {
          result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You lost."  
        } else {
          result.innerHTML = "You Chose " + choice + ". The computer chose " + rps + " You Won."  
        }
    } 
  }
}
