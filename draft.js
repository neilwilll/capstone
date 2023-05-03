
function saveTeam() {
    // Get the selected team from the dropdown
    var selectedTeam = document.getElementById("team").value;
    
    // Save the selected team to local storage
    localStorage.setItem("favoriteTeam", selectedTeam);
    
    

    // Update favorite team name
    var favoriteTeamName = document.getElementById('favorite-team-name');
    favoriteTeamName.textContent = selectedTeam;
}

function submitDraft() {
    // Get the selected team from the previous page
    var selectedTeam = localStorage.getItem("favoriteTeam");

    // Get the drafted players
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    var player5 = document.getElementById("player5").value;

    // Create an array of drafted players
    var players = [player1, player2, player3, player4, player5];

    // Create a list element for each player
    var playerList = document.createElement("ul");
    for (var i = 0; i < players.length; i++) {
        var playerItem = document.createElement("li");
        var playerText = document.createTextNode(players[i]);
        playerItem.appendChild(playerText);
        playerList.appendChild(playerItem);
    }

    // Save the drafted players to local storage
    localStorage.setItem(selectedTeam, JSON.stringify(players));
    
    // Show message with selected team
    var message = document.getElementById('message');
    message.style.display = 'block';
    var messageText = document.createTextNode("Your favorite team is: " + selectedTeam);
    message.appendChild(messageText);
    
    // Show player list and hide form
    message.appendChild(playerList);
    document.getElementById('form').style.display = 'none';
}
