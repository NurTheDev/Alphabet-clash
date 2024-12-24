// Function to set the inner text of an element by its ID
setElementIdValue = (elementID, value) => {
  const element = document.getElementById(elementID);
  element.innerText = value;
};
// Function to generate a random letter
getRandomLetter = () => {
  const smallLetter = "abcdefghijklmnopqrstuvwsyz";
  const capitalLetter = smallLetter.toUpperCase();
  const alphabet = smallLetter.concat(capitalLetter);
  const randomNumber = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet[randomNumber];
  return randomLetter;
};
// Function to handle key press events
keyHandle = (e) => {
  const playerPress = e.key;
  let letterElement = document.getElementById("letter");
  let letter = letterElement.innerText;
  // Check if the pressed key matches the displayed letter
  if (playerPress == letter) {
    continueGame();
    const score = parseInt(document.getElementById("score").innerText);
    const currentScore = parseInt(score + 1);
    setElementIdValue("score", currentScore);
  }
  // If the pressed key does not match, decrease life and show "Missed it"
  else if (playerPress != letter) {
    const life = document.getElementById("life").innerText;
    letterElement.innerText = "Missed it";
    setTimeout(() => {
      continueGame();
    }, 1000);
    const currentLife = parseInt(life - 1);
    setElementIdValue("life", currentLife);
    // Check if the player has no lives left
    if (currentLife == 0) {
      gameOver();
    }
  }

  // Highlight the pressed key on the virtual keyboard
  const key = document.querySelectorAll(".kbd");
  key.forEach((item) => {
    if (playerPress.toLowerCase() === item.innerText.toLowerCase()) {
      item.classList.add("bg-[#ffa500]");
      setTimeout(() => {
        item.classList.remove("bg-[#ffa500]");
      }, 220);
    }
  });
};
addElement = (elementID) => {
  const addItem = document.getElementById(elementID);
  addItem.classList.add("flex");
  addItem.classList.remove("hidden");
};
hideElement = (elementID) => {
  const addItem = document.getElementById(elementID);
  addItem.classList.add("hidden");
  addItem.classList.remove("remove");
};
// Function to continue the game (implementation not shown)
continueGame = () => {
  const randomLetter = getRandomLetter();
  let letter = document.getElementById("letter");
  letter.innerText = randomLetter;
};
// Function to handle game over (implementation not shown)
gameOver = () => {
  addElement("gameOver");
  hideElement("playGame");
  const score = document.getElementById("score").innerText;
  setElementIdValue("finalScore", score);
};
document.addEventListener("keypress", keyHandle);
const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", () => {
  addElement("playGame");
  hideElement("homePage");
  continueGame();
  setElementIdValue("life", 3);
  setElementIdValue("score", 0);
});
const playAgainBtn = document.getElementById("playAganinBtn");
playAgainBtn.addEventListener("click", () => {
  addElement("playGame");
  hideElement("gameOver");
  continueGame();
  setElementIdValue("life", 3);
  setElementIdValue("score", 0);
});
document.addEventListener("keyup", (e) => {
  const homePage = document.getElementById("homePage");
  if (!homePage.classList.contains("hidden")) {
    if (e.key === "Enter") {
      addElement("playGame");
      hideElement("homePage");
      continueGame();
      setElementIdValue("life", 3);
      setElementIdValue("score", 0);
    }
  }
  if (e.key === "Escape") {
    gameOver();
    addElement("gameOver");
    hideElement("homePage");
    hideElement("playGame");
  }
});
