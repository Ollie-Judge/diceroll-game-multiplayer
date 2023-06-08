let player1Score = 0;
let player2Score = 0;
let rollCounter = 0; // use this to count how many turns it took for the winner to win

const diceRoll = () => {
  let randomDiceRoll = Math.floor(Math.random() * 6) + 1;
  rollCounter++; // use this to change the colour of the background of which player is turn it is

  document.getElementById("diceImage").src = `./img/dice-${randomDiceRoll}.png`;

  document.getElementById("diceImage").classList.remove("hidden");

  const player1ScoreFunction = () => {
    document.getElementById("player1Score").textContent = player1Score;
  };

  const player1Active = () => {
    document.getElementById("player1Div").style.background = "rgb(255,255,224)";
  };

  const player2ScoreFunction = () => {
    document.getElementById("player2Score").textContent = player2Score;
  };

  const player2Active = () => {
    document.getElementById("player2Div").style.background = "blue";
  };

  if (rollCounter % 2 === 0) {
    player1Active();
    switch (randomDiceRoll) {
      case 1:
        player1Score += 1;
        player1ScoreFunction();
        break;
      case 2:
        player1Score += 2;
        player1ScoreFunction();
        break;
      case 3:
        player1Score += 3;
        player1ScoreFunction();
        break;
      case 4:
        player1Score += 4;
        player1ScoreFunction();
        break;
      case 5:
        player1Score += 5;
        player1ScoreFunction();
        break;
      case 6:
        player1Score += 6;
        player1ScoreFunction();
        break;
    }
  } else {
    player2Active();
    switch (randomDiceRoll) {
      case 1:
        player2Score += 1;
        player2ScoreFunction();
        break;
      case 2:
        player2Score += 2;
        player2ScoreFunction();
        break;
      case 3:
        player2Score += 3;
        player2ScoreFunction();
        break;
      case 4:
        player2Score += 4;
        player2ScoreFunction();
        break;
      case 5:
        player2Score += 5;
        player2ScoreFunction();
        break;
      case 6:
        player2Score += 6;
        player2ScoreFunction();
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
