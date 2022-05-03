var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNumber1 + ".png";
var image = document.querySelectorAll('img');
image[0].setAttribute('src',randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var image = document.querySelectorAll('img');
image[1].setAttribute('src',randomImage2);


if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Win";
} else {
  document.querySelector("h1").innerText = "🚩Player 2 Win";
}
