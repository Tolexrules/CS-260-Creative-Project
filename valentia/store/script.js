var playerState = JSON.parse(localStorage.playerState);
var dialogue = "Great. Another waste."
const url = "https://api.funtranslations.com/translate/dothraki.json?text=" + dialogue;

fetch(url)
  .then(function(response) {
      return response.json();
  }) .then(function(json) {
	  console.log(json);
	  document.getElementById("dwarf_text").innerHTML = '"' + json["contents"].translated + '"';
  });

var weapons = [];
let weaponBonuses = [6, 15, 30, 50];
if (playerState["Class"] == 0) {
	weapons[0] = "Fine Iron Dagger";
	weapons[1] = "Sharpened Steel Dagger";
	weapons[2] = "Enchanted Mythril Dagger";
	weapons[3] = "Widow's Lament";
}
else if (playerState["Class"] == 1) {
	weapons[0] = "Apprentice's Wand";
	weapons[1] = "Wizard's Staff";
	weapons[2] = "Archmagus's Tome";
	weapons[3] = "Grimoire of Destruction";
}
else {
	weapons[0] = "Iron Axe";
	weapons[1] = "Steel Halberd";
	weapons[2] = "Enchanted Mythril Spear";
	weapons[3] = "Caliburn";
}

document.getElementById("weapon_one").innerHTML = weapons[0];
document.getElementById("weapon_two").innerHTML = weapons[1];
document.getElementById("weapon_three").innerHTML = weapons[2];
document.getElementById("weapon_four").innerHTML = weapons[3];

if (playerState["WeaponName"] != "") {
	document.getElementById("current").innerHTML = 	playerState["WeaponName"];
}
else {
	document.getElementById("sell").style.visibility = "hidden";
}

function purchase(index, value) {
	if (playerState["Gold"] >= value) {
		playerState["Gold"] -= value;
		playerState["WeaponName"] = weapons[index];
		playerState["Attack"] -=  playerState["WeaponBonus"];
		playerState["WeaponValue"] = value / 5;
		
		playerState["WeaponBonus"] =  weaponBonuses[index];
		playerState["Attack"] += weaponBonuses[index];
		localStorage.playerState = JSON.stringify(playerState);
		
		document.getElementById("gold").innerHTML = playerState["Gold"];
		document.getElementById("attack").innerHTML = playerState["Attack"];
		document.getElementById("current").innerHTML = 	playerState["WeaponName"];
		document.getElementById("sell").style.visibility = "visible";
		alert("Purchased " + weapons[index]);
	}
	else {
		alert("You don't have enough gold!");
	}
}

function sell() {
	var prevName = playerState["WeaponName"];
	playerState["Gold"] += playerState["WeaponValue"];
	playerState["WeaponName"] = "";
	playerState["Attack"] -=  playerState["WeaponBonus"];
	playerState["WeaponBonus"] =  0;
	localStorage.playerState = JSON.stringify(playerState);
	
	document.getElementById("gold").innerHTML = playerState["Gold"];
	document.getElementById("attack").innerHTML = playerState["Attack"];
	document.getElementById("current").innerHTML = 	playerState["WeaponName"];
	document.getElementById("sell").style.visibility = "hidden";
	
	alert("Sold " + prevName);
}