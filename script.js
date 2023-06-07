let score = 0;
let player1Score = 0;
let player2Score = 0;
let rollCounter = 0;

const diceRoll = () => {
  let randomDiceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(randomDiceRoll);
  rollCounter++;

  console.log("dice roll number" + rollCounter);

  let dice = (document.getElementById(
    "diceImage"
  ).src = `./img/dice-${randomDiceRoll}.png`);

  document.getElementById("diceImage").classList.remove("hidden");

  if (rollCounter % 2 === 0) {
    switch (randomDiceRoll) {
      case 1:
        player1Score += 1;
        document.getElementById("player1Score").textContent = player1Score;
        break;
      case 2:
        player1Score += 2;
        document.getElementById("player1Score").textContent = player1Score;
        break;
      case 3:
        player1Score += 3;
        document.getElementById("player1Score").textContent = player1Score;
        break;
      case 4:
        player1Score += 4;
        document.getElementById("player1Score").textContent = player1Score;
        break;
      case 5:
        player1Score += 5;
        document.getElementById("player1Score").textContent = player1Score;
        break;
      case 6:
        player1Score += 6;
        document.getElementById("player1Score").textContent = player1Score;
        break;
    }
  } else {
    switch (randomDiceRoll) {
      case 1:
        player2Score += 1;
        document.getElementById("player2Score").textContent = player2Score;
        break;
      case 2:
        player2Score += 2;
        document.getElementById("player2Score").textContent = player2Score;
        break;
      case 3:
        player2Score += 3;
        document.getElementById("player2Score").textContent = player2Score;
        break;
      case 4:
        player2Score += 4;
        document.getElementById("player2Score").textContent = player2Score;
        break;
      case 5:
        player2Score += 5;
        document.getElementById("player2Score").textContent = player2Score;
        break;
      case 6:
        player2Score += 6;
        document.getElementById("player2Score").textContent = player2Score;
        break;
    }
  }

  if (player1Score >= 10) {
    document.getElementById("diceRollButton").remove();
    const player1WinMessage = document.createElement("h4");
    player1WinMessage.innerHTML = "Player 1, YOU WIN!";
    document.getElementById("actionContainer").appendChild(player1WinMessage);
    document.getElementById("replayButton").classList.remove("hidden");
  } else if (player2Score >= 10) {
    document.getElementById("diceRollButton").remove();
    const player2WinMessage = document.createElement("h4");
    player2WinMessage.innerHTML = "Player 2, YOU WIN!";
    document.getElementById("actionContainer").appendChild(player2WinMessage);
    document.getElementById("replayButton").classList.remove("hidden");
  }
};

const replay = () => {
  location.reload();
};
