getElement = (element) => {
  const homePage = document.getElementById(element);
  return homePage;
};
const homePage = getElement("homePage");
const playGame = getElement("playGame");
const playBtn = document.getElementById("playBtn");
playBtn.classList.add("bg-[#FFA500]");
let letter = document.getElementById("letter");
const smallLetter = "abcdefghijklmnopqrstuvwsyz";
const capitalLetter = smallLetter.toUpperCase();
const alphabet = smallLetter.concat(capitalLetter);

getRandomLetter = () => {
  const random = Math.floor(Math.random() * alphabet.length - 1);
  letter.innerText = alphabet[random];
};

const key = document.querySelectorAll(".kbd");
startGame = () => {
  document.addEventListener("keypress", (e) => {
    key.forEach((item) => {
      if (e.key.toLowerCase() === item.innerText.toLowerCase()) {
        item.classList.add("bg-[#FFA500]");
        console.log(item);

        console.log(item);
        setTimeout(() => {
          item.classList.remove("bg-[#FFA500]");
        }, 220);
      }
    });
    if (e.key === letter.innerText) {
      getRandomLetter();
    } else {
      letter.innerText = "Game Over";
    }
  });
};
playBtn.addEventListener("click", () => {
  homePage.classList.add("hidden");
  playGame.classList.remove("hidden");
  getRandomLetter();
  startGame();
});
document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    homePage.classList.add("hidden");
    playGame.classList.remove("hidden");
    getRandomLetter();
    startGame();
  }
});
