/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) A//dd some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.

//var xyz = Math.floor (Math.random() * 37);
//var change = document.getElementById("card")
//change.innerHTML = xyz

//change.addEventListener (" ", roulette)

function updateRandom() {
    var random = Math.floor (Math.random() * 36);
  var divElem = document.createElement ("div");
  divElem.innerHTML = random;
  main.appendChild(divElem)
  if (random%2 === 0 && random !==0){
  divElem.className = "even";
  }else if (random%2 === 1){
    divElem.className = "odd";
  }else if (random === 0){
    divElem.className = "zero";
  }  
}

setInterval(updateRandom,2000);	
