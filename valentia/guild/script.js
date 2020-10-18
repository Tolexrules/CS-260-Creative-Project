var playerState = JSON.parse(localStorage.playerState);

function addQuest(name, count, value) {
	playerState["QuestTarget"] = count;
	playerState["QuestCount"] = 0;
	playerState["QuestEnemy"] = name;
	playerState["QuestWorth"] = value;
	
	document.getElementById("count").innerHTML = playerState["QuestCount"];
	document.getElementById("target").innerHTML = playerState["QuestTarget"];
	document.getElementById("name").innerHTML = playerState["QuestEnemy"];
	
	localStorage.playerState = JSON.stringify(playerState);
	alert("Quest accepted!");
}

function turnIn() {
	if (playerState["QuestCount"] == playerState["QuestTarget"]) {
		playerState["Gold"] += playerState["QuestWorth"]
		document.getElementById("gold").innerHTML = playerState["Gold"];
		
		playerState["QuestTarget"] = 0;
		playerState["QuestCount"] = 0;
		playerState["QuestEnemy"] = "N/A";
		playerState["QuestWorth"] = 0;
		
		document.getElementById("count").innerHTML = playerState["QuestCount"];
		document.getElementById("target").innerHTML = playerState["QuestTarget"];
		document.getElementById("name").innerHTML = playerState["QuestEnemy"];
		
		localStorage.playerState = JSON.stringify(playerState);
		alert("Quest turned in!");
	}
	else {
		alert("You haven't defeated enough enemies to turn in your quest!");
	}
}