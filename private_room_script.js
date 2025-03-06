document.addEventListener("DOMContentLoaded", function () {
  const timeOptions = [30, 60, 120];
  const roundsOptions = [2, 4, 6, 8, 10];
  let maxPlayers = 10;

  let timeIndex = 1; // Default is 60s
  let roundsIndex = 1; // Default is 4 rounds
  let players = 4; // Default players

  const playerList = document.getElementById("playerList");
  const roomCodeDisplay = document.getElementById("roomCode");
  const copyInviteBtn = document.getElementById("copyInviteBtn");

  const timeDisplay = document.getElementById("time");
  const roundsDisplay = document.getElementById("rounds");
  const playersDisplay = document.getElementById("players");

  const playerName = localStorage.getItem("playerName");
  const isHost = localStorage.getItem("isHost") === "true";

  if (playerName) {
    const hostEntry = document.createElement("li");
    hostEntry.textContent = isHost ? `${playerName} (Host)` : playerName;
    playerList.appendChild(hostEntry);
  }

  copyInviteBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(roomCodeDisplay.textContent);
    alert("Room Code Copied!");
  });

  // Function to update settings display
  function updateValue(displayElement, value) {
    displayElement.textContent = value;
  }

  // Time Per Round
  document.getElementById("increaseTime").addEventListener("click", () => {
    timeIndex = (timeIndex + 1) % timeOptions.length;
    updateValue(timeDisplay, timeOptions[timeIndex] + "s");
  });

  document.getElementById("decreaseTime").addEventListener("click", () => {
    timeIndex = (timeIndex - 1 + timeOptions.length) % timeOptions.length;
    updateValue(timeDisplay, timeOptions[timeIndex] + "s");
  });

  // Number of Rounds
  document.getElementById("increaseRounds").addEventListener("click", () => {
    roundsIndex = (roundsIndex + 1) % roundsOptions.length;
    updateValue(roundsDisplay, roundsOptions[roundsIndex]);
  });

  document.getElementById("decreaseRounds").addEventListener("click", () => {
    roundsIndex =
      (roundsIndex - 1 + roundsOptions.length) % roundsOptions.length;
    updateValue(roundsDisplay, roundsOptions[roundsIndex]);
  });

  // Max Players (min 2, max 10)
  document.getElementById("increasePlayers").addEventListener("click", () => {
    if (players < maxPlayers) {
      players++;
      updateValue(playersDisplay, players);
    }
  });

  document.getElementById("decreasePlayers").addEventListener("click", () => {
    if (players > 2) {
      players--;
      updateValue(playersDisplay, players);
    }
  });
});
