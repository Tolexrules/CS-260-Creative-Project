if (! localStorage.playerState) {
	var playerState = {};
}
else {
	var playerState = JSON.parse(localStorage.playerState);
}

// Resetting player state
playerState["Race"] = -1;
playerState["RaceName"] = "";
playerState["Class"] = -1;
playerState["ClassName"] = "";
playerState["Level"] = 1;
playerState["Exp"] = 0;
playerState["Perk1"] = -1;
playerState["Perk2"] = -1;
playerState["Perk3"] = -1;
playerState["Perk4"] = -1;
playerState["Attack"] = 1;
playerState["Defense"] = 1;
playerState["Health"] = 10;
playerState["MaxHealth"] = 10;
playerState["Gold"] = 100;
playerState["WeaponName"] = "";
playerState["WeaponBonus"] = 0;
playerState["WeaponWorth"] = 0;
playerState["ArmorName"] = "";
playerState["ArmorBonus"] = 0;
playerState["ArmorWorth"] = 0;
playerState["QuestTarget"] = 0;
playerState["QuestCount"] = 0;
playerState["QuestEnemy"] = "N/A";
playerState["QuestWorth"] = 0;

var url = "/../classes/classes.html"

function humanClick() {
	playerState["Race"] = 0;
	playerState["RaceName"] = "Human";
	playerState["Attack"] += 1;
	localStorage.playerState = JSON.stringify(playerState);
	
	window.location.href = url;
}

function elfClick() {
	playerState["Race"] = 1;
	playerState["RaceName"] = "Elf";
	playerState["Health"] += 10;
	playerState["MaxHealth"] += 10;
	localStorage.playerState = JSON.stringify(playerState);
	
	window.location.href = url;
}

function dwarfClick() {
	playerState["Race"] = 2;
	playerState["RaceName"] = "Dwarf";
	playerState["Defense"] += 1;
	localStorage.playerState = JSON.stringify(playerState);
	
	window.location.href = url;
}