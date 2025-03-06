document.addEventListener("DOMContentLoaded", function () {
  const createRoomBtn = document.querySelector(".create-room-btn");
  const usernameInput = document.getElementById("username");

  // Event listener for Create Private Room button
  createRoomBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    if (username === "") {
      alert("Please enter your name!");
      return;
    }

    localStorage.setItem("playerName", username);
    localStorage.setItem("isHost", "true"); // Mark as host

    window.location.href = "private_room.html"; // Redirect
  });
});
