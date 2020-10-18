var playerState = JSON.parse(localStorage.playerState);

function rogueClick() {
	playerState["Class"] = 0;
	playerState["ClassName"] = "Rogue";
	localStorage.playerState = JSON.stringify(playerState);
	
	window.location.href = "../classes/rogue_class.html";
}

function mageClick() {
	playerState["Class"] = 1;
	playerState["ClassName"] = "Mage";
	localStorage.playerState = JSON.stringify(playerState);
	
	window.location.href = "../classes/mage_class.html";
}

function warriorClick() {
	playerState["Class"] = 2;
	playerState["ClassName"] = "Warrior";
	localStorage.playerState = JSON.stringify(playerState);
	
	window.location.href = "../classes/warrior_class.html";
}