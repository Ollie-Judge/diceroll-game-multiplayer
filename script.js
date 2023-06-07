let score = 0;

const diceRoll = () => {
  let randomDiceRoll = Math.floor(Math.random() * 6);
  console.log(randomDiceRoll);

  switch (randomDiceRoll) {
    case 0:
      document.getElementById("diceImage").src = "./img/dice-1.png";
      document.getElementById("player1DiceRollOutput").textContent = "1";
      score++;
      document.getElementById("player1Score").textContent = score;
      console.log(score);
      break;
    case 1:
      document.getElementById("diceImage").src = "./img/dice-2.png";
      document.getElementById("player1DiceRollOutput").textContent = "2";
      score += 2;
      document.getElementById("player1Score").textContent = score;
      console.log(score);
      break;
    case 2:
      document.getElementById("diceImage").src = "./img/dice-3.png";
      document.getElementById("player1DiceRollOutput").textContent = "3";
      score += 3;
      document.getElementById("player1Score").textContent = score;
      console.log(score);
      break;
    case 3:
      document.getElementById("diceImage").src = "./img/dice-4.png";
      document.getElementById("player1DiceRollOutput").textContent = "4";
      score += 4;
      document.getElementById("player1Score").textContent = score;
      console.log(score);
      break;
    case 4:
      document.getElementById("diceImage").src = "./img/dice-5.png";
      document.getElementById("player1DiceRollOutput").textContent = "5";
      score += 5;
      document.getElementById("player1Score").textContent = score;
      console.log(score);
      break;
    case 5:
      document.getElementById("diceImage").src = "./img/dice-6.png";
      document.getElementById("player1DiceRollOutput").textContent = "6";
      score += 6;
      document.getElementById("player1Score").textContent = score;
      console.log(score);
      break;
  }
  if (score >= 100) {
    console.log("end game");
    document.getElementById("diceRollButton").remove();
    const message = document.createElement("h4");
    message.innerHTML = "YOU WIN!";
    document.getElementById("actionContainer").appendChild(message);
  }
};
